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
        this.mobileDeviceImages = [
            { url: "/assets/images/totems/totem-1.svg", orientation: "landscape" },
            { url: "/assets/images/totems/totem-2.svg", orientation: "landscape" },
            { url: "/assets/images/totems/totem-3.svg", orientation: "portrait" },
            { url: "/assets/images/totems/totem-4.svg", orientation: "portrait" },
            { url: "/assets/images/totems/totem-5.svg", orientation: "landscape" },
            { url: "/assets/images/totems/totem-6.svg", orientation: "landscape" }
        ];
        
        this.listen();
        this.resize(); 
    }

    isMobileOrTablet () {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    listen () {
        if (this.isMobileOrTablet()) {
            this.randomImage = Math.floor(Math.random() * this.mobileDeviceImages.length);
            this.image = this.mobileDeviceImages[this.randomImage];
            this.fetchAndInjectSvg(this.image.url);
        } 
        else {
            this.randomImage = Math.floor(Math.random() * this.images.length);
            this.image = this.images[this.randomImage];
            this.setImage();
        }
    }

    fetchAndInjectSvg(url) {
        fetch(url)
            .then(response => response.text())
            .then(svgContent => {
                this.injectSvg(svgContent);
            })
    }

    injectSvg(svgContent) {
        this.calligram.innerHTML = '';
        this.calligram.innerHTML = svgContent;
        this.calligram.className = 'calligram ' + this.image.orientation;
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