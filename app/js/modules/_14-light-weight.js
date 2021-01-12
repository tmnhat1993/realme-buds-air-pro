export default class LightWeight {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$LightWeightSection = $('#section-light-weight');

        // Background
        this.$Background = this.$LightWeightSection.find('.bg-holder');

        // Effect
        this.$Effect = this.$LightWeightSection.find('.effect-holder');

        // Main Content
        this.$Content = this.$LightWeightSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-light-weight-anim', () => {
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
            this.$Effect,
            this.$Content_Elements,
        ], { alpha: 0 });

        // Timeline Animation Build
        this.LightWeightAnimation = new TimelineMax({
            paused: true,
            onComplete: () => {
                this.$Background.addClass('is-active');
            }
        });

        // Anim Start
        this.LightWeightAnimation.add('anim-start');

        // Background
        this.LightWeightAnimation.fromTo(this.$Background, 0.5, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.LightWeightAnimation.add('background-show');

        // Effect
        this.LightWeightAnimation.fromTo(this.$Effect, 0.5, { alpha: 0, y: this.DISTANCE * 0.015 }, { alpha: 1, y: 0, easing: Power3.easeOut }, 'background-show-=0.2');

        // Content
        this.LightWeightAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show');
    }

    DoAnimation() {
        this.LightWeightAnimation.play();
    }
}