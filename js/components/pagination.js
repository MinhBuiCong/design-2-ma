import { icon } from "../../icon/icon.js";

export function pagination() {
  const paginationContainer = document.querySelector(".pagination-container");
  paginationContainer.innerHTML = `<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link back-btn" href="#">${icon.left}</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">${icon.right}</a>
      </li>
    </ul>
  </nav>`;
}
