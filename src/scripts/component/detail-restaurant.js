class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="title-detail">
      Detail Restaurant
    </h2>

    <div id="restaurant-detail"></div>
     <div id="like-button-container"></div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
