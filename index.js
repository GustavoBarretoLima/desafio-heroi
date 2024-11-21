/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

const herois = [
  { nome: "Alvida", xp: 950 },
  { nome: "Chopper", xp: 1999 },
  { nome: "Nami", xp: 2500 },
  { nome: "Franky", xp: 6900 },
  { nome: "Boa Hancock", xp: 7800 },
  { nome: "Zoro", xp: 10000 },
  { nome: "Luffy", xp: 13000 },
];

function NivelHeroi(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp > 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp > 2.001 && xp <= 5000) {
    return "Prata";
  } else if (xp > 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp > 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp > 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp > 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

herois.forEach((heroi) => {
  const nivel = NivelHeroi(heroi.xp);
  console.log(`O Herói † ${heroi.nome} † está no nivel † ${nivel} †`);
});
