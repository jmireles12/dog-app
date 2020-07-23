function getDogImages(dogPics) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogPics}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(responseJson.message));
}

function displayResults(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.results-img').append(`<img src="${responseJson.message[i]}" class="results-img">`)
        $('.results').removeClass('hidden');
        if ($(responseJson) === "Breed not found (master breed does not exist)")
        alert("Breed not found")
    }
}

function watchForm() {
    $('form').submit(event => {
        let numberOfPics = $(dogPics).val()
        event.preventDefault();
        getDogImages(numberOfPics);
        $('.results-img').html('');
    });
}

$(function() {
    watchForm();
});