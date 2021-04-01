console.log("Harvard Linked"); 
// ^^^Changed Harvagrd to Harvard. It was bothering me lol. EH
let set = 0;
let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?hasimage=1&size=80&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e";
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
for (let index = 0; index < 6; index++) {
    let harvardInfoList =data.records;
    let harvardInfoMed = harvardInfoList[index].medium;
    console.log(harvardInfoMed);
    
    //start of new item in row
    let harvardDiv = document.createElement("div");
    let img = document.createElement("img");
    let imgSrc = harvardInfoList[index].images[0].baseimageurl;
    harvardDiv.setAttribute('class','col-2')
    img.setAttribute('class', 'img-fluid');
    // let harvardImgEls = document.querySelectorAll('#harvardContainer img');
    //try to get img to grab from api
    img.src = imgSrc;
    harvardDiv.appendChild(img);
    img.onclick = function(){
        window.open(imgSrc, '_blank');
    }
    // grab title, artists, and medium
    let titleEl = document.createElement('p');
    titleEl.setAttribute('id','imgTitle');
    let titleSource = harvardInfoList[index].title;
    titleEl.innerHTML = "Title: "+titleSource;
    harvardDiv.appendChild(titleEl);
    
    //artist
    // if(harvardInfoList.index.people[0].name)
    let artistEl = document.createElement('p');
    artistEl.setAttribute('id','artistName')
    let artistSource = harvardInfoList[index].people[1].name;
    artistEl.innerHTML = artistSource;
    harvardDiv.appendChild(artistEl);
    //medium
     let mediumEl = document.createElement('p');
     let mediumSource = harvardInfoList[index].medium;
     mediumEl.innerHTML ="Medium: "+ mediumSource;
     harvardDiv.appendChild(mediumEl);
   

    document.getElementById("harvardRow").appendChild(harvardDiv);
    }
})
let addBtn = document.getElementById("harvardBtn");
addBtn.addEventListener("click", function(){
    clearInterval(set);
   //set++ 

getHarvardObjectApi();

})
}
// let getHarvardMediumApi = function() {
//     let apiUrl = "https://api.harvardartmuseums.org/medium?apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e"
  
//     fetch(apiUrl)
// .then(response => response.json())
// .then(function(data){
// console.log(data);
// })
// }

 getHarvardObjectApi();

