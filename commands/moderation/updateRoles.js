const a83_0x19dc=['compile','updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','updateRoles','channel','Constants','ownerID','language','Command','canManage','resolveRoles','guild','constructor','apply','map','It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','unauthorized','rolePosition','locale','length','catch','add','member','getString','name','exports','author','exec','remove','tag','comparePositionTo','highest','MANAGE_ROLES','```','client','toBulletList','RED','COLORS','send','filter','document','../../utils/arrays','join','INVALID_COMMAND_SYNTAX','roles','memberRoleUpdate','resolver','test','errors','removeAll','info','set','@bastion/tesseract','BASTION_ERROR_TYPE','user','resolveGuildMember','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x5bcd30,_0x19dcb9){const _0x3f6db6=function(_0x2537da){while(--_0x2537da){_0x5bcd30['push'](_0x5bcd30['shift']());}};const _0x7f2c94=function(){const _0x4d9212={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55a5fb,_0x2a2635,_0x28602e,_0x16c8ea){_0x16c8ea=_0x16c8ea||{};let _0x7cd51c=_0x2a2635+'='+_0x28602e;let _0x3e4fdf=0x0;for(let _0x48ffc2=0x0,_0x3b0242=_0x55a5fb['length'];_0x48ffc2<_0x3b0242;_0x48ffc2++){const _0x178762=_0x55a5fb[_0x48ffc2];_0x7cd51c+=';\x20'+_0x178762;const _0x343e2f=_0x55a5fb[_0x178762];_0x55a5fb['push'](_0x343e2f);_0x3b0242=_0x55a5fb['length'];if(_0x343e2f!==!![]){_0x7cd51c+='='+_0x343e2f;}}_0x16c8ea['cookie']=_0x7cd51c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x173f69,_0xf7e96d){_0x173f69=_0x173f69||function(_0x2a620e){return _0x2a620e;};const _0x4806a9=_0x173f69(new RegExp('(?:^|;\x20)'+_0xf7e96d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x428a18=function(_0x427528,_0xb18180){_0x427528(++_0xb18180);};_0x428a18(_0x3f6db6,_0x19dcb9);return _0x4806a9?decodeURIComponent(_0x4806a9[0x1]):undefined;}};const _0x5ea456=function(){const _0x4b302f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b302f['test'](_0x4d9212['removeCookie']['toString']());};_0x4d9212['updateCookie']=_0x5ea456;let _0x67f506='';const _0x8cf0f8=_0x4d9212['updateCookie']();if(!_0x8cf0f8){_0x4d9212['setCookie'](['*'],'counter',0x1);}else if(_0x8cf0f8){_0x67f506=_0x4d9212['getCookie'](null,'counter');}else{_0x4d9212['removeCookie']();}};_0x7f2c94();}(a83_0x19dc,0x1e6));const a83_0x3f6d=function(_0x5bcd30,_0x19dcb9){_0x5bcd30=_0x5bcd30-0x0;let _0x3f6db6=a83_0x19dc[_0x5bcd30];return _0x3f6db6;};const a83_0x4d9212=function(){let _0xf2dc4e=!![];return function(_0x4d5988,_0x1f8078){const _0x28d127=_0xf2dc4e?function(){if(_0x1f8078){const _0x3a1bb9=_0x1f8078[a83_0x3f6d('0x1e')](_0x4d5988,arguments);_0x1f8078=null;return _0x3a1bb9;}}:function(){};_0xf2dc4e=![];return _0x28d127;};}();const a83_0x2537da=a83_0x4d9212(this,function(){const _0x1e5a89=function(){const _0x1bb822=_0x1e5a89[a83_0x3f6d('0x1d')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a83_0x3f6d('0x12')](a83_0x3f6d('0x11'));return!_0x1bb822[a83_0x3f6d('0x8')](a83_0x2537da);};return _0x1e5a89();});a83_0x2537da();'use strict';const tesseract_1=require(a83_0x3f6d('0xd'));const arrays=require(a83_0x3f6d('0x2'));const errors=require('../../utils/errors');module[a83_0x3f6d('0x2a')]=class UpdateRoles extends tesseract_1[a83_0x3f6d('0x19')]{constructor(){super(a83_0x3f6d('0x14'),{'description':a83_0x3f6d('0x20'),'triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':[a83_0x3f6d('0x26'),'remove'],'boolean':[a83_0x3f6d('0xa')],'string':[a83_0x3f6d('0x26'),a83_0x3f6d('0x2d'),a83_0x3f6d('0xf')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a83_0x3f6d('0x31')],'userPermissions':[a83_0x3f6d('0x31')],'syntax':[a83_0x3f6d('0x13'),'updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','updateRoles\x20--user\x20USER_ID\x20--remove-all']});this[a83_0x3f6d('0x2c')]=async(_0x55e0e6,_0x382cd2)=>{const _0x455084=this[a83_0x3f6d('0x33')][a83_0x3f6d('0x7')][a83_0x3f6d('0x10')](_0x55e0e6[a83_0x3f6d('0x1c')],_0x382cd2['user']);let _0x3a640e=this[a83_0x3f6d('0x33')]['resolver'][a83_0x3f6d('0x1b')](_0x55e0e6[a83_0x3f6d('0x1c')],_0x382cd2[a83_0x3f6d('0x26')]);let _0x19be03=this['client']['resolver']['resolveRoles'](_0x55e0e6['guild'],_0x382cd2['remove']);if(!_0x455084||!_0x3a640e[a83_0x3f6d('0x24')]&&!_0x19be03[a83_0x3f6d('0x24')])throw new errors['DiscordError'](errors[a83_0x3f6d('0xe')][a83_0x3f6d('0x4')],this[a83_0x3f6d('0x29')]);if(_0x55e0e6['author']['id']!==_0x55e0e6[a83_0x3f6d('0x1c')][a83_0x3f6d('0x17')]&&_0x55e0e6['member'][a83_0x3f6d('0x1a')](_0x455084)){_0x3a640e=_0x3a640e[a83_0x3f6d('0x0')](_0xc1f6f=>_0x55e0e6[a83_0x3f6d('0x27')][a83_0x3f6d('0x5')][a83_0x3f6d('0x30')][a83_0x3f6d('0x2f')](_0xc1f6f)>0x0);_0x19be03=_0x19be03[a83_0x3f6d('0x0')](_0x5144af=>_0x55e0e6[a83_0x3f6d('0x27')]['roles'][a83_0x3f6d('0x30')]['comparePositionTo'](_0x5144af)>0x0);if(!_0x3a640e[a83_0x3f6d('0x24')]&&!_0x19be03[a83_0x3f6d('0x24')]){return await _0x55e0e6[a83_0x3f6d('0x15')]['send']({'embed':{'color':tesseract_1[a83_0x3f6d('0x16')][a83_0x3f6d('0x36')][a83_0x3f6d('0x35')],'title':this['client'][a83_0x3f6d('0x23')][a83_0x3f6d('0x28')](_0x55e0e6[a83_0x3f6d('0x1c')][a83_0x3f6d('0x1')][a83_0x3f6d('0x18')],a83_0x3f6d('0x9'),a83_0x3f6d('0x21')),'description':this[a83_0x3f6d('0x33')][a83_0x3f6d('0x23')]['getString'](_0x55e0e6[a83_0x3f6d('0x1c')][a83_0x3f6d('0x1')][a83_0x3f6d('0x18')],'errors',a83_0x3f6d('0x22'),_0x55e0e6['author'][a83_0x3f6d('0x2e')],_0x455084[a83_0x3f6d('0xf')][a83_0x3f6d('0x2e')])}})[a83_0x3f6d('0x25')](()=>{});}}const _0x373324=_0x382cd2['_'][a83_0x3f6d('0x3')]('\x20')||'-';if(_0x3a640e[a83_0x3f6d('0x24')])await _0x455084[a83_0x3f6d('0x5')][a83_0x3f6d('0x26')](_0x3a640e,_0x373324);if(_0x382cd2['removeAll'])await _0x455084[a83_0x3f6d('0x5')][a83_0x3f6d('0xc')]([],_0x373324);else if(_0x19be03[a83_0x3f6d('0x24')])await _0x455084[a83_0x3f6d('0x5')][a83_0x3f6d('0x2d')](_0x19be03,_0x373324);await _0x55e0e6['channel'][a83_0x3f6d('0x37')]({'embed':{'color':tesseract_1['Constants']['COLORS']['ORANGE'],'description':this[a83_0x3f6d('0x33')][a83_0x3f6d('0x23')]['getString'](_0x55e0e6['guild'][a83_0x3f6d('0x1')][a83_0x3f6d('0x18')],a83_0x3f6d('0xb'),a83_0x3f6d('0x6'),_0x55e0e6[a83_0x3f6d('0x2b')][a83_0x3f6d('0x2e')],_0x455084[a83_0x3f6d('0xf')][a83_0x3f6d('0x2e')]),'fields':[{'name':'Role\x20Changes','value':'```diff\x0a'+arrays[a83_0x3f6d('0x34')](_0x3a640e['map'](_0x922439=>_0x922439[a83_0x3f6d('0x29')]),'+')+arrays[a83_0x3f6d('0x34')](_0x19be03[a83_0x3f6d('0x1f')](_0xf88b5e=>_0xf88b5e[a83_0x3f6d('0x29')]),'-')+a83_0x3f6d('0x32')},{'name':'Reason','value':_0x373324}],'footer':{'text':_0x455084['id']}}})[a83_0x3f6d('0x25')](()=>{});};}};