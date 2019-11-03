(function(wind, doc) {


    'use strict';


    const app = (function() {
        return {
            initialize: function() {
                this.initEvent();
            },
            initEvent: function() {
                this.parallax()
                this.initSadMenu()
                this.closeSadMenu()
                this.initCarousel()

            },
            parallax: function() {
                doc.addEventListener('DOMContentLoaded', function() {
                    const elems = doc.querySelectorAll('.parallax');
                    const instances = M.Parallax.init(elems);
                });
            },
            initSadMenu: function() {
                doc.addEventListener('DOMContentLoaded', function() {
                    const elems = doc.querySelectorAll('.sidenav');
                    const instances = M.Sidenav.init(elems);
                });
            },
            initCarousel: function initCarousel() {
                $('.carousel.carousel-slider').carousel({
                    fullWidth: true,
                    indicators: true
                });
            },
            closeSadMenu: function() {
                const elem = document.querySelector('.sidenav');
                const $buttons = doc.querySelectorAll('[data-js="buttonSadmenu"]');
                Array.prototype.forEach.call($buttons, function(button) {
                    button.addEventListener('click', function(e) {
                        $('.sidenav').sidenav('close');
                    }, false)
                })
            }
        };
    })()

    app.initialize()

})(window, document)