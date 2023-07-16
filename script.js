const formulario = document.getElementById('pokemonForm');
const tabla = document.querySelector('table');
const button = document.getElementById('buttonConsulta');

tabla.style.display = 'none';

const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = document.getElementById('pokemonInput').value;
    if (nombrePokemon === '') {
        alert('Debe ingresar el nombre del pokemon');
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    try {
        const respuesta = await fetch(url);

        if (respuesta.ok) {
            const data = await respuesta.json();

            document.getElementById('nombrePokemon').innerText = data.name;
            document.getElementById('pesoPokemon').innerText = data.weight;
            document.getElementById('tipoPokemon').innerText = data.types[0].type.name;
            document.getElementById('imagenPokemon').src = data.sprites.front_default;
            document.getElementById('estado').innerText = 'Pokemon encontrado';
            tabla.style.display = '';
        } else {
            document.getElementById('estado').innerText = 'Pokemon no encontrado';
        }
    } catch (error) {
        console.log(error);
    }
}

const consultarMetodo = async () => {
    try {
        const respuesta = await fetch('./consulta.php');
        const data = await respuesta.text();

        alert(data);
    } catch (error) {
        console.log(error);
    }
}

formulario.addEventListener('submit', consultarPokemon);
button.addEventListener('click', consultarMetodo);
