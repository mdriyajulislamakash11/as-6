// Load categories button
const loadCategories = () => {

    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))

};

// Load cards
const loadCards = () => {

    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => displayCards(data.pets))
        .catch(error => console.log(error))

};

const removeActiveClassBtn = () => {
    const buttons = document.getElementsByClassName("category-switch-btn");
    console.log(buttons)

    for (let btn of buttons) {
        btn.classList.remove("switch")
    }
}


// Load categories card
const loadCategoriesCard = (switchBtn) => {
    console.log(switchBtn)
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${switchBtn}`)
        .then(res => res.json())
        .then(data => {

            removeActiveClassBtn()


            const newActiveBtn = document.getElementById(`btn-${switchBtn}`)
            newActiveBtn.classList.add("switch")
            displayCards(data.data)
        })
        .catch(error => console.log(error))

};


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

// show modal adopt 
const showAdopt = (adopt) => {
    console.log(adopt);

    const adoptContainer = document.getElementById('modal-content-adopt');
    adoptContainer.innerHTML = `
    <img class=" mt-12 mb-6 mx-auto" src="https://img.icons8.com/?size=48&amp;id=63312&amp;format=png" alt="success-image">
        <h3 class=" py-4 text-3xl lg:text-5xl font-bold">Congratulations!</h3>
        <p class="py-4 text-xl font-bold">
            Adoption Process is Starting For your Pet
        </p>
        <div id="count" class="text-7xl font-extrabold mb-12">3</div>
    `;

    const modal = document.getElementById('customModalAdopt');
    modal.showModal();

    let countdown = 2;
    const interval = setInterval(() => {
        document.getElementById('count').innerText = countdown;
        countdown--;


        if (countdown < 0) {
            clearInterval(interval);
            modal.close();
        }
    }, 1000);
};



// show modal details
const showModal = (detail) => {
    console.log(detail)
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${detail}`)
        .then(res => res.json())
        .then(data => displaModalCard(data.petData))

};

// card details with modal
const displaModalCard = (modal) => {
    console.log(modal);

    const detailContainer = document.getElementById('modal-content');
    detailContainer.classList = ""
    detailContainer.innerHTML = `

    <img src=${modal.image} 
    class="w-full h-[270px] obcejt-cover rounded"
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
};

const displayCards = (card) => {
    const cardContainer = document.getElementById('card-container');
    document.getElementById('grandFather').classList.add('hidden');
    document.getElementById('sipnner').classList.remove('hidden');
    cardContainer.innerHTML = "";

    setTimeout(() => {

        document.getElementById('grandFather').classList.remove('hidden');
        document.getElementById('sipnner').classList.add("hidden")


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
                    <div> 
                    <h2 class="text-[20px] font-bold inter mb-2"> ${cards.pet_name ? cards.pet_name : 'Not Available'}</h2>
                        <p>  <i class="fa-solid fa-border-all"></i> Breed: ${cards.breed ? cards.breed : 'Not Available'}</p>
                        <p> <i class="fa-regular fa-calendar-days"></i> Birth: ${cards.date_of_birth ? cards.date_of_birth : 'Not Available'}</p>
                        <p> <i class="fa-solid fa-mercury"></i> Gender: ${cards.gender  ? cards.gender : 'Not Available'}</p>
                        <p> 
                            <i class="fa-solid fa-dollar-sign"></i> 
                            Price: ${cards.price ? `${cards.price}$` : 'Not Available'}
                        </p>
                        
                       
                    </div>
                        
                    </div>
    
                   <div class="mt-3 flex justify-between items-center">
                   
                            <p onclick="loadImages('${cards.image}')" class="btn text-[18px] font-bold w-[80px]"> <i class="fa-regular fa-thumbs-up "></i></p>

                            <button onclick="showAdopt('${cards.petId}')" class="  text-[#0E7A81] btn btn-outline btn-success text-[18px] font-bold">Adopt</button>

                            <button onclick="showModal('${cards.petId}')" class= "text-[#0E7A81]  text-[18px] btn btn-outline btn-success font-bold col-span-2 mt-2">Details</button>

                        
                    </div>
    
                    
                </div>
            
            `;
            cardContainer.append(cardDiv)
        });

    }, 2000)




};


const displayCategories = (categorys) => {
    const displayCategoriesButton = document.getElementById('categories-btn');

    categorys.forEach(item => {
        // console.log(item);
        // create button ctaegories
        const div = document.createElement('div');
        div.classList = 'lg:w-[300px] w-full  lg:h-[104px]'
        div.innerHTML = `
        <div id="btn-${item.category}" onclick="loadCategoriesCard('${item.category}')" class="flex justify-center items-center text-2xl font-bold border p-6 inter gap-5 my-6 category-switch-btn ">
             <img src="${item.category_icon}" icon" class="">
            <button class="">${item.category}</button>
        </div>
        
        `;

        displayCategoriesButton.append(div);
    }, 2000);



};

loadCategories();
loadCards();





