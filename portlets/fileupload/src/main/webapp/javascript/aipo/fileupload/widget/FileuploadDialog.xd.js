dojo._xdResourceLoaded({
depends: [["provide", "aipo.fileupload.widget.FileuploadDialog"],
["provide", "aipo.fileupload.widget.FileuploadDialogUnderlay"],
["require", "aimluck.widget.Dialog"]],
defineResource: function(dojo){if(!dojo._hasResource["aipo.widget.FileuploadDialog"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["aipo.widget.FileuploadDialog"] = true;
/*
 * Aipo is a groupware program developed by Aimluck,Inc.
 * Copyright (C) 2004-2011 Aimluck,Inc.
 * http://www.aipo.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

dojo.provide("aipo.fileupload.widget.FileuploadDialog");
dojo.provide("aipo.fileupload.widget.FileuploadDialogUnderlay");
dojo.provide("aipo.fileupload.widget.YoutubeDialog");
dojo.provide("aipo.fileupload.widget.YoutubeDialogUnderlay");

dojo.require("aimluck.widget.Dialog");

dojo.declare(
    "aipo.fileupload.widget.FileuploadDialogUnderlay",
    [aimluck.widget.DialogUnderlay],
    {
       templateString: "<div class=fileuploadDialogUnderlayWrapper id='${id}_underlay'><div class=fileuploadDialogUnderlay dojoAttachPoint='node'></div></div>"
    }

);

dojo.declare(
    "aipo.fileupload.widget.FileuploadDialog",
    [aimluck.widget.Dialog],
    {
        loadingMessage:"<div class='indicator'>読み込み中...</div>",
        templateCssString:"fileuploadDialog",
        templateString:"<div id='fileuploadDialog' class='${templateCssString}' dojoattachpoint='wrapper'><span dojoattachpoint='tabStartOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap'tabindex='0'></span><span dojoattachpoint='tabStart' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><div dojoattachpoint='containerNode' style='position: relative; z-index: 2;'></div><span dojoattachpoint='tabEnd' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><span dojoattachpoint='tabEndOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span></div>",
        _setup: function(){

            this._modalconnects = [];

            if(this.titleBar){
                this._moveable = new dojo.dnd.Moveable(this.domNode, { handle: this.titleBar });
            }

            this._underlay = new aipo.fileupload.widget.FileuploadDialogUnderlay();

            var node = this.domNode;
            this._fadeIn = dojo.fx.combine(
                [dojo.fadeIn({
                    node: node,
                    duration: this.duration
                 }),
                 dojo.fadeIn({
                    node: this._underlay.domNode,
                    duration: this.duration,
                    onBegin: dojo.hitch(this._underlay, "show")
                 })
                ]
            );

            this._fadeOut = dojo.fx.combine(
                [dojo.fadeOut({
                    node: node,
                    duration: this.duration,
                    onEnd: function(){
                        node.style.display="none";
                    }
                 }),
                 dojo.fadeOut({
                    node: this._underlay.domNode,
                    duration: this.duration,
                    onEnd: dojo.hitch(this._underlay, "hide")
                 })
                ]
            );
        }
    }
);

dojo.declare(
    "aipo.fileupload.widget.YoutubeDialog",
    [aimluck.widget.Dialog],
    {
        loadingMessage:"<div class='indicator'>読み込み中...</div>",
        templateCssString:"youtubeDialog",
        templateString:"<div id='youtubeDialog' class='auiPopup imgPopup ${templateCssString}' dojoattachpoint='wrapper' style='max-width:640px;left:50%;top:50%;margin:-200px 0 0 -320px;'></div>",
        _setup: function(){

            this._modalconnects = [];

            if(this.titleBar){
                this._moveable = new dojo.dnd.Moveable(this.domNode, { handle: this.titleBar });
            }

            this._underlay = new aipo.fileupload.widget.YoutubeDialogUnderlay();

            var node = this.domNode;
            this._fadeIn = dojo.fx.combine(
                [dojo.fadeIn({
                    node: node,
                    duration: this.duration
                 }),
                 dojo.fadeIn({
                    node: this._underlay.domNode,
                    duration: this.duration,
                    onBegin: dojo.hitch(this._underlay, "show")
                 })
                ]
            );

            this._fadeOut = dojo.fx.combine(
                [dojo.fadeOut({
                    node: node,
                    duration: this.duration,
                    onEnd: function(){
                        node.style.display="none";
                    }
                 }),
                 dojo.fadeOut({
                    node: this._underlay.domNode,
                    duration: this.duration,
                    onEnd: dojo.hitch(this._underlay, "hide")
                 })
                ]
            );
        }
    }
);

}

}});