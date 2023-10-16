// Récupérer l'identifiant du produit à partir de l'URL (paramètre d'URL)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Fonction pour charger les données du produit à partir du fichier JSON
async function loadProductDetails() {
    try {
        // Charger les données du fichier JSON
        const response = await fetch("products.json");
        if (!response.ok) {
            throw new Error("Réponse non valide depuis le serveur");
        }
        const data = await response.json();

        // Trouver le produit correspondant dans les données
        const product = data.find(item => item.id == productId); // Utilisation de ==  non stricte

        if (product) {
            // Afficher les détails du produit sur la page
            displayProductDetails(product);
        } else {
            // Gérer le cas où le produit n'est pas trouvé
            console.error("Produit non trouvé");
        }
    } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
    }
}

// Fonction pour afficher les détails du produit sur la page
function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById("product-details");

    // Afficher les détails du produit dans la page
    productDetailsContainer.innerHTML = `
        <img src="${product.image}">
        <h2>${product.title}</h2>
        <p>Connecteur de charge : ${product['Connecteur de charge']}</p>
        <p>Désoxydation : ${product.Désoxydation}</p>
        <p>Batterie : ${product.Batterie}</p>
        <!-- Ajoutez d'autres détails du produit si nécessaire -->
    `;
}

// Appeler la fonction pour charger les données du produit spécifique
loadProductDetails();
