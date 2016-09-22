function getclass (selector,father) {
	father=father||document
	if(father.getElementsByClassName){
		return father.getElementsByClassName(selector)
	}else{
		var all=father.getElementsByTagName("*")
		var newarr=[];
		for (var i = 0; i < all.length; i++) {
			if(str(all[i].className,selector)){
				newarr.push(all[i])
		    };
        }
	}return newarr
}
function str(da,xiao){
	var mm=da.split(" ")
	for(var i in mm){
		if(mm[i]==xiao){
			return true
		}
	}return false
}


function getstyle (ele,attr) {
	if(ele.currentStyle){
	return ele.currentStyle[attr]
}else{
	return getComputedStyle(ele,null)[attr]
}
}




// function $(selector,father) {
// 	father=father||document
// 	if(typeof selector=="string"){
// 		selector=selector.replace(/^\s*|\s*$/g,"")
	
// 	if(selector.charAt(0)=="."){
// 		return getclass(selector.slice(1),father)
// 	}else if(selector.charAt(0)=="#"){
// 		return father.getElementById(selector.slice(1))
// 	}else if(/^[a-z1-6]{1,10}/.test(selector)){
// 		return father.getElementsByTagName(selector)
// 	}else if(typeof selector=="function"){
// 		window.onload=function(){
// 			selector()
// 		}
// 	}
//  }
// }
function $(selector,father){
	father=father||document
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"")
		if(selector.charAt(0)=="."){
			return getclass(selector.slice(1),father)
		}else if(selector.charAt(0)=="#"){
			return father.getElementById(selector.slice(1))
		}else if(/^[a-z1-6]{1,10}/.test(selector)){
			return father.getElementsByTagName(selector)
		}else if(typeof selector=="function"){
			window.onload=function(){
				selector
			}
		}
	}
}