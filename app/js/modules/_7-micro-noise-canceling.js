export default class MicroNoiseCanceling {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$MicroNoiseCancelingSection = $('#section-double-micro-noise-canceling');

        // Background
        this.$Background = this.$MicroNoiseCancelingSection.find('.bg-holder');

        // Main Content
        this.$Content = this.$MicroNoiseCancelingSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-double-micro-noise-canceling-anim', () => {
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
        ], { alpha: 0 });

        // Timeline Animation Build
        this.MicroNoiseCancelingAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.MicroNoiseCancelingAnimation.add('anim-start');

        // Background
        this.MicroNoiseCancelingAnimation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.MicroNoiseCancelingAnimation.add('background-show');

        // Content
        this.MicroNoiseCancelingAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
    }

    DoAnimation() {
        this.MicroNoiseCancelingAnimation.play();
    }
}