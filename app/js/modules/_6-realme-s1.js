export default class RealmeS1 {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$realmeS1Section = $('#section-realme-s1-chip');

        // Background
        this.$Background = this.$realmeS1Section.find('.bg-holder');

        // Main Content
        this.$Content = this.$realmeS1Section.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-realme-s1-chip-anim', () => {
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
        this.RealmeS1Animation = new TimelineMax({
            paused: true,
            onComplete: () => {
                this.$Background.addClass('is-active');
            }
        });

        // Anim Start
        this.RealmeS1Animation.add('anim-start');

        // Background
        this.RealmeS1Animation.fromTo(this.$Background, 0.75, { alpha: 0, scale: 1.175 }, { alpha: 1, scale: 1, easing: Power3.easeOut });
        this.RealmeS1Animation.add('background-show');

        // Content
        this.RealmeS1Animation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
    }

    DoAnimation() {
        this.RealmeS1Animation.play();
    }
}