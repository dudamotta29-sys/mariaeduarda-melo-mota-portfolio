console.log("JavaScript funcionando!");

// Exemplo simples de interação
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.addEventListener("click", () => {
            alert("Você clicou no título!");
        });
    }
});
