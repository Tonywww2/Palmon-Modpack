ItemEvents.rightClicked('minecraft:command_block', event => {
    let id = "no_end"
    let buff = global.all_buffs[id]
    let unmet = buff.prerequisites.filter(req => !global.all_buffs[req]?.unlocked)
    let color = global.current_buffs.has(id) ?
        Color.LIGHT_PURPLE
        : (buff.unlocked ?
            Color.GREEN
            : (unmet.length ?
                Color.GRAY
                : Color.YELLOW)
        )

    event.player.tell(Text.translatable(`kubejs.eot.${id}_name`)
        .color(color)
        .click(Text.clickEventOf(
            new $ClickEvent(
                $ClickEventAction.SUGGEST_COMMAND,
                `/eot_activate ${id}`
            )
        ))
        .hover(getHover(buff)))

})