export default class DoubleChannel {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$DoubleChannel = $('#section-double-channel');

        // Background
        this.$Effect = this.$DoubleChannel.find('.effect-holder');

        // Main Content
        this.$Content = this.$DoubleChannel.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-double-channel-anim', () => {
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
            this.$Effect,
            this.$Content_Elements,
            this.$FeatureList
        ], { alpha: 0 });

        // Timeline Animation Build
        this.DoubleChannel = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.DoubleChannel.add('anim-start');

        // Effect
        this.DoubleChannel.fromTo(this.$Effect, 0.65, { alpha: 0, y: -this.DISTANCE * 0.025 }, { alpha: 1, y: 0, easing: Power3.easeOut });
        this.DoubleChannel.add('background-show');

        // Content
        this.DoubleChannel.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.4');
    }

    DoAnimation() {
        this.DoubleChannel.play();
    }
}