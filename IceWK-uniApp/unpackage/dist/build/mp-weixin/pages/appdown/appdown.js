(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/appdown/appdown"],{"0049":function(e,n,t){"use strict";var o=t("5fd1"),i=t.n(o);i.a},3876:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("a8d7"));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){t.e("components/circleCard").then(function(){return resolve(t("101f"))}.bind(null,t)).catch(t.oe)},l=2,c=4,s={components:{circleCard:u},data:function(){return{displays:[{cover:"/static/logo/yclogo.png",title:"myp-grid",desc:"宫格：支持badge",label:"宫格",page:"base_grid"},{cover:"/static/logo/yclogo.png",title:"myp-cell",desc:"单元：icon-label-value-indicator四段式",label:"单元",page:"base_cell"},{cover:"/static/logo/yclogo.png",title:"myp-icon",desc:"图标：字体图标，支持图片",label:"图标",page:"base_icon"}],showlist:"",swiper:[],tag:[],hotlist:[],newList:[],recommend:[],indexList:[],urls:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],keyword:""}},onLoad:function(){this.getswiper(),this.gettag(),this.getnewlist(),this.gethotlist()},onPullDownRefresh:function(){this.getswiper(),this.gettag(),this.getnewlist(),this.gethotlist(),this.page=2,setTimeout((function(){e.showToast({title:"刷新成功"}),e.stopPullDownRefresh()}),1e3)},onReachBottom:function(){var n=this;e.request({url:o.default.GetPosts(l,c),success:function(t){"0"!=t.data.data.length?(l+=1,n.newList=n.newList.concat(t.data.data),e.hideLoading(),setTimeout((function(){e.stopPullDownRefresh()}),100)):e.showToast({icon:"none",title:"暂无更多"})}})},methods:{MergeArray:function(e,n){for(var t=new Array,o=0;o<e.length;o++)t.push(e[o]);for(o=0;o<n.length;o++){for(var i=!0,u=0;u<e.length;u++)if(n[o]==e[u]){i=!1;break}i&&t.push(n[o])}return t},goSwiper:function(n){var t=n,o=this.swiper[t].post[0].cid,i=this.swiper[t].post[0].title;e.navigateTo({url:"/subPage/commen/appdetails?cid="+o+"&name="+i}),console.log(o)},goDetails:function(n,t){e.navigateTo({url:"/subPage/commen/appdetails?id="+n+"&name="+t})},goPost:function(){var n=this.swiper[0].posts;if(console.log(n),"0"===n){var t=this.swiper[0].qqfurm;plus.runtime.openURL("mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26jump_from%3Dwebapi%26k%3D"+t)}else e.navigateTo({url:"/subPage/commen/post"})},goSearch:function(n){e.navigateTo({url:"/subPage/commen/appsearchlist?keyword="+n})},tolink:function(){e.navigateTo({url:"/subPage/commen/apptaglist"})},getnewlist:function(){var n=this;e.request({url:o.default.GetPosts(1,c),success:function(e){console.log(e);var t=e.data;"undefined"!=typeof t||"none"!=e.data?(n.showlist=!0,n.newList=e.data.data):n.showlist=!1}})},gethotlist:function(){var n=this;e.request({url:o.default.GetHot(),success:function(e){n.hotlist=e.data.data}})},getswiper:function(){var n=this;e.request({url:o.default.GetSwiperPost(),success:function(e){for(var t=0;t<e.data.length;t++)n.swiper.unshift(e.data[t].img)}})},gettag:function(){var n=this;e.request({url:o.default.GetTag(),success:function(e){n.tag=e.data.data}})},left:function(){console.log("left")},right:function(){console.log("right")},showMore:function(){e.$u.toast("查看更多")},click:function(){console.log("Cell is clicked.")},rightClick:function(){console.log("rightClick")},radioClick:function(n,t){e.navigateTo({url:"/subPage/commen/commenlist?mid="+t+"&name="+n})}}};n.default=s}).call(this,t("543d")["default"])},"5fd1":function(e,n,t){},"7d8b":function(e,n,t){"use strict";t.r(n);var o=t("3876"),i=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=i.a},a22a:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={nListCell:function(){return t.e("nPro/list-cell/list-cell").then(t.bind(null,"721c"))},nSearch:function(){return Promise.all([t.e("common/vendor"),t.e("nPro/search/search")]).then(t.bind(null,"a085"))},uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"b3a4"))},uSearch:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-search/u-search")]).then(t.bind(null,"1a0c"))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"1b47"))},uSwiper:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(t.bind(null,"2150"))},oGrid:function(){return t.e("uni_modules/o-grid/components/o-grid/o-grid").then(t.bind(null,"40ff"))},oGridItem:function(){return t.e("uni_modules/o-grid/components/o-grid-item/o-grid-item").then(t.bind(null,"d6ec"))},uCellGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell-group/u-cell-group")]).then(t.bind(null,"eff9"))},uCell:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell/u-cell")]).then(t.bind(null,"e75b"))},uScrollList:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-scroll-list/u-scroll-list")]).then(t.bind(null,"c377"))},uTag:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(t.bind(null,"9071"))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(t.bind(null,"f3af"))}},i=function(){var e=this,n=e.$createElement;e._self._c},u=[]},de08:function(e,n,t){"use strict";t.r(n);var o=t("a22a"),i=t("7d8b");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("0049");var l,c=t("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);n["default"]=s.exports},e976:function(e,n,t){"use strict";(function(e){t("c6ef");o(t("66fd"));var n=o(t("de08"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e976","common/runtime","common/vendor"]]]);