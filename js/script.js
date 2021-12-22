let btn = document.querySelector('#btn');
btn.addEventListener('click', GetRandomMeal);

let allCategory = [
"pates",
"salade",
"burger",
"asiatique",
"fast-food",
"pizza"];

var checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        allCategory = 
        Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
    })
    });

async function GetRandomMeal() {
let name = document.getElementById('name');
let img = document.getElementById('img');
let overview = document.getElementById('overview');
let selectedNewArray = []
let selectedItem ;

await fetch('https://ragelalexis.github.io/hack/data/data.json')
.then( response => response.json())
.then((z) => { 
    z.results.map(
    (meal) => {
        if(allCategory.includes(meal.category)){
        selectedNewArray.push(meal)
        } 
    }
)
})
console.log(selectedNewArray)
console.log(selectedNewArray.length)
let randomNbr = Math.floor(Math.random() * (selectedNewArray.length));
console.log(randomNbr)
selectedItem = selectedNewArray[randomNbr]
console.log(selectedItem)
name.innerHTML = selectedItem.original_title;
img.src = selectedItem.poster_path;
overview.innerHTML = selectedItem.overview;
}




