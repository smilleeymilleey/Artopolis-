
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
      
      for (let i = num * 10; i < num*10 + 10; i++) {
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
    let image = data.primaryImageSmall;

    let imageEl = document.createElement("img")

    imageEl.setAttribute("src", image);
    imageEl.setAttribute("style", "width: 100px");

    
    row.prepend(imageEl);
    console.log(data);
    

  });
}

let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function(){
    num++

  getArtId()


})
