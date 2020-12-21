(function(wind, doc) {


    'use strict';


    const app = (function() {
        return {
            initialize: function() {
                this.initEvent();
            },
            initEvent: function() {
                this.parallax();
                this.changeHash();
                this.scrollDown();
                this.initSadMenu();
                this.closeSadMenu();
            },
            parallax: function() {
                doc.addEventListener('DOMContentLoaded', function() {
                    const elems = doc.querySelectorAll('.parallax');
                    const instances = M.Parallax.init(elems);
                });
            },
            changeHash: function changeHash() {
                $(doc).ready(function() {
                    $('#nav-mobile').onePageNav({
                        currentClass: 'button',
                        changeHash: true,
                        scrollSpeed: 0,
                        scrollThreshold: 0.5,
                        filter: '',
                        easing: 'swing',
                    });

                });
                setInterval(function() {
                    if ($(wind).scrollTop() < $(wind).height() - 200) {
                        if (doc.querySelector('.button'))
                            doc.querySelector('.button').classList.remove('button');
                    };
                }, 200);
            },
            scrollDown: function() {
                doc.querySelector('#arrow').addEventListener('click', function(e) {
                    /*   changeHash  true*/
                });
            },
            initSadMenu: function() {
                doc.addEventListener('DOMContentLoaded', function() {
                    const elems = doc.querySelectorAll('.sidenav');
                    const instances = M.Sidenav.init(elems);
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






})(window, document);