const a111_0x3e0a=['COLORS','map','channel','61jlYqEE','31Wwcxkh','../../models/Member','86398ocUYfk','resolver','get','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','apply','user','31089gGmOed','rolePosition','list','ORANGE','RED','getString','test','471Uvqmch','No\x20one\x20has\x20been\x20warned\x20in\x20the\x20server.','send','\x20of\x20','Constants','errors','paginate','warn\x20--list','tag','77058JXZoUA','author','Warned\x20Users','pages','client','page','122206cWXDtD','DiscordError','warn\x20--user\x20USER_ID\x20--clear\x20--\x20REASON','warn','ownerID','members','has','items','info','@bastion/tesseract','length','exports','1945kkxZdT','guild','warn\x20--user\x20USER_ID\x20--\x20REASON','KICK_MEMBERS','name','infractions','36lfjVGK','member','../../utils/pagination','cache','catch','memberWarnDM','BASTION_ERROR_TYPE','../../utils/errors','clearInfractions','document','Page\x20','clear','memberWarn','7435NShQgE','language','locale','join'];const a111_0xfe5a=function(_0x48d6ad,_0x5012e1){_0x48d6ad=_0x48d6ad-0x1cb;let _0x24e133=a111_0x3e0a[_0x48d6ad];return _0x24e133;};const a111_0xb76cf=a111_0xfe5a;(function(_0x5d8b21,_0x106231){const _0x48101a=a111_0xfe5a;while(!![]){try{const _0x19e005=-parseInt(_0x48101a(0x1dd))*parseInt(_0x48101a(0x1cc))+parseInt(_0x48101a(0x1ec))+-parseInt(_0x48101a(0x1e6))+-parseInt(_0x48101a(0x1cd))*-parseInt(_0x48101a(0x20b))+-parseInt(_0x48101a(0x1cf))+parseInt(_0x48101a(0x1d6))+-parseInt(_0x48101a(0x1fe))*parseInt(_0x48101a(0x1f8));if(_0x19e005===_0x106231)break;else _0x5d8b21['push'](_0x5d8b21['shift']());}catch(_0x72304){_0x5d8b21['push'](_0x5d8b21['shift']());}}}(a111_0x3e0a,0x1dae5));const a111_0x2d1278=function(){let _0x530281=!![];return function(_0x26cfa9,_0x15a457){const _0x53b070=_0x530281?function(){const _0x2f38e6=a111_0xfe5a;if(_0x15a457){const _0x28a191=_0x15a457[_0x2f38e6(0x1d4)](_0x26cfa9,arguments);return _0x15a457=null,_0x28a191;}}:function(){};return _0x530281=![],_0x53b070;};}(),a111_0x90410a=a111_0x2d1278(this,function(){const _0x20e900=function(){const _0x430621=a111_0xfe5a,_0x5cd65d=_0x20e900[_0x430621(0x1d3)](_0x430621(0x1d2))()[_0x430621(0x1d3)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5cd65d[_0x430621(0x1dc)](a111_0x90410a);};return _0x20e900();});a111_0x90410a();'use strict';const tesseract_1=require(a111_0xb76cf(0x1f5)),Member_1=require(a111_0xb76cf(0x1ce)),arrays=require('../../utils/arrays'),errors=require(a111_0xb76cf(0x205)),pagination=require(a111_0xb76cf(0x200));module[a111_0xb76cf(0x1f7)]=class Warn extends tesseract_1['Command']{constructor(){const _0x3ef0d9=a111_0xb76cf;super(_0x3ef0d9(0x1ef),{'description':'It\x20allows\x20you\x20to\x20warn\x20server\x20members,\x20as\x20well\x20as\x20clear\x20their\x20infractions.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20infractions.','triggers':['w'],'arguments':{'alias':{'clear':'c','list':'l','user':'u'},'boolean':['clear',_0x3ef0d9(0x1d8)],'string':['user']},'scope':_0x3ef0d9(0x1f9),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x3ef0d9(0x1fb)],'syntax':[_0x3ef0d9(0x1e4),_0x3ef0d9(0x1fa),_0x3ef0d9(0x1ee)]}),this['exec']=async(_0x1d0590,_0x24afea)=>{const _0x3007f1=_0x3ef0d9;if(_0x24afea[_0x3007f1(0x1d8)]){const _0x536f7a=await Member_1['default']['find']({'guild':_0x1d0590['guild']['id'],'infractions':{'$exists':!![],'$ne':[]}}),_0x555420=pagination[_0x3007f1(0x1e3)](_0x536f7a,_0x24afea[_0x3007f1(0x1eb)]);return await _0x1d0590[_0x3007f1(0x1cb)]['send']({'embed':{'color':tesseract_1[_0x3007f1(0x1e1)]['COLORS'][_0x3007f1(0x1d9)],'title':_0x3007f1(0x1e8),'description':_0x555420[_0x3007f1(0x1f3)][_0x3007f1(0x1f6)]?'Users\x20warned\x20in\x20the\x20server.':_0x3007f1(0x1de),'fields':_0x555420[_0x3007f1(0x1f3)][_0x3007f1(0x210)](_0x2de605=>({'name':_0x1d0590[_0x3007f1(0x1f9)][_0x3007f1(0x1f1)]['cache'][_0x3007f1(0x1f2)](_0x2de605[_0x3007f1(0x1d5)])?_0x1d0590[_0x3007f1(0x1f9)]['members'][_0x3007f1(0x201)][_0x3007f1(0x1d1)](_0x2de605['user'])[_0x3007f1(0x1d5)][_0x3007f1(0x1e5)]:_0x2de605['user'],'value':arrays['toBulletList'](_0x2de605[_0x3007f1(0x1fd)])})),'footer':{'text':_0x555420[_0x3007f1(0x1f3)][_0x3007f1(0x1f6)]?_0x3007f1(0x208)+_0x555420[_0x3007f1(0x1eb)]+_0x3007f1(0x1e0)+_0x555420[_0x3007f1(0x1e9)]:''}}});}const _0x523c02=this['client'][_0x3007f1(0x1d0)]['resolveGuildMember'](_0x1d0590[_0x3007f1(0x1f9)],_0x24afea['user']);if(!_0x523c02)throw new errors[(_0x3007f1(0x1ed))](errors[_0x3007f1(0x204)]['INVALID_COMMAND_SYNTAX'],this[_0x3007f1(0x1fc)]);const _0xffd54c=_0x24afea['_'][_0x3007f1(0x20e)]('\x20')||'-';if(_0x1d0590['author']['id']!==_0x1d0590[_0x3007f1(0x1f9)][_0x3007f1(0x1f0)]&&!_0x1d0590[_0x3007f1(0x1ff)]['canManage'](_0x523c02))return await _0x1d0590[_0x3007f1(0x1cb)]['send']({'embed':{'color':tesseract_1['Constants'][_0x3007f1(0x20f)][_0x3007f1(0x1da)],'title':this[_0x3007f1(0x1ea)][_0x3007f1(0x20d)][_0x3007f1(0x1db)](_0x1d0590[_0x3007f1(0x1f9)][_0x3007f1(0x207)]['language'],_0x3007f1(0x1e2),'unauthorized'),'description':this[_0x3007f1(0x1ea)][_0x3007f1(0x20d)]['getString'](_0x1d0590[_0x3007f1(0x1f9)]['document']['language'],_0x3007f1(0x1e2),_0x3007f1(0x1d7),_0x1d0590[_0x3007f1(0x1e7)][_0x3007f1(0x1e5)],_0x523c02[_0x3007f1(0x1d5)]['tag'])}})['catch'](()=>{});if(_0x24afea[_0x3007f1(0x209)])return await _0x523c02[_0x3007f1(0x206)](_0xffd54c),await _0x1d0590[_0x3007f1(0x1cb)][_0x3007f1(0x1df)]({'embed':{'color':tesseract_1[_0x3007f1(0x1e1)][_0x3007f1(0x20f)][_0x3007f1(0x1d9)],'description':this['client'][_0x3007f1(0x20d)][_0x3007f1(0x1db)](_0x1d0590[_0x3007f1(0x1f9)][_0x3007f1(0x207)][_0x3007f1(0x20c)],'info','memberInfractionsClear',_0x1d0590[_0x3007f1(0x1e7)][_0x3007f1(0x1e5)],_0x523c02[_0x3007f1(0x1d5)][_0x3007f1(0x1e5)],_0xffd54c)}})['catch'](()=>{});await _0x523c02['addInfraction'](_0xffd54c),await _0x523c02[_0x3007f1(0x1df)]({'embed':{'color':tesseract_1[_0x3007f1(0x1e1)]['COLORS']['ORANGE'],'description':this[_0x3007f1(0x1ea)][_0x3007f1(0x20d)][_0x3007f1(0x1db)](_0x1d0590[_0x3007f1(0x1f9)][_0x3007f1(0x207)][_0x3007f1(0x20c)],_0x3007f1(0x1f4),_0x3007f1(0x203),_0x1d0590['author'][_0x3007f1(0x1e5)],_0x1d0590['guild'][_0x3007f1(0x1fc)],_0xffd54c)}})[_0x3007f1(0x202)](()=>{}),await _0x1d0590[_0x3007f1(0x1cb)][_0x3007f1(0x1df)]({'embed':{'color':tesseract_1['Constants'][_0x3007f1(0x20f)][_0x3007f1(0x1d9)],'description':this[_0x3007f1(0x1ea)]['locale'][_0x3007f1(0x1db)](_0x1d0590[_0x3007f1(0x1f9)]['document'][_0x3007f1(0x20c)],_0x3007f1(0x1f4),_0x3007f1(0x20a),_0x1d0590[_0x3007f1(0x1e7)][_0x3007f1(0x1e5)],_0x523c02['user'][_0x3007f1(0x1e5)],_0xffd54c)}})['catch'](()=>{});};}};