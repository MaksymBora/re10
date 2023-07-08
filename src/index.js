import API from './js/cat-api';
import getRefs from './js/get-refs';
import getOptions from './js/get-options';
import { showError } from './js/notifications';
import { clearCatContainer } from './js/clearcatcont';
import { showLoadingMessage, hideLoadingMessage } from './js/loader';

const refs = getRefs();

refs.select.addEventListener('change', onSelectView);

// API Fetch & Add options in select
getOptions();

// Fetching object with chosen breed and create markup
function onSelectView() {
  const breedId = selectedBreeds();

  const isContent = document.querySelector('.img-cat');

  if (isContent) {
    clearCatContainer();
  }
  // Show loading message
  showLoadingMessage();

  API.fetchCatByBreed(breedId)
    .then(markUp)
    .catch(showError)
    .finally(hideLoadingMessage);

  // add is-active class for modal window
  refs.container.classList.add('is-active');
}

// Getting Breed from Select
function selectedBreeds() {
  const selectedValue = refs.select.options[refs.select.selectedIndex];

  const selectedId = selectedValue.value;

  return selectedId;
}

// Create Markup
function markUp(arr) {
  //Add Img
  let imgUrl = arr.map(link => link.url);

  // Add Description
  let catDesc = arr.map(link => link.breeds[0].description);

  // Add Temperament
  let catTemp = arr.map(link => link.breeds[0].temperament);

  const markUp = `
  

    <img class="img-cat" src="${imgUrl}" width="440" height="400" loading="lazy">
    <div class="intro">
      <p class="cat-info"><b>Description: </b>${catDesc}</p>
      <p class="cat-info"><b>Temperament: </b>${catTemp}</p>
    </div>
  `;

  refs.catContainer.insertAdjacentHTML('beforeend', markUp);
}
