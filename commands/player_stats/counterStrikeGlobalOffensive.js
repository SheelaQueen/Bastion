const a98_0x2d9d=['../../utils/omnic','CSGO','steam','\x20has\x20played\x20for\x20','\x20hours.','message','BASTION_ERROR_TYPE','keys','../../utils/constants','COLORS','makeRequest','includes','send','guild','timePlayed','channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','counterStrikeGlobalOffensive\x20USERNAME','platforms','name','compile','counterStrikeGlobalOffensive','metadata','toFixed','displayName','toLowerCase','platformUserHandle','stats','Command','map','toUpperCase','../../utils/errors','exec','/playerstats/csgo/','value','test','exports','platformInfo','constructor','DiscordError','join','filter','platform','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','displayValue','@bastion/tesseract','Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','rankScore','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','apply','data'];(function(_0x206226,_0x2d9d33){const _0x1f6591=function(_0xe9e1c1){while(--_0xe9e1c1){_0x206226['push'](_0x206226['shift']());}};const _0x32f6a1=function(){const _0x5f145b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x217e75,_0x10015b,_0x37725f,_0x21eb29){_0x21eb29=_0x21eb29||{};let _0x1c33d9=_0x10015b+'='+_0x37725f;let _0x1f518f=0x0;for(let _0x16173a=0x0,_0x14d07b=_0x217e75['length'];_0x16173a<_0x14d07b;_0x16173a++){const _0xf6f6a7=_0x217e75[_0x16173a];_0x1c33d9+=';\x20'+_0xf6f6a7;const _0x1c7a66=_0x217e75[_0xf6f6a7];_0x217e75['push'](_0x1c7a66);_0x14d07b=_0x217e75['length'];if(_0x1c7a66!==!![]){_0x1c33d9+='='+_0x1c7a66;}}_0x21eb29['cookie']=_0x1c33d9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x46ef04,_0x21189b){_0x46ef04=_0x46ef04||function(_0x29fe0d){return _0x29fe0d;};const _0x55ed79=_0x46ef04(new RegExp('(?:^|;\x20)'+_0x21189b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x29b791=function(_0x357abe,_0x5f1746){_0x357abe(++_0x5f1746);};_0x29b791(_0x1f6591,_0x2d9d33);return _0x55ed79?decodeURIComponent(_0x55ed79[0x1]):undefined;}};const _0x321fda=function(){const _0x255ed7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x255ed7['test'](_0x5f145b['removeCookie']['toString']());};_0x5f145b['updateCookie']=_0x321fda;let _0x152a92='';const _0xf6b14f=_0x5f145b['updateCookie']();if(!_0xf6b14f){_0x5f145b['setCookie'](['*'],'counter',0x1);}else if(_0xf6b14f){_0x152a92=_0x5f145b['getCookie'](null,'counter');}else{_0x5f145b['removeCookie']();}};_0x32f6a1();}(a98_0x2d9d,0xec));const a98_0x1f65=function(_0x206226,_0x2d9d33){_0x206226=_0x206226-0x0;let _0x1f6591=a98_0x2d9d[_0x206226];return _0x1f6591;};const a98_0x5f145b=function(){let _0x46d6b4=!![];return function(_0x411439,_0x5ba921){const _0x1320e7=_0x46d6b4?function(){if(_0x5ba921){const _0x15541f=_0x5ba921[a98_0x1f65('0x11')](_0x411439,arguments);_0x5ba921=null;return _0x15541f;}}:function(){};_0x46d6b4=![];return _0x1320e7;};}();const a98_0xe9e1c1=a98_0x5f145b(this,function(){const _0x563d0f=function(){const _0x75e7d4=_0x563d0f[a98_0x1f65('0x6')](a98_0x1f65('0x23'))()[a98_0x1f65('0x27')](a98_0x1f65('0xb'));return!_0x75e7d4[a98_0x1f65('0x3')](a98_0xe9e1c1);};return _0x563d0f();});a98_0xe9e1c1();'use strict';const tesseract_1=require(a98_0x1f65('0xd'));const constants=require(a98_0x1f65('0x1b'));const errors=require(a98_0x1f65('0x32'));const omnic=require(a98_0x1f65('0x13'));module[a98_0x1f65('0x4')]=class CounterStrikeGlobalOffensiveCommand extends tesseract_1[a98_0x1f65('0x2f')]{constructor(){super(a98_0x1f65('0x28'),{'description':a98_0x1f65('0x10'),'triggers':['csgo'],'arguments':{'alias':{'platform':['p']},'string':[a98_0x1f65('0xa')]},'scope':a98_0x1f65('0x20'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a98_0x1f65('0x24'),'counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM']});this[a98_0x1f65('0x0')]=async(_0xe0fc3d,_0x538aa1)=>{if(!_0x538aa1['_']['length'])throw new errors[(a98_0x1f65('0x7'))](errors[a98_0x1f65('0x19')]['INVALID_COMMAND_SYNTAX'],this[a98_0x1f65('0x26')]);const _0x4436d6=_0x538aa1['_'][a98_0x1f65('0x8')]('\x20');const _0x144f9c=_0x538aa1[a98_0x1f65('0xa')]&&this[a98_0x1f65('0x25')][a98_0x1f65('0x1e')](_0x538aa1[a98_0x1f65('0xa')][a98_0x1f65('0x2c')]())?_0x538aa1[a98_0x1f65('0xa')][a98_0x1f65('0x2c')]():this[a98_0x1f65('0x25')][0x0];const _0x47dcc5=await omnic[a98_0x1f65('0x1d')](a98_0x1f65('0x1')+_0x144f9c+'/'+encodeURIComponent(_0x4436d6));const _0x38c7d5=await _0x47dcc5['json']();if(_0x38c7d5['errors'])throw new Error(_0x38c7d5['errors'][0x0][a98_0x1f65('0x18')]);const _0xc710e6=_0x38c7d5['data']['segments']['find'](_0x394e1e=>_0x394e1e['type']==='overview');await _0xe0fc3d[a98_0x1f65('0x22')][a98_0x1f65('0x1f')]({'embed':{'color':constants[a98_0x1f65('0x1c')][a98_0x1f65('0x14')],'author':{'name':_0x38c7d5['data'][a98_0x1f65('0x5')][a98_0x1f65('0x2d')],'url':'https://steamcommunity.com/id/'+_0x38c7d5[a98_0x1f65('0x12')][a98_0x1f65('0x5')][a98_0x1f65('0x2d')]},'title':a98_0x1f65('0xe'),'description':_0xc710e6[a98_0x1f65('0x2e')][a98_0x1f65('0x21')]?_0x38c7d5[a98_0x1f65('0x12')][a98_0x1f65('0x5')][a98_0x1f65('0x2d')]+a98_0x1f65('0x16')+(_0xc710e6[a98_0x1f65('0x2e')][a98_0x1f65('0x21')][a98_0x1f65('0x2')]/0x3c/0x3c)[a98_0x1f65('0x2a')](0x2)+a98_0x1f65('0x17'):'','fields':Object[a98_0x1f65('0x1a')](_0xc710e6['stats'])[a98_0x1f65('0x9')](_0x42dc7a=>_0x42dc7a!==a98_0x1f65('0x21'))[a98_0x1f65('0x30')](_0x12f447=>({'name':_0xc710e6[a98_0x1f65('0x2e')][_0x12f447][a98_0x1f65('0x2b')],'value':_0xc710e6[a98_0x1f65('0x2e')][_0x12f447][a98_0x1f65('0xc')],'inline':!![]})),'thumbnail':{'url':_0xc710e6[a98_0x1f65('0x2e')][a98_0x1f65('0xf')]?_0xc710e6[a98_0x1f65('0x2e')][a98_0x1f65('0xf')][a98_0x1f65('0x29')]['iconUrl']:_0x38c7d5[a98_0x1f65('0x12')][a98_0x1f65('0x5')]['avatarUrl']},'footer':{'text':_0x144f9c[a98_0x1f65('0x31')]()+'\x20•\x20Powered\x20by\x20Tracker\x20Network'}}});};this[a98_0x1f65('0x25')]=[a98_0x1f65('0x15')];}};