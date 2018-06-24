const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:2000/api/survivor-stories', true);

xhr.onload = function() {
  if (this.status === 200) {
  console.log(JSON.parse(this.responseText));
  } else {
    console.log('error');
  }
}

xhr.send();