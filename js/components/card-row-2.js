export function cardRowTwo() {
  const cardRowTwoContainer = document.querySelector(".row-2");
  cardRowTwoContainer.innerHTML = `<div class="col-sm-6 card-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Product</h5>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="products.html" class="btn btn-primary">&rarr;</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 card-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Product</h5>
        <p class="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="products.html" class="btn btn-primary">&rarr;</a>
      </div>
    </div>
  </div>`;
}
