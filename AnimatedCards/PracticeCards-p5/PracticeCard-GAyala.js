(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Swan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Swan, null, null);


(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.8,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBWIg/hdIAABdIgyAAIAAirIAxAAIBABeIAAheIAyAAIAACrg");
	this.shape_3.setTransform(28.1,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_4.setTransform(50,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Squared
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_8.setTransform(50,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardGAyala = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on the current frame
		
		//this.btn_envelope.addEventListener("click", fl_ClickToPlay.bind(this));
		this.btn_Next.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20));

	// Envelope
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EhKKgtsMAAABbZMCUVAAAMAAAhbZMhKKAuFgEBKLgtsMiUVAAA");
	this.shape.setTransform(514.9,325.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(20));

	// Button
	this.btn_Next = new lib.BasicButton();
	this.btn_Next.name = "btn_Next";
	this.btn_Next.parent = this;
	this.btn_Next.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_Next, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Next).wait(30));

	// Swan Image
	this.instance = new lib.Swan();
	this.instance.parent = this;
	this.instance.setTransform(798.8,536.8,1.48,1.48,0,0,0,160.1,115.1);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(20));

	// Swans
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("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ABQArAlAvAfQA4AmATARQAnAhAQAqA+7FSQiOhphqiRQhqiRg0ipQg6i6BBhpQAshGBagcQBTgZBaASQBIAOBYAsQANAGCCBHQABABACABQADABACABQAEAAACABQAFABAEAAQAAAAAAAAQABAAAAAAQABAAAAABQAuAuBZAyQACABACABQCDBIAmA5QAJANAEAGQAIALAHAHQASAPATgEQABAAAAAAEhIAAEMQFYhtCtgsQEkhIDugLQEcgOD7BJQD6BJC0CWQADADADADQAAAAABAAQACACACACQANALAMALQAgBIA5B/QBLCnAjBrA+7FSQAtAcAlA0QAlA1AjBXQA0CCAXBmQAeB5gFBqQgNARgagFQgXgEgSgSQgdghgDgCQgSgSgUAAQgZABggAmQghAngYAEQgZADghgdQgpgjgRgGQgqgOg0AtQgPAMgdAbQgbAYgUAKQgsAYg3gLQgogIg+gfQhagugPgGQg+gagvACQgjABguAQQgBAAhOAgQhhAng5gXQgOgGgcgPQgYgLgSADQgXADgYAaQgjAngFADQgiAagygIQgsgGgqgcQgagQgxgmQgsgfgkgJQgugNgsAXQguAYgCAsA/bFBQARAHAPAKEhISAD7QhngwhWhKQhXhKg/hcQgNAkgRAHQgNAFgDADQgIAIAFARIAxDeQgDACgGgBQgngihMhDQgIgFgCAAQgFABgCAHQgIAUgCAKQgEARABANQADATARAYQAeAuAZAlIhFgrIArA9IGjJYQARAcAUACQAPACASgOQAagVAFgCQAFgCAFgCQAigJAzAoQBGA1AgAAQAgABAsgiQAzgmAXgGQAvgMBMArQBVAwAnABQAUAABCgSQA0gOAeANQAOAGAaAWQAYAVAQAFQAXAHAVgWQALgLAAgJEg5AAMpQgWgohDgYQhlgkgLgGQgtgZg9hSQg+hUgqgaQgCAMgIApQgUgPgKgIQgOAHgQgCQgQgCgLgLIAAA1QgTAAgJgCQgyAHhBAGQgDAkgaAdQgbAcgkAGQgKAOAEAtQADAmgTALQgHAFgNAAQgIAAgOAAQgZADgVATQgTARgKAZQgJAWgCAdQgCARAAAjEg5PAQHQAKAGAAAJA82uIQAIgJANABQAKAAAMAGQAIAEAMAJQAPALAFADQAWAPAgAKQAGACAJACQARAFAbAGQAgAGASAEQABAAABABQAFABADABQAiAIAYANQAAAAAAAAIABAAQABABAAABA8tuIQgFgCgEACQAAAAAAAAQgFACgDAFQgHAKAEAJQADAJAJAJQAKAJAFAFQAeAaAHAuQADAPAAASQAAAVgFAkQgEApgBARQgBAWACAUQABACAAACQAGAkATAZQABABABACQADAGAEAFQAJALAKAMQAAAAAAAAQABAAAAABA6HrvQAAgWgNgNQgGgGgSgFIgaAAQgBAIACAIQACAIADAIQAIAQAJAJQAOANATACQAHgJAAgRgA3NpkQgLAwAYAaQABARADAQQAJAsAYAlQApA4ATAdQAiAygCApQgDAggTAKQgCAAgCABA69P5QAAAGgBAG");
	this.shape_1.setTransform(512,522.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("ACDDUQgTgQg3gmQgvgggqgkIgDgCQg7gzgzg7QgEgOgXgNQgYgOgIgLQgGgIgBgKQgBgJADgMQAGgWAQgQQALgMAXgNQAbgRAJgHIANgLIACgBIAAgBQAggeAQgrQAEAGAEAHQAGAOACATQABAIAAArQADBQAsBdQAKgmgGgpQgDgOAEgHQAHgLAUAFQATAFAJgBQgLAwAYAaQACAQADARQAJAqAXAmQApA4ATAcQAiAygCAqQgDAfgTAKIgEABQgQgpgngig");
	this.shape_2.setTransform(356.4,472.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A1/FXQgHgHgIgLIgMgTQgng4iDhJIgEgCQhZgygtguIgCgBIgBgBIAAAAQgKgMgJgLIgHgLIgCgDQgTgZgGgjIgBgEQgCgTABgXQABgRAFgpQADgkAAgVQAAgSgCgPQgHgugegaIgPgOQgJgJgDgJQgEgJAHgKQADgFAFgCIAAAAIAEgBIAAAAIABAAIABAAIABABIACAAIgCAAIgBgBIgBAAIgBAAIAAAAIgEABQAIgJAMABQAMAAALAGQAIAEAMAJIAUAOQAWAPAgAKIAPAEIAsALIAzAKIABABIAJACQAhAIAYANIAAAAIABAAIABACQAbAPARAWQAVAbACAdQABASgHAaIgNArIgDALQgJACgUgGQgTgFgHALQgEAHADAPQAGAngKAmQgthcgEhPQAAgsgBgHQgBgTgHgPQgDgHgEgGQgQAsggAeIgBAAIgBABIgOAMQgIAGgcARQgWAOgLALQgRAQgGAWQgDAMACAKQABAKAGAIQAIAJAYAOQAXANAEAPQAzA8A7AyIADACQAqAlAwAfQA3AmATARQAnAhAQAqIgBAAIgIABQgPAAgOgMgA7FjdQACAIADAIQAIAQAJAJQAOANAUACQAGgJAAgRQAAgWgNgNQgGgGgRgFIgaAAQgCAIACAIgAVbFgIgBAAIABgEQANghAhgfIAEgDIAEgEQATgQA4gmIATgNIhXBRIAYgWIBThKIABgBQAbgUAZgVQA7gzAyg8IABAAIABgBIgBAAIgBABIgCgCIAAAAIABgBIABAAIABgBQADgDACgEQAIgIAOgIQAZgOAHgKQAGgIABgKQACgJgDgMQgHgWgQgQQgLgMgXgNQgbgRgJgHIgNgLIgBgBIgBgBQgggegQgrQgEAGgDAHQgHAOgBATQgBAIAAArQgEBQgtBcQgFgTgBgUQgBgSADgVQADgOgEgHQgHgLgTAFQgUAFgJgBIgDgLIgNgsQgIgZACgTQACgdAVgaQAQgWAbgQIADgCQAYgMAhgJIAJgCIABAAIAzgKIAsgLIAOgEQAhgKAWgPIAUgPQALgIAJgFQAMgFAKgBQANgBAKAFIAAABIgCAEQAFABADAFQAHAKgEAKQgDAIgJAJIgPAOQgeAagHAuQgDAQAAARQABAVAEAlQAEAoAAARQACAXgDAUIAAADIAAAAIgBAEQgFAhgTAXIgCAEIgIALIgOASIgFAFIgCACIgEAEQgtAshVAvQghASgbARQg4AkggAfQgQAPgJAPIgOASQgHALgHAHQgOAMgPAAIgIgBgAaVjjQgNAMAAAXQAAAQAHAKQATgDAOgMQAKgKAGgPQAEgIACgIQACgIgCgJIgaAAQgRAFgGAHgAc3lZQgEgCgFACIAFgBIAEABg");
	this.shape_3.setTransform(512,466.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("Ai9EeQgTgKgDgfQgBgZALgcQAIgSAOgVQATgcApg4QAXgmAJgqQADgRACgQIACAAIADgEQASgagKgsQAJABATgFQAUgFAHALQAEAHgDAOQgDAVABATQABAUAFATQAshdADhQQAAgrABgIQACgTAGgOQAEgHAEgGQAQArAgAeIAAABIACABIANALQAJAHAbARQAXANALAMQAQAQAGAWQADAMgBAKQgBAJgGAIQgIALgYAOQgOAIgIAIQgFAEgDAFIAAAAIizCpIgUANQg3AmgTAQIgEAEIgEADQghAfgNAhIgBAEIgEgBg");
	this.shape_4.setTransform(667.6,472.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(512,522.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},10).wait(20));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("EBSugOmIAAAwIAAfkMilbAAAMAB4gjb");
	this.shape_6.setTransform(503.4,692.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("EhTcAVpMAB3gjbIgdgIQgTgHgDgKQgCgNAQgFQAPgEARAEQBnAZB1glQBlggBlhKQA4goB2hpQBuhhBCgtQApgcAggMQAqgRAlADQA0AFAxArQAgAbAvA9QBcB4BKA8QBoBVBsAJQBVAHBggpQA8gZBuhEQBzhHA3gZQBhgrBUACQA2ACA+AVQAtAPBBAgQBwA3BpA9QCwBoAiARQB6A+BoALQDWAYEDioQA1giCYhxQB/heBTgvQCMhQBzgBQBtgBCKBIQBgAyCJBiQC+CJAkAYQEdC5DngVQCMgNCrhiQBig4DAh6QA6ghAtgRQA6gVA0AAQBFAABOAmQArAVBbA8QB5BPCBBKQBiA3BCAZQBeAjBSgCQBrgDB0hFQBJgrB5hmQBKg+AxgaQBJgoBCAIQAsAEAwAbQAeARA0AnIDeCoQBHA1ArAWQBDAkA8ABQBeACBghNQAigcApgtIBEhPQAsgzAkgbQAygkAygFQAvgFA3AYQAjAQA6AmIFEDZQA8ApAmARQA4AaAygBQBHgCBEg3QAygpA5hOQAhguAbgVQAnggAnAFQAgAEAdAdQAPAPAgArQBDBaBeBDQBJA0BRAgQAXAJAYAHQAXAHAOAOQARAQgJAQQgugGgugPIAAgwIAAAwIAAfkg");
	this.shape_7.setTransform(508.1,667.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},10).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551.2,416.1,952,703.6);
// library properties:
lib.properties = {
	id: '4690533C802C5A45A518B8009FC57F70',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#66CCFF",
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
an.compositions['4690533C802C5A45A518B8009FC57F70'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;