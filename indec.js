const contenido = document.querySelector(".container_videos"),
btn = document.querySelector(".agregar"),
input = document.querySelector(".entrada");
btn.addEventListener("click",()=>{
    const img = document.createElement("img")
    img.src =input.value;
    contenido.appendChild(img)
    input.value ="";
})
console.log('hola')