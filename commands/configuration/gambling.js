const a18_0x5b18=['BASTION_ERROR_TYPE','document','fetchPremiumTier','save','getString','PREMIUM_MEMBERSHIP_REQUIRED','exec','author','../../utils/errors','info','catch','@bastion/tesseract','errors','toString','gambling\x20--multiplier\x201..13','gamblingDisable','channel','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','test','MANAGE_GUILD','Constants','gambling','client','enabled','number','premiumGamblingMultiplier','GREEN','compile','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','tag','language','DiscordError','../../utils/constants','COLORS','locale','isPublicBastion','exports','guild','multiplier','apply','Gambling\x20Reward\x20Multiplier','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','user'];(function(_0x4cc794,_0x5b18a1){const _0x318ea0=function(_0x653f){while(--_0x653f){_0x4cc794['push'](_0x4cc794['shift']());}};const _0x4bbda7=function(){const _0x22a728={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x440296,_0x147b32,_0x26d430,_0x935443){_0x935443=_0x935443||{};let _0x25b24d=_0x147b32+'='+_0x26d430;let _0xa40cb=0x0;for(let _0xcd94bb=0x0,_0x4b180a=_0x440296['length'];_0xcd94bb<_0x4b180a;_0xcd94bb++){const _0x139b47=_0x440296[_0xcd94bb];_0x25b24d+=';\x20'+_0x139b47;const _0x3d75d2=_0x440296[_0x139b47];_0x440296['push'](_0x3d75d2);_0x4b180a=_0x440296['length'];if(_0x3d75d2!==!![]){_0x25b24d+='='+_0x3d75d2;}}_0x935443['cookie']=_0x25b24d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x54f512,_0x7b55d9){_0x54f512=_0x54f512||function(_0x1735df){return _0x1735df;};const _0x49f2a1=_0x54f512(new RegExp('(?:^|;\x20)'+_0x7b55d9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x206409=function(_0x1937a6,_0x2cbf4d){_0x1937a6(++_0x2cbf4d);};_0x206409(_0x318ea0,_0x5b18a1);return _0x49f2a1?decodeURIComponent(_0x49f2a1[0x1]):undefined;}};const _0x5a09be=function(){const _0x43b592=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x43b592['test'](_0x22a728['removeCookie']['toString']());};_0x22a728['updateCookie']=_0x5a09be;let _0x234a74='';const _0x2bbfdf=_0x22a728['updateCookie']();if(!_0x2bbfdf){_0x22a728['setCookie'](['*'],'counter',0x1);}else if(_0x2bbfdf){_0x234a74=_0x22a728['getCookie'](null,'counter');}else{_0x22a728['removeCookie']();}};_0x4bbda7();}(a18_0x5b18,0x1a6));const a18_0x318e=function(_0x4cc794,_0x5b18a1){_0x4cc794=_0x4cc794-0x0;let _0x318ea0=a18_0x5b18[_0x4cc794];return _0x318ea0;};const a18_0x22a728=function(){let _0x1dec63=!![];return function(_0x3c4dde,_0x1b19a1){const _0x4a5141=_0x1dec63?function(){if(_0x1b19a1){const _0x48631f=_0x1b19a1[a18_0x318e('0x17')](_0x3c4dde,arguments);_0x1b19a1=null;return _0x48631f;}}:function(){};_0x1dec63=![];return _0x4a5141;};}();const a18_0x653f=a18_0x22a728(this,function(){const _0x4e1b82=function(){const _0x5ac614=_0x4e1b82[a18_0x318e('0xc')](a18_0x318e('0xb'))()[a18_0x318e('0xa')](a18_0x318e('0x1a'));return!_0x5ac614[a18_0x318e('0x1')](a18_0x653f);};return _0x4e1b82();});a18_0x653f();'use strict';const tesseract_1=require(a18_0x318e('0x27'));const constants=require(a18_0x318e('0x10'));const errors=require(a18_0x318e('0x24'));const omnic=require('../../utils/omnic');module[a18_0x318e('0x14')]=class GamblingCommand extends tesseract_1[a18_0x318e('0x19')]{constructor(){super('gambling',{'description':a18_0x318e('0x0'),'triggers':[],'arguments':{'number':[a18_0x318e('0x16')]},'scope':a18_0x318e('0x15'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a18_0x318e('0x2')],'syntax':[a18_0x318e('0x4'),a18_0x318e('0x2a')]});this[a18_0x318e('0x22')]=async(_0x56a782,_0xa461ea)=>{if(_0xa461ea[a18_0x318e('0x16')]&&constants[a18_0x318e('0x13')](this['client'][a18_0x318e('0x1b')])){const _0x51340d=await omnic[a18_0x318e('0x1e')](_0x56a782[a18_0x318e('0x15')])['catch'](()=>{});if(!_0x51340d)throw new errors[(a18_0x318e('0xf'))](errors[a18_0x318e('0x1c')][a18_0x318e('0x21')],this[a18_0x318e('0x5')][a18_0x318e('0x12')][a18_0x318e('0x20')](_0x56a782[a18_0x318e('0x15')][a18_0x318e('0x1d')][a18_0x318e('0xe')],a18_0x318e('0x28'),a18_0x318e('0x8')));}const _0x91e427=_0x56a782['guild'];const _0x3c4197=_0xa461ea[a18_0x318e('0x16')]?!![]:!(_0x91e427['document']['gambling']&&_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')][a18_0x318e('0x6')]);_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')]={'enabled':_0x3c4197,'multiplier':typeof _0xa461ea[a18_0x318e('0x16')]===a18_0x318e('0x7')?_0xa461ea[a18_0x318e('0x16')]:_0x3c4197?_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')]&&_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')][a18_0x318e('0x16')]:undefined};await _0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x1f')]();await _0x56a782[a18_0x318e('0x2c')]['send']({'embed':{'color':_0x91e427[a18_0x318e('0x1d')]['gambling'][a18_0x318e('0x6')]?tesseract_1['Constants'][a18_0x318e('0x11')][a18_0x318e('0x9')]:tesseract_1[a18_0x318e('0x3')][a18_0x318e('0x11')]['RED'],'description':this[a18_0x318e('0x5')][a18_0x318e('0x12')][a18_0x318e('0x20')](_0x56a782[a18_0x318e('0x15')][a18_0x318e('0x1d')][a18_0x318e('0xe')],a18_0x318e('0x25'),_0x91e427[a18_0x318e('0x1d')]['gambling'][a18_0x318e('0x6')]?'gamblingEnable':a18_0x318e('0x2b'),_0x56a782[a18_0x318e('0x23')][a18_0x318e('0xd')]),'fields':_0x91e427['document']['gambling']['enabled']?[{'name':a18_0x318e('0x18'),'value':_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')][a18_0x318e('0x16')]?_0x91e427[a18_0x318e('0x1d')][a18_0x318e('0x4')]['multiplier'][a18_0x318e('0x29')]():0x1[a18_0x318e('0x29')](),'inline':!![]}]:[]}})[a18_0x318e('0x26')](()=>{});};}};