
var healthMinim = 40;




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

var pos1 = allVikings.indexOf(allVikings[Math.floor(Math.random()*allVikings.length)]);
var pos2 = allVikings.indexOf(allVikings[Math.floor(Math.random()*allVikings.length)]);

var vikingo1 = allVikings.splice(pos1,1)[0];
var vikingo2 = allVikings.splice(pos2,1)[0];


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


do {
	turnoPelea(vikingo1,vikingo2)
	console.log(vikingo1,vikingo2);
	if (vikingo1.health < healthMinim){
	  console.log('El ganador es ' + vikingo2.name);
	}
	else if (vikingo2.health < healthMinim  ){
	  console.log('El ganador es ' + vikingo1.name);
	}
	
	

} while (vikingo1.health >= healthMinim && vikingo2.health >= healthMinim);

