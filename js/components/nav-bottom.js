export function navBottom() {
  const navBottomContainer = document.querySelector(".nav-bottom");
  navBottomContainer.innerHTML = `<div class="categories">
    <button type="button" class="btn btn-outline-warning">Kitchen</button>
    <button type="button" class="btn btn-outline-warning">Lounge</button>
    <button type="button" class="btn btn-outline-warning">Bedroom</button>
  </div>
  <div class="select-button">
    <select class="form-select" aria-label="Default select example">
      <option selected>Sort</option>
      <option value="1">Most popular</option>
      <option value="2">Price: Low to High</option>
      <option value="3">Price: High to Low</option>
    </select>
  </div>`;
}
