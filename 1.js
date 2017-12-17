var results="";
var x="";
var lastkey="";
var flg=1;
var results2="";
var re1=/^[\*|\/].+/;
var re2=/.+[\*|\/]$/;
var re3=/(\+|-|\*|\/)/;
//计算函数
function calculater(){
	//按下等于键
	if(event.srcElement.innerHTML=="="){
		return;
	}
	//按下清除键
	if(event.srcElement.innerHTML=="AC"){
		results="";
		display.innerHTML="0";
		return;
	}
	if(event.srcElement.id=="display"){
		return;
	}
	//正则表达式来限制出现连续输入两个运算符的情况
	if(lastkey.match(re3)&&event.srcElement.innerHTML.match(re3)){
	return;
	}
	//正则表达式来实现相反数功能
	if(event.srcElement.innerHTML=="+/-"&&results!=""){
		if(flg==-1){
			results=String(results2);
			display.innerHTML=results;
			flg=-flg;
			return;
		}
		results2=results;
		results="-"+"("+results+")";
		flg=-flg;
		display.innerHTML=results;
		return;
	}
	//按了等号后的运算结果继续进行运算
	if(lastkey=="="&&event.srcElement.innerHTML.match(re3)){
	results=x;
	}
	//显示按下的字符
   results+=event.srcElement.innerHTML;
   display.innerHTML=results;
    
}
//计算输入的运算表达式
function resultsCal(){	
	//正则表达式来判断输入是否合法
	
	
	if(results.match(re1)||results.match(re2)){
		display.innerHTML="输入错误";
		results="";
		return;	
	}
	
	x=eval(results);
	display.innerHTML=x;
	}