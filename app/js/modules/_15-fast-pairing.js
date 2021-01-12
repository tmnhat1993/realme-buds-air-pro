export default class FastPairing {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$FastPairingSection = $('#section-fast-pairing');

        // Effect
        this.$Effect = this.$FastPairingSection.find('.effect-holder');

        // Phone Image
        this.$Effect_Phone = this.$Effect.find('.phone-image');
        this.$Effect_Phone_MainImg = this.$Effect_Phone.find('.main-phone')
        this.$Effect_Phone_ShadowImg = this.$Effect_Phone.find('.shadow-phone');

        // EarBuds Image
        this.$Effect_Earbuds = this.$Effect.find('.earbud-image');
        this.$Effect_Earbuds_MainImg = this.$Effect_Earbuds.find('.main-earbud');
        this.$Effect_Earbuds_ShadowImg = this.$Effect_Earbuds.find('.shadow-earbud');

        // Main Content
        this.$Content = this.$FastPairingSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-fast-pairing-anim', () => {
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
            this.$Effect_Phone_MainImg,
            this.$Effect_Phone_ShadowImg,
            this.$Effect_Earbuds_MainImg,
            this.$Effect_Earbuds_ShadowImg,
            this.$Content_Elements,
        ], { alpha: 0 });

        // Timeline Animation Build
        this.FastPairingAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.FastPairingAnimation.add('anim-start');

        // Phone Image Effect
        this.FastPairingAnimation.fromTo(this.$Effect_Phone_MainImg, 0.75, {
            alpha: 0,
            y: -this.DISTANCE * 0.015
        }, {
            alpha: 1,
            y: 0,
            easing: Power3.easeOut
        }, 'anim-start');
        this.FastPairingAnimation.fromTo(this.$Effect_Phone_ShadowImg,
            0.75, {
                alpha: 0,
                y: this.DISTANCE * 0.015
            }, {
                alpha: 1,
                y: 0,
                easing: Power3.easeOut
            }, 'anim-start');

        // Earbud Effect
        this.FastPairingAnimation.fromTo(this.$Effect_Earbuds_MainImg, 0.75, {
            alpha: 0,
            y: -this.DISTANCE * 0.015
        }, {
            alpha: 1,
            y: 0,
            easing: Power3.easeOut
        }, 'anim-start+=0.25');
        this.FastPairingAnimation.fromTo(this.$Effect_Earbuds_ShadowImg,
            0.75, {
                alpha: 0,
                y: this.DISTANCE * 0.015
            }, {
                alpha: 1,
                y: 0,
                easing: Power3.easeOut
            }, 'anim-start+=0.25');
        this.FastPairingAnimation.add('effect-end');

        // Content
        this.FastPairingAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'effect-end-=0.45');
    }

    DoAnimation() {
        this.FastPairingAnimation.play();
    }
}