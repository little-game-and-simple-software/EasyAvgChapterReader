//基础剧情加载器单元
//单个角色出场 带自定义js脚本 章节_小节 关键字 : | > <end <custom_end
var test="||||||" 
var chapter1_1="树音:这是qbit的职责。|console.log('这是执行的自定义js代码')"
//两个角色 前主 后从 后面带js
var chapter1_2="树音|千夜:你要好好地活着。|alert('2') <end"
function parse(str)
{
  //首先要获取脚本中有几个|
  var reg=new RegExp("[|]")
  var pre=str.match(reg)
  //分割出人物，句子和js代码 此时人物已经分出来 后面的句子和脚本混合在一起 待解析分割处理
  var split_character_and_sentence= str.split(":")
  console.log("split")
  console.log(split_character_and_sentence)
  console.log(split_character_and_sentence.length)
  //先把人物分离出来
  var character=split_character_and_sentence[0]
  //分割出句子
  var split_stn_and_script=split_character_and_sentence[1].split("|")
  var sentence
  //检查是否存在翻页符号
  if(split_stn_and_script[0].indexOf(">")!=-1)
  {
    sentence=split_stn_and_script[0].split(">")[0]
  }
  else
  {
    sentence=split_stn_and_script[0]
  }
  console.log("解析结果")
  console.log("人物："+character+" "+"句子："+sentence+" "+"js代码："+split_stn_and_script[1])
  //执行js代码
  exec_js(split_stn_and_script[1])
}
function exec_js(js_code)
{
  eval(js_code)
}
parse(chapter1_1)
  //测试
  /*for(var i=0;i<split_1.length;i++)
  {
    console.log(split_1[i])
  }*/