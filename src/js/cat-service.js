export default class CatApiService {
  constructor() {}

  fetchBreeds() {
    const API_KEY =
      'live_g3D26VHAvpkRAZlZj7jcyMBbUD2jb6JQVlVVYA60YGep9O596PhpPwwPd9go9JOy';

    const url = `https://api.thecatapi.com/v1/breeds/`;

    return fetch(url, {
      headers: {
        'x-api-key': API_KEY,
      },
    }).then(response => {
      return response.json();
    });
  }
}
