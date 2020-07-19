function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/50")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("It looks like dogs don't like you"));
}

function displayResults(responseJson) {
    numberOfPics = $('#dogPics').val()
    for (let i = 0; i < numberOfPics; i++) {
        $('.results-img').append(`<img src="${responseJson.message[i]}" class="results-img">`)
        $('.results').removeClass('hidden');
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}

$(function() {
    watchForm();
});