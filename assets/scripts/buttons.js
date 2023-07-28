function increaseSpecial(special) {
    special++;
    updateSpecial(); // Call the function to update the displayed statistics

}

// Add event listeners to each increase button
document.getElementById('strength-increase').addEventListener('click', function() {
    increaseSpecial('strength');
});
document.getElementById('perception-increase').addEventListener('click', function() {
    increaseSpecial('perception');
});



//Skills
let barter = 5,
bigGuns = 5,
energyWeapons = 5,
explosives = 5,
lockpick = 5,
medicine = 5,
meleeWeapons = 5,
repair = 5,
science = 5,
smallGuns = 5,
sneak = 5,
speech = 5,
unarmed = 5;

//Player Stats
let playerHP = 0,
playerAP = 0,
carryWeight = 0,
disposition = 0,
critChance = 0,
radResist = 0,
poisonResist = 0,
skillRate = 0,
meleeDamage = 0,
unarmedDamage = 0;

//Misc. variables
let pointsLeft = 5,
taggedSkills = 3;