// Collect SPECIAL stat from main page depending on stat looking for
// Luck will always be collected as it influences all skills
function getSpecial(stat) {

    let luck = document.getElementById('luck').innerText;

    // Uses SPECIAL name given from previous function to determine correct stats to send back
    switch(stat) {
        case "strength": 
            let strength = document.getElementById('strength').innerText;
            // Retrun corresponding SPECIAL stat along with Luck obtained above
            // Used twice to correct assign the statistics, e.g. strength from here being passed into strength in the previous function
            return {strength: strength, luck: luck}
        break;
        case "perception":
            let perception = document.getElementById('perception').innerText;
            return {perception: perception, luck: luck}
        break;
        case "endurance":
            let endurance = document.getElementById('endurance').innerText;
            return {endurance: endurance, luck: luck}
        break;
        case "charisma":
            let charisma = document.getElementById('charisma').innerText;
            return {charisma: charisma, luck: luck}
        break;
        case "intelligence":
            let intelligence = document.getElementById('intelligence').innerText;
            return {intelligence: intelligence, luck: luck}
        break;
        case "agility":
            let agility = document.getElementById('agility').innerText;
            return {agility: agility, luck: luck}
        break;
        default:
        break;
    }
}

// Collects SPECIAL from above and uses them in the formula before returning updated skill number
function getBarter() {
    // Define two variables and add result of getSpecial to them respectively
    let {charisma, luck} = getSpecial("charisma");
    // Uses Math.ceil to always round the result up to nearest whole number
    let barter = Math.ceil(2 + (charisma * 2) + (luck / 2));

    return barter;
}

function getBigGuns() {
    let {endurance, luck} = getSpecial("endurance");
    let bigGuns = Math.ceil(2 + (endurance * 2) + (luck / 2));

    return bigGuns;
}

function getEnergyWeapons() {
    let {perception, luck} = getSpecial("perception");
    let energyWeapons = Math.ceil(2 + (perception * 2) + (luck / 2));

    return energyWeapons;
}

function getExplosives() {
    let {perception, luck} = getSpecial("perception");
    let explosives = Math.ceil(2 + (perception * 2) + (luck / 2));

    return explosives;
}

function getLockpick() {
    let {perception, luck} = getSpecial("perception");
    let lockpick = Math.ceil(2 + (perception * 2) + (luck / 2));

    return lockpick;
}

function getMedicine() {
    let {intelligence, luck} = getSpecial("intelligence");
    let medicine = Math.ceil(2 + (intelligence * 2) + (luck / 2));
    
    return medicine;
}

function getMeleeWeapons() {
    let {strength, luck} = getSpecial("strength");
    let meleeWeapons = Math.ceil(2 + (strength * 2) + (luck / 2));

    return meleeWeapons;
}

function getRepair() {
    let {intelligence, luck} = getSpecial("intelligence");
    let repair = Math.ceil(2 + (intelligence * 2) + (luck / 2));

    return repair;
}

function getScience() {
    let {intelligence, luck} = getSpecial("intelligence");
    let science = Math.ceil(2 + (intelligence * 2) + (luck / 2));

    return science;
}

function getSmallGuns() {
    let {agility, luck} = getSpecial("agility");
    let smallGuns = Math.ceil(2 + (agility * 2) + (luck / 2));

    return smallGuns;
}

function getSneak() {
    let {agility, luck} = getSpecial("agility");
    let sneak = Math.ceil(2 + (agility * 2) + (luck / 2));

    return sneak;
}

function getSpeech() {
    let {charisma, luck} = getSpecial("charisma");
    let speech = Math.ceil(2 + (charisma * 2) + (luck / 2));

    return speech;
}

function getUnarmed() {
    let {endurance, luck} = getSpecial("endurance");
    let unarmed = Math.ceil(2 + (endurance * 2) + (luck / 2));
    updateUnarmedDamage();

    return unarmed;
}

//Called from special.js
function updateSkill(skill) {

    // SPECIAL stat name passed and used to determine which skills need updating
    switch(skill) {
        case "strength": 
            // Get the correcsponding skills and set them equal to the result of their respective function
            document.getElementById('meleeWeapons').innerText = getMeleeWeapons();
        break;
        case "perception":
            document.getElementById('energyWeapons').innerText = getEnergyWeapons();
            document.getElementById('explosives').innerText = getExplosives();
            document.getElementById('lockpick').innerText = getLockpick();
        break;
        case "endurance":
            document.getElementById('bigGuns').innerText = getBigGuns();
            document.getElementById('unarmed').innerText = getUnarmed();
        break;
        case "charisma":
            document.getElementById('barter').innerText = getBarter();
            document.getElementById('speech').innerText = getSpeech();
        break;
        case "intelligence":
            document.getElementById('medicine').innerText = getMedicine();
            document.getElementById('repair').innerText = getRepair();
            document.getElementById('science').innerText = getScience();
        break;
        case "agility":
            document.getElementById('smallGuns').innerText = getSmallGuns();
            document.getElementById('sneak').innerText = getSneak();
        break;
        case "luck":
            // Luck effects all skills
            document.getElementById('barter').innerText = getBarter();    
            document.getElementById('bigGuns').innerText = getBigGuns();
            document.getElementById('energyWeapons').innerText = getEnergyWeapons();
            document.getElementById('explosives').innerText = getExplosives();
            document.getElementById('lockpick').innerText = getLockpick();
            document.getElementById('medicine').innerText = getMedicine();
            document.getElementById('meleeWeapons').innerText = getMeleeWeapons();
            document.getElementById('repair').innerText = getRepair();
            document.getElementById('science').innerText = getScience();
            document.getElementById('smallGuns').innerText = getSmallGuns();
            document.getElementById('sneak').innerText = getSneak();
            document.getElementById('speech').innerText = getSpeech();
            document.getElementById('unarmed').innerText = getUnarmed();
        break;
        default:
        break;
    }
}

// Tag Skills
let tagLeft = 3;
// Array to track which skill has been tagged or not
let taggedState = new Array(13).fill(false);
const skillClass = document.querySelectorAll('.skill');

// Update the display showing how many tags are still available
function updateTagLeft(tagged) {
    tagLeft = tagged;

    // If tagLeft ever goes below 0, reset back to 0
    if (tagLeft > 0) {
        document.getElementById('taggedLeft').innerText = tagLeft;
    }
    else {
        document.getElementById('taggedLeft').innerText = 0;
        tagLeft = 0;
    }
}

// Add the +15 points to the selected skill and update the Array
// Takes in both corresponding skill name and the location of the skill in the array
function addTag(skill, arrayLocation) {
    let skillValue = document.getElementById(skill).innerText;
    let taggedValue = parseInt(skillValue) + parseInt(15);
    document.getElementById(skill).innerText = taggedValue;
    taggedState[arrayLocation] = true;

    // Call updateTagLeft and pass the value of remaining tags -1
    updateTagLeft(tagLeft - 1);
}

// As above for decreasing skill by 15 and giving back a Tag point
function decreaseTag(skill, arrayLocation) {
    let skillValue = document.getElementById(skill).innerText;
    let taggedValue = parseInt(skillValue) - parseInt(15);
    document.getElementById(skill).innerText = taggedValue;
    taggedState[arrayLocation] = false;
    updateTagLeft(tagLeft + 1);
}

// Iterate through all classes with the name skill
skillClass.forEach((skillName) => {
    // Determine which one has been clicked based on the id of the <span> within it
    skillName.addEventListener('click', () => {
        const spanId = skillName.querySelector('span').id;

        // Chooses the correct skill based on the id of the <span>
        switch(spanId) {
            case "barter":
                // If the skill has not been tagged
                if (!taggedState[0]) {
                    // Check that Tag points still remain and call addTag passing the skill name and array position
                    if (tagLeft > 0) {
                        addTag("barter", 0);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("barter", 0);
                    break;
                }
                break;
            case "bigGuns":
                if (!taggedState[1]) {
                    if (tagLeft > 0) {
                        addTag("bigGuns", 1);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("bigGuns", 1);
                    break;
                }
                break;
            case "energyWeapons":
                if (!taggedState[2]) {
                    if (tagLeft > 0) {
                        addTag("energyWeapons", 2);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("energyWeapons", 2);
                    break;
                }
                break;
            case "explosives":
                if (!taggedState[3]) {
                    if (tagLeft > 0) {
                        addTag("explosives", 3);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("explosives", 3);
                    break;
                }
                break;
            case "lockpick":
                if (!taggedState[4]) {
                    if (tagLeft > 0) {
                        addTag("lockpick", 4);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("lockpick", 4);
                    break;
                }
                break;
            case "medicine":
                if (!taggedState[5]) {
                    if (tagLeft > 0) {
                        addTag("medicine", 5);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("medicine", 5);
                    break;
                }
                break;
            case "meleeWeapons":
                if (!taggedState[6]) {
                    if (tagLeft > 0) {
                        addTag("meleeWeapons", 6);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("meleeWeapons", 6);
                    break;
                }
                break;
            case "repair":
                if (!taggedState[7]) {
                    if (tagLeft > 0) {
                        addTag("repair", 7);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("repair", 7);
                    break;
                }
                break;
            case "science":
                if (!taggedState[8]) {
                    if (tagLeft > 0) {
                        addTag("science", 8);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("science", 8);
                    break;
                }
                break;
            case "smallGuns":
                if (!taggedState[9]) {
                    if (tagLeft > 0) {
                        addTag("smallGuns", 9);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("smallGuns", 9);
                    break;
                }
                break;
            case "sneak":
                if (!taggedState[10]) {
                    if (tagLeft > 0) {
                        addTag("sneak", 10);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("sneak", 10);
                    break;
                }
                break;
            case "speech":
                if (!taggedState[11]) {
                    if (tagLeft > 0) {
                        addTag("speech", 11);
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("speech", 11);
                    break;
                }
                break;
            case "unarmed":
                if (!taggedState[12]) {
                    if (tagLeft > 0) {
                        addTag("unarmed", 12);
                        updateUnarmedDamage();
                        break;
                    } 
                    break;
                }
                else {
                        decreaseTag("unarmed", 12);
                        updateUnarmedDamage();
                    break;
                }
                break;
        }
    })
})
