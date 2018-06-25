const xhr = new XMLHttpRequest();


xhr.open('GET', 'http://localhost:2000/api/survivor-stories', true); //opens connection

// // xhr.onload = function() {
// //   if (this.status === 200) {
// //   console.log(JSON.parse(this.responseText));
// //   document.getElementById('testID').innerHTML = this.responseText;

// //   } else {
// //     console.log('error');
// //     document.getElementById('testID').innerHTML = '404 Not Found';
// //   }
// // }

// // xhr.send(); //closes connection

xhr.onload = function() {

  if (this.status === 200) {
  console.log(JSON.parse(this.responseText));
  // document.getElementById('rando').innerHTML = this.responseText;
  var stories = JSON.parse(this.responseText);
  var count = stories.length;
  console.log('how many objects', count);
  for (let i = 0; i < stories.length; i++) {
    const element = stories[i].title;
    console.log(element);
    document.getElementById('rando').textContent = element;
  }
  
  

  } else {
    console.log('error');
    document.getElementById('rando').innerHTML = '404 Not Found';
  }
}

xhr.send(); //closes connection

