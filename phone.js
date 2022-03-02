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
    const first20Item = data.slice(0, 20);

    //clear previous result
    searchResult.innerHTML = '';

    // error handle
    if (data.length == 0) {
        alert('No result found');
    }

    for (const phone of first20Item) {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
            <div class="col" style="width: 18rem;">
                <img width='250px' height='400px'src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-title">${phone.phone_name}</h4>
                  <h5 class="card-title">${phone.brand}</h5>
                  <a onclick="loadPhoneDetails ('${phone.slug}')" class="btn btn-primary">Details</a>
                </div>
              </div>
               `;
        searchResult.appendChild(div);
    }




};
const loadPhoneDetails = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneIdDetail(data.data))
}
const displayPhoneIdDetail = data => {

    const detailsDisplay = document.getElementById('phone-details');
    detailsDisplay.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    <img width='250px' height='450px' src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h2>${data.name}</h2>
        <h6>${data.releaseDate ? data.releaseDate : 'No realease date found'}</h6>
        <h4>${data.slug}</h4>
        <h4>MainFeatures</h4>
    <ul>
        <li>${data.mainFeatures.storage}</li>
        <li>${data.mainFeatures.displaySize}</li>
        <li>${data.mainFeatures.chipSet}</li>
        <li>${data.mainFeatures.memory}</li>
    </ul>
    <h4>Sensors</h4>
    <ul>
        <li>${data.mainFeatures.sensors[0]}</li>
        <li>${data.mainFeatures.sensors[1]}</li>
        <li>${data.mainFeatures.sensors[2]}</li>
        <li>${data.mainFeatures.sensors[3]}</li>
        <li>${data.mainFeatures.sensors[4]}</li>
        <li>${data.mainFeatures.sensors[5]}</li>
    </ul>
    <h4> Others</h4>
    <ul>
        <li>${data.others.WLAN}</li>
        <li>${data.others.Bluetooth}</li>
        <li>${data.others.GPS}</li>
        <li>${data.others.NFC}</li>
        <li>${data.others.Radio}</li>
        <li>${data.others.USB}</li>
    </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailsDisplay.appendChild(div);
};