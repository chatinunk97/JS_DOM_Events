const users = [
    { user: 'Andy', password: 1234 },
    { user: 'Bobby', password: 1234 },
    { user: 'Candy', password: 1234 },
    { user: 'Danny', password: 1234 },
]


let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let loginForm = document.querySelector('#login-form')
let output = document.querySelector('.output')
let table = document.querySelector('table')


let fail_login_count = 0;
const hdlSubmit = (e,addrow) => {


    e.preventDefault()
    foundIndex = users.findIndex((item) => item['user'] === inp1.value &&
        item['password'] === +inp2.value)
        // The reason why this inp2 is the only one with + is
        // It's for comparing checking matters other places are just string to be put in the table
    loginPackInfo = [];

    if (foundIndex != -1) {
        loginPackInfo.push(inp1.value,inp2.value,"Success")
        // Creating a new display message and assigning classes to that element
        newdisplay = document.createElement('h1')
        newdisplay.innerText = 'Login Successful !'
        newdisplay.classList = ('sucess_ful_login')
        output.appendChild(newdisplay)


        loginForm.classList.add('disableInput')
        setTimeout(() => {
            // Delete the whole element after displayed
            newdisplay.remove();
            loginForm.classList.remove('disableInput');
        }, 3000);
    }
    else {
        loginPackInfo.push(inp1.value,inp2.value,"Failed")

        newdisplay = document.createElement('h1')
        newdisplay.innerText = 'Failed Login !'
        newdisplay.classList = ('fail_login')
        output.appendChild(newdisplay)


        loginForm.classList.add('disableInput')
        fail_login_count++
        setTimeout(() => {
            newdisplay.remove();
            loginForm.classList.remove('disableInput');
        }, 3000);//(1)setTimeout does not stop the whole webpage

    }
    if (fail_login_count >= 3) {
        //(2) So I have to set this to delay as well or else it will add first and then got remove from the top classList.remove()
        setTimeout(() => {
            loginForm.classList.add('disableInput')
        }, 3000)
    }
    addRow(loginPackInfo)
}



function addRow(arr_login){
    newtr = document.createElement('tr')
    table.appendChild(newtr)
    for(i=0; i<3 ; i++){
        newtd = document.createElement('td')
        newtd.innerText = arr_login[i];
        if(arr_login[i]== 'Success'){
            newtd.classList.add('sucess_ful_login')
        }
        else if(arr_login[i]== 'Failed'){
            newtd.classList.add('fail_login')
        }
        newtr.appendChild(newtd)
    }
}


loginForm.addEventListener('submit', hdlSubmit)
// This means the event listner; submit (for forms) when press submit it will run hdlSubmit
//So basically we write everything to put it all here


// Question if we use the above pattern can we parse in a function as an argument ?
//like hdlSubmit(fn,fn2)