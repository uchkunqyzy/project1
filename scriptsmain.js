// Жарнама мәліметтерін қосу (мысал ретінде)
const listings = [
    { title: "Ноутбук", category: "electronics", price: 250000, date: "2024-11-01" },
    { title: "Теледидар", category: "electronics", price: 300000, date: "2024-11-02" },
    { title: "Үстел", category: "furniture", price: 40000, date: "2024-10-31" },
    { title: "Ремонт қызметі", category: "services", price: 10000, date: "2024-10-29" },
    { title: "Смартфон", category: "electronics", price: 150000, date: "2024-10-21" },
    { title: "Диван", category: "furniture", price: 100000, date: "2024-10-19" }
];

// HTML-ге хабарламаларды шығару функциясы
function displayListings(filtered) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = ''; // Алдыңғы нәтижелерді тазарту
    filtered.forEach(item => {
        const listing = document.createElement('div');
        listing.classList.add('listing-card');
        listing.innerHTML = `
            <h2>${item.title}</h2>
            <p>Санат: ${item.category}</p>
            <p>Бағасы: ${item.price} tg</p>
            <p>Күні: ${item.date}</p>
        `;
        listingsContainer.appendChild(listing);
    });
}

// Фильтрлер бойынша хабарламаларды көрсету
function applyFilters() {
    const categoryFilter = document.getElementById('category').value;
    const priceFilter = document.getElementById('price').value;
    let filtered = listings;

    // Санат бойынша сүзу
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(item => item.category === categoryFilter);
    }

    // Баға бойынша сұрыптау
    if (priceFilter === 'low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayListings(filtered);
}

// Фильтрлерге оқиғаларды қосу
document.getElementById('category').addEventListener('change', applyFilters);
document.getElementById('price').addEventListener('change', applyFilters);

// Бастапқы хабарламаларды көрсету
displayListings(listings);
