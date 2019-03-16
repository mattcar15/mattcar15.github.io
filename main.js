function copyToClipboard(idName) {
    /* Get the text field */
    var copyText = document.getElementById(idName);

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
}


$(function () {
    $(".copyToClip").hover(function(){
        $(this).tooltip('hide');
    }, function(){
        $(this).tooltip('hide');
        $(this).tooltip('disable');
    })

    $(".copyToClip").click(function(){
        $(this).tooltip('enable');
        $(this).tooltip('show');
    })
})