(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"54+C":function(e,t,r){"use strict";var a=r("3j6f");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("cFIA")),u=a(r("Qp3r")),s=r("fbMS"),i={namespace:"listSearchApplications",state:{list:[]},effects:{fetch:u.default.mark(function e(t,r){var a,n,i,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,i=r.put,e.next=4,n(s.queryFakeList,a);case 4:return c=e.sent,e.next=7,i({type:"queryList",payload:Array.isArray(c)?c:[]});case 7:case"end":return e.stop()}},e)})},reducers:{queryList:function(e,t){return(0,n.default)({},e,{list:t.payload})}}},c=i;t.default=c},fbMS:function(e,t,r){"use strict";var a=r("3j6f");Object.defineProperty(t,"__esModule",{value:!0}),t.queryFakeList=i;var n=a(r("Qp3r")),u=a(r("U39Q")),s=a(r("sy1d"));function i(e){return c.apply(this,arguments)}function c(){return c=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/fake_list",{params:t}));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}}}]);
//# sourceMappingURL=p__list__search__applications__model.ts.4d107ff2.async.js.map