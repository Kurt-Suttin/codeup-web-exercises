$(() => {

    function underlineThis(e) {
        // changes all h2s
        // $('h2').css('text-decoration', 'underline');
        // changes only the h2 that was clicked
        $(e.target).css('text-decoration', 'underline');
        $('p').css('color', 'red');
    }

    function noUnderlineThis(e) {
        $(e.target).css('text-decoration', 'none');
    }

    function changeToPointer(e) {
        $(e.target).css('cursor', 'pointer');
    }

    function changeFromPointer(e) {
        $(e.target).css('cursor', 'default');
    }

    function hideUnorderedList() {
        $('ul').css('display', 'none');
    }

    $('h2')
        .on('click', underlineThis)
        .on('dblclick', noUnderlineThis)
        .on('mouseenter', changeToPointer)
        .on('mouseleave', changeFromPointer);

});