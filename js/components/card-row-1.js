export function cardRowOne() {
  const cardRowOneContainer = document.querySelector(".row-1");
  cardRowOneContainer.innerHTML = `<div class="card text-center">
    <div class="card-header">Inspiration</div>
    <div class="card-body">
      <h5 class="card-title">Different home style alternatives</h5>
      <p class="card-text">Having a hard time to choose?</p>
      <a href="decoration.html" class="btn btn-primary"
        >Go here for some Inspiration</a
      >
    </div>
    <div class="card-footer text-muted"><p>2 days ago</p></div>
  </div>`;
}
