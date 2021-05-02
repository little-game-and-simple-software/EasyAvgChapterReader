//基础剧情加载器单元 
var txt_1="第一句 \n 第二句\n >2_txt"
var txt_2="第二段 \n 你好啊\n 我的朋友"

function load(str)
{
 var 剧情分词= str.split("\n")
 for(var i=0;i<剧情分词.length;i++)
 {
   var 每一行=剧情分词[i]
   console.log(每一行)
   if(每一行.indexOf(">")=="1")
   {
     console.log("加载2.txt")
     load(txt_2)
   }
 }
}
//这里使用_代替.,原意是2.tct
load(txt_1)
