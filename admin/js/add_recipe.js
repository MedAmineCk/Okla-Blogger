$('.tag-inp').on('keypress', this, function (e) {
  var key = e.which;
  if (key == 13) // the enter key code
  {
    var tag = $(this).val();
    $(this).parent().find('ul.tags-list').append(
      '<li class="tag-elem"><span class="tag">' + tag + '</span><span class="close tagRemove" onClick="$(this).parent().remove(); $(\'#tag-inp\').focus();">x</span></li>'
    );
    $(this).val(null).focus();
  }
});

$('.add-btn').click(function () {
  $(this).parent().find('.steps-container').append(
    '<div class="item"><div class="icon"><span class="material-icons">create</span></div><div class="input-container"><input type="text"></div><div class="icon" onClick="$(this).parent().remove();"><span class="material-icons">delete</span></div></div>'
  );
})

/**************media insert**************/
//image
$('input#image-link').change(function (e) {
  e.preventDefault();
  var imgSrc = $(this).val();
  $(this).parent().siblings('.preview').html('<img src="' + imgSrc + '"/>')
});

//video
$('input#video-link').change(function (e) {
  e.preventDefault();
  var videoUrl = $(this).val();
  var videoId = $.urlParam('v', videoUrl);
  console.log(videoId);
  $(this).parent().siblings('.preview').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0"></iframe>')
});

$.urlParam = function (name, urlV) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(urlV);
  return results[1] || 0;
}

/**************** get data ***************/

let title, description, ingredients, steps, imgLink, videoLink, category_id, tags;

$('button#post').on('click', function(){
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
    url: '../inc/actions/insertIntoRecipe.php',
    data: {
      _title: title,
      _description: description,
      _ingredients: ingredients,
      _steps: steps,
      _imgLink: imgLink,
      _videoLink: videoLink,
      _category_id: category_id,
      _tags: tags
    },
    type: 'POST',
    success: function(response) {
      let timeOut = 2000;
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: response,
        showConfirmButton: false,
        timer: timeOut
      });
      window.setTimeout(function(){
        window.location.href = "../index.php"
      }, timeOut);
    },
    statusCode: {
      404: function() {
        alert( "page not found" );
      }
    }
  });
})

function getDataAsString(id) {
  let splashArray = [];
  let results = "";
  $('#'+id+' input').each(function () {
    splashArray.push($(this).val());
  });
  results = splashArray.join('|');
  return results;
}

function getTagsAsString(id) {
  let splashArray = [];
  let results = "";
  $('#'+id+' .tag').each(function () {
    splashArray.push($(this).text());
  });
  results = splashArray.join('|');
  return results;
}



