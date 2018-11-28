//= require ./all_nosearch
//= require ./app/_search


  // new window externals
$(function() {
  $(‘body’).delegate(“a”,”click”,function() {
  var a = new RegExp(‘/’ + window.location.host + ‘/’);
  if(!a.test(this.href)) {
  event.preventDefault();
  event.stopPropagation();
  window.open(this.href, ‘_blank’);
  }
  })
};
