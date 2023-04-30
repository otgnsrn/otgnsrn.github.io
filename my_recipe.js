let http = new XMLHttpRequest();
http.open('get', 'hool.json', true);
http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let hool = JSON.parse(this.responseText);
        let output = "";
        for (let item of hool) {
            output += `
            <div class="box"             onclick = "window.location.href = 'index2.html';" >
            <img src="${item.image}" alt= "${item.image}"
            />
            <div class="box_description">
              <h3 class="foodName">${item.name}</h3>
              <p class="foodDescription">${item.description}
              </p>
              <h4 class="foodCat">${item.category}</h4>
              <h4 class="foodViews">Үзэлт: ${item.views}</h4>
              <h4 class="foodReview"> Үнэлгээ: ${item.review}</h4>
            </div>
          </div >    
    `;
        }
        document.querySelector(".my-recipes").innerHTML = output;
    }
}

const template = document.createElement('template');

template.innerHTML = ``
class myRecipe extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define(
    'my-recipe', myRecipe
);

