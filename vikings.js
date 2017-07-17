function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var healthMinim = 40;

var Viking = function(name){
    this.name = name;
    this.health = randomNumber(minViking,maxViking);
    this.strengh = randomNumber(minViking,maxViking);
}
var Saxon = function(name){
    this.name = name;
    this.health = randomNumber(minSax,maxSax);
    this.strengh = randomNumber(minSax,maxSax);
}

var minViking = 80;
var maxViking = 120;
var minSax = 60;
var maxSax = 100;
var names = ['Astrid','Brynhild','Freydis','Gudrun','Gunnhild','Gunnvor','Hilde','Ingrid','Ragnhild','Ranveig','Sigrid','Sigrunn','Siv','Solveig','Svanhild','Torhild','Torunn','Turid','Vigdis','Yngvild'];

var allVikings = [];
names.forEach(function (name){
    allVikings.push(new Viking(name));
});

var allSaxons = [];
for (var i=0, l=names.length; i < l; i++){
 allSaxons.push(new Saxon('Saxon_'+(i+1)));
}

function turnoPelea(player1,player2){
	var inicio = Math.floor(Math.random())+1;
	if (inicio == 1 ){
		player2.health -= Math.floor(player1.strengh * 0.2 * (randomNumber(0.7, 1.1)));
		player1.health -= Math.floor(player2.strengh * 0.2 * (randomNumber(0.7, 1.1)));
	}
	else {
		player1.health -= Math.floor(player2.strengh * 0.2 * (randomNumber(0.7, 1.1)));
		player2.health -= Math.floor(player1.strengh * 0.2 * (randomNumber(0.7, 1.1)));		
	}
}
function aPelear(vikingo, saxon){
    var turnos = 0;
    do {
        turnoPelea(vikingo,saxon)
        if (vikingo.health < 0){
            console.log('El ganador es ' + saxon.name);
            allSaxons.push(saxon);
        }
        else if (saxon.health < 0){
            console.log('El ganador es ' + vikingo.name);
            allVikings.push(vikingo);
        }
        turnos++;
    } while (vikingo.health >= 0 && saxon.health >= 0 && turnos < 8);
}

do {
    var pos1 = allVikings.indexOf(allVikings[Math.floor(Math.random()*allVikings.length)]);
    var pos2 = allSaxons.indexOf(allSaxons[Math.floor(Math.random()*allSaxons.length)]);
    var vikingo = allVikings.splice(pos1,1)[0];
    var saxon = allSaxons.splice(pos2,1)[0];
    aPelear(vikingo, saxon);
    }while(allSaxons.length > 0 && allVikings.length > 0)
