class SingleArticle extends HTMLElement {
  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `

    <style>
    article img{
      width: 10rem;
      height: auto;
      margin-right: var(--main-h2-size);
      border-radius: var(--img-border-radius);
  }
    </style>
      <article>
        <img src="${this.getAttribute('image')}" alt="Hoolnii zurag" />
        <h3><slot name="title">${this.getAttribute('title')}</slot></h3>
      </article>
    `;

    const instance = template.content.cloneNode(true);
    this.shadow.appendChild(instance);
  }
}

customElements.define('single-article', SingleArticle);

class ArticlesContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <single-article
        image="./img1/web/img1.webp"
        title="Salmon bowl"
      ></single-article>
      <single-article
        image="./img1/img9.webp"
        title="Homemade pizza"
      ></single-article>
      <single-article
        image="./img1/web/img3.webp"
        title="Malatang"
      ></single-article>
      <single-article
        image="./img1/img6.webp"
        title="Bruschettea"
      ></single-article>
      <single-article
        image="./img1/web/img5.webp"
        title="Cold noodle"
      ></single-article>
    `;
  }
}

customElements.define('article-container', ArticlesContainer);

class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <h1 onclick="window.location.href = 'index3.html';">HoolHiiy</h1>
      <ul>
        <li><a href="index2.html">Ангилал</a></li>
        <li><a href="user.html">Зөвлөгөө</a></li>
        <li class="search">
          <input class="search-txt" type="text" placeholder="  Хайх" />
          <a class="search-btn" href="#" aria-label="search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
      </ul>
    </nav>
      <a href="jor_nemeh.html">Жор нэмэх</a>
    `;
  }
}

customElements.define('custom-header', CustomHeader);

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
        <ul>
          <li><a href="index.html">Ангилал</a></li>
          <li><a href="index3.html">Зөвлөгөө</a></li>
          <li><a href="index2.html">Апп татах</a></li>
          <li><a href="user.html">Үйлчилгээний нөхцөл</a></li>
          <li><a href="jor_nemeh.html">Бидэнтэй холбогдох</a></li>
          <li><a href="index.html">@HoolHiiy 2023</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);

class MainCover extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <img
        src="./img1/web/background1.webp"
        alt="background zurag"
        width="100%"
        height="auto"
      />
      <div class="main_cover_details">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button type="button">Цааш үзэх</button>
      </div>
    `;
  }
}

customElements.define('main-cover', MainCover);

class CustomButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <button>Цааш үзэх</button>
    `;
  }
}

customElements.define('custom-button', CustomButton);

class Heading2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <h2>${this.getAttribute('title')}</h2>
    `;
  }
}

customElements.define('heading-2', Heading2);

class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <heading-2 title="Шилдэг жорууд"></heading-2>
      <article-container></article-container>
      <custom-button></custom-button>
      <heading-2 title="Санал болгох"></heading-2>
      <section class="main_recommend">
        <img id="hoolniiZurag" src="./img1/web/img6.webp" alt="hoolni zurag" />
        <div class="main_recommend_details">
          <h3>Apple pie with icecream</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p id="category">#bakery</p>
          <div class="editor">
            <img id="profile" src="./img1/web/profile4.webp" alt="profile picture" />
            <p>Нийтлэгчийн нэр</p>
          </div>
        </div>
      </section>
      <heading-2 title="Олон орны хоол"></heading-2>
      <article-container></article-container>
      <custom-button></custom-button>
      <heading-2 title="Хүүхдийн хоол"></heading-2>
      <article-container></article-container>
      <custom-button></custom-button>
      <heading-2 title="Түргэн хоол"></heading-2>
      <article-container></article-container>
      <custom-button></custom-button>
      <heading-2 title="Веган хоол"></heading-2>
      <article-container></article-container>
      <custom-button></custom-button>
      <heading-2 title="Зөвлөгөө"></heading-2>
      <section class="main_advice">
        <div class="main_advice_box">
          <img src="./img1/web/Rectangle 359.png" alt="chocolatenii zurag" />
          <article class="main_advice_details">
            <h3>How to temper chocolate</h3>
            <p>
              One of my all time favorite jobs was working as a tour guide at a
              chocolate factory.
            </p>
            <article class="categories">
              <p id="category">#Зөвлөгөө</p>
              <p id="category">#Chocolate</p>
            </article>
          </article>
        </div>
        <div class="main_advice_box">
          <img src="./img1/web/burrito.webp" alt="burritonii zurag" />
          <article class="main_advice_details">
            <h3>How to fold a burrito</h3>
            <p>
              One of my all time favorite jobs was working as a tour guide at a
              chocolate factory.
            </p>
            <article class="categories">
              <p id="category">#Зөвлөгөө</p>
              <p id="category">#Burrito</p>
            </article>
          </article>
        </div>
      </section>
      <heading-2 title="Сүүлд нэмэгдсэн"></heading-2>
      <section class="main_latest">
        <img
          src="./img1/web/img1.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img2.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img5.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img6.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img6.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img5.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img4.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img3.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img2.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
        <img
          src="./img1/web/img1.webp"
          alt="hoolnii zurag"
          width="15%"
          height="auto"
        />
      </section>
    `;
  }
}

customElements.define('custom-main', Main);