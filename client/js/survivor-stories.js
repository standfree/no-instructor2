const xhr = new XMLHttpRequest();

// function getSurvivorQuotes() {

  xhr.open('GET', 'http://localhost:2000/api/survivor-stories', true); //opens connection

  xhr.onload = function() {

    if (this.status === 200) {
    console.log(JSON.parse(this.responseText));
    let stories = JSON.parse(this.responseText);
    let count = stories.length;
    console.log('how many objects', count);
    for (let i = 0; i < stories.length; i++) {
      const element = stories[i].title;
      console.log(element);
      document.getElementById(`rando${i}`).textContent = element; //`rando${i}` is using i to iterate over the id='rando' in survivor-stories.html.
    }
    
    

    } else {
      console.log('error');
      document.getElementById('rando').innerHTML = '404 Not Found';
    }
  }

  xhr.send(); //closes connection
// }

