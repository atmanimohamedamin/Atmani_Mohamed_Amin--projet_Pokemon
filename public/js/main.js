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


// let btnLancerLeCombat = document.querySelectorAll(".btnLancerLeCombat")[0]
// btnLancerLeCombat.addEventListener("mouseover", () => {
//     btnLancerLeCombat.style.border = "2px solid white"
//     btnLancerLeCombat.style.boxShadow = "0px 0px 10px white, inset 0px 0px 10px white"
    
// })




// let choixDePersonnage = prompt(`Choisis ton pokemon ! entrer 1 pour ${carapuce.nom} ou tape 2 pour ${bulbizare.nom}`)
// if (choixDePersonnage == "1") {
//     console.log(`Ton pokemon est ${carapuce.nom}`);
// } else if (choixDePersonnage == "2"){
//     console.log(`Ton pokemon est ${bulbizare.nom}`);
// } else{
//     console.log(`erreur il faut choisir entre 1 et 2`);
// }