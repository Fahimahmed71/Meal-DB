function mealDb(props) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props}`)
    .then((req) => req.json())
    .then((data) => loadData(data.meals));
}

function loadData(props) {
  const articleEl = document.getElementById("article");
  articleEl.textContent = "";

  props?.forEach((loop) => {
    const div = document.createElement("div");

    const strInstructions = loop.strInstructions;
    const string = JSON.stringify(strInstructions);

    div.classList.add("card");

    div.innerHTML = `
    <img src="${loop.strMealThumb}" class="card-img-top w-100 img-fluid rounded mx-auto d-block" alt="..." />
    <div class="card-body p-0 ">
      <h4 class="card-heading text-center">${loop.strMeal}</h4>  
      <h5 class="card-title text-center">${loop.strArea}</h5>
      <h4 class="card-text text-center">
      ${loop.strCategory}
      </h4>
      <button onclick='mealDetails(${string})' class="btn btn-primary bg-primary w-100 d-block mx-auto mt-3 fw-bold">Recipe</button>
    </div>
    `;
    articleEl.appendChild(div);
  });
}

const mealDetails = (props) => {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  const ulEl = document.getElementById("ul");
  ulEl.textContent = "";

  const div = document.createElement("div");

  div.innerHTML = `
    <h1>Instraction</h1>
    <h4>${props}</h4>
  `;

  ulEl.appendChild(div);
};

document.querySelector(".search-btn").addEventListener("click", () => {
  const inputEl = document.getElementById("input-field").value;
  mealDb(inputEl);
  document.getElementById("input-field").value = "";
});

document.getElementById("x-ico").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
});

const text = "";
mealDb(text);
