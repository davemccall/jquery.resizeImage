/*
* resizeImage
*
* Resizes and image to the appropriate dimensions.
*
* http://www.dave-mccall.com/
*
* Usage:
*  $("theImage").resizeImage({ maxHeight: 300, maxWidth: 300 });
*
* Requires the imagesLoaded jQuery plugin.
*
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*
*/

(function ($) {
    $.fn.resizeImage = function (options) {
        $(this).css({ width: "auto", height: "auto"}).imagesLoaded(function ($images) {
            $images.each(function () {
                var height = $(this).height();
                var width = $(this).width();
                var maxHeight = options.maxHeight;
                var maxWidth = options.maxWidth;
                if (height > maxHeight || width > maxWidth) {
                    var heightProportion = height / maxHeight;
                    var widthProportion = width / maxWidth;
                    var adjustment = 0;
                    if (heightProportion > 1 || widthProportion > 1) {
                        if (heightProportion > widthProportion)
                            adjustment = 1 / heightProportion;
                        else
                            adjustment = 1 / widthProportion;
                        adjustment = Math.floor(adjustment * 100) / 100 - 0.005;
                        $(this).css({
                            height: Math.round(height * adjustment),
                            width: Math.round(width * adjustment)
                        });
                    }
                }
            });
        });
    }
})(jQuery);
