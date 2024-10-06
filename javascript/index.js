
// load categories button
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
};

// load cards 
const loadCards = () => {
    // fethe
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => displayCards(data.pets))
        .catch(error => console.log(error))
};

const loadCategoriesCard = (id) => {
   

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then(res => res.json())
        .then(data => displayCards(data.data))
        .catch(error => console.log(error))


    setTimeout( function () {    
    }, 2000)
}

const displayCards = (card) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML= "";
    card.forEach((cards) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList = "card bg-base-100 shadow-xl m-3 "
        cardDiv.innerHTML = `

        
            <figure class="px-5 pt-5 h-[200px]">
                <img
                src= ${cards.image}
                alt="Shoes"
                class="rounded-xl h-full w-full object-cover" />
            </figure>
            <div class="px-5 pt-5">
                <div> 
                <h2 class="text-[20px] font-bold inter mb-2"> ${cards.pet_name}</h2>
                    <p>  <i class="fa-solid fa-border-all"></i> Breed: ${cards.breed}</p>
                    <p> <i class="fa-regular fa-calendar-days"></i> Birth: ${cards.date_of_birth}</p>
                    <p> <i class="fa-solid fa-mercury"></i> Gender: ${cards.gender}</p>
                    <p> <i class="fa-solid fa-dollar-sign"></i> Price: ${cards.price}$ </p>
                </div>

               <div class="grid grid-cols-2 items-center mt-3">
                    <p class="btn text-[18px] font-bold"> <i class="fa-regular fa-thumbs-up "></i></p>
                    <button class="btn text-[#0E7A81] text-[18px] font-bold">Adopt</button>
                    <button class="btn text-[#0E7A81] text-[18px] font-bold col-span-2 mt-2">Details</button>
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
        <button onclick="loadCategoriesCard('${item.category}')" class="flex items-center text-2xl font-bold inter">
             <img src="${item.category_icon}" icon" class="w-10">
            <p>${item.category}</p>
        </button>
        
        `;

        displayCategoriesButton.append(div);
    });

};




loadCategories();
loadCards();


