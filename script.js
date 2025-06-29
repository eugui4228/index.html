function openTab(evt, tabName) {
  // Esconde todas as abas
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove a classe "active" de todos os botões
  var tabbuttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove("active");
  }

  // Mostra a aba clicada
  document.getElementById(tabName).style.display = "block";

  // Marca o botão como ativo
  evt.currentTarget.classList.add("active");
}

// Quando a página carrega, exibe a primeira aba
document.addEventListener("DOMContentLoaded", function() {
  var firstTabButton = document.querySelector(".tab-button");
  if (firstTabButton) {
    firstTabButton.classList.add("active");
    var firstTabName = firstTabButton.getAttribute("data-tab");
    document.getElementById(firstTabName).style.display = "block";
  }
});

// Adiciona o evento de clique a todos os botões de aba
var tabButtonsContainer = document.getElementById("tab-buttons");
if (tabButtonsContainer) {
  tabButtonsContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("tab-button")) {
      openTab(event, event.target.getAttribute("data-tab"));
    }
  });
}