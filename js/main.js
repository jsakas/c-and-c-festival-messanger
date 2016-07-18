$(document).ready(function() {
    var $can1 = '';
    var $can2 = '';
    var $can3 = '';
    var $can4 = '';
    var $can5 = '';
    var $can6 = '';

    var $can7 = '';
    var $can8 = '';

    var $can9 = '';
    var $can0 = '';
    $('#input').on('input', function() {
        $('#text').html($(this).val());
    });

    $("#input").keydown(function(event) {
        if (event.which == 49) {
            if ($can1 === '') {
                $can1 = $('#input').val();
                $can1.replace('1', '');
                console.log($can1, 'one');
            } else {
                $can1.replace('1', '');
                $('#text').html($can1);
                $('#input').val($can1);
                console.log($can1, "two");
            }

        }
        if (event.which == 50) {
            if ($can2 === '') {
                $can2 = $('#input').val();
                $can2.replace('2', '');
                console.log($can2, 'one');
            } else {
                $can1.replace('2', '');
                $('#text').html($can2);
                $('#input').val($can2);
                console.log($can2, "two");
            }

        }
        if (event.which == 51) {
            if ($can3 === '') {
                $can3 = $('#input').val();
                $can3.replace('3', '');
                console.log($can3, 'one');
            } else {
                $can3.replace('3', '');
                $('#text').html($can3);
                $('#input').val($can3);
                console.log($can3, "two");
            }

        }
        if (event.which == 52) {
            if ($can4 === '') {
                $can4 = $('#input').val();
                $can4.replace('3', '');
                console.log($can4, 'one');
            } else {
                $can4.replace('3', '');
                $('#text').html($can4);
                $('#input').val($can4);
                console.log($can4, "two");
            }

        }
        if (event.which == 53) {
            if ($can5 === '') {
                $can5 = $('#input').val();
                $can5.replace('3', '');
                console.log($can5, 'one');
            } else {
                $can5.replace('3', '');
                $('#text').html($can5);
                $('#input').val($can5);
                console.log($can5, "two");
            }

        }
        if (event.which == 54) {
            if ($can6 === '') {
                $can6 = $('#input').val();
                $can6.replace('3', '');
                console.log($can6, 'one');
            } else {
                $can6.replace('3', '');
                $('#text').html($can6);
                $('#input').val($can6);
                console.log($can6, "two");
            }

        }
        if (event.which == 55) {
            if ($can7 === '') {
                $can7 = $('#input').val();
                $can7.replace('3', '');
                console.log($can7, 'one');
            } else {
                $can7.replace('3', '');
                $('#text').html($can7);
                $('#input').val($can7);
                console.log($can7, "two");
            }

        }
        if (event.which == 56) {
            if ($can8 === '') {
                $can8 = $('#input').val();
                $can8.replace('3', '');
                console.log($can8, 'one');
            } else {
                $can8.replace('3', '');
                $('#text').html($can8);
                $('#input').val($can8);
                console.log($can8, "two");
            }

        }
        if (event.which == 57) {
            if ($can9 === '') {
                $can9 = $('#input').val();
                $can9.replace('3', '');
                console.log($can9, 'one');
            } else {
                $can9.replace('3', '');
                $('#text').html($can9);
                $('#input').val($can9);
                console.log($can9, "two");
            }

        }
    });
});
