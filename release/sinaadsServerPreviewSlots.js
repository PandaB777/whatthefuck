/*!
 * sinaads monitor helper
 * @author acelan<xiaobin8[at]staff.sina.com.cn>
 * @version 1.0.0
 * 
 *                          $$!   ;$;
 *                    !$  $$$$  !$$$   ;;
 *                 $ *$$;$$$$$$$$$$;*$$$
 *                $$$$$$$$$$$$$$$$$$$$$
 *               $$$$$$;         o$$$$$o
 *              *$$$   *#####;     $$$$$
 *              $$$   &#$*!###     $$$$!
 *              $$$;  $#!!###$   ;$$$$
 *                $$$o  ;**   !$$$$!
 *          !$&&&&$!  o$$$$$$o;   ;$&###&!     ;o$&&##&$;
 *       ###########$ o####*  #############!  o############
 *     ;#####;        #####  $####    *####;          ####*
 *      ###########  o####   ####;    ####$  $######;o####
 *          ;*#####o ####$  ####&    !#### o####     ####
 *    ####$**&####$ ;####  o####     ####o &####$o$#####
 *   ;o########$    *###   ####!    &####   ;######&!
 *                 ###;
 *                  ##o
 *                 ;#!
 *                 ;
 */
!function(a){"use strict";function b(a,b){var c="",d=0>a,e=String(Math.abs(a));return e.length<b&&(c=new Array(b-e.length+1).join("0")),(d?"-":"")+c+e}function c(a,c){function d(a,b){c=c.replace(a,b)}if("string"!=typeof c)return a.toString();var e=b,f=a.getFullYear(),g=a.getMonth()+1,h=a.getDate(),i=a.getHours(),j=a.getMinutes(),k=a.getSeconds();return d(/yyyy/g,e(f,4)),d(/yy/g,e(parseInt(f.toString().slice(2),10),2)),d(/MM/g,e(g,2)),d(/M/g,g),d(/dd/g,e(h,2)),d(/d/g,h),d(/HH/g,e(i,2)),d(/H/g,i),d(/hh/g,e(i%12,2)),d(/h/g,i%12),d(/mm/g,e(j,2)),d(/m/g,j),d(/ss/g,e(k,2)),d(/s/g,k),c}function d(a){var b=[];for(var c in a)b.push('"'+c+'":"'+a[c]+'"');return"{"+b.join(",")+"}"}var e={_isValidKey:function(a){return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)},_getRaw:function(a){if(e._isValidKey(a)){var b=new RegExp("(^| )"+a+"=([^;]*)(;|$)"),c=b.exec(document.cookie);if(c)return c[2]||null}return null},_setRaw:function(a,b,c){if(e._isValidKey(a)){c=c||{};var d=c.expires;"number"==typeof c.expires&&(d=new Date,d.setTime(d.getTime()+c.expires)),document.cookie=a+"="+b+(c.path?"; path="+c.path:"")+(d?"; expires="+d.toGMTString():"")+(c.domain?"; domain="+c.domain:"")+(c.secure?"; secure":"")}},get:function(a){var b=e._getRaw(a);return"string"==typeof b?b=decodeURIComponent(b):null},set:function(a,b,c){e._setRaw(a,encodeURIComponent(b),c)},remove:function(a,b){b=b||{},b.expires=new Date(0),e._setRaw(a,"",b)}},f=function(){var b;try{b=a.top.location.href}catch(c){}return b=b||(a.top===a.self?a.location.href:a.document.referrer)}(),g=(f.split("#")[1]||"").split("?")[0]||"",h=(f.split("?")[1]||"").split("#")[0]||"",i=(g+"&"+h).replace(/</g,"").replace(/>/g,"").replace(/"/g,"").replace(/'/g,""),j=function(){var a,b=i.split("&"),d={},f="sinaads_server_preview",g="sinaads_preview_date",h=0,j=0,k=c(new Date,"yyyyMMddHH"),l=e.get("sinaads_ip");for(h=0,j=b.length;j>h;h++)(a=b[h])&&(a=a.split("="),a[0]===g&&a[1]&&(k=a[1]));for(h=0,j=b.length;j>h;h++)(a=b[h])&&(a=a.split("="),a[0]===f&&(d[a[1]]=k+(l?"&tgip="+l:"")));return d}();a.getSinaadsServerPreviewSlots=function(){return d(j)}}(window);
/*
//@ sourceMappingURL=sinaadsServerPreviewSlots.js.map
*/