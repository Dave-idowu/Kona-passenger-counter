// document.getElementById("count-el").innerText= 5
let countEl = document.getElementById("count-el")
let saveEl =document.getElementById("save-el")

let count = 0
function increase(){
    count += 1
    countEl.textContent = count   
}

function save(){
    let saved = count + " - "
    saveEl.textContent += saved 
    countEl.textContent = 0
    count = 0
}

//below is a recap of the topic
//Print my Full name
let firstName = "David"
let lastName = "Idowu"

let fullName = firstName + " Mololuwa " + lastName 

console.log (fullName)
//
//Print Hi there, Linda!
let name = "Linda"
let greeting = "Hi there"

function fullgreeting(){
    let fullgreetings = greeting + ", " + name + "!"
    console.log(fullgreetings)
}
fullgreeting()
//
// Add and remove points till it prints 10
let myPoints = 0

function add3points(){
    myPoints = myPoints + 3
}
add3points()
add3points()
add3points()
add3points()

function remove1point(){
    myPoints = myPoints -1
}
remove1point()
remove1point()

console.log(myPoints)