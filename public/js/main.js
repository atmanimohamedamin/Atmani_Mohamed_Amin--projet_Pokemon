let pokemon1 = {
    nom : "carapuce",
    pv : 100,
    attaque : ["pistolet a eau", "poing de fer", "hydrocanon", "tsunami"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon2 = {
    nom : "Pikachu",
    pv : 100,
    attaque : ["tonnere", "coeu de fer", "fatal-foudre", "Eclair fou"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon3 = {
    nom : "Salameche",
    pv : 100,
    attaque : ["Lance flamme", "nitro charge", "Poing Ardent", "Rebondifeu"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon4 = {
    nom : "Bulbizare",
    pv : 100,
    attaque : ["fouet", "Fouet Lianes", "mega fouet", "tempete"],
    niveau : 50,
    vitesse : 70,  
}

let pokemonChoisis;
let pokemonTableau = [pokemon1, pokemon2, pokemon3, pokemon4];



let logoCarapuce = document.querySelectorAll(".logoMenu")[0];
let carapuce = document.querySelectorAll(".perso")[0];
carapuce.addEventListener("click", () =>{
    logoCarapuce.style.display = "flex";
    logoPikachu.style.display = "none";
    logoSalameche.style.display = "none";
    logoBulbizare.style.display = "none";
    pokemonChoisis = pokemon1
})


let logoPikachu = document.querySelectorAll(".logoMenu")[1];
let pikachu = document.querySelectorAll(".perso")[1];
pikachu.addEventListener("click", () =>{
    logoPikachu.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoSalameche.style.display = "none";
    logoBulbizare.style.display = "none";
    pokemonChoisis = pokemon2
})

let logoSalameche = document.querySelectorAll(".logoMenu")[2];
let salameche = document.querySelectorAll(".perso")[2];
salameche.addEventListener("click", () =>{
    logoSalameche.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoPikachu.style.display = "none";
    logoBulbizare.style.display = "none";
    pokemonChoisis = pokemon3
})

let logoBulbizare = document.querySelectorAll(".logoMenu")[3];
let bulbizare = document.querySelectorAll(".perso")[3];
bulbizare.addEventListener("click", () =>{
    logoBulbizare.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoPikachu.style.display = "none";
    logoSalameche.style.display = "none";
    pokemonChoisis = pokemon4
})

let fight = document.querySelector(".fight")
let container = document.querySelector(".container")
let btnLancerLeCombat = document.querySelector(".btnLancerLeCombat")
btnLancerLeCombat.addEventListener("click", () => {
    container.style.display = "none"
    fight.style.display = "flex"
    for (let i = 0; i < pokemonTableau.length; i++) {
        if (pokemonTableau[i].nom == pokemonChoisis.nom) {
            pokemonTableau.splice(i, 1)
        } 
    }
    let randomPokemon = Math.floor(Math.random() * pokemonTableau.length)
    let adversaire = pokemonTableau[randomPokemon];
    console.log(`Ton adversaire est ${adversaire.nom}`);
     
    let backPokemon = document.querySelectorAll(".backFight");
        if (pokemonChoisis.nom == pokemon1.nom) {
            backPokemon[0].style.display = "flex"
        } else if (pokemonChoisis.nom == pokemon2.nom){
            backPokemon[1].style.display = "flex"
        }else if (pokemonChoisis.nom == pokemon3.nom){
            backPokemon[2].style.display = "flex"
        }else if (pokemonChoisis.nom == pokemon4.nom){
            backPokemon[3].style.display = "flex"
        }
        
    let faceFight = document.querySelectorAll(".faceFight");
        if (adversaire.nom == pokemon1.nom) {
            faceFight[0].style.display = "flex"
        } else if (adversaire.nom == pokemon2.nom){
            faceFight[1].style.display = "flex"
        }else if (adversaire.nom == pokemon3.nom){
            faceFight[2].style.display = "flex"
        }else if (adversaire.nom == pokemon4.nom){
            faceFight[3].style.display = "flex"
        }

    
})        

let menuPokemon = document.querySelectorAll(".menu");
menuPokemon.forEach(element => {
    element.addEventListener("click", () =>{
        let pokemonName = element.querySelector("h1").innerText
        console.log(`Tu as choisis ${pokemonName}.`);
    })        
    
});        


let pokemon1pdv = 100;
let pokemon2pdv = 100;
document.getElementById(`pokemon1`).style.width = `${pokemon1pdv}%`
document.getElementById(`pokemon2`).style.width = `${pokemon2pdv}%`




let attaqueBtn = document.querySelectorAll(".btnAttaque");
let attaqueChoisis
attaqueBtn.forEach(element => {
    element.addEventListener("click", () =>{
        if (element.id == "attaque1") {
            attaqueChoisis = pokemonChoisis.attaque[0]   
            console.log(attaqueChoisis);
        } else if(element.id == "attaque2"){
            attaqueChoisis = pokemonChoisis.attaque[1]
            console.log(attaqueChoisis);
        } else if(element.id == "attaque3"){
            attaqueChoisis = pokemonChoisis.attaque[2]
            console.log(attaqueChoisis);
        } else if(element.id == "attaque4"){
            attaqueChoisis = pokemonChoisis.attaque[3]
            console.log(attaqueChoisis);
        } else{
            console.log("error");
        }
    })
});



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) +min;
}

function attaquer(adversaire) {
    let degats = randomNumberAttaque(0, 20);
    adversaire.pv -= degats;
    if (adversaire.pv <= 0) {
        console.log("You Win !");
    } else{
        console.log(`Tu as infligé ${degats} points de degats a ${adversaire.nom}.`);
        console.log(`Il reste ${adversaire.pv} a ${adversaire.nom}`);
    }
    attaquer(adversaire)
}












