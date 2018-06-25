const xhr = new XMLHttpRequest();


xhr.open('GET', 'http://localhost:2000/api/survivor-stories', true); //opens connection

xhr.onload = function() {
  if (this.status === 200) {
  console.log(JSON.parse(this.responseText));
  document.getElementById('testID').innerHTML = this.responseText;

  } else {
    console.log('error');
    document.getElementById('testID').innerHTML = '404 Not Found';
  }
}

xhr.send(); //closes connection
