const poke_container=document.getElementById('poke_container');
const pokemons_number=150;
//fetch the initial 150 pokemons
const fetchPokemons = async ()=>{
    for(let i=1;i<=pokemons_number;i++){
        await getPokemon(i);
    }
}
//make the pokemon api request
const getPokemon = async id =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon= await res.json();
    createPokemonCard(pokemon);
}

const createPokemonCard=(pokemon)=>{
    const pokemonEl=document.createElement('div');//create a new div in the html document
    pokemonEl.classList.add('pokemon');
    const{id,name,sprites,types}=pokemon;
    const type=types[0].type.name;
    const pokeInnerHTML=`
    <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}"/>
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type:<span>${type}</span></small>
    </div>
    <div>
        <button type="button">Detalhes</button>
    </div>
    `;
    pokemonEl.innerHTML=pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

const openPokemonDetail=(pokemon)=>{

}

fetchPokemons();