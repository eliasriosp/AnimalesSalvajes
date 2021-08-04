import animales from "./Consulta.js"


class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        let Nombre= nombre;
        let Edad= edad;
        let Img= img;
        let Comentarios= comentarios;
        let Sonido= sonido;

        this.getNombre=()=>Nombre;
        this.getEdad=()=>Edad;
        this.getImg=()=>Img;
        this.getSonido=()=>Sonido;
        this.setComentarios= (comentarios)=> (Comentarios=comentarios);
    }
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    set Comentarios(comentario){
        return this.getComentarios(comentario);
    }
    get Sonido(){
        return this.getSonido();
    }
}
class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Rugir(){
        return `./assets/sounds/${this.Sonido}`
    }
};
class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Aullar(){
        return `./assets/sounds/${this.Sonido}`
    }
};
class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Gruñir(){
        return `./assets/sounds/${this.Sonido}`
    }
};
class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Sisear(){
        return `./assets/sounds/${this.Sonido}`
    }
    
};
class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Chillar(){
        return `./assets/sounds/${this.Sonido}`
    }  
};
// FUNCION PARA GENERAR EL CONTENIDO DE LOS ANIMALES.
let Animales=document.getElementById('animal')
let animalessalvajes=document.getElementById("Animales");
let registrar = document.getElementById('btnRegistrar');
Animales.addEventListener('change', async ()=>{
    const al = await animales.getData();
    const preview=document.getElementById('preview');
    const animalSeleccionado=Animales.value
    console.log(al);
    const imagenesAlTemplate= al.find((p)=> p.name==animalSeleccionado);
    let img=`/assets/imgs/${imagenesAlTemplate.imagen}`
    console.log(img)
    preview.innerHTML= `<img src="${img}" width="150" heigth="140">`
    const sonidosAlTemplate= al.find((p)=> p.name==animalSeleccionado);
    let sonido=`${sonidosAlTemplate.sonido}`
    console.log(sonido)
    let audio= document.getElementById('player');
    // let sonar=document.createElement('iframe')
    // let registrar = document.getElementById('btnRegistrar');
    registrar.addEventListener('click',registrando);
    let edad= document.getElementById("edad").value;
    let comentarios= document.getElementById("comentarios").value;
    let div=document.createElement('div')
    // let animalessalvajes=document.getElementById("Animales");
    function registrando(e) {
        console.log(div)
        e.preventDefault()
        sonidoAnimal()
        div.innerHTML=`
        <div class="card" style="width: 5rem; height: 6rem;">
            <img src="${img}" class="card-img-top" id="imagen" >
            <div style="display:none" class="card-body" >
                <h5 class="card-title">"${edad}"<br>"Comentarios"</h5>
                <p class="card-text">"${comentarios}"</p>
            </div>
            <div  class="icons" style="backgraund:">
                <div class="card bg-secondary">
                    <button  class="btn" onclick="" id="activarSonido" >
                    <i class="fas fa-volume-up text-white " >
                    </i></button>
                </div>
            </div>
            
        </div>`
        animalessalvajes.appendChild(div)
        
    
        // let body=document.getElementsByTagName('body')
        // // document.getElementById('imagen').addEventListener('click',modulo)
        // function modulo(){    
        //     body.innerHTML=`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //             <div class="modal-dialog">
        //                 <div class="modal-content">
        //                     <div class="modal-header">
        //                         <img src="${img}" class="card-img-top" id="imagen">
        //                         <h5 class="modal-title" id="exampleModalLabel">${edad}\n Comentarios </h5>
                                
        //                     </div>
        //                     <div class="modal-body">
        //                         ${comentarios}
                    
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>`
        // }
        
        
    }
    function sonidoAnimal(){
        let nuevoanimal;
        let nuevosonido;
        if (Animales.value=="Leon"){
            nuevoanimal= new Leon(Animales,edad,img,comentarios,sonido)
            nuevosonido= nuevoanimal.Rugir()
            audio.setAttribute('src',nuevosonido)
            console.log(nuevosonido)
            
        }else if(Animales.value=="Aguila"){
            nuevoanimal= new Aguila(Animales,edad,img,comentarios,sonido)
            nuevosonido= nuevoanimal.Chillar()
            audio.setAttribute('src',nuevosonido)
            
        }else if(Animales.value=="Oso"){
            nuevoanimal= new Oso(Animales,edad,img,comentarios,sonido)
            nuevosonido= nuevoanimal.Gruñir()
            audio.setAttribute('src',nuevosonido)
           


        }else if(Animales.value=="Serpiente"){
            nuevoanimal= new Serpiente(Animales,edad,img,comentarios,sonido)
            nuevosonido= nuevoanimal.Sisear()
            audio.setAttribute('src',nuevosonido)

        }else if(Animales.value=="Lobo"){
            nuevoanimal= new Lobo(Animales,edad,img,comentarios,sonido)
            nuevosonido= nuevoanimal.Aullar()
            audio.setAttribute('src',nuevosonido)
            
        }
    }      
    
})

    

