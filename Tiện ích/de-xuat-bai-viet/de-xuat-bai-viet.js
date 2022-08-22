function recommended_products() {
  var r=10 // Số bài viết
  function get_random_posts(e) {
    if (e.feed.entry) {
      for (var t = 0; t < e.feed.entry.length; t++) {
        var entry = e.feed.entry[t],
          entry_title = entry.title.$t
        for (var a = 0; a < entry.link.length; a++) {
          if (entry.link[a].rel == 'alternate') {
            var entry_alternate = entry.link[a].href
            break
          }
        }
        if ('media$thumbnail' in entry) {
          var entry_thumb = entry.media$thumbnail.url
        } else {
          var st = entry.content.$t,
            at = st.indexOf("<img"),
            bt = st.indexOf('src="', at),
            ct = st.indexOf('"', bt + 5),
            dt = st.substr(bt + 5, ct - bt - 5)
          if (at != -1 && bt != -1 && ct != -1 && dt != "") {
            entry_thumb = dt
          } else {
            entry_thumb = 'https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s72-c/safe_image.png'
          }
        }
        if ('category' in entry) {
          for (var k = 0; k < entry.category.length; k++) {
            var entry_category = entry.category[k].term
          }
        } else {
          entry_category = ''
        }
        // Nếu muốn hiển thị bài bên trái thay right thành left
        var html = '<div class="notifications-wrapper right hide"><a href=' + entry_alternate + ' title="' + entry_title + '"><div><img alt="' + entry_title + '" src=' + entry_thumb + '></div><div><p>Đề xuất cho bạn</p><p>' + entry_title + '</p><p>' + entry_category + '</p></div></a></div>'
        $(html).appendTo('body')
      }
    }
  }
  setTimeout(function(){
    var div = $('.notifications-wrapper'),current = 0
    setInterval(function() {
      $(div).addClass('hide')
      $(div).eq(current).removeClass('hide')
      if (current < div.length - 1) current++
      else current = 0
    }, 7000)
  },2000)
  $.get('/feeds/posts/summary?alt=json&max-results=0', function(data) {
    if (data.feed) {
      var a = data.feed.openSearch$totalResults.$t
      if (a < r) r = a
      let arr = []
      do {
        let num = Math.floor(Math.random() * a)
        arr.push(num)
        arr = arr.filter((item, index) => {
          return arr.indexOf(item) === index
        })
      } while (arr.length < r)
      arr.forEach(function(m) {
        m += 1
        $.ajax({
          type: 'GET',
          url: '/feeds/posts/default',
          data: {
            'alt': 'json',
            'start-index': m,
            'max-results': 1
          },
          dataType: 'jsonp',
          success: get_random_posts
        })
      })
    }
  }, 'jsonp')
}
window.addEventListener('load', function() {
  setTimeout(recommended_products, 3000)
})