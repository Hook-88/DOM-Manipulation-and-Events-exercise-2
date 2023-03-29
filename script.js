const alertFunction = () => {
  alert("YAY YOU DID IT!");
}

const button = document.querySelector('#btn');
button.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
});
