
let button = document.getElementById("btn")
let search = document.getElementById('submit')

async function getArtId(query){
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?&q=' + query; 

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let objectId = data.objectIDs[0]

      getArtData(objectId);
    });

  }

  button.addEventListener("click", function(){
    getArtData(search.value)
    console.log(search.value)
})
    
getArtId();

// uses object id to get specs on individual paintings

 async function getArtData(objectId){
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectId
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    

  });
}

