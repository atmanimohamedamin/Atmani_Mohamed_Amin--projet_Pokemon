let pokemon1 = {
    nom : "carapuce",
    pv : 100,
    attaque : ["pistolet a eau", "poing de fer", "crochet a eau", "tsunami"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon2 = {
    nom : "bulbizare",
    pv : 100,
    attaque : ["fouet", "Fouet Lianes", "mega fouet", "tempete"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon3 = {
    nom : "Pikachu",
    pv : 100,
    attaque : ["tonnere", "coeu de fer", "fatal-foudre", "Eclair fou"],
    niveau : 50,
    vitesse : 70,  
}

let pokemon4 = {
    nom : "Salameche",
    pv : 100,
    attaque : ["Lance flamme", "nitro charge", "Poing Ardent", "Rebondifeu"],
    niveau : 50,
    vitesse : 70,  
}




let logoCarapuce = document.querySelectorAll(".logoMenu")[0];
let carapuce = document.querySelectorAll(".perso")[0];
carapuce.addEventListener("click", () =>{
    logoCarapuce.style.display = "flex";
    logoPikachu.style.display = "none";
    logoSalameche.style.display = "none";
    logoBulbizare.style.display = "none";
})


let logoPikachu = document.querySelectorAll(".logoMenu")[1];
let pikachu = document.querySelectorAll(".perso")[1];
pikachu.addEventListener("click", () =>{
    logoPikachu.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoSalameche.style.display = "none";
    logoBulbizare.style.display = "none";
})

let logoSalameche = document.querySelectorAll(".logoMenu")[2];
let salameche = document.querySelectorAll(".perso")[2];
salameche.addEventListener("click", () =>{
    logoSalameche.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoPikachu.style.display = "none";
    logoBulbizare.style.display = "none";
})

let logoBulbizare = document.querySelectorAll(".logoMenu")[3];
let bulbizare = document.querySelectorAll(".perso")[3];
bulbizare.addEventListener("click", () =>{
    logoBulbizare.style.display = "flex";
    logoCarapuce.style.display = "none";
    logoPikachu.style.display = "none";
    logoSalameche.style.display = "none";
})

let fight = document.querySelector(".fight")
let container = document.querySelector(".container")
let btnLancerLeCombat = document.querySelector(".btnLancerLeCombat")
btnLancerLeCombat.addEventListener("click", () => {
    container.style.display = "none"
    fight.style.display = "flex"
    
})



