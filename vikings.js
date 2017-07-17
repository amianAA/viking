function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var Viking = function(name){
    this.name = name;
    this.health = randomNumber(min,max);
    this.strengh = randomNumber(min,max);
}

var min = 80;
var max = 120;
var names = ['Astrid','Brynhild','Freydis','Gudrun','Gunnhild','Gunnvor','Hilde','Ingrid','Ragnhild','Ranveig','Sigrid','Sigrunn','Siv','Solveig','Svanhild','Torhild','Torunn','Turid','Vigdis','Yngvild'];

var allVikings = [];
names.forEach(function (name){
    allVikings.push(new Viking(name));
});
