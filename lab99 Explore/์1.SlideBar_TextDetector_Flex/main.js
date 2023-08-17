// Navbar
let navOpen = document.querySelector(".navOpen")
let navBar = document.querySelector("nav")
let mainDiv = document.querySelector('main')
let navClose = document.querySelector('li')
isOpen = false
navOpen.addEventListener("click", (event) => {
    if (!isOpen) {
        mainDiv.style.marginLeft = "100px"
        navBar.style.width = "100px"
        isOpen = true;
    }
    else {
        mainDiv.style.marginLeft = "0px"
        navBar.style.width = "0px"
        isOpen = false;
    }
})
navClose.addEventListener("click", (event) => {
    mainDiv.style.marginLeft = "0px"
    navBar.style.width = "0px"
    isOpen = false;
})


// Flex Changing
let flexChange = document.querySelector(".flexChange")
flexGrow = false
flexChange.addEventListener('click', (event) => {
    if (!flexGrow) {
        document.querySelector('.flexbig').style.flexGrow = '5'
        flexGrow = true;
    }
    else {
        document.querySelector('.flexbig').style.flexGrow = '0'
        flexGrow = false;
    }

})


//Input Detecting
let inputTab = document.querySelector("#userInput")
let displaySearch = document.querySelector('#displaySearch')

const stock = [
    { productCode: '000001', productName: 'Phone', productPrice: 3000 },
    { productCode: '000002', productName: 'iPad', productPrice: 20000 },
    { productCode: '000003', productName: 'Burger', productPrice: 500 },
    { productCode: '000004', productName: 'PS5', productPrice: 18000 },
    { productCode: '000005', productName: 'Monkey', productPrice: "FREE" },
    { productCode: '000006', productName: 'Banana', productPrice: 20 },
]


inputTab.addEventListener('keyup', (e) => {
    if (inputTab.value.length > 5) {
        foundIndex = stock.findIndex((object) => object['productCode'] == inputTab.value)
        foundProductName = stock[foundIndex]?.['productName']
        foundProductPrice = stock[foundIndex]?.['productPrice']
        if (foundProductName) {
            displaySearch.innerText = `${foundProductName} Price => ${foundProductPrice}`
        }
        else {
            displaySearch.innerText = "Not Found"
        }
    }
    else {
        displaySearch.innerText = "";
    }
})

