let string = "";
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');

// Button clicks
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        handleInput(e.target.innerHTML);
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        // remove last character
        string = string.slice(0, -1);
        display.value = string;
    } else if (key.toLowerCase() === 'c') {
        handleInput('C');
    }
});

function handleInput(value){
    if(value === '='){
        try{
            string = eval(string);
            display.value = string;
        } catch {
            display.value = "Error";
            string = "";
        }
    } else if(value === 'C'){
        string = "";
        display.value = "";
    } else {
        string += value;
        display.value = string;
    }
}

// Dark / Light theme
let toggle = document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggle.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
