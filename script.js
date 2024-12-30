// Select the menu icon element by its ID
let menuIcon = document.querySelector('#menu-icon');
// Select the navbar element by its class
let navbar = document.querySelector('.navbar');

// Add an onclick event listener to the menu icon
menuIcon.onclick = () => {
  // Log a message to the console when the menu icon is clicked
  console.log("clicked this stuff")
  // Toggle the 'bx-x' class on the menu icon
  menuIcon.classList.toggle('bx-x')
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active')
}







