console.log("teste")
function buscarImagem(){
    return fetch ("https://randomfox.ca/floof/?ref=public_apis",{
        method: 'get'
    })
        .then(response => response.json())
        .then(data => data.image)
        .then((foxImage) => {const imgElement = document.getElementById("ifox");
                imgElement.src = foxImage;
                imgElement.style.display = "block"; })}
    
    
        

    
 