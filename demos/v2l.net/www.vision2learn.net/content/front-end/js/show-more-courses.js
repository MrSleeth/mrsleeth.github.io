/* init events  */
$(document).ready(function () {
    $(document).on('click', '#showMoreCourses', function () {
        var url = $(this).data('request-url');
        var page = $(this).data('page');
        var catalogue = $(this).data('catalogue');
        showLoadingElement("showMoreCoursesLoading-" + page)
        showMoreCourses(url, page, catalogue);
    });
});

/* Fade in paged content */
$(function () {
    fadeIn();
    $(window).scroll(function () { fadeIn(); });

    function fadeIn() {
        $('.fadeInBlock').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 200;
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 500);
                $(this).find(".animated").each(function () {
                    $(this).addClass($(this).data("anim"));
                });
            }
        });
    }
});

/* AJAX call to load next page of courses */
function showMoreCourses(url, page, catalogue) {
    var container = '#ajaxDataGridContainer-' + page;
    $.ajax({
        url: url,
        dataType: 'html',
        cache: false,
        data: { page: page, catalogue: catalogue },
        traditional: true,
        type: 'GET',
        success: function (content) {
            hideLoadingElement("showMoreCoursesLoading-" + page)
            $(container).hide().html(content).fadeIn('slow');
            equalheight('.resizeWrap > div:visible .resizeMe');
        }
    });
}
