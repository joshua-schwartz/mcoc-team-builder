import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// const mtbApi = axios.create({
// 	baseURL: ''
// })

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		champsList: [{
			id: 1,
			name: "Sabretooth",
			class: "mutant",
			tags: ["offensive: raw damage", "mercenary"],
			size: "l",
			offensiveTier: 1,
			defensiveTier: 2,
			buffs: ["fury"],
			debuffs: ["bleed"],
			passiveBuffs: ["fury"],
			passiveDebuffs: [],
			damageTypes: {
				bleed: true,
				poison: false,
				shock: false,
				incinerate: false,
				coldsnap: false,
				degeneration: false,
				passive: false
			},
			resistances: [],
			immunities: ["coldsnap", "frostbite"],
			abilities: {
				canRemoveBuffs: false,
				canCounterDebuffs: false,
				canCounterHealing: false,
				canCounterEvade: false,
				canBreakArmor: false,
				canCounterPowerGain: false,
				canCounterAutoBlock: false,
				canCounterDamageResistance: false,
				canCounterUnblockable: false,
				canCounterUnstoppable: false,
				canCounterInvisibility: false,
				canCounterInvertedControls: false,
				canCheatDeath: false,
				canSurviveSP3: false,
				canReduceOffensiveAbilityAccuracy: false,
				canReduceDefensiveAbilityAccuracy: false,
				canAvoidCrits: false,
				hasHealing: false,
				hasPowerGain: false,
				hasAutoBlock: false,
				hasInvisibility: false,
				hasUnblockable: false,
				hasUnstoppable: false,
				hasNonContactAttacks: false,
				hasOnlyPhysicalAttacks: true,
				hasOnlyEnergyAttacks: false,
				hasIncreasedBlock: false
			},
			signatureAbility: {
				championChanges: {
					abilities: {
						canCounterAbilityAccuracyReduction: true,
						hasHealing: true
					},
					passiveBuffs: ["regeneration"]
				},
				isNeeded: false,
				isWorthClassGem: false,
				isWorthGenericGem: false
			},
			synergies: [{
					title: "Untamed Force",
					text: "20% chance for his low-kick first Medium Attack to be Unblockable. Additionally, if the opponent activates an unstoppable effect as a result of this attack, it expires instantly.",
					champions: ["Old Man Logan"],
					championChanges: {
						abilities: {
							canCounterUnstoppable: true,
							hasUnblockable: true
						}
					}
				},
				{
					title: "Decimation",
					text: "Starts the fight with a Fury Buff against Mutant Champions, granting +15% Attack Rating.",
					champions: ["Scarlet Witch", "Magneto", "Magneto (Marvel Now)"],
					championChanges: {}
				},
				{
					title: "No Mercy",
					text: "Inflicting a Debuff reduces the opponent's Ability Accuracy by 100% for 0.7 seconds.",
					champions: ["Black Panther", "Black Panther (Civil War)", "Killmonger"],
					championChanges: {
						abilities: {
							canReduceOffensiveAbilityAccuracy: true,
							canReduceDefensiveAbilityAccuracy: true
						}
					}
				},
				{
					title: "Nemesis",
					text: "All Champions gain +6% Attack",
					champions: ["Wolverine"],
					championChanges: {}
				}
			]
		}],
		filteredChamps: []
	},
	mutations: {
		champsList(state, payload) {
			state.champsList = payload
		}
	},
	actions: {
		fetchChampsList({
			commit
		}) {
			commit('champsList', true)
		}
	}
})