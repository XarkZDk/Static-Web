'use strict'

let message = document.getElementById("message")
const TIME = 5000
const INTERVAL = 1000  

setTimeout(()=>{
    message.innerHTML = "Hello!"
    message.style.color = "white"
    setInterval(() => {
        if(message.style.color == "white") {
            message.style.color = "gold"
        }
        else message.style.color = "white"
    }, INTERVAL);
},TIME)