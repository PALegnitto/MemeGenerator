const imageUrl = document.querySelector("#image-url");
let urlInput = '';
const upperText = document.querySelector("#upper-text");
let upperTextInput = '';
const lowerText = document.querySelector("#lower-text");
let lowerTextInput = '';
const submitButton = document.querySelector('#clear-button');
const form = document.querySelector('.form-inputs');
// const upperTextDisplay = document.querySelector('#upper-text-display');
// const lowerTextDisplay = document.querySelector('#lower-text-display');
const imageDisplay = document.querySelector('.img-display');
const memeBox = document.querySelector(".meme-box");
let clickToDelete = {};
//const clickToDelete = document.querySelector('.meme-class');
let idCount = 0;

//const variables to house the node, let variabls to store the values from the form.


imageUrl.addEventListener('change', function (event) {
    urlInput = event.target.value;
    
   
});

upperText.addEventListener('change', function (event) {
    upperTextInput = event.target.value;
});

lowerText.addEventListener('change', function (event) {
    lowerTextInput = event.target.value;
    console.log(event);
});

/*clickToDelete.addEventListener('submit', function (event) {

});*/

// assigning values from the form to be stored in there js variables

form.addEventListener('submit', function (event) {
    event.preventDefault();

    imageUrl.value = '';
    upperText.value = '';
    lowerText.value = '';

    const newMeme = document.createElement("div");
    const newUpperTxt = document.createElement("p");
    const newLowerTxt = document.createElement("p");
    const newImg = document.createElement('img');
    const deleteMessage = document.createElement('p');

    //create unique set of meme elements

    newUpperTxt.innerHTML = upperTextInput;
    newLowerTxt.innerHTML = lowerTextInput;
    newImg.src = urlInput;
    deleteMessage.innerText = 'Click to Delete';
    //add form values to new elements

    newUpperTxt.setAttribute('class', 'img-txt upper-text-display');
    // newUpperTxt.setAttribute('id', 'upper-text-display');
    newLowerTxt.setAttribute('class', 'img-txt lower-text-display');
    // newLowerTxt.setAttribute('id', 'lower-text-display');
    newImg.setAttribute('class', "img-display");
    newImg.setAttribute('type', "image");
    newMeme.setAttribute('class', "meme-class");
    deleteMessage.setAttribute('class',"delete-message");
   // newMeme.setAttribute('id', `newMeme${idCount}`);
    //idCount++;
    //setting ID's and class as well as a unique ID to container div and incrementing serializer

    newMeme.addEventListener('click', function (event) {
        newMeme.remove();
    });


    newMeme.append(newImg,newUpperTxt, deleteMessage, newLowerTxt);
    //add new elements to container

    memeBox.append(newMeme);
    //add container of new memes to the meme box;

});

//function creates elements, assigns values/classes/ids, nests in a new div and appends to memebox.


