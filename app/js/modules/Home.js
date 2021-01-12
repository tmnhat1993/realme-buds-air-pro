// Libraries
import ScrollOut from "scroll-out";
import { TweenMax } from "gsap";

// Ultils
import { pageListener } from "./utils";
import Common from "./_Common";

// Sections
import Banner from "./_1-banner";
import Features from "./_2-features";
import TVC from "./_3-tvc";
import ActiveNoiseCanceling from "./_4-active-noise-canceling";
import TransparencyMode from "./_5-transparency";
import RealmeS1 from "./_6-realme-s1";
import MicroNoiseCanceling from "./_7-micro-noise-canceling";
import Battery from "./_8-battery";
import LowLatency from "./_9-low-latency";
import Bluetooth from "./_10-bluetooth";
import DoubleChannel from "./_11-double-channel";
import BassBoost from "./_12-bass-boost";
import Design from "./_13-design";
import LightWeight from "./_14-light-weight";
import FastPairing from "./_15-fast-pairing";
import SmartSensor from "./_16-smart-sensor";
import SmartAssistant from "./_17-smart-assistant";
import WaterResistant from "./_18-water-resistant";
import RealmeLink from "./_19-realme-link";
import Specs from "./_20-specs";

export default class Home {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    // Page Listener
    window.realmeAirBudsProListener = new pageListener();
    window.currentGameAvailable = 1;

    // TweenMax
    window.TweenMax = TweenMax;

    // Ipad devices and below
    window.IS_MOBILE = window.innerWidth > 768 ? false : true;
    $(window).on("resize", () => {
      window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
    });

    // Common Behavior
    let common = new Common();

    // Sections
    let sections = {
      banner: new Banner(),
      features: new Features(),
      tvc: new TVC(),
      activeNoiseCanceling: new ActiveNoiseCanceling(),
      transparencyMode: new TransparencyMode(),
      realmeS1: new RealmeS1(),
      microNoiseCanceling: new MicroNoiseCanceling(),
      battery: new Battery(),
      lowLatency: new LowLatency(),
      bluetooth: new Bluetooth(),
      doubleChanner: new DoubleChannel(),
      bassBoost: new BassBoost(),
      design: new Design(),
      lightWeight: new LightWeight(),
      fastPairing: new FastPairing(),
      smartSensor: new SmartSensor(),
      smartAssistant: new SmartAssistant(),
      waterResistant: new WaterResistant(),
      realmeLink: new RealmeLink(),
      specs: new Specs(),
    };

    // Bind Event
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.ScrollOutSetup();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  ScrollOutSetup() {
    ScrollOut({
      onShown: (el) => {
        // use the web animation API
        console.log("in: ", $(el).attr("id"));
        let elementID = $(el).attr("id");
        realmeAirBudsProListener.emit(`${elementID}-anim`);
      },
      threshold: 0.225,
    });
  }
}
