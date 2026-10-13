const carsData = [
    {
        id: 1,
        name: "1967 Ford Mustang",
        year: 1967,
        category: "classic",
        image: "https://images.unsplash.com/photo-1552519507-da3b1457f03d?w=500&h=400&fit=crop",
        description: "American muscle car icon, featuring the legendary 289 V8 engine and iconic fastback design."
    },
    {
        id: 2,
        name: "2023 Porsche 911",
        year: 2023,
        category: "sports",
        image: "https://images.unsplash.com/photo-1544034046-6e94c780d555?w=500&h=400&fit=crop",
        description: "The ultimate sports car, combining timeless design with modern technology and performance."
    },
    {
        id: 3,
        name: "1957 Chevrolet Bel Air",
        year: 1957,
        category: "classic",
        image: "https://images.unsplash.com/photo-1511758501464-e5cbe2fe8a3e?w=500&h=400&fit=crop",
        description: "The quintessential American dream car, featuring the famous two-tone paint and wraparound windshield."
    },
    {
        id: 4,
        name: "2024 Tesla Model S",
        year: 2024,
        category: "electric",
        image: "https://images.unsplash.com/photo-1425996446519-45388662502e?w=500&h=400&fit=crop",
        description: "Revolutionary all-electric sedan combining Ludicrous Mode performance with everyday practicality."
    },
    {
        id: 5,
        name: "Mercedes-Maybach S580",
        year: 2023,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1552519507-da3b1457f03d?w=500&h=400&fit=crop",
        description: "The pinnacle of luxury and comfort, featuring executive rear seating and advanced technology."
    },
    {
        id: 6,
        name: "Ferrari F8 Tributo",
        year: 2021,
        category: "sports",
        image: "https://images.unsplash.com/photo-1481031016618-1d1a0bb2f7b1?w=500&h=400&fit=crop",
        description: "Mid-rear V8 masterpiece, delivering 710 CV of pure Ferrari performance and emotion."
    },
    {
        id: 7,
        name: "1969 Chevrolet Camaro",
        year: 1969,
        category: "classic",
        image: "https://images.unsplash.com/photo-1552507365-d8d0d6aba9f3?w=500&h=400&fit=crop",
        description: "Muscle car legend with aggressive styling and powerful V8 options."
    },
    {
        id: 8,
        name: "2022 Audi e-tron GT",
        year: 2022,
        category: "electric",
        image: "https://images.unsplash.com/photo-1544596736-5fbc8b3e13e5?w=500&h=400&fit=crop",
        description: "Elegant electric grand tourer sharing technology with the Porsche Taycan."
    },
    {
        id: 9,
        name: "1931 Bugatti Type 57SC Atlantic replica",
        year: 2020,
        category: "classic",
        image: "https://images.unsplash.com/photo-1526767091675-5213a61f0a7b?w=500&h=400&fit=crop",
        description: "One of the most exclusive and beautiful cars ever built, with only a handful produced."
    },
    {
        id: 10,
        name: "2025 BMW i7",
        year: 2025,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1552519507-da3b1457f03d?w=500&h=400&fit=crop",
        description: "Electric flagship sedan combining BMW's driving dynamics with first-class luxury."
    }
];

function renderCars(cars) {
    const grid = document.getElementById('carsGrid');
    if (!grid) return;
    
    grid.innerHTML = cars.map(car => `
        <div class="car-card" data-category="${car.category}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <span class="car-year">${car.year}</span>
            </div>
        </div>
    `).join('');
}

function filterCars(category) {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const carCards = document.querySelectorAll('.car-card');
    
    // Update active button
    categoryBtns.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter cars
    carCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCars(carsData);
    
    // Category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterCars(category);
        });
    });
});