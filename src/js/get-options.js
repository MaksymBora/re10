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

export default createOptions;