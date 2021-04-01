console.log("Harvard Linked"); 
// ^^^Changed Harvagrd to Harvard. It was bothering me lol. EH
let set = 0;
let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?hasimage=1&size=80&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e";
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
let harvardInfoList =data.records;
//let harvardInfoMed = harvardInfoList[index].medium;
console.log(harvardInfoList);

for (let index = 0; index < 6; index++) {
    
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
    let hTitleEl = document.createElement('p');
    hTitleEl.setAttribute('id','imgTitle');
    let hTitleSource = harvardInfoList[index].title;
    hTitleEl.innerHTML = "Title: "+hTitleSource;
    harvardDiv.appendChild(hTitleEl);
    
    //artist
    if(harvardInfoList[index].peoplecount> 0)
    {

        let hArtistEl = document.createElement('p');
        hArtistEl.setAttribute('id','artistName')
        let hArtistSource = harvardInfoList[index].people[0].name;
        hArtistEl.innerHTML = "Artist: "+hArtistSource;
        harvardDiv.appendChild(hArtistEl);
    }
    //medium
     let hMediumEl = document.createElement('p');
     let hMediumSource = harvardInfoList[index].medium;
     hMediumEl.innerHTML ="Medium: "+ hMediumSource;
     harvardDiv.appendChild(hMediumEl);
   

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
