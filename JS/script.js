//1

//const button = document.querySelector('.button');

//button.addEventListener("click", function(e) {
// console.log('Ты нажал');
//});

//button.onclick = function() {
//console.log("Ты нажал второй раз");
//};

//2

//const button = document.querySelector('.button_push');

//button.addEventListener("click", function(e) {
//console.log('Тыкнул');
//});

//3

const mouse = document.querySelector('.mouse');

mouse.addEventListener('mousemove', function(e) {
    console.log(event.clientX, event.clientY);
})

//4

window.addEventListener('scroll', function(event) {
    console.log(`${scrollY}px and ${scrollX}px`);
});