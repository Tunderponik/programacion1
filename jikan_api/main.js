
const consumir_anime = async () => {

    const anime = await fetch('https://api.jikan.moe/v4/anime?q=beastars&sfw')
        
    const datos1 = await anime.json()
        
    const datos2 = datos1.data
        
    let listado = []
        
    datos2.forEach(anime => {
        
    let columna = `
        <div class="col-lg-4">
            <div class="card">
                <img src="${anime.images.jpg.image_url}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${anime.title}</h5>
                        <p class="card-text">${anime.title_synonyms}</p>
                    </div>
            </div>
        </div>
        `
    listado.push(columna)
    });
    document.getElementById("display_anime").innerHTML =listado.join('')

}
    consumir_anime()