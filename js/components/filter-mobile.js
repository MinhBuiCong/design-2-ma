export function filterMobile() {
  const filterMobileContainer = document.querySelector(
    ".filter-mobile-container"
  );
  filterMobileContainer.innerHTML = `
    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Filter
    </button>
  
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
Placeholder, filter list    </div>
  </div>`;
}
