 var random_images_array = ['0084.png', '0048.png', '0015.png'];

 function getRandomImage(imgAr, path) {
     path = path || './assets/img/emotes/';
     var num = Math.floor(Math.random() * imgAr.length);
     var img = imgAr[num];
     var imgStr = '<img src="' + path + img +
         '" style="max-width: 30%; margin: -25 0 25 0;" title="The Cerulean Motley Crew">';
     document.write(imgStr);
     document.close();
 }