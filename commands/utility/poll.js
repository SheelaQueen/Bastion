const a161_0x6ec2=['exec','document','size','defaultTimeout','Command','embeds','\x20•\x20Ends','premiumPolls','countDocuments','findOne','length','option','catch','BASTION_ERROR_TYPE','ends','title','language','constructor','has','44kIWkJm','89JtoNSM','PLATINUM','2202909IUQXsE','get','channel','poll\x20--status\x20POLL_MESSAGE_ID','messages','user','1489wxbNbw','name','users','getString','map','\x20/\x20','Constants','isPublicBastion','membershipLimitPolls','fields','slice','create','POLLS','GOLD','fetch','371107QPxLxC','../../utils/omnic','Ends','PREMIUM_MEMBERSHIP_REQUIRED','@bastion/tesseract','1726284RTIbUT','send','default','exports','locale','COLORS','apply','LIMITED_PREMIUM_MEMBERSHIP','PremiumTier','timeout','1170064olJaiz','test','value','IRIS','cache','bot','../../utils/constants','POLL_TIMEOUT','reactions','fetchPremiumTier','toFixed','MANAGE_CHANNELS','../../utils/errors','membershipLimitPollTimeout','POLL_NOT_FOUND','DiscordError','LIMITS','clamp','channels','guild','status','poll','_id','\x20votes\x20(','../../models/Poll','client','10267TOayAA','errors','234853NINOqL'];const a161_0x4461=function(_0xff3024,_0x3df78a){_0xff3024=_0xff3024-0x119;let _0x11dc55=a161_0x6ec2[_0xff3024];return _0x11dc55;};const a161_0x4810d8=a161_0x4461;(function(_0x3db695,_0xd9338f){const _0x2da9d5=a161_0x4461;while(!![]){try{const _0x5c3f04=parseInt(_0x2da9d5(0x145))*parseInt(_0x2da9d5(0x12f))+parseInt(_0x2da9d5(0x131))+-parseInt(_0x2da9d5(0x15d))+parseInt(_0x2da9d5(0x14e))*-parseInt(_0x2da9d5(0x146))+parseInt(_0x2da9d5(0x16c))+parseInt(_0x2da9d5(0x162))+-parseInt(_0x2da9d5(0x148));if(_0x5c3f04===_0xd9338f)break;else _0x3db695['push'](_0x3db695['shift']());}catch(_0x53767f){_0x3db695['push'](_0x3db695['shift']());}}}(a161_0x6ec2,0xd5f7c));const a161_0x12ce90=function(){let _0x37d1e7=!![];return function(_0x3483ad,_0x257425){const _0x478bcd=_0x37d1e7?function(){const _0x357ea2=a161_0x4461;if(_0x257425){const _0x4c7c3d=_0x257425[_0x357ea2(0x168)](_0x3483ad,arguments);return _0x257425=null,_0x4c7c3d;}}:function(){};return _0x37d1e7=![],_0x478bcd;};}(),a161_0x4722e5=a161_0x12ce90(this,function(){const _0x5e922f=function(){const _0x1b1dee=a161_0x4461,_0x507ebf=_0x5e922f[_0x1b1dee(0x143)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1b1dee(0x143)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x507ebf[_0x1b1dee(0x16d)](a161_0x4722e5);};return _0x5e922f();});a161_0x4722e5();'use strict';const tesseract_1=require(a161_0x4810d8(0x161)),Poll_1=require(a161_0x4810d8(0x12d)),constants=require(a161_0x4810d8(0x11b)),errors=require(a161_0x4810d8(0x121)),numbers=require('../../utils/numbers'),omnic=require(a161_0x4810d8(0x15e));module[a161_0x4810d8(0x165)]=class PollCommand extends tesseract_1[a161_0x4810d8(0x136)]{constructor(){const _0x2f675e=a161_0x4810d8;super(_0x2f675e(0x12a),{'description':'It\x20allows\x20you\x20to\x20run\x20polls\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20at\x20most\x2013\x20options\x20for\x20the\x20poll.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20status\x20of\x20a\x20running\x20poll.','triggers':[],'arguments':{'alias':{'timeout':['t'],'option':['o'],'status':['s']},'number':[_0x2f675e(0x16b)],'string':['option',_0x2f675e(0x129)],'coerce':{'timeout':_0x39479a=>typeof _0x39479a==='number'&&numbers[_0x2f675e(0x126)](_0x39479a,0x1,0x2d0)},'default':{'timeout':0x3}},'scope':_0x2f675e(0x128),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x2f675e(0x120)],'syntax':[_0x2f675e(0x14b),'poll\x20--option\x20OPTIONS...\x20--\x20QUESTION','poll\x20--timeout\x20HOURS\x20--option\x20OPTIONS...\x20--\x20QUESTION']}),this[_0x2f675e(0x132)]=async(_0x39d15e,_0xb74385)=>{const _0x2e8ec7=_0x2f675e;if(_0xb74385['status']){const _0x111ff=await Poll_1[_0x2e8ec7(0x164)][_0x2e8ec7(0x13b)]({'_id':_0xb74385[_0x2e8ec7(0x129)],'guild':_0x39d15e[_0x2e8ec7(0x128)]['id']});if(!_0x111ff)throw new Error(_0x2e8ec7(0x123));if(!_0x39d15e[_0x2e8ec7(0x128)][_0x2e8ec7(0x127)][_0x2e8ec7(0x119)][_0x2e8ec7(0x144)](_0x111ff[_0x2e8ec7(0x14a)]))throw new Error(_0x2e8ec7(0x123));const _0x2a8fb7=_0x39d15e[_0x2e8ec7(0x128)][_0x2e8ec7(0x127)]['cache'][_0x2e8ec7(0x149)](_0x111ff['channel']),_0x1fb4d5=await _0x2a8fb7[_0x2e8ec7(0x14c)]['fetch'](_0x111ff[_0x2e8ec7(0x12b)])[_0x2e8ec7(0x13e)](()=>{});if(!_0x1fb4d5)throw new Error(_0x2e8ec7(0x123));const _0x1a096e=_0x1fb4d5['embeds'][0x0]['fields'][_0x2e8ec7(0x152)](_0x131b7d=>_0x131b7d[_0x2e8ec7(0x16e)]),_0x5ebf96={};let _0x1f1c6f=0x0;for(const _0x2be55f in this[_0x2e8ec7(0x11d)][_0x2e8ec7(0x158)](0x0,_0x1a096e['length'])){if(_0x1fb4d5[_0x2e8ec7(0x11d)][_0x2e8ec7(0x119)]['has'](this[_0x2e8ec7(0x11d)][_0x2be55f])){await _0x1fb4d5[_0x2e8ec7(0x11d)][_0x2e8ec7(0x119)][_0x2e8ec7(0x149)](this[_0x2e8ec7(0x11d)][_0x2be55f])[_0x2e8ec7(0x150)][_0x2e8ec7(0x15c)]()['catch'](()=>{});const _0x4c2a1c=_0x1fb4d5['reactions']['cache'][_0x2e8ec7(0x149)](this[_0x2e8ec7(0x11d)][_0x2be55f])[_0x2e8ec7(0x150)][_0x2e8ec7(0x119)]['filter'](_0x418b58=>!_0x418b58[_0x2e8ec7(0x11a)])[_0x2e8ec7(0x134)];_0x5ebf96[this[_0x2e8ec7(0x11d)][_0x2be55f]]=_0x4c2a1c,_0x1f1c6f+=_0x4c2a1c;}}return await _0x39d15e[_0x2e8ec7(0x14a)][_0x2e8ec7(0x163)]({'embed':{'color':tesseract_1[_0x2e8ec7(0x154)][_0x2e8ec7(0x167)][_0x2e8ec7(0x16f)],'author':{'name':'POLL\x20STATUS'},'title':_0x1fb4d5['embeds'][0x0][_0x2e8ec7(0x141)],'fields':_0x1fb4d5[_0x2e8ec7(0x137)][0x0][_0x2e8ec7(0x157)]['map'](_0x2cc662=>({'name':_0x2cc662[_0x2e8ec7(0x14f)]+'\x20'+_0x2cc662[_0x2e8ec7(0x16e)],'value':(_0x5ebf96[_0x2cc662[_0x2e8ec7(0x14f)]]||0x0)+_0x2e8ec7(0x153)+_0x1f1c6f+_0x2e8ec7(0x12c)+(_0x5ebf96[_0x2cc662['name']]?_0x5ebf96[_0x2cc662['name']]/_0x1f1c6f*0x64:0x0)[_0x2e8ec7(0x11f)](0x2)+'%)'})),'footer':{'text':_0x1fb4d5['id']+_0x2e8ec7(0x138)},'timestamp':_0x111ff[_0x2e8ec7(0x140)]}});}if(!_0xb74385['_'][_0x2e8ec7(0x13c)]||!_0xb74385[_0x2e8ec7(0x13d)]||!(_0xb74385[_0x2e8ec7(0x13d)]instanceof Array))throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)]['INVALID_COMMAND_SYNTAX'],this[_0x2e8ec7(0x14f)]);const _0x795017=_0xb74385['_']['join']('\x20'),_0x55c7ed=_0xb74385['timeout']?_0xb74385[_0x2e8ec7(0x16b)]:this[_0x2e8ec7(0x135)];if(constants[_0x2e8ec7(0x155)](this['client'][_0x2e8ec7(0x14d)])){const _0xabeb2a=await omnic[_0x2e8ec7(0x11e)](_0x39d15e[_0x2e8ec7(0x128)])['catch'](()=>{});if(_0xabeb2a){if(_0xabeb2a===omnic['PremiumTier'][_0x2e8ec7(0x15b)]&&_0x55c7ed>constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x15b)][_0x2e8ec7(0x11c)])throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)]['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x2e8ec7(0x12e)][_0x2e8ec7(0x166)]['getString'](_0x39d15e[_0x2e8ec7(0x128)][_0x2e8ec7(0x133)]['language'],_0x2e8ec7(0x130),'membershipLimitPollTimeout',constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x15b)][_0x2e8ec7(0x11c)]));else{if(_0xabeb2a===omnic[_0x2e8ec7(0x16a)][_0x2e8ec7(0x147)]&&_0x55c7ed>constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x147)]['POLL_TIMEOUT'])throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)][_0x2e8ec7(0x169)],this[_0x2e8ec7(0x12e)][_0x2e8ec7(0x166)]['getString'](_0x39d15e['guild'][_0x2e8ec7(0x133)]['language'],_0x2e8ec7(0x130),_0x2e8ec7(0x122),constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x147)]['POLL_TIMEOUT']));}}else{if(_0x55c7ed>constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x11c)])throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)][_0x2e8ec7(0x160)],this[_0x2e8ec7(0x12e)][_0x2e8ec7(0x166)]['getString'](_0x39d15e['guild'][_0x2e8ec7(0x133)][_0x2e8ec7(0x142)],'errors','premiumPollTimeout',constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x11c)]));}const _0x5bab97=await Poll_1[_0x2e8ec7(0x164)][_0x2e8ec7(0x13a)]({'guild':_0x39d15e[_0x2e8ec7(0x128)]['id'],'ends':{'$gte':new Date()}});if(_0xabeb2a){if(_0xabeb2a===omnic['PremiumTier'][_0x2e8ec7(0x15b)]&&_0x5bab97>=constants[_0x2e8ec7(0x125)]['GOLD'][_0x2e8ec7(0x15a)])throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)][_0x2e8ec7(0x169)],this['client'][_0x2e8ec7(0x166)][_0x2e8ec7(0x151)](_0x39d15e[_0x2e8ec7(0x128)]['document'][_0x2e8ec7(0x142)],_0x2e8ec7(0x130),'membershipLimitPolls',constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x15b)]['POLLS']));else{if(_0xabeb2a===omnic[_0x2e8ec7(0x16a)][_0x2e8ec7(0x147)]&&_0x5bab97>=constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x147)][_0x2e8ec7(0x15a)])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x2e8ec7(0x12e)][_0x2e8ec7(0x166)]['getString'](_0x39d15e[_0x2e8ec7(0x128)]['document'][_0x2e8ec7(0x142)],_0x2e8ec7(0x130),_0x2e8ec7(0x156),constants[_0x2e8ec7(0x125)]['PLATINUM'][_0x2e8ec7(0x15a)]));}}else{if(_0x5bab97>=constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x15a)])throw new errors[(_0x2e8ec7(0x124))](errors[_0x2e8ec7(0x13f)][_0x2e8ec7(0x160)],this[_0x2e8ec7(0x12e)][_0x2e8ec7(0x166)][_0x2e8ec7(0x151)](_0x39d15e[_0x2e8ec7(0x128)][_0x2e8ec7(0x133)][_0x2e8ec7(0x142)],_0x2e8ec7(0x130),_0x2e8ec7(0x139),constants[_0x2e8ec7(0x125)][_0x2e8ec7(0x15a)]));}}const _0x408c3a=new Date(Date['now']()+_0x55c7ed*0x36ee80),_0x1d7821=await _0x39d15e[_0x2e8ec7(0x14a)][_0x2e8ec7(0x163)]({'embed':{'color':tesseract_1[_0x2e8ec7(0x154)][_0x2e8ec7(0x167)]['IRIS'],'author':{'name':'POLL'},'title':_0x795017,'description':'React\x20to\x20this\x20message\x20with\x20the\x20corresponding\x20emoji\x20to\x20vote\x20for\x20that\x20option.','fields':_0xb74385[_0x2e8ec7(0x13d)]['map']((_0x52ece1,_0x228809)=>({'name':this['reactions'][_0x228809],'value':_0x52ece1})),'footer':{'text':_0x2e8ec7(0x15f)},'timestamp':_0x408c3a}});await Poll_1[_0x2e8ec7(0x164)][_0x2e8ec7(0x159)]({'_id':_0x1d7821['id'],'channel':_0x1d7821['channel']['id'],'guild':_0x1d7821[_0x2e8ec7(0x128)]['id'],'ends':_0x408c3a});for(const _0x1ac2c5 of this['reactions']['slice'](0x0,_0xb74385['option'][_0x2e8ec7(0x13c)])){await _0x1d7821['react'](_0x1ac2c5)[_0x2e8ec7(0x13e)](()=>{});}},this[_0x2f675e(0x11d)]=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'],this['defaultTimeout']=0x3;}};