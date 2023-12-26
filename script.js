const productlist = document.getElementById('product-list')
const searchinput = document.getElementById('search-input')
const searchbtn = document.getElementById('search-btn')
const categorybtns = document.querySelectorAll('.category-btn')

function filterproduct() {
    const searchvalue = searchinput.value.toLowerCase()
    const productitems = document.querySelectorAll('.product-item')
    const activecategory = document.querySelector('.category-btn.active').dataset.category
    productitems.forEach(items => {
        const title = items.querySelector('h3').innerText.toLowerCase()
        const category = items.dataset.category

        if ((title.includes(searchvalue) || searchvalue == "" ) && (category === activecategory || activecategory === "all")){
            items.style.display = "block";
        } else {
            items.style.display = "none";
        }

    })
}
function setCategory(e) {
    categorybtns.forEach(btn => btn.classList.remove("active"))
    e.target.classList.add("active")
    filterproduct()

}
searchbtn.addEventListener('click', filterproduct)
searchinput.addEventListener('keyup', filterproduct)
categorybtns.forEach(btn => {
    btn.addEventListener('click', setCategory)
})
filterproduct()