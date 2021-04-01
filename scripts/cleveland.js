<<<<<<< HEAD
const searchBar = document.getElementById("searchBar");




=======
>>>>>>> 7ee91047842a5f969646d85fdd91c8e3c366978f
// let numb = 0;

// let getArt = function(){

//     let apiUrl= 'https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=10'

//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(function(data){
//         console.log(data);

//     for (i= numb * 6; i < numb * 6 + 6; i++) {
//         let random = Math.floor(Math.random() * 100);
//         let newDiv = document.createElement("div");
//         newDiv.setAttribute('class', 'col-2');
//         let source = data.data[random];

//         let img = document.createElement("img");
//         img.setAttribute('class', 'img-fluid');
//         let imageSource = source.images.web.url;
//         img.src = imageSource;
//         img.onclick = function(){
//             window.open(imageSource, '_blank');
//         }
//         newDiv.appendChild(img);
//         console.log(newDiv);

//         if(source != undefined){
//             let titleEl = document.createElement("p");
//         titleEl.setAttribute('id', 'imgTitle');
//         let titleSource = source.title;
//         titleEl.innerHTML = titleSource;
//         newDiv.appendChild(titleEl);
//         console.log(newDiv);
//         }

        
//         // if(source != undefined && source.creators[0] != undefined){
//         let artistEl = document.createElement("p");
//         let artistSource = source.creators[0].description;
//         artistEl.innerHTML = artistSource;
//         newDiv.appendChild(artistEl);
//         console.log(newDiv);
//         // }

//         if(source != undefined){
//         let mediumEl = document.createElement("p");
//         let mediumSource = source.technique;
//         mediumEl.innerHTML = mediumSource;
//         newDiv.appendChild(mediumEl);
//         console.log(newDiv);
//         }

//         document.getElementById("clevelandRow").appendChild(newDiv);
//         }
//     })
// }
<<<<<<< HEAD
=======

>>>>>>> 7ee91047842a5f969646d85fdd91c8e3c366978f
// let nextBtn2 = document.getElementById("nextBtn2");
// nextBtn2.addEventListener("click", function(){
//     numb++

// getArt();

// })

// getArt();

