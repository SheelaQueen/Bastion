const a62_0x5d5f=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','7mDYgro','8CIYNiF','deletable','parseInt','catch','Number\x20Nash\x20is\x20a\x20multiplayer\x20game\x20of\x20numbers\x20played\x20with\x20multiple\x20members\x20of\x20the\x20server.\x20When\x20started,\x20everyone\x20can\x20post\x20a\x20natural\x20number\x20between\x201\x20and\x20100\x20in\x20the\x20channel.\x20The\x20game\x20ends\x20in\x20a\x20minute\x20and\x20the\x20member\x20who\x20posted\x20the\x20smallest\x20number\x20that\x20wasn\x27t\x20also\x20posted\x20by\x20anyone\x20else\x20wins.','delete','Command','send','only\x20one\x20submission\x20was','**.','end','ERROR','457365CMdVPY','filter','Game\x20Ended','2gcoOeZ','guild','94625tgtFUC','A\x20game\x20is\x20already\x20running\x20in\x20this\x20channel.\x20Wait\x20for\x20it\x20to\x20end\x20before\x20starting\x20another.','collect','36238UsENQP','games','from','28348HzUGOz','184649QkMdzj','COLORS','author','BASTION_ERROR_TYPE','1ZzAkkj','exports','Constants','37111eARpPz','numberNash','values','channel','content','constructor','toString','Number\x20Nash','227598OveMjt','DiscordError','test','find','@bastion/tesseract','has','INDIGO'];const a62_0x4cc4=function(_0x91b0c6,_0x176846){_0x91b0c6=_0x91b0c6-0x14d;let _0x26d0dd=a62_0x5d5f[_0x91b0c6];return _0x26d0dd;};const a62_0x4ff972=a62_0x4cc4;(function(_0x38f7bd,_0x4e2f41){const _0x3bf860=a62_0x4cc4;while(!![]){try{const _0x16dae4=-parseInt(_0x3bf860(0x174))+parseInt(_0x3bf860(0x157))+parseInt(_0x3bf860(0x150))*-parseInt(_0x3bf860(0x154))+-parseInt(_0x3bf860(0x167))*-parseInt(_0x3bf860(0x17c))+parseInt(_0x3bf860(0x14f))*parseInt(_0x3bf860(0x168))+-parseInt(_0x3bf860(0x177))*-parseInt(_0x3bf860(0x179))+parseInt(_0x3bf860(0x15f));if(_0x16dae4===_0x4e2f41)break;else _0x38f7bd['push'](_0x38f7bd['shift']());}catch(_0x3ba941){_0x38f7bd['push'](_0x38f7bd['shift']());}}}(a62_0x5d5f,0x4762b));const a62_0x954b6d=function(){let _0x1a143a=!![];return function(_0x5744d1,_0x444e38){const _0x3406fe=_0x1a143a?function(){if(_0x444e38){const _0x594f27=_0x444e38['apply'](_0x5744d1,arguments);return _0x444e38=null,_0x594f27;}}:function(){};return _0x1a143a=![],_0x3406fe;};}(),a62_0x13e0a7=a62_0x954b6d(this,function(){const _0x142687=function(){const _0x46886c=a62_0x4cc4,_0x34a92c=_0x142687['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x46886c(0x15c)](_0x46886c(0x166));return!_0x34a92c[_0x46886c(0x161)](a62_0x13e0a7);};return _0x142687();});a62_0x13e0a7();'use strict';const tesseract_1=require(a62_0x4ff972(0x163)),errors=require('../../utils/errors');module[a62_0x4ff972(0x155)]=class NumberNashCommand extends tesseract_1[a62_0x4ff972(0x16e)]{constructor(){const _0x599f6e=a62_0x4ff972;super(_0x599f6e(0x158),{'description':_0x599f6e(0x16c),'triggers':[],'arguments':{},'scope':_0x599f6e(0x178),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this['exec']=async _0x2a2798=>{const _0x7b1ee7=_0x599f6e;if(this['games'][_0x7b1ee7(0x164)](_0x2a2798[_0x7b1ee7(0x15a)]['id']))throw new errors[(_0x7b1ee7(0x160))](errors[_0x7b1ee7(0x153)][_0x7b1ee7(0x173)],_0x7b1ee7(0x17a));await _0x2a2798[_0x7b1ee7(0x15a)][_0x7b1ee7(0x16f)]({'embed':{'color':tesseract_1[_0x7b1ee7(0x156)][_0x7b1ee7(0x151)][_0x7b1ee7(0x165)],'title':_0x7b1ee7(0x15e),'description':'Everyone\x20has\x20one\x20minute\x20to\x20post\x20a\x20natural\x20number\x20between\x201\x20and\x20100\x20in\x20the\x20channel.\x20After\x20the\x20timer\x20ends,\x20the\x20member\x20who\x20posted\x20the\x20smallest\x20number\x20that\x20wasn\x27t\x20also\x20posted\x20by\x20anyone\x20else\x20wins\x20the\x20game.','footer':{'text':'You\x20have\x20got\x201\x20minute\x20to\x20make\x20your\x20submission.'}}}),this['games']['set'](_0x2a2798[_0x7b1ee7(0x15a)]['id'],!![]);const _0x4e2bb4=_0x2a2798[_0x7b1ee7(0x15a)]['createMessageCollector'](_0xc29c6f=>!_0xc29c6f[_0x7b1ee7(0x152)]['bot']&&Number[_0x7b1ee7(0x16a)](_0xc29c6f['content'])>0x0&&Number['parseInt'](_0xc29c6f[_0x7b1ee7(0x15b)])<=0x64,{'time':0xea60});_0x4e2bb4['on'](_0x7b1ee7(0x17b),_0x40037f=>{const _0x3e877b=_0x7b1ee7;_0x40037f[_0x3e877b(0x169)]&&_0x40037f[_0x3e877b(0x16d)]()['catch'](()=>{});}),_0x4e2bb4['on'](_0x7b1ee7(0x172),_0x2d807e=>{const _0x4dbacd=_0x7b1ee7;if(_0x2d807e['size']>0x1){const _0x38cd92=Array[_0x4dbacd(0x14e)](_0x2d807e['mapValues'](_0x4ff117=>Number[_0x4dbacd(0x16a)](_0x4ff117[_0x4dbacd(0x15b)]))[_0x4dbacd(0x159)]()),_0x4fce09=_0x38cd92[_0x4dbacd(0x175)](_0x2192d3=>_0x38cd92['indexOf'](_0x2192d3)===_0x38cd92['lastIndexOf'](_0x2192d3)),_0x23e060=Math['min'](..._0x4fce09),_0x34cd4c=_0x2d807e[_0x4dbacd(0x162)](_0x5f2bc0=>_0x5f2bc0[_0x4dbacd(0x15b)]===_0x23e060[_0x4dbacd(0x15d)]());_0x34cd4c&&_0x2a2798[_0x4dbacd(0x15a)][_0x4dbacd(0x16f)]({'embed':{'color':tesseract_1['Constants'][_0x4dbacd(0x151)]['SOMEWHAT_DARK'],'author':{'name':_0x4dbacd(0x15e)},'title':_0x4dbacd(0x176),'description':'**'+_0x34cd4c['author']['username']+'**\x20made\x20the\x20winning\x20submission\x20**'+_0x23e060+_0x4dbacd(0x171)}})[_0x4dbacd(0x16b)](()=>{});}else _0x2a2798[_0x4dbacd(0x15a)][_0x4dbacd(0x16f)]({'embed':{'color':tesseract_1[_0x4dbacd(0x156)][_0x4dbacd(0x151)]['RED'],'author':{'name':_0x4dbacd(0x15e)},'title':_0x4dbacd(0x176),'description':'Unfortunately,\x20'+(_0x2d807e['size']===0x0?'no\x20submissions\x20were':_0x4dbacd(0x170))+'\x20made.'}})[_0x4dbacd(0x16b)](()=>{});this['games'][_0x4dbacd(0x16d)](_0x2a2798['channel']['id']);});},this[_0x599f6e(0x14d)]=new Map();}};