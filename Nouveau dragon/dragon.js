"use strict";
console.log("le fichier js est chargé");


var dragon = {}
dragon.avatarUrl = "https://d2homsd77vx6d2.cloudfront.net/cache/2d/c4/2dc48547b87ea2c1152546d5b72e4a14.png"
dragon.name = "dragonball",
dragon.armor = 5,
dragon.hp = 30,
dragon.dommage =  {
	min: 5,
    max: 12,
}
    

var fantasia = {}
fantasia.avatarUrl = "https://www.wikihow.com/images/a/a8/Draw-a-Dragon-Step-14.jpg"
fantasia.name = "fantasia",
fantasia.armor = 10,
fantasia.hp = 20,
fantasia.dommage =  {
	min: 4,
    max: 15,
}

var eliott = {}
eliott.avatarUrl = "http://dragon-mania-legends-wiki.mobga.me/images/thumb/9/9c/Burger_Dragon.png/200px-Burger_Dragon.png"
eliott.name = "eliott",
eliott.armor = 8,
eliott.hp = 25,
eliott.dommage =  {
	min: 6,
    max: 17,
}
    
var heros = [];
heros[0]= dragon;
heros[1]= fantasia;
heros[2]= eliott;

for(var i=0; i< heros.length; i++){

	var hero = heros[i];

	var nodeTemplate = document.querySelector("#template-card-hero");

	var htmlTemplate = nodeTemplate.innerHTML;

	htmlTemplate = htmlTemplate.replace("NAME", hero.name);
	htmlTemplate = htmlTemplate.replace("PICTURE",hero.avatarUrl);
	htmlTemplate = htmlTemplate.replace("HP",hero.hp);
	htmlTemplate = htmlTemplate.replace("ARMOR",hero.armor);
	htmlTemplate = htmlTemplate.replace("DAMAGE.MIN",hero.dommage.min);
	htmlTemplate = htmlTemplate.replace("DAMAGE.MAX",hero.dommage.max);

	var nodeContainer = document.querySelector('.arena');

	nodeContainer.innerHTML += htmlTemplate;

}

var bouton = document.querySelector('combat');

bouton.addEventListener("click",combattre);

function combattre(){

	var selecteds = document.querySelectorall(".selected")

	var id1 = selected[0].getAttribute('data-id');
    var fighter1 = heros[id1];
    
    var id2 = selected[1].getAttribute('data-id');
    var fighter2 = heros[id2];
    
    fightToDeath(fighter1, fighter2);
}






/* correction julien*/

var dragon = {
	name: 'fafnir',
    url: "http://dragon.jpg"
}


var aragorn = {
	name: 'aragorn',
    url: "http://aragorn.jpg"
}

var legolas = {
	name: 'legolas',
    url: "http://aragorn.jpg"
}


var bilbo = {
	name: 'bilbo',
    url: "http://aragorn.jpg"
}


var heros = [];
heros[0] = dragon;
heros[1] = aragorn;
heros[2] = legolas;
heros[3] = bilbo;


for (var i = 0; i < heros.length; i++) {

	var hero = heros[i];

	// recuperer le template
	var nodeTemplate = document.querySelector('#hero-template');

	var template = nodeTemplate.innerHTML;

    template = template.replace('NAME', hero.name);
    template = template.replace('URL', hero.url);
    template = template.replace('ID', i);

	var arena = document.querySelector('.arena');

	arena.innerHTML += template;
}


<script type=text/xtemplate id="hero-template">
    <div class="hero-card" data-id="ID">
        <h1>NAME</h1>
        <img src="URL">
    </div>
</script>


var button = document.querySelector('.battle');

button.addEventListener('click', onBattle);


function onBattle() {

	var selecteds = document.querySelectorAll('.selected');
    
    if (selected.length != 2) {
    	alert("erreur");
        return;
    }
    
    var id1 = selected[0].getAttribute('data-id');
    var fighter1 = heros[id1];
    
    var id2 = selected[1].getAttribute('data-id');
    var fighter2 = heros[id2];
    
    fightToDeath(fighter1, fighter2);