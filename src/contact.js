import contact from './json/contact.json';

const content = () => {
    const content = document.createElement('div');
    content.id = 'contact';
    content.appendChild(h1());
    content.appendChild(cards());
    return content;
}

const h1 = () => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    return h1;
}

const cards = () => {
    const content = document.createElement('div');
    content.id = 'contact-container';
    for (const k in contact) {
        content.appendChild(card(k, contact[k]));
    }
    return content;
}

const card = (k, v) => {
    const key = document.createElement('h3');
    key.textContent = k;
    const value = document.createElement('p');
    value.textContent = v;
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(key);
    card.appendChild(value);
    return card;
}

export default content;
