function getInput(){
    newArr = [];
    do{
        input = prompt("Input your test please")
        if(input == "stop" || input === null || input.trim()== ""){
            return newArr;
        }
        newArr.push(input)

    }while(true)
}

function render(fn){
    // Function that creates the Array
    arr = fn()
    arr.sort()
    const ul = document.body.querySelector('ul')
    ul.style.opacity = 1;
    arr.forEach((item,index)=>{
        let bt = document.createElement('button')
        bt.setAttribute("id" , "subButton")
        bt.innerText = `This Button is number ${buttonCounter+1}`
        ul.innerHTML += `<li> ${item} --->${buttonCounter+1}</li>`
        ul.appendChild(bt)
        buttonCounter++;
    })
}

function resetList(){

    let ul = document.body.querySelector('ul')
    ul.style.opacity = 0;

    setTimeout(() => {
        li = document.body.querySelectorAll('li') 
    bt = document.body.querySelectorAll('#subButton')     
    li.forEach(item => item.remove())
    bt.forEach(item => item.remove())
    buttonCounter = 0;
    }, 2000);

    
}

buttonCounter = 0;
// render(getInput);
const bt1 = document.querySelector('#addbt');
bt1.onclick = (()=>{render(getInput)})

const delbt = document.querySelector('#delbt');
delbt.onclick = (()=>{resetList()})
