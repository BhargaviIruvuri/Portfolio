function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var sections = document.getElementsByTagName("section");
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
        section.style.display = "block";
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var hireButton = document.querySelector("#about .hire-button");
    if (hireButton) {
        hireButton.addEventListener("click", function(event) {
            event.preventDefault();
            toggleSection("contact");
            scrollToSection("contact");
        });
    }
});
