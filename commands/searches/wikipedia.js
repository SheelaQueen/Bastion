const a149_0x23ec=['921649JayzhC','query','fullurl','@bastion/tesseract','../../utils/errors','../../utils/omnic','guild','167pdnwqh','3346274dbBeJH','Wikipedia','877LhRqvQ','Constants','pages','title','COLORS','https://en.wikipedia.org/','NOT_FOUND','\x0a...','makeRequest','apply','slice','INVALID_COMMAND_SYNTAX','607913TvRbNp','1119067VzLMwE','length','send','BASTION_ERROR_TYPE','name','exports','thumbnail','It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','IRIS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','1090aIlCsh','Powered\x20by\x20Omnic','wikipedia\x20TITLE','2ByTGPj','/wikimedia/wikipedia/','1123jLwFCT','927acfoBD','constructor','channel','2092inFzNu','wikipedia','extract'];const a149_0x2552=function(_0x2ee418,_0x456f23){_0x2ee418=_0x2ee418-0x6a;let _0x7e20cd=a149_0x23ec[_0x2ee418];return _0x7e20cd;};const a149_0x5a2e66=a149_0x2552;(function(_0x4a0e1a,_0x4e9161){const _0x4dc77c=a149_0x2552;while(!![]){try{const _0x26f7ba=parseInt(_0x4dc77c(0x81))+-parseInt(_0x4dc77c(0x74))*parseInt(_0x4dc77c(0x92))+parseInt(_0x4dc77c(0x80))*parseInt(_0x4dc77c(0x8f))+parseInt(_0x4dc77c(0x6a))+-parseInt(_0x4dc77c(0x91))*-parseInt(_0x4dc77c(0x8c))+parseInt(_0x4dc77c(0x71))*parseInt(_0x4dc77c(0x95))+-parseInt(_0x4dc77c(0x72));if(_0x26f7ba===_0x4e9161)break;else _0x4a0e1a['push'](_0x4a0e1a['shift']());}catch(_0x15b95a){_0x4a0e1a['push'](_0x4a0e1a['shift']());}}}(a149_0x23ec,0xa3c03));const a149_0x48bad4=function(){let _0x2b6fb5=!![];return function(_0x52ab24,_0x1afcca){const _0x146bab=_0x2b6fb5?function(){const _0x30d065=a149_0x2552;if(_0x1afcca){const _0x3fba48=_0x1afcca[_0x30d065(0x7d)](_0x52ab24,arguments);return _0x1afcca=null,_0x3fba48;}}:function(){};return _0x2b6fb5=![],_0x146bab;};}(),a149_0x2fcf7f=a149_0x48bad4(this,function(){const _0x5d13b3=function(){const _0x14a4fc=a149_0x2552,_0x463015=_0x5d13b3[_0x14a4fc(0x93)](_0x14a4fc(0x8a))()[_0x14a4fc(0x93)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x463015[_0x14a4fc(0x8b)](a149_0x2fcf7f);};return _0x5d13b3();});a149_0x2fcf7f();'use strict';const tesseract_1=require(a149_0x5a2e66(0x6d)),errors=require(a149_0x5a2e66(0x6e)),omnic=require(a149_0x5a2e66(0x6f));module[a149_0x5a2e66(0x86)]=class WikipediaCommand extends tesseract_1['Command']{constructor(){const _0x48fbc9=a149_0x5a2e66;super(_0x48fbc9(0x96),{'description':_0x48fbc9(0x88),'triggers':[],'arguments':{},'scope':_0x48fbc9(0x70),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x48fbc9(0x8e)]}),this['sanitize']=_0x39db3d=>{const _0x5ce375=_0x48fbc9;return _0x39db3d[_0x5ce375(0x82)]>0x7d0?_0x39db3d[_0x5ce375(0x7e)](0x0,0x7d0)+_0x5ce375(0x7b):_0x39db3d;},this['exec']=async(_0x2c2aaa,_0x66981b)=>{const _0x3275b5=_0x48fbc9;if(!_0x66981b['_'][_0x3275b5(0x82)])throw new errors['DiscordError'](errors[_0x3275b5(0x84)][_0x3275b5(0x7f)],this[_0x3275b5(0x85)]);const _0x13bf07=_0x66981b['_']['join']('\x20'),_0x4a62a7=await omnic[_0x3275b5(0x7c)](_0x3275b5(0x90)+_0x13bf07),_0xc7752a=await _0x4a62a7['json']();if(!_0xc7752a[_0x3275b5(0x6b)]||!_0xc7752a['query'][_0x3275b5(0x76)])throw new Error(_0x3275b5(0x7a));await _0x2c2aaa[_0x3275b5(0x94)][_0x3275b5(0x83)]({'embed':{'color':tesseract_1[_0x3275b5(0x75)][_0x3275b5(0x78)][_0x3275b5(0x89)],'author':{'name':_0x3275b5(0x73),'url':_0x3275b5(0x79)},'title':_0xc7752a[_0x3275b5(0x6b)]['pages'][0x0][_0x3275b5(0x77)],'url':_0xc7752a[_0x3275b5(0x6b)]['pages'][0x0][_0x3275b5(0x6c)],'description':this['sanitize'](_0xc7752a[_0x3275b5(0x6b)][_0x3275b5(0x76)][0x0][_0x3275b5(0x97)]),'image':{'url':_0xc7752a['query']['pages'][0x0][_0x3275b5(0x87)]['source']},'footer':{'text':_0x3275b5(0x8d)}}});};}};