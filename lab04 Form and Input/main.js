const users = [
    {user: 'Andy' , password : 1234},
    {user: 'Bobby' , password : 1234},
    {user: 'Candy' , password : 1234},
    {user: 'Danny' , password : 1234},
]


//HW login function
///check for login name pw


let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let loginForm = document.querySelector('#login-form')
let output = document.querySelector('.output')

// const hdlInp1Click = ()=>{
//     output.textContent += (inp1.value)
// }

// inp1.addEventListener('change',hdlInp1Click)

const hdlSubmit = (e)=>{
    e.preventDefault()
    output.textContent = (inp1.value) + ` : ${inp2.value}`
    alert((inp1.value) + ` : ${inp2.value}`)
}
loginForm.addEventListener('submit',hdlSubmit)