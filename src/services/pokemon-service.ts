import { error } from "console";
import Pokemon from "../models/pokemon";

export default class PokemonService {

  static async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('http://localhost:3000/pokemons');
    return await response.json();
  }

  static getPokemon(id: number): Promise<Pokemon | null> {
    return fetch(`http://localhost:3000/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(this.handleError);  // Vous pouvez gérer les erreurs ici si nécessaire
  }
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {  // Correction ici
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers:{'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
}
  static deltePokemon(pokemon:Pokemon):Promise<{}>{
    return fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method:'DELETE',
      headers:{'Content-Type':'application-json'}
    
  })
  .then(response=>response.json())
  .catch(error=>this.handleError(error));
}

  static isEmpty(data: object): boolean {
    return Object.keys(data).length === 0;
  }
  static searchPokemon(term:string):Promise<Pokemon[]>{
    return fetch(`http://localhost:3000/pokemons?q=${term}`) 
    .then(response=>response.json())
    .catch(error=>this.handleError(error))
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}

  
