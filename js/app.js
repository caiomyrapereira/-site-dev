(function(wind, doc) {


    'use strict';

    function on(element, event, callback) {
        doc.querySelector(element)
            .addEventListener(event, callback, false)
    }
    on('[datajs="active"]', 'click', function(event) {
        alert('ok')
    })

    doc.addEventListener('DOMContentLoaded', function() {
        var elems = doc.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });

    doc.addEventListener('DOMContentLoaded', function() {
        var elems = doc.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });







})(window, document)