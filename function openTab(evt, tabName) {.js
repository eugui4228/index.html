function openTab(evt, tabName) {
    // Declara todas as variáveis
    var i, tabcontent, tabbuttons;

    // Obtém todos os elementos com a classe "tab-content" e os esconde
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtém todos os elementos com a classe "tab-button" e remove a classe "active"
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Mostra o conteúdo da aba atual e adiciona a classe "active" ao botão que a abriu
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Define a aba "Invenções" como ativa por padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    var firstTabButton = document.querySelector(".tab-button");
    if (firstTabButton) {
        firstTabButton.className += " active";
        document.getElementById("inventions").style.display = "block";
    }
});