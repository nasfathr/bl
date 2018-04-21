/**
 * Print out text in console
 *
 * @return {[type]} [description]
 */
let test = (a, b) => {
  return `Test: ${a} and ${b}`;
};

console.log(test('yo', 'bro'));

$(document).ready(function () {
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form input[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault()
      register($form)
    })
  }
})

function register($form) {
  $('#mc-embedded-subscribe').val('Sending...');
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
    success: function (data) {
      $('#mc-embedded-subscribe').val('subscribe')
      if (data.result === 'success') {
        // Yeahhhh Success
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ffffff')
        $('#subscribe-result').css('color', 'rgb(53, 114, 210)')
        $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
        $('#mce-EMAIL').val('')
      } else {
        // Something went wrong, do something to notify the user.
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ff8282')
        $('#subscribe-result').css('color', '#ff8282')
        $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
      }
    }
  })
};

// injecting pre-defined heading classes to all heading tags
$(function(){
  var body = $('body');
  var h4 = body.find('h4');
  var limeClass = $('body').find('h' + i).hasClass('lime-h' + i);

  if(!limeClass) {
    for (var i = 1; i < 10; i++) {
      body.find('h' + i).addClass('lime-h' + i) 
    };
  }

  h4.contents().wrap('<span></span>');
});

function stickyMenu(el) {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 0) {
    if (el.className.indexOf('top') < 0) {
      el.className += ' top';
    }
  } else {
    el.className = el.className.replace(' top', '');
  }
}
window.addEventListener("scroll", function() {
  stickyMenu(document.getElementsByClassName('header')[0])
});


$('#mobile-menu').click(function() {
  $(this).toggleClass("menu-on");
  $('#main-nav').toggleClass('nav-active');
  $('.header').toggleClass('lime-border-active');

});

// // Select all links with hashes to scroll smooth
$('.lime-menu a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Cache selectors
var lastId,
    topMenu = $("#lime-top-menu, #scroll"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-10;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 1000);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("lime-active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//    }                   
// });












