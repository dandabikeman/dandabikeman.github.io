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


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A0linIYglcIQrEaIAAAKAOSECIGUidIAAlEADhjxQAShBAggjQAYgaAsgXQAJgFAmgGQAIgCALgBQAIgBAJgBIAHgBQALgCAOgBQACABADAAIAFACQAcALALAIQAOAKAHAPQADAIAHAVQAGAUAAAGQAAAGgBAQAInkEQgCgGgDgGQAAgBgBgBQgGgKgQgMQgQgMgjgDQgUgBgOgCQgGAAgFgBQgCAAgCAAIAAAAQgCAAgCAAQgBABgCAAQgBAAgBAAQAAAAgBAAQgDAAgCABIgBAAQgFABgFABQAAAAgBABQAAAAgBAAQgEABgEACQgEABgEAAQAAAAgBAAQgFACgFACQgBAAgBABQgCAAgEABQgEABgNAGQgMAGgFADQgFACgIAEIgGADQgIAEgHAEQgIAEgJAGQgHAEgHAFQACgBADgBAGMk2QgEAAgEABQgEACgFABAGMk2IAAAAQgBAAAAAAAGnk7QgCAAgCAAIAAAAQgCAAgBAAIAAAAIgCABQgDAAgDABAGjk7QgBAAgCAAACcjDQASAJAYAIQAXAHAdAGQBDANBRAAQAFAAAFAAQAFAIAGAFQAOAQAQAHQAWAJAlAeQAmAdAUAJQAbALAZAUIA7AMIDthTIAAFRAGYiYQBMgCAlgcQAPgLAIgQQAIgQAAgVQAAgDAAgDQgBgEAAgEQgEgHgCgHAKEAPQAVAWAMAYIAWBhIgVgDIABDDIDrhcAKEAPIAhgLIAAA5AJqgIQAFAEAFAEQAJAHAHAIAHLBSIBXCSIAxhhIBTAYAjjA5QARgbAXgdQAVgbA8glQAsgcASgIQAPgHAFgKQACgDACgHQABgCACgDQAAgCAAgCQABgCABgDQAFgKAJgKQAKgOADgEICsAfQACAAABABQBgAeAzAnQAyAlAyBOQAOAWALAWAIgjRIFyCCIGUiQABKkVQADgBABgBQABgBACAAQAHgEAHgCQAOgFAQgCQAFAAAFAAQACAAACAAQAjAAAZAOQATALAFANQAAABAAABQACAEAAAFQAAACAAABQgBABAAACQAAACgBACQAAABAAAAQgBACAAABQgEAGgFAFQgFAFgIAFIAAAAIgBAAQgGAEgIADQgMAFgPACQgBAAAAAAQgBAAAAAAQgCAAAAAAQgHABgIAAQgCAAgCAAQgFgBgFAAQgRgBgNgFQgFgCgFgCQgCgBgCgCQgCAAgBgBQgJgFgGgGQgKgLAAgNQAAgCAAgBIAAgBQADgPARgMIAAAAQAAgBABgBgAhSmRQABABACAAQgCABgBABQgCABgDACQgHAFgJAIQgJAIgKAKQgHAHgHAHQgkAnAAAcQAAACABACQAEAPAjAHQANACARABQAIABAKAAQAFABARACQAMABASADQAdADAUAAQAKAAAJgBQAKgBAHgDIAAAAAkajCQAAgvAEgcQACgKACgJQAFgUAGgQQABgDABgDQAEgGACgFQAGgNAIgKQAJgKAKgIQASgOAWgHQAXgHAeAAQAMAAAOADQAEABALAEQACAAAEABQAsADAlAQQAOAGANAIQADACAEACQAtAdAAAkQAAADgBAJQgCAHgBADABJkTQgGgZg1gLQgggHgpAAQgcAAgYAFQgnAHgVAbAi9iLQAEABAEAAQAnAABPgVQAYgGAygQQACgBABAAQAdgKAmgMQACgBACAAAg+j6QgUgBgUAAQgOAAgPABQgrADgrANQgbAIgRAJQgBABgBABQgHAEgEAEQgGAGgCAHAAkj0IhJgFQgNgBgMAAAEYkDQgHAEgHAFQgCABAAAAQgUANgKAEQgDACgDABQgHAGgIAEQgKAHgIAEQADgBABAAAEYkDQgCABgDABADqjoQgKAEgBgFIAJgDAEFj4QgNAHgOAJADDjQQgHADgDADAkZi1QACAGAFAFQAFAFAIAFQAKAFANAFQAdAJAUACQgFACgDACQgEACgDACQgFACgFADQhmA2g1BTQgBABAAAAQgEAHgEAHQgMAVgKAYQgjBQgCBDQgBBCAHAaQARgfANgVIgBB7IKNCHIGsimAkZi1QgBgHAAgGQAAADAAADQAAAEABADgAlRCzQAYAnALAXQAAABAJAYQAMhbAOgnQANglAbgqIHeBjIAAFoAmQAVIAWAFAmQAVIAegJAmQAVIAAAyAmRECQANgVAJgNQAHgJAhgjArMgrIAAAAIE8BAA0linIAAFnIJQB7IFDBCA0linIJZB8IgJFmArMgrIGziKAD7CcIDQhKAEzkTQgNAHgOAJ");
	this.shape.setTransform(131.8,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],10.1,-17.9,0,10.1,-17.9,53.4).s().p("AjgCaQAChCAjhQQAKgXAMgWIAIgOIABgBQA1hTBlg2IAKgGIAXgHQAnAABPgVQAYgFAzgRIABADIgOASQgJAKgFAKIgCAGIgBADIgCAGIgEAJQgFALgPAGQgTAJgrAbQg8AlgVAcQgXAdgQAbQgbApgNAmQgOAmgMBbIgKgYQgKgYgYgnIgCACQghAigHAJQgJANgNAVIgeA0QgHgaABhCg");
	this.shape_1.setTransform(110.5,58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF0000","#000000"],[0,1],6,0.2,0,6,0.2,15.4).s().p("ABQAdIirgeIgBgEIADgBIBCgVIAFgCIAKAFQAMAFARABIAKABIAEAAIAPgBIABAAQATAJAXAHIgKAfIgDAAg");
	this.shape_2.setTransform(142.2,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF0000","#000000"],[0,1],-5.8,-1.8,0,-5.8,-1.8,24.2).s().p("AhaA4QgVgCgcgJIgXgLQgIgEgFgFQgFgGgCgFIgBgNQACgGAGgGQAEgFAHgEIACgBQAQgJAbgJQArgMAsgEIAdgBIAmABIAfAFQAdADAUAAIAUgBIARgEIAAAAIAAABIAAADQAAANAKALQAGAGAJAFIACABIAFACIgFACIhCAUIgDABQgzARgYAGQhOAVgnAAIgIgBg");
	this.shape_3.setTransform(121.9,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FF0000","#000000"],[0,1],-2,0.5,0,-2,0.5,14.3).s().p("AAMAgIgZgCIgWgCIgRgBIgegDQgjgHgEgPQAVgaAngIQAYgEAcAAQAoAAAhAHQA0AKAGAZQgRAMgCAPIAAAAIgRAEg");
	this.shape_4.setTransform(126.8,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF0000","#000000"],[0,1],6.8,-1.8,0,6.8,-1.8,21).s().p("AB4A/QgGgZg1gLQghgHgnAAQgdAAgYAFQgnAHgVAbIAAgEQAAgcAjgmIAOgOIATgSIAQgNIAFgDIADgCIgDgBQArADAmAQQAOAGANAIIAHAEQAtAcAAAkIgBAMIgCAKIgCACg");
	this.shape_5.setTransform(127,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF0000","#000000"],[0,1],-1,0.2,0,-1,0.2,15).s().p("AhhAiIAEgUQAFgTAGgQIADgGIAFgLQAHgNAIgKQAIgKAKgIQASgOAXgHQAWgHAdAAQAMAAAOAEIAPAEIAGABIADABIgDACIgFAEIgQAMIgTASIgOAPQgjAnAAAaIAAAFQAFAOAjAHIAAAHQgrAEgqAMQgbAJgQAJIgDABQgGAEgFAFQgFAFgCAHQgBgvAEgbg");
	this.shape_6.setTransform(113.6,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF0000","#000000"],[0,1],-0.9,-2.5,0,-0.9,-2.5,10.1).s().p("AgDAyIgKgBQgQgBgOgFIgKgFIgFgCIgCgBQgJgFgGgGQgKgLAAgNIAAgCIAAgBQACgPARgMIABAAIACgCIADgCIACgCIAPgGQAOgFAQgBIAKAAIADAAQAkAAAZAOQARALAGANIAAACQACAEAAAEIAAADIgBADIgBAEIAAABIgCADQgDAGgFAFIgSAKIgKAHQgMAEgPADIgBAAIgBAAIgCAAIgPABIgDAAg");
	this.shape_7.setTransform(145.7,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF0000","#000000"],[0,1],0.1,2.7,0,0.1,2.7,33.8).s().p("AAQA5QgLgVgNgWQgyhOgygmQgzgmhggfIAKggQAYAIAdAFQBDANBRAAIAKAAIALAOQAPAPAOAHQAWAKAmAdQAlAdATAJQAbAMAZATIALAJIAQAQQAVAVAMAXIAWBhIgVgDIhTgYIgxBig");
	this.shape_8.setTransform(176.1,54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FF0000","#000000"],[0,1],4.9,-2.1,0,4.9,-2.1,19.1).s().p("AhuBTIAIgEIgIAEIAAgBIABgFIABgCQARhCAgghQAZgaArgYQAIgFAmgGQARACARAPQAGAFADAGQAIAOgHATQgCAFAOAOIgHAHIgMgBIAMABIgEAEQgDAFgFgKQgFgBgCAAIgEABIAAAAIgBAAIgBAAIgGABIgBABIgKACIAAAAIgBAAIgHACIgJADIgBAAIgKADIgDABIgFACQgFABgMAGIgRAIIgNAHIgGADIgPAIIgRAJIgOAJIgaARIgIACQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_9.setTransform(165.2,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FF0000","#000000"],[0,1],-1.1,3.9,0,-1.1,3.9,21.8).s().p("AAsBRQhQAAhDgMQgdgGgXgIQgYgHgSgJIABAAIABAAQAPgDAMgEIAPgHIAAAAIAAAAQAIgFAGgFIAPgKIAFgDQAKgDAUgNIACgBIAOgJQAPgJAMgHIAGgDIANgGIARgJQAMgGAEgBIAGgBIADgBIAKgEIABAAIAJgDIAHgBIgBAAIgIACIgHACIAHgCIAIgCIABAAIAAAAIABgBIAKgCIABgBIAHgBIABAAQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAIABgBIADABIgEAAIAEAAIABAAIADAAQAFAKADgFIADgEIAiADQAjADAQAMQAQAMAGAKIABABQADAGACAHIABAHIAAAHQAAAUgIAQQgIAPgPAMQglAchMABIgKAAgADFgZQgEgHgCgHQACAHAEAHgAAphLIABAAIgBAAg");
	this.shape_10.setTransform(167.1,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FF0000","#000000"],[0,1],3,0.2,0,3,0.2,12.9).s().p("AA7AvQgQgMgkgDIgggDIAIgHQgPgPACgEQAHgSgIgOQgDgHgGgFQgRgPgQgBIATgDIARgCIAGgBIAagDIgaADIgGABIgrAEQAqgOAhAGIAEABQAVAGASAQQApAkgBBAQADAEAAAIQgGgKgQgMgAgoAcIAAAAIgEAAQACgCAFACIgDAAgAhOg6IAYgCIgTADIgFgBgAg2g8IAAAAg");
	this.shape_11.setTransform(178.2,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AmRDrIAAh7QANgVAJgNQAHgJAhgjIACgBQAYAnALAXIAJAZQAMhbAOgmQANglAbgqIHeBiIDQhJIBXCRIAxhgIBTAXIACDDIgCjDIAVADIgWhgIAAg5IDthUIGUiQIAAFFImUCcIAAlRIAAFRIjqBcImtCmIAAloIAAFogArUCpIAIlmIABAAIGyiKQACAGAFAFQAFAFAIAFIAXAKQAcAJAVACIgJAEIgGAEIgLAFQhlA2g1BUIgBABIgdAJIAVAFQgMAVgKAYIABgyIk8hBIE8BBIgBAyQgiBPgCBDQgCBCAHAaIAeg0IAAB7gA0lAuIAAlnIJZB8IgIFmgAKEiCIgQgPIgKgJIA7ANIghALIAhgLIAAA5QgMgYgVgWgAmPh8gAKliNIg7gNQgagUgbgLQgTgJglgdQgmgegWgJQgPgHgPgQIgLgNQBMgCAkgcQAQgLAIgQIFyCCIjtBUgADVltQgFAFgIAFIAAAAIAAAAIgFABIASgLg");
	this.shape_12.setTransform(131.8,66.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AjjDtQARgbAXgdQAWgcA8glQArgbASgJQAPgGAFgLIAEgJIACgGIABgDIADgGQAEgKAJgKIANgSICtAfIACABQBgAeAzAnQAyAlAyBPQAOAXALAVIjQBKgArMCJIpZh9IYglbIQrEbIAAAJImUCPIlyiBQAIgQAAgVIAAgGIgBgHQgCgHgDgGIgBgCQAAgHgCgFIACgWQgBgGgGgUIgKgdQgHgPgOgKQgLgIgcgLIgFgCIgFgBQghgGgqAOIArgEIgRACIgYACIAFABQgmAGgJAFQgrAYgZAaQghAigRBBIAAgCQAAgGgCgDIAAgDQgGgNgRgKQgZgPgkAAIgEAAIgKAAQgQACgOAFIgPAGIgCACIgDACIACgKIABgNQAAgkgtgdIgIgEQgNgIgNgGQglgQgsgDIgGgBIgPgEQgOgEgMAAQgdAAgYAHQgXAHgRAOQgKAIgIAKQgIAKgHANIgGALIgCAGQgGAQgFAUIgEAUQgEAbAAAvIAAAGQgBAEACAEImyCJgAjGAtIAJgFIAIABIgXAHIAGgDgADDgcIAFAAIgPAGIAKgGgAhmhHIgdABIAAgHIAdAEIASABIAVACIgngBgAIfhqQAAhBgpgkQgSgPgVgHIAFACQAcALALAIQAOAKAHAPIAKAdQAGAUABAGIgCAWIAAAAgAGdiGIABAAIgGABIAFgBgAGgiGIgCAAIACAAIAAAAIADAAIgCAAIgBAAgAGjiGIAAAAgAGgiGIADgBIAAABIgDAAgAHPjlg");
	this.shape_13.setTransform(131.8,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.top, new cjs.Rectangle(-1,-1,265.5,105.3), null);


(lib.presnetnballons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Present = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg8OgjIMBHtgP7MAwwAM7IAAAcEApxgfHIABAAISdmlEA8PgW0IAAu4EApxgPoISenMEApygfHIgBPfMgABAvXISfrzMAAAgqwALm0XIABAAQABAAABgBQErhqEshrIJ8jjIAJPYIAAAbIAAAAIKskLALm0XIgHADIAAQfITmnoMAAbAxvIKQmjAfFr4IAAAbEggxgddIABAAIOeC/QAaAGAbAFIdDF8EghKgNEIOxDEId4GLMAAAA25IUBsyAyS6eIgHQeMgAWA16IeOHKEggxgddIgZQZMgBTA1QIPuDuEg8OgjIIbdFrEg8OgjIIAAQeIbEFmEg8OgSqMAAAA0wIZxGG");
	this.shape.setTransform(385.5,326.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("EgicAlFMABSg1PIOxDDMgAWA17gAfFujIAAgBIAAgaIgJvYIAJPYIAAAbIzmHnIAAwfIAHgCIgHACIAAQfI94mLIAHwdIA1ALIdDF8IAAAAIADgBIJXjVIJ8jjIK1j3IABAAISdmmIAAO5IyeHMIABvfIgBPfIqsEKIKskKMgABAvXIqPGigALfm8gAyZtHgAyZtHIuxjDIAawZIgaQZI7ElmIAAweIbeFrIAAAAIOeC/IgHQdgAfFu+IAAAaIAAABgAfFu+gEApxgSugAyS9kg");
	this.shape_1.setTransform(385.5,346.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("EALfAk8MAAAg25ITmnnMAAcAxuI0CMygAyvdzMAAWg17Id4GLMAAAA25gEg8OAT+MAAAg0vIbEFmMgBSA1PgEApxgdvISenMMAAAAqvIyfL0gALfx9g");
	this.shape_2.setTransform(385.5,417.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,773,655.5);


// stage content:
(lib.AnimatedCardGOrozco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_Present.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_9 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_presentnballons.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(21));

	// Actions
	this.instance = new lib.top();
	this.instance.parent = this;
	this.instance.setTransform(491.3,258.8,2.921,2.967,0,0,0,131.9,51.8);

	this.btn_Present = new lib.Present();
	this.btn_Present.name = "btn_Present";
	this.btn_Present.parent = this;
	this.btn_Present.setTransform(491.9,437.1,1,1,0,0,0,385.5,326.8);
	new cjs.ButtonHelper(this.btn_Present, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTuHQBTFmAFAYQADANAABNQAABLgvCFQg1CYgMBVQgKBSAFBqQAGCDgBAdQgDBFAHCnQAACVgjBMIAABRIALAA");
	this.shape.setTransform(566.2,221.8);

	this.top = new lib.top();
	this.top.name = "top";
	this.top.parent = this;
	this.top.setTransform(217.8,475.6,1,1,0,0,0,131.8,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AgwATIBhgl");
	this.shape_1.setTransform(604,377.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AWSzDQAADWh6CYQh5CXisAAQirAAh6iXQh5iYAAjWQAAjWB5iXQB6iYCrAAQCsAAB5CYQB6CXAADWgArlwtQAAEOiQC+QiQC/jLAAQjMAAiQi/QiQi+AAkOQAAkOCQi+QCQi+DMAAQDLAACQC+QCQC+AAEOgAzmmOQgHAcgBAQQgCALAAAVQAABJAkAZQAVAPA6AOQA1ATAbA1QAlBJADCZQADCUB0CiQArA7B+CEQAlAnAZB0QAiCeAFAPQAOAoAtBFQA1BSACAEArKSdIWwlmIPXEnIsTE+QhiAnhiAmgAWwbJIDjhZ");
	this.shape_2.setTransform(463.3,201.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCFF33").s().p("AlaHMQiQi/AAkNQAAkNCQi+QCPi/DLAAQDLAACRC/QCQC+AAENQAAENiQC/QiRC+jLABQjLgBiPi+g");
	this.shape_3.setTransform(340,94.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AkkFuQh6iYAAjWQAAjVB6iYQB5iXCrAAQCrAAB6CXQB5CYAADVQAADWh5CYQh6CXirAAQirAAh5iXg");
	this.shape_4.setTransform(564.5,79.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AzDANIWxllIPWEnIsTE8IjDBOg");
	this.shape_5.setTransform(513.8,318.5);

	this.instance_1 = new lib.presnetnballons();
	this.instance_1.parent = this;
	this.instance_1.setTransform(293.6,216.9,1,1,0,0,0,303.7,202.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AGvrKQgWBYguBFQgbAng6A/Qg1A4gUAjQgeA3AABHQAAAfAPBeQAPBdAAACQAABkjMCvQhlBVgnAiQhAA4AAAUQAAATAPAjQAPAkkBCu");
	this.shape_6.setTransform(645.4,250.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AHxAAQAAEYiSDGQiRDGjOAAQjNAAiSjGQiRjGAAkYQAAkXCRjGQCSjGDNAAQDOAACRDGQCSDGAAEXg");
	this.shape_7.setTransform(685.7,111.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AleHeQiSjGAAkYQAAkXCSjGQCRjGDNAAQDOAACSDGQCRDGAAEXQAAEYiRDGQiSDGjOAAQjNAAiRjGg");
	this.shape_8.setTransform(685.7,111.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Almr6QgHAcgBAQQgCALAAAVQAABJAkAZQAVAPA6AOQA1ATAbA1QAlBJADCaQADCUB0ChQAqA7B+CFQAlAmAZB0QAiCeAFAPQAOAoAtBGQA1BRACAE");
	this.shape_9.setTransform(373.7,238.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgdsjQBdCeAFAYQADAMAABNQAABMgvCFQg1CXgMBXQgKBRAFBqQAGCCgBAdQgDBGAHCmQAACWgjBLIAABSIALAA");
	this.shape_10.setTransform(566.2,231.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgPlRIgFAaQgFAeAAAPQAAB5AZBmQANAzANAmQAAA1gVAyQgUAyAAA5QAAA+AMAU");
	this.shape_11.setTransform(442.8,279.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AG5AAQAADdiBCcQiBCci3AAQi2AAiAicQiBicAAjdQAAjcCBicQCAicC2AAQC3AACBCcQCBCcAADcg");
	this.shape_12.setTransform(441.4,190.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099FF").s().p("Ak3F4QiAicAAjcQAAjcCAicQCCibC1gBQC3ABCBCbQCACcABDcQgBDciACcQiBCdi3gBQi1ABiCidg");
	this.shape_13.setTransform(441.4,190.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AGfAAQAADWh6CYQh6CXirAAQiqAAh6iXQh6iYAAjWQAAjVB6iYQB6iXCqAAQCrAAB6CXQB6CYAADVg");
	this.shape_14.setTransform(564.8,99.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AkkFuQh6iYAAjWQAAjVB6iYQB5iXCrAAQCsAAB5CXQB6CYAADVQAADWh6CYQh5CXisAAQirAAh5iXg");
	this.shape_15.setTransform(564.8,99.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AHrAAQAAEOiPC+QiQC/jMAAQjLAAiQi/QiPi+AAkOQAAkNCPi+QCQi/DLAAQDMAACQC/QCPC+AAENg");
	this.shape_16.setTransform(340,94.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAIBSIAAiVIggAAIAAgOIAxAAIAACjg");
	this.shape_17.setTransform(641.3,552.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAuQgHAIgHADQgHAEgIAAQgLAAgIgFQgIgFgEgKQgEgIAAgLQAAgLAEgKQAFgIAJgGQAHgGANAAQAFAAAGACIAMADIAAgLQAAgJgGgHQgEgFgKgBQgHAAgHADIgPAGIgDgOQAIgEAJgCQAIgCAHAAQAMAAAIAFQAIAFAFAJQADAIABAKIAAAzIABAQQABAHADAIIgQADgAgOgBQgGADgCAHQgCAHAAAHQAAAGACAGQABAFAEAEQAFADAGAAQAGAAAEgDQAFgDAEgEIAHgKIAAgbIgLgEQgFgBgFAAQgJAAgEAEg");
	this.shape_18.setTransform(629.5,555.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAFBRIAAhnIgfAAIAAgOIAwAAIAAB1gAADg4QgDgEAAgGQAAgGADgEQAEgEAGAAQAHAAADAEQAEAEABAGQgBAGgEAEQgDAEgHAAQgGAAgEgEg");
	this.shape_19.setTransform(615.4,552.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMA6QgJgCgIgHQgHgHgFgMQgFgLAAgSQAAgRAFgMQAEgMAHgHQAIgHAIgDQAJgEAIABQAPAAAKAHQALAHAIAMIgPAJQgEgJgHgGQgHgGgLgBQgHAAgIAFQgIAEgEALQgFAKAAARQAAASAFAKQAFALAIAEQAIAEAHAAQAGAAAGgDQAFgCAFgFIAJgJIALAMQgJAJgKAGQgKAGgNAAQgHAAgJgDg");
	this.shape_20.setTransform(603.5,555.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUA4QgJgFgGgJQgGgIgDgLQgCgLAAgLQAAgLACgLQADgLAGgJQAGgJAKgFQAJgFAMAAQAMAAAIAEQAIAFAFAHQAFAHADAIQACAIABAGIABALIAAAIIhNAAQAAAQAFAKQAFAJAHAEQAIAEAHAAQAKAAAKgDIASgJIAGAPQgLAFgKADQgMADgMAAQgMAAgJgFgAAfgJQgBgKgDgIQgEgJgHgFQgGgFgJgBQgNABgHAJQgIAKgDASIA9AAIAAAAg");
	this.shape_21.setTransform(590.1,555.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpBTIAAh3IgBgWQgBgLgDgLIAPgCIAEAOIAJgIQADgDAFgBQAFgBAFAAQAIAAAJADQAHADAIAHQAHAHAEAMQAFAMgBASQABAQgFALQgFAMgHAHQgIAHgIADQgIADgHAAQgHAAgFgBIgNgGIAAAygAgPg9QgGAGgEAIIAABAQAFAEAGACQAGADAGAAQAJAAAIgFQAHgGAEgKQAFgKAAgPQAAgOgEgKQgCgJgGgFQgFgGgFgCQgFgCgEAAQgJABgGAGg");
	this.shape_22.setTransform(577,557.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTA3QgMgFgKgJIAJgOQAFAGAGAEQAGAFAHACQAHADAGAAQAJAAAGgEQAFgFAAgJQABgHgEgFQgDgEgGgDIgLgFIgQgGQgJgFgFgGQgGgHAAgKQAAgJAFgHQAFgHAIgEQAIgEAKAAQAKAAAKADQAJAEAJAGIgIAOQgHgGgIgEQgHgDgJgBQgHABgGAEQgFAFAAAIQAAAGAEAEQADAEAGACIAJAFQAJADAJAEQAIAEAFAHQAGAHAAAMQAAAJgFAIQgFAHgIAEQgIAEgKAAQgMAAgNgGg");
	this.shape_23.setTransform(563.3,555.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUA4QgKgFgFgJQgGgIgCgLQgEgLAAgLQAAgLAEgLQACgLAGgJQAGgJAJgFQAKgFAMAAQAMAAAIAEQAIAFAFAHQAFAHACAIQADAIACAGIABALIAAAIIhOAAQABAQAEAKQAEAJAIAEQAHAEAJAAQAKAAAJgDIASgJIAHAPQgLAFgMADQgLADgLAAQgNAAgJgFgAAfgJQgBgKgDgIQgDgJgIgFQgGgFgJgBQgNABgIAJQgHAKgDASIA9AAIAAAAg");
	this.shape_24.setTransform(537.3,555.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgkA8IAAhDIgBgbIgEgWIAQAAIAEAVQAHgKAIgHQAIgHANAAQAKAAAGAGQAGAGADAJQACAJAAAJIgRAAIAAgKQAAgGgDgEQgCgFgGgBQgFABgGADQgFADgFAIQgGAHgDALQgEAKAAAOIAAAxg");
	this.shape_25.setTransform(524.6,555);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAXAuQgHAIgHADQgHAEgIAAQgLAAgIgFQgIgFgEgKQgEgIAAgLQAAgLAEgKQAFgIAJgGQAHgGANAAQAFAAAGACIAMADIAAgLQAAgJgGgHQgEgFgKgBQgHAAgHADIgPAGIgDgOQAIgEAJgCQAIgCAHAAQAMAAAIAFQAIAFAEAJQAEAIABAKIAAAzIABAQQABAHADAIIgQADgAgOgBQgGADgCAHQgCAHAAAHQAAAGACAGQACAFADAEQAFADAGAAQAGAAAEgDQAFgDAEgEIAHgKIAAgbIgLgEQgFgBgFAAQgJAAgEAEg");
	this.shape_26.setTransform(510.7,555.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeA3QgHgFgDgKQgDgIAAgLIAAhQIARAAIAABMIAAAMQABAHADAFQADAFAHAAQAIAAAIgGQAIgHAFgMQAFgNAAgTIAAgwIARAAIAAA5IAAAeQACAOADAPIgQAAIgEgWQgDAGgHAGQgGAGgHADQgGAEgIAAQgLAAgGgFg");
	this.shape_27.setTransform(484.8,555.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPA6QgIgDgHgHQgHgGgFgMQgEgMAAgSQAAgWAHgNQAHgOALgGQAKgGALABQAPAAAKAGQAJAHAFAKQAFAKABAKIACARQgBAXgGANQgHAOgLAGQgLAFgLAAQgHAAgIgDgAgPgqQgGAEgDAIQgDAHgBAIIgBAPIABAQQABAIADAHQADAHAGAFQAGAEAJAAQAJAAAGgEQAGgFAEgHQADgHABgIIABgQIgBgPQgBgIgDgHQgEgIgGgEQgGgEgJgBQgJABgGAEg");
	this.shape_28.setTransform(471.3,555.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnBJQgGgDgEgGQgEgGgCgHIANgHIAEAIQACAEADADQADAEAFAAQAEAAAEgEIAFgIIAFgIIAHgSIgmhlIASAAIAcBPIAfhPIARAAIgsBuIgGANIgGAOQgFAHgGAEQgGAFgIAAQgIAAgGgEg");
	this.shape_29.setTransform(457.4,556.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATA7IgTg+IgSA+IgSAAIgVh1IATAAIAOBXIAAAAIARg7IAPAAIARA7IAAAAIAOhXIATAAIgVB1g");
	this.shape_30.setTransform(431.6,555.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPA6QgIgDgHgHQgHgGgFgMQgEgMAAgSQAAgWAHgNQAHgOALgGQAKgGALABQAPAAAKAGQAJAHAFAKQAFAKABAKIACARQgBAXgGANQgHAOgLAGQgLAFgLAAQgHAAgIgDgAgPgqQgGAEgDAIQgDAHgBAIIgBAPIABAQQABAIADAHQADAHAGAFQAGAEAJAAQAJAAAGgEQAGgFAEgHQADgHABgIIABgQIgBgPQgBgIgDgHQgEgIgGgEQgGgEgJgBQgJABgGAEg");
	this.shape_31.setTransform(418.5,555.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAbA8IAAhNQABgGgBgGQgBgHgCgEQgEgFgHgBQgIABgHAFQgIAGgGANQgFAMAAAUIAAAxIgQAAIAAg7IgBgdQgCgPgDgNIAQAAIADAVQAHgLAKgHQALgGAMAAQAJAAAGAFQAHAFADAJQADAIAAAKIAABSg");
	this.shape_32.setTransform(405,555);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYBSIgtg2IgHAHIAAAvIgRAAIAAijIARAAIAABgIAWgXQALgNAJgOIAWAAIgTAWIgOAPIgOAQIA5BAg");
	this.shape_33.setTransform(393.2,552.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPA6QgIgDgHgHQgHgGgFgMQgEgMAAgSQAAgWAHgNQAHgOALgGQAKgGALABQAPAAAKAGQAJAHAFAKQAFAKABAKIACARQgBAXgGANQgHAOgLAGQgLAFgLAAQgHAAgIgDgAgPgqQgGAEgDAIQgDAHgBAIIgBAPIABAQQABAIADAHQADAHAGAFQAGAEAJAAQAJAAAGgEQAGgFAEgHQADgHABgIIABgQIgBgPQgBgIgDgHQgEgIgGgEQgGgEgJgBQgJABgGAEg");
	this.shape_34.setTransform(365.7,555.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBLQgHgEgEgKQgEgKAAgRIAAg9IgZAAIAAgOIAZAAIAAgkIARAAIAAAkIApAAIAAAOIgpAAIAABCIABAMQAAAGADADQADAEAHAAQAGAAAFgDQAFgDADgEIAGgKIAQAEQgEAIgGAHQgGAHgIAEQgIAEgJAAQgJAAgHgDg");
	this.shape_35.setTransform(352.5,553.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnBJQgFgDgFgGQgEgGgCgHIAOgHIADAIQACAEAEADQACAEAEAAQAGAAADgEIAFgIIAEgIIAIgSIgmhlIASAAIAcBPIAfhPIARAAIgrBuIgHANIgHAOQgEAHgGAEQgGAFgJAAQgHAAgGgEg");
	this.shape_36.setTransform(668.6,527.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAWAuQgGAIgGAEQgIADgIAAQgLAAgIgGQgIgEgEgJQgEgJAAgKQAAgMAFgKQAEgIAIgGQAJgGALAAQAHAAAGABIALAFIAAgMQAAgJgGgGQgEgHgKAAQgGAAgIADIgPAGIgDgPQAIgDAJgCQAHgDAJAAQALAAAIAGQAIAFAEAJQAFAJAAAKIAAAxIABAQQABAIADAJIgPABgAgPgBQgFADgCAHQgDAGABAJQAAAFABAFQACAGAFADQAEAEAGAAQAGAAAEgDQAFgDAEgFIAHgJIAAgbIgKgDQgGgCgFAAQgJAAgFAEg");
	this.shape_37.setTransform(655.9,525.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAdBGIgJAHQgFADgEACQgFABgGAAQgHAAgIgDQgIgEgIgHQgGgHgFgMQgEgMgBgRQABgRAFgKQAEgMAHgHQAIgIAIgCQAIgDAHgBQAHAAAFACIAMAFIAAgyIAQAAIAAB4QABALABALQABALAEAKIgQACgAgNgUQgHAFgFALQgEAJgBAQQABAUAFAKQAFALAHADQAIAEAEAAQAJAAAHgGQAGgGADgIIAAhAQgEgFgGgCQgGgDgGAAQgIAAgIAFg");
	this.shape_38.setTransform(642.7,523.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAJBSIAAiVIghAAIAAgOIAxAAIAACjg");
	this.shape_39.setTransform(614.9,523.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAXAuQgGAIgIAEQgHADgIAAQgLAAgIgGQgIgEgEgJQgEgJAAgKQAAgMAFgKQAEgIAIgGQAJgGAMAAQAGAAAFABIAMAFIAAgMQAAgJgFgGQgGgHgJAAQgHAAgHADIgOAGIgEgPQAIgDAIgCQAIgDAIAAQAMAAAIAGQAIAFAFAJQAEAJAAAKIAAAxIABAQQABAIADAJIgPABgAgPgBQgFADgCAHQgCAGgBAJQAAAFACAFQADAGADADQAEAEAHAAQAGAAAEgDQAFgDAEgFIAHgJIAAgbIgLgDQgFgCgFAAQgIAAgGAEg");
	this.shape_40.setTransform(603.1,525.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAFBRIAAhnIggAAIAAgOIAxAAIAAB1gAAEg4QgEgEAAgGQAAgGAEgEQADgEAHAAQAFAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_41.setTransform(589,523.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMA6QgJgCgIgHQgHgHgFgMQgFgLAAgSQAAgRAFgMQAEgMAHgHQAIgHAIgDQAJgEAIABQAPAAAKAHQALAHAIAMIgPAJQgEgJgHgGQgHgGgLgBQgHAAgIAFQgIAEgEALQgFAKAAARQAAASAFAKQAFALAIAEQAIAEAHAAQAGAAAGgDQAFgCAFgFIAJgJIALAMQgJAJgKAGQgKAGgNAAQgHAAgJgDg");
	this.shape_42.setTransform(577.1,525.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUA4QgJgFgGgJQgGgIgCgLQgDgLAAgLQAAgLADgLQACgLAGgJQAGgJAKgFQAJgFAMAAQAMAAAIAEQAIAFAFAHQAFAHADAIQADAIAAAGIABALIAAAIIhNAAQAAAQAFAKQAFAJAHAEQAHAEAIAAQAKAAAKgDIARgJIAHAPQgLAFgKADQgLADgNAAQgLAAgKgFgAAfgJQAAgKgEgIQgEgJgGgFQgHgFgJgBQgNABgHAJQgIAKgDASIA9AAIAAAAg");
	this.shape_43.setTransform(563.7,525.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgpBTIAAh3IgBgWQgBgLgEgLIAQgCIAEAOIAJgIQAEgDAEgBQAEgBAGAAQAIAAAJADQAIADAGAHQAIAHAEAMQAEAMAAASQAAAQgEALQgFAMgHAHQgIAHgIADQgIADgHAAQgGAAgHgBIgLgGIAAAygAgPg9QgGAGgDAIIAABAQAEAEAGACQAGADAGAAQAJAAAHgFQAIgGAFgKQAEgKAAgPQAAgOgDgKQgDgJgFgFQgFgGgFgCQgGgCgEAAQgJABgGAGg");
	this.shape_44.setTransform(550.6,527.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSA3QgNgFgKgJIAJgOQAFAGAGAEQAGAFAHACQAHADAHAAQAIAAAFgEQAHgFAAgJQgBgHgDgFQgEgEgFgDIgMgFIgQgGQgHgFgGgGQgFgHgBgKQABgJAEgHQAFgHAIgEQAIgEAJAAQAMAAAIADQAKAEAIAGIgGAOQgHgGgJgEQgHgDgJgBQgHABgFAEQgGAFAAAIQAAAGADAEQAFAEAEACIAKAFQAJADAJAEQAIAEAFAHQAGAHAAAMQAAAJgFAIQgFAHgIAEQgJAEgIAAQgNAAgMgGg");
	this.shape_45.setTransform(536.9,525.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAXAuQgHAIgHAEQgHADgIAAQgLAAgIgGQgIgEgEgJQgEgJAAgKQAAgMAEgKQAFgIAJgGQAHgGANAAQAFAAAGABIAMAFIAAgMQAAgJgGgGQgEgHgKAAQgHAAgHADIgPAGIgDgPQAIgDAJgCQAIgDAHAAQAMAAAIAGQAIAFAEAJQAEAJABAKIAAAxIABAQQABAIADAJIgQABgAgOgBQgGADgCAHQgCAGAAAJQAAAFACAFQACAGADADQAFAEAGAAQAGAAAEgDQAFgDAEgFIAHgJIAAgbIgLgDQgFgCgFAAQgJAAgEAEg");
	this.shape_46.setTransform(510.7,525.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAdBGIgJAHQgFADgEACQgFABgGAAQgHAAgIgDQgIgEgIgHQgGgHgFgMQgEgMgBgRQABgRAFgKQAEgMAHgHQAIgIAIgCQAIgDAHgBQAHAAAFACIAMAFIAAgyIAQAAIAAB4QABALABALQABALAEAKIgQACgAgNgUQgHAFgFALQgEAJgBAQQABAUAFAKQAFALAHADQAIAEAEAAQAJAAAHgGQAGgGADgIIAAhAQgEgFgGgCQgGgDgGAAQgIAAgIAFg");
	this.shape_47.setTransform(484.3,523.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUA4QgJgFgGgJQgGgIgDgLQgCgLAAgLQAAgLACgLQADgLAGgJQAGgJAKgFQAJgFAMAAQAMAAAIAEQAIAFAFAHQAFAHADAIQACAIABAGIABALIAAAIIhNAAQAAAQAFAKQAFAJAHAEQAIAEAHAAQAKAAAKgDIASgJIAGAPQgKAFgLADQgMADgMAAQgMAAgJgFgAAfgJQgBgKgDgIQgEgJgHgFQgGgFgJgBQgNABgHAJQgIAKgDASIA9AAIAAAAg");
	this.shape_48.setTransform(471.3,525.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUA4QgKgFgFgJQgGgIgCgLQgEgLAAgLQAAgLAEgLQACgLAGgJQAGgJAJgFQAKgFAMAAQAMAAAIAEQAIAFAFAHQAFAHACAIQADAIACAGIABALIAAAIIhOAAQABAQAEAKQAEAJAIAEQAHAEAJAAQAKAAAJgDIASgJIAHAPQgLAFgMADQgLADgLAAQgNAAgJgFgAAfgJQgBgKgDgIQgDgJgIgFQgGgFgJgBQgNABgIAJQgHAKgDASIA9AAIAAAAg");
	this.shape_49.setTransform(458.1,525.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAbA8IAAhNIAAgNQgBgGgCgFQgEgEgHgBQgIAAgHAGQgIAGgGAMQgFAOAAATIAAAxIgQAAIAAg7IgBgdQgCgPgDgOIAQAAIADAWQAHgLAKgGQALgHAMAAQAJAAAGAFQAHAFADAIQADAJAAAKIAABSg");
	this.shape_50.setTransform(444.6,525.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBLQgHgEgEgKQgEgKAAgRIAAg9IgZAAIAAgOIAZAAIAAgkIARAAIAAAkIApAAIAAAOIgpAAIAABCIABAMQAAAGADADQADAEAHAAQAGAAAFgDQAFgDADgEIAGgKIAQAEQgEAIgGAHQgGAHgIAEQgIAEgJAAQgJAAgHgDg");
	this.shape_51.setTransform(418.5,523.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFAcIgJgcIAAgbIAdAAIAAAbIgJAcg");
	this.shape_52.setTransform(405.3,518.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAbA8IAAhNIAAgNQAAgGgDgFQgDgEgIgBQgIAAgHAGQgIAGgGAMQgFAOAAATIAAAxIgRAAIAAg7IAAgdQgCgPgDgOIAQAAIAEAWQAGgLAKgGQAKgHAMAAQAKAAAHAFQAGAFADAIQADAJAAAKIAABSg");
	this.shape_53.setTransform(391.8,525.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPA6QgIgDgHgHQgHgGgFgMQgEgMAAgSQAAgWAHgNQAHgOALgGQAKgGALABQAPAAAKAGQAJAHAFAKQAFAKABAKIACARQgBAXgGANQgHAOgLAGQgLAFgLAAQgHAAgIgDgAgPgqQgGAEgDAIQgDAHgBAIIgBAPIABAQQABAIADAHQADAHAGAFQAGAEAJAAQAJAAAGgEQAGgFAEgHQADgHABgIIABgQIgBgPQgBgIgDgHQgEgIgGgEQgGgEgJgBQgJABgGAEg");
	this.shape_54.setTransform(378.9,525.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAdBGIgJAHQgFADgEACQgFABgGAAQgHAAgIgDQgIgEgIgHQgGgHgFgMQgEgMgBgRQABgRAFgKQAEgMAHgHQAIgIAIgCQAIgDAHgBQAHAAAFACIAMAFIAAgyIAQAAIAAB4QABALABALQABALAEAKIgQACgAgNgUQgHAFgFALQgEAJgBAQQABAUAFAKQAFALAHADQAIAEAEAAQAJAAAHgGQAGgGADgIIAAhAQgEgFgGgCQgGgDgGAAQgIAAgIAFg");
	this.shape_55.setTransform(365.5,523.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgeA2QgHgEgDgJQgDgJAAgKIAAhRIAQAAIAABMIABANQABAGADAFQADAFAHAAQAIAAAIgGQAHgGAGgNQAFgNABgTIAAgwIAQAAIAAA5IABAdQAAAQAEAPIgQAAIgDgXQgFAGgFAGQgHAGgHAEQgHADgHAAQgLAAgGgGg");
	this.shape_56.setTransform(339.6,525.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPA6QgIgDgHgHQgHgGgFgMQgEgMAAgSQAAgWAHgNQAHgOALgGQAKgGALABQAPAAAKAGQAJAHAFAKQAFAKABAKIACARQgBAXgGANQgHAOgLAGQgLAFgLAAQgHAAgIgDgAgPgqQgGAEgDAIQgDAHgBAIIgBAPIABAQQABAIADAHQADAHAGAFQAGAEAJAAQAJAAAGgEQAGgFAEgHQADgHABgIIABgQIgBgPQgBgIgDgHQgEgIgGgEQgGgEgJgBQgJABgGAEg");
	this.shape_57.setTransform(326.1,525.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIBPIAAhDIgohaIATAAIAdBIIAfhIIASAAIgpBaIAABDg");
	this.shape_58.setTransform(312.5,523.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,1,1).p("AgwASIBhgk");
	this.shape_59.setTransform(571.5,339.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AzDANIWxllIPWEnIqxEWIhiAnQhiAmhhAngAJ1DAIDkhZ");
	this.shape_60.setTransform(513.5,318.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AzDAMIWxlkIPWEnIqxEWIhiAmIjDBOg");
	this.shape_61.setTransform(513.5,318.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_Present,p:{scaleX:1,scaleY:1,x:491.9,y:437.1}},{t:this.instance}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.btn_Present,p:{scaleX:0.318,scaleY:0.35,x:513.4,y:398.3}},{t:this.top,p:{x:217.8,y:475.6}},{t:this.shape}]},9).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_3},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.btn_Present,p:{scaleX:0.318,scaleY:0.35,x:513.6,y:398.8}},{t:this.top,p:{x:218.5,y:476.2}}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(616.6,487.6,773.8,661.2);
// library properties:
lib.properties = {
	id: '46DBAA970EEA83409503509CDC99AA10',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#FFCC99",
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
an.compositions['46DBAA970EEA83409503509CDC99AA10'] = {
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