import Pokemon from "./Pokemon.js";
import Attaque from "./Attaque.js";
import PokemonService from "./PokemonService.js";

//Initialisation des joueurs
let attackPikachu1 = new Attaque("statik", 10);
let attackPikachu2 = new Attaque("paratonnerre", 25);
let attackEvoli1 = new Attaque("adaptability", 9);
let attackEvoli2 = new Attaque("anticipation", 15);
let pikachu = new Pokemon("Pikachu", 25, 40, 6, 82, attackPikachu1, attackPikachu2);
let evoli = new Pokemon("Evoli", 133, 30, 6.5, 70, attackEvoli1, attackEvoli2);
let camillou = new Pokemon("Camillou", 1212, 25, 7, 90, attackEvoli1, attackPikachu2);

let attaquant1;
let attaquant2;


//Choix du premier attaquant
if (Pokemon.randomFirstPlayer() === 0) {
    attaquant1 = pikachu;
    attaquant2 = evoli;
} else {
    attaquant1 = evoli;
    attaquant2 = pikachu;
}
//Lancement du combat
Pokemon.combat(attaquant1, attaquant2);

//On créé notre tableau de Pokemon
let tabPokemon=[pikachu, evoli, camillou];
//On instancie notre classe PokemonService
const pokemonService = new PokemonService();

//On remplit notre nouveau tableau avec des pokemons pris aléatoirement
pokemonService.create(tabPokemon);
pokemonService.create(tabPokemon);
pokemonService.create(tabPokemon);
pokemonService.create(tabPokemon);
pokemonService.create(tabPokemon);
pokemonService.create(tabPokemon);

//On regarde ce qu'il y a dans le tableau - 2 façons de procéder
pokemonService.getAll().forEach(pokemon => {console.log(pokemon)});
console.log(pokemonService.getAll());

//On récupère un Pokemon via son nom
pokemonService.getByName("Pikachu");
console.log(pokemonService.getByName("Pikachu"));
//On supprime tous les éléments du tableau ayant le nom Pikachu
console.log(pokemonService.delete("Pikachu"));
