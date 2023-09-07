'use strict';

let news = [
    {
        newsTitle: 'Bakı metrosunda “BakıKart” ləğv edilir?', 
        newsImage: '../img/metro.jpg',
        newsContent: 'Yeraltı nəqliyyatdan istifadə edən sərnişinlər metroda “BakıKart”ın ləğv ediləcəyindən narahatdırlar. Ötən gün “Bakı Metropoliteni” QSC-nin iki stansiyada pilot layihənin tətbiqinə başlaması sərnişinlər arasında anlaşılmazlığa səbəb olub.'
    },

    {
        newsTitle: 'Azərbaycan musiqisi və rəqsi Çində beynəlxalq sərgidə təqdim edilib', 
        newsImage: '../img/az-mus.jpg',
        newsContent: 'Azərbaycan musiqisi və rəqsi Çində “VI İpək Yolu Beynəlxalq Mədəniyyət Sərgisi”nin qala-konsert proqramında təqdim edilib. Bu barədə Mədəniyyət Nazilriyindən məlumat verilib.'
    },

    {
        newsTitle: 'Kursantlarla praktiki məşğələlər keçirilib', 
        newsImage: '../img/kursant.jpg',
        newsContent: '2023-cü ilin tədris planı və proqramına uyğun olaraq Heydər Əliyev adına Hərbi İnstitutun kursantları ilə praktiki məşğələlər keçirilib. Əvvəlcə kursantlar simulyasiya trenajorunda dəqiq nişanalma qaydalarını məşq ediblər.'
    }
]



document.querySelector('.news-title1').innerHTML = news[0].newsTitle;
document.querySelector('.news-img1').src = news[0].newsImage;
document.querySelector('.news-content1').innerHTML = news[0].newsContent;


document.querySelector('.news-title2').innerHTML = news[1].newsTitle;
document.querySelector('.news-img2').src = news[1].newsImage;
document.querySelector('.news-content2').innerHTML = news[1].newsContent;


document.querySelector('.news-title3').innerHTML = news[2].newsTitle;
document.querySelector('.news-img3').src = news[2].newsImage;
document.querySelector('.news-content3').innerHTML = news[2].newsContent;





