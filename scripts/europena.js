let test = function(){

    let apiUrl= 'https://api.europeana.eu/record/v2/search.json?query="Mona+Lisa"&wskey=pagetorp'

    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data){
    console.log(data);
    })
}

test();