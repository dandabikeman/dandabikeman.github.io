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


(lib.pinata = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2F2F2F").ss(1,1,1).p("AgJzUIAdhdAJymbQA9A2ASATQCAB/BuD7QAgBIAADJQAADphgC3QhFCDhpBpQgiAiiJBzQiTB5lOAAQlXAAipiRQhxhigbgbQhihihmi4QhGh/AAjzQAAhYAPhSQAnjfDYkCIsgiWIIhJ3Ajlo9QC6gjBgAAQBgAAC1AhQCUAeCUCGIJ9iJAV2pCIACAAIgBABAUanCIgVAcAThl1IkyGdABuxVIDcIWAgwxeIAKgfApXlSQDKjKCoghICTm9AysUvILhjtAsfKrImwKHAIWRaIKkDOIlLpP");
	this.shape.setTransform(164.7,168.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAHCHQglg5gSg/Qgmh8BdgZIARAPQASAVAKAcQAeBXhLB2g");
	this.shape_1.setTransform(169.1918,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00CC").s().p("An/MIQhxhhgcgbQhhhihni4QhGh/AAjzQAAhXAPhSQAnjgDYkDQDKjICogjQC6giBggBQBgABC1AhQCUAeCVCGQA8A3ASARQCACABvD8QAfBIAADIQAADphgC3QhECChqBqQgiAiiJBzQiTB5lOAAQlXAAioiSg");
	this.shape_2.setTransform(169.95,199.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00CC").s().p("AsfKrQBmC4BiBiQAbAbBxBhIriDuQgHgEgIgCQgKABgJAIgAIWRaQCJhzAigiQBphqBEiCIFMJQgA13noIMgCVQjZEDgnDfgALBlTQgTgRg8g3IJ9iJIgIAPQgJASgHATQgKAagEAbIADAHIACAHIAFAIIAAAIIAAAHIACAHIAKAWIACADIkyGeQhuj7iAiAgAUFmnIAAgIIgDgIIgBgIIgBgGIADgIQAIgOABgRQACgMAIgJIANgLIAAADIAAAPIgFAIIgCAHIgDAHQgCARADARIgVAcIAAgBgAhSv6QAcgMAUgRIADgHIAHgIIAIgIIACgIIACgHIAIgHIAHgIQAIgOAFgRQAEgLgDgKIgDgIIgMgdIgLgfIAAgHIAAgIIgBgBIAehdIAAAEIAAAPIgFAHIgCAIIgDAIQgCAaAGAaQAEAXAKAWIAHAIIAHAHIAGAHIABAIIABAPIAAAPIACAHIADAIIADAIIACAHIAAAIIAAAHIAAAHIAAAIQgGAQgJAOQgHALAEAMQAEAHAGADQALAFAMACIAEgDIAGgFIAIgHIAEgIIAHgPIAGgPIAAgHIAAgeIAAgTIDbIWQi0ghhhgBQhgABi5AigAV2pCIACAAIgBABIgBgBgAgmx9IABAGIADAIIgGAHIgHAIIgBACg");
	this.shape_3.setTransform(164.7,168.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("AyOYeQgGgDgDgHQgFgMAHgLQAJgOAGgQIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgPIgBgPIgBgHIgGgIIgHgHIgHgIQgKgWgEgXQgGgaACgaIADgIIADgHIAEgIIAAgPIAAgDIgMALQgJAJgBANQgCAQgIAOIgDAIIABAHIACAIIACAHIAAAIIAAAHIAMAfIANAdIADAIQACAKgDAMQgGAQgIAOIgIAIIgHAHIgDAIIgCAHIgIAIIgHAIIgDAHQgUASgcALIgWAIQgMgBgLgGQgGgDgDgHIgCgIQAAgEACgDIACgIQAPgNAUgGIASgGIAHgHIAIgIIAHgHIADgIIACgHIAIgIIAHgIIAFgHIgCgHIgCgIIgBgHIAAgIIgHgPIgKgXIgDgHIAAgHIAAgIIgEgIIgDgHIgDgHQAFgbAJgaQAHgTAJgSIAIgPIAHgIIAIgHIAPgIIAXgWIAAAAIAIgGQAJgHAKgCQAJACAHAEIACABIAIAIIACADIADACIAGAAQAGACAGAEIAIAGIABAPQgBAIgCAHIgDAIIAAA0IAABEQAEAHAFAHQAIAKAFANIADAIIAIAHIAKAIIAKAHIAMADIANAFIAHAHIAIAIIAHAHIAPAIQAFADAEAFIAEAEIAFACIAMAGQALAJAGANQAHAOgBAQIgFAIIgEAEIgEADQgMgBgMgEQgFgBgDgEQgNgSgUgMIgZgPIgHgHIgIgIQgZgIgSgOIABACIACAIIAAAWIAAAeIAAAIIgFAOIgIAPIgEAIIgIAIIgFAEIgFADQgMgBgLgGgATKYYQgGgDgDgHQgFgMAHgLQAJgOAGgQIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgPIgBgPIgBgHIgGgIIgHgHIgHgIQgKgWgEgXQgGgaACgaIADgIIADgHIAEgIIAAgPIAAgDIgMALQgJAJgBANQgCAQgIAOIgDAIIABAHIACAIIACAHIAAAIIAAAHIAMAfIANAdIADAIQACAKgDAMQgGAQgIAOIgIAIIgHAHIgDAIIgCAHIgIAIIgHAIIgDAHQgUASgcALIgWAIQgMgBgLgGQgGgDgDgHIgCgIQAAgEACgDIACgIQAPgNAUgGIASgGIAHgHIAIgIIAHgHIADgIIACgHIAIgIIAHgIIAFgHIgCgHIgCgIIgBgHIAAgIIgHgPIgKgXIgDgHIAAgHIAAgIIgEgIIgDgHIgDgHQAFgbAJgaQAHgTAJgSIAIgPIAHgIIAIgHIAPgIIAXgWIAAAAQAlgNAIAFIAIAIIACADIADACIAGAAQAGACAGAEIAIAGQABAIAAAHQgBAIgCAHIgDAIIAAA0IAABEQAEAHAFAHQAIAKAFANIADAIIAIAHIAKAIIAKAHIAMADIANAFIAHAHIAIAIIAHAHIAPAIQAFADAEAFIAEAEIAFACIAMAGQALAJAGANQAHAOgBAQIgFAIIgEAEIgEADQgMgBgMgEQgFgBgDgEQgNgSgUgMIgZgPIgHgHIgIgIQgZgIgSgOIABACIACAIIAAAWIAAAeIAAAIIgFAOIgIAPIgEAIIgIAIIgFAEIgFADQgMgBgLgGgA2FkXQgGgDgDgHQgFgMAHgLQAJgOAGgQIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgPIgBgPIgBgHIgGgIIgHgHIgHgIQgKgWgEgXQgGgaACgaIADgIIADgHIAEgIIAAgPIAAgDIgMALQgJAJgBANQgCAQgIAOIgDAIIABAHIACAIIACAHIAAAIIAAAHIAMAfIANAdIADAIQACAKgDAMQgGAQgIAOIgIAIIgHAHIgDAIIgCAHIgIAIIgHAIIgDAHQgUASgcALIgWAIQgMgBgLgGQgGgDgDgHIgCgIQAAgEACgDIACgIQAPgNAUgGIASgGIAHgHIAIgIIAHgHIADgIIACgHIAIgIIAHgIIAFgHIgCgHIgCgIIgBgHIAAgIIgHgPIgKgXIgDgHIAAgHIAAgIIgEgIIgDgHIgDgHQAFgbAJgaQAHgTAJgSIAIgPIAHgIIAIgHIAPgIIAXgWIAAAAQAOgNANgCQAKACAIAFIAIAIIACADIADACIAGAAQAGACAGAEQAEACAEAEIABAPQgBAIgCAHIgDAIIAAA0IAABEQAEAHAFAHQAIAKAFANIADAIIAIAHIAKAIIAKAHIAMADIANAFIAHAHIAIAIIAHAHIAPAIQAFADAEAFIAEAEIAFACIAMAGQALAJAGANQAHAOgBAQIgFAIIgEAEIgEADQgMgBgMgEQgFgBgDgEQgNgSgUgMIgZgPIgHgHIgIgIQgZgIgSgOIABACIACAIIAAAWIAAAeIAAAIIgFAOIgIAPIgEAIIgIAIIgFAEIgFADQgMgBgLgGgAVtlrQgGgDgDgHQgFgMAHgLQAJgOAGgQIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgPIgBgPIgBgHIgGgIIgHgHIgHgIQgKgWgEgXIgDgTQgCgQABgRIADgIIADgHIAEgIIAAgPIAAgDIgMALQgJAJgBANQgCAQgIAOIgDAIIABAHIACAIIACAHIAAAIIAAABIAAAGIAMAfIANAdIADAIQACAKgDAMQgGAQgIAOIgIAIIgHAHIgDAIIgCAHIgIAIIgHAIIgDAHQgUASgcALIgWAIQgMgBgLgGQgGgDgDgHIgCgIQAAgEACgDIACgIQAPgNAUgGIASgGIAHgHIAIgIIAHgHIADgIIACgHIAIgIIAHgIIAFgHIgCgHIgCgIIgBgHIAAgIIgGgMIgBgDIgKgXIgDgHIAAgHIAAgIIgEgIIgDgHIgDgHQAFgbAJgaQAHgTAJgSIAIgPIAAAAIAHgIIAIgHIAPgIIAXgWIAAAAQAOgNANgCQAKACAIAFIAIAIIACADIADACIAGAAQAGACAGAEIAGAEIABABIABABIABAPQgBAIgCAHIgDAIIAAA0IAABEQAEAHAFAHQAIAKAFANIADAIIAIAHIAKAIIAKAHIAMADIANAFIAHAHIAIAIIAHAHIAPAIQAFADAEAFIAEAEIAFACIAMAGQALAJAGANQAHAOgBAQIgFAIIgEAEIgEADQgMgBgMgEQgFgBgDgEQgNgSgUgMIgZgPIgHgHIgIgIQgZgIgSgOIABACIACAIIAAAWIAAAeIAAAIIgFAOIgIAPIgEAIIgIAIIgFAEIgFADQgMgBgLgGgABeyPQgGgDgDgHQgFgMAHgLQAJgOAGgQIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgCgHIgDgIIAAgPIgBgPIgBgHIgGgIIgHgHIgHgIQgKgWgEgXQgGgaACgaIADgIIADgHIAEgIIAAgPIAAgDIgMALQgJAJgBANQgCAQgIAOIgDAIIABAHIACAIIACAGIAAABIAAAIIAAAHIAMAfIANAdIADAIQACAKgDAMQgGAQgIAOIgIAIIgHAHIgDAIIgCAHIgIAIIgHAIIgDAHQgTASgbALIgBAAIgWAIQgMgBgLgGQgGgDgDgHIgCgIQAAgEACgDIACgIQAPgNAUgGIASgGIAHgHIAIgIIAHgHIADgIIACgHIAGgGIACgCIAGgIIAFgHIgCgHIgCgHIAAgBIgBgHIAAgIIgGgPIgKgXIgDgHIAAgHIAAgIIgEgIIgDgHIgDgHQAFgbAJgaQAHgTAIgSIAIgPIAHgIIAIgHIAPgIIAXgWQAOgNANgCQAKACAIAFIAIAIIACADIADACIAGAAQAGACAGAEQAEACAEAEIABAPQgBAIgCAHIgDAIIAAA0IAABEQAEAHAFAHQAIAKAFANIADAIIAIAHIAKAIIAKAHIAMADIANAFIAHAHIAIAIIAHAHIAPAIQAFADAEAFIAEAEIAFACIAMAGQALAJAGANQAHAOgBAQIgFAIIgEAEIgEADQgMgBgMgEQgFgBgDgEQgNgSgUgMIgZgPIgHgHIgIgIQgZgIgSgOIABACIACAIIAAADIAAATIAAAeIAAAIIgFAOIgIAPIgEAIIgIAIIgFAEIgFADQgMgBgLgGg");
	this.shape_4.setTransform(160.4882,184.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinata, new cjs.Rectangle(0,-1.5,321,343.2), null);


(lib.hat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AYPCWQAAgBABgCQAOiMiziNQhdg5iQgnQkfhOnEArQA/CYBEC6IAPAqQBtguBHgYADPJoICVEJQBFgIBHgKQBMgLBMgNICVkvICqDtQB/gfB9gmIBZkyQABgBACgBQBohEA2g0QAZgZAOgVQAqhCABgOADPJoQBqgLBwgOQAlgFAjgEICXEBQCggcCfgmIB3knICFDiQBpggBngkQA3gUA3gVAFkNxICNkrQCmgXCGgXQCrgdB2gdQCegoBAgoIB3DuIAqloIBEE/IAOm9Akyj5QBApUCehFQC/hVEwLeAkyj5QllgDlLBBQkiA4iNBmQiwB9BFC9IAWAeQAfAkArAkQA7AxB+AuIB4FWQAPAEARAFIEMj1QAOADAPADQCWAcCrAKICVEjIAAAAICrkdIChEVIAAAAQCpgLC7gXA3oKZIEFi3QCeA4EGAyICLE7IABAAIDSkPQCYAKCogEQCugEDCgSA3oKZQCTBcDqBDA3oKZIgUl8AqzOHQB1ALCHAGQA0ACA3ABAlMObQCdACCvgKApaA2QDHBLCNAcQFmBGHNhwAlMCHQADivAXjRAxLNBQCqAuDtAYAAAOTIDPkr");
	this.shape.setTransform(155.2427,92.3546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF33").s().p("AlYFEICrkdICiEUQiTAJiHAAIgzAAgAnDFBQiHgGh1gMIDSkOICVEjIhrgDgADDAQICWEKICMkrICXEBICVkuICqDrQifAnigAcQhMANhMALIiLASQi7AWipALgAxXDpIENjzICKE5QjtgXiqgvgA30BCIEGi3IB3FVQjqhDiThbgAQzh5ICEDhIBZkxIB4DtIAplnIBEFAIhtAnQhoAkhpAgQh9Amh/Afg");
	this.shape_1.setTransform(156.4,152.341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlVGDIiVkjQCYAJCogDQCugEDCgTIjOErIgBAAIihkUIirEdgAq9FuIiLk6IkMD0IgggJIh4lVQCeA4EGAyIAdAFQCWAcCrALIjSEOgADGBPQBqgKBwgOIBIgKIiNEsgAHoAtQCmgWCGgXIiVEvgAMUAAQCrgcB2geIh3EmgAQ1g6QCegoBAgoIADgCQBohEA2g0QAZgZAOgVQAqhCABgOIgOG9IhEk/IgqFnIh3jtIhZExgA4Fj6IAWAdQAfAlArAjQA7AyB+AtIkFC3g");
	this.shape_2.setTransform(156.125,146.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AnhMHQirgLiWgcIgdgFQkGgyieg5Qh+gtg7gyQgrgjgfglIgWgdQhFi9Cwh/QCNhlEig4QFLhBFlAEQBApVCehFQC/hUEwLdQA/CXBEC7IAPArIgPgrQhEi7g/iXQHEgrEfBOQCQAnBdA5QCzCOgOCMIgBACQgBAOgqBCQgOAVgZAZQg2A0hoBEIgDACQhAAoieAoQh2AeirAdQiGAXimAWIhIAKQhwAOhqAKQjCATiuAEIhaABQh3AAhvgHgAAdFGQD1AAEbhEQBtguBHgYQhHAYhtAuQkbBEj1AAIAAAAIAAAAQiZAAiKgbQiNgbjHhLQDHBLCNAbQCKAbCZAAIAAAAIAAAAgAlMEWQADixAXjPQgXDPgDCxg");
	this.shape_3.setTransform(155.2427,78.1357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,312.5,186.8);


// stage content:
(lib.PracticeCardPValenzuela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,29];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_hat.addEventListener("click", fl_ClickNextScene.bind(this));
		this.pinata.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19).call(this.frame_29).wait(1));

	// Felizcincodemayo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAwMAJKIgmu5IDLgZIIjNsIgNtGIB/gmIBZP4IjLAAIpJrHIBMKUgEAmQgFJIAaPSIDkgyIg/ttgEAiegEjQggggg3goQhthPhvgkQlghyjnFtQhMBsggCYQg/ExDeDeIA0A2QBFA9BZAgQEfBlF9jeIhAjlQiQBWigAYQk/AvhMk2QgDhlAYhvQAvjeCHgwIAhgKQArgKAvADQCVAJCHCHgAqqoXIIvAAIovLKIJ/AAICLiJImiAAIH8q4ItkAAgAzZqFIAJNBIDSAAIAAtBgEghIgLPIAyOwIJ1AJIAKiKInCAAIAAsvgEguFgLhIAAQUIJXAAIAAjTImkATIAAklIF8AAIAAiuImkAAIgJjTIF7AAIAAiugEg+egLPIAKP5IE/AAIAAouIHqgJIgKiuInpAAIAAimIHzAAIAUh3g");
	this.shape.setTransform(427.875,105.4899);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(10));

	// pinata
	this.pinata = new lib.pinata();
	this.pinata.name = "pinata";
	this.pinata.setTransform(489.8,398.65,1,1,0,0,0,160.5,170.1);
	this.pinata._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pinata).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// sombrero
	this.btn_hat = new lib.hat("synched",0);
	this.btn_hat.name = "btn_hat";
	this.btn_hat.setTransform(489.9,373.85,1.715,1.823,0,0,0,155.2,92.3);

	this.timeline.addTween(cjs.Tween.get(this.btn_hat).to({regY:92.4,scaleX:1,scaleY:1,x:547.3,y:-111.9},9).to({_off:true},1).wait(20));

	// credits
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6666").s().p("AglA5QAAgEACgGQADgHAGgHQAGgIAMgKQASgPAHgIQAGgJAAgIQAAgIgGgGQgGgGgJAAQgKAAgGAGQgGAHAAAKIgOgCQABgPAKgJQAKgJAPABQAQAAAKAJQAKAJAAANQAAAHgDAHQgDAHgGAGIgWAUIgPAOQgEAEgCAEIA3AAIAAANg");
	this.shape_1.setTransform(73.92,56.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AglA5QAAgEACgGQADgHAGgHQAGgIAMgKQASgPAHgIQAGgJAAgIQAAgIgGgGQgGgGgJAAQgKAAgGAGQgGAHAAAKIgOgCQABgPAKgJQAKgJAPABQAQAAAKAJQAKAJAAANQAAAHgDAHQgDAHgGAGIgWAUIgPAOQgEAEgCAEIA3AAIAAANg");
	this.shape_2.setTransform(65.02,56.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AgZAuQgMgOAAggQAAgUAFgLQAEgNAIgHQAJgHALABQAJAAAHADQAHAEAFAHQAEAHADAKQADAKAAAQQAAAUgFANQgEAMgIAHQgIAGgNABQgPAAgKgNgAgOglQgIAKAAAbQAAAcAHAJQAGAKAJAAQAKAAAGgKQAHgJAAgcQAAgbgHgKQgGgJgKAAQgJAAgFAJg");
	this.shape_3.setTransform(56.25,56.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AglA5QAAgEACgGQADgHAGgHQAGgIAMgKQASgPAHgIQAGgJAAgIQAAgIgGgGQgGgGgJAAQgKAAgGAGQgGAHAAAKIgOgCQABgPAKgJQAKgJAPABQAQAAAKAJQAKAJAAANQAAAHgDAHQgDAHgGAGIgWAUIgPAOQgEAEgCAEIA3AAIAAANg");
	this.shape_4.setTransform(47.22,56.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6666").s().p("AgdA5IgCgNIAIABQAFAAADgCIAEgEIAFgLIABgDIgghSIAPAAIASAwIAEASIAGgSIASgwIAOAAIggBTQgFAOgCAFQgDAHgFADQgFADgHAAIgIgBg");
	this.shape_5.setTransform(34.55,60.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6666").s().p("AgeAlQgHgHAAgLQAAgFACgFQADgGAFgCQAEgCAGgCIANgDQAPgCAJgCIAAgEQgBgIgEgEQgFgFgKAAQgJAAgFAEQgFADgCAJIgOgCQACgIAEgGQAEgFAJgEQAIgDAKAAQAKABAHACQAGADAEADQADAEABAGIAAANIAAASQAAATABAFIAEAKIgOAAIgDgKQgIAHgIACQgGAEgIAAQgNgBgIgGgAgDAFIgLADQgFABgBADQgCADAAAEQAAAGAEAEQAEADAJAAQAGAAAHgDQAGgEADgGQACgEABgKIAAgFQgIADgPACg");
	this.shape_6.setTransform(26,58.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6666").s().p("AAoA5IAAhfIghBfIgNAAIghhgIAABgIgPAAIAAhxIAXAAIAcBQIAEARIAGgTIAchOIATAAIAABxg");
	this.shape_7.setTransform(14.9,56.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAgvIgKAAIAAgLIAKAAIAAgUIANgIIAAAcIAOAAIAAALIgOAAIAAAwQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAFAAIAGAAIACAMIgLABQgHAAgDgCg");
	this.shape_8.setTransform(100.425,37.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6666").s().p("AgWAqIAAhSIANAAIAAANQAFgJAEgDQADgCAFAAQAHAAAHAEIgEANQgGgDgEAAQgGAAgCADQgDADgCAFQgDAHABAJIAAAqg");
	this.shape_9.setTransform(96.05,38.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6666").s().p("AAkA5IgNgiIgvAAIgNAiIgQAAIAshxIAQAAIAuBxgAgHgWIgMAgIAlAAIgMgeIgHgYQgCALgEALg");
	this.shape_10.setTransform(87.45,36.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6666").s().p("AgWAqIAAhSIANAAIAAANQAFgJAEgDQADgCAFAAQAHAAAIAEIgGANQgEgDgGAAQgFAAgCADQgEADgBAFQgCAHAAAJIAAAqg");
	this.shape_11.setTransform(76.5,38.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6666").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKAMAAATIAAADIg9AAQABAPAHAGQAHAIAJAAQAIAAAFgEQAGgEADgJIAPACQgEAMgJAIQgJAGgPABQgRAAgLgMgAgPgYQgGAGgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAHg");
	this.shape_12.setTransform(68.725,38.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6666").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAgvIgKAAIAAgLIAKAAIAAgUIANgIIAAAcIAOAAIAAALIgOAAIAAAwQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAFAAIAGAAIACAMIgLABQgHAAgDgCg");
	this.shape_13.setTransform(62.175,37.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6666").s().p("AgSAnQgGgCgDgFQgDgEgCgGIgBgNIAAgzIAPAAIAAAtIAAAQQACAFAEADQAEAEAHgBQAFABAGgEQAFgDACgGQADgGAAgKIAAgsIAOAAIAABSIgNAAIAAgMQgKAPgPAAQgHgBgHgDg");
	this.shape_14.setTransform(55.325,38.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6666").s().p("AgjA7IAAhzIANAAIAAALQAFgGAFgDQAGgDAHAAQALAAAIAFQAIAFAEAKQAEALAAAMQAAAMgEAJQgFALgJAFQgIAGgKAAQgGgBgFgDQgGgDgEgEIAAApgAgPgmQgHAJAAAQQAAAOAHAIQAGAIAJAAQAIAAAHgIQAGgIABgPQgBgRgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_15.setTransform(46.7,39.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6666").s().p("AAqAqIAAgzQAAgIgBgEQgBgEgEgCQgEgCgFAAQgIAAgGAGQgGAFAAANIAAAvIgNAAIAAg1QAAgJgDgEQgEgFgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAAqIgOAAIAAhSIAMAAIAAAMQAEgGAHgEQAGgDAJAAQAJAAAGADQAFAFACAGQAKgOAQAAQAMgBAHAIQAGAGAAAOIAAA4g");
	this.shape_16.setTransform(35.375,38.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6666").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgJAOAAQARAAALALQALALAAAUQAAAPgFAJQgFAJgJAFQgJAFgLABQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_17.setTransform(24.225,38.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6666").s().p("AgaA0QgLgIgHgOQgFgOAAgQQAAgSAGgNQAHgNANgHQAMgHAPAAQARAAAMAJQALAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgDALQgEALAAALQAAAOAFALQAEAKAIAGQAKAFAJAAQANAAAJgHQAIgHADgPIAQAEQgFATgMAJQgNAKgRAAQgSAAgMgHg");
	this.shape_18.setTransform(14.1,36.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6666").s().p("AgeAlQgHgHAAgKQAAgHADgEQADgGAEgCQAEgDAGgBIAMgCQAQgCAJgDIAAgEQAAgIgFgEQgFgEgKgBQgKABgEADQgFAEgCAIIgOgCQACgJAEgFQAFgGAIgDQAIgCAKAAQALgBAGADQAHACADAFQADADABAGIAAANIAAARQAAAVACAEIADAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgOAAgHgGgAgDAFIgMADQgEACgCACQgBADAAAEQAAAGAEAEQAEADAIAAQAIABAGgEQAGgDAEgHQACgFAAgJIAAgFQgIADgPACg");
	this.shape_19.setTransform(96.5,18.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6666").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_20.setTransform(90.275,16.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6666").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAADIg9AAQABAPAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRABgLgMgAgPgYQgGAGgBALIAtAAQgBgLgEgFQgHgIgKAAQgJAAgHAHg");
	this.shape_21.setTransform(84.075,18.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6666").s().p("AgSAnQgGgCgDgFQgDgEgCgGIgBgNIAAgzIAPAAIAAAtIAAAQQACAFAEADQAEADAHAAQAFAAAGgDQAFgDACgGQADgFAAgLIAAgsIAOAAIAABSIgNAAIAAgLQgKANgPAAQgHAAgHgDg");
	this.shape_22.setTransform(75.125,18.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6666").s().p("AgkApIAAgLIA0g8IgQABIggAAIAAgMIBCAAIAAAKIgsA0IgIAJIARAAIAmAAIAAALg");
	this.shape_23.setTransform(66.725,18.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6666").s().p("AAUAqIAAgxQAAgJgCgEQgCgEgEgDQgEgCgGAAQgIAAgGAGQgHAGAAAPIAAAsIgOAAIAAhSIANAAIAAAMQAJgOAQABQAIAAAGACQAGADAEAFQADAEABAGIABAOIAAAxg");
	this.shape_24.setTransform(58.275,18.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6666").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgLAQAAQARAAALALQAKALAAAUIAAADIg9AAQABAPAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEANgJAIQgJAGgPAAQgRABgLgMgAgPgYQgGAGgBALIAtAAQgBgLgEgFQgHgIgKAAQgJAAgHAHg");
	this.shape_25.setTransform(49.375,18.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6666").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_26.setTransform(43.125,16.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6666").s().p("AgeAlQgHgHAAgKQAAgHADgEQADgGAEgCQAFgDAFgBIANgCQAPgCAJgDIAAgEQAAgIgFgEQgFgEgKgBQgJABgFADQgFAEgCAIIgOgCQACgJAEgFQAFgGAIgDQAIgCAKAAQAKgBAHADQAGACAEAFQADADABAGIAAANIAAARQAAAVABAEIAEAKIgPAAIgCgKQgIAHgIACQgFADgJAAQgOAAgHgGgAgDAFIgLADQgFACgCACQgBADAAAEQAAAGAEAEQAEADAJAAQAGABAHgEQAGgDADgHQADgFAAgJIAAgFQgIADgPACg");
	this.shape_27.setTransform(36.9,18.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6666").s().p("AgHA5IgshxIAQAAIAeBSIAFATIAGgTIAfhSIAPAAIgtBxg");
	this.shape_28.setTransform(28.35,16.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6666").s().p("AgrA5IAAhxIArAAIARABQAIABAGAEQAGAEADAHQAEAHAAAJQAAAOgKAKQgJAKgYAAIgdAAIAAAugAgcgCIAdAAQAPAAAGgFQAGgGAAgKQAAgHgEgFQgDgFgGgCIgOgBIgdAAg");
	this.shape_29.setTransform(13.875,16.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},20).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(518.3,178.7,310.5,391.50000000000006);
// library properties:
lib.properties = {
	id: 'F2174CACC5B4F941B54948A8CE879BE7',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCCFF",
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
an.compositions['F2174CACC5B4F941B54948A8CE879BE7'] = {
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