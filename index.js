let links =document.getElementById('links');

const githubLink = 'https://github.com/Gosigra';
const myWebSite = '#';

links.innerHTML = `
    <a href="${githubLink}">
        <li>Github</li>
    </a>
    <a href="${myWebSite}">
        <li>Мой сайт</li>
    </a>`