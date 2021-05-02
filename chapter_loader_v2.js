//基础剧情加载器单元
//单个角色出场 带自定义js脚本
var txt_1="树音:这是qbit的职责。|alert('test')"
//两个角色 前主 后从 后面带js
var txt_2="树音|千夜:你要好好地活着。|alert('2') <end"
function load(str)
{
  //todo 以后再写 正则表达式解析脚本
 /*var 剧情分词= str.split("\n")
 for(var i=0;i<剧情分词.length;i++)
 {
   var 每一行=剧情分词[i]
   console.log(每一行)
   if(每一行.indexOf(">")=="1")
   {
     console.log("加载2.txt")
     load(txt_2)
   }
 }*/
}
//这里使用_代替.,原意是2.tct
load(txt_1)
