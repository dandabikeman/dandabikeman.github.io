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


(lib.yellowglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFB00").s().p("AGOFBQiGgehVhcQg7hBgXhWQgDgFgFgbQgHgcgRgiQgTglglgEQgcgDgcARQgTALgRAxQgJAYgEAbQgXBQg4BHQhRBeiKAdQjCAoh8hDIgigZQhLg2guhnQgphNgBhbQgugkAXg/QAJgcApgDQAxhoCFgUQChgXCuAXIGRAZIElgXICkgHQCfgXCJA3QAqAQAwBTQBOAigUAtQgVAtgOAJIgOBOQgUBkgtBFQgyBThyApQhDAVhMAAQg5AAg9gLgAK1DzIlzAAQDHBQCshQgAlGDzIlzAAQCrBQDIhQgAD7DBIH0AAQAtgbgegKIoiAAQgNAcAsAJgArvDBIHzAAQAsgJgMgcIoiAAQgeAKAtAbgAC0BvIJuAAQAZgYgTgMIp3AAQgZAAAcAkgAsiBvIJtAAQAdgkgZAAIp4AAQgTAMAaAYgACTAdIKjAAQAagjgaAEIqjAAQgXAAAXAfgAs2AdIKjAAQAXgfgXAAIqjAAIgFgBQgTAAAYAggACBg2ILCAAQAVgjgxAAIqmAAQgOAKAOAZgAtDg2ILCAAQANgZgNgKIqmAAQgxAAAVAjgACBiFIK3AAQABgrgoAGIqRAAQgWASAXATgAs5iFIK4AAQAXgTgWgSIqRAAIgKgBQgeAAAAAmgACZjYIJ7AAQiEgqieAAQifAAi6AqgAsUjYIJ6AAQi6gqieAAQifAAiDAqg");
	this.shape.setTransform(-0.007,0.0426);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowglasses, new cjs.Rectangle(-94,-33.2,188.1,66.5), null);


(lib.witchhat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F4740D").s().p("AiaCNQi2g6gfhfIAAAAIBAiLQBTBBB6ATQBdAVBygIQBpgHBkgmQADgCAAgGIAsB/IAGAqQhsA6huASQhUAOhQAAQhHAAhEgLg");
	this.shape.setTransform(2.4,35.9023);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmMJaIgMgyIg3AgQjHg6ikiEQDghFEDAVIAAAAQAfBgC2A6QCRAWCegZQBugSBsg6IgGgqQDxgODJBbQkOCPlUA7IgUggIgOAcQhJAEhEAAQj6AAi8g4gAhKEjQh7gThShBIAAAAIBTjgQA8h8BCh1IAig7Igkg1IA1ghIg2haICaikICsAdIiWAZIAAAqIg3AAIC4DKIg7CQICoHSQAAAGgDACQhkAmhpAHQggACgeAAQhNAAhEgPg");
	this.shape_1.setTransform(0.025,0.0339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.witchhat, new cjs.Rectangle(-82.6,-65.7,165.3,131.5), null);


(lib.tealshoeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AF2BPQAjg4hDhWQgQgUgVgWQhzg5hLA2QgtAhgdBLQhOARgDgrAA/h7QgBgrg5AHQgOABgUAGQhVA3AIAoQADAOAOAMQAYAVAZgQQgBgLAEgQQAwhEA0gCQAaAAAaAPAAHChQB6AfBxguIB0gwQAKgJAGgKQArAzhLA5QgMAJgPAJQjSBTh9hDQilg/iLhMQhWhJAdgyAAHChQAOhrAUg2Ahoi+QAVg9g3ABQg4Brh6hLQhdBuAcBDQAHARAPAOIEyCXQAfAMAdAIAhoi+QhvBlAzAoQBAAcgGgkAAFifQgJhLhkAs");
	this.shape.setTransform(-0.0081,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009773").s().p("AB3C6IkwiYQgPgOgHgRQgchCBdhtQB6BLA3hsQA3gBgVA+QhuBlAyAnQBAAbgGgiQADANANALQAZAVAZgQQADAsBPgSQgUA3gOBrQgegHgggNg");
	this.shape_1.setTransform(-17.4003,-4.5008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUDHQilg/iLhMQhWhIAdgzQAHARAPAOIEyCXQAfAMAdAIIADABIADABQAuAKAtAAIAAAAIAAAAQBBAAA/gXIABAAIAEgCIADgBIACgBIB0gwQAKgIAGgLQArAzhLA5IgbASQh1AuhaAAQhJAAg3gegABoCXQgtAAgugKIgDgBIgDgBQAOhrAUg2QAdhLAtghQgtAhgdBLQhOASgDgsQgZAQgYgVQgOgMgDgOIgBgGQAAgmBOgzQAUgGAOgBQgOABgUAGQhOAzAAAmIABAGQAGAkhAgcQgzgnBvhmQBkgsAJBLQA5gHABArQg0ACgwBEQgDAOAAAKIAAADIAAgDQAAgKADgOQAwhEA0gCQAaAAAaAPQBLg2BzA5QAVAWAQAUQBDBWgjA4QgGALgKAIIh0AwIgCABIgDABIgEACIgBAAQg/AXhBAAIAAAAIAAAAg");
	this.shape_2.setTransform(-0.0081,2.2005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tealshoeR, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.tealshoeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgEifQAOABAUAGQBVA3gIAoABpi+QBvBlgzAoQhAAcAGgkQgDAOgOAMQgYAVgZgQQABgLgEgQQgwhEg0gCQgaAAgaAPQAtAhAdBLQBOARADgrAF+gpQgHARgPAOIkyCXQgfAMgdAIQh6AfhxguIh0gwQgKgJgGgKQgxA7BsBDQDSBTB9hDQClg/CLhMQBWhJgdgygABpi+QgVg9A3ABQA4BrB6hLQBdBugcBDAg+h7QABgrA5AHQAJhLBkAsAl1BPQgrhFBwhzQB0g5BKA2AgGChQgOhrgUg2");
	this.shape.setTransform(0.0121,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009773").s().p("AjWAsQBPASADgsQAZAQAZgVQANgLADgNQgGAiBAgbQAygnhuhlQgVg+A3ABQA3BsB6hLQBdBtgcBCQgHARgPAOIkwCYQggANgeAHQgOhrgUg3g");
	this.shape_1.setTransform(17.4003,-4.5008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak6C3QhshDAxg7QgrhEBwh0QB0g5BKA2QAtAhAdBLQgdhLgtghQAagPAaAAQABgrA5AHQAOABAUAGQBOAzAAAmIgBAGIABgGQAAgmhOgzQgUgGgOgBQAJhLBkAsQBvBmgzAnQhAAcAGgkQgDAOgOAMQgYAVgZgQIAAgDQAAgKgDgOQgwhEg0gCQA0ACAwBEQADAOAAAKIAAADQgDAshOgSQAUA2AOBrIgEABIgCABQguAKgtAAIAAAAIAAAAQhBAAg/gXIgBAAIgEgCIgDgBIgCgBIh0gwQgKgIgGgLQAGALAKAIIB0AwIACABIADABIAEACIABAAQA/AXBBAAIAAAAIAAAAQAtAAAugKIACgBIAEgBQAdgIAfgMIEyiXQAPgOAHgRQAdAzhWBIQiLBMilA/Qg3AehJAAQhbAAh0gug");
	this.shape_2.setTransform(0.0121,2.2005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tealshoeL, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.tealbow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJXlkIhYhbQgZgigWgZQgOgQgNgNQgegegVgKQgPgGgKAEQgDABgDABQgpAQgjAYQgTANgRAQQgfAcgaAkIhrC/QAYAdALAcQAHAQADAQQADANgBAMQAAAGAAAFQgEAggXAcQgJAMgNALIBKAuIAbChQATB3AoBoQAMAiAPAfQAjBHAwA4QANhLAQg0QAMgpAPgZQBhAOBKgcIifkRQB+AQBUguQADgCACgCQAZgZgZhCQgFgOgIgRQgFgHAAgLQAAgHACgMIAGglQACgNABgKQAAgNgDgTQAOgfghgaQgTgPgjgOQhIgLhLARIg3AwQhiBLh3gUAB+iJQASAFAQAGQCPA5BwCoAAQgXQAFgHADgJQAGglgQgSAA7glQAGgDAHgEQANgJAOgNAhFjVQBFAhAkA2QALARAIASQALAXgEAVQgBAFgCAFAAQgXQAVgCAWgMADXjcQBvg3gmgpQgzgVg5BIIhCBHAIjkQQAmgaAQgTQAagdgagJQgBgBgBAAQhKgUhKBDIgzArAJsi6QgFAJgOACQgfAFhQgcQhQgYhBAEAEDDPQAdAuAggMQAhgZgdhAQgthGg3ggIhJgvAhFjVIgRgQIiYiNQinh+g9AGQhGABgGAcQgHBEgbAfQgyBAgMBOQApg2D8BTQAEABAEABQgFABgEABIiHAsQgvAJgSgFQgCAGgBAHQgDAKgBAKQgDApAOA0IA1BzQAiBYArgHQhHBQgqBwQBYgcBEAAQAQA8AVAtQAWAuAaAeQAKgoAOgkQAphqBLhQQB1iHAKiLQABgTAAgTAophqQgbgIgTgMQgygfAJgzQABgGABgGAjfgoQhSgGAXg9QAJgLAOgIQA+giCjAbQADACACAFQABAAAAAAQABADABADQAAAAABAAQAIAYABAyAgiiiQAGASgBASAhFjVQAZAaAKAZQg4gXg6gJQhdgPhgAUAhTjpQAagZAlAOQAZgzBKAsAnClSQCtA6CBBWAmcC3QALgCAhgLQDthUBziEAm4g8QBIBXBUABQBbAFBCgpAgRgIQAVACAMgRAgUj0QAWAKAdAZ");
	this.shape.setTransform(0.0132,0.008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009773").s().p("ApNBrQgygfAIgzIACgMQApg1D9BSIgBAEIiHAsQgvAJgTgFIgDANQgCAKgBAKQgbgIgTgMgAH0AjQhQgYhCAEIA4gvIAKgCQAogIAnAAIABAAIAAAAQAYAAAYADIAAAAIAGABIADAAQAjAOASAPQAhAZgOAfQgEAJgPACIgKABQggAAhEgYgAHMhLQBKhDBLAUIABABQAaAJgaAdQgQATglAaIgDAAIgGgBIAAAAQgYgDgYAAIAAAAIgBAAQgnAAgoAIIgKACg");
	this.shape_1.setTransform(-0.9032,-23.3961);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21C2A2").s().p("AEHHEQgPgfgMgiQgphogSh3IgcihIBKAvQA3AgAsBGQAOAeAAAWQAAAYgRANQgHADgHAAIAAAAIAAAAQgYgBgVggIAAAAIgCgDIgBgBIABABIACADIAAAAQAVAgAYABIAAAAIAAAAQAHAAAHgDQARgNAAgYQAAgWgOgeQgshGg3ggIhKgvIhKguQANgLAJgMQgOANgNAJIgJgDIABgLQAAgQgIgRQgJgSgLgRQgkg2hEghQBEAhAkA2QALARAJASQAIARAAAQIgBALIgEAKQgWAMgUACQAFgHADgJQABgKAAgJQAAgXgLgNQALANAAAXQAAAJgBAKQgDAJgFAHQgMARgWgCIABgcIAAgKIAAAKIgBAcQgJCLh2CHQhKBQgpBqQgOAkgLAoQgagegVguQgVgtgRg8QhDAAhZAcQAqhwBIhQQgrAHgjhYIg1hzQgOg0AEgpQABgKACgKIADgNQATAFAvgJICHgsIAIgCIgHgCQj9hTgpA2QAMhOAzhAQAagfAHhEQAHgcBFgBQA+gGCmB+ICYCNIASAQIgSgQIAEgEQAagZAkAOQAZgzBLAsIBri/QAZgkAfgcQASgQATgNQAjgYApgQIAGgCQAKgEAOAGQAVAKAfAeQAMANAOAQQAWAZAaAiIBYBbQhLgUhKBDIgyArIg4AwQBCgEBQAYQBPAcAfgFQAPgCAEgJQADATAAANQAAAKgDANIgGAlQgCAMAAAHQABALAFAHIAMAfQAZBCgZAZIgEAEQhVAuh9gQICeERQhJAchigOQgOAZgNApQgQA0gMBLQgxg4gihHgAlxCqQghALgLACQALgCAhgLQDshUBziEQhzCEjsBUgACeh+QCQA5BwCoQhwioiQg5QgPgGgSgFQASAFAPAGgAkKAdQBKAAA6ghIABgBIACgBIACgBIABgBIgBABIgCABIgCABIgBABQg6AhhKAAIgBAAIAAAAIgQAAIgBAAIgCgBQhUgBhIhXQBIBXBUABIACABIABAAIAQAAIAAAAIABAAgAjggoQhAgEAAgmQAAgLAFgOQAJgLAOgIQAjgTBCAAIAAAAIABAAQAwAABBAKIAAAAIACABIABAAIADAAIAEABQADACACAFQgCgFgDgCIgEgBIgDAAIgBAAIgCgBIAAAAQhBgKgwAAIgBAAIAAAAQhCAAgjATQgOAIgJALQgFAOAAALQAAAmBAAEgAgeh+IADAGIAAAAQAJAYAAAyQAAgygJgYIAAAAIgDgGIAAAAIAAgFQAAgQgGgPQgJgZgZgaQAZAaAJAZQg4gXg5gJQiChWisg6QCsA6CCBWIgCAAIgCgBIAAAAIgDAAIgDgBQgigEgjAAIAAAAIgBAAQg0AAg2ALIgEAAIAEAAQA2gLA0AAIABAAIAAAAQAjAAAiAEIADABIADAAIAAAAIACABIACAAQA5AJA4AXQAGAPAAAQIAAAFIAAAAgAB9iJIgBALQgEAggXAcQAXgcAEggIABgLIAAgEQAAgKgCgLQgDgQgHgQQgMgcgXgdQAXAdAMAcQAHAQADAQQACALAAAKIAAAEgACwieQBaAABNg8QhNA8haAAIgBAAIAAAAQgWAAgXgEIgCAAIgCgBIACABIACAAQAXAEAWAAIAAAAIABAAgACzkJIhCBHIBChHIABgBIAAAAIACgCQAqg0AngBIABAAIAAAAQALAAALAFQAKAKAAAMQAAAhhSApQBSgpAAghQAAgMgKgKQgLgFgLAAIAAAAIgBAAQgnABgqA0IgCACIAAAAIgBABIAAAAgAAdjRQgcgZgXgKQAXAKAcAZgAgeh+IAAAAgAgkiiIAAAAgAiVjCIAAAAg");
	this.shape_2.setTransform(0.175,0.008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tealbow, new cjs.Rectangle(-65.2,-58.9,130.5,117.9), null);


(lib.seed_black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgCCKQhXgJApiFQAMgqAYgyIAUgpIASAtQAUA2AJArQAcCFhMAAIgJAAg");
	this.shape.setTransform(-0.0072,0.0241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.seed_black, new cjs.Rectangle(-6.2,-13.8,12.5,27.700000000000003), null);


(lib.regularseed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFBBD").s().p("AgCCKQhYgJApiFQAMgqAYgyIAVgpIASAtQATA2AKArQAcCFhMAAIgJAAg");
	this.shape.setTransform(0.0064,0.0241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.regularseed, new cjs.Rectangle(-6.2,-13.8,12.5,27.700000000000003), null);


(lib.purplesunglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGlkYQChgQBUAGQAHABAHABQBUAIAhALQAbAJAWATQAFAEAEAEQAaAYAQAnQAOAggHBxQgCASgBAUQgEAqgKAiQgBADAAACQgaBSg/AmQhbA4gmAKQgmAJg9gEQhAgDgugKQg7gMgrgYQgSgKgQgMQgkgageglQgTgZgQggQgBgCgBgDQgQghgNgpQgDgKgCgIQgCgLgBgLQgFgnAIgoQACgKADgKQA4iMCugQgAq7kjQC6gEBaARQBaAPAhALQAhALAaAZQAaAYAQAnQAPAmAFBXQAAABABACQACA5giA5QgBADgCACQgPAZgWAZQgmArgcAbQgcAcgTANQgmAZhdAIQhKAHgygFQgNgBgLgCQgLgCgKgDQgqgKgjgTQgdgQgagXQgWgUgTgYQgbgkgPgtQgJgXgFgaQgFgVgCgTQgCgNgBgMQgFgqACgoQAVizC5gFg");
	this.shape.setTransform(-6.4492,-4.2929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AP5lfQiNgwiDgTQidgYiNATQgSACgSAEQghAGglAIQgkAJgnAMIjUA5QhsAsjXhMIjYg6QhggThtAFQhvAAhnASQhwAShlAnIgKCkIBJA7QgDAgABAfQABA6ALA4QAHAoAMAoQAIAXAJAVQABAAAAABQAiBKA9AxAP5lfIBvBgIgLCbAPxi2Qg9gFgPAwQgBAjgFAkQgIA5gSA5QgBADAAACQgGASgHATIgVA0QgIAQgJAPQgqBGg/ApQhrAyhzAJQhjAFhmgSQhWgQgvgfQAQAUBaBEQAtAXA4AOQBZAYB3ACQBJADBXgdQAogNAsgUQBAgnAphDQAZgqARg0QAAgBABgBQATg5ALhEQAHgrAEgvQACgJAEgIQACgEADgEQAVgcAxgDIhshSIAIipAAHgqQAMAvAPApQABADABACQAZBFAeAzQAPAaAQAVQAfAnAjAYAxni+QBOALgFAwAAHgqQgEgOgEgMQgehWgpANQgXADghBGQgRAjgUA1IgTAlQgYAtgYAnQgKAQgJAOQhBBhgrANQhlAkhSAQQhHAPhGgGQgKgBgKgCQgNgCgMgBQg4gIgGgBIh6ghAAHgqQgUAugTAqQgBADgBACQgfBEgbA0QgEAIgEAIQgvBZgrAnQgrAmglAYQg9Anh5AKQgIABgJAAQhIAFhPgMQgfgEgggHQgOgDgOgEQgIgCgJgCQgpgMghgPQg2gYglghQgKgJgJgL");
	this.shape_1.setTransform(0,0.0276);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E1D78").s().p("AJgE3Qh3gChZgYQg4gOgsgXQhbhEgQgUQAwAfBVAQQBnASBigFQB0gJBrgyQA+gpAqhGQAJgPAIgQIAWgzIAMglIABgFQASg6AIg5QAFgkACgjQAOgwA9AFIBsBSQgxADgVAcIgEAIQgFAIgCAJQgEAwgHArQgLBEgTA4IgBACQgQA0gZAqQgqBDhAAnQgsAUgoANQhQAbhEAAIgMgBgApmErQgfgEgggHIgcgHIgRgEQgpgMghgPQg3gYgkghQgLgJgIgLIB6AhIA+AJIAZADIAUADQBGAGBHgPQBSgQBkgkQArgNBBhhIATgeQAZgmAXgtIAUglQATg2ASgjQAghGAYgDQApgNAdBWIAIAaIgmBZIgDAFQgeBEgbAzIgIAQQgvBZgrAnQgrAmglAYQg9Anh5AKIgRABIgqACQg1AAg4gJgAxhk3QBOALgFAwg");
	this.shape_2.setTransform(-0.55,12.1101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("ApqEiIgYgDIgVgFQgqgKgjgTQgdgQgagXQgWgUgTgYQgbgkgPgtQgJgXgFgaQgFgVgCgTIgDgZQgFgqACgoQAVizC5gFQC6gEBaARQBaAPAhALQAhALAaAZQAaAYAQAnQAPAmAFBXIABADQACA5giA5IgDAFQgPAZgWAZQgmArgcAbQgcAcgTANQgmAZhdAIQgrAFgjAAQgZAAgVgDgAI5EdQhAgDgugKQg7gMgrgYQgSgKgQgMQgkgageglQgTgZgQggIgCgFQgQghgNgpIgFgSQgCgLgBgLQgFgnAIgoIAFgUQA4iMCugQQChgQBUAGIAOACQBUAIAhALQAbAJAWATIAJAIQAaAYAQAnQAOAggHBxIgDAmQgEAqgKAiIgBAFQgaBSg/AmQhbA4gmAKQgbAGgnAAIghgBg");
	this.shape_3.setTransform(-6.4492,-4.2929);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8328C3").s().p("AqqGCIgVgCIgYgEIg+gJIh7ghQg9gwghhKIgCgCQgJgVgHgXQgNgngHgoQgLg6gBg5QAAgfACgfQAFgwhOgLIAKilQBlgmBwgTQBngRBwAAQBsgFBgASIDYA6QDYBNBrgtIDTg5QAogMAjgIQAlgJAigGIAjgGQCOgSCcAXQCEATCNAxIBvBfIgLCbIhshSIAIioIgICoQg9gEgPAwQgBAjgFAjQgIA5gSA6IgCAFIgMAkIgVA0QgJARgIAPQgrBFg+AqQhrAyh0AIQhiAGhngSQhVgQgwgfQgigZgfgnQgRgVgOgZQgeg0gZhEIgCgFQgPgqgNgwIgHgZQgehVgpANQgXACghBGQgRAjgUA1IgTAmQgYAtgYAnIgTAeQhBBhgrAMQhlAkhSAQQgyALgxAAQgVAAgUgCgAr7khQi5AFgVCzQgCAoAEApIADAYQADAVAEAVQAGAaAJAXQAPAtAaAjQAUAZAWAUQAZAWAeAQQAjAUAqAKIAVAEIAYAEQAxAFBKgHQBdgJAngZQASgMAdgcQAcgcAlgrQAXgYAPgZIADgFQAig6gDg5IAAgDQgFhXgQgmQgPgmgagYQgagZghgLQghgLhagQQhIgNiDAAIhJABgAFlkXQivARg3CLIgFAVQgIAnAFAnQAAALADALIAFATQANApAQAhIACAFQAQAgATAYQAeAmAjAaQARAMASAJQArAZA6AMQAvAJBAAEQA9ADAmgJQAlgKBcg3QA/gnAahRIABgFQAKgjADgpIAEgnQAGhwgNggQgQgngagZIgJgIQgXgSgagKQghgKhUgJIgPgBQgYgCgeAAQhMAAhyALg");
	this.shape_4.setTransform(0,-4.4114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purplesunglasses, new cjs.Rectangle(-113.7,-44.2,227.5,88.5), null);


(lib.piratehat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgBgOQgJgSgIgJQgFgGgHgCQgIgCgGACQgJAFgFAOQgEASAJATQAIASAQAOQAPANAMABQARACARgNQAOgLAIgSQAHgQgBgSQgCgMgEgIQgIgLgKAAQgHAAgMAIQgOANgEARg");
	this.shape.setTransform(-5.5937,28.8133);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Ak+h3IgBAAQgiAFgUAYQgPARgDAbQgDAYAHAYQAOAzArAiQArAjA0ACQAsACAYgYQAZgZgDgrQgCglgVgjQgUghghgYQgQgNgQgHQgCAAgBgBQgGgCgGgCQgWgGgSAGQgFAAgFABgAFGhqQgRgBghAFAFGhqQgpgHgsAMQhAARgrAvQgcAfgDAbQgDAWAMAWQAKAVAUAPQAkAZA1gEQAxgDArggQArgfASgvQALgbgCgZQgDgdgSgRQgEgDgEgDQgPgKgWgBQgBAAAAAAgAFshfQgTgHgTgE");
	this.shape_1.setTransform(-5.279,9.8763);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0033").ss(3,1,1).p("AAaACQgbgFgYAC");
	this.shape_2.setTransform(-33.6,-2.0485);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJUGbQi9jFgQgSQBShlAAiLQgBiNhThlQBkhSBQg/QAfAlA3gSQA4gSADgxQAEgwg0gZQg1gZgkAhQAPgsgngmQgnglgtAPQgrAQgFA3QgGA2AnAYIh/B3QiOhMimAAQimAAiMBMIi0iQQAtgXgEg8QgFg7gvgRQgvgRgpAsQgpAsAUAuQg0gSgoAzQgpAzAcAvQAcAvBAgNQBAgNAJg2QAHALAKAOQAbAnArA8IATAaQAPAUALAPQhyBeABCmQABClB1BcQhVBHg5AuQg5AtgXAAQgYgBgvgLQghgIgVADQgkAFgWAhQgXAhAIAjQAKAkAkASQAkATAhgOQgdAwAoA1QAnA2A2gOQA3gNAJhCQAJhCgxgbIDeikQgSAlAQAsQAQArAnAPQAmAPAqgTQAqgTANgoQAIA1AvAiQAuAjA1gHQA0gFAlgtQAigoABgxQAAgEAAgEAJcGdQAYgaAjgIQAjgJAhALQAgALAWAcQAXAcAEAhQADAZgIAXQgIAYgSAPQgaAVgqgBQgcgBgsgMQAMAbgKAfQgKAfgaAOQgbAPgfgKQgfgJgMgcQgNgbAOgeQANgeAdgGQhch7iChSQgEgHgEgGAB5GRQACAtAqAgQAuAjAwgOQAxgPAUg2QAQgtgRgl");
	this.shape_3.setTransform(-3.7968,4.9572);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AoRR9QnFgfmfiDQj3lngTmDQCegKCoBJQFzBbAvmXIAAgDQgsjzADjqQgtjvERikQETi0ExhuQhEDdArC2QAmDfESghQDUgngtnmQDuA9C0BgQFxCwhNHaQhKGJBABZQBjDyEygeQC5gtBJAIIgEAeQg9FQitEtQkwBmmCAhQk4Alk9AAQk8AAlBglgArQJ/QAnA2A2gOQA2gNAJhCQAJhCgwgbIDeikQgTAlARAsQAQArAmAPQAnAPAqgTQApgTANgoQAJA1AuAiQAvAjA0gHQA0gFAmgtQAigoABgxQACAtAqAgQAuAjAwgOQAxgPATg2QARgtgSglQCCBSBdB7QgdAGgOAeQgOAeANAbQANAcAfAJQAfAKAagPQAagOAKgfQALgfgNgbQAtAMAcABQAqABAagVQARgPAJgYQAIgXgDgZQgEghgXgcQgXgcgggLQgggLgkAJQgiAIgYAaIgJgCQi9jFgQgSQBThlgBiLQAAiNhThlIC0iRQAfAlA3gSQA3gSAEgxQAEgwg0gZQg1gZgkAhQAOgsgngmQgmglgtAPQgrAQgFA3QgHA2AoAYIiAB3QiNhMilAAQinAAiMBMIi0iQQAtgXgFg8QgEg7gvgRQgwgRgoAsQgpAsATAuQgzgSgpAzQgoAzAcAvQAcAvBAgNQBAgNAIg2IARAZIBHBjIATAaIAaAjQhyBeABCmQABClB1BcQhVBHg5AuQg6AtgWAAQgYgBgvgLQghgIgVADQgkAFgXAhQgWAhAIAjQAJAkAlASQAjATAigOQgdAwAoA1gAg4EdQgMgBgQgMQgQgOgHgSQgKgUAFgSQAFgPAJgEQAGgDAHACQAIADAFAFQAHAKAKASQAEgRAPgNQAMgJAHAAQAKAAAHALQAEAIABAMQACATgHARQgHARgOALQgPAMgPAAIgFgBgAkeCnQg0gCgsgjQgqgigPgzQgHgZAEgXQACgbAQgRQAUgYAigFIABAAIAKgBQASgGAWAGIAMAEIADABQAQAHAQANQAhAYAUAgQAVAjACAmQADArgaAZQgVAWgnAAIgHAAgAkzhJIgBAAIgCAAIAAAAQgUgFgRAAIgBAAIAAAAIgGAAIgCABIgDAAIADAAIACgBIAGAAIAAAAIABAAQARAAAUAFIAAAAIACAAIABAAIAAAAgABbCQQgUgPgKgVQgMgWADgWQADgcAcgfQArguBAgRQAsgMAoAHIgGAAIAAAAIgEAAQgOABgUACIgBABIgDAAIgBAAIABAAIADAAIABgBQAUgCAOgBIAEAAIAAAAIAGAAQAUAEATAHIAHAGQATARADAdQABAYgKAcQgTAvgrAfQgqAggxADIgPABQgrAAgfgWg");
	this.shape_4.setTransform(-0.15,5.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDF8EE").s().p("AqsKFQgog1AdgwQghAOgkgTQgkgSgKgkQgIgjAXghQAWghAkgFQAVgDAhAIQAvALAYABQAXAAA5gtQA5guBVhHQh1hcgBilQgBimByheIgagjIgTgaIhGhjIgRgZQgJA2hAANQhAANgcgvQgcgvApgzQAogzA0ASQgUguApgsQApgsAvARQAvARAFA7QAEA8gtAXIC0CQQCMhMCmAAQCmAACOBMIB/h3QgngYAGg2QAFg3ArgQQAtgPAnAlQAnAmgPAsQAkghA1AZQA0AZgEAwQgDAxg4ASQg3ASgfglIi0CRQBTBlABCNQAACLhSBlQAQASC9DFIAIACQAYgaAjgIQAjgJAhALQAgALAWAcQAXAcAEAhQADAZgIAXQgIAYgSAPQgaAVgqgBQgcgBgsgMQAMAbgKAfQgKAfgaAOQgbAPgfgKQgfgJgMgcQgNgbAOgeQANgeAdgGQhch7iChSIgIgNIAIANQARAlgQAtQgUA2gxAPQgwAOgugjQgqgggCgtIAAgIIAAAIQgBAxgiAoQglAtg0AFQg1AHgugjQgvgigIg1QgNAogqATQgqATgmgPQgngPgQgrQgQgsASglIjeCkQAxAbgJBCQgJBCg3ANQgLADgKAAQgpAAgfgrgAg+C9QgJAEgFAPQgEASAJAUQAIASAQAOQAPAMAMABQASACAQgNQAOgLAIgRQAHgRgBgTQgCgMgEgIQgIgLgKAAQgHAAgLAJQgOANgFARQgJgSgIgKQgFgFgHgDIgGAAIgIABgAmEgpQgPARgDAaQgDAYAHAZQAOAzArAiQArAjA0ACQAsACAYgYQAZgZgDgrQgCgmgVgjQgUggghgYQgQgNgQgHIgDgBIgMgEQgWgGgSAGIgKABIgBAAQgiAFgUAYgADig0QhAARgrAuQgcAfgDAcQgDAWAMAWQAKAVAUAPQAkAZA1gEQAxgDArggQArgfASgvQALgcgCgZQgDgcgSgRIgIgGQgPgKgWgBIgBAAQgQgCgPAAQgaAAgcAHg");
	this.shape_5.setTransform(-3.7968,4.9572);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2CE42").s().p("APpJzQhAhZBKmKQBNnZlyiwQizhgjug9QAtHmjVAnQkRAhgmjfQgri2BEjdQkxBukTC0QkRCkAtDvQgDDpArDzIAAADQguGYlzhbQiphJieAKIgBgNQgCg0A6gbQA1gZA4APQAcAHBLAhQA/AcAoADQBsAJBPhmQBIhdAGh6QAEhKgViZQgViTAGhOQANikBuiTQBliJCchZQCHhOC2gwQCCgiDPggQgYDvAMDcQAEBCAXAvQAbA5AyADQAxACAigzQAcgpALg/QArj2gqj6QDTA+B4AwQCzBIB9BdQCUBtBWCVQBcCigJClQgDBDgaBqQggCDgGApQgOBhAUBRQAXBeA/A0QBTBCCEgQQBXgLB6gzQASgFAXACQAKAAAIAEQALAGAFATQAGAYgCAXQAAAYgEAdQhIgIi5AtQgiADgeAAQj9AAhYjXg");
	this.shape_6.setTransform(-0.0017,-39.9147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.piratehat, new cjs.Rectangle(-166.7,-124.1,333.4,248.3), null);


(lib.pinkglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF00CC").s().p("AGOFBQiGgehVhcQg7hBgXhWQgDgFgFgbQgHgcgRgiQgTglglgEQgcgDgcARQgTALgRAxQgJAYgEAbQgXBQg4BHQhRBeiKAdQjCAoh8hDIgigZQhLg2guhnQgphNgBhbQgugkAXg/QAJgcApgDQAxhoCFgUQChgXCuAXIGRAZIElgXICkgHQCfgXCJA3QAqAQAwBTQBOAigUAtQgVAtgOAJIgOBOQgUBkgtBFQgyBThyApQhDAVhMAAQg5AAg9gLgAK1DzIlzAAQDHBQCshQgAlGDzIlzAAQCrBQDIhQgAD7DBIH0AAQAtgbgegKIoiAAQgNAcAsAJgArvDBIHzAAQAsgJgMgcIoiAAQgeAKAtAbgAC0BvIJuAAQAZgYgTgMIp3AAQgZAAAcAkgAsiBvIJtAAQAdgkgZAAIp4AAQgTAMAaAYgACTAdIKjAAQAagjgaAEIqjAAQgXAAAXAfgAs2AdIKjAAQAXgfgXAAIqjAAIgFgBQgTAAAYAggACBg2ILCAAQAVgjgxAAIqmAAQgOAKAOAZgAtDg2ILCAAQANgZgNgKIqmAAQgxAAAVAjgACBiFIK3AAQABgrgoAGIqRAAQgWASAXATgAs5iFIK4AAQAXgTgWgSIqRAAIgKgBQgeAAAAAmgACZjYIJ7AAQiEgqieAAQifAAi6AqgAsUjYIJ6AAQi6gqieAAQifAAiDAqg");
	this.shape.setTransform(-0.007,0.0426);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinkglasses, new cjs.Rectangle(-94,-33.2,188.1,66.5), null);


(lib.mouth3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABmg+QA8gLAygQQBugkA6hBAgDgzQAOgBAPAAQAogEAkgGIAeDUAF3j9QgJBAA8AVAgDgzQAGD+CBAwQBsAWgIirQADhkgXhbAlzijQCTBxDdgBAlRjhQgOAogUAWQgXAZgfAB");
	this.shape.setTransform(0,0.0058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D54968").s().p("AARCpQh/gwgHj+IAegBQAngEAkgGIAdDUIgdjUQA8gLAygQQAWBcgCBjQAHCYhUAAQgLAAgNgDg");
	this.shape_1.setTransform(11.4275,8.2058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-43.5,-26.3,87.1,52.7), null);


(lib.mouth2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlzAHQFnAiGAg7");
	this.shape.setTransform(8.375,-10.8851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AIKkzQAggLAggLAIKkzQggBggiBUQg6CLhABnQgGAKgHALQhqCkh8BBQhnA2h0gOQhGgIgghuQgUhFgEhyQgEhxgdhcQgsiHhjhZApJmXQBMAvBPAjQGrC4INim");
	this.shape_1.setTransform(0,0.0285);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD2A43").s().p("Ai/B3QhRgsAIgyIAEACQAKALAqAIQAfAJAeADQBmAQBhhBIAJgFIAJgFIAVgRICThxIADABIAZAGQhqCjh9BBQheAcg+AAQgrAAgbgNg");
	this.shape_2.setTransform(5.539,26.1143);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D74869").s().p("AiMBgQgegDgegJQgqgIgKgLQgEgEABgFQCfijFgAJIgHAGIgEgBIiSBwIgVARIgJAGIgJAFQhOA0hSAAQgUAAgUgDg");
	this.shape_3.setTransform(4.765,22.3042);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjTEJQhGgIgghuQgUhFgEhxQgEhygehcQFnAiGAg8Qg6CMhABnIgNAVIgYgGIAHgGQlggJifCjQgBAFAEAEIgEgCQgIAyBRAsQBCAgCggvQhRArhZAAQgYAAgYgDg");
	this.shape_4.setTransform(8.375,14.0035);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlNBqQgriGhjhZQGrC3IMilQggBggiBTQj2AmjqAAQiFAAiCgMg");
	this.shape_5.setTransform(4.55,-20.7851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-61.1,-43.2,122.2,86.5), null);


(lib.mouth1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AktE+QEBimJDCeQDUBIBbhwQBlilhlibQiSkbnXhYQmyhBlDCWQlRCqgOFaQAKD6DxALQBOAJBxgzQBCgeBOgzg");
	this.shape.setTransform(0.0375,-0.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A32945").ss(2,1,1).p("AC7h5QBlhIBtgYQB9gcB4AcAAcAFQA/g6BghEAqBDoQCAjwEphqQDIg8DLA1");
	this.shape_1.setTransform(19.625,16.7125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D64968").s().p("AjxhyQDIg8DLA1QhgBEg/A6QA/g6BghEQBlhIBtgYQB9gcB4AcQBlCchlCkQhbBwjUhIQpDiekBCmQhOAyhCAfQCAjwEphqg");
	this.shape_2.setTransform(22.1375,16.7125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ApjG5QjxgLgKj6QAOlaFRiqQFDiWGyBBQHXBYCSEbQh4gbh9AbQhtAZhlBHQjMg1jIA7QkoBqiADxQhgArhHAAIgYgBg");
	this.shape_3.setTransform(-2.475,-0.004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth1, new cjs.Rectangle(-89.8,-45.2,179.7,90.4), null);


(lib.legR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhCK0QgcgbAAgoIAAzhQAAgoAcgcQAcgbAmAAQAnAAAcAbQAcAcAAAoIAAThQAAAogcAbQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(0,0.009,1,0.509);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legR, new cjs.Rectangle(-9.5,-36.6,19,73.30000000000001), null);


(lib.LegL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhCK0QgcgbAAgoIAAzhQAAgoAcgcQAcgbAmAAQAnAAAcAbQAcAcAAAoIAAThQAAAogcAbQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(0,0.009,1,0.509);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegL, new cjs.Rectangle(-9.5,-36.6,19,73.30000000000001), null);


(lib.greeneyeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AglAAQAAAQALAKQALALAPAAQAQAAALgLQALgKAAgQQAAgOgLgLQgLgMgQAAQgPAAgLAMQgLALAAAOg");
	this.shape.setTransform(-13.975,0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADzBKQgLAMgNAMQgLALgMALQgQAPgQANQhUBEhoAsQkKBMiRihQh3iNAXhBQAvhAA0gsQAqglAsgWIABgBQAHgEAHgDIBAgVQABgBABAAQAXgFAagDQAYAAAYAAQAoACAlAEQAIABAHABQAlAGAiAIQAGACAIACQAsAMAlARIABAAQAMAFAKAGIABABQAhARAdAWQAfAWAXAUQA5AxAQAnQgEAFgEAFQgOAUgQATQgFAGgGAGQgCADgDAEQgDADgDADQAGgBAGAAQAGAAAGAAQAYAAATAEQAaAJAFARQgbgFgYgCQgRgBgZACQgMACgOACAFRjoQgEACgEACQhuA3hbgXQAwgMAhgUQAmgWAUgiQiNA3hrgPQjKgDgjAHQgjAHAkgFAjxgDQAAAvAjAhQAiAjAxAAQAwAAAjgjQAighAAgvQAAgwgighQgCgCgCgCQghgeguAAQgvAAggAeQgCACgCACQgjAhAAAwgAELAzQAUgFAUgCQAEAAAEgBQAegBAeAFIg+gZQA4gxBfgkQAngQAhgeIhJAPQgDABgCABQg5AMgqgDQA9gcArhRQhAAug+AMQgtAJgrgJQA2gSAigrQALgPAJgSACwCSIAYgXQALAAAIAAQAbACAKAKIAXARACoCZQAwgKAhAJQASAEAMgB");
	this.shape_1.setTransform(-0.0113,0.016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC66").s().p("AiyCaQhLhIAAhmQAAgeAGgcQAEgPAFgOQALgdATgbQAegnAzgQQAQgFARgDIAxAAQAoABAkAFIAPACQAkAFAjAJQAyAOAqAbQAUAbAKAdQAGAOADAPQAGAcAAAeQAABmhKBIQhLBKhpAAQhoAAhKhKgAhPhOIgFADQgiAiAAAuQAAAxAiAhQAjAiAxAAQAvAAAjgiQAhghABgxQgBgughgiIgEgDQghgfgtAAQgvAAggAfg");
	this.shape_2.setTransform(-12.3,-0.9125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABmDZQghgJgvAKIgFgFQARgNAQgPIADADIATAAQAbACAKAKIAXARIAAADIgHAAQgKAAgNgDgAAdDTIAYgXgAlhCOQgjghAAgwQAAgwAjggIAEgEQAggeAvAAQAuAAAhAeIAEAEQAiAgAAAwQAAAwgiAhQgjAjgwAAQgxAAgigjgAk5AoQgKALAAAQQAAAPAKALQAMALAQAAQAPAAAMgLQALgLAAgPQAAgQgLgLQgMgLgPAAQgQAAgMALgACPChQgQgBgaACIgZAEIgEgDIAYgYIAMgBIANAAQAXAAATAEQAaAJAFARQgbgFgYgCgAB2ByQARgTAOgUIAHgLQgQgng4gwQgYgUgfgWQgcgWghgRIAAgBQgLgGgMgFIAAAAQgmgRgsgMIgPgEQgigIglgGIgOgCQgmgEgogCIgwAAIgBgCQgkAFAkgHQAigHDLADQBsAPCLg3QgTAignAWQghAUgvAMQBaAXBug3IAIgEIAAAEIAVAAQgJASgMAPQgiArg2ASQAsAJAsgJQA+gMBAguQgqBRg+AcQAqADA6gMIAEgCIBJgPQghAegmAPQhgAkg4AyIA+AZQgegFgdABIgJABQgUACgTAFIgOAKIALgMg");
	this.shape_3.setTransform(14.65,-6.4545);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak+CXQh3iNAXhBQAvhAAzgsQAqglAtgWIAOAaIgNgbIANgHIBBgVIACgBQAXgFAZgDQgSADgQAFQgyAQgfAoQgTAagKAeQgFAOgEAOQgGAcAAAeQAABmBLBJQBKBJBpAAQBoAABLhJQBKhJAAhmQAAgegGgcQgEgOgFgOQgLgegTgaIAFgJQALAFALAGIAAABQAiARAcAWQAfAWAYAUQA4AxAQAnIgHALQgOATgQATIgMAMIgFAHIgFAGIgYAYIgXAWQgQAPgRANQhUBEhpAsQhVAZhIAAQiaAAhihugAgxAEQgLgKAAgPQAAgQALgLQALgLAQAAQAQAAAKALQALALAAAQQAAAPgLAKQgKALgQAAQgQAAgLgLgADLjEQgqgcgzgOIAPAEQAsAMAmARIgEAJIAAAAg");
	this.shape_4.setTransform(-11.6613,2.416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greeneyeR, new cjs.Rectangle(-54.5,-29.4,109.1,58.9), null);


(lib.greeneyeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAvAHIgYgWQgKAAgIAAQgaACgLAKIgWAQAA3AOQgvgKggAJQgTAEgLgB");
	this.shape.setTransform(-22.325,13.933);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmAAQAAAQgLAKQgLALgQAAQgPAAgLgLQgLgKAAgQQAAgOALgLQALgMAPAAQAQAAALAMQALALAAAOg");
	this.shape_1.setTransform(13.95,0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADygDQAAAegOAZQgIANgMAMQgjAjgwAAQgcAAgXgLQgRgJgPgPQgNgMgHgNQgPgZAAgeQAAgwAjghQAPgPARgIQAXgLAcAAQAwAAAjAiQAiAhAAAwgAjyBKQAMAMAMAMQALALAMALQAAAAABABQAPAOARANQAkAdAoAZQAiAVAmATQATAJAVAJQDFA5CDhLQAtgaAlgpQAYgdASgZQAOgTAKgSQALgRAHgPQAXgzgLggQgPgUgPgSQhHhWhSgqQgBgBgBAAQAAgBgBAAQgGgEgHgDIhAgVQgZgGgagDQgZAAgYAAQgnACgmAEQg1AGguAOQgsAMgmARIgBAAQgLAFgKAGQgBAAAAABQghARgdAWQhpBLgXA3QAEAFAEAFQAPAUAQATQABACABABQAEAFAEAEQADADACAEQADADADADQgGgBgGAAQgGAAgGAAQgKAAgJABQgNAAgLADQgaAJgEARQAagFAZgCQABAAACAAQAQgBAXACQAMACANACAkKAzQgTgFgVgCQgEAAgEgBQgdgBgeAFIA9gZQg4gxhfgkQgigNgcgZQgFgEgEgEIBIAPQADABACABQA5AMAqgDQg9gcgqhRQBuBPBngVQhUgcghhXQCEBQBrgbQhmgZglg/QCMA3BrgPQDKgDAkAHQAiAHgjgFIgBAA");
	this.shape_2.setTransform(-0.0111,0.0138);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC66").s().p("AgwDgQgWgFgWgIQgvgSgognQgMgLgKgNQgagggMglQgOgmAAgrQAAguAPgpQAKgdATgbQBlgpBOgQQAlgFAngBIAxAAQA3AIAjAeIAHAGQAJAIAJALQASAbALAdQAPApAAAuQAAArgOAmQgNAlgZAgIgKAMIgMAMQgnAngvASQgsARgyAAQgYAAgYgEgAgwhiQgRAIgPAPQgiAiAAAuQAAAfAOAZQAHAOANAMQAPAPARAIQAYALAbAAQAwAAAigiQANgMAHgOQAOgZABgfQAAgugjgiQgigigwAAQgbAAgYALg");
	this.shape_3.setTransform(12.25,-0.9125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZDsIgpgSQgmgTgigVQgogZgkgdQgRgNgPgOIgBgBIgXgWIgYgYIgGgGIgFgHIgIgJIgCgDIgfgmIgIgLQAXg3BphLQAdgWAhgRIABgBQAKgGALgFIAEAJQgTAagKAeQgPAoAAAuQAAAsANAmQANAlAaAgQAKAMAMAMQAnAmAwATQAVAIAXAEQAYAEAYAAQAyAAArgQQAwgTAngmIALgMIALgMQAZggANglQAOgmAAgsQAAgugPgoQgLgegTgaIAPgaIACABQBSAqBHBWQAPASAPAUQALAhgXAyQgHAPgLARQgKASgOATQgSAZgYAdQglApgtAaQhLArhgAAQhIAAhUgZgAgCAEQgLgKAAgPQAAgQALgLQAJgLAQAAQAQAAAMALQALALAAAQQAAAPgLAKQgMALgQAAQgQAAgJgLgADYjEQgIgLgKgJIgGgFQgkgeg2gJQAaADAZAGIBAAVIANAHIgOAbIAAAAgAjKjEIgDgJQAmgRAsgMQAvgOA1gGQhOAQhlAqg");
	this.shape_4.setTransform(11.5889,2.4138);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiDDcIAAgDIAWgRQAMgKAagCIASAAIAZAXIgZgXIAEgDIABABQAPAOARANIgEAFQgwgKggAJQgOADgKAAIgHAAgADdCmQgSgJgPgPQgMgMgIgNQgOgZAAgfQAAgwAiggQAPgPASgIQAXgLAcAAQAwAAAjAiQAiAgAAAwQAAAfgOAZQgIANgMAMQgjAjgwAAQgcAAgXgLgAEDAoQgLALAAAQQAAAPALALQALALAQAAQAQAAALgLQALgLAAgPQAAgQgLgLQgLgLgQAAQgQAAgLALgAiiCOQALgDANAAIASgBIANAAIAMABIAXAYIgDADIgZgEQgXgCgPABIgEAAQgZACgaAFQAFgRAagJgAh4B0QgTgFgUgCIgJgBQgcgBgfAFIA+gZQg4gyhggkQghgMgcgZIgKgIIBJAPIAEACQA6AMAqgDQg+gcgphRQBtBPBogVQhUgcghhXQCDBQBrgbQhlgZglg/QCKA3BsgPQDKgDAkAHQAjAHgkgFIAAAAIAAACIgyAAQgnACglAEQg2AGgvAOQgrAMgmARIgBAAQgLAFgLAGIgBABQghARgcAWQhpBKgXA3IAIALIAfAnIACADIAJAJg");
	this.shape_5.setTransform(-14.675,-6.4545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greeneyeL, new cjs.Rectangle(-54.5,-29.4,109.1,58.9), null);


(lib.shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArrLAQk3kkAAmcQAAmbE3kkQE2kjG1AAQG3AAE2EjQE2EkAAGbQAAGck2EkQk2Ejm3AAQm1AAk2kjg");
	this.shape.setTransform(0,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.949)").s().p("ArxLGQk6kmAAmgQAAmfE6knQE4klG5AAQG6AAE5ElQE5EnAAGfQAAGgk5EmQk5Emm6AAQm5AAk4kmgArrq/Qk3EkAAGbQAAGcE3EkQE1EjG2AAQG3AAE2kjQE2kkAAmcQAAmbk2kkQk2kjm3AAQm2AAk1Ejg");
	this.shape_1.setTransform(0.0125,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.749)").s().p("AsKLhQlFkxAAmwQAAmvFFkxQFDkvHHgBQHJABFDEvQFEExAAGvQAAGwlEExQlDEwnJAAQnHAAlDkwgAsEraQlCEvAAGrQAAGsFCEuQFAEtHEABQHFgBFBktQFCkugBmsQABmrlCkvQlBksnFAAQnEAAlAEsg");
	this.shape_2.setTransform(-0.0125,-0.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.698)").s().p("AsRLnQlIkzABm0QgBmzFIk0QFGkxHLgBQHMABFGExQFIE0gBGzQABG0lIEzQlGEynMABQnLgBlGkygAsKrgQlGExABGvQgBGwFGExQFCEvHIABQHJgBFDkvQFEkxAAmwQAAmvlEkxQlDkvnJgBQnIABlCEvg");
	this.shape_3.setTransform(0.025,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.647)").s().p("AsXLuQlLk3ABm3QgBm3FLk3QFIkzHPgBQHQABFIEzQFLE3gBG3QABG3lLE3QlIE0nQABQnPgBlIk0gAsRrnQlIE0ABGzQgBG0FIEzQFGEyHLAAQHMAAFGkyQFIkzgBm0QABmzlIk0QlGkxnMgBQnLABlGExg");
	this.shape_4.setTransform(0.0125,-0.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.094)").s().p("AtbM3IAAAAQlrlVABniQgBnhFrlWQFklOH3gBQH4ABFlFOIAAAAQFqFWgBHhQABHilqFVQllFPn4ABQn3gBlklPgAtVswQloFTABHdQgBHfFoFRQFiFNHzABQH0gBFilNQFolRgBnfQABndlolTIAAAAQlilMn0gBQnzABliFMg");
	this.shape_5.setTransform(0,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.043)").s().p("AthM+IgBgBQltlXABnmQgBnlFtlYQFnlRH7gBQH8ABFnFRQFtFYgBHlQABHmltFXQlnFSn8ABQn6gBlnlRgAAASHQH4gBFllPQFqlVgBniQABnhlqlWIAAAAQlllOn4gBQn3ABlkFOQlrFWABHhQgBHiFrFVIAAAAQFkFPH3ABg");
	this.shape_6.setTransform(0,-0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AtJMjIAAAAQlilMABnXQgBnWFilMQFdlIHsAAQHtAAFdFHIAAABQFiFMgBHWQABHXliFMQldFIntAAQnsAAldlIgAtDscQlfFKABHSQgBHTFfFJIABAAQFaFGHoABQHqgBFalGQFflJgBnTQABnSlflKIAAAAQlblFnpAAQnpAAlaFFg");
	this.shape_7.setTransform(0.0125,-0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.196)").s().p("AtOMqIgBgBQlllOABnbQgBnZFllQQFflKHwgBQHxABFfFKIAAAAQFlFQgBHZQABHbllFPQlfFKnxABQnvgBlflKgAtJsiQliFNABHVQgBHXFiFMIAAAAQFdFIHsABQHtgBFdlIQFilMgBnXQABnVlilNIAAAAQldlIntAAQnsABldFHg");
	this.shape_8.setTransform(0.0125,-0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.145)").s().p("AtVMwQlolSABneQgBneFolSQFilMHzgBQH0ABFiFMIAAAAQFoFTgBHdQABHeloFSQliFNn0ABQnzgBlilNgAtPspQllFPABHaQgBHaFlFPIABABQFfFKHvAAQHxAAFflKQFllPgBnbQABnalllPIAAAAQlflKnxgBQnvABlgFKg");
	this.shape_9.setTransform(0,-0.0375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.396)").s().p("As2MPQlZlEAAnLQAAnKFZlEQFVlBHhAAQHiAAFVFBQFZFEAAHKQAAHLlZFEQlVFBniAAQnhAAlVlBgAAARHQHfAAFSk+QFWlCAAnHQAAnGlWlCIAAAAQlSk+nfAAQndAAlSE+QlXFCABHGQgBHHFXFCIAAAAQFSE+HdAAg");
	this.shape_10.setTransform(-0.0125,-0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.345)").s().p("As8MWIAAAAQlclHAAnPQAAnOFclHQFXlDHlAAQHmAAFYFDIAAAAQFcFHgBHOQAAHPlbFHQlYFDnmAAQnlAAlXlDgAs2sOQlaFEABHKQgBHLFaFEQFVFBHhAAQHiAAFVlBQFZlEAAnLQAAnKlZlEQlVlBniAAQnhAAlVFBg");
	this.shape_11.setTransform(0,-0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.294)").s().p("AtCMcIgBAAQlflJABnTQgBnSFflKQFalFHpAAQHpAAFbFFIAAAAQFfFKgBHSQABHTlfFJQlaFGnqAAQnoAAlalGgAAARZQHmAAFXlDQFclHAAnPQAAnOlblHIgBAAQlXlDnmAAQnlAAlXFDQldFHABHOQgBHPFdFHIAAAAQFXFDHlAAg");
	this.shape_12.setTransform(0.0125,-0.0375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.447)").s().p("AswMJIABAAQlXlCAAnHQAAnGFWlCQFTk+HdAAQHeAAFTE+IAAAAQFWFCAAHGQAAHHlWFCQlSE+nfAAQndAAlTk+gAAAQ+QHbAAFQk8QFTk/AAnDQAAnClTlAIAAAAQlQk7nbAAQnaAAlQE7QlTFAAAHCQAAHDFTE/IAAgBQFQE8HaABg");
	this.shape_13.setTransform(0.0125,-0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AsqMBIAAABQlTk/AAnDQAAnCFTlAQFQk7HaAAQHbAAFQE7IAAAAQFTFAAAHCQAAHDlTE/QlQE7nbABQnagBlQk8gAAAQ1QHXAAFOk6QFQk8gBm/QABm+lQk9IAAAAQlOk5nXAAQnWAAlNE5QlRE8AAG/QAAG/FRE8IAAAAQFNE5HWABg");
	this.shape_14.setTransform(0.0125,-0.0375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.596)").s().p("AsdL1IAAAAQlOk5ABm8QgBm6FOk6QFLk3HSAAQHUABFKE2IABAAQFNE6gBG6QABG8lOE5IABAAQlLE3nUAAQnSAAlLk3gAsWrtQlME3ABG2QgBG4FME2QFHE1HPAAQHQAAFIk1QFLk2gBm4QABm2lLk3QlIk0nQAAQnPAAlHE0g");
	this.shape_15.setTransform(0,-0.0625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.545)").s().p("AsjL7IAAABQlRk8ABnAQgBm+FRk9QFNk5HWAAQHXAAFOE5IAAAAQFQE9gBG+QABHAlQE8QlNE5nYAAQnWAAlNk6gAsdr0QlOE5ABG7QgBG7FOE5IAAABQFLE2HSABQHUgBFLk3IgBAAQFOk5gBm7QABm7lNk5IgBAAQlKk3nUAAQnSAAlLE3g");
	this.shape_16.setTransform(0,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.796)").s().p("AsELaQlCkuAAmsQAAmrFCkvQFAktHEAAQHFAAFBEtQFCEvgBGrQABGslCEuQlBEtnFABQnEgBlAktgAAAP+QHCAAE+kqQE+ksAAmoQAAmnk+ksIgBAAQk+kqnBgBQnAABk+EqQk/EsAAGnQAAGoE/EsIAAAAQE+EqHAAAg");
	this.shape_17.setTransform(0,-0.0375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.898)").s().p("Ar4LNIAAAAQk8kpAAmkQAAmjE8kpQE7koG9AAQG+AAE7EnIAAABQE8EpAAGjQAAGkk8EpQk7Eom+AAQm9AAk7kogArxrGQk6EnAAGfQAAGgE6EmQE4EmG5AAQG6AAE5kmQE5kmAAmgQAAmfk5knQk5klm6AAQm5AAk4Elg");
	this.shape_18.setTransform(0.0125,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.847)").s().p("AAAP+QnAAAk+kqIAAAAQk/ksAAmoQAAmnE/ksQE+kqHAAAQHBAAE+EqIAAAAQE/EsAAGnQAAGok/EsQk+EqnBAAIAAAAgAAAP1QG+AAE7koQE8kpAAmkQAAmjk8kpIAAAAQk7kom+AAQm9AAk7EoQk8EpAAGjQAAGkE8EpIAAAAQE7EoG9AAg");
	this.shape_19.setTransform(0.0125,-0.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-123.1,-116.8,246.3,233.6), null);


(lib.hazyring3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AnxMvQlljEhrl7Qgih6gCh2IAAAAQACh1Aih6QBrl7FljEQFmjEGNBlQGOBmDPFUQCIDhgBDyIAAAAQABDziIDhQjPFUmOBmQiIAiiCAAQj9AAjsiBgAnsslQlhDChqF3QgiB4gCB0IAAAAQACB1AiB4QBqF3FhDCQFiDDGJhlQGKhlDMlQQCHjfAAjwIAAAAQAAjviHjfQjMlQmKhlQiGgjiBAAQj7AAjpCBgAMnCxQAXhXAAhaIAAAAQAAjIhxi7QiskblLhUQlKhVkpCjQkpCkhZE6QgcBlgCBhIAAAAQACBRATBTQAEAmAHAlIgMgmQgchmgChjIAAAAQAChiAchmQBak/EtilQEtilFOBVQFPBWCuEeQBzC9gBDLIAAAAQAAB9grB4QAGghAEgjg");
	this.shape.setTransform(-0.0122,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("AnhMwQlai/hnlvQghh2gDhxIAAgBQADhxAhh2QBnlvFai+QFai+GBBjQGBBiDIFJQCEDagBDqIAAABQABDqiEDbQizEllGBuQAjgQAhgUQEPhzCdkBQCDjYgBjoIAAgBQABjniDjYQjGlFl9hiQl8hhlXC8QlWC8hmFrQghB0gCBwIAAABQACBwAhB1QBmFrFWC8QAlAUAlARQApAZAqATQhSgchQgsgAtHDrQgehqgChmIAAgBQAChlAehqQBdlLE4isQE4irFbBYQFcBZC0EpQB4DFgBDSIAAABQABDTh4DFIgNAUQAOgeALgeQBhizgBi9IAAgBQABjQh2jCQiykllXhYQlXhYk1CqQk0CphcFHQgdBpgCBkIAAABQACBlAdBpQAaBdAsBRQAMAgAOAeQhGhpgkiBg");
	this.shape_1.setTransform(-0.0248,-2.6307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.796)").s().p("AHEM6QDjhzCKjiQCBjWAAjlIAAAAQAAjliBjVQjElCl5hhQl4hglTC6QlSC6hlFnQghBzgCBvIAAAAQACBwAhBzQBlFnFSC6IAJAFQAeAWAeASQglgQglgVQlWi8hmlrQghh0gChxIAAAAQAChwAhh1QBmlrFWi8QFXi8F8BiQF9BhDGFGQCDDYgBDnIAAAAQABDoiDDYQidECkPBzQAbgRAbgUgAtRD9QgehrgChoIAAAAQAChnAehsQBelPE8itQE8iuFfBaQFgBaC2EtQB5DHgBDVIAAAAQABDWh5DHQgYAogbAkQAQgeANgeIANgVQB4jFgBjTIAAAAQABjTh4jEQi0kplchZQlbhZk4CsQk4CrhdFLQgeBqgCBmIAAAAQACBnAeBqQAkCBBGBpQAOAeARAeQhlh+guimg");
	this.shape_2.setTransform(-0.0247,-4.1831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AH3MgQC6hwB3jDQCAjTgBjjIAAAAQABjiiAjTQjCk+l1hgQl0hflOC4QlPC4hkFjQggBygCBtIAAAAQACBuAgByQBdFKEoC3QAYAVAZATIgJgFQlSi6hllnQghhzgChwIAAAAQAChvAhhzQBllnFSi6QFTi6F4BgQF5BhDEFCQCBDVAADlIAAAAQAADmiBDVQiKDjjjBzQAagTAZgVgAtcENQgehtgChpIAAAAQAChoAehtQBglTFAivQE/iwFkBbQFjBbC5EwQB6DJAADYIAAAAQAADZh6DJQgrBIg1A7QATgdARgfQAbgkAYgoQB5jHgBjWIAAAAQABjVh5jHQi2ktlghaQlfhZk8CtQk8CuheFPQgfBrgBBnIAAAAQABBoAfBsQAuClBlB+QAPAcASAaQiGiPg5jIg");
	this.shape_3.setTransform(-0.0123,-5.5024);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AI/LpQA5g8ArhCQA1g8ArhHQB7jKgBjYIAAAAQABjYh7jJQi4kxlkhbQlkhak/CvQlACwhgFTQgeBsgCBpIAAAAQACBpAeBtQA5DICGCPQAqA+A1A4QAfAhAgAdQkoi3hdlKQgghygChuIAAAAQAChuAghxQBklkFPi3QFOi4F1BfQF0BfDCE/QCADTgBDiIAAAAQABDjiADTQh3DDi6BwQAlggAjgmg");
	this.shape_4.setTransform(-0.0247,-6.976);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("An2M4QlpjHhsl/Qgjh7gCh3IAAAAQACh2Ajh7QBsl/FpjHQFpjGGSBmQGSBnDRFYQCKDkgBD0IAAAAQABD1iKDkQjRFYmSBnQiKAiiDAAQkAABjuiDgAnxsuQllDEhrF7QgiB6gCB1IAAAAQACB2AiB6QBrF7FlDEQFmDEGNhlQGOhmDPlUQCIjhgBjzIAAAAQABjyiIjhQjPlUmOhmQiIgiiCAAQj9AAjsCBgAMtBcQAGguAAguIAAAAQABjGhwi4QgWgkgZgiIAQANIgRgOQiljbkchJIABAAQlGhTkmChQklChhYE3QgcBkgBBfIAAAAQAAApAGApQAAAqAEAoQgThTgChRIAAAAQAChhAchlQBZk6EpikQEpijFKBVQFLBUCsEbQBxC7AADIIAAAAQAABagXBXQAFgqABgrg");
	this.shape_5.setTransform(-0.0122,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AnsMmQlhjChql3Qgih4gCh1IAAAAQACh0Aih4QBql3FhjCQFijDGJBlQGKBlDNFQQCHDfgBDvIAAAAQABDwiHDfQjNFQmKBlQiGAjiBAAQj6AAjqiBgAnmsdQleDAhoFzQgiB3gCBzIAAAAQACB0AiB3QBoFzFeDAQCZBUCgAcQBUASBZAAQBuAABkgbIAMgDIAegIIABAAQGFhjDLlNQCFjdgBjtIAAAAQABjsiFjdQjLlNmFhjIgBAAQiEgiiAAAQj4AAjmB+gAszDMQgdhogChkIAAAAQAChjAdhoQBblDExinQEwinFTBWIAAAAQFTBXCwEiQB0DAAADNIAAAAQAACfhECWQAIggAGggQAsh4gBh9IAAAAQABjLhzi9QiukelPhWQlOhVktClQktClhaE/QgcBmgCBiIAAAAQACBjAcBmIAMAmQAHAmAKAkQgXg0gQg5g");
	this.shape_6.setTransform(-0.0248,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.596)").s().p("AnmMlQlejAholzQgih3gCh0IAAAAQAChyAih4QBolyFejBQFdjAGFBkIABAAQGFBjDKFNQCGDdgBDsIAAAAQABDuiGDcQjKFNmFBkIgBAAIgeAHQA4gQA0gZQFGhuCzkmQCEjagBjrIAAAAQABjqiEjaQjIlJmBhjQmBhilaC+QlaC+hnFvQgiB2gCBxIAAAAQACByAiB2QBnFvFaC+QBQAsBSAdQBGAgBMAQQiggciZhUgAs9DVQgehogBhmIAAAAQABhkAehpQBclHE0ipQE1iqFXBYQFXBYCyElQB2DCgBDQIAAAAQABC+hiCyQALgdAIgeQBEiWAAifIAAAAQAAjNh0jAQiwkilThXIAAAAQlThWkwCnQkxCnhbFDQgdBogCBjIAAAAQACBkAdBoQAQA5AXA0QAJAjAMAgQgshQgaheg");
	this.shape_7.setTransform(-0.0121,-0.7196);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.094)").s().p("AoBNJQlwjKhumHQgkh+gCh6IAAAAQACh5Akh+QBumHFwjKQFxjLGaBpQGaBpDWFfIAAAAQCNDpgBD5IAAAAQABD6iNDpIAAAAQjWFfmaBpQiMAkiGAAQkGAAjziGgAn7tAQltDJhtGDQgjB8gCB4IAAAAQACB5AjB8QBtGDFtDJQFtDIGVhoIAAAAQGWhoDUlaIAAgBQCLjmgBj4IAAAAQABj3iLjmIAAgBQjUlamWhoIAAAAQiKgkiFAAQkDAAjwCEgALmknQA2B0AKB4QgPh9gxhvgAsKjAIABgEIgDALIACgHgAJAoIIgJgIQiSiOjXg3Qk9hSkeCdQhWAvhDA8QglAcgkAfQBahmCDhIQEhifFCBSIAAAAQD/BBCfC7Igvglg");
	this.shape_8.setTransform(-0.0122,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.196)").s().p("An7NBQltjJhtmDQgjh8gCh5IAAAAQACh4Ajh8QBtmDFtjJQFtjIGVBoIAAAAQGWBoDUFaIAAABQCLDmgBD3IAAAAQABD4iLDmIAAABQjUFamWBoIAAAAQiKAkiFAAQkDAAjwiEgAn2s3QlpDHhsF/QgjB7gCB2IAAAAQACB3AjB7QBsF/FpDHQFpDGGShmQGShnDRlYQCKjkgBj1IAAAAQABj0iKjkQjRlYmShnQiKgiiDAAQkAgBjuCDgAMuBAQAAg/gIg8QgKh4g2h0Qgnhag8hQIASANQAZAiAWAkQBwC4gBDGIAAAAQAAAugGAuIABgcgAsyAAIAAAAQABhfAchkQBYk3ElihQEmihFGBTIgBAAQEcBJClDbIgTgPIAAAAIgSgPQifi7j/hBIAAAAQlChSkhCfQiDBIhaBmIAAABIgHAGIgJAIQgaAjgWAkIgPAYIhLCyIgBAEIgCAHIgVBmQgLBIAABLIAAASQgGgpAAgpg");
	this.shape_9.setTransform(-0.0123,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring3, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.hazyring2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.396)").s().p("AtdHrIAWARQDFEzFrBlIAWAQQmOhljOlUgAHsM9QFijCBql3QBpl2jMlQQjMlQmKhlQmJhlliDDQlhDChqF3QhpF2DMFQIAJAPIgSgKQjPlUBrl6QBrl7FljEQFmjEGNBlQGOBmDPFUQDNFUhqF5QhrF7llDFQgtAYg3ANQAwgUAugagALTGVQAxhVAchjQBYk5irkbQiskblLhUQlKhVkpCkQkpCjhZE7QhMENB0D2QAjBcA8BSQgggpgdgvQitkeBZk+QBak/EtilQEtilFOBVQFPBWCuEeQCtEehZE+Qg4DGiKCLQBAhKArhSg");
	this.shape.setTransform(-0.0166,-1.2104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.796)").s().p("As5HXQjFlGBmlqQBmlrFWi8QFXi8F8BhQF9BiDGFFQDFFGhmFpQhmFrlWC8QhOArhuAGQgjACgngCQgygCg5gJQCogUCfhXQE4irBdlLQBdlKi0kpQi0kplchZQlbhYk4CrQk4CshdFLQhdFKC0EpQAqBFAyA5IgwgZIgwgiIARAIIAqAWQgigrgegxQi3ktBflOQBelPE8iuQE8itFfBaQFgBaC2EsQC2EtheFNQheFPk8CuQiBBHiIAbQAmADAiAAQAqAAAlgFQBTgKA+giQFTi6BllnQBllljDlDQjElCl5hgQl4hglTC5QlSC6hlFnQhlFnDDFCIATAJIAEAHIgXgQIAJAOIgSgJIAXAQQC8ElFaBhIAWAQQl9hhjGlFg");
	this.shape_1.setTransform(-0.0242,-1.1456);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkKNiQlVhfi6khIgEgHIgKgPIA0AlIAvAjIADACIAZAeQB8CQCyBNIAlAPIBlBJIgagHgADzNBQBngcBjg3QFAiwBglSQBflSi4kwQi5kwlkhbQlkhbk/CwQlACvhfFTQhgFSC5EwQATAgAVAdIgUgKIgmgVIgTgKQjBk+BkliQBkljFPi4QFOi4F1BfQF0BgDCE+QDBE/hkFhQhkFjlPC4QgrAXg1ANQgqAJgvACIgkABIgCAAg");
	this.shape_2.setTransform(-0.0283,-1.101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AkMNtQlahhi8klIgFgHIgJgOIAXAQQC6EhFVBgIAXAQIgZgGgAD3NLQgiAAgmgDQCIgbCBhHQE8iuBelPQBelNi2ktQi2kslghaQlfhak8CtQk8CuheFPQhfFOC3EtQAeAxAiArIgqgWIgRgIIgzglIASAJIAnAVIAUAKQgVgdgTgfQi5kxBflSQBglTFAivQE/iwFkBbQFkBbC4EwQC5EwhfFSQhgFTlACvQhjA3hnAdIAmgBQAvgDAqgJQA1gMArgYQFPi4BkljQBklhjBk/QjCk+l1hfQl0hglOC4QlPC4hkFjQhkFiDBE/IAKAOIgTgJQjDlDBllmQBllnFSi6QFTi6F4BhQF5BgDEFCQDDFChlFmQhlFnlTC6Qg+AihTAKQglAFgpAAIgBAAgAqoI0IAqAfQAcAdAeAZIBZBBQAiAVAkATIArAfQiyhNh8iQg");
	this.shape_3.setTransform(-0.0242,-1.1274);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.698)").s().p("Aj5N2QmBhijIlJQjIlJBoluQBnlvFai+QFai+GBBiQGBBjDIFJQDIFJhoFtQhnFvlaC+QjkB+j1AAQh+AAiEgigAj2NsIgWgQIAZAHIgXgRIAaAHIhlhJIglgPIgrggQgkgSgigVIhZhBQgegagcgcIgqgfIgZgeIgDgCIAxAZQgzg6gqhFQi0kpBdlKQBdlLE4irQE4isFbBZQFcBZC1EpQCzEphdFJQhdFLk4CrQifBYinAUQA4AIAyADQAnACAjgCQBugHBOgqQFWi8BmlrQBmlqjFlFQjGlGl9hhQl8hilXC8QlWC8hmFrQhmFqDFFGQDGFGF9BggAmsrDQk1CqhcFHQhcFGCyElQB8DNDNBoQBgA6BsAcQBjAZBuAAQDnAAC5hxIAPgIQE0iqBclHQBclFiyklQiykmlXhYQh1gehwAAQjbAAjLBwgAs5HGIATAKIAEAGg");
	this.shape_4.setTransform(-0.0287,0.5208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.294)").s().p("AkEOdIAAAAQmShmjQlYQjRlYBsl+QBsl/FpjGQFpjGGSBmQGSBnDRFYQDQFXhsF+QhsF/lpDGQjuCDkAAAQiDAAiKgjgAj+OJQFVBYE3iHQA3gNAtgZQFljEBrl7QBql5jNlUQjPlUmOhmQmNhmlmDFQllDEhrF7QhrF6DPFUQDOFUGOBlIgWgQIAZAGgAtdHaIASAKIAEAGgAMYC+QBSkvimkSQiqkXlHhUIABAAQlGhTkmChQklChhYE3Qg1C+AqCxQAOBMAbBGQh0j3BMkNQBZk7EpijQEpijFKBUQFLBVCsEbQCrEahYE6QgcBjgxBUQAwhdAVhog");
	this.shape_5.setTransform(-0.0168,0.5168);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.196)").s().p("AkGOnIAAgBIgZgGQl4hojLk/IgEgGIgJgPQjTlbBtmCQBtmDFtjJQFtjIGWBoIAAAAQGWBoDTFaIAAABQDSFbhtGBQhtGDltDJQgvAagwAVQjEBVjQAAQiFAAiKgjgAH3M9QFpjGBsl/QBsl+jQlXQjRlYmShnQmShmlpDGQlpDGhsF/QhsF+DRFYQDQFYGTBmIAAAAQGRBmFpjGgAMqARIgBgkIgDgrQgNilheibQiokUlChSIAAAAQlChTkhCgQkiCfhWEzQgPA0gHA0IgFAAQgHA2AAA4QAABOANBIQgrixA2i+QBXk3ElihQEmihFGBTIgBAAQFHBUCqEXQCmEShREvQARhTAAhag");
	this.shape_6.setTransform(-0.0252,0.5223);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.094)").s().p("At5H7IAXAQQDLE/F3BnIAXARQmbhojVlfgAH8NXQFtjIBtmDQBtmBjSlcIAAAAQjTlamXhoIAAgBQmVhnltDIQltDJhtGDQhtGCDSFbIAJAPIgSgKQjUlfBumGQBumHFwjLQFxjKGaBpQGaBpDWFeIAAAAQDUFghuGFQhuGHlxDKQgtAZg3ANQAwgUAvgbgAMjhLIgLAAQgTiShTiLIgBAAQilkPk+hSQk9hRkeCdQkeCdhVEvQgPA0gHAyIgKAAQAHg0APg1QBWkzEiifQEhifFCBTIAAgBQFCBTCoETQBeCcANClIgDgfg");
	this.shape_7.setTransform(-0.0172,-1.2735);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.596)").s().p("Aj7OAIAAAAQmGhjjKlNQjKlNBplyQBolzFejAQFejAGEBjIABAAQGFBkDKFNQDKFNhpFxQhoFzleDAQjmB/j4AAQh/AAiFgigAnhsZQlaC+hnFvQhoFuDIFJQDIFJGBBiQGBBiFai+QFai+BnlvQBnltjHlJQjIlJmBhjQiEgih+AAQj1AAjkB+gArnGZQiyklBclGQBclHE0iqQE1ipFXBXQFXBYCyEmQCyElhcFFQhcFHk1CqIgOAIQA4giAzgsQDeihBMkMQBblBiwkiQiwkilThXIAAAAQlThXkwCoQkxCnhbFDQhbFCCwEiQBVCMB7BdQA2AuA6AjQjNhoh8jNg");
	this.shape_8.setTransform(-0.0164,0.5169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("Aj+OJIgZgGQlrhljEk0IgFgGIgJgPQjMlQBpl2QBql3FijDQFhjCGJBlQGKBkDNFRQDLFQhpF1QhqF3lhDDQgvAZgvAVQi+BSjIAAQiBAAiGgjgAHnMjQFejABplzQBolxjJlNQjLlNmFhkIAAAAQmFhjleDAQleDAhoFzQhpFyDKFNQDKFNGGBjIAAAAQGFBjFdjAgAI8JPQAXgXAVgYQCKiLA4jHQBZk9itkeQiukelPhWQlOhWktCmQktClhZE/QhaE+CtEeQAdAvAgApQAoA2AxAyQAYAYAaAWQh8hdhViMQiwkiBblCQBblDExinQEwioFTBXIAAAAQFTBXCwEiQCwEihbFBQhLEMjfChQAagXAYgYg");
	this.shape_9.setTransform(-0.0291,0.5131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hazyring2, new cjs.Rectangle(-103,-97.5,206,195), null);


(lib.haze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.075)").s().p("AjTDxQgNgDgJgJQgIgJABgKQAklDGHh/QALgEANAEQAOADAJAJQAIAJgBAKQgBAJgKAFQkxCZhgEPQgEAJgLAEQgFABgGAAQgHAAgHgCgAC+jtQmFB/gkFBQgBAIAHAIQAIAIALADQAMADAJgDQAKgDACgHQBhkREyiZQAJgEABgIQABgJgHgHQgIgIgLgDIgLgCQgFAAgFACg");
	this.shape.setTransform(-0.0247,-0.0065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.016)").s().p("AjVD8QgTgGgMgNQgMgMABgOQAklIGNiCQAQgFAUAFQATAGAMANQAMAMgBAOQgCAOgOAHQkuCWhfENQgFANgQAFQgIACgJAAQgJAAgJgCgAC1j3QmLCBgkFGQgBAMALAMQAKALASAFQARAFAPgFQAOgEAEgMQBgkNEviXQAMgHACgMQABgMgLgMQgLgLgRgFQgJgCgIAAQgIAAgHACg");
	this.shape_1.setTransform(-0.0135,-0.0129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.055)").s().p("AjUD1QgPgEgKgLQgJgKABgLQAklEGJiBQANgEAPAEQAQAEAJALQAKAKgBALQgBALgMAFQkwCYhgEPQgDAKgNAEQgHACgGAAQgIAAgIgCgAC7jwQmHB/gkFDQgBAKAIAJQAJAJANADQAOAEALgDQALgEADgJQBhkPExiZQAKgFABgJQABgKgJgJQgIgJgOgDQgGgCgGAAQgHAAgFACg");
	this.shape_2.setTransform(-0.0135,-0.0128);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.035)").s().p("AjUD4QgSgFgKgLQgLgMABgMQAklGGLiBQAPgFARAFQARAFALALQALAMgBAMQgBAMgNAHQkvCXhgENQgEAMgOAEQgHADgIAAQgIAAgJgDgAC4j0QmJCAgkFFQgBALAJAKQAKAKAPAFQAQAEANgEQANgEADgKQBhkPEviYQAMgFABgLQABgLgKgKQgJgLgQgEQgIgCgHAAQgHAAgGACg");
	this.shape_3.setTransform(-0.0247,-0.0067);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.192)").s().p("AjODdIgDgCIgBgCQAjk5F7h8IADAAIADACIABACIgBACQk4CchiEVIgDACIgBAAIgCAAg");
	this.shape_4.setTransform(-0.024,-0.0126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.173)").s().p("AjPDgQgEgBgCgCQgCgDAAgCQAjk7F9h8QADgCAEABQAEABACADQACADAAACQAAADgDACQk2CbhjEUQgBADgDABIgDAAIgEgBgADMjcQl8B8giE5IABACIADACIADAAIADgCQBikVE4icIABgCIgBgCIgDgCIgCAAIgBAAg");
	this.shape_5.setTransform(-0.0124,-0.0126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.153)").s().p("AjPDkQgGgCgEgDQgEgEABgEQAjk9F/h9QAFgCAGACQAFACAEAEQAEADgBAEIgFAHQk1CbhiETQgBADgFACIgFABIgFgBgADJjfQl9B8gjE7QAAACACADQACACAEABQAEABADAAQAEgBAAgDQBjkUE2ibQADgCAAgDQABgCgDgDQgCgDgEgBIgDAAIgEABg");
	this.shape_6.setTransform(-0.0249,-0.0061);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.133)").s().p("AjQDnQgIgCgFgFQgFgFABgGQAjk+GBh9QAHgCAHACQAIACAFAFQAFAFgBAFQAAAGgGADQk0CahiESQgCAFgGACIgHABIgHgBgADGjjQl/B9gjE9QgBAEAEAEQAEAEAFABQAGACAFgCQAFgCABgDQBikTE0ibIAGgHQABgEgEgDQgEgEgFgCIgGgBIgFABg");
	this.shape_7.setTransform(-0.0124,-0.0128);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AjRDrQgKgDgGgGQgGgHABgHQAjk/GDh/QAIgCAKACQAKADAGAGQAGAHgBAHQgBAGgHAEQkzCZhhESQgCAGgJADIgHABIgKgBgADDjmQmBB9gjE+QgBAGAFAFQAFAFAIACQAHACAHgCQAGgCACgFQBikSE0iaQAGgDAAgGQABgFgFgFQgFgFgIgCIgHgBIgHABg");
	this.shape_8.setTransform(-0.0248,-0.0062);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.094)").s().p("AjSDuQgLgDgIgIQgHgHABgJQAklBGFh/QAJgDAMADQALADAIAIQAHAIgBAIQgBAIgJAEQkyCZhhERQgCAHgKADIgJACQgGAAgGgCgADAjqQmDB/gjE/QgBAHAGAHQAGAGAKADQAJACAIgCQAJgDACgGQBhkSEziZQAHgEABgGQABgHgGgHQgGgGgKgDIgJgBIgJABg");
	this.shape_9.setTransform(-0.0235,-0.0189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.haze, new cjs.Rectangle(-25.6,-25.4,51.2,50.8), null);


(lib.burgundyshoeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AA/h7QAaAAAaAPQgtAhgdBLQhOARgDgrAA/h7QgBgrg5AHQgOABgUAGQhVA3AIAoQADAOAOAMQAYAVAZgQQgBgLAEgQQAwhEA0gCgAF2BPQAjg4hDhWQgQgUgVgWQhzg5hLA2AAHChQB6AfBxguIB0gwQAKgJAGgKQArAzhLA5QgMAJgPAJQjSBTh9hDQilg/iLhMQhWhJAdgyAAHChQAOhrAUg2Ahoi+QAVg9g3ABQg4Brh6hLQhdBuAcBDQAHARAPAOIEyCXQAfAMAdAIAhoi+QhvBlAzAoQBAAcgGgkAAFifQgJhLhkAs");
	this.shape.setTransform(-0.0081,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUDHQilg/iLhMQhWhIAdgzQAHARAPAOIEyCXQAfAMAdAIQAOhrAUg2QhOASgDgsIAAgDQAAgKADgOQAwhEA0gCQAaAAAaAPQgtAhgdBLQAdhLAtghQBLg2BzA5QAVAWAQAUQBDBWgjA4QgGALgKAIIh0AwIgCABIgDABIgEACIgBAAQg/AXhBAAIAAAAIAAAAQgtAAgugKIgDgBIgDgBIADABIADABQAuAKAtAAIAAAAIAAAAQBBAAA/gXIABAAIAEgCIADgBIACgBIB0gwQAKgIAGgLQArAzhLA5IgbASQh1AuhaAAQhJAAg3gegAhZg1QgOgMgDgOQAGAkhAgcQgzgnBvhmQBkgsAJBLQgOABgUAGQhOAzAAAmIABAGIgBgGQAAgmBOgzQAUgGAOgBQA5gHABArQg0ACgwBEQgDAOAAAKIAAADQgLAHgLAAQgOAAgNgMgAA/iRIAAAAg");
	this.shape_1.setTransform(-0.0081,2.2005);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#800020").s().p("AB3C6IkwiYQgPgOgHgRQgchCBdhtQB6BLA3hsQA3gBgVA+QhuBlAyAnQBAAbgGgiQADANANALQAZAVAZgQQADAsBPgSQgUA3gOBrQgegHgggNg");
	this.shape_2.setTransform(-17.4003,-4.5008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burgundyshoeR, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.burgundyshoeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AApgaQABgLgEgQQgwhEg0gCQgaAAgaAPQAtAhAdBLQBOARADgrgAgEifQAOABAUAGQBVA3gIAoQgDAOgOAMQgYAVgZgQABpi+QBvBlgzAoQhAAcAGgkAF+gpQgHARgPAOIkyCXQgfAMgdAIQh6AfhxguIh0gwQgKgJgGgKQgrAzBLA5QAMAJAPAJQDSBTB9hDQClg/CLhMQBWhJgdgygABpi+QgVg9A3ABQA4BrB6hLQBdBugcBDAg+h7QABgrA5AHQAJhLBkAsAl1BPQgjg4BDhWQAQgUAVgWQBzg5BLA2AgGChQgOhrgUg2");
	this.shape.setTransform(0.0081,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#800020").s().p("AjWAsQBPASADgsQAZAQAZgVQANgLADgNQgGAiBAgbQAygnhuhlQgVg+A3ABQA3BsB6hLQBdBtgcBCQgHARgPAOIkwCYQggANgeAHQgOhrgUg3g");
	this.shape_1.setTransform(17.4003,-4.5008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ak6C3IgbgSQhLg5ArgzQgjg4BDhWQAQgUAVgWQBzg5BLA2QAtAhAdBLQAUA2AOBrQAdgIAfgMIEyiXQAPgOAHgRQAdAzhWBIQiLBMilA/Qg3AehJAAQhaAAh1gugAhnCXQAtAAAugKIADgBIADgBIgDABIgDABQguAKgtAAIAAAAIAAAAQhBAAg/gXIgBAAIgEgCIgDgBIgCgBIh0gwQgKgIgGgLQAGALAKAIIB0AwIACABIADABIAEACIABAAQA/AXBBAAIAAAAIAAAAgAgogWQgdhLgtghQAagPAaAAQA0ACAwBEQADAOAAAKIAAADQgCAfgnAAQgRAAgXgFgAApgwIAAgDQAAgKgDgOQgwhEg0gCQABgrA5AHQAJhLBkAsQBvBmgzAnQhAAcAGgkQgDAOgOAMQgNAMgOAAQgLAAgLgHgABrhPIABgGQAAgmhOgzQgUgGgOgBQAOABAUAGQBOAzAAAmIgBAGgAg+iRIAAAAg");
	this.shape_2.setTransform(0.0081,2.2005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burgundyshoeL, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.burgundybow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AZ3vaIjyj6Qk0mXhrAvQkoBsi7EJIknIPQBABSAhBMQATAuAIAsQAGAiAAAiQgDBohJBcAJTpgQEziahrhyQiLg4ieDHIi1DDAAuhCQA4gDA9giAAuhCQANgSAIgaQARhmgsgwAi/pOQD1B2BjDbQAfBAgMA6QgDAOgGAOQARgJASgMQAlgZAngjQgaAhgkAfIDMCBARSrfIiZCEQkPDPlJg3AawoEQgjBRlChxQjdhDi1AMAZ3vaQjNg2jNC4IiLB5AXprxQjIgejPAwAR8ESQFbAtDpiAQBnhNh+kQQgOgUAAgeQgBgVAGghIAQhkQAHglACgcQAAgjgJg2QA9iGkEhnQENi/h/gqALLI7QBRCBBZgiQBahDhQiyQh8jDiXhXIjMiCIBMG9QA0FIBvEhQByE2C/DdQA+l1BbiiQEOAnDKhNIm1rzAFjl8QHBCKFYIEA34klQkShYAgjCQACgSADgSQBxiVK7DnQAJADALADQgMADgMACIl0B7QiCAYgzgOQgNArgFAxQgKBvAmCQICUFCQBeDwB4gSQAdgEBcgfQKOjoE8lvAi/pOIgwgtImkmEQnNleipARQjAAEgTBMQgSC9hKBWQiMCwghDWAjlqGQBHhEBlAnQBHiPDOB6ApphxQjjgPBBiqQCDiiIqBaQAHAIAHALQAEAIADAJQABABAAABQAYBBABCLAgxgZQAEgzgCg0AhgnAQASAwgCAxAhgnAQibhAifgaQkAgqkLA5Ai/pOQBFBHAaBHAzcuoQHdChFlDtAxyH6QjGDdh0E1QD0hNC6AAQBeFVCNCfQBwmsEUknQFDl2AbmDQA9AGAigvAzBioQDGDzDoAEQD8ANC3hzAg5qjQBAAaBOBH");
	this.shape.setTransform(0.0368,0.0271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#650020").s().p("A7QBGIAFgjQBxiUK6DlIgDAMIl1B6QiBAZgzgPQgOArgEAxQkThYAhjCgAVlBiQjdhEi2ANICaiEICLh4QDNi4DNA2QB/AqkOC/IgHgBIAAAAQhKgLhLAAIAAAAIAAAAQh2AAh4AaIgCABIgBAAIgJACIAJgCIABAAIACgBQB4gaB2AAIAAAAIAAAAQBLAABKALIAAAAIAHABQEEBmg8CGQgPAhhBAAQhaAAi7hBg");
	this.shape_1.setTransform(-2.501,-64.6376);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#800020").s().p("AKLQvQhwkhgzlIIhMm9IDMCCQCXBXB8DDQAlBTABA7QAABDgwAkQgTAHgSAAIAAAAIAAAAQhDAAg9heIAAAAIgFgIIAFAIIAAAAQA9BeBDAAIAAAAIAAAAQASAAATgHQAwgkAAhDQgBg7glhTQh8jDiXhXIjMiCIjMiBQAjgfAaghQgnAjgkAZIgbgHQAEgRAAgQQAAgrgXguQhjjbj1h2QD1B2BjDbQAXAuAAArQAAAQgEARQgDAOgFAOQg+Aig4ADQANgSAJgaQAFgcAAgYQAAg/ghgjQAhAjAAA/QAAAYgFAcQgJAagNASQghAvg9gGQACgkAAgkIAAgfQgBiLgYhBIgBgCIgIgRIABgMQAAgrgQgqQgahHhGhHQBGBHAaBHQibhAifgaQlljtneihQHeChFlDtIgEgBQhqgRhsAAIgBAAIAAAAQiTAAiWAgIgCAAIgBAAIgFABIgUgGQq6jnhxCVQAhjWCLiwQBKhWATi9QAThMC/gEQCqgRHMFeIGkGEIAwAtIgwgtIAKgLQBIhEBkAnQBIiPDNB6IEooPQC7kJEnhsQBrgvE0GXIDzD6QjNg2jNC4IiLB5IiaCEQC2gMDdBDQFBBxAkhRQAJA2AAAjQgCAcgHAlIgQBkQgGAhAAAVQABAeAOAUQB+EQhoBNQjpCAlbgtIG2LzQjLBNkOgnQhbCig9F1QjAjdhxk2gAR3ESQlYoEnBiKQHBCKFYIEgAFZl8QgCBohKBcQBKhcAChoIAAgGQAAgegFggQgJgsgTguQgghMhBhSQBBBSAgBMQATAuAJAsQAFAgAAAeIAAAGgAHkm3QD4gBDUigIAEgDIgEADQjUCgj4ABIgBAAIAAAAQhCAAhFgMQBFAMBCAAIAAAAIABAAgAHtrdIi1DDIC1jDIACgCQB6iZBvAAIABAAIAAAAQAfAAAfAMQAbAeABAgQAABcjkByQDkhyAAhcQgBgggbgeQgfgMgfAAIAAAAIgBAAQhvAAh6CZIgCACIAAAAgABQpCQhNhHhBgaQBBAaBNBHgAwCO/Qi7AAj0BNQB0k1DGjdQh3AShfjwIiTlCQgmiQAKhvQAEgxAOgrQAzAOCBgYIF1h7IAXgFIAFgBIABAAIACAAQCWggCTAAIAAAAIABAAQBsAABqARIAEABQCfAaCbBAQAQAqAAArIgBAMQgGgLgIgIIgEgBIgEgBQi/geiNAAIAAAAIAAAAQkBAAhWBmIAAAAIAAABIgCABQgOAmAAAeQAABpCxAMQixgMAAhpQAAgeAOgmIACgBIAAgBIAAAAQBWhmEBAAIAAAAIAAAAQCNAAC/AeIAEABIAEABQAIAIAGALIAIARIABACQAYBBABCLIAAAfQAAAkgCAkQgbGDlEF2QkUEnhvGsQiOifhdlVgAv9HXQhcAfgeAEQAegEBcgfQKNjoE9lvQk9FvqNDogArkBQQDTAACghfIAAAAIACgBIABgBIABgBIACAAIADgDIAEgCIgEACIgDADIgCAAIgBABIgBABIgCABIAAAAQigBfjTAAIgBAAIAAAAIgugBIgBAAIgDAAQjpgEjGjzQDGDzDpAEIADAAIABAAIAuABIAAAAIABAAgAGcAJgAhVlfIAAAAgAhknAIAAAAgAmeoaIAAAAg");
	this.shape_2.setTransform(0.4588,0.0271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burgundybow, new cjs.Rectangle(-178.9,-161.6,357.9,323.29999999999995), null);


(lib.browneyeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgkAAQAAAQAKAKQAMALAOAAQAQAAALgLQAKgKAAgQQAAgPgKgKQgLgLgQAAQgOAAgMALQgKAKAAAPg");
	this.shape.setTransform(-13.675,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEGAyQATgGATgBQAFAAAEgBQAdgCAdAFIg9gZQAxgrBRgiQAKgFAJgDQAmgPAggeIhIAPQgCAAgCABQgHACgGABQgwAJgkgDQAvgWAlg4QAJgNAIgRQgIAGgJAGQhiBBhegTQBRgcAihXQiBBQhpgbQBHgSAngkQAOgOAKgQADuBIQgLAMgMANQgKALgNAKQgPAPgRANQgbAWgdAUQg8AphEAdQj4BJiMiPQgHgHgHgIQgPgRgMgQQhXh0AUg4QAgguAjgkQA2g3A8gfIABAAQAHgEAHgDIA+gWQAYgGAagCQAXAAAZAAQAnACAkAFQAsAFAoAKQAGABAIADQAqALAmASIABAAQAKAFALAGIAAABQAhAQAcAXQBnBLAWA2QgEAFgDAGQgPAUgPATQgFAGgGAFQgDAEgCADQgDADgDADQAHgBAFAAQAGAAAGAAQAXAAATAEQAZAJAFARQgagEgXgDQgRgBgZADQgMABgNACAD7kZQg1AUgvAKQhHAOg9gIQjGgDgjAHQgjAGAkgEACsCQIAYgWQAKgBAJABQAZACALAJIAWARAClCXQAugKAhAKQASADALgBAjsgFQAAAwAhAhQAiAiAwAAQAvAAAjgiQAhghAAgwQAAgvghghQgjgjgvAAQgwAAgiAjQghAhAAAvg");
	this.shape_1.setTransform(0.0215,-0.0055);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("Ah0DGQgfgRgbgbQhKhJAAhmQAAguAPgoQAKgdATgbQAog0BIgLIAwAAQAnACAjAEQAsAFAoALQAyAOAqAbQASAbALAdQAOAoAAAuQAABmhJBJQgbAbgfARQg1AdhBAAQhAAAg0gdgAhShLQgiAhAAAuQAAAxAiAhQAhAiAxAAQAuAAAjgiQAhghAAgxQAAgughghQgjgiguAAQgxAAghAig");
	this.shape_2.setTransform(-12.025,-1.0875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkqClIgOgOIgbgiQhXhzAUg5QAgguAjgjQA2g4A8geIAPAaQgTAbgLAdQgPAoAAAuQAABmBKBJQAbAbAgARQA0AdBBAAQA/AAA1gdQAggRAbgbQBJhJAAhmQAAgugOgoQgLgdgTgbIAFgIIAVAKIAAABQAhARAcAWQBnBLAWA3IgHALIgeAmIgLAMIgFAHIgGAGIgXAYQgKALgNALQgPAPgRANQgbAVgdAUQg8AphFAeQhUAYhGAAQiMAAhdhfgAgxAEQgKgKAAgQQAAgPAKgLQAMgLAPAAQAQAAAKALQAKALAAAPQAAAQgKAKQgKALgQAAQgPAAgMgLgADHjEQgpgbgygOIAPADQAqAMAmASIgEAIIAAAAgAjSjEIgOgaQAHgFAHgCIA+gWQAYgGAagCQhIALgoA0g");
	this.shape_3.setTransform(-11.3785,2.2195);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABkDXQghgKgtALIgGgFQARgNAQgPIADADIgXAXIAXgXQALgBAIABQAaACAKAKIAXAQIAAAEIgEAAQgLAAgPgDgAlaCMQgighAAgxQAAgvAiggQAhgiAwAAQAwAAAiAiQAiAgAAAvQAAAxgiAhQgiAigwAAQgwAAghgigAkzAmQgJALgBAPQABAQAJALQAMALAPAAQARAAAKgLQAKgLAAgQQAAgPgKgLQgKgLgRAAQgPAAgMALgACNCeQgRAAgZACIgZAEIgDgDIAYgYIALgBIAMAAQAXAAATADQAZAKAGAQIgygHgAB0BwIAegnIAHgLQgWg3hmhKQgdgWgfgRIgBgBIgVgKIgBAAQgmgSgqgMIgPgDQgogLgsgFQgkgEgngCIgwAAIAAgDQglAFAkgGQAigHDIACQA8AJBGgPQAwgKA0gUIAIAAQgKARgOANQgnAlhGARQBoAbCBhQQghBXhSAdQBeASBihAIASgNQgJARgJAOQgkA4gwAVQAlAEAvgKIANgCIAFgBIBHgQQgfAfgnAOIgTAHQhRAigwAtIA8AZQgdgFgdABIgIABQgUACgTAFIgNAKIALgMg");
	this.shape_4.setTransform(14.4,-6.4714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.browneyeR, new cjs.Rectangle(-53.4,-29.2,106.9,58.5), null);


(lib.browneyeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkFA0QgTgGgTgBQgFAAgDgBQgegCgdAFIA9gZQg3gxhdgkQgngPgggeIBIAPQACAAADABQA3AMApgDQg8gbgphRQBsBOBmgUQhSgcghhXQCBBQBpgbQhKgSgngmQgOgPgKgRQA1AWAxAKQBLARBCgJQDGgDAiAHQAjAGgkgEAjtBKQALAMANANQAKALAMAKQAPAPARANQAbAWAdAUQA8ApBEAdQD5BJCMiPQAGgHAHgIQAKgKAHgLQBih9gUg7Qgpg5gsgpQgugsgzgaIgBAAQgHgEgGgDIg/gWQgYgGgagCQgXAAgYAAQgnACglAFQgrAFgoAKQgHABgHADQgrALglASIgBAAQgLAFgLAGIAAABQghAQgcAXQhmBLgXA2QAEAFAEAGQAOAUAQATQAFAGAGAFQACAEADADQACADADADQgGgBgFAAQgHAAgGAAQgXAAgSAEQgZAJgFARQAZgEAYgDQAQgBAZADQAMABANACADtgDQAAAwghAhQgiAigwAAQgvAAgigiQgighAAgwQAAgvAighQAigjAvAAQAwAAAiAjQAhAhAAAvgAirCSIgYgWQgKgBgIABQgaACgLAJIgWARAijCZQgvgKggAKQgTADgLgB");
	this.shape.setTransform(-0.0055,-0.0055);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAlAAQAAAQgKAKQgMALgPAAQgOAAgMgLQgKgKAAgQQAAgPAKgKQAMgLAOAAQAPAAAMALQAKAKAAAPg");
	this.shape_1.setTransform(13.675,0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("Ah1DGQgggRgbgbQhIhJAAhmQAAguAOgoQAKgdAUgbQAogbAzgOQAogLArgFQAkgEAngCIAvAAQBJALAoA0QASAbALAdQAPAoAAAuQAABmhJBJQgbAbggARQg1AdhAAAQhAAAg1gdgAhPhLQgiAhAAAuQAAAxAiAhQAiAiAuAAQAwAAAigiQAhghAAgxQAAgughghQgigigwAAQguAAgiAig");
	this.shape_2.setTransform(12.075,-0.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYDsQhFgeg8gpQgdgUgbgVQgRgNgPgPIgWgWIgYgYIgFgGIgFgHIgLgMQgQgTgOgTIgIgLQAXg3BmhLQAcgWAhgRIAAgBQALgGALgEIAFAIQgUAbgKAdQgOAoAAAuQAABmBIBJQAbAbAgARQA1AdBAAAQBAAAA1gdQAggRAbgbQBJhJAAhmQAAgugPgoQgLgdgSgbIAOgaQAzAaAuArQAsApApA5QAUA7hiB+QgHAKgKALIgNAOQhdBfiNAAQhGAAhUgYgAgDAEQgKgKAAgQQAAgPAKgLQALgLAPAAQAPAAAMALQAKALAAAPQAAAQgKAKQgMALgPAAQgPAAgLgLgABjkDQAaACAYAGIA/AWIANAHIgNAaQgog0hJgLgAjFjEgAjJjMQAlgSArgMQAHgCAIgBQgzAOgoAbg");
	this.shape_3.setTransform(11.3945,2.4195);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiBDcIAAgEIAXgQQALgKAagCQAHgBALABIAXAXIgXgXIADgDQAQAPARANIgFAFQgvgLgfAKQgQADgLAAIgEAAgAC4COQgighAAgxQAAgvAiggQAjgiAuAAQAxAAAhAiQAiAgAAAvQAAAxgiAhQghAigxAAQguAAgjgigAD+AoQgKALAAAPQAAAQAKALQAMALAPAAQAPAAAMgLQAJgLABgQQgBgPgJgLQgMgLgPAAQgPAAgMALgAieCNQASgDAXAAIANAAIAKABIAZAYIgEADIgZgEQgZgCgQAAIgyAHQAFgQAagKgAh1B0QgTgFgUgCIgIgBQgdgBgdAFIA8gZQg3gyhdglQgngNgfgfIBHAQIAGABQA3AMApgEQg8gbgqhRQBsBPBngUQhTgdgghXQCBBQBogbQhJgRgngnQgOgOgLgSQA2AWAxAKQBKASBBgKQDIgCAhAHQAkAGglgFIAAADIgvAAQgnACglAEQgrAFgpALQgHABgHACQgrAMglASIgBAAQgMAEgKAGIgBABQggARgcAWQhlBKgXA3IAIALQAOAUAQATIALAMg");
	this.shape_4.setTransform(-14.4,-6.4714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.browneyeL, new cjs.Rectangle(-53.5,-29.4,107,58.9), null);


(lib.bluesunglasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGlkYQChgQBUAGQAHABAHABQBUAIAhALQAbAJAWATQAFAEAEAEQAaAYAQAnQAOAggHBxQgCASgBAUQgEAqgKAiQgBADAAACQgaBSg/AmQhbA4gmAKQgmAJg9gEQhAgDgugKQg7gMgrgYQgSgKgQgMQgkgageglQgTgZgQggQgBgCgBgDQgQghgNgpQgDgKgCgIQgCgLgBgLQgFgnAIgoQACgKADgKQA4iMCugQgAq7kjQC6gEBaARQBaAPAhALQAhALAaAZQAaAYAQAnQAPAmAFBXQAAABABACQACA5giA5QgBADgCACQgPAZgWAZQgmArgcAbQgcAcgTANQgmAZhdAIQhKAHgygFQgNgBgLgCQgLgCgKgDQgqgKgjgTQgdgQgagXQgWgUgTgYQgbgkgPgtQgJgXgFgaQgFgVgCgTQgCgNgBgMQgFgqACgoQAVizC5gFg");
	this.shape.setTransform(106.3008,38.9071);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("APxi2Qg9gFgPAwQgBAjgFAkQgIA5gSA5QgBADgBACQgFASgHATIgVA0QgIAQgJAPQgqBGg/ApQhrAyhzAJQhjAFhmgSQhWgQgvgfQAPAUBbBEQAsAXA4AOQBaAYB3ACQBJADBXgdQAogNAsgUQBAgnAphDQAZgqARg0QAAgBAAgBQAUg5ALhEQAHgrAEgvQACgJAEgIQACgEADgEQAVgcAxgDAPxi2IAIipIBvBgIgLCbgAP5lfQiNgwiEgTQicgYiNATQgSACgSAEQghAGglAIQglAJgmAMIjUA5QhsAsjXhMIjYg6QhggThtAFQhvAAhnASQhwAShlAnIgKCkIBJA7QgDAgABAfQABA6ALA4QAHAoAMAoQAIAXAJAVQABAAAAABQAiBKA9AxAAHgqQgEgOgEgMQgehWgpANQgXADghBGQgRAjgTA1IgUAlQgYAtgYAnQgKAQgJAOQhBBhgrANQhlAkhSAQQhHAPhGgGQgKgBgKgCQgNgCgMgBQg4gIgGgBIh6ghAAHgqQgUAugTAqQgBADgBACQgfBEgbA0QgEAIgDAIQgwBZgrAnQgrAmglAYQg9Anh5AKQgIABgJAAQhIAFhPgMQgfgEgggHQgOgDgOgEQgIgCgJgCQgpgMghgPQg2gYglghQgKgJgJgLAAHgqQAMAvAPApQABADABACQAYBFAfAzQAOAaARAVQAfAnAjAYAxni+QBOALgFAw");
	this.shape_1.setTransform(112.75,43.2276);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ApqEiIgYgDIgVgFQgqgKgjgTQgdgQgagXQgWgUgTgYQgbgkgPgtQgJgXgFgaQgFgVgCgTIgDgZQgFgqACgoQAVizC5gFQC6gEBaARQBaAPAhALQAhALAaAZQAaAYAQAnQAPAmAFBXIABADQACA5giA5IgDAFQgPAZgWAZQgmArgcAbQgcAcgTANQgmAZhdAIQgrAFgjAAQgZAAgVgDgAI5EdQhAgDgugKQg7gMgrgYQgSgKgQgMQgkgageglQgTgZgQggIgCgFQgQghgNgpIgFgSIgDgWQgFgnAIgoIAFgUQA4iMCugQQChgQBUAGIAOACQBUAIAhALQAbAJAWATIAJAIQAaAYAQAnQAOAggHBxIgDAmQgEAqgKAiIgBAFQgaBSg/AmQhbA4gmAKQgbAGgnAAIghgBg");
	this.shape_2.setTransform(106.3008,38.9071);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFFF").s().p("AqrGCIgUgCIgZgEIg+gJIh6ghQg9gwgihKIgBgCQgJgVgIgXQgMgngHgoQgLg6AAg5QgCgfADgfQAGgwhPgLIAKilQBlgmBwgTQBngRBwAAQBsgFBgASIDYA6QDYBNBrgtIDUg5QAmgMAkgIQAmgJAhgGIAkgGQCNgSCcAXQCDATCOAxIBvBfIgMCbIhshSIAJioIgJCoQg8gEgPAwQgBAjgFAjQgIA5gSA6IgCAFIgMAkIgWA0QgIARgIAPQgrBFg+AqQhrAyh0AIQhiAGhmgSQhWgQgwgfQgigZgfgnQgRgVgOgZQgeg0gZhEIgCgFQgPgqgMgwIgIgZQgehVgpANQgXACghBGQgRAjgTA1IgUAmQgYAtgYAnIgTAeQhBBhgrAMQhlAkhSAQQgyALgxAAQgVAAgVgCgAr7khQi5AFgWCzQgBAoAFApIACAYQADAVAFAVQAFAaAIAXQAQAtAaAjQAUAZAWAUQAZAWAeAQQAjAUApAKIAWAEIAXAEQAzAFBJgHQBegJAmgZQASgMAdgcQAcgcAlgrQAXgYAPgZIADgFQAig6gDg5IAAgDQgFhXgPgmQgQgmgagYQgagZghgLQghgLhagQQhIgNiDAAIhJABgAFlkXQiuARg4CLIgFAVQgIAnAEAnIAEAWIAFATQAMApARAhIACAFQAPAgAUAYQAdAmAkAaQARAMASAJQArAZA6AMQAvAJBAAEQA9ADAmgJQAmgKBbg3QA+gnAbhRIABgFQAKgjADgpIAEgnQAGhwgNggQgQgngagZIgJgIQgXgSgagKQgigKhTgJIgPgBQgYgCgeAAQhMAAhyALg");
	this.shape_3.setTransform(112.75,38.7886);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00C3F0").s().p("AJhE3Qh3gChagYQg4gOgtgXQhahEgQgUQAwAfBVAQQBmASBjgFQB0gJBqgyQA/gpAqhGQAJgPAIgQIAVgzIANglIACgFQARg6AJg5QAEgkABgjQAQgwA8AFIBsBSQgxADgVAcIgEAIQgEAIgDAJQgEAwgHArQgLBEgTA4IgBACQgRA0gYAqQgpBDhBAnQgsAUgoANQhQAbhEAAIgLgBgApmErQgfgEgggHIgcgHIgRgEQgpgMghgPQg2gYgmghQgJgJgKgLIB7AhIA+AJIAZADIAUADQBFAGBIgPQBRgQBmgkQAqgNBChhIATgeQAXgmAYgtIAUglQATg2ARgjQAihGAXgDQApgNAdBWIAIAaIgmBZIgCAFQgfBEgbAzIgIAQQgvBZgrAnQgsAmgkAYQg9Anh5AKIgRABIgqACQg1AAg4gJgAxhk3QBOALgFAwg");
	this.shape_4.setTransform(112.2,55.3101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluesunglasses, new cjs.Rectangle(-1,-1,227.5,88.5), null);


(lib.blueshoeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AF2BPQAjg4hDhWQgQgUgVgWQhzg5hLA2QgtAhgdBLQhOARgDgrQgBgLAEgQQAwhEA0gCQAaAAAaAPAA/h7QgBgrg5AHQgOABgUAGQhVA3AIAoQADAOAOAMQAYAVAZgQAF2BPQArAzhLA5QgMAJgPAJQjSBTh9hDQilg/iLhMQhWhJAdgyAAHChQB6AfBxguIB0gwQAKgJAGgKAAHChQAOhrAUg2Ahoi+QAVg9g3ABQg4Brh6hLQhdBuAcBDQAHARAPAOIEyCXQAfAMAdAIAhoi+QhvBlAzAoQBAAcgGgkAAFifQgJhLhkAs");
	this.shape.setTransform(-0.0081,0.0032);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AB3C6IkwiYQgPgOgHgRQgchCBdhtQB6BLA3hsQA3gBgVA+QhuBlAyAnQBAAbgGgiQADANANALQAZAVAZgQQADAsBPgSQgUA3gOBrQgegHgggNg");
	this.shape_1.setTransform(-17.4003,-4.5008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUDHQilg/iLhMQhWhIAdgzQAHARAPAOIEyCXQAfAMAdAIIADABIADABQAuAKAtAAIAAAAIAAAAQBBAAA/gXIABAAIAEgCIADgBIACgBIB0gwQAKgIAGgLQgGALgKAIIh0AwIgCABIgDABIgEACIgBAAQg/AXhBAAIAAAAIAAAAQgtAAgugKIgDgBIgDgBQAOhrAUg2QhOASgDgsIAAgDQAAgKADgOQAwhEA0gCQg0ACgwBEQgDAOAAAKIAAADQgZAQgYgVQgOgMgDgOQAGAkhAgcQgzgnBvhmQBkgsAJBLQgOABgUAGQhOAzAAAmIABAGIgBgGQAAgmBOgzQAUgGAOgBQA5gHABArQAaAAAaAPQgtAhgdBLQAdhLAtghQBLg2BzA5QAVAWAQAUQBDBWgjA4QArAzhLA5IgbASQh1AuhaAAQhJAAg3geg");
	this.shape_2.setTransform(-0.0081,2.2005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueshoeR, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.blueshoeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABpi+QgSgzAkgIQAHgBAJAAQABABAAAAQARAhAXAPQA1AjBUg0QANAPAKAOQAdAnALAhQAPArgNAhQgBABgBACQgHAPgNANIkyCXQgfANgdAHQgCgKgBgKQgCgQgCgOQgMhHgPgoQBOARADgrABpi+QAAABABAAQAUASAOAQQAjAmAFAbQACAKgCAJQgDAMgMAKQgOAGgLADQgmALAFgcQgDAOgOAMQgYAVgZgQQABgLgEgQQgwhEg0gCQABgrA5AHQAOABAUAGQBVA3gIAoAgEifQACgTAHgLQAZgiBLAhAl1BPQgDAEgCADQgJAMgBANQgCAPAHAPQACAEADAEQAMATAZATQAMAJAPAJQAmAQAkAKQCRApBhgpQAKgEAJgFQA+gYA5gZQAUgJAUgJQAQgHAQgHQAegPAegPQAbgOAagOQAIgHAHgHQAcgaAMgXQASgigQgbAhyhsQAtAhAdBLAg+h7QgaAAgaAPAl1BPQgDgEgCgFQgOgeAOgnQAKgeAbgiQAQgUAVgWQBzg5BLA2AgGChQh6AfhxguIh0gvQgKgJgGgL");
	this.shape.setTransform(0.011,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjwDRQgkgLgmgPIgbgSQgZgUgMgSIgFgIQgHgPACgPQABgNAJgMIAFgHIgFgJQgOgeAOgmQAKgfAbgiQAQgUAVgVQBzg6BLA2QAtAiAdBKQgdhKgtgiQAagPAaABQABgrA5AGQACgSAHgMQAZgiBLAhIABABQAUATAOAPQAjAnAFAaQACAKgCAJQgDANgMAJIgZAKQgmAKAFgbQgDAOgOALQgYAVgZgQIAAgDQAAgKgDgNQgwhEg0gCQA0ACAwBEQADANAAAKIAAADQgDAshOgSQAPAoAMBHIAEAeIADAUQAdgHAfgNIEyiXQANgMAHgQIACgDQAQAbgSAjQgMAVgcAbIgPAOIg1AcIg8AeIggAOIgoASQg5AZg+AYIgTAJQgwAUg9AAQg8AAhJgUgAhnCXQAtAAAugKIACgBIAEgBIgEABIgCABQguAKgtAAIAAAAIAAAAQhBAAg/gXIgBAAIgEgCIgDgBIgCgBIh0gwQgKgIgGgLQAGALAKAIIB0AwIACABIADABIAEACIABAAQA/AXBBAAIAAAAIAAAAgABrhOIABgHQAAgmhOgzQgUgFgOgCQAOACAUAFQBOAzAAAmIgBAHg");
	this.shape_1.setTransform(0.011,2.1998);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("Ai2C5IgFgdQgLhHgPgpQBOASAEgsQAYAQAZgVQANgLADgOQgEAbAmgLIAZgIQALgJADgNQACgJgCgKQgGgbghgmQgPgPgUgTIgBgBQgRgyAjgIQAHgCAKAAIABACQARAgAWAPQA0AjBVg0IAXAdQAcAnAMAhQAPArgOAgIgBADQgHAPgOANIkwCYQgfAMgfAIIgCgVg");
	this.shape_2.setTransform(17.3947,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueshoeL, new cjs.Rectangle(-40.4,-26.6,80.9,53.2), null);


(lib.blueeyeR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgmAAQAAAQALAKQAMALAPAAQAQAAAMgLQALgKAAgQQAAgPgLgKQgMgLgQAAQgPAAgMALQgLAKAAAPg");
	this.shape.setTransform(-14.2,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEQA0QAUgGAUgBQAGAAADgBQAegCAfAFIg/gZQA5gxBhgkQANgFANgGQAZgOAWgUIhLAPQgCAAgCABQg6AMgrgDQA+gbArhRQhwBOhqgUQBAgVAkg3QAMgSAJgVQgqAZgoAOQhXAghLgSQAYgGAVgIQA8gXAegpQADgEADgFQAAAAABgBQgDABgCAAQgNAFgLAEQh9ArhigNQjOgDgkAHQgkAGAlgEAD4BKQgDADgDADQgJAJgJAKQgLALgNAKQgQAPgRANQhVBEhrAsQkPBMiTihQhPhcgSg8QgJgfAIgWQABgBAAAAQBIhhBSgzQARgKARgJIAAAAQAIgEAHgDIBBgWQAYgGAcgCQAYAAAZAAQApACAlAFQAuAFAqAKQAGABAIADQABAAABAAQAsAMAlARIABAAQALAFALAGIABABQAiAQAdAXQBrBLAXA2QgEAFgEAGQgPAUgPATQgGAGgGAFQgDAEgDADQgCADgDADQAGgBAGAAQAGAAAGAAQAZAAATAEQAEABAEACQATAJAFAOQgcgEgYgDQgRgBgaADQgNABgOACACzCSIAZgWQALgBAJABQAaACALAJIAXARACsCZQAwgKAhAKQATADAMgBAj2gDQAAAwAkAhQABABABABQAiAgAxAAQAuAAAkggQABgBACgBQAighAAgwQAAgvgighQglgjgwAAQgzAAgiAjQgkAhAAAvg");
	this.shape_1.setTransform(0.0368,-0.0064);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("Ai1CaQgggegTgjQgagyAAg8QAAguAPgoQALgdAUgbQASgWAYgPQAggUArgGIAxAAQApACAkAEQAuAFAqALIAOAEQArANAmAYQATAbAMAdQAOAoAAAuQAAA8gaAyQgSAjggAeQhMBJhrAAQhqAAhLhJgAhVhLQgkAhAAAuQAAAxAkAhIACADQAiAfAxAAQAtAAAkgfIADgDQAighAAgxQAAgugighQglgigvAAQgzAAgiAig");
	this.shape_2.setTransform(-12.475,-0.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlECXQhQhdgRg7QgJgfAIgXIABgBQBIhhBSgzQAQgKARgIIAMATIgLgTQAHgFAHgCIBCgWQAYgGAbgCQgrAGgfAUQgZAPgSAWQgUAbgKAdQgQAoAAAuQAAA8AbAyQATAjAfAeQBLBJBsAAQBqAABMhJQAfgeATgjQAagyAAg8QAAgugPgoQgMgdgTgbIAFgIIAWAKIAAABQAjARAdAWQBrBLAWA3IgHALIgfAmIgMAMIgFAHIgFAGIgGAGIgTASIgXAWQgRAPgRANQhVBEhsAsQhXAYhJAAQidAAhjhtgAgyAEQgLgKAAgQQAAgPALgLQALgLARAAQAQAAAKALQALALAAAPQAAAQgLAKQgKALgQAAQgRAAgLgLgADPjEQglgYgsgNIgOgEIAQADIACABQArALAmASIgEAIIAAAAg");
	this.shape_3.setTransform(-11.8132,2.4186);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABoDZQgigKgvALIgGgFQARgNARgPIADADIgYAXIAYgXQALgBAJABQAaACALAKIAYAQIAAAEIgEAAQgLAAgQgDgAllCRIgDgDQgjghAAgxQAAgvAjggQAigiAzAAQAxAAAkAiQAiAgAAAvQAAAxgiAhIgCADQgkAfgvAAQgxAAghgfgAk+AoQgLALAAAPQAAAQALALQALALARAAQAQAAALgLQALgLAAgQQAAgPgLgLQgLgLgQAAQgRAAgLALgACSCgQgRAAgaACIgaAEIgDgDIATgSIAGgGIALgBIANAAQAYAAATADIAJAEQATAJAEANIg0gHgAB5ByIAfgnIAHgLQgWg3hrhKQgdgWgigRIAAgBIgWgKIgBAAQgmgSgrgLIgCgBIgQgDQgpgLgugFQglgEgpgCIgyAAIgBgDQglAFAkgGQAkgHDQACQBhANB8gqIAZgJIAEgCIgBACIgFAJQgeApg8AXQgVAIgXAFQBJATBYggQAngPAqgZQgJAWgLASQgkA2hAAWQBqAUBwhPQgrBRg/AbQAsAEA5gMIAFgBIBKgQQgWAVgZANIgZAKQhiAlg5AyIA/AZQgegFgeABIgJABQgUACgUAFIgOAKIAMgMg");
	this.shape_4.setTransform(14.975,-6.4714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueeyeR, new cjs.Rectangle(-55.5,-29.4,111.1,58.9), null);


(lib.blueeyeL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnAAQAAAQgLAKQgMALgQAAQgQAAgLgLQgLgKAAgQQAAgPALgKQALgLAQAAQAQAAAMALQALAKAAAPg");
	this.shape.setTransform(14.25,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aj3BKQAMAMANAMQAHAIAIAHQADADAFAEQAQAPARANQBKA7BcAqQAMAGAOAFQAiAJAgAHQBkASBRgSQBggWBFhJQAEgDACgDQB5iNgXhBQgxhCg3gtQgpgigsgWIgBAAQgHgFgGgCIhCgWQgZgGgbgCQgYgBgZABQgpACglAEQguAFgqALQgDAAgDABQgEAAgEACQgtAMgnASIAAAAQgHACgGAEQgFACgEACIgBABQgiARgdAWQgQALgNALQgiAZgXAYQggAggMAbQAEAFAEAFQAPAUAQATQAGAGAFAGQADADACAEQADACADAEQgGgBgGAAQgGAAgHAAQgXAAgUADQgJADgGAFQgNAHgEALQAJgBAIgBQASgDARgCQARAAAaACQANACAOACAD3gEQAAAwgkAhQgiAigzAAQgwAAgkgiQgjghAAgwQAAgvAjghQAkgiAwAAQAzAAAiAiQAkAhAAAvgAkQAzQgTgFgUgCQgFAAgEgBQgFAAgFAAQgZAAgaAEIA/gZQgGgGgGgFQgkgbgxgYQgVgKgYgJQgFgDgGgCQgPgFgOgHQgYgNgVgUIBKAQQADAAACABQAbAFAYADQAbACAXgCQgbgLgXgWQgfgdgZguQAcAUAcANQArAVAqAGQAnAGAmgHQgugQgfggQgRgSgMgWQgIgNgGgPQAWANAVAKQAFACAGADQA6AaA2AFQAoAEAmgKQgogJgfgQQgEgCgDgCQgUgLgPgNQgMgLgJgNQgEgFgDgEQAAgBgBgBQADABACABQANAEALAFQARAGASAFQAbAIAZAFQAaAFAYACQAtAEApgGQDPgCAjAHQAkAGglgFAiyCSIgZgXQgDAAgBAAQgIgBgHABQgbACgLAKIgXARAiqCZQgUgEgRgBQgagCgUAGQgTAEgLgB");
	this.shape_1.setTransform(0.0154,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiGDcIAAgEIAYgQQALgKAbgCQAGgBAIABIAFAAIADgDQARAPARANIgFAFQgUgEgRgBQgZgCgUAGQgRADgKAAIgEAAgAgdDTIgYgXgADACOQgkghAAgxQAAgvAkggQAjgiAxAAQAzAAAiAiQAjAgAAAvQAAAxgjAhQgiAigzAAQgxAAgjgigAEIAoQgLALAAAPQAAAQALALQALALAQAAQARAAALgLQALgLAAgQQAAgPgLgLQgLgLgRAAQgQAAgLALgAi1CVQAHgFAJgDQATgDAYAAIANAAIALABIAaAYIgEADIgagEQgagCgSAAIgjAFIgQACQADgLANgHgAh6B0QgUgFgUgCIgJgBIgKAAQgZAAgZAEIA/gZIgNgLQgjgcgygYIgsgTIgMgFQgPgEgOgHQgYgNgUgUIBKAQIAEABQAbAFAYADQAcACAXgCQgbgLgYgWQgfgdgYguQAcAUAbANQArAVAqAGQAnAGAngHQgugQggggQgQgSgNgWQgHgNgGgPQAVANAVAKIALAFQA7AaA1AFQApAEAlgKQgogJgfgQIgHgEQgUgLgPgNQgMgLgJgNIgGgJIgBgCIAEACIAZAJIAiALQAbAIAaAFQAYAFAYACQAuAEAogGQDQgCAkAHQAkAGglgFIgBADIgxAAQgqACglAEQguAFgpALIgHABIgJACQgsAMgnASIgBAAIgNAGIgJAEIgBABQghARgdAWQgPALgOALQgiAZgXAXQggAggLAbIAHALQAPAUARATIALAMg");
	this.shape_2.setTransform(-14.925,-6.4714);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZD7QghgGgigJIgagLQhcgqhKg7QgRgNgRgPIgIgHIgOgPIgagYIgFgGIgFgHIgLgMQgRgTgPgTIgHgLQALgbAgggQAXgYAigZQAOgLAPgLQAdgWAigRIABgBIAJgEIANgGIAFAIIgEgIQAngSAsgMIAJgCIAHgBIgHABQgwAOgoAaQgKAOgIAPQgHANgFAOQgLAbgDAeQgCAOAAAPQAABmBMBJQAbAaAfARQA4AeBFAAQBrAABLhJQBNhJAAhmQAAgugQgoQgLgdgTgbIAPgaQArAWAqAiQA2AtAxBCQAYBBh6CNIgFAGQhGBJhgAVQgoAJgtAAQgtAAgxgJgAgDAEQgLgKAAgQQAAgPALgLQAKgLAQAAQARAAALALQALALAAAPQAAAQgLAKQgLALgRAAQgQAAgKgLgADcjEQgpg0hMgLQAbACAYAGIBCAWQAHACAHAFIgOAaIAAAAg");
	this.shape_3.setTransform(11.8654,2.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("Ah8DFQgfgRgbgaQhMhJAAhmQAAgPACgOQADgeAKgbQAGgOAHgNQAIgPAKgOQAogaAwgOIAGgBQAqgLAugFQAkgEApgCIAxAAQBMALAqA0QATAbALAdQAPAoAAAuQAABmhNBJQhLBJhrAAQhEAAg4gegAhShLQgjAhAAAuQAAAxAjAhQAkAiAvAAQAzAAAigiQAkghAAgxQAAgugkghQgigigzAAQgvAAgkAig");
	this.shape_4.setTransform(12.525,-0.8875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueeyeL, new cjs.Rectangle(-55.5,-29.4,111.1,58.9), null);


(lib.armR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACFBKQA/ApABBBAjEizQBnAoAXBb");
	this.shape.setTransform(124.4,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ADbAGQgIgQAAgRQgChBBpgyIgEiZQgDhZAmgWQBGgeAsBgQAsBegqBbIgMArQAjBwBfAgQAWAOAUAQQA+AzAiBIQApBXg0A2QgBAWgEARQgNBBhAgUQgKgDgLgGQg4gZglheADIgaQglAFgRA5QhZAKhfgGQhHgEhMgNQgigDgkgIQg4gMg8gXQg6gWg+ghQgzgZg1ggQgWgMgWgOIhfA2QAUAPAVAOQAvAhAyAcQCNBOCfAsQABABACABQA1APA2AKQBnARBogFQA6gCA7gKQAEBKBkgKADRB7QAGApAbAgQAYAcAoATQA5AcBZAMQAdAEAdgFAG2CjQAXgNAWgIQBhgmBAA6QAOAfgQAaQgvAwhVAP");
	this.shape_1.setTransform(73.4866,41.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJwGaQgKgDgLgGQg4gZglheQBVgPAvgwQAJgOAAgPQAAgOgHgOIgDgCQgmghgxAAIAAAAIAAAAQghAAgmAPQgWAIgXANQAXgNAWgIQAmgPAhAAIAAAAIAAAAQAxAAAmAhIADACQAHAOAAAOQAAAPgJAOQgvAwhVAPQgdAFgdgEQhZgMg5gcQgogTgYgcQgbgggGgpQAGApAbAgQhkAKgEhKQg7AKg6ACQhoAFhngRQg2gKg1gPIgDgCQifgsiNhOQgygcgvghIgpgdIBfg2IAsAaQA1AgAzAZQA+AhA6AWQA8AXA4AMQAkAIAiADQBMANBHAEQBfAGBZgKQARg5AlgFIALgBQgChBBpgyIgEiZQgDhZAmgWQBGgeAsBgQAsBegqBbIgMArQAjBwBfAgQAWAOAUAQQA+AzAiBIQApBXg0A2QgBhCg/gpQA/ApABBCQgBAWgEARQgKAxgnAAQgNAAgPgEgAG3BhQgXhchngnQBnAnAXBcgADbAGQgIgQAAgRQAAARAIAQgALCFGIAAAAg");
	this.shape_2.setTransform(73.4866,41.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armR, new cjs.Rectangle(-1.5,-1.5,150,85.9), null);


(lib.armL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AibgUQAdAEANAsQBFAIBKgFQA4gDA7gKQAbgDAcgGQAsgJAvgSQAtgRAxgaQAngTAqgZQARgKARgLIBKArQgPALgQALQgmAagnAWQhuA9h8AiQgBABgBAAQgqAMgqAIQhQANhSgDQgtgCgugIQgDA6hOgIQgTAWgfAPQgsAWhGAJQgXADgXgDAiqAFQAGgMAAgOQACgzhSgnIADh3QAChGgdgRQg3gYgjBLQgiBKAhBHIAJAhQgbBYhKAZQgSALgPAMQgwAogbA5QggBDApArAlVCAQgSgLgRgGQhMgegyAuQgLAYANAUQgyAgAAA0QAAARADANQAKAzAygQQAIgCAJgEQArgUAdhJAiiBgQgFAggVAZAn0CrQAkAlBCANAjzgaQhRAegSBI");
	this.shape.setTransform(0.0236,0.0411);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AojEdQgDgNAAgRQAAg0AyggQgHgLAAgMQAAgKAFgLIABgBIABgBIAAgBQAegZAmAAIAAAAIAAAAQAaAAAeAMQARAGASALQgSgLgRgGQgegMgaAAIAAAAIAAAAQgmAAgeAZIAAABIgBABIgBABQgFALAAAKQAAAMAHALQgyAgAAA0QgpgrAghDQAbg5AwgoQAPgMASgLQBKgZAbhYIgJghQghhHAihKQAjhLA3AYQAdARgCBGIgDB3QBSAngCAzQAAAOgGAMQAGgMAAgOIAJABQAdAEANAsQBFAIBKgFQA4gDA7gKQAbgDAcgGQAsgJAvgSQAtgRAxgaQAngTAqgZIAigVIBKArIgfAWQgmAagnAWQhuA9h8AiIgCABQgqAMgqAIQhQANhSgDQgtgCgugIQgDA6hOgIQAVgZAFggQgFAggVAZQgTAWgfAPQgsAWhGAJQgXADgXgDQhCgNgkglQAkAlBCANQgdBJgrAUIgRAGQgLAEgKAAQgfAAgIgngAlWBMQAShIBRgeQhRAegSBIgAn0CrIAAAAg");
	this.shape_1.setTransform(0.0236,0.0411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armL, new cjs.Rectangle(-58.4,-33.3,116.9,66.69999999999999), null);


(lib.Resetbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_4.setTransform(-35.8704,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_5.setTransform(-36.041,6.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_6.setTransform(-35.5135,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_7.setTransform(-35.7008,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.Face2btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAGiWh0hmQCLBzgGCFIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMQAcgLAGAAQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBjIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQABhjgogdQAtAOAJB3IAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAh/BghaIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhdBYAAB8QAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAh0hRhUIgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQBTBWAAB3QAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_18.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},3).wait(1));

	// gradients
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(204,204,204,0.502)","rgba(102,102,102,0.502)"],[0.671,1],-19.8,20.7,0,-19.8,20.7,34.7).s().p("AADACIgWgRIgGgFIAFADIAgAXIAHAGIAHAJIgXgTg");
	this.shape_19.setTransform(20.7875,-22.9875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)"],[0.671,1],0,-0.8,0,0,-0.8,34.7).s().p("AAAEmQh1AAhThYQhUhZAAh8QAAhrA9hQIADgDIADgCQARgQATgNQBMhBBpAAQAnAAAiAJQA3ANAtAkQgugcg2gLQgigHgmAAQhmAAhQA1IgKAJQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhSgwhAQgOgRgQgQIgBgBIAhAaQA8BQAABqQAAB8hUBZQg4A8hIATQgiAJgmAAIgBAAg");
	this.shape_20.setTransform(0.9125,-1.4499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgABGDbQBIgTA4g8QBThZAAh8QAAhqg7hQIALAKIgMgLIgHgIIgHgGIgggYIgFgDIgBAAQgtgkg2gNQgjgJglAAQhqAAhMBCQgTAMgSAQIAAAAIgCACIgEADQg8BQAABrQAAB8BTBZQBUBYB2AAQAlAAAjgJg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","#000000"],[0,1,1],0,26.6,0,-27.6).s().p("Ai/CuQhPhLAAhoQAAhqBPhKIAKgJQBQg2BmABQAmgBAiAHQA2ALAtAcIABABIAFAEIAYASIAWATIANAKIgMgJIghgaIABABQAQAPAOARQAwBAAABTQAABohPBLQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_22.setTransform(0.925,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,1,1],0,27.1,0,-27.1).s().p("Ai/C0QhPhKAAhqQAAhoBPhLQBQhLBvAAQAnAAAiAJQBDARA0AxIABABQAQAQAOARQAwA/AABSQAABqhPBKQg0AxhDARQgiAJgnAAQhvAAhQhLg");
	this.shape_23.setTransform(0.925,-1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0.671,1,1],0,0,0,0,0,34.7).s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQAnAAAiAJQBIASA4A5QBUBTAAB1QAAB2hUBUQg4A4hIASQgiAJgnAAQh1AAhThTgAi/jBQhPBLAABpQAABpBPBKQBQBLBvAAQAnAAAigJQBDgRA0gxQBPhKAAhpQAAhTgwg/QgOgRgQgQIgBgBQg0gxhDgRQgigJgnAAQhvAAhQBLg");
	this.shape_24.setTransform(0.9125,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0.251,1],0,-40.4,0,40.4).s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAgClLQh2AAhUBTQhTBTAAB2QAAB1BTBUQBUBTB2AAQAlAAAjgJQBIgSA4g4QBThUAAh1QAAh2hThTQg4g4hIgTQgigIgmAAIAAAAg");
	this.shape_25.setTransform(1.25,5.1499);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_26.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26}]},1).wait(1));

	// color
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFABDE").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_27.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


(lib.Face1btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// haze
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.173)").s().p("AANCTIgBgBIABgBIABAAIAAgCQgyiNAkiQIAAgCIAAgBIgCABIAAAAIgHARIAHgTIACAAIABABIAAADQgjCQAxCNIAAACIgBACIgBAAg");
	this.shape.setTransform(-36.5782,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.192)").s().p("AgTgRQAAg6AQg0IAGgRIAAAAIACgBIABABIAAACQgkCQAyCNIAAACIgBAAIgBABQglhLAAhYg");
	this.shape_1.setTransform(-37.1875,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.153)").s().p("AAMCVIgBgBIABAAIABgDIAAgCQgxiNAkiQIAAgDIgCgBIgCABIAAgDIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAAEQgjCQAxCLQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAg");
	this.shape_2.setTransform(-36.3952,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.133)").s().p("AAKCVIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgyiLAkiQIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCgBIABgCIACABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQABADgBACQgjCQAxCLQABADgBACQgBACgDACIgBgCg");
	this.shape_3.setTransform(-36.2157,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.114)").s().p("AAKCYIgBgBQADgBABgDQABgCgBgDQgxiLAkiQQAAgCAAgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCAAIAAgCIACAAQAEACAAACQACADgBAEQgjCOAxCLQABAEgBADQgCADgDABg");
	this.shape_4.setTransform(-36.041,6.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.094)").s().p("AAICYIABAAQADgCABgCQACgDgCgEQgwiLAjiPQAAgDAAgDQgCgCgDgCIgCgBIABgBIABAAQAEABABAFQACADgBAEQgjCOAxCLQABAEgBADQgCAEgEABIAAABIgBgCg");
	this.shape_5.setTransform(-35.8704,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.075)").s().p("AAICaIAAgBQAEgBABgEQACgDgCgEQgwiLAjiOQABgEgBgDQgCgFgEgBIgCAAIABgBIABAAQAFABABAFQADAEgBAFQgjCNAwCKQACAFgCAEQgCAFgEABIgBgBg");
	this.shape_6.setTransform(-35.7008,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.055)").s().p("AAHCcQAEgCACgFQACgEgCgFQgwiKAjiNQABgFgCgEQgCgEgFgCIgBAAIAAgCIACAAQAFACACAFQACAFgBAFQgiCNAwCKQACAFgDAFQgCAFgFACIAAgBg");
	this.shape_7.setTransform(-35.5135,6.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.035)").s().p("AAFCdQAFgCACgFQADgFgCgFQgwiKAjiNQAAgFgBgFQgDgFgFgCIgCAAIABgCIACABQAFACADAFQACAGgBAGQgjCMAwCJQADAGgDAGQgCAFgGADIgBgCg");
	this.shape_8.setTransform(-35.3332,6.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.016)").s().p("AAFCfQAFgDADgFQACgGgCgGQgwiJAjiMQABgGgCgGQgDgFgGgCIgBgBIAAgBIACAAQAGACADAGQADAGgCAHQgiCMAwCIQACAHgDAGQgCAGgHADIAAgBg");
	this.shape_9.setTransform(-35.1763,6.875);

	this.instance = new lib.haze();
	this.instance.setTransform(-15.8,31.55,0.4133,0.5505,0,-95.59,-100.0587);

	this.instance_1 = new lib.haze();
	this.instance_1.setTransform(21.4,11.3,0.3489,0.3489,178.7872);
	this.instance_1.alpha = 0.75;

	this.instance_2 = new lib.haze();
	this.instance_2.setTransform(26.55,24.9,0.35,0.35,180);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:11.3}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:15.5}},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// shine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEyQgkgXgLgXQgEgKB4AwQhYgYBnBGQgwgPgkgXgAlRDPQgWgbgGgWIgCgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABABQAMADBTBHQhLgzBLBjQgogdgbghgAFMgLQgNA7goA/QAhhWADhKQAGiWh0hnQCLBzgGCGIAAAAQBAA8hHCUQAoiqgnAEgAAvkeIgLgHQgdgWgmgFQgogGhJAeQAAgGAJgIQAJgIAdgMQAcgMAGABQAMgCASAAQArAAAcAGIAJADQAOAFANAHQARAJABAIQACAIgFALQgDAGgFAEIgGABQgLAAgRgLg");
	this.shape_10.setTransform(3.565,5.9499);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQAJh1AtgOQgpAdACBkIgCAEIgCABQCWAeCcgLQBLgGBMgOIAFgCIAAgCQABhkgogdQAtAOAJB3IAAABIABABQgLC0iYAfQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgdQgugSApAZQgrAZhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_11.setTransform(0.9125,-1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.251)").s().p("AgchGQAGBGA1BHQhHguAMhfg");
	this.shape_12.setTransform(-24.1831,6.6125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgWhLAWhKQANgpAbgqQg/CHAlCIQgIgUgGgTg");
	this.shape_13.setTransform(-31.5986,-1.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.6)").s().p("Ah/gTQBgAsBsgcQAZgHAagLQgaAQgZAJQgsASgoAAQg/AAg5gpg");
	this.shape_14.setTransform(0.5625,21.2423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AhzAlIgCAAQAMgCgfgOQgegOAvABIBZADIASAAIAFAGQAHAIALAAIAGgBQAIgBAGgGQAGgGABgHIAWgFQAagGAYgJQAYgKAOgQIABAAQAAANgHAJIgLANIgKAHIgQALQgIAGgsAOQgSAFgSADIgdADIgdABQgmAAgkgGgAA1AfgAA1AfIAxgPIgRAGIggAJIAAAAg");
	this.shape_15.setTransform(6.5719,37.484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.302)").s().p("AjSEeQgkgYgLgXQgEgKB4AxQhYgZBnBGQgwgOgkgXgAlRC6QgWgbgGgWIgCgKQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAMADBTBHQhLgzBLBjQgogcgbgigAFMgfQgNA6goA/QAhhWADhKQAChEgWg7QgZhAg3g1IgKgIIAKAIQAyAsAeAtQAvBJgEBOIAAAAQBAA+hHCSQAoipgnAEgAAvkJIgLgHQgdgVgmgGQgogFhJAdQAAgFAJgJQAJgIAdgMIANgFQARgGAEAAQAMgCASAAQArAAAcAGIAHACIACABQAOAFANAHQARAJABAIQACAIgFALQgDAHgFADIgGABQgLAAgRgLg");
	this.shape_16.setTransform(3.565,8.0125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("Aj0grIAAAAQACgcAFgXQANhFAigLQgeAVgHA7QgDAWABAaIgCAFIgCABQCWAeCcgLQBLgGBMgOIAFgBIAAgEQAAgagCgWQgHg7gegVQAiALANBFQAFAXACAeIAAABIABABQgICsibAnQBthegghAQgYgng+ATIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQgFACgpABQgeAhgSgcQgugTApAaQgrAYhCgcQhBgbAIAwQgCBLBfBIQiLg8gGieg");
	this.shape_17.setTransform(0.9125,3.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.353)").s().p("AgOBhQgVhHAThGIACgIQANgpAbgqQgVAtgJAuQgUBZAYBbQgIgUgGgTg");
	this.shape_18.setTransform(-31.5993,-1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:21.2423}},{t:this.shape_13},{t:this.shape_12,p:{y:6.6125}},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:25.4423}},{t:this.shape_12,p:{y:10.8125}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[]},1).wait(1));

	// hazy ring
	this.instance_3 = new lib.hazyring3();
	this.instance_3.setTransform(1,1.3,0.35,0.35,180);
	this.instance_3.alpha = 0.5898;

	this.instance_4 = new lib.hazyring2();
	this.instance_4.setTransform(1,1.3,0.35,0.35,180);
	this.instance_4.alpha = 0.5898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[]},1).wait(1));

	// ring
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.251)").s().p("AAAELQiGAAhfhaQhfhZAAh+QAAglAIgiQAUhSBEhAIAAAAIABgBIAAgBIADgCIADgBIACABIABACIgBADIgDADIAAAAIgCABIAAAAQhBA+gUBPQgIAiAAAlQAAB7BdBXQBdBYCDAAQAlAAAigHQBXgSBDg/QBdhXAAh7QAAglgIgiQgShIg3g5IgMgMIgLgKIgCgCIABgDIADgBIACABIAMAKIAAAAIAMAMQA5A7ASBLQAIAiAAAlQAAB+hfBZQhFBBhYASQgjAHgmAAIAAAAg");
	this.shape_19.setTransform(1.0625,4.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).to({_off:true},3).wait(1));

	// gradients
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#92FFB5").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvgAjdkJIgCACIACgCgACpktIAGAEIgFgEIgBAAg");
	this.shape_20.setTransform(1.25,5.1499);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#92FFB5").s().p("AkdENQghgggYgjQg9hZAAhxQAAhDAWg8QAPgnAYgkQAYgiAhgfIAUgSQBwheCZAAQAkAAAiAFQBuARBWBIIAUASQARAQAPARQBWBlAACFQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_21.setTransform(1.25,5.1499);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AkdENQghgggYgjQg9hZAAhxQAAhwA9haQAYgiAhgfQB3hwCmAAQAkAAAiAFQB7ATBdBYQB2BvAACcQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_22.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},1).wait(1));

	// color
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AkdENQghgggYgjQg9hZAAhxQAAhDAWg8QAPgnAYgkQAYgiAhgfIAUgSQBwheCZAAQAkAAAiAFQBuARBWBIIAUASQARAQAPARQBWBlAACFQAACdh2BwQhdBXh7ASQgiAGgkAAQimAAh3hvg");
	this.shape_23.setTransform(1.25,5.1499);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).to({_off:true},3).wait(1));

	// shadow
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(3,8,0.35,0.35,180);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-32.8,86.2,81.69999999999999);


// stage content:
(lib.MPHFinalggalaviz = function(mode,startPosition,loop,reversed) {
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
		this.Face1btn.addEventListener("click", ClickFace1btn.bind(this));
		function ClickFace1btn() {
			this.greeneyeL.x = 138;
			this.greeneyeL.y = 267;
			this.greeneyeR.x = 266;
			this.greeneyeR.y = 266;
			this.purplesunglasses.x = 220;
			this.purplesunglasses.y = 273;
			this.piratehat.x = 195;
			this.piratehat.y = 147;
			this.mouth2.x = 209;
			this.mouth2.y = 346;
		}
		
		this.Face2btn.addEventListener("click", ClickFace2btn.bind(this));
		function ClickFace2btn() {
			this.blueeyeL.x = 153;
			this.blueeyeL.y = 275;
			this.blueeyeR.x = 266;
			this.blueeyeR.y = 276;
			this.blackseed1.x = 115;
			this.blackseed1.y = 320;
			this.blackseed2.x = 213;
			this.blackseed2.y = 227;
			this.blackseed3.x = 283;
			this.blackseed3.y = 322;
			this.mouth3.x = 211;
			this.mouth3.y = 340;
			this.tealbow.x = 201;
			this.tealbow.y = 190;
		}
		this.Resetbtn.addEventListener("click", ClickResetbtn.bind(this));
		function ClickResetbtn() {
			this.armL.x = 500;
			this.armL.y = 94;
			this.armR.x = 564;
			this.armR.y = 62;
			this.blueeyeL.x = 788;
			this.blueeyeL.y = 405;
			this.blueeyeR.x = 883;
			this.blueeyeR.y = 405;
			this.blueshoeL.x = 583;
			this.blueshoeL.y = 433;
			this.blueshoeR.x = 670;
			this.blueshoeR.y = 433;
			this.browneyeL.x = 788;
			this.browneyeL.y = 463;
			this.browneyeR.x = 883;
			this.browneyeR.y = 463;
			this.burgundybow.x = 478;
			this.burgundybow.y = 386;
			this.burgundyshoeL.x = 583;
			this.burgundyshoeL.y = 416;
			this.burgundyshoeR.x = 670;
			this.burgundyshoeR.y = 416;
			this.greeneyeL.x = 788;
			this.greeneyeL.y = 347;
			this.greeneyeR.x = 883;
			this.greeneyeR.y = 347;
			this.legL.x = 550;
			this.legL.y = 553;
			this.legR.x = 572;
			this.legR.y = 553;
			this.mouth1.x = 841;
			this.mouth1.y = 570;
			this.mouth2.x = 905;
			this.mouth2.y = 565;
			this.mouth3.x = 762;
			this.mouth3.y = 563;
			this.pinkglasses.x = 833;
			this.pinkglasses.y = 233;
			this.piratehat.x = 500;
			this.piratehat.y = 236;
			this.regularseed1.x = 626;
			this.regularseed1.y = 530;
			this.regularseed2.x = 650;
			this.regularseed2.y = 530;
			this.regularseed3.x = 626;
			this.regularseed3.y = 568;
			this.regularseed4.x = 650;
			this.regularseed4.y = 568;
			this.blackseed1.x = 674;
			this.blackseed1.y = 530;
			this.blackseed2.x = 693;
			this.blackseed2.y = 530;
			this.blackseed3.x = 675;
			this.blackseed3.y = 568;
			this.blackseed4.x = 693;
			this.blackseed4.y = 568;
			this.tealbow.x = 478;
			this.tealbow.y = 365;
			this.tealshoeL.x = 583;
			this.tealshoeL.y = 398;
			this.tealshoeR.x = 670;
			this.tealshoeR.y = 398;
			this.witchhat.x = 626;
			this.witchhat.y = 268;
			this.yellowglasses.x = 833;
			this.yellowglasses.y = 218;
			this.bluesunglasses.x = 333;
			this.bluesunglasses.y = 84;
			this.purplesunglasses.x = 838;
			this.purplesunglasses.y = 143;
		}
		this.armL.on("pressmove", dragMe);
		this.armR.on("pressmove", dragMe);
		this.blueeyeL.on("pressmove", dragMe);
		this.blueeyeR.on("pressmove", dragMe);
		this.blueshoeL.on("pressmove", dragMe);
		this.blueshoeR.on("pressmove", dragMe);
		this.blueglasses.on("pressmove", dragMe);
		this.browneyeL.on("pressmove", dragMe);
		this.browneyeR.on("pressmove", dragMe);
		this.burgundybow.on("pressmove", dragMe);
		this.burgundyshoeL.on("pressmove", dragMe);
		this.burgundyshoeR.on("pressmove", dragMe);
		this.greeneyeL.on("pressmove", dragMe);
		this.greeneyeR.on("pressmove", dragMe);
		this.legL.on("pressmove", dragMe);
		this.legR.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.pinkglasses.on("pressmove", dragMe);
		this.piratehat.on("pressmove", dragMe);
		this.purplesunglasses.on("pressmove", dragMe);
		this.regularseed1.on("pressmove", dragMe);
		this.regularseed2.on("pressmove", dragMe);
		this.regularseed3.on("pressmove", dragMe);
		this.regularseed4.on("pressmove", dragMe);
		this.blackseed1.on("pressmove", dragMe);
		this.blackseed2.on("pressmove", dragMe);
		this.blackseed3.on("pressmove", dragMe);
		this.blackseed4.on("pressmove", dragMe);
		this.tealbow.on("pressmove", dragMe);
		this.tealshoeL.on("pressmove", dragMe);
		this.tealshoeR.on("pressmove", dragMe);
		this.witchhat.on("pressmove", dragMe);
		this.yellowglasses.on("pressmove", dragMe);
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX / stage.scaleX;
			evt.currentTarget.y = evt.stageY / stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.Resetbtn = new lib.Resetbtn();
	this.Resetbtn.name = "Resetbtn";
	this.Resetbtn.setTransform(384.8,546.7,1.2534,1.2534);
	new cjs.ButtonHelper(this.Resetbtn, 0, 1, 2, false, new lib.Resetbtn(), 3);

	this.Face1btn = new lib.Face1btn();
	this.Face1btn.name = "Face1btn";
	this.Face1btn.setTransform(129.25,546.7,1.2534,1.2534);
	new cjs.ButtonHelper(this.Face1btn, 0, 1, 2, false, new lib.Face1btn(), 3);

	this.Face2btn = new lib.Face2btn();
	this.Face2btn.name = "Face2btn";
	this.Face2btn.setTransform(257.05,546.7,1.2534,1.2534);
	new cjs.ButtonHelper(this.Face2btn, 0, 1, 2, false, new lib.Face2btn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ae0AAMg9nAAB");
	this.shape.setTransform(207.225,468.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.Face2btn},{t:this.Face1btn},{t:this.Resetbtn}]}).wait(1));

	// Body Parts
	this.armR = new lib.armR();
	this.armR.name = "armR";
	this.armR.setTransform(621.45,94.45,0.7816,0.7815,0,0,0,73.5,41.5);

	this.armL = new lib.armL();
	this.armL.name = "armL";
	this.armL.setTransform(501,94);

	this.tealshoeR = new lib.tealshoeR();
	this.tealshoeR.name = "tealshoeR";
	this.tealshoeR.setTransform(670,398);

	this.burgundyshoeR = new lib.burgundyshoeR();
	this.burgundyshoeR.name = "burgundyshoeR";
	this.burgundyshoeR.setTransform(670,416);

	this.tealshoeL = new lib.tealshoeL();
	this.tealshoeL.name = "tealshoeL";
	this.tealshoeL.setTransform(583,398);

	this.burgundyshoeL = new lib.burgundyshoeL();
	this.burgundyshoeL.name = "burgundyshoeL";
	this.burgundyshoeL.setTransform(583,416);

	this.witchhat = new lib.witchhat();
	this.witchhat.name = "witchhat";
	this.witchhat.setTransform(626,268);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(762,563);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(905.2,565.05,0.6487,0.659,0,0,0,0.3,0.1);

	this.mouth1 = new lib.mouth1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(841,570,0.4598,0.4598);

	this.piratehat = new lib.piratehat();
	this.piratehat.name = "piratehat";
	this.piratehat.setTransform(500,236.1,0.5078,0.5078,0,0,0,0,0.2);

	this.blackseed3 = new lib.seed_black();
	this.blackseed3.name = "blackseed3";
	this.blackseed3.setTransform(675,568);

	this.blackseed4 = new lib.seed_black();
	this.blackseed4.name = "blackseed4";
	this.blackseed4.setTransform(693,568);

	this.blackseed2 = new lib.seed_black();
	this.blackseed2.name = "blackseed2";
	this.blackseed2.setTransform(693,530);

	this.regularseed3 = new lib.regularseed();
	this.regularseed3.name = "regularseed3";
	this.regularseed3.setTransform(626,568);

	this.regularseed4 = new lib.regularseed();
	this.regularseed4.name = "regularseed4";
	this.regularseed4.setTransform(650,568);

	this.regularseed2 = new lib.regularseed();
	this.regularseed2.name = "regularseed2";
	this.regularseed2.setTransform(650,530);

	this.regularseed1 = new lib.regularseed();
	this.regularseed1.name = "regularseed1";
	this.regularseed1.setTransform(626,530);

	this.blackseed1 = new lib.seed_black();
	this.blackseed1.name = "blackseed1";
	this.blackseed1.setTransform(674,530);

	this.tealbow = new lib.tealbow();
	this.tealbow.name = "tealbow";
	this.tealbow.setTransform(478,365);

	this.burgundybow = new lib.burgundybow();
	this.burgundybow.name = "burgundybow";
	this.burgundybow.setTransform(478.1,386,0.3618,0.3618,0,0,0,0.3,0);

	this.yellowglasses = new lib.yellowglasses();
	this.yellowglasses.name = "yellowglasses";
	this.yellowglasses.setTransform(833,218,1.0027,1.0034);

	this.pinkglasses = new lib.pinkglasses();
	this.pinkglasses.name = "pinkglasses";
	this.pinkglasses.setTransform(833,233,1.0024,1.0024);

	this.blueglasses = new lib.bluesunglasses();
	this.blueglasses.name = "blueglasses";
	this.blueglasses.setTransform(838.7,121.25,0.936,0.862,0,0,0,112.9,43.2);

	this.purplesunglasses = new lib.purplesunglasses();
	this.purplesunglasses.name = "purplesunglasses";
	this.purplesunglasses.setTransform(848.6,143.1,0.9361,0.8618,0,0,0,11.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_1.setTransform(588.225,61.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA+BdIAAhpQAAgagRAAQgRAAAAAZIAABqIg4AAIAAhsQAAgKgEgGQgFgHgHAAQgIAAgEAGQgFAGAAALIAABsIg5AAIAAiyIA5AAIAAAVQAYgcAZAAQAdAAAJAfQAOgQAMgIQALgHAQAAQAoAAAAA3IAACCg");
	this.shape_2.setTransform(566.625,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BcIAAiyIA2AAIAAAeIABAAQAUgjAWAAIAKABIAAA3IgTgBQgfAAgBAnIAABZg");
	this.shape_3.setTransform(546.35,61.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AApCCIgKgrIg+AAIgKArIg9AAIBGkDIBBAAIBFEDgAgUAoIAoAAQgOg5gGg1IAAAAQgHA2gNA4g");
	this.shape_4.setTransform(528.4,57.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_5.setTransform(871.875,64.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_6.setTransform(855.675,64.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_7.setTransform(839.525,64.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_8.setTransform(824.225,64.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag+BGQgPgbAAgrQAAgsAPgZQAQgaAZAAQANAAAJAHQAJAHAKAPIABAAIAAgXIA5AAIAACzIg4AAIAAgYIgBAAQgLAPgJAIQgJAHgNAAQgaAAgPgagAgVAAQgBAtAWAAQAWAAAAgtQgBgtgVAAQgVAAAAAtg");
	this.shape_9.setTransform(806.55,64.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcCJIAAkRIA5AAIAAERg");
	this.shape_10.setTransform(792.45,60);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhEBlQgagjAAhCQAAhDAagiQAagjAwAAQA4AAAZA7Ig4AYQgIgNgGgGQgFgFgLAAQgRAAgHATQgIASAAApQAAAoAJASQAIATASAAQAdAAABgrIgcAAIAAgxIBaAAIAAAqQAAAzgZAdQgZAdgqAAQguAAgagkg");
	this.shape_11.setTransform(776.15,60.675);

	this.greeneyeL = new lib.greeneyeL();
	this.greeneyeL.name = "greeneyeL";
	this.greeneyeL.setTransform(788.1,347,0.8296,0.813,0,0,0,0.1,0);

	this.greeneyeR = new lib.greeneyeR();
	this.greeneyeR.name = "greeneyeR";
	this.greeneyeR.setTransform(883,347,0.8291,0.813);

	this.browneyeR = new lib.browneyeR();
	this.browneyeR.name = "browneyeR";
	this.browneyeR.setTransform(883,463,0.8466,0.8195);

	this.browneyeL = new lib.browneyeL();
	this.browneyeL.name = "browneyeL";
	this.browneyeL.setTransform(788.1,463.1,0.8462,0.8137,0,0,0,0.1,0.1);

	this.blueeyeR = new lib.blueeyeR();
	this.blueeyeR.name = "blueeyeR";
	this.blueeyeR.setTransform(883,405,0.8139,0.8139);

	this.blueeyeL = new lib.blueeyeL();
	this.blueeyeL.name = "blueeyeL";
	this.blueeyeL.setTransform(788,405,0.8139,0.8139);

	this.legL = new lib.LegL();
	this.legL.name = "legL";
	this.legL.setTransform(550,553);

	this.legR = new lib.legR();
	this.legR.name = "legR";
	this.legR.setTransform(572,553);

	this.blueshoeL = new lib.blueshoeL();
	this.blueshoeL.name = "blueshoeL";
	this.blueshoeL.setTransform(583,433);

	this.blueshoeR = new lib.blueshoeR();
	this.blueshoeR.name = "blueshoeR";
	this.blueshoeR.setTransform(670,433);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AV2B4QmAClnHgLQnHgMmXinQhVgjhRgpQkviZkBj8QgIgJgIgIIllAAAV7B/QkzCqlgBCQgLACgLADQgNACgNACQl0BAlphAQgNgCgNgCQgKgDgLgCQl3hIlWjEQg/glg9gnQg1gigzglQg5gqg3gtQgdgZgdgZQhDg7g/hAQgegggeggQgHgIgGgH");
	this.shape_12.setTransform(170.025,375.0875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AFv8wIAAvBMAk5AAAAFvnJIAA1nEAqogHJMgk5AAAEAFvAreIAAwRMAk5AAAEAFvAreMAk5AAUAFvbNMAAAgiWEAFvgrxMgwRAAAIAAPGMAAAAmuIgFNREAFvAreI/OAAIAA0AEgqigcrMAwRgAF");
	this.shape_13.setTransform(677.225,318.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AADACQABgCABgBQgFABgEAC");
	this.shape_14.setTransform(919.15,441.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#30972E").s().p("AglF0IgagEIgVgFQl3hIlWjEQg/glg9gnQg1gigzglQg5gqg3gtIg6gyQhDg7g/hAIg8hAIgNgPIAAgMIFlAAIAQARQEBD8EvCZQBRApBVAjQGXCnHHAMQHHALGAilIABAAIAEAHQkzCqlgBCIgWAFIgaAEQi6Agi3AAQi4AAi0ggg");
	this.shape_15.setTransform(170.025,375.0875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEACIAJgDIgCADg");
	this.shape_16.setTransform(919.15,441.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.blueshoeR},{t:this.blueshoeL},{t:this.legR},{t:this.legL},{t:this.blueeyeL},{t:this.blueeyeR},{t:this.browneyeL},{t:this.browneyeR},{t:this.greeneyeR},{t:this.greeneyeL},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.purplesunglasses},{t:this.blueglasses},{t:this.pinkglasses},{t:this.yellowglasses},{t:this.burgundybow},{t:this.tealbow},{t:this.blackseed1},{t:this.regularseed1},{t:this.regularseed2},{t:this.regularseed4},{t:this.regularseed3},{t:this.blackseed2},{t:this.blackseed4},{t:this.blackseed3},{t:this.piratehat},{t:this.mouth1},{t:this.mouth2},{t:this.mouth3},{t:this.witchhat},{t:this.burgundyshoeL},{t:this.tealshoeL},{t:this.burgundyshoeR},{t:this.tealshoeR},{t:this.armL},{t:this.armR}]}).wait(1));

	// Character
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,1,1).p("AZ8HuIBeCrQgCACgDADQgHAGgHAHQgbAYgcAYQgZAWgaAWQgdAYgfAYQgFAEgFAEQgZATgaATQhOA3hRAxQgqAagrAYQhGAmhJAiQgfAPggAOIgBAAQl/ClnIgLQnGgMmYinQhUgjhSgpQkviakBj8QgIgJgIgIIllAAIgKAAAZ8HuQgPANgQANQgeAZgeAZQgFAEgFAEQgZAUgaATQgtAiguAgQgiAXgiAWQi5B3jKBaQh2Azh3AjQkQBOkbgFQj0gGjrhDQiegtiYhJQl/i0kMk3A5IGHQARgYARgYQARgZARgYQAegpAcgpQAtg/Atg/QBwicBxibQCTjICWjIQD5lOEHlOIEkhyIzJcOIgRAXIhOCyA0cGmIksgfA7PJkQgEgGgGgGQAMgQAMgRQAdgrAegsQAfgsAfgtAQnRrQk0CqlgBCQgKACgMADQgNACgNACQlzBAlqhAQgNgCgMgCQgKgDgLgCQl4hIlWjEQg/glg9gnQg1gjgzglQg5gqg3gtQgdgZgdgZQhDg7g/hAQgegggdggQgIgIgGgHARhRHQgcAVgeAPAZ8HuI6+9t");
	this.shape_17.setTransform(204.1,274.6625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#30972E").s().p("AglF0IgagEIgVgFQl3hIlWjEQg/glg9gnQg1gigzglQg5gqg3gtIg6gyQhDg7g/hAIg8hAIgNgPIAAgMIFlAAIAQARQEBD8EvCZQBRApBVAjQGXCnHHAMQHHALGAilIABAAIAEAHQkzCqlgBCIgWAFIgaAEQi6Agi3AAQi4AAi0ggg");
	this.shape_18.setTransform(170.025,375.0875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7AFC7C").s().p("ADaG7QnGgMmYinQhUgjhSgpQkviakBj7IgQgRIBPiyIhPCyIllAAIgKAAIAXghIA9hXIA9hZIEtAfIAQgXIAVAPQEME3F+CzQCaBJCdAtQDrBDD0AGQEcAFEPhOQB3gjB1gzQDLhaC5h2IBEgtQAtggAugiIAzgnIAKgIIA8gyIAfgaIBdCrIgEAFIgPANIg2AwIgzAsIg8AwIgKAIIgzAlQhOA3hRAxQgrAagqAYQhHAmhIAiQgeAPghAOIgBAAQlnCbmlAAIg7gBg");
	this.shape_19.setTransform(204.1,358.1624);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F03154").s().p("ACRTkQj0gGjshDQidgtiZhJQl+i0kMk3IgWgPITJ8OIzJcOIgQAXIksgfIAigwIAigxIA6hSIBZh+QBwidByiaQCSjICWjIQD6lOEGlOIEkhyIa+dtIgeAaIg9AyIgJAIIg0AnQgtAiguAgIhDAtQi6B3jKBaQh2Azh3AjQj9BJkIAAIglAAg");
	this.shape_20.setTransform(206.65,259.068);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Text
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_21.setTransform(695.375,497.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag9BzQgQgbAAgsQAAgrAQgZQAQgaAZAAQAWAAAUAaIAAh0IA4AAIAAETIg5AAIAAgYIAAAAQgUAegWAAQgaAAgOgagAgVAuQAAAVAGAMQAGALAKAAQAJAAAGgMQAFgMABgWQAAgsgWAAQgVAAAAAug");
	this.shape_22.setTransform(677.7,493.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_23.setTransform(660.225,497.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_24.setTransform(643.175,497.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag8B9IAAg8QAcAQATABQALAAAGgHQAGgGAAgKQAAgIgFgHQgFgHgMgJQgfgYgNgTQgOgUAAgZQAAgiAVgVQAVgVAhgBQAZABAZAKIAAA7QgbgPgQAAQgLAAgFAGQgHAFAAAKQAAAPAdAWQARAMATAUQARAWAAAdQAAAigXAWQgYAXgjAAQgZgBgYgMg");
	this.shape_25.setTransform(626.075,493.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_26.setTransform(582.825,495.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgwB0QgWgMgGggIAzAAQAIAOANABQAKAAAJgJQAHgJAAgMIAAgaQgQAYgXAAQgdAAgQgYQgPgYgBgsQAAgqAQgZQAQgZAbABQAXgBAQAZIABAAIAAgTIA6AAIAAClQgBAXgHAVQgJAUgUAMQgVAMgXAAQgYAAgWgOgAgQhGQgGALAAASQAAAxAWgBQAWAAAAgsQAAgsgWAAQgJAAgHALg");
	this.shape_27.setTransform(565.15,499.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_28.setTransform(547.625,495.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag0CCIAAkDIA6AAIAADHIAvAAIAAA8g");
	this.shape_29.setTransform(532.6,491.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_30.setTransform(880.675,517.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARCJIAAhtQAAgKgEgHQgFgFgHAAQgRgBAAAYIAABsIg5AAIAAkRIA5AAIAAB2IABAAQAUgdAbAAQAUAAALANQALAMAAAXIAACIg");
	this.shape_31.setTransform(863.625,512.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcByIAAiEIgVAAIAAgvIAVAAIAAgwIA4AAIAAAwIAWAAIAAAvIgWAAIAACEg");
	this.shape_32.setTransform(848.325,515.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag3BHQgRgVAAggIAAhuIA5AAIAABzQAAAJAEAGQAEAGAHAAQAQAAAAgYIAAhwIA5AAIAABnQAAAogTAVQgSAVgjAAQgmAAgSgWg");
	this.shape_33.setTransform(833.275,518.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag5BHQgVgZAAgsQAAgtAUgaQAUgaAmAAQAmAAAUAaQAVAaAAAtQAAAtgWAZQgVAYgkAAQgkAAgVgZgAgQgiQgFAJAAAZQAAAtAVAAQALAAAFgKQAGgKAAgZQAAgYgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_34.setTransform(814.925,517.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABHCCIgPiyIglCyIgnAAIgmiyIgPCyIg4AAIAckDIBKAAQAQBUAKA8IAFgoIAIguIAMg6IBMAAIAeEDg");
	this.shape_35.setTransform(791.025,513.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYBkIAAhzIgTAAIAAgqIATAAIAAgqIAxAAIAAAqIATAAIAAAqIgUAAIAABzg");
	this.shape_36.setTransform(416.625,489.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AguA9QgRgXAAgnQAAglARgWQASgXAcAAQARAAAQALQAQALAHASQAHASABAlIhSAAQABAjASAAQAGAAAFgEQAGgFAAgHIAqAAQgMA1gwAAQgcAAgSgXgAgMgnQgFAIAAARIAjAAQAAgQgEgIQgFgIgJAAQgIAAgEAHg");
	this.shape_37.setTransform(404.15,491.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag7BBIASglQAZAPALAAQAGAAAEgDQAEgDAAgFQAAgFgEgCIgYgMQgSgIgIgJQgHgLAAgQQAAgXAPgOQAPgPAYAAQAXAAAiATIgTAjQgVgNgPAAQgLAAAAAJQAAAFAEAEQAEADAMAFQAWAHALAKQAKALgBARQAAAYgQAPQgPAQgYAAQgbAAgggTg");
	this.shape_38.setTransform(390,491.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AguA9QgRgXgBgnQABglARgWQARgXAdAAQARAAAQALQAQALAHASQAIASABAlIhSAAQABAjARAAQAHAAAFgEQAEgFACgHIApAAQgMA1gvAAQgeAAgRgXgAgNgnQgEAIAAARIAkAAQgBgQgFgIQgEgIgIAAQgJAAgFAHg");
	this.shape_39.setTransform(375.85,491.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAUByIgphoIgBAAIAABoIg0AAIAAjjIA9AAQAjAAAVATQAWASAAAgQgBARgHAQQgJAPgPAHIAqBngAgWgPQAhgBABgXQAAgQgJgHQgHgGgSgBg");
	this.shape_40.setTransform(360.1,487.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhEB1IBJh+QAOgXAAgTQAAgKgEgFQgEgHgHABQgIgBgDAJQgDAHAAAXIAAAIIgyAAQAAgZACgOQACgPAHgLQAGgMAOgGQAOgHASAAQAgAAARARQARAQAAAfQAAAQgGATQgHARgNAXIgcAwIAuAAIAAAug");
	this.shape_41.setTransform(295.85,487.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AguA9QgRgXAAgnQAAglARgWQASgXAcAAQARAAAQALQAQALAHASQAIASABAlIhSAAQABAjARAAQAHAAAEgEQAFgFACgHIApAAQgMA1gvAAQgdAAgSgXgAgNgnQgEAIAAARIAkAAQgBgQgFgIQgEgIgIAAQgJAAgFAHg");
	this.shape_42.setTransform(271.55,491.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgeA9QgQgXAAgmQAAglAQgXQARgXAZAAQASAAARANIAAApQgKgGgIAAQgMAAgHAKQgHAKAAAPQAAARAHAJQAHAKAMAAQAIAAAKgFIAAApQgSAMgSAAQgZAAgQgXg");
	this.shape_43.setTransform(258.375,491.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag2A9QgNgXAAgmQAAgmANgWQAOgXAWAAQAMAAAHAGQAIAGAJANIABAAIAAgUIAxAAIAACdIgxAAIAAgVIgBAAQgJANgIAGQgIAHgLAAQgXAAgNgXgAgSAAQAAAnATAAQASAAAAgnQAAgngTAAQgSAAAAAng");
	this.shape_44.setTransform(243.925,491.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgzByIAAjjIBnAAIAAAwIg0AAIAAArIAuAAIAAAuIguAAIAABag");
	this.shape_45.setTransform(229.925,487.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgJByIAAi0IgdAAIAAgvIBNAAIAADjg");
	this.shape_46.setTransform(165.975,487.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AguA9QgSgXAAgnQAAglASgWQASgXAcAAQARAAAQALQAQALAHASQAHASABAlIhSAAQABAjASAAQAGAAAGgEQAEgFABgHIAqAAQgMA1gwAAQgcAAgSgXgAgMgnQgFAIAAARIAjAAQAAgQgEgIQgFgIgJAAQgIAAgEAHg");
	this.shape_47.setTransform(142.35,490.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeA9QgQgXAAgmQAAglAQgXQARgXAZAAQASAAARANIAAApQgKgGgIAAQgMAAgHAKQgHAKAAAPQAAARAHAJQAHAKAMAAQAIAAAKgFIAAApQgSAMgSAAQgZAAgQgXg");
	this.shape_48.setTransform(129.175,490.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag2A9QgNgXAAgmQAAgmANgXQAOgWAWAAQAMAAAHAGQAIAGAJANIABAAIAAgUIAxAAIAACdIgxAAIAAgVIgBAAQgJANgIAHQgIAGgLAAQgXAAgNgXgAgSAAQAAAnATAAQASAAAAgnQAAgngTAAQgSAAAAAng");
	this.shape_49.setTransform(114.725,490.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgzByIAAjjIBnAAIAAAwIg0AAIAAArIAuAAIAAAuIguAAIAABag");
	this.shape_50.setTransform(100.725,487.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_51.setTransform(629.375,159.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_52.setTransform(613.175,159.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgcCEIAAizIA5AAIAACzgAgUhQQgJgJAAgMQAAgMAJgJQAJgJALAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_53.setTransform(599.5,155.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag1BcIAAiyIA2AAIAAAeIABAAQAUgkAXABIAJABIAAA3IgTgBQggAAAAAnIAABZg");
	this.shape_54.setTransform(588.1,159.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag5BHQgVgZAAgsQAAgtAUgaQAUgaAmAAQAmAAAUAaQAVAaAAAtQAAAtgWAZQgVAYgkAAQgkAAgVgZgAgQgiQgFAJAAAZQAAAtAVAAQALAAAFgKQAGgKAAgZQAAgYgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_55.setTransform(571.575,159.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_56.setTransform(554.925,159.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_57.setTransform(538.725,159.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiBGQgTgbAAgrQAAgqATgaQATgbAcAAQAVAAAUAPIAAAuQgMgGgIAAQgPAAgIAMQgIAKAAASQAAATAIALQAIALAPAAQAIAAAMgGIAAAvQgVAOgUAAQgdAAgSgag");
	this.shape_58.setTransform(523.65,159.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgjBGQgSgbAAgrQAAgqATgaQASgbAdAAQAVAAAUAPIAAAuQgLgGgKAAQgOAAgHAMQgJAKAAASQAAATAIALQAJALANAAQAJAAALgGIAAAvQgTAOgVAAQgdAAgTgag");
	this.shape_59.setTransform(510.55,159.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AApCCIgKgrIg9AAIgLArIg9AAIBGkDIBBAAIBGEDgAgUAoIAoAAQgNg5gHg1IAAAAQgHA2gNA4g");
	this.shape_60.setTransform(493.55,155.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhDBKIAUgqQAdARANAAQAGAAAEgDQAFgEAAgFQAAgFgEgDIgcgOQgVgJgJgLQgJgMAAgSQAAgaASgRQASgRAbAAQAbAAAnAWIgWAoQgZgPgQAAQgOAAAAALQAAAFAGAFQAEADANAFQAaAJAMAMQALAMAAATQAAAcgSARQgSASgcAAQgfAAgjgWg");
	this.shape_61.setTransform(861.775,295.475);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag1BGQgUgaAAgtQAAgqAUgaQAUgaAhAAQATAAASANQATAMAIAVQAJAUABArIheAAQABAoAUAAQAHAAAGgFQAGgFABgJIAwAAQgOA9g3AAQghAAgUgagAgPgsQgEAJAAATIAoAAQgBgTgEgJQgFgJgKAAQgLAAgFAJg");
	this.shape_62.setTransform(845.575,295.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgxB/IAXhNIg5iwIA4AAIAOAvQAIAYAFAYIAAAAIAIggIATg/IA5AAIhND9g");
	this.shape_63.setTransform(828.675,299.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag7CCIAAkDIB2AAIAAA3Ig7AAIAAAwIAzAAIAAA1IgzAAIAAAwIA8AAIAAA3g");
	this.shape_64.setTransform(812,291.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag1BbIAAgFIA3hVQARgaAAgUQAAgYgbAAQgKgBgIAGQgJAFgEAIIgQgNQAFgMAMgHQAMgHARAAQAZAAAOAMQAPAMAAAVQAAAVgTAdIgoBAIBGAAIAAAWg");
	this.shape_65.setTransform(938.675,613.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag1BbIAAgFIA3hVQARgaAAgUQAAgYgbAAQgKgBgIAGQgJAFgEAIIgQgNQAFgMAMgHQAMgHARAAQAZAAAOAMQAPAMAAAVQAAAVgTAdIgoBAIBGAAIAAAWg");
	this.shape_66.setTransform(925.575,613.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgqBIQgPgUAAg4QAAgnAQgYQAPgYAcAAQAcAAAOAUQAOAUAAAzQAAAqgPAZQgPAZgcAAQgcAAgOgUgAghgCQAABJAgAAQARAAAJgQQAIgRAAgoQAAgcgDgOQgDgNgHgHQgIgHgLAAQgiAAAABFg");
	this.shape_67.setTransform(912.775,613.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag1BbIAAgFIA3hVQARgaAAgUQAAgYgbAAQgKgBgIAGQgJAFgEAIIgQgNQAFgMAMgHQAMgHARAAQAZAAAOAMQAPAMAAAVQAAAVgTAdIgoBAIBGAAIAAAWg");
	this.shape_68.setTransform(899.375,613.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AguBGQAPAAAKgGQALgIAAgJQAAgLgEgKIgKgaIgjhaIAXAAIAmBkIAihkIAYAAIg3CYQgFAMgNAJQgPAIgSAAg");
	this.shape_69.setTransform(879.375,618.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAjBAQgHgEgDgKQgOASgcAAQgPAAgMgLQgLgMAAgQQAAgUARgNQASgOAaAAQAHAAAJAEQAAgggbAAQgWAAgLAMIgKgUQAGgFAMgEQAMgEAKAAQAcAAANANQANANAAAcIAAAuQAAARAKAGIAAAMQgOAAgHgEgAgVAIQgLAJAAAMQAAAUAYAAQARAAANgQIAAggIgPgBQgRAAgLAIg");
	this.shape_70.setTransform(866.625,615.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgCBbIgoh1IgVByIgXAAIAiiyIALAAIApCCIAoiCIALAAIAkCyIgXAAIgWhyIgnB1g");
	this.shape_71.setTransform(851.225,613.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPBJQgLgLAAgSIAAhJIgPAAIAAgSIAPAAIAAgcIAYgJIAAAlIAjAAIAAASIgjAAIAABAQgBAQAFAHQAFAHANAAQAJAAAJgEIAEAUQgPAEgRAAQgPAAgKgMg");
	this.shape_72.setTransform(814.9,614.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgmBCIAAiBIAXAAIAAAVQAMgYAYAAIASADIgJAWQgIgFgHAAQgNAAgIALQgJAMAAAQIAABJg");
	this.shape_73.setTransform(805.825,615.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAuBbIgMgmIhCAAIgNAmIgbAAIBIi1IAGAAIBDC1gAgZAjIA0AAIgahOg");
	this.shape_74.setTransform(792.675,613.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag4BcIAAi1IAXAAIAAALQAOgNASAAQAbAAAPARQAQARAAAiQAAAcgQATQgPATgdAAQgIAAgKgDQgJgDgDgDIAAA6gAgWhEQgGADgFAEIAABLQADAEAGADQAIADAGAAQAqAAAAgwQABgZgLgLQgKgMgVAAQgGAAgHAEg");
	this.shape_75.setTransform(771.15,618.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("ABABCIAAhRQAAgfgbAAQgIAAgHAFQgIAFgCAHIAABfIgXAAIAAhbQAAgKgHgGQgHgFgMAAQgHAAgIAFQgIAFgDAHIAABfIgXAAIAAiBIAPAAIAIAPQANgSAUAAQAcAAAKASQAEgIALgEQALgGALAAQAUAAALANQALALAAAWIAABWg");
	this.shape_76.setTransform(753.425,615.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgrAxQgPgSAAgfQAAgeAQgSQARgTAZAAQAcAAAQASQAPASAAAfQAAAfgPATQgQASgcAAQgbAAgQgTgAgYgjQgKANAAAWQAAAxAiAAQAQAAAJgNQAKgOAAgWQAAgwgjAAQgPAAgJANg");
	this.shape_77.setTransform(736.35,615.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgsBEQgUgaAAgqQAAgnAVgaQAWgbAhABQAdgBAQAKIgIAVQgLgJgaAAQgWABgPAUQgNAUAAAfQAAAeAOAUQAPASAVAAQAaAAAOgRIANASQgWAWghgBQgiABgUgZg");
	this.shape_78.setTransform(722.2,613.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag2BBIAAgGIBKhnIhJAAIAAgUIBqAAIAAAGIhGBmIBHAAIAAAVg");
	this.shape_79.setTransform(686.15,615.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEBaIAAhuIgSAAIAAgUIAoAAIAACCgAgBhBQgEgEgBgGQABgGAEgEQADgEAGAAQAGAAAEAEQAFAEgBAGQABAGgFAEQgEAFgGAAQgGAAgDgFg");
	this.shape_80.setTransform(676.3,613.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgDBDIg4iFIAaAAIAhBbIAjhbIAZAAIg6CFg");
	this.shape_81.setTransform(666.925,616.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAjBAQgHgEgDgKQgOASgcAAQgPAAgMgLQgLgMAAgQQAAgUARgNQASgOAaAAQAHAAAJAEQAAgggbAAQgWAAgLAMIgKgUQAGgFAMgEQAMgEAKAAQAcAAANANQANANAAAcIAAAuQAAARAKAGIAAAMQgOAAgHgEgAgVAIQgLAJAAAMQAAAUAYAAQARAAANgQIAAggIgPgBQgRAAgLAIg");
	this.shape_82.setTransform(654.225,615.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWA2IAAiTIAXAAIAACPQAAAKAFAHQAHAFAJABIAAAVQgrAAgBgog");
	this.shape_83.setTransform(644.4,613.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAjBAQgHgEgDgKQgOASgcAAQgPAAgMgLQgLgMAAgQQAAgUARgNQASgOAaAAQAHAAAJAEQAAgggbAAQgWAAgLAMIgKgUQAGgFAMgEQAMgEAKAAQAcAAANANQANANAAAcIAAAuQAAARAKAGIAAAMQgOAAgHgEgAgVAIQgLAJAAAMQAAAUAYAAQARAAANgQIAAggIgPgBQgRAAgLAIg");
	this.shape_84.setTransform(633.725,615.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgcBbQgOgFgKgGIAOgTQAUAOARAAQAOAAAKgGQAIgFABgIQAAgQgYAAIgNACIgPACQgcAAAAgVQgBgHAHgFQAGgFAKgDQgbgMAAggQAAgUAOgOQAOgNAWAAQARAAAMAIIALgOIAPAOIgOAKQAJAMAAATQAAATgMAOQgMAMgVACIgSACIgJADQgGACABAEQAAAFAMAAIAQgCIAQgCQASAAAMAJQAKAJAAARQAAASgQALQgQALgYAAQgNAAgNgEgAgVg9QgIAIAAANQgBANAIAJQAIAJAMAAQALAAAHgJQAHgIAAgOQAAgNgHgIQgIgJgKAAQgMAAgHAJg");
	this.shape_85.setTransform(621.05,618.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgwBEQgWgZABgqQgBgoAYgaQAYgaAmAAQAcAAARAPIgKAVQgSgPgSAAQgbAAgQAVQgQATAAAfQAAAfAQAUQAQASAaAAQAUAAAMgLIAAgqIgZAAIAAgUIAxAAIAABNQgJAJgSAFQgRAEgRAAQgkABgVgZg");
	this.shape_86.setTransform(605.8,613.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABVC5IAAjbQABglgIgTQgGgTgSgKQgTgMgYAAQgnAAgcAZQgcAZgBBGIAADEIg9AAIAAlpIA3AAIAAAzQAog7BKAAQAhAAAcAMQAbAMANASQAOAUAGAaQADARAAArIAADdg");
	this.shape_87.setTransform(43.75,209.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ah6CNQgugxAAhcQgBhkA4gwQAvgoBDAAQBKAAAvAxQAwAxAABWQgBBFgUAoQgVAogoAWQgpAWguAAQhLAAgwgwgAhLhnQgeAjgBBEQABBFAeAkQAeAhAuABQAtAAAegjQAfgjAAhGQAAhDgfgiQgfgkgsABQguAAgeAig");
	this.shape_88.setTransform(342.3,128.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeD6IAAnzIA9AAIAAHzg");
	this.shape_89.setTransform(315.125,122.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ah3CNQgvgxAAhZQAAhaAvgyQAvgzBKAAQBJAAAuAyQAuAxAABZIAAAQIkNAAQADA7AeAgQAfAgAsAAQAiAAAYgSQAXgSAOgnIBAAIQgPA4gpAfQgoAeg/AAQhPAAgugwgAhDhtQgdAcgDAvIDJAAQgEgtgTgXQgdgjgvAAQgpAAgdAcg");
	this.shape_90.setTransform(287.975,128.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AC4C5IAAjjQAAglgGgQQgGgQgQgKQgPgKgVAAQgmAAgaAaQgZAZAAA4IAADRIg8AAIAAjqQAAgpgPgVQgPgUgiAAQgaAAgWAOQgWANgKAaQgKAbAAAyIAAC6Ig9AAIAAlpIA3AAIAAAzQARgbAcgQQAcgQAkAAQApAAAZAQQAZARALAeQAqg/BFAAQA2AAAdAeQAdAdAAA/IAAD3g");
	this.shape_91.setTransform(239.725,128.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AhhC5IAAlpIA3AAIAAA3QAVgnASgMQARgMAVAAQAfAAAgATIgVA6QgWgOgXAAQgUAAgPANQgQALgHAWQgKAgAAAnIAAC9g");
	this.shape_92.setTransform(201.775,128.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ah3CNQgvgxAAhZQAAhaAvgyQAvgzBKAAQBJAAAuAyQAuAxAABZIAAAQIkNAAQADA7AeAgQAfAgAsAAQAiAAAYgSQAXgSAOgnIBAAIQgPA4gpAfQgoAeg/AAQhPAAgugwgAhDhtQgdAcgDAvIDJAAQgEgtgTgXQgdgjgvAAQgpAAgdAcg");
	this.shape_93.setTransform(167.775,128.95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgJDsQgTgLgHgRQgIgRAAg3IAAjPIgsAAIAAgwIAsAAIAAhaIA8glIAAB/IA+AAIAAAwIg+AAIAADSQAAAaAEAIQADAHAHAFQAIAEANAAQAKAAARgCIAJA2QgaAGgUAAQgiAAgRgLg");
	this.shape_94.setTransform(139.175,122.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AiGCgQgggdAAgtQAAgbANgWQAMgWATgNQAUgMAYgIQASgEAlgFQBJgIAjgMIABgRQAAglgSgQQgXgUguAAQgrAAgUAPQgVAPgKAnIg8gIQAIgnATgXQATgZAjgMQAkgNAtAAQAvAAAdALQAcALAOARQAOAQAFAZQADAPAAApIAABSQAABVAEAXQAEAWAMAVIhAAAQgKgTgDgaQgiAegfALQgfAMgkAAQg7AAghgdgAgOAXQgmAFgPAHQgQAGgJAOQgIANAAAQQAAAYATARQASAQAkAAQAiAAAcgPQAbgQANgbQAKgVAAgoIAAgWQghANhCAKg");
	this.shape_95.setTransform(109.475,128.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AB4D6Ihpl8IgPg6QgHAigHAYIhqF8IhEAAIiEnzIBEAAIBMFHQAMAzAJAzIAWhcIBflRIBPAAIBID8QAaBeAMBTQAKgvAPg+IBPlAIBCAAIiJHzg");
	this.shape_96.setTransform(57.425,122.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgiAjIAAhFIBFAAIAABFg");
	this.shape_97.setTransform(150.525,62.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AhmCgQglgegKg5IA8gKQAFAlAYATQAXAUApAAQAqAAAVgRQAUgSAAgXQAAgVgSgLQgMgJgzgNQhCgQgagMQgagMgNgWQgOgWAAgbQAAgYALgUQALgVATgOQAOgKAZgIQAZgHAcAAQAqAAAgAMQAgANAPAUQAQAWAGAiIg8AIQgEgcgUgPQgUgPgiAAQgrgBgSAOQgSAOAAATQAAAMAIAJQAHAKAQAHQAJADAsANQBBARAaALQAaAKAPAVQAOAWAAAeQAAAggRAbQgTAaghAQQgiAOgrAAQhFAAglgdg");
	this.shape_98.setTransform(122.975,48.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhhC5IAAlpIA3AAIAAA3QAVgmASgNQARgMAVAAQAfAAAgATIgVA6QgWgNgXgBQgUABgPAMQgQALgHAWQgKAgAAAnIAAC9g");
	this.shape_99.setTransform(96.975,47.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ACvD6IAAmhIiSGhIg6AAIiRmoIAAGoIg/AAIAAnzIBjAAIB2FhIAXBKIAbhQIB3lbIBZAAIAAHzg");
	this.shape_100.setTransform(53.475,41.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(3,1,1).p("AHopxI/zgTAHopxIAAT2AYMpoIwkgJ");
	this.shape_101.setTransform(559.2,532.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Frame
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_102.setTransform(480,320);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_103.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(488.5,320.6,771.4000000000001,310.4);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
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