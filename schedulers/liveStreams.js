const a225_0x4966=['get','🔴\x20LIVE','default','5xkJQdz','channelId','11PHLwho','constructor','17236qLxAgd','user_name','client','75676lSjMzF','json','1280','guilds','push','Viewers','readyTimestamp','&user_login=','streamers','send','173324RuSjaQ','Language','COLORS','handleTwitchStreamers','set','catch','join','accessToken','map','length','0\x20*/5\x20*\x20*\x20*\x20*','users','channels','credentials','data','https://twitch.tv/','../utils/constants','419397lATTZt','apply','twitchSubscriptions','clientId','Scheduler','13255EuzNyV','@bastion/tesseract','twitch','error','303132CfpgVu','includes','_id','{height}','3vFQptS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','2onnEbH','has','title','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','https://api.twitch.tv/helix/streams/?user_login=','size','Bearer\x20','24389vTSENJ','{width}','node-fetch','19nnrnpA','replace','language','cache','toString'];const a225_0x296f=function(_0x1f2eed,_0x5f5dd1){_0x1f2eed=_0x1f2eed-0x6f;let _0x3214a4=a225_0x4966[_0x1f2eed];return _0x3214a4;};const a225_0x4e49de=a225_0x296f;(function(_0x445ca1,_0x31529f){const _0xb8b9f5=a225_0x296f;while(!![]){try{const _0x3d9da6=-parseInt(_0xb8b9f5(0xa6))+-parseInt(_0xb8b9f5(0x7f))*parseInt(_0xb8b9f5(0xac))+-parseInt(_0xb8b9f5(0xa2))*parseInt(_0xb8b9f5(0x7d))+parseInt(_0xb8b9f5(0x9d))+-parseInt(_0xb8b9f5(0x70))*parseInt(_0xb8b9f5(0x73))+parseInt(_0xb8b9f5(0x8c))*parseInt(_0xb8b9f5(0xaa))+-parseInt(_0xb8b9f5(0x7b))*-parseInt(_0xb8b9f5(0x82));if(_0x3d9da6===_0x31529f)break;else _0x445ca1['push'](_0x445ca1['shift']());}catch(_0x5791ab){_0x445ca1['push'](_0x445ca1['shift']());}}}(a225_0x4966,0x5a905));const a225_0x223097=function(){let _0x250ba3=!![];return function(_0x1a762a,_0x133c2d){const _0x108ed4=_0x250ba3?function(){const _0x1e4c15=a225_0x296f;if(_0x133c2d){const _0x4001ae=_0x133c2d[_0x1e4c15(0x9e)](_0x1a762a,arguments);return _0x133c2d=null,_0x4001ae;}}:function(){};return _0x250ba3=![],_0x108ed4;};}(),a225_0x4925ad=a225_0x223097(this,function(){const _0x5afa98=function(){const _0x5cea85=a225_0x296f,_0x4144ed=_0x5afa98[_0x5cea85(0x7e)](_0x5cea85(0xab))()[_0x5cea85(0x7e)](_0x5cea85(0xaf));return!_0x4144ed['test'](a225_0x4925ad);};return _0x5afa98();});a225_0x4925ad();'use strict';const tesseract_1=require(a225_0x4e49de(0xa3)),node_fetch_1=require(a225_0x4e49de(0x72)),Guild_1=require('../models/Guild'),constants=require(a225_0x4e49de(0x9c));module['exports']=class LiveStreams extends tesseract_1[a225_0x4e49de(0xa1)]{constructor(){const _0x7ace81=a225_0x4e49de;super('liveStreams',{'cronTime':_0x7ace81(0x96)}),this[_0x7ace81(0x8f)]=async(_0x1fc2b2,_0xed8951)=>{const _0x5c46b0=_0x7ace81;if(!this[_0x5c46b0(0x81)][_0x5c46b0(0x88)])return;if(!this[_0x5c46b0(0x9f)]['has'](_0x1fc2b2))this['twitchSubscriptions'][_0x5c46b0(0x90)](_0x1fc2b2,[]);const _0x4e6848=this[_0x5c46b0(0x9f)][_0x5c46b0(0x78)](_0x1fc2b2),_0x59a0ed=await node_fetch_1['default'](_0x5c46b0(0xb0)+_0xed8951[_0x5c46b0(0x97)][_0x5c46b0(0x92)](_0x5c46b0(0x89)),{'headers':{'Accept':'application/json','Authorization':_0x5c46b0(0x6f)+this[_0x5c46b0(0x81)][_0x5c46b0(0x99)]['twitch'][_0x5c46b0(0x93)],'Client-ID':this[_0x5c46b0(0x81)]['credentials']['twitch'][_0x5c46b0(0xa0)]}}),_0x1a4bed=(await _0x59a0ed[_0x5c46b0(0x83)]())[_0x5c46b0(0x9a)];for(const _0x9e993a of _0x1a4bed){if(_0x4e6848[_0x5c46b0(0xa7)](_0x9e993a['id']))continue;this[_0x5c46b0(0x81)][_0x5c46b0(0x98)][_0x5c46b0(0x76)][_0x5c46b0(0xad)](_0xed8951[_0x5c46b0(0x7c)])&&await this[_0x5c46b0(0x81)][_0x5c46b0(0x98)]['cache'][_0x5c46b0(0x78)](_0xed8951[_0x5c46b0(0x7c)])[_0x5c46b0(0x8b)]({'embed':{'color':constants[_0x5c46b0(0x8e)]['TWITCH'],'author':{'name':_0x9e993a[_0x5c46b0(0x80)],'url':_0x5c46b0(0x9b)+_0x9e993a[_0x5c46b0(0x80)]},'description':_0x9e993a[_0x5c46b0(0xae)],'fields':[{'name':_0x5c46b0(0x87),'value':_0x9e993a['viewer_count'][_0x5c46b0(0x77)](),'inline':!![]},{'name':_0x5c46b0(0x8d),'value':_0x9e993a[_0x5c46b0(0x75)]['toUpperCase'](),'inline':!![]}],'image':{'url':_0x9e993a['thumbnail_url'][_0x5c46b0(0x74)](_0x5c46b0(0x71),_0x5c46b0(0x84))[_0x5c46b0(0x74)](_0x5c46b0(0xa9),'720')},'footer':{'text':_0x5c46b0(0x79)},'timestamp':_0x9e993a['started_at']}})['then'](()=>{const _0xaeaf13=_0x5c46b0;_0x4e6848[_0xaeaf13(0x86)](_0x9e993a['id']);})[_0x5c46b0(0x91)](()=>{});}this[_0x5c46b0(0x9f)]['set'](_0x1fc2b2,_0x4e6848);},this['exec']=async()=>{const _0xcfdd10=_0x7ace81;try{if(!this[_0xcfdd10(0x81)][_0xcfdd10(0x85)][_0xcfdd10(0x76)][_0xcfdd10(0xb1)])return;const _0x1c127c=await Guild_1[_0xcfdd10(0x7a)]['find']({'$or':this['client'][_0xcfdd10(0x85)]['cache'][_0xcfdd10(0x94)](_0x5578cd=>({'_id':_0x5578cd['id']})),'streamers':{'$exists':!![]}});for(const _0xef79a4 of _0x1c127c){_0xef79a4[_0xcfdd10(0x8a)][_0xcfdd10(0xa4)]&&_0xef79a4[_0xcfdd10(0x8a)][_0xcfdd10(0xa4)][_0xcfdd10(0x7c)]&&_0xef79a4[_0xcfdd10(0x8a)][_0xcfdd10(0xa4)][_0xcfdd10(0x97)][_0xcfdd10(0x95)]&&this['handleTwitchStreamers'](_0xef79a4[_0xcfdd10(0xa8)],_0xef79a4[_0xcfdd10(0x8a)][_0xcfdd10(0xa4)])['catch'](_0x4a75a5=>tesseract_1['Logger'][_0xcfdd10(0xa5)](_0x4a75a5));}}catch(_0x3f98c5){tesseract_1['Logger'][_0xcfdd10(0xa5)](_0x3f98c5);}},this['twitchSubscriptions']=new Map();}};