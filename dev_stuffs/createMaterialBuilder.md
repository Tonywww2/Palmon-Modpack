## 一、材料定义（使用 `createMaterialBuilder`）

1. **注释风格**

   * 所有注释均使用 `// 注释内容`，**禁止**使用 `/** … */`。

2. **初始化 Builder**

   ```js
   createMaterialBuilder('<id>')
   ```

   * `<id>` 必须去掉命名空间前缀，仅保留简短标识。

3. **基础属性**

   * `.setCraftable(false)`：默认 `false`，用户可后续调整。
   * `.setSortOrder(n)`：从**本阶段起始值**开始，每个材料按列序 **递增 1**。
   * `.setTier(t)`：

     * **阶段4** 一律 `t = 3`；
     * **阶段5** 一律 `t = 4`；
     * 其他阶段请按 Excel “阶段”列自行对应。

4. **开启输出**

   * 必须先调用 `.addStats()` 才能输出任何部件属性 JSON。
   * 必须先调用 `.addTraits()` 才能输出对应 `traits` JSON；

     * 但 **凡材料名后带 “\*”**，**不调用** `.addTraits()` 及所有 Trait 相关方法。

5. **Head（工具头部）属性**

   ```js
   .addHead(durability, melee_attack, mining_speed, mining_tier)
   ```

   * **durability（db）**：直接取自对应列“耐久+”行。
   * **melee\_attack**：对应列“近战伤害+”行。
   * **mining\_speed**：对应列“挖掘速度+”行。
   * **mining\_tier**：对应列“挖掘等级”行（汉字），**映射**为：

     * “钻石” → `'minecraft:diamond'`
     * “下界合金” → `'minecraft:netherite'`

6. **Handle（手柄）属性**

   ```js
   .addHandle(durability, melee_damage, melee_speed, mining_speed)
   ```

   * 四个数值严格按表格“手柄”部分：

     1. `row 15`：“耐久度%” → durability
     2. `row 16`：“近战伤害%” → melee\_damage
     3. `row 17`：“近战速度%” → melee\_speed
     4. `row 18`：“挖掘速度%” → mining\_speed

7. **Plating（防御部件）属性**

   * **Helmet（头盔）**

     ```js
     .addPlatingHelmet(armor, durability, knockback_resistance, toughness)
     ```

     1. `armor` 取自“头盔 / 护甲值+”（`row 20`）。
     2. `durability = db * 0.7`，其中 `db` 为“耐久+”（`row 8`）行值。
     3. `knockback_resistance` 取自“头盔 / 击退抗性+”（`row 23`）；若为空，默认 `0.05`。
     4. `toughness` 取自“头盔 / 韧性+”（`row 22`）。

   * **Chestplate（胸甲）**

     ```js
     .addPlatingChestplate(armor, durability, knockback_resistance, toughness)
     ```

     1. `armor` 取自“胸甲 / 护甲值+”（`row 25`）。
     2. `durability = db * 1.0`。
     3. `knockback_resistance` 取自“胸甲 / 击退抗性+”（`row 28`）；若为空，默认 `0.05`。
     4. `toughness` 取自“胸甲 / 韧性+”（`row 27`）。

   * **Leggings（护腿）**

     ```js
     .addPlatingLeggings(armor, durability, knockback_resistance, toughness)
     ```

     1. `armor` 取自“护腿 / 护甲值+”（`row 30`）。
     2. `durability = db * 0.9`。
     3. `knockback_resistance` 取自“护腿 / 击退抗性+”（`row 33`）；若为空，默认 `0.05`。
     4. `toughness` 取自“护腿 / 韧性+”（`row 32`）。

   * **Boots（靴子）**

     ```js
     .addPlatingBoots(armor, durability, knockback_resistance, toughness)
     ```

     1. `armor` 取自“靴子 / 护甲值+”（`row 35`）。
     2. `durability = db * 0.6`。
     3. `knockback_resistance` 取自“靴子 / 击退抗性+”（`row 38`）；若为空，默认 `0.05`。
     4. `toughness` 取自“靴子 / 韧性+”（`row 37`）。

   * **Shield（盾牌）**

     ```js
     .addPlatingShield(durability, knockback_resistance, toughness)
     ```

     1. `durability = db * 0.9`。
     2. `knockback_resistance` 取自“盾牌 / 击退抗性+”（`row 42`）；若为空，默认 `0.05`。
     3. `toughness` 取自“盾牌 / 韧性+”（`row 41`）。

     > **注意**：盾牌不需要填写 `armor` 参数，仅需 `durability`、`knockback_resistance`、`toughness`。

