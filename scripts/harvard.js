console.log("Harvard Linked"); 
// ^^^Changed Harvagrd to Harvard. It was bothering me lol. EH
let set = 0;
let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?hasimage=1&size=80&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e";
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data){
        //console.log(data);
        let harvardInfoList =data.records;
        let updatedList = [];
//let harvardInfoMed = harvardInfoList[index].medium;
//console.log(harvardInfoList);
for (let g = 0; g < harvardInfoList.length; g++) {
      if(harvardInfoList[g].images.length>0){
          updatedList = updatedList.concat(harvardInfoList[g]);
      }
}
for (let index = set*6; index < set*6+6; index++) {
    let random = Math.floor(Math.random() * 80);
    let source = updatedList[random];
    console.log(source);
    //start of new item in row
    if(source != undefined){
    while (source == undefined) {
        source = updatedList[random+1];
    }    
    let harvardDiv = document.createElement("div");
    if(source != undefined && source.images[0] != undefined){
        let img = document.createElement("img");
        let imgSrc = source.images[0].baseimageurl;
        harvardDiv.setAttribute('class','col-2')
        img.setAttribute('class', 'img-fluid');
        // let harvardImgEls = document.querySelectorAll('#harvardContainer img');
        console.log(imgSrc);
    //try to get img to grab from api
    img.src = imgSrc;
    harvardDiv.appendChild(img);
    img.onclick = function(){
        window.open(imgSrc, '_blank');
    }
    }
    // grab title, artists, and medium
    if(source != undefined){
    let hTitleEl = document.createElement('p');
    hTitleEl.setAttribute('id','imgTitle');
    let hTitleSource = source.title;
    hTitleEl.innerHTML = "Title: "+hTitleSource;
    harvardDiv.appendChild(hTitleEl);
    }
    //artist
     if(source.peoplecount>0)
    {
        if(source != undefined ){
        let hArtistEl = document.createElement('p');
        hArtistEl.setAttribute('id','artistName')
        let hArtistSource = source.people[0].name;
        hArtistEl.innerHTML = "Artist: "+hArtistSource;
        harvardDiv.appendChild(hArtistEl);
        }
     }
    //medium
     let hMediumEl = document.createElement('p');
     let hMediumSource = source.medium;
     hMediumEl.innerHTML ="Medium: "+ hMediumSource;
     harvardDiv.appendChild(hMediumEl);
   

    document.getElementById("harvardRow").appendChild(harvardDiv);
    }
    }})

let addBtn = document.getElementById("harvardBtn");
addBtn.addEventListener("click", function(){
    
   set++ 

getHarvardObjectApi();

})
}
let getHarvardMediumApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/person?apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e"
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
})
}

 getHarvardObjectApi();
 getHarvardMediumApi();
