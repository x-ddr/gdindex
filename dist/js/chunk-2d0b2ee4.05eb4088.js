(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ee4"],{"25e0":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("table",{staticClass:"table is-hoverable"},[e("thead",[e("tr",t._l(t.columns,(function(i,s){return e("th",{key:s,class:i.class,style:i.style},[t._v(" "+t._s(i.name)+" "),t._m(0,!0)])})),0)]),e("tbody",t._l(t.data,(function(i,s){return e("tr",{key:s},[e("td",{attrs:{title:i.name},on:{click:function(e){return e.target!==e.currentTarget?null:t.action(i,"application/vnd.google-apps.folder"!==i.mimeType?"view":"")}}},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.icons(i.mimeType)}})]),t._v(" "+t._s(i.name)+" "),t.isShowDesc?e("span",{staticClass:"has-text-grey g2-file-desc",domProps:{innerHTML:t._s(i.description)}}):t._e()]),e("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[t._v(" "+t._s(i.modifiedTime)+" ")]),e("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[t._v(t._s(i.size))]),e("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(i,"copy")}}},[e("i",{staticClass:"fa fa-copy faa-shake animated-hover",attrs:{title:t.$t("list.opt.copy"),"aria-hidden":"true"}})]),e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(i,"_blank")}}},[e("i",{staticClass:"fa fa-external-link faa-shake animated-hover",attrs:{title:t.$t("list.opt.newTab"),"aria-hidden":"true"}})]),"application/vnd.google-apps.folder"!==i.mimeType?e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(i,"down")}}},[e("i",{staticClass:"fa fa-download faa-shake animated-hover",attrs:{"aria-hidden":"true",title:t.$t("list.opt.download")}})]):t._e()])])})),0)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"caret-wrapper"},[e("i",{staticClass:"sort-caret ascending"}),e("i",{staticClass:"sort-caret descending"})])}],n={props:{data:{type:Array,default:function(){return[]}},icons:{type:Function},action:{type:Function}},computed:{columns:function(){return[{name:this.$t("list.title.file"),style:""},{name:this.$t("list.title.moditime"),style:"width:20%",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.size"),style:"width:10.5%",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.operation"),style:"width:13.5%",class:"is-hidden-mobile is-hidden-touch"}]},isShowDesc:function(){return window.themeOptions.render.desc||!1}}},o=n,c=e("9ca4"),l=Object(c["a"])(o,s,a,!1,null,null,null);i["default"]=l.exports}}]);