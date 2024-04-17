var xhr = new XMLHttpRequest();
var url = './health.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');
xhr.send();