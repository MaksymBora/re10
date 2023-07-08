export default class CatApiService {
  constructor() {
    this.API_KEY =
      'live_g3D26VHAvpkRAZlZj7jcyMBbUD2jb6JQVlVVYA60YGep9O596PhpPwwPd9go9JOy';
    this.breedId = '';
  }

  fetchBreeds() {
    const url = `https://api.thecatapi.com/v1/breeds/`;

    return fetch(url, {
      headers: {
        'x-api-key': this.API_KEY,
      },
    }).then(response => {
      return response.json();
    });
  }

  // fetching cat by id(breed name)
  fetchCatByBreed() {
    const url = 'https://api.thecatapi.com/v1/images/search/';

    const options = new URLSearchParams({
      breed_ids: `${this.breedId}`,
      api_key: `${this.API_KEY}`,
    });

    return fetch(`${url}?${options}`).then(response => response.json());
  }

  get breed() {
    return this.breedId;
  }

  set breed(newBreed) {
    this.breedId = newBreed;
  }
}
