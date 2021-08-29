//start latest food
const loadLeatest = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLatest(data));
};
loadLeatest();
const displayLatest = (latests) => {
  const myLatest = latests.meals;
  for (const latest of myLatest) {
    console.log(latest);
    const mainDiv = document.getElementById("mainFoods");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = ` <div class="card">
              <img src="${
                latest.strMealThumb
              }" class="card-img-top" alt="" style="height:200px;" />
              <div class="card-body">
                <h5 class="card-title">${latest.strArea}</h5>
                <p class="card-text">
                 ${latest.strInstructions.slice(0, 100)}
                </p>
              </div>
              <button onclick="singleProduct('${
                latest.idMeal
              }')" class="btn btn-primary">Click</button>
            </div>`;
    mainDiv.appendChild(div);
  }
};

//statrt search button
const foodSubmit = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  searchField.value = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

const displayMeal = (foods) => {
  const mainDiv = document.getElementById("mainFoods");
  mainDiv.textContent = "";
  const myFood = foods.meals;
  for (const food of myFood) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = ` <div class="card">
              <img src="${
                food.strMealThumb
              }" class="card-img-top" alt="" style="height:200px;" />
              <div class="card-body">
                <h5 class="card-title">${food.strArea}</h5>
                <p class="card-text">
                 ${food.strInstructions.slice(0, 100)}
                </p>
              </div>
               <button onclick="singleProduct('${
                 food.idMeal
               }')" class="btn btn-primary">Click</button>
            </div>`;
    mainDiv.appendChild(div);
    console.log(food);
  }
};
//end
//start single product view
const singleProduct = (myFood) => {
  //   console.log(myProduct);
  const FoodId = myFood;
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${FoodId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySingleMeal(data));
};

const displaySingleMeal = (meal) => {
  const songleMeals = meal.meals;
  console.log(songleMeals[0].strArea);
  const singleDiv = document.getElementById("singleFood");
  singleDiv.textContent = "";
  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("g-0");
  div.innerHTML = ` <div class="col-md-4">
              <img src="${songleMeals[0].strMealThumb}" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>`;
  singleDiv.appendChild(div);
  //   console.log(div);
};
