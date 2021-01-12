export default class SmartAssistant {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Variables
    this.$SmartAssistantSection = $("#section-smart-assistant");

    // Effect
    this.$Effect = this.$SmartAssistantSection.find(".effect-holder");

    // Google Assitant Image
    this.$Effect_GGAssistant = this.$Effect.find(".google-assistant-img");

    // Background
    this.$Background = this.$SmartAssistantSection.find(".bg-holder");

    // Main Content
    this.$Content = this.$SmartAssistantSection.find(".main-content");
    this.$Content_Elements = this.$Content.find("> *");

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.InitSection();
    realmeAirBudsProListener.on("section-smart-assistant-anim", () => {
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
      [this.$Effect_GGAssistant, this.$Background, this.$Content_Elements],
      { alpha: 0 }
    );

    // Timeline Animation Build
    this.SmartSensorAnimation = new TimelineMax({
      paused: true,
    });

    // Anim Start
    this.SmartSensorAnimation.add("anim-start");

    // Background
    this.SmartSensorAnimation.fromTo(
      this.$Background,
      0.75,
      { alpha: 0, scale: 1.175 },
      { alpha: 1, scale: 1, easing: Power3.easeOut }
    );
    this.SmartSensorAnimation.add("background-show");

    // Effect
    if (!IS_MOBILE) {
      this.SmartSensorAnimation.fromTo(
        this.$Effect_GGAssistant,
        0.5,
        {
          x: this.DISTANCE * 0.1,
          alpha: 0,
          scale: 0.5,
        },
        {
          x: 0,
          alpha: 1,
          scale: 1,
        },
        "background-show"
      );
    } else {
      this.SmartSensorAnimation.fromTo(
        this.$Effect_GGAssistant,
        0.5,
        {
          y: this.DISTANCE * 0.2,
          alpha: 0,
          scale: 0.3,
        },
        {
          y: 0,
          alpha: 1,
          scale: 1,
        },
        "background-show"
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
      "effect-end+=0.15"
    );
  }

  DoAnimation() {
    this.SmartSensorAnimation.play();
  }
}
