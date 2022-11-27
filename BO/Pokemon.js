class Pokemon {
    constructor(name, identificationNumber, sizePokemon, pokemonWeight, healthPoint, attack1, attack2) {
        this.name = name;
        this.identificationNumber = identificationNumber;
        this.sizePokemon = sizePokemon;
        this.pokemonWeight = pokemonWeight;
        this.lifePoint = healthPoint;
        this.attack1 = attack1;
        this.attack2 = attack2;
    }

    //Methode permettant de choisir l'attaque du Pokemon en fonction de son nombre de points de vie
    static attack(pokemon, lifePointNow) {
        let attack;
        if (lifePointNow < pokemon.lifePoint * 0.20) {
            attack = pokemon.attack2;
        } else {
            attack = pokemon.attack1;
        }
        return attack;
    }

    //Methode de combat
    static combat(pokemon1, pokemon2) {
        console.log(`${pokemon1.name} VS ${pokemon2.name}`)
        let lifePointPokemon1 = pokemon1.lifePoint
        let lifePointPokemon2 = pokemon2.lifePoint;
        console.log("C'est " + pokemon1.name + " qui commence avec " + lifePointPokemon1 + " points de vie. ");
        console.log(pokemon2.name + " a " + lifePointPokemon2 + " points de vie.");
        console.log("**************************************************************")
        while (lifePointPokemon1 > 0 && lifePointPokemon2 > 0) {
            //Le Pokemon1 attaque :
            let attack1 = Pokemon.attack(pokemon1, lifePointPokemon1);
            console.log(pokemon1.name + " attaque avec " + attack1.attackName + " qui inflige " + attack1.nbeDegats + " points de dégâts."); //on récupère le nom de l'attaque et le nombre de points
            let newLifePointPokemon2 = lifePointPokemon2 - attack1.nbeDegats;
            console.log("Il reste " + newLifePointPokemon2 + " points a " + pokemon2.name);
            //le pokemon2 attaque :
            let attack2 = Pokemon.attack(pokemon2, newLifePointPokemon2);
            console.log(pokemon2.name + " attaque avec " + attack2.attackName + " qui inflige " + attack2.nbeDegats + " points de dégâts.");
            let newLifePointPokemon1 = lifePointPokemon1 - attack2.nbeDegats;
            console.log("Il reste " + newLifePointPokemon1 + " points a " + pokemon1.name);
            //On met à jour les compteurs de points
            lifePointPokemon1 = newLifePointPokemon1;
            lifePointPokemon2 = newLifePointPokemon2;
        }

        console.log("**************************************************************")
        //Resultat du duel :
        if (lifePointPokemon1 > 0) {
            console.log("Le gagnant de ce duel est " + pokemon1.name)
        } else {
            console.log("Le gagnant de ce duel est " + pokemon2.name)
        }
    }

    //Methode permettant de selectionner le 1er joueur
    static randomFirstPlayer() {
        return Math.floor(Math.random() * 2);
    }


}
//Initialisation des joueurs
let attackPikachu1 = new Attaque("statik", 10);
let attackPikachu2 = new Attaque("paratonnerre", 25);
let attackEvoli1 = new Attaque("adaptability", 9);
let attackEvoli2 = new Attaque("anticipation", 15);
let pikachu = new Pokemon("Pikachu", 25, 40, 6, 82, attackPikachu1, attackPikachu2);
let evoli = new Pokemon("Evoli", 133, 30, 6.5, 70, attackEvoli1, attackEvoli2);

//Choix du premier attaquant
if (Pokemon.randomFirstPlayer() == 0) {
    attaquant1 = pikachu;
    attaquant2 = evoli;
} else {
    attaquant1 = evoli;
    attaquant2 = pikachu;
}
//Lancement du combat
Pokemon.combat(attaquant1, attaquant2);

