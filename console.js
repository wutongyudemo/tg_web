//自动翻页（往前）代码
jQuery(document).ready(function(){
content=document.getElementsByClassName("nano-content")[1]
clientheight=content.clientHeight
offsetheight=content.scrollHeight
h=offsetheight-clientheight
var position=0
function startscroll(){
if(content.scrollTop<h){position++;content.scrollTop=position}
if(content.scrollTop>=h){content.scrollTop=0;position=0}
}
setInterval(startscroll,1000)
//输出检查，非必须
console.log(clientheight)
console.log(offsetheight)
})

function write_content(){
content_length=document.getElementsByClassName("im_message_text").length;
groupname = document.getElementsByClassName("tg_head_peer_title")[0].innerHTML;
for(var i = 0;i<=content_length;i++){
str = "发言者:"+document.getElementsByClassName("im_message_author")[i].innerHTML+"|||内容:"+document.getElementsByClassName("im_message_text")[i].innerHTML+"|||发送时间:"+document.getElementsByClassName("im_message_date_text")[i].getAttribute("data-content");

var xhr = new XMLHttpRequest();
xhr.open("post", "http://localhost/1.php");
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("str="+"\r\n"+str+"\r\n"+"&groupname="+groupname);
}
}
setInterval("write_content()",1000)

function count_im_dialog_peer(){
    var im_dialog_peer = document.getElementsByClassName('im_dialog_peer')
    alert("im_dialog_peer:" + a.length)
}
count_im_dialog_peer()

var groupname = "test";
function click_im_list(){
$(".im_dialog_wrap").click();
}
setInterval("click_im_list()",10000)
var aLi = document.querySelectorAll('.im_dialog_wrap');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].addEventListener('click', function(){
           console.log(this.innerHTML);
 /*
				var xhr = new XMLHttpRequest();
				xhr.open("post", "http://localhost/1.php");
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send("str="+"\r\n"+this.innerHTML+"\r\n"+"&groupname="+groupname);
				*/
        });
}
