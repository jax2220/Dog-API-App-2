'use strict';
function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });  
}
function getDogImage(){
    let userInput = $('#breed-input').val();
   
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'))
    
};

function displayResults(responseJson){
     console.log(responseJson);
     if(responseJson.status == "error"){
         alert('cant find breed');
     }else{
     $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
     $('.dog-pictures').removeClass('hidden');
     };
};

$(function(){
    console.log('App ready to run! Waiting for submit!');
    watchForm();
});