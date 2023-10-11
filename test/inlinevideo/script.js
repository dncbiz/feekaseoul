document.querySelector("#volume-switcher").onchange = function() {
  document.querySelector("#theplayer").muted = !this.checked;
}