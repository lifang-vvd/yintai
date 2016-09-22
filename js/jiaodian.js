var text=$(".text")[0]
text.onfocus=function(){
	if(text.value=="领200元无门槛优惠券"){
		text.value=""
	}
}
text.onblur=function(){
	if(text.value==""){
		text.value="领200元无门槛优惠券"
	}
}



// banner
var banneryou=$(".banneryou")[0]
addevent(banneryou,"mouseover",function(){
	animate(banneryou,{right:10},100)
})
addevent(banneryou,"mouseout",function(){
	animate(banneryou,{right:0},100)
})


//轮播
var lunbobox=$(".lunbobox")
var btn=$("li",$(".btn")[0])
var num=0;
var bannerbox=$(".bannerbox")[0]
var leftbtn=$(".leftbtn")[0]
var rightbtn=$(".rightbtn")[0]
function change () {
	num++;
	if(num>=btn.length){
		num=0;
	}
	for (var i = 0; i < btn.length; i++) {
		lunbobox[i].style.zIndex=0;
        btn[i].id=""
	};
	lunbobox[num].style.zIndex=5;
	btn[num].id="btn1";
}
var t=setInterval(change,2000)

bannerbox.onmouseover=function(){
	clearInterval(t)
leftbtn.style.display="block"
rightbtn.style.display="block"
} 
bannerbox.onmouseout=function(){
	t=setInterval(change,2000)
	leftbtn.style.display="none"
rightbtn.style.display="none"
}

leftbtn.onclick=function(){
	change()
}

rightbtn.onclick=function(){
    num--
    if(num<=-1){
		num=btn.length-1;
	}
	for (var i = 0; i < btn.length; i++) {
		lunbobox[i].style.zIndex=0;
        btn[i].id=""
	};
	lunbobox[num].style.zIndex=5;
	btn[num].id="btn1";

}
for (var i = 0; i < btn.length; i++) {
	btn[i].aa=i
	btn[i].onmouseover=function(){
		for (var j = 0; j < btn.length; j++) {
			lunbobox[j].style.zIndex=0
			btn[j].id=""

		};
		lunbobox[this.aa].style.zIndex=5
		this.id="btn1"
		
	}
};



// 选项卡
var anniu=$(".anniu")
var tuu=$(".xuanxiangneirong")
for (var i = 0; i < anniu.length; i++) {
	anniu[i].aa=i
	anniu[i].onmouseover=function(){
		for (var j = 0; j < anniu.length; j++) {
			tuu[j].style.display="none"
			anniu[j].id=""
		};
		tuu[this.aa].style.display="block"
		this.id="btn2"
	}
};



// 边框线
var imgs=$(".imgs")
// alert(imgs.length)
var bdl=$(".bdl")
var bdr=$(".bdr")
//alert(bdr.length)
var bdt=$(".bdt")
var bdb=$(".bdb")
for (var i = 0; i < imgs.length; i++) {
	imgs[i].aa=i
	imgs[i].onmouseover=function(){
		animate(bdl[this.aa],{height:imgs[this.aa].offsetHeight})
		animate(bdt[this.aa],{width:imgs[this.aa].offsetWidth})
		animate(bdb[this.aa],{width:imgs[this.aa].offsetWidth})
		animate(bdr[this.aa],{height:imgs[this.aa].offsetHeight})
	}
		imgs[i].onmouseout=function(){
		animate(bdl[this.aa],{height:0})
		animate(bdt[this.aa],{width:0})
		animate(bdb[this.aa],{width:0})
		animate(bdr[this.aa],{height:0})
	}

};


// 选项卡
var anniu1=$(".anniu1")
var tuu1=$(".xuanxiangneirongbaihuo")
for (var i = 0; i < anniu1.length; i++) {
	anniu1[i].aa=i
	anniu1[i].onmouseover=function(){
		for (var j = 0; j < anniu1.length; j++) {
			tuu1[j].style.display="none"
			anniu1[j].id=""
		};
		tuu1[this.aa].style.display="block"
		this.id="btn3"
	}
};
// 小轮播
var shishangxiazuolbm=$(".shishangxiazuolbm")
var shishangbtn1=$(".shishangbtn1")[0]
var shishangbtn2=$(".shishangbtn2")[0]
var now=0
var next=0
for (var i = 1; i < shishangxiazuolbm.length; i++) {
	shishangxiazuolbm[i].style.left="170px"
};
shishangbtn1.onclick=function(){
	now++
	if(now>=shishangxiazuolbm.length){
		now=0
	}
	animate(shishangxiazuolbm[next],{left:-170})
	shishangxiazuolbm[now].style.left="170px"
    animate(shishangxiazuolbm[now],{left:0})
    next=now
}
shishangbtn2.onclick=function(){
    now--
	if(now<=-1){
		now=shishangxiazuolbm.length-1;
	}
	animate(shishangxiazuolbm[next],{left:170})
	shishangxiazuolbm[now].style.left="-170px"
    animate(shishangxiazuolbm[now],{left:0})
    next=now
}


//时尚轮播
var lunbobox1=$(".shishangxiazhong")[0]
var leftbtn1=$(".leftbtn1")[0]
var rightbtn1=$(".rightbtn1")[0]
var img1=$("#shishangxiazhongimg1")
var img2=$("#shishangxiazhongimg2")
var yuanbtn1=$("#shishangxiazhongbtn1img")
var yuanbtn2=$("#shishangxiazhongbtn2img")

lunbobox1.onmouseover=function(){
     leftbtn1.style.display="block"
     rightbtn1.style.display="block"
} 
lunbobox1.onmouseout=function(){
	leftbtn1.style.display="none"
    rightbtn1.style.display="none"
}

rightbtn1.onclick=function(){
    animate(img1,{left:-390},500)
    animate(img2,{left:0},500)
    yuanbtn2.style.top=0
    yuanbtn1.style.top=-13+"px"

}
yuanbtn1.onclick=function(){
    animate(img1,{left:-390},500)
    animate(img2,{left:0},500)
    yuanbtn2.style.top=0
    yuanbtn1.style.top=-13+"px"
}
leftbtn1.onclick=function(){
    animate(img1,{left:0},500)
    animate(img2,{left:390},500)
    yuanbtn2.style.top=-13+"px"
    yuanbtn1.style.top=0

}
yuanbtn2.onclick=function(){
    animate(img1,{left:0},500)
    animate(img2,{left:390},500)
    yuanbtn2.style.top=-13+"px"
    yuanbtn1.style.top=0
}


// 小轮播 潮流女装
var chaoliuxiazuolbm=$(".chaoliuxiazuolbm")
var chaoliubtn1=$(".chaoliubtn1")[0]
var chaoliubtn2=$(".chaoliubtn2")[0]
var now1=0
var next1=0
for (var i = 1; i < chaoliuxiazuolbm.length; i++) {
	chaoliuxiazuolbm[i].style.left="170px"
};
chaoliubtn1.onclick=function(){
	now1++
	if(now1>=chaoliuxiazuolbm.length){
		now1=0
	}
	animate(chaoliuxiazuolbm[next1],{left:-170})
	chaoliuxiazuolbm[now1].style.left="170px"
    animate(chaoliuxiazuolbm[now1],{left:0})
    next1=now1
}
chaoliubtn2.onclick=function(){
    now1--
	if(now1<=-1){
		now1=chaoliuxiazuolbm.length-1;
	}
	animate(chaoliuxiazuolbm[next1],{left:170})
	chaoliuxiazuolbm[now1].style.left="-170px"
    animate(chaoliuxiazuolbm[now1],{left:0})
    next1=now1
}



// 小轮播 精品男装
var jingpinxiazuolbm=$(".jingpinxiazuolbm")
var jingpinbtn1=$(".jingpinbtn1")[0]
var jingpinbtn2=$(".jingpinbtn2")[0]
var now2=0
var next2=0
for (var i = 1; i < jingpinxiazuolbm.length; i++) {
	jingpinxiazuolbm[i].style.left="170px"
};
jingpinbtn1.onclick=function(){
	now2++
	if(now2>=jingpinxiazuolbm.length){
		now2=0
	}
	animate(jingpinxiazuolbm[next2],{left:-170})
	jingpinxiazuolbm[now2].style.left="170px"
    animate(jingpinxiazuolbm[now2],{left:0})
    next2=now2
}
jingpinbtn2.onclick=function(){
    now2--
	if(now2<=-1){
		now2=jingpinxiazuolbm.length-1;
	}
	animate(jingpinxiazuolbm[next2],{left:170})
	jingpinxiazuolbm[now2].style.left="-170px"
    animate(jingpinxiazuolbm[now2],{left:0})
    next2=now2
}

// 小轮播 时尚鞋靴
var xiexuexiazuolbm=$(".xiexuexiazuolbm")
var xiexuebtn1=$(".xiexuebtn1")[0]
var xiexuebtn2=$(".xiexuebtn2")[0]
var now3=0
var next3=0
for (var i = 1; i < xiexuexiazuolbm.length; i++) {
	xiexuexiazuolbm[i].style.left="170px"
};
xiexuebtn1.onclick=function(){
	now3++
	if(now3>=xiexuexiazuolbm.length){
		now3=0
	}
	animate(xiexuexiazuolbm[next3],{left:-170})
	xiexuexiazuolbm[now3].style.left="170px"
    animate(xiexuexiazuolbm[now3],{left:0})
    next3=now3
}
xiexuebtn2.onclick=function(){
    now3--
	if(now3<=-1){
		now3=xiexuexiazuolbm.length-1;
	}
	animate(xiexuexiazuolbm[next3],{left:170})
	xiexuexiazuolbm[now3].style.left="-170px"
    animate(xiexuexiazuolbm[now3],{left:0})
    next3=now3
}

// 小轮播 箱包
var xiangbaoxiazuolbm=$(".xiangbaoxiazuolbm")
var xiangbaobtn1=$(".xiangbaobtn1")[0]
var xiangbaobtn2=$(".xiangbaobtn2")[0]
var now4=0
var next4=0
for (var i = 1; i < xiangbaoxiazuolbm.length; i++) {
	xiangbaoxiazuolbm[i].style.left="170px"
};
xiangbaobtn1.onclick=function(){
	now4++
	if(now4>=xiangbaoxiazuolbm.length){
		now4=0
	}
	animate(xiangbaoxiazuolbm[next4],{left:-170})
	xiangbaoxiazuolbm[now4].style.left="170px"
    animate(xiangbaoxiazuolbm[now4],{left:0})
    next4=now4
}
xiangbaobtn2.onclick=function(){
    now4--
	if(now4<=-1){
		now4=xiangbaoxiazuolbm.length-1;
	}
	animate(xiangbaoxiazuolbm[next4],{left:170})
	xiangbaoxiazuolbm[now4].style.left="-170px"
    animate(xiangbaoxiazuolbm[now4],{left:0})
    next4=now4
}


//时尚轮播
var lunbobox4=$(".xiangbaoxiazhong")[0]
var leftbtn4=$(".leftbtn4")[0]
var rightbtn4=$(".rightbtn4")[0]
var img4=$("#xiangbaoxiazhongimg1")
var img5=$("#xiangbaoxiazhongimg2")
var yuanbtn4=$("#xiangbaoxiazhongbtn1img")
var yuanbtn5=$("#xiangbaoxiazhongbtn2img")

lunbobox4.onmouseover=function(){
     leftbtn4.style.display="block"
     rightbtn4.style.display="block"
} 
lunbobox4.onmouseout=function(){
	leftbtn4.style.display="none"
    rightbtn4.style.display="none"
}

rightbtn4.onclick=function(){
    animate(img4,{left:-390},500)
    animate(img5,{left:0},500)
    yuanbtn5.style.top=0
    yuanbtn4.style.top=-13+"px"

}
yuanbtn4.onclick=function(){
    animate(img4,{left:-390},500)
    animate(img5,{left:0},500)
    yuanbtn5.style.top=0
    yuanbtn4.style.top=-13+"px"
}
leftbtn4.onclick=function(){
    animate(img4,{left:0},500)
    animate(img5,{left:390},500)
    yuanbtn5.style.top=-13+"px"
    yuanbtn4.style.top=0

}
yuanbtn5.onclick=function(){
    animate(img4,{left:0},500)
    animate(img5,{left:390},500)
    yuanbtn5.style.top=-13+"px"
    yuanbtn4.style.top=0
}



// 小轮播 美丽护肤
var meirongxiazuolbm=$(".meirongxiazuolbm")
var meirongbtn1=$(".meirongbtn1")[0]
var meirongbtn2=$(".meirongbtn2")[0]
var now6=0
var next6=0
for (var i = 1; i < meirongxiazuolbm.length; i++) {
	meirongxiazuolbm[i].style.left="170px"
};
meirongbtn1.onclick=function(){
	now6++
	if(now6>=meirongxiazuolbm.length){
		now6=0
	}
	animate(meirongxiazuolbm[next6],{left:-170})
	meirongxiazuolbm[now6].style.left="170px"
    animate(meirongxiazuolbm[now6],{left:0})
    next6=now6
}
meirongbtn2.onclick=function(){
    now6--
	if(now6<=-1){
		now6=meirongxiazuolbm.length-1;
	}
	animate(meirongxiazuolbm[next6],{left:170})
	meirongxiazuolbm[now6].style.left="-170px"
    animate(meirongxiazuolbm[now6],{left:0})
    next6=now6
}


//时尚轮播
var lunbobox6=$(".meirongxiazhong")[0]
var leftbtn6=$(".leftbtn6")[0]
var rightbtn6=$(".rightbtn6")[0]
var img5=$("#meirongxiazhongimg1")
var img6=$("#meirongxiazhongimg2")
var yuanbtn5=$("#meirongxiazhongbtn1img")
var yuanbtn6=$("#meirongxiazhongbtn2img")

lunbobox6.onmouseover=function(){
     leftbtn6.style.display="block"
     rightbtn6.style.display="block"
} 
lunbobox6.onmouseout=function(){
	leftbtn6.style.display="none"
    rightbtn6.style.display="none"
}

rightbtn6.onclick=function(){
    animate(img5,{left:-390},500)
    animate(img6,{left:0},500)
    yuanbtn6.style.top=0
    yuanbtn5.style.top=-13+"px"

}
yuanbtn5.onclick=function(){
    animate(img5,{left:-390},500)
    animate(img6,{left:0},500)
    yuanbtn6.style.top=0
    yuanbtn5.style.top=-13+"px"
}
leftbtn6.onclick=function(){
    animate(img5,{left:0},500)
    animate(img6,{left:390},500)
    yuanbtn6.style.top=-13+"px"
    yuanbtn5.style.top=0

}
yuanbtn6.onclick=function(){
    animate(img5,{left:0},500)
    animate(img6,{left:390},500)
    yuanbtn6.style.top=-13+"px"
    yuanbtn5.style.top=0
}


// 小轮播 美丽护肤
var yundongxiazuolbm=$(".yundongxiazuolbm")
var yundongbtn1=$(".yundongbtn1")[0]
var yundongbtn2=$(".yundongbtn2")[0]
var now8=0
var next8=0
for (var i = 1; i < yundongxiazuolbm.length; i++) {
	yundongxiazuolbm[i].style.left="170px"
};
yundongbtn1.onclick=function(){
	now8++
	if(now8>=yundongxiazuolbm.length){
		now8=0
	}
	animate(yundongxiazuolbm[next8],{left:-170})
	yundongxiazuolbm[now8].style.left="170px"
    animate(yundongxiazuolbm[now8],{left:0})
    next8=now8
}
yundongbtn2.onclick=function(){
    now8--
	if(now8<=-1){
		now8=yundongxiazuolbm.length-1;
	}
	animate(yundongxiazuolbm[next8],{left:170})
	yundongxiazuolbm[now8].style.left="-170px"
    animate(yundongxiazuolbm[now8],{left:0})
    next8=now8
}


//时尚轮播
var lunbobox8=$(".yundongxiazhong")[0]
var leftbtn8=$(".leftbtn8")[0]
var rightbtn8=$(".rightbtn8")[0]
var img7=$("#yundongxiazhongimg1")
var img8=$("#yundongxiazhongimg2")
var yuanbtn7=$("#yundongxiazhongbtn1img")
var yuanbtn8=$("#yundongxiazhongbtn2img")

lunbobox8.onmouseover=function(){
     leftbtn8.style.display="block"
     rightbtn8.style.display="block"
} 
lunbobox8.onmouseout=function(){
	leftbtn8.style.display="none"
    rightbtn8.style.display="none"
}

rightbtn8.onclick=function(){
    animate(img7,{left:-390},500)
    animate(img8,{left:0},500)
    yuanbtn8.style.top=0
    yuanbtn7.style.top=-13+"px"

}
yuanbtn7.onclick=function(){
    animate(img7,{left:-390},500)
    animate(img8,{left:0},500)
    yuanbtn8.style.top=0
    yuanbtn7.style.top=-13+"px"
}
leftbtn8.onclick=function(){
    animate(img7,{left:0},500)
    animate(img8,{left:390},500)
    yuanbtn8.style.top=-13+"px"
    yuanbtn7.style.top=0

}
yuanbtn8.onclick=function(){
    animate(img7,{left:0},500)
    animate(img8,{left:390},500)
    yuanbtn8.style.top=-13+"px"
    yuanbtn7.style.top=0
}

// 小轮播 内衣配饰
var neiyixiazuolbm=$(".neiyixiazuolbm")
var neiyibtn1=$(".neiyibtn1")[0]
var neiyibtn2=$(".neiyibtn2")[0]
var now11=0
var next11=0
for (var i = 1; i < neiyixiazuolbm.length; i++) {
	neiyixiazuolbm[i].style.left="170px"
};
neiyibtn1.onclick=function(){
	now11++
	if(now11>=neiyixiazuolbm.length){
		now11=0
	}
	animate(neiyixiazuolbm[next11],{left:-170})
	neiyixiazuolbm[now11].style.left="170px"
    animate(neiyixiazuolbm[now11],{left:0})
    next11=now11
}
neiyibtn2.onclick=function(){
    now11--
	if(now11<=-1){
		now11=neiyixiazuolbm.length-1;
	}
	animate(neiyixiazuolbm[next11],{left:170})
	neiyixiazuolbm[now11].style.left="-170px"
    animate(neiyixiazuolbm[now11],{left:0})
    next11=now11
}

// 小轮播 可爱婴童
var keaixiazuolbm=$(".keaixiazuolbm")
var keaibtn1=$(".keaibtn1")[0]
var keaibtn2=$(".keaibtn2")[0]
var now12=0
var next12=0
for (var i = 1; i < keaixiazuolbm.length; i++) {
	keaixiazuolbm[i].style.left="170px"
};
keaibtn1.onclick=function(){
	now12++
	if(now12>=keaixiazuolbm.length){
		now12=0
	}
	animate(keaixiazuolbm[next12],{left:-170})
	keaixiazuolbm[now12].style.left="170px"
    animate(keaixiazuolbm[now12],{left:0})
    next12=now12
}
keaibtn2.onclick=function(){
    now12--
	if(now12<=-1){
		now12=keaixiazuolbm.length-1;
	}
	animate(keaixiazuolbm[next12],{left:170})
	keaixiazuolbm[now12].style.left="-170px"
    animate(keaixiazuolbm[now12],{left:0})
    next12=now12
}

//滑入透明
var touming=$(".touming")
for (var i = 0; i < touming.length; i++) {
	touming[i].aa=i
	touming[i].onmouseover=function  () {
		touming[this.aa].style.opacity="0.7"
	}
	touming[i].onmouseout=function  () {
		touming[this.aa].style.opacity="1"
	}
};

//返回顶部
var dear=$(".miss")
var qinai=$(".qinai")
for (var i = 0; i < dear.length; i++) {
	dear[i].aa=i
	dear[i].onmouseover=function(){
		qinai[this.aa].style.display="block"
	}
	dear[i].onmouseout=function(){
		qinai[this.aa].style.display="none"
	}
};
//侧边导航
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var zaihui=$(".zaihui")[0]
var sekuai=$(".shishang")
var flagtop=1
var flagdown=true
var nowsb=0
window.onscroll=function  () {
	if(obj.scrollTop>=700){
		if (flagtop==1) {
			zaihui.style.display="block"
			flagtop=2
			flagdown=true
		}
	}
	else{
		if (flagdown==true) {
			zaihui.style.display="none"
			flagtop=1
			flagdown=false
		}
	}
	for (var i = 0; i < sekuai.length; i++) {
		if(sekuai[i].offsetTop<=obj.scrollTop+200){
			for (var j = 0; j < qinai.length; j++) {
				qinai[j].style.display="none"
			}
			qinai[i].style.display="block"
			nowsb=i
		}
	};
}
for (var q = 0; q < qinai.length; q++) {
	qinai[q].aa=q
	qinai[q].onclick=function  () {
		animate(obj,{scrollTop:sekuai[this.aa].offsetTop-150},300)
	    qinai[this.aa].style.display="block" 
	    nowsb=this.aa
	}
	}





//banner图选项
var banner7=$(".banner7")
 var banma=$(".banma")
// var banner11=$(".banner11")
var ycbox=$(".ycbox")[0]
for (var i = 0; i < banner7.length; i++) {
	banner7[i].aa=i
	banner7[i].onmouseover=function(){
		 banma[this.aa].style.display="block"
		// banner11[this.aa].style.display="none"
		ycbox.style.display="block"
		ycbox.onmouseover=function  () {
			ycbox.style.display="block"
		}
	}
	banner7[i].onmouseout=function(){
		 banma[this.aa].style.display="none"
		// banner11[this.aa].style.display="block"
		ycbox.style.display="none"
		ycbox.onmouseout=function  () {
		ycbox.style.display="none"
		}
	}
};




//yintai
var msb1=$(".msb1")[0]
var msd1=$(".msd1")[0]
var dingbuxiaoa=$(".dingbuxiaoa")[0]
msb1.onmouseover=function(){
	msd1.style.display="block"
	dingbuxiaoa.style.color="red"
}
msb1.onmouseout=function(){
	msd1.style.display="none"
	dingbuxiaoa.style.color=""
}

var msb2=$(".msb2")[0]
var msd2=$(".msd2")[0]
var shuxian=$(".shuxian")[0]
var wxerweima=$(".wxerweima")[0]
var cao=$(".cao")[0]
msb2.onmouseover=function(){
	msb2.style.cssText="background:white;width:124px;"
	wxerweima.style.display="block"
	msd2.style.display="block"
	shuxian.style.display="none"
	cao.style.color="red"
}
msb2.onmouseout=function(){
	msb2.style.cssText=""
	wxerweima.style.display="none"
	msd2.style.display="none"
	shuxian.style.display="block"
	cao.style.color=""
}


var msb3=$(".msb3")[0]
var msd3=$(".msd3")[0]
var sjerweima=$(".sjerweima")[0]
var caoa=$(".caoa")[0]
msb3.onmouseover=function(){
	msb3.style.background="white"
	sjerweima.style.display="block"
	msd3.style.display="block"
	caoa.style.color="red"
}
msb3.onmouseout=function(){
	msb3.style.background=""
	sjerweima.style.display="none"
	msd3.style.display="none"
	caoa.style.color=""
}

