
// console.log(document) 
// console.log(document.head) 
// console.log(document.body)

// let myData=document.getElementsByTagName("h1") 
// console.log(myData[0].innerText); 

// let display=document.getElementById("display") 
// console.log(display.innerText); 

// let myData1 = document.getElementsByClassName("heading"); 
// console.log(myData1[1].innerText); // Welcome

// let count = 0;
// let display = document.getElementById("display");

// display.innerText = count;

// const incCount = () => {
//     count++;
//     display.innerText = count;
// }

// const decCount = () => {
//     if (count > 0) {
//         count--;
//     }
//     display.innerText = count;
// }

// let count = 0;
// let display = document.getElementById("display");

// function showCount() {
//     display.innerText = count;
// }

// const incCount = () => {
//     count++;
//     showCount();
// }

// const decCount = () => {
//     if (count > 0) {
//         count--;
//     }
//     showCount();
// }
// showCount();


function changeColor() {

    let box = document.getElementById("box");
    let colorCode = document.getElementById("colorCode");

    let color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    box.style.backgroundColor = color;

    colorCode.innerText = color;
}




