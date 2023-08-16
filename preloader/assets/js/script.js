$(document).ready(function() {
    $('.preloader').hide()

    $('.img-min').click(function(e) {
        e.preventDefault()
        $('.preloader').fadeIn(500)
        let src = $(this).attr('src')

        setTimeout(function() {
            $('.img-demo').attr('src', src)
            $('.preloader').fadeOut('1000')
        }, 1000)
        
    })
})