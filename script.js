function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "admin@gmail.com" && password !== "") {
        alert("This page says\nsuccessfully login!");
        // Redirection vers le tableau de bord (à créer à la prochaine étape)
        window.location.href = "menu.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}