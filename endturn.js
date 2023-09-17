// Author: Chris Richmond
// Last Modified: 2023-09-17
// Description: This script will end the turn of the current combatant if it is controllable by the current user.

// Get the current user
const user = game.user;

// Check if a combat encounter is active
if (game.combat) {
    // Get the current combatant (actor)
    const currentCombatant = game.combat.combatant;
    
    // Check if there is a current combatant and if it is controllable by the current user
    if (currentCombatant && currentCombatant.actor.isOwner) {
        // The current actor is controllable by the user
        console.log(`${currentCombatant.actor.name} is controllable by ${user.name}.`);
        game.combats.active.nextTurn();
    } else {
        // The current actor is not controllable by the user
        console.log(`${currentCombatant.actor.name} is not controllable by ${user.name}.`);
    }
} else {
    // No active combat encounter
    console.log("No active combat encounter.");
}