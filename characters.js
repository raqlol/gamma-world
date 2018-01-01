//character creation
function buildChar() {
  var character = new Character();
  console.log(character)
};

var twentyRoll = {
  1:["Android", "junk table - needs additional programming"],
  2:["Cockroach", "climber's kit"],
  3:["Doppleganger", "canoe"],
  4:["Electrokinetic", "keelboat"],
  5:["Empath", "lantern & 8 hours of oil"],
  6:["Felinoid", "draft horse"],
  7:["Giant", "riding horse"],
  8:["Gravity Controller", "tent"],
  9:["Hawkoid", "wagon"],
  10:["Hypercognitive", "binoculars"],
  11:["MindBreaker", "laptop"],
  12:["MindCoercer", "duct tape"],
  13:["Plant", "heavy flashlight"],
  14:["Pyrokinetic", "5 gallons of fuel"],
  15:["Radioactive", "generator & 8 hours of fuel"],
  16:["RatSwarm", "night-vison goggles"],
  17:["Seismic", "cell phone"],
  18:["Speedster", "pickup truck"],
  19:["Telekinetic", "water purifier"],
  20:["Yeti", "roll twice - needs additional programming"],
  21:["Engineered Human", " ",]
}
var Android = {
  traits:["intelligence", "dark"]
}
var Cockroach = {
  traits:["constitution", "bio"]
}
var Doppleganger = {
  traits:["intelligence", "dark"]
}
var Electrokinetic = {
  traits:["wisdom", "dark"]
}
var Empath = {
  traits:["charisma", "psi"]
}
var Felinoid = {
  traits:["dexterity", "bio"]
}
var Giant = {
  traits:["strength", "bio"]
}
var Gravity = {
  traits:["constitution", "dark"]
}
var Hawkoid = {
  traits:["wisdom", "bio"]
}
var Hypercognitive = {
  traits:["wisdom", "psi"]
}
var MindBreaker = {
  traits:["charisma", "psi"]
}
var MindCoercer = {
  traits:["charisma", "psi"]
}
var Plant = {
  traits:["constitution", "bio"]
}
var Pyrokinetic = {
  traits:["wisdom", "psi"]
}
var Radioactive = {
  traits:["constitution", "dark"]

}
var RatSwarm = {
  traits:["dexterity", "bio"]
}
var Seismic = {
  traits:["strength", "dark"]
}
var Speedster = {
  traits:["dexterity", "psi"]
}
var Telekinetic = {
  traits:["intelligence", "psi"],
}
var Yeti = {
  traits:["strength", "bio"]
}
var EngineereHuman = {
  traits:["intelligence", "none"]
}
console.log(twentyRoll.randomNum20)

function Character() {
  this.name = document.getElementById('name').value;;
  this.originOne = twentyRoll[(Math.ceil( Math.random() * 20 ))][0];
  // need to add logic so these aren't the same ...
  // maybe in the char creator replace two w/eng human
  this.originTwo = twentyRoll[(Math.ceil( Math.random() * 20 ))][0];
  // need to roll trait in the creator with prototype
  // create criticals at level acheieved 2 & 6
  // create primary at roll
  // create utility at lvl 3 & 7
  // create exp primary at lvl 5
  // create exp secondary at 9
  // all abilities based on primaries
  this.gear=["explorer's kit", twentyRoll[(Math.ceil( Math.random() * 19 ))][1]];
  // hp based on abilities
  // need to add the ability to increase speed in the creator
  this.speed=6;
  // all defenses based on origin
  // omega tech comes from the deck need 7
  // everything else bases on creator

}
