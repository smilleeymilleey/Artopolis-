
let button = document.getElementById("btn")
let search = document.getElementById('submit')
let row = document.getElementById("test-row");
let num = 0;

async function getArtId(query){
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?&q=' + query; 

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      for (let i = num*6; i < num*6 + 6; i++) {
        let objectId = data.objectIDs[i];
      
        getArtData(objectId);
      }
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
    let metDiv = document.createElement("div");
    let divContainer = document.getElementById("metRow");

    let titleElmt = document.createElement("p");
    titleElmt.setAttribute("id","imageTitle");
    let title = data.title;
    titleElmt.innerHTML = "Title: " + title;

    let mediumElement = document.createElement("p");
    mediumElement.setAttribute("id","metMedium");
    let metMedium = data.medium;
    mediumElement.innerHTML = "Medium: " + metMedium;


    let artistElement = document.createElement("p");
    artistElement.setAttribute("id", "artistName");
    let artistName = data.artistDisplayName;
    artistElement.innerHTML = "Artist: " + artistName;



    let imageEl = document.createElement("img");
    let image = data.primaryImageSmall;
    
    imageEl.src= image;
    
    metDiv.setAttribute("class", "col-2");
    imageEl.setAttribute("class", "img-fluid");
    
    divContainer.appendChild(metDiv);
    metDiv.appendChild(imageEl);
    metDiv.appendChild(titleElmt);
    metDiv.appendChild(mediumElement);
    metDiv.appendChild(artistElement);

    
    
  
    console.log(data);
    

  });
}

let nextBtn = document.getElementById("");
nextBtn.addEventListener("click", function(){
    num++

  getArtId()


})
