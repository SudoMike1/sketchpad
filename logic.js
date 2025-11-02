const container = document.querySelector(".container");

let isDrawing = false;

container.style.height = "800px";
container.style.width = "800px"; 

container.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});


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
            const toggle1 = document.getElementById("random-colors");

            if (isDrawing){
                if (toggle1.checked){
                    box.style.backgroundColor = getRandomColor();
                } else {
                    const currentColor = box.style.backgroundColor;
                    console.log(currentColor); 
                    box.style.backgroundColor = "black";
                }
            }
        });
    }
    
    container.appendChild(fragment);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


const button = document.querySelector("#reset-button")

button.addEventListener("click" , () => {
    
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

createCanvas(900);