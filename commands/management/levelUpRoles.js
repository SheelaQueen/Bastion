const a65_0x1dd5=['remove','apply','BASTION_ERROR_TYPE','ROLE_LEVELS','Level\x20','default','GOLD','NO_LEVEL_UP_ROLES','ROLE_NOT_FOUND','length','Constants','user','get','LIMITED_PREMIUM_MEMBERSHIP','resolveRoles','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','locale','../../utils/omnic','fetchPremiumTier','fetchDocument','DiscordError','levelUpRoles\x20--level\x20NUMBER\x20--remove','getString','Command','test','levelUpRoles','IRIS','LIMITS','../../utils/gamification','../../models/Role','send','channel','errors','MANAGE_ROLES','MAX_LEVEL','roles','updateMany','keys','join','language','exports','countDocuments','error','map','author','ROLES_PER_LEVEL','distinct','find','client','name','exec','_id','constructor','@bastion/tesseract','compile','premiumLevelRoles','resolveRole','PREMIUM_MEMBERSHIP_REQUIRED','NO_ROLES_FOR_LEVEL','guild','save','PLATINUM','catch','isPublicBastion','cache','document','role','../../utils/errors','COLORS','PremiumTier','membershipLimitRoleLevels','RED','level','Roles','push','roleNotFound','has','tag','roleLevelClear','clamp','../../utils/constants'];(function(_0x1bcdb8,_0x1dd5bd){const _0x4a4143=function(_0x567821){while(--_0x567821){_0x1bcdb8['push'](_0x1bcdb8['shift']());}};const _0x5bf20f=function(){const _0x3a4050={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x52d763,_0x332b1e,_0x4533b8,_0x960356){_0x960356=_0x960356||{};let _0x130682=_0x332b1e+'='+_0x4533b8;let _0x20c651=0x0;for(let _0x3b4f1c=0x0,_0x28f214=_0x52d763['length'];_0x3b4f1c<_0x28f214;_0x3b4f1c++){const _0x3c3fa3=_0x52d763[_0x3b4f1c];_0x130682+=';\x20'+_0x3c3fa3;const _0x5e0462=_0x52d763[_0x3c3fa3];_0x52d763['push'](_0x5e0462);_0x28f214=_0x52d763['length'];if(_0x5e0462!==!![]){_0x130682+='='+_0x5e0462;}}_0x960356['cookie']=_0x130682;},'removeCookie':function(){return'dev';},'getCookie':function(_0x32251f,_0x18b4ea){_0x32251f=_0x32251f||function(_0x5334cf){return _0x5334cf;};const _0x1b4e5d=_0x32251f(new RegExp('(?:^|;\x20)'+_0x18b4ea['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x637f64=function(_0x38ae82,_0xc077f7){_0x38ae82(++_0xc077f7);};_0x637f64(_0x4a4143,_0x1dd5bd);return _0x1b4e5d?decodeURIComponent(_0x1b4e5d[0x1]):undefined;}};const _0x1bff2b=function(){const _0x211638=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x211638['test'](_0x3a4050['removeCookie']['toString']());};_0x3a4050['updateCookie']=_0x1bff2b;let _0x576d4a='';const _0x2dbca0=_0x3a4050['updateCookie']();if(!_0x2dbca0){_0x3a4050['setCookie'](['*'],'counter',0x1);}else if(_0x2dbca0){_0x576d4a=_0x3a4050['getCookie'](null,'counter');}else{_0x3a4050['removeCookie']();}};_0x5bf20f();}(a65_0x1dd5,0xd8));const a65_0x4a41=function(_0x1bcdb8,_0x1dd5bd){_0x1bcdb8=_0x1bcdb8-0x0;let _0x4a4143=a65_0x1dd5[_0x1bcdb8];return _0x4a4143;};const a65_0x3a4050=function(){let _0x12f88c=!![];return function(_0x2df03e,_0x143c19){const _0x567193=_0x12f88c?function(){if(_0x143c19){const _0x5248ac=_0x143c19[a65_0x4a41('0x1c')](_0x2df03e,arguments);_0x143c19=null;return _0x5248ac;}}:function(){};_0x12f88c=![];return _0x567193;};}();const a65_0x567821=a65_0x3a4050(this,function(){const _0x4512dd=function(){const _0x3dd4d9=_0x4512dd[a65_0x4a41('0x4f')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a65_0x4a41('0x0')](a65_0x4a41('0x2a'));return!_0x3dd4d9[a65_0x4a41('0x33')](a65_0x567821);};return _0x4512dd();});a65_0x567821();'use strict';const tesseract_1=require(a65_0x4a41('0x50'));const Role_1=require(a65_0x4a41('0x38'));const constants=require(a65_0x4a41('0x1a'));const errors=require(a65_0x4a41('0xd'));const gamification=require(a65_0x4a41('0x37'));const numbers=require('../../utils/numbers');const omnic=require(a65_0x4a41('0x2c'));module[a65_0x4a41('0x43')]=class LevelUpRolesCommand extends tesseract_1[a65_0x4a41('0x32')]{constructor(){super(a65_0x4a41('0x34'),{'description':'It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','triggers':[],'arguments':{'array':[a65_0x4a41('0xc')],'boolean':[a65_0x4a41('0x1b')],'string':[a65_0x4a41('0xc')],'number':[a65_0x4a41('0x12')],'coerce':{'level':_0x397a75=>numbers[a65_0x4a41('0x19')](_0x397a75,0x1,gamification[a65_0x4a41('0x3d')])}},'scope':a65_0x4a41('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a65_0x4a41('0x3c')],'userPermissions':[a65_0x4a41('0x3c')],'syntax':['levelUpRoles','levelUpRoles\x20--level\x20NUMBER','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE',a65_0x4a41('0x30')]});this[a65_0x4a41('0x4d')]=async(_0x579946,_0x180bcc)=>{if(_0x180bcc[a65_0x4a41('0x12')]){if(_0x180bcc[a65_0x4a41('0xc')]){if(constants[a65_0x4a41('0x9')](this[a65_0x4a41('0x4b')][a65_0x4a41('0x26')])){const _0x56e7b6=await omnic[a65_0x4a41('0x2d')](_0x579946[a65_0x4a41('0x5')])[a65_0x4a41('0x8')](()=>{});const _0x20bb7f=await Role_1[a65_0x4a41('0x20')][a65_0x4a41('0x49')]('level',{'guild':_0x579946[a65_0x4a41('0x5')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x56e7b6){if(_0x56e7b6===omnic[a65_0x4a41('0xf')][a65_0x4a41('0x21')]&&_0x20bb7f['length']>=constants[a65_0x4a41('0x36')]['GOLD'][a65_0x4a41('0x1e')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')][a65_0x4a41('0x28')],this[a65_0x4a41('0x4b')][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0xb')]['language'],a65_0x4a41('0x3b'),a65_0x4a41('0x10'),constants[a65_0x4a41('0x36')][a65_0x4a41('0x21')][a65_0x4a41('0x1e')]));}else if(_0x56e7b6===omnic['PremiumTier'][a65_0x4a41('0x7')]&&_0x20bb7f[a65_0x4a41('0x24')]>=constants[a65_0x4a41('0x36')]['PLATINUM'][a65_0x4a41('0x1e')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')][a65_0x4a41('0x28')],this[a65_0x4a41('0x4b')][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0xb')][a65_0x4a41('0x42')],a65_0x4a41('0x3b'),'membershipLimitRoleLevels',constants[a65_0x4a41('0x36')][a65_0x4a41('0x7')][a65_0x4a41('0x1e')]));}}else if(_0x20bb7f[a65_0x4a41('0x24')]>=constants[a65_0x4a41('0x36')][a65_0x4a41('0x1e')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')][a65_0x4a41('0x3')],this['client'][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946['guild'][a65_0x4a41('0xb')]['language'],'errors','premiumRoleLevels',constants[a65_0x4a41('0x36')][a65_0x4a41('0x1e')]));}const _0x396cea=await Role_1['default'][a65_0x4a41('0x44')]({'guild':_0x579946[a65_0x4a41('0x5')]['id'],'level':_0x180bcc[a65_0x4a41('0x12')]});if(_0x56e7b6){if(_0x56e7b6===omnic[a65_0x4a41('0xf')][a65_0x4a41('0x21')]&&_0x396cea>=constants[a65_0x4a41('0x36')][a65_0x4a41('0x21')][a65_0x4a41('0x48')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')][a65_0x4a41('0x28')],this[a65_0x4a41('0x4b')][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946[a65_0x4a41('0x5')]['document'][a65_0x4a41('0x42')],a65_0x4a41('0x3b'),'membershipLimitLevelRoles',constants['LIMITS']['GOLD']['ROLES_PER_LEVEL']));}else if(_0x56e7b6===omnic['PremiumTier']['PLATINUM']&&_0x396cea>=constants[a65_0x4a41('0x36')][a65_0x4a41('0x7')][a65_0x4a41('0x48')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')][a65_0x4a41('0x28')],this['client'][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946['guild'][a65_0x4a41('0xb')][a65_0x4a41('0x42')],'errors','membershipLimitLevelRoles',constants[a65_0x4a41('0x36')][a65_0x4a41('0x7')][a65_0x4a41('0x48')]));}}else if(_0x396cea>=constants[a65_0x4a41('0x36')][a65_0x4a41('0x48')]){throw new errors[(a65_0x4a41('0x2f'))](errors[a65_0x4a41('0x1d')]['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a65_0x4a41('0x2b')]['getString'](_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0xb')][a65_0x4a41('0x42')],a65_0x4a41('0x3b'),a65_0x4a41('0x1'),constants[a65_0x4a41('0x36')][a65_0x4a41('0x48')]));}}const _0x3611f4=this[a65_0x4a41('0x4b')]['resolver'][a65_0x4a41('0x2')](_0x579946['guild'],_0x180bcc[a65_0x4a41('0xc')][a65_0x4a41('0x41')]('\x20'));if(!_0x3611f4)throw new errors[(a65_0x4a41('0x2f'))](errors['BASTION_ERROR_TYPE'][a65_0x4a41('0x23')],this['client'][a65_0x4a41('0x2b')]['getString'](_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0xb')]['language'],a65_0x4a41('0x45'),a65_0x4a41('0x15')));let _0x4784d9=await _0x3611f4[a65_0x4a41('0x2e')]();if(!_0x4784d9){_0x4784d9=await _0x3611f4['createDocument']();}_0x4784d9['level']=_0x180bcc[a65_0x4a41('0x12')];await _0x4784d9[a65_0x4a41('0x6')]();return await _0x579946[a65_0x4a41('0x3a')]['send']({'embed':{'color':tesseract_1['Constants'][a65_0x4a41('0xe')]['GREEN'],'description':this[a65_0x4a41('0x4b')][a65_0x4a41('0x2b')]['getString'](_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0xb')][a65_0x4a41('0x42')],'info','roleLevelAdd',_0x579946[a65_0x4a41('0x47')][a65_0x4a41('0x17')],_0x3611f4[a65_0x4a41('0x4c')],_0x180bcc['level'])}})[a65_0x4a41('0x8')](()=>{});}if(_0x180bcc[a65_0x4a41('0x1b')]){await Role_1[a65_0x4a41('0x20')][a65_0x4a41('0x3f')]({'guild':_0x579946['guild']['id'],'level':_0x180bcc[a65_0x4a41('0x12')]},{'$unset':{'level':0x1}});return await _0x579946[a65_0x4a41('0x3a')][a65_0x4a41('0x39')]({'embed':{'color':tesseract_1[a65_0x4a41('0x25')]['COLORS'][a65_0x4a41('0x11')],'description':this[a65_0x4a41('0x4b')][a65_0x4a41('0x2b')][a65_0x4a41('0x31')](_0x579946['guild'][a65_0x4a41('0xb')]['language'],'info',a65_0x4a41('0x18'),_0x579946[a65_0x4a41('0x47')][a65_0x4a41('0x17')],_0x180bcc['level'])}})[a65_0x4a41('0x8')](()=>{});}const _0x12f592=await Role_1['default'][a65_0x4a41('0x4a')]({'guild':_0x579946[a65_0x4a41('0x5')]['id'],'level':_0x180bcc['level']});if(!_0x12f592[a65_0x4a41('0x24')])throw new Error(a65_0x4a41('0x4'));const _0x12df08=this['client']['resolver'][a65_0x4a41('0x29')](_0x579946[a65_0x4a41('0x5')],_0x12f592[a65_0x4a41('0x46')](_0x7b4327=>_0x7b4327[a65_0x4a41('0x4e')]));return await _0x579946[a65_0x4a41('0x3a')]['send']({'embed':{'color':tesseract_1[a65_0x4a41('0x25')][a65_0x4a41('0xe')][a65_0x4a41('0x35')],'title':'Level\x20'+_0x180bcc[a65_0x4a41('0x12')],'fields':[{'name':a65_0x4a41('0x13'),'value':_0x12df08[a65_0x4a41('0x46')](_0x3bd99c=>_0x3bd99c[a65_0x4a41('0x4c')])[a65_0x4a41('0x41')]('\x0a')}]}})[a65_0x4a41('0x8')](()=>{});}const _0x4d9e9f=await Role_1[a65_0x4a41('0x20')][a65_0x4a41('0x4a')]({'guild':_0x579946[a65_0x4a41('0x5')]['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x4d9e9f[a65_0x4a41('0x24')])throw new Error(a65_0x4a41('0x22'));const _0x35d094={};for(const _0x43cbaa of _0x4d9e9f){if(_0x43cbaa[a65_0x4a41('0x12')]in _0x35d094){_0x35d094[_0x43cbaa[a65_0x4a41('0x12')]][a65_0x4a41('0x14')](_0x43cbaa[a65_0x4a41('0x4e')]);}else{_0x35d094[_0x43cbaa['level']]=[_0x43cbaa['_id']];}}return await _0x579946['channel']['send']({'embed':{'color':tesseract_1['Constants'][a65_0x4a41('0xe')][a65_0x4a41('0x35')],'title':'Level-Up\x20Roles','fields':Object[a65_0x4a41('0x40')](_0x35d094)[a65_0x4a41('0x46')](_0xeb216e=>({'name':a65_0x4a41('0x1f')+_0xeb216e,'value':_0x35d094[_0xeb216e]['map'](_0xe69442=>_0x579946[a65_0x4a41('0x5')][a65_0x4a41('0x3e')][a65_0x4a41('0xa')][a65_0x4a41('0x16')](_0xe69442)?_0x579946[a65_0x4a41('0x5')]['roles'][a65_0x4a41('0xa')][a65_0x4a41('0x27')](_0xe69442)[a65_0x4a41('0x4c')]:_0xe69442)[a65_0x4a41('0x41')](',\x20')}))}})[a65_0x4a41('0x8')](()=>{});};}};