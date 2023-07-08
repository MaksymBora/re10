// import API from './cat-api';
import Notiflix from 'notiflix';
import CatApiService from './cat-service';
import { getAllIds } from './get-all-id';
import { showErrorFailure } from './notifications';

const catApiService = new CatApiService();

// fetching API and adding <options> in select
function createOptions() {
  catApiService
    .fetchBreeds()
    .then(getAllIds)
    .catch(error => {
      if (error) {
        showErrorFailure();
      }
    });
}

// //Show error
// function showError() {
//   Notiflix.Report.failure(
//     'Error',
//     'Oops! Something went wrong! Try reloading the page!',
//     'Try Again'
//   );
// }

export default createOptions;
