const a157_0x4b10=['createLog','channelId','farewell','partial','test','message','guild','has','Constants','catch','handleFarewells','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','user','generateEmbed','channels','Bot','toUTCString','delete','replaceMemberVariables','getDocument','cache','Human','fetch','@bastion/tesseract','exec','deletable','timeout','Listener','Member\x20ID','guildMemberRemove','Joined\x20Server','random','return\x20/\x22\x20+\x20this\x20+\x20\x22/','joinedAt','stringify','parse','then','bot','length','constructor','Member\x20Type','Member'];(function(_0x1c4cf8,_0x4b1015){const _0xf6567a=function(_0x5634be){while(--_0x5634be){_0x1c4cf8['push'](_0x1c4cf8['shift']());}};const _0x5aa0ca=function(){const _0x5e53f9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2c5de6,_0x47e15d,_0xd19dec,_0x4174d5){_0x4174d5=_0x4174d5||{};let _0x10e7fc=_0x47e15d+'='+_0xd19dec;let _0x48454c=0x0;for(let _0x5c656b=0x0,_0x4f5d1d=_0x2c5de6['length'];_0x5c656b<_0x4f5d1d;_0x5c656b++){const _0x534693=_0x2c5de6[_0x5c656b];_0x10e7fc+=';\x20'+_0x534693;const _0x2cbbf5=_0x2c5de6[_0x534693];_0x2c5de6['push'](_0x2cbbf5);_0x4f5d1d=_0x2c5de6['length'];if(_0x2cbbf5!==!![]){_0x10e7fc+='='+_0x2cbbf5;}}_0x4174d5['cookie']=_0x10e7fc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25e74a,_0x420ee9){_0x25e74a=_0x25e74a||function(_0x1eab4d){return _0x1eab4d;};const _0x512dcd=_0x25e74a(new RegExp('(?:^|;\x20)'+_0x420ee9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3e7b16=function(_0x218713,_0x1da051){_0x218713(++_0x1da051);};_0x3e7b16(_0xf6567a,_0x4b1015);return _0x512dcd?decodeURIComponent(_0x512dcd[0x1]):undefined;}};const _0x31c125=function(){const _0x4872d9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4872d9['test'](_0x5e53f9['removeCookie']['toString']());};_0x5e53f9['updateCookie']=_0x31c125;let _0x5a03d1='';const _0x4017db=_0x5e53f9['updateCookie']();if(!_0x4017db){_0x5e53f9['setCookie'](['*'],'counter',0x1);}else if(_0x4017db){_0x5a03d1=_0x5e53f9['getCookie'](null,'counter');}else{_0x5e53f9['removeCookie']();}};_0x5aa0ca();}(a157_0x4b10,0xda));const a157_0xf656=function(_0x1c4cf8,_0x4b1015){_0x1c4cf8=_0x1c4cf8-0x0;let _0xf6567a=a157_0x4b10[_0x1c4cf8];return _0xf6567a;};const a157_0x5e53f9=function(){let _0x125050=!![];return function(_0x21902f,_0x276578){const _0x274583=_0x125050?function(){if(_0x276578){const _0x404d3d=_0x276578['apply'](_0x21902f,arguments);_0x276578=null;return _0x404d3d;}}:function(){};_0x125050=![];return _0x274583;};}();const a157_0x5634be=a157_0x5e53f9(this,function(){const _0x12cbc2=function(){const _0x1e3af6=_0x12cbc2[a157_0xf656('0x1f')](a157_0xf656('0x18'))()['compile'](a157_0xf656('0x3'));return!_0x1e3af6[a157_0xf656('0x26')](a157_0x5634be);};return _0x12cbc2();});a157_0x5634be();'use strict';const tesseract_1=require(a157_0xf656('0xf'));const embeds=require('../utils/embeds');const variables=require('../utils/variables');const farewells=require('../assets/farewells.json');module['exports']=class GuildMemberRemoveListener extends tesseract_1[a157_0xf656('0x13')]{constructor(){super(a157_0xf656('0x15'),{'mode':tesseract_1[a157_0xf656('0x0')]['LISTENER_MODE']['ON']});this[a157_0xf656('0x2')]=(_0x52b567,_0x3ce4ba)=>{if(!_0x3ce4ba[a157_0xf656('0x24')]||!_0x3ce4ba[a157_0xf656('0x24')][a157_0xf656('0x23')])return;if(!_0x52b567['guild'][a157_0xf656('0x6')][a157_0xf656('0xc')][a157_0xf656('0x29')](_0x3ce4ba[a157_0xf656('0x24')][a157_0xf656('0x23')]))return;const _0x84c552=_0x52b567[a157_0xf656('0x28')]['channels']['cache']['get'](_0x3ce4ba[a157_0xf656('0x24')][a157_0xf656('0x23')]);const _0x49d049=embeds[a157_0xf656('0x5')](_0x3ce4ba[a157_0xf656('0x24')]['message']?_0x3ce4ba[a157_0xf656('0x24')][a157_0xf656('0x27')]:farewells[Math['floor'](Math[a157_0xf656('0x17')]()*farewells[a157_0xf656('0x1e')])]);_0x84c552['send']({'embed':{...JSON[a157_0xf656('0x1b')](variables[a157_0xf656('0xa')](JSON[a157_0xf656('0x1a')](_0x49d049),_0x52b567)),'footer':{'text':'farewells!'}}})[a157_0xf656('0x1c')](_0x130f92=>{if(_0x3ce4ba[a157_0xf656('0x24')][a157_0xf656('0x12')]&&_0x130f92[a157_0xf656('0x11')]){_0x130f92[a157_0xf656('0x9')]({'timeout':_0x3ce4ba[a157_0xf656('0x24')]['timeout']*0xea60})[a157_0xf656('0x1')](()=>{});}})[a157_0xf656('0x1')](()=>{});};this[a157_0xf656('0x10')]=async _0x4132c9=>{if(_0x4132c9[a157_0xf656('0x25')]){await _0x4132c9[a157_0xf656('0xe')]();}const _0x497e50=_0x4132c9[a157_0xf656('0x28')];const _0x457834=await _0x497e50[a157_0xf656('0xb')]();this[a157_0xf656('0x2')](_0x4132c9,_0x457834);_0x497e50[a157_0xf656('0x22')]({'event':a157_0xf656('0x15'),'fields':[{'name':a157_0xf656('0x21'),'value':_0x4132c9[a157_0xf656('0x4')]['tag'],'inline':!![]},{'name':a157_0xf656('0x14'),'value':_0x4132c9['id'],'inline':!![]},{'name':a157_0xf656('0x20'),'value':_0x4132c9[a157_0xf656('0x4')][a157_0xf656('0x1d')]?a157_0xf656('0x7'):a157_0xf656('0xd'),'inline':!![]},{'name':a157_0xf656('0x16'),'value':_0x4132c9[a157_0xf656('0x19')][a157_0xf656('0x8')](),'inline':!![]}]});};}};