export default class Bluetooth {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$BluetoothSection = $('#section-bluetooth');

        // Effect
        this.$Effect = this.$BluetoothSection.find('.effect-holder');

        // Main Content
        this.$Content = this.$BluetoothSection.find('.main-content');
        this.$Content_Elements = this.$Content.find("> *");


        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-bluetooth-anim', () => {
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
        this.BluetoothAnimation = new TimelineMax({
            paused: true,
            onComplete: () => {
                this.$Effect.addClass('is-active')
            }
        });

        // Anim Start
        this.BluetoothAnimation.add('anim-start');

        // Background
        this.BluetoothAnimation.fromTo(this.$Effect, 0.75, { alpha: 0, y: this.DISTANCE * 0.025 }, { alpha: 1, y: 0, easing: Power3.easeOut });
        this.BluetoothAnimation.add('background-show');

        // Content
        this.BluetoothAnimation.staggerFromTo(this.$Content_Elements, 0.5, {
            y: this.DISTANCE * 0.015,
            alpha: 0
        }, {
            y: 0,
            alpha: 1,
            easing: Power3.easeOut
        }, 0.075, 'background-show-=0.2');
    }

    DoAnimation() {
        this.BluetoothAnimation.play();
    }
}