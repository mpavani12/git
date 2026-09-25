
// console.log(document)
// console.log(document.head)
// console.log(document.body)

// let myData=document.getElementsByTagName("h1")
// console.log(myData[0].innerText);

// let display=document.getElementById("display")
// console.log(display.innerText);

// let myData1 = document.getElementsByClassName("heading");
// console.log(myData1[1].innerText); // Welcome

// let count=0;
// let display=document.getElementById("display")

// display.innerText=count

// const incCount =() => {
//     count++
//     display.innerText=count
// }

// const decCount =() => {
//     if(count>0){
//         count--
//     }
//     display.innerText = count
// }

let count=0;
let display=document.getElementById("display")

function showCount() {
    display.innerText = count;
}

const incCount =() => {
    count++
    showCount()
}

const decCount =() => {
    if(count>0){
        count--
    }
    showCount()
}
showCount()


