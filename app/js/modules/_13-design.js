export default class Design {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$DesignSection = $('#section-design');

        // Effect
        this.$Effect = this.$DesignSection.find('.effect-holder');

        // Slogan
        this.$Effect_Slogan = this.$Effect.find('.slogan-holder');
        this.$Effect_Slogan_Line1 = this.$Effect.find('.slogan-line-1');
        this.$Effect_Slogan_Line2 = this.$Effect.find('.slogan-line-2');

        // Case
        this.$Effect_Earbuds = this.$Effect.find('.earbuds-holder');
        this.$Effect_Earbuds_MainImg = this.$Effect_Earbuds.find('.main-image');
        this.$Effect_Earbuds_ShadowImg = this.$Effect_Earbuds.find('.shadow-image');

        // Main Content
        this.$Content = this.$DesignSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-design-anim', () => {
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
            this.$Effect_Slogan_Line1,
            this.$Effect_Slogan_Line2,
            this.$Effect_Earbuds_MainImg,
            this.$Effect_Earbuds_ShadowImg,
            this.$Content_Elements,
        ], { alpha: 0 });

        // Timeline Animation Build
        this.DesignAnimation = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.DesignAnimation.add('anim-start');

        // Effect Text
        this.DesignAnimation.fromTo(this.$Effect_Slogan_Line1, 0.7, {
            alpha: 0,
            x: -this.DISTANCE * 0.25
        }, {
            x: 0,
            alpha: 1,
            easing: Power4.easeOut
        }, 'anim-start');
        this.DesignAnimation.fromTo(this.$Effect_Slogan_Line2, 0.7, {
            alpha: 0,
            x: this.DISTANCE * 0.25
        }, {
            x: 0,
            alpha: 1,
            easing: Power4.easeOut
        }, 'anim-start');
        this.DesignAnimation.add('text-show');

        // Effect Image
        this.DesignAnimation.fromTo(this.$Effect_Earbuds_MainImg, 0.45, {
            alpha: 0,
            y: -this.DISTANCE * 0.025
        }, {
            y: 0,
            alpha: 1,
            easing: Power4.easeOut
        }, 'text-show');
        this.DesignAnimation.fromTo(this.$Effect_Earbuds_ShadowImg, 0.45, {
            alpha: 0,
            y: this.DISTANCE * 0.025
        }, {
            y: 0,
            alpha: 1,
            easing: Power4.easeOut
        }, 'text-show');
        this.DesignAnimation.add('effect-end')


        // Content
        this.DesignAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'effect-end-=0.25');
    }

    DoAnimation() {
        this.DesignAnimation.play();
    }
}