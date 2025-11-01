const container = document.querySelector(".container");


container.style.height = "960px";
container.style.width = "960px"; 

function createCanvas(numberOfSquares) {
    console.log('i am inside a function');
    
    container.innerHTML = ''; 

    const perSide = Math.sqrt(numberOfSquares);
    
    const containerWidth = parseInt(container.style.width); 
    
  
    const fragment = document.createDocumentFragment(); 
    
    for (let i = 0 ; i < numberOfSquares; i++){
    
        const boxSize = containerWidth / perSide; 
        
        const box = document.createElement("div"); 
        box.className = "box"; 
        box.style.backgroundColor = "antiquewhite";
        
       
        box.style.height = `${boxSize}px`;
        box.style.width = `${boxSize}px`;
        
        fragment.appendChild(box); 
        
        box.addEventListener("mouseenter" , () => {
            const currentColor = box.style.backgroundColor;
            console.log(currentColor); 
            box.style.backgroundColor = "black";
        });
    }
    
    container.appendChild(fragment);
}


const button = document.querySelector("#reset-button")

button.addEventListener("click" , () => {
    // CRITICAL FIX 4: prompt returns a string; use parseInt()
    let userInput = parseInt(prompt("How many squares per side for the new grid"));
    
    if (userInput > 0) {
        if (userInput > 100) {
            userInput = 100;
        }
        const totalSquares = userInput * userInput; 
        createCanvas(totalSquares);
        
    } else  {
        alert("Please enter a positive number.");
    }
});