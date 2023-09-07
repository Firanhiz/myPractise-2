let btn = document.querySelector('.btn');
let boxes = document.querySelector('.boxes');
let change_news1 = document.querySelector('.news-btn1');
let change_news2 = document.querySelector('.news-btn2');
let change_news3 = document.querySelector('.news-btn3');

btn.addEventListener('click', hideShow);
function hideShow() {
    boxes.classList.toggle('hide-show');
    btn.innerText =  'Göstər' ;
    
}

change_news1.addEventListener('click', changeNews1);
change_news2.addEventListener('click', changeNews2);
change_news3.addEventListener('click', changeNews3);

function changeNews1() {
let randomNews = Math.floor(Math.random()  * news.length);
document.querySelector('.news-title1').innerHTML = news[randomNews].newsTitle;
document.querySelector('.news-img1').src = news[randomNews].newsImage;
document.querySelector('.news-content1').innerHTML = news[randomNews].newsContent;
}


function changeNews2() {
    let randomNews = Math.floor(Math.random()  * news.length);
    document.querySelector('.news-title2').innerHTML = news[randomNews].newsTitle;
    document.querySelector('.news-img2').src = news[randomNews].newsImage;
    document.querySelector('.news-content2').innerHTML = news[randomNews].newsContent;
}


function changeNews3() {
        let randomNews = Math.floor(Math.random()  * news.length);
        document.querySelector('.news-title3').innerHTML = news[randomNews].newsTitle;
        document.querySelector('.news-img3').src = news[randomNews].newsImage;
        document.querySelector('.news-content3').innerHTML = news[randomNews].newsContent;
 }

















// let show_Content = document.querySelector('.show-content');
// show_Content.addEventListener('click', showContent);
// function showContent () {
//     show_Content.innerText =  'Göstər' ;
// }
