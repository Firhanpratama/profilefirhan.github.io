// event pada saat klik 
$('.page-scroll').on('click', function(){

    // ambil isi href 
    var tujuan = $(this).attr('href');
    // tangkap lemen 
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    });
    
});


// paralax
$(window).scroll(function(){
    var wscroll =$(this).scrollTop();

    $('.jumbotron imgs').css({
        'transfrom' : 'translite(0px, '+ wscroll +'%)'
    });




});