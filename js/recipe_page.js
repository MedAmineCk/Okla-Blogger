$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "../inc/actions/get_categories.php",
    dataType: "json",
    complete: function (response) {
      var json = JSON.parse(response.responseText);
      $.each(json, function(index, value){
        let category_id = value.category_id;
        let category_name = value.category_name;

        $('.categories select#category').append(
          '<option value="'+category_id+'">'+category_name+'</option>'
        )
      })
    }
  });

  //get recipe_id from url then export data from recipes(mysql table) where recipe id matching

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  }
  recipe_id = $.urlParam('id');

  $.ajax({
    type: "POST",
    url: "./admin/inc/actions/get_data.php",
    data: {_recipe_id: recipe_id},
    dataType: "json",
    complete: function (response) {
      console.log(response.responseText);
      var json = JSON.parse(response.responseText);
      $.each(json, function(index, value){
        let recipe_id = value.recipe_id;
        let title = value.title;
        let description = value.description;
        let ingredients = value.ingredients;
        let steps = value.steps;
        let image_link = value.image_link;
        let video_link = value.video_link;
        let category_id = value.category_id;
        let tags = value.tags;
        let is_public = (value.is_public == 0)? 'غير منشور': 'منشور' ;

        $('section.cover').css({"background-image": "url('"+image_link+"')"});
        $('section.cover h1').html(title);
        $('section.cover p').html(description);

        //convert ingredients from string to array of ingredients
        let ingredientsArr = ingredients.split('|');
        //empty the sections of ingredients input ( we already have one by default)
        $('#ingredients_data-container').html('');
        //for each ingredient creat another input with value of the ingredient
        $.each(ingredientsArr, function (index, value) {
          $('#ingredients_data-container').append('<li>'+value+'</li>')
        });

        let stepsArr = steps.split('|');
        $('#setps_data-container').html('');
        $.each(stepsArr, function (index, value) {
          $('#setps_data-container').append('<li>'+value+'</li>')
        });

        let tagsArr = tags.split('|');
        $('#tags-container').html('');
        $.each(tagsArr, function (index, value) {
          $('#tags-container').append('<div class="item">'+value+'</div>')
        });

      })
    }
  });
  $.urlParamFromLink = function (name, urlV) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(urlV);
    return results[1] || 0;
  }

  //review counter after 5s
  setTimeout(function () {
    $.ajax({
      type: "POST",
      url: "./inc/view_counter.php",
      data:{_recipe_id: recipe_id},
      complete: function (response) {
        console.log(response)
      }
    });
  }, 5000)


});
