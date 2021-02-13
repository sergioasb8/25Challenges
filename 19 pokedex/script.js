const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonDiv = document.createElement('div');
	pokemonDiv.classList.add('pokemon'); 

	const src =  pokemon.sprites.other.dream_world.front_default;
	const name = pokemon.name;
	const number = pokemon.id;
	let stringNumber = number.toString();
	if(number < 10) {
		stringNumber = '00' + number;
	} else if(number < 100) {
		stringNumber = '0' + number;
	}
	// accesing the types, but it gives me all the types that belongs to the pokemon
	const types = pokemon.types.map(type => type.type.name);
	const type =  main_types.find(type => types.indexOf(type) > -1);

	const color = colors[type];

	pokemonDiv.style.backgroundColor = color;
	
	pokemonDiv.innerHTML = `
	<div class="img-container">
	  <img src="${src}" alt="">
	</div>
	<div class="info">
	  <span class="number">#${stringNumber}</span>
	  <h3 class="name">${name}</h3>
	  <small class="type">Type: <span>${type}</span></small>
	</div>
  </div>
  `
  poke_container.appendChild(pokemonDiv);
}

fetchPokemons()