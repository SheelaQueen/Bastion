const a128_0x5996=['test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','INVALID_BASTION_EMBED','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exec','generateEmbed','BASTION_ERROR_TYPE','isValidBastionEmbed','../../utils/embeds','MANAGE_MESSAGES','channel','echo','constructor','send','guild','@bastion/tesseract','parse','It\x20allows\x20you\x20to\x20echo\x20a\x20message\x20through\x20Bastion.\x20It\x20also\x20supports\x20Bastion\x20embed\x20objects.','exports','join','name'];(function(_0x236f46,_0x5996db){const _0x2afbfd=function(_0x290354){while(--_0x290354){_0x236f46['push'](_0x236f46['shift']());}};const _0x1c2d72=function(){const _0x189e01={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28a224,_0x49ea97,_0x2092a2,_0x3c3780){_0x3c3780=_0x3c3780||{};let _0x26dde1=_0x49ea97+'='+_0x2092a2;let _0x57771d=0x0;for(let _0x1719ce=0x0,_0x386c7d=_0x28a224['length'];_0x1719ce<_0x386c7d;_0x1719ce++){const _0x58c84f=_0x28a224[_0x1719ce];_0x26dde1+=';\x20'+_0x58c84f;const _0x11eb18=_0x28a224[_0x58c84f];_0x28a224['push'](_0x11eb18);_0x386c7d=_0x28a224['length'];if(_0x11eb18!==!![]){_0x26dde1+='='+_0x11eb18;}}_0x3c3780['cookie']=_0x26dde1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8b8993,_0x260817){_0x8b8993=_0x8b8993||function(_0xbcccb9){return _0xbcccb9;};const _0x91a6b4=_0x8b8993(new RegExp('(?:^|;\x20)'+_0x260817['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x52d192=function(_0x5dcd30,_0x5cd8f3){_0x5dcd30(++_0x5cd8f3);};_0x52d192(_0x2afbfd,_0x5996db);return _0x91a6b4?decodeURIComponent(_0x91a6b4[0x1]):undefined;}};const _0x73449b=function(){const _0xdda071=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xdda071['test'](_0x189e01['removeCookie']['toString']());};_0x189e01['updateCookie']=_0x73449b;let _0x520604='';const _0x3746eb=_0x189e01['updateCookie']();if(!_0x3746eb){_0x189e01['setCookie'](['*'],'counter',0x1);}else if(_0x3746eb){_0x520604=_0x189e01['getCookie'](null,'counter');}else{_0x189e01['removeCookie']();}};_0x1c2d72();}(a128_0x5996,0xf8));const a128_0x2afb=function(_0x236f46,_0x5996db){_0x236f46=_0x236f46-0x0;let _0x2afbfd=a128_0x5996[_0x236f46];return _0x2afbfd;};const a128_0x189e01=function(){let _0x12f679=!![];return function(_0x3432a8,_0x38b133){const _0x13f33a=_0x12f679?function(){if(_0x38b133){const _0x58e781=_0x38b133['apply'](_0x3432a8,arguments);_0x38b133=null;return _0x58e781;}}:function(){};_0x12f679=![];return _0x13f33a;};}();const a128_0x290354=a128_0x189e01(this,function(){const _0x5be7b9=function(){const _0x436238=_0x5be7b9[a128_0x2afb('0x10')](a128_0x2afb('0x5'))()['compile'](a128_0x2afb('0x7'));return!_0x436238[a128_0x2afb('0x4')](a128_0x290354);};return _0x5be7b9();});a128_0x290354();'use strict';const tesseract_1=require(a128_0x2afb('0x13'));const errors=require('../../utils/errors');const embeds=require(a128_0x2afb('0xc'));module[a128_0x2afb('0x1')]=class EchoCommand extends tesseract_1['Command']{constructor(){super(a128_0x2afb('0xf'),{'description':a128_0x2afb('0x0'),'triggers':[],'arguments':{},'scope':a128_0x2afb('0x12'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a128_0x2afb('0xd')],'syntax':['echo\x20--\x20MESSAGE']});this[a128_0x2afb('0x8')]=async(_0x3de7ac,_0x515b19)=>{if(!_0x515b19['_']['length'])throw new errors['DiscordError'](errors[a128_0x2afb('0xa')]['INVALID_COMMAND_SYNTAX'],this[a128_0x2afb('0x3')]);const _0x2d6c80=_0x515b19['_'][a128_0x2afb('0x2')]('\x20');let _0x1cf550;try{_0x1cf550=JSON[a128_0x2afb('0x14')](_0x2d6c80);if(!embeds[a128_0x2afb('0xb')](_0x1cf550))throw new Error(a128_0x2afb('0x6'));}catch{_0x1cf550=_0x2d6c80;}await _0x3de7ac[a128_0x2afb('0xe')][a128_0x2afb('0x11')]({'embed':embeds[a128_0x2afb('0x9')](_0x1cf550)});};}};