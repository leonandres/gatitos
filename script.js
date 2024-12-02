function llamadoAApiDeFotosDeGatitoAleatoria(){
    const container = document.getElementById("contenedor-foto");

    const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&size=med&limit=1";//Llamado a la api de gatitos: devuelve JPGs, tamanio med y solo 1 foto

    fetch(url)
        .then(response  => {
            if(!response.ok){
                console.log("Gatito no encontrado, vuelva a intentar.");
                console.log("Modificación. Mensaje de prueba Andy")
            }
            return response.json();
            }
        )
        .then(data =>{
            const img = document.createElement("img");
            img.src = data[0].url;

            container.appendChild(img);
        
        }
            
        )

}