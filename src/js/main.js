$( document ).ready(function() {
    $('#test').on('click', function(){
        console.log('test click');
        $(this).toggleClass('click');
    });
    console.log('document load');
});