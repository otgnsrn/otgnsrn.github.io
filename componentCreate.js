import { get, Data } from "./hool.js";
import "./my_recipe.js";

class MyHool {
    constructor({ title, description, category, views, review }) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.views = views;
        this.review = review;
    }

    render() {
        return `<article onclick = "window.location.href = 'index2.html';" >
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
      </article> `
    }
}

function App(data, targetElement) {
    let retVal = "";

    for (const article of data) {
        let articleObj = new MyArticle(article);
        retVal += articleObj.render();
    }

    document.getElementById(targetElement).insertAdjacentHTML("my_recipe", retVal);
}

window.onload = () => {
    console.log("window.onload");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get("type");
    console.log(type);
    if (type == "cake") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else if (type == "bakery") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else if (type == "drinks") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else if (type == "bread") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else if (type == "catering") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else if (type == "desert") {
        get("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6").then((data) => {
            if (data) {
                App(data?.record?.[type], "my_recipe");
            }
        });
    } else {
        App(Data, "my_recipe");
    }
};