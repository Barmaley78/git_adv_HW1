"use strict";
const images = JSON.parse(dataInfo);
let cont = document.querySelector('.content');

for (const [key, value] of Object.entries(images)) {

    const itemEl = document.createElement('div');
    itemEl.classList.add(value.cls);
    itemEl.classList.add('card');
    let imgEl = document.createElement('img');
    imgEl.classList.add('img__item');
    imgEl.src = value.url;
    imgEl.setAttribute('alt', value.alt);

    let headerEl = document.createElement('h2');
    headerEl.innerHTML = value.header;

    let desc = document.createElement('p');
    desc.innerHTML = value.description;

    itemEl.appendChild(imgEl);
    itemEl.appendChild(headerEl);
    itemEl.appendChild(desc);

    cont.appendChild(itemEl);
};