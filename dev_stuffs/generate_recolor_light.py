#!/usr/bin/env python3
"""
generate_recolor.py

用法: python3 generate_recolor.py <baseHex> <outputFileWithoutExt>
"""

import sys
import json


def pad_hex(c):
    return '{:02X}'.format(c)


def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    if len(hex_str) == 8:
        hex_str = hex_str[2:]
    if len(hex_str) != 6:
        raise ValueError('Invalid hex color: ' + hex_str)
    r = int(hex_str[0:2], 16)
    g = int(hex_str[2:4], 16)
    b = int(hex_str[4:6], 16)
    return r, g, b


def rgb_to_hsl(r, g, b):
    r /= 255.0; g /= 255.0; b /= 255.0
    max_c = max(r, g, b)
    min_c = min(r, g, b)
    l = (max_c + min_c) / 2
    if max_c == min_c:
        h = s = 0
    else:
        d = max_c - min_c
        s = d / (2 - max_c - min_c) if l > 0.5 else d / (max_c + min_c)
        if max_c == r:
            h = ((g - b) / d + (6 if g < b else 0)) / 6
        elif max_c == g:
            h = ((b - r) / d + 2) / 6
        else:
            h = ((r - g) / d + 4) / 6
    return h, s, l


def hsl_to_rgb(h, s, l):
    def hue2rgb(p, q, t):
        if t < 0: t += 1
        if t > 1: t -= 1
        if t < 1/6: return p + (q - p) * 6 * t
        if t < 1/2: return q
        if t < 2/3: return p + (q - p) * (2/3 - t) * 6
        return p
    if s == 0:
        v = int(round(l * 255))
        return v, v, v
    q = l * (1 + s) if l < 0.5 else l + s - l * s
    p = 2 * l - q
    r = int(round(hue2rgb(p, q, h + 1/3) * 255))
    g = int(round(hue2rgb(p, q, h) * 255))
    b = int(round(hue2rgb(p, q, h - 1/3) * 255))
    return r, g, b


def main():
    if len(sys.argv) != 3:
        print('Usage: python3 generate_recolor.py <baseHex> <outputFileWithoutExt>')
        sys.exit(1)
    base_hex = sys.argv[1]
    output_name = sys.argv[2]
    # 自动添加 .json 扩展名
    if not output_name.lower().endswith('.json'):
        output_file = output_name + '.json'
    else:
        output_file = output_name

    greys = [0, 63, 102, 140, 178, 216, 255]
    r, g, b = hex_to_rgb(base_hex)
    h, s, _ = rgb_to_hsl(r, g, b)

    palette = []
    for grey in greys:
        L = grey / 255.0
        rr, gg, bb = hsl_to_rgb(h, s, L)
        hex_color = 'FF' + pad_hex(rr) + pad_hex(gg) + pad_hex(bb)
        palette.append({'color': hex_color, 'grey': grey})

    supported_stats = [
        "tconstruct:head", "tconstruct:handle",
        "tconstruct:armor_plating", "tconstruct:plating_helmet",
        "tconstruct:plating_chestplate", "tconstruct:plating_leggings",
        "tconstruct:plating_boots", "tconstruct:plating_shield",
        "tconstruct:grip", "tconstruct:limb",
        "tconstruct:binding", "tconstruct:maille",
        "tconstruct:bowstring", "tconstruct:shield_core",
        "tconstruct:repair_kit"
    ]

    result = {
        'color': palette[2]['color'],
        'fallbacks': ['metal'],
        'generator': {
            'supported_stats': supported_stats,
            'transformer': {
                'type': 'tconstruct:recolor_sprite',
                'color_mapping': {
                    'type': 'tconstruct:grey_to_color',
                    'palette': palette
                }
            }
        }
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"Generated {output_file}")

if __name__ == '__main__':
    main()
