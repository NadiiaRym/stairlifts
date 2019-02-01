// console.log(document)
// var page = document.querySelector('.page');
// console.log(page)
// var pageWrapper = page.querySelector('.wrapper');
// console.dir(page)
// console.dir(pageWrapper)
// var h1 = page.offsetHeight
// var h2 = pageWrapper.offsetHeight
// console.log( h1, h2)
// if(h1 < h2){
//   page.classList.add('test')
// }
var menu = document.querySelector('.main-nav');
var menuOpener = document.querySelector('.main-nav__opener');

menuOpener.addEventListener('click', function(){
  menu.classList.toggle('is-active');
})