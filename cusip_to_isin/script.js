const _0x2b8176=_0x48dd;(function(_0x1e72b2,_0x2f90ae){const _0xbe8a0=_0x48dd,_0x2a5efa=_0x1e72b2();while(!![]){try{const _0x3d1360=-parseInt(_0xbe8a0(0x116))/0x1*(parseInt(_0xbe8a0(0x106))/0x2)+parseInt(_0xbe8a0(0x10b))/0x3+-parseInt(_0xbe8a0(0x124))/0x4+parseInt(_0xbe8a0(0x10e))/0x5+-parseInt(_0xbe8a0(0x11a))/0x6+-parseInt(_0xbe8a0(0x110))/0x7*(-parseInt(_0xbe8a0(0x115))/0x8)+parseInt(_0xbe8a0(0x11d))/0x9*(parseInt(_0xbe8a0(0x107))/0xa);if(_0x3d1360===_0x2f90ae)break;else _0x2a5efa['push'](_0x2a5efa['shift']());}catch(_0x2d6376){_0x2a5efa['push'](_0x2a5efa['shift']());}}}(_0x5780,0x6b785));const Check={},cusipChars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*@#';for(let i=0x0;i<cusipChars[_0x2b8176(0x10f)];i++){const char=cusipChars[i];Check[char]=[i%0xa+Math['floor'](i/0xa),0x2*i%0xa+Math['floor'](0x2*i/0xa)];}function cusipChecksum(_0x5db518){const _0xc65e0d=_0x2b8176;if(!_0x5db518||_0x5db518[_0xc65e0d(0x10f)]!==0x9)return![];let _0x992d1d=0x0;for(let _0x296b5c=0x0;_0x296b5c<0x8;_0x296b5c++){const _0x56d2a3=_0x5db518[_0x296b5c],_0x45ab7b=Check[_0x56d2a3]?Check[_0x56d2a3][_0x296b5c%0x2]:0x0;_0x992d1d+=_0x45ab7b;}const _0x59b270=(0xa-_0x992d1d%0xa)%0xa;return _0x59b270;}function _0x5780(){const _0x215b9d=['Invalid\x20checksum:\x20','charCodeAt','1197486rsJCgf','addEventListener','innerText','1007435KAuyIw','length','5523dFDsnU','toString','...','change','reduce','1128GvucCs','3jbPOJO','cusipInput','getElementById','\x20should\x20be\x20','3168090CDXOAa','map','input','1568493psbRHZ','toUpperCase','join','push','target','countrySelect','value','3391104uWWKnG','result','309602HnyvKR','90LQgRXM','from'];_0x5780=function(){return _0x215b9d;};return _0x5780();}function _0x48dd(_0x5baf8a,_0x279d28){const _0x578005=_0x5780();return _0x48dd=function(_0x48dd35,_0x5cc71d){_0x48dd35=_0x48dd35-0x105;let _0x3a5596=_0x578005[_0x48dd35];return _0x3a5596;},_0x48dd(_0x5baf8a,_0x279d28);}function convertCusipToIsin(_0x17b9e5,_0x1f8238){const _0x536857=_0x2b8176;if(!_0x17b9e5||_0x17b9e5['length']!==0x9){document['getElementById'](_0x536857(0x105))[_0x536857(0x10d)]=_0x536857(0x112);return;}const _0x162e93=cusipChecksum(_0x17b9e5),_0x5d7d14=parseInt(_0x17b9e5[0x8]),_0x5f4838=_0x162e93===_0x5d7d14;if(!_0x5f4838){const _0x491ae1=_0x536857(0x109)+_0x17b9e5[0x8]+_0x536857(0x119)+_0x162e93;document['getElementById'](_0x536857(0x105))['innerText']=_0x491ae1;return;}const _0x4658e1=Array['from'](_0x17b9e5)[_0x536857(0x11b)](_0x160ab4=>!isNaN(_0x160ab4)?_0x160ab4:(_0x160ab4[_0x536857(0x11e)]()[_0x536857(0x10a)](0x0)-0x37)[_0x536857(0x111)]())[_0x536857(0x11f)](''),_0x3aecaa=Array[_0x536857(0x108)](_0x1f8238)[_0x536857(0x11b)](_0x1fdb23=>(_0x1fdb23['toUpperCase']()[_0x536857(0x10a)](0x0)-0x37)[_0x536857(0x111)]())[_0x536857(0x11f)](''),_0x1f0576=_0x3aecaa+_0x4658e1,_0x1fbe03=_0x1f0576[_0x536857(0x10f)]%0x2!==0x0,_0x2a359b=[],_0x147ba8=[];for(let _0x3ca699=0x0;_0x3ca699<_0x1f0576[_0x536857(0x10f)];_0x3ca699++){let _0x456dc4=parseInt(_0x1f0576[_0x3ca699]);_0x3ca699%0x2===0x0?(_0x1fbe03&&(_0x456dc4*=0x2),_0x2a359b['push'](_0x456dc4)):(!_0x1fbe03&&(_0x456dc4*=0x2),_0x147ba8[_0x536857(0x120)](_0x456dc4));}const _0x3bbef1=_0x545291=>_0x545291[_0x536857(0x114)]((_0x242be7,_0x261177)=>_0x242be7+(_0x261177>=0xa?0x1+_0x261177%0xa:_0x261177),0x0),_0x534dd5=_0x3bbef1(_0x2a359b)+_0x3bbef1(_0x147ba8),_0x9b3733=(0xa-_0x534dd5%0xa)%0xa,_0x14fa6e=''+_0x1f8238+_0x17b9e5+_0x9b3733;document[_0x536857(0x118)](_0x536857(0x105))['innerText']='ISIN:\x20'+_0x14fa6e;}document[_0x2b8176(0x118)](_0x2b8176(0x117))[_0x2b8176(0x10c)](_0x2b8176(0x11c),function(_0x19a281){const _0x43a57b=_0x2b8176,_0x334c3=_0x19a281[_0x43a57b(0x121)][_0x43a57b(0x123)],_0x1f701a=document[_0x43a57b(0x118)](_0x43a57b(0x122))['value'];_0x334c3[_0x43a57b(0x10f)]===0x9?convertCusipToIsin(_0x334c3,_0x1f701a):document[_0x43a57b(0x118)](_0x43a57b(0x105))['innerText']=_0x43a57b(0x112);}),document['getElementById']('countrySelect')[_0x2b8176(0x10c)](_0x2b8176(0x113),function(_0x16f7c2){const _0x2d12cd=_0x2b8176,_0x3ce4ae=document[_0x2d12cd(0x118)](_0x2d12cd(0x117))[_0x2d12cd(0x123)];_0x3ce4ae[_0x2d12cd(0x10f)]===0x9&&convertCusipToIsin(_0x3ce4ae,_0x16f7c2[_0x2d12cd(0x121)][_0x2d12cd(0x123)]);});