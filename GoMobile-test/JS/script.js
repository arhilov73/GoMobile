
// show modal with rules
$('.rules_link').click(function() {
    $('#rules-modal').addClass('active');
    $('.banner').css('opacity', '0.7');
    $('footer').css('opacity', '0.7');
})

// hide modal with rules
$('.rules-modal_cross').click(function() {
    $('#rules-modal').removeClass('active');
    $('.banner').css('opacity', '1');
    $('footer').css('opacity', '1');
})

// output to console phrase
$('.banner_button').click(function() {
    console.log("Button clicked")
})