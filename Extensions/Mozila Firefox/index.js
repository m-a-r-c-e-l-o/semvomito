function fecaloide(){
    var i = document.getElementsByTagName("div");
    for(var ii = 0; ii < i.length; ii++){
        if(i[ii].hasAttribute("data-testid") && i[ii].getAttribute("data-testid") == "ufi_comment_sticker"){
            //sem retina
            var dramin01 = i[ii].style.backgroundImage.indexOf("https://scontent.fcwb1-1.fna.fbcdn.net/v/t39.1997-6/s110x80/851575_126362090881921_1049355036_n.png?oh=2d3101d00ce269aaa3a7838d6d423a7d&oe=5999353B");
            //com retina
            var dramin02 = i[ii].style.backgroundImage.indexOf("https://scontent.fcwb2-1.fna.fbcdn.net/v/t39.1997-6/s110x80/851575_126362090881921_1049355036_n.png?oh=2d3101d00ce269aaa3a7838d6d423a7d&oe=5999353B");
            //4k sem retina
            var dramin03 = i[ii].style.backgroundImage.indexOf("https://scontent.fcwb1-1.fna.fbcdn.net/v/t39.1997-6/p160x160/851575_126362090881921_1049355036_n.png?oh=013c8bff58ce485618f16354c485f4c5&oe=5994B325");
            //4k com retina
            var dramin04 = i[ii].style.backgroundImage.indexOf("https://scontent.fcwb2-1.fna.fbcdn.net/v/t39.1997-6/p160x160/851575_126362090881921_1049355036_n.png?oh=013c8bff58ce485618f16354c485f4c5&oe=5994B325");
            var cura = document.createElement("img");
            cura.src = "https://www.facebook.com/images/emoji.php/v8/f6c/1/16/2764.png";
            if(dramin01 != -1 || dramin02 != -1 || dramin03 != -1 || dramin04 != -1){
                var childElement = i[ii];
                var parentElement = i[ii].parentNode;
                parentElement.removeChild(childElement);
                parentElement.appendChild(cura);
            }
        }
    }
    setTimeout(fecaloide, 1000);
}
fecaloide();