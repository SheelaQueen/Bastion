const a3_0x5cda=['Command\x20Module','guild','errors','BASTION_ERROR_TYPE','length','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','RED','GREEN','volatileCommandEnable','exec','manager','catch','DiscordError','author','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','commandDisabled','toLowerCase','locale','Constants','enable','commandEnabled','send','../../utils/errors','commandModule','command','language','commandModule\x20COMMAND\x20--disable','commandModule\x20COMMAND\x20--enable','commandModule\x20COMMAND','PUPIL','modules','tag','enabled','Command','name','document','ERROR','It\x20allows\x20you\x20to\x20temporarily\x20enable\x20or\x20disable\x20a\x20command\x20module\x20until\x20the\x20next\x20restart.\x20It\x20also\x20allows\x20you\x20to\x20check\x20whether\x20the\x20command\x20is\x20currently\x20enabled.','commandNotFound','channel','@bastion/tesseract','client','find','COLORS','disable'];(function(_0x49ecc9,_0x5cda90){const _0x26d61a=function(_0x524925){while(--_0x524925){_0x49ecc9['push'](_0x49ecc9['shift']());}};const _0x480984=function(){const _0x3b31cc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x14ffc2,_0x5144b7,_0x2d99b7,_0x4e8bb2){_0x4e8bb2=_0x4e8bb2||{};let _0x4287d6=_0x5144b7+'='+_0x2d99b7;let _0x44eff2=0x0;for(let _0xf432df=0x0,_0x39654a=_0x14ffc2['length'];_0xf432df<_0x39654a;_0xf432df++){const _0x1d1ee4=_0x14ffc2[_0xf432df];_0x4287d6+=';\x20'+_0x1d1ee4;const _0x14d558=_0x14ffc2[_0x1d1ee4];_0x14ffc2['push'](_0x14d558);_0x39654a=_0x14ffc2['length'];if(_0x14d558!==!![]){_0x4287d6+='='+_0x14d558;}}_0x4e8bb2['cookie']=_0x4287d6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14a4ca,_0x111a86){_0x14a4ca=_0x14a4ca||function(_0xce8315){return _0xce8315;};const _0x5e541f=_0x14a4ca(new RegExp('(?:^|;\x20)'+_0x111a86['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x242453=function(_0xa27376,_0x3aac76){_0xa27376(++_0x3aac76);};_0x242453(_0x26d61a,_0x5cda90);return _0x5e541f?decodeURIComponent(_0x5e541f[0x1]):undefined;}};const _0x469a0d=function(){const _0x17e48d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x17e48d['test'](_0x3b31cc['removeCookie']['toString']());};_0x3b31cc['updateCookie']=_0x469a0d;let _0x332359='';const _0x263c02=_0x3b31cc['updateCookie']();if(!_0x263c02){_0x3b31cc['setCookie'](['*'],'counter',0x1);}else if(_0x263c02){_0x332359=_0x3b31cc['getCookie'](null,'counter');}else{_0x3b31cc['removeCookie']();}};_0x480984();}(a3_0x5cda,0x19a));const a3_0x26d6=function(_0x49ecc9,_0x5cda90){_0x49ecc9=_0x49ecc9-0x0;let _0x26d61a=a3_0x5cda[_0x49ecc9];return _0x26d61a;};const a3_0x3b31cc=function(){let _0x278f09=!![];return function(_0x2eeb04,_0x204210){const _0x189eee=_0x278f09?function(){if(_0x204210){const _0x17fbce=_0x204210[a3_0x26d6('0x1c')](_0x2eeb04,arguments);_0x204210=null;return _0x17fbce;}}:function(){};_0x278f09=![];return _0x189eee;};}();const a3_0x524925=a3_0x3b31cc(this,function(){const _0x26a70d=function(){const _0x4f1b6d=_0x26a70d[a3_0x26d6('0x25')](a3_0x26d6('0x1b'))()['compile'](a3_0x26d6('0x26'));return!_0x4f1b6d['test'](a3_0x524925);};return _0x26a70d();});a3_0x524925();'use strict';const tesseract_1=require(a3_0x26d6('0x11'));const errors=require(a3_0x26d6('0x2f'));module[a3_0x26d6('0x27')]=class CommandModuleCommand extends tesseract_1[a3_0x26d6('0xa')]{constructor(){super(a3_0x26d6('0x0'),{'description':a3_0x26d6('0xe'),'triggers':[a3_0x26d6('0x1')],'arguments':{'alias':{'disable':['d'],'enable':['e']},'boolean':[a3_0x26d6('0x15'),'enable']},'scope':a3_0x26d6('0x17'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a3_0x26d6('0x5'),a3_0x26d6('0x3'),a3_0x26d6('0x4')]});this[a3_0x26d6('0x20')]=async(_0x38dac5,_0x24a04e)=>{if(!_0x24a04e['_'][a3_0x26d6('0x1a')])throw new errors[(a3_0x26d6('0x23'))](errors[a3_0x26d6('0x19')]['INVALID_COMMAND_SYNTAX'],this[a3_0x26d6('0xb')]);const _0x831e5e=this[a3_0x26d6('0x21')][a3_0x26d6('0x7')][a3_0x26d6('0x13')](_0x831c65=>_0x831c65[a3_0x26d6('0xb')]['toLowerCase']()===_0x24a04e['_']['join']('')[a3_0x26d6('0x29')]());if(!_0x831e5e)throw new errors[(a3_0x26d6('0x23'))](errors[a3_0x26d6('0x19')][a3_0x26d6('0xd')],this[a3_0x26d6('0x12')]['locale']['getString'](_0x38dac5['guild'][a3_0x26d6('0xc')][a3_0x26d6('0x2')],a3_0x26d6('0x18'),a3_0x26d6('0xf')));_0x831e5e[a3_0x26d6('0x9')]=_0x24a04e[a3_0x26d6('0x2c')]?!![]:_0x24a04e['disable']?![]:_0x831e5e[a3_0x26d6('0x9')];await _0x38dac5[a3_0x26d6('0x10')][a3_0x26d6('0x2e')]({'embed':{'color':_0x24a04e['enable']?tesseract_1['Constants'][a3_0x26d6('0x14')][a3_0x26d6('0x1e')]:_0x24a04e[a3_0x26d6('0x15')]?tesseract_1[a3_0x26d6('0x2b')][a3_0x26d6('0x14')][a3_0x26d6('0x1d')]:tesseract_1[a3_0x26d6('0x2b')][a3_0x26d6('0x14')][a3_0x26d6('0x6')],'author':{'name':_0x831e5e['name']},'title':a3_0x26d6('0x16'),'description':this[a3_0x26d6('0x12')][a3_0x26d6('0x2a')]['getString'](_0x38dac5[a3_0x26d6('0x17')][a3_0x26d6('0xc')][a3_0x26d6('0x2')],'info',_0x24a04e[a3_0x26d6('0x2c')]?a3_0x26d6('0x1f'):_0x24a04e[a3_0x26d6('0x15')]?'volatileCommandDisable':_0x831e5e['enabled']?a3_0x26d6('0x2d'):a3_0x26d6('0x28'),_0x38dac5[a3_0x26d6('0x24')][a3_0x26d6('0x8')],_0x831e5e[a3_0x26d6('0xb')])}})[a3_0x26d6('0x22')](()=>{});};}};