!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n=a(o(1)),s=a(o(2)),r=a(o(3));function a(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){new n.default,new s.default,new r.default})},function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$pageHeader=$("#page-header"),this.$customHeader=$(".custom-header"),this.slickFunction(),this.headerProductFunction(),this.footerFunction(),this.LazyLoadImages(),window.innerWidth<=768&&this.$customHeader.length>0&&this.SetupMobileCustomMenu()}var t,o,s;return t=e,(o=[{key:"slickFunction",value:function(){this.SwapProductConfig()}},{key:"headerProductFunction",value:function(){var e=this;$(window).width()>767?$(".header__list__product").hover(function(){$("#page-header").toggleClass("product-active")}):$(".header__list__product .fa-angle-down").click(function(e){e.preventDefault(),$(".nav-product").stop().slideToggle(300)}),$("#nav-icon4").click(function(){$(this).toggleClass("open"),$("#page-header").toggleClass("menu-active"),$(".header__list").stop().slideToggle(300),$("body").toggleClass("stop-scroll")}),$(window).scroll(function(){$(window).scrollTop()>100?(e.$pageHeader.addClass("menu-scroll"),e.$customHeader.length>0&&(e.$pageHeader.addClass("with-custom-menu"),e.$customHeader.addClass("menu-scroll"))):(e.$pageHeader.removeClass("menu-scroll"),e.$customHeader.length>0&&(e.$pageHeader.removeClass("with-custom-menu"),e.$customHeader.removeClass("menu-scroll")))})}},{key:"footerFunction",value:function(){$("#page-footer .footer__col").each(function(){var e=$(this);$(window).width()<768&&$(this).find("h3").click(function(){e.find("ul").slideToggle(300),$(this).toggleClass("footer__col__ul--active")})})}},{key:"SwapProductConfig",value:function(){(this.$productListSwapper=$(".nav-product .product-type-switcher"),this.$productListSwapper.length>0)&&this.$productListSwapper.find(".product-type").on("click",function(e){var t=$(e.target);if(!t.hasClass("active")){var o=t.data("product-list");console.log(o);var n=$(".product-type.active"),s=$("#"+o);$(".nav-product__list.current").removeClass("current"),s.addClass("current"),n.removeClass("active"),t.addClass("active")}})}},{key:"LazyLoadImages",value:function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".lazy");var t=new IntersectionObserver(function(e,o){console.log(o),e.forEach(function(e){if(e.isIntersecting){var o=e.target;o.src=o.dataset.src,o.classList.remove("lazy"),t.unobserve(o)}})},{root:document.querySelector("#container"),rootMargin:"0px 0px 500px 0px"});e.forEach(function(e){t.observe(e)})}else{var o,n=function(){o&&clearTimeout(o),o=setTimeout(function(){var t=$(window).scrollTop();e.each(function(){var o=$(this);if(o.offset().top<window.innerHeight+t+500){var n=o.attr("data-src");o.attr("src",n),o.removeClass("lazy"),e=$(".lazy")}}),0==e.length&&($(document).off("scroll"),$(window).off("resize"))},20)};e=$(".lazy"),$(document).on("scroll",n),$(window).on("resize",n)}}},{key:"SetupMobileCustomMenu",value:function(){var e=this;this.$customMenu=$(".custom-header"),this.customMenuBlock=!1,this.$customMenuNav=this.$customMenu.find(".custom-menu-list"),this.$menuToggler=this.$customMenu.find(".mb-menu-toggle"),this.$closeCustomMenu=$(".close-custom-menu"),this.$menuToggler.on("click",function(t){e.customMenuBlock||(e.customMenuBlock=!0,e.$menuToggler.hasClass("is-show-menu")?(e.$menuToggler.removeClass("is-show-menu"),e.$customMenuNav.slideUp("fast")):(e.$menuToggler.addClass("is-show-menu"),e.$customMenuNav.slideDown("fast")),setTimeout(function(){e.customMenuBlock=!1},250))}),this.$closeCustomMenu.on("click",function(t){e.customMenuBlock||(e.customMenuBlock=!0,e.$menuToggler.removeClass("is-show-menu"),e.$customMenuNav.slideUp("fast"),setTimeout(function(){e.customMenuBlock=!1},250))})}}])&&n(t.prototype,o),s&&n(t,s),e}();t.default=s},function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$searchFrom=$("#search-product-form input"),this.$searchResultDialog=$(".search-result"),this.$searchResultLayout=$(".search-result-list"),this.$resultListHolder=$(".search-result-holder"),this.isSearching=!1,this.debounceHolder=null,this.BindEvent()}var t,o,s;return t=e,(o=[{key:"BindEvent",value:function(){var e=this;this.$searchFrom.on("focus",function(){e.$searchResultDialog.slideDown()}),this.$searchFrom.on("blur",function(){e.$searchResultDialog.slideUp()}),this.SetupSearchBox()}},{key:"SetupSearchBox",value:function(){var e=this;$("#search-product-form").on("submit",function(e){e.preventDefault()}),this.$searchFrom.on("keyup",function(t){if(console.log(t),""!==t.target.value){var o=t.target.value;switch(e.$searchResultLayout.addClass("is-searching"),t.keyCode){case 13:console.log("enter key was pressed, do the search"),e.DoSearching(o);break;default:clearTimeout(e.debounceHolder),e.debounceHolder=setTimeout(function(){e.DoSearching(o)},700)}}else e.$resultListHolder.find(".result-item").slideUp("fast",function(){e.$resultListHolder.find(".result-item").remove()}),e.$searchResultLayout.removeClass("is-searching")})}},{key:"DoSearching",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(console.log("".concat(realmeVietnamVariables.products_api,"?term=").concat(t)),fetch("".concat(realmeVietnamVariables.products_api,"?term=").concat(t)).then(function(e){return e.json()}).then(function(t){if(console.log(t),t.length>0){e.$searchResultLayout.find(".no-result").hide(),e.$resultListHolder.find(".result-item").remove();var o=t.map(function(e,t){return'<li class="result-item">\n                                <a class="link-wrapper" href="'.concat(e.landingpage,'">\n                                    <div class="phone-img">\n                                        <img src="').concat(e.thumbnail,'">\n                                    </div>\n                                    <p class="phone-name">\n                                        ').concat(e.title,"\n                                    </p>\n                                </a>\n                            </li>")});e.$resultListHolder.append(o),e.$searchResultLayout.removeClass("is-searching")}else e.$resultListHolder.find(".result-item").remove(),e.$searchResultLayout.removeClass("is-searching"),e.$searchResultLayout.find(".no-result").show()}))}}])&&n(t.prototype,o),s&&n(t,s),e}();t.default=s},function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bindEvents()}var t,o,s;return t=e,(o=[{key:"bindEvents",value:function(){this.SmoothScrollSetup()}},{key:"SmoothScrollSetup",value:function(){$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},700,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})}}])&&n(t.prototype,o),s&&n(t,s),e}();t.default=s}]);