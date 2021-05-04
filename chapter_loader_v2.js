//基础剧情加载器单元
//单个角色出场 带自定义js脚本 章节_小节 关键字 : | > <end <custom_end
var test="||||||" 
var chapter1_1="树音:这是qbit的职责。|console.log('这是执行的自定义js代码')"
//两个角色 前主 后从 后面带js
var chapter1_2="树音|千夜:你要好好地活着。|alert('2') <end"
//废弃代码
// function parse(str)
// {
//   //首先要获取脚本中有几个|
//   // var reg=new RegExp("[|]")
//   // var pre=str.match(reg)
//   //分割出人物，句子和js代码 此时人物已经分出来 后面的句子和脚本混合在一起 待解析分割处理
//   var split_character_and_sentence= str.split(":",2)
//   console.log("split")
//   console.log(split_character_and_sentence)
//   console.log(split_character_and_sentence.length)
//   //先把人物分离出来
//   var character=split_character_and_sentence[0]
//   //分割出句子
//   var split_stn_and_script=split_character_and_sentence[1].split("|")
//   var sentence
//   //检查是否存在翻页符号
//   if(split_stn_and_script[0].indexOf(">")!=-1)
//   {
//     sentence=split_stn_and_script[0].split(">")[0]
//   }
//   else
//   {
//     sentence=split_stn_and_script[0]
//   }
//   console.log("解析结果")
//   console.log("人物："+character+" "+"句子："+sentence+" "+"js代码："+split_stn_and_script[1])
//   //执行js代码
//   exec_js(split_stn_and_script[1])
// }
function exec_js(js_code)
{
  eval(js_code)
}
//parse(chapter1_1)

  //新的语法结构设计
  var model="[人物],[句子],[代码]"
  var a="[我],[今天天气真好],[console.log('这里是js代码a')]"
  var b="[我|迷之少女],[这里是小沙子的世界，欢迎游玩。这里是测试代码],[console.log('这里是js代码b')]"
function test_a(str)
{
  //注意事项，新的语法结构里关键分割字是,英文的，不能重复出现，只能在[],[],[]这个地方出现两次，其余地方请用中文的逗号，
  console.log("测试")

  console.log("原始数据")
  console.log(str)
  var split_b=str.split(",")
  console.log("分词数据")
  console.log(split_b)
  //要处理的数据 人物 句子 和代码
  var to_parse_char=split_b[0]
  var to_parse_stn=split_b[1]
  var to_parse_js=split_b[2]
  //结果
  var reuslt_stn
  var result_js
  if(to_parse_char.indexOf("|")!=-1)
  {
    var trim_chars=to_parse_char.replace(/\[|]/g,"")
    var main_char=trim_chars.split("|")[0]
    var second_char=trim_chars.split("|")[1]
    console.log("主要人物："+main_char)
    console.log("次要人物："+second_char)
  }//没有人物分割符号
  else
  {
    var char=to_parse_char.replace(/\[|]/g,"")
  }
  reuslt_stn=to_parse_stn.replace(/\[|]/g,"")
  result_js=to_parse_js.replace(/\[|]/g,"")
  console.log("人物："+char+" "+"句子："+reuslt_stn+" "+"js代码："+result_js)
  exec_js(result_js) 
}
test_a(b)
//去除中括号
// console.log("----------------- \ 是转义符号")
// console.log("利用正则去除括号，正则以/开头/结束，/\/ 反斜杠\是一个标志表达式的开头 g表示处理所有符合表达式的值。/\[|]/ 就是去除[]")
//  var bbc="[aaaa]"
//  //去除字符串的[]
//  var s_bbc=bbc.replace(/\[|]/g,"")
//  console.log(s_bbc)