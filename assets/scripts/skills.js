function getSpecial(stat) {

    let luck = document.getElementById('luck').innerText;

    switch(stat) {
        case "strength": 
            let strength = document.getElementById('strength').innerText;
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

function getBarter() {

    let {charisma, luck} = getSpecial("charisma");
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

    return unarmed;
}

//Called from special.js
function updateSkill(skill) {

    switch(skill) {
        case "strength": 
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

