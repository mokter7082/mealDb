//SEARCHO MEAL AREA HERE
const mealSubmit = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  inputField.value = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItem(data));
};

//display item from api
const displayItem = (data) => {
  const items = data.meals;
  const mainDiv = document.getElementById("myItems");
  mainDiv.textContent = "";
  for (const item of items) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = ` <div class="card">
            <img src="${item.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.strIngredient1}</h5>
              <p class="card-text">${item.strInstructions.slice(0, 100)}
              </p>
        
            </div>
          </div>
          `;
    mainDiv.appendChild(div);
    console.log(item);
  }
};
//END SEARCH MEAL AREA
