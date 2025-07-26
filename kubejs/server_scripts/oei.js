ServerEvents.highPriorityData(event => {
    event.addJson("oneenoughitem:replacements/example.json", [
        {
            "matchItems": [
                'techreborn:raw_silver',
                'embers:raw_silver',
                'occultism:raw_silver',
                'immersiveengineering:raw_silver',
                'nuclearcraft:silver_chunk'
            ],
            "resultItems": 'thermal:raw_silver'
        }
    ])
})