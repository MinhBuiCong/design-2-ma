export function navbar() {
  const navbarContainer = document.querySelector(".navbar");
  navbarContainer.innerHTML = `  <div class="container-fluid">
  <div class="logo-container">
    <img src="./images/pillow-logo.png" alt="logo" />
  </div>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="products.html">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="decoration.html">Decoration</a>
      </li>
    </ul>
  </div>
</div>`;
}
