function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dot-button')) {
      const dropdowns = document.getElementsByClassName("dropdown");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
  }