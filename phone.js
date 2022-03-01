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
    if (searchResult.length >= 20) {
        alert
    }
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
              <h5 class="card-title">${data.brand}</h5>
              <a onclick="loadPhoneDetails ('${data.slug}')" class="btn btn-primary">Details</a>
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
    // if (releaseDate == 0) {
    //     <h5>No release date found</h5>
    // }
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h2 class="card-title">${data.name}</h2>
    <h6 class="card-title">${data.releaseDate}</h6>
    <h4 class="card-title">${data.slug}</h4>
    <h4>MainFeatures</h4>
    <ul>
    <li class="card-title">${data.mainFeatures.storage}</li>
    <li class="card-title">${data.mainFeatures.displaySize}</li>
    <li class="card-title">${data.mainFeatures.chipSet}</li>
    <li class="card-title">${data.mainFeatures.memory}</li>
    </ul>
    <h4>Sensors</h4>
    <ul>
    <li class="card-title">${data.mainFeatures.sensors[0]}</li>
    <li class="card-title">${data.mainFeatures.sensors[1]}</li>
    <li class="card-title">${data.mainFeatures.sensors[2]}</li>
    <li class="card-title">${data.mainFeatures.sensors[3]}</li>
    <li class="card-title">${data.mainFeatures.sensors[4]}</li>
    <li class="card-title">${data.mainFeatures.sensors[5]}</li>
    </ul>
    <h4> Others</h4>
    <ul>
    <li class="card-title">${data.others.WLAN}</li>
    <li class="card-title">${data.others.Bluetooth}</li>
    <li class="card-title">${data.others.GPS}</li>
    <li class="card-title">${data.others.NFC}</li>
    <li class="card-title">${data.others.Radio}</li>
    <li class="card-title">${data.others.USB}</li>
    </ul>
   
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;


    detailsDisplay.appendChild(div);
}

