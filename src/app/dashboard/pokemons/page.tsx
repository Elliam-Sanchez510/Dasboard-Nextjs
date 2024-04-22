import { PokemonsGrid } from "@/app/components/pokemons";
import { PokemonsResponse, } from "@/app/components/pokemons/interface/pokemons-response";
import { SimplePokemon } from "@/app/components/pokemons/interface/simple-pokemon";
import Image from "next/image";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}10&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemons;

}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="fle flex-cold">

            <span className="text-5xl my-2">Listado de Pokémons <small>estático</small> </span>

            <PokemonsGrid pokemons={ pokemons }/>

        </div>
    );
}
