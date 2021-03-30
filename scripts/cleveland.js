let numb = 0;

let getArt = function(){

    let apiUrl= 'https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=20'

    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data){
    console.log(data);
    for (i= numb * 6; i < numb * 6 + 6; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'col-2');

        let img = document.createElement("img");
        img.setAttribute('class', 'img-fluid');
        let imageSource = data.data[i].images.web.url;
        img.src = imageSource;
        newDiv.appendChild(img);
        console.log(newDiv);

        let titleEl = document.createElement("p");
        titleEl.setAttribute('id', 'imgTitle');
        let titleSource = data.data[i].title;
        titleEl.innerHTML = titleSource;
        newDiv.appendChild(titleEl);
        console.log(newDiv);

        let artistEl = document.createElement("p");
        let artistSource = data.data[i].creators[0].description;
        artistEl.innerHTML = artistSource;
        newDiv.appendChild(artistEl);
        console.log(newDiv);

        let mediumEl = document.createElement("p");
        let mediumSource = data.data[i].technique;
        mediumEl.innerHTML = mediumSource;
        newDiv.appendChild(mediumEl);
        console.log(newDiv);

        document.getElementById("clevelandRow").appendChild(newDiv);
        }
    })
}

let nextBtn2 = document.getElementById("nextBtn2");
nextBtn2.addEventListener("click", function(){
    numb++

getArt();

})

getArt();