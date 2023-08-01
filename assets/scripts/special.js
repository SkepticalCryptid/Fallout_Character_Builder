// Create a function that creates the stat adjuster module
function createStatAdjuster(initialValue) {
  let value = initialValue;

  // Prevent SPECIAL stats from going outside of the range 1 to 10
  function clamp(newValue) {
    return Math.min(Math.max(newValue, 1), 10);
  }

  function increase() {
    value = clamp(value + 1);
    return value;
  }

  function decrease() {
    value = clamp(value - 1);
    return value;
  }

  function getValue() {
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
}

// Create an object for each stat using the createStatAdjuster function
const strength = createStatAdjuster(5);
const perception = createStatAdjuster(5);
const endurance = createStatAdjuster(5);
const charisma = createStatAdjuster(5);
const intelligence = createStatAdjuster(5);
const agility = createStatAdjuster(5);
const luck = createStatAdjuster(5);

// Variable for extra points that can be assigned
let pointsLeft = 5;

// Function to update the displayed value on the webpage
function updateDisplay(stat, value) {
  document.getElementById(stat).innerText = value;
}

// Function to update the available points and display them
function updatePointsLeft(points) {
  pointsLeft = points;
  if (pointsLeft > 0) {
    document.getElementById('pointsLeft').innerText = pointsLeft;
  }
  else {
    document.getElementById('pointsLeft').innerText = 0;
  }

}

// Functions to handle button clicks for each stat
// If statement to prevent stat increase if extra points are used up, applies to all increaseX functions
function increaseStrength() {
  if (pointsLeft > 0) {
    const newValue = strength.increase();
    updateDisplay('strength', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("strength");
}

// Prevent stat from being lowered if the SPECIAL stat is already at 1, applies to all decreaseX functions
function decreaseStrength() {
  if (strength.getValue() > 1) {
    const newValue = strength.decrease();
    updateDisplay('strength', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("strength");
}


function increasePerception() {
  if (pointsLeft > 0) {
    const newValue = perception.increase();
    updateDisplay('perception', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("perception");
}

function decreasePerception() {
  if (perception.getValue() > 1) {
    const newValue = perception.decrease();
    updateDisplay('perception', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("perception");
}

function increaseEndurance() {
  if (pointsLeft > 0) {
    const newValue = endurance.increase();
    updateDisplay('endurance', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("endurance");
}

function decreaseEndurance() {
  if (endurance.getValue() > 1) {
    const newValue = endurance.decrease();
    updateDisplay('endurance', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("endurance");
}

function increaseCharisma() {
  if (pointsLeft > 0) {
    const newValue = charisma.increase();
    updateDisplay('charisma', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("charisma");
}

function decreaseCharisma() {
  if (charisma.getValue() > 1) {
    const newValue = charisma.decrease();
    updateDisplay('charisma', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("charisma");
}

function increaseIntelligence() {
  if (pointsLeft > 0) {
    const newValue = intelligence.increase();
    updateDisplay('intelligence', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("intelligence");
}

function decreaseIntelligence() {
  if (intelligence.getValue() > 1) {
    const newValue = intelligence.decrease();
    updateDisplay('intelligence', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("intelligence");
}

function increaseAgility() {
  if (pointsLeft > 0) {
    const newValue = agility.increase();
    updateDisplay('agility', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("agility");
}

function decreaseAgility() {
  if (agility.getValue() > 1) {
    const newValue = agility.decrease();
    updateDisplay('agility', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("agility");
}

function increaseLuck() {
  if (pointsLeft > 0) {
    const newValue = luck.increase();
    updateDisplay('luck', newValue);
    updatePointsLeft(pointsLeft - 1);
  }
  updateSkill("luck");
}

function decreaseLuck() {
  if (luck.getValue() > 1) {
    const newValue = luck.decrease();
    updateDisplay('luck', newValue);
    updatePointsLeft(pointsLeft + 1);
  }
  updateSkill("luck");
}