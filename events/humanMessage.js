const a136_0x2b45=['map','relayDirectMessages','handleTriggers','gamification','handleInstantResponses','handleLevelRoles','Constants','parse','push','makeRequest','exec','enabled','fetchApplication','filter','responseMessage','replace','handleVotingChannels','IRIS','author','credit','reply','tag','../models/Config','splice','level','replaceMessageVariables','displayAvatarURL','../models/Role','includes','MAX_LEVEL','language','indexOf','test','computeLevel','recentUsers','humanMessage','ModuleManagerEvent','responseReaction','member','length','client','content','findOne','default','locale','discord.js','reaction','Level-up\x20Reward','roles','guild','error','cache','findById','handleDirectMessageRelay','document','handleGamification','has','@bastion/tesseract','get','\x20Trigger','user','status','react','setTimeout','apply','levelUp','messages','experience','save','channel','then','multiplier','trigger','owner','getConstant','exports','Team','stringify','COLORS','response','find','bastion.name','catch','_id','/chat/instant?message=','Logger','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','MAX_EXPERIENCE','constructor','json','floor','send','set'];(function(_0x4e9407,_0x2b4558){const _0x3e4e47=function(_0x3fd19e){while(--_0x3fd19e){_0x4e9407['push'](_0x4e9407['shift']());}};const _0x18cf3b=function(){const _0xee597f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x29f267,_0x5b51ae,_0x2c1a75,_0xe329d3){_0xe329d3=_0xe329d3||{};let _0x45e47a=_0x5b51ae+'='+_0x2c1a75;let _0x581dd9=0x0;for(let _0x499c4d=0x0,_0x4b9cde=_0x29f267['length'];_0x499c4d<_0x4b9cde;_0x499c4d++){const _0x47f400=_0x29f267[_0x499c4d];_0x45e47a+=';\x20'+_0x47f400;const _0x4a0b5a=_0x29f267[_0x47f400];_0x29f267['push'](_0x4a0b5a);_0x4b9cde=_0x29f267['length'];if(_0x4a0b5a!==!![]){_0x45e47a+='='+_0x4a0b5a;}}_0xe329d3['cookie']=_0x45e47a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x512e6c,_0x23a11a){_0x512e6c=_0x512e6c||function(_0x2ecdaa){return _0x2ecdaa;};const _0x5eb096=_0x512e6c(new RegExp('(?:^|;\x20)'+_0x23a11a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5ad2cc=function(_0x24d8ee,_0x1908d2){_0x24d8ee(++_0x1908d2);};_0x5ad2cc(_0x3e4e47,_0x2b4558);return _0x5eb096?decodeURIComponent(_0x5eb096[0x1]):undefined;}};const _0x21d537=function(){const _0x3b3df0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3b3df0['test'](_0xee597f['removeCookie']['toString']());};_0xee597f['updateCookie']=_0x21d537;let _0x221904='';const _0x3ba126=_0xee597f['updateCookie']();if(!_0x3ba126){_0xee597f['setCookie'](['*'],'counter',0x1);}else if(_0x3ba126){_0x221904=_0xee597f['getCookie'](null,'counter');}else{_0xee597f['removeCookie']();}};_0x18cf3b();}(a136_0x2b45,0x1ae));const a136_0x3e4e=function(_0x4e9407,_0x2b4558){_0x4e9407=_0x4e9407-0x0;let _0x3e4e47=a136_0x2b45[_0x4e9407];return _0x3e4e47;};const a136_0xee597f=function(){let _0x223ecf=!![];return function(_0x5f1416,_0x1a5cde){const _0x5cf179=_0x223ecf?function(){if(_0x1a5cde){const _0x3a2b29=_0x1a5cde[a136_0x3e4e('0xa')](_0x5f1416,arguments);_0x1a5cde=null;return _0x3a2b29;}}:function(){};_0x223ecf=![];return _0x5cf179;};}();const a136_0x3fd19e=a136_0xee597f(this,function(){const _0xb37727=function(){const _0x3efbbc=_0xb37727[a136_0x3e4e('0x23')](a136_0x3e4e('0x21'))()['compile'](a136_0x3e4e('0x20'));return!_0x3efbbc[a136_0x3e4e('0x48')](a136_0x3fd19e);};return _0xb37727();});a136_0x3fd19e();'use strict';const tesseract_1=require(a136_0x3e4e('0x3'));const discord_js_1=require(a136_0x3e4e('0x55'));const emojis=require('../utils/emojis');const gamification=require('../utils/gamification');const omnic=require('../utils/omnic');const variables=require('../utils/variables');const Config_1=require(a136_0x3e4e('0x3e'));const Role_1=require(a136_0x3e4e('0x43'));const TextChannel_1=require('../models/TextChannel');const Trigger_1=require('../models/Trigger');module[a136_0x3e4e('0x15')]=class HumanMessageEvent extends tesseract_1[a136_0x3e4e('0x4c')]{constructor(){super(a136_0x3e4e('0x4b'));this[a136_0x3e4e('0x2d')]=async(_0x17a715,_0x27b000)=>{const _0x2bf8aa=await Role_1[a136_0x3e4e('0x53')][a136_0x3e4e('0x1a')]({'guild':_0x17a715[a136_0x3e4e('0x59')]['id'],'level':{'$exists':!![]}});const _0x22fe3b=_0x2bf8aa[a136_0x3e4e('0x35')](_0x2ce75d=>_0x2ce75d[a136_0x3e4e('0x40')]!==_0x27b000&&_0x17a715['guild']['roles'][a136_0x3e4e('0x5b')][a136_0x3e4e('0x2')](_0x2ce75d['_id']));const _0x4bc777=_0x2bf8aa[a136_0x3e4e('0x35')](_0x1cc68d=>_0x1cc68d[a136_0x3e4e('0x40')]===_0x27b000&&_0x17a715[a136_0x3e4e('0x59')][a136_0x3e4e('0x58')]['cache']['has'](_0x1cc68d['_id']));if(_0x4bc777[a136_0x3e4e('0x4f')]){await _0x17a715[a136_0x3e4e('0x4e')][a136_0x3e4e('0x58')]['add'](_0x4bc777[a136_0x3e4e('0x28')](_0x5e8f37=>_0x5e8f37['_id']));await _0x17a715[a136_0x3e4e('0x4e')]['roles']['remove'](_0x22fe3b[a136_0x3e4e('0x28')](_0x46b030=>_0x46b030[a136_0x3e4e('0x1d')]));}};this['handleGamification']=async _0x27727e=>{const _0x359c65=this['recentUsers'][a136_0x3e4e('0x4')](_0x27727e[a136_0x3e4e('0x59')]['id'])||[];if(_0x359c65[a136_0x3e4e('0x44')](_0x27727e[a136_0x3e4e('0x3a')]['id']))return;const _0x4353db=_0x27727e[a136_0x3e4e('0x50')];const _0x8818ed=_0x27727e[a136_0x3e4e('0x59')];const _0x2fc68e=_0x27727e[a136_0x3e4e('0x4e')];if(!_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x2b')]||!_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x2b')][a136_0x3e4e('0x33')])return;if(_0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0x40')]>=gamification[a136_0x3e4e('0x45')]||_0x2fc68e['document'][a136_0x3e4e('0xd')]>=gamification[a136_0x3e4e('0x22')](_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x2b')]['multiplier']))return;_0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0xd')]+=0x1;const _0x3384d9=gamification[a136_0x3e4e('0x49')](_0x2fc68e[a136_0x3e4e('0x0')]['experience'],_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x2b')][a136_0x3e4e('0x11')]);_0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0x40')]=_0x3384d9;if(_0x3384d9>_0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0x40')]){await _0x2fc68e[a136_0x3e4e('0x3b')](_0x3384d9*gamification['DEFAUL_CURRENCY_REWARD_MULTIPLIER'],a136_0x3e4e('0x57'),_0x2fc68e[a136_0x3e4e('0x0')]);if(_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x2b')][a136_0x3e4e('0xc')]){_0x27727e[a136_0x3e4e('0xf')][a136_0x3e4e('0x26')]({'embed':{'color':tesseract_1['Constants'][a136_0x3e4e('0x18')][a136_0x3e4e('0x39')],'fields':[{'name':'LEVELED\x20UP!','value':_0x4353db['locale']['getString'](_0x8818ed[a136_0x3e4e('0x0')][a136_0x3e4e('0x46')],'info',a136_0x3e4e('0xb'),_0x27727e['author']['tag'],_0x2fc68e['document']['level'])}]}})[a136_0x3e4e('0x1c')](()=>{});}this['handleLevelRoles'](_0x27727e,_0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0x40')])['catch'](tesseract_1[a136_0x3e4e('0x1f')][a136_0x3e4e('0x5a')]);}await _0x2fc68e[a136_0x3e4e('0x0')][a136_0x3e4e('0xe')]();_0x359c65[a136_0x3e4e('0x30')](_0x27727e[a136_0x3e4e('0x3a')]['id']);this[a136_0x3e4e('0x4a')][a136_0x3e4e('0x27')](_0x27727e[a136_0x3e4e('0x59')]['id'],_0x359c65);_0x27727e[a136_0x3e4e('0x50')][a136_0x3e4e('0x9')](()=>{const _0x20f685=this[a136_0x3e4e('0x4a')][a136_0x3e4e('0x4')](_0x27727e[a136_0x3e4e('0x59')]['id']);_0x20f685[a136_0x3e4e('0x3f')](_0x20f685[a136_0x3e4e('0x47')](_0x27727e[a136_0x3e4e('0x3a')]['id']),0x1);this[a136_0x3e4e('0x4a')][a136_0x3e4e('0x27')](_0x27727e[a136_0x3e4e('0x59')]['id'],_0x20f685);},0x32c8);};this[a136_0x3e4e('0x2a')]=async _0x518fe8=>{if(!_0x518fe8[a136_0x3e4e('0x51')])return;const _0x4ce806=await Trigger_1[a136_0x3e4e('0x53')][a136_0x3e4e('0x1a')]({'guild':_0x518fe8[a136_0x3e4e('0x59')]['id']});const _0x93a444=[];const _0x5ca938=[];for(const _0x136601 of _0x4ce806){const _0x517fc5=new RegExp(_0x136601[a136_0x3e4e('0x12')]['replace'](/\?/g,'.')[a136_0x3e4e('0x37')](/\*+/g,'.*'),'ig');if(!_0x517fc5[a136_0x3e4e('0x48')](_0x518fe8['content']))continue;if(_0x136601[a136_0x3e4e('0x36')]){_0x93a444[a136_0x3e4e('0x30')](_0x136601['responseMessage']);}if(_0x136601[a136_0x3e4e('0x4d')]){const _0x340313=emojis['parseEmoji'](_0x136601['responseReaction']);if(_0x340313){_0x5ca938['push'](_0x340313[a136_0x3e4e('0x56')]);}}}if(_0x93a444[a136_0x3e4e('0x4f')]){_0x518fe8[a136_0x3e4e('0xf')]['send']({'embed':{...JSON[a136_0x3e4e('0x2f')](variables[a136_0x3e4e('0x41')](JSON[a136_0x3e4e('0x17')](_0x93a444[Math[a136_0x3e4e('0x25')](Math['random']()*_0x93a444[a136_0x3e4e('0x4f')])]),_0x518fe8)),'footer':{'text':_0x518fe8[a136_0x3e4e('0x50')][a136_0x3e4e('0x54')][a136_0x3e4e('0x14')](a136_0x3e4e('0x1b'))+a136_0x3e4e('0x5')}}});}if(_0x5ca938[a136_0x3e4e('0x4f')]){_0x518fe8[a136_0x3e4e('0x8')](_0x5ca938[Math[a136_0x3e4e('0x25')](Math['random']()*_0x5ca938[a136_0x3e4e('0x4f')])]);}};this['handleVotingChannels']=async _0x4816f3=>{const _0x1da60c=await TextChannel_1[a136_0x3e4e('0x53')][a136_0x3e4e('0x52')]({'_id':_0x4816f3[a136_0x3e4e('0xf')]['id'],'voting':!![]});if(!_0x1da60c)return;_0x4816f3[a136_0x3e4e('0x8')]('👍')[a136_0x3e4e('0x1c')](()=>{});_0x4816f3[a136_0x3e4e('0x8')]('👎')[a136_0x3e4e('0x1c')](()=>{});};this[a136_0x3e4e('0x2c')]=async _0x5c70ef=>{if(!_0x5c70ef[a136_0x3e4e('0x51')])return;const _0xb952b2=await omnic[a136_0x3e4e('0x31')](a136_0x3e4e('0x1e')+encodeURIComponent(_0x5c70ef['content']))[a136_0x3e4e('0x10')](_0x14a582=>_0x14a582[a136_0x3e4e('0x24')]());if(_0xb952b2[a136_0x3e4e('0x7')]!=='success')return;const _0x2a6f90=_0xb952b2[a136_0x3e4e('0x19')][a136_0x3e4e('0x3c')]instanceof Array?_0xb952b2[a136_0x3e4e('0x19')]['reply']:[_0xb952b2[a136_0x3e4e('0x19')]['reply']];for(const _0xa5815d of _0x2a6f90){await _0x5c70ef['channel'][a136_0x3e4e('0x26')](_0xa5815d)[a136_0x3e4e('0x1c')](()=>{});}};this[a136_0x3e4e('0x5d')]=async _0x23eb94=>{const _0x73ebb=await Config_1['default'][a136_0x3e4e('0x5c')](_0x23eb94[a136_0x3e4e('0x50')][a136_0x3e4e('0x6')]['id']);if(_0x73ebb[a136_0x3e4e('0x29')]&&_0x23eb94['content']){const _0x13379f=await _0x23eb94[a136_0x3e4e('0x50')][a136_0x3e4e('0x34')]();const _0x8cdc35=_0x13379f[a136_0x3e4e('0x13')]instanceof discord_js_1[a136_0x3e4e('0x16')]?_0x13379f['owner']['owner'][a136_0x3e4e('0x6')]:_0x13379f[a136_0x3e4e('0x13')];if(_0x23eb94[a136_0x3e4e('0x3a')]['id']===_0x8cdc35['id'])return;const _0xbefb05=await _0x8cdc35['createDM']();await _0xbefb05['send']({'embed':{'color':tesseract_1[a136_0x3e4e('0x2e')]['COLORS']['IRIS'],'author':{'name':_0x23eb94[a136_0x3e4e('0x3a')][a136_0x3e4e('0x3d')],'iconURL':_0x23eb94[a136_0x3e4e('0x3a')][a136_0x3e4e('0x42')]({'dynamic':!![],'size':0x40})},'description':_0x23eb94[a136_0x3e4e('0x51')],'footer':{'text':_0x23eb94[a136_0x3e4e('0x3a')]['id']}}});}};this[a136_0x3e4e('0x32')]=async _0x2efe87=>{if(_0x2efe87[a136_0x3e4e('0x59')]){this[a136_0x3e4e('0x1')](_0x2efe87)[a136_0x3e4e('0x1c')](()=>{});this[a136_0x3e4e('0x2a')](_0x2efe87)[a136_0x3e4e('0x1c')](()=>{});this[a136_0x3e4e('0x38')](_0x2efe87)[a136_0x3e4e('0x1c')](()=>{});}else{this[a136_0x3e4e('0x2c')](_0x2efe87)['catch'](()=>{});this[a136_0x3e4e('0x5d')](_0x2efe87)[a136_0x3e4e('0x1c')](()=>{});}};this['recentUsers']=new Map();}};