/*   create   */
create table recipes(
                        recipe_id int auto_increment primary key ,
                        title varchar(50),
                        description varchar(100),
                        ingredients varchar(500),
                        steps varchar(500),
                        image_link varchar(200),
                        video_link varchar(100),
                        category_id int,
                        tags varchar(100),
                        is_public bool default false,
                        views int default 0,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table categories(
                           category_id int auto_increment primary key,
                           category_name varchar(45)
);

/*   display-tables   */
show tables ;
describe recipes;

/*   display-content   */
select * from recipes;
select * from categories;

/*   remove   */
drop table recipes;
drop table categories;

/*   insert   */
insert into recipes(title, description, ingredients, steps, image_link, video_link, category_id, tags)
    VALUES ('عنوان للوصفة', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/0e/0e2e0e1266a579551615c816b70d6379_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 3, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('عنوان للوصفة', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/c3/c3902ecaeffafa76675dc89cbbb5c6e2_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('مسقعة الخضار', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/27/2772680dc157f8a7eb13c362ed864d0f_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('صوص الشوكولاتة', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/e0/e09f11308737ee61262e81f8b1c2f30d_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('سموذي الكيوي', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/c2/c22d6098e7f22dd386d69aa9b71a20e2_w550_h550.JPG', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('كرات البطاطس', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/1f/1f7bfaab199767d18915b0e612853a1d_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('ستيك دجاج بالتتبيلة', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/2a/2a8ecb61fd8e6e5d2299d94cba75cf82_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('ستيك دجاج بالخضار', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/7f/7fa3bde06325e9114d05d8d65b72550e_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('كوردن بلو لحم', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/ad/ad4e560ca8f5faa4a607042c144d6f7b_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('ميني بان كيك', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/65/65a68cae7610c1bbce612d1056630b33_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('ميني تشيز', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/73/733578615c5969bd1692594741d71036_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('لازانيا باللحم', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/8e/8ecb1c101cb01a2d28594ca6c9935ad3_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار'),
    ('ازانيا بالسبانخ', 'وصف مبصط عن الوصفة', 'المكون رقم 1|المكون رقم 2|المكون رقم 3', 'مرحلة رقم 1|مرحلة رقم 2|مرحلة رقم 3|مرحلة رقم 4|مرحلة رقم 5', 'https://kitchen.sayidaty.net/uploads/small/52/528baedc7feb1ff8d89f17de393f2e1f_w550_h550.jpg', 'https://www.youtube.com/watch?v=68k3KuhWE6k', 2, 'سلطة |الأكلات الصحية|سلطة الكينوا بالخضار');
insert into categories(category_name)
values ('الحلويات'), ('مقبلات'), ('مملحات'), ('أطباق رئيسية'), ('وجبات خفيفة');
