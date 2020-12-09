getRandomMeal();

 
async function getRandomMeal() {
    const randomMeal = await await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randomMeal = await resp;

    console.log(randomMeal);
}

function getMealById(id) {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id)
}

function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +term)

}