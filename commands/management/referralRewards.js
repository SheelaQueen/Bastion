const a92_0x3713=['Constants','catch','PLATINUM','save','name','GOLD','IRIS','roleReferralsSet','find','../../models/Role','cache','Command','4rbxQxr','RED','MAX_SAFE_INTEGER','\x20Referrals','info','exports','PREMIUM_MEMBERSHIP_REQUIRED','default','309046PmOPFg','roleNotFound','BASTION_ERROR_TYPE','roleReferralsClear','user','test','994309RVTcYY','paginate','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','updateMany','send','channel','role','referralRewards','877837aoeQRB','638977tRhUzL','locale','1cuHhXd','PremiumTier','LIMITED_PREMIUM_MEMBERSHIP','resolver','join','document','premiumInviteRoles','getString','has','language','page','author','createDocument','INVITE_REWARDS','fetchDocument','Referral\x20Rewards','DiscordError','../../utils/constants','constructor','It\x20allows\x20you\x20set\x20roles\x20as\x20rewards\x20for\x20referrals\x20(inviting\x20other\x20users\x20to\x20the\x20server).','pages','errors','Page\x20','COLORS','MANAGE_GUILD','roles','@bastion/tesseract','GREEN','length','ROLE_NOT_FOUND','../../utils/numbers','876549VNUjXZ','1FotvAR','map','membershipLimitInviteRoles','../../utils/omnic','LIMITS','\x20of\x20','tag','clamp','return\x20/\x22\x20+\x20this\x20+\x20\x22/','289063rAcPdF','../../utils/errors','2dVabUQ','496014kJbhur','2GvJuQM','get','remove','client','items','guild','referrals'];const a92_0x19c2=function(_0x2a3537,_0x324bed){_0x2a3537=_0x2a3537-0x175;let _0x148c1f=a92_0x3713[_0x2a3537];return _0x148c1f;};const a92_0x5ee677=a92_0x19c2;(function(_0x330968,_0xa9ef9b){const _0x29d0ce=a92_0x19c2;while(!![]){try{const _0x15b25b=parseInt(_0x29d0ce(0x17e))*-parseInt(_0x29d0ce(0x17f))+-parseInt(_0x29d0ce(0x1ab))*-parseInt(_0x29d0ce(0x1a9))+-parseInt(_0x29d0ce(0x1cb))*-parseInt(_0x29d0ce(0x1a0))+parseInt(_0x29d0ce(0x1a8))+parseInt(_0x29d0ce(0x19a))*-parseInt(_0x29d0ce(0x17d))+-parseInt(_0x29d0ce(0x17b))*parseInt(_0x29d0ce(0x192))+parseInt(_0x29d0ce(0x1ca));if(_0x15b25b===_0xa9ef9b)break;else _0x330968['push'](_0x330968['shift']());}catch(_0x2314e2){_0x330968['push'](_0x330968['shift']());}}}(a92_0x3713,0x97af4));const a92_0x3ebf8d=function(){let _0x4e719a=!![];return function(_0x3851ad,_0x3cb6f3){const _0x402cd6=_0x4e719a?function(){if(_0x3cb6f3){const _0x40db63=_0x3cb6f3['apply'](_0x3851ad,arguments);return _0x3cb6f3=null,_0x40db63;}}:function(){};return _0x4e719a=![],_0x402cd6;};}(),a92_0x35ae8c=a92_0x3ebf8d(this,function(){const _0x33b233=function(){const _0x4b6f58=a92_0x19c2,_0x53e148=_0x33b233[_0x4b6f58(0x1bd)](_0x4b6f58(0x17a))()[_0x4b6f58(0x1bd)](_0x4b6f58(0x1a2));return!_0x53e148[_0x4b6f58(0x19f)](a92_0x35ae8c);};return _0x33b233();});a92_0x35ae8c();'use strict';const tesseract_1=require(a92_0x5ee677(0x1c5)),Role_1=require(a92_0x5ee677(0x18f)),constants=require(a92_0x5ee677(0x1bc)),errors=require(a92_0x5ee677(0x17c)),numbers=require(a92_0x5ee677(0x1c9)),omnic=require(a92_0x5ee677(0x175)),pagination=require('../../utils/pagination');module[a92_0x5ee677(0x197)]=class ReferralRewardsCommand extends tesseract_1[a92_0x5ee677(0x191)]{constructor(){const _0x32f4d1=a92_0x5ee677;super('referralRewards',{'description':_0x32f4d1(0x1be),'triggers':[],'arguments':{'alias':{'referrals':['n'],'page':['p']},'array':['role'],'boolean':['remove'],'string':[_0x32f4d1(0x1a6)],'number':['referrals',_0x32f4d1(0x1b5)],'coerce':{'referrals':_0x21344c=>numbers[_0x32f4d1(0x179)](_0x21344c,0x1,Number[_0x32f4d1(0x194)])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x32f4d1(0x1c3)],'userPermissions':[],'syntax':[_0x32f4d1(0x1a7),'referralRewards\x20--page\x20NUMBER','referralRewards\x20-n\x20NUMBER\x20--role\x20ROLE','referralRewards\x20-n\x20NUMBER\x20--remove']}),this['exec']=async(_0x488d9c,_0x53cf75)=>{const _0x465551=_0x32f4d1;if(_0x53cf75[_0x465551(0x185)]){if(_0x53cf75[_0x465551(0x1a6)]){if(constants['isPublicBastion'](this[_0x465551(0x182)][_0x465551(0x19e)])){const _0xfba603=await omnic['fetchPremiumTier'](_0x488d9c['guild'])[_0x465551(0x187)](()=>{}),_0x21ff3f=await Role_1[_0x465551(0x199)]['countDocuments']({'guild':_0x488d9c[_0x465551(0x184)]['id'],'referrals':{'$exists':!![],'$ne':null}});if(_0xfba603){if(_0xfba603===omnic[_0x465551(0x1ac)][_0x465551(0x18b)]&&_0x21ff3f>=constants['LIMITS'][_0x465551(0x18b)][_0x465551(0x1b8)])throw new errors[(_0x465551(0x1bb))](errors[_0x465551(0x19c)][_0x465551(0x1ad)],this['client']['locale']['getString'](_0x488d9c[_0x465551(0x184)][_0x465551(0x1b0)][_0x465551(0x1b4)],'errors',_0x465551(0x1cd),constants[_0x465551(0x176)][_0x465551(0x18b)][_0x465551(0x1b8)]));else{if(_0xfba603===omnic['PremiumTier'][_0x465551(0x188)]&&_0x21ff3f>=constants['LIMITS'][_0x465551(0x188)][_0x465551(0x1b8)])throw new errors[(_0x465551(0x1bb))](errors[_0x465551(0x19c)]['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x465551(0x182)]['locale'][_0x465551(0x1b2)](_0x488d9c[_0x465551(0x184)][_0x465551(0x1b0)][_0x465551(0x1b4)],_0x465551(0x1c0),_0x465551(0x1cd),constants[_0x465551(0x176)][_0x465551(0x188)]['INVITE_REWARDS']));}}else{if(_0x21ff3f>=constants['LIMITS'][_0x465551(0x1b8)])throw new errors[(_0x465551(0x1bb))](errors[_0x465551(0x19c)][_0x465551(0x198)],this[_0x465551(0x182)][_0x465551(0x1aa)][_0x465551(0x1b2)](_0x488d9c[_0x465551(0x184)]['document'][_0x465551(0x1b4)],_0x465551(0x1c0),_0x465551(0x1b1),constants[_0x465551(0x176)][_0x465551(0x1b8)]));}}const _0x367af7=this[_0x465551(0x182)][_0x465551(0x1ae)]['resolveRole'](_0x488d9c['guild'],_0x53cf75[_0x465551(0x1a6)][_0x465551(0x1af)]('\x20'));if(!_0x367af7)throw new errors['DiscordError'](errors[_0x465551(0x19c)][_0x465551(0x1c8)],this[_0x465551(0x182)]['locale'][_0x465551(0x1b2)](_0x488d9c[_0x465551(0x184)]['document'][_0x465551(0x1b4)],_0x465551(0x1c0),_0x465551(0x19b)));let _0x1f80af=await _0x367af7[_0x465551(0x1b9)]();return!_0x1f80af&&(_0x1f80af=await _0x367af7[_0x465551(0x1b7)]()),_0x1f80af['referrals']=_0x53cf75[_0x465551(0x185)],await _0x1f80af[_0x465551(0x189)](),await _0x488d9c[_0x465551(0x1a5)][_0x465551(0x1a4)]({'embed':{'color':tesseract_1['Constants'][_0x465551(0x1c2)][_0x465551(0x1c6)],'description':this[_0x465551(0x182)]['locale']['getString'](_0x488d9c['guild'][_0x465551(0x1b0)]['language'],_0x465551(0x196),_0x465551(0x18d),_0x488d9c[_0x465551(0x1b6)][_0x465551(0x178)],_0x367af7['name'],_0x53cf75[_0x465551(0x185)])}});}if(_0x53cf75[_0x465551(0x181)])return await Role_1['default'][_0x465551(0x1a3)]({'guild':_0x488d9c[_0x465551(0x184)]['id'],'referrals':_0x53cf75[_0x465551(0x185)]},{'$unset':{'referrals':0x1}}),await _0x488d9c[_0x465551(0x1a5)][_0x465551(0x1a4)]({'embed':{'color':tesseract_1[_0x465551(0x186)]['COLORS'][_0x465551(0x193)],'description':this[_0x465551(0x182)][_0x465551(0x1aa)][_0x465551(0x1b2)](_0x488d9c['guild'][_0x465551(0x1b0)][_0x465551(0x1b4)],_0x465551(0x196),_0x465551(0x19d),_0x488d9c[_0x465551(0x1b6)][_0x465551(0x178)],_0x53cf75['referrals'])}});}const _0x1bc648=await Role_1[_0x465551(0x199)][_0x465551(0x18e)]({'guild':_0x488d9c[_0x465551(0x184)]['id'],'referrals':{'$exists':!![],'$ne':null}});if(!_0x1bc648[_0x465551(0x1c7)])throw new Error('NO_REFERRAL_REWARDS');const _0x519557={};for(const _0x3a276f of _0x1bc648){_0x3a276f[_0x465551(0x185)]in _0x519557?_0x519557[_0x3a276f['referrals']]['push'](_0x3a276f['id']):_0x519557[_0x3a276f[_0x465551(0x185)]]=[_0x3a276f['id']];}const _0x41dd9d=pagination[_0x465551(0x1a1)](Object['keys'](_0x519557)[_0x465551(0x1cc)](_0x4fa764=>({'name':_0x4fa764+_0x465551(0x195),'value':_0x519557[_0x4fa764][_0x465551(0x1cc)](_0x199b71=>_0x488d9c[_0x465551(0x184)][_0x465551(0x1c4)][_0x465551(0x190)][_0x465551(0x1b3)](_0x199b71)?_0x488d9c[_0x465551(0x184)][_0x465551(0x1c4)][_0x465551(0x190)][_0x465551(0x180)](_0x199b71)[_0x465551(0x18a)]:_0x199b71)[_0x465551(0x1af)](',\x20')})),_0x53cf75[_0x465551(0x1b5)]);return await _0x488d9c[_0x465551(0x1a5)][_0x465551(0x1a4)]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x465551(0x18c)],'title':_0x465551(0x1ba),'fields':_0x41dd9d[_0x465551(0x183)],'footer':{'text':_0x465551(0x1c1)+_0x41dd9d[_0x465551(0x1b5)]+_0x465551(0x177)+_0x41dd9d[_0x465551(0x1bf)]}}});};}};