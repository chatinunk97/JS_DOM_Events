let h1 = document.querySelector("h1");

h1.onclick = () => {
  h1.classList.toggle("text-red");
};
h1.onmouseleave = ()=>{
    h1.classList.remove("text-red")
    
}
