export default class Banner {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$BannerSection = $('#section-banner');

        // Background
        this.$BannerBg = this.$BannerSection.find('.bg-holder');

        // Effect Elements
        this.$BannerEffect = this.$BannerSection.find('.effect-holder');
        this.$BannerEffect_RightBud = this.$BannerEffect.find('.right-bud-holder');
        this.$BannerEffect_LeftBud = this.$BannerEffect.find('.left-bud-holder');
        this.$BannerEffect_Case = this.$BannerEffect.find('.case-holder');

        // Main Content
        this.$BannerMainContent = this.$BannerSection.find('.main-content');

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-banner-anim', () => {
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
            this.$BannerBg,
            this.$BannerEffect_RightBud,
            this.$BannerEffect_LeftBud,
            this.$BannerEffect_Case,
            this.$BannerMainContent
        ], { alpha: 0 });

        // Animation Build
        this.BannerAnimation = new TimelineMax({ paused: true });

        // Anim Start
        this.BannerAnimation.add('anim-start');

        // Background
        this.BannerAnimation.fromTo(this.$BannerBg, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.BannerAnimation.add('background-show');

        // Effect Elements
        this.BannerAnimation.fromTo(this.$BannerEffect_Case, 0.7, {
            y: this.DISTANCE * 0.025,
            apha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 'background-show-=0.4');
        this.BannerAnimation.fromTo(this.$BannerEffect_RightBud, 0.7, {
            y: this.DISTANCE * 0.03,
            rotation: -22,
            alpha: 0,
        }, {
            y: 0,
            rotation: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 'background-show-=0.2');
        this.BannerAnimation.fromTo(this.$BannerEffect_LeftBud, 0.7, {
            y: this.DISTANCE * 0.03,
            rotation: 22,
            alpha: 0,
        }, {
            y: 0,
            rotation: 0,
            easing: Power3.easeOut,
            alpha: 1,
        }, 'background-show-=0.2');

        // Main Content
        this.BannerAnimation.fromTo(this.$BannerMainContent, 0.4, { y: this.DISTANCE * 0.01, alpha: 0 }, { alpha: 1, y: 0 }, 'background-show-=0.1')
    }

    DoAnimation() {
        this.BannerAnimation.play();
    }
}