const a32_0x5248=['selfRolesRemove','locale','roles','guild','membershipLimitSelfRoles','user','exec','COLORS','BASTION_ERROR_TYPE','LIMITS','apply','Constants','join','GOLD','info','isPublicBastion','premiumSelfRoles','DiscordError','push','../../utils/omnic','selfRoles','has','findByIdAndUpdate','compile','get','constructor','remove','It\x20allows\x20you\x20to\x20set\x20up\x20Self\x20Roles\x20in\x20the\x20server.\x20Self\x20Roles\x20are\x20the\x20roles\x20which\x20server\x20members\x20can\x20assign\x20(and\x20unassign)\x20to\x20themselves.','tag','fetchPremiumTier','selfRolesList','noSelfRoles','test','send','language','author','countDocuments','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','cache','length','Self\x20Roles','channel','add','PLATINUM','RED','catch','find','getString','selfRoles\x20--add\x20ROLE','ROLE_NOT_FOUND','Command','@bastion/tesseract','_id','selfRolesAdd','MANAGE_ROLES','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','resolveRole','errors','../../utils/errors','resolver','roleNotFound','LIMITED_PREMIUM_MEMBERSHIP','SELF_ROLES','client','default','document','IRIS'];(function(_0xe0c75a,_0x524852){const _0x1fc0e9=function(_0x4f65f3){while(--_0x4f65f3){_0xe0c75a['push'](_0xe0c75a['shift']());}};const _0x4a79e8=function(){const _0x327f6a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x310bca,_0x27b37f,_0x41149e,_0x12fe7b){_0x12fe7b=_0x12fe7b||{};let _0x3323d0=_0x27b37f+'='+_0x41149e;let _0x4968b6=0x0;for(let _0x54a693=0x0,_0x18b29a=_0x310bca['length'];_0x54a693<_0x18b29a;_0x54a693++){const _0x143e73=_0x310bca[_0x54a693];_0x3323d0+=';\x20'+_0x143e73;const _0x5ecee3=_0x310bca[_0x143e73];_0x310bca['push'](_0x5ecee3);_0x18b29a=_0x310bca['length'];if(_0x5ecee3!==!![]){_0x3323d0+='='+_0x5ecee3;}}_0x12fe7b['cookie']=_0x3323d0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2ede3e,_0x54109d){_0x2ede3e=_0x2ede3e||function(_0x31c3c8){return _0x31c3c8;};const _0x467f35=_0x2ede3e(new RegExp('(?:^|;\x20)'+_0x54109d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x26bcca=function(_0x59a980,_0x351762){_0x59a980(++_0x351762);};_0x26bcca(_0x1fc0e9,_0x524852);return _0x467f35?decodeURIComponent(_0x467f35[0x1]):undefined;}};const _0x2317b0=function(){const _0xad1beb=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xad1beb['test'](_0x327f6a['removeCookie']['toString']());};_0x327f6a['updateCookie']=_0x2317b0;let _0x958f15='';const _0x3f5ad1=_0x327f6a['updateCookie']();if(!_0x3f5ad1){_0x327f6a['setCookie'](['*'],'counter',0x1);}else if(_0x3f5ad1){_0x958f15=_0x327f6a['getCookie'](null,'counter');}else{_0x327f6a['removeCookie']();}};_0x4a79e8();}(a32_0x5248,0x9f));const a32_0x1fc0=function(_0xe0c75a,_0x524852){_0xe0c75a=_0xe0c75a-0x0;let _0x1fc0e9=a32_0x5248[_0xe0c75a];return _0x1fc0e9;};const a32_0x327f6a=function(){let _0x136aec=!![];return function(_0x3f2192,_0x3eb7b4){const _0x53038d=_0x136aec?function(){if(_0x3eb7b4){const _0x3382f8=_0x3eb7b4[a32_0x1fc0('0x37')](_0x3f2192,arguments);_0x3eb7b4=null;return _0x3382f8;}}:function(){};_0x136aec=![];return _0x53038d;};}();const a32_0x4f65f3=a32_0x327f6a(this,function(){const _0x438adf=function(){const _0x22ced0=_0x438adf[a32_0x1fc0('0x2')](a32_0x1fc0('0x21'))()[a32_0x1fc0('0x0')](a32_0x1fc0('0xe'));return!_0x22ced0[a32_0x1fc0('0x9')](a32_0x4f65f3);};return _0x438adf();});a32_0x4f65f3();'use strict';const tesseract_1=require(a32_0x1fc0('0x1c'));const Role_1=require('../../models/Role');const constants=require('../../utils/constants');const errors=require(a32_0x1fc0('0x24'));const omnic=require(a32_0x1fc0('0x40'));module['exports']=class SelfRoles extends tesseract_1[a32_0x1fc0('0x1b')]{constructor(){super('selfRoles',{'description':a32_0x1fc0('0x4'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'array':[a32_0x1fc0('0x13'),a32_0x1fc0('0x3')],'string':['add',a32_0x1fc0('0x3')]},'scope':a32_0x1fc0('0x30'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a32_0x1fc0('0x1f')],'userPermissions':[a32_0x1fc0('0x1f')],'syntax':[a32_0x1fc0('0x41'),a32_0x1fc0('0x19'),'selfRoles\x20--remove\x20ROLE']});this[a32_0x1fc0('0x33')]=async(_0x5291b0,_0x6a831b)=>{if(_0x6a831b['add']){if(constants[a32_0x1fc0('0x3c')](this[a32_0x1fc0('0x29')][a32_0x1fc0('0x32')])){const _0x5af618=await Role_1[a32_0x1fc0('0x2a')][a32_0x1fc0('0xd')]({'guild':_0x5291b0['guild']['id'],'selfAssignable':!![]});if(_0x5af618>=constants[a32_0x1fc0('0x36')][a32_0x1fc0('0x28')]){const _0xa9d08c=await omnic[a32_0x1fc0('0x6')](_0x5291b0[a32_0x1fc0('0x30')])[a32_0x1fc0('0x16')](()=>{});if(_0xa9d08c){if(_0xa9d08c===omnic['PremiumTier']['GOLD']&&_0x5af618>=constants[a32_0x1fc0('0x36')][a32_0x1fc0('0x3a')][a32_0x1fc0('0x28')]){throw new errors[(a32_0x1fc0('0x3e'))](errors[a32_0x1fc0('0x35')][a32_0x1fc0('0x27')],this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')]['getString'](_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2b')]['language'],'errors','membershipLimitSelfRoles',constants['LIMITS']['GOLD'][a32_0x1fc0('0x28')]));}else if(_0xa9d08c===omnic['PremiumTier'][a32_0x1fc0('0x14')]&&_0x5af618>=constants[a32_0x1fc0('0x36')][a32_0x1fc0('0x14')][a32_0x1fc0('0x28')]){throw new errors['DiscordError'](errors[a32_0x1fc0('0x35')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client']['locale']['getString'](_0x5291b0['guild']['document'][a32_0x1fc0('0xb')],a32_0x1fc0('0x23'),a32_0x1fc0('0x31'),constants[a32_0x1fc0('0x36')][a32_0x1fc0('0x14')][a32_0x1fc0('0x28')]));}}else{throw new errors[(a32_0x1fc0('0x3e'))](errors[a32_0x1fc0('0x35')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2b')][a32_0x1fc0('0xb')],a32_0x1fc0('0x23'),a32_0x1fc0('0x3d'),constants[a32_0x1fc0('0x36')][a32_0x1fc0('0x28')]));}}}const _0x57cf2c=this[a32_0x1fc0('0x29')][a32_0x1fc0('0x25')]['resolveRole'](_0x5291b0[a32_0x1fc0('0x30')],_0x6a831b[a32_0x1fc0('0x13')][a32_0x1fc0('0x39')]('\x20'));if(!_0x57cf2c)throw new errors[(a32_0x1fc0('0x3e'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0[a32_0x1fc0('0x30')]['document']['language'],a32_0x1fc0('0x23'),a32_0x1fc0('0x26')));await Role_1[a32_0x1fc0('0x2a')][a32_0x1fc0('0x43')](_0x57cf2c['id'],{'_id':_0x57cf2c['id'],'guild':_0x5291b0['guild']['id'],'selfAssignable':!![]},{'upsert':!![]});await _0x5291b0[a32_0x1fc0('0x12')]['send']({'embed':{'color':tesseract_1[a32_0x1fc0('0x38')][a32_0x1fc0('0x34')]['GREEN'],'description':this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0[a32_0x1fc0('0x30')]['document'][a32_0x1fc0('0xb')],a32_0x1fc0('0x3b'),a32_0x1fc0('0x1e'),_0x5291b0[a32_0x1fc0('0xc')][a32_0x1fc0('0x5')],_0x57cf2c[a32_0x1fc0('0x20')]),'footer':{'text':_0x57cf2c['id']}}})['catch'](()=>{});}else if(_0x6a831b[a32_0x1fc0('0x3')]){const _0x1e08cc=this[a32_0x1fc0('0x29')][a32_0x1fc0('0x25')][a32_0x1fc0('0x22')](_0x5291b0[a32_0x1fc0('0x30')],_0x6a831b[a32_0x1fc0('0x3')][a32_0x1fc0('0x39')]('\x20'));if(!_0x1e08cc)throw new errors[(a32_0x1fc0('0x3e'))](errors[a32_0x1fc0('0x35')][a32_0x1fc0('0x1a')],this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2b')][a32_0x1fc0('0xb')],a32_0x1fc0('0x23'),a32_0x1fc0('0x26')));await Role_1[a32_0x1fc0('0x2a')][a32_0x1fc0('0x43')](_0x1e08cc['id'],{'$unset':{'selfAssignable':0x1}});await _0x5291b0[a32_0x1fc0('0x12')][a32_0x1fc0('0xa')]({'embed':{'color':tesseract_1[a32_0x1fc0('0x38')]['COLORS'][a32_0x1fc0('0x15')],'description':this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0['guild'][a32_0x1fc0('0x2b')]['language'],a32_0x1fc0('0x3b'),a32_0x1fc0('0x2d'),_0x5291b0[a32_0x1fc0('0xc')]['tag'],_0x1e08cc['name']),'footer':{'text':_0x1e08cc['id']}}})[a32_0x1fc0('0x16')](()=>{});}else{const _0x3910f9=await Role_1[a32_0x1fc0('0x2a')][a32_0x1fc0('0x17')]({'guild':_0x5291b0['guild']['id'],'selfAssignable':!![]});if(!_0x3910f9[a32_0x1fc0('0x10')]){throw new Error(this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')][a32_0x1fc0('0x18')](_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2b')][a32_0x1fc0('0xb')],a32_0x1fc0('0x23'),a32_0x1fc0('0x8')));}const _0x461276=[];for(const _0x2d46f6 of _0x3910f9){if(!_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2f')][a32_0x1fc0('0xf')][a32_0x1fc0('0x42')](_0x2d46f6['_id'])){await _0x2d46f6[a32_0x1fc0('0x3')]()[a32_0x1fc0('0x16')](()=>{});}_0x461276[a32_0x1fc0('0x3f')]({'name':_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2f')][a32_0x1fc0('0xf')][a32_0x1fc0('0x1')](_0x2d46f6['_id'])[a32_0x1fc0('0x20')]||'-','value':_0x2d46f6[a32_0x1fc0('0x1d')]});}await _0x5291b0['channel'][a32_0x1fc0('0xa')]({'embed':{'color':tesseract_1['Constants'][a32_0x1fc0('0x34')][a32_0x1fc0('0x2c')],'title':a32_0x1fc0('0x11'),'description':this[a32_0x1fc0('0x29')][a32_0x1fc0('0x2e')]['getString'](_0x5291b0[a32_0x1fc0('0x30')][a32_0x1fc0('0x2b')][a32_0x1fc0('0xb')],'info',a32_0x1fc0('0x7')),'fields':_0x461276}})[a32_0x1fc0('0x16')](()=>{});}};}};