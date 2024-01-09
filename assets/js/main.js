$(document).ready(function () {
    // The le
    $(document).on('click', '.modal-guide', function() {
        DialogGuide();
    });
    // History
    $('.card-routes').on('click', '.history', function() {
        AskToLogIn();
    });
    // BXH
    $(document).on('click', '.charts-btn', function() {
        DialogCharts();
    });
    // Doi qua
    var targetOffset = $('.get-gifts').offset().top * .9;
    $('.card-routes').on('click', '.scroll-to-gift', function () {
        ScrollToGift(targetOffset);
    });
    // Them luot
    $('.more-turns').on('click', '.btn', function () {
        AskToLogIn();
    });
    // Get gifts
    $('.get-gifts').on('click', 'a', function () {
        AskToLogIn();
    });

    // Footer Mobile
    $('.routes-mob').on('click', '.modal-guide', function() {
        DialogGuide();
    });
    $(document).on('click', '.history', function() {
        AskToLogIn();
    });
    $(document).on('click', '.scroll-to-gift', function() {
        ScrollToGift(targetOffset);
    });
});

// Modal
function DialogGuide() {
    $('#dialogGuide').modal('toggle');
};

function DialogCharts() {
    $('#dialogCharts').modal('toggle');
};

// Scroll
function ScrollToGift(targetOffset) {
    $('html, body').animate({
        scrollTop: targetOffset
    }, 100);
}

// SweetAlert
function AskToLogIn() {
    swal("Vui lòng đăng nhập!");
}

