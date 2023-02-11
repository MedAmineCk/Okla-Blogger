$('.file_drag_area').on('dragover', function () {
    $(this).addClass('file_drag_over');
    return false;
});
$('.file_drag_area').on('dragleave', function () {
    $(this).removeClass('file_drag_over');
    return false;
});
$('.file_drag_area').on('drop', function (e) {
    e.preventDefault();
    $(this).removeClass('file_drag_over');
    var formData = new FormData();
    var files_list = e.originalEvent.dataTransfer.files;

    function readURL(files_list, i) {
        if (files_list && files_list[i]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var imgSrc = e.target.result;
                $('.preview').css({
                    "background-image": "url(" + imgSrc + ")"
                })
                $('.preview .icon').css({
                    "display": "none"
                })
            };
            reader.readAsDataURL(files_list[i]);
        }
    }
    for (var i = 0; i < files_list.length; i++) {
        formData.append('file[]', files_list[i]);
        readURL(files_list, i);
    }
});