export default class PokemonService {

    pokemonList= [];

    create(pokemonService){
        let indexPokemon = Math.floor(Math.random() * pokemonService.length);
        this.pokemonList.push(pokemonService[indexPokemon]);
    }


    getByName(pokemonName){
        return this.pokemonList.find(pokemon => pokemon.name === pokemonName);
    }

    getAll = () => {
        return this.pokemonList;
    }

    delete(pokemonName){
        this.pokemonList = this.pokemonList.filter(pokemon => pokemon.name !== pokemonName)
        return  this.pokemonList;
    }

}

