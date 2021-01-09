// Libraries
import ScrollOut from "scroll-out";
import Common from "./_Common";

import { pageListener } from "./utils";

export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor() {
        // Page Listener
        window.realmeAirBudsProListener = new pageListener();
        window.currentGameAvailable = 1;

        // Ipad devices and below
        window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        $(window).on("resize", () => {
            window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
        });

        // Common Behavior
        let common = new Common();

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
                realme7TeasingListener.emit(`${elementID}-anim`);
            },
            threshold: 0.225,
        });
    }
}