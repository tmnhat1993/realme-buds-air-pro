export default class BassBoost {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$BassBoostSection = $('#section-bass-boost');

        // TOP SECTION
        this.$TopSection = this.$BassBoostSection.find('.top-group');

        // Top Effect
        this.$Top_Effect = this.$TopSection.find('.effect-holder');
        this.$Top_Effect_Bg = this.$Top_Effect.find('.background-layer');
        this.$Top_Effect_MainImage = this.$Top_Effect.find('.main-earbuds-img');

        // Top Content
        this.$Top_Content = this.$TopSection.find('.main-content');
        this.$Top_Content_Elements = this.$Top_Content.find('> *');

        // BOTTOM SECTION
        this.$BottomSection = this.$BassBoostSection.find('.bottom-group');

        // Effect
        this.$Bottom_Chart = this.$BottomSection.find('.bass-boost-chart-img');

        // Content
        this.$Bottom_Content = this.$BottomSection.find('.main-content');
        this.$Bottom_Content_Elements = this.$Bottom_Content.find('> *');

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-bass-boost-top-anim', () => {
            this.DoAnimationTop();
        });

        realmeAirBudsProListener.on('section-bass-boost-bottom-anim', () => {
            this.DoAnimationBottom();
        })
    }

    /* ===================================
     *  METHODS
     * =================================== */
    InitSection() {
        this.DISTANCE = IS_MOBILE ? window.innerHeight : window.innerWidth;

        // Init State
        TweenMax.set([
            this.$Top_Effect_Bg,
            this.$Top_Effect_MainImage,
            this.$Top_Content_Elements,
            this.$Bottom_Chart,
            this.$Bottom_Content_Elements
        ], { alpha: 0 });

        //#region TOP ANIMATION TIMELINE
        // Timeline Animation Build - TOP SECTION
        this.BassBoostAnimationTop = new TimelineMax({
            paused: true,
        });

        // Anim Start
        this.BassBoostAnimationTop.add('anim-start');

        // Effect
        this.BassBoostAnimationTop.fromTo(this.$Top_Effect_Bg, 1, {
            alpha: 0,
            scaleX: 0
        }, {
            alpha: 1,
            scaleX: 1,
            easing: Power3.easeOut
        });
        this.BassBoostAnimationTop.fromTo(this.$Top_Effect_MainImage, 0.5, {
            alpha: 0,
            y: this.DISTANCE * 0.025
        }, {
            alpha: 1,
            y: 1,
            easing: Power3.easeOut
        }, '-=0.3');
        this.BassBoostAnimationTop.add('background-show');

        // Content
        this.BassBoostAnimationTop.staggerFromTo(this.$Top_Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.25');
        //#endregion

        // #region BOTTOM ANIMATION TIMELINE
        // Timeline Animation Build - BOTTOM SECTION
        this.BassBoostAnimationBottom = new TimelineMax({
            paused: true,
        });

        // Start
        this.BassBoostAnimationBottom.add('start');
        this.BassBoostAnimationBottom.fromTo(this.$Bottom_Chart, 0.65, {
            alpha: 0,
            y: this.DISTANCE * 0.025
        }, {
            alpha: 1,
            y: 1,
            easing: Power3.easeOut
        }, '-=0.3');
        this.BassBoostAnimationTop.add('background-show');

        this.BassBoostAnimationBottom.staggerFromTo(this.$Bottom_Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.15');
        // #endregion
    }

    DoAnimationTop() {
        this.BassBoostAnimationTop.play();
    }

    DoAnimationBottom() {
        this.BassBoostAnimationBottom.play();
    }
}