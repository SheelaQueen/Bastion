const a78_0xce80=['resolveGuildMember','info','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20nicknames\x20of\x20the\x20server\x20members.','Command','join','../../utils/errors','language','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','locale','nickUpdate','guild','author','client','COLORS','tag','INVALID_COMMAND_SYNTAX','nickname\x20--user\x20USER_ID\x20--nick\x20NICKNAME\x20--\x20REASON','nickname','member','KICK_MEMBERS','unauthorized','exec','@bastion/tesseract','nickRemove','document','user','nick','apply','resolver','getString','channel','send','Constants','BASTION_ERROR_TYPE','catch','ORANGE','RED','rolePosition','nickname\x20--user\x20USER_ID\x20--\x20REASON'];(function(_0x14d7d2,_0xce8010){const _0x1c5fbf=function(_0x52f096){while(--_0x52f096){_0x14d7d2['push'](_0x14d7d2['shift']());}};const _0x1fdfa3=function(){const _0x8fbf18={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa14b56,_0x49867b,_0x3c9674,_0x4de74e){_0x4de74e=_0x4de74e||{};let _0x273049=_0x49867b+'='+_0x3c9674;let _0xea658b=0x0;for(let _0x59f576=0x0,_0x2e7b2c=_0xa14b56['length'];_0x59f576<_0x2e7b2c;_0x59f576++){const _0x3305b8=_0xa14b56[_0x59f576];_0x273049+=';\x20'+_0x3305b8;const _0x165fba=_0xa14b56[_0x3305b8];_0xa14b56['push'](_0x165fba);_0x2e7b2c=_0xa14b56['length'];if(_0x165fba!==!![]){_0x273049+='='+_0x165fba;}}_0x4de74e['cookie']=_0x273049;},'removeCookie':function(){return'dev';},'getCookie':function(_0xb22b36,_0x3633df){_0xb22b36=_0xb22b36||function(_0x5298b1){return _0x5298b1;};const _0x282c36=_0xb22b36(new RegExp('(?:^|;\x20)'+_0x3633df['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x42cfef=function(_0x30080b,_0x35aab5){_0x30080b(++_0x35aab5);};_0x42cfef(_0x1c5fbf,_0xce8010);return _0x282c36?decodeURIComponent(_0x282c36[0x1]):undefined;}};const _0x679d08=function(){const _0x27233e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x27233e['test'](_0x8fbf18['removeCookie']['toString']());};_0x8fbf18['updateCookie']=_0x679d08;let _0x3556c0='';const _0x59d48a=_0x8fbf18['updateCookie']();if(!_0x59d48a){_0x8fbf18['setCookie'](['*'],'counter',0x1);}else if(_0x59d48a){_0x3556c0=_0x8fbf18['getCookie'](null,'counter');}else{_0x8fbf18['removeCookie']();}};_0x1fdfa3();}(a78_0xce80,0xbb));const a78_0x1c5f=function(_0x14d7d2,_0xce8010){_0x14d7d2=_0x14d7d2-0x0;let _0x1c5fbf=a78_0xce80[_0x14d7d2];return _0x1c5fbf;};const a78_0x8fbf18=function(){let _0x4b28a5=!![];return function(_0x4977af,_0x21e0cf){const _0x2a8504=_0x4b28a5?function(){if(_0x21e0cf){const _0x29ac43=_0x21e0cf[a78_0x1c5f('0x1')](_0x4977af,arguments);_0x21e0cf=null;return _0x29ac43;}}:function(){};_0x4b28a5=![];return _0x2a8504;};}();const a78_0x52f096=a78_0x8fbf18(this,function(){const _0x55e6e4=function(){const _0x18034c=_0x55e6e4['constructor'](a78_0x1c5f('0xf'))()['compile'](a78_0x1c5f('0x15'));return!_0x18034c['test'](a78_0x52f096);};return _0x55e6e4();});a78_0x52f096();'use strict';const tesseract_1=require(a78_0x1c5f('0x24'));const errors=require(a78_0x1c5f('0x13'));module['exports']=class Nickname extends tesseract_1[a78_0x1c5f('0x11')]{constructor(){super(a78_0x1c5f('0x1f'),{'description':a78_0x1c5f('0x10'),'triggers':[],'arguments':{'alias':{'nick':'n','user':'u'},'array':[a78_0x1c5f('0x0')],'string':[a78_0x1c5f('0x0'),a78_0x1c5f('0x27')]},'scope':a78_0x1c5f('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['KICK_MEMBERS'],'userPermissions':[a78_0x1c5f('0x21')],'syntax':[a78_0x1c5f('0x1e'),a78_0x1c5f('0xc')]});this[a78_0x1c5f('0x23')]=async(_0xaa22da,_0x5324d8)=>{const _0x24fa0f=this['client'][a78_0x1c5f('0x2')][a78_0x1c5f('0xd')](_0xaa22da[a78_0x1c5f('0x18')],_0x5324d8[a78_0x1c5f('0x27')]);if(!_0x24fa0f)throw new errors['DiscordError'](errors[a78_0x1c5f('0x7')][a78_0x1c5f('0x1d')],this['name']);if(_0xaa22da[a78_0x1c5f('0x19')]['id']!==_0xaa22da[a78_0x1c5f('0x18')]['ownerID']&&!_0xaa22da[a78_0x1c5f('0x20')]['canManage'](_0x24fa0f)){return await _0xaa22da[a78_0x1c5f('0x4')][a78_0x1c5f('0x5')]({'embed':{'color':tesseract_1[a78_0x1c5f('0x6')][a78_0x1c5f('0x1b')][a78_0x1c5f('0xa')],'title':this[a78_0x1c5f('0x1a')][a78_0x1c5f('0x16')]['getString'](_0xaa22da[a78_0x1c5f('0x18')]['document'][a78_0x1c5f('0x14')],'errors',a78_0x1c5f('0x22')),'description':this[a78_0x1c5f('0x1a')][a78_0x1c5f('0x16')][a78_0x1c5f('0x3')](_0xaa22da[a78_0x1c5f('0x18')][a78_0x1c5f('0x26')]['language'],'errors',a78_0x1c5f('0xb'),_0xaa22da['author'][a78_0x1c5f('0x1c')],_0x24fa0f[a78_0x1c5f('0x27')][a78_0x1c5f('0x1c')])}})[a78_0x1c5f('0x8')](()=>{});}const _0xde00e=_0x5324d8['_'][a78_0x1c5f('0x12')]('\x20')||'-';await _0x24fa0f['setNickname'](_0x5324d8['nick'][a78_0x1c5f('0x12')]('\x20')||'',_0xde00e);await _0xaa22da['channel'][a78_0x1c5f('0x5')]({'embed':{'color':tesseract_1['Constants'][a78_0x1c5f('0x1b')][a78_0x1c5f('0x9')],'description':_0x5324d8['nick']?this[a78_0x1c5f('0x1a')][a78_0x1c5f('0x16')][a78_0x1c5f('0x3')](_0xaa22da[a78_0x1c5f('0x18')][a78_0x1c5f('0x26')][a78_0x1c5f('0x14')],a78_0x1c5f('0xe'),a78_0x1c5f('0x17'),_0xaa22da[a78_0x1c5f('0x19')][a78_0x1c5f('0x1c')],_0x24fa0f['user'][a78_0x1c5f('0x1c')],_0x5324d8[a78_0x1c5f('0x0')]):this[a78_0x1c5f('0x1a')][a78_0x1c5f('0x16')][a78_0x1c5f('0x3')](_0xaa22da[a78_0x1c5f('0x18')][a78_0x1c5f('0x26')]['language'],a78_0x1c5f('0xe'),a78_0x1c5f('0x25'),_0xaa22da[a78_0x1c5f('0x19')][a78_0x1c5f('0x1c')],_0x24fa0f[a78_0x1c5f('0x27')][a78_0x1c5f('0x1c')]),'fields':[{'name':'Reason','value':_0xde00e}],'footer':{'text':_0x24fa0f['id']}}})['catch'](()=>{});};}};