export default class LowLatency {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$LowLatencySection = $('#section-low-latency');

        // Background
        this.$Background = this.$LowLatencySection.find('.bg-holder');

        // Main Content
        this.$Content = this.$LowLatencySection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-low-latency-anim', () => {
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
        this.LowLatencyAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.LowLatencyAnimation.add('anim-start');

        // Background
        this.LowLatencyAnimation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.LowLatencyAnimation.add('background-show');

        // Content
        this.LowLatencyAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
    }

    DoAnimation() {
        this.LowLatencyAnimation.play();
    }
}