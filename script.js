document.addEventListener("DOMContentLoaded", function () {
    // Håndtering av skjemainnsending
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Forhindre at skjemaet sender data på vanlig måte

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();

        if (name && email) {
            let content = `${name}, ${email}\n`;
            let blob = new Blob([content], { type: "text/plain" });
            let a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "users.txt";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            alert("Brukerdata lagret til fil!");
        } else {
            alert("Vennligst fyll inn både navn og e-post.");
        }
    });

    // Håndtering av toggle switch
    const checkbox = document.getElementById("colorToggle");
    const slider = document.querySelector(".slider");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            slider.classList.add("active"); // Legg til 'active' klassen når aktivert
        } else {
            slider.classList.remove("active"); // Fjern 'active' klassen når deaktivert
        }
    });
});
