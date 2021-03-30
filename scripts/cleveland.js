let test = function(){

    let apiUrl= 'https://openaccess-api.clevelandart.org/api/artworks/'

    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data){
    console.log(data);
    })
}

test();