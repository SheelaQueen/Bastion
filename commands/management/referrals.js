const a93_0x75b7=['\x20of\x20','items','language','GREEN','findByIdAndUpdate','11SiYpNk','referralsEnable','test','enable','Referrals\x20Channel','Command','user','locale','It\x20allows\x20you\x20set\x20the\x20Referrals\x20Channel\x20so\x20that\x20members\x20can\x20invite\x20others\x20to\x20the\x20server\x20and\x20gain\x20referral\x20rewards.\x20And\x20it\x20also\x20allows\x20you\x20to\x20track\x20the\x20members\x27\x20invites.','346198FPtKno','channel','includes','client','cache','keys','6NEdCrr','1UWKOyM','document','15481Ylsyqb','29ETYIPJ','fetchInvites','\x20-\x20','page','getString','find','paginate','referrals\x20--enable','108369FEpiZL','guild','tag','members','disable','uses','send','constructor','IRIS','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','referrals\x20--disable','default','referralsDisable','2917VSCEdX','author','47366NqYdFx','referrals','219649HCZzZZ','../../models/Guild','\x20Uses','from','referrals\x20--page\x20NUMBER','apply','../../models/Member','get','Constants','4zOWFuG','355988Rtlhza','referral','info','Referrals','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','filter'];const a93_0x19f4=function(_0x1821f6,_0x3c6517){_0x1821f6=_0x1821f6-0x104;let _0x5e489f=a93_0x75b7[_0x1821f6];return _0x5e489f;};const a93_0x43b5c4=a93_0x19f4;(function(_0x5d5271,_0x4f7d4e){const _0x16b2c5=a93_0x19f4;while(!![]){try{const _0x5419c5=parseInt(_0x16b2c5(0x13f))*-parseInt(_0x16b2c5(0x122))+-parseInt(_0x16b2c5(0x105))*parseInt(_0x16b2c5(0x13b))+-parseInt(_0x16b2c5(0x106))+-parseInt(_0x16b2c5(0x125))*-parseInt(_0x16b2c5(0x124))+-parseInt(_0x16b2c5(0x13d))*parseInt(_0x16b2c5(0x112))+parseInt(_0x16b2c5(0x11b))+parseInt(_0x16b2c5(0x12d))*parseInt(_0x16b2c5(0x121));if(_0x5419c5===_0x4f7d4e)break;else _0x5d5271['push'](_0x5d5271['shift']());}catch(_0x27de7a){_0x5d5271['push'](_0x5d5271['shift']());}}}(a93_0x75b7,0x52486));const a93_0x21320a=function(){let _0x29e69b=!![];return function(_0x38fa43,_0x535364){const _0x11536e=_0x29e69b?function(){const _0x573e22=a93_0x19f4;if(_0x535364){const _0x437940=_0x535364[_0x573e22(0x144)](_0x38fa43,arguments);return _0x535364=null,_0x437940;}}:function(){};return _0x29e69b=![],_0x11536e;};}(),a93_0x56f0bd=a93_0x21320a(this,function(){const _0x2da85b=function(){const _0x141e67=a93_0x19f4,_0x1d51c7=_0x2da85b[_0x141e67(0x134)](_0x141e67(0x137))()[_0x141e67(0x134)](_0x141e67(0x10b));return!_0x1d51c7[_0x141e67(0x114)](a93_0x56f0bd);};return _0x2da85b();});a93_0x56f0bd();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(a93_0x43b5c4(0x140)),Member_1=require(a93_0x43b5c4(0x145)),pagination=require('../../utils/pagination');module['exports']=class ReferralsCommand extends tesseract_1[a93_0x43b5c4(0x117)]{constructor(){const _0x511020=a93_0x43b5c4;super(_0x511020(0x13e),{'description':_0x511020(0x11a),'triggers':[],'arguments':{'alias':{'page':['p']},'boolean':[_0x511020(0x115),_0x511020(0x131)],'number':[_0x511020(0x128)]},'scope':_0x511020(0x12e),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x511020(0x10a)],'userPermissions':[],'syntax':[_0x511020(0x13e),_0x511020(0x143),_0x511020(0x12c),_0x511020(0x138)]}),this['exec']=async(_0x2fa22b,_0x36e9b6)=>{const _0x4ae634=_0x511020;if(_0x36e9b6[_0x4ae634(0x115)]||_0x36e9b6[_0x4ae634(0x131)])return _0x36e9b6[_0x4ae634(0x115)]?await Guild_1[_0x4ae634(0x139)][_0x4ae634(0x111)](_0x2fa22b[_0x4ae634(0x12e)]['id'],{'referralsChannel':_0x2fa22b[_0x4ae634(0x11c)]['id']}):await Guild_1[_0x4ae634(0x139)][_0x4ae634(0x111)](_0x2fa22b[_0x4ae634(0x12e)]['id'],{'$unset':{'referralsChannel':0x1}}),await _0x2fa22b[_0x4ae634(0x11c)][_0x4ae634(0x133)]({'embed':{'color':_0x36e9b6['enable']?tesseract_1[_0x4ae634(0x104)][_0x4ae634(0x136)][_0x4ae634(0x110)]:tesseract_1[_0x4ae634(0x104)][_0x4ae634(0x136)]['RED'],'title':_0x4ae634(0x116),'description':this[_0x4ae634(0x11e)][_0x4ae634(0x119)][_0x4ae634(0x129)](_0x2fa22b[_0x4ae634(0x12e)][_0x4ae634(0x123)][_0x4ae634(0x10f)],_0x4ae634(0x108),_0x36e9b6[_0x4ae634(0x115)]?_0x4ae634(0x113):_0x4ae634(0x13a),_0x2fa22b[_0x4ae634(0x13c)][_0x4ae634(0x12f)])}});const _0x1724f1=await Member_1[_0x4ae634(0x139)][_0x4ae634(0x12a)]({'guild':_0x2fa22b[_0x4ae634(0x12e)]['id'],'referral':{'$exists':!![]}}),_0x22afda=await _0x2fa22b[_0x4ae634(0x12e)][_0x4ae634(0x126)](),_0x48803a=pagination[_0x4ae634(0x12b)](_0x1724f1[_0x4ae634(0x10c)](_0x4ebf19=>_0x4ebf19[_0x4ae634(0x107)]&&Array[_0x4ae634(0x142)](_0x22afda[_0x4ae634(0x120)]())[_0x4ae634(0x11d)](_0x4ebf19[_0x4ae634(0x107)]))['map'](_0x5a5fa9=>({'name':_0x2fa22b[_0x4ae634(0x12e)][_0x4ae634(0x130)][_0x4ae634(0x11f)]['has'](_0x5a5fa9[_0x4ae634(0x118)])?_0x2fa22b[_0x4ae634(0x12e)][_0x4ae634(0x130)][_0x4ae634(0x11f)][_0x4ae634(0x146)](_0x5a5fa9['user'])[_0x4ae634(0x118)][_0x4ae634(0x12f)]:_0x5a5fa9[_0x4ae634(0x118)],'value':_0x5a5fa9[_0x4ae634(0x107)]+_0x4ae634(0x127)+_0x22afda['get'](_0x5a5fa9['referral'])[_0x4ae634(0x132)]+_0x4ae634(0x141)})),_0x36e9b6[_0x4ae634(0x128)]);await _0x2fa22b[_0x4ae634(0x11c)]['send']({'embed':{'color':tesseract_1[_0x4ae634(0x104)][_0x4ae634(0x136)][_0x4ae634(0x135)],'title':_0x4ae634(0x109),'fields':_0x48803a[_0x4ae634(0x10e)],'footer':{'text':'Page\x20'+_0x48803a['page']+_0x4ae634(0x10d)+_0x48803a['pages']}}});};}};