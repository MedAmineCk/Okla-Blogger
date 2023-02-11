$(document).ready(function() {

  function load_js(){
    $.ajax({
      type: "GET",
      url: "../inc/actions/get_data.php",
      dataType: "json",
      complete: function (response) {
        console.log(response.responseText);
        if (response.responseText == 0){
          $('tbody#display-data').html('<tr><td colspan="8" style="text-align: center; color: #9E9E9E;">لا يوجد أي منشورات حاليا</td></tr>')
        }
        var json = JSON.parse(response.responseText);
        $.each(json, function(index, value){
          let image_link = value.image_link;
          let recipe_id = value.recipe_id;
          let title = value.title;
          let category_name = value.category_name;
          let created_at = value.created_at;
          let views = value.views;
          let data_status;
          if(value.is_public == 0){
            status = 'غير منشور';
            data_status = 'private';
          }else{
            status = 'منشور';
            data_status = 'public';
          }

          $('tbody#display-data').append(
            '<tr class="data-item" onclick="window.open(\'edit_recipe.php?id='+recipe_id+'\')">'+
            '<td>'+
            '<input type="checkbox" data-id="'+recipe_id+'" onclick="event.stopPropagation();">'+
            '</td>'+
            '<td>'+
            '<img src="'+image_link+'">'+
            '</td>'+
            '<td><a href="#">#'+recipe_id+'</a></td>'+
            '<td>'+title+'</td>'+
            '<td>'+category_name+'</td>'+
            '<td>'+created_at+'</td>'+
            '<td>'+views+'</td>'+
            '<td>'+
            '<div class="statu" data-statu="'+data_status+'">'+status+'</div>'+
            '</td>'+
            '</tr>'
          )
        })
      }
    });
  };

  load_js();

});
