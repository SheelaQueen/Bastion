const a91_0x4f76=['deleteOne','reactionRoles\x20--message\x20ID\x20--role\x20ROLES...\x20--exclusive','reactionRoles\x20--role\x20ROLE\x20--emoji\x20EMOJI','reaction','messages','parseEmoji','IRIS','language','Role\x20Emoji\x20Removed','createDocument','GREEN','roles','emoji','constructor','get','GOLD','guild','../../models/Role','REACTION_ROLES_PER_GROUP','map','Reaction\x20Role\x20Groups','535550hLMjoi','tag','role','roleNotFound','PremiumTier','name','reactionRolesGroupRemove','catch','REACTION_ROLE_GROUPS','RED','reactionRoles','MANAGE_ROLES','length','Command','value','message','findByIdAndUpdate','reactionRoles\x20--role\x20ROLE\x20--no-emoji','PREMIUM_MEMBERSHIP_REQUIRED','\x20/\x20[Jump\x20to\x20Reaction\x20Message](https://discord.com/channels/','../../utils/errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','isPublicBastion','membershipLimitReactionRoleGroupRoles','_id','locale','DiscordError','3687aptlZh','Role','document','563724ceJOdy','346597VFjGqS','resolveRole','exports','info','95529EhZfSh','premiumReactionRoleGroups','\x20Roles','It\x20allows\x20you\x20to\x20create\x20(and\x20delete)\x20Reaction\x20Role\x20Groups.\x20A\x20Reaction\x20Role\x20Group\x20is\x20a\x20group\x20of\x20reactions\x20emojis\x20that\x20can\x20be\x20used\x20by\x20a\x20member\x20on\x20the\x20Reaction\x20Role\x20Message\x20to\x20add\x20(or\x20remove)\x20roles\x20to\x20themselves.\x20Reaction\x20Roles\x20in\x20a\x20single\x20group\x20can\x20also\x20be\x20set\x20as\x20mutually\x20exclusive.\x20It\x20also\x20allows\x20you\x20to\x20assign\x20emojis\x20to\x20roles,\x20that\x20can\x20be\x20used\x20in\x20reacting\x20to\x20the\x20Reaction\x20Role\x20Message.','LIMITS','cache','apply','react','ROLE_NOT_FOUND','user','fetchDocument','find','Constants','Role\x20Emoji\x20Added','exec','getString','140OfXuJy','send','exclusive','PLATINUM','client','channel','../../utils/emojis','emojis','membershipLimitReactionRoleGroups','../../utils/constants','reactionRoles\x20--message\x20ID\x20--role\x20ROLES...','290507lOniQi','LIMITED_PREMIUM_MEMBERSHIP','resolver','Role\x20Emoji','resolveRoles','errors','save','delete','@bastion/tesseract','BASTION_ERROR_TYPE','default','1532732sOBBne','COLORS','../../models/ReactionRoleGroup','author','\x20/\x20Exclusive'];const a91_0x3ad1=function(_0x541b09,_0x2d2198){_0x541b09=_0x541b09-0x6e;let _0x9be3b=a91_0x4f76[_0x541b09];return _0x9be3b;};const a91_0x47216d=a91_0x3ad1;(function(_0x13040b,_0x272000){const _0x258d24=a91_0x3ad1;while(!![]){try{const _0x5046d1=-parseInt(_0x258d24(0xb1))+-parseInt(_0x258d24(0xd0))+-parseInt(_0x258d24(0x8c))+parseInt(_0x258d24(0x71))+parseInt(_0x258d24(0xcc))*parseInt(_0x258d24(0x81))+-parseInt(_0x258d24(0xcf))+parseInt(_0x258d24(0x97));if(_0x5046d1===_0x272000)break;else _0x13040b['push'](_0x13040b['shift']());}catch(_0x13c135){_0x13040b['push'](_0x13040b['shift']());}}}(a91_0x4f76,0x639ff));const a91_0x421abb=function(){let _0x4ba29f=!![];return function(_0x3385af,_0x15d866){const _0x3a0bff=_0x4ba29f?function(){const _0x433a8f=a91_0x3ad1;if(_0x15d866){const _0xea45cd=_0x15d866[_0x433a8f(0x77)](_0x3385af,arguments);return _0x15d866=null,_0xea45cd;}}:function(){};return _0x4ba29f=![],_0x3a0bff;};}(),a91_0x2dcd45=a91_0x421abb(this,function(){const _0x373ff0=function(){const _0x1327b4=a91_0x3ad1,_0x522b60=_0x373ff0[_0x1327b4(0xa9)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1327b4(0xa9)](_0x1327b4(0xc6));return!_0x522b60['test'](a91_0x2dcd45);};return _0x373ff0();});a91_0x2dcd45();'use strict';const tesseract_1=require(a91_0x47216d(0x94)),Role_1=require(a91_0x47216d(0xad)),ReactionRoleGroup_1=require(a91_0x47216d(0x99)),constants=require(a91_0x47216d(0x8a)),emojis=require(a91_0x47216d(0x87)),errors=require(a91_0x47216d(0xc5)),omnic=require('../../utils/omnic');module[a91_0x47216d(0x6f)]=class ReactionRolesCommand extends tesseract_1[a91_0x47216d(0xbe)]{constructor(){const _0x521e14=a91_0x47216d;super(_0x521e14(0xbb),{'description':_0x521e14(0x74),'triggers':[],'arguments':{'array':[_0x521e14(0xb3)],'boolean':[_0x521e14(0x93),_0x521e14(0x83)],'string':[_0x521e14(0xc0),'role','emoji']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x521e14(0xbc)],'userPermissions':['MANAGE_ROLES'],'syntax':[_0x521e14(0xbb),_0x521e14(0x9e),_0x521e14(0xc2),_0x521e14(0x8b),_0x521e14(0x9d),'reactionRoles\x20--message\x20ID\x20--delete']}),this[_0x521e14(0x7f)]=async(_0x173bb8,_0x44b2fc)=>{const _0x5bc382=_0x521e14;if(_0x44b2fc[_0x5bc382(0xc0)]&&_0x44b2fc[_0x5bc382(0x93)])return await ReactionRoleGroup_1[_0x5bc382(0x96)][_0x5bc382(0x9c)]({'_id':_0x44b2fc['message'],'guild':_0x173bb8[_0x5bc382(0xac)]['id']}),await _0x173bb8[_0x5bc382(0x86)][_0x5bc382(0x82)]({'embed':{'color':tesseract_1['Constants'][_0x5bc382(0x98)][_0x5bc382(0xba)],'description':this[_0x5bc382(0x85)][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8['guild'][_0x5bc382(0xce)]['language'],'info',_0x5bc382(0xb7),_0x173bb8[_0x5bc382(0x9a)][_0x5bc382(0xb2)],_0x44b2fc[_0x5bc382(0xc0)])}})[_0x5bc382(0xb8)](()=>{});if(_0x44b2fc[_0x5bc382(0xc0)]&&_0x44b2fc['role']&&_0x44b2fc[_0x5bc382(0xb3)][_0x5bc382(0xbd)]){if(constants[_0x5bc382(0xc7)](this[_0x5bc382(0x85)][_0x5bc382(0x7a)])){const _0x3cead7=await omnic['fetchPremiumTier'](_0x173bb8[_0x5bc382(0xac)])['catch'](()=>{});if(_0x3cead7){if(_0x3cead7===omnic[_0x5bc382(0xb5)][_0x5bc382(0xab)]&&_0x44b2fc[_0x5bc382(0xb3)][_0x5bc382(0xbd)]>constants[_0x5bc382(0x75)][_0x5bc382(0xab)]['REACTION_ROLES_PER_GROUP'])throw new errors['DiscordError'](errors[_0x5bc382(0x95)][_0x5bc382(0x8d)],this[_0x5bc382(0x85)][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)][_0x5bc382(0xce)]['language'],_0x5bc382(0x91),_0x5bc382(0xc8),constants[_0x5bc382(0x75)][_0x5bc382(0xab)]['REACTION_ROLES_PER_GROUP']));else{if(_0x3cead7===omnic[_0x5bc382(0xb5)][_0x5bc382(0x84)]&&_0x44b2fc[_0x5bc382(0xb3)][_0x5bc382(0xbd)]>constants[_0x5bc382(0x75)][_0x5bc382(0x84)]['REACTION_ROLES_PER_GROUP'])throw new errors['DiscordError'](errors[_0x5bc382(0x95)][_0x5bc382(0x8d)],this['client']['locale'][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)][_0x5bc382(0xce)]['language'],_0x5bc382(0x91),'membershipLimitReactionRoleGroupRoles',constants[_0x5bc382(0x75)][_0x5bc382(0x84)][_0x5bc382(0xae)]));}}else{if(_0x44b2fc[_0x5bc382(0xb3)][_0x5bc382(0xbd)]>constants['LIMITS'][_0x5bc382(0xae)])throw new errors[(_0x5bc382(0xcb))](errors[_0x5bc382(0x95)][_0x5bc382(0xc3)],this[_0x5bc382(0x85)]['locale']['getString'](_0x173bb8['guild'][_0x5bc382(0xce)]['language'],'errors','premiumReactionRoleGroupRoles',constants[_0x5bc382(0x75)][_0x5bc382(0xae)]));}const _0x1b3ea7=await ReactionRoleGroup_1[_0x5bc382(0x96)]['countDocuments']({'guild':_0x173bb8[_0x5bc382(0xac)]['id']});if(_0x3cead7){if(_0x3cead7===omnic[_0x5bc382(0xb5)][_0x5bc382(0xab)]&&_0x1b3ea7>=constants[_0x5bc382(0x75)]['GOLD'][_0x5bc382(0xb9)])throw new errors['DiscordError'](errors[_0x5bc382(0x95)][_0x5bc382(0x8d)],this['client'][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8['guild'][_0x5bc382(0xce)][_0x5bc382(0xa3)],'errors',_0x5bc382(0x89),constants[_0x5bc382(0x75)][_0x5bc382(0xab)][_0x5bc382(0xb9)]));else{if(_0x3cead7===omnic['PremiumTier'][_0x5bc382(0x84)]&&_0x1b3ea7>=constants[_0x5bc382(0x75)]['PLATINUM']['REACTION_ROLE_GROUPS'])throw new errors['DiscordError'](errors[_0x5bc382(0x95)][_0x5bc382(0x8d)],this[_0x5bc382(0x85)]['locale'][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)][_0x5bc382(0xce)][_0x5bc382(0xa3)],_0x5bc382(0x91),'membershipLimitReactionRoleGroups',constants['LIMITS'][_0x5bc382(0x84)][_0x5bc382(0xb9)]));}}else{if(_0x1b3ea7>=constants[_0x5bc382(0x75)][_0x5bc382(0xb9)])throw new errors[(_0x5bc382(0xcb))](errors[_0x5bc382(0x95)][_0x5bc382(0xc3)],this[_0x5bc382(0x85)][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)]['document'][_0x5bc382(0xa3)],_0x5bc382(0x91),_0x5bc382(0x72),constants[_0x5bc382(0x75)][_0x5bc382(0xb9)]));}}const _0x5cfaca=await _0x173bb8['channel'][_0x5bc382(0xa0)]['fetch'](_0x44b2fc[_0x5bc382(0xc0)],![])['catch'](()=>{});if(!_0x5cfaca)throw new Error('MESSAGE_NOT_FOUND');const _0x256cb0=this[_0x5bc382(0x85)][_0x5bc382(0x8e)][_0x5bc382(0x90)](_0x173bb8[_0x5bc382(0xac)],_0x44b2fc['role']);if(!_0x256cb0[_0x5bc382(0xbd)])throw new errors['DiscordError'](errors[_0x5bc382(0x95)][_0x5bc382(0x79)],this[_0x5bc382(0x85)][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)]['document'][_0x5bc382(0xa3)],_0x5bc382(0x91),_0x5bc382(0xb4)));await ReactionRoleGroup_1[_0x5bc382(0x96)][_0x5bc382(0xc1)](_0x5cfaca['id'],{'_id':_0x5cfaca['id'],'channel':_0x173bb8[_0x5bc382(0x86)]['id'],'guild':_0x173bb8['guild']['id'],'roles':_0x256cb0[_0x5bc382(0xaf)](_0xbfe5b8=>_0xbfe5b8['id']),'exclusive':_0x44b2fc[_0x5bc382(0x83)]?_0x44b2fc[_0x5bc382(0x83)]:undefined},{'upsert':!![]}),await _0x173bb8[_0x5bc382(0x86)]['send']({'embed':{'color':tesseract_1[_0x5bc382(0x7d)]['COLORS']['GREEN'],'description':this[_0x5bc382(0x85)][_0x5bc382(0xca)]['getString'](_0x173bb8['guild'][_0x5bc382(0xce)][_0x5bc382(0xa3)],_0x5bc382(0x70),'reactionRolesGroupAdd',_0x173bb8['author']['tag'],_0x5cfaca['url'])}})['catch'](()=>{});const _0x4b50de=await Role_1['default']['find']({'$or':_0x256cb0[_0x5bc382(0xaf)](_0x5e4fec=>({'_id':_0x5e4fec['id']})),'guild':_0x173bb8[_0x5bc382(0xac)]['id'],'emoji':{'$exists':!![]}});if(_0x4b50de&&_0x4b50de[_0x5bc382(0xbd)])for(const _0x2ea3c8 of _0x4b50de){const _0x55d541=emojis['parseEmoji'](_0x2ea3c8['emoji']);await _0x5cfaca[_0x5bc382(0x78)](_0x55d541['reaction']);}return;}if(_0x44b2fc[_0x5bc382(0xb3)]){const _0x168c69=_0x44b2fc[_0x5bc382(0xb3)]?_0x44b2fc['role']['join']('\x20'):'',_0x10acf5=this[_0x5bc382(0x85)]['resolver'][_0x5bc382(0x6e)](_0x173bb8[_0x5bc382(0xac)],_0x168c69);if(!_0x10acf5)throw new errors[(_0x5bc382(0xcb))](errors['BASTION_ERROR_TYPE'][_0x5bc382(0x79)],this[_0x5bc382(0x85)][_0x5bc382(0xca)][_0x5bc382(0x80)](_0x173bb8[_0x5bc382(0xac)][_0x5bc382(0xce)]['language'],'errors',_0x5bc382(0xb4)));let _0x18fe26=await _0x10acf5[_0x5bc382(0x7b)]();!_0x18fe26&&_0x44b2fc[_0x5bc382(0xa8)]&&(_0x18fe26=await _0x10acf5[_0x5bc382(0xa5)]());if(_0x44b2fc['emoji']){const _0x57fb06=emojis[_0x5bc382(0xa1)](_0x44b2fc[_0x5bc382(0xa8)]);_0x18fe26[_0x5bc382(0xa8)]=_0x57fb06[_0x5bc382(0xbf)],await _0x18fe26[_0x5bc382(0x92)]();}else _0x18fe26&&_0x44b2fc[_0x5bc382(0xa8)]===![]&&(_0x18fe26[_0x5bc382(0xa8)]=undefined,await _0x18fe26[_0x5bc382(0x92)]());const _0x5a1b95=_0x18fe26?emojis[_0x5bc382(0xa1)](_0x18fe26[_0x5bc382(0xa8)]):undefined;return await _0x173bb8[_0x5bc382(0x86)][_0x5bc382(0x82)]({'embed':{'color':_0x44b2fc[_0x5bc382(0xa8)]?tesseract_1[_0x5bc382(0x7d)]['COLORS'][_0x5bc382(0xa6)]:_0x44b2fc['emoji']===![]?tesseract_1[_0x5bc382(0x7d)][_0x5bc382(0x98)][_0x5bc382(0xba)]:tesseract_1[_0x5bc382(0x7d)]['COLORS'][_0x5bc382(0xa2)],'title':_0x44b2fc[_0x5bc382(0xa8)]?_0x5bc382(0x7e):_0x44b2fc[_0x5bc382(0xa8)]===![]?_0x5bc382(0xa4):_0x5bc382(0x8f),'fields':[{'name':_0x5bc382(0xcd),'value':_0x10acf5[_0x5bc382(0xb6)]||'-','inline':!![]},{'name':'Emoji','value':_0x5a1b95?_0x5a1b95['reaction']===_0x5a1b95['value']?_0x173bb8[_0x5bc382(0xac)][_0x5bc382(0x88)][_0x5bc382(0x76)][_0x5bc382(0xaa)](_0x5a1b95[_0x5bc382(0x9f)])||_0x5a1b95[_0x5bc382(0xbf)]:_0x5a1b95[_0x5bc382(0x9f)]:'-','inline':!![]}]}})['catch'](()=>{});}const _0x219312=await ReactionRoleGroup_1['default'][_0x5bc382(0x7c)]({'guild':_0x173bb8['guild']['id']});if(!_0x219312)throw new Error('NO_REACTION_ROLES');await _0x173bb8['channel'][_0x5bc382(0x82)]({'embed':{'color':tesseract_1[_0x5bc382(0x7d)]['COLORS'][_0x5bc382(0xa2)],'title':_0x5bc382(0xb0),'fields':_0x219312['map'](_0x2d0d40=>({'name':_0x2d0d40[_0x5bc382(0xc9)],'value':_0x2d0d40[_0x5bc382(0xa7)][_0x5bc382(0xbd)]+_0x5bc382(0x73)+(_0x2d0d40[_0x5bc382(0x83)]?_0x5bc382(0x9b):'')+_0x5bc382(0xc4)+_0x2d0d40['guild']+'/'+_0x2d0d40[_0x5bc382(0x86)]+'/'+_0x2d0d40['_id']+')'}))}})[_0x5bc382(0xb8)](()=>{});};}};