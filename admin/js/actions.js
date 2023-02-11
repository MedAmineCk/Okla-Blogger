$('.actions .item').on('click', function () {
  var type = $(this).data('type');
  console.log(type);
  var idArr = [];
  $('.data-table tbody input:checked').each(function (index, value) {
    let id = $(this).data('id');
    idArr.push(id);
  });
  if(idArr.length > 1){
    alert('الرجاء اختيار واحد فقط')
  }else{
    actions(type, idArr[0]);
  }
})

function actions(type, id) {
  let typeAr =(type == 'public') ? ('نشر') : ((type == 'private') ? ('خاص') : ('حذف'));
  Swal.fire({
    title: 'هل أنت متأكدة؟',
    text: "من رغبتك في " + typeAr + " الوصفة رقم : " + id,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'نعم،' + typeAr + ''
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'تمة العمية بنجاح!',
        'الوصفة لقد  ' + typeAr + 'ت',
        'success'
      );
      $.post({
        url: '../inc/actions/delete-public-private.php',
        data: {
          _recipe_id: id,
          _type: type
        },
        success: function (data) {
          console.log(data);
          $('tbody#display-data').html('');
          $.getScript("../js/display_data.js");
        },
        error: function (err) {
          console.log(err)
        }
      });
    }
  })
}
