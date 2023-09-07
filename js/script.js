let btn = document.querySelector('.btn');
let boxes = document.querySelector('.boxes');
let change_news = document.querySelector('.news-btn1');

btn.addEventListener('click', hideShow);
function hideShow() {
    boxes.classList.toggle('hide-show');
    btn.innerText =  'Göstər' ;
    
}




change_news.addEventListener('click', changeNews);
function changeNews() {

let randomNews = Math.floor(Math.random()  * news.length);
document.querySelector('.news-title1').innerHTML = news[randomNews].newsTitle;
document.querySelector('.news-content1').innerHTML = news[randomNews].newsContent;
}















// let show_Content = document.querySelector('.show-content');
// show_Content.addEventListener('click', showContent);
// function showContent () {
//     show_Content.innerText =  'Göstər' ;
// }
