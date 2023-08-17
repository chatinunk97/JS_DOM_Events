const users = [
  { user: "Andy", password: 1234 },
  { user: "Bobby", password: 1234 },
  { user: "Candy", password: 1234 },
  { user: "Danny", password: 1234 },
];
/////////////////////////////////

let inp1 = document.querySelector("#username");
let inp2 = document.querySelector("#password");
let submitbt = document.querySelector('#submit')

let loginForm = document.querySelector("#login-form");

let output = document.querySelector(".output");
let table = document.querySelector("table");

let fail_login_count = 0;

///////////////////////////////// Sub Functions ////////////////////////////////


function displayLoginResult(output, foundIndex) {
    // Creating a new display message and assigning classes to that element
    newdisplay = document.createElement("h1");
  
    if (foundIndex != -1) {
      newdisplay.innerText = "Login Successful !";
      newdisplay.classList.add("sucess_ful_login");
    } else {
      newdisplay.innerText = "Failed Login !";
      newdisplay.classList.add("fail_login");
    }
  
    //Alternative way for coloring is to just put in output.style.color="green" this also works
    output.appendChild(newdisplay);
    submitbt.setAttribute('disabled',"") 
    loginForm.classList.add("disableInput");
    setTimeout(() => {
      //Add opacity + transition duration to the element but not yet deleted
      newdisplay.classList.add("opacity");
    }, 3000);
  }

function failCountCheck(fail_count) {
  if (fail_count >= 3) {
    setTimeout(() => {
      loginForm.classList.add("disableInput");
    }, 3000);
    return;
  }
  setTimeout(() => {
    newdisplay.remove();
    loginForm.classList.remove("disableInput");
    submitbt.removeAttribute('disabled') 
  }, 4000);
}

function addRowtoLoginHistory(arr_login) {
    newtr = document.createElement("tr");
    table.appendChild(newtr);
    for (i = 0; i < 3; i++) {
      newtd = document.createElement("td");
      newtd.innerText = arr_login[i];
      if (arr_login[i] == "Success") {
        newtd.classList.add("sucess_ful_login");
      } else if (arr_login[i] == "Failed") {
        newtd.classList.add("fail_login");
      }
      newtr.appendChild(newtd);
    }
  }



///////////////////////// Combining Functions /////////////////////////////

const hdlSubmit = (e,displayFN,failCheckFN,addRow)=> {

  e.preventDefault();/*Note(0)*/ 

  //############## Validate User ##############//
  foundIndex = users.findIndex(
    (item) => item["user"] === inp1.value && item["password"] === +inp2.value//Note(1)
  );


  loginPackInfo = [];


  if (foundIndex != -1) {
    loginPackInfo.push(inp1.value, inp2.value, "Success");
    displayFN(output, foundIndex);
  } 
  else {
    loginPackInfo.push(inp1.value, inp2.value, "Failed");
    displayFN(output, foundIndex);
  }

  failCheckFN(fail_login_count);

  addRow(loginPackInfo);
};




///////////////////////// Adding the function to Event Listener /////////////////////////////

loginForm.addEventListener("submit", (event) => {
  hdlSubmit(event,displayLoginResult,failCountCheck,addRowtoLoginHistory)});


// This means the event listner; submit (for forms) when press submit it will run hdlSubmit
//So basically we write everything to put it all here

// Question if we use the above pattern can we parse in a function as an argument ?
//like hdlSubmit(fn,fn2)


//Note (0) //This prevent the webpage from refreshing after clicking Submit
//Note (1)  // The reason why this inp2 is the only one with + is It's for comparing checking matters other places are just string to be put in the table
//Notes(2) So I have to set this to delay as well or else it will add first and then got remove from the top classList.remove()
