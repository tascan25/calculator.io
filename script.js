// alert("* signifies multiply!")
// alert("/ signifies divide")
setTimeout(() => {
    document.getElementById("alrt").style.display = "block"
}, 2000);
setTimeout(() => {
    document.getElementById("alrt").style.display = "none"
}, 20000);
let string = ""
let buttons = document.querySelectorAll(".box")
buttons.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerText ==="="){
        string = eval(string)
        document.querySelector(".input").value = string
    }
    else if(e.target.innerText === "C" || e.target.innerText === "AC"){
        string = ""
        document.querySelector(".input").value = string
    }
    else{
        string = string + e.target.innerText
        document.querySelector(".input").value = string
    }
    
})
})




