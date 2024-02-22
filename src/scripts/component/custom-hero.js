class HeroCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <section class="hero-section">
      <h2>ResMini</h2>
      <article class="deskripsi-hero-section">
        <p>Welcome to our restaurant, a place where delicious food and an inviting atmosphere await you. Enjoy an
          unforgettable culinary experience with dishes carefully prepared by a talented chefs.</p>
      </article>
    </section>
    `;
  }
}

customElements.define('custom-hero', HeroCustom);
