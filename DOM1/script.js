
// let data=[]

// const addTask = () => {
//     let userInput = document.getElementById("user-input")
//     data.push(userInput.value)
//     console.log(data);
    
//     display.innerHTML = `<li>${value}</li>`
// }


let data=[]
let display = document.getElementById("display")
let userInput = document.getElementById("user-input")

const addTask = () => {
    data.push(userInput.value)
    
    display.innerHTML = ""

    data.map((task) => {
        display.innerHTML += `<li>${task}</li>`
    })

    userInput.value = ""
}
