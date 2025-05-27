// Array of Monsters - Coding Question 2:

// A brave Knight "A" has an array of monsters to face, and will use a combination of might and magic to defeat as many as possible. In this challenge we'd like to know if the knight is successful at defeating them all, and if not, how many monsters are defeated.

// A can see the monsters and their order ahead of time.  Despite being evil monsters they will politely queue and challenge A in the current order.  Knowing this, A can plan what to do so that it is optimal.
// * The first monster will always be defeated by A's squires while A prepares for battle
// * For each other monster there are two possibilities :

// 1) If the current monster is weaker than the previous one (i.e. enemies[curr] < enemies[curr-1]), The enemy surrenders - what goblin would face someone who has just defeated a dragon?
// 2) If the current monster is stronger than the previous one (i.e. enemies[curr] > enemies[curr-1]), then A has two options :
// 2.1) Might!  A fights the monster taking damage (reducing hitpoints by the difference between the current and the previous monster).
// 2.2) Magic!  A can drink an invulnerability potion, defeating the monster without taking damage.

// Write a function that takes as initial parameters

// * A list of monsters in order of how A will face them, with their strength as values;
// * A’s initial hit points;
// * A’s amount of invulnerability potions.

// And returns

// * The 0-based index of the last monster A defeated

// Constraints:

// * 0 <= enemies.length <= 10e6
// * 1 <= enemies[i] <= 10e4
// * 1 <= hp <= 10e5
// * 0 <= potions <= 10e4

function lastDefeatedMonsterIndex(enemies, hp, potions) {
    let lastMonsterIndex = 0;

    if (enemies.length === 0) {
        return -1;
    }

    for (let i = 1; i < enemies.length; i++) {
        if (enemies[i] > enemies[i - 1]) {
            const damage = enemies[i] - enemies[i - 1];
            if (damage <= hp) {
                hp -= damage;
                lastMonsterIndex = i;
            } else if (potions > 0) {
                potions--;
                lastMonsterIndex = i;
            } else {
                break;
            }
        } else {
            //enemy surrender
            lastMonsterIndex = i;
        }
    }
    return lastMonsterIndex;
}

console.log(lastDefeatedMonsterIndex([10, 5, 2, 13], 10, 1)); 
console.log(lastDefeatedMonsterIndex([10, 8, 12, 5, 6], 20, 2)); 
console.log(lastDefeatedMonsterIndex([15, 20, 25, 30], 10, 1)); 
console.log(lastDefeatedMonsterIndex([10, 15, 20, 30], 10, 0)); 
console.log(lastDefeatedMonsterIndex([5, 3, 6, 4], 10, 3)); 
console.log(lastDefeatedMonsterIndex([], 15, 2)); 
