// mes données et en cas d'erreurs

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

// on prends les elements html
getData().then((products) => {
    const productContainer = document.getElementById("product");
    const productTemplate = document.querySelector(".card-template");

    products.forEach(product => {
        const productCard = productTemplate.cloneNode(true);
        
        productCard.querySelector(".product-image").src = product.image;
        productCard.querySelector(".product-title").textContent = product.title;
        productCard.querySelector(".product-description").textContent = product.description;
        productCard.querySelector(".product-price").textContent = `Prix : ${product.price}`;

        productContainer.appendChild(productCard);
    });
});
