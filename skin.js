// Garden Gnome Software - Skin
// Pano2VR 6.1.7/17955
// Filename: friendsseminary.ggsk
// Generated 2020-09-02T12:56:35

function pano2vrSkin(player,base) {
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('category_follow', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('close_nodes_1', 2, false);
	player.addVariable('category_visible_1', 2, true);
	player.addVariable('open_tag_1', 0, "");
	player.addVariable('close_nodes_2', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._trigger=document.createElement('div');
		el.ggId="trigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 594px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._trigger.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._trigger.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._trigger);
		el=me._hotspots=document.createElement('div');
		el.ggId="hotspots";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspots.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_video=document.createElement('div');
		els=me._marker_video__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTUgNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIGN5PSIyNy41IiByPSIyNSIgc3R5bGU9ImZpbGw6I2Q3MjgyZjtzdHJva2U6I2Q3MjgyZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NXB4OyBmaWxsLW9wYWNpdHk6MTsgc3Ryb2tlLW9wYWNpdHk6MSIvPgo8L3N2Zz4K';
		me._marker_video__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_video.onclick=function (e) {
			p23(0)
		}
		me._marker_video.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMC4zIDE2LjgiIHZlcnNpb249IjEuMSIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMC4zIDE2Ljg7IiB5PS'+
			'IwcHgiIHg9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjEsMEgzLjNDMS41LDAsMCwxLjUsMCwzLjN2MTAuMmMwLDEuOCwxLjUsMy4zLDMuMywzLjNIMTdjMS44LDAsMy4zLTEuNSwzLjMtMy4zVjMuMyYjeGE7JiN4OTtDMjAuNCwxLjUsMTguOSwwLDE3LjEsMHogTTcuMywxMi45VjQuMWw3LjgsNC40TDcuMywxMi45eiIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._marker_video.appendChild(me._svg_3);
		me._hotspots.appendChild(me._marker_video);
		el=me._marker_photo=document.createElement('div');
		els=me._marker_photo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTUgNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIGN5PSIyNy41IiByPSIyNSIgc3R5bGU9ImZpbGw6I2Q3MjgyZjtzdHJva2U6I2Q3MjgyZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NXB4OyBmaWxsLW9wYWNpdHk6MTsgc3Ryb2tlLW9wYWNpdHk6MSIvPgo8L3N2Zz4K';
		me._marker_photo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -86px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_photo.onclick=function (e) {
			p23(0)
		}
		me._marker_photo.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMy4yIDE4LjQiIHZlcnNpb249IjEuMSIgaWQ9ImVsZW1lbnRzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMy4yIDE4LjQ7IiB5PS'+
			'IwcHgiIHg9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmNmY1ZWQ7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPGNpcmNsZSBjeD0iMTEuNCIgY2xhc3M9InN0MCIgY3k9IjEwIiByPSIzLjEiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC4yLDIuNWgtMy41YzAtMC4yLTAuMS0wLjQtMC4xLTAuNmMwLTEtMC44LTEuOC0xLjgtMS44SDguNWMtMSwwLTEuOCwwLjgtMS45LDEuOGMwLDAuMiwwLDAuNC0wLjEsMC42SDMmI3hhOyYjeDk7Yy0xLjYsMC0zLDEuNC0zLDN2OS45YzAsMS42LDEuNCwzLDMsM2gxNy4yYzEuNiwwLDMtMS40LDMtM1Y1'+
			'LjVDMjMuMiwzLjksMjEuOSwyLjUsMjAuMiwyLjV6IE0xMS40LDE1Yy0yLjgsMC01LTIuMi01LTVzMi4yLTUsNS01JiN4YTsmI3g5O3M1LDIuMiw1LDVDMTYuNCwxMi43LDE0LjIsMTQuOSwxMS40LDE1eiIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._marker_photo.appendChild(me._svg_2);
		me._hotspots.appendChild(me._marker_photo);
		el=me._marker_360=document.createElement('div');
		els=me._marker_360__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTUgNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIGN5PSIyNy41IiByPSIyNSIgc3R5bGU9ImZpbGw6I2Q3MjgyZjtzdHJva2U6I2Q3MjgyZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NXB4OyBmaWxsLW9wYWNpdHk6MTsgc3Ryb2tlLW9wYWNpdHk6MSIvPgo8L3N2Zz4K';
		me._marker_360__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_360";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -139px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_360.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_360.onclick=function (e) {
			p23(0)
		}
		me._marker_360.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNiAyMS41IiB2ZXJzaW9uPSIxLjEiIGlkPSJwaWVjZXMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI2IDIxLjU7IiB5PSIwcHgiIH'+
			'g9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmdvPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMy4xLDMuN2MxLjUsMCwyLjksMC41LDQuMSwxLjRsMi42LTIuNmMtNC40LTMuNy0xMS0zLjItMTQuNywxLjNjLTEuNCwxLjctMi4zLDMuOC0yLjQsNkgwbDMuNiw1bDEsMS40JiN4YTsmI3g5O0w2LjgsMTNsMi4zLTMuM0g2LjNDNi43LDYuMyw5LjYsMy43LDEzLjEsMy43eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLDE3LjljLTEuNSwwLTIuOS0wLjUtNC4xLTEuNGwtMi42LDIuNmM0LjQsMy43LDEx'+
			'LDMsMTQuNy0xLjRjMS40LTEuNywyLjItMy44LDIuNC02SDI2bC0zLjYtNS4xbC0xLTEuNCYjeGE7JiN4OTtsLTIuMiwzLjJMMTcsMTEuOGgyLjhDMTkuNCwxNS4zLDE2LjUsMTcuOSwxMywxNy45eiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._marker_360.appendChild(me._svg_1);
		me._hotspots.appendChild(me._marker_360);
		me.divSkin.appendChild(me._hotspots);
		el=me._directions=document.createElement('div');
		els=me._directions__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="directions";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d2976.275045209117!2d-73.1924682488121!3d41.75772738081513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e790b63124f4cf%3A0xe8b9c56d31aeb189!2sForman%20School!5e0!3m2!1sen!2sus!4v1584974535317!5m2!1sen!2sus\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"><\/iframe>";
		el.appendChild(els);
		me._directions.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._directions.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._directions);
		el=me.__360s=document.createElement('div');
		els=me.__360s__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 999px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 1332px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__360s.ggScrollByX = function(diffX) {
			if(!me.__360s.ggHorScrollVisible || diffX == 0 || me.__360s.ggHPercentVisible >= 1.0) return;
			me.__360s.ggScrollPosX = (me.__360s__horScrollFg.offsetLeft + diffX);
			me.__360s.ggScrollPosX = Math.max(me.__360s.ggScrollPosX, 0);
			me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
			me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
			me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + me.__360s.ggContentLeftOffset + 'px';
			me.__360s.ggScrollPosXPercent = (me.__360s__horScrollFg.offsetLeft / me.__360s__horScrollBg.offsetWidth);
		}
		me.__360s.ggScrollByXSmooth = function(diffX) {
			if(!me.__360s.ggHorScrollVisible || diffX == 0 || me.__360s.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__360s.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__360s.ggScrollPosX >= me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth)) {
					me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__360s.ggScrollPosX <= 0)) {
					me.__360s.ggScrollPosX = Math.max(me.__360s.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
			me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + me.__360s.ggContentLeftOffset + 'px';
			me.__360s.ggScrollPosXPercent = (me.__360s__horScrollFg.offsetLeft / me.__360s__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__360s.ggScrollByY = function(diffY) {
			if(!me.__360s.ggVertScrollVisible || diffY == 0 || me.__360s.ggVPercentVisible >= 1.0) return;
			me.__360s.ggScrollPosY = (me.__360s__vertScrollFg.offsetTop + diffY);
			me.__360s.ggScrollPosY = Math.max(me.__360s.ggScrollPosY, 0);
			me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
			me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
			me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + me.__360s.ggContentTopOffset + 'px';
			me.__360s.ggScrollPosYPercent = (me.__360s__vertScrollFg.offsetTop / me.__360s__vertScrollBg.offsetHeight);
		}
		me.__360s.ggScrollByYSmooth = function(diffY) {
			if(!me.__360s.ggVertScrollVisible || diffY == 0 || me.__360s.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__360s.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__360s.ggScrollPosY >= me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight)) {
					me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__360s.ggScrollPosY <= 0)) {
					me.__360s.ggScrollPosY = Math.max(me.__360s.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
			me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + me.__360s.ggContentTopOffset + 'px';
			me.__360s.ggScrollPosYPercent = (me.__360s__vertScrollFg.offsetTop / me.__360s__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__360s.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__360s.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__360s.ggHPercentVisible);
					me.__360s.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__360s.offsetWidth - (me.__360s.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__360s.offsetWidth - (me.__360s.ggVertScrollVisible ? 15 : 0))) * me.__360s.ggHPercentVisible);
					me.__360s.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__360s.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__360s.ggVPercentVisible);
					me.__360s.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__360s.offsetHeight - (me.__360s.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__360s.offsetHeight - (me.__360s.ggHorScrollVisible ? 15 : 0))) * me.__360s.ggVPercentVisible);
					me.__360s.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me.__360s.ggDragLastX = t[0].clientX;
			me.__360s.ggDragLastY = t[0].clientY;
			me.__360s__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByX(-me.__360s.ggDragInertiaX);
					me.__360s.ggScrollByY(-me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0 && Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me.__360s__content.ontouchend = null;
				me.__360s__content.ontouchmove = null;
			}
			me.__360s__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me.__360s.ggDragLastX;
				var diffY = t[0].clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastX = t[0].clientX;
				me.__360s.ggDragLastY = t[0].clientY;
				me.__360s.ggScrollByX(-diffX);
				me.__360s.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me.__360s__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 2000px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me.__360s__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2000px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me.__360s.ggScrollPosX = 0;
		me.__360s.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__360s.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggScrollByX(me.__360s.ggDragInertiaX);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me.__360s.ggDragLastX;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragLastX = e.clientX;
				me.__360s.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__360s.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaX *= 0.65;
					me.__360s.ggScrollByX(me.__360s.ggDragInertiaX);
					if (Math.abs(me.__360s.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me.__360s.ggDragLastX;
				me.__360s.ggDragInertiaX = diffX;
				me.__360s.ggDragLastX = t[0].clientX;
				me.__360s.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me.__360s.ggScrollWidth;
			if (e.offsetX < me.__360s.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__360s.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__360s__horScrollBg.getBoundingClientRect();
			var diffX = me.__360s.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me.__360s.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me.__360s.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me.__360s.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me.__360s__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 1000px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__360s__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 1000px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__360s.ggScrollPosY = 0;
		me.__360s.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__360s.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByY(me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastY = e.clientY;
				me.__360s.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__360s.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__360s.ggDragInertiaY *= 0.65;
					me.__360s.ggScrollByY(me.__360s.ggDragInertiaY);
					if (Math.abs(me.__360s.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me.__360s.ggDragLastY;
				me.__360s.ggDragInertiaY = diffY;
				me.__360s.ggDragLastY = t[0].clientY;
				me.__360s.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__360s.ggScrollHeight;
			if (e.offsetY < me.__360s.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__360s.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__360s__vertScrollBg.getBoundingClientRect();
			var diffY = me.__360s.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__360s.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__360s.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__360s.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me.__360s__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="360s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 0px;';
		hs+='height : calc(100%  -  90px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='map';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me.__360s.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360s.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me.__360s__horScrollBg.style.visibility = 'inherit';
					me.__360s__horScrollFg.style.visibility = 'inherit';
					me.__360s.ggHorScrollVisible = true;
				} else {
					me.__360s__horScrollBg.style.visibility = 'hidden';
					me.__360s__horScrollFg.style.visibility = 'hidden';
					me.__360s.ggHorScrollVisible = false;
				}
				if ((me.__360s.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me.__360s.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me.__360s__vertScrollBg.style.visibility = 'inherit';
					me.__360s__vertScrollFg.style.visibility = 'inherit';
					me.__360s.ggVertScrollVisible = true;
					if (!me.__360s.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me.__360s__vertScrollBg.getBoundingClientRect().width)) {
						me.__360s__horScrollBg.style.visibility = 'inherit';
						me.__360s__horScrollFg.style.visibility = 'inherit';
						me.__360s.ggHorScrollVisible = true;
					}
				} else {
					me.__360s__vertScrollBg.style.visibility = 'hidden';
					me.__360s__vertScrollFg.style.visibility = 'hidden';
					me.__360s.ggVertScrollVisible = false;
				}
				if(me.__360s.ggHorScrollVisible) {
					me.__360s.ggAvailableHeight = me.__360s.offsetHeight - 15;
					if (me.__360s.ggVertScrollVisible) {
						me.__360s.ggAvailableWidth = me.__360s.offsetWidth - 15;
						me.__360s.ggAvailableWidthWithScale = me.__360s.getBoundingClientRect().width - me.__360s__horScrollBg.getBoundingClientRect().height;
					} else {
						me.__360s.ggAvailableWidth = me.__360s.offsetWidth;
						me.__360s.ggAvailableWidthWithScale = me.__360s.getBoundingClientRect().width;
					}
					me.__360s__horScrollBg.style.width = me.__360s.ggAvailableWidth + 'px';
					me.__360s.ggHPercentVisible = contentWidth != 0 ? me.__360s.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me.__360s.ggHPercentVisible > 1.0) me.__360s.ggHPercentVisible = 1.0;
					me.__360s.ggScrollWidth = Math.round(me.__360s__horScrollBg.offsetWidth * me.__360s.ggHPercentVisible);
					me.__360s__horScrollFg.style.width = me.__360s.ggScrollWidth + 'px';
					me.__360s.ggScrollPosX = me.__360s.ggScrollPosXPercent * me.__360s.ggAvailableWidth;
					me.__360s.ggScrollPosX = Math.min(me.__360s.ggScrollPosX, me.__360s__horScrollBg.offsetWidth - me.__360s__horScrollFg.offsetWidth);
					me.__360s__horScrollFg.style.left = me.__360s.ggScrollPosX + 'px';
					if (me.__360s.ggHPercentVisible < 1.0) {
						me.__360s__content.style.left = -(Math.round(me.__360s.ggScrollPosX / me.__360s.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me.__360s.ggAvailableHeight = me.__360s.offsetHeight;
					me.__360s.ggScrollPosX = 0;
					me.__360s.ggScrollPosXPercent = 0.0;
					me.__360s__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me.__360s.ggVertScrollVisible) {
					me.__360s.ggAvailableWidth = me.__360s.offsetWidth - 15;
					if (me.__360s.ggHorScrollVisible) {
						me.__360s.ggAvailableHeight = me.__360s.offsetHeight - 15;
						me.__360s.ggAvailableHeightWithScale = me.__360s.getBoundingClientRect().height - me.__360s__vertScrollBg.getBoundingClientRect().width;
						me.__360s__cornerBg.style.visibility = 'inherit';
					} else {
						me.__360s.ggAvailableHeight = me.__360s.offsetHeight;
						me.__360s.ggAvailableHeightWithScale = me.__360s.getBoundingClientRect().height;
						me.__360s__cornerBg.style.visibility = 'hidden';
					}
					me.__360s__vertScrollBg.style.height = me.__360s.ggAvailableHeight + 'px';
					me.__360s.ggVPercentVisible = contentHeight != 0 ? me.__360s.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__360s.ggVPercentVisible > 1.0) me.__360s.ggVPercentVisible = 1.0;
					me.__360s.ggScrollHeight =  Math.round(me.__360s__vertScrollBg.offsetHeight * me.__360s.ggVPercentVisible);
					me.__360s__vertScrollFg.style.height = me.__360s.ggScrollHeight + 'px';
					me.__360s.ggScrollPosY = me.__360s.ggScrollPosYPercent * me.__360s.ggAvailableHeight;
					me.__360s.ggScrollPosY = Math.min(me.__360s.ggScrollPosY, me.__360s__vertScrollBg.offsetHeight - me.__360s__vertScrollFg.offsetHeight);
					me.__360s__vertScrollFg.style.top = me.__360s.ggScrollPosY + 'px';
					if (me.__360s.ggVPercentVisible < 1.0) {
						me.__360s__content.style.top = -(Math.round(me.__360s.ggScrollPosY / me.__360s.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me.__360s.ggAvailableWidth = me.__360s.offsetWidth;
					me.__360s.ggScrollPosY = 0;
					me.__360s.ggScrollPosYPercent = 0.0;
					me.__360s__content.style.top = this.ggContentTopOffset + 'px';
					me.__360s__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__360s.ggHorScrollVisible || vertScrollWasVisible != me.__360s.ggVertScrollVisible) {
					me.updateSize(me.__360s);
					me.__360s.ggUpdatePosition();
				}
			}
		}
		el=me._campusmap=document.createElement('div');
		els=me._campusmap__img=document.createElement('img');
		els.className='ggskin ggskin_campusmap';
		hs=basePath + 'images/campusmap.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="campusmap";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 1000px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._campusmap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._campusmap.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 508px;';
		hs+='position : absolute;';
		hs+='top : 484px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1.onclick=function (e) {
			OuterCourtyard(0)
		}
		me.__1.onmouseover=function (e) {
			me.elementMouseOver['_1']=true;
			me._ring1.logicBlock_visible();
		}
		me.__1.onmouseout=function (e) {
			me.elementMouseOver['_1']=false;
			me._ring1.logicBlock_visible();
		}
		me.__1.ontouchend=function (e) {
			me.elementMouseOver['_1']=false;
			me._ring1.logicBlock_visible();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip13=document.createElement('div');
		els=me._tooltip13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		hs+='text';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Outer<br\/>Courtyard";
		el.appendChild(els);
		me._tooltip13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip13.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__1.appendChild(me._tooltip13);
		el=me._number8=document.createElement('div');
		els=me._number8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="1";
		el.appendChild(els);
		me._number8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number8.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._number8);
		el=me._ring1=document.createElement('div');
		els=me._ring1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_1'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring1.style[domTransition]='';
				if (me._ring1.ggCurrentLogicStateVisible == 0) {
					me._ring1.style.visibility="hidden";
					me._ring1.ggVisible=false;
				}
				else if (me._ring1.ggCurrentLogicStateVisible == 1) {
					me._ring1.style.visibility=(Number(me._ring1.style.opacity)>0||!me._ring1.style.opacity)?'inherit':'hidden';
					me._ring1.ggVisible=true;
				}
				else {
					me._ring1.style.visibility="hidden";
					me._ring1.ggVisible=false;
				}
			}
		}
		me._ring1.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._ring1);
		me._campusmap.appendChild(me.__1);
		el=me.__3=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 552px;';
		hs+='position : absolute;';
		hs+='top : 649px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3.onclick=function (e) {
			CentralBuilding(0)
		}
		me.__3.onmouseover=function (e) {
			me.elementMouseOver['_3']=true;
			me._ring3.logicBlock_visible();
		}
		me.__3.onmouseout=function (e) {
			me.elementMouseOver['_3']=false;
			me._ring3.logicBlock_visible();
		}
		me.__3.ontouchend=function (e) {
			me.elementMouseOver['_3']=false;
			me._ring3.logicBlock_visible();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip12=document.createElement('div');
		els=me._tooltip12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Central Building";
		el.appendChild(els);
		me._tooltip12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip12.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__3.appendChild(me._tooltip12);
		el=me._number7=document.createElement('div');
		els=me._number7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="3";
		el.appendChild(els);
		me._number7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number7.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._number7);
		el=me._ring3=document.createElement('div');
		els=me._ring3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_3'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring3.style[domTransition]='';
				if (me._ring3.ggCurrentLogicStateVisible == 0) {
					me._ring3.style.visibility="hidden";
					me._ring3.ggVisible=false;
				}
				else if (me._ring3.ggCurrentLogicStateVisible == 1) {
					me._ring3.style.visibility=(Number(me._ring3.style.opacity)>0||!me._ring3.style.opacity)?'inherit':'hidden';
					me._ring3.ggVisible=true;
				}
				else {
					me._ring3.style.visibility="hidden";
					me._ring3.ggVisible=false;
				}
			}
		}
		me._ring3.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._ring3);
		me._campusmap.appendChild(me.__3);
		el=me.__4=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 790px;';
		hs+='position : absolute;';
		hs+='top : 619px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4.onclick=function (e) {
			InnerCourtyard(0)
		}
		me.__4.onmouseover=function (e) {
			me.elementMouseOver['_4']=true;
			me._ring4.logicBlock_visible();
		}
		me.__4.onmouseout=function (e) {
			me.elementMouseOver['_4']=false;
			me._ring4.logicBlock_visible();
		}
		me.__4.ontouchend=function (e) {
			me.elementMouseOver['_4']=false;
			me._ring4.logicBlock_visible();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip11=document.createElement('div');
		els=me._tooltip11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Inner Courtyard";
		el.appendChild(els);
		me._tooltip11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip11.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__4.appendChild(me._tooltip11);
		el=me._number6=document.createElement('div');
		els=me._number6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="4";
		el.appendChild(els);
		me._number6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number6.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._number6);
		el=me._ring4=document.createElement('div');
		els=me._ring4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_4'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring4.style[domTransition]='';
				if (me._ring4.ggCurrentLogicStateVisible == 0) {
					me._ring4.style.visibility="hidden";
					me._ring4.ggVisible=false;
				}
				else if (me._ring4.ggCurrentLogicStateVisible == 1) {
					me._ring4.style.visibility=(Number(me._ring4.style.opacity)>0||!me._ring4.style.opacity)?'inherit':'hidden';
					me._ring4.ggVisible=true;
				}
				else {
					me._ring4.style.visibility="hidden";
					me._ring4.ggVisible=false;
				}
			}
		}
		me._ring4.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._ring4);
		me._campusmap.appendChild(me.__4);
		el=me.__5=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 554px;';
		hs+='position : absolute;';
		hs+='top : 786px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__5.onclick=function (e) {
			LaunchFancybox('videos/OldSchoolhouse.html', 900, 507, 'iframe')
		}
		me.__5.onmouseover=function (e) {
			me.elementMouseOver['_5']=true;
			me._ring5.logicBlock_visible();
		}
		me.__5.onmouseout=function (e) {
			me.elementMouseOver['_5']=false;
			me._ring5.logicBlock_visible();
		}
		me.__5.ontouchend=function (e) {
			me.elementMouseOver['_5']=false;
			me._ring5.logicBlock_visible();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip10=document.createElement('div');
		els=me._tooltip10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Old<br\/>Schoolhouse";
		el.appendChild(els);
		me._tooltip10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip10.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__5.appendChild(me._tooltip10);
		el=me._number5=document.createElement('div');
		els=me._number5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="5";
		el.appendChild(els);
		me._number5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number5.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._number5);
		el=me._ring5=document.createElement('div');
		els=me._ring5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_5'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring5.style[domTransition]='';
				if (me._ring5.ggCurrentLogicStateVisible == 0) {
					me._ring5.style.visibility="hidden";
					me._ring5.ggVisible=false;
				}
				else if (me._ring5.ggCurrentLogicStateVisible == 1) {
					me._ring5.style.visibility=(Number(me._ring5.style.opacity)>0||!me._ring5.style.opacity)?'inherit':'hidden';
					me._ring5.ggVisible=true;
				}
				else {
					me._ring5.style.visibility="hidden";
					me._ring5.ggVisible=false;
				}
			}
		}
		me._ring5.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._ring5);
		me._campusmap.appendChild(me.__5);
		el=me.__6=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 777px;';
		hs+='position : absolute;';
		hs+='top : 769px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__6.onclick=function (e) {
			LaunchFancybox('videos/HunterHall.html', 900, 507, 'iframe')
		}
		me.__6.onmouseover=function (e) {
			me.elementMouseOver['_6']=true;
			me._ring6.logicBlock_visible();
		}
		me.__6.onmouseout=function (e) {
			me.elementMouseOver['_6']=false;
			me._ring6.logicBlock_visible();
		}
		me.__6.ontouchend=function (e) {
			me.elementMouseOver['_6']=false;
			me._ring6.logicBlock_visible();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip9=document.createElement('div');
		els=me._tooltip9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hunter Hall";
		el.appendChild(els);
		me._tooltip9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip9.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__6.appendChild(me._tooltip9);
		el=me._number4=document.createElement('div');
		els=me._number4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="6";
		el.appendChild(els);
		me._number4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number4.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._number4);
		el=me._ring6=document.createElement('div');
		els=me._ring6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_6'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring6.style[domTransition]='';
				if (me._ring6.ggCurrentLogicStateVisible == 0) {
					me._ring6.style.visibility="hidden";
					me._ring6.ggVisible=false;
				}
				else if (me._ring6.ggCurrentLogicStateVisible == 1) {
					me._ring6.style.visibility=(Number(me._ring6.style.opacity)>0||!me._ring6.style.opacity)?'inherit':'hidden';
					me._ring6.ggVisible=true;
				}
				else {
					me._ring6.style.visibility="hidden";
					me._ring6.ggVisible=false;
				}
			}
		}
		me._ring6.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me._ring6);
		me._campusmap.appendChild(me.__6);
		el=me.__7=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1027px;';
		hs+='position : absolute;';
		hs+='top : 757px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__7.onclick=function (e) {
			LaunchFancybox('videos/TownhouseBuilding.html', 900, 507, 'iframe')
		}
		me.__7.onmouseover=function (e) {
			me.elementMouseOver['_7']=true;
			me._ring7.logicBlock_visible();
		}
		me.__7.onmouseout=function (e) {
			me.elementMouseOver['_7']=false;
			me._ring7.logicBlock_visible();
		}
		me.__7.ontouchend=function (e) {
			me.elementMouseOver['_7']=false;
			me._ring7.logicBlock_visible();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip8=document.createElement('div');
		els=me._tooltip8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Townhouse Building";
		el.appendChild(els);
		me._tooltip8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip8.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__7.appendChild(me._tooltip8);
		el=me._number3=document.createElement('div');
		els=me._number3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="7";
		el.appendChild(els);
		me._number3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number3.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._number3);
		el=me._ring7=document.createElement('div');
		els=me._ring7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_7'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring7.style[domTransition]='';
				if (me._ring7.ggCurrentLogicStateVisible == 0) {
					me._ring7.style.visibility="hidden";
					me._ring7.ggVisible=false;
				}
				else if (me._ring7.ggCurrentLogicStateVisible == 1) {
					me._ring7.style.visibility=(Number(me._ring7.style.opacity)>0||!me._ring7.style.opacity)?'inherit':'hidden';
					me._ring7.ggVisible=true;
				}
				else {
					me._ring7.style.visibility="hidden";
					me._ring7.ggVisible=false;
				}
			}
		}
		me._ring7.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._ring7);
		me._campusmap.appendChild(me.__7);
		el=me.__8=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 717px;';
		hs+='position : absolute;';
		hs+='top : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__8.onclick=function (e) {
			Annex(0)
		}
		me.__8.onmouseover=function (e) {
			me.elementMouseOver['_8']=true;
			me._ring8.logicBlock_visible();
		}
		me.__8.onmouseout=function (e) {
			me.elementMouseOver['_8']=false;
			me._ring8.logicBlock_visible();
		}
		me.__8.ontouchend=function (e) {
			me.elementMouseOver['_8']=false;
			me._ring8.logicBlock_visible();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip7=document.createElement('div');
		els=me._tooltip7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Annex";
		el.appendChild(els);
		me._tooltip7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip7.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__8.appendChild(me._tooltip7);
		el=me._number2=document.createElement('div');
		els=me._number2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="8";
		el.appendChild(els);
		me._number2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number2.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._number2);
		el=me._ring8=document.createElement('div');
		els=me._ring8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_8'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring8.style[domTransition]='';
				if (me._ring8.ggCurrentLogicStateVisible == 0) {
					me._ring8.style.visibility="hidden";
					me._ring8.ggVisible=false;
				}
				else if (me._ring8.ggCurrentLogicStateVisible == 1) {
					me._ring8.style.visibility=(Number(me._ring8.style.opacity)>0||!me._ring8.style.opacity)?'inherit':'hidden';
					me._ring8.ggVisible=true;
				}
				else {
					me._ring8.style.visibility="hidden";
					me._ring8.ggVisible=false;
				}
			}
		}
		me._ring8.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._ring8);
		me._campusmap.appendChild(me.__8);
		el=me.__9=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1124px;';
		hs+='position : absolute;';
		hs+='top : 464px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__9.onclick=function (e) {
			LowerSchool(0)
		}
		me.__9.onmouseover=function (e) {
			me.elementMouseOver['_9']=true;
			me._ring9.logicBlock_visible();
		}
		me.__9.onmouseout=function (e) {
			me.elementMouseOver['_9']=false;
			me._ring9.logicBlock_visible();
		}
		me.__9.ontouchend=function (e) {
			me.elementMouseOver['_9']=false;
			me._ring9.logicBlock_visible();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip6=document.createElement('div');
		els=me._tooltip6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lower School";
		el.appendChild(els);
		me._tooltip6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip6.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._tooltip6);
		el=me._number1=document.createElement('div');
		els=me._number1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="9";
		el.appendChild(els);
		me._number1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number1.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._number1);
		el=me._ring9=document.createElement('div');
		els=me._ring9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_9'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring9.style[domTransition]='';
				if (me._ring9.ggCurrentLogicStateVisible == 0) {
					me._ring9.style.visibility="hidden";
					me._ring9.ggVisible=false;
				}
				else if (me._ring9.ggCurrentLogicStateVisible == 1) {
					me._ring9.style.visibility=(Number(me._ring9.style.opacity)>0||!me._ring9.style.opacity)?'inherit':'hidden';
					me._ring9.ggVisible=true;
				}
				else {
					me._ring9.style.visibility="hidden";
					me._ring9.ggVisible=false;
				}
			}
		}
		me._ring9.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._ring9);
		me._campusmap.appendChild(me.__9);
		el=me.__10=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 1124px;';
		hs+='position : absolute;';
		hs+='top : 544px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__10.onclick=function (e) {
			MiddleSchool(0)
		}
		me.__10.onmouseover=function (e) {
			me.elementMouseOver['_10']=true;
			me._ring10.logicBlock_visible();
		}
		me.__10.onmouseout=function (e) {
			me.elementMouseOver['_10']=false;
			me._ring10.logicBlock_visible();
		}
		me.__10.ontouchend=function (e) {
			me.elementMouseOver['_10']=false;
			me._ring10.logicBlock_visible();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip5=document.createElement('div');
		els=me._tooltip5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Middle School";
		el.appendChild(els);
		me._tooltip5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip5.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._tooltip5);
		el=me._number0=document.createElement('div');
		els=me._number0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="10";
		el.appendChild(els);
		me._number0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number0.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._number0);
		el=me._ring10=document.createElement('div');
		els=me._ring10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_10'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring10.style[domTransition]='';
				if (me._ring10.ggCurrentLogicStateVisible == 0) {
					me._ring10.style.visibility="hidden";
					me._ring10.ggVisible=false;
				}
				else if (me._ring10.ggCurrentLogicStateVisible == 1) {
					me._ring10.style.visibility=(Number(me._ring10.style.opacity)>0||!me._ring10.style.opacity)?'inherit':'hidden';
					me._ring10.ggVisible=true;
				}
				else {
					me._ring10.style.visibility="hidden";
					me._ring10.ggVisible=false;
				}
			}
		}
		me._ring10.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._ring10);
		me._campusmap.appendChild(me.__10);
		el=me.__11=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 745px;';
		hs+='position : absolute;';
		hs+='top : 477px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__11.onclick=function (e) {
			LaunchFancybox('videos/MeetingHouse4.html', 900, 507, 'iframe')
		}
		me.__11.onmouseover=function (e) {
			me.elementMouseOver['_11']=true;
			me._ring11.logicBlock_visible();
		}
		me.__11.onmouseout=function (e) {
			me.elementMouseOver['_11']=false;
			me._ring11.logicBlock_visible();
		}
		me.__11.ontouchend=function (e) {
			me.elementMouseOver['_11']=false;
			me._ring11.logicBlock_visible();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip4=document.createElement('div');
		els=me._tooltip4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Meetinghouse";
		el.appendChild(els);
		me._tooltip4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__11.appendChild(me._tooltip4);
		el=me._number=document.createElement('div');
		els=me._number__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="number";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="2";
		el.appendChild(els);
		me._number.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._number.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._number);
		el=me._ring11=document.createElement('div');
		els=me._ring11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiBpZD0iZWxlbWVudHMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojOGM4MjdhO30KPC9zdHlsZT4KIDx0aXRsZT5ob3RzcG90PC90aXRsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwyYzkuOSwwLDE4LDguMSwxOCwxOHMtOC4xLDE4LTE4LDE4UzIsMjkuOSwyLDIwUzEwLjEsMiwyMCwyIE0yMCwwQzksMCwwLDksMCwyMHM5LDIwLDIwLDIwczIwLTksMjAtMjAmI3hhOyYjeDk7UzMxLDAsMjAsMEwyMCwweiIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLDQuMmM4LjcsMCwxNS44LDcuMSwxNS44LDE1LjhTMjguNywzNS44LDIwLDM1LjhTNC4yLDI4LjcsNC4yLDIwUzEx'+
			'LjMsNC4yLDIwLDQuMiBNMjAsMEM5LDAsMCw5LDAsMjAmI3hhOyYjeDk7JiN4OTtTOSw0MCwyMCw0MFM0MCwzMSw0MCwyMFMzMSwwLDIwLDBMMjAsMHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ring11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ring11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['_11'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ring11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ring11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ring11.style[domTransition]='';
				if (me._ring11.ggCurrentLogicStateVisible == 0) {
					me._ring11.style.visibility="hidden";
					me._ring11.ggVisible=false;
				}
				else if (me._ring11.ggCurrentLogicStateVisible == 1) {
					me._ring11.style.visibility=(Number(me._ring11.style.opacity)>0||!me._ring11.style.opacity)?'inherit':'hidden';
					me._ring11.ggVisible=true;
				}
				else {
					me._ring11.style.visibility="hidden";
					me._ring11.ggVisible=false;
				}
			}
		}
		me._ring11.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._ring11);
		me._campusmap.appendChild(me.__11);
		el=me._scrollertrigger=document.createElement('div');
		el.ggId="scrollertrigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffaaff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 1200px;';
		hs+='position : absolute;';
		hs+='top : 450px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollertrigger.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollertrigger.ggUpdatePosition=function (useTransition) {
		}
		me._campusmap.appendChild(me._scrollertrigger);
		el=me._tooltip3=document.createElement('div');
		els=me._tooltip3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 1011px;';
		hs+='position : absolute;';
		hs+='top : 666px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Great Room";
		el.appendChild(els);
		me._tooltip3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._campusmap.appendChild(me._tooltip3);
		el=me._tooltip2=document.createElement('div');
		els=me._tooltip2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 735px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="East 15th Street";
		el.appendChild(els);
		me._tooltip2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._campusmap.appendChild(me._tooltip2);
		el=me._tooltip1=document.createElement('div');
		els=me._tooltip1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 749px;';
		hs+='position : absolute;';
		hs+='top : 956px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="East 16th Street";
		el.appendChild(els);
		me._tooltip1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._campusmap.appendChild(me._tooltip1);
		el=me._tooltip0=document.createElement('div');
		els=me._tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 156px;';
		hs+='position : absolute;';
		hs+='top : 552px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Stuyvesant<br\/>Square Park";
		el.appendChild(els);
		me._tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip0.ggUpdatePosition=function (useTransition) {
		}
		me._campusmap.appendChild(me._tooltip0);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 23px;';
		hs+='left : 339px;';
		hs+='position : absolute;';
		hs+='top : 571px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Rutherford Place";
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((65-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._campusmap.appendChild(me._tooltip);
		me.__360s__content.appendChild(me._campusmap);
		me.divSkin.appendChild(me.__360s);
		el=me._circlescapes=document.createElement('div');
		els=me._circlescapes__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTM5LjUgNDMuNSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cG9seWdvbiBwb2ludHM9Ii0xNy4xNSAtMjQgLTE2LjE1IC0yNCAtMTcuMTUgLTIzIC0xNy4xNSAtMjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iaSI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTE5LjE1IC0yNiAtMjAuMTUgLTI2IC0xOS4xNSAtMjcgLTE5LjE1IC0yNiIgc3R5bGU9ImZpbGw6bm9uZT'+
			'tjbGlwLXBhdGg6dXJsKCNhKSIvPgogIDwvY2xpcFBhdGg+CiAgPGxpbmVhckdyYWRpZW50IHgxPSItNTUxNy45NSIgeDI9Ii01NTE3Ljk1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC01NTAyLjIgLTE3NDcuMzcpIHJvdGF0ZSgxODApIiBpZD0iaiIgeTE9Ii0xNzg2LjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9Ii0xNzcxLjA5Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgb2Zmc2V0PSIwLjE1Ii8+CiAgIDxzdG9wIHN0b3Atb3BhY2l0eT0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgb2Zmc2V0PSIwLjU0Ii8+CiAgIDxzdG9wIHN0b3Atb3BhY2l0eT0i'+
			'MSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgb2Zmc2V0PSIwLjgxIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IHgxPSItNTQ5My4xMyIgeDI9Ii01NDkzLjEzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNzk0LjMyIC01NDY5LjIzKSByb3RhdGUoLTkwKSIgaWQ9ImwiIHkxPSIzNzk0LjMyIiB4bGluazpocmVmPSIjaiIgeTI9IjM4MDkuODIiLz4KICA8bGluZWFyR3JhZGllbnQgeDE9IjYzLjIyIiB4Mj0iNjMuMjIiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3ODEuNjkgLTM5LjYyKSByb3RhdGUoOT'+
			'ApIiBpZD0ibiIgeTE9Ii0xODEyLjcyIiB4bGluazpocmVmPSIjaiIgeTI9Ii0xNzk3LjIyIi8+CiAgPGxpbmVhckdyYWRpZW50IHgxPSItMjY5Ni45MSIgeDI9Ii0yNjk2LjkxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTc5LjM5IC01Mzg0LjkxKSByb3RhdGUoLTQ1KSIgaWQ9InAiIHkxPSI0OTM2Ljc5IiB4bGluazpocmVmPSIjaiIgeTI9IjQ5NTIuMjkiLz4KICA8bGluZWFyR3JhZGllbnQgeDE9Ii0yNzMyLjgzIiB4Mj0iLTI3MzIuODMiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5OTUuMzIgLTEyMi41KSByb3RhdGUoMTM1KSIgaWQ9InIiIHkxPSItMjk1NS4w'+
			'MyIgeGxpbms6aHJlZj0iI2oiIHkyPSItMjkzOS41MyIvPgogIDxsaW5lYXJHcmFkaWVudCB4MT0iLTY2NjEuNDQiIHgyPSItNjY2MS40NCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQxOS41IC0zOTYxLjc2KSByb3RhdGUoLTEzNSkiIGlkPSJ0IiB5MT0iMTAwOS4zNiIgeGxpbms6aHJlZj0iI2oiIHkyPSIxMDI0Ljg2Ii8+CiAgPGxpbmVhckdyYWRpZW50IHgxPSIxMjMxLjg1IiB4Mj0iMTIzMS44NSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU3LjEgLTE1NDUuODQpIHJvdGF0ZSg0NSkiIGlkPSJ2IiB5MT0iOTcyLjQiIHhsaW5rOmhyZWY9IiNqIiB5Mj0iOTg3Lj'+
			'g4Ii8+CiAgPGxpbmVhckdyYWRpZW50IHgxPSI4Ny45NSIgeDI9Ijg3Ljk1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC03Mi42IC0zNzYwKSIgaWQ9IngiIHkxPSIzNzY4LjMiIHhsaW5rOmhyZWY9IiNqIiB5Mj0iMzc4My44Ii8+CiA8L2RlZnM+CiA8dGl0bGU+Y2lyY2xlc2NhcGVzMjwvdGl0bGU+CiA8cGF0aCBkPSJNNDMuMywyNy4xYTUuNDUsNS40NSwwLDAsMS0yLjIuNWMtMiwwLTMuNC0xLjQtMy40LTMuNywwLTIuMSwxLjItMy43LDMuNS0zLjdhNC4wNiw0LjA2LDAsMCwxLDIuMS41bC40LTEuNGE3LDcsMCwwLDAtMi41LS41QTUsNSwwLDAsMCwzNS45LDI0YTQuNjUsNC42NSww'+
			'LDAsMCw0LjksNSw2LjcxLDYuNzEsMCwwLDAsMi44LS42bC0uMy0xLjNaIiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTQ3LjUsMjguOFYxOC45SDQ1Ljd2OS45Wm0tLjktMTMuN2ExLjExLDEuMTEsMCwwLDAtMS4xLDEuMXYuMWExLjEsMS4xLDAsMSwwLDIuMiwwQTEuMTMsMS4xMywwLDAsMCw0Ni42LDE1LjFaIiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTUwLjUsMjguOGgxLjhWMjMuNmEyLDIsMCwwLDEsLjEtLjgsMi40OCwyLjQ4LDAsMCwxLDIuNC0yLjMsMS4yNywxLjI3LDAsMCwxLC42LjFWMTguOW'+
			'MtLjIsMC0uMy0uMS0uNS0uMUEyLjgzLDIuODMsMCwwLDAsNTIuMiwyMUg1MlYxOUg1MC40YTI5LjEyLDI5LjEyLDAsMCwxLC4xLDMuMVoiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8cGF0aCBkPSJNNjMuNiwyNy4xYTUuNDUsNS40NSwwLDAsMS0yLjIuNWMtMiwwLTMuNC0xLjQtMy40LTMuNywwLTIuMSwxLjItMy43LDMuNS0zLjdhNC4wNiw0LjA2LDAsMCwxLDIuMS41bC40LTEuNGE3LDcsMCwwLDAtMi41LS41QTUsNSwwLDAsMCw1Ni4yLDI0YTQuNjUsNC42NSwwLDAsMCw0LjksNSw2LjcxLDYuNzEsMCwwLDAsMi44LS42bC0uMy0xLjNaIiBzdHlsZT0iZmlsbDoj'+
			'ZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBvbHlnb24gcG9pbnRzPSI2NiA0My41IDY3LjggNDMuNSA2Ny44IDAgNjYgMCA2NiA0My41IiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTc4LjgsMjQuMmMwLS4zLjEtLjYuMS0uOCwwLTEuOC0uOS00LjYtNC4xLTQuNi0yLjksMC00LjYsMi4zLTQuNiw1LjNzMS44LDUsNC44LDVhOS42LDkuNiwwLDAsMCwzLjMtLjZMNzgsMjcuMWE2LjQ2LDYuNDYsMCwwLDEtMi43LjUsMy4xOSwzLjE5LDAsMCwxLTMuNC0zLjRabS02LjktMS4zYy4xLTEuMi45LTIuOSwyLjctMi45LDIsMCwyLjUsMS44LDIuNSwyLj'+
			'laIiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTgwLjIsMjguM2E3LjExLDcuMTEsMCwwLDAsMy4yLjdjMi45LDAsNC4zLTEuNCw0LjMtMy4yLDAtMS41LS44LTIuNC0yLjctMy4xLTEuMi0uNC0xLjYtLjctMS42LTEuMXMuNC0uOCwxLjItLjhhNC4yOCw0LjI4LDAsMCwxLDIuMi42bC41LTIuMWE2LjcxLDYuNzEsMCwwLDAtMi44LS42Yy0yLjUsMC00LDEuNC00LDMuMywwLDEuMi44LDIuMywyLjgsMywxLjIuNCwxLjUuNiwxLjUsMS4xcy0uNC44LTEuMy44YTUuNiw1LjYsMCwwLDEtMi43LS44bC0uNiwyLjJaIiBzdHlsZT0iZmlsbDojZmZmZmZmOyBm'+
			'aWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTk2LjcsMjYuM2E1LjY2LDUuNjYsMCwwLDEtMS44LjMsMi42LDIuNiwwLDAsMS0yLjctMi44QTIuNiwyLjYsMCwwLDEsOTQuOSwyMWE0LjY3LDQuNjcsMCwwLDEsMS43LjNMOTcsMTlhNi43Miw2LjcyLDAsMCwwLTIuNC0uNEM5MSwxOC42LDg5LDIxLDg5LDIzLjksODksMjcsOTEuMSwyOSw5NC4zLDI5YTYuOTIsNi45MiwwLDAsMCwyLjgtLjVsLS40LTIuMloiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8cGF0aCBkPSJNMTA3LjIsMjIuOWMwLTIuMy0xLjEtNC4zLTQuNC00LjNhOC45MSw4LjkxLDAsMCwwLTMuOS45bC'+
			'42LDJhNi40OSw2LjQ5LDAsMCwxLDIuNy0uOGMxLjUsMCwxLjguOCwxLjgsMS4zdi4xYy0zLjUsMC01LjgsMS4yLTUuOCwzLjhhMy4wOCwzLjA4LDAsMCwwLDMuMiwzLjEsMy43LDMuNywwLDAsMCwyLjktMS4yaC4xbC4yLDFoMi44YTkuNjYsOS42NiwwLDAsMS0uMS0yLjRsLS4xLTMuNVptLTMsMi4zYS45LjksMCwwLDEtLjEuNSwxLjYyLDEuNjIsMCwwLDEtMS42LDEuMSwxLjEsMS4xLDAsMCwxLTEuMi0xLjJjMC0xLjIsMS4zLTEuNiwyLjktMS42djEuMloiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8cGF0aCBkPSJNMTA5LjYsMzIuOGgzLjFWMjcuOWgwYTIuOTIs'+
			'Mi45MiwwLDAsMCwyLjYsMS4xYzIuMiwwLDQuNS0xLjcsNC41LTUuMywwLTMuMi0yLTUuMS00LjEtNS4xYTMuNywzLjcsMCwwLDAtMy4zLDEuNmgwbC0uMS0xLjRoLTIuN2MwLC45LjEsMiwuMSwzLjNsLS4xLDEwLjdabTMuMS05LjZhLjc1Ljc1LDAsMCwxLC4xLS41LDIsMiwwLDAsMSwxLjktMS42YzEuNCwwLDIuMSwxLjIsMi4xLDIuOHMtLjgsMi44LTIuMSwyLjhhMS44MiwxLjgyLDAsMCwxLTEuOC0xLjVjMC0uMi0uMS0uNC0uMS0uN2wtLjEtMS4zWiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiLz4KIDxwYXRoIGQ9Ik0xMzAuNiwyNC44YTQuODcsNC44NywwLDAsMCwuMS'+
			'0xLjJjMC0yLjUtMS4yLTUtNC40LTUtMy41LDAtNSwyLjgtNSw1LjMsMCwzLjEsMS45LDUuMSw1LjMsNS4xYTEwLjg4LDEwLjg4LDAsMCwwLDMuNi0uNmwtLjQtMi4xYTguNDIsOC40MiwwLDAsMS0yLjcuNGMtMS40LDAtMi43LS42LTIuOC0xLjlabS02LjUtMi4xYTIsMiwwLDAsMSwxLjktMiwxLjc4LDEuNzgsMCwwLDEsMS43LDJaIiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggZD0iTTEzMiwyOC4zYTcuMTEsNy4xMSwwLDAsMCwzLjIuN2MyLjksMCw0LjMtMS40LDQuMy0zLjIsMC0xLjUtLjgtMi40LTIuNy0zLjEtMS4yLS40LTEuNi0uNy0xLjYtMS4xcy40'+
			'LS44LDEuMi0uOGE0LjI4LDQuMjgsMCwwLDEsMi4yLjZsLjUtMi4xYTYuNzEsNi43MSwwLDAsMC0yLjgtLjZjLTIuNSwwLTQsMS40LTQsMy4zLDAsMS4yLjgsMi4zLDIuOCwzLDEuMi40LDEuNS42LDEuNSwxLjFzLS40LjgtMS4zLjhhNS42LDUuNiwwLDAsMS0yLjctLjhsLS42LDIuMloiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8cGF0aCBkPSJNNzEuNCw0MS43YTMuMTcsMy4xNywwLDAsMCwxLjYuNGMxLjUsMCwyLjMtLjksMi4zLTEuOWExLjYyLDEuNjIsMCwwLDAtMS40LTEuNmgwYTEuNTYsMS41NiwwLDAsMCwxLjItMS41YzAtLjgtLjYtMS41LTEuOC0xLjVhMi'+
			'43NywyLjc3LDAsMCwwLTEuNi41bC4yLjZhMiwyLDAsMCwxLDEuMy0uNGMuOCwwLDEuMS40LDEuMS45LDAsLjctLjgsMS4xLTEuNCwxLjFoLS41di42aC41Yy44LDAsMS42LjQsMS42LDEuMywwLC41LS4zLDEuMi0xLjQsMS4yYTIuMywyLjMsMCwwLDEtMS40LS40bC0uMy43Wm04LjUtNi4xaC0uNmEzLjM3LDMuMzcsMCwwLDAtMiwuOSw0LjMsNC4zLDAsMCwwLTEuMSwyLjhjMCwxLjYuOSwyLjcsMi4yLDIuN2EyLjEzLDIuMTMsMCwwLDAsMi4xLTIuMiwxLjg3LDEuODcsMCwwLDAtMS45LTIsMiwyLDAsMCwwLTEuNS43aDBhMi4zNywyLjM3LDAsMCwxLDIuMi0yLjJoLjZ2LS43Wm0tMS40LDUuOGMt'+
			'LjksMC0xLjQtLjgtMS40LTEuOGEuNi42LDAsMCwxLC4xLS40LDEuMywxLjMsMCwwLDEsMS4yLS44LDEuMjQsMS4yNCwwLDAsMSwxLjMsMS40YzAsMS0uNSwxLjYtMS4yLDEuNlptNC45LTUuOGMtMS4zLDAtMi4yLDEuMi0yLjIsMy4zcy44LDMuMiwyLjEsMy4yLDIuMi0xLjIsMi4yLTMuMy0uOC0zLjItMi4xLTMuMlptLS4xLjdjLjksMCwxLjMsMSwxLjMsMi42cy0uNCwyLjYtMS4zLDIuNlM4Miw0MC42LDgyLDM4LjlzLjYtMi42LDEuMy0yLjZabTQuMS0uOWExLjMyLDEuMzIsMCwwLDAtMS4zLDEuM2gwYTEuMTYsMS4xNiwwLDAsMCwxLjIsMS4yaDBhMS4zMiwxLjMyLDAsMCwwLDEuMy0xLjNoMG'+
			'ExLjE2LDEuMTYsMCwwLDAtMS4yLTEuMlptMCwuNGEuNzkuNzksMCwwLDEsLjguOHYuMWEuNzcuNzcsMCwwLDEtLjcuOGgwYS43MS43MSwwLDAsMS0uNy0uOGgwYy0uMi0uNS4xLS44LjYtLjlaTTkxLDM3LjMsOTIuOCw0MmguOGwxLjgtNC43aC0uOWwtLjksMi42YTUuNjQsNS42NCwwLDAsMC0uNCwxLjJoMGE1LjY0LDUuNjQsMCwwLDAtLjQtMS4ybC0uOS0yLjZaTTk3LjEsNDJWMzcuM2gtLjhWNDJabS0uNC02LjVhLjQ3LjQ3LDAsMCwwLS41LjVoMGEuNS41LDAsMSwwLC41LS41Wk05OC41LDQyaC44VjM5LjFhMS4xOCwxLjE4LDAsMCwxLDEuMS0xLjFoLjN2LS44aC0uMmExLjM4LDEuMzgsMCww'+
			'LDAtMS4zLDFoMHYtLjloLS43VjQyWiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiLz4KIDxwYXRoIGQ9Ik0xMDIuMSwzNi41di45aC0uN1YzOGguN3YyLjVhMS45MiwxLjkyLDAsMCwwLC4zLDEuMiwxLjQ5LDEuNDksMCwwLDAsLjkuNCwyLjIsMi4yLDAsMCwwLC44LS4xdi0uNmMtLjIsMC0uMy4xLS41LjEtLjUsMC0uNi0uMy0uNi0uOVYzOGgxLjJ2LS42SDEwM1YzNi4zbC0uOS4yWm02LjkuOGgtLjh2Mi45YTEuMTYsMS4xNiwwLDAsMS0xLjIsMS4yaDBjLS44LDAtMS0uNi0xLTEuNVYzNy4zaC0xVjQwYzAsMS42LjksMiwxLjYsMmExLjkyLDEuOTIsMCwwLDAsMS42LS45aD'+
			'B2LjhoLjhWMzcuM1ptNC43LDEuOGMwLS45LS4zLTEuOS0xLjgtMS45YTIuNiwyLjYsMCwwLDAtMS41LjRsLjIuNmEyLjY2LDIuNjYsMCwwLDEsMS4yLS4zLDEsMSwwLDAsMSwxLjEsMS4xaDBjLTEuOCwwLTIuOC42LTIuOCwxLjdhMS4zMiwxLjMyLDAsMCwwLDEuMywxLjNoLjFhMS41MSwxLjUxLDAsMCwwLDEuNC0uN2gwbC4xLjdoLjhhNC4xLDQuMSwwLDAsMS0uMS0xLjFWMzkuMVptLS45LDEuM3YuM2ExLjE3LDEuMTcsMCwwLDEtMS4xLjguNzcuNzcsMCwwLDEtLjgtLjd2LS4xYzAtLjksMS4xLTEuMSwyLTFsLS4xLjdaTTExNSw0MmguOVYzNS4ySDExNVY0MlptNC41LTUuNnYuOWgtLjd2LjZo'+
			'Ljd2Mi41YTEuOTIsMS45MiwwLDAsMCwuMywxLjIsMS40OSwxLjQ5LDAsMCwwLC45LjQsMi4yLDIuMiwwLDAsMCwuOC0uMXYtLjZjLS4yLDAtLjMuMS0uNS4xLS41LDAtLjYtLjMtLjYtLjlWMzhoMS4ydi0uNmgtMS4yVjM2LjNsLS45LjFabTUsLjhhMi4yNiwyLjI2LDAsMCwwLTIuMywyLjUsMi4yMSwyLjIxLDAsMCwwLDIuMiwyLjQsMi4zMSwyLjMxLDAsMCwwLDIuMy0yLjUsMi4xMSwyLjExLDAsMCwwLTIuMi0yLjRabTAsLjZjMSwwLDEuNCwxLDEuNCwxLjgsMCwxLjEtLjYsMS44LTEuNCwxLjhhMS42MiwxLjYyLDAsMCwxLTEuNC0xLjgsMS41MywxLjUzLDAsMCwxLDEuNC0xLjhabTcuMi0uNW'+
			'gtLjh2Mi45YS42LjYsMCwwLDEtLjEuNCwxLjE3LDEuMTcsMCwwLDEtMS4xLjhjLS44LDAtMS0uNi0xLTEuNVYzNy4zaC0uOFY0MGMwLDEuNi45LDIsMS42LDJhMS42NSwxLjY1LDAsMCwwLDEuNS0uOWgwdi44aC44VjQwLjZsLS4xLTMuM1ptMS40LDQuN2guOFYzOS4xQTEuMTgsMS4xOCwwLDAsMSwxMzUsMzhoLjN2LS44aC0uMmExLjM4LDEuMzgsMCwwLDAtMS4zLDFoMHYtLjloLS43VjQyWm0yLjktLjJhMy4wOCwzLjA4LDAsMCwwLDEuMy4zYzEuMSwwLDEuNy0uNiwxLjctMS40cy0uNC0xLjEtMS4yLTEuNGMtLjYtLjItLjktLjQtLjktLjhzLjMtLjYuOC0uNmExLjkzLDEuOTMsMCwwLDEsMSwu'+
			'M2wuMi0uNmEyLjI4LDIuMjgsMCwwLDAtMS4xLS4zLDEuNDMsMS40MywwLDAsMC0xLjYsMS40YzAsLjYuNCwxLDEuMiwxLjNxLjkuMy45LjljMCwuNC0uMy43LS45LjdhMiwyLDAsMCwxLTEuMS0uM2wtLjMuNVoiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIGQ9Ik0xOC4zNSwzOC43YTYuMjksNi4yOSwwLDAsMS0yLjYuNSw2LjI5LDYuMjksMCwwLDEtMi42LS41bDIuNi0xNSIgc3R5bGU9ImZpbGw6dXJsKCNqKSIvPgogPC9nPgogPHBhdGggZD0iTTE4LjMsMzguN2E2LjI5LDYuMjksMCwwLDEtMi42Lj'+
			'UsNy4xMSw3LjExLDAsMCwxLTIuNy0uNWwyLjYtMTUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIGQ9Ik0uNTUsMjYuNWE2LjI5LDYuMjksMCwwLDEtLjUtMi42LDUuNzUsNS43NSwwLDAsMSwuNS0yLjZsMTUsMi42IiBzdHlsZT0iZmlsbDp1cmwoI2wpIi8+CiA8L2c+CiA8cGF0aCBkPSJNLjUsMjYuNUE2LjI5LDYuMjksMCwwLDEsMCwyMy45YTUuNzUsNS43NSwwLDAsMSwuNS0yLjZsMTUsMi42IiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPGcgc3R5bGU9ImNsaXAtcGF0'+
			'aDp1cmwoI2kpIj4KICA8cGF0aCBkPSJNMzAuNTUsMjFhNi4yOSw2LjI5LDAsMCwxLC41LDIuNiw1Ljc1LDUuNzUsMCwwLDEtLjUsMi42bC0xNS0yLjYiIHN0eWxlPSJmaWxsOnVybCgjbikiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zMC41LDIxYTYuMjksNi4yOSwwLDAsMSwuNSwyLjYsNi4yOSw2LjI5LDAsMCwxLS41LDIuNmwtMTUtMi42IiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2kpIj4KICA8cGF0aCBkPSJNMywxNS4xYTUuOTMsNS45MywwLDAsMSwxLjUtMi4yLDUuOTMsNS45MywwLDAsMSwyLjItMS41bDguOCwxMi40Ii'+
			'BzdHlsZT0iZmlsbDp1cmwoI3ApIi8+CiA8L2c+CiA8cGF0aCBkPSJNMywxNS4xYTUuOTMsNS45MywwLDAsMSwxLjUtMi4yLDUuOTMsNS45MywwLDAsMSwyLjItMS41bDguOCwxMi40IiBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIvPgogPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2kpIj4KICA8cGF0aCBkPSJNMjguMDUsMzIuNGE1LjkzLDUuOTMsMCwwLDEtMS41LDIuMiw1LjkzLDUuOTMsMCwwLDEtMi4yLDEuNWwtOC44LTEyLjQiIHN0eWxlPSJmaWxsOnVybCgjcikiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0yOCwzMi40YTUuOTMsNS45MywwLDAsMS0xLjUsMi4yLDUuOTMsNS45'+
			'MywwLDAsMS0yLjIsMS41TDE1LjUsMjMuNyIgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiLz4KIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNpKSI+CiAgPHBhdGggZD0iTTYuNzUsMzYuM2E1LjkzLDUuOTMsMCwwLDEtMi4yLTEuNSw1LjkzLDUuOTMsMCwwLDEtMS41LTIuMmwxMi40LTguOCIgc3R5bGU9ImZpbGw6dXJsKCN0KSIvPgogPC9nPgogPHBhdGggZD0iTTYuOCwzNi4zYTUuOTMsNS45MywwLDAsMS0yLjItMS41QTUuNjEsNS42MSwwLDAsMSwzLDMyLjZsMTIuNC04LjgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8ZyBzdHlsZT0iY2xpcC'+
			'1wYXRoOnVybCgjaSkiPgogIDxwYXRoIGQ9Ik0yNC4xNSwxMS4zYTUuOTMsNS45MywwLDAsMSwyLjIsMS41LDUuOTMsNS45MywwLDAsMSwxLjUsMi4ybC0xMi40LDguOCIgc3R5bGU9ImZpbGw6dXJsKCN2KSIvPgogPC9nPgogPHBhdGggZD0iTTI0LjEsMTEuM2E1LjkzLDUuOTMsMCwwLDEsMi4yLDEuNUE1LjkzLDUuOTMsMCwwLDEsMjcuOCwxNUwxNS40LDIzLjgiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+CiA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjaSkiPgogIDxwYXRoIGQ9Ik0xMi43NSw4LjhhNi4yOSw2LjI5LDAsMCwxLDIuNi0uNSw1Ljc1LDUuNzUsMCwwLDEs'+
			'Mi42LjVsLTIuNiwxNSIgc3R5bGU9ImZpbGw6dXJsKCN4KSIvPgogPC9nPgogPHBhdGggZD0iTTEyLjgsOC44YTYuMjksNi4yOSwwLDAsMSwyLjYtLjUsNi4yOSw2LjI5LDAsMCwxLDIuNi41bC0yLjYsMTUiIHN0eWxlPSJmaWxsOiNmZmZmZmY7IGZpbGwtb3BhY2l0eToxIi8+Cjwvc3ZnPgo=';
		me._circlescapes__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="circlescapes";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circlescapes.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._circlescapes.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._circlescapes);
		el=me._key=document.createElement('div');
		els=me._key__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 506px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 196px;';
		hs+="";
		els.setAttribute('style',hs);
		me._key.ggScrollByX = function(diffX) {
			if(!me._key.ggHorScrollVisible || diffX == 0 || me._key.ggHPercentVisible >= 1.0) return;
			me._key.ggScrollPosX = (me._key__horScrollFg.offsetLeft + diffX);
			me._key.ggScrollPosX = Math.max(me._key.ggScrollPosX, 0);
			me._key.ggScrollPosX = Math.min(me._key.ggScrollPosX, me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth);
			me._key__horScrollFg.style.left = me._key.ggScrollPosX + 'px';
			me._key__content.style.left = -(Math.round(me._key.ggScrollPosX / me._key.ggHPercentVisible)) + me._key.ggContentLeftOffset + 'px';
			me._key.ggScrollPosXPercent = (me._key__horScrollFg.offsetLeft / me._key__horScrollBg.offsetWidth);
		}
		me._key.ggScrollByXSmooth = function(diffX) {
			if(!me._key.ggHorScrollVisible || diffX == 0 || me._key.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._key.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._key.ggScrollPosX >= me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth)) {
					me._key.ggScrollPosX = Math.min(me._key.ggScrollPosX, me._key__horScrollBg.offsetWidth - me._key__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._key.ggScrollPosX <= 0)) {
					me._key.ggScrollPosX = Math.max(me._key.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._key__horScrollFg.style.left = me._key.ggScrollPosX + 'px';
			me._key__content.style.left = -(Math.round(me._key.ggScrollPosX / me._key.ggHPercentVisible)) + me._key.ggContentLeftOffset + 'px';
			me._key.ggScrollPosXPercent = (me._key__horScrollFg.offsetLeft / me._key__horScrollBg.offsetWidth);
			}, 10);
		}
		me._key.ggScrollByY = function(diffY) {
			if(!me._key.ggVertScrollVisible || diffY == 0 || me._key.ggVPercentVisible >= 1.0) return;
			me._key.ggScrollPosY = (me._key__vertScrollFg.offsetTop + diffY);
			me._key.ggScrollPosY = Math.max(me._key.ggScrollPosY, 0);
			me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
			me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
			me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + me._key.ggContentTopOffset + 'px';
			me._key.ggScrollPosYPercent = (me._key__vertScrollFg.offsetTop / me._key__vertScrollBg.offsetHeight);
		}
		me._key.ggScrollByYSmooth = function(diffY) {
			if(!me._key.ggVertScrollVisible || diffY == 0 || me._key.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._key.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._key.ggScrollPosY >= me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight)) {
					me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._key.ggScrollPosY <= 0)) {
					me._key.ggScrollPosY = Math.max(me._key.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
			me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + me._key.ggContentTopOffset + 'px';
			me._key.ggScrollPosYPercent = (me._key__vertScrollFg.offsetTop / me._key__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._key.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._key.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._key.ggHPercentVisible);
					me._key.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._key.offsetWidth - (me._key.ggVertScrollVisible ? 10 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._key.offsetWidth - (me._key.ggVertScrollVisible ? 10 : 0))) * me._key.ggHPercentVisible);
					me._key.ggScrollByXSmooth(diffX);
				}
			}
			if (me._key.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._key.ggVPercentVisible);
					me._key.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._key.offsetHeight - (me._key.ggHorScrollVisible ? 10 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._key.offsetHeight - (me._key.ggHorScrollVisible ? 10 : 0))) * me._key.ggVPercentVisible);
					me._key.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._key.ggDragLastX = t[0].clientX;
			me._key.ggDragLastY = t[0].clientY;
			me._key__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaX *= 0.65;
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByX(-me._key.ggDragInertiaX);
					me._key.ggScrollByY(-me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaX) < 1.0 && Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._key__content.ontouchend = null;
				me._key__content.ontouchmove = null;
			}
			me._key__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._key.ggDragLastX;
				var diffY = t[0].clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaX = diffX;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastX = t[0].clientX;
				me._key.ggDragLastY = t[0].clientY;
				me._key.ggScrollByX(-diffX);
				me._key.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._key__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 10px; height: 841.667px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._key__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 10px; height: 841.667px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._key.ggScrollPosY = 0;
		me._key.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._key.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByY(me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastY = e.clientY;
				me._key.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._key.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._key.ggDragInertiaY *= 0.65;
					me._key.ggScrollByY(me._key.ggDragInertiaY);
					if (Math.abs(me._key.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._key.ggDragLastY;
				me._key.ggDragInertiaY = diffY;
				me._key.ggDragLastY = t[0].clientY;
				me._key.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._key.ggScrollHeight;
			if (e.offsetY < me._key.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._key.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._key__vertScrollBg.getBoundingClientRect();
			var diffY = me._key.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._key.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._key.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._key.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._key__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 10px; height: 10px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="key";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 15px;';
		hs+='height : calc(100%  -  105px);';
		hs+='left : -205px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._key.ggHorScrollVisible && contentHeight > this.offsetHeight - 10) || (!me._key.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._key__vertScrollBg.style.visibility = 'inherit';
					me._key__vertScrollFg.style.visibility = 'inherit';
					me._key.ggVertScrollVisible = true;
				} else {
					me._key__vertScrollBg.style.visibility = 'hidden';
					me._key__vertScrollFg.style.visibility = 'hidden';
					me._key.ggVertScrollVisible = false;
				}
				if(me._key.ggVertScrollVisible) {
					me._key.ggAvailableWidth = me._key.offsetWidth - 10;
					if (me._key.ggHorScrollVisible) {
						me._key.ggAvailableHeight = me._key.offsetHeight - 10;
						me._key.ggAvailableHeightWithScale = me._key.getBoundingClientRect().height - me._key__vertScrollBg.getBoundingClientRect().width;
						me._key__cornerBg.style.visibility = 'inherit';
					} else {
						me._key.ggAvailableHeight = me._key.offsetHeight;
						me._key.ggAvailableHeightWithScale = me._key.getBoundingClientRect().height;
						me._key__cornerBg.style.visibility = 'hidden';
					}
					me._key__vertScrollBg.style.height = me._key.ggAvailableHeight + 'px';
					me._key.ggVPercentVisible = contentHeight != 0 ? me._key.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._key.ggVPercentVisible > 1.0) me._key.ggVPercentVisible = 1.0;
					me._key.ggScrollHeight =  Math.round(me._key__vertScrollBg.offsetHeight * me._key.ggVPercentVisible);
					me._key__vertScrollFg.style.height = me._key.ggScrollHeight + 'px';
					me._key.ggScrollPosY = me._key.ggScrollPosYPercent * me._key.ggAvailableHeight;
					me._key.ggScrollPosY = Math.min(me._key.ggScrollPosY, me._key__vertScrollBg.offsetHeight - me._key__vertScrollFg.offsetHeight);
					me._key__vertScrollFg.style.top = me._key.ggScrollPosY + 'px';
					if (me._key.ggVPercentVisible < 1.0) {
						me._key__content.style.top = -(Math.round(me._key.ggScrollPosY / me._key.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._key.ggAvailableWidth = me._key.offsetWidth;
					me._key.ggScrollPosY = 0;
					me._key.ggScrollPosYPercent = 0.0;
					me._key__content.style.top = this.ggContentTopOffset + 'px';
					me._key__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._key.ggHorScrollVisible || vertScrollWasVisible != me._key.ggVertScrollVisible) {
					me.updateSize(me._key);
					me._key.ggUpdatePosition();
				}
			}
		}
		el=me._key1=document.createElement('div');
		els=me._key1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">1. Outer Courtyard<\/span>";
		el.appendChild(els);
		me._key1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key1'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key1__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key1.ggCurrentLogicStateTextColor == 0) {
					me._key1__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key1__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key1.onclick=function (e) {
			me.__1.onclick();
		}
		me._key1.onmouseover=function (e) {
			me.elementMouseOver['key1']=true;
			me._key1.logicBlock_textcolor();
		}
		me._key1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key1__text)
					return;
				}
			}
			me._ring1.style[domTransition]='none';
			me._ring1.style.visibility='hidden';
			me._ring1.ggVisible=false;
			me.elementMouseOver['key1']=false;
			me._key1.logicBlock_textcolor();
		}
		me._key1.ontouchend=function (e) {
			me.elementMouseOver['key1']=false;
			me._key1.logicBlock_textcolor();
		}
		me._key1.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key1);
		el=me._key2=document.createElement('div');
		els=me._key2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 270px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">2. Meetinghouse<\/span>";
		el.appendChild(els);
		me._key2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key2'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key2__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key2.ggCurrentLogicStateTextColor == 0) {
					me._key2__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key2__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key2.onclick=function (e) {
			me.__11.onclick();
		}
		me._key2.onmouseover=function (e) {
			me.elementMouseOver['key2']=true;
			me._key2.logicBlock_textcolor();
		}
		me._key2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key2__text)
					return;
				}
			}
			me._ring11.style[domTransition]='none';
			me._ring11.style.visibility='hidden';
			me._ring11.ggVisible=false;
			me.elementMouseOver['key2']=false;
			me._key2.logicBlock_textcolor();
		}
		me._key2.ontouchend=function (e) {
			me.elementMouseOver['key2']=false;
			me._key2.logicBlock_textcolor();
		}
		me._key2.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key2);
		el=me._key3=document.createElement('div');
		els=me._key3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 305px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">3. Central Building<\/span>";
		el.appendChild(els);
		me._key3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key3'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key3__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key3.ggCurrentLogicStateTextColor == 0) {
					me._key3__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key3__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key3.onclick=function (e) {
			me.__3.onclick();
		}
		me._key3.onmouseover=function (e) {
			me.elementMouseOver['key3']=true;
			me._key3.logicBlock_textcolor();
		}
		me._key3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key3__text)
					return;
				}
			}
			me._ring3.style[domTransition]='none';
			me._ring3.style.visibility='hidden';
			me._ring3.ggVisible=false;
			me.elementMouseOver['key3']=false;
			me._key3.logicBlock_textcolor();
		}
		me._key3.ontouchend=function (e) {
			me.elementMouseOver['key3']=false;
			me._key3.logicBlock_textcolor();
		}
		me._key3.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key3);
		el=me._key4=document.createElement('div');
		els=me._key4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 342px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">4. Inner Courtyard<\/span>";
		el.appendChild(els);
		me._key4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key4'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key4__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key4.ggCurrentLogicStateTextColor == 0) {
					me._key4__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key4__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key4.onclick=function (e) {
			me.__4.onclick();
		}
		me._key4.onmouseover=function (e) {
			me.elementMouseOver['key4']=true;
			me._key4.logicBlock_textcolor();
		}
		me._key4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key4__text)
					return;
				}
			}
			me._ring4.style[domTransition]='none';
			me._ring4.style.visibility='hidden';
			me._ring4.ggVisible=false;
			me.elementMouseOver['key4']=false;
			me._key4.logicBlock_textcolor();
		}
		me._key4.ontouchend=function (e) {
			me.elementMouseOver['key4']=false;
			me._key4.logicBlock_textcolor();
		}
		me._key4.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key4);
		el=me._key5=document.createElement('div');
		els=me._key5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 377px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">5. Old Schoolhouse<\/span>";
		el.appendChild(els);
		me._key5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key5.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key5'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key5.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key5.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key5__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key5.ggCurrentLogicStateTextColor == 0) {
					me._key5__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key5__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key5.onclick=function (e) {
			me.__5.onclick();
		}
		me._key5.onmouseover=function (e) {
			me.elementMouseOver['key5']=true;
			me._key5.logicBlock_textcolor();
		}
		me._key5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key5__text)
					return;
				}
			}
			me._ring5.style[domTransition]='none';
			me._ring5.style.visibility='hidden';
			me._ring5.ggVisible=false;
			me.elementMouseOver['key5']=false;
			me._key5.logicBlock_textcolor();
		}
		me._key5.ontouchend=function (e) {
			me.elementMouseOver['key5']=false;
			me._key5.logicBlock_textcolor();
		}
		me._key5.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key5);
		el=me._key6=document.createElement('div');
		els=me._key6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 412px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">6. Hunter Hall<\/span>";
		el.appendChild(els);
		me._key6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key6.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key6'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key6.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key6.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key6__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key6.ggCurrentLogicStateTextColor == 0) {
					me._key6__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key6__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key6.onclick=function (e) {
			me.__6.onclick();
		}
		me._key6.onmouseover=function (e) {
			me.elementMouseOver['key6']=true;
			me._key6.logicBlock_textcolor();
		}
		me._key6.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key6__text)
					return;
				}
			}
			me._ring6.style[domTransition]='none';
			me._ring6.style.visibility='hidden';
			me._ring6.ggVisible=false;
			me.elementMouseOver['key6']=false;
			me._key6.logicBlock_textcolor();
		}
		me._key6.ontouchend=function (e) {
			me.elementMouseOver['key6']=false;
			me._key6.logicBlock_textcolor();
		}
		me._key6.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key6);
		el=me._key7=document.createElement('div');
		els=me._key7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 447px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">7. Townhouse Building<\/span>";
		el.appendChild(els);
		me._key7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key7.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key7'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key7.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key7.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key7__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key7.ggCurrentLogicStateTextColor == 0) {
					me._key7__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key7__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key7.onclick=function (e) {
			me.__7.onclick();
		}
		me._key7.onmouseover=function (e) {
			me.elementMouseOver['key7']=true;
			me._key7.logicBlock_textcolor();
		}
		me._key7.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key7__text)
					return;
				}
			}
			me._ring7.style[domTransition]='none';
			me._ring7.style.visibility='hidden';
			me._ring7.ggVisible=false;
			me.elementMouseOver['key7']=false;
			me._key7.logicBlock_textcolor();
		}
		me._key7.ontouchend=function (e) {
			me.elementMouseOver['key7']=false;
			me._key7.logicBlock_textcolor();
		}
		me._key7.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key7);
		el=me._key8=document.createElement('div');
		els=me._key8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 482px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">8. Annex<\/span>";
		el.appendChild(els);
		me._key8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key8.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['key8'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._key8.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._key8.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._key8__text.style[domTransition]='color 200ms ease 0ms';
				if (me._key8.ggCurrentLogicStateTextColor == 0) {
					me._key8__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._key8__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._key8.onclick=function (e) {
			me.__8.onclick();
		}
		me._key8.onmouseover=function (e) {
			me.elementMouseOver['key8']=true;
			me._key8.logicBlock_textcolor();
		}
		me._key8.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._key8__text)
					return;
				}
			}
			me._ring8.style[domTransition]='none';
			me._ring8.style.visibility='hidden';
			me._ring8.ggVisible=false;
			me.elementMouseOver['key8']=false;
			me._key8.logicBlock_textcolor();
		}
		me._key8.ontouchend=function (e) {
			me.elementMouseOver['key8']=false;
			me._key8.logicBlock_textcolor();
		}
		me._key8.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key8);
		el=me._key_title0=document.createElement('div');
		els=me._key_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menutitle\">Our Campus<\/span><br\/><hr width=\"180\">";
		el.appendChild(els);
		me._key_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_title0.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key_title0);
		el=me._upperkey=document.createElement('div');
		els=me._upperkey__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="upperkey";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">Upper School<\/span>";
		el.appendChild(els);
		me._upperkey.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._upperkey.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['upperkey'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._upperkey.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._upperkey.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._upperkey__text.style[domTransition]='color 200ms ease 0ms';
				if (me._upperkey.ggCurrentLogicStateTextColor == 0) {
					me._upperkey__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._upperkey__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._upperkey.onclick=function (e) {
			UpperSchool(0)
		}
		me._upperkey.onmouseover=function (e) {
			me.elementMouseOver['upperkey']=true;
			me._upperkey.logicBlock_textcolor();
		}
		me._upperkey.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._upperkey__text)
					return;
				}
			}
			me.elementMouseOver['upperkey']=false;
			me._upperkey.logicBlock_textcolor();
		}
		me._upperkey.ontouchend=function (e) {
			me.elementMouseOver['upperkey']=false;
			me._upperkey.logicBlock_textcolor();
		}
		me._upperkey.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._upperkey);
		el=me._middlekey=document.createElement('div');
		els=me._middlekey__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="middlekey";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 97px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">Middle School<\/span>";
		el.appendChild(els);
		me._middlekey.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._middlekey.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['middlekey'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._middlekey.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._middlekey.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._middlekey__text.style[domTransition]='color 200ms ease 0ms';
				if (me._middlekey.ggCurrentLogicStateTextColor == 0) {
					me._middlekey__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._middlekey__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._middlekey.onclick=function (e) {
			MiddleSchool(0)
		}
		me._middlekey.onmouseover=function (e) {
			me.elementMouseOver['middlekey']=true;
			me._middlekey.logicBlock_textcolor();
		}
		me._middlekey.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._middlekey__text)
					return;
				}
			}
			me.elementMouseOver['middlekey']=false;
			me._middlekey.logicBlock_textcolor();
		}
		me._middlekey.ontouchend=function (e) {
			me.elementMouseOver['middlekey']=false;
			me._middlekey.logicBlock_textcolor();
		}
		me._middlekey.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._middlekey);
		el=me._lowerkey=document.createElement('div');
		els=me._lowerkey__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="lowerkey";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding-left: 18px; text-indent:-18px;";
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menuitem\">Lower School<\/span>";
		el.appendChild(els);
		me._lowerkey.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lowerkey.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['lowerkey'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._lowerkey.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._lowerkey.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._lowerkey__text.style[domTransition]='color 200ms ease 0ms';
				if (me._lowerkey.ggCurrentLogicStateTextColor == 0) {
					me._lowerkey__text.style.color="rgba(215,40,47,1)";
				}
				else {
					me._lowerkey__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._lowerkey.onclick=function (e) {
			LowerSchool(0)
		}
		me._lowerkey.onmouseover=function (e) {
			me.elementMouseOver['lowerkey']=true;
			me._lowerkey.logicBlock_textcolor();
		}
		me._lowerkey.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._lowerkey__text)
					return;
				}
			}
			me.elementMouseOver['lowerkey']=false;
			me._lowerkey.logicBlock_textcolor();
		}
		me._lowerkey.ontouchend=function (e) {
			me.elementMouseOver['lowerkey']=false;
			me._lowerkey.logicBlock_textcolor();
		}
		me._lowerkey.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._lowerkey);
		el=me._key_title=document.createElement('div');
		els=me._key_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="key title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<span class=\"menutitle\">Academic Divisions<\/span><br\/><hr width=\"180\">";
		el.appendChild(els);
		me._key_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_title.ggUpdatePosition=function (useTransition) {
		}
		me._key__content.appendChild(me._key_title);
		me.divSkin.appendChild(me._key);
		el=me._alt_color=document.createElement('div');
		el.ggId="alt_color";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d7282f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._alt_color.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._alt_color.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._alt_color);
		el=me._top_bar=document.createElement('div');
		el.ggId="top bar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_bar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._top_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._logo__img.setAttribute('src',basePath + 'images/logo.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 63px;';
		hs+='position : absolute;';
		hs+='right : 37px;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 174px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._logo.ggCurrentLogicStateScaling == 0) {
					me._logo.ggParameter.sx = 0.8;
					me._logo.ggParameter.sy = 0.8;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
			}
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me._top_bar.appendChild(me._logo);
		el=me._buttons=document.createElement('div');
		el.ggId="buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 273px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttons.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttons.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttons.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttons.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._buttons.ggCurrentLogicStateScaling == 0) {
					me._buttons.ggParameter.sx = 0.8;
					me._buttons.ggParameter.sy = 0.8;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
				else {
					me._buttons.ggParameter.sx = 1;
					me._buttons.ggParameter.sy = 1;
					me._buttons.style[domTransform]=parameterToTransform(me._buttons.ggParameter);
				}
			}
		}
		me._buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNCAzNCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQgMzQ7IiB5PSIwcHgiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4YzgyN2E7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNyIgY2xhc3M9InN0MCIgY3k9IjE3IiByPSIxNiIvPgogPC9nPgogPGc+CiAgPGNpcmNsZSBjeD0iMTciIGNsYXNzPSJzdDEiIGN5PSI5LjUiIHI9IjIuNSIvPgogIDxyZWN0IGNsYXNzPSJzdDEiIHdpZHRoPSI1IiBoZWlnaHQ9IjEzLjIiIHk9IjEzLjgiIHg9IjE0LjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._rotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rotate'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rotate.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rotate.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rotate.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._rotate.ggCurrentLogicStateScaling == 0) {
					me._rotate.ggParameter.sx = 1.2;
					me._rotate.ggParameter.sy = 1.2;
					me._rotate.style[domTransform]=parameterToTransform(me._rotate.ggParameter);
				}
				else {
					me._rotate.ggParameter.sx = 1;
					me._rotate.ggParameter.sy = 1;
					me._rotate.style[domTransform]=parameterToTransform(me._rotate.ggParameter);
				}
			}
		}
		me._rotate.onclick=function (e) {
			LaunchFancybox(pano.userdata.information, 700, 470, 'iframe')
		}
		me._rotate.onmouseover=function (e) {
			me.elementMouseOver['rotate']=true;
			me._tt4.logicBlock_visible();
			me._rotate.logicBlock_scaling();
		}
		me._rotate.onmouseout=function (e) {
			me.elementMouseOver['rotate']=false;
			me._tt4.logicBlock_visible();
			me._rotate.logicBlock_scaling();
		}
		me._rotate.ontouchend=function (e) {
			me.elementMouseOver['rotate']=false;
			me._tt4.logicBlock_visible();
			me._rotate.logicBlock_scaling();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt4=document.createElement('div');
		els=me._tt4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="About Us";
		el.appendChild(els);
		me._tt4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['rotate'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt4.style[domTransition]='';
				if (me._tt4.ggCurrentLogicStateVisible == 0) {
					me._tt4.style.visibility=(Number(me._tt4.style.opacity)>0||!me._tt4.style.opacity)?'inherit':'hidden';
					me._tt4.ggVisible=true;
				}
				else {
					me._tt4.style.visibility="hidden";
					me._tt4.ggVisible=false;
				}
			}
		}
		me._tt4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._rotate.appendChild(me._tt4);
		me._buttons.appendChild(me._rotate);
		el=me._share1=document.createElement('div');
		els=me._share1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNCAzNCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQgMzQ7IiB5PSIwcHgiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4YzgyN2E7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNyIgY2xhc3M9InN0MCIgY3k9IjE3IiByPSIxNiIvPgogPC9nPgogPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjMsMTcuNGMwLDAuMy0wLjEsMC42LTAuMSwwLjlsNy42LDQuNGMxLjItMS4yLDMuMi0xLjEsNC40LDAuMWMxLjIsMS4yLDEuMSwzLjItMC4xLDQuNHMtMy4yLDEuMS00LjQtMC4xJiN4YTsmI3g5O2MtMC43LTAuNy0xLTEuNy0wLjgtMi43bC03LjgtNC41Yy0x'+
			'LjMsMS0zLjIsMC44LTQuMi0wLjZzLTAuOC0zLjIsMC42LTQuMmMxLjEtMC44LDIuNi0wLjgsMy43LDBsNy44LTQuNWMtMC40LTEuNiwwLjYtMy4zLDIuMy0zLjcmI3hhOyYjeDk7YzEuNi0wLjQsMy4zLDAuNiwzLjcsMi4zYzAuNCwxLjYtMC42LDMuMy0yLjMsMy43Yy0xLDAuMi0yLDAtMi43LTAuN2wtNy43LDQuNUMxMi4yLDE2LjgsMTIuMywxNy4xLDEyLjMsMTcuNHoiLz4KPC9zdmc+Cg==';
		me._share1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['share1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._share1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._share1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._share1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._share1.ggCurrentLogicStateScaling == 0) {
					me._share1.ggParameter.sx = 1.2;
					me._share1.ggParameter.sy = 1.2;
					me._share1.style[domTransform]=parameterToTransform(me._share1.ggParameter);
				}
				else {
					me._share1.ggParameter.sx = 1;
					me._share1.ggParameter.sy = 1;
					me._share1.style[domTransform]=parameterToTransform(me._share1.ggParameter);
				}
			}
		}
		me._share1.onclick=function (e) {
			LaunchFancybox ('#socialbuttons', 'auto', 'auto', 'inline')
		}
		me._share1.onmouseover=function (e) {
			me.elementMouseOver['share1']=true;
			me._tt3.logicBlock_visible();
			me._share1.logicBlock_scaling();
		}
		me._share1.onmouseout=function (e) {
			me.elementMouseOver['share1']=false;
			me._tt3.logicBlock_visible();
			me._share1.logicBlock_scaling();
		}
		me._share1.ontouchend=function (e) {
			me.elementMouseOver['share1']=false;
			me._tt3.logicBlock_visible();
			me._share1.logicBlock_scaling();
		}
		me._share1.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt3=document.createElement('div');
		els=me._tt3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Share";
		el.appendChild(els);
		me._tt3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt3.style[domTransition]='';
				if (me._tt3.ggCurrentLogicStateVisible == 0) {
					me._tt3.style.visibility=(Number(me._tt3.style.opacity)>0||!me._tt3.style.opacity)?'inherit':'hidden';
					me._tt3.ggVisible=true;
				}
				else {
					me._tt3.style.visibility="hidden";
					me._tt3.ggVisible=false;
				}
			}
		}
		me._tt3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._share1.appendChild(me._tt3);
		me._buttons.appendChild(me._share1);
		el=me._share0=document.createElement('div');
		els=me._share0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8dGl0bGU+Z29kaXJlY3Rpb25zPC90aXRsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBzdHlsZT0iZmlsbDojOGM4MjdhOyBmaWxsLW9wYWNpdHk6MSIvPgogPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIiBkPSJNMjYuNzIsMTQuMzVsLTctNXYzSDEyLjg3Yy0xLjQ3LDAtMS42Ni4xOS0xLjY2LDEuNjV2MTBoNC4zVjE3LjZjMC0xLjEtLjEtMSwxLTFoMy4ydjNaIiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPgo=';
		me._share0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['share0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._share0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._share0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._share0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._share0.ggCurrentLogicStateScaling == 0) {
					me._share0.ggParameter.sx = 1.2;
					me._share0.ggParameter.sy = 1.2;
					me._share0.style[domTransform]=parameterToTransform(me._share0.ggParameter);
				}
				else {
					me._share0.ggParameter.sx = 1;
					me._share0.ggParameter.sy = 1;
					me._share0.style[domTransform]=parameterToTransform(me._share0.ggParameter);
				}
			}
		}
		me._share0.onclick=function (e) {
			LaunchFancybox('map/map.html', 800, 600, 'iframe')
		}
		me._share0.onmouseover=function (e) {
			me.elementMouseOver['share0']=true;
			me._tt2.logicBlock_visible();
			me._share0.logicBlock_scaling();
		}
		me._share0.onmouseout=function (e) {
			me.elementMouseOver['share0']=false;
			me._tt2.logicBlock_visible();
			me._share0.logicBlock_scaling();
		}
		me._share0.ontouchend=function (e) {
			me.elementMouseOver['share0']=false;
			me._tt2.logicBlock_visible();
			me._share0.logicBlock_scaling();
		}
		me._share0.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt2=document.createElement('div');
		els=me._tt2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Get Directions";
		el.appendChild(els);
		me._tt2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt2.style[domTransition]='';
				if (me._tt2.ggCurrentLogicStateVisible == 0) {
					me._tt2.style.visibility=(Number(me._tt2.style.opacity)>0||!me._tt2.style.opacity)?'inherit':'hidden';
					me._tt2.ggVisible=true;
				}
				else {
					me._tt2.style.visibility="hidden";
					me._tt2.ggVisible=false;
				}
			}
		}
		me._tt2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._share0.appendChild(me._tt2);
		me._buttons.appendChild(me._share0);
		el=me._share=document.createElement('div');
		els=me._share__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNCAzNCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQgMzQ7IiB5PSIwcHgiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4YzgyN2E7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHRpdGxlPm1hcGJ1dHRvbjwvdGl0bGU+CiA8Y2lyY2xlIGN4PSIxNyIgY2xhc3M9InN0MCIgY3k9IjE3IiByPSIxNiIvPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjQuNiIgaGVpZ2h0PSIxNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC44MzI3IDAuNTUzNyAtMC41NTM3IDAuODMyNyAxMi42MTc2IC01LjkzNTQpIiB5PSIxMC40IiB4PSIxMy44Ii8+CiAgPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMy4yLDI2LjUgOS4zLDI0IDgu'+
			'NiwyNS4xIDguOCwyNi4xIDExLjUsMjcuOSAxMi40LDI3LjggJiN4OTsiLz4KICA8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIzLDExLjggMTkuMSw5LjMgMjMuOCw2LjQgJiN4OTsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['share'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._share.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._share.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._share.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._share.ggCurrentLogicStateScaling == 0) {
					me._share.ggParameter.sx = 1.2;
					me._share.ggParameter.sy = 1.2;
					me._share.style[domTransform]=parameterToTransform(me._share.ggParameter);
				}
				else {
					me._share.ggParameter.sx = 1;
					me._share.ggParameter.sy = 1;
					me._share.style[domTransform]=parameterToTransform(me._share.ggParameter);
				}
			}
		}
		me._share.onclick=function (e) {
			player.openUrl("form\/form.html","_new");
		}
		me._share.onmouseover=function (e) {
			me.elementMouseOver['share']=true;
			me._tt1.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.onmouseout=function (e) {
			me.elementMouseOver['share']=false;
			me._tt1.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.ontouchend=function (e) {
			me.elementMouseOver['share']=false;
			me._tt1.logicBlock_visible();
			me._share.logicBlock_scaling();
		}
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt1=document.createElement('div');
		els=me._tt1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Request information";
		el.appendChild(els);
		me._tt1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt1.style[domTransition]='';
				if (me._tt1.ggCurrentLogicStateVisible == 0) {
					me._tt1.style.visibility=(Number(me._tt1.style.opacity)>0||!me._tt1.style.opacity)?'inherit':'hidden';
					me._tt1.ggVisible=true;
				}
				else {
					me._tt1.style.visibility="hidden";
					me._tt1.ggVisible=false;
				}
			}
		}
		me._tt1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((30-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._share.appendChild(me._tt1);
		me._buttons.appendChild(me._share);
		el=me._divisions=document.createElement('div');
		els=me._divisions__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgc3R5bGU9ImZpbGw6IzhjODI3YTsgZmlsbC1vcGFjaXR5OjEiLz4KIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZD0iTTE2LjcsNy4zOSw2LDEyLjlIMjguMTJaIiBzdHlsZT0iZmlsbDojZmZmIi8+CiA8cG9seWdvbiBwb2ludHM9IjYuNDUgMTQuODMgNy4yMSAxNC44MyA3LjIxIDI0LjQgOS4wNiAyNC40IDkuMDYgMTQuODMgMTAuODIgMTQuODMgMTAuODIgMjQuNCAxMi42NyAyNC40IDEyLjY3IDE0LjgzIDE5Lj'+
			'Q1IDE0LjgzIDE5LjQ1IDI0LjQgMjEuMyAyNC40IDIxLjMgMTQuODMgMjMuMDYgMTQuODMgMjMuMDYgMjQuNCAyNC45MSAyNC40IDI0LjkxIDE0LjgzIDI1LjYzIDE0LjgzIDI1LjYzIDEzLjEyIDYuNDUgMTMuMTIgNi40NSAxNC44MyIgc3R5bGU9ImZpbGw6I2ZmZiIvPgogPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIiBkPSJNMTQuNzEsMjVsMy41Mi0xVjE3LjU1bC0zLjUyLS43N1ptMi42OC00Ljg0YS41NC41NCwwLDEsMS0uNTQuNTRBLjU1LjU1LDAsMCwxLDE3LjM5LDIwLjExWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPgo8L3N2Zz4K';
		me._divisions__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="divisions";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._divisions.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._divisions.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['divisions'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._divisions.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._divisions.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._divisions.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._divisions.ggCurrentLogicStateScaling == 0) {
					me._divisions.ggParameter.sx = 1.2;
					me._divisions.ggParameter.sy = 1.2;
					me._divisions.style[domTransform]=parameterToTransform(me._divisions.ggParameter);
				}
				else {
					me._divisions.ggParameter.sx = 1;
					me._divisions.ggParameter.sy = 1;
					me._divisions.style[domTransform]=parameterToTransform(me._divisions.ggParameter);
				}
			}
		}
		me._divisions.onmouseover=function (e) {
			me.elementMouseOver['divisions']=true;
			me._tt0.logicBlock_visible();
			me._connector.logicBlock_visible();
			me._divisions.logicBlock_scaling();
		}
		me._divisions.onmouseout=function (e) {
			me.elementMouseOver['divisions']=false;
			me._tt0.logicBlock_visible();
			me._connector.logicBlock_visible();
			me._divisions.logicBlock_scaling();
		}
		me._divisions.ontouchend=function (e) {
			me.elementMouseOver['divisions']=false;
			me._tt0.logicBlock_visible();
			me._connector.logicBlock_visible();
			me._divisions.logicBlock_scaling();
		}
		me._divisions.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt0=document.createElement('div');
		els=me._tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 256px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 145px;';
		hs+='height: 256px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 11px 12px 11px 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="View a <br\/>Photo Gallery";
		el.appendChild(els);
		me._tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['divisions'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt0.style[domTransition]='';
				if (me._tt0.ggCurrentLogicStateVisible == 0) {
					me._tt0.style.visibility=(Number(me._tt0.style.opacity)>0||!me._tt0.style.opacity)?'inherit':'hidden';
					me._tt0.ggVisible=true;
				}
				else {
					me._tt0.style.visibility="hidden";
					me._tt0.ggVisible=false;
				}
			}
		}
		me._tt0.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_middle0=document.createElement('div');
		els=me._map_middle0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_middle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 114px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 45px;';
		hs+='background: #d7282f;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Middle<br\/>School";
		el.appendChild(els);
		me._map_middle0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_middle0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_middle0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_middle0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_middle0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_middle0.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._map_middle0.ggCurrentLogicStateScaling == 0) {
					me._map_middle0.ggParameter.sx = 1;
					me._map_middle0.ggParameter.sy = 1;
					me._map_middle0.style[domTransform]=parameterToTransform(me._map_middle0.ggParameter);
				}
				else {
					me._map_middle0.ggParameter.sx = 0.85;
					me._map_middle0.ggParameter.sy = 0.85;
					me._map_middle0.style[domTransform]=parameterToTransform(me._map_middle0.ggParameter);
				}
			}
		}
		me._map_middle0.onclick=function (e) {
			MiddleSchool(0)
		}
		me._map_middle0.onmouseover=function (e) {
			me.elementMouseOver['map_middle0']=true;
			me._map_middle0.logicBlock_scaling();
		}
		me._map_middle0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._map_middle0__text)
					return;
				}
			}
			me.elementMouseOver['map_middle0']=false;
			me._map_middle0.logicBlock_scaling();
		}
		me._map_middle0.ontouchend=function (e) {
			me.elementMouseOver['map_middle0']=false;
			me._map_middle0.logicBlock_scaling();
		}
		me._map_middle0.ggUpdatePosition=function (useTransition) {
		}
		me._tt0.appendChild(me._map_middle0);
		el=me._map_lower=document.createElement('div');
		els=me._map_lower__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_lower";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 45px;';
		hs+='background: #d7282f;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lower<br\/>School";
		el.appendChild(els);
		me._map_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_lower.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_lower'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_lower.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_lower.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_lower.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._map_lower.ggCurrentLogicStateScaling == 0) {
					me._map_lower.ggParameter.sx = 1;
					me._map_lower.ggParameter.sy = 1;
					me._map_lower.style[domTransform]=parameterToTransform(me._map_lower.ggParameter);
				}
				else {
					me._map_lower.ggParameter.sx = 0.85;
					me._map_lower.ggParameter.sy = 0.85;
					me._map_lower.style[domTransform]=parameterToTransform(me._map_lower.ggParameter);
				}
			}
		}
		me._map_lower.onclick=function (e) {
			LowerSchool(0)
		}
		me._map_lower.onmouseover=function (e) {
			me.elementMouseOver['map_lower']=true;
			me._map_lower.logicBlock_scaling();
		}
		me._map_lower.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._map_lower__text)
					return;
				}
			}
			me.elementMouseOver['map_lower']=false;
			me._map_lower.logicBlock_scaling();
		}
		me._map_lower.ontouchend=function (e) {
			me.elementMouseOver['map_lower']=false;
			me._map_lower.logicBlock_scaling();
		}
		me._map_lower.ggUpdatePosition=function (useTransition) {
		}
		me._tt0.appendChild(me._map_lower);
		el=me._map_middle=document.createElement('div');
		els=me._map_middle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_middle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 45px;';
		hs+='background: #d7282f;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Upper<br\/>School";
		el.appendChild(els);
		me._map_middle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_middle.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_middle'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_middle.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_middle.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_middle.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._map_middle.ggCurrentLogicStateScaling == 0) {
					me._map_middle.ggParameter.sx = 1;
					me._map_middle.ggParameter.sy = 1;
					me._map_middle.style[domTransform]=parameterToTransform(me._map_middle.ggParameter);
				}
				else {
					me._map_middle.ggParameter.sx = 0.85;
					me._map_middle.ggParameter.sy = 0.85;
					me._map_middle.style[domTransform]=parameterToTransform(me._map_middle.ggParameter);
				}
			}
		}
		me._map_middle.onclick=function (e) {
			UpperSchool(0)
		}
		me._map_middle.onmouseover=function (e) {
			me.elementMouseOver['map_middle']=true;
			me._map_middle.logicBlock_scaling();
		}
		me._map_middle.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._map_middle__text)
					return;
				}
			}
			me.elementMouseOver['map_middle']=false;
			me._map_middle.logicBlock_scaling();
		}
		me._map_middle.ontouchend=function (e) {
			me.elementMouseOver['map_middle']=false;
			me._map_middle.logicBlock_scaling();
		}
		me._map_middle.ggUpdatePosition=function (useTransition) {
		}
		me._tt0.appendChild(me._map_middle);
		me._divisions.appendChild(me._tt0);
		el=me._connector=document.createElement('div');
		el.ggId="connector";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 56px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 71px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._connector.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._connector.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['divisions'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._connector.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._connector.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._connector.style[domTransition]='';
				if (me._connector.ggCurrentLogicStateVisible == 0) {
					me._connector.style.visibility=(Number(me._connector.style.opacity)>0||!me._connector.style.opacity)?'inherit':'hidden';
					me._connector.ggVisible=true;
				}
				else {
					me._connector.style.visibility="hidden";
					me._connector.ggVisible=false;
				}
			}
		}
		me._connector.ggUpdatePosition=function (useTransition) {
		}
		me._divisions.appendChild(me._connector);
		me._buttons.appendChild(me._divisions);
		el=me._hamburger_on=document.createElement('div');
		els=me._hamburger_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNCAzNCIgdmVyc2lvbj0iMS4xIiBpZD0icGllY2VzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNCAzNDsiIHk9IjBweCIgeD0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzhjODI3YTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+Z288L3RpdGxlPgogPGNpcmNsZSBjeD0iMTciIGNsYXNzPSJzdDAiIGN5PSIxNyIgcj0iMTYiLz4KIDxnPgogIDxyZWN0IGNsYXNzPSJzdDEiIHdpZHRoPSIxNC44IiBoZWlnaHQ9IjMuNSIgeT0iOS45IiB4PSI5LjYiLz4KICA8cmVjdCBjbGFzcz0ic3QxIiB3aWR0aD0iMTQuOCIgaGVpZ2h0PSIzLjUiIHk9IjE1LjUiIHg9IjkuNiIvPgogIDxyZWN0IGNsYXNzPSJzdDEiIHdpZHRoPSIxNC44IiBoZWlnaHQ9IjMuNSIgeT0iMjEuMSIgeD0i'+
			'OS42Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hamburger_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hamburger_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hamburger_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburger_on.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hamburger_on'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hamburger_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hamburger_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hamburger_on.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._hamburger_on.ggCurrentLogicStateScaling == 0) {
					me._hamburger_on.ggParameter.sx = 1.2;
					me._hamburger_on.ggParameter.sy = 1.2;
					me._hamburger_on.style[domTransform]=parameterToTransform(me._hamburger_on.ggParameter);
				}
				else {
					me._hamburger_on.ggParameter.sx = 1;
					me._hamburger_on.ggParameter.sy = 1;
					me._hamburger_on.style[domTransform]=parameterToTransform(me._hamburger_on.ggParameter);
				}
			}
		}
		me._hamburger_on.onclick=function (e) {
			var flag=me._key.ggPositonActive;
			if (player.transitionsDisabled) {
				me._key.style[domTransition]='none';
			} else {
				me._key.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._key.ggParameter.rx=0;me._key.ggParameter.ry=0;
				me._key.style[domTransform]=parameterToTransform(me._key.ggParameter);
			} else {
				me._key.ggParameter.rx=205;me._key.ggParameter.ry=0;
				me._key.style[domTransform]=parameterToTransform(me._key.ggParameter);
			}
			me._key.ggPositonActive=!flag;
		}
		me._hamburger_on.onmouseover=function (e) {
			me.elementMouseOver['hamburger_on']=true;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.onmouseout=function (e) {
			me.elementMouseOver['hamburger_on']=false;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.ontouchend=function (e) {
			me.elementMouseOver['hamburger_on']=false;
			me._tt.logicBlock_visible();
			me._hamburger_on.logicBlock_scaling();
		}
		me._hamburger_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt=document.createElement('div');
		els=me._tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="show\/hide map key";
		el.appendChild(els);
		me._tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hamburger_on'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt.style[domTransition]='';
				if (me._tt.ggCurrentLogicStateVisible == 0) {
					me._tt.style.visibility=(Number(me._tt.style.opacity)>0||!me._tt.style.opacity)?'inherit':'hidden';
					me._tt.ggVisible=true;
				}
				else {
					me._tt.style.visibility="hidden";
					me._tt.ggVisible=false;
				}
			}
		}
		me._tt.ggUpdatePosition=function (useTransition) {
		}
		me._hamburger_on.appendChild(me._tt);
		me._buttons.appendChild(me._hamburger_on);
		me._top_bar.appendChild(me._buttons);
		me.divSkin.appendChild(me._top_bar);
		el=me._pano=document.createElement('div');
		el.ggId="pano";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano.ggUpdatePosition=function (useTransition) {
		}
		el=me._panobox=document.createElement('div');
		els=me._panobox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="panobox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 96%;';
		hs+='left : 2%;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(246,245,237,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"justspins\/index.html#node1\" width=\"100%\" height=\"100%\" style=\"border:0px\"><\/iframe>";
		el.appendChild(els);
		me._panobox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._panobox.ggUpdatePosition=function (useTransition) {
		}
		me._pano.appendChild(me._panobox);
		el=me._closepano=document.createElement('div');
		els=me._closepano__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAzNCAzNCIgdmVyc2lvbj0iMS4xIiBpZD0icGllY2VzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNCAzNDsiIHg9IjBweCIgeT0iMH'+
			'B4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8dGl0bGU+Z288L3RpdGxlPgogPGc+CiAgPHBhdGggZD0iTTE3LDMyLjFDOC43LDMyLjEsMS45LDI1LjMsMS45LDE3QzEuOSw4LjcsOC43LDEuOSwxNywxLjljOC4zLDAsMTUuMSw2LjgsMTUuMSwxNS4xQzMyLjEsMjUuMywyNS4zLDMyLjEsMTcsMzIuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcsMi44YzcuOCwwLDE0LjIsNi4zLDE0LjIsMTQuMlMyNC44LDMxLjIsMTcsMzEuMlMyLjgsMjQuOCwyLjgsMTdTOS4yLDIuOCwxNywyLjggTTE3LDEuMSYjeGE7JiN4OTsmI3g5O0M4'+
			'LjIsMS4xLDEuMSw4LjIsMS4xLDE3UzguMiwzMi45LDE3LDMyLjlTMzIuOSwyNS44LDMyLjksMTdTMjUuOCwxLjEsMTcsMS4xTDE3LDEuMXoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi40LDExLjZMMjIuNCwxMS42YzAuNSwwLjUsMC41LDEuNCwwLDJsLTguOCw4LjhjLTAuNSwwLjUtMS40LDAuNS0yLDBsMCwwYy0wLjUtMC41LTAuNS0xLjQsMC0ybDguOC04LjgmI3hhOyYjeDk7JiN4OTtDMjEsMTEuMSwyMS44LDExLjEsMjIuNCwxMS42eiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi40LDIyLjRMMjIuNCwyMi40Yy0wLjUsMC41LTEuNCwwLjUtMiwwbC04Lj'+
			'gtOC44Yy0wLjUtMC41LTAuNS0xLjQsMC0ybDAsMGMwLjUtMC41LDEuNC0wLjUsMiwwbDguOCw4LjgmI3hhOyYjeDk7JiN4OTtDMjIuOSwyMSwyMi45LDIxLjgsMjIuNCwyMi40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._closepano__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="closepano";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 3.7%;';
		hs+='top : 4.2%;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._closepano.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closepano.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closepano'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closepano.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closepano.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closepano.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._closepano.ggCurrentLogicStateScaling == 0) {
					me._closepano.ggParameter.sx = 1.2;
					me._closepano.ggParameter.sy = 1.2;
					me._closepano.style[domTransform]=parameterToTransform(me._closepano.ggParameter);
				}
				else {
					me._closepano.ggParameter.sx = 1;
					me._closepano.ggParameter.sy = 1;
					me._closepano.style[domTransform]=parameterToTransform(me._closepano.ggParameter);
				}
			}
		}
		me._closepano.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._pano.style[domTransition]='none';
			} else {
				me._pano.style[domTransition]='all 200ms ease-out 0ms';
			}
			me._pano.style.opacity='0';
			me._pano.style.visibility='hidden';
		}
		me._closepano.onmouseover=function (e) {
			me.elementMouseOver['closepano']=true;
			me._closepano.logicBlock_scaling();
		}
		me._closepano.onmouseout=function (e) {
			me.elementMouseOver['closepano']=false;
			me._closepano.logicBlock_scaling();
		}
		me._closepano.ontouchend=function (e) {
			me.elementMouseOver['closepano']=false;
			me._closepano.logicBlock_scaling();
		}
		me._closepano.ggUpdatePosition=function (useTransition) {
		}
		me._pano.appendChild(me._closepano);
		me.divSkin.appendChild(me._pano);
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__1);
		me.__1__normal = clonedNormalElement._marker;
		me.__1__normal.style.visibility='inherit';
		me.__1__normal.style.left='0px';
		me.__1__normal.style.top='0px';
		me.__1.ggMarkerNormal=me.__1__normal;
		me.__1.ggMarkerInstances.push(clonedNormalElement);
		me.__1.ggMarkerActive=null;
		me.__1.ggMarkerInstances.push(null);
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__normal,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__normal);
		}
		for (var i = 0; i < me.__1.childNodes.length; i++) {
			me.__1.ggMarkerInstances.push(me.__1.childNodes[i]);
		}
		me.__1.callChildLogicBlocks_configloaded = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_mouseover = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_hastouch = function(){
			if(me.__1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__1.ggMarkerInstances.length; i++) {
					if((me.__1.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__1)>=0 && i==1) || (activeNodeMarker.indexOf(me.__1)<0 && i==0) || (i>1))) {
					if (me.__1.ggMarkerInstances[i].logicBlock_visible) {
						me.__1.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__1.callChildLogicBlocks_configloaded();
		me.__1.callChildLogicBlocks_mouseover();
		me.__1.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__3);
		me.__3__normal = clonedNormalElement._marker;
		me.__3__normal.style.visibility='inherit';
		me.__3__normal.style.left='0px';
		me.__3__normal.style.top='0px';
		me.__3.ggMarkerNormal=me.__3__normal;
		me.__3.ggMarkerInstances.push(clonedNormalElement);
		me.__3.ggMarkerActive=null;
		me.__3.ggMarkerInstances.push(null);
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__normal,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__normal);
		}
		for (var i = 0; i < me.__3.childNodes.length; i++) {
			me.__3.ggMarkerInstances.push(me.__3.childNodes[i]);
		}
		me.__3.callChildLogicBlocks_configloaded = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_mouseover = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_hastouch = function(){
			if(me.__3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__3.ggMarkerInstances.length; i++) {
					if((me.__3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__3)>=0 && i==1) || (activeNodeMarker.indexOf(me.__3)<0 && i==0) || (i>1))) {
					if (me.__3.ggMarkerInstances[i].logicBlock_visible) {
						me.__3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__3.callChildLogicBlocks_configloaded();
		me.__3.callChildLogicBlocks_mouseover();
		me.__3.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__4);
		me.__4__normal = clonedNormalElement._marker;
		me.__4__normal.style.visibility='inherit';
		me.__4__normal.style.left='0px';
		me.__4__normal.style.top='0px';
		me.__4.ggMarkerNormal=me.__4__normal;
		me.__4.ggMarkerInstances.push(clonedNormalElement);
		me.__4.ggMarkerActive=null;
		me.__4.ggMarkerInstances.push(null);
		if (me.__4.firstChild) {
			me.__4.insertBefore(me.__4__normal,me.__4.firstChild);
		} else {
			me.__4.appendChild(me.__4__normal);
		}
		for (var i = 0; i < me.__4.childNodes.length; i++) {
			me.__4.ggMarkerInstances.push(me.__4.childNodes[i]);
		}
		me.__4.callChildLogicBlocks_configloaded = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_mouseover = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_hastouch = function(){
			if(me.__4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__4.ggMarkerInstances.length; i++) {
					if((me.__4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__4)>=0 && i==1) || (activeNodeMarker.indexOf(me.__4)<0 && i==0) || (i>1))) {
					if (me.__4.ggMarkerInstances[i].logicBlock_visible) {
						me.__4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__4.callChildLogicBlocks_configloaded();
		me.__4.callChildLogicBlocks_mouseover();
		me.__4.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__5);
		me.__5__normal = clonedNormalElement._marker;
		me.__5__normal.style.visibility='inherit';
		me.__5__normal.style.left='0px';
		me.__5__normal.style.top='0px';
		me.__5.ggMarkerNormal=me.__5__normal;
		me.__5.ggMarkerInstances.push(clonedNormalElement);
		me.__5.ggMarkerActive=null;
		me.__5.ggMarkerInstances.push(null);
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__normal,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__normal);
		}
		for (var i = 0; i < me.__5.childNodes.length; i++) {
			me.__5.ggMarkerInstances.push(me.__5.childNodes[i]);
		}
		me.__5.callChildLogicBlocks_configloaded = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_mouseover = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_hastouch = function(){
			if(me.__5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__5.ggMarkerInstances.length; i++) {
					if((me.__5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__5)>=0 && i==1) || (activeNodeMarker.indexOf(me.__5)<0 && i==0) || (i>1))) {
					if (me.__5.ggMarkerInstances[i].logicBlock_visible) {
						me.__5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__5.callChildLogicBlocks_configloaded();
		me.__5.callChildLogicBlocks_mouseover();
		me.__5.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__6);
		me.__6__normal = clonedNormalElement._marker;
		me.__6__normal.style.visibility='inherit';
		me.__6__normal.style.left='0px';
		me.__6__normal.style.top='0px';
		me.__6.ggMarkerNormal=me.__6__normal;
		me.__6.ggMarkerInstances.push(clonedNormalElement);
		me.__6.ggMarkerActive=null;
		me.__6.ggMarkerInstances.push(null);
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__normal,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__normal);
		}
		for (var i = 0; i < me.__6.childNodes.length; i++) {
			me.__6.ggMarkerInstances.push(me.__6.childNodes[i]);
		}
		me.__6.callChildLogicBlocks_configloaded = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_mouseover = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_hastouch = function(){
			if(me.__6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__6.ggMarkerInstances.length; i++) {
					if((me.__6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__6)>=0 && i==1) || (activeNodeMarker.indexOf(me.__6)<0 && i==0) || (i>1))) {
					if (me.__6.ggMarkerInstances[i].logicBlock_visible) {
						me.__6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__6.callChildLogicBlocks_configloaded();
		me.__6.callChildLogicBlocks_mouseover();
		me.__6.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__7);
		me.__7__normal = clonedNormalElement._marker;
		me.__7__normal.style.visibility='inherit';
		me.__7__normal.style.left='0px';
		me.__7__normal.style.top='0px';
		me.__7.ggMarkerNormal=me.__7__normal;
		me.__7.ggMarkerInstances.push(clonedNormalElement);
		me.__7.ggMarkerActive=null;
		me.__7.ggMarkerInstances.push(null);
		if (me.__7.firstChild) {
			me.__7.insertBefore(me.__7__normal,me.__7.firstChild);
		} else {
			me.__7.appendChild(me.__7__normal);
		}
		for (var i = 0; i < me.__7.childNodes.length; i++) {
			me.__7.ggMarkerInstances.push(me.__7.childNodes[i]);
		}
		me.__7.callChildLogicBlocks_configloaded = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_mouseover = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_hastouch = function(){
			if(me.__7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__7.ggMarkerInstances.length; i++) {
					if((me.__7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__7)>=0 && i==1) || (activeNodeMarker.indexOf(me.__7)<0 && i==0) || (i>1))) {
					if (me.__7.ggMarkerInstances[i].logicBlock_visible) {
						me.__7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__7.callChildLogicBlocks_configloaded();
		me.__7.callChildLogicBlocks_mouseover();
		me.__7.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__8);
		me.__8__normal = clonedNormalElement._marker;
		me.__8__normal.style.visibility='inherit';
		me.__8__normal.style.left='0px';
		me.__8__normal.style.top='0px';
		me.__8.ggMarkerNormal=me.__8__normal;
		me.__8.ggMarkerInstances.push(clonedNormalElement);
		me.__8.ggMarkerActive=null;
		me.__8.ggMarkerInstances.push(null);
		if (me.__8.firstChild) {
			me.__8.insertBefore(me.__8__normal,me.__8.firstChild);
		} else {
			me.__8.appendChild(me.__8__normal);
		}
		for (var i = 0; i < me.__8.childNodes.length; i++) {
			me.__8.ggMarkerInstances.push(me.__8.childNodes[i]);
		}
		me.__8.callChildLogicBlocks_configloaded = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_mouseover = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_hastouch = function(){
			if(me.__8.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__8.ggMarkerInstances.length; i++) {
					if((me.__8.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__8)>=0 && i==1) || (activeNodeMarker.indexOf(me.__8)<0 && i==0) || (i>1))) {
					if (me.__8.ggMarkerInstances[i].logicBlock_visible) {
						me.__8.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__8.callChildLogicBlocks_configloaded();
		me.__8.callChildLogicBlocks_mouseover();
		me.__8.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__9);
		me.__9__normal = clonedNormalElement._marker;
		me.__9__normal.style.visibility='inherit';
		me.__9__normal.style.left='0px';
		me.__9__normal.style.top='0px';
		me.__9.ggMarkerNormal=me.__9__normal;
		me.__9.ggMarkerInstances.push(clonedNormalElement);
		me.__9.ggMarkerActive=null;
		me.__9.ggMarkerInstances.push(null);
		if (me.__9.firstChild) {
			me.__9.insertBefore(me.__9__normal,me.__9.firstChild);
		} else {
			me.__9.appendChild(me.__9__normal);
		}
		for (var i = 0; i < me.__9.childNodes.length; i++) {
			me.__9.ggMarkerInstances.push(me.__9.childNodes[i]);
		}
		me.__9.callChildLogicBlocks_configloaded = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_mouseover = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_hastouch = function(){
			if(me.__9.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__9.ggMarkerInstances.length; i++) {
					if((me.__9.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__9)>=0 && i==1) || (activeNodeMarker.indexOf(me.__9)<0 && i==0) || (i>1))) {
					if (me.__9.ggMarkerInstances[i].logicBlock_visible) {
						me.__9.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__9.callChildLogicBlocks_configloaded();
		me.__9.callChildLogicBlocks_mouseover();
		me.__9.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__10);
		me.__10__normal = clonedNormalElement._marker;
		me.__10__normal.style.visibility='inherit';
		me.__10__normal.style.left='0px';
		me.__10__normal.style.top='0px';
		me.__10.ggMarkerNormal=me.__10__normal;
		me.__10.ggMarkerInstances.push(clonedNormalElement);
		me.__10.ggMarkerActive=null;
		me.__10.ggMarkerInstances.push(null);
		if (me.__10.firstChild) {
			me.__10.insertBefore(me.__10__normal,me.__10.firstChild);
		} else {
			me.__10.appendChild(me.__10__normal);
		}
		for (var i = 0; i < me.__10.childNodes.length; i++) {
			me.__10.ggMarkerInstances.push(me.__10.childNodes[i]);
		}
		me.__10.callChildLogicBlocks_configloaded = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_mouseover = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_hastouch = function(){
			if(me.__10.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__10.ggMarkerInstances.length; i++) {
					if((me.__10.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__10)>=0 && i==1) || (activeNodeMarker.indexOf(me.__10)<0 && i==0) || (i>1))) {
					if (me.__10.ggMarkerInstances[i].logicBlock_visible) {
						me.__10.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__10.callChildLogicBlocks_configloaded();
		me.__10.callChildLogicBlocks_mouseover();
		me.__10.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_Class(this,me.__11);
		me.__11__normal = clonedNormalElement._marker;
		me.__11__normal.style.visibility='inherit';
		me.__11__normal.style.left='0px';
		me.__11__normal.style.top='0px';
		me.__11.ggMarkerNormal=me.__11__normal;
		me.__11.ggMarkerInstances.push(clonedNormalElement);
		me.__11.ggMarkerActive=null;
		me.__11.ggMarkerInstances.push(null);
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__normal,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__normal);
		}
		for (var i = 0; i < me.__11.childNodes.length; i++) {
			me.__11.ggMarkerInstances.push(me.__11.childNodes[i]);
		}
		me.__11.callChildLogicBlocks_configloaded = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_mouseover = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_hastouch = function(){
			if(me.__11.ggMarkerInstances) {
				var i;
				for(i = 0; i < me.__11.ggMarkerInstances.length; i++) {
					if((me.__11.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me.__11)>=0 && i==1) || (activeNodeMarker.indexOf(me.__11)<0 && i==0) || (i>1))) {
					if (me.__11.ggMarkerInstances[i].logicBlock_visible) {
						me.__11.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me.__11.callChildLogicBlocks_configloaded();
		me.__11.callChildLogicBlocks_mouseover();
		me.__11.callChildLogicBlocks_hastouch();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (me.__360s.ggScrollByX && me.__360s.ggScrollByY) {
				me.__360s.ggScrollByXSmooth(200);
				me.__360s.ggScrollByYSmooth(170);
			}
			me._hamburger_on.onclick();
		});
		player.addListener('imagesready', function() {
			player.stopAutorotate();
			me.__360s.ggUpdatePosition();
			me._key.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['key1']) {
			me._ring1.style[domTransition]='none';
			me._ring1.style.visibility=(Number(me._ring1.style.opacity)>0||!me._ring1.style.opacity)?'inherit':'hidden';
			me._ring1.ggVisible=true;
			var scrollOffX = me.__1.offsetLeft;
			var scrollOffY = me.__1.offsetTop;
			var domRect = me.__1.getBoundingClientRect();
			var parentEl = me.__1.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key2']) {
			me._ring11.style[domTransition]='none';
			me._ring11.style.visibility=(Number(me._ring11.style.opacity)>0||!me._ring11.style.opacity)?'inherit':'hidden';
			me._ring11.ggVisible=true;
			var scrollOffX = me.__11.offsetLeft;
			var scrollOffY = me.__11.offsetTop;
			var domRect = me.__11.getBoundingClientRect();
			var parentEl = me.__11.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key3']) {
			me._ring3.style[domTransition]='none';
			me._ring3.style.visibility=(Number(me._ring3.style.opacity)>0||!me._ring3.style.opacity)?'inherit':'hidden';
			me._ring3.ggVisible=true;
			var scrollOffX = me.__3.offsetLeft;
			var scrollOffY = me.__3.offsetTop;
			var domRect = me.__3.getBoundingClientRect();
			var parentEl = me.__3.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key4']) {
			me._ring4.style[domTransition]='none';
			me._ring4.style.visibility=(Number(me._ring4.style.opacity)>0||!me._ring4.style.opacity)?'inherit':'hidden';
			me._ring4.ggVisible=true;
			var scrollOffX = me.__4.offsetLeft;
			var scrollOffY = me.__4.offsetTop;
			var domRect = me.__4.getBoundingClientRect();
			var parentEl = me.__4.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key5']) {
			me._ring5.style[domTransition]='none';
			me._ring5.style.visibility=(Number(me._ring5.style.opacity)>0||!me._ring5.style.opacity)?'inherit':'hidden';
			me._ring5.ggVisible=true;
			var scrollOffX = me.__5.offsetLeft;
			var scrollOffY = me.__5.offsetTop;
			var domRect = me.__5.getBoundingClientRect();
			var parentEl = me.__5.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key6']) {
			me._ring6.style[domTransition]='none';
			me._ring6.style.visibility=(Number(me._ring6.style.opacity)>0||!me._ring6.style.opacity)?'inherit':'hidden';
			me._ring6.ggVisible=true;
			var scrollOffX = me.__6.offsetLeft;
			var scrollOffY = me.__6.offsetTop;
			var domRect = me.__6.getBoundingClientRect();
			var parentEl = me.__6.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key7']) {
			me._ring7.style[domTransition]='none';
			me._ring7.style.visibility=(Number(me._ring7.style.opacity)>0||!me._ring7.style.opacity)?'inherit':'hidden';
			me._ring7.ggVisible=true;
			var scrollOffX = me.__7.offsetLeft;
			var scrollOffY = me.__7.offsetTop;
			var domRect = me.__7.getBoundingClientRect();
			var parentEl = me.__7.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
		if (me.elementMouseOver['key8']) {
			me._ring8.style[domTransition]='none';
			me._ring8.style.visibility=(Number(me._ring8.style.opacity)>0||!me._ring8.style.opacity)?'inherit':'hidden';
			me._ring8.ggVisible=true;
			var scrollOffX = me.__8.offsetLeft;
			var scrollOffY = me.__8.offsetTop;
			var domRect = me.__8.getBoundingClientRect();
			var parentEl = me.__8.parentElement;
			while (parentEl) {
				if (parentEl.ggScrollIntoView) {
					parentEl.ggScrollIntoView(scrollOffX, scrollOffY, domRect.width, domRect.height);
					break;
				}
				scrollOffX += parentEl.offsetLeft;
				scrollOffY += parentEl.offsetTop;
				parentEl = parentEl.parentElement;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinElement_marker_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker=document.createElement('div');
		els=me._marker__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTUgNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8dGl0bGU+bWFya2VyPC90aXRsZT4KIDxjaXJjbGUgY3g9IjI3LjUiIGN5PSIyNy41IiByPSIyNSIgc3R5bGU9ImZpbGw6I2Q3MjgyZjtzdHJva2U6I2Q3MjgyZjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NXB4OyBmaWxsLW9wYWNpdHk6MTsgc3Ryb2tlLW9wYWNpdHk6MSIvPgo8L3N2Zz4K';
		me._marker__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 37px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker.onclick=function (e) {
			p23(0)
		}
		me._marker.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin {font-family: "Ubuntu", sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._logo.logicBlock_scaling();
	me._buttons.logicBlock_scaling();
	me._ring1.logicBlock_visible();
	me._ring3.logicBlock_visible();
	me._ring4.logicBlock_visible();
	me._ring5.logicBlock_visible();
	me._ring6.logicBlock_visible();
	me._ring7.logicBlock_visible();
	me._ring8.logicBlock_visible();
	me._ring9.logicBlock_visible();
	me._ring10.logicBlock_visible();
	me._ring11.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._logo.logicBlock_scaling();me._buttons.logicBlock_scaling(); });
	player.addListener('configloaded', function(args) { me._ring1.logicBlock_visible();me._ring3.logicBlock_visible();me._ring4.logicBlock_visible();me._ring5.logicBlock_visible();me._ring6.logicBlock_visible();me._ring7.logicBlock_visible();me._ring8.logicBlock_visible();me._ring9.logicBlock_visible();me._ring10.logicBlock_visible();me._ring11.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._ring1.logicBlock_visible();me._ring3.logicBlock_visible();me._ring4.logicBlock_visible();me._ring5.logicBlock_visible();me._ring6.logicBlock_visible();me._ring7.logicBlock_visible();me._ring8.logicBlock_visible();me._ring9.logicBlock_visible();me._ring10.logicBlock_visible();me._ring11.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me.__1.callChildLogicBlocks_configloaded();me.__3.callChildLogicBlocks_configloaded();me.__4.callChildLogicBlocks_configloaded();me.__5.callChildLogicBlocks_configloaded();me.__6.callChildLogicBlocks_configloaded();me.__7.callChildLogicBlocks_configloaded();me.__8.callChildLogicBlocks_configloaded();me.__9.callChildLogicBlocks_configloaded();me.__10.callChildLogicBlocks_configloaded();me.__11.callChildLogicBlocks_configloaded(); });
	player.addListener('mouseover', function(args) { me.__1.callChildLogicBlocks_mouseover();me.__3.callChildLogicBlocks_mouseover();me.__4.callChildLogicBlocks_mouseover();me.__5.callChildLogicBlocks_mouseover();me.__6.callChildLogicBlocks_mouseover();me.__7.callChildLogicBlocks_mouseover();me.__8.callChildLogicBlocks_mouseover();me.__9.callChildLogicBlocks_mouseover();me.__10.callChildLogicBlocks_mouseover();me.__11.callChildLogicBlocks_mouseover(); });
	player.addListener('hastouch', function(args) { me.__1.callChildLogicBlocks_hastouch();me.__3.callChildLogicBlocks_hastouch();me.__4.callChildLogicBlocks_hastouch();me.__5.callChildLogicBlocks_hastouch();me.__6.callChildLogicBlocks_hastouch();me.__7.callChildLogicBlocks_hastouch();me.__8.callChildLogicBlocks_hastouch();me.__9.callChildLogicBlocks_hastouch();me.__10.callChildLogicBlocks_hastouch();me.__11.callChildLogicBlocks_hastouch(); });
	me.skinTimerEvent();
};