export default class Features {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Variables
        this.$FeatureSection = $('#section-features');
        this.$FeatureLayout = this.$FeatureSection.find('.feature-layout');

        this.ItemsOrder = [];
        if (IS_MOBILE) {
            this.ItemsOrder = [
                this.$FeatureLayout.find('.feature-quick-charge'),
                this.$FeatureLayout.find('.feature-transparency-mode'),
                this.$FeatureLayout.find('.feature-bass-boost'),
                this.$FeatureLayout.find('.feature-low-latency'),
                this.$FeatureLayout.find('.feature-25-hours-music'),
                this.$FeatureLayout.find('.feature-active-noise-canceling'),
                this.$FeatureLayout.find('.feature-bluetooth'),
                this.$FeatureLayout.find('.feature-noise-canceling'),
            ];
        } else {
            this.ItemsOrder = [
                this.$FeatureLayout.find('.feature-quick-charge'),
                this.$FeatureLayout.find('.feature-bass-boost'),
                this.$FeatureLayout.find('.feature-bluetooth'),
                this.$FeatureLayout.find('.feature-noise-canceling'),
                this.$FeatureLayout.find('.feature-transparency-mode'),
                this.$FeatureLayout.find('.feature-low-latency'),
                this.$FeatureLayout.find('.feature-25-hours-music'),
                this.$FeatureLayout.find('.feature-active-noise-canceling'),
            ];
        }

        // Bind Event
        this.bindEvents();
    }

    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents() {
        this.InitSection();
        realmeAirBudsProListener.on('section-features-anim', () => {
            this.DoAnimation();
        })
    }

    /* ===================================
     *  METHODS
     * =================================== */
    InitSection() {
        this.DISTANCE = IS_MOBILE ? window.innerHeight : window.innerWidth;

        // Init State
        console.log(this.ItemsOrder)
        TweenMax.set(this.ItemsOrder, { alpha: 0 });

        // Animation Build
        this.FeaturesAnimation = new TimelineMax({ paused: true });

        // Start
        this.FeaturesAnimation.add('anim-start');
        this.FeaturesAnimation.staggerFromTo(this.ItemsOrder, 0.5, { y: this.DISTANCE * 0.015, alpha: 0 }, { y: 0, alpha: 1, easing: Power3.easeOut }, 0.075);

    }

    DoAnimation() {
        this.FeaturesAnimation.play();
    }
}