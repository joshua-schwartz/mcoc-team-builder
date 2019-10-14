# mcoc-team-builder

A Vue application to help _Marvel Contest of Champions_ players build teams to overcome unique challenges within the game.

We have attempted to structure the champion properties in a way that accounts for the most detailed scenarios you might encounter, while also keeping things flexible to minimize the need for restructuring as new champions and abilities are released. That said, some champion abilities are so unique that it doesn't make sense to create a filter specifically for them. You will still need to get to know the champions in the game to get the best use out of this tool. For instance, Ronan's ability to stun lock enemies with a large number of buffs, or Emma Frost's Concussion immunity when in Diamond Form. It just doesn't make sense to create unique filters for each champion's one-off abilities.

This game is incredibly complex, and any attempt to create a one-size-fits-most solution will have exceptions to every rule. If you have a constructive suggestion, we'd love to hear it, but please know that we are fully aware that some champions exist in a gray area with some of these filters and we have to make judgement calls as best we can. We try to err on the side of including a champion for consideration, and if you disagree with how we come down on a certain ability, that just means you're very knowledgeable and we trust you can figure out the best way to proceed for your roster!

So, with that disclaimer here's a rundown of what each property is meant to represent:

- Offensive Tier:
  - To keep champion tiers simple and concise, we are using a three-tier system. A champion's Offensive or Defensive Tier can change based on whether they are awakened or not. For example, Spider-Man Classic increases in Defensive Tier, but decreases in Offensive Tier because the evade from his signature ability cannot be controlled when using him as an attacker like Spider-Gwen's can.
  - Tier 1 is for champions who absolutely deserved to be ranked up because of their dominance in a specific category, high damage, and/or broad utility. Ghost is T1.
  - Tier 2 is for champions who are second-best at what they do, or have a limited number of matchups where they are an ideal solution. Daredevil Classic is T2.
  - Tier 3 is for champions who aren't the best option for anything and should not be ranked up. Keep your fingers crossed for a buff!
- Defensive Tier:

  - Tier 1 is for great defenders who will punish attackers on many nodes. Good boss options. Korg is T1 even unawakened because of his Unstoppable and Unblockable attacks and damage reductions.
  - Tier 2 is for defenders who get occasional kills when deployed creatively. Warmachine is T2 because of his SP1 which cannot be fully evaded on Unblockable SP1 nodes.
  - Tier 3 is for champions who will get you introuble with your alliance if you place them on defense. Brett, I swear we will boot you if you place your unawakened Unstoppable Colossus one more time!

- Abilities:

  - Can Remove Buffs:
    - Includes abilities like Nullify, Stagger, etc. that remove or prevent buffs on the opponent.
  - Can Counter Debuffs:
    - Includes abilities like Tenacity, Shrug Off, Purify, as well as Rogue and Karnak's duration reduction.
  - Can Counter Healing:
    - Includes abilities like Heal Block, Poison, and Petrify that reduce, prevent, or reverse regeneration on the opponent.
  - Can Counter Evade:
    - Includes abilities like Slow, True Accuracy, Coldsnap, Iron Man Infinity War's Repulsor Blasts, Night Thrasher's Skateboard hits, and Venom's Klyntar Buff that reduce or prevent the opponent's ability to evade.
  - Can Break Armor:
    - Includes any ability that counts as an Armor Break for the purpose of opponent abilities like switching Emma Frost out of Diamond Form.
  - Can Counter Power Gain:
    - Includes abilities like Power Lock, Power Drain, Petrify, and Dormammu's medium attacks or Morningstar's signature ability that can reduce, prevent, drain, or reverse opponents' power gain.
  - Can Counter Auto Block:
    - Includes abilities like True Accuracy, True Strike that can prevent an opponent from triggering Auto Block. Does not include abilities like Nick Fury's that simply prevent Auto Block from stunning the attacker, because the block can still trigger and allow the opponent to interrupt with a special.
  - Can Counter Damage Resistance:
    - Includes abilities like True Damage, True Strike, and Direct Damage that allow a champion to ignore damage reduction on the opponent from Physical or Energy Resistance and Armor. Does not include counters like Bleed that sidestep the resistance.
  - Can Counter Unblockable:
    - Includes abilities like Spider Gwen's evade and Mordo's block that allow a champion to deal with Unblockable attacks.
  - Can Counter Unstoppable:
    - Includes abilities like Slow and Sabretooth's synergy with Old Man Logan that allow a champion to mitigate Unstoppable effects on the opponent. Does not require that an ability would remove the Unstoppable effect, just directly counter it in some way.
  - Can Counter Invisibility:
    - Includes abilities like Daredevil's natural (unlisted) ability and Nick Fury's Tactical Charges that allow a champion to ignore Invisibility.
  - Can Counter Inverted Controls:
    - Includes abilities like Mister Sinister's natural immunity to all inverted controls and Magneto or Juggernaut's immunity to inverted controls from Emma Frost.
  - Can Cheat Death:
    - Includes abilities like Mephisto's Soul Charges, and Hela's signature ability that temorarily prevent a champion from being KO'd by any means. This must prevent death from attack damage, damage over time effects, and specials. Nothing can prevent death from nodes like Aspect of Death, so it isn't necessary to prevent node effects for this to be true.
  - Can Survive SP3:
    - Includes abilities like Gwenpool and Luke Cage's signature abilities that can save them from an SP3 but can't prevent death from other sources. All champions who can Cheat Death can also Survive SP3, but the opposite is not always true.
  - Can Reduce Offensive Ability Accuracy:
    - Includes abilities like Ant Man's glancing effect that can prevent offensive abilities from triggering.
  - Can Reduce Defensive Ability Accuracy:
    - Includes abilities like Black Widow's signature that decrease the opponent's ability to trigger defensive abilities.
  - Can Counter Ability Accuracy Reduction:
    - Includes abilities like Mephisto's signature ability that prevents the champion's ability accuracy from being modified in some manner.
  - Can Avoid Crits:
    - Includes abilities like Ghost, Crossbones, and Guillotine 2099 who can avoid landing critical hits.
  - Has Healing:
    - Indicates a champion with abilities that regain health.
  - Has Power Gain:
    - Indicates a champion with abilities that generate power in some way beside or beyond the standard amount of power gained from striking and being struck.
  - Has Auto Block:
    - Indicates a champion with abilities that trigger Auto Block, regardless of whether the opponent is stunned as a result.
  - Has Invisibility:
    - Indicates a champion with abilities that can cause the opponent's attacks to Miss.
  - Has Only Physical Attacks:
    - Indicates that all of a champion's attacks deal Physical or Direct damage. No Energy attacks.
  - Has Only Energy Attacks:
    - Indicates that all of a champion's attacks deal Energy or Direct damage. No Physical attacks.
  - Has Increased Block
    - Indicates a champion with abilities that increase block proficiency or perfect block chance.

- Buffs, Debuffs, Passive Buffs, and Passive Debuffs:

  - These are pretty self-explanatory. Just a list of the buffs and debuffs a champion has available. Does not include "stacks," "counters," or "timers."

- Damage Types:

  - Bleed, Poison, Shock, Incinerate, Coldsnap, and Degeneration are obvious. "Passive" refers to any passive or ambient damage type where an actual debuff is not present on the opponent. For example, this includes Aura of Incineration and Frostbite, as well as Void's damage. In the case of Void the debuffs themselves aren't dealing any damage, he is passively dealing damage while the debuffs are present.

- Damage Immunities:
  - "Can Reduce Misc" indicates a champion with abilities that reduce or prevent non-standard damage types.
