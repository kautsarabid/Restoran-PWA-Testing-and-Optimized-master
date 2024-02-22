class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="top-restaurant" id="top-restaurant-list">
        <h3>Our Top Restaurant</h3>
        <div class="list-restaurant"></div>
    </section>
    `;
  }
}

customElements.define('list-restaurant', ListRestaurant);
