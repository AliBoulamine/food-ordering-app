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

// Fonction pour gérer la déconnexion
function handleLogout() {
    // Redirige vers la page de connexion
    window.location.href = "index.html";
}

// Variable globale pour stocker le nombre d'articles dans le panier
let cartCount = 0;

// Fonction pour mettre à jour le panier en temps réel
function addToCart(itemId) {
    cartCount++;
    const cartButton = document.getElementById('cart-counter');
    if (cartButton) {
        cartButton.innerText = `🛒 ${cartCount} Items`;
    }
    // Petite animation visuelle optionnelle pour l'expérience utilisateur
    alert("Item added to cart successfully!");
}

// Fonction pour charger et afficher le menu dynamiquement (AJAX)
function loadMenu() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('menu-container');
            if (!container) return; 
            
            container.innerHTML = ''; 
            
            data.forEach(item => {
                // Nous avons ajouté un bouton "Add to cart" avec un événement onclick
                const card = `
                    <div class="bg-pink-100 rounded-xl p-4 relative shadow-sm hover:shadow-md transition flex flex-col h-full">
                        <span class="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">★ ${item.rating}</span>
                        <button class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition">♡</button>
                        <img src="${item.image}" alt="${item.name}" class="w-48 h-48 object-cover rounded-full mx-auto my-4 shadow-lg border-4 border-white">
                        <h3 class="text-lg font-bold text-gray-800 text-center">${item.name}</h3>
                        <p class="text-gray-700 font-semibold mt-1 text-center mb-4">Price : $ ${item.price}</p>
                        
                        <button onclick="addToCart(${item.id})" class="mt-auto bg-orange-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition shadow-md w-full">
                            Add to Cart
                        </button>
                    </div>
                `;
                container.innerHTML += card; 
            });
        })
        .catch(error => console.error('Error loading menu:', error));
}

// Exécuter loadMenu uniquement si on est sur la page menu
if (window.location.pathname.includes('menu.html') || window.location.href.includes('menu.html')) {
    loadMenu();
}

// Fonction pour gérer la déconnexion
function handleLogout() {
    window.location.href = "index.html";
}

// Fonction pour la page de Login (inchangée)
function handleLogin(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "admin@gmail.com" && password !== "") {
        alert("This page says\nsuccessfully login!");
        window.location.href = "menu.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}