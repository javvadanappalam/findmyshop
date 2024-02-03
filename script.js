const shopData = {
    electronics: [
        { name: 'Gadget World', location: 'City Center',imagePath:'https://images.app.goo.gl/3cEsiizfgugjATee8'},
        { name: 'Tech Haven', location: 'Tech Square',imagePath: 'https://images.app.goo.gl/nq2qhpbqhvn7hBjE8'},
    ],
    clothing: [
        { name: 'Fashion Express', location: 'Mall Street' ,imagePath:'https://images.app.goo.gl/3cEsiizfgugjATee8'},
        { name: 'Trendy Threads', location: 'Fashion Plaza' ,imagePath:'https://images.app.goo.gl/3cEsiizfgugjATee8'},
    ],
    // Add more shop data as needed
};

function loadShops(shopType) {
    const shopListSection = document.getElementById('shopList');
    const shopDetailsSection = document.getElementById('shopDetails');

    // Clear existing content
    shopListSection.innerHTML = '';
    shopDetailsSection.style.display = 'none';

    // Load shops for the selected type
    const shops = shopData[shopType] || [];

    if (shops.length === 0) {
        shopListSection.innerHTML = '<p>No shops available for this category.</p>';
    } else {
        shops.forEach(shop => {
            const shopItem = document.createElement('div');
            shopItem.innerHTML = `<a href="#" onclick="showShopDetails('${shop.name}', '${shop.location}','$(shop.imagePath)')">${shop.name}</a>`;
            shopListSection.appendChild(shopItem);
        });
    }
}

function showShopDetails(name, location, imagePath) {
    const shopDetailsSection = document.getElementById('shopDetails');
    const shopDetailsNav = document.getElementById('shopDetailsNav');

    shopDetailsSection.innerHTML = `
        <img src="${imagePath}" alt="${name}" class="shop-detail-image">
        <h2>${name}</h2>
        <p>Location: ${location}</p>
    `;

    shopDetailsSection.style.display = 'block';
    shopDetailsNav.style.display = 'block';
}

// Add a function to go back to the home view
function goHome() {
    const shopDetailsSection = document.getElementById('shopDetails');
    const shopDetailsNav = document.getElementById('shopDetailsNav');

    shopDetailsSection.style.display = 'none';
    shopDetailsNav.style.display = 'none';
}
// Modify the showShopDetails function to include the image parameter
function showShopDetails(name, location, imagePath) {
    const shopDetailsSection = document.getElementById('shopDetails');
    shopDetailsSection.innerHTML = `
        <div class="container">
            <img src="${imagePath}" alt="${name}" class="shop-detail-image">
            <h2>${name}</h2>
            <p>Location: ${location}</p>
        </div>
    `;
    shopDetailsSection.style.display = 'block';
}

// New function to handle image upload
function handleImageUpload(event) {
    const imagePreview = document.getElementById('imagePreview');
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
function toggleSubcategories(mainCategory) {
    const allCategories = document.querySelectorAll('.main-category');
    
    allCategories.forEach(category => {
        if (category !== mainCategory) {
            category.classList.remove('active');
        }
    });

    mainCategory.classList.toggle('active');
}

