console.log("Harvard Linked"); 
// ^^^Changed Harvagrd to Harvard. It was bothering me lol. EH
let set = 0;
let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?hasimage=1&size=70&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e";
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
for (let index = set *6; index < set*6 + 6; index++) {
    let harvardInfoList =data.records;
    let harvardInfoMed = harvardInfoList[index].medium;
    console.log(harvardInfoMed);
    
    //start of new item in row
    let newDiv = document.createElement("div");
    let img = document.createElement("img");
    let imgSrc = harvardInfoList[index].images[0].baseimageurl;
    newDiv.setAttribute('class','col-2')
    img.setAttribute('class', 'img-fluid');
    // let harvardImgEls = document.querySelectorAll('#harvardContainer img');
    //try to get img to grab from api
    img.src = imgSrc;
    newDiv.appendChild(img);
    img.onclick = function(){
        window.open(imgSrc, '_blank');
    }
    // grab title, artists, and medium
    let titleEl = document.createElement('p');
    titleEl.setAttribute('id','imgTitle');
    let titleSource = harvardInfoList[index].title;
    titleEl.innerHTML = titleSource;
    newDiv.appendChild(titleEl);
    
    //artist
    let artistEl = document.createElement('p');
    let artistSource = harvardInfoList[index].people[0].name;
    artistEl.innerHTML = artistSource;
    newDiv.appendChild(artistEl);
    //medium
     let mediumEl = document.createElement('p');
     let mediumSource = harvardInfoList[index].medium;
     mediumEl.innerHTML = mediumSource;
     newDiv.appendChild(mediumEl);
   

    document.getElementById("harvardRow").appendChild(newDiv);
    }
})
let addBtn = document.getElementById("harvardBtn");
addBtn.addEventListener("click", function(){
    set++

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

