<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تحديث على الوصفة</title>
  <!-- jQuery JS 3.1.0 -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <link rel="stylesheet" href="../css/add_recipe.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
<header style="grid-area: header;">
  <div class="logo">
    <span>أكلة</span>
    <span><img src="../img/icon.svg"></span>
    <span>Okla</span>
  </div>
  <h1>صفحة التعديل على الوصفة</h1>
  <button class="update">تحديث</button>
</header>
<section class="main-container" style="grid-area: section;">
  <section class="title">
    <div class="label">عنوان الوصفة</div>
    <div class="input-container">
      <input type="text" id="title" placeholder="أكتبي هنا عنوانا للوصفة">
    </div>
  </section>
  <section class="description">
    <div class="label">وصف الوصفة</div>
    <div class="input-container wide">
      <textarea id="description" placeholder="أكتبي هنا وصفا مبصطا للوصفة"></textarea>
    </div>
  </section>
  <section class="ingredients" id="ingredients">
    <div class="label">المقادير</div>
    <div class="steps steps-container">
      <div class="item">
        <div class="icon"><span class="material-icons">create</span></div>
        <div class="input-container"><input type="text" placeholder="أكتبي هنا المكونات واحدة تلوة الاخرى">
        </div>
        <div class="icon" onclick="$(this).parent().remove();"><span class="material-icons">delete</span>
        </div>
      </div>
    </div>
    <div class="add-btn">
                <span class="material-icons">
                    add
                </span>
    </div>
  </section>
  <section class="steps" id="steps">
    <div class="label">طريقة التحضير</div>
    <div class="steps steps-container">
      <div class="item">
        <div class="icon"><span class="material-icons">create</span></div>
        <div class="input-container">
          <input type="text" placeholder="أكتبي هنا مراحل إعداد الوصفة، مرحلة تلوة الاخرى">
        </div>
        <div class="icon" onclick="$(this).parent().remove();"><span class="material-icons">delete</span>
        </div>
      </div>
    </div>
    <div class="add-btn ripple">
                <span class="material-icons">
                    add
                </span>
    </div>
  </section>
</section>
<aside style="grid-area: aside;">
  <section class="media">
    <div class="label">صور و ڢيديو</div>
    <div class="media-source">
      <div class="input-container">
        <input type="text" id="image-link" placeholder="أنسخي هنا رابط الصورة">
      </div>
      <div class="preview drop-area file_drag_area" id="img_preview">
        <div class="icon">
                        <span class="material-icons">
                            wallpaper
                        </span>
        </div>
      </div>
    </div>
    <div class="resizedBox"></div>
    <div class="media-source">
      <div class="input-container">
        <input type="text" id="video-link" placeholder="أنسخي هنا رابط الفيديو">
      </div>
      <div class="preview" id="video_preview">
        <div class="icon">
                        <span class="material-icons">
                            movie
                        </span>
        </div>
      </div>
    </div>
  </section>
  <section class="categories">
    <div class="label">الفئة</div>
    <select id="category"></select>
    <div class="add-btn ripple">
                <span class="material-icons">
                    add
                </span>
    </div>
  </section>
  <section class="tags">
    <div class="label">وسم</div>
    <div class="input-container tags">
      <ul class="tags-list" id="tags">
      </ul>
      <input class="tag-inp" type="text" placeholder="إضافة وسم">
    </div>
  </section>
</aside>
<div class="final" style="grid-area: final;">
  <button class="submit ripple update" id="update">تحديث</button>
</div>
<footer style="grid-area: footer;">
  <div class="copyrights" style="text-align: center; margin-bottom: 20px;">
    <span>جميع حقوق النشر محفوظة لموقع أكلة</span>
    <span>&copy;</span>
    <span>2020</span>
  </div>
</footer>
<script src="../js/add_recipe.js"></script>
<script src="../js/edit_recipe.js"></script>
<script src="../js/drag&drop.js"></script>
</body>

</html>
