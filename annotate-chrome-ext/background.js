jQuery(function ($) {
        if ($('body').data('annotator')) {
        console.log('annotator is already loaded.')
    } else {
    $('body')
        .annotator('addPlugin', 'Store')
        .annotator('addPlugin', 'Tags')
        .annotator('addPlugin', 'Filter')
        .annotator();
    }
});
console.log("annotator is started");
//console.log($('body').data('annotator'));