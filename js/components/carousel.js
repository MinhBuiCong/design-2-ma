export function carousel() {
  const carouselContainer = document.querySelector(".carousel");
  carouselContainer.innerHTML = `        <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="./images/bench-accounting-nvzvOPQW0gc-unsplash.jpg"
        class="d-block w-100"
        alt="pic-1"
      />
    </div>
    <div class="carousel-item">
      <img
        src="./images/liana-mikah-8tJxjQWTyNA-unsplash.jpg"
        class="d-block w-100"
        alt="pic-2"
      />
    </div>
    <div class="carousel-item">
      <img
        src="./images/logan-nolin-EvceCyopkKI-unsplash.jpg"
        class="d-block w-100"
        alt="pic-3"
      />
    </div>
  </div>`;
}
