

let string = "";
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');

buttons.forEach(button => {
button.addEventListener('click',(e)=>{

let value = e.target.innerHTML;

if(value === '='){
string = eval(string);
display.value = string;

}else if(value === 'C'){
string = "";
display.value = "";

}else{
string += value;
display.value = string;
}

});
});


// DARK LIGHT THEME
let toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerHTML="☀️"
}else{
toggle.innerHTML="🌙"
}

});
