const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'green') {
      body.style.backgroundColor = rgb(101, 227, 101);
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = rgb(227, 99, 99);
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = rgb(125, 125, 254);
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = rgb(218, 218, 115);
    }
    
  });