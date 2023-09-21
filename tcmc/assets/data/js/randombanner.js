 var random_images_array = ['banner_a.gif', 'banner_b.png', 'banner_c.png', 'banner_d.gif', 'banner_e.gif', 'banner_f.png', 'banner_g.gif', 'banner_h.png'];

 function getRandomBanner(imgAr, path) {
     path = path || './assets/img/banner/';
     var num = Math.floor(Math.random() * imgAr.length);
     var img = imgAr[num];
     var imgStr = '<img src="' + path + img +
         '">';
     document.write(imgStr);
     document.close();
 }