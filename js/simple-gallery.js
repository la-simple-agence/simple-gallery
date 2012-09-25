/*
	La simple agence - plugin galerie 2012
	Fabien canu
*/

/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

(function(a){a.fn.bxSlider=function(b){function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+(b.infiniteLoop?y:0)+"px"});e.children(b.childSelector).css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children(b.childSelector).css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children(b.childSelector).css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}function I(){if((b.mode=="horizontal"||b.mode=="vertical")&&b.infiniteLoop){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function K(){if(b.auto){clearInterval(o);if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".bx-child",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function N(){h.children(".bx-window").hover(function(){if(t){d.suspendShow(false)}},function(){if(t){d.restartShow(false)}})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function R(c,e,f,g){var i=a('<a href="" class="bx-next"></a>');var j=a('<a href="" class="bx-prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=h.children(".bx-pager")}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{h.children(".bx-captions").html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html(" ")}else{h.children(".bx-captions").html(" ")}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');h.children(".bx-auto").html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){h.children(".bx-prev").hide()}else{h.children(".bx-prev").show()}var a=Math.floor(G/b.displaySlideQty)*b.displaySlideQty;if(x>=a){h.children(".bx-next").hide()}else{h.children(".bx-next").show()}}}function W(a,b){var c=e.find(" > .bx-child").eq(a).position();return b=="left"?c.left:c.top}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}var c={mode:"horizontal",childSelector:"",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){h.children(".bx-prev").hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var c=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}c=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"+="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var i=b.moveSlideQty*w;e.animate({top:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.suspendShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start")}};this.restartShow=function(a){if(typeof a=="undefined"){var a=true}if(t){K()}if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop")}};this.stopShow=function(a){t=false;this.suspendShow(a)};this.startShow=function(a){t=true;this.restartShow(a)};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children(b.childSelector);h="";i=e.children(b.childSelector+":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker&&g.length>1){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){t=false;setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);h.children(".bx-next, .bx-prev, .bx-pager, .bx-auto").remove();e.unwrap().unwrap().removeAttr("style");e.children(b.childSelector).removeAttr("style").not(".bx-child").remove();g.removeClass("bx-child")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery);
(function(b){var a={init:function(c){var e={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:550,scrollEasing:"easeOutCirc",mouseWheel:"auto",autoDraggerLength:true,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:20,scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false},callbacks:{onScroll:function(){},onTotalScroll:function(){},onTotalScrollOffset:0}},c=b.extend(true,e,c);b(document).data("mCS-is-touch-device",false);if(d()){b(document).data("mCS-is-touch-device",true)}function d(){return !!("ontouchstart" in window)?1:0}return this.each(function(){var m=b(this);if(c.set_width){m.css("width",c.set_width)}if(c.set_height){m.css("height",c.set_height)}if(!b(document).data("mCustomScrollbar-index")){b(document).data("mCustomScrollbar-index","1")}else{var s=parseInt(b(document).data("mCustomScrollbar-index"));b(document).data("mCustomScrollbar-index",s+1)}m.wrapInner("<div class='mCustomScrollBox' id='mCSB_"+b(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+b(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(c.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(c.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(c.scrollButtons.enable){if(c.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>")}}g.bind("scroll",function(){g.scrollTop(0).scrollLeft(0)});m.data({horizontalScroll:c.horizontalScroll,scrollInertia:c.scrollInertia,scrollEasing:c.scrollEasing,mouseWheel:c.mouseWheel,autoDraggerLength:c.autoDraggerLength,"scrollButtons-enable":c.scrollButtons.enable,"scrollButtons-scrollType":c.scrollButtons.scrollType,"scrollButtons-scrollSpeed":c.scrollButtons.scrollSpeed,"scrollButtons-scrollAmount":c.scrollButtons.scrollAmount,autoExpandHorizontalScroll:c.advanced.autoExpandHorizontalScroll,"onScroll-Callback":c.callbacks.onScroll,"onTotalScroll-Callback":c.callbacks.onTotalScroll,"onTotalScroll-Offset":c.callbacks.onTotalScrollOffset}).mCustomScrollbar("update");if(c.advanced.updateOnBrowserResize){var i;b(window).resize(function(){if(i){clearTimeout(i)}i=setTimeout(function(){m.mCustomScrollbar("update")},150)})}}else{var f=navigator.userAgent;if(f.indexOf("Android")!=-1){var r=parseFloat(f.slice(f.indexOf("Android")+8));if(r<3){j("mCSB_"+b(document).data("mCustomScrollbar-index"))}else{g.css({overflow:"auto","-webkit-overflow-scrolling":"touch"})}}else{g.css({overflow:"auto","-webkit-overflow-scrolling":"touch"})}o.addClass("mCS_no_scrollbar mCS_touch");m.data({horizontalScroll:c.horizontalScroll,scrollInertia:c.scrollInertia,scrollEasing:c.scrollEasing,autoExpandHorizontalScroll:c.advanced.autoExpandHorizontalScroll,"onScroll-Callback":c.callbacks.onScroll,"onTotalScroll-Callback":c.callbacks.onTotalScroll,"onTotalScroll-Offset":c.callbacks.onTotalScrollOffset});g.scroll(function(){m.mCustomScrollbar("callbacks",g,o)});function j(w){var t=document.getElementById(w),u=0,v=0;document.getElementById(w).addEventListener("touchstart",function(x){u=this.scrollTop+x.touches[0].pageY;v=this.scrollLeft+x.touches[0].pageX},false);document.getElementById(w).addEventListener("touchmove",function(x){if((this.scrollTop<this.scrollHeight-this.offsetHeight&&this.scrollTop+x.touches[0].pageY<u-5)||(this.scrollTop!=0&&this.scrollTop+x.touches[0].pageY>u+5)){x.preventDefault()}if((this.scrollLeft<this.scrollWidth-this.offsetWidth&&this.scrollLeft+x.touches[0].pageX<v-5)||(this.scrollLeft!=0&&this.scrollLeft+x.touches[0].pageX>v+5)){x.preventDefault()}this.scrollTop=u-x.touches[0].pageY;this.scrollLeft=v-x.touches[0].pageX},false)}}if(c.advanced.updateOnContentResize){var p;if(c.horizontalScroll){var n=o.outerWidth();if(d()){g.css({"-webkit-overflow-scrolling":"auto"})}}else{var n=o.outerHeight()}p=setInterval(function(){if(c.horizontalScroll){if(c.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var t=o.outerWidth()}else{var t=o.outerHeight()}if(t!=n){m.mCustomScrollbar("update");n=t}},300)}})},update:function(){var l=b(this),i=l.children(".mCustomScrollBox"),o=i.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){o.removeClass("mCS_no_scrollbar")}var w=i.children(".mCSB_scrollTools"),m=w.children(".mCSB_draggerContainer"),k=m.children(".mCSB_dragger");if(l.data("horizontalScroll")){var y=w.children(".mCSB_buttonLeft"),r=w.children(".mCSB_buttonRight"),d=i.width();if(l.data("autoExpandHorizontalScroll")){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var x=o.outerWidth()}else{var u=w.children(".mCSB_buttonUp"),e=w.children(".mCSB_buttonDown"),p=i.height(),g=o.outerHeight()}if(g>p&&!l.data("horizontalScroll")&&!b(document).data("mCS-is-touch-device")){w.css("display","block");var q=m.height();if(l.data("autoDraggerLength")){var s=Math.round(p/g*q),j=k.data("minDraggerHeight");if(s<=j){k.css({height:j})}else{if(s>=q-10){var n=q-10;k.css({height:n})}else{k.css({height:s})}}k.children(".mCSB_dragger_bar").css({"line-height":k.height()+"px"})}var z=k.height(),v=(g-p)/(q-z);l.data("scrollAmount",v);l.mCustomScrollbar("scrolling",i,o,m,k,u,e,y,r);var B=Math.abs(Math.round(o.position().top));l.mCustomScrollbar("scrollTo",B,{callback:false})}else{if(x>d&&l.data("horizontalScroll")&&!b(document).data("mCS-is-touch-device")){w.css("display","block");var f=m.width();if(l.data("autoDraggerLength")){var h=Math.round(d/x*f),A=k.data("minDraggerWidth");if(h<=A){k.css({width:A})}else{if(h>=f-10){var c=f-10;k.css({width:c})}else{k.css({width:h})}}}var t=k.width(),v=(x-d)/(f-t);l.data("scrollAmount",v);l.mCustomScrollbar("scrolling",i,o,m,k,u,e,y,r);var B=Math.abs(Math.round(o.position().left));l.mCustomScrollbar("scrollTo",B,{callback:false})}else{i.unbind("mousewheel");i.unbind("focusin");if(l.data("horizontalScroll")){k.add(o).css("left",0)}else{k.add(o).css("top",0)}w.css("display","none");o.addClass("mCS_no_scrollbar")}}},scrolling:function(h,p,m,j,v,c,y,s){var l=b(this);if(!j.hasClass("ui-draggable")){if(l.data("horizontalScroll")){var i="x"}else{var i="y"}j.draggable({axis:i,containment:"parent",drag:function(B,C){l.mCustomScrollbar("scroll");j.addClass("mCSB_dragger_onDrag")},stop:function(B,C){j.removeClass("mCSB_dragger_onDrag")}})}m.unbind("click").bind("click",function(D){if(l.data("horizontalScroll")){var B=(D.pageX-m.offset().left);if(B<j.position().left||B>(j.position().left+j.width())){var C=B;if(C>=m.width()-j.width()){C=m.width()-j.width()}j.css("left",C);l.mCustomScrollbar("scroll")}}else{var B=(D.pageY-m.offset().top);if(B<j.position().top||B>(j.position().top+j.height())){var C=B;if(C>=m.height()-j.height()){C=m.height()-j.height()}j.css("top",C);l.mCustomScrollbar("scroll")}}});if(l.data("mouseWheel")){var t=l.data("mouseWheel");if(l.data("mouseWheel")==="auto"){t=8;var n=navigator.userAgent;if(n.indexOf("Mac")!=-1&&n.indexOf("Safari")!=-1&&n.indexOf("AppleWebKit")!=-1&&n.indexOf("Chrome")==-1){t=1}}h.unbind("mousewheel").bind("mousewheel",function(E,J){E.preventDefault();var I=Math.abs(J*t);if(l.data("horizontalScroll")){var D=j.position().left-(J*I);j.css("left",D);if(j.position().left<0){j.css("left",0)}var H=m.width(),G=j.width();if(j.position().left>H-G){j.css("left",H-G)}}else{var B=j.position().top-(J*I);j.css("top",B);if(j.position().top<0){j.css("top",0)}var F=m.height(),C=j.height();if(j.position().top>F-C){j.css("top",F-C)}}l.mCustomScrollbar("scroll")})}if(l.data("scrollButtons-enable")){if(l.data("scrollButtons-scrollType")==="pixels"){var A;if(b.browser.msie&&parseInt(b.browser.version)<9){l.data("scrollInertia",0)}if(l.data("horizontalScroll")){s.add(y).unbind("click mousedown mouseup mouseout",k,g);s.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().left)+l.data("scrollButtons-scrollAmount");l.mCustomScrollbar("scrollTo",A)}});y.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().left)-l.data("scrollButtons-scrollAmount");if(p.position().left>=-l.data("scrollButtons-scrollAmount")){A="left"}l.mCustomScrollbar("scrollTo",A)}})}else{c.add(v).unbind("click mousedown mouseup mouseout",r,f);c.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().top)+l.data("scrollButtons-scrollAmount");l.mCustomScrollbar("scrollTo",A)}});v.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().top)-l.data("scrollButtons-scrollAmount");if(p.position().top>=-l.data("scrollButtons-scrollAmount")){A="top"}l.mCustomScrollbar("scrollTo",A)}})}}else{if(l.data("horizontalScroll")){s.add(y).unbind("click mousedown mouseup mouseout",k,g);var x,e=m.width(),u=j.width();s.bind("mousedown",function(C){C.preventDefault();var B=e-u;x=setInterval(function(){var D=Math.abs(j.position().left-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({left:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var k=function(B){B.preventDefault();clearInterval(x);j.stop()};s.bind("mouseup mouseout",k);var d;y.bind("mousedown",function(C){C.preventDefault();var B=0;d=setInterval(function(){var D=Math.abs(j.position().left-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({left:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var g=function(B){B.preventDefault();clearInterval(d);j.stop()};y.bind("mouseup mouseout",g)}else{c.add(v).unbind("click mousedown mouseup mouseout",r,f);var o,q=m.height(),z=j.height();c.bind("mousedown",function(C){C.preventDefault();var B=q-z;o=setInterval(function(){var D=Math.abs(j.position().top-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({top:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var r=function(B){B.preventDefault();clearInterval(o);j.stop()};c.bind("mouseup mouseout",r);var w;v.bind("mousedown",function(C){C.preventDefault();var B=0;w=setInterval(function(){var D=Math.abs(j.position().top-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({top:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var f=function(B){B.preventDefault();clearInterval(w);j.stop()};v.bind("mouseup mouseout",f)}}}h.unbind("focusin").bind("focusin",function(){h.scrollTop(0).scrollLeft(0);var C=b(document.activeElement);if(C.is("input,textarea,select,button,a[tabindex],area,object")){if(l.data("horizontalScroll")){var J=p.position().left,G=C.position().left,E=h.width(),H=C.outerWidth();if(J+G>=0&&J+G<=E-H){}else{var K=G/l.data("scrollAmount");if(K>=m.width()-j.width()){K=m.width()-j.width()}j.css("left",K);l.mCustomScrollbar("scroll")}}else{var I=p.position().top,F=C.position().top,B=h.height(),D=C.outerHeight();if(I+F>=0&&I+F<=B-D){}else{var K=F/l.data("scrollAmount");if(K>=m.height()-j.height()){K=m.height()-j.height()}j.css("top",K);l.mCustomScrollbar("scroll")}}}})},scroll:function(h){var k=b(this),p=k.find(".mCSB_dragger"),n=k.find(".mCSB_container"),e=k.find(".mCustomScrollBox");if(k.data("horizontalScroll")){var g=p.position().left,m=-g*k.data("scrollAmount"),o=n.position().left,d=Math.round(o-m)}else{var f=p.position().top,j=-f*k.data("scrollAmount"),l=n.position().top,c=Math.round(l-j)}if(b.browser.webkit){var q=(window.outerWidth-8)/window.innerWidth,i=(q<0.98||q>1.02)}if(k.data("scrollInertia")===0||i){if(k.data("horizontalScroll")){n.css("left",m)}else{n.css("top",j)}if(!h){k.mCustomScrollbar("callbacks",e,n)}}else{if(k.data("horizontalScroll")){n.stop().animate({left:"-="+d},k.data("scrollInertia"),k.data("scrollEasing"),function(){if(!h){k.mCustomScrollbar("callbacks",e,n)}})}else{n.stop().animate({top:"-="+c},k.data("scrollInertia"),k.data("scrollEasing"),function(){if(!h){k.mCustomScrollbar("callbacks",e,n)}})}}},scrollTo:function(g,m){var f={moveDragger:false,callback:true},m=b.extend(f,m),i=b(this),c,d=i.find(".mCustomScrollBox"),j=d.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){var e=i.find(".mCSB_draggerContainer"),k=e.children(".mCSB_dragger")}var l;if(g){if(typeof(g)==="number"){if(m.moveDragger){c=g}else{l=g;c=Math.round(l/i.data("scrollAmount"))}}else{if(typeof(g)==="string"){var h;if(g==="top"){h=0}else{if(g==="bottom"&&!i.data("horizontalScroll")){h=j.outerHeight()-d.height()}else{if(g==="left"){h=0}else{if(g==="right"&&i.data("horizontalScroll")){h=j.outerWidth()-d.width()}else{if(g==="first"){h=i.find(".mCSB_container").find(":first")}else{if(g==="last"){h=i.find(".mCSB_container").find(":last")}else{h=i.find(g)}}}}}}if(h.length===1){if(i.data("horizontalScroll")){l=h.position().left}else{l=h.position().top}if(b(document).data("mCS-is-touch-device")){c=l}else{c=Math.ceil(l/i.data("scrollAmount"))}}else{c=h}}}if(b(document).data("mCS-is-touch-device")){if(i.data("horizontalScroll")){d.stop().animate({scrollLeft:c},i.data("scrollInertia"),i.data("scrollEasing"),function(){if(m.callback){i.mCustomScrollbar("callbacks",d,j)}})}else{d.stop().animate({scrollTop:c},i.data("scrollInertia"),i.data("scrollEasing"),function(){if(m.callback){i.mCustomScrollbar("callbacks",d,j)}})}}else{if(i.data("horizontalScroll")){if(c>=e.width()-k.width()){c=e.width()-k.width()}k.css("left",c)}else{if(c>=e.height()-k.height()){c=e.height()-k.height()}k.css("top",c)}if(m.callback){i.mCustomScrollbar("scroll")}else{i.mCustomScrollbar("scroll",true)}}}},callbacks:function(e,h){var i=b(this);if(!b(document).data("mCS-is-touch-device")){if(i.data("horizontalScroll")){var g=Math.round(h.position().left);if(g<0&&g<=e.width()-h.outerWidth()+i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}else{var f=Math.round(h.position().top);if(f<0&&f<=e.height()-h.outerHeight()+i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}}else{if(i.data("horizontalScroll")){var d=Math.round(e.scrollLeft());if(d>0&&d>=h.outerWidth()-i.width()-i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}else{var c=Math.round(e.scrollTop());if(c>0&&c>=h.outerHeight()-i.height()-i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}}}};b.fn.mCustomScrollbar=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method "+c+" does not exist")}}}})(jQuery);


var lasimpleagenceGalerie = function(jQuery){

    var 
    slider1, 
    pagerSlider1,
    parent = jQuery('.diaporama');

    function initialize() {

        // Init
        slider1 = jQuery('#slider1').bxSlider({
            controls: false, 
            //auto: 'play',
            onAfterSlide: function(index) {
                var slideIndex = 5; 
                activePager(index);
                displayDesc(index);
            }
        });
		
        pagerSlider1 = jQuery('#pager-slider1').bxSlider({
            displaySlideQty: 10, 
            infiniteLoop: false,
            wrapperClass: 'bx-wrapper-pager'
        });
		
        // DOM - Cr?ation de la zone description
        jQuery('<div id="galerie-description" />').appendTo('.diaporama'); 
        displayDesc(0);
		
        // DOM - Ajout des elements divers de nav
        jQuery('<span class="pager-prev prev">prev</span>').appendTo('.bx-wrapper-pager');
        jQuery('<span class="pager-next next">next</span>').appendTo('.bx-wrapper-pager');
		
        // Correction pour l'alignement des images
        jQuery('#slider1 img').imagesLoaded(function(){
            var _this = jQuery(this);
            _this.each(function(){
                jQuery(this).css({
                    width: jQuery(this).width(),
                    height: jQuery(this).height(),
                    marginTop: -(jQuery(this).height()/2),
                    marginLeft: -(jQuery(this).width()/2)
                });				
            })
        });
		
        action();
    };
	
    function action(){    
	
        // D?claration variables
        var total = slider1.getSlideCount();
		
        // Gestion des clicks pour les slides 
        jQuery('#pager-slider1 li, .next, .prev, .pagination a').live('click', function(event){
			
            event.preventDefault();
			
            var _this = jQuery(this);
            var _slideCurrent = slider1.getCurrentSlide();
            var thumbIndex, sens, _slidePrev;
			
            // Si on click sur les masque de l'image
            if(_this.is('span') || _this.is('img')) {
                var indexTmp = jQuery('#pager-slider1 li.pager-active').index();
                thumbIndex = (_this.hasClass('next')) ? indexTmp+1: indexTmp-1;
            } 
            // Si l'on click sur la pagination
            else if(_this.is('a')) {
                _this.addClass('pager-active'); 
                thumbIndex = _this.text()-1;
            }
            // Si l'on click sur les thumbs
            else {
                thumbIndex =  _this.index();
            }
			
            // Si en bout de course on sort
            if(total == thumbIndex || thumbIndex < 0) {
                thumbIndex = 0;
            }
			
            // Sens
            sens = (_slideCurrent < thumbIndex) ? 'next': 'prev' ;
			
            // Slide !			
            _slidePrev = _slideCurrent;
            slider1.goToSlide(thumbIndex);        
            _slideCurrent = slider1.getCurrentSlide();      
			
            // On ne slide que si n?cessaire
            switch(sens) {
                case 'next':
                    if(_slideCurrent+10 <= total) {
                        pagerSlider1.goToSlide(thumbIndex); 
                    } 
                    else if ((_slideCurrent-_slidePrev) >= 10) {
                        pagerSlider1.goToSlide(total-10); 
                    }
                    break;
                case 'prev':
                    if(_slideCurrent+10 <= total) {
                        pagerSlider1.goToSlide(thumbIndex); 
                    } 
                    break;
            }
            // Pagination highlight
            activePager(thumbIndex);

            // Afichage de la description
            //console.log(thumbIndex);
            displayDesc(thumbIndex);
        });
		
        //
        // Hacks
        //

        jQuery('#pager-slider1 li:eq(0)').addClass('pager-active');    
		
        // Suppression du premier element du pager thumbs
        //jQuery('#pager-slider1 li:first').remove();
        jQuery('#pager-slider1').css('left', 0);
		
        //
        // Pagination et buttons
        //
		
        // Pagination photo
        eventPicture();
	
    };

    function activePager(thumbIndex){
        jQuery('li, a').removeClass('pager-active');
        jQuery('#pager-slider1 li:eq('+thumbIndex+')').addClass('pager-active'); 		
    }
	
    function displayDesc(index) {
		
        var txt = jQuery('div.description-media:eq('+ (index+1) +')').html();
        jQuery('#galerie-description').html(txt);
        jQuery("#galerie-description").mCustomScrollbar("update");

    };
	
    function getPagination (total) {
	
        pagination = jQuery('<div class="pagination" />');
        for(var index = 1; index <= total; ++index) {
            pagination.append(jQuery('<a>'+ index +'</a> '));
        }
        pagination.prependTo('.diaporama');
		
    };
	
    function eventPicture () {
	
        var sliderImg = jQuery('#slider1 li img').addClass('next');
        jQuery('#slider1 li').append('<span class="img-left prev" style="width:'+sliderImg.innerWidth()/2+'px; height:'+sliderImg.innerHeight()+'px;" />');
		
    };
	
    return {
        init: initialize
    }

}(jQuery);

jQuery(function(jQuery){
    
    lasimpleagenceGalerie.init();  
    
});

jQuery.fn.imagesLoaded = function(callback){
    // Debugging for FF, and Opera
    function debug(affichage) {
        if(jQuery.browser.opera) {
            opera.postError(affichage);// Opera
        }else if(jQuery.browser.mozilla) {
            if (window.console && window.console.firebug) { 
                console.debug(affichage);// FF
            }
        }else if(jQuery.browser.webkit) {
            if (window.console) { 
                console.log(affichage);// safari // Chrome
            }
        }
    }

    var elems = this.filter('img'),
    len   = elems.length,
    blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    elems.unbind('load').bind('load',function(){
        if (--len <= 0 && this.src !== blank){
            callback.call(elems,this);
        }
    }).each(function(index){
        // cached images don't fire load sometimes, so we reset src.
        if (this.complete || this.complete === undefined){
            var src = this.src;
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            // data uri bypasses webkit log warning (thx doug jones)
            this.src = blank;
            this.src = src;
        }  
    });
    return this;
};
