export default class ActiveNoiseCanceling {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$ActiveNoiseCancelingSection = $('#section-actice-noise-canceling');

        // Background
        this.$Background = this.$ActiveNoiseCancelingSection.find('.bg-holder');

        // Main Content
        this.$Content = this.$ActiveNoiseCancelingSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");

        // Disclaimer
        this.$Disclaimer = this.$ActiveNoiseCancelingSection.find('.disclaimer-txt')

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-actice-noise-canceling-anim', () => {
            this.DoAnimation();
        })
    }

    /* ===================================
     *  METHODS
     * =================================== */
    InitSection() {
        this.DISTANCE = IS_MOBILE ? window.innerHeight : window.innerWidth;

        // Init State
        TweenMax.set([
            this.$Background,
            this.$Content_Elements,
            this.$Disclaimer
        ], { alpha: 0 });

        // Timeline Animation Build
        this.ActiveNoiseCancelingAnimation = new TimelineMax({ paused: true });

        // Anim Start
        this.ActiveNoiseCancelingAnimation.add('anim-start');

        // Background
        this.ActiveNoiseCancelingAnimation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.ActiveNoiseCancelingAnimation.add('background-show');

        // Content
        this.ActiveNoiseCancelingAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
        this.ActiveNoiseCancelingAnimation.to(this.$Disclaimer, 0.3, { alpha: 1 }, 'background-show-=0.2');
    }

    DoAnimation() {
        this.ActiveNoiseCancelingAnimation.play();
    }
}