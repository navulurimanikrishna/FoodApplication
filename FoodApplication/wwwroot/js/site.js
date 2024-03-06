// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "265d052f-950d-44e4-acb9-163170228290";

async function GetRecipes(recipeName,id,isAllShow) {
    let resp = await fetch('${apiURL}?search=${recipeName}&key=${apikey}');
    let result = await resp.json();
    let Recipes = isAllShow ? result.data.recipes : result.data.recipes.slice(0, 5);
    showRecipes(Recipes, id);
}
function showRecipes(recipes, id){
    $ajax({
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        type: 'POST',
        url: '/Recipe/GetRecipeCard',
        data: JSON.stringify(recipes),
        success: function (htmlResult) {
            $('#' + id).html(htmlResult);
        },
    })
}
