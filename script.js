 async function getRandomMeal() {
    const randomMeal = fetch('https://www.themealdb.com/api/json/v1/1/random.php')
}

function getMealById(id) {
    const meal = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id)
}

function getMealsBySearch(term) {
    const meals = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +term)

}