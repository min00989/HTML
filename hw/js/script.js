document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  var overlay = document.getElementById('overlay');
  var button = document.getElementById('menu-toggle');
  if(menu.style.left === '-400px') {
    menu.style.left = '0';
    overlay.style.display = 'block';
    button.classList.add('active');
    button.innerHTML = 'X';
  }else {
    menu.style.left = '-400px';
    overlay.style.display = 'none';
    button.classList.remove('active');
    button.innerHTML = '···';
  }
});

// document.getElementById('overlay').addEventListener('click', function() {
//   var menu = document.getElementById('menu');
//   var overlay = document.getElementById('overlay');
//   var button = document.getElementById('menu-toggle');
//   menu.style.left = '-400px';
//   overlay.style.display = 'none';
//   button.classList.remove('active');
//   button.innerHTML = '···';
// });
