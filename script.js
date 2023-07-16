const formulario = document.querySelector('form')
const tabla = document.querySelector('table')
const button = document.getElementById('buttonConsulta')

// async function consulta(){

// }
tabla.style.display = 'none'
const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = formulario.pokemon.value;
    if(nombrePokemon == ''){
        alert("Debe ingregar el nombre del pokemon")
        return;
    }

    // console.log(nombrePokemon)
    // CONFIGURANDO LA PETICIÓN
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    const config = {
        method : 'GET'
    }

    // consulta a la API
    document.getElementById('estado').innerText = 'Buscando pokemon...'
    try {
        // CONSULTA A LA API
        const respuesta = await fetch(url, config);   
        if(respuesta.status == 200){
            const data = await respuesta.json()
            console.log(data.name)
            console.log(data.weight)
            console.log(data.types[0].type.name)
            console.log(data.sprites.front_default)

            document.getElementById('nombrePokemon').innerText = data.name
            document.getElementById('pesoPokemon').innerText = data.weight
            document.getElementById('tipoPokemon').innerText = data.types[0].type.name
            document.getElementById('imagenPokemon').src = data.sprites.front_default
            document.getElementById('estado').innerText = 'Pokemon encontrado'
            tabla.style.display = ''
        }else{
            // alert('error en la consulta')
            document.getElementById('estado').innerText = 'Pokemon no encontrado'
        }
    } catch (error) {
        console.log(error)
    }
}


const consultaAPI = async () => {
    const url = `./consulta.php`
    const config = {
        method : 'GET'
    }

    try {
        // CONSULTA A LA API
        const respuesta = await fetch(url, config);   
        
        const data = await respuesta.text()

        console.log(data)
         
       
    } catch (error) {
        console.log(error)
    }
}


formulario.addEventListener('submit', consultarPokemon )
button.addEventListener('click', consultaAPI )