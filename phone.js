// search button handeling
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    // error handle
    if (searchText == '') {
        alert('please write something to display');
    }
    else {
        //load data
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data))
    }



}
// searchPhone area handeling
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    //clear previous result
    searchResult.innerHTML = '';
    // error handle
    if (data.length == 0) {
        alert('No result found');
    }

    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('d-flex');
        div.classList.add('justify-content-around');
        div.innerHTML = ` 
        <div class="col" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${data.phone_name}</h4>
              <h6 class="card-title" "displayPhoneIdDetail(${data.releaseDate}) "></h6>
              <h5 class="card-title">${data.brand}</h5>
              <a onclick="loadPhoneDetails ('${data.slug}')" class="btn btn-primary">Detail</a>
            </div>
          </div>
           `;
        searchResult.appendChild(div);
    })
};
const loadPhoneDetails = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneIdDetail(data.data))
}
const displayPhoneIdDetail = data => {
    // console.log(data);
    const detailsDisplay = document.getElementById('phone-details');
    detailsDisplay.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <ul>
    <li class="card-title">${data.slug}</li>
    <li class="card-title">${data.mainFeatures.storage}</li>
    <li class="card-title">${data.mainFeatures.displaySize}</li>
    <li class="card-title">${data.mainFeatures.chipSet}</li>
    <li class="card-title">${data.mainFeatures.memory}</li>
    <li class="card-title">${data.mainFeatures.sensors[0]}</li>
    <li class="card-title">${data.others.WLAN}</li>
    </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailsDisplay.appendChild(div);
}

