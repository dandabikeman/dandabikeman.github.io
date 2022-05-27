(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhsrjQA8gNDJBBQAuAPAuAUQBuAwBoBLQA0AmA0AtQBfBVBcBuQAzA+AsA6QBABUAyBNAEOjoIEljWAzLkLQAgAeAbAmQASAaBSCiQAAABABACQBjDqCEDcAsFjuIklDmIgBAAAspoiQB3hABzgqQA1gUA0gPQBfgbDogVQARgCASgCAnyilIkThJIgkk0AhsmfIAAlEAnyilIGGj6IF6C3AzHkPQDVioDJhrAgQDuIluhKIjqChQhjg+g1gfQiKhRihifAtEG+QBEBHAMAIQBKAcgDAMQDqBtCsAjQBnAUBvAJQCZAMD6gdQAOgBANgCQBWgKBWgNAB2I/QgvgBh9gOQk7gaj3jRATKD2IgJAuQjeERnHCBAPKAeQDgAEAcCAQADARACARQACAYgDAZAPDAjQBCBnAhA0IjmiUIANitAIvCqIkhifIkeDjICGFRAIvIVIAAlrIERiAAIvIVQiYAvkhgFAQxDRQisDblWBpAl+CkIh0lJAEOALIAAjz");
	this.shape.setTransform(0.0194,0.0049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99CC").s().p("AJ8CxIESiAIDlCUIAMATQitDblWBpgAkxCrIh0lJIGGj6IF7C3IAADzIkfDjgAvfgEQhSiigSgaQgbgmgggeIAFgEQDUioDJhrIAkE0IklDmg");
	this.shape_1.setTransform(-7.7,-0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88D15A").s().p("AAFgWIgBADIgCAOQgCANgEAPg");
	this.shape_2.setTransform(122.175,26.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFADD6").s().p("AiRFzQhvgJhngUQisgijqhtQADgNhKgbQgMgIhEhIIAAABQiEjbhjjrQChCfCKBRQA1AgBjA9QD3DRE7AaQB+ANAuABQEhAFCYguQFWhpCsjaIgLgTQghg1hChmIAHgFQDgAEAcB/QADARACASQACAYgDAYIAAABIgJAvQjeEPnHCCIgDAAQhWANhWALIgbADQivAUh+AAQg3AAgvgEg");
	this.shape_3.setTransform(8.0194,36.6633);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF87C3").s().p("AhHKDQk7gaj4jSIDrihIFuBKICGFRQgwgBh8gNgAD9BeIAAjzIEkjWQBgBUBcBvQAyA9AtA6IgNCtIkSCBgAsXicIgkk0QB3hABzgqQA1gTA1gPQBfgbDogWIAjgDIAAFDImHD7g");
	this.shape_4.setTransform(1.775,-8.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AB5KSIiGlRIEejiIEhCfIAAFrQiJAqj5AAIg3gBgAr9E7QiKhRihifIABgBIEljlIETBKIB0FIIjqChQhjg9g1gggANDB9IANitQBABUAyBNIAEAGQBCBmAhA1gAhplMIAAlDQA8gNDJBBQAuAPAuATQBuAwBoBLQA0AnA0AtIklDWg");
	this.shape_5.setTransform(-0.275,-8.3091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-124.2,-75.6,248.5,151.3), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AIzm+QBfBVBcBuQAzA+AsA6AhsrjQA8gNDJBBQDYBGDCCrAEOjoIEljWATKD0IgJAwQjeERnHCBATKD0IAAABAPKAeQDgAEAcCAQAIAogDAoIgBACAPDAjQBCBnAhA0IjmiUAtEG+QBEBHAMAIQBKAcgDAMQDqBtCsAjQBnAUBvAJQCZAMD6gdQAOgBANgCQBWgKBWgNAIvCqIkhifIAAjzAIvIVQiYAvkhgFQgvgBh9gOQk7gaj3jRQhjg+g1gfQiKhRigieIgBgBQBjDqCEDcAIvIVIAAlrIERiAIANitQBABUAyBNAQxDRQisDblWBpAsFjuIklDmIgBAAAzLkLQAgAeAbAmQASAaBSCiQAAABABACAspoiQCuheClgvQBmgdEEgXAnyilIkThJIgkk0AhsmfIAAlEAnyilIGGj6IF6C3AzHkPQDVioDJhrAgQDuIluhKIjqChAl+CkIh0lJAgQDuICGFRAEOALIkeDj");
	this.shape.setTransform(0.026,0.0049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88D15A").s().p("AAFgXIAAAAIgBAFQgCATgGAXg");
	this.shape_1.setTransform(122.175,26.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B878D6").s().p("AiRFzQhvgJhngUQisgijqhtQADgNhKgbQgMgIhEhIIAAABQiEjbhjjrIABAAQCgCfCKBRQA1AgBjA9QD3DRE7AaQB+ANAuABQEhAFCYguQFWhpCsjaIgLgTQghg1hChmIAHgFQDgAEAcB/QAIAogDAoIgBADIgJAwQjeEPnHCCIgDAAQhWANhWALIgbADQivAUh+AAQg4AAgugEg");
	this.shape_2.setTransform(8.026,36.6633);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B160D6").s().p("AJ8CxIESiAIDlCUIAMATQitDblWBpgAkxCrIh0lJIGGj6IF7C3IAADzIkfDjgAvdgBIgCgDQhSiigSgaQgbgmgggeIAFgEQDUioDJhrIAkE0IklDmg");
	this.shape_3.setTransform(-7.7,-0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF8DD6").s().p("AB5KSIiGlRIEejiIEgCfIAAFrQiIAqj5AAIg3gBgAr9E7QiLhRigifIABgBIEkjlIEUBKIB0FIIjrChQhjg9g0gggANDB9IANitQBABUAyBNIADAGQBDBmAgA1gAhplMIAAlDQA8gNDJBBQDYBFDCCsIklDWg");
	this.shape_4.setTransform(-0.25,-8.3091);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A740D6").s().p("AhHKDQk7gaj4jSIDrihIFuBKICGFRQgwgBh8gNgAD9BeIAAjzIEkjWQBgBUBcBvQAyA9AtA6IgNCtIkSCBgAsXicIgkk0QCvhdClgvQBmgdEEgXIAAFDImHD7g");
	this.shape_5.setTransform(1.775,-8.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-124.2,-75.6,248.5,151.3), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEagCQgDgIAAgHQgBgSAUgBQACAAADAAAEygkIABAAQADAAAEABAFFArQABgUAXACAlagLQAAgDgBgDQgCgNAGgGQAFgGALAAQAHAAAHACAlXgDQgCgEAAgC");
	this.shape.setTransform(-21.0017,-16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(3,1,1).p("ABnjFQAYADAfAPQA7AcBUBEQBNhDA7gdQAcgOAXgGQAggIAYAIQANAFACAPQAKBHkCE8QiUimhEiBQgghBAAgbQABgSAOgCQAGAAAIAAQACAAACAAAoLjLQAKABALADQAWAGAbAOQA5AcBOBAQBIg+A3geQAYgNAUgHQAqgOAdAKQAFACADACQAHAHABANQAAAdgiA/Qg8BtijCwQjYkRgVhbAotizQgDgOACgGQABgEAEgBQAHgBAJAAAosisIAAgBAhehXQBfgWBeAWQhfgpheApg");
	this.shape_1.setTransform(0.0101,-0.0083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAGIgBAAQgBgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgDIADgDIABgBIACAAIADABIACACIAAACIgBADIgBABIgBABIgCABIgBAAg");
	this.shape_2.setTransform(15.35,-14.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#242424").s().p("ABfhXQgghBAAgbQABgSAOgCIAOAAIAEAAIAAAAIAHACQAYADAfAPQA7AcBUBEQBNhDA7gdQAcgOAXgGQAggIAYAIQANAFACAPQAKBHkCE8QiUimhEiBgAByh2QACgSASgBIAAAAIABAAIADABIgDgBIgBAAIAAAAQgSABgCASgACWiTIgCADIAAAEQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIABAAIACABIABgBIABAAIABgBIABgBIABgDIAAgDIgCgCIgCgBIgEAAgABEizQAAAGADAJQgDgJAAgGIAAgCQAAgRAUgBIAEAAIgEAAQgUABAAARIAAACgAoqimIgCgGIAAgBIgBgGIgBgHQAAgIAEgFQAFgGAMAAQAHAAAHACQAKABALADQAWAGAbAOQA5AcBOBAQBIg+A3geQAYgNAUgHQAqgOAdAKQAFACADACQAHAHABANQAAAdgiA/Qg8BtijCwQjYkRgVhbgAoujHQABgEAEgBQAHgBAJAAQgMAAgFAGQgEAFAAAIIABAHQgDgOACgGg");
	this.shape_3.setTransform(0.0101,-0.0083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-57.4,-22.3,114.9,44.6), null);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA4lfQgOgJgOgJQAOAEAOAEQA8AUBEAdQCpBKBBBOQBCBPjdiHQhjg+hshJIAACgQAUAAAbABQBhADCiBvQCuB2AqFYIkgAAQgZlAiikAAAFlxIAXAAIAcAAIAAAIIAAAKAAcmBQBLADBcAPQC4AfBWA9QBVA9j8hPQh/goiPg0QhGAVhVAkQipBKhBBOQhCBQDeiIQBfg8BphGIAAgHIAKAAQAMgIALgIgAgFjAQg6ABgNAEQi+AdhxBXQgvAkglA4QhSCBggDsIEjAAQAfkHCzk2AgFjAIAAiqQAFgDAFgEAANmBQhKADhcAPQi4AfhWA9QhVA9D8hPQB/goCOg0gAgFjAQAKAAAzABAEiGCIpAAA");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Aj5EfQAgjsBSiBQAkg4AwglQBvhWC+gdQiyE2gfEHg");
	this.shape_1.setTransform(-32.725,9.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399FF").s().p("AgxEgQgak+ihkCQBgADCiBvQCuB4AqFWg");
	this.shape_2.setTransform(34,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AkfEiQAfkICyk1QAOgFA5gBIA9ACIAvABQCiEBAZE/g");
	this.shape_3.setTransform(0.175,9.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("ADyAqQhjg9hshJIAAgKQA8AUBEAdQCqBJBABOQAZAdgPAAQgZAAiMhVgAl9BSQBBhOCphJQBVgkBFgVQBLADBdAPQC3AfBWA9QBVA8j8hOQh/goiPg0IgVAQIgMAAIAAAHQhoBGhgA7QiLBWgaAAQgPAAAZgegAm7gQQBWg9C4gfQBcgPBKgDQiPA0h+AoQiOArgjAAQgbAAAlgZg");
	this.shape_4.setTransform(2.05,-25.8802);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgeBYIAAipIALgHIAWAAIAcASIAACfIg9gBg");
	this.shape_5.setTransform(2.475,-28.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-58.7,-39.6,117.5,79.30000000000001), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AIKhpQACCOg+A4QgoAng/AWQg+AXhHgJQhFgKgxgyQgygzgWhCQgXhDgBghQgBggAQgKQAEgCAFgDQAOgHARgFQAHgCAIAEQAUAMAaA0QAYA0AsApQBZBSBmg1QBlgzAihNQAAABAAABIAAAAQAAABABACIAAAAQAAABAAAAIADAmQAAAHABADIgBgHIAAgDAIKhpQAAABABABAIKhqQAAABAAAAAILhnQADAWAAAUAoJhqQAAABgBABIAAABQAAAAAAABIgCAmQgBAKgBABIABgJIABgCAoJhqIAAABQAAAAgBABAoJhsQAAAAAAABIAAABAoKhnQgDAVAAAUAoJhsQgCCQA+A5QAoAmA/AXQA/AWBGgJQBGgJAxgzQAxgzAWhCQAXhDABggQACgggRgKQgEgDgFgCQgNgHgSgGQgHgCgIAFQgUALgaA1QgYA0gsApQhZBRhmg1QhlgygihNg");
	this.shape.setTransform(0.025,0.0228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADiCoQhFgKgxgyQgygzgWhCQgXhDgBghQgBggAQgKIAJgFQAOgHARgFQAHgCAIAEQAUAMAaA0QAYA0AsApQBZBSBmg1QBlgzAihNIAAACIAAAAIAAABQACCOg+A4QgoAng/AWQgtAQgwAAQgUAAgUgCgAlmCaQg/gXgogmQg+g5ACiQQAiBNBlAyQBmA1BZhRQAsgpAYg0QAag1AUgLQAIgFAHACQASAGANAHIAJAFQARAKgCAgQgBAggXBDQgWBCgxAzQgxAzhGAJQgVADgUAAQgwAAgsgQg");
	this.shape_1.setTransform(0.0486,0.0228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-55.1,-19.5,110.30000000000001,39.1), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkUAdQgIgZgKgoQgCgKgDgLQggiKC4BQQC3BQCzhwQAQgJAagCQA4AagKBJIgCAOIpPAGAkUAdQBngNByBJQhSAThVAzQgYgvgahTgAEtgtQgMBEgqB6QiShcigAk");
	this.shape.setTransform(0.0143,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99201E").s().p("Ahrg/QBngNBwBJQhRAShUAzQgYgvgahSg");
	this.shape_1.setTransform(-16.825,9.3203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+AoQhyhIhnANQgIgZgKgpIAEgDIJPgGQgMBFgqB4QiShbigAkg");
	this.shape_2.setTransform(0.325,4.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkrAoQggiJC4BQQC3BPCzhvQAQgJAagCQA4AagKBIIgCAOIpPAGIgEADIgFgVg");
	this.shape_3.setTransform(0.0143,-9.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-31.4,-16.8,62.9,33.7), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhsrjQA8gNDJBBQBpAiBkA6QBpA9BkBYQBfBVBcBuQAzA+AsA6AEOjoIEljWApoFFQhjg+g1gfQiKhRigieIgBgBQBjDqCEDcAsFjuIklDmIgBAAAzLkLQAgAeAbAmQASAaBSCiQAAABABACAspoiQCuheClgvQA1gPBfgNQBYgNB+gLAnyilIkThJIgkk0AhsmfIAAlEAnyilIGGj6IF6C3AzHkPQDVioDJhrAgQDuIluhKIjqChAtEG+QBEBHAMAIQBKAcgDAMQDqBtCsAjQBnAUBvAJQCZAMD6gdQAOgBANgCQBWgKBWgNAB2I/QgvgBh9gOQk7gaj3jRAPKAeQDgAEAcCAQAJApgFAqIgJAvQjeERnHCBAPDAjQBCBnAhA0IjmiUIANitQBABUAyBNAIvCqIkhifIkeDjICGFRAIvIVQiYAvkhgFAIvIVIAAlrIERiAAQxDRQisDblWBpAl+CkIh0lJAEOALIAAjz");
	this.shape.setTransform(0.025,0.0049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AAFgXIgBAEQgCAUgGAXg");
	this.shape_1.setTransform(122.175,26.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF8A").s().p("AiRFzQhvgJhngUQisgijqhtQADgNhKgbQgMgIhEhIIAAABQiEjbhjjrIABAAQCgCfCKBRQA1AgBjA9QD3DRE7AaQB+ANAuABQEhAFCYguQFWhpCsjaIgLgTQghg1hChmIAHgFQDgAEAcB/QAJAqgFApIgJAwQjeEPnHCCIgDAAQhWANhWALIgbADQivAUh+AAQg4AAgugEg");
	this.shape_2.setTransform(8.025,36.6633);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("AJ8CxIESiAIDlCUIAMATQitDblWBpgAkxCrIh0lJIGGj6IF7C3IAADzIkfDjgAvdgBIgCgDQhSiigSgaQgbgmgggeIAFgEQDUioDJhrIAkE0IklDmg");
	this.shape_3.setTransform(-7.7,-0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE600").s().p("AhHKDQk7gaj4jSIDrihIFuBKICGFRQgwgBh8gNgAD9BeIAAjzIEkjWQBgBUBcBvQAyA9AtA6IgNCtIkSCBgAsXicIgkk0QCvhdClgvQA0gPBfgNQBZgNB+gLIAAFDImHD7g");
	this.shape_4.setTransform(1.775,-8.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFB5").s().p("AB5KSIiGlRIEejiIEgCfIAAFrQiIAqj5AAIg3gBgAr9E7QiLhRigifIABgBIEkjlIEUBKIB0FIIjrChQhjg9g0gggANDB9IANitQBABUAyBNIADAGQBDBmAgA1gAhplMIAAlDQA8gNDJBBQBpAiBkA6QBpA9BkBYIklDWg");
	this.shape_5.setTransform(-0.25,-8.3091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-124.2,-75.6,248.5,151.3), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(0.1,1,1).p("AJcAlIjEixIlLBSIAUAlIEthQgApbCNIDYiEIFIAQIgQAsIk0gYg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000033").ss(0.1,1,1).p("ABFgLQgVgTAGgxAhEBQQAYgXgGgk");
	this.shape_1.setTransform(0.9,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AmDAJIFJAQIgRAsIkzgYIjdBggAGOhlIkuBQIgTglIFLhSIDECxg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-61.3,-15.1,122.69999999999999,30.299999999999997), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AIzm+QBfBVBcBuQAzA+AsA6QBABUAyBNAEOjoIEljWAhsrjQA8gNDJBBQDYBGDCCrAPKAeQDgAEAcCAQAJApgFAqIgJAvQjeERnHCBAPDAjQBCBnAhA0IjmiUIANitAtEG+QBEBHAMAIQBKAcgDAMQDqBtCsAjQBnAUBvAJQCZAMD6gdQAOgBANgCQBWgKBWgNAIvIVIAAlrIkhifIAAjzAIvIVQiYAvkhgFQgvgBh9gOQk7gaj3jRQhjg+g1gfQiKhRigieIgBgBQBjDqCEDcAQxDRQisDblWBpAIvCqIERiAAzLkLQAgAeAbAmQASAaBSCiQAAABABACAsFjuIklDmIgBAAAspoiQCuheClgvQBmgdEEgXAnyilIkThJIgkk0AhsmfIAAlEAnyilIGGj6IF6C3AzHkPQDVioDJhrAgQDuIluhKIjqChAl+CkIh0lJAgQDuICGFRAEOALIkeDj");
	this.shape.setTransform(0.025,0.0049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88D15A").s().p("AAFgXIgBAEQgCAUgGAXg");
	this.shape_1.setTransform(122.175,26.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1DCDF2").s().p("AhHKDQk7gaj4jSIDrihIFuBKICGFRQgwgBh8gNgAD9BeIAAjzIEkjWQBgBUBcBvQAyA9AtA6IgNCtIkSCBgAsXicIgkk0QCvhdClgvQBmgdEEgXIAAFDImHD7g");
	this.shape_2.setTransform(1.775,-8.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83DEF2").s().p("AiRFzQhvgJhngUQisgijqhtQADgNhKgbQgMgIhEhIIAAABQiEjbhjjrIABAAQCgCfCKBRQA1AgBjA9QD3DRE7AaQB+ANAuABQEhAFCYguQFWhpCsjaIgLgTQghg1hChmIAHgFQDgAEAcB/QAJAqgFApIgJAwQjeEPnHCCIgDAAQhWANhWALIgbADQivAUh+AAQg4AAgugEg");
	this.shape_3.setTransform(8.025,36.6633);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2E4F2").s().p("AB5KSIiGlRIEejiIEgCfIAAFrQiIAqj5AAIg3gBgAr9E7QiLhRigifIABgBIEkjlIEUBKIB0FIIjrChQhjg9g0gggANDB9IANitQBABUAyBNIADAGQBDBmAgA1gAhplMIAAlDQA8gNDJBBQDYBFDCCsIklDWg");
	this.shape_4.setTransform(-0.25,-8.3091);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66D9F2").s().p("AJ8CxIESiAIDlCUIAMATQitDblWBpgAkxCrIh0lJIGGj6IF7C3IAADzIkfDjgAvfgEQhSiigSgaQgbgmgggeIAFgEQDUioDJhrIAkE0IklDmg");
	this.shape_5.setTransform(-7.7,-0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-124.2,-75.6,248.5,151.3), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(3,1,1).p("ADhAaQAVgCAHgNQAGgMAKgMQgQADgDgTQgGAQgHgKQgBgCgCgDQgCgCgEgDQgBADgCACQgBACgBACQgFAKgEALIgLgVQgIALgCAJQgCAGACAFQALAVAVgCgAjgAiQgVgDgHgMQgGgNgKgLQAQACADgSQAGAQAHgLQABgCACgCQACgDAEgCQABACACADQABACABACQAFAJAEAKIALgTQAIALACAHQACAHgCAGQgLAVgVgCg");
	this.shape.setTransform(0,5.0837);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6633").ss(3,1,1).p("ADkAvQAbgEAJgWQAIgVANgUQgRAEgNgCQgDgBgCAAQADgBgJgSQgEgIgIgIQgEAHgDAIQgHARgCACIgKgKIgEgFIgDgEQgTAkAGARQAOAkAcgDgAjjA2QgbgDgJgWQgIgWgNgTQARADANgCQADAAACgBQgDgBAJgSQAEgIAIgHQAEAHADAHQAHARACADIAKgLIAEgFIADgDQATAjgGASQgOAkgcgEg");
	this.shape_1.setTransform(0,4.1155);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF3300").ss(3,1,1).p("ADjBNQAtgFANgjQAOgjAUgfQghAGgfAaQANghgPgdQgGgNgMgMQgGALgFAMQgLAZgHAcQAAACAAACIgEgJIgUgvQgeA6AJAbQAWA6AsgGgAjiBVQgtgGgNgjQgOgjgUgfQAhAGAfAbQgNgiAPgdQAGgNAMgLQAGALAFAMQALAZAHAcQAAAAAAACIAEgHIAUgwQAeA5gJAdQgWA5gsgFg");
	this.shape_2.setTransform(0,1.899);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AJgieIoWBwIAMAmQARAqAaAiQArA6A7ASQA1APBAgPQBIgSA3gvQAwgqAig+QAVgpARgzQABgFACgEQAKggAAAAgApfiXIIWBxIgMAlQgRArgaAiQgrA5g7ASQg1AQhAgQQhIgSg3gvQgwgpgig/QgVgpgRgyQgBgFgCgFQgKggAAAAg");
	this.shape_3.setTransform(0,0.0125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AjfAiQgWgDgHgMQgGgNgJgLQAQACADgSQAFAQAHgLIAEgEIAFgFIAEAFIACAEQAEAJAEAKIALgTQAIALACAHQACAHgCAGQgKATgSAAIgDAAgADBAHQgCgFACgGQACgJAIgLIALAVQAEgLAEgKIACgEIAEgFIAFAFIAEAFQAHAKAFgQQADATAQgDQgJAMgGAMQgHANgWACIgDAAQgSAAgKgTg");
	this.shape_4.setTransform(0,5.0837);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6633").s().p("AjjA2QgbgDgJgWQgIgWgNgTQARADANgCIAGgBQgEgBAJgSQAFgIAHgHIAHAOQAHARADADIAJgLIABAEIADgJIADgDQATAjgFASQgNAhgZAAIgFgBgAj8AcQAHANAWACQAUACALgVQACgFgCgHQgCgJgIgKIgLAUQgEgLgEgJIgCgEIgEgFIgFAFIgEAFQgHAJgFgPQgDASgQgDQAJAMAGANgAC5AOQgFgRATgkIADAEIADAIIABgDIAJAKQADgCAHgRIAHgPQAHAIAFAIQAJASgEABIAGABQANACARgEQgNAUgIAVQgJAWgbAEIgFAAQgZAAgNghgADBAEQgCAHACAGQALAVAUgCQAWgDAHgMQAGgNAJgLQgQACgDgSQgFAQgHgLIgEgEIgFgFIgEAFIgCAEQgEAJgEAKIgLgTQgIALgCAHg");
	this.shape_5.setTransform(0,4.1155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("AjiBVQgtgGgNgjQgOgjgUgfQAhAGAfAbQgNgiAPgdQAHgNALgLIAMAXQAKAZAHAcIgJAJQgDgCgHgQIgHgPQgHAIgFAIQgJARAEABIgGABQgNACgRgEQANAVAIAVQAJAWAbAEQAcADAPgkQAFgSgTgjIgDAEIAUgwQAeA5gIAdQgVA0gmAAIgIAAgACgAZQgIgbAeg6IAUAvIgDgDQgTAjAFASQAPAkAcgEQAbgDAJgWQAIgWANgUQgRADgNgCQAfgaAhgGQgUAfgOAjQgNAjgtAFIgIAAQgmAAgVg0gAD/ADIgGgBQAEgBgJgRQgFgIgHgHIgHAOQgHARgDACIgJgKQAHgcAKgZIAMgXQALAMAHANQAPAdgNAhIAAAAg");
	this.shape_6.setTransform(0,1.899);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlaCXQhJgSg2gvQgxgpghg/QgWgpgRgyIgDgKIgKggIIWBxIgMAlQgQArgbAiQgrA5g7ASQgaAIgdAAQgdAAgggIgAkcA/QANAjAtAFQAsAGAXg6QAIgcgeg5IgUAuIgEAFQgHgbgKgZIgMgXQgLAMgHANQgPAdANAhQgfgbghgFQAUAfAOAjgADnCQQg7gSgrg6QgbgigQgqIgMgmIIWhwIgKAgIgDAJQgRAzgWApQghA+gxAqQg2AvhJASQggAIgdAAQgdAAgagIgACgAsQAXA5AsgFQAtgGANgjQAOgjAUgfQghAGgfAbQANgigPgdQgHgNgLgLIgMAXQgKAZgHAbIgEgFIgUgvQgeA5AIAdg");
	this.shape_7.setTransform(0,0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-62.3,-17.4,124.6,34.8), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AF3ghQAAAVgSAUQgTAVgcAAQgcAAgSgWQgSgVACgVQABgWAPgNQAPgNAcAAQAdAAATAOQAUAPAAAVgABUiRIEzAAIAcAmQgCAtgYBjQgPA8gtAbQgdARgqADQhEAFgrgZQgYgOgRgYQguhDgIhvgAhjggQAAAVgSAUQgTAVgcAAQgcAAgSgWQgSgVACgVQABgWAPgNQAPgNAcAAQAdAAATAOQAUAPAAAVgAmGiQIEzAAIAcAmQgCAtgYBjQgPA7grAbQgeASgrADQhFAGgsgbQgXgOgQgXQguhDgIhvg");
	this.shape.setTransform(0,0.0215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkbAjQgSgWABgUQACgWAPgNQAPgNAcAAQAcAAATAOQAUAPAAAVQAAAUgSAVQgSAVgcAAQgdAAgRgWgAC+AiQgSgWACgUQABgWAPgNQAPgNAcAAQAdAAATAOQAUAPAAAVQAAAUgSAVQgTAVgcAAQgcAAgSgWg");
	this.shape_1.setTransform(7.3692,-2.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlFB8QgXgOgQgXQguhDgIhvIAcg1IEzAAIAcAmQgCAtgYBjQgOA7gsAbQgeASgqADIgXABQg2AAglgWgAjShFQgOANgCAWQgBAVARAVQASAWAcAAQAdAAASgVQASgUAAgVQAAgVgUgPQgTgOgcAAQgdAAgPANgACWB8QgYgOgQgYQguhDgIhvIAcg1IEzAAIAbAmQgBAtgZBjQgPA8gsAbQgdARgqADIgWABQg2AAgkgVgAEIhGQgPANgBAWQgCAVASAVQASAWAcAAQAcAAASgVQASgUAAgVQAAgVgTgPQgUgOgcAAQgcAAgPANg");
	this.shape_2.setTransform(0,0.0215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-42.8,-15.6,85.69999999999999,31.299999999999997), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99201E").ss(1,1,1).p("AhSATQABgBABgBQAhgZAfgHIAJgCQAKgCALABIAIABQAgAFAdAX");
	this.shape.setTransform(1.55,6.2583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("Aixg3QgEgHgDgIIgPgkIGPgJIgDAQQgFAUgHAUQgXBCghArQgNAQgMAMQgnAiguADQgvADgsggQglgcghgyQgTgdgQgigAC5g7IlqAE");
	this.shape_1.setTransform(0,0.0127);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99201E").s().p("AhXAGIAGgEIACgCQAggZAggHIAJgCQAKgCAKABIAIABQAgAFAdAYIAFAEQgmAigvADIgHAAQgrAAgogeg");
	this.shape_2.setTransform(1.55,7.971);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiRgEQgTgegQgiIFpgEQgWBDgiAqQgMAQgNAMIgFgFQgdgYgfgEIgJgBQgKgBgLACIgIACQggAHggAaIgCABIgGAFQglgcghgxg");
	this.shape_3.setTransform(0.325,1.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai4APIgPgjIGPgJIgEAQQgEATgIAUIlpAEIgHgPg");
	this.shape_4.setTransform(0,-8.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-21,-12.5,42,25.1), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABzg3QAmAcBaBvInlATQDviRD2B+AiTglQAQgQATgNQBthOB2BZgAjyBnQA8hsAjgg");
	this.shape.setTransform(0.025,0.0034);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99201E").s().p("ADzAUInlATQDviRD2B+g");
	this.shape_1.setTransform(0.025,6.446);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgAEQBthNB3BYIkGASQAQgQASgNg");
	this.shape_2.setTransform(-1.65,-7.0716);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiTg9IEGgSQAmAdBaBvQj2h+jvCRQA8htAjggg");
	this.shape_3.setTransform(0.025,2.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-25.3,-11.3,50.7,22.700000000000003), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(0.1,1,1).p("AFLgTIjJgSIhKgRIgRAXQAQAUBLAIIDQAUIBeAegAlKgLIDJgSIBKgRIARAXQgOASg8AHQgIABgJABIjQAVIheAeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AlKgLIDJgSIBKgRIARAXQgNASg9AHIgRACIjQAVIheAegAFSARIjQgUQhMgIgPgUIARgXIBKARIDJASIBlBCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-44.2,-6.5,88.4,13), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6699FF").ss(3,1,1).p("AF7hxQADACAEAFQAJAJAFAHQARAZgWAIQgXAHAAgeQABgJADgMgAGqgOQADAAAGABQALACAHADQAYAKgQAUQgRAVgLgZQgDgJgCgLgAGVA+QACAFACAGQAEANABAKQAFAhgWgIQgWgIAMgaQADgIAHgJgAFegTQACAEAEAFQAGAKAEAKQALAegXgBQgXgBAGgcQACgJAFgJgAl6h5QgDACgEAFQgJAIgFAIQgRAZAWAHQAXAHAAgdQgBgJgDgMgAldgcQgCAEgEAGQgGALgEAJQgLAdAXAAQAXgBgGgcQgCgIgFgLgAmUA2QgCAFgCAGQgEANgBAKQgFAhAWgJQAWgHgMgbQgDgIgHgIgAmpgXQgDABgGABQgLACgHADQgYALAQATQARAVALgaQADgIACgLg");
	this.shape.setTransform(0,5.637);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AF7AFIgqAWIgggWQgmgVgjgLQgDgBgCgBQg7gRgrATQgsASgbA3Al6gDIAqAWIAggVQAagQAYgJQAOgGAOgEQBHgUAvAeQAhAVAWAs");
	this.shape_1.setTransform(0,-13.2161);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6699FF").s().p("AGNB5QgWgIALgaQAEgIAHgJIAHgIIAFALQADANACAKQAEAagNAAIgIgBgAmdBYQACgKADgNIAFgLIAHAIQAHAIAEAIQALAbgWAHIgIACQgNAAAEgagAFiAnQgYgBAHgcQACgJAFgJIAFgLIAGAJIAKAUQALAdgVAAIgBAAgAGxASQgDgJgCgLIgCgMIAJABQALACAHADQAYAKgQAUQgIAKgGAAQgIAAgGgOgAlsACIAJgUIAHgKIAFALQAFALACAIQAHAcgYABIAAAAQgWAAALgdgAnMAOQgQgTAYgLQAHgDALgCIAJgCIgCANQgCALgDAIQgGAOgIAAQgGAAgIgJgAF0hQQAAgJADgMIAEgMQADACAEAFQAJAJAFAHQARAZgXAIIgHABQgPAAAAgYgAmJhCQgXgHARgZQAFgIAJgIQAEgFADgCIAEAMQADAMAAAJQAAAXgPAAIgHgBg");
	this.shape_2.setTransform(0,5.637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-48.2,-19.3,96.5,38.7), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA2k9QABAOgCALQgCAKgTgBQgSgBgKgJQgJgKgGgPQgFgPAIgJQAIgJARACQASABAIAJQAJAIACAOgACdjjQABALgGAJQgHAIgUgDQgUgDgPgSQgQgRgFgNQgEgNAJgMQAKgNATADQATADAQAXQARAYACALgAjlhkQgJABgGAAQgSAAgVgFIArhbQAyhsBGgyQAagTAegKQAMgEANgDQAdgGAiANQAYAKAaATQBaBCB4C3QgSAQgmgQAhhhkQAEgCAEgBIABAAQAUgHAKgPQAGAKAKAHQAJAIAKADQANAEAPgBQAJgBAJAAIAAACIgJAxQgDAzAVAcQAVAbgVAmQgVAoAWAUQANAKABASQABAPgHAVQgOArAUAiQARAdgCAbQAAAFgBAFQgFAeAPgoQAOgoAHgQQAHgRgBgNQgCgNgFggQgFgRADgPQACgTAHgRQAMglgBgOQgCgOgNgQQgPgRAGgeQAEgeAJgLQAHgNgDgdQgEgfgGgSAAXhfQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAQAMAGAPADQAJABAMAAQARACANgGQAGgDAGgFQAGgFAJgMIAcAYACthnQgdAyAXA/QAGAQACASQAWAqgHAzQgGAygHARQghBLAbAjIAmAyIAVAbQgIgQgEgSQgGgVgBgXQgDgsANgXQALgZABgUQABgSAQgiQAQgjgTghQgTghALgjQAKgkgVhRAjlhkIgOAsQgLArAOAYQAGAMADAMQACAMgBAMQgDAWgKANQgLANgBANQgCANAOAfQAOAcAGAVQAEAVgBAgQgCAfAAA0QAAAFAAADQACAZANgZQAHgNAKgaQAWg/gBgnQAAgDAAgDQAAgKgDgJIgSgzIACgWQATgUAAgOQAAgQgSgqQgQgpAcgMQAOgFAAgTQgCgTgEgpQAQAMAcAAQAOAAAMgBIgSAzQAAABAAABQgJA8AMAOQALANgJAYQgFAKACANQABAMAJAPQARAagLAYQgMAXACALQABAKAKAXQAJAWAFAOQAGAOgIAkQgFAWAOASQAIAKANAJQAmAYgSgkQgCgDgBgEQgPgfAFgVQADgRgEgZQgCgMgCgNQgLgqAQgsQARgsgMgPQgPgSAFhSQgVgsAXhAAjlhkQAcgEAWgVQAEAHAIAH");
	this.shape.setTransform(0,0.0053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE98B").s().p("ABAgKIAJgGQAEARAIAQgAhTgGIABgKIAJAAQgJAVgCAAQgBAAACgLg");
	this.shape_1.setTransform(14.478,37.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B67F8").s().p("AA1BKQgUgEgPgRQgQgSgEgMQgEgNAIgMQAKgMATADQATACAQAXQARAYACALQABALgGAIQgFAGgMAAIgKAAgAgngHQgSAAgKgJQgKgKgFgPQgGgQAIgJQAIgJASACQASACAIAIQAJAIACAPQABAOgCAKQgCAJgPAAIgEAAg");
	this.shape_2.setTransform(7.152,-27.6041);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F90FC").s().p("Ag2F7QgNgJgIgKQgNgSAEgWQAIgkgGgOIgOgkQgKgXgBgKQgCgLAMgXQALgYgRgaQgJgPAAgMQgDgNAFgKQAJgYgLgNQgMgOAKg8IAAgCIARgzQgMABgOAAQgcAAgPgMIAFA8QAAATgOAFQgcAMARApQARAqAAAQQAAAOgSAUIgDAWIASAzQADAJAAAKIAAAGQABAngWA/QgKAagHANQgNAZgBgZIgBgIQAAg0ACgfQACgggFgVQgFgVgPgcQgOgfACgNQABgNALgNQAKgNADgWQABgMgCgMQgDgMgFgMQgPgYALgrIAOgsIgPABQgSAAgVgFIAshbQAxhsBGgyQAbgTAdgKQAMgEANgDQAdgGAhANQAYAKAbATQBaBCB4C3QgSAQgmgQIgcgYIgPARQgGAFgGADQgNAGgRgCQgMAAgJgBQgQgDgLgGIgBAAQgMgGgHgJQgKANgPAIQgMAEgPAEQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAIgDAHQAFASAFAfQADAdgIANQgIALgEAeQgGAeAPARQANAQACAOQABAOgNAlQgGARgCATQgDAPAFARIAGAtQACANgHARQgHAQgOAoIgJAAQABgbgQgdQgUgiANgrQAIgVgBgPQgCgSgNgKQgWgUAVgoQAWgmgWgbQgVgcAEgzIAJgxIAAgCIgTABQgOABgNgEQgKgDgIgIQgLgHgGgKQgKAPgTAHIgBAAIgJADIAJgDIABAAIAlgMQgWBAAUAsQgFBSAPASQAMAPgRAsQgQAsALAqIAEAZQAEAZgDARQgEAVAOAfIADAHQALAWgJAAQgGAAgQgKgAjlhhQAcgEAWgVQAEAHAJAHQgJgHgEgHQgWAVgcAEgABKkTQgJAMAEANQAEANAQARQAQASAUADQAUADAGgIQAHgJgBgLQgCgLgRgYQgRgXgSgDIgHAAQgOAAgIAKgAgIlTQgIAJAFAPQAGAPAJAKQAJAJATABQATABACgKQACgLgCgOQgBgOgJgIQgJgJgRgBIgGgBQgMAAgHAIgACrE9QgbgjAghLQAIgRAGgyQAGgzgVgqQgDgSgFgQQgXg/AdgyQAGgDAGgFIAPgRIAcAYQAUBRgJAkQgLAjATAhQATAhgQAjQgQAigBASQgBAUgMAZQgMAXADAsQABAXAGAVIgJAHgABfhqg");
	this.shape_3.setTransform(0,-0.2857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-40.1,58.7,80.30000000000001);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA2k9QABAOgCALQgCAKgTgBQgSgBgKgJQgJgKgGgPQgFgPAIgJQAIgJARACQASABAIAJQAJAIACAOgACdjjQABALgGAJQgHAIgUgDQgUgDgPgSQgQgRgFgNQgEgNAJgMQAKgNATADQATADAQAXQARAYACALgAjlhkQgJABgGAAQgSAAgVgFIArhbQAyhsBGgyQAagTAegKQAMgEANgDQAdgGAiANQAYAKAaATQBaBCB4C3QgSAQgmgQAAXhfQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAQAMAGAPADQAJABAMAAQARACANgGQAGgDAGgFQAGgFAJgMIAcAYAAXhfIAAACIgJAxQgDAzAVAcQAVAbgVAmQgVAoAWAUQANAKABASQABAPgHAVQgOArAUAiQARAdgCAbQAAAFgBAFQgFAeAPgoQAOgoAHgQQAHgRgBgNQgCgNgFggQgFgRADgPQACgTAHgRQAMglgBgOQgCgOgNgQQgPgRAGgeQAEgeAJgLQAHgNgDgdQgEgfgGgSAhhhkQAEgCAEgBIABAAQAUgHAKgPQAGAKAKAHQAJAIAKADQANAEAPgBQAJgBAJAAACthnQgdAyAXA/QAGAQACASQAWAqgHAzQgGAygHARQghBLAbAjIAmAyIAVAbQgIgQgEgSQgGgVgBgXQgDgsANgXQALgZABgUQABgSAQgiQAQgjgTghQgTghALgjQAKgkgVhRAjlhkIgOAsQgLArAOAYQAGAMADAMQACAMgBAMQgDAWgKANQgLANgBANQgCANAOAfQAOAcAGAVQAEAVgBAgQgCAfAAA0QAAAFAAADQACAZANgZQAHgNAKgaQAWg/gBgnQAAgDAAgDQAAgKgDgJIgSgzIACgWQATgUAAgOQAAgQgSgqQgQgpAcgMQAOgFAAgTQgCgTgEgpQAQAMAcAAQAOAAAMgBIgSAzQAAABAAABQgJA8AMAOQALANgJAYQgFAKACANQABAMAJAPQARAagLAYQgMAXACALQABAKAKAXQAJAWAFAOQAGAOgIAkQgFAWAOASQAIAKANAJQAmAYgSgkQgCgDgBgEQgPgfAFgVQADgRgEgZQgCgMgCgNQgLgqAQgsQARgsgMgPQgPgSAFhSQgVgsAXhAAjlhkQAcgEAWgVQAEAHAIAH");
	this.shape.setTransform(0,0.0053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE98B").s().p("ABAgKIAJgGQAEARAIAQgAhTgGIABgKIAJAAQgJAVgCAAQgBAAACgLg");
	this.shape_1.setTransform(14.478,37.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8FF8").s().p("AA1BKQgUgEgPgRQgQgSgEgMQgEgNAIgMQAKgMATADQATACAQAXQARAYACALQABALgGAIQgFAGgMAAIgKAAgAgngHQgSAAgKgJQgKgKgFgPQgGgQAIgJQAIgJASACQASACAIAIQAJAIACAPQABAOgCAKQgCAJgPAAIgEAAg");
	this.shape_2.setTransform(7.152,-27.6041);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCFF").s().p("Ag2F7QgNgJgIgKQgNgSAEgWQAIgkgGgOIgOgkQgKgXgBgKQgCgLAMgXQALgYgRgaQgJgPAAgMQgDgNAFgKQAJgYgLgNQgMgOAKg8IAAgCIARgzQgMABgOAAQgcAAgPgMIAFA8QAAATgOAFQgcAMARApQARAqAAAQQAAAOgSAUIgDAWIASAzQADAJAAAKIAAAGQABAngWA/QgKAagHANQgNAZgBgZIgBgIQAAg0ACgfQACgggFgVQgFgVgPgcQgOgfACgNQABgNALgNQAKgNADgWQABgMgCgMQgDgMgFgMQgPgYALgrIAOgsIgPABQgSAAgVgFIAshbQAxhsBGgyQAbgTAdgKQAMgEANgDQAdgGAhANQAYAKAbATQBaBCB4C3QgSAQgmgQIgcgYIgPARQgGAFgGADQAGgDAGgFIAPgRIAcAYQAUBRgJAkQgLAjATAhQATAhgQAjQgQAigBASQgBAUgMAZQgMAXADAsQABAXAGAVIgJAHIgmgyQgbgjAghLQAIgRAGgyQAGgzgVgqQgDgSgFgQQgXg/AdgyQgNAGgRgCQgMAAgJgBQgQgDgLgGIgBAAQgMgGgHgJQgKANgPAIQgMAEgPAEQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAIgDAHQAFASAFAfQADAdgIANQgIALgEAeQgGAeAPARQANAQACAOQABAOgNAlQgGARgCATQgDAPAFARIAGAtQACANgHARQgHAQgOAoIgJAAQABgbgQgdQgUgiANgrQAIgVgBgPQgCgSgNgKQgWgUAVgoQAWgmgWgbQgVgcAEgzIAJgxIAAgCIgTABQgOABgNgEQgKgDgIgIQgLgHgGgKQgKAPgTAHIgBAAIgJADIAJgDIABAAIAlgMQgWBAAUAsQgFBSAPASQAMAPgRAsQgQAsALAqIAEAZQAEAZgDARQgEAVAOAfIADAHQALAWgJAAQgGAAgQgKgAjlhhQAcgEAWgVQAEAHAJAHQgJgHgEgHQgWAVgcAEgABKkTQgJAMAEANQAEANAQARQAQASAUADQAUADAGgIQAHgJgBgLQgCgLgRgYQgRgXgSgDIgHAAQgOAAgIAKgAgIlTQgIAJAFAPQAGAPAJAKQAJAJATABQATABACgKQACgLgCgOQgBgOgJgIQgJgJgRgBIgGgBQgMAAgHAIg");
	this.shape_3.setTransform(0,-0.2857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-40.1,58.7,80.30000000000001);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA2k9QABAOgCALQgCAKgTgBQgSgBgKgJQgJgKgGgPQgFgPAIgJQAIgJARACQASABAIAJQAJAIACAOgACdjjQABALgGAJQgHAIgUgDQgUgDgPgSQgQgRgFgNQgEgNAJgMQAKgNATADQATADAQAXQARAYACALgAjlhkQgJABgGAAQgSAAgVgFIArhbQAyhsBGgyQAagTAegKQAMgEANgDQAdgGAiANQAYAKAaATQBaBCB4C3QgSAQgmgQAAXhfQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAQAMAGAPADQAJABAMAAQARACANgGQAGgDAGgFQAGgFAJgMIAcAYAAXhfIAAACIgJAxQgDAzAVAcQAVAbgVAmQgVAoAWAUQANAKABASQABAPgHAVQgOArAUAiQARAdgCAbQAAAFgBAFQgFAeAPgoQAOgoAHgQQAHgRgBgNQgCgNgFggQgFgRADgPQACgTAHgRQAMglgBgOQgCgOgNgQQgPgRAGgeQAEgeAJgLQAHgNgDgdQgEgfgGgSAhhhkQAEgCAEgBIABAAQAUgHAKgPQAGAKAKAHQAJAIAKADQANAEAPgBQAJgBAJAAACthnQgdAyAXA/QAGAQACASQAWAqgHAzQgGAygHARQghBLAbAjIA7BNQgIgQgEgSQgGgVgBgXQgDgsANgXQALgZABgUQABgSAQgiQAQgjgTghQgTghALgjQAKgkgVhRAjlhkIgOAsQgLArAOAYQAGAMADAMQACAMgBAMQgDAWgKANQgLANgBANQgCANAOAfQAOAcAGAVQAEAVgBAgQgCAfAAA0QAAAFAAADQACAZANgZQAHgNAKgaQAWg/gBgnQAAgDAAgDQAAgKgDgJIgSgzIACgWQATgUAAgOQAAgQgSgqQgQgpAcgMQAOgFAAgTQgCgTgEgpQAQAMAcAAQAOAAAMgBIgSAzQAAABAAABQgJA8AMAOQALANgJAYQgFAKACANQABAMAJAPQARAagLAYQgMAXACALQABAKAKAXQAJAWAFAOQAGAOgIAkQgFAWAOASQAIAKANAJQAmAYgSgkQgCgDgBgEQgPgfAFgVQADgRgEgZQgCgMgCgNQgLgqAQgsQARgsgMgPQgPgSAFhSQgVgsAXhAAjlhkQAcgEAWgVQAEAHAIAH");
	this.shape.setTransform(0,0.0053);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC181").s().p("AA1BKQgUgEgPgRQgQgSgEgMQgEgNAIgMQAKgMATADQATACAQAXQARAYACALQABALgGAIQgFAGgMAAIgKAAgAgngHQgSAAgKgJQgKgKgFgPQgGgQAIgJQAIgJASACQASACAIAIQAJAIACAPQABAOgCAKQgCAJgPAAIgEAAg");
	this.shape_1.setTransform(7.152,-27.6041);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE98B").s().p("ACrE6QgbgjAghLQAIgRAGgyQAGgzgVgqQgDgSgFgQQgXg/AdgyQgNAGgRgCQgMAAgJgBQgQgDgLgGIgBAAQgMgGgHgJQgKANgPAIQgMAEgPAEIgTABQgOABgNgEQgKgDgIgIQgLgHgGgKQgKAPgTAHIgBAAIgJADIAJgDIABAAIAlgMQgWBAAUAsQgFBSAPASQAMAPgRAsQgQAsALAqIAEAZQAEAZgDARQgEAVAOAfIADAHQASAkgmgYQgNgJgIgKQgNgSAEgWQAIgkgGgOIgOgkQgKgXgBgKQgCgLAMgXQALgYgRgaQgJgPAAgMQgDgNAFgKQAJgYgLgNQgMgOAKg8IAAgCIARgzQgMABgOAAQgcAAgPgMIAFA8QAAATgOAFQgcAMARApQARAqAAAQQAAAOgSAUIgDAWIASAzQADAJAAAKIAAAGQABAngWA/QgKAagHANQgNAZgBgZIgBgIQAAg0ACgfQACgggFgVQgFgVgPgcQgOgfACgNQABgNALgNQAKgNADgWQABgMgCgMQgDgMgFgMQgPgYALgrIAOgsQAcgEAWgVQAEAHAJAHQgJgHgEgHQgWAVgcAEIgPABQgSAAgVgFIAshbQAxhsBGgyQAbgTAdgKQAMgEANgDQAdgGAhANQAYAKAbATQBaBCB4C3QgSAQgmgQIgcgYIgPARQgGAFgGADQAGgDAGgFIAPgRIAcAYQAUBRgJAkQgLAjATAhQATAhgQAjQgQAigBASQgBAUgMAZQgMAXADAsQABAXAGAVQAEASAIAQgABKkWQgJAMAEANQAEANAQARQAQASAUADQAUADAGgIQAHgJgBgLQgCgLgRgYQgRgXgSgDIgHAAQgOAAgIAKgAgIlWQgIAJAFAPQAGAPAJAKQAJAJATABQATABACgKQACgLgCgOQgBgOgJgIQgJgJgRgBIgGAAQgMAAgHAHgAA9FvIABgKQABgbgQgdQgUgiANgrQAIgVgBgPQgCgSgNgKQgWgUAVgoQAWgmgWgbQgVgcAEgzIAJgxIAAgCQAPgEAMgEQAPgIAKgNQAHAJAMAGIABAAIgDAHQAFASAFAfQADAdgIANQgIALgEAeQgGAeAPARQANAQACAOQABAOgNAlQgGARgCATQgDAPAFARIAGAtQACANgHARQgHAQgOAoQgJAXgCAAQgBAAACgNgABfhtg");
	this.shape_2.setTransform(0,0.0053);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-40.1,58.7,80.30000000000001);


(lib.regglasses = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABShRQAJA2AYAsQBICQCugEQCugEAfibQAKgwgGg6IAAgxInoAAIAABMQhahShJBSQA8g1BnA1gAhRhRQgKA2gXAsQhICQiugEQiugEgfibQgKgwAGg6IAAgxIHoAAg");
	this.shape.setTransform(57.2,15.7554);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgApQgGAAgDgGIgEgJQgGgQgRgOQgJgGgDgFQgCgFABgJQAAgFADgEQADgDAFABQAFABABADIACAJQABADAHAGQARANALAVQAFAJgBAGQgBAEgCADQgDADgDAAIgBAAgAgZAlQgGgBgEgGQgDgFgCgGQgCgFABgEQABgFAGAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAHAAAEAIQAEAGABAEQACAHgCADQgCAFgFAAIgCAAg");
	this.shape_1.setTransform(105.9856,7.8746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABzARQgYgsgJg2IAAhMIHnAAIAAAxQAHA6gKAwQgfCbivAEIgJABQimAAhGiNgAHZh1QgDAEgBAFQAAAJACAFQADAFAJAGQASAPAFAQIAFAJQADAGAGAAQADABAEgEQACgDABgEQABgGgGgJQgKgWgRgNQgHgGgBgDIgDgJQgCgDgEgBIgBAAQgEAAgDACgAHFhJQgGAAgBAFQgBAEACAFQACAGADAFQAEAGAFABQAIABACgGQABgDgCgHQgBgEgDgGQgFgIgGAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAgAloCdQitgEggibQgKgwAHg6IAAgxIHnAAIAABMQgJA2gYAsQhGCNimAAIgKgBg");
	this.shape_2.setTransform(57.2,15.7554);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.regglasses, new cjs.Rectangle(-1.5,-1.5,117.4,34.5), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.regglasses();
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,57.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-58.6,-17.2,117.30000000000001,34.5), null);


// stage content:
(lib.MPHFinalKMartinez = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.Face1_btn.addEventListener("click", ClickFace1.bind(this));
		
		function ClickFace1() {
			this.eyes1.x = 323;
			this.eyes1.y = 285;
			this.brows1.x = 322;
			this.brows1.y = 255;
			this.mouth1.x = 324;
			this.mouth1.y = 319;
		    this.shell1.x = 498;
			this.shell1.y = 266;
			this.hat1.x = 322;
			this.hat1.y = 202;
			
		}
		
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyes2.x = 322;
			this.eyes2.y = 280;
			this.brows2.x = 323; 
			this.brows2.y = 251;
			this.shell2.x = 498;
			this.shell2.y = 265;
			this.mustache2.x = 322;
			this.mustache2.y = 312;
			this.mouth2.x = 324;
			this.mouth2.y = 330;
			
		}
		
		this.Reset_btn.addEventListener("click", ClickReset.bind(this));
		
		function ClickReset() {
			this.eyes1.x = 839;
			this.eyes1.y = 234;
			this.brows1.x = 110;
			this.brows1.y = 112;
			this.mouth1.x = 115;
			this.mouth1.y = 265;
		    this.shell1.x = 784;
			this.shell1.y = 520;
			this.hat1.x = 312;
			this.hat1.y = 534;
			this.eyes2.x = 837;
			this.eyes2.y = 163;
			this.brows2.x = 116; 
			this.brows2.y = 161;
			this.shell2.x = 743;
			this.shell2.y = 520;
			this.mustache2.x = 153;
			this.mustache2.y = 527;
			this.mouth2.x = 117;
			this.mouth2.y = 334;
			this.mouth3.x = 112;
			this.mouth3.y = 213;
			this.glasses1.x = 152;
			this.glasses1.y = 462; 
			this.glasses2.x = 314;
			this.glasses2.y = 461;
			this.shell3.x = 694; 
			this.shell3.y = 520;
			this.shell4.x = 653; 
			this.shell4.y = 520; 
			this.eyes3.x = 838; 
			this.eyes3.y = 288;
			
			
			
		}
		
		
		this.mouth1.on("pressmove", dragMe);
		this.eyes1.on("pressmove", dragMe);
		this.brows1.on("pressmove", dragMe);
		this.shell1.on("pressmove", dragMe);
		this.hat1.on("pressmove", dragMe);
		this.eyes2.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.brows2.on("pressmove", dragMe);
		this.mustache2.on("pressmove", dragMe);
		this.shell2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.glasses1.on("pressmove", dragMe);
		this.glasses2.on("pressmove", dragMe);
		this.shell3.on("pressmove", dragMe);
		this.shell4.on("pressmove", dragMe);
		this.eyes3.on("pressmove", dragMe);
		
		
		
		
		
		
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAbIgEgCIgCgCIgBgEIAAgeIgHAAIAAgCIADgBIADgBIABgCIABgDIAAgGIAGgBIAAAMIAPAAIgCAEIgNAAIAAAdIAAADIADABIACABIADAAIABAAIACAAIACgBIABAAIAAAAIAAACIgCABIgCABIgDABIgEABIgDgBg");
	this.shape.setTransform(613.225,116.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAVIgHgEQgCgDgBgEQgCgEAAgGIABgHIAEgIQACgDAFgCQADgCAEAAQAEAAADACIAFAEIADAFIABAGIAAABIAAABIAAABIAAABIgcAAQAAAIAFAGQADAFAHAAIAEgBIAEgBIACgCIACgCIABAAIAAAEIgDACIgEADIgFABIgEABQgEAAgDgCgAgCgSIgDADIgDAFIgBAGIAUAAIgBgGIgCgEIgCgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEABg");
	this.shape_1.setTransform(609.65,117.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAXIgEgBIgEgBIgCgBIAAgMIABAAIACAGIABABIADACIACABIABAAIADABIACAAIADAAIACgBIADgDIABgDIgBgDIgCgCIgDgCIgCgBIgEgBIgEgBIgDgCIgDgBIgCgEIAAgEIABgFIADgEIAGgDIAFgBIADABIADAAIADABIADAAIAAAMIgCAAIgBgFIgCgCIgCgBIgDgBIgDgBIgDAAIgCABIgCADIAAADIAAADIACACIABABIACABIACABIACABIABAAIACABIAEABIADABIADAEIAAAEIgBAGIgDAFIgGACIgGABIgDAAg");
	this.shape_2.setTransform(605.8,117.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAVIgHgEQgDgDAAgEQgCgEAAgGIABgHIAEgIQADgDAEgCQADgCAEAAQAEAAADACIAFAEIADAFIABAGIAAABIAAABIAAABIAAABIgbAAQAAAIAEAGQADAFAGAAIAFgBIADgBIADgCIADgCIAAAAIAAAEIgDACIgEADIgFABIgEABQgEAAgDgCgAgCgSIgDADIgDAFIgBAGIAUAAIgBgGIgBgEIgEgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEABg");
	this.shape_3.setTransform(601.85,117.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAfIgDgBIgCgBIgCgBIgCgDIgPgWIgHgBIAAAWIABACIABABIAHACIAAACIgZAAIAAgCIAGgCIABgBIABgCIAAgwIgBgBIgBgCIgGgBIAAgCIAXAAIAHABIAGABIAEADIACADIACAEIAAAEQAAADgBADIgEAFIgEADIgFACIARAVIABACIABABIABABIACABIAFABIAAACgAgMAAIABAAIACAAIACAAIACAAIAFgBQADgBABgCIADgEIABgFIgBgGIgDgEIgEgCIgGgCIgGAAg");
	this.shape_4.setTransform(597.225,116.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAXIAAgEIAHgGIAHgFIAEgEIAEgEIACgDIABgFIAAgEIgBgDIgDgCIgDgBIgEABIgFACIgDADIgDADIgCAAIgBgHIADgCIAEgCIAFgCIAFAAIAGAAIAGADIADAEQACACAAAEIgBAGIgDADIgFAEIgFAEIgGAEIgHAFIAFAAIATAAIACgBIABgCIABgFIACAAIAAAOg");
	this.shape_5.setTransform(495.275,117.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAVIgGgEQgEgDgBgEQgBgEAAgGIABgHIAEgIQADgDAEgCQADgCAEAAQAEAAADACIAFAEIADAFIABAGIAAABIAAABIAAABIAAABIgcAAQAAAIAFAGQADAFAHAAIAEgBIAEgBIACgCIACgCIABAAIAAAEIgDACIgEADIgFABIgFABQgDAAgDgCgAgCgSIgDADIgDAFIgBAGIATAAIAAgGIgCgEIgCgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDABg");
	this.shape_6.setTransform(488.5,117.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAVIgHgFQgCgCgBgEIgBgIIAAgGIACgGIADgEIAFgFIAFgCIAGgBIAFAAIADABIACABIABABIgBAHIgBAAIgDgBIgDgCIgDgCIgEgBIgCAAIgBACIgCAAIAAACIgCABIgBADIgCAFIAAAEIABAHQABAEACACIAFAEQACABADAAIAEAAIADgCIADgCIACgBIAAAAIAAADIgDADIgDACIgFACIgFAAQgDAAgDgBg");
	this.shape_7.setTransform(484.65,117.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJAWIgCgBIgBgCIgBgEIgEAEIgCACIgEABIgDABIgFgBIgEgDIgBgDIgBgFIABgFIACgDIAEgDIAEgBIAFgBIADAAIABAAIABAAIACAAIABAAIABgIIgBgEIgCgCIgBgBIgCAAIgFAAIgEACIgCACIgEACIgBAAIgBgHIADgBIAEgBIADgBIAFgBIAEABIAGADIADAEIABAHIAAAWIAAABIACABIABAAIABABIABAAIABgBIABAAIABAAIAAAAIAAACIgBABIgCABIgCABIgDABIgDgBgAgBAAIgGACQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIABAEIABADIACABIADABIADAAIABgBIADgCIACgCIAAgNIgGAAg");
	this.shape_8.setTransform(480.65,117.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAfIAAgCIAFgCIACgBIABgCIAAgwIgBgBIgCgCIgFgBIAAgCIAsAAIAAAPIgDAAIgDgKIgBgBIgBgBIgUAAIAAAZIANAAIABAAIAAgBIAEgIIABAAIAAAVIgBAAIgEgHIAAgBIgBgBIgNAAIAAAXIAAACIACABIAFACIAAACg");
	this.shape_9.setTransform(476,116.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAXIAAgCIAHgCIACAAIAAgCIAAgaIAAgEIAAgCIgLADIAAgCIAQgIIACAAIAAAEIAAADIAAAEIAAAEIAAAYIAAACIACAAIAHACIAAACg");
	this.shape_10.setTransform(372.475,117.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAVIgHgEQgCgDgBgEQgCgEAAgGIABgHIAEgIQACgDAFgCQADgCAEAAQAEAAADACIAFAEIADAFIABAGIAAABIAAABIAAABIAAABIgcAAQAAAIAFAGQADAFAGAAIAFgBIAEgBIACgCIACgCIABAAIAAAEIgDACIgEADIgFABIgEABQgEAAgDgCgAgCgSIgDADIgDAFIgBAGIAUAAIgBgGIgCgEIgDgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEABg");
	this.shape_11.setTransform(366.3,117.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAVIgGgFQgCgCgBgEIgBgIIAAgGIACgGIADgEIAFgFIAGgCIAFgBIAFAAIADABIACABIACABIgCAHIgBAAIgDgBIgDgCIgEgCIgDgBIgBAAIgCACIgCAAIgBACIgBABIgBADIgBAFIgBAEIABAHQABAEACACIAFAEQABABAEAAIAEAAIADgCIADgCIACgBIABAAIAAADIgEADIgDACIgFACIgFAAQgEAAgDgBg");
	this.shape_12.setTransform(362.45,117.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAJAWIgCgBIgBgCIgBgEIgEAEIgCACIgEABIgDABIgFgBIgEgDIgCgDIgBgFIABgFIADgDIAEgDIAEgBIAFgBIADAAIABAAIACAAIABAAIABAAIABgIIgBgEIgBgCIgCgBIgCAAIgEAAIgFACIgCACIgDACIgCAAIgBgHIADgBIADgBIAEgBIAFgBIAFABIAEADIAFAEIABAHIAAAWIAAABIABABIABAAIABABIABAAIABgBIABAAIABAAIABAAIAAACIgCABIgCABIgCABIgDABIgDgBgAgBAAIgGACQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIAAAEIACADIACABIADABIADAAIABgBIADgCIACgCIAAgNIgGAAg");
	this.shape_13.setTransform(358.45,117.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWAfIAAgCIAGgCIACgBIABgCIAAgwIgBgBIgCgCIgGgBIAAgCIAsAAIAAAPIgCAAIgDgKIgBgBIgBgBIgUAAIAAAZIANAAIABAAIABgBIACgIIACAAIAAAVIgCAAIgCgHIgBgBIgBgBIgNAAIAAAXIAAACIABABIAGACIAAACg");
	this.shape_14.setTransform(353.8,116.55);

	this.Reset_btn = new lib.Symbol16();
	this.Reset_btn.name = "Reset_btn";
	this.Reset_btn.setTransform(610.7,136.25);
	new cjs.ButtonHelper(this.Reset_btn, 0, 1, 1);

	this.Face2_btn = new lib.Symbol15();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(492.05,136.25);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 1);

	this.Face1_btn = new lib.Symbol14();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(369.2,136.25);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.Reset_btn},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Body Parts
	this.shell4 = new lib.Symbol34();
	this.shell4.name = "shell4";
	this.shell4.setTransform(653.3,520.2);

	this.shell3 = new lib.Symbol33();
	this.shell3.name = "shell3";
	this.shell3.setTransform(695.6,520.2);

	this.glasses2 = new lib.Symbol32();
	this.glasses2.name = "glasses2";
	this.glasses2.setTransform(314.1,461.3);

	this.glasses1 = new lib.Symbol31();
	this.glasses1.name = "glasses1";
	this.glasses1.setTransform(152.25,461.8);

	this.hat1 = new lib.Symbol30();
	this.hat1.name = "hat1";
	this.hat1.setTransform(312.35,534);

	this.mustache2 = new lib.Symbol29();
	this.mustache2.name = "mustache2";
	this.mustache2.setTransform(152.9,527.15);

	this.mouth2 = new lib.Symbol28();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(117.2,334.25);

	this.shell2 = new lib.Symbol25();
	this.shell2.name = "shell2";
	this.shell2.setTransform(743.2,520.2);

	this.brows2 = new lib.Symbol24();
	this.brows2.name = "brows2";
	this.brows2.setTransform(116.1,161.25);

	this.shell1 = new lib.Symbol23();
	this.shell1.name = "shell1";
	this.shell1.setTransform(784,520.2);

	this.eyes2 = new lib.Symbol22();
	this.eyes2.name = "eyes2";
	this.eyes2.setTransform(836.9,163.05);

	this.eyes3 = new lib.Symbol21();
	this.eyes3.name = "eyes3";
	this.eyes3.setTransform(837.6,288.4);

	this.mouth3 = new lib.Symbol20();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(111.95,212.65,1.2575,1);

	this.mouth1 = new lib.Symbol19();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(115.05,265.55,1.1581,1.5556,0,0,0,0.1,0.1);

	this.brows1 = new lib.Symbol18();
	this.brows1.name = "brows1";
	this.brows1.setTransform(110.7,111.65);

	this.eyes1 = new lib.Symbol17();
	this.eyes1.name = "eyes1";
	this.eyes1.setTransform(839.45,236.8,1.0685,1,0,0,0,0.1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes1},{t:this.brows1},{t:this.mouth1},{t:this.mouth3},{t:this.eyes3},{t:this.eyes2},{t:this.shell1},{t:this.brows2},{t:this.shell2},{t:this.mouth2},{t:this.mustache2},{t:this.hat1},{t:this.glasses1},{t:this.glasses2},{t:this.shell3},{t:this.shell4}]}).wait(1));

	// Character
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AKdGRQArBCGtBQQGrBQKrlsQA6ggAOg6QAOg5ipAnQoKAEkfjPQAAACgBACQgCAUgHAXQjdEQnICBQgBAAgCABQhWANhWAKQgNACgNABQj7AdiZgMQhugJhogUQirgjjrhtAAYwJQA7gNDLBBQDXBGDCCrQBgBVBaBtQABABABAAQAyA+AtA6QBABUAyBOQAFAAAGAAQDfAEAcCAQAJApgEAqAqBoUIgkk0QCvheClgvQBmgdEDgXAj5iBIh1lKIkThJIklDmQBjDrCEDbIAAABIAAgBAqIGEQjFDjlNB7QgBAAgBABQklBrlUiJQgvgSgvgYQktiThSjvQgahMgFhVQgLjUAqicQAIgeAJgbQAXhDAjg3QB8jDCVhFQCWhGDZATQAVABATACQC3ARA2AeQA1AdBBAnQAIAFAIAFQAmAXAgAeQAgAeAaAmQASAaBSCiQABABABACIAAAAAq/CYIAAAAQBDBHANAIQBJAcgDAMAqIGEQAUg4AAgZQAAgaAFgyIAyAdIAQAIQAEADAAAAIAAABQACABADABQAlAUgqgXAo9EEIARAKQACABABABAHxGoQgoBHDHCAQCuBvDWA/QA8ARAFAZQABAFgEAFQgLAOgnARQpPD7pPiaQjGg0h+hMQkfisBZkhAxCo1QDVioDIhrAnkAfQhjg9g1gfQiKhRigigAj5iBIjrCgANxoiQABAAABAAQDBgHAwh9QAahDAgAnQAdAfgBA2QgDCOhoDGAREkHQABACACADQBDBnAgA0QAHALAFAIQitDalWBpQiXAvkhgFQgwgBh9gOQk6gaj4jRAPFj7IANiuAPFj7IDlCUAAYrFIF7C3AGTkaIkfDjICHFQAGTkaIAAj0IEkjWAKzh7IkgifALxGCQgWAEgVAEIgTADQgJABgKACAKzh7IESiAAKzDvIAAlqAlunLIGGj6IAAlEAB0g3IlthK");
	this.shape_15.setTransform(484.5883,295.2696);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#88D15A").s().p("AiRFzQhvgJhngUQisgijqhtQADgNhKgbQgMgIhEhIIAAABQiEjbhjjrQChCfCKBRQA1AgBjA9QD3DRE7AaQB+ANAuABQEhAFCYguQFWhpCsjaIgLgTQghg1hChmIAHgFQDgAEAcB/QAJAqgFApIAAAEQgDAVgGAXQjeEPnHCCIgDAAQhWANhWALIgbADQivAUh+AAQg4AAgugEg");
	this.shape_16.setTransform(505.825,302.5133);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7AC20E").s().p("AJ8CxIERiAIDmCUIAMATQitDblWBpgAkxCrIh0lJIGHj6IF6C3IAADzIkfDjgAvegBIgBgDQhSiigSgaQgagmghgeIAFgEQDUioDJhrIAkE0IkmDmg");
	this.shape_17.setTransform(490.1,265.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9AC20E").s().p("AB5KSIiGlRIEejiIEhCfIAAFrQiJAqj5AAIg3gBgAr9E7QiKhRihifIEmjmIETBKIB0FIIjqChQhjg9g1gggANDB9IANitQBABUAyBNIAEAGQBCBmAhA1gAhplMIAAlDQA8gNDJBBQDYBFDCCsIklDWg");
	this.shape_18.setTransform(497.525,257.5409);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C8B00").s().p("AhHKDQk7gaj4jSIDrihIFuBKICGFRQgwgBh8gNgAD9BeIAAjzIEkjWQBgBUBaBuIACABQAyA9AtA6IgNCtIkSCBgAsXicIgkk0QCvhdClgvQBmgdEEgXIAAFDImHD7g");
	this.shape_19.setTransform(499.575,257.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6CD12D").s().p("Ah+NBQjGg1h+hLQkfisBZkhQAUg5AAgZQAAgZAFgyIAyAcIARALIADABIAFADQAlATgqgWQDrBtCrAiQBoAUBuAJQCZAND7gdIAagDQgoBGDHCAQCuBwDWA+QA8ASAFAYQABAFgEAGQgLANgnASQlvCbluAAQjhAAjgg6gA8VI1QgvgTgvgXQktiUhSjvQgahLgFhUQgLjWAqicQAIgdAJgcQAXhDAjg2QB8jDCVhGQCWhFDZASIAoAEQC3ARA2AeQA1AdBBAnIAQAKQAmAWAgAfQAgAeAaAmQASAZBSCiIACADIAAABQBjDrCEDbIAAAAIAAgBQBDBIANAIQgFAyAAAZQAAAZgUA5QjFDilNB7IgCABQiBAviKAAQiwAAi+hMgAR1GTQmthQgrhDIADAAQHIiCDdkPQAHgXACgVIABgEQEfDPIKgDQCpgngOA5QgOA5g6AhQowEqmFAAQhVAAhMgOgALGD5IgTAEIgTADIATgDIATgEIArgHIgrAHgAREmYQgyhNhAhVQgtg6gyg9IAAgBQDBgHAwh+QAahCAgAmQAdAfgBA3QgDCNhoDHIAAASIgLgBg");
	this.shape_20.setTransform(484.5883,309.7084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// layout/background 
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#99EE85").ss(5,1,1).p("A1Wq7MAqtAAAQEhAADNDNQDNDNAAEhIAAAAQAAEijNDNQjNDNkhAAMgqtAAAQkhAAjNjNQjNjNAAkiIAAAAQAAkhDNjNQDNjNEhAAg");
	this.shape_21.setTransform(236.275,517.4357,1,1.3727);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EEDD9").s().p("A1WK8QkhAAjNjNQjNjNAAkiIAAAAQAAkhDNjNQDNjNEhAAMAqtAAAQEhAADNDNQDNDNAAEhIAAAAQAAEijNDNQjNDNkhAAg");
	this.shape_22.setTransform(236.275,517.4357,1,1.3727);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#99EE85").ss(5,1,1).p("Ahj3RIBjAAQFLAADqDqQDrDrAAFLIAAVkQAAFLjrDqQjqDqlLAAIAAAAQlKAAjrjqQjqjqAAlLIAA3IQAAkiDNjNQDNjNEiAAg");
	this.shape_23.setTransform(121.2777,239.5947,1.1455,1.099);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EEDD9").s().p("AAAXSQlKAAjrjqQjqjrAAlKIAA3JQAAkhDNjNQDNjNEiAAIBjAAQFLAADqDqQDrDqAAFLIAAVlQAAFKjrDrQjqDqlLAAg");
	this.shape_24.setTransform(121.2777,239.5947,1.1455,1.099);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#99EE85").ss(5,1,1).p("Ahj3RIBjAAQFLAADqDqQDrDrAAFLIAAVkQAAFLjrDqQjqDqlLAAIAAAAQlKAAjrjqQjqjqAAlLIAA3IQAAkiDNjNQDNjNEiAAg");
	this.shape_25.setTransform(840.6777,239.5947,1.1455,1.099);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EEDD9").s().p("AAAXSQlKAAjrjqQjqjrAAlKIAA3JQAAkhDNjNQDNjNEiAAIBjAAQFLAADqDqQDrDqAAFLIAAVlQAAFKjrDrQjqDqlLAAg");
	this.shape_26.setTransform(840.6777,239.5947,1.1455,1.099);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#99EE85").ss(5,1,1).p("A1Wq7MAqtAAAQEhAADNDNQDNDNAAEhIAAAAQAAEijNDNQjNDNkhAAMgqtAAAQkhAAjNjNQjNjNAAkiIAAAAQAAkhDNjNQDNjNEhAAg");
	this.shape_27.setTransform(725.625,517.4357,1,1.3727);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8EEDD9").s().p("A1WK8QkhAAjNjNQjNjNAAkiIAAAAQAAkhDNjNQDNjNEhAAMAqtAAAQEhAADNDNQDNDNAAEhIAAAAQAAEijNDNQjNDNkhAAg");
	this.shape_28.setTransform(725.625,517.4357,1,1.3727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// text
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnAjIAAgGIAQgJIAOgIIAKgHIAIgFQADgCABgDQACgEABgEIgCgGIgCgEQgCgCgDgCIgHgBQgGAAgEACIgJAEIgHAEIgHAEIgCAAIgDgLIAFgDIAJgCIAKgDIALgBQAHAAAHACQAGAAAFADQAFACADAEQACAEAAAFQAAAEgCAFQgCADgDADIgJAFIgMAGIgMAGIgQAHIALAAIAnAAIAFgBIACgDIADgHIAEAAIAAAVg");
	this.shape_29.setTransform(646.5,80.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAjIAAgGIARgJIANgIIAKgHIAIgFQADgCACgDQABgEAAgEIgBgGIgCgEQgCgCgEgCIgHgBQgEAAgFACIgJAEIgIAEIgGAEIgCAAIgDgLIAGgDIAIgCIAKgDIALgBQAHAAAHACQAHAAAEADQAFACADAEQACAEAAAFQAAAEgBAFQgDADgEADIgJAFIgLAGIgNAGIgOAHIAKAAIAnAAIAFgBIACgDIACgHIAFAAIAAAVg");
	this.shape_30.setTransform(636.65,80.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAhQgIgDgFgFQgGgEgEgHQgCgGAAgIQAAgGACgHQADgGAGgFQAGgFAIgCQAIgDAKAAQAKAAAJADQAHADAGAFQAFAEADAHQACAGAAAGQAAAHgCAHQgDAGgGAFQgGAFgIACQgIADgKAAQgJAAgIgCgAgJgdIgGAEIgFAFIgDAGIgBAHIgBAHIABAGIACAHIADAHIAFAFIAHAEQAEACAEAAQAFAAAEgCIAGgDQADgCACgDIADgHIABgGIABgHIgBgGIgCgIIgDgHIgGgFIgGgEIgIgBIgJABg");
	this.shape_31.setTransform(626.4,80.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnAjIAAgGIAQgJIAOgIIAKgHIAIgFQADgCABgDQACgEABgEIgCgGIgCgEQgCgCgDgCIgHgBQgGAAgEACIgJAEIgHAEIgHAEIgCAAIgDgLIAFgDIAJgCIAKgDIALgBQAHAAAHACQAGAAAFADQAFACADAEQACAEAAAFQAAAEgCAFQgCADgDADIgJAFIgMAGIgMAGIgQAHIALAAIAnAAIAFgBIACgDIADgHIAEAAIAAAVg");
	this.shape_32.setTransform(616.35,80.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghAvIgEAAIgDgBIgDgBIADgKIADAAIADABIAFABIAEABIAEAAIACAAIAEgBIAEgDIADgEIAEgFIAEgIIgHgJIgbgvIgCgDIgEgBIgGgBIAAgDIAoAAIAAADIgNACIAUAlIAFAHIAWgsIgNgCIAAgDIAgAAIAAADIgGABIgEACIgCACIgjBDQgCAHgDAEIgHAFIgHADIgJABIgFgBg");
	this.shape_33.setTransform(602.25,82.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAiIgFgCIgCgEIgBgFQgDAEgEABIgHAEIgIACIgHAAQgFAAgEgBIgHgFQgEgBgBgEQgCgDABgEQgBgDACgEQACgDAEgCIAHgEIAJgCIAKgBIAIgBIACAAIACAAIAEAAIADABIAAgNIgBgFIgDgEIgDgBIgGgBIgJABIgIADIgGADIgGADIgCAAIgDgKIAGgCIAHgCIAIgBIAJgBIAKABIALADQAFADADAEQADAFAAAFIgBAiIABACIACABIACABIADAAIABAAIADAAIACgBIACAAIABAAIAAADIgDACIgFACIgEABIgGABIgGAAgAgEAAQgGAAgFADQgFABgDADQgCADAAAEQAAAEACACIADAEIAFACIAFAAIAGAAIAFgBIAFgCIAEgEIABgUIgPABg");
	this.shape_34.setTransform(593.65,80.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAZAuIAAgDIAMgCIADgBIABgDIAAhLIgFAKIgeA7IgJAPIgDAAIgmhKIgFgKIAABKIABAEIADABIAMACIAAADIgoAAIAAgDIAMgCIADgBIABgEIAAhIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDgCIgMgBIAAgEIAmAAIAdA7IAGANIAkhIIAmAAIAAAEIgMABIgDACIgBACIAABJIABADIADABIAMACIAAADg");
	this.shape_35.setTransform(581.075,79.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCApIgHgCIgEgEQgCgDAAgDIAAguIgPAAIAAgDIAHgCIAFgBIADgDIACgFIAAgIIANgCIAAATIAfAAIgDAFIgcAAIAAAsQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAFACIAFABIAFABIAEAAIADgBIADgBIADAAIAAAAIAAADIgDACIgFACIgHABIgIABIgIgBg");
	this.shape_36.setTransform(542.125,79.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgiAhIAAgDIALgBIACgCIABgCIAAgrIgBgDIgEgCIgIgCIAAgCIAcgFIAAAPIAFgFIAFgFIAHgEQAFgBAEAAIAFAAIAEAAIACABIADABIAAAPIgEAAIgDgFIgCgBIgDgBIgDgBIgDAAIgGABIgGACIgFACIgEAEIAAAnQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAIADACIALABIAAADg");
	this.shape_37.setTransform(535.15,80.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AARAvIAAgDIAQgDIgQgdIgrAAIgOAdIAPADIAAADIgkAAIAAgDIAIgDQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIACgCIAkhFIALgOIADAAIAtBTIACACQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAIADIAAADgAgXAIIAmAAIgPgcIgEgJg");
	this.shape_38.setTransform(525.675,79.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiAhIAAgDIALgBIACgCIABgCIAAgrIgBgDIgEgCIgIgCIAAgCIAcgFIAAAPIAFgFIAFgFIAIgEQADgBAGAAIAEAAIAEAAIACABIADABIAAAPIgEAAIgEgFIgBgBIgDgBIgDgBIgDAAIgGABIgGACIgFACIgEAEIAAAnQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACIALABIAAADg");
	this.shape_39.setTransform(511.55,80.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMAgQgIgCgGgFQgEgEgDgGQgEgGAAgJQABgGACgFQADgHAFgEQAFgFAJgDQAHgDAJAAQAIAAAGADQAHACAEADQAEADACAFQACAEABAFIAAABIAAACIAAABIgBACIg6AAQABANAHAHQAIAJAOgBIAJgBIAIgBIAGgDIAEgDIACAAIAAAGIgHADIgIAEIgJACIgLABQgIAAgHgCgAgFgbIgHAFQgDACgCAEIgDAJIAqAAIgBgIQgBgEgDgDQgCgDgDgCQgEgBgFgBQgEABgEABg");
	this.shape_40.setTransform(503.45,80.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCApIgHgCIgEgEQgCgDAAgDIAAguIgPAAIAAgDIAHgCIAFgBIADgDIACgFIAAgIIANgCIAAATIAfAAIgDAFIgcAAIAAAsQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAFACIAFABIAFABIAEAAIADgBIADgBIADAAIAAAAIAAADIgDACIgFACIgHABIgIABIgIgBg");
	this.shape_41.setTransform(496.275,79.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAVAiIAAgMIgHAGIgHAEIgHABIgHABQgGAAgFgCQgFgBgEgDQgEgDgCgEQgCgEAAgGIAAgeIgBgDIgFgCIgIgCIAAgCIAdgFIAAAnIABAJQABADACADQACACAEACIAKABIAEAAIAGgCIAGgCIAFgDIAAgmQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBIgEgCIgJgCIAAgCIAegFIAAA1IABADIAFACIAIACIAAABIgbAGg");
	this.shape_42.setTransform(487.975,80.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AguAxIAAgDIALgCIADgBIABgDIAAhKIgCgDIgEgCIgIgCIAAgCIAdgEIAAAKIAHgGIAIgDIAGgBIAHgBQAIAAAHADQAGACAFAEQAEAEACAGQADAGAAAGQAAAIgDAHQgDAFgFAFQgGAFgIADQgHACgKABIgGgBIgGgBIgFgCIgEgDIAAADIAAAZIABADIADABIAMACIAAADgAgBgoIgFABIgFACIgFADIAAArIAEACIAGABIAFABIAEAAQAHAAAFgCQAFgCAEgDQADgEACgEQABgFAAgFQAAgGgBgFQgCgFgDgFQgDgDgGgCQgFgDgHAAIgEABg");
	this.shape_43.setTransform(477.675,82.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAiAhIAAgDIAKgBIAEgCIABgCIAAgeIgBgIQgBgEgCgCQgCgDgDgBQgEgCgGAAIgGABIgGABIgFACIgFADIAAArQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAIADACIAIABIAAADIgpAAIAAgDIAKgBIADgCIABgCIAAgeIgBgIQgBgEgCgCQgCgDgDgBQgEgCgGAAIgGABIgGABIgFACIgFADIAAArIABACIAEACIAJABIAAADIgrAAIAAgDIAKgBIADgCIABgCIAAgrIgBgDIgEgCIgJgCIAAgCIAdgFIAAALIAHgFIAHgEIAGgCIAIAAIAJAAIAHADIAFAEQADACABADIAIgHIAIgDIAIgCIAGAAQAGAAAFABQAFABAEADQADADACAEQADAFAAAGIAAAiIABACIADACIAJABIAAADg");
	this.shape_44.setTransform(464.85,80.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAgQgHgDgGgEQgFgFgEgGQgDgGAAgIQAAgGADgGQAEgHAFgEQAGgFAHgDQAIgCAKAAQALAAAHADQAIACAFAFQAFAFADAGQACAGAAAGQAAAHgDAGQgDAGgFAFQgGAFgHACQgJADgJAAQgJAAgIgCgAgIgcIgHAEIgFAFIgDAGIgBAGIAAAGIAAAGIABAHIAEAHIAFAFIAHAEQAEACAEAAQAHAAAFgDQAFgDACgEQADgEABgFIACgKIgCgKQgBgGgDgEQgEgEgFgDQgEgDgHAAIgIABg");
	this.shape_45.setTransform(452,80.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAsQgLgDgIgGQgHgGgFgJQgEgJAAgLQAAgJAFgKQAEgIAIgHQAJgGAKgEQALgDAMAAIAKAAIALACIALABIAJADIAAAVIgGAAIgFgMIgCgCIgCgBIgHgDIgIgBIgIgBIgHgBQgIAAgGADQgIACgEAFQgGAFgCAHQgDAIAAAKQAAAUANALQAMAKAWAAQAHAAAGgBIAKgEIAIgDIAHgEIACAAIAAAFIgJAGIgLAEIgMADQgGACgIAAQgNAAgLgEg");
	this.shape_46.setTransform(441.7,79.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkAgIAAgCIAvgzIAGgGIggAAIgEABIgDACIgFALIgFAAIAAgSIBEAAIAAABIgvAzIgGAHIAkAAIAFgBIACgDIAGgMIAFAAIAAAUg");
	this.shape_47.setTransform(403.525,80.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgMAgQgIgCgGgFQgEgEgEgGQgDgGAAgJQABgGACgFQADgHAFgEQAGgFAIgDQAHgDAJAAQAIAAAGADQAHACAEADQAEADACAFQACAEAAAFIAAABIAAACIAAABIAAACIg5AAQAAANAHAHQAIAJAOgBIAJgBIAIgBIAGgDIAEgDIABAAIAAAGIgGADIgIAEIgJACIgLABQgIAAgHgCgAgGgbIgGAFQgEACgBAEIgDAJIAqAAIgCgIQgBgEgCgDQgCgDgEgCQgDgBgFgBQgEABgFABg");
	this.shape_48.setTransform(395.25,80.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAHAhIAAgDIALgBIACgCQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAgeIgBgIQgBgEgCgCQgCgDgEgBQgEgCgGAAIgFABIgGABIgGACIgEADIAAArQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADACIAJABIAAADIgrAAIAAgDIAKgBIADgCIABgCIAAgrIgBgDIgEgCIgJgCIAAgCIAdgFIAAALIAHgGIAIgDIAGgCIAHAAQAGAAAGABQAFABAEADQAEADACAEQACAFAAAGIAAAiQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADACIAJABIAAADg");
	this.shape_49.setTransform(385.775,80.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAxIAAgDIAKgCIAEgBIABgDIAAgrIgBgDIgFgCIgJgCIAAgCIAdgEIAAA4QAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIACABIAKACIAAADgAgEghIgDgBIgDgDIgBgDIABgDIADgDIADgBIAEgBIAEABIADABIADADIABADIgBADIgDADIgDABIgEABIgEgBg");
	this.shape_50.setTransform(378,79.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCApIgHgCIgEgEQgCgDAAgDIAAguIgPAAIAAgDIAHgCIAFgBIADgDIACgFIAAgIIANgCIAAATIAfAAIgDAFIgcAAIAAAsQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAFACIAFABIAFABIAEAAIADgBIADgBIADAAIAAAAIAAADIgDACIgFACIgHABIgIABIgIgBg");
	this.shape_51.setTransform(372.475,79.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAhIAAgDIAKgBIAEgCIABgCIAAgrIgBgDIgFgCIgJgCIAAgCIAdgFIAAAPIAFgFIAFgFIAIgEQADgBAGAAIAEAAIADAAIADABIADABIAAAPIgEAAIgEgFIgBgBIgDgBIgDgBIgDAAIgHABIgFACIgFACIgEAEIAAAnQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACIALABIAAADg");
	this.shape_52.setTransform(365.55,80.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AASAiIgFgCIgCgEIgBgFQgDAEgEABIgHAEIgIACIgGAAQgGAAgEgBIgHgFQgDgBgCgEQgBgDgBgEQABgDABgEQACgDAEgCIAHgEIAJgCIAKgBIAIgBIABAAIADAAIAEAAIACABIAAgNIAAgFIgCgEIgFgBIgEgBIgJABIgIADIgHADIgGADIgCAAIgDgKIAGgCIAHgCIAIgBIAJgBIAKABIALADQAFADADAEQADAFAAAFIAAAiIAAACIACABIABABIAEAAIACAAIACAAIACgBIACAAIACAAIAAADIgEACIgEACIgGABIgEABIgHAAgAgEAAQgGAAgFADQgFABgDADQgCADAAAEQAAAEABACIAEAEIAFACIAGAAIAFAAIAFgBIAFgCIAEgEIAAgUIgOABg");
	this.shape_53.setTransform(357.6,80.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAZAuIAAgDIAMgCIADgBIABgDIAAhLIgFAKIgeA7IgJAPIgDAAIgmhKIgFgKIAABKIABAEIADABIAMACIAAADIgoAAIAAgDIAMgCIADgBIABgEIAAhIQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDgCIgMgBIAAgEIAmAAIAdA7IAGANIAkhIIAmAAIAAAEIgMABIgDACIgBACIAABJIABADIADABIAMACIAAADg");
	this.shape_54.setTransform(345.025,79.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDAIIgEgCIgDgDIgBgDIABgCIADgDIAEgBIADgBIAFABIADABIADADIABACIgBADIgDADIgDACIgFAAIgDAAg");
	this.shape_55.setTransform(330.2,83.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAMAuIAAgDIAOgCIgogpIgLAIIAAAdIABADIAEABIALACIAAADIgwAAIAAgDIALgCIADgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAhJQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDgCIgLgBIAAgEIAwAAIAAAEIgLABIgEACIgBACIAAAlIA1gpIgNgBIAAgEIAlAAIAAAEIgJABIgFACIgEADIglAcIAsArIACABIACADIACABIADABIAIABIAAADg");
	this.shape_56.setTransform(322.35,79.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAvIgFAAIgDgBIgDgBIADgKIACAAIAEABIAEABIAFABIADAAIADAAIAEgBIAEgDIAEgEIADgFIAEgIIgGgJIgcgvIgCgDIgEgBIgHgBIAAgDIAqAAIAAADIgOACIAVAlIAEAHIAWgsIgNgCIAAgDIAhAAIAAADIgHABIgEACIgDACIghBDQgDAHgDAEIgHAFIgIADIgIABIgEgBg");
	this.shape_57.setTransform(307,82.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgxAuIAAgDIAMgCIADgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAhJQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDgCIgMgBIAAgEIAuAAQANAAAJACQAIACAGADQAFACACAEQACADAAAEQAAAFgCADIgGAHIgJAFIgLADQAIABAGABIALAEQAFADADADQADAFAAAEQAAAGgCAEQgCAEgEACIgJAGIgKADIgMABIgLABgAgQApIASAAQAPAAAHgFQAIgDAAgKQAAgHgCgDQgDgEgEgDQgEgDgHgBIgOgBIgOAAgAgQgCIAIAAQAIgBAHgBQAGgBAEgCQAEgCABgDQACgEAAgEQAAgFgCgEQgCgEgEgDIgJgDIgMgBIgLAAg");
	this.shape_58.setTransform(296.825,79.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("EAgrABdIBlANQgHAQgMANQgMAMgSAJQgjATgxAAQhTAAgqgiQgqgjAAg3QAAg1AqgkQApgkBFAAQBDAAArAiQApAiADBFIi7AAQABA5AqAAQAaAAALgbgAfdAfIBFAAQAAgHAAgBQAAgTgJgMQgKgMgQAAQgRAAgJANQgIANAAAUQAAADAAACgAc+CoIiqAAIAAhKIAZAAIAAi+IgZAAIAAhKICUAAIAAEIIAWAAgAVfCoIi/AAIAAhKIAgAAIAAhYIggAAIAAhKICTAAIAAA8QAIgWARgRQARgPARgFQARgFAfAAIAABnQgEAAgGAAQgmAAgSAIQgTAHgHANQgHAOAAAVIAkAAgAZxBSIAABJQgMAIgWAGQgYAGgWAAQgcAAgUgJQgUgJgKgQQgGgIgDgIQgCgHgBgKQgCgQAAguIAAgoIgeAAIAAhKIAeAAIAAgkIB7g6IAABeIAxAAIAABKIgxAAIAAAuQAAAWAEAIQAEAHAMAAQAMAAARgHgAMsAGIgdAAIAAhKICYAAIAABwQAAAdAFAKQAFAKARAAQAUAAASgLIAAhMIggAAIAAhKICbAAIAACiIAcAAIAABKIiXAAIAAgeQgxAjgyAAQglAAgagXQgagYAAg/gAKoCoIi/AAIAAhRIAeAAIAAiwIgnAAIAAA+IhAAAIAAiPIFQAAIAACPIg/AAIAAg+IgnAAIAACwIAeAAgAANgBIhfgKQAPgjAkgOQAigOBEAAQAZAAAUABQAUACAPADQAhAGAPANQAQANAGAPQAHAPAAAfIAABFIAeAAIAABKIiZAAIAAgPQggAUg1AAQgxAAgagWQgZgWAAgeQAAgiAfgVQAfgVAyAAQAuAAAbAMIAAgHQAAgWgDgIQgEgJgMgHQgMgGgQAAQgdAAgQAXgAqZCoIhMAAIAAhtIBMAAQAOAtAmAAQAbAAAAgWQAAgMgJgHQgLgJghgOQgpgTgUgNQgSgMgNgWQgNgWAAgaQAAgwAfgaQAfgbAsAAQAtAAAfAaIAAgVIBNAAIAABgIhMAAQgOgogjAAQgZAAAAAWQAAAKAHAFQAHAFAlATQAyAYARAMQAIAGAJAKQAJAJAGALQANAYAAAbQAAArgfAeQggAegwAAQgtAAglgbgAjnBdIBlANQgHAQgMANQgMAMgSAJQgjATgxAAQhTAAgqgiQgqgjAAg3QAAg1AqgkQApgkBFAAQBDAAArAiQApAiADBFIi7AAQABA5AqAAQAaAAALgbgAk1AfIBFAAQAAgHAAgBQAAgTgJgMQgKgMgQAAQgRAAgJANQgIANAAAUQAAADAAACgABpBsIAAgsQgRgIgSAAQgQAAgKAIQgJAKAAAOQAAAOAKAJQAKAJANAAQAXAAAOgMgA2yCoIi/AAIAAhKIAgAAIAAhYIggAAIAAhKICTAAIAAA8QAIgWARgRQARgPARgFQARgFAfAAIAABnQgEAAgGAAQgmAAgSAIQgTAHgHANQgHAOAAAVIAkAAgA0JCrIhMAAIAAhLIBHAAQAcAdAgAAQAhAAAAgOQAAgGgHgEQgIgEgfgIQgZgGgfgJQgbgIgPgMQgQgLgFgKQgGgMAAgSQAAgmAcgTQAbgSArAAQAsAAAdARIAAgNIBLAAIAABEIhFAAQgagXgkAAQgcAAAAAPQAAAHAJABQAHACAoAIQAtAKAZAJQAZAKANAPQAMAQAAAXQAAApgeATQgeAUgtAAQgsAAgfgQgAufCoIh6AAIAAhZIB6AAgEggQACoIiEAAIAAhRIAbAAIAAiwIgbAAIAAhRIDNAAIAyCDIAziDIDMAAIAABRIgbAAIAACwIAbAAIAABRIixAAIAAhRIAbAAIAAi9IhmEOIgzAAIhmkLIAAC6IAbAAg");
	this.shape_59.setTransform(472.05,52.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#99EE85").s().p("AeOCNQgqgjAAg3QAAg1ApgkQApgkBGAAQBDAAArAiQApAiADBEIi7AAQABA6AqAAQAZAAAMgaIBlAMQgHAQgMAMQgMANgSAKQgjASgyAAQhTAAgpgigAflgGQgJANAAATIAAAFIBGAAIAAgIQAAgTgJgLQgLgNgPAAQgRAAgJAOgAXxCmQgUgJgLgQQgFgIgDgIQgDgIAAgJQgCgQAAguIAAgoIgfAAIAAhJIAfAAIAAgkIB6g7IAABfIAyAAIAABJIgyAAIAAAuQAAAWAFAIQADAIANgBQAMABARgIIAABJQgMAIgWAGQgZAGgVAAQgcABgUgKgAmECNQgqgjAAg3QAAg1ApgkQApgkBGAAQBDAAArAiQApAiADBEIi7AAQABA6AqAAQAaAAALgaIBlAMQgHAQgMAMQgMANgSAKQgjASgyAAQhSAAgqgigAktgGQgIANAAATIAAAFIBFAAIAAgIQAAgTgJgLQgLgNgPAAQgRAAgJAOgANGCVQgagXAAhAIAAg4IgdAAIAAhJICXAAIAABvQABAdAFAKQAFAKAQAAQAVAAASgLIAAhMIghAAIAAhJICbAAIAAChIAdAAIAABKIiXAAIAAgdQgxAigyAAQglAAgagYgAg3CXQgagWAAgeQAAghAggWQAfgVAxAAQAuAAAbAMIAAgHQAAgWgCgIQgEgJgMgHQgMgGgQAAQgeAAgPAXIhggKQAQgjAkgOQAhgOBEAAQAaAAATABQAVACAPADQAgAHAQAMQAQANAGAPQAGAPABAfIAABFIAdAAIAABKIiZAAIAAgQQgfAVg1AAQgxAAgagWgAAsBBQgKAJAAANQABAPAJAJQAKAKANAAQAYAAANgNIAAgrQgQgJgSAAQgQAAgKAJgAqZCTIAAAVIhNAAIAAhtIBNAAQAOAtAlAAQAcAAAAgWQAAgLgKgIQgKgIghgPQgpgTgUgOQgSgLgNgWQgNgWAAgaQAAgwAfgaQAfgbAsAAQAtAAAfAaIAAgVIBMAAIAABgIhMAAQgOgogiABQgZgBAAAWQgBAKAIAFQAHAGAkASQAzAZARALQAIAGAJAKQAJAJAGALQANAYAAAbQAAAsggAdQgfAegwAAQguAAgkgagA0JCdIAAAPIhMAAIAAhMIBHAAQAbAdAhAAQAgAAABgNQAAgHgIgEQgHgEgfgIIg4gPQgbgIgPgLQgQgLgFgMQgHgLABgRQAAgnAcgTQAbgSArAAQArABAeAQIAAgMIBLAAIAABEIhFAAQgagYgkAAQgcAAAAAPQAAAHAJABIAvALQAsAJAaAKQAZAJANAQQAMAQAAAWQAAApgeAUQgeATgtAAQgsAAgfgQgAaUCoIAAhKIAZAAIAAi9IgZAAIAAhLICUAAIAAEIIAWAAIAABKgASfCoIAAhKIAhAAIAAhYIghAAIAAhJICTAAIAAA7QAJgWARgRQARgPARgFQAQgFAgAAIAABnIgKAAQgmABgSAHQgTAIgHAMQgHAOgBAVIAkAAIAABKgAHpCoIAAhRIAdAAIAAiwIgmAAIAAA+IhAAAIAAiPIFQAAIAACPIhAAAIAAg+IgmAAIAACwIAeAAIAABRgAwZCoIAAhZIB6AAIAABZgA5yCoIAAhKIAhAAIAAhYIghAAIAAhJICTAAIAAA7QAJgWARgRQARgPARgFQARgFAfAAIAABnIgKAAQgmABgSAHQgTAIgHAMQgHAOgBAVIAkAAIAABKgA9ICoIAAhRIAcAAIAAi9IhmEOIg0AAIhlkLIAAC6IAbAAIAABRIiEAAIAAhRIAaAAIAAiwIgbAAIAAhRIDNAAIAzCDIAyiDIDMAAIAABRIgaAAIAACwIAbAAIAABRg");
	this.shape_60.setTransform(472.05,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Frame
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_61.setTransform(480,320);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_62.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,329,462,302);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFC3F6",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA2F94B9C7C4D14D9FC9A7C1DE351D47'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;