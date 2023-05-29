class SingleArticle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article>
        <img src="${this.getAttribute('image')}" alt="Hoolnii zurag" />
        <h3>${this.getAttribute('title')}</h3>
        <p>${this.getAttribute('category')}</p>
      </article>
    `;
  }
}

customElements.define('single-article', SingleArticle);

class ArticlesContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <single-article
        image="web/img1.webp"
        title="Хоолны нэр"
        category="Ангилал"
      ></single-article>
      <single-article
        image="web/img2.webp"
        title="Хоолны нэр"
        category="Ангилал"
      ></single-article>
      <single-article
        image="web/img3.webp"
        title="Хоолны нэр"
        category="Ангилал"
      ></single-article>
      <single-article
        image="web/img4.webp"
        title="Хоолны нэр"
        category="Ангилал"
      ></single-article>
      <single-article
        image="web/img5.webp"
        title="Хоолны нэр"
        category="Ангилал"
      ></single-article>
    `;
  }
}

customElements.define('article-container', ArticlesContainer);

class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <h1>HoolHiiy</h1>
      <ul>
        <li><a href="index2.html">Ангилал</a></li>
        <li><a href="index3.html">Зөвлөгөө</a></li>
        <li class="search">
          <input class="search-txt" type="text" placeholder="  Хайх" />
          <a class="search-btn" href="#" aria-label="search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
      </ul>
    </nav>
      <a href="jor_nemeh.html">Нэвтрэх</a>
    `;
  }
}

customElements.define('custom-header', CustomHeader);

class MainCover extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <img
        src="web/background1.webp"
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