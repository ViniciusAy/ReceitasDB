function openMenu(){
    if (menuHamburger.classList.contains('menu-expanded'))
        menuHamburger.classList.remove('menu-expanded')
    else
        menuHamburger.classList.add('menu-expanded')
}

function popUp(){
    pop.classList.add('popup-open')
}

function closePopUp(){
    pop.classList.remove('popup-open')
}

const searchButton = document.getElementById('search-button')
const recipeResult = document.getElementById('search-content')
const recipeDetails = document.querySelector('.popup')

searchButton.addEventListener('click', getRecipe)

function getRecipe(){
    let searchInputText = document.getElementById('search-input').value.trim()
    console.log(searchInputText)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
    .then(response => response.json())
    .then (data => {
        let html = ""
        if (data.meals){
            data.meals.some(searchResult =>{                
                html += `
                <div class="search-result">
                    <section id="recipe2">    
                        <div class="content" id="search-content">
                            <img src="${searchResult.strMealThumb}">
                            <h2>${searchResult.strMeal} Recipe</h2>
                            <h3>Ingredients</h3>
                            <p>
                                <ul>
                                    <li>${searchResult.strIngredient1}</li>
                                    <li>${searchResult.strIngredient2}</li>
                                    <li>${searchResult.strIngredient3}</li>
                                    <li>${searchResult.strIngredient4}</li>
                                    <li>${searchResult.strIngredient5}</li>
                                    <li>${searchResult.strIngredient6}</li>
                                    <li>${searchResult.strIngredient7}</li>
                                    <li>${searchResult.strIngredient8}</li>
                                    <li>${searchResult.strIngredient9}</li>
                                    <li>${searchResult.strIngredient10}</li>
                                    <li>${searchResult.strIngredient11}</li>
                                    <li>${searchResult.strIngredient12}</li>
                                    <li>${searchResult.strIngredient13}</li>
                                    <li>${searchResult.strIngredient14}</li>
                                    <li>${searchResult.strIngredient15}</li>
                                    <li>${searchResult.strIngredient16}</li>
                                    <li>${searchResult.strIngredient17}</li>
                                    <li>${searchResult.strIngredient18}</li>
                                    <li>${searchResult.strIngredient19}</li>
                                    <li>${searchResult.strIngredient20}</li>
                                </ul>
                            </p>
                            <button class="passo" onclick="popUp()">Instructions</button>
                        </div>
                    </section>
                </div>  
        
                <div id="pop" class="popup">
                    <ul>
                        <li>${searchResult.strInstructions}</li>
                    </ul>
                    <button class="closePasso" onclick="closePopUp()">X</button>
                </div>
            `
            })              
        }

        searchResult.innerHTML = html;
    })
}