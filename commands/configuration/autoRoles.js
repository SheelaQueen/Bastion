const a16_0x4dc1=['premiumAutoRoles','_id','channel','COLORS','Constants','PREMIUM_MEMBERSHIP_REQUIRED','user','isPublicBastion','LIMITS','compile','RED','fetchPremiumTier','findByIdAndUpdate','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','locale','document','autoRolesAdd','autoRoles','cache','GOLD','forUsers','BASTION_ERROR_TYPE','has','roles','membershipLimitAutoRoles','resolveRole','name','info','autoRoles\x20--remove\x20ROLE','getString','autoRoles\x20--add\x20ROLE\x20--user','push','\x20/\x20BOTS','test','constructor','toUpperCase','../../utils/constants','Command','exec','LIMITED_PREMIUM_MEMBERSHIP','apply','author','autoAssignable','roleNotFound','default','find','../../models/Role','guild','PLATINUM','PremiumTier','DiscordError','bot','\x20/\x20HUMANS','For\x20Bots','errors','remove','GREEN','join','send','forBots','resolver','AUTO_ROLES','catch','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','add','language','autoRolesRemove','MANAGE_ROLES','client','Auto\x20Roles','toString'];(function(_0x1ee954,_0x4dc1c7){const _0x3f2402=function(_0x31b839){while(--_0x31b839){_0x1ee954['push'](_0x1ee954['shift']());}};const _0x11809e=function(){const _0x5997a5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x40528b,_0x340257,_0x1d78c3,_0xa84741){_0xa84741=_0xa84741||{};let _0x4b563c=_0x340257+'='+_0x1d78c3;let _0x36699c=0x0;for(let _0x20349f=0x0,_0x5c69b7=_0x40528b['length'];_0x20349f<_0x5c69b7;_0x20349f++){const _0x4977cf=_0x40528b[_0x20349f];_0x4b563c+=';\x20'+_0x4977cf;const _0x574f62=_0x40528b[_0x4977cf];_0x40528b['push'](_0x574f62);_0x5c69b7=_0x40528b['length'];if(_0x574f62!==!![]){_0x4b563c+='='+_0x574f62;}}_0xa84741['cookie']=_0x4b563c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x433e79,_0x41c4d5){_0x433e79=_0x433e79||function(_0x3342cd){return _0x3342cd;};const _0x589541=_0x433e79(new RegExp('(?:^|;\x20)'+_0x41c4d5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4bb603=function(_0x2721a2,_0x117a3e){_0x2721a2(++_0x117a3e);};_0x4bb603(_0x3f2402,_0x4dc1c7);return _0x589541?decodeURIComponent(_0x589541[0x1]):undefined;}};const _0x385a69=function(){const _0x331f29=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x331f29['test'](_0x5997a5['removeCookie']['toString']());};_0x5997a5['updateCookie']=_0x385a69;let _0x4536b0='';const _0x232f78=_0x5997a5['updateCookie']();if(!_0x232f78){_0x5997a5['setCookie'](['*'],'counter',0x1);}else if(_0x232f78){_0x4536b0=_0x5997a5['getCookie'](null,'counter');}else{_0x5997a5['removeCookie']();}};_0x11809e();}(a16_0x4dc1,0xe5));const a16_0x3f24=function(_0x1ee954,_0x4dc1c7){_0x1ee954=_0x1ee954-0x0;let _0x3f2402=a16_0x4dc1[_0x1ee954];return _0x3f2402;};const a16_0x5997a5=function(){let _0x55923d=!![];return function(_0x387a87,_0x37cfc7){const _0x4f67fc=_0x55923d?function(){if(_0x37cfc7){const _0x2e66e1=_0x37cfc7[a16_0x3f24('0x20')](_0x387a87,arguments);_0x37cfc7=null;return _0x2e66e1;}}:function(){};_0x55923d=![];return _0x4f67fc;};}();const a16_0x31b839=a16_0x5997a5(this,function(){const _0x54f845=function(){const _0x5d6882=_0x54f845[a16_0x3f24('0x1a')](a16_0x3f24('0x3'))()[a16_0x3f24('0x48')](a16_0x3f24('0x4'));return!_0x5d6882[a16_0x3f24('0x19')](a16_0x31b839);};return _0x54f845();});a16_0x31b839();'use strict';const tesseract_1=require('@bastion/tesseract');const Role_1=require(a16_0x3f24('0x26'));const constants=require(a16_0x3f24('0x1c'));const errors=require('../../utils/errors');const omnic=require('../../utils/omnic');module['exports']=class AutoRoles extends tesseract_1[a16_0x3f24('0x1d')]{constructor(){super(a16_0x3f24('0x9'),{'description':a16_0x3f24('0x37'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':['add',a16_0x3f24('0x2f')],'boolean':[a16_0x3f24('0x2b'),a16_0x3f24('0x45')],'string':[a16_0x3f24('0x38'),a16_0x3f24('0x2f')]},'scope':a16_0x3f24('0x27'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a16_0x3f24('0x3b')],'userPermissions':[a16_0x3f24('0x3b')],'syntax':['autoRoles','autoRoles\x20--add\x20ROLE','autoRoles\x20--add\x20ROLE\x20--bot',a16_0x3f24('0x16'),a16_0x3f24('0x14')]});this[a16_0x3f24('0x1e')]=async(_0x503e5c,_0x1df586)=>{if(_0x1df586[a16_0x3f24('0x38')]){if(constants[a16_0x3f24('0x46')](this['client'][a16_0x3f24('0x45')])){const _0x3adec5=await Role_1[a16_0x3f24('0x24')]['countDocuments']({'guild':_0x503e5c[a16_0x3f24('0x27')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x3adec5>=constants[a16_0x3f24('0x47')]['AUTO_ROLES']){const _0x462657=await omnic[a16_0x3f24('0x1')](_0x503e5c[a16_0x3f24('0x27')])[a16_0x3f24('0x36')](()=>{});if(_0x462657){if(_0x462657===omnic[a16_0x3f24('0x29')]['GOLD']&&_0x3adec5>=constants[a16_0x3f24('0x47')][a16_0x3f24('0xb')]['AUTO_ROLES']){throw new errors[(a16_0x3f24('0x2a'))](errors['BASTION_ERROR_TYPE'][a16_0x3f24('0x1f')],this[a16_0x3f24('0x3c')]['locale'][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')]['document']['language'],a16_0x3f24('0x2e'),a16_0x3f24('0x10'),constants[a16_0x3f24('0x47')][a16_0x3f24('0xb')]['AUTO_ROLES']));}else if(_0x462657===omnic[a16_0x3f24('0x29')][a16_0x3f24('0x28')]&&_0x3adec5>=constants[a16_0x3f24('0x47')]['PLATINUM'][a16_0x3f24('0x35')]){throw new errors[(a16_0x3f24('0x2a'))](errors[a16_0x3f24('0xd')][a16_0x3f24('0x1f')],this[a16_0x3f24('0x3c')][a16_0x3f24('0x6')][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')][a16_0x3f24('0x7')][a16_0x3f24('0x39')],'errors',a16_0x3f24('0x10'),constants['LIMITS'][a16_0x3f24('0x28')][a16_0x3f24('0x35')]));}}else{throw new errors[(a16_0x3f24('0x2a'))](errors[a16_0x3f24('0xd')][a16_0x3f24('0x44')],this[a16_0x3f24('0x3c')][a16_0x3f24('0x6')]['getString'](_0x503e5c[a16_0x3f24('0x27')][a16_0x3f24('0x7')]['language'],a16_0x3f24('0x2e'),a16_0x3f24('0x3f'),constants[a16_0x3f24('0x47')][a16_0x3f24('0x35')]));}}}const _0x45c964=this[a16_0x3f24('0x3c')][a16_0x3f24('0x34')][a16_0x3f24('0x11')](_0x503e5c[a16_0x3f24('0x27')],_0x1df586[a16_0x3f24('0x38')][a16_0x3f24('0x31')]('\x20'));if(!_0x45c964)throw new errors[(a16_0x3f24('0x2a'))](errors[a16_0x3f24('0xd')]['ROLE_NOT_FOUND'],this[a16_0x3f24('0x3c')][a16_0x3f24('0x6')][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')][a16_0x3f24('0x7')][a16_0x3f24('0x39')],a16_0x3f24('0x2e'),'roleNotFound'));const _0x36f7b6=!(Number(_0x1df586[a16_0x3f24('0x2b')])^Number(_0x1df586['user']))||_0x1df586[a16_0x3f24('0x2b')]||![];const _0x4c4fc3=!(Number(_0x1df586[a16_0x3f24('0x2b')])^Number(_0x1df586[a16_0x3f24('0x45')]))||_0x1df586[a16_0x3f24('0x45')]||![];await Role_1[a16_0x3f24('0x24')][a16_0x3f24('0x2')](_0x45c964['id'],{'_id':_0x45c964['id'],'guild':_0x503e5c['guild']['id'],'autoAssignable':{'forBots':_0x36f7b6,'forUsers':_0x4c4fc3}},{'upsert':!![]});await _0x503e5c['channel']['send']({'embed':{'color':tesseract_1['Constants']['COLORS'][a16_0x3f24('0x30')],'description':this[a16_0x3f24('0x3c')]['locale'][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')]['document'][a16_0x3f24('0x39')],a16_0x3f24('0x13'),a16_0x3f24('0x8'),_0x503e5c[a16_0x3f24('0x21')]['tag'],_0x45c964[a16_0x3f24('0x12')]),'fields':[{'name':a16_0x3f24('0x2d'),'value':_0x36f7b6[a16_0x3f24('0x3e')]()['toUpperCase'](),'inline':!![]},{'name':'For\x20Humans','value':_0x4c4fc3[a16_0x3f24('0x3e')]()[a16_0x3f24('0x1b')](),'inline':!![]}],'footer':{'text':_0x45c964['id']}}})[a16_0x3f24('0x36')](()=>{});}else if(_0x1df586['remove']){const _0x336bd2=this[a16_0x3f24('0x3c')][a16_0x3f24('0x34')][a16_0x3f24('0x11')](_0x503e5c['guild'],_0x1df586[a16_0x3f24('0x2f')]['join']('\x20'));if(!_0x336bd2)throw new errors['DiscordError'](errors[a16_0x3f24('0xd')]['ROLE_NOT_FOUND'],this['client'][a16_0x3f24('0x6')][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')]['document'][a16_0x3f24('0x39')],a16_0x3f24('0x2e'),a16_0x3f24('0x23')));await Role_1[a16_0x3f24('0x24')][a16_0x3f24('0x2')](_0x336bd2['id'],{'$unset':{'autoAssignable':0x1}});await _0x503e5c[a16_0x3f24('0x41')][a16_0x3f24('0x32')]({'embed':{'color':tesseract_1[a16_0x3f24('0x43')][a16_0x3f24('0x42')][a16_0x3f24('0x0')],'description':this[a16_0x3f24('0x3c')]['locale'][a16_0x3f24('0x15')](_0x503e5c['guild'][a16_0x3f24('0x7')]['language'],a16_0x3f24('0x13'),a16_0x3f24('0x3a'),_0x503e5c[a16_0x3f24('0x21')]['tag'],_0x336bd2[a16_0x3f24('0x12')]),'footer':{'text':_0x336bd2['id']}}})['catch'](()=>{});}else{const _0x37c56e=await Role_1[a16_0x3f24('0x24')][a16_0x3f24('0x25')]({'guild':_0x503e5c[a16_0x3f24('0x27')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x37c56e[a16_0x3f24('0x5')]){throw new Error(this[a16_0x3f24('0x3c')]['locale']['getString'](_0x503e5c[a16_0x3f24('0x27')][a16_0x3f24('0x7')][a16_0x3f24('0x39')],a16_0x3f24('0x2e'),'noAutoRoles'));}const _0x4423a2=[];for(const _0x47918e of _0x37c56e){if(!_0x503e5c[a16_0x3f24('0x27')]['roles']['cache'][a16_0x3f24('0xe')](_0x47918e[a16_0x3f24('0x40')])){await _0x47918e[a16_0x3f24('0x2f')]()[a16_0x3f24('0x36')](()=>{});}_0x4423a2[a16_0x3f24('0x17')]({'name':_0x503e5c['guild'][a16_0x3f24('0xf')][a16_0x3f24('0xa')]['get'](_0x47918e[a16_0x3f24('0x40')])[a16_0x3f24('0x12')]||'-','value':_0x47918e['_id']+(Number(_0x47918e[a16_0x3f24('0x22')][a16_0x3f24('0x33')])^Number(_0x47918e[a16_0x3f24('0x22')]['forUsers'])&&_0x47918e[a16_0x3f24('0x22')][a16_0x3f24('0x33')]?a16_0x3f24('0x18'):'')+(Number(_0x47918e[a16_0x3f24('0x22')]['forBots'])^Number(_0x47918e[a16_0x3f24('0x22')][a16_0x3f24('0xc')])&&_0x47918e[a16_0x3f24('0x22')][a16_0x3f24('0xc')]?a16_0x3f24('0x2c'):'')});}await _0x503e5c[a16_0x3f24('0x41')][a16_0x3f24('0x32')]({'embed':{'color':tesseract_1['Constants']['COLORS']['IRIS'],'title':a16_0x3f24('0x3d'),'description':this[a16_0x3f24('0x3c')][a16_0x3f24('0x6')][a16_0x3f24('0x15')](_0x503e5c[a16_0x3f24('0x27')][a16_0x3f24('0x7')][a16_0x3f24('0x39')],'info','autoRolesList'),'fields':_0x4423a2}})[a16_0x3f24('0x36')](()=>{});}};}};