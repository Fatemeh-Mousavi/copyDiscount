const text = document.querySelector(".text");
const textButton = document.querySelector(".text-button");

textButton.addEventListener("click", ()=>{

    let InputValue = text.textContent;
    console.log(InputValue)

    navigator.clipboard.writeText(InputValue);
    textButton.innerHTML= " کپی شد";
    // textButton.style.backgroundColor= "blue";

    setTimeout(()=>{
    textButton.innerHTML= "کپی کردن" ;
    // textButton.style.backgroundColor= "steelblue";


    }, 2000)
})

