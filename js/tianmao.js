$(function(){
	// banner  轮播
	var bg=$('.baner-box')[0]
	var range=$('.baner-box')[0]
var lunbox=$('.banner-lunbo')[0]
var list=$('a',lunbox)
var linkBox=$('.link')[0]
var link=$('li',linkBox)
var index=0;
var bgcolor=['#e8e8e8','#e8e8e8','#e70014','#e8e8e8','#bfeff1','#fff567']
list[0].style.display="block";
  link[0].style.background="#fff"
  function move(){
	index++
	if(index==link.length){
		index=0;
	}
  for (var i = 0; i < link.length; i++) {
  	link[i].style.background=""
    list[i].style.display="none"
    list[i].style.opacity="0.3"
    bg.style.background=""
  };list[index].style.display="block";
  animate(list[index],{opacity:1},500)
  link[index].style.background="#fff"
  bg.style.background=bgcolor[index]
}
var t=setInterval(move,2000)
range.onmouseover=function(){
   clearInterval(t)
}
range.onmouseout=function(){
  t=setInterval(move,1000)
}
for (var i = 0; i < link.length; i++) {
	link[i].index=i;
	link[i].onmouseover=function(){
		index++
	if(index==link.length){
		index=0;
	}
  for (var i = 0; i < link.length; i++) {
  	link[i].style.background=""
    list[i].style.display="none"
     list[i].style.opacity="0.3"
      bg.style.background=""
  };list[this.index].style.display="block";
  link[this.index].style.background="#fff"
  animate(list[this.index],{opacity:1},1000)
   bg.style.background=bgcolor[this.index]
	}
};

// banner左边选项卡开始
var shang=$('.shang-box1-1')[0];
var linksh=$('a',shang)
var lists=$('.shang222')
var coolr=['#ede4e4','#3f1818']
var cool=['red','#fff']
linksh[1].style.color=cool[1];
 lists[1].style.zIndex="40"
 linksh[1].style.background=coolr[1]
var indd=0;
for (var i = 0; i < linksh.length; i++) {
   linksh[i].indd=i;
	linksh[i].onmouseover=function(){
     for (var i = 0; i < linksh.length; i++) {
     	lists[i].style.zIndex="0"
     	 linksh[i].style.background=""
     	 linksh[i].style.color=""
     };
     lists[this.indd].style.zIndex="40"
     linksh[this.indd].style.background=coolr[this.indd]
     linksh[this.indd].style.color=cool[this.indd]
  }
};

// 小选项卡开始
var box=$('.baner-shang')[0];

var linkx=$('.r',box);
var linkxbox=$('.banner-shang1',box)
function mv(r){
// hover(linkx[r],function(){
// 	linkx[r].onmouseover=function(){
// 		 linkxbox[r].style.display="block"
// 	}
// },function(){
// 	linkx[r].onmouseout=function(){
// 		 linkxbox[r].style.display="none"
// 	}
// })
	linkx[r].onmouseover=function(){
		 linkxbox[r].style.display="block"
	}
	linkx[r].onmouseout=function(){
		 linkxbox[r].style.display="none"
	}
}
for (var i = 0; i < linkx.length; i++) {
	mv(i)
};
// 图片放大开始
function fangda(r){
	var imgBox=$('.middle-zhong-img1')[r]
	var img=$('img',imgBox)[0]
	imgBox.onmouseover=function(){
		animate(img,{width:150,height:150},200)
	}
	imgBox.onmouseout=function(){
		animate(img,{width:125,height:125},200)
	}
  }
  for (var i = 0; i <10; i++) {
  	fangda(i)
  };
// 图片放大结束
// 图片移动
	function remove(r){
	var imgbox=$('.middlexia1-middle2-1')[r]
	var imgA=$('a',imgbox)
	imgbox.onmouseover=function(){
	    animate($('img',imgA[2])[0],{marginLeft:79},200)
	}
	imgbox.onmouseout=function(){
	  animate($('img',imgA[2])[0],{marginLeft:94},200)
	}
  }
  for (var i = 0; i < 36; i++) {
  	remove(i)
  };

  // 固定滑动
	  function hua(r){
	  var linksbox=$('.guding')[0]
	  var links=$('.aa',linksbox)
	  var ch=document.documentElement.clientHeight+"px";
	  // console.log(ch)
	  // linksbox.style.height=ch;
	  // linksbox.style.background="#000"
	  var hua=$('.h')
	   links[r].onmouseover=function(){
	   	  hua[r].style.display="block"
	   	 animate(hua[r],{right:19,opacity:1},500)
	   	 if(r==7){animate(hua[r],{right:34,opacity:1},500)}
	   }
	   links[r].onmouseout=function(){
	   	  hua[r].style.display="none"
	   	 animate(hua[r],{right:100,opacity:0},500)
	   }
	}
	for (var i = 0; i <8; i++) {
		hua(i)
	};

	// scroll搜索框开始
	var search=$('.scroll-search')[0]

	var leftFix=$('.you-guding')[0]

	var fanTop=$('.fan-top')[0];
	// 楼层控制找元素
	var louceng=$('.louceng')
	var loulink=$('.loulink',leftFix)
	var color=['#f7a945','#f7a945','#19c8a9','#f15453','#64c333','#0aa6e8','#dd2727','#dd2727']
	var arr=[]
	for (var i = 0; i < louceng.length; i++) {
		arr.push(louceng[i].offsetTop)
	};


	var flag=true;
	var flagg=true;
	window.onscroll=function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop
		if(stop>800){
			if(flag){
				flag=false;
			animate(search,{top:0},200)				
			}
		}else{
			if(!flag){
				flag=true;
			animate(search,{top:-50},200)
			}
		}

   // 右边固定导航开始
   if(stop>700){
			if(flagg){
				flagg=false;
			animate(leftFix,{opacity:1},200)				
			}
		}else{
			if(!flagg){
				flagg=true;
			animate(leftFix,{opacity:0},200)
			}
		}

		// 楼层控制开始
		for (var k = 0; k < arr.length; k++) {
			 if(stop+100>arr[k]){
			 	for (var j = 0; j < loulink.length; j++) {
			 		loulink[j].style.backgroundColor=""
			 	};
                  loulink[k].style.backgroundColor=color[k]
			 }
		};

		var ind=0;
		for (var b = 0; b < loulink.length; b++) {
             loulink[b].ind=b
			loulink[b].onclick=function(){
				// if(b==8){
				// 	  animate(document.body,{scrollTop:0},500)
    //          animate(document.documentElement,{scrollTop:0},500)
				// }
             animate(document.body,{scrollTop:louceng[this.ind].offsetTop},500)
             animate(document.documentElement,{scrollTop:louceng[this.ind].offsetTop},500)
			}
		};
		loulink[8].onclick=function(){
			animate(document.body,{scrollTop:0},500)
             animate(document.documentElement,{scrollTop:0},500)
				}
  // 右边返回顶部开始

   fanTop.onclick=function(){
      animate(document.documentElement,{scrollTop:0},500)
       animate(document.body,{scrollTop:0},500)
   }



	}
// middle左移动
 function mm(t){
	var moving=$('.middlexia1-middle3-1')[t]
	var imga=$('a',moving)[2]
	moving.onmouseover=function(){
       animate(imga,{right:18},200)
	}
	moving.onmouseout=function(){
       animate(imga,{right:5},200)
	}
}
for (var i = 0; i < 18; i++) {
	mm(i)
};

// 中间上下滚动
function mmm(t){
var shangxia=$('.shangxia-scroll')[t]
var shangss=$('div',shangxia)[0]
var dang=0;
var xia=0;
function move(){
animate(shangss,{top:-30},500,function(){
	shangss.appendChild(getFirst(shangss));
    shangss.style.top="0"
});
}
setInterval(move,2000)}
for (var i = 0; i < 6; i++) {
	mmm(i)
};
// shangss[xia].style.top="-30px"
// setInterval(function(){
// 	xia++;
// 	if(xia>shangss.length-1){
// 		xia=0
// 	}
	
// 	animate(shangss[xia],{opacity:0},0,function(){shangss[xia].style.top="-30px"})
	
// 	// shangss[xia].style.color="#000"
// 	animate(shangss[dang],{top:-30},1000)
// 	animate(shangss[xia],{top:0},1000)
// 	dang=xia;
// },2000)
//  var area =$('.shangxia-scroll')[0]
//  var con1 =$('.inner1',area)[0]
//  var con2 =$('.inner2',area)[0]
//  console.log(con1)
//  var speed = 50;
// area.scrollTop = 0;
//  con2.innerHTML = con1.innerHTML;
//  function scrollUp(){
// 	 if(area.scrollTop >= con1.scrollHeight) {
// 		 area.scrollTop = 0;
// 		 }else{
// 		   area.scrollTop ++; 
// 		 } 
// }
// var myScroll = setInterval("scrollUp()",speed);
// area.onmouseover = function(){
// 	 clearInterval(myScroll);
// 	}
// area.onmouseout = function(){
// 	 myScroll = setInterval("scrollUp()",speed);
// 	}
	// scroll搜索框结束

	// 顶部划过显示效果
	function xianshi(r){
var tlink=$('.tlink')[r]
var listt=$('.listt')[r]
tlink.onmouseover=function(){
     listt.style.display="block"
     tlink.style.background="#fff"
}
tlink.onmouseout=function(){
     listt.style.display="none"
     tlink.style.background=""
}
}
for (var i = 0; i < 5; i++) {
	xianshi(i)
};




})