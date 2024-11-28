/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//countdown seconds
var birth = new Date(1974, 06, 10, 2, 0, 0, 0);
function countSecondsSinceBirth() {
    var now = new Date();
    var diff = Math.ceil((now - birth) / 1000);
    $('#secondsSinceBirth').text(diff);
    setTimeout(countSecondsSinceBirth, 1000);
}

$(document).ready(function()
{
    setTimeout(countSecondsSinceBirth, 1000);
});