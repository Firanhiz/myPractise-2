'use strict';

let news = [
    {
        newsTitle: 'Bakı metrosunda “BakıKart” ləğv edilir?', 
        newsContent: 'Yeraltı nəqliyyatdan istifadə edən sərnişinlər metroda “BakıKart”ın ləğv ediləcəyindən narahatdırlar. Ötən gün “Bakı Metropoliteni” QSC-nin iki stansiyada pilot layihənin tətbiqinə başlaması sərnişinlər arasında anlaşılmazlığa səbəb olub.'
    },

    {
        newsTitle: 'Azərbaycan musiqisi və rəqsi Çində beynəlxalq sərgidə təqdim edilib', 
        newsContent: 'Azərbaycan musiqisi və rəqsi Çində “VI İpək Yolu Beynəlxalq Mədəniyyət Sərgisi”nin qala-konsert proqramında təqdim edilib. Bu barədə Mədəniyyət Nazilriyindən məlumat verilib.'
    },

    {
        newsTitle: 'Kursantlarla praktiki məşğələlər keçirilib', 
        newsContent: '2023-cü ilin tədris planı və proqramına uyğun olaraq Heydər Əliyev adına Hərbi İnstitutun kursantları ilə praktiki məşğələlər keçirilib. Əvvəlcə kursantlar simulyasiya trenajorunda dəqiq nişanalma qaydalarını məşq ediblər.'
    }
]



document.querySelector('.news-title1').innerHTML = news[0].newsTitle;
document.querySelector('.news-content1').innerHTML = news[0].newsContent;







