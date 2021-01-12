export default class Transparency {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$TransparencySection = $('#section-transparency-mode');

        // Background
        this.$Background = this.$TransparencySection.find('.bg-holder');

        // Main Content
        this.$Content = this.$TransparencySection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-transparency-mode-anim', () => {
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
        ], { alpha: 0 });

        // Timeline Animation Build
        this.TransparencyAnimation = new TimelineMax({
            paused: true,
            onComplete: () => {
                this.$Background.addClass('is-active');
            }
        });

        // Anim Start
        this.TransparencyAnimation.add('anim-start');

        // Background
        this.TransparencyAnimation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.TransparencyAnimation.add('background-show');

        // Content
        this.TransparencyAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
    }

    DoAnimation() {
        this.TransparencyAnimation.play();
    }
}