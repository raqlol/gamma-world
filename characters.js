const nameBtn = document.getElementById("nameme");
const nameInput = document.getElementById("name");

const origin1Btn = document.getElementById("origin1role");
const origin1 = document.getElementById("origin1");

const origin2Btn = document.getElementById("origin2role");
const origin2 = document.getElementById("origin2");

const trait1 = document.getElementById("trait1");
const trait2 = document.getElementById("trait2");

const critical2 = document.getElementById("critical2");
const critical6 = document.getElementById("critical6");

const novice1 = document.getElementById("novice1");
const novice2 = document.getElementById("novice2");

const abilities = document.getElementsByClassName('ability')

const skillsBtn = document.getElementById("skillsBtn")
const bonus1 = document.getElementById("bonus1");
const bonus2 = document.getElementById("bonus2");
const bonus3 = document.getElementById("bonus3");
const bonus4 = document.getElementById("bonus4");

const gearBtn = document.getElementById("gearBtn")
const gear5 = document.getElementById("gear5")

const constitution = document.getElementById("con")
const hp = document.getElementById('hp')
const bloodied = document.getElementById('bloodied')
const speed = document.getElementById('speed')

const skills = [" ", "acrobatics", "athletics", "conspiracy", "insight", "intereaction", "machanics", "nature", "perception", "science", "stealth"]

let And = {
  traits:"Intelligence; Dark; +2 dark overcharge",
  critical:"the attack deals 1d10 extra damage and the target grants combat advantage to your until end of encounter.",
  novice:"machine grip",
  ability:"int",
  bonus: "+4 science",
  skillmod: "int",
  skill: skills[9]
}
let Coc = {
  traits:"Constitution; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and you gain +4 bonus to AC until end of your next turn.",
  novice:"eau de roach",
  ability:"con",
  bonus: "+4 mechanics",
  skillmod: "int",
  skill: skills[6]
}
let Dop = {
  traits:"Intelligence; Dark; +2 dark overcharge",
  critical:"the attack deals 1d10 extra damage and you can use double trouble as a free action.",
  novice:"double trouble",
  ability:"int",
  bonus: "+4 conspiracy",
  skillmod: "int",
  skill: skills[3]
}
let Ele= {
  traits:"Wisdom; Dark; +2 dark overcharge",
  critical:"the attack deals 1d10 extra damage and one ally within 5 squares of he target gains 10 temporary hit points.",
  novice:"electric boogaloo",
  ability:"wis",
  bonus: "+4 mechanics",
  skillmod: "int",
  skill: skills[6]
}
let Emp = {
  traits:"Charisma; Psi; +2 psi overcharge",
  critical:"one ally within 5 squares of the target regains hit points equal to twice your level.",
  novice:"vitality transfer",
  ability:"cha",
  bonus: "+4 insight",
  skillmod: "wis",
  skill: skills[4]
}
let Fel = {
  traits:"Dexterity; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and  you can shift 3 squares as a free action.",
  novice:"slashing claws",
  ability:"dex",
  bonus: "+4 stealth",
  skillmod: "dex",
  skill: skills[10]
}
let Gia = {
  traits:"Strength; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and you push the target 3 squares.",
  novice:"brickbat",
  ability:"str",
  bonus: "+4 athletics",
  skillmod: "str",
  skill: skills[2]
}
let Gra = {
  traits:"Constitution; Dark; +2 dark overcharge",
  critical:"the attack deals 1d10 extra damage and one creature within 2 squares of the target is immobilized until the end of your next turn.",
  novice:"gravitational pulse",
  ability:"con",
  bonus: "+4 athletics",
  skillmod: "str",
  skill: skills[2]
}
let Haw = {
  traits:"Wisdom; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and you can fly your speed as a free action.",
  novice:"terrifying shriek",
  ability:"wis",
  bonus: "+4 perception",
  skillmod: "wis",
  skill: skills[8]
}
let Hyp = {
  traits:"Wisdom; Psi; +2 psi overcharge",
  critical:"the attack deals 1d10 extra damage and you or an ally within 5 squares of you gains a +2 bonus to all defenses until the end of your next turn.",
  novice:"uncanny strike",
  ability:"wis",
  bonus: "+4 insight",
  skillmod: "wis",
  skill: skills[4]
}
let Min = {
  traits:"Charisma; Psi; +2 psi overcharge",
  critical:"the attack deals 1d10 extra damage and the target takes ongoing 5 psychic damage (save ends).",
  novice:"psychic assault",
  ability:"cha",
  bonus: "+4 interaction",
  skillmod: "cha",
  skill: skills[5]
}
let min = {
  traits:"Charisma; Psi; +2 psi overcharge",
  critical:"the attack deals 1d10 extra damage and you slide the target 3 squares.",
  novice:"mental push",
  ability:"cha",
  bonus: "+4 interaction",
  skillmod: "cha",
  skill: skills[5]
}
let Pla = {
  traits:"Constitution; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and the target is immobalized until the start of your next turn.",
  novice:"lashing creepers",
  ability:"con",
  bonus: "+4 nature",
  skillmod: "wis",
  skill: skills[7]
}
let Pyr = {
  traits:"Wisdom; Psi; +2 psi overcharge",
  critical:"the target gains ongoing 10 fire damage (save ends).",
  novice:"fiery flare",
  ability:"wis",
  bonus: "+4 interaction",
  skillmod: "cha",
  skill: skills[5]
}
let Rad = {
  traits:"Constitution; Dark; +2 dark overcharge",
  critical:"the target is weakened until end of your next turn.",
  novice:"radiation eyes",
  ability:"con",
  bonus: "+4 science",
  skillmod: "int",
  skill: skills[9]
}
let Rat = {
  traits:"Dexterity; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and the target takes a -2 penalty to attack rolls until the end of your next turn.",
  novice:"swarm!",
  ability:"dex",
  bonus: "+4 stealth",
  skillmod: "dex",
  skill: skills[10]
}
let Sei = {
  traits:"Strength; Dark; +2 dark overcharge",
  critical:"the attack deals 1d10 extra damage and you knock the target and each enemy adjacent to the target prone.",
  novice:"seismic stomp",
  ability:"str",
  bonus: "+4 athletics",
  skillmod: "str",
  skill: skills[2]
}
let Spe = {
  traits:"Dexterity; Psi; +2 psi overcharge",
  critical:"you can make a basic attack as a free action",
  novice:"quick attack",
  ability:"dex",
  bonus: "+4 acrobatics",
  skillmod: "dex",
  skill: skills[1]
}
let Tel = {
  traits:"Intelligence; Psi; +2 psi overcharge",
  critical:"the attack deals 1d10 extra damage and you slide one creature within 5 squares of you 2 squares.",
  novice:"telekinetic wave",
  ability:"int",
  bonus: "+4 mechanics",
  skillmod: "int",
  skill: skills[6]
}
let Yet = {
  traits:"Strength; Bio; +2 bio overcharge",
  critical:"the attack deals 1d10 extra damage and the target takes a -5 penalty to attack rolls against any creature other than you until the end of your next turn.",
  novice:"big claws",
  ability:"str",
  bonus: "+4 nature",
  skillmod: "wis",
  skill: skills[7]
}
let Eng = {
  traits:"Intelligence; none; +2 to all overcharge",
  critical:"the attack deals 1d10 extra damage and the target grants combat advantage until the end of your next turn.",
  novice:"bold attack",
  ability:"int",
  bonus: "+4 interaction & science",
  skillmod: "cha & int",
  skill: skills[5] + " & " + skills[9]
}

let playerNames = ["Gadget","D'vorah","Taruho","Azula","Kromags", "Salem","Jotunn","Jareth","Falco","Mycroft","Kilgrave","Sage","Groot","Liu Kang","Magneto","Gangrel","Aang","Spawn","Tetsuo","Professor","Ursula"]

let origin = ["Android", "Cockroach", "Doppleganger","Electrokinetic", "Empath", "Felinoid", "Giant", "Gravity Controller", "Hawkoid", "Hypercognitive", "Mind Breaker", "mind coercer","Plant", "Pyrokinetic", "Radioactive","Rat Swarm", "Seismic","Speedster","Telekinetic","Yeti","Engineered Human"];
let gear = ["junk roll", "climbers kit","canoe","keelboat","lantern (8 hours of oil)","draft horse (no wagon)","riding horse", "tent", "wagon", "binoculars","laptop", "duct tape", "heavy flashlight","feul (5 gallons)", "generator (8 hours of fuel)", "night vision goggles", "radio cell phone", "pickup truck", "water purifier (water not included)", "roll twice"]
let diceResult = 0;
function d6(rolls){
  let numberOfRolls = rolls
  let score = 0;
  let i=0;
  while (i<numberOfRolls){
    score += Math.ceil(Math.random() * 6)
    i++
  }
  diceResult = score;
}
function d20(rolls){
  let numberOfRolls = rolls
  let score = 0;
  let i=0;
  while (i<numberOfRolls){
    score += Math.ceil(Math.random() * 20)
    i++
  }
  diceResult = score;
}

function bloodiedHP(){
  let newhp = 12 + parseInt(constitution.value)
  let newbloodied = (hp/2).toFixed()
}
function addGear(){
  d20(1)
  diceResult += 1
  gear5.value = gear[diceResult]
  diceResult = 0
}

function addSkills(){
  let ob1 =eval(origin1.value.substring(0, 3))
  let ob2 =eval(origin2.value.substring(0, 3))
  let naturalAbilities = ob1.ability
  bonus1.value= +4
  bonus2.value= +4
  bonus3.value= +4
  let skill1 = bonus1.nextElementSibling.nextElementSibling
  let skill2 = bonus2.nextElementSibling.nextElementSibling
  let skill3 = bonus3.nextElementSibling.nextElementSibling
  skill1.value = ob2.skill
  skill2.value = ob1.skill
  skill3.value = skills[Math.ceil(Math.random() * 10)]
  if (skill3.value == skill1.value || skill3.value == skill2.value ) {
    skill3.value = skills[Math.ceil(Math.random() * 10)]
  }
}



let abilityMod = 0
function rollAbilityMod(num){
  if(num == 3 ){
    abilityMod = -4
  }
  else if(num ==4 || num ==5 ){
    abilityMod = -3
  }
  else if(num == 6 || num == 7 ){
    abilityMod = -2
  }
  else if(num == 8 || num == 9 ){
    abilityMod = -1
  }
  else if(num == 12 || num == 13 ){
    abilityMod = +1
  }
  else if(num == 14 || num == 15 ){
    abilityMod = +2
  }
  else if(num == 16 || num == 17 ){
    abilityMod = +3
  }
  else if(num == 18 || num == 19 ){
    abilityMod = +4
  }
}
function addAbility() {
  let ob1 =eval(origin1.value.substring(0, 3))
  let ob2 =eval(origin2.value.substring(0, 3))
  let ability1 = ob1.ability
  let ability2 = ob2.ability
  let ability1val = document.getElementById(ability1)
  let ability2val = document.getElementById(ability2)
  let abilitymod1 = ability1val.nextElementSibling.nextElementSibling
  let abilitymod2 = ability2val.nextElementSibling.nextElementSibling

  if (ability1val.id == ability2val.id) {
    ability1val.value = 20;
    abilitymod1.value= "+5"
  }
  else {
    ability1val.value = 18
    abilitymod1.value= "+4"
    ability2val.value = 16
    abilitymod2.value= "+3"
  }
  for (i = 0; i<abilities.length; i++){
    if (abilities[i].value == "") {
      d6(3)
      abilities[i].value = diceResult
      rollAbilityMod(diceResult)
      abilities[i].nextElementSibling.nextElementSibling.value=abilityMod
      diceResult = 0
      abilityMod = 0
    }
  }
  bloodiedHP()
}

function addTraits() {
  let ob1 =eval(origin1.value.substring(0, 3))
  let ob2 =eval(origin2.value.substring(0, 3))
  trait1.value =  ob1.traits
  trait2.value =  ob2.traits
  critical2.nextSibling.innerHTML = ob1.critical
  critical6.nextSibling.innerHTML = ob2.critical
  novice1.value =  ob1.novice
  novice2.value =  ob2.novice
  addAbility()
}

function pickFromArray(arr,replacement) {
  let random = arr[Math.floor(Math.random() * arr.length)];
  replacement.value = random;
}
function changeValue() {
  if(origin2.value == origin1.value){
    origin2.value = "Engineered Human"
  }
  if (origin1.value !="" && origin2.value !=""  ){
    addTraits()
  }
}


window.onload = function () {
  nameBtn.addEventListener("click", function(){
    pickFromArray(playerNames,nameInput);
  })
  origin1Btn.addEventListener("click", function(){
    pickFromArray(origin,origin1);
    changeValue();
  })
  origin2Btn.addEventListener("click", function(){
    pickFromArray(origin,origin2);
    changeValue();

  })
  skillsBtn.addEventListener("click", addSkills)
  gearBtn.addEventListener("click", addGear)
}
