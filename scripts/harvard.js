console.log("Harvard Linked"); 
// ^^^Changed Harvagrd to Harvard. It was bothering me lol. EH

let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?hasimage=1&medium=2028195&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e";
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
for (let index = 0; index < 6; index++) {
    //start of new item in row
    let newDiv = document.createElement("div");
    newDiv.setAttribute('class','col-2')
    let img = document.createElement("img");
    img.setAttribute('class', 'img-fluid');
    // let harvardImgEls = document.querySelectorAll('#harvardContainer img');
    let harvardInfoList =data.records;
    //try to get img to grab from api
    img.src = harvardInfoList[index].images[0].baseimageurl;
    newDiv.appendChild(img);
    //get title to display

    //end of title grab
    document.getElementById("harvardRow").appendChild(newDiv);
    }
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

