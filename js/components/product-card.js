export function productCard() {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = `          <div class="product-row product-row-1">
  <div class="col-6">
    <a href="#">
      <div class="card">
        <img
          src="./images/products/ikea-pillow.png"
          class="card-img-top"
          alt="pillow"
        />
        <div class="card-body">
          <h5 class="card-title">White Pillow</h5>
          <p class="card-text">Soft white pillow</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-6">
    <a href="#">
      <div class="card">
        <div class="image-container">
          <img
            src="./images/products/ikea-table-brick.png"
            class="card-img-top"
            alt="table-brick"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Brown cup brick</h5>
          <p class="card-text">Cup brick</p>
        </div>
      </div>
    </a>
  </div>
</div>
<div class="product-row product-row-2">
  <div class="col-6">
    <a href="#">
      <div class="card">
        <div class="image-container">
          <img
            src="./images/products/ikea-vase.png"
            class="card-img-top"
            alt="vase"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Black modern vase</h5>
          <p class="card-text">Black vase</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-6">
    <a href="#">
      <div class="card">
        <div class="image-container">
          <img
            src="./images/products/ikea-vase.png"
            class="card-img-top"
            alt="vase"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">Black modern vase</h5>
          <p class="card-text">Black vase</p>
        </div>
      </div>
    </a>
  </div>
</div>
    `;
}
