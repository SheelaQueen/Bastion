const a66_0x2e69=['MANAGE_CHANNELS','COLORS','permissionOverwrites','exports','MANAGE_GUILD','has','ORANGE','compile','update','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','getString','tag','author','allow','GREEN','lockdownChannelRemove','locale','It\x20allows\x20you\x20lockdown\x20a\x20channel\x20in\x20the\x20server\x20from\x20users\x20who\x20don\x27t\x20have\x20permission\x20to\x20manage\x20messages\x20or\x20the\x20channel.','info','Command','remove','lockdown\x20--remove','Constants','test','guild','lockdownChannel','apply','values','lockdown','constructor','document','channel'];(function(_0x28425e,_0x2e69b4){const _0x2020f8=function(_0x4937ba){while(--_0x4937ba){_0x28425e['push'](_0x28425e['shift']());}};const _0x30fc14=function(){const _0x2da4b1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x52ba61,_0x13f67b,_0x1e0570,_0x15be8c){_0x15be8c=_0x15be8c||{};let _0x5ee2fe=_0x13f67b+'='+_0x1e0570;let _0x8ef839=0x0;for(let _0xbdac03=0x0,_0x4bfdd6=_0x52ba61['length'];_0xbdac03<_0x4bfdd6;_0xbdac03++){const _0xcbe0d8=_0x52ba61[_0xbdac03];_0x5ee2fe+=';\x20'+_0xcbe0d8;const _0x34ada5=_0x52ba61[_0xcbe0d8];_0x52ba61['push'](_0x34ada5);_0x4bfdd6=_0x52ba61['length'];if(_0x34ada5!==!![]){_0x5ee2fe+='='+_0x34ada5;}}_0x15be8c['cookie']=_0x5ee2fe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4826c3,_0x343dd8){_0x4826c3=_0x4826c3||function(_0x5d7461){return _0x5d7461;};const _0x23166d=_0x4826c3(new RegExp('(?:^|;\x20)'+_0x343dd8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x22ff4d=function(_0x48ae3d,_0x3fd9ca){_0x48ae3d(++_0x3fd9ca);};_0x22ff4d(_0x2020f8,_0x2e69b4);return _0x23166d?decodeURIComponent(_0x23166d[0x1]):undefined;}};const _0x518104=function(){const _0x2f9266=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2f9266['test'](_0x2da4b1['removeCookie']['toString']());};_0x2da4b1['updateCookie']=_0x518104;let _0xd66c5b='';const _0x15011c=_0x2da4b1['updateCookie']();if(!_0x15011c){_0x2da4b1['setCookie'](['*'],'counter',0x1);}else if(_0x15011c){_0xd66c5b=_0x2da4b1['getCookie'](null,'counter');}else{_0x2da4b1['removeCookie']();}};_0x30fc14();}(a66_0x2e69,0x10d));const a66_0x2020=function(_0x28425e,_0x2e69b4){_0x28425e=_0x28425e-0x0;let _0x2020f8=a66_0x2e69[_0x28425e];return _0x2020f8;};const a66_0x2da4b1=function(){let _0x3c5feb=!![];return function(_0x4d8b8d,_0x43b25f){const _0x1d6be6=_0x3c5feb?function(){if(_0x43b25f){const _0x496e49=_0x43b25f[a66_0x2020('0x16')](_0x4d8b8d,arguments);_0x43b25f=null;return _0x496e49;}}:function(){};_0x3c5feb=![];return _0x1d6be6;};}();const a66_0x4937ba=a66_0x2da4b1(this,function(){const _0x58b9dc=function(){const _0x58ccd4=_0x58b9dc[a66_0x2020('0x19')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a66_0x2020('0x2')](a66_0x2020('0x4'));return!_0x58ccd4[a66_0x2020('0x13')](a66_0x4937ba);};return _0x58b9dc();});a66_0x4937ba();'use strict';const tesseract_1=require('@bastion/tesseract');module[a66_0x2020('0x1f')]=class LockdownCommand extends tesseract_1[a66_0x2020('0xf')]{constructor(){super('lockdown',{'description':a66_0x2020('0xd'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[a66_0x2020('0x10')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a66_0x2020('0x1c')],'userPermissions':[a66_0x2020('0x20')],'syntax':[a66_0x2020('0x18'),a66_0x2020('0x11')]});this['exec']=async(_0x5a1dd3,_0x35e043)=>{for(const _0x230921 of _0x5a1dd3[a66_0x2020('0x1b')][a66_0x2020('0x1e')][a66_0x2020('0x17')]()){if(_0x230921[a66_0x2020('0x9')][a66_0x2020('0x0')]('MANAGE_MESSAGES')||_0x230921[a66_0x2020('0x9')][a66_0x2020('0x0')](a66_0x2020('0x1c')))continue;_0x230921[a66_0x2020('0x3')]({'SEND_MESSAGES':_0x35e043[a66_0x2020('0x10')]?null:![]});}await _0x5a1dd3[a66_0x2020('0x1b')]['send']({'embed':{'color':_0x35e043[a66_0x2020('0x10')]?tesseract_1[a66_0x2020('0x12')][a66_0x2020('0x1d')][a66_0x2020('0xa')]:tesseract_1[a66_0x2020('0x12')][a66_0x2020('0x1d')][a66_0x2020('0x1')],'description':this['client'][a66_0x2020('0xc')][a66_0x2020('0x6')](_0x5a1dd3[a66_0x2020('0x14')][a66_0x2020('0x1a')]['language'],a66_0x2020('0xe'),_0x35e043[a66_0x2020('0x10')]?a66_0x2020('0x15'):a66_0x2020('0xb'),_0x5a1dd3[a66_0x2020('0x8')][a66_0x2020('0x7')])}})[a66_0x2020('0x5')](()=>{});};}};