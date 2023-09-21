 var random_images_array = ['random1.png', 'random2.png', 'random3.png', 'random4.png'];

 function getRandomImage(imgAr, path) {
     path = path || './assets/img/pfp/';
     var num = Math.floor(Math.random() * imgAr.length);
     var img = imgAr[num];
     var imgStr = '<img src="' + path + img +
         '">';
     document.write(imgStr);
     document.close();
 }