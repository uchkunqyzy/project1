const listings = [
    { title: "Ноутбук", category: "electronics", price: 250000, date: "2024-11-01" },
    { title: "Теледидар", category: "electronics", price: 300000, date: "2024-11-02" },
    { title: "Үстел", category: "furniture", price: 40000, date: "2024-10-31" },
    { title: "Ремонт қызметі", category: "services", price: 10000, date: "2024-10-29" },
    { title: "Диван", category: "furniture", price: 100000, date: "2024-10-19" }
];

function displayListings(filteredListings) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = '';
    filteredListings.forEach(listing => {
        const listingCard = document.createElement('div');
        listingCard.classList.add('listing-card');
        listingCard.innerHTML = `
            <h2>${listing.title}</h2>
            <p>Санат: ${listing.category}</p>
            <p>Бағасы: ${listing.price} тг</p>
            <p>Күні: ${listing.date}</p>
        `;
        listingsContainer.appendChild(listingCard);
    });
}

function filterListings() {
    const category = document.getElementById('categoryFilter').value;
    const price = document.getElementById('priceFilter').value;
    const filteredListings = listings.filter(listing => {
        let categoryMatch = (category === 'all' || listing.category === category);
        let priceMatch = (price === 'all' ||
            (price === 'low' && listing.price <= 50000) ||
            (price === 'medium' && listing.price > 50000 && listing.price <= 100000) ||
            (price === 'high' && listing.price > 100000));
        return categoryMatch && priceMatch;
    });
    displayListings(filteredListings);
}

document.addEventListener('DOMContentLoaded', () => {
    displayListings(listings);
    document.getElementById('categoryFilter').addEventListener('change', filterListings);
    document.getElementById('priceFilter').addEventListener('change', filterListings);
});
