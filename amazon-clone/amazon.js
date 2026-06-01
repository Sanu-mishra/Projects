var productDataset = [
    {
        id: 1,
        title: "Premium Wireless Headset",
        price: 6999,
        stars: "★★★★☆",
        imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 2,
        title: "Digital Smart Watch v4",
        price: 3499,
        stars: "★★★★☆",
        imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        title: "RGB Mechanical Keyboard",
        price: 4999,
        stars: "★★★★★",
        imageSrc: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 4,
        title: "Sports Insulated Flask",
        price: 1499,
        stars: "★★★☆☆",
        imageSrc: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 5,
        title: "Waterproof Travel Backpack",
        price: 2999,
        stars: "★★★★★",
        imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 6,
        title: "Outdoor Wireless Speaker",
        price: 2499,
        stars: "★★★★☆",
        imageSrc: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 7,
        title: "Ergonomic Coffee Mug",
        price: 999,
        stars: "★★★★☆",
        imageSrc: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 8,
        title: "Minimalist Desk Lamp",
        price: 1899,
        stars: "★★★★☆",
        imageSrc: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 9,
        title: "Leather Pocket Wallet",
        price: 1299,
        stars: "★★★★★",
        imageSrc: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 10,
        title: "Wireless Optical Mouse",
        price: 849,
        stars: "★★★☆☆",
        imageSrc: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 11,
        title: "Studio Condenser Mic",
        price: 5499,
        stars: "★★★★★",
        imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=300&q=80"
    }
];

var cartItemsCounter = 0;

function filterCatalog() {
    var searchFieldText = document.getElementById("productSearch").value.toLowerCase();
    var targetBox = document.getElementById("catalogView");
    
    targetBox.innerHTML = "";

    for (var index = 0; index < productDataset.length; index++) {
        var currentObject = productDataset[index];

        if (currentObject.title.toLowerCase().includes(searchFieldText)) {
            targetBox.innerHTML += `
                <div class="product-card">
                    <img src="${currentObject.imageSrc}" alt="Real Product Photo">
                    <div>
                        <p class="item-title">${currentObject.title}</p>
                        <p class="item-stars">${currentObject.stars}</p>
                        <p class="item-price">₹${currentObject.price}</p>
                    </div>
                    <button class="add-cart-btn" onclick="updateCartValue()">Add to Cart</button>
                </div>
            `;
        }
    }
}

function updateCartValue() {
    cartItemsCounter = cartItemsCounter + 1;
    document.getElementById("cartCount").innerText = cartItemsCounter;
}

filterCatalog();