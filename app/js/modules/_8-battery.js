export default class Battery {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$BatterySection = $('#section-battery');

        // Background
        this.$Background = this.$BatterySection.find('.bg-holder');

        // Main Content
        this.$Content = this.$BatterySection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");

        // Feature
        this.$FeatureList = this.$BatterySection.find('.feature-listing');


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-battery-anim', () => {
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
            this.$FeatureList
        ], { alpha: 0 });

        // Timeline Animation Build
        this.BatteryAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.BatteryAnimation.add('anim-start');

        // Background
        this.BatteryAnimation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.BatteryAnimation.add('background-show');

        // Content
        this.BatteryAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');

        // Feature
        this.BatteryAnimation.fromTo(this.$FeatureList, 0.4, { alpha: 0, y: this.DISTANCE * 0.015 }, { alpha: 1, y: 0 }, 'background-show+=0.3');
    }

    DoAnimation() {
        this.BatteryAnimation.play();
    }
}