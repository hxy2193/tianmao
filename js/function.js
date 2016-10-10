// 用法：
// 1.获取类名  $('.box')  获取的为集合
// 2.获取标签名 $('div')  获取的为集合
// 3.获取id     $('#one')  获取的为对象
// 4.创建标签元素  $('<div>')  

//页面加载 $(function(){     }) 


// 页面加载 获取id  类名  标签名 注意使用时id名前加入#    类名前加. 
function $(select,range){
    var range=range||document;
	if(typeof select=="string"){
      if(select.charAt(0)=="#"){
      	return document.getElementById(select.substr(1))
      }if(select.charAt(0)=="."){
      	return getclass(select.substr(1),range)
      }if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(select)){
      	return range.getElementsByTagName(select,range)
      }if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(select)){
        return range.createElement(select.slice(1,-1))
      }
	}
	if(typeof select=="function"){
		window.onload=select;
	}
}

// 获取类名兼容 记得
 function getclass(ClassName,range){
            // 判断浏览器是否支持类名  用了隐式转化
            if(document.getElementsByClassName){
                return range.getElementsByClassName(ClassName);
            }else{
                var all=range.getElementsByTagName('*');
                // 获取html的所有标签
                var arr=[];
                for (var i = 0; i < all.length; i++) {
                    if(checkclass(all[i].className,ClassName)){
                        arr.push(all[i]);
                        // all[i]为对象集合
                    }
                };
                return arr;
            }

        }

   function checkclass(sclass,aclass){
     var aa=sclass.split(" ");
    for (var i = 0; i < aa.length; i++) { 
      if(aa[i]==aclass){
             return true;
         }else{
         return false;
          }
         };
     }

// 获取内容 和替换内容

      function text(obj,val){
       	// 判断的时候考虑 对象的内容为空时
           if(val==undefined){
               if(obj.textContent!=undefined){
               	return obj.textContent;
               }else{
               	return obj.innerText;
               }
           }else{
              if(obj.textContent!=undefined){
               	 obj.textContent=val;
               }else{
               	 obj.innerText=val;
               }
           }
       }

// 获取属性 长度 高度等*********
              function getStyle(obj,arrt){                 //arrt代表对象的属性
    if(obj.currentStyle){
         return obj.currentStyle[arrt];
    }else{
       return getComputedStyle(obj,null)[arrt];
    }
}

// 获取节点兼容
   function trim(str){
         return str.replace(/^\s+|\s+$/g,"")
     }

// 获取子元素的兼容性
    function getChilds(b){
          var childs=b.childNodes;
          var arr=[];
          for (var i = 0; i < childs.length; i++) {
             if(!(childs[i].nodeType==8||childs[i].nodeType==3&&trim(childs[i].nodeValue)=="")){
              arr.push(childs[i])
             }
          };return arr;
        
    }
      
    function getFirst(obj){
      var first=getChilds(obj)
      return first[0]
    }
 // 获取下一个兄弟节点的兼容
function getNext(bj){
      var next=bj.nextSibling;
      if(!next){
        return false;
      }
      while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
        next=next.nextSibling;
        if(!next){
          return false;
        }
      }return next;
     }
     // 获取最后一个
    function getLast(obj){
      var last=getChilds(obj);
      return last[last.length-1]
    }
    function insertAfter(obj1,obj2){
  var parent=obj2.parentNode;
  var obj3=getNext(obj2);
  if(!obj3){
    return parent.appendChild(obj1)
  }
  return parent.insertBefore(obj1,obj3);
}
/*
  hover(obj,overfun,outfun)  鼠标移入移除事件 
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
;(function(win){
  function hover (obj,overfun,outfun) {
    if(overfun){
        obj.onmouseover=function  (e) {
        checkHover(e,obj)&&overfun.call(obj);
        }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        checkHover(e,obj)&&outfun.call(obj);
        }
    }
  }
  //判断某个元素是否包含有另外一个元素
  function contains (parent,child) {//返回 true  parent 包含 child    返回false 不是包含关系
    if(parent.contains){//如果对象支持contains
      // 如果  父对象 包含 子对象   并且  父对象不等于 子对象 返回 true 
      return parent.contains(child) && parent!=child;
    }else{
      //父对象 包含 子对象  16   父对象 在子对象之前 4  = 20
      return (parent.compareDocumentPosition(child)===20);
    }
  }
  //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
    //target 对象 
    if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
    }else{
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
  //获得事件对象
  function getEvent (e) {
    return e||window.event;
  }
  win.hover=hover;  
})(window);