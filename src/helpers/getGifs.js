
//Al ser una funcion async no regresa directamente los gifs, regresa una promesa que resuelve la coleccion de mis imagenes 
export const getGif = async(category) =>{ //hace la peticion http, trae las imagenes, las procesa y las retorna.
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)  }&limit=10&api_key=XDXJAFp31CpfnAFSb791D58T9eAWJn5V`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()//.json por que lo que recibe es un jason 

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    
    return gifs;
}
