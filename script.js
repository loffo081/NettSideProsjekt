document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); 

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

    const checkbox = document.getElementById("colorToggle");
    const slider = document.querySelector(".slider");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            slider.classList.add("active"); 
        } else {
            slider.classList.remove("active"); 
        }
    });
});
