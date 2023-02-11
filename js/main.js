
$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "./inc/get_data(recipes).php",
    dataType: "json",
    complete: function (response) {
      console.log(response.responseText);
      if (response.responseText == 0){
        $('#recommendations').html('<p>لا يوجد أي منشورات حاليا</p>')
      }
      var json = JSON.parse(response.responseText);
      $.each(json, function(index, value){
        let image_link = value.image_link;
        let recipe_id = value.recipe_id;
        let title = value.title;
        let description = value.description.substr(0, 63)+'..';
        let created_at = value.created_at.split(' ');
        let views = value.views;

        $('#recommendations, #all_recipes').append(
          '<div class="recipe-post" onclick="window.open(\'recipe-page.html?id='+recipe_id+'\')">'+
          '<div class="thumbnail">'+
          '<img src="'+image_link+'" alt="'+title+'">'+
          '<div class="data-title">'+title+'</div>'+
          '</div>'+
          '<p class="description">'+description+'</p>'+
          '<div class="data-info">'+
          '<div class="data">'+
          '<div class="created_at"><span class="icon"><i class="material-icons">today</i></span><span class="viewers-data">'+created_at[0]+'</span></div>'+
          '<div class="viewers"><span class="icon"><i class="material-icons">visibility</i></span><span class="viewers-data">'+views+'</span></div>'+
          '</div></div></div></div>'
        )
      })
    }
  });

  $.ajax({
    type: "GET",
    url: "./admin/inc/actions/get_categories.php",
    dataType: "json",
    complete: function (response) {
      var json = JSON.parse(response.responseText);
      $.each(json, function(index, value){
        let category_id = value.category_id;
        let category_name = value.category_name;

        $('#categories').append(
          '<div class="item" data-id="'+category_id+'">'+category_name+'</div>'
        )
      })
    }
  });

});

