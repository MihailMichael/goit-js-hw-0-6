const texted = document.getElementById("font-size-control");
const sizes = document.getElementById("text");
texted.addEventListener('change', event =>{
    sizes.style.fontSize = `${event.target.value}px`
})