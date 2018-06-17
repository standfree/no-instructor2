console.log('hello, bo!');


const connectionString = config.MASSIVE_URI;

const API_URL = connectionString;

fetch(API_URL)
  .then(response => response.json())
  .then(users => {
    console.log(response);
  });
