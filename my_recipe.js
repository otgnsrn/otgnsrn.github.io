let http = new XMLHttpRequest();
http.open('get', 'hool.json', true);
http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let hool = JSON.parse(this.responseText);
        let output = "";
        for (let item of hool) {
            output += `
            <article onclick = "window.location.href = 'index2.html';" >
            <img src="${item.image}" alt= "${item.image}"
            />
            <div class="box_description">
              <h3 class="foodName">${item.name}</h3>
              <p class="foodDescription">${item.description}
              </p>
              <h4 class="foodCat">${item.category}</h4>
              <div class= "re_views">
              <h4 class="foodViews">${item.views}</h4> 
              <span class="material-symbols-outlined">visibility</span></div>
              <div class="re_views">
              <h4 class="foodReview"> ${item.review}</h4>
              <span class="material-symbols-outlined"> star</span></div>
          </article>    
    `;
        }
        document.querySelector(".my-recipes").innerHTML = output;
    }
}

const template = document.createElement('template');
