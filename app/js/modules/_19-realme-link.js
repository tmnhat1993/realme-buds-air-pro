export default class RealmeLink {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$WaterResistantSection = $('#section-realme-link');

        // Effect
        this.$Effect = this.$WaterResistantSection.find('.effect-holder');
        this.$Effect_ContentBg = this.$Effect.find('.content-bg')
        this.$Effect_PhoneImage = this.$Effect.find('.phone-image')

        // Main Content
        this.$Content = this.$WaterResistantSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");

        // Feature List
        this.$realmeLinkDetail = this.$WaterResistantSection.find('.realmelink-detail')

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-realme-link-anim', () => {
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
            this.$Effect_ContentBg,
            this.$Effect_PhoneImage,
            this.$Content_Elements,
            this.$realmeLinkDetail
        ], { alpha: 0 });

        // Timeline Animation Build
        this.realmeLinkAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.realmeLinkAnimation.add('anim-start');

        // Effect
        this.realmeLinkAnimation.fromTo(this.$Effect_ContentBg, 0.75, {
            alpha: 0,
            scaleY: 0.25,
            transformOrigin: '0% 100%',
        }, {
            alpha: 1,
            scaleY: 1,
            transformOrigin: '0% 100%',
            easing: Power3.easeOut
        }, 'anim-start');
        this.realmeLinkAnimation.fromTo(this.$Effect_PhoneImage, 0.75, {
            alpha: 0,
            y: -this.DISTANCE * 0.05,
        }, {
            alpha: 1,
            y: 0,
            easing: Power3.easeOut
        }, 'anim-start')
        this.realmeLinkAnimation.add('effect-end');

        // Content
        this.realmeLinkAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.15, 'effect-end-=0.2');

        // Feature List
        this.realmeLinkAnimation.fromTo(this.$realmeLinkDetail, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 'effect-end+=0.1');
    }

    DoAnimation() {
        this.realmeLinkAnimation.play();
    }
}