 var random_images_array = ['random1.png', 'random2.png', 'random3.png', 'random4.png'];

document.getElementsByClassName("randompfp");
getRandomImage(random_images_array, '../img/pfp/')
function getRandomImage(imgAr,path) {
     path = path || './assets/img/pfp/';
     var num = Math.floor(Math.random() * imgAr.length);
     var img = imgAr[num];
     var imgStr = '<img src="' + path + img +
         '">';
     document.write(imgStr);
     document.close();
}
 
MSPFA.slide.push(p => {
    document.getElementsByClassName("randompfp").innerHTML = 
    "<script>getRandomImage(random_images_array, '../img/pfp/')</script>"
});