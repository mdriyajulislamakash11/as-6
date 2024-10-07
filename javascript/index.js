
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

}

const loadImages = (picture) => {

    console.log(picture)

    const likepas = document.getElementById('like-container')
    const likeadd = document.createElement('div')
    likeadd.classList = "p-1"
    likeadd.innerHTML = `

            <div class="">
                <img class="w-[200px] "
                src= ${picture}
                alt="Shoes">
            </div>   
          
    
    `
    likepas.append(likeadd)
};

// show modal
const showModal = (detail) => {
    console.log(detail)
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${detail}`)
        .then(res => res.json())
        .then(data => displaModalCard(data.petData))

}

// {
//     "status": true,
//     "message": "successfully fetched pet data using id 1",
//     "petData": {
//       "petId": 1,
//       "breed": "Golden Retriever",
//       "category": "Dog",
//       "date_of_birth": "2023-01-15",
//       "price": 1200,
//       "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//       "gender": "Male",
//       "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//       "vaccinated_status": "Fully",
//       "pet_name": "Sunny"
//     }
//   }

// card details with modal
const displaModalCard = (modal) => {
    console.log(modal);

    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `

    <img src=${modal.image} 
    class="w-full h-[270px] obcejt-cover"
    alt="">
    <div>
        <h2 class="text-2xl font-bold py-4 inter"> ${modal.pet_name}</h2>

    <div class="text-gray-400 flex gap-8 lato">
        <div class="">
            <p>  <i class="fa-solid fa-border-all"></i> Breed: ${modal.breed} </p>
            <p> <i class="fa-solid fa-mercury"></i> Gender: ${modal.gender}</p>
            <p> <i class="fa-solid fa-syringe"></i> Vaccinated status: ${modal.vaccinated_status}$ </p>
        </div>
        <div>
            <p> <i class="fa-regular fa-calendar-days"></i> Birth: ${modal.date_of_birth}</p>
            <p> <i class="fa-solid fa-dollar-sign"></i> Price: ${modal.price}$ </p>
        </div> 
    </div>

    <div class="mt-4">
        <h2 class="inter font-bold mb-3"> Details Information </h2>
        <p> ${modal.pet_details}</p>
    
    </div>

    `;


    document.getElementById('customModal').showModal();
}

const displayCards = (card) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";

    if (card.length == 0) {
        cardContainer.classList.remove('grid')
        cardContainer.innerHTML = `
        
        <div class="main-h-[400px] w-full flex flex-col gap-5 justify-center items-center text-center py-[100px]">
            <img src="./images/error.webp" >
            <p class="text-[32px] font-bold">No Information Available</p>
            <p class="text-gray-400">It is a long established fact that a reader will be distracted by   the readable content of a page when looking at
             <br>   its layout. The point of using Lorem Ipsum is that it has a.
            </p>
        </div>
        
        `;
        return cardContainer;
    } else {
        cardContainer.classList.add('grid')
    }


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
                    <p onclick="loadImages('${cards.image}')" class="btn text-[18px] font-bold"> <i class="fa-regular fa-thumbs-up "></i></p>
                    <button class="btn text-[#0E7A81] text-[18px] font-bold">Adopt</button>
                    <button onclick="showModal('${cards.petId}')" class="btn text-[#0E7A81] text-[18px] font-bold col-span-2 mt-2">Details</button>
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
        div.classList = 'btn w-2/12 rounded-full h-[80px]'
        div.innerHTML = `
        <button onclick="loadCategoriesCard('${item.category}')" class="flex items-center text-2xl font-bold inter gap-5 my-6">
             <img src="${item.category_icon}" icon" class="w-10">
            <p class="hidden md:block">${item.category}</p>
        </button>
        
        `;

        displayCategoriesButton.append(div);
    });

};




loadCategories();
loadCards();





{/* <div> 
<h2 class="text-[20px] font-bold inter mb-2"> ${cards.pet_name}</h2>
   
</div> */}