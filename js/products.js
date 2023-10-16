const getData = async () => {
    try {
        const response = await fetch("products.json");
        if (!response.ok) {
            throw new Error("Réponse non valide depuis le serveur");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("404 :", error);
    }
};

getData().then((products) => {
    const productContainer = document.getElementById("product");
    const productTemplate = document.querySelector(".card-template");

    products.forEach(product => {
        const productCard = productTemplate.cloneNode(true);
        productCard.classList.remove("hidden"); // Rend la carte visible

        productCard.querySelector(".product-image").src = product.image;
        productCard.querySelector(".product-title").textContent = product.title;

        // Ajoutez un gestionnaire d'événements pour le bouton "Voir les détails"
        const viewDetailsButton = productCard.querySelector(".view-details");
        viewDetailsButton.addEventListener("click", () => {
            // Redirige l'utilisateur vers la page des détails du produit
            window.location.href =`card.html?id=${product.id}`;
        });
        

        productContainer.appendChild(productCard);
    });

    // Fonction pour afficher les détails du produit
    function displayProductDetails(product) {
        const productDetailsContainer = document.getElementById("product-details");
    
        // Construir le contenu HTML pour afficher les détails d'un produiit
        const productDetailsHTML = `
            <h2>${product.title}</h2>
            <p>Connecteur de charge : ${product['Connecteur de charge']}</p>
            <p>Désoxydation : ${product.Désoxydation}</p>
            <p>Batterie : ${product.Batterie}</p>
            <!-- Ajoutez d'autres détails du produit si nécessaire -->
        `;
    
        // Affichez les détails du produit dans la section "product-details"
        productDetailsContainer.innerHTML = productDetailsHTML;
    }
});
