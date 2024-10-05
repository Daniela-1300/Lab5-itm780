function promptUserName() {
    let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
}

function enlargeImage(img) {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.3s ease";
}

function resetImage(img) {
    img.style.transform = "scale(1)";
}

function toggleDropdown() {
    const dropdown = document.getElementById("contact-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function toggleDropdownAbout() {
    const dropdown = document.getElementById("about-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.nav-item a')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}