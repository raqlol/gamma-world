//character creation
function buildChar() {
  var character = new Character();
  console.log(character)
};

var origins = {
  1:["Android", "intelligence", "dark"],
  2:["Cockroach", "constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
var Android = {
  traits:["intelligence", "dark"]
}
var Cockroach = {
  traits:["constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
var Cockroach = {
  traits:["constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
var Cockroach = {
  traits:["constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
var Cockroach = {
  traits:["constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
var Cockroach = {
  traits:["constitution", "bio"],
  3:["Doppleganger","intelligence", "dark"],
  4:["Electrokinetic", "wisdom", "dark"],
  5:["Empath", "charisma", "psi"],
  6:["Felinoid", "dexterity", "bio"],
  7:["Giant", "strength", "bio"],
  8:["Gravity Controller", "constitution", "dark"],
  9:["Hawkoid", "wisdom", "bio"],
  10:["Hypercognitive", "wisdom", "psi"],
  11:["Mind Breaker", "charisma", "psi"],
  12:["Mind Coercer", "charisma", "psi"],
  13:["Plant", "constitution", "bio"],
  14:["Pyrokinetic", "wisdom", "psi"],
  15:["Radioactive", "constitution", "dark"],
  16:["Rat Swarm", "dexterity", "bio"],
  17:["Seismic", "strength", "dark"],
  18:["Speedster", "dexterity", "psi"],
  19:["Telekinetic","intelligence", "psi"],
  20:["Yeti", "strength", "bio"],
  21:["Engineered Human","intelligence", "none"]
}
console.log(origins.randomNum20)

function Character() {
  this.name = document.getElementById('name').value;;
  this.originOne = origins[(Math.ceil( Math.random() * 20 ))][0];
  // need to add logic so these aren't the same ...
  // maybe in the char creator replace two w/eng human
  this.originTwo = origins[(Math.ceil( Math.random() * 20 ))][0];
  this.trait = this.originOne;
  this.criticalTwo="";
  this.criticalSix="";
  this.novicePrimary="";
  this.noviceSecondary="";
  this.utilityThree="";
  this.expertPrimary="";
  this.utilitySeven="";
  this.expertSecondary="";
  this.str="";
  this.con="";
  this.dex="";
  this.int="";
  this.wis="";
  this.cha="";
  this.gear="";
  this.hp="";
  this.speed="";
  this.ac="";
  this.fortitude="";
  this.reflex="";
  this.will="";
  this.inititive="";
  this.attacks="";
  this.alphaMutation="";
}
