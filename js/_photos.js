/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function Photo(url) {
    this.type = "photo";
    this.url = url;
}
function Video(url, encoding) {
    this.type = "video";
    this.url = url;
    this.encoding = encoding;
}
$(document).ready(function() {
    var data = new Array();
    data.push(new Photo("2.JPG"));
    data.push(new Photo("3.JPG"));
    data.push(new Photo("4.JPG"));
	data.push(new Photo("5.JPG"));
    data.push(new Photo("6.JPG"));
    data.push(new Photo("7.JPG"));
    data.push(new Photo("8.JPG"));
    data.push(new Photo("9.JPG"));
    data.push(new Photo("10.JPG"));
    data.push(new Photo("11.JPG"));
    data.push(new Photo("12.JPG"));
    data.push(new Photo("13.JPG"));
    data.push(new Photo("14.JPG"));
    data.push(new Photo("15.JPG"));
    data.push(new Photo("16.JPG"));
    data.push(new Photo("17.JPG"));
    data.push(new Photo("18.JPG"));
    data.push(new Photo("19.jpg"));
    data.forEach(function(media) {
        var newDiv;
        if (media.type === "photo") {
            newDiv = '<div class="mediaZone" style="background-image: url(\'img/' + media.url + '\');"></div>';
        } else {
            newDiv = '<div class="mediaZone"><video controls><source src="video/' + media.url + '" type="' + media.encoding + '">Jouw browser ondersteunt deze video niet :(</video></div>';
        }
        $('body').append(newDiv);
    });
});
