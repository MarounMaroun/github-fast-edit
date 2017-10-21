// files tree
var $table = $("table.files")
var $tbody = null

if ($table.children('tbody').length > 1) {
    $tbody = $($table.children('tbody')[1])
}
else {
    $tbody = $table.children('tbody')
}

$tbody.children('tr').each(function() {
    var data = jQuery(this)
    var svg = data.children('.icon').children('svg')
    var classText = svg.attr('class')
    // if file-text appears in the class attribute, then it's a file
    if (classText.includes('file-text')) {
        // add pencil
        var href = data.children('.content').children().children().attr('href')
        var link = '<a href=' + '"' + href.replace('blob', 'edit') + '"' + '>    &#9998;</a>'
        data.children('.content').children().after(link)
    }
})
