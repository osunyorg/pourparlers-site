const heroHome = document.querySelector('.page__home header.hero');

class HomeHero {
    constructor (dom) {
        this.dom = dom;
        this.title = this.dom.querySelector('h1');
        this.titleText = this.title.innerHTML;
        this.listen();
    }

    listen () {
        var title = 'Pourparlers';
        if (this.titleText.includes(title)) {
            this.title.innerHTML = this.titleText.replace(title, `<span class="sr-only">${title}</span>`);
        }
    }
}

if (heroHome) {
    new HomeHero(heroHome);
}