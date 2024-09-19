class PageCalligram {
    constructor () {
        this.calligram = document.querySelector('.calligram');
        if (!this.calligram) {
            return;
        }
        this.images = [
            { url: "/assets/images/calligrammes/calligramme-1.svg", orientation: "landscape" },
            { url: "/assets/images/calligrammes/calligramme-2.svg", orientation: "portrait" },
            { url: "/assets/images/calligrammes/calligramme-3.svg", orientation: "landscape" },
            { url: "/assets/images/calligrammes/calligramme-4.svg", orientation: "landscape" }
        ];
        
        this.listen();
    }

    listen () {
        this.randomImage = Math.floor(Math.random() * this.images.length);
        this.image = this.images[this.randomImage];

        this.setCalligram();
    }
    setCalligram () {
        this.calligram.src = this.image.url;
        this.calligram.className +=  ' ' + this.image.orientation;
    }
}

export default new PageCalligram();