dojo._xdResourceLoaded({
depends: [["require", "dojox.gfx"],
["requireIf", dojox.gfx.renderer == "svg", "dojox.gfx.svg_attach"],
["requireIf", dojox.gfx.renderer == "vml", "dojox.gfx.vml_attach"],
["requireIf", dojox.gfx.renderer == "silverlight", "dojox.gfx.silverlight_attach"],
["requireIf", dojox.gfx.renderer == "canvas", "dojox.gfx.canvas_attach"]],
defineResource: function(dojo){dojo.require("dojox.gfx");

// include an attacher conditionally
dojo.requireIf(dojox.gfx.renderer == "svg", "dojox.gfx.svg_attach");
dojo.requireIf(dojox.gfx.renderer == "vml", "dojox.gfx.vml_attach");
dojo.requireIf(dojox.gfx.renderer == "silverlight", "dojox.gfx.silverlight_attach");
dojo.requireIf(dojox.gfx.renderer == "canvas", "dojox.gfx.canvas_attach");

}});