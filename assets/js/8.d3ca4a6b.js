(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(t,n,e){var o=e(1),i=e(4),s=e(93),r=[].slice,u=function(t){return function(n,e){var o=arguments.length>2,i=o?r.call(arguments,2):void 0;return t(o?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:u(i.setTimeout),setInterval:u(i.setInterval)})},457:function(t,n,e){},470:function(t,n,e){"use strict";e.r(n);e(307);var o=e(0),i=(e(457),{name:"render-audio",props:{obj:{type:Object,required:!1}},data:function(){return{synthControl:null}},mounted:function(){var t=this;o.a.nextTick((function(){var n=e(303);t.synthControl=new n.synth.SynthController,t.synthControl.load(t.$refs.audio,null,{displayLoop:!0,displayRestart:!0,displayPlay:!0,displayProgress:!0,displayWarp:!0}),t.setTune()}))},methods:{setTune:function(){var t=this;this.obj.tune?this.synthControl.setTune(this.obj.tune.getObj(),!1):setTimeout((function(){t.setTune()}),100)}}}),s=e(44),r=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("ClientOnly",[n("div",{ref:"audio",staticClass:"render-audio"})])}),[],!1,null,null,null);n.default=r.exports}}]);