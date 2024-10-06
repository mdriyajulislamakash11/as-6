
// load categories button
const loadCategories = () => {
    // fethe
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
};

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

// load cards 
const loadCards = () => {
    // fethe
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => displayCards(data.pets))
        .catch(error => console.log(error))
};

const displayCards = (card) => {
    const cardContainer = document.getElementById('card-container')
    console.log(card)

    card.forEach((cards) => {
        console.log(cards)
        const cardDiv = document.createElement('div');
        cardDiv.classList = "bg-red-500"
        cardDiv.innerHTML = `

        <div class="card bg-base-100 w-96 shadow-xl">
        <figure class="px-10 pt-10">
            <img class="object-cover"
            src= ${cards.image}
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body">
            <div>
                <h1>${cards.pet_name}</h1>

                <p >${cards.breed}, </p>
                <p >${cards.date_of_birth}</p>
                <p >${cards.gender}</p>
                <p >${cards.price}</p>
                
            </div>
        </div>
        </div>
        `;
        cardContainer.append(cardDiv)
    });


};


const displayCategories = (categorys) => {
    const displayCategoriesButton = document.getElementById('categories-btn');

    categorys.forEach(item => {
        // console.log(item);
        // create button ctaegories
        const div = document.createElement('div');
        div.classList = 'btn w-3/12  rounded-full h-[80px]'
        div.innerHTML = `
        <div class="flex items-center text-2xl font-bold inter">
             <img src="${item.category_icon}" icon" class="w-10">
            <p>${item.category}</p>
        </div>
        
        `
        displayCategoriesButton.append(div);
    });
};

loadCategories();
loadCards();


