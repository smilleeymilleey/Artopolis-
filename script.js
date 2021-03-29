console.log("Linked");

let getHarvardObjectApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/object?medium=2028195&apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e"
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
})
}
let getHarvardMediumApi = function() {
    let apiUrl = "https://api.harvardartmuseums.org/medium?apikey=14b95f76-a12b-49ea-8252-36b1ac92a05e"
  
    fetch(apiUrl)
.then(response => response.json())
.then(function(data){
console.log(data);
})
}

 getHarvardObjectApi();
getHarvardMediumApi();