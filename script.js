function openTab(evt, tabName) {

  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  var tabbuttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove("active");
  }

  
  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
  var firstTabButton = document.querySelector(".tab-button");
  if (firstTabButton) {
    firstTabButton.classList.add("active");
    var firstTabName = firstTabButton.getAttribute("data-tab");
    document.getElementById(firstTabName).style.display = "block";
  }
});


var tabButtonsContainer = document.getElementById("tab-buttons");
if (tabButtonsContainer) {
  tabButtonsContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("tab-button")) {
      openTab(event, event.target.getAttribute("data-tab"));
    }
  });

}
