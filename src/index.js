// write your code here

const ramenMenu = document.querySelector("#ramen-menu")
//establish the menu of the ramen assign to a variable

//now we gotta add the images to this div
function importRamen(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenImages)
}
// we're fetching the endpoint stuffs
importRamen();

//now make a function for each image??
function renderImage(ramens){
    const img = document.createElement('img');
    img.src = ramens.image
    img.alt = ramens.name
    img.dataset.id = ramens.id
    ramenMenu.appendChild(img)

    //create click event for images
    img.addEventListener("click", function(event){
        importRamen(event.target.dataset.id)
    })
}

//use teh callback function to render each image
function eachRamen(ramenPics){
    ramenPics.forEach(ramen => {
        renderImage(ramen);
    })
}

//now function for fetching ramen id??

//ramen info inside ramen-detail div - where it says "insert comment here and insert rating here"

function createForm(ramen){
    const ramenDetail = document.querySelector("#ramen-detail");
    const img = document.querySelector(".detail-image");
    const h2 = document.querySelector(".name");
    const h3 = document.querySelector(".restaurant");
}


//create new ramen after submitting new-ramen form
//Need to append to #ramen-menu div but if refresh, it is no longer on page 
//likely need to use event.preventDefault();

function newRamen(){
    const ramenRating = document.querySelector("#ramen-rating")
    ramenRating.addEventListener("submit", function(event){
        event.preventDefault();
        const newName = document.querySelector("name").value;
        const newResturant = document.querySelector("restaurant").value;
        const newImage = document.querySelector("image").value;
        const newRating = document.querySelector("rating").value;
        const newComment = document.querySelector("comment").value;

        const updatedObj = {
            id:parseInt(ramenRating.dataset.id),
            name: newName,
            restaurant: newResturant,
            img: newImage,
            rating: newRating,
            comment: newComment
        }
        event.target.reset();
    })
}

