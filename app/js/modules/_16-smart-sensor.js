export default class SmartSensor {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Variables
    this.$SmartSensorSection = $("#section-smart-sensor");

    // Effect
    this.$Effect = this.$SmartSensorSection.find(".effect-holder");

    // Content Background
    this.$Effect_ContentBg = this.$Effect.find(".content-bg");
    this.$Effect_MainImg = this.$Effect.find(".featured-image");

    // Main Content
    this.$Content = this.$SmartSensorSection.find(".main-content");
    this.$Content_Elements = this.$Content.find("> *");

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.InitSection();
    realmeAirBudsProListener.on("section-smart-sensor-anim", () => {
      this.DoAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  InitSection() {
    this.DISTANCE = IS_MOBILE ? window.innerHeight : window.innerWidth;

    // Init State
    TweenMax.set(
      [this.$Effect_ContentBg, this.$Effect_MainImg, this.$Content_Elements],
      { alpha: 0 }
    );

    // Timeline Animation Build
    this.SmartSensorAnimation = new TimelineMax({
      paused: true,
    });

    // Anim Start
    this.SmartSensorAnimation.add("anim-start");

    // Background
    if (!IS_MOBILE) {
      this.SmartSensorAnimation.fromTo(
        this.$Effect_ContentBg,
        0.75,
        { x: -this.DISTANCE * 0.3, alpha: 0 },
        { x: 0, alpha: 1 },
        "anim-start+=0.1"
      );
      this.SmartSensorAnimation.fromTo(
        this.$Effect_MainImg,
        0.75,
        { x: this.DISTANCE * 0.1, alpha: 0 },
        { x: 0, alpha: 1 },
        "anim-start"
      );
    } else {
      this.SmartSensorAnimation.fromTo(
        this.$Effect_ContentBg,
        0.75,
        { scaleY: 0.25, alpha: 0, transformOrigin: "50% 100%" },
        { scaleY: 1, alpha: 1 },
        "anim-start+=0.1"
      );
      this.SmartSensorAnimation.fromTo(
        this.$Effect_MainImg,
        0.75,
        { y: -this.DISTANCE * 0.1, alpha: 0 },
        { y: 0, alpha: 1 },
        "anim-start"
      );
    }
    this.SmartSensorAnimation.add("effect-end");

    // Content
    this.SmartSensorAnimation.staggerFromTo(
      this.$Content_Elements,
      0.5,
      {
        y: this.DISTANCE * 0.015,
        alpha: 0,
      },
      {
        y: 0,
        alpha: 1,
        easing: Power3.easeOut,
      },
      0.075,
      "effect-end-=0.2"
    );
  }

  DoAnimation() {
    this.SmartSensorAnimation.play();
  }
}
