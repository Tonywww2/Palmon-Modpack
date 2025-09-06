// priority: 0

console.info('Hello, World! From KJS')

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('reinforced_sheet').displayName('Reinforced Sheet').fireResistant()
	event.create('beryllium_bronze_alloy').displayName('Reinforced Sheet').fireResistant().rarity('rare').glow(true)

	event.create('baby_proofing').displayName('§m§eBaby Proofing').fireResistant().rarity('rare').glow(true)
	event.create('cognitio').displayName('§m§dCognitio').fireResistant().rarity('epic').glow(true)

	event.create('virtual_gold_ingot').displayName('§mVirtual Gold Ingot').fireResistant().rarity('rare')

	event.create('ancient_netherite').displayName('§mAncient Netherite').fireResistant().rarity('rare')

	event.create('present_alloy').displayName('§m§dPresent Alloy Ingot').fireResistant().rarity('rare')
	event.create('stable_desh_ingot').displayName('§m§dStable Desh Ingot').fireResistant().rarity('rare')

	event.create('elite_mechanism').displayName('§m§dElite Mechanism').fireResistant().rarity('rare')
	event.create('elite_mechanism_plus').displayName('§m§dElite Mechanism Plus').fireResistant().rarity('rare')
	event.create('elite_mechanism_final').displayName('§m§dElite Mechanism Final').fireResistant().rarity('rare')

	event.create('hallowed_soul_steel_ingot').displayName('§m§dHallowed Soul Steel Ingot').fireResistant().rarity('rare')
	event.create('ember_profile').displayName('§m§dEmber Profile').fireResistant().rarity('rare')
	event.create('spirit_coil').displayName('§m§dSpirit Coil').fireResistant().rarity('rare')

	event.create('essence_computation_frame').displayName('§m§eEssence Computation Frame').fireResistant().rarity('rare')
	event.create('basic_machine_frame').displayName('[Basic Machine Frame]').fireResistant()
	event.create('advanced_machine_frame').displayName('[Advanced Machine Frame]').fireResistant().rarity('rare')
	event.create('industrial_machine_frame').displayName('[Industrial Machine Frame]').fireResistant().rarity('epic')

	event.create('marid_binded_gem').displayName('Marid Binded Gem').fireResistant().rarity('epic')
	event.create('superconducting_coil_type_1').displayName('Superconducting Coil Type I').fireResistant()
	event.create('superconducting_coil_type_2').displayName('Superconducting Coil Type II').fireResistant().rarity('rare')
	event.create('superconducting_coil_type_3').displayName('Superconducting Coil Type III').fireResistant().rarity('epic')

	event.create('charged_source_gem').displayName('Charged Source Gem').fireResistant()
	event.create('unify_essence').displayName('Unify Essence').fireResistant().rarity('rare')

	event.create('intelligent_draconium_ingot').displayName('Intelligent Draconium Ingot').fireResistant().rarity('epic')

	event.create('end_steel').displayName('§5End Steel').fireResistant().rarity('rare')
	event.create('collapse_prediction').displayName('§5Collapse Prediction').fireResistant().rarity('rare')

	event.create('otherside_mixture').displayName('§5Otherside Mixture').fireResistant().rarity('rare')
	event.create('light_of_inlixaland').displayName('§eLight of Inlixaland').fireResistant().rarity('epic')

	event.create('helium_3_crystal').displayName('§5Helium-3 Crystal').fireResistant().rarity('rare')
	event.create('helium_3_crystal_infinity').displayName('§lHelium-3 Crystal ∞').fireResistant().rarity('epic')

	event.create('iridescent').displayName('§lIridescent').fireResistant().rarity('rare')
	event.create('alfheim_iridescent').displayName('§lAlfheim Iridescent').fireResistant().rarity('epic')

	event.create('basepoint_alloy').displayName('§lBasepoint Alloy').fireResistant().rarity('epic')
	event.create('yin_yang_steel').displayName('§lYin & Yang Steel Ingot').fireResistant().rarity('epic')

	event.create('ultimate_berry').displayName('§lUltimate Berry').fireResistant().rarity('epic')

	let anchorgleam = event.create('anchorgleam')
	anchorgleam.displayName('§aAnchorgleam™').fireResistant().rarity('epic')
		.food(food => {
			food.hunger(1)
			food.saturation(0.1)
			food.effect("minecraft:haste", 60, 0, 1)
			food.alwaysEdible()
			food.fastToEat()
		})

	event.create('alpha_dust').displayName('§aAlpha Dust').fireResistant()
	event.create('beta_dust').displayName('§bBeta Dust').fireResistant().rarity('rare')
	event.create('gamma_dust').displayName('§cGamma Dust').fireResistant().rarity('rare')
	event.create('delta_dust').displayName('§dDelta Dust').fireResistant().rarity('epic')
	event.create('epsilon_dust').displayName('§eEpsilon Dust').fireResistant().rarity('epic').glow(true)

	event.create('alpha_framework').displayName('§aAlpha Framework').fireResistant()
	event.create('beta_framework').displayName('§bBeta Framework').fireResistant().rarity('rare')
	event.create('gamma_framework').displayName('§cGamma Framework').fireResistant().rarity('rare')
	event.create('delta_framework').displayName('§dDelta Framework').fireResistant().rarity('epic')
	event.create('epsilon_framework').displayName('§eEpsilon Framework').fireResistant().rarity('epic').glow(true)

	event.create('delivery_coordinate_gamma').displayName('§cDelivery Coordinate Gamma').maxStackSize(1).fireResistant().rarity('epic').glow(true)
	event.create('delivery_coordinate_epsilon').displayName('§eDelivery Coordinate Epsilon').maxStackSize(1).fireResistant().rarity('epic').glow(true)
	event.create('delivery_coordinate_ultimate').displayName('§fDelivery Coordinate Ultimate').maxStackSize(1).fireResistant().rarity('epic').glow(true)

	event.create('anchor_shard').displayName('§9Anchor Shard').fireResistant().rarity('epic').glow(true)

	const voucherTexture = 'kubejs:item/voucher'
	event.create('voucher_1_0').displayName('Voucher S01T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_1').displayName('Voucher S01T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_2').displayName('Voucher S01T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_3').displayName('Voucher S01T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_2_0').displayName('Voucher S02T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_1').displayName('Voucher S02T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_2').displayName('Voucher S02T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_3').displayName('Voucher S02T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_3_0').displayName('Voucher S03T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_1').displayName('Voucher S03T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_2').displayName('Voucher S03T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_3').displayName('Voucher S03T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_4').displayName('Voucher S03T04').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_4_0').displayName('Voucher S04T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_1').displayName('Voucher S04T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_2').displayName('Voucher S04T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_3').displayName('Voucher S04T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_4').displayName('Voucher S04T04').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_5').displayName('Voucher S04T05').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_5_0').displayName('Voucher S05T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_5_1').displayName('Voucher S05T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_5_2').displayName('Voucher S05T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

})

StartupEvents.registry('block', event => {
	event.create('ultra_space_resourse_point').displayName('§eUltra Space Resourse Point').notSolid().tagBlock('minecraft:mineable/pickaxe')

})

StartupEvents.registry('fluid', event => {

	event.create('melted_refined_copper')
		.displayName('Melted Refined Copper')
		.bucketColor(0xDA8A67)
		.thickTexture(0xDA8A67)
		.temperature(1400)

	event.create('melted_refined_steel')
		.displayName('Melted Refined Steel')
		.bucketColor(0x8A2BE2)
		.thickTexture(0x8A2BE2)
		.temperature(1400)

	event.create('melted_refined_m_steel')
		.displayName('Melted Refined M Steel')
		.bucketColor(0x708090)
		.thickTexture(0x708090)
		.temperature(1400)

	event.create('melted_gaia')
		.displayName('Melted Gaia')
		.bucketColor(0xFFFF55)
		.thickTexture(0xFFFF55)
		.temperature(1400)

	event.create('melted_witherite')
		.displayName('Melted Witherite')
		.bucketColor(0x8B0000)
		.thickTexture(0x8B0000)
		.temperature(1400)

	event.create('melted_cursium')
		.displayName('Melted Cursium')
		.bucketColor(0x00A3A3)
		.thickTexture(0x00A3A3)
		.temperature(1400)

	event.create('melted_beryllium_bronze_alloy')
		.displayName('§eMelted Beryllium Bronze Alloy')
		.bucketColor(0xD8BFD8)
		.thickTexture(0xD8BFD8)

	// Fuels
	event.create('hybrid_fuel')
		.displayName('§eHybrid Fuel')
		.bucketColor(0xD8D8BF)
		.thickTexture(0xD8D8BF)
		.temperature(300)

	event.create('melted_voidarium')
		.displayName('Melted Voidarium')
		.bucketColor(0x800080)
		.thickTexture(0x800080)
		.temperature(1400)

	event.create('methane_helium_3_fuel')
		.displayName('Methane-Helium 3 Entropy Fuel')
		.bucketColor(0x800080)
		.thickTexture(0xFFC8FF)
		.temperature(1400)

	// TC Materials
	event.create('melted_andesite_alloy')
		.displayName('Melted Andesite Alloy')
		.bucketColor(0xdddddd)
		.thickTexture(0xa8a8a8)

	event.create('melted_virtual_gold')
		.displayName('Melted Virtual Gold')
		.bucketColor(0xdddddd)
		.thickTexture(0xe642b7)

	event.create('melted_ancient_netherite')
		.displayName('Melted Ancient Netherite')
		.bucketColor(0xdddddd)
		.thickTexture(0x860000)

	event.create('melted_terrasteel')
		.displayName('Melted Terrasteel')
		.bucketColor(0xdddddd)
		.thickTexture(0x00d71d)

	// s3
	event.create('melted_ash_steel')
		.displayName('Melted Ash Steel')
		.bucketColor(0xdddddd)
		.thickTexture(0x575757)

	event.create('melted_hallowed_gold')
		.displayName('Melted Hallowed Gold')
		.bucketColor(0xdddddd)
		.thickTexture(0xffe269)

	event.create('melted_present_alloy')
		.displayName('Melted Present Alloy')
		.bucketColor(0xdddddd)
		.thickTexture(0xc2f9ff)

	event.create('melted_stable_desh')
		.displayName('Melted Stable Desh')
		.bucketColor(0xdddddd)
		.thickTexture(0xffe3bb)

	event.create('melted_hallowed_soul_steel')
		.displayName('Melted Hallowed Soul Steel')
		.bucketColor(0xdddddd)
		.thickTexture(0xffe5b0)


	event.create('melted_elementium')
		.displayName('Melted Elementium')
		.bucketColor(0xdddddd)
		.thickTexture(0xffa2d0)

	event.create('melted_alfsteel')
		.displayName('Melted Alfsteel')
		.bucketColor(0xdddddd)
		.thickTexture(0xffb062)

	event.create('melted_ignitium')
		.displayName('Melted Ignitium')
		.bucketColor(0xFFA500)
		.thickTexture(0xFFA500)

	event.create('melted_end_steel')
		.displayName('Melted End Steel')
		.bucketColor(0xdddddd)
		.thickTexture(0xf3a9ff)

	event.create('melted_titanium')
		.displayName('Melted Titanium')
		.bucketColor(0xdddddd)
		.thickTexture(0xebebeb)

	event.create('melted_aether_ingot')
		.displayName('Melted Aether Ingot')
		.bucketColor(0xdddddd)
		.thickTexture(0x569ad8)

	event.create('melted_niobium_titanium')
		.displayName('Melted Niobium Titanium')
		.bucketColor(0xdddddd)
		.thickTexture(0xaf94a2)

	event.create('melted_titanium_tungsten')
		.displayName('Melted Titanium Tungsten')
		.bucketColor(0xdddddd)
		.thickTexture(0x98999f)

	event.create('melted_titanium_aluminum')
		.displayName('Melted Titanium Aluminum')
		.bucketColor(0xdddddd)
		.thickTexture(0xecf7ff)

	event.create('melted_basepoint_alloy')
		.displayName('Melted Basepoint Alloy')
		.bucketColor(0xdddddd)
		.thickTexture(0x796fff)

})
