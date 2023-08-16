function btnClick(){
  alert(555)
}
function showInfo(){
  let h1=document.querySelector('h1');
  h1.innerText = "INFO HERE !"
}
let btn = document.querySelector('button');
btn.addEventListener('click',btnClick)
btn.addEventListener('click',showInfo)

let h2=document.querySelector('h2');
h2.style.backgroundColor= 'red'
h2.addEventListener('click', ()=> {
  btn.removeAttribute('click')
})