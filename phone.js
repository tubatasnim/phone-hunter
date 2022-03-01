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
        console.log(data);
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
              <a onclick="phoneDetails('${data.data}')" class="btn btn-primary">Detail</a>
            </div>
          </div>
           `;
        searchResult.appendChild(div);
    })
}
const loadPhoneDetails = async phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhoneIdDetail(data.data.slug)
    // .then(res => res.json())
    // .then(data => displayIdDetail(data.data))

}
const displayPhoneIdDetail = id => {
    console.log(id);
    // const phoneDetail = document.getElementById('phone-details');
    // phoneDetail.textContent = '';
    // const div = document.createElement('div');
    // div.classList.add('card');
    // div.innerHTML = `
    // <img src="${data.image}" class="card-img-top" alt="...">
    // <div class="card-body">
    //   <h4 class="card-title">${data.phone_name}</h4>

    //   <h5 class="card-title">${data.brand}</h5>
    //   <h5 class="card-title">${data.data.slug}')</h5>
    //   <a onclick="loadPhoneDetails(phoneId)" class="btn btn-primary">Detail</a>
    // </div>
    // `;
    // phoneDetail.appendChild(div);
}
// const clickButton = () => {
//     const url = `https://openapi.programming-hero.com/api/phone/${id}`
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displaySearchResult(data.data))

// }
// const displayDetailResult = data => {
//     // console.log(data);
//     const detailResult = document.getElementById('detail-result');
//     data.forEach(data => {
//         const div = document.createElement('div');
//         // div.classList.add('col');
//         // div.classList.add('d-flex');
//         // div.classList.add('justify-content-around');
//         div.innerHTML = `
//               <h4 class="card-title">${data.mainFeatures.sensors}</h4>
//               <h5 class="card-title">${data.mainFeatures.others}</h5>
//            `;
//         detailResult.appendChild(div);


//     })
// }
{/* <h6 class="card-title">${data.mainFeatures.releaseDate}</h6> */ }