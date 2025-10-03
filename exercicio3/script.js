let produtos = document.querySelectorAll(".produto");

for (let p of produtos){
    console.log ("Produto:", p.textContent);
    p.style.color = "blue";
}