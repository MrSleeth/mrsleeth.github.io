$(document).ready(function () {

    equalheight = function (container) {
        var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.parent().parent().position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function () {
        equalheight('.resizeWrap > div:visible .resizeMe');
    });

    $(window).resize(function () {
        equalheight('.resizeWrap > div:visible .resizeMe');
    });
});

function showLoadingElement(elementId) {
    $('#' + elementId).fadeIn('slow');
}

function hideLoadingElement(elementId) {
    $('#' + elementId).fadeOut('slow').hide();
}