8. **附加部件启用情况**

   * **绑定节（Binding）**：若 `row 64` 为 `1`，则调用 `.addBinding()`；否则不调用。
   * **锁链基底（Maille）**：若 `row 65` 为 `1`，则调用 `.addMaille()`；否则不调用。
   * **盾牌基底（ShieldCore）**：若 `row 66` 为 `1`，则调用 `.addShieldCore()`；否则不调用。
   * **弓弦（Bowstring）**：若 `row 67` 为 `1`，则调用 `.addBowstring()`；否则不调用。

9. **默认词条（仅限无 “\*” 的材料）**

   ```js
   .addTraits()
   .addDefaultTrait(1, 'tconstruct:magnetic')
   .addPerStatTrait('tconstruct:armor', 1, 'tconstruct:projectile_protection')
   ```

   * **注意**：带 “\*” 的材料，不调用 `.addTraits()`、`.addDefaultTrait()`、`.addPerStatTrait()`。

10. **生成 JSON 输出**

    ```js
    .build();
    ```

    * 会自动写入：

      1. `definition/<id>.json`
      2. 若已调用 `.addStats()`，则写入 `stats/<id>.json`
      3. 若已调用 `.addTraits()`，则写入 `traits/<id>.json`

---

## 二、工艺注册（使用 `registerMaterialProcess`）

1. **统一接口格式**

   ```js
   registerMaterialProcess({
     fluid:       null,                  // 本阶段默认留空
     material:    'tconstruct:<id>',     // 与 createMaterialBuilder 保持一致
     ingot:       '<ingot-id>',          // 原始锭物品 ID；以 “#” 开头为 tag
     leftover:    '<leftover-item>'?,     // 可选项，可省略
     units:       90,                    // **固定** 90 毫桶
     temperature: temp,                  // 沿用脚本中定义变量
     time:        time,                  // 沿用脚本中定义变量
     meltIngot:   <boolean>              // 若需要“锭→流体”熔炼，则设为 true；带 “*” 的材料可省略
   });
   ```

2. **映射规则**

   * `<id>`：去掉命名空间前缀，仅保留简短标识（例如 `'#forge:ingots/ostrum'` → `'ostrum'`）。
   * `<ingot-id>`：保留 Excel “ID” 行（`row 3`）对应的原始值。
   * `units`：固定 `90`。
   * `temperature`、`time`：沿用脚本顶部定义。
   * `meltIngot`：若需要“锭→流体”熔炼，则设为 `true`；否则可省略（尤其针对带 “\*” 的材料）。

3. **生成逻辑**

   1. 若 `meltIngot: true` → 调用 `melting(ingot, 1)`，生成“锭→流体”配方。
   2. 始终生成“锭→部件”合成配方。
   3. 若 `fluid` 非空 → 生成“流体→部件”配方。

---

## 三、通用参数快速对照

* **`db`（耐久+）**：取自 Excel “耐久+” 行。
* **`sortOrder`**：

  * 阶段4 → 起始值（如 100），每列 +1。
  * 阶段5 → 起始值（如 200），每列 +1。
  * 其他阶段 → 参照 Excel “阶段”列自行设定。
* **`tier`**：

  * 阶段4 → `3`
  * 阶段5 → `4`
  * 其他阶段 → 对应 Excel “阶段”列。
* **`setCraftable(false)`**：全部默认 `false`。
* **`fluid`**：统一设为 `null`，用户后续自行调整。
* **`temp`、`time`**：沿用脚本顶部定义变量，不做修改。
* **`units`**：统一 `90`。
* **带 “\*” 的材料**：

  1. **不调用** `.addTraits()`、`.addDefaultTrait()`、`.addPerStatTrait()`。
  2. 在 `registerMaterialProcess` 时可省略 `meltIngot`。
* **击退抗性**：

  * 表格有值时使用该值（如 `0.1` 或 `0.15`）。
  * 若对应单元为空，则默认 `0.05`。
* **挖掘等级映射**：

  * Excel “挖掘等级” = “钻石” → `'minecraft:diamond'`
  * Excel “挖掘等级” = “下界合金” → `'minecraft:netherite'`

> **最最重要**：
> **每个数值（`db`、近战伤害、挖掘速度、手柄四参数、护甲值、韧性、击退抗性）都必须从对应 Excel 行列精确读取，绝不可“凭感觉”或“随意猜测”。**

---

## 四、示例（以“阶段4”紫金\* & 塑料\* 为例）

```js
// Stage 4 示例：紫金*（column 3） & 塑料*（column 4）
// 假设 sortOrder 从 100 开始

// —— 紫金* ——  
db = 1100;  // 取自 row 8, col 3
let ostrum = createMaterialBuilder('ostrum')
    .setCraftable(false)                      // 默认 false
    .setSortOrder(sortOrder++)                // 100
    .setTier(3)                               // 阶段 4 → tier = 3
    .addStats()
    .addHead(db, 72.0, 12.0, 'minecraft:netherite')    // row7, row8, row9, row10
    .addHandle(0.1, 0.6, 0.1, 0.35)                      // row15, row16, row17, row18
    .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)         // row20, row21, row23, row22
    .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)    // row25, row26, row28, row27
    .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)      // row30, row31, row33, row32
    .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)          // row35, row36, row38, row37
    .addPlatingShield(1100 * 0.9, 0.1, 3.0)              // row40, row42, row41
    .addBinding()                                        // row64 = 1
    .addMaille()                                         // row65 = 1
    .addShieldCore()                                     // row66 = 1
    // 带“*” → 不调用 addTraits()/addDefaultTrait()/addPerStatTrait()
    .build();

registerMaterialProcess({
    fluid:       null,
    material:    'tconstruct:ostrum',
    ingot:       '#forge:ingots/ostrum',  // row 3, col 3
    units:       90, 
    temperature: temp,
    time:        time
    // “*”材料，无需 meltIngot
});

// —— 塑料* ——  
db = 550;   // row 8, col 4
let plastic = createMaterialBuilder('plastic')
    .setCraftable(false)
    .setSortOrder(sortOrder++)                // 101
    .setTier(3)
    .addStats()
    .addHead(db, 54.0, 10.0, 'minecraft:diamond')    // row7, row8, row9, row10
    .addHandle(0.4, 0.3, 0.4, 0.5)                    // row15, row16, row17, row18
    .addPlatingHelmet(9.0, db * 0.7, 0.1, 3.0)       // row20, row21, row23, row22
    .addPlatingChestplate(14.0, db * 1.0, 0.1, 3.0)  // row25, row26, row28, row27
    .addPlatingLeggings(12.0, db * 0.9, 0.1, 3.0)    // row30, row31, row33, row32
    .addPlatingBoots(7.0, db * 0.6, 0.1, 3.0)        // row35, row36, row38, row37
    .addPlatingShield(550 * 0.9, 0.1, 3.0)            // row40, row42, row41
    .addBinding()                                     // row64 = 1
    .addMaille()                                      // row65 = 1
    // 带“*” → 无 ShieldCore、Bowstring、任何 Traits
    .build();

registerMaterialProcess({
    fluid:       null,
    material:    'tconstruct:plastic',
    ingot:       'tinkers_advanced:plastic', // row 3, col 4
    units:       90,
    temperature: temp,
    time:        time
    // 无 meltIngot
});
```

> **注意**：
>
> 1. 若对应表格 **某行** 本应有数值，却为空，需即时向用户确认或按默认值（如“击退抗性 = 0.05”）替代，绝不可“随意填入”。
> 2. 如果未来 Excel 结构发生变更，务必同步更新“行索引/列索引 对应关系”，否则脚本会直接出错。

---

至此，已将“阶段4”和“阶段5”所有映射规则完整整合为 Markdown 规范，确保后续生成的代码与用户表格数据**百分之百一致**，无任何偏差。