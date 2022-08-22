$("#main-menu").each(function(){for(var b=$(this).find(".LinkList ul > li").children("a"),g=b.length,a=0;a<g;a++){var c=b.eq(a),e=c.text();if("_"!==e.charAt(0)&&"_"===b.eq(a+1).text().charAt(0)){var h=c.parent();h.append('<ul class="sub-menu m-sub"/>')}"_"===e.charAt(0)&&(c.text(e.replace("_","")),c.parent().appendTo(h.children(".sub-menu")))}for(var a=0;a<g;a++){var d=b.eq(a),f=d.text();if("_"!==f.charAt(0)&&"_"===b.eq(a+1).text().charAt(0)){var i=d.parent();i.append('<ul class="sub-menu2 m-sub"/>')}"_"===f.charAt(0)&&(d.text(f.replace("_","")),d.parent().appendTo(i.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu ul > li a").each(function(){var a=$(this),b=a.text().trim(),d=b.toLowerCase(),e=b.split("-"),c=e[0];d.match("-text")&&(a.attr("data-title",c),a.parent("li").addClass("li-home").find("> a").text(c)),b.match("-icon")&&(a.attr("data-title",c),a.parent("li").addClass("li-home li-home-icon").find("> a").html('<i class="fas fa-home"/>'))}),$("#main-menu .widget").addClass("show-menu")}),$(function(){function a(b,c){for(var a=0;a<b[c].link.length;a++)if("alternate"==b[c].link[a].rel){var d=b[c].link[a].href;break}return d}

function b(a,b,c){return'<a href="'+c+'">'+a[b].title.$t+"</a>"}

function c(a,b){return'<span class="item-author">'+a[b].author[0].name.$t+"</span>"}

function d(b,c){
var
        a = b[c].published.$t,
        d = a.substring(0, 4),
        e = a.substring(5, 7),
        f = a.substring(8, 10),
        g = f + " " + monthFormat[parseInt(e, 10) - 1] + ", "+ d;
return'<span class="item-date published" datetime="' + a + '">' + g +"</span>"}

function e(b,c){var g=b[c].title.$t,h=b[c].content.$t,i=$("<div>").html(h);if("media$thumbnail"in b[c]){var a=b[c].media$thumbnail.url,d=a.replace("/s72-c","/s680"),e=a.replace("/s72-c","/w440-h290-p-k-no-nu"),f=a.replace("/s72-c","/w100-h80-p-k-no-nu");h.indexOf("youtube.com/embed")> -1&&(d=a.replace("/default.","/hqdefault."),e=a.replace("/default.","/mqdefault."),f=a.replace("/default.","/default."))}else h.indexOf("<img")> -1?f=e=d=i.find("img:first").attr("src"):(d=noThumbnail,e=noThumbnail.replace("/s680","/w440-h290-p-k-no-nu"),f=noThumbnail.replace("/s680","/w100-h80-p-k-no-nu"));return['<img class="image-object" alt="'+g+'" data-src="'+d+'"/>','<img class="image-object" alt="'+g+'" data-src="'+e+'"/>','<img class="image-object" alt="'+g+'" data-src="'+f+'"/>']}

function f(a,b){if(void 0!=a[b].category)var c='<span class="post-tag">'+a[b].category[0].term+"</span>";else c="";return c}

function g(a,b,e){var f=a[b].author[0].name.$t,c=a[b].author[0].gd$image.src,g=a[b].title.$t;if(c.match("//img1.blogblog.com/img/blank.gif"))var d="https://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png";else if(c.match("http://img2.blogblog.com/img/b16-rounded.gif"))var d="https://4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png";else var d=c;return'<li><a class="cmm-avatar featured-image" href="'+e+'"><img class="image-object" data-src="'+d+'" alt="'+f+'"/></a><a href="'+e+'">'+f+'</a><span class="cmm-text">'+g+"</span></li>"}

function h(l,i,j,h){switch(i){case"msimple":case"mcarousel":case"megatabs":case"ticker":case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":case"block1":case"col-left":case"col-right":case"grid1":case"carousel":case"videos":case"list":case"comments":case"related":void 0==h&&(h="geterror");var k=function(d,a,c){var b="";switch(c){case"recent":b="/feeds/posts/default?alt=json-in-script&max-results="+a;break;case"random":var e=Math.floor(Math.random()*a+1);b="/feeds/posts/default?max-results="+a+"&start-index="+e+"&alt=json-in-script";break;case"comments":b="list"==d?"/feeds/comments/default?alt=json-in-script&max-results="+a:"/feeds/posts/default/-/"+c+"?alt=json-in-script&max-results="+a;break;default:b="/feeds/posts/default/-/"+c+"?alt=json-in-script&max-results="+a}return b}(i,j,h);$.ajax({url:k,type:"GET",cache:!0,dataType:"jsonp",beforeSend:function(a){switch(i){case"featured1":case"featured2":case"related":l.html('<div class="loader"><i/></div>'),l.parent().addClass("show-ify");break;case"featured3":l.html('<div class="loader"><i/></div>'),l.parent().addClass("show-ify show-featured-3");break;case"featured4":l.html('<div class="loader"><i/></div>'),l.parent().addClass("show-ify show-featured-4");break;case"featured5":l.html('<div class="loader"><i/></div>'),l.parent().addClass("show-ify show-featured-5")}},success:function(w){var j="";switch(i){case"msimple":case"megatabs":j='<ul class="mega-widget">';break;case"mcarousel":j='<ul class="mega-widget"><div class="mega-carousel-start">';break;case"ticker":j='<ul class="ticker-posts">';break;case"featured1":j='<ul class="featured-grid featured-1">';break;case"featured2":j='<ul class="featured-grid featured-2">';break;case"featured3":j='<ul class="featured-grid featured-3">';break;case"featured4":j='<ul class="featured-grid featured-4">';break;case"featured5":j='<ul class="featured-grid featured-5">';break;case"block1":j='<ul class="block-posts-1">';break;case"col-left":case"col-right":l.parent().addClass("block-column"),j='<ul class="column-posts">';break;case"grid1":j='<ul class="grid-posts-1">';break;case"carousel":j='<ul class="block-carousel">';break;case"videos":j='<ul class="block-videos">';break;case"list":j="comments"===h?'<ul class="cmm-widget">':'<ul class="custom-widget">';break;case"related":j='<ul class="related-posts">'}var v=w.feed.entry;if(void 0!=v)for(var k=0,s=v;k<s.length;k++){var n=a(s,k),o=b(s,k,n),p=e(s,k),r=f(s,k),t=c(s,k),q=d(s,k),m="";switch(i){case"msimple":case"mcarousel":case"megatabs":m+='<div class="mega-item"><div class="mega-content"><a class="featured-image" href="'+n+'">'+p[1]+'</a><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></div></div>";break;case"ticker":m+='<li class="ticker-item"><h2 class="post-title">'+o+"</h2></li>";break;case"featured1":case"featured2":case"featured3":case"featured4":case"featured5":if(0===k)m+='<li class="featured-item item-'+(k+1)+'"><div class="featured-item-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+'</a><div class="post-info">'+r+'<h2 class="post-title">'+o+'</h2><div class="post-meta">'+t+q+"</div></div></div></li>";else switch(i){case"featured1":case"featured2":m+='<li class="featured-item item-'+(k+1)+'"><div class="featured-item-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+'</a><div class="post-info">'+r+'<h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></div></div></li>";break;case"featured3":case"featured4":case"featured5":m+='<li class="featured-item item-'+(k+1)+'"><div class="featured-item-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+'</a><div class="post-info">'+r+'<h2 class="post-title">'+o+'</h2><div class="post-meta">'+t+q+"</div></div></div></li>"}break;case"block1":0===k?m+='<li class="block-item item-'+(k+1)+'"><div class="block-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+"</a>"+r+'<div class="post-info"><h2 class="post-title">'+o+'</h2><div class="post-meta">'+t+q+"</div></div></div></li>":m+='<li class="block-item item-'+(k+1)+'"><a class="featured-image" href="'+n+'">'+p[2]+'</a><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></li>";break;case"col-left":case"col-right":0===k?m+='<li class="column-item item-1"><div class="column-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+"</a>"+r+'<div class="post-info"><h2 class="post-title">'+o+'</h2><div class="post-meta">'+t+q+"</div></div></div></li>":m+='<li class="column-item"><a class="featured-image" href="'+n+'">'+p[2]+'</a><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></li>";break;case"grid1":m+='<li class="grid-item"><div class="featured-image-wrap"><a class="featured-image" href="'+n+'">'+p[1]+"</a>"+r+'</div><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></li>";break;case"carousel":m+='<li class="carousel-item"><div class="carousel-inner"><a class="featured-image before-mask" href="'+n+'">'+p[1]+"</a>"+r+'<div class="post-info"><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></div></div></li>";break;case"videos":0===k?m+='<li class="videos-item item-'+(k+1)+'"><div class="videos-inner"><a class="featured-image before-mask" href="'+n+'">'+p[0]+'<span class="video-icon"/></a>'+r+'<div class="post-info"><h2 class="post-title">'+o+'</h2><div class="post-meta">'+t+q+"</div></div></div></li>":m+='<li class="videos-item item-'+(k+1)+'"><div class="videos-inner"><a class="featured-image before-mask" href="'+n+'">'+p[1]+'<span class="video-icon"/></a><div class="post-info"><h2 class="post-title">'+o+"</h2></div></div></li>";break;case"list":if("comments"===h){var x=g(s,k,n);m+=x}else m+='<li><a class="featured-image" href="'+n+'">'+p[2]+'</a><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></div></li>";break;case"related":m+='<li class="related-item"><div class="featured-image-wrap"><a class="featured-image" href="'+n+'">'+p[1]+"</a>"+r+'</div><h2 class="post-title">'+o+'</h2><div class="post-meta">'+q+"</div></li>"}j+=m}else switch(i){case"msimple":case"mcarousel":case"megatabs":j='<ul class="mega-widget"><span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span></ul>';break;default:j='<span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span>'}switch(i){case"mcarousel":j+="</div></ul>",l.addClass("has-sub mega-menu mega-carousel").append(j),l.find("a:first").attr("href",function(b,a){switch(h){case"recent":case"random":a=a.replace(a,"/search/?&max-results="+postPerPage);break;default:a=a.replace(a,"/search/label/"+h+"?&max-results="+postPerPage)}return a});var u=l.find(".mega-carousel-start");u.owlCarousel({items:5,slideBy:1,margin:20,smartSpeed:200,rtl:slideRTL,nav:!0,navText:["",""],loop:!0,dots:!1});break;case"msimple":j+="</ul>",l.addClass("has-sub mega-menu").append(j),l.find("a:first").attr("href",function(b,a){switch(h){case"recent":case"random":a=a.replace(a,"/search/?&max-results="+postPerPage);break;default:a=a.replace(a,"/search/label/"+h+"?&max-results="+postPerPage)}return a});break;case"ticker":j+="</div></ul>",l.html(j).parent().addClass("show-ify");var u=l.find(".ticker-posts");u.owlCarousel({items:1,animateIn:"fadeInRight",animateOut:"fadeOutRight",smartSpeed:0,rtl:slideRTL,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1});break;case"block1":case"videos":j+="</ul>",l.html(j).parent().addClass("show-ify");break;case"col-left":j+="</ul>",l.html(j).parent().addClass("column-left show-ify");break;case"col-right":j+="</ul>",l.html(j).parent().addClass("column-right show-ify");break;case"grid1":l.html(j).parent().addClass("show-ify");break;case"carousel":j+="</ul>",l.html(j).parent().addClass("show-ify");var u=l.find(".block-carousel");u.owlCarousel({items:3,slideBy:1,margin:4,smartSpeed:350,rtl:slideRTL,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,responsive:{0:{items:1},541:{items:2},681:{items:3}}});break;default:j+="</ul>",l.html(j)}l.find("img.image-object").lazyify()}})}}

function i(b, a, c, d, e) {
    if (e.match("getmega")) {
        if ("msimple" == a || "mcarousel" == a || "megatabs" == a || "mtabs" == a) return h(b, a, c, d);
        b.addClass("has-sub mega-menu").append('<ul class="mega-widget"><span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span></ul>')
    }
}
$("#main-menu-nav").clone().appendTo(".mobile-menu"), $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".slide-menu-toggle").on("click", function() {
$("body").toggleClass("nav-active"), $(".overlay").fadeToggle(250)
}), $(".mobile-menu ul li a").each(function() {
var a = $(this),
    b = a.attr("href"),
    c = $(this).data("title"),
    d = b.toLowerCase();
a.parent("li.li-home").find("> a").text(c), d.match("getmega") && (a.parent("li").append('<div class="getMega">' + b + "</div>"), a.parent("li").find(".getMega").shortcode({
    getMega: function() {
        var b = this.options.label,
            f = this.options.type;
        switch (f) {
            case "msimple":
            case "mcarousel":
                switch (b) {
                    case "recent":
                    case "random":
                        a.attr("href", "/search/?&max-results=" + postPerPage);
                        break;
                    default:
                        a.attr("href", "/search/label/" + b + "?&max-results=" + postPerPage)
                }
                break;
            case "mtabs":
                if (a.parent("li").addClass("has-sub").append('<div class="submenu-toggle"/>'), a.attr("href", "#"), void 0 != b) {
                    for (var b = b.split("/"), g = b.length, c = '<ul class="sub-menu m-sub">', d = 0; d < g; d++) {
                        var e = b[d],
                            h = postPerPage;
                        e && (c += '<li><a href="/search/label/' + e + "?&max-results=" + h + '">' + e + "</a></li>")
                    }
                    c += "</ul>", a.parent("li").append(c)
                }
        }
    }
}))
}), $("#top-bar-social .widget-content > ul").clone().addClass("social-mobile social").appendTo(".slide-menu"), $(".mobile-menu ul li .submenu-toggle").on("click", function(a) {
$(this).parent().hasClass("has-sub") && (a.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(200) : $(this).parent().addClass("show").children(".m-sub").slideToggle(200))
}), $(".header-menu,.mobile-header").each(function() {
var a = $(this);
if (!0 == fixedMenu && a.length > 0) {
    var e = $(document).scrollTop(),
        b = a.offset().top,
        c = a.height(),
        d = 20,
        f = b + c + d;
    $(window).scroll(function() {
        var b = $(document).scrollTop(),
            d = $("#footer-wrapper").offset().top - c;
        b < d && (b > f ? a.addClass("fixed-menu") : a.removeClass("fixed-menu"), b > e ? a.removeClass("show-fixed-menu") : a.addClass("show-fixed-menu"), e = $(document).scrollTop())
    })
}
}), $(".show-search, .show-mobile-search").on("click", function() {
$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()
}), $(".hide-search, .hide-mobile-search").on("click", function() {
$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()
}), $(".follow-by-email-text").text(followByEmailText), $(".follow-by-email-span").text(followByEmailSpan), $(".home-posts-headline > h3").text(recentPostsText), $(".home-posts-headline > a.more").text(showMoreText), $(".post-prev .post-nav-inner > span").text(olderText), $(".post-next .post-nav-inner > span").text(newerText), $(".about-author .author-name > span").text(postedBy), $("#related-wrap .title-wrap > h3").text(relatedPostsText), $(".comments-title > h3").text(postCommentsText), $(".Label a,.index-post-wrap .title-wrap a").attr("href", function(b, a) {
return a.replace(a, a + "?&max-results=" + postPerPage)
}), $(".avatar-image-container img").attr("src", function(b, a) {
return a = (a = a.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png")
}), $(".index-post .featured-image img, .PopularPosts .featured-image img, .FeaturedPost .featured-image img").attr("data-src", function(b, a) {
return a = a.replace("https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s680/nth-ify.png", noThumbnail)
}), $(".index-post .featured-image img, .PopularPosts .featured-image img, .FeaturedPost .featured-image img, .about-author img, .avatar-image-container img, .Image .customImage .custom-image-object").lazyify(), $("#sidebar-tabs").each(function() {
$("#sidebar-tabs .widget").each(function() {
    var a = $(this).find(".widget-title > h3").text().trim();
    $(this).attr("tab-ify", a)
}), $("#sidebar-tabs").tabify();
var a = $("#sidebar-tabs .widget").length;
a >= 1 && $(this).addClass("tabs-" + a).show()
}), $(".post-nav").each(function() {
var a = $("a.prev-post-link").attr("href"),
    b = $("a.next-post-link").attr("href");
$.ajax({
    url: a,
    type: "get",
    success: function(a) {
        var b = $(a).find(".blog-post h1.post-title").text();
        $(".post-prev a .post-nav-inner p").text(b)
    }
}), $.ajax({
    url: b,
    type: "get",
    success: function(a) {
        var b = $(a).find(".blog-post h1.post-title").text();
        $(".post-next a .post-nav-inner p").text(b)
    }
})
}), $(".share-links .window-ify").on("click", function() {
    var a = $(this),
        d = a.data("url"),
        b = a.data("width"),
        c = a.data("height"),
        e = window.screen.width,
        f = window.screen.height,
        g = window.open(d, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + b + ",height=" + c + ",left=" + Math.round(e / 2 - b / 2) + ",top=" + Math.round(f / 2 - c / 2));
    g.focus()
}), $(".share-links").each(function() {
    var a = $(this);
    a.find(".show-hid a").on("click", function() {
        a.toggleClass("show-hidden")
    })
}), $(".post-body a").each(function() {
var a = $(this),
    c = a.text().trim(),
    b = c.split("/"),
    f = b[0],
    d = b[1],
    e = b.pop();
c.match("button") && (a.addClass("button").text(f), "button" != d && a.addClass(d), "button" != e && a.addClass("colored-button").css({
    "background-color": e
}))
}), $(".post-body strike").each(function() {
var a = $(this),
    b = a.text().trim(),
    c = a.html();
b.match("contact-form") && (a.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1"))), b.match("alert-success") && a.replaceWith('<div class="alert-message alert-success short-b">' + c + "</div>"), b.match("alert-info") && a.replaceWith('<div class="alert-message alert-info short-b">' + c + "</div>"), b.match("alert-warning") && a.replaceWith('<div class="alert-message alert-warning short-b">' + c + "</div>"), b.match("alert-error") && a.replaceWith('<div class="alert-message alert-error short-b">' + c + "</div>"), b.match("left-sidebar") && a.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>"), b.match("right-sidebar") && a.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>"), b.match("full-width") && a.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>"), b.match("code-box") && a.replaceWith('<pre class="code-box short-b">' + c + "</pre>"), $(".post-body .short-b").find("b").each(function() {
    var b = $(this),
        a = b.text().trim();
    (a.match("alert-success") || a.match("alert-info") || a.match("alert-warning") || a.match("alert-error") || a.match("code-box")) && b.replaceWith("")
})
}), $(".about-author .author-description span a").each(function() {
var b = $(this),
    a = b.attr("href");
a.match("facebook.com") ? b.replaceWith('<li class="facebook"><a href="' + a + '" title="Facebook" target="_blank"/></li>') : a.match("twitter.com") ? b.replaceWith('<li class="twitter"><a href="' + a + '" title="Twitter" target="_blank"/></li>') : a.match("google.com") ? b.replaceWith('<li class="gplus"><a href="' + a + '" title="Google Plus" target="_blank"/></li>') : a.match("pinterest.com") ? b.replaceWith('<li class="pinterest"><a href="' + a + '" title="Pinterest" target="_blank"/></li>') : a.match("instagram.com") ? b.replaceWith('<li class="instagram"><a href="' + a + '" title="Instagram" target="_blank"/></li>') : a.match("linkedin.com") ? b.replaceWith('<li class="linkedin"><a href="' + a + '" title="Linkedin" target="_blank"/></li>') : a.match("youtube.com") ? b.replaceWith('<li class="youtube"><a href="' + a + '" title="YouTube" target="_blank"/></li>') : b.replaceWith('<li class="external-link"><a href="' + a + '" title="Site" target="_blank"/></li>'), $(".author-description").append($(".author-description span li")), $(".author-description").addClass("show-icons")
}), $("#main-wrapper, #sidebar-wrapper").each(function() {
!0 == fixedSidebar && $(this).theiaStickySidebar({
    additionalMarginTop: 25,
    additionalMarginBottom: 25
})
}), $(".TextList .widget-content ul li").each(function() {
var a = $(this);
a.text().toLowerCase().match("getsocial") ? a.shortcode({
    getSocial: function() {
        var b = this.options.type,
            c = this.options.link;
        void 0 != b && void 0 != c ? (a.parent("ul").addClass("social-links social social-color-hover").parent(".widget-content").addClass("show-ify"), a.replaceWith('<li class="' + b + '"><a href="' + c + '" title="' + b + '" target="_blank"/></li>')) : a.remove()
    }
}) : a.parent("ul").parent(".widget-content").addClass("show-ify")
}), $(".back-top").each(function() {
var a = $(this);
$(window).on("scroll", function() {
    $(this).scrollTop() >= 100 ? a.fadeIn(250) : a.fadeOut(250)
}), a.click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 500)
})
}), $("#main-menu li").each(function() {
var b = $(this),
    c = b.find("a").attr("href"),
    d = c.toLowerCase(),
    a = b,
    e = a,
    f = d;
d.match("getmega") && a.append('<div class="getMega">' + c + "</div>"), a.find(".getMega").shortcode({
    getMega: function() {
        var d = this.options.results,
            b = this.options.label,
            c = this.options.type;
        "msimple" == c && (d = 5), i(a, c, d, b, f), "mtabs" == c && (void 0 != b && (b = b.split("/")), function(a, f, b) {
            if ("mtabs" == f) {
                if (void 0 != b) {
                    for (var g = b.length, c = '<ul class="complex-tabs">', d = 0; d < g; d++) {
                        var e = b[d];
                        e && (c += '<div class="mega-tab" tab-ify="' + e + '"/>')
                    }
                    c += "</ul>", a.addClass("has-sub mega-menu mega-tabs").append(c), a.find("a:first").attr("href", "#"), $(".mega-tab").each(function() {
                        var a = $(this),
                            b = a.attr("tab-ify");
                        i(a, "megatabs", 4, b, "getmega")
                    }), a.find("ul.complex-tabs").tabify({
                        onHover: !0
                    })
                } else a.addClass("has-sub mega-menu mega-tabs").append('<ul class="mega-widget"><span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span></ul>')
            }
        }(e, c, b))
    }
})
}), $("#ticker-sec .HTML .widget-content").each(function() {
var a = $(this),
    b = a.text().trim().toLowerCase();
a.shortcode({
    getTicker: function() {
        var c = this.options.results,
            d = this.options.label;
        (function f(a, b, c, d, e) {
            if (e.match("getticker")) {
                if ("ticker" == b) return h(a, b, c, d);
                a.html('<span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span>').parent().addClass("show-ify")
            }
        })(a, this.options.type, c, d, b)
    }
})
}), $("#featured-sec .HTML .widget-content").each(function() {
var a = $(this),
    b = a.text().trim().toLowerCase();
a.shortcode({
    getFeatured: function() {
        var e = this.options.label,
            d = this.options.type;
        switch (d) {
            case "featured1":
                var c = 4;
                break;
            case "featured3":
                c = 6;
                break;
            default:
                c = 5
        }(function f(b, a, c, d, e) {
            if (e.match("getfeatured")) {
                if ("featured1" == a || "featured2" == a || "featured3" == a || "featured4" == a || "featured5" == a) return h(b, a, c, d);
                b.html('<div class="loader"><i/></div>').parent().addClass("show-ify"), setTimeout(function() {
                    b.html('<span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span>')
                }, 500)
            }
        })(a, d, c, e, b)
    }
})
}), $(".block-posts .HTML .widget-content").each(function() {
var a = $(this),
    b = a.text().trim().toLowerCase();
a.shortcode({
    getBlock: function() {
        var c = this.options.results,
            d = this.options.label;
        (function g(b, a, d, c, e) {
            if (e.match("getblock")) {
                if ("block1" == a || "col-left" == a || "col-right" == a || "grid1" == a || "carousel" == a || "videos" == a) {
                    var f = $(".home-posts-headline > a.more").text().trim();
                    return b.parent().find(".widget-title").append('<a class="more" href="/search/label/' + c + "?&max-results=" + postPerPage + '">' + f + "</a>"), h(b, a, d, c)
                }
                b.html('<span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span>').parent().addClass("show-ify")
            }
        })(a, this.options.type, c, d, b)
    }
})
}), $(".ready-widget .HTML .widget-content").each(function() {
var a = $(this),
    b = a.text().trim().toLowerCase();
a.shortcode({
    getWidget: function() {
        var c = this.options.results,
            d = this.options.label;
        (function f(a, b, d, c, e) {
            if (e.match("getwidget")) {
                if ("list" == b || void 0 != c) return h(a, b, d, c);
                a.html('<span class="no-posts">Lỗi: <b>Không tìm thấy kết quả nào</b></span>')
            }
        })(a, this.options.type, c, d, b)
    }
})
}), $(".related-ready").each(function() {
var a = $(this),
    b = a.find(".related-tag").attr("data-label");
(function e(a, b, f, c, d) {
    if (d.match("getrelated")) return h(a, b, 3, c)
})(a, "related", 3, b, "getrelated")
}), $("a#copyright").attr("href", "https://xuanthangwinspring.blogspot.com/").attr("title", "Professional Blogger Templates").text("Xuân Thắng").attr("style", "visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:12px!important;"), setInterval(function() {
$("a#copyright:visible").length || (window.location.href = "https://www.https://xuanthangwinspring.blogspot.com/")
}, 2800), $(".blog-post-comments").each(function() {
var a, c = commentsSystem,
    d = (disqus_blogger_current_url, $(location).attr("href")),
    b = "comments-system-" + c;
switch (c) {
    case "blogger":
        $(this).addClass(b).show();
        break;
    case "disqus":
        (a = document.createElement("script")).type = "text/javascript", a.async = !0, a.src = "//" + disqusShortname + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a), $("#comments, #gpluscomments").remove(), $(this).append('<div id="disqus_thread"/>').addClass(b).show();
        break;
    case "facebook":
        $("#comments, #gpluscomments").remove(), $(this).append('<div class="fb-comments" data-width="100%" data-href="' + d + '" data-numposts="5"></div>').addClass(b).show();
        break;
    case "hide":
        $(this).hide();
        break;
    default:
        $(this).addClass("comments-system-default").show()
}
})
})