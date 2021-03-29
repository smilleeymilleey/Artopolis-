

let button = document.getElementById("btn")
let search = document.getElementById('submit')
  
async function getArtData(query){
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?&q=' + query; 

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let objectId = data.objectId
   
    });
  }



 button.addEventListener("click", function(){
     getArtData(search.value)
console.log(search.value)
 })



  
  

