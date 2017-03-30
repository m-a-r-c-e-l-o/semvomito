function fecaloide(){
    var i = document.getElementsByTagName('div');
    for(var ii = 0; ii < i.length; ii++){
        if(i[ii].hasAttribute('data-testid') && i[ii].getAttribute('data-testid') == 'ufi_comment_sticker'){
            var dramin = i[ii].style.backgroundImage.indexOf("https://scontent.fcwb2-1.fna.fbcdn.net/v/t39.1997-6/s110x80/851575_126362090881921_1049355036_n.png?oh=2d3101d00ce269aaa3a7838d6d423a7d&oe=5999353B");
            var cura = document.createElement('img');
            cura.src = 'https://www.facebook.com/images/emoji.php/v8/f6c/1/16/2764.png';
            if(dramin != -1){
                var childElement = i[ii];
                var parentNode = i[ii].parentNode;
                parentNode.appendChild(cura);
                parentNode.removeChild(childElement);
            }
        }
    }
    setTimeout(fecaloide, 1000);
}
fecaloide();