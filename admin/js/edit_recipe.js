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
  var recipe_id = $.urlParam('id');

  $.ajax({
    type: "POST",
    url: "../inc/actions/get_data.php",
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

        $('input#title').val(title);
        $('textarea#description').val(description);

        //convert ingredients from string to array of ingredients
        let ingredientsArr = ingredients.split('|');
        //empty the sections of ingredients input ( we already have one by default)
        $('section#ingredients .steps-container').html('');
        //for each ingredient creat another input with value of the ingredient
        $.each(ingredientsArr, function (index, value) {
          $('section#ingredients .steps-container').append(
            '<div class="item"><div class="icon"><span class="material-icons">create</span></div><div class="input-container"><input type="text" value="'+value+'"></div><div class="icon" onClick="$(this).parent().remove();"><span class="material-icons">delete</span></div></div>'
          )
        });

        let stepsArr = steps.split('|');
        $('section#steps .steps-container').html('');
        $.each(stepsArr, function (index, value) {
          $('section#steps .steps-container').append(
            '<div class="item"><div class="icon"><span class="material-icons">create</span></div><div class="input-container"><input type="text" value="'+value+'"></div><div class="icon" onClick="$(this).parent().remove();"><span class="material-icons">delete</span></div></div>'
          )
        });

        $('input#image-link').val(image_link);
        $('#img_preview').html('<img src="' + image_link + '"/>');
        $('input#video-link').val(video_link);
        var videoId = $.urlParamFromLink('v', video_link);
        $('#video_preview').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0"></iframe>');

        $('select#category').val(category_id);

        let tagsArr = tags.split('|');
        $('ul#tags').html('');
        $.each(tagsArr, function (index, value) {
          $('ul#tags').append(
            '<li class="tag-elem"><span class="tag">' + value + '</span><span class="close tagRemove" onClick="$(this).parent().remove(); $(\'#tag-inp\').focus();">x</span></li>'
          )
        })
      })
    }
  });
  $.urlParamFromLink = function (name, urlV) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(urlV);
    return results[1] || 0;
  }

  $('button.update').on('click', function(){
    title = $('#title').val();
    description = $('#description').val();
    ingredients = getDataAsString('ingredients');
    steps = getDataAsString('steps');
    imgLink = $('#image-link').val();
    videoLink = $('#video-link').val();
    category_id = parseInt($('#category').children('option:selected').val());
    tags = getTagsAsString('tags');

    console.log(title);
    console.log(description);
    console.log(ingredients);
    console.log(steps);
    console.log(imgLink);
    console.log(videoLink);
    console.log(category_id);
    console.log(tags);

    $.ajax({
      url: '../inc/actions/update_recipe.php',
      data: {
        _title: title,
        _description: description,
        _ingredients: ingredients,
        _steps: steps,
        _imgLink: imgLink,
        _videoLink: videoLink,
        _category_id: category_id,
        _tags: tags,
        _recipe_id: recipe_id
      },
      type: 'POST',
      success: function(response) {
        alert(response);
      },
      statusCode: {
        404: function() {
          alert( "page not found" );
        }
      }
    });
  })

});
