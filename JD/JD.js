window.onload = function() {
  // 一级菜单主标题
  var Lis = document.getElementsByTagName("li");
  for (let i=0; i<Lis.length; i++) {
    Lis[i].i = i;
    Lis[i].onmouseover = function() {
      this.className = "lihover";
      var h = $($(".submenu")[i]).css("height");
      var ch = $(window).height();
      var sh = $(window).scrollTop();
      h = parseInt(h);
      if(h > ch && sh > 85) {
        $('.submenu').addClass('totop');
      }
      else {
        $('.totop').removeClass('totop');
      }
    }
    Lis[i].onmouseout = function() {
      this.className = "";
	    $('.totop').removeClass('totop');
    }
  }
  // 二级菜单span
  var Spans = $('#channel span');
  for (i=0; i<Spans.length; i++) {
    Spans[i].onmouseover = function() {
      this.className = "spanhover";
    }
    Spans[i].onmouseout = function() {
      this.className = "";
    }
  }
  // 二级菜单主标题
  var Dts = $('dt');
  for (i=0; i<Dts.length; i++) {
    Dts[i].onmouseover = function() {
      this.className = "dthover";
    }
    Dts[i].onmouseout = function() {
      this.className = "";
    }
  }
  // 二级菜单小标题
  var Ddas = $('dd a');
  for (i=0; i<Ddas.length; i++) {
    Ddas[i].onmouseover = function() {
      this.className = "ddhover";
    }
    Ddas[i].onmouseout = function() {
      this.className = "";
    }
  }
}
