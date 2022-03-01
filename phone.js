const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = data => {
    // console.log(data);
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card">
             <img src="${data.image}" class="card-img-top" alt="...">
             <div class="card-body">
                <h4 class="card-title">${data.phone_name}</h4>
                <h5 class="card-title">${data.brand}</h5>
                <p class="card-text"></p>
             </div>
        </div>
        `;

        searchResult.appendChild(div);
    })
}
const phoneDetail = () => {
    console.log('detail clicked');

}