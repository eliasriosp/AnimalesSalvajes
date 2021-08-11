// Funcion IIFE que importa los datos del json animales
let animales= (()=>{
    const url="http://127.0.0.1:5500/animales.json";
    const getData = async ()=>{
        const res= await fetch(url)
        const {animales} = await res.json();
        return animales;
    }
    return {getData}
})();
export default animales