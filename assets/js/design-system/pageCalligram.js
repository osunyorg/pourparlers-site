class PageCalligram {
    constructor () {
        this.calligram = document.querySelector('.calligram');
        if (!this.calligram) {
            return;
        }
        this.imageElement = this.calligram.querySelector('img');
        this.images = [
            { url: "/assets/images/calligrammes/calligramme-1.svg", orientation: "landscape" },
            { url: "/assets/images/calligrammes/calligramme-2.svg", orientation: "portrait" },
            { url: "/assets/images/calligrammes/calligramme-3.svg", orientation: "landscape" },
            { url: "/assets/images/calligrammes/calligramme-4.svg", orientation: "landscape" }
        ];
        
        this.listen();
        this.resize(); 
    }

    isMobileOrTablet () {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    listen () {
        if (this.isMobileOrTablet()) {
            this.image = '/assets/images/calligrammes/calligramme-2.svg';
            this.imageElement.src = this.image;
        } 
        else {
            this.randomImage = Math.floor(Math.random() * this.images.length);
            this.image = this.images[this.randomImage];
            this.setImage();
        }
    }

    setImage () {
        this.imageElement.src = this.image.url;
        this.calligram.className +=  ' ' + this.image.orientation;
    }

    resize () {
        window.addEventListener('resize', () => {
            const newDeviceType = this.isMobileOrTablet() ? 'mobile' : 'desktop';

            if (newDeviceType !== this.currentDeviceType) {
                this.currentDeviceType = newDeviceType;
                this.listen();
            }
        });
    }
}

export default new PageCalligram();