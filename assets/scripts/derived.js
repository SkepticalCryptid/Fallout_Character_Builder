function updateHP() {
    let endurance = document.getElementById('endurance').innerText;
    let playerHP = 90 + (endurance *20) + 10;

    document.getElementById('playerHP').innerText = playerHP;
}

function updateAP() {
    let agility = document.getElementById('agility').innerText;
    let playerAP = 65 + (2 * agility);

    document.getElementById('playerAP').innerText = playerAP;
}

function updateCarryWeight() {
    let strength = document.getElementById('strength').innerText;
    let carryWeight = 150 + (strength * 10);

    document.getElementById('carryWeight').innerText = carryWeight;
}

function updateCritChance() {
    let luck = document.getElementById('luck').innerText;

    document.getElementById('critChance').innerText = luck;    
}

function updateRadResist() {
    let endurance = document.getElementById('endurance').innerText;
    let radResist = (endurance - 1) * 2;

    document.getElementById('radResist').innerText = radResist;
}

function updatePoisonResist() {
    let endurance = document.getElementById('endurance').innerText;
    let poisonResist = (endurance - 1) * 5;

    document.getElementById('poisonResist').innerText = poisonResist;
}

function updateSkillRate() {
    let intelligence = document.getElementById('intelligence').innerText;
    let skillRate = parseInt(10) + parseInt(intelligence);

    document.getElementById('skillRate').innerText = skillRate;
}

function updateDisposition() {
    let charisma = document.getElementById('charisma').innerText;
    let disposition = charisma * 5;

    document.getElementById('disposition').innerText = disposition;
}

function updateMeleeDamage() {
    let strength = document.getElementById('strength').innerText;
    let meleeDamage = Math.ceil(strength / 2);

    document.getElementById('meleeDamage').innerText = meleeDamage;
}

function updateUnarmedDamage() {
    let unarmed = document.getElementById('unarmed').innerText;
    let unarmedDamage = 0;

    if (unarmed <= 10) {
        unarmedDamage = 1;
    } 
    else if(unarmed <= 30) {
        unarmedDamage = 2;
    }
    else if(unarmed <= 50) {
        unarmedDamage = 3;
    }
    else if (unarmed <= 70) {
        unarmedDamage = 4;
    }
    else if (unarmed <= 90) {
        unarmedDamage = 5;
    }
    else {
        unarmedDamage = 6;
    }

    document.getElementById('unarmedDamage').innerText = unarmedDamage;
}