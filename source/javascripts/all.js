//= require ./all_nosearch
//= require ./app/_search

// links in new tab
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
