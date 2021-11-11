/*
Prompt the user for the pet's name.
● Keep track of the pet's happiness and energy levels. 
Both start out at zero.
● Use a loop to repeat the following six times…
○ Prompt the user for an action. They can type one of 
three options: feed, pet, or walk.
○ The feed option increases energy by 2.
○ The pet option increases happiness by 1.
○ The walk option increases happiness by 2 but decreases 
energy by 1.
● If the user chooses "walk" but the energy level is 
currently at zero, do not increase happiness
or decrease energy. Instead, alert the following message:
 "Not enough energy to enjoy a
walk."
● At the end, after the six actions, log the pet's name,
 happiness, and energy level to the
console.
*/

let petName = prompt("What is your pet's name?");
let energy = 0
let happiness = 0

    for (let i = 1; i <= 6; i++) {

        let input = prompt("Feed, pet or walk your pet?")

    if (input === "walk" && energy === 0) {
        alert("Your pet is too tired!")
    }

    else if (input === "feed") {
        energy = (energy += 2)
            console.log ("You feed " + petName)
    }

    else if (input === "pet") {
        happiness = (happiness += 1)
            console.log ("You pet " + petName)
    }

    else if (input === "walk") {
        energy = (energy -= 1)
        happiness = (happiness += 2)
            console.log ("You try and walk " + petName)
    }

    console.log (petName + " has " + happiness + " happiness and " + energy + " energy.")

}