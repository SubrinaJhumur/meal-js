const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
        </div>
        
        
        `;
        mealContainer.appendChild(mealDiv);
        
    });


}


const searchFood = () =>{
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';


}


const loadMealDetail = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log('get details of id', idMeal);
    // console.log(url)
    fetch(url)
    .then(  res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
    const mealDetailContainer = document.getElementById('detail-container');
    mealDetailContainer.innerHTML='';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,40)}</p>
        <a href="#" class="btn btn-primary">Search Meal</a>
    </div>
    
    
    `
    mealDetailContainer.appendChild(mealDiv);

}


loadMeals('');