// event pada saat link diklik
$('.page-scroll').on('click', function(){
    //console.log('ok')

    //ambil isi href
    var tujuan = $(this).attr('href');
    //console.log('href')

    //tangkap elm bersangkutan
    var elemenTujuan = $(tujuan);
    //console.log(elemenTujuan.offset)

    //pindah dengan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');



});