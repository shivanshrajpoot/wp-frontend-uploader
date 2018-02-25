/*$j=jQuery.noConflict();
$j(function() {
    var $document = $j(document);
    var selector = '[data-rangeslider]';
    var $element = $j(selector);
    // For ie8 support
    var textContent = ('textContent' in document) ? 'textContent' : 'innerText';
    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value;
        var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
        output[textContent] = value;
    }
    $document.on('input', 'input[type="range"], ' + selector, function(e) {
        valueOutput(e.target);
    });
    // Example functionality to demonstrate disabled functionality
    $document .on('click', '#js-example-disabled button[data-behaviour="toggle"]', function(e) {
        var $inputRange = $j(selector, e.target.parentNode);
        if ($inputRange[0].disabled) {
            $inputRange.prop("disabled", false);
        }
        else {
            $inputRange.prop("disabled", true);
        }
        $inputRange.rangeslider('update');
    });
    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $j(selector, e.target.parentNode);
        var value = $j('input[type="number"]', e.target.parentNode)[0].value;
        $inputRange.val(value).change();
    });
    // Example functionality to demonstrate programmatic attribute changes
    $document.on('click', '#js-example-change-attributes button', function(e) {
        var $inputRange = $j(selector, e.target.parentNode);
        var attributes = {
                min: $j('input[name="min"]', e.target.parentNode)[0].value,
                max: $j('input[name="max"]', e.target.parentNode)[0].value,
                step: $j('input[name="step"]', e.target.parentNode)[0].value
            };
        $inputRange.attr(attributes);
        $inputRange.rangeslider('update', true);
    });
    // Example functionality to demonstrate destroy functionality
    $document
        .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
            $j(selector, e.target.parentNode).rangeslider('destroy');
        })
        .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
            $j(selector, e.target.parentNode).rangeslider({ polyfill: false });
        });
    // Example functionality to test initialisation on hidden elements
    $document
        .on('click', '#js-example-hidden button[data-behaviour="toggle"]', function(e) {
            var $container = $j(e.target.previousElementSibling);
            $container.toggle();
        });
    // Basic rangeslider initialization
    $element.rangeslider({
        // Deactivate the feature detection
        polyfill: false,
        // Callback function
        onInit: function() {
            valueOutput(this.$element[0]);
        },
        // Callback function
        onSlide: function(position, value) {
            console.log('onSlide');
            console.log('position: ' + position, 'value: ' + value);
        },
        // Callback function
        onSlideEnd: function(position, value) {
            console.log('onSlideEnd');
            console.log('position: ' + position, 'value: ' + value);
        }
    });
});
function trimMedia(){
    console.log($j('#media_element'));
}*/
$j = jQuery.noConflict();


$j("#slider-range").slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [00, 100],
    slide: function (e, ui) {
        function __floor(value){
            return Math.floor(value);
        }
        function changeFormat($value){
            $_value = Math.floor($value/10);
            return $_value == '0' ||  $_value== 0 ? '0'+ $value : $value;
        };
        let total       = Number($j(this).data('max'));
        let conv1       = __floor(total*ui.values[0]/100);
        let conv2       = __floor(total*ui.values[1]/100);
        let time_max    = Number($j(this).data('max'));
        var hours1      = __floor(conv1 / 60);
        var minutes1    = changeFormat(conv1 - (hours1 * 60));
        let time1       = changeFormat(hours1) + ':' + minutes1;
        var hours2      = __floor(conv2 / 60);
        var minutes2    = changeFormat(conv2 - (hours2 * 60));
        let time2       = changeFormat(hours2) + ':' + minutes2;
        $j('#time_from').val(time1)
        $j('.slider-time').html(time1);
        $j('#time_to').val(time2)
        $j('.slider-time2').html(time2);
    }
});