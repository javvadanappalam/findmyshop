const shopData = {
    electronics: [
        { name: 'Gadget World', location: 'City Center' },
        { name: 'Tech Haven', location: 'Tech Square' },
    ],
    clothing: [
        { name: 'Fashion Express', location: 'Mall Street' },
        { name: 'Trendy Threads', location: 'Fashion Plaza' },
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
            shopItem.innerHTML = `<a href="#" onclick="showShopDetails('${shop.name}', '${shop.location}')">${shop.name}</a>`;
            shopListSection.appendChild(shopItem);
        });
    }
}

function showShopDetails(name, location) {
    const shopDetailsSection = document.getElementById('shopDetails');
    shopDetailsSection.innerHTML = `<h2>${name}</h2><p>Location: ${location}</p>`;
    shopDetailsSection.style.display = 'block';
}
