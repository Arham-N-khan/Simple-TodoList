
let inputValue = document.getElementById("input-value");
let para = document.querySelector(".container-para");

const addTodo = ()=>{
   if (inputValue.value !== "") {
    
    console.log(inputValue.value);
    let pELem = document.createElement("p");
    pELem.textContent = inputValue.value;
    para.append(pELem);
    inputValue.value = "";
    
}
}
const removePara = (event)=>{
 console.log(event.target);
 paraRemove = event.target;
 paraRemove.remove();
}
let btn = document.querySelector(".btn").addEventListener("click" ,addTodo);
para.addEventListener("click",removePara)
