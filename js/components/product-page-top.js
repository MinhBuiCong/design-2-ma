export function productTop() {
  const productTopContainer = document.querySelector(".product-top-container");
  productTopContainer.innerHTML = `<div class="breadcrumb-container"> <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Products</li>
    </ol>
  </nav></div>
    <div class="sort"> <div class="select-button">
    <select class="form-select" aria-label="Default select example">
      <option selected>Sort</option>
      <option value="1">Most popular</option>
      <option value="2">Price: Low to High</option>
      <option value="3">Price: High to Low</option>
    </select>
  </div></div>`;
}
