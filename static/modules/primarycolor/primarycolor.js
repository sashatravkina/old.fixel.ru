/**
 * -------------------------------------------------------------------------------------------
 * jquery.primarycolor.js v1.2.2
 * Licensed under MIT (https://github.com/rythgs/jquery.primarycolor.js/blob/master/LICENCE)
 * -------------------------------------------------------------------------------------------
 */
!function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery"),window,document):t(jQuery,window,document)}(function(t,i,e,r){function n(i,e){this.element=i,this.settings=t.extend({},o,this.configure(e)),this._defaults=o,this._name=a,this.primary={rgb:"",count:0},this.init()}var a="primaryColor",o={skip:5,callback:null};t.extend(n.prototype,{init:function(){var i=new Image;i.crossOrigin="Anonymous",t(i).on("load",t.proxy(this.onLoad,this)).prop("src",this.element.src||"")},configure:function(t){return"function"==typeof t?{callback:t}:"object"!=typeof t&&t?{}:t},getImageData:function(t){var i=e.createElement("canvas"),r=i.getContext("2d");return i.width=t.width,i.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,t.width,t.height)},isApproximateColor:function(t,i){if(!t||!i)return!1;var e=t.split(","),r=i.split(","),n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)<60},onLoad:function(i){for(var e=this.getImageData(i.currentTarget).data,r=e.length/4,n={},a=0;a<r;a+=4*this.settings.skip)if(!(e[a+3]<255)){var o=[e[a],e[a+1],e[a+2]].join(",");this.primary.rgb&&this.isApproximateColor(this.primary.rgb,o)&&(o=this.primary.rgb),n[o]=n[o]||0;var s=++n[o];s>this.primary.count&&(this.primary.rgb=o,this.primary.count=s)}t.data(this.element,"primary-color",this.primary.rgb),"function"==typeof this.settings.callback&&this.settings.callback.call(this.element,this.primary.rgb)}}),t.fn[a]=function(i){return this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new n(this,i))})}});
