const a26_0x5d9d=['messageFilter\x20--enable','messageFilter\x20--disable','catch','Filter\x20Pattern\x20Added','language','wrap','Filter\x20Patterns','tag','messageFilter\x20--infraction','concat','filterInfractionEnabled','messageFilter\x20--no-infraction','join','compile','messageFilter\x20PATTERN','enabled','IRIS','enable','messageFilterDisabled','messageFilterEnable','getString','exec','client','filterInfractionDisabled','clear','constructor','guild','infraction','exports','list','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Message\x20Filter\x20in\x20the\x20server.\x20When\x20enabled,\x20it\x20filters\x20the\x20messages\x20that\x20matches\x20the\x20patterns\x20specified\x20by\x20you.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','patterns','RED','../../utils/arrays','return\x20/\x22\x20+\x20this\x20+\x20\x22/','author','messageFilter','COLORS','send','filters','disable','apply','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','document','save','length','Constants','info'];(function(_0x2eba3b,_0x5d9d6b){const _0x57ed90=function(_0xeef534){while(--_0xeef534){_0x2eba3b['push'](_0x2eba3b['shift']());}};const _0x5022cf=function(){const _0xa77ccf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xcc9ab,_0x3dcc63,_0x192a0c,_0x5931c6){_0x5931c6=_0x5931c6||{};let _0x5df37e=_0x3dcc63+'='+_0x192a0c;let _0x27ea35=0x0;for(let _0x28e166=0x0,_0x56aded=_0xcc9ab['length'];_0x28e166<_0x56aded;_0x28e166++){const _0x3e30c3=_0xcc9ab[_0x28e166];_0x5df37e+=';\x20'+_0x3e30c3;const _0x3f47ba=_0xcc9ab[_0x3e30c3];_0xcc9ab['push'](_0x3f47ba);_0x56aded=_0xcc9ab['length'];if(_0x3f47ba!==!![]){_0x5df37e+='='+_0x3f47ba;}}_0x5931c6['cookie']=_0x5df37e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8904b7,_0x501439){_0x8904b7=_0x8904b7||function(_0x18175a){return _0x18175a;};const _0x552b47=_0x8904b7(new RegExp('(?:^|;\x20)'+_0x501439['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4e1713=function(_0x26493e,_0x18e4ae){_0x26493e(++_0x18e4ae);};_0x4e1713(_0x57ed90,_0x5d9d6b);return _0x552b47?decodeURIComponent(_0x552b47[0x1]):undefined;}};const _0x5e131d=function(){const _0x4c9000=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4c9000['test'](_0xa77ccf['removeCookie']['toString']());};_0xa77ccf['updateCookie']=_0x5e131d;let _0x1a9f82='';const _0x1aaeb4=_0xa77ccf['updateCookie']();if(!_0x1aaeb4){_0xa77ccf['setCookie'](['*'],'counter',0x1);}else if(_0x1aaeb4){_0x1a9f82=_0xa77ccf['getCookie'](null,'counter');}else{_0xa77ccf['removeCookie']();}};_0x5022cf();}(a26_0x5d9d,0x128));const a26_0x57ed=function(_0x2eba3b,_0x5d9d6b){_0x2eba3b=_0x2eba3b-0x0;let _0x57ed90=a26_0x5d9d[_0x2eba3b];return _0x57ed90;};const a26_0xa77ccf=function(){let _0xb3c282=!![];return function(_0x401c47,_0x5dfbe2){const _0x710515=_0xb3c282?function(){if(_0x5dfbe2){const _0x1df69c=_0x5dfbe2[a26_0x57ed('0x27')](_0x401c47,arguments);_0x5dfbe2=null;return _0x1df69c;}}:function(){};_0xb3c282=![];return _0x710515;};}();const a26_0xeef534=a26_0xa77ccf(this,function(){const _0x3ef6b6=function(){const _0x2698bf=_0x3ef6b6[a26_0x57ed('0x17')](a26_0x57ed('0x20'))()[a26_0x57ed('0xb')](a26_0x57ed('0x29'));return!_0x2698bf['test'](a26_0xeef534);};return _0x3ef6b6();});a26_0xeef534();'use strict';const tesseract_1=require('@bastion/tesseract');const arrays=require(a26_0x57ed('0x1f'));module[a26_0x57ed('0x1a')]=class MessageFilterCommand extends tesseract_1['Command']{constructor(){super(a26_0x57ed('0x22'),{'description':a26_0x57ed('0x1c'),'triggers':[],'arguments':{'alias':{'clear':['c'],'disable':['d'],'enable':['e'],'infraction':['i'],'list':['l']},'boolean':[a26_0x57ed('0x16'),'disable','enable','infraction',a26_0x57ed('0x1b')]},'scope':a26_0x57ed('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a26_0x57ed('0x28')],'syntax':['messageFilter',a26_0x57ed('0xc'),'messageFilter\x20--clear',a26_0x57ed('0x2f'),a26_0x57ed('0x30'),a26_0x57ed('0x6'),a26_0x57ed('0x9')]});this[a26_0x57ed('0x13')]=async(_0x4f061d,_0x3d4267)=>{const _0x3c2bfb=_0x4f061d['guild'];const _0x4e4845=_0x3d4267['_'][a26_0x57ed('0x2c')]?[_0x3d4267['_'][a26_0x57ed('0xa')]('\x20')]:[];_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')]={..._0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')],'messageFilter':{'enabled':_0x3d4267['disable']?undefined:_0x3d4267[a26_0x57ed('0xf')]||_0x3c2bfb['document'][a26_0x57ed('0x25')]&&_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')]&&_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')][a26_0x57ed('0xd')]?!![]:undefined,'patterns':_0x3d4267[a26_0x57ed('0x16')]?undefined:_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')]&&_0x3c2bfb['document'][a26_0x57ed('0x25')][a26_0x57ed('0x22')]&&_0x3c2bfb[a26_0x57ed('0x2a')]['filters']['messageFilter'][a26_0x57ed('0x1d')]?_0x4e4845['length']?_0x3c2bfb[a26_0x57ed('0x2a')]['filters']['messageFilter']['patterns'][a26_0x57ed('0x7')](_0x4e4845):_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')][a26_0x57ed('0x1d')]:_0x4e4845[a26_0x57ed('0x2c')]?_0x4e4845:undefined,'infraction':_0x3d4267[a26_0x57ed('0x19')]===![]?undefined:_0x3d4267[a26_0x57ed('0x19')]||_0x3c2bfb['document']['filters']&&_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')]&&_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')][a26_0x57ed('0x19')]?!![]:undefined}};await _0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x2b')]();await _0x4f061d['channel'][a26_0x57ed('0x24')]({'embed':{'color':_0x3d4267[a26_0x57ed('0xf')]?tesseract_1[a26_0x57ed('0x2d')][a26_0x57ed('0x23')]['GREEN']:_0x3d4267[a26_0x57ed('0x26')]?tesseract_1['Constants'][a26_0x57ed('0x23')][a26_0x57ed('0x1e')]:tesseract_1['Constants'][a26_0x57ed('0x23')][a26_0x57ed('0xe')],'description':this[a26_0x57ed('0x14')]['locale'][a26_0x57ed('0x12')](_0x4f061d[a26_0x57ed('0x18')][a26_0x57ed('0x2a')][a26_0x57ed('0x2')],a26_0x57ed('0x2e'),_0x3d4267[a26_0x57ed('0xf')]?a26_0x57ed('0x11'):_0x3d4267[a26_0x57ed('0x26')]?'messageFilterDisable':_0x3c2bfb[a26_0x57ed('0x2a')]['filters'][a26_0x57ed('0x22')][a26_0x57ed('0xd')]?'messageFilterEnabled':a26_0x57ed('0x10'),_0x4f061d[a26_0x57ed('0x21')][a26_0x57ed('0x5')]),'fields':_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')][a26_0x57ed('0xd')]||_0x4e4845['length']?[{'name':_0x4e4845[a26_0x57ed('0x2c')]?a26_0x57ed('0x1'):a26_0x57ed('0x4'),'value':_0x4e4845[a26_0x57ed('0x2c')]?_0x4e4845[0x0]:_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')]['patterns']?arrays[a26_0x57ed('0x3')](_0x3c2bfb['document'][a26_0x57ed('0x25')][a26_0x57ed('0x22')][a26_0x57ed('0x1d')],'`')['join'](',\x20'):'-'}]:[],'footer':{'text':_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')]['enabled']?this['client']['locale']['getString'](_0x4f061d[a26_0x57ed('0x18')][a26_0x57ed('0x2a')][a26_0x57ed('0x2')],a26_0x57ed('0x2e'),_0x3c2bfb[a26_0x57ed('0x2a')][a26_0x57ed('0x25')][a26_0x57ed('0x22')]['infraction']?a26_0x57ed('0x8'):a26_0x57ed('0x15')):''}}})[a26_0x57ed('0x0')](()=>{});};}};