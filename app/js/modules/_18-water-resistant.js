export default class WaterResistant {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$WaterResistantSection = $('#section-water-resistant');

        // Effect
        this.$Effect = this.$WaterResistantSection.find('.effect-holder');

        // Main Content
        this.$Content = this.$WaterResistantSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");

        // Feature List
        this.$FeatureList = this.$WaterResistantSection.find('.durability-list')

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-water-resistant-anim', () => {
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
        this.WaterResistantAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.WaterResistantAnimation.add('anim-start');

        // Effect
        this.WaterResistantAnimation.fromTo(this.$Effect, 0.5, {
            alpha: 0,
            y: this.DISTANCE * 0.025
        }, {
            alpha: 1,
            y: 0,
            easing: Power3.easeOut
        }, 'aim-start+=0.5');
        this.WaterResistantAnimation.add('background-show');

        // Content
        this.WaterResistantAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.3, 'anim-start');

        // Feature List
        this.WaterResistantAnimation.fromTo(this.$FeatureList, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 'aim-start+=0.8');
    }

    DoAnimation() {
        this.WaterResistantAnimation.play();
    }
}