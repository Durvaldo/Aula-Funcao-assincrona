async function buscaPokemon(pokemonId) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    const response = await fetch(pokemonUrl)
    const pokemon = await response.json()

    const pokemonNameParagrafo = document.querySelector('#pokemonName')
    pokemonNameParagrafo.innerHTML = pokemon.name

    const pokemonImg = document.querySelector('#pokemonImg')
    pokemonImg.src = pokemon.sprites.front_default
}

function pegaPokemonId() {
    const pokemonId = document.querySelector('#pokemonIdInput')
    buscaPokemon(pokemonId.value)
}