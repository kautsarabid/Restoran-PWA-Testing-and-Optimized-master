class ReviewsRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="title-restaurant">Customer Reviews</h2>
    <div id="reviews-restaurant"></div>
    `;
  }
}

customElements.define('reviews-restaurant', ReviewsRestaurant);
