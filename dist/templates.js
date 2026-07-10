// GENERATED FILE - run `npm run build` after editing anything under src/pug. Do not hand-edit.
(function (global) {
  var templates = {};

  templates.docHeader = (function () {
    function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_docHeader(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (badgeText, claimNo, title) {
      pug_mixins["docHeader"] = pug_interp = function(title, claimNo, badgeText){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"doc-header\"\u003E\u003Cdiv class=\"brand\"\u003E\u003Cimg class=\"brand-logo\" src=\"..\u002Fassets\u002Fwcb-logo.svg\" alt=\"Workers Compensation Board of Manitoba\"\u002F\u003E\u003Cdiv class=\"brand-address\"\u003E\u003Cdiv\u003E333 Broadway\u003C\u002Fdiv\u003E\u003Cdiv\u003EWinnipeg, MB R3C 4W3\u003C\u002Fdiv\u003E\u003Cdiv\u003EPhone: 204-954-4321\u003C\u002Fdiv\u003E\u003Cdiv\u003EToll Free: 1-855-954-4321\u003C\u002Fdiv\u003E\u003Cdiv\u003Ewww.wcb.mb.ca\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"brand-title\"\u003E\u003Ch1\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cdiv class=\"badge-row\"\u003E\u003Cspan class=\"badge\"\u003EClaim No. " + (pug_escape(null == (pug_interp = claimNo) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (badgeText) {
pug_html = pug_html + "\u003Cspan class=\"badge\"\u003E" + (pug_escape(null == (pug_interp = badgeText) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};




pug_mixins["docHeader"](title, claimNo, badgeText);
    }.call(this, "badgeText" in locals_for_with ?
        locals_for_with.badgeText :
        typeof badgeText !== 'undefined' ? badgeText : undefined, "claimNo" in locals_for_with ?
        locals_for_with.claimNo :
        typeof claimNo !== 'undefined' ? claimNo : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;;return pug_html;}
    return tpl_docHeader;
  })();

  templates.docFooter = (function () {
    function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_docFooter(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (pageIndex, submittedDate, submittedTime, totalPages, workerAppId) {
      







pug_mixins["docFooter"] = pug_interp = function(workerAppId, submittedDate, submittedTime, pageIndex, totalPages){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"doc-footer\"\u003E\u003Cspan class=\"footer-id\"\u003EWorker App ID: " + (pug_escape(null == (pug_interp = workerAppId) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv class=\"footer-right\"\u003E\u003Cspan class=\"footer-submitted\"\u003ESubmitted: " + (pug_escape(null == (pug_interp = submittedDate) ? "" : pug_interp)) + " " + (pug_escape(null == (pug_interp = submittedTime) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"footer-page\"\u003EPage " + (pug_escape(null == (pug_interp = pageIndex) ? "" : pug_interp)) + " of " + (pug_escape(null == (pug_interp = totalPages) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_mixins["docFooter"](workerAppId, submittedDate, submittedTime, pageIndex, totalPages);
    }.call(this, "pageIndex" in locals_for_with ?
        locals_for_with.pageIndex :
        typeof pageIndex !== 'undefined' ? pageIndex : undefined, "submittedDate" in locals_for_with ?
        locals_for_with.submittedDate :
        typeof submittedDate !== 'undefined' ? submittedDate : undefined, "submittedTime" in locals_for_with ?
        locals_for_with.submittedTime :
        typeof submittedTime !== 'undefined' ? submittedTime : undefined, "totalPages" in locals_for_with ?
        locals_for_with.totalPages :
        typeof totalPages !== 'undefined' ? totalPages : undefined, "workerAppId" in locals_for_with ?
        locals_for_with.workerAppId :
        typeof workerAppId !== 'undefined' ? workerAppId : undefined));
    ;;return pug_html;}
    return tpl_docFooter;
  })();

  templates.wpIntro = (function () {
    function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpIntro(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (workerName) {
      pug_html = pug_html + "\u003Cp class=\"worker-info\"\u003E" + (pug_escape(null == (pug_interp = workerName + ' provided the following updates in relation to their claim:') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }.call(this, "workerName" in locals_for_with ?
        locals_for_with.workerName :
        typeof workerName !== 'undefined' ? workerName : undefined));
    ;;return pug_html;}
    return tpl_wpIntro;
  })();

  templates.wpReturnToWork = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpReturnToWork(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (rtw) {
      pug_mixins["sectionTitle"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ch2 class=\"section-title\"\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
};
pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["optionLine"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-line\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["readonlyLine"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cp class=\"readonly-line\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
};
pug_mixins["readonlyTextarea"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field-textbox\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
};
pug_mixins["inlineField"] = pug_interp = function(value, caption){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"inline-field\"\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"field-caption\"\u003E" + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["sectionTitle"]('Return to Work');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'I have not missed time from work', checked: rtw.status === 'notMissed' },
      { text: 'I have not returned to work', checked: rtw.status === 'notReturned' },
      { text: 'I returned to work on:', checked: rtw.status === 'returnedOn', note: rtw.status === 'returnedOn' ? rtw.returnedOnDate : null }
    ]);
}
}, 'Select one:');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'Full duties, regular hours', checked: rtw.workingMode === 'fullRegular' },
      { text: 'Full duties, reduced hours', checked: rtw.workingMode === 'fullReduced' }
    ]);
pug_mixins["optionLine"]([
      { text: 'Modified duties, regular hours', checked: rtw.workingMode === 'modifiedRegular' },
      { text: 'Modified duties, reduced hours', checked: rtw.workingMode === 'modifiedReduced' }
    ]);
}
}, 'I am working:');
if (rtw.other) {
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyLine"](rtw.other);
}
}, 'Other:');
}
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyTextarea"](rtw.goingComment);
}
}, 'My return to work is going:');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["inlineField"](rtw.expectedReturnDate, 'Date');
}
}, 'I expect to return to work on:');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyTextarea"](rtw.concerns);
}
}, 'I have the following concerns about returning to work:');
pug_mixins["fieldBox"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"inline-field\"\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = rtw.contactName || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"field-caption\"\u003Eon\u003C\u002Fspan\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = rtw.contactDate || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sublabels\"\u003E\u003Cspan\u003E(Name of employer contact)\u003C\u002Fspan\u003E\u003Cspan\u003E(Date)\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
}, 'I was most recently in contact with:');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "rtw" in locals_for_with ?
        locals_for_with.rtw :
        typeof rtw !== 'undefined' ? rtw : undefined));
    ;;return pug_html;}
    return tpl_wpReturnToWork;
  })();

  templates.wpRecovery = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpRecovery(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (recovery) {
      pug_mixins["sectionTitle"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ch2 class=\"section-title\"\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
};
pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["optionLine"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-line\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};




pug_mixins["readonlyTextarea"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field-textbox\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
};




pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["sectionTitle"]('Recovery');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'I have not fully recovered from my workplace injury.', checked: recovery.status === 'notRecovered' },
      { text: 'I have fully recovered from my workplace injury.', checked: recovery.status === 'fullyRecovered' }
    ]);
}
}, 'Select one:');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyTextarea"](recovery.comments);
}
}, 'I have provided the following comments about my recovery:');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "recovery" in locals_for_with ?
        locals_for_with.recovery :
        typeof recovery !== 'undefined' ? recovery : undefined));
    ;;return pug_html;}
    return tpl_wpRecovery;
  })();

  templates.wpPainScale = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpPainScale(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (painScale) {
      pug_html = pug_html + "\u003Cdiv class=\"pain-section\"\u003E\u003Cp class=\"pain-label\"\u003EI rate my current pain\u002Fdiscomfort on a scale of 1-10, where 1 is no pain and 10 is severe pain out of 10.\u003C\u002Fp\u003E\u003Cdiv class=\"pain-options\"\u003E";
// iterate [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
;(function(){
  var $$obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var n = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", (painScale === n), true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var n = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", (painScale === n), true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "painScale" in locals_for_with ?
        locals_for_with.painScale :
        typeof painScale !== 'undefined' ? painScale : undefined));
    ;;return pug_html;}
    return tpl_wpPainScale;
  })();

  templates.wpMedicalTreatment = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpMedicalTreatment(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (mt) {
      



pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["optionLine"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-line\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["readonlyLine"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cp class=\"readonly-line\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
};








pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'I am not continuing to receive medical treatment for my workplace injury.', checked: mt.status === 'notContinuing' },
      { text: 'I am continuing to receive medical treatment for my workplace injury:', checked: mt.status === 'continuing', note: mt.status === 'continuing' ? mt.providerType : null }
    ]);
pug_html = pug_html + "\u003Cp class=\"sublabel\"\u003E(Medical Provider Type)\u003C\u002Fp\u003E";
}
}, 'Select one:');
pug_mixins["fieldBox"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"inline-field\"\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = mt.lastTreatmentDate || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"field-caption\"\u003Efrom\u003C\u002Fspan\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = mt.lastTreatmentProvider || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"sublabel\"\u003E(Date) (Medical Provider Name)\u003C\u002Fp\u003E";
}
}, 'My last medical treatment was');
pug_mixins["fieldBox"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"inline-field\"\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = mt.nextTreatmentDate || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"field-caption\"\u003Efrom\u003C\u002Fspan\u003E\u003Cspan class=\"value-underline\"\u003E" + (pug_escape(null == (pug_interp = mt.nextTreatmentProvider || '—') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"sublabel\"\u003E(Date) (Medical Provider Name)\u003C\u002Fp\u003E";
}
}, 'My next medical treatment is');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyLine"](mt.physioFrequency);
pug_html = pug_html + "\u003Cp class=\"sublabel\"\u003E(Frequency)\u003C\u002Fp\u003E";
}
}, 'I am attending a Chiropractor or Physiotherapist');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "mt" in locals_for_with ?
        locals_for_with.mt :
        typeof mt !== 'undefined' ? mt : undefined));
    ;;return pug_html;}
    return tpl_wpMedicalTreatment;
  })();

  templates.wpMedication = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpMedication(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (medication) {
      



pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["optionLine"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-line\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};












pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'I am not taking medication for my workplace injury.', checked: medication.status === 'notTaking' },
      { text: 'I am taking medication for my workplace injury:', checked: medication.status === 'taking', note: medication.status === 'taking' ? medication.name : null }
    ]);
pug_html = pug_html + "\u003Cp class=\"sublabel\"\u003E(Name of prescribed medication)\u003C\u002Fp\u003E";
}
}, 'Select one:');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "medication" in locals_for_with ?
        locals_for_with.medication :
        typeof medication !== 'undefined' ? medication : undefined));
    ;;return pug_html;}
    return tpl_wpMedication;
  })();

  templates.wpExercises = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpExercises(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (exercises) {
      



pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["optionLine"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-line\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Clabel class=\"option\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", opt.checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = opt.text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (opt.note) {
pug_html = pug_html + "\u003Cspan class=\"note-value\"\u003E" + (pug_escape(null == (pug_interp = opt.note) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};




pug_mixins["readonlyTextarea"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field-textbox\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
};




pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["optionLine"]([
      { text: 'I am not doing home exercises for my workplace injury.', checked: exercises.status === 'notDoing' },
      { text: 'I am doing home exercises for my workplace injury.', checked: exercises.status === 'doing' }
    ]);
}
}, 'Select one:');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyTextarea"](exercises.list);
}
}, 'List the exercises you are doing:');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "exercises" in locals_for_with ?
        locals_for_with.exercises :
        typeof exercises !== 'undefined' ? exercises : undefined));
    ;;return pug_html;}
    return tpl_wpExercises;
  })();

  templates.wpOtherInfo = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpOtherInfo(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (otherInfo) {
      pug_mixins["sectionTitle"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ch2 class=\"section-title\"\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
};
pug_mixins["fieldBox"] = pug_interp = function(label){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box\"\u003E";
if (label) {
pug_html = pug_html + "\u003Cp class=\"box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};

























pug_mixins["readonlyTextarea"] = pug_interp = function(value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field-textbox\"\u003E" + (pug_escape(null == (pug_interp = value || '—') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
};




pug_html = pug_html + "\u003Csection class=\"section-box\"\u003E";
pug_mixins["sectionTitle"]('Other Information');
pug_mixins["fieldBox"].call({
block: function(){
pug_mixins["readonlyTextarea"](otherInfo);
}
}, 'I would like to provide the following additional information about my claim/injury:');
pug_html = pug_html + "\u003C\u002Fsection\u003E";
    }.call(this, "otherInfo" in locals_for_with ?
        locals_for_with.otherInfo :
        typeof otherInfo !== 'undefined' ? otherInfo : undefined));
    ;;return pug_html;}
    return tpl_wpOtherInfo;
  })();

  templates.wpDeclarations = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_wpDeclarations(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (declarations) {
      pug_html = pug_html + "\u003Cdiv class=\"declaration-section\"\u003E\u003Cdiv class=\"declaration-box\"\u003E\u003Clabel class=\"declaration\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", declarations.certifyTrue, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003EI certify that the information given on this form is true, correct and complete to the best of my knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I become aware of any change in my circumstances. I understand that it is an offence to withhold information from WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or follow, my treatment plan may result in the WCB reducing or suspending my benefits.\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"declaration-box\"\u003E\u003Clabel class=\"declaration\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", declarations.privacyAcknowledged, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003EI understand that the\n\u003Ca class=\"link\" href=\"#\"\u003EPrivacy Notice\u003C\u002Fa\u003E\napplies to the personal information collected in this document.\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "declarations" in locals_for_with ?
        locals_for_with.declarations :
        typeof declarations !== 'undefined' ? declarations : undefined));
    ;;return pug_html;}
    return tpl_wpDeclarations;
  })();

  templates.meIntro = (function () {
    function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_meIntro(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (workerName) {
      pug_html = pug_html + "\u003Cp class=\"worker-info\"\u003E" + (pug_escape(null == (pug_interp = workerName + ' requested reimbursement for the following medical and/or travel expenses:') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }.call(this, "workerName" in locals_for_with ?
        locals_for_with.workerName :
        typeof workerName !== 'undefined' ? workerName : undefined));
    ;;return pug_html;}
    return tpl_meIntro;
  })();

  templates.meCategoryHeader = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function tpl_meCategoryHeader(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (columns, note, title) {
      pug_mixins["categoryHeader"] = pug_interp = function(columns){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"data-table\"\u003E\u003Ccolgroup\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var col = $$obj[pug_index0];
pug_html = pug_html + "\u003Ccol" + (pug_attr("style", pug_style(`width:${col.width}%`), true, false)) + "\u002F\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var col = $$obj[pug_index0];
pug_html = pug_html + "\u003Ccol" + (pug_attr("style", pug_style(`width:${col.width}%`), true, false)) + "\u002F\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fcolgroup\u003E\u003Cthead\u003E\u003Ctr\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var col = $$obj[pug_index1];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col.label) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var col = $$obj[pug_index1];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col.label) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003C\u002Ftable\u003E";
};






















pug_html = pug_html + "\u003Cdiv\u003E\u003Ch2 class=\"section-heading\"\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
if (note) {
pug_html = pug_html + "\u003Cp class=\"expense-note\"\u003E" + (pug_escape(null == (pug_interp = note) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_mixins["categoryHeader"](columns);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }.call(this, "columns" in locals_for_with ?
        locals_for_with.columns :
        typeof columns !== 'undefined' ? columns : undefined, "note" in locals_for_with ?
        locals_for_with.note :
        typeof note !== 'undefined' ? note : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;;return pug_html;}
    return tpl_meCategoryHeader;
  })();

  templates.meCategoryRow = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function tpl_meCategoryRow(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (columns, values) {
      





















pug_mixins["categoryRow"] = pug_interp = function(columns, values){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"data-table data-table--row\"\u003E\u003Ccolgroup\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var col = $$obj[pug_index2];
pug_html = pug_html + "\u003Ccol" + (pug_attr("style", pug_style(`width:${col.width}%`), true, false)) + "\u002F\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var col = $$obj[pug_index2];
pug_html = pug_html + "\u003Ccol" + (pug_attr("style", pug_style(`width:${col.width}%`), true, false)) + "\u002F\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fcolgroup\u003E\u003Ctbody\u003E\u003Ctr\u003E";
// iterate values
;(function(){
  var $$obj = values;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var val = $$obj[pug_index3];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = val || '—') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var val = $$obj[pug_index3];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = val || '—') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
pug_mixins["categoryRow"](columns, values);
    }.call(this, "columns" in locals_for_with ?
        locals_for_with.columns :
        typeof columns !== 'undefined' ? columns : undefined, "values" in locals_for_with ?
        locals_for_with.values :
        typeof values !== 'undefined' ? values : undefined));
    ;;return pug_html;}
    return tpl_meCategoryRow;
  })();

  templates.meTotal = (function () {
    function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_meTotal(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (total) {
      pug_html = pug_html + "\u003Cdiv class=\"total-box\"\u003E\u003Cspan\u003ETotal Amount Requested\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = '$' + total.toFixed(2)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "total" in locals_for_with ?
        locals_for_with.total :
        typeof total !== 'undefined' ? total : undefined));
    ;;return pug_html;}
    return tpl_meTotal;
  })();

  templates.mePrivacy = (function () {
    function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function tpl_mePrivacy(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (checked) {
      pug_html = pug_html + "\u003Cdiv class=\"privacy-section\"\u003E\u003Clabel class=\"checkbox-container\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", checked, true, false)+" disabled=\"disabled\" tabindex=\"-1\"") + "\u002F\u003E\u003Cspan\u003EI understand that the\n\u003Ca class=\"link\" href=\"#\"\u003EPrivacy Notice\u003C\u002Fa\u003E\napplies to the personal information collected in this document.\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "checked" in locals_for_with ?
        locals_for_with.checked :
        typeof checked !== 'undefined' ? checked : undefined));
    ;;return pug_html;}
    return tpl_mePrivacy;
  })();

  global.templates = templates;
})(window);
