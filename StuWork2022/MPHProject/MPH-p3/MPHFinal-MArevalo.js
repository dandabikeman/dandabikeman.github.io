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


(lib.whipcream3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Al8HhQgNgIgTgUQgcghgKggQgNgpAQghQAOgcAngZQBPgyBcgJQATgCAjgBIA2gDQBtgJBag6QBcg6A0hcQAmASAVAPQAfAVASAaQAQAXAGAdQAFAVgEARQgDACgBADQgCAEACAEQgKAWgeARIghARQgoATgaAJQg7AVhgAJQiIANgWADQgbAFgdAHQg3APgmAVQgvAcgYAoQgYAqAFAqIgDAAIgGAAQgRAAgSgLgAksG8QAJgaAVgVQAfggBAgWQAagJAegHQAtgJB6gKQBrgJA8gUQAjgMApgUQAkgRARgLQAYgSAMgUIACAAQAkAPAaA0QASAngCAcQgCASgJATQgGANgKAKQgJAKgRAIQgQAIgaAJIhSAeQgoAPgZAFQgRAEgYABQhMAIgnACQg+ACgygKIhDgPQgngJgcgBQg1gBguAbQgJAEgOALQgBgTAHgUgAm1DGQAMgaAUgUQAdgfBEgYIA8gUIBEgSQAsgKAYgIQBtghBQhGQBXhNAkhlQAfBNgeBjQgEAQABAHIACAGQgtBQhNA0QhNA0hbANQgaAEg0ADQg0ACgaAEQhgANhQA4QgZASgMAPQAEgoASgngAlmBQQgCgNAIgRQAMgWAcgYQAsglA2gTIADADQAFADAFgCQAHgCADgJIAggIIA0gMQAsgMBFgeQA1gWAfgRQAigSAZgVQgjBCg8AzQhGA8hcAeQgbAJgsALIhHASQgsANgjANIgcAMIgBgEgAiqiKQANgRAWgOQAYgQAfgLQAFACAGgEIAEgDIAigJQAYgGBWgNQAkgFAWgGQARgFAOgGIgYATQghAagjATQgWAMgrATQhIAggpAMIhEAQIgSAFQADgbAPgUgAhEkBQAIgjAXgcQAFgGAggeIAUgUIAOgPIAhgiIAmggQAXgUANgOQAKAUAOAkIAKAaQAFAQACARQAEAmgJAvIAAAAQgFACgHAFQgdARg5AHQhgAPgiAIIgRAFQgDgKADgPg");
	this.shape.setTransform(0.0899,0.1883);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlUITQgDgDgBgDQgRgBgUgIQgUgJgXgWQgugugLgyQgFgTABgTQgCgFAAgGQgHguAKguQAKgvAZgoQAJgOAKgMQARgTAdgQQgCgDgBgFQgHgaATggQAYgqA4gkQAfgUAcgLIARgGQABgSAFgOQAFgTAJgPQAKgRATgPQAfgZAqgQQgEgQADgWQAHgkAVgeQAKgOAagaIAygzQApgoAWgSIAXgUQAMgLAHgLQAFgIAFgFQAHgIAIACQAIABAHAPQAXAuAKAZQAPAnAEAiIAAADQADAigHAxIAEADQAEAEAFANQALAcAGAWQASBIgaBeIAHADIAvAaQAaAPASAOQAlAhAQAuQAOAlgFAfQAQAIAKAHQAUAOASAaQAhAvACAyQABAbgJAZQgKAagTARQgOANgVAKIgnAQIhWAfQgsAQgXAFQgPADgrAFIhhAIQhKADhMgQIg5gOQghgHgZABQg5AEgyAoQgBAFgEADQgDADgFAAQgFAEgEABIgHABQgGAAgEgEgABVCDQhaA6huAJIg1ADQgjABgTACQhcAJhPAyQgoAZgNAcQgQAhAMApQAKAfAdAhQASAVAOAHQAVANATgCIAEAAQgGgqAZgpQAYgoAvgcQAmgWA3gOQAcgHAcgFQAVgECIgMQBhgJA6gVQAbgJAngUIAhgRQAegRAKgVQgBgEABgEQACgEADgCQADgRgEgVQgHgdgQgXQgRgZgfgWQgWgOgmgSQgzBbhcA7gAFYDcQgQAMgkARQgpAUgkAMQg7AThrAJQh7AKgsAKQgfAHgZAIQhAAWggAhQgUAVgJAaQgHATABATQAOgKAIgFQAvgaA1ABQAbAAAoAJIBCAQQAyAJA/gCQAmgBBMgIQAYgCASgEQAZgFAogPIBSgeQAagJAQgIQAQgIAJgJQAKgKAGgNQAKgTABgTQADgcgTgmQgZg1glgOIgCgBQgMAVgYARgABOg9QhQBGhtAiQgZAHgrALIhFARIg8AUQhDAZgeAfQgTAUgMAaQgSAmgEApQAMgQAYgRQBRg4BfgOQAagDA0gDQA1gCAZgEQBbgNBOg0QBNg1AthQIgCgGQgCgGAFgQQAehjgfhNQgkBlhXBMgAk4AFQgbAYgMAXQgJAQACANIABAFIAdgMQAigOAsgMIBHgTQAtgLAagJQBdgdBFg8QA9g0AjhCQgaAVgiATQgeAQg2AXQhEAegtAMIgzAMIghAHQgDAKgHACQgFABgFgDIgDgCQg2ATgsAkgAiGioQgWAOgOASQgOAUgEAaIATgEIBDgQQApgMBIghQArgSAXgMQAjgUAhgaIAYgTQgPAHgQAEQgXAHgjAFQhWANgYAFIgiAJIgEADQgGAEgGgBQgeALgYAPgABpnIIglAgIgiAjIgOAPIgUATQgfAegGAHQgXAbgHAjQgDAPACALIASgFQAhgJBggOQA5gIAdgRQAHgEAGgCIAAgBQAIgvgEglQgCgSgEgPIgKgbQgOgkgLgTQgNANgXAUgACtj7IgCADIACgEg");
	this.shape_1.setTransform(0.0017,0.0238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whipcream3, new cjs.Rectangle(-49,-53.5,98.1,107.1), null);


(lib.whip3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#996633").s().p("AhOFgQgUgDgdgGQAVgFAWgGQApgNAxgYQAdgOA6gfIAmgVQBEgmA7g2QAbgYANgQQAMgRAJgRQAGADAOABQAWACAMALQAOAKAGAXQALAmgMAfQgGAPgQAUQgkAsgvAcIgkATQg8AeglAIQgaAHghABQgWACgmAAQhPAAgigEgAkIE7IgBgCQALgSAVgRQAigcAvgYQAhgRA3gWQBAgZAZgLQAxgXAigZIAVgPQA4gsAUgpQATgmABhDIANADQASADAQANQAPAMAJASQARAhgKApQgJAjgcAgQgKALgRAQQg6AyhEAoIg8AgQg7AggqARQhUAjhIAAQgfAAgdgGgAl2DDQgdg5AHgmQAGgiAfgcIAAAAIADAAQAHABAGgEQAFgGgBgGIAAgCQAQgLAYgNQBDgnBFglQArgXAWgQQAagRATgXQALgLAMgPQAjguASgiQATgmAFglIATAOIAEADQgCAHABALQAMBhgpBZQgoBYhQA2Ig6AjQgwAegrAkQggAbgRAaQgOAWgIAfQgHAbACAWQglgXggg+gAkTEHQADgtAbgjQAMgQAagVQAlgfAggUIAugcQAcgRARgNQBRg8AnhfQAkhZgIhcIARAOQA5A1AOA5QAGAcgBAyQgBA4gNAbQgFAKgKAOQgxBChrAwIhaAlQg3AWgiASQgXAMgZAQQgjAXgWAYIAAgNgAlagQQAEgiAaghQARgWAjgdQAkgcAfgSIA6giQAlgUAUgOQBBgrAbgyIAIgOIgBADQgBAjgVAqQgNAZghAsQgWAbgJAKQgRAQgYAQIguAbIiBBIQgdAQgTANIAAgHg");
	this.shape.setTransform(0.0144,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNGJQgsgBgWgCQgVgDgngIIg8gMQgOgCgEgFIgCgBQgegCgdgHIgGgCIgEABQgGAAgEgEQgEgEAAgGQgBgFACgGQg1gXgphIQgVgmgHgeQgKgoAKghQALgmAlgfQgCgIAAgJQAAgtAggsQAXghAugjQAjgbAqgaIA3gfQAigTAUgOQA9gqAWg0IAGgNIACgFIABgBIACgCQAFgFAGAAQAHgBAEAEQACADABAEIA7AqQAiAZAWAVQA9A7AOA/QAEASABAdIACAAQAcAFAPAHQAcANASAcQASAbADAgQACAbgIAcIAGAAQAlAHASANQASAOAKAZQAMAfgDAiQgEAigSAcQgKAPgSARQgNAPgOANQggAbg5AdQhFAig2AKQgaAEg3ABgAEqBoQgNAQgbAYQg7A2hEAmIgmAVQg6AfgdAOQgxAYgpANQgWAHgVAEQAdAGAUADQAiAEBPAAQAmAAAWgBQAhgCAagGQAlgJA8geIAkgTQAvgcAkgsQAQgUAGgOQAMgggLglQgGgYgOgKQgMgKgWgDQgOgBgGgDQgJASgMAQgADNAKQgUApg4AsIgVAPQgiAZgxAXQgZALhAAZQg3AWghARQgvAYgiAcQgVARgLASIABACQBfAWB5gzQAqgRA7ggIA8ggQBEgnA6gzQARgPAKgMQAcgfAJgkQAKgogRgiQgJgSgPgMQgQgNgSgDIgNgCQgBBDgTAlgAlnAtQgfAcgGAiQgHAmAdA5QAgA+AlAXQgCgWAHgbQAIgfAOgWQARgZAggcQArgkAwgdIA6gkQBQg1AohZQAphZgMhhQgBgLACgHIgEgDIgTgNQgFAkgTAmQgSAigjAuQgMAPgLAMQgTAWgaARQgWAQgrAXQhFAlhDAnQgYANgQAMIAAABQABAHgFAFQgGAFgHgBIgDgBIAAAAgABJhvQgnBfhRA8QgRANgcARIguAdQggATglAfQgaAVgMARQgbAigDAtIAAANQAWgYAjgXQAZgQAXgMQAigRA3gXIBaglQBrgwAxhCQAKgOAFgKQANgbABg4QABgygGgbQgOg6g5g0IgRgPQAIBdgkBYgAAKlOQgbAyhBArQgUAOglAUIg6AiQgfATgkAbQgjAdgRAWQgaAhgEAiIAAAHQATgNAdgQICBhIIAugbQAYgQARgQQAJgKAWgbQAhgsANgYQAVgrABgjIABgDIgIAOg");
	this.shape_1.setTransform(0.0069,0.0159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whip3, new cjs.Rectangle(-42.8,-39.3,85.69999999999999,78.69999999999999), null);


(lib.whip2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#996633").s().p("AhOFgQgUgDgdgGQAVgFAWgGQApgNAxgYQAdgOA6gfIAmgVQBEgmA7g2QAbgYANgQQAMgRAJgRQAGADAOABQAWACAMALQAOAKAGAXQALAmgMAfQgGAPgQAUQgkAsgvAcIgkATQg8AeglAIQgaAHghABQgWACgmAAQhPAAgigEgAkIE7IgBgCQALgSAVgRQAigcAvgYQAhgRA3gWQBAgZAZgLQAxgXAigZIAVgPQA4gsAUgpQATgmABhDIANADQASADAQANQAPAMAJASQARAhgKApQgJAjgcAgQgKALgRAQQg6AyhEAoIg8AgQg7AggqARQhUAjhIAAQgfAAgdgGgAl2DDQgdg5AHgmQAGgiAfgcIAAAAIADAAQAHABAGgEQAFgGgBgGIAAgCQAQgLAYgNQBDgnBFglQArgXAWgQQAagRATgXQALgLAMgPQAjguASgiQATgmAFglIATAOIAEADQgCAHABALQAMBhgpBZQgoBYhQA2Ig6AjQgwAegrAkQggAbgRAaQgOAWgIAfQgHAbACAWQglgXggg+gAkTEHQADgtAbgjQAMgQAagVQAlgfAggUIAugcQAcgRARgNQBRg8AnhfQAkhZgIhcIARAOQA5A1AOA5QAGAcgBAyQgBA4gNAbQgFAKgKAOQgxBChrAwIhaAlQg3AWgiASQgXAMgZAQQgjAXgWAYIAAgNgAlagQQAEgiAaghQARgWAjgdQAkgcAfgSIA6giQAlgUAUgOQBBgrAbgyIAIgOIgBADQgBAjgVAqQgNAZghAsQgWAbgJAKQgRAQgYAQIguAbIiBBIQgdAQgTANIAAgHg");
	this.shape.setTransform(0.0144,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNGJQgsgBgWgCQgVgDgngIIg8gMQgOgCgEgFIgCgBQgegCgdgHIgGgCIgEABQgGAAgEgEQgEgEAAgGQgBgFACgGQg1gXgphIQgVgmgHgeQgKgoAKghQALgmAlgfQgCgIAAgJQAAgtAggsQAXghAugjQAjgbAqgaIA3gfQAigTAUgOQA9gqAWg0IAGgNIACgFIABgBIACgCQAFgFAGAAQAHgBAEAEQACADABAEIA7AqQAiAZAWAVQA9A7AOA/QAEASABAdIACAAQAcAFAPAHQAcANASAcQASAbADAgQACAbgIAcIAGAAQAlAHASANQASAOAKAZQAMAfgDAiQgEAigSAcQgKAPgSARQgNAPgOANQggAbg5AdQhFAig2AKQgaAEg3ABgAEqBoQgNAQgbAYQg7A2hEAmIgmAVQg6AfgdAOQgxAYgpANQgWAHgVAEQAdAGAUADQAiAEBPAAQAmAAAWgBQAhgCAagGQAlgJA8geIAkgTQAvgcAkgsQAQgUAGgOQAMgggLglQgGgYgOgKQgMgKgWgDQgOgBgGgDQgJASgMAQgADNAKQgUApg4AsIgVAPQgiAZgxAXQgZALhAAZQg3AWghARQgvAYgiAcQgVARgLASIABACQBfAWB5gzQAqgRA7ggIA8ggQBEgnA6gzQARgPAKgMQAcgfAJgkQAKgogRgiQgJgSgPgMQgQgNgSgDIgNgCQgBBDgTAlgAlnAtQgfAcgGAiQgHAmAdA5QAgA+AlAXQgCgWAHgbQAIgfAOgWQARgZAggcQArgkAwgdIA6gkQBQg1AohZQAphZgMhhQgBgLACgHIgEgDIgTgNQgFAkgTAmQgSAigjAuQgMAPgLAMQgTAWgaARQgWAQgrAXQhFAlhDAnQgYANgQAMIAAABQABAHgFAFQgGAFgHgBIgDgBIAAAAgABJhvQgnBfhRA8QgRANgcARIguAdQggATglAfQgaAVgMARQgbAigDAtIAAANQAWgYAjgXQAZgQAXgMQAigRA3gXIBaglQBrgwAxhCQAKgOAFgKQANgbABg4QABgygGgbQgOg6g5g0IgRgPQAIBdgkBYgAAKlOQgbAyhBArQgUAOglAUIg6AiQgfATgkAbQgjAdgRAWQgaAhgEAiIAAAHQATgNAdgQICBhIIAugbQAYgQARgQQAJgKAWgbQAhgsANgYQAVgrABgjIABgDIgIAOg");
	this.shape_1.setTransform(0.0069,0.0159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whip2, new cjs.Rectangle(-42.8,-39.3,85.69999999999999,78.69999999999999), null);


(lib.whip1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#996633").s().p("AhOFgQgUgDgdgGQAVgFAWgGQApgNAxgYQAdgOA6gfIAmgVQBEgmA7g2QAbgYANgQQAMgRAJgRQAGADAOABQAWACAMALQAOAKAGAXQALAmgMAfQgGAPgQAUQgkAsgvAcIgkATQg8AeglAIQgaAHghABQgWACgmAAQhPAAgigEgAkIE7IgBgCQALgSAVgRQAigcAvgYQAhgRA3gWQBAgZAZgLQAxgXAigZIAVgPQA4gsAUgpQATgmABhDIANADQASADAQANQAPAMAJASQARAhgKApQgJAjgcAgQgKALgRAQQg6AyhEAoIg8AgQg7AggqARQhUAjhIAAQgfAAgdgGgAl2DDQgdg5AHgmQAGgiAfgcIAAAAIADAAQAHABAGgEQAFgGgBgGIAAgCQAQgLAYgNQBDgnBFglQArgXAWgQQAagRATgXQALgLAMgPQAjguASgiQATgmAFglIATAOIAEADQgCAHABALQAMBhgpBZQgoBYhQA2Ig6AjQgwAegrAkQggAbgRAaQgOAWgIAfQgHAbACAWQglgXggg+gAkTEHQADgtAbgjQAMgQAagVQAlgfAggUIAugcQAcgRARgNQBRg8AnhfQAkhZgIhcIARAOQA5A1AOA5QAGAcgBAyQgBA4gNAbQgFAKgKAOQgxBChrAwIhaAlQg3AWgiASQgXAMgZAQQgjAXgWAYIAAgNgAlagQQAEgiAaghQARgWAjgdQAkgcAfgSIA6giQAlgUAUgOQBBgrAbgyIAIgOIgBADQgBAjgVAqQgNAZghAsQgWAbgJAKQgRAQgYAQIguAbIiBBIQgdAQgTANIAAgHg");
	this.shape.setTransform(0.0144,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNGJQgsgBgWgCQgVgDgngIIg8gMQgOgCgEgFIgCgBQgegCgdgHIgGgCIgEABQgGAAgEgEQgEgEAAgGQgBgFACgGQg1gXgphIQgVgmgHgeQgKgoAKghQALgmAlgfQgCgIAAgJQAAgtAggsQAXghAugjQAjgbAqgaIA3gfQAigTAUgOQA9gqAWg0IAGgNIACgFIABgBIACgCQAFgFAGAAQAHgBAEAEQACADABAEIA7AqQAiAZAWAVQA9A7AOA/QAEASABAdIACAAQAcAFAPAHQAcANASAcQASAbADAgQACAbgIAcIAGAAQAlAHASANQASAOAKAZQAMAfgDAiQgEAigSAcQgKAPgSARQgNAPgOANQggAbg5AdQhFAig2AKQgaAEg3ABgAEqBoQgNAQgbAYQg7A2hEAmIgmAVQg6AfgdAOQgxAYgpANQgWAHgVAEQAdAGAUADQAiAEBPAAQAmAAAWgBQAhgCAagGQAlgJA8geIAkgTQAvgcAkgsQAQgUAGgOQAMgggLglQgGgYgOgKQgMgKgWgDQgOgBgGgDQgJASgMAQgADNAKQgUApg4AsIgVAPQgiAZgxAXQgZALhAAZQg3AWghARQgvAYgiAcQgVARgLASIABACQBfAWB5gzQAqgRA7ggIA8ggQBEgnA6gzQARgPAKgMQAcgfAJgkQAKgogRgiQgJgSgPgMQgQgNgSgDIgNgCQgBBDgTAlgAlnAtQgfAcgGAiQgHAmAdA5QAgA+AlAXQgCgWAHgbQAIgfAOgWQARgZAggcQArgkAwgdIA6gkQBQg1AohZQAphZgMhhQgBgLACgHIgEgDIgTgNQgFAkgTAmQgSAigjAuQgMAPgLAMQgTAWgaARQgWAQgrAXQhFAlhDAnQgYANgQAMIAAABQABAHgFAFQgGAFgHgBIgDgBIAAAAgABJhvQgnBfhRA8QgRANgcARIguAdQggATglAfQgaAVgMARQgbAigDAtIAAANQAWgYAjgXQAZgQAXgMQAigRA3gXIBaglQBrgwAxhCQAKgOAFgKQANgbABg4QABgygGgbQgOg6g5g0IgRgPQAIBdgkBYgAAKlOQgbAyhBArQgUAOglAUIg6AiQgfATgkAbQgjAdgRAWQgaAhgEAiIAAAHQATgNAdgQICBhIIAugbQAYgQARgQQAJgKAWgbQAhgsANgYQAVgrABgjIABgDIgIAOg");
	this.shape_1.setTransform(0.0069,0.0159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whip1, new cjs.Rectangle(-42.8,-39.3,85.69999999999999,78.69999999999999), null);


(lib.whipcrem = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Al8HhQgNgIgTgUQgcghgKggQgNgpAQghQAOgcAngZQBPgyBcgJQATgCAjgBIA2gDQBtgJBag6QBcg6A0hcQAmASAVAPQAfAVASAaQAQAXAGAdQAFAVgEARQgDACgBADQgCAEACAEQgKAWgeARIghARQgoATgaAJQg7AVhgAJQiIANgWADQgbAFgdAHQg3APgmAVQgvAcgYAoQgYAqAFAqIgDAAIgGAAQgRAAgSgLgAksG8QAJgaAVgVQAfggBAgWQAagJAegHQAtgJB6gKQBrgJA8gUQAjgMApgUQAkgRARgLQAYgSAMgUIACAAQAkAPAaA0QASAngCAcQgCASgJATQgGANgKAKQgJAKgRAIQgQAIgaAJIhSAeQgoAPgZAFQgRAEgYABQhMAIgnACQg+ACgygKIhDgPQgngJgcgBQg1gBguAbQgJAEgOALQgBgTAHgUgAm1DGQAMgaAUgUQAdgfBEgYIA8gUIBEgSQAsgKAYgIQBtghBQhGQBXhNAkhlQAfBNgeBjQgEAQABAHIACAGQgtBQhNA0QhNA0hbANQgaAEg0ADQg0ACgaAEQhgANhQA4QgZASgMAPQAEgoASgngAlmBQQgCgNAIgRQAMgWAcgYQAsglA2gTIADADQAFADAFgCQAHgCADgJIAggIIA0gMQAsgMBFgeQA1gWAfgRQAigSAZgVQgjBCg8AzQhGA8hcAeQgbAJgsALIhHASQgsANgjANIgcAMIgBgEgAiqiKQANgRAWgOQAYgQAfgLQAFACAGgEIAEgDIAigJQAYgGBWgNQAkgFAWgGQARgFAOgGIgYATQghAagjATQgWAMgrATQhIAggpAMIhEAQIgSAFQADgbAPgUgAhEkBQAIgjAXgcQAFgGAggeQAMgLAWgYIAhgiIAmggQAXgUANgOQAKAUAOAkIAKAaQAPAwgNBGIAAAAQgFACgHAFQgdARg5AHQhgAPgiAIIgRAFQgDgKADgPg");
	this.shape.setTransform(0.0899,0.1883);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlUITQgDgDgBgDQgRgBgUgIQgUgJgXgWQgugugLgyQgFgTABgTQgCgFAAgGQgHguAKguQAKgvAZgoQAJgOAKgMQARgTAdgQQgCgDgBgFQgHgaATggQAYgqA4gkQAfgUAcgLIARgGQABgSAFgOQAFgTAJgPQAKgRATgPQAfgZAqgQQgEgQADgWQAHgkAVgeQAKgOAagaIAygzQApgoAWgSIAXgUQAMgLAHgLQAFgIAFgFQAHgIAIACQAIABAHAPQAXAuAKAZQAQApADAjQADAigHAxIAEADQAEAEAFANQALAcAGAWQASBIgaBeIAHADIAvAaQAaAPASAOQAlAhAQAuQAOAlgFAfQAQAIAKAHQAUAOASAaQAhAvACAyQABAbgJAZQgKAagTARQgOANgVAKIgnAQIhWAfQgsAQgXAFQgPADgrAFIhhAIQhKADhMgQIg5gOQghgHgZABQg5AEgyAoQgBAFgEADQgDADgFAAQgFAEgEABIgHABQgGAAgEgEgABVCDQhaA6huAJIg1ADQgjABgTACQhcAJhPAyQgoAZgNAcQgQAhAMApQAKAfAdAhQASAVAOAHQAVANATgCIAEAAQgGgqAZgpQAYgoAvgcQAmgWA3gOQAcgHAcgFQAVgECIgMQBhgJA6gVQAbgJAngUIAhgRQAegRAKgVQgBgEABgEQACgEADgCQADgRgEgVQgHgdgQgXQgRgZgfgWQgWgOgmgSQgzBbhcA7gAFYDcQgQAMgkARQgpAUgkAMQg7AThrAJQh7AKgsAKQgfAHgZAIQhAAWggAhQgUAVgJAaQgHATABATQAOgKAIgFQAvgaA1ABQAbAAAoAJIBCAQQAyAJA/gCQAmgBBMgIQAYgCASgEQAZgFAogPIBSgeQAagJAQgIQAQgIAJgJQAKgKAGgNQAKgTABgTQADgcgTgmQgZg1glgOIgCgBQgMAVgYARgABOg9QhQBGhtAiQgZAHgrALIhFARIg8AUQhDAZgeAfQgTAUgMAaQgSAmgEApQAMgQAYgRQBRg4BfgOQAagDA0gDQA1gCAZgEQBbgNBOg0QBNg1AthQIgCgGQgCgGAFgQQAehjgfhNQgkBlhXBMgAk4AFQgbAYgMAXQgJAQACANIABAFIAdgMQAigOAsgMIBHgTQAtgLAagJQBdgdBFg8QA9g0AjhCQgaAVgiATQgeAQg2AXQhEAegtAMIgzAMIghAHQgDAKgHACQgFABgFgDIgDgCQg2ATgsAkgAiGioQgWAOgOASQgOAUgEAaIATgEIBDgQQApgMBIghQArgSAXgMQAjgUAhgaIAYgTQgPAHgQAEQgXAHgjAFQhWANgYAFIgiAJIgEADQgGAEgGgBQgeALgYAPgABpnIIglAgIgiAjQgWAXgMALQgfAegGAHQgXAbgHAjQgDAPACALIASgFQAhgJBggOQA5gIAdgRQAHgEAGgCIAAgBQAMhFgOgwIgKgbQgOgkgLgTQgNANgXAUgACtj7IgCADIACgEg");
	this.shape_1.setTransform(0.0017,0.0238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whipcrem, new cjs.Rectangle(-49,-53.5,98.1,107.1), null);


(lib.whipcream2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AlUITQgDgDgBgDQgRgBgUgIQgUgJgXgWQgugugLgyQgFgTABgTQgCgFAAgGQgHguAKguQAKgvAZgoQAJgOAKgMQARgTAdgQQgCgDgBgFQgHgaATggQAYgqA4gkQAfgUAcgLIARgGQABgSAFgOQAFgTAJgPQAKgRATgPQAfgZAqgQQgEgQADgWQAHgkAVgeQAKgOAagaIAygzQApgoAWgSIAXgUQAMgLAHgLQAFgIAFgFQAHgIAIACQAIABAHAPQAXAuAKAZQAQApADAjQADAigHAxIAEADQAEAEAFANQALAcAGAWQASBIgaBeIAHADIAvAaQAaAPASAOQAlAhAQAuQAOAlgFAfQAQAIAKAHQAUAOASAaQAhAvACAyQABAbgJAZQgKAagTARQgOANgVAKIgnAQIhWAfQgsAQgXAFQgPADgrAFIhhAIQhKADhMgQIg5gOQghgHgZABQg5AEgyAoQgBAFgEADQgDADgFAAQgFAEgEABIgHABQgGAAgEgEgABVCDQhaA6huAJIg1ADQgjABgTACQhcAJhPAyQgoAZgNAcQgQAhAMApQAKAfAdAhQASAVAOAHQAVANATgCIAEAAQgGgqAZgpQAYgoAvgcQAmgWA3gOQAcgHAcgFQAVgECIgMQBhgJA6gVQAbgJAngUIAhgRQAegRAKgVQgBgEABgEQACgEADgCQADgRgEgVQgHgdgQgXQgRgZgfgWQgWgOgmgSQgzBbhcA7gAFYDcQgQAMgkARQgpAUgkAMQg7AThrAJQh7AKgsAKQgfAHgZAIQhAAWggAhQgUAVgJAaQgHATABATQAOgKAIgFQAvgaA1ABQAbAAAoAJIBCAQQAyAJA/gCQAmgBBMgIQAYgCASgEQAZgFAogPIBSgeQAagJAQgIQAQgIAJgJQAKgKAGgNQAKgTABgTQADgcgTgmQgZg1glgOIgCgBQgMAVgYARgABOg9QhQBGhtAiQgZAHgrALIhFARIg8AUQhDAZgeAfQgTAUgMAaQgSAmgEApQAMgQAYgRQBRg4BfgOQAagDA0gDQA1gCAZgEQBbgNBOg0QBNg1AthQIgCgGQgCgGAFgQQAehjgfhNQgkBlhXBMgAk4AFQgbAYgMAXQgJAQACANIABAFIAdgMQAigOAsgMIBHgTQAtgLAagJQBdgdBFg8QA9g0AjhCQgaAVgiATQgeAQg2AXQhEAegtAMIgzAMIghAHQgDAKgHACQgFABgFgDIgDgCQg2ATgsAkgAiGioQgWAOgOASQgOAUgEAaIATgEIBDgQQApgMBIghQArgSAXgMQAjgUAhgaIAYgTQgPAHgQAEQgXAHgjAFQhWANgYAFIgiAJIgEADQgGAEgGgBQgeALgYAPgABpnIIglAgIgiAjQgWAXgMALQgfAegGAHQgXAbgHAjQgDAPACALIASgFQAhgJBggOQA5gIAdgRQAHgEAGgCIAAgBQAMhFgOgwIgKgbQgOgkgLgTQgNANgXAUgACtj7IgCADIACgEg");
	this.shape.setTransform(0.0017,0.0238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al8HhQgNgIgTgUQgcghgKggQgNgpAQghQAOgcAngZQBPgyBcgJQATgCAjgBIA2gDQBtgJBag6QBcg6A0hcQAmASAVAPQAfAVASAaQAQAXAGAdQAFAVgEARQgDACgBADQgCAEACAEQgKAWgeARIghARQgoATgaAJQg7AVhgAJQiIANgWADQgbAFgdAHQg3APgmAVQgvAcgYAoQgYAqAFAqIgDAAIgGAAQgRAAgSgLgAksG8QAJgaAVgVQAfggBAgWQAagJAegHQAtgJB6gKQBrgJA8gUQAjgMApgUQAkgRARgLQAYgSAMgUIACAAQAkAPAaA0QASAngCAcQgCASgJATQgGANgKAKQgJAKgRAIQgQAIgaAJIhSAeQgoAPgZAFQgRAEgYABQhMAIgnACQg+ACgygKIhDgPQgngJgcgBQg1gBguAbQgJAEgOALQgBgTAHgUgAm1DGQAMgaAUgUQAdgfBEgYIA8gUIBEgSQAsgKAYgIQBtghBQhGQBXhNAkhlQAfBNgeBjQgEAQABAHIACAGQgtBQhNA0QhNA0hbANQgaAEg0ADQg0ACgaAEQhgANhQA4QgZASgMAPQAEgoASgngAlmBQQgCgNAIgRQAMgWAcgYQAsglA2gTIADADQAFADAFgCQAHgCADgJIAggIIA0gMQAsgMBFgeQA1gWAfgRQAigSAZgVQgjBCg8AzQhGA8hcAeQgbAJgsALIhHASQgsANgjANIgcAMIgBgEgAiqiKQANgRAWgOQAYgQAfgLQAFACAGgEIAEgDIAigJQAYgGBWgNQAkgFAWgGQARgFAOgGIgYATQghAagjATQgWAMgrATQhIAggpAMIhEAQIgSAFQADgbAPgUgAhEkBQAIgjAXgcQAFgGAggeQAMgLAWgYIAhgiIAmggQAXgUANgOQAKAUAOAkIAKAaQAPAwgNBGIAAAAQgFACgHAFQgdARg5AHQhgAPgiAIIgRAFQgDgKADgPg");
	this.shape_1.setTransform(0.0899,0.1883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whipcream2, new cjs.Rectangle(-49,-53.5,98.1,107.1), null);


(lib.reset = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgwBLIAAgVIAUgRIATgSQASgSAHgKQAHgLAAgMQAAgLgHgHQgIgGgMgBQgJAAgLADQgKAEgKAGIgBAAIAAgVQAHgDAMgCQALgEALAAQAWABAMAKQANALAAATQAAAIgCAHQgCAIgEAGQgEAFgFAGIgNANIgUAUIgVASIBNAAIAAARg");
	this.shape.setTransform(25.625,-0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgPgPAAgbQAAgaAPgQQAOgPAXAAQAXgBAMANQAMANAAAYIAAAJIhQAAQAAAKADAIQADAHAFAFQAFAFAHACQAHACAIABQALgBALgEQAMgFAEgEIABAAIAAAVQgJAEgKACQgJADgLAAQgaAAgQgPgAgUghQgJAJgBANIA+AAQAAgOgIgJQgHgHgPgBQgNABgJAIg");
	this.shape_1.setTransform(6.125,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLA2QgKgEgHgHQgIgHgEgLQgDgKAAgPQAAgaAOgPQAPgPAXAAQAKAAAJACQAJADAHAEIAAAUIgBAAQgIgGgJgEQgJgDgJAAQgOAAgJAKQgJALAAATQAAAUAJALQAIAKAPAAQAGAAAGgBIAKgEIAIgEIAFgEIABAAIAAAUQgJAEgIADQgIACgKAAQgLAAgJgDg");
	this.shape_2.setTransform(-4.875,1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAvQgLgJAAgQQABgLAFgJQAGgGAKgEQAJgFAOgBIAegDIAAgDQAAgGgDgEQgCgEgEgCQgEgDgFgBIgLgBQgHAAgJACIgTAGIgBAAIAAgSIAQgEIAUgCQALAAAJADQAIABAGAFQAGAEADAIQADAGABALIAABKIgSAAIAAgMIgHAEIgIAFIgLAEQgFACgIgBQgOABgLgLgAAIAAQgKAAgHACQgHABgFAGQgFAEgBAIQABAKAFAFQAGAEAMAAQAIAAAJgDQAHgEAIgFIAAgeIgVACg");
	this.shape_3.setTransform(-16.75,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguBJIAAiRIBdAAIAAARIhJAAIAAAqIA+AAIAAAPIg+AAIAABHg");
	this.shape_4.setTransform(-26.175,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA072").s().p("ArSC1IAAlpIWlAAIAAFpg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9E6F").s().p("Ar6DdIAAgUIAAmRIAAgUIX1AAIAAG5gArmDJIXNAAIAAmRI3NAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-22.1,152.6,44.2);


(lib.pie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AKr5gQJVjTBRIGAfwu4QK9APitIdQgBABAAABIigCxAVy0zQIoiyBJIrEAhqgFgIlxQcQgdAzgnAnQgyAyhWAVEAljgDWIojT9UgojAL1gajAAsEgn3AG+QgiBTgIBsQAEH7BYH2QARBkAUBjEgkYADkQieBAhBCaUAikgEmAm9gH4EgkVADoMAi2ga7QFMqRG0H4Agy3cQVvC5MtPDAYaNlUgeyAHFggOAE/");
	this.shape.setTransform(0.0132,0.8355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEDD3").s().p("EglFAI0QAIhsAihSUAilgEmAm8gH4IlwQbQgeA0gnAnQgxAyhXAUIgTAIUgeyAHFggOAE/IgfAGQhXn3gFn7gEgg8ACbIADAFMAi1ga7IAtgKQVwC5MtPEUgm8AH4gilAEmQBBibCehAg");
	this.shape_1.setTransform(-22,8.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB308").s().p("EgnOAc1QgUhjgRhkIAfgFUAgOgE/AeygHFIABAAQAJgDAJgFQBWgVAygyQAngnAdgzIFxwcQstvD1vi5IgtAJQFMqRG0H4IAKAMQJVjTBRIGIAhgGQIoiyBJIrIANACQK9APitIdIgBACIigCxIAEADIojT9UgojAL1gajAAsg");
	this.shape_2.setTransform(4.6132,0.8355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.9,-189,525.9,379.7);


(lib.pecan6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape.setTransform(0.0352,0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape_1.setTransform(0.1575,0.012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan6, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.pecan5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape.setTransform(0.1575,0.012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape_1.setTransform(0.0352,0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan5, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.pecan4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape.setTransform(0.1575,0.012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape_1.setTransform(0.0352,0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan4, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.pecan3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape.setTransform(0.1575,0.012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape_1.setTransform(0.0352,0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan3, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.pecan2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape.setTransform(0.1575,0.012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape_1.setTransform(0.0352,0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan2, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.pecan1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D78F50").s().p("AqiMMQhIgMggglQgUgYgGgiQgFggAJghQAMgwAwhCQAFAHAKAAQAKAAAFgHIABgBQAIAAAJgFQC8hfEMjbIDYivQB9hkBihCQBIgwCEhNQCKhQBXgiQCCgyBwAEQASABAIgFQAHgDACgHQADgHgEgFQgFgGgNgBQiEgHiUA9Qg7AYhGAmQgtAZhPAvQhuBDhBArQhfA+hJA5IhCA3IhCA3QjaC2jtChQhNA0g0AWIgMAIIgEgCQAGgFAAgIQAAgJgGgFQgGgEgIACQgIACgDAHQgHgOAEgUQACgJAJgaIAFgSIAEABQAOACAGgZQAsixCeiaQBDhABwhTQD+i5Dph1QESiJEHgzQANgCAIgGQAJgIgEgJQgFgMgXAFQkKA2kSCIQjtB2j+C4QhXA/g4AxQhKBAg0BBQhaBygoCJQgEgGgFgEQgMgJgdABQgdABgRAAQgZgCgUgFQgXgHgRgOQgTgQgHgVQgOgnAhg+QBci3DAioQBNhDBmhIQBFgwB4hPQCQhdBYgzQCBhLBxguQA4gXAqgJQA3gNAuAEQAuAFBAAaIBrAsQAfALBDAQQBCAQAhAMQA9AWAdAhQA4BCgdB/QgQBLgmBUQgcA+gyBYQhUCVhMBnQhfCChpBZQgYAVgyAmQjACPjQBZQjeBejgAZQg3AGgvAAQg1AAgqgIgAMTjxIiDAyQhZAlg6AkQhMAwguA7QgOASgTAfIggAyQheCNipBkQiEBPjGA+QgLADgGAHQgIAHAEAIQAFAMAWgHQDIg+CChMQCphiBhiJIAthEQAagpAVgYQA9hGBtg1QAtgWCbg6QAMgFAHgIQAIgJgGgIQgDgFgJAAQgGAAgJADgAkFm5QgHABgLAHQhEAngdAVIgsAiQhQA/gzA2IgjAlIgrA1QgcAjgVAhQgLAOAHAJQADAEAFABQAGAAAFgCQAHgEAGgMQAcgoAXgcIApgyIAegiQARgSAlghQB3hnBbgtQALgFAFgGQAIgIgFgJQgDgIgJAAIgEAAg");
	this.shape.setTransform(0.1575,0.012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApuMyQiIgIgxhEQgVgcgGgmQgFgjAJglQAOg8A1hCQgLgjACglQABglAOghQgsAAgUgBQgkgCgbgJQgggKgXgWQgagXgHgeQgHgcAKgiQAHgZASgiQArhQA8hPQBeh5CSh2QBmhTCwhzQCPhfBkg7QCGhPB4g1QA6gaApgNQA4gQAwAAQBBABBdAjICbA7QATAGAvALQArAKAYAIQBOAaAkAuQBABSgpCbQgcBog7B0QgqBShOB6QglA9ghAuQiRDMjfCaQjQCQj9BXQjpBQi/AAQgbAAgZgCgAsfJgQgIAhAFAgQAFAiAVAYQAfAlBIAMQBQAOB2gMQDggZDdheQDRhZDAiPQAygmAYgVQBohZBgiCQBLhnBUiVQAyhYAcg+QAmhTARhMQAch/g4hCQgcghg+gWQghgMhBgQQhDgQgggLIhrgsQg/gagugFQgvgEg2ANQgrAJg3AXQhyAuiBBLQhYAziPBdQh5BPhEAwQhmBIhNBDQjBCohcC3QggA+ANAnQAHAVATAQQASAOAXAHQATAFAaACQAQAAAdgBQAdgBAMAJQAGAFADAFQApiJBahyQAzhBBLhAQA4gxBXg/QD+i4Dsh2QETiIEKg2QAXgFAFAMQAEAJgKAIQgIAGgMACQkIAzkSCJQjpB1j9C5QhxBThDBAQidCagtCxQgGAZgNgCIgEgBIgGASQgJAagCAJQgEAUAHAOQADgHAJgCQAIgCAGAEQAGAGAAAIQAAAIgGAFIAEACIAMgIQA0gWBMg0QDuihDZi2IBDg3IBCg3QBJg5Bfg+QBAgrBvhDQBOgvAugZQBFgmA8gYQCUg9CDAHQAOABAEAGQAEAFgCAHQgDAHgGADQgIAFgSgBQhxgEiBAyQhXAiiKBQQiFBNhHAwQhjBCh8BkIjYCvQkNDbi8BfQgIAFgIAAIgBABQgGAHgJAAQgLAAgFgHQgwBCgMAwgAkjHvQgEgIAIgHQAHgHALgDQDGg+CDhPQCqhkBdiNIAggyQATgfAPgSQAtg7BMgwQA7gkBZglICCgyQAVgHAGAJQAGAIgIAJQgHAIgLAFQicA6gsAWQhtA1g9BGQgVAYgbApIgsBEQhhCJiqBiQiBBMjIA+QgJADgGAAQgJAAgEgIgAqggkQgGgBgDgEQgGgJALgOQAVghAbgjIAsg1IAiglQAzg2BQg/IAtgiQAcgVBEgnQALgHAHgBQAMgCAFAKQAFAJgJAIQgFAGgLAFQhbAth2BnQglAhgRASIgfAiIgpAyQgXAcgbAoQgHAMgHAEQgEACgFAAIgBAAg");
	this.shape_1.setTransform(0.0352,0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pecan1, new cjs.Rectangle(-97.5,-81.9,195.1,163.9), null);


(lib.nose_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAdinQjUFyD7gn");
	this.shape.setTransform(0.0019,0.015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose_2, new cjs.Rectangle(-8.3,-18.2,16.700000000000003,36.5), null);


(lib.nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhIEHQgWgCgCgMQgDgLANgFQAHgEAOABIAiACQAUAAANgDQAogIAPgdQANgbAHgLQAGgMg+haQg9hagQgkQgRglgDgvQgDguAMgsQAFgOAHgCQAGgCAFAEQAFAEACAHQACAHgEARQgOBFAaBDQANAiAoA5QApA7AOAgQAQAjAAAeQAAAmgTAaQgXAfguALQgRADgYAAQgSAAgWgCg");
	this.shape.setTransform(0.0219,0.0254);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-9.7,-26.5,19.5,53.1), null);


(lib.Mouth_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AmqBMQjJhsgjghIgMgKQgKAFgIAHQgYATgMABQgPACgMgNQgLgOAFgOQAEgNAMgKQANgNAPgLQA+gsBbgCQArgDAJAZQAEAMgIAMQgGAMgOAGQgNAGgoACQgPABgNADQAQABAXAPQE1C4EqAHQClADCYg3QCOg0BmhgIgHgBQgSgCgJgEQgQgDgHgJQgGgHgBgLIAAgEQABgOAJgHQANgNAgAFQAkAFAhANQALgGAMADQAOAEAFAKIADAEIABAHQAVALAUAQQAXAQADASQADALgHAKQgGAKgLAFQgVAGgngaIgXgRQhoBriUA+QiaA/isAGIguAAQkUAAi5hkgAqUhTQAOADAFgIQACgDADgCQgNAEgLAGg");
	this.shape.setTransform(0.0444,0.0227);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth_3, new cjs.Rectangle(-76.3,-17.6,152.7,35.3), null);


(lib.mouth_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ2jnIhBBoIxvgMIg2hcAJ9j5QgCAEgCAEQAAACgBACQgCACAAAEQgyCLhhB0QjHDvkaAAQkYAAjHjvQhih0gxiLQgEgIgBgIIAAgCIE8ACIOxAKAp8kGIJ+ALIJ5AC");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao9AyIg2hbQgEgIgCgIIAAgCIE9ACIOwAKQgBACAAAEIhBBngAJ0gvgAk8g5IE8gEIJ4ACIACAAIgEAIIgCAEg");
	this.shape_1.setTransform(0.35,-18.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6C6C").s().p("AnfAIQhihzgxiLIA2BbIRvAMIBBhnQgyCLhhBzQjHDwkaAAQkZAAjGjwg");
	this.shape_2.setTransform(0.25,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_2, new cjs.Rectangle(-64.6,-27.3,129.3,54.7), null);


(lib.mouth_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AgaDPQgmgHgngZQgugdgYgpQgohFAZhgQAFgXgEgLIAtgSIAYgLIACABQAFAGAUAFQA+AOAvAuQAtAtARA/QAFAUAIAHQAHAGAKgCQAKgCAFgIQAHgLgGgUQgShDgwg1Qgwg0hBgYIgQgFIAHgGQAXgSAbgfQAHAKARAJQAtAZAXAQQAmAZAWAbQAYAcAOAjQAcA+gKA6QgEAfgRAbQgSAbgaAPQgaAOguAHQgbADgWAAQgUAAgQgDg");
	this.shape.setTransform(24.8278,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADZFXQgngHgngTQhDgjgkg8QgyhZAch4IAAgBIgpANQgbAGggABQhjAFhbglIgbgMQgVgLgegVQhIg1g4hIQgHgJgCgJQgDgPAMgHQAKgJAOAHIAOAOQA1BIBJAxIAXAPQA3AgBJALQBFAMA7gNQAbgHAWgJQAygRAcgMQAqgTAdgYQAXgUAggnQAogwANgNIAGgFIgQgVQgPgTgSgbQgIgJgBgKQgCgPALgHQAMgKANAIQAGAFAGAJIAeArQAnA4AjAUQAQAHAIABIAOABQAIAAAFACQAMAGABAOQAAAPgMAGQgIAFgMgCQgpAAgoghIgMgLIgEADIgmAtQAGACAHAEIBDAlQBLAwApBJQAsBSgMBTQgJBIguAsQgwArheAHIghABQgZAAgSgDgABpgVIgsASQAEAKgGAWQgZBhApBGQAYApAuAdQAnAZAmAGQAfAGA2gGQAvgGAZgOQAbgPARgbQARgbAFgfQAKg6gdhAQgNgigZgcQgWgbglgZQgXgQgugYQgSgJgGgKQgcAfgWARIgIAHIAQAFQBCAYAwAzQAxA1ARBDQAHAVgHALQgGAIgKACQgJACgHgHQgJgGgEgUQgRhAgugtQgwgtg+gOQgUgFgEgGIgCgCIgZAMg");
	this.shape_1.setTransform(-0.0271,0.0158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_1, new cjs.Rectangle(-49.3,-34.6,98.6,69.30000000000001), null);


(lib.glasses3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9966CC").s().p("AIyHAQg3gEg8geQgrgVg/gqQhQg4gmgkQg8g6gcg/QgMgagOgyQgPg3gIgUIiyAGQgaCfiJCLQg2A2gyAbQg0AchbASQjnAuigg3QgpgNgwgZQjWhyitkKQg1hSgQg6QgKgnACgmQADgpATghQAZgrA0geQAfgSBEgYQA1gSAZgGQA4gMBVADQApABAgAEIBhAOQBTANCpAXQCRAYBjAoQBfAnBPA8QAiAYANAGQAVAJAcACQASACAggCIBpgFQAigBASgHQASgGAigaQBQg8BggiQAigMBUgWQCdgpBIgMQCTgaDvgDQA7gBAiACQAzACApAKQBpAaAwBIQAaAoAHAzQAGAxgOAwQgMAsgjA8QhcCgiABwQiMB6ilAvQgqAMhEAOQhYARgmAEQgXACgVAAIgYgBgABag2QANABAIAHQALAJAFAUQAJAYANA0QANAuAPAdQAZAyAzAvQAhAfBBAuQA8ArAnAUQA6AeA1AGQAfADAwgFQAqgFA+gNQBPgQAvgOQCcgyCDh2QB4hsBWiaQAVgmAIgYQAQgrgBgqQgCgvgVgkQgTgggjgXQgfgVgogKQg1gPhlABQh5AAhYAFQhwAHhfARQhGAMiPAmQhlAZg0AWQhDAbg+AuIggAYQgTANgQAFQgQAFgjACIiKAHQg+ACgfgNQgNgGgQgLIgbgUQhBgyhKghQhjgtiNgZIj6gkQiFgTgmgDQhhgGhJASQgXAHg3AUQguASgXANQglAVgTAbQgRAbgEAiQgDAgAIAiQAMAvAtBHQCnEFDJBvQA5AgAzAPQBRAZBjgBQBRgCBlgUQBCgNAngRQAlgQAfgZQATgOAYgYQB4h3AhiMQADgJgDgGIgEgHIgFgHQgDgHAEgHQADgHAHgDQAIgFAUAAQBSAABagFIAOgBIAKABgAr4FVQg4gHgngNQgrgNg6ghQhcgzg6g4Qhchbgnh5QgehhAThOQAFgTAHgJQAFgHAMgHQAZgQAKgFQAegQAwgJQAngHAygCQAegBA7ABQBQACA5AEQB0AICHAbQBVAQA3ATQBLAaA1AmQAiAYAQAYQAdAtgFBGQgGBOgqBCQgjA4hJA7QgoAfghASQhgA1iGAAQgxAAg2gHgAvMkUQgzAAgiAEQgvAFglAMQggALgeASQgdBTAoBrQAnBmBPBMQAuAsBCAnQAvAdAtASQB6AvCagQQBKgIAugVQAagMAdgTQBSg3Atg9QA3hOAAhSQgBgvgUgdQgOgUgbgRQgxghhDgXQg0gShKgOQjQgqjaAAIgFAAgAIfFGQhegUhOg8QhPg8gthUQgeg4gFgyQgEgoAKgoQAEgVAMghQAEgMAEgHQAGgLAQgNQAwgnA2gYQAhgOAygNQAigKBBgNQB/gaBBgEQAfgBA1ABQA8ABAXAAIBEgCQAogCAbACQApACAuALQAtAMAXATQAmAeAKA1QAIAsgMA1QgTBRg8BPQgsA7hPBJQgmAkgeAUQgwAghMAZQhqAhhfAAQg1AAgygLgALvkbQgvACg7AKQgjAGhGAPQhKAPgqANQhgAegpA1QgaAigHAsQgIAsAMApQAMAsAjA0QATAbAQASQAuA0BBAhQA/AgBHAKQCFASCQg2QAvgSAegTQAVgNAcgXQBKg+A5hJQBYhvAAhhQABg0gZgbQgVgXgrgLQgxgMhGAAQhRADgoAAIhagCIgmABg");
	this.shape.setTransform(-0.0067,0.0015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses3, new cjs.Rectangle(-144.7,-44.9,289.5,89.9), null);


(lib.glasses2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00CC99").ss(1,1,1).p("AAxAJQAAgGAAgGQAAhyBLhRQBMhRBqAAQBrAABLBRQA1A5AQBIQAHAgAAAiQAAByhMBRQhLBRhrAAQhqAAhMhRQhHhNgEhqgAgwAJQgBBvhKBPQhLBRhrAAQhrAAhLhRQhMhRAAhzQAAhxBMhRQBLhRBrAAQBrAABLBRQBLBRAABxQAAADAAADgAgyAJIACAAQAsg0A1A0");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses2, new cjs.Rectangle(-57.3,-28.9,114.69999999999999,57.9), null);


(lib.glasses = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF66CC").s().p("AMYJoQhYgUhOgpQgigShHguQhGgughgjQgVgWgaglQgWgegPgXQgkg6g7iDQg5h9gog9Qgog8gqgYQgbgPgegBQgegBgYAPQgaARgVArQgNAZgaA9QhMCwhkCrIgdAvQgtBChEAzQhAAxhPAfQiLA4i1gDQggAAgggDQg8gEh1gSQhYgOgqgMQh3gihBhPQgOgRgcgsQguhMgSgpQgNgegSgxIhmkZQgdhPgYgkQgHgKgbgiQgVgbgKgTQglhFAVh1IACgIQgEgEAAgGQgBgJAFgGQAHgGATgCQAygFBCgSQAmgKBMgYQDJg8C/gHIDEgBQBdAAAvADQCPAHEOA7QEWA9CHAJQA4AEBYABQBUABAjgDQBZgGCQgsQCqgzA9gLQBegRB/AAIDBACQCrABgOADQgPADhUAGIAXgBIA3gFQB9gJCWAbQBVAPA4AVIA9AYQAmAQAXAHQAiALALAJQAYAVADAxIABAvIAABFQAAAcgHAOQgHAMgSAKQgVAKgJAGQgeATgRAqQgJAYgJA0QgdCgghBeQgwCIhRBaQhLBThzA4QheAviBAfIgDABIgGACQgeAHgmAEQg0AGgaABIgbABQhLAAhKgRgAARjZQAoAFAjAXQA2AkAwBTQAdAwAjBMIA7CAQAjBIAiAyQArA/AxAqQAhAdBEAqQBFArAxAVQArATA4ANQCdAiCagmIAFgBIAGgBQB4gdBVgpQBqgyBGhMQBQhVAwiIQAUg3APhFQALguAPhPQAGgjAEgRQAHgcALgUQAbg0A1gXQAKgFADgDQAFgGAAgOIgBhvQAAghgNgLQgGgFgKgDIg6gYQhOgggegJQgrgNg/gLQiBgYhoAEIhGACQhCACgZgDIgWgCIgBAAQiNgGgnAAQh5AAhcAQQg9ALixA1QiVAshcAFQgVACgpAAQiOABhjgKQh4gLjmgzQjpg0h1gMQhVgJhqgBQg/AAh/ADQg6ABguACQiJAKiYAsQhWAbgsAMQhDATg0AGIgDAKQgHAVAAAjQgBA1AMAgQAKAaAbAkQAlAuAHAMQANAWASAvQA3CNA5CiQAUA5AOAhQAQAjAeAzQApBHAdAfQA5A7BeAaQAdAIBIAMQBcAOAzAGQBQAJBBAAQCmAACEg9QAWgKAjgUQA1gdAhgdQAfgcAegpQAVgeAcgxQBkitBMi0QAZg7AOgWQAbgsAlgRQAagNAeAAIATABgANvIaQiQgCiWhhQhgg9hJhTQhLhWgshkQgZg4gfhrIgIgaQgEgHgCgMIgBgHIgBgBQgDgKABgHQgHg6AHgtQANhGAtgpQAKgJAIAAIADAAQAlgjAVgPQAagSAzgWQDKhVEGgHIBMgBQByAAA4AHQAiAFBGAPIBSAUQBRAVAwAZQBEAkAjA1QAOAUAMAhQAeBRgFBsQgEBNgcBvQgbBsgeBAQgrBbhAA1QgrAjg8AZQgwAThDARQiBAfiAAKQglADgWAAIgHAAgAL5nfQhLAJhjAZQhUAWg3AZQhJAhguAwIgMAMQgIAGgHACIgFABQgdAigHA0QgEAmAJA5IADALQAUBIAMAlQAUA8AVAuQAoBUBBBJQA+BGBQA3QCKBfCIAIQA1AEBYgMQCngWBsgmQAwgQAggTQBMguAyhhQAhhCAdh1QAZhnAEhHQAFhkgdhLQgQgpgXgaQgSgVgfgUQgkgWgzgRQgggKg9gOQhrgag9gGQgngEheAAQiQABhOAJgAvdIVQg+gBglgEQhBgHhKgUQg3gOgmgRQgxgVgggeQgfgdgagsQgTgggVg0IgkhbQgPgmgLgjQgdhcgIiXQgEg9ADglQADg2AQgpQAHgRAIgFQAEgDAKgEQAHgEAMgKQBihLCUgjQBbgWCxgPQB5gJBCgBQBoAABRARQA3AMB1ApQA1ATAZANQA2AdA0A3QAfAiAQAcQAsBMgLBsQgFArgOAyQgKAigUA4QgeBVgaAwQglBGg3A5Qg3A6hDAoQhiA5h9AXQhfASh7AAIgUAAgAvTnqIhOAHQhfAIhAALQhWAPhEAZQhQAegwAoIgiAgIgMANQgGAKgCAMQgHAgAAAoQgBAZAEAuQAFBIAEAnQAIA8AOAwQAIAdAWA4QAVA3ASAsQAQAlAMAWQARAgAUAWQAiAlA1AYQArATA9AOQDVAxDWglQBogTBLgjQBJgiA9g4QA9g4AohGQAhg6AnhvQAgheAGg8QAJhaglhBQgRgdgkglQgighgYgQQgagRgngPIhFgZIhGgYQhVgahqgEIgpgBQhCAAhZAHg");
	this.shape.setTransform(0.0096,0.0266);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glasses, new cjs.Rectangle(-185.4,-63.2,370.9,126.5), null);


(lib.face1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgnBKIAAgPIAfAAIAAhiIgfAAIAAgOIANgBQAHgBAFgBQAEgDACgEQADgEABgGIAOAAIAACEIAeAAIAAAPg");
	this.shape.setTransform(16.55,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgPgPAAgbQAAgaAPgQQAOgQAYAAQAWAAAMANQAMANAAAYIAAAJIhQAAQAAAKADAIQADAIAFAFQAFAEAIADQAGACAIAAQALAAAMgEQALgFAFgEIABAAIAAAUIgTAHQgKACgLAAQgaAAgQgPgAgUghQgJAJgBANIA+AAQAAgPgHgIQgHgIgPAAQgOAAgJAJg");
	this.shape_1.setTransform(-3.325,1.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLA3QgLgEgHgHQgHgIgEgKQgEgLAAgPQAAgaAPgQQAPgPAXAAQAKAAAJADQAJACAIAEIAAAVIgBAAQgIgGgKgEQgJgDgIgBQgPAAgKALQgJALAAATQAAAVAJAKQAJALAQAAIALgCIAKgDIAIgFIAGgEIABAAIAAAUQgJAFgJADQgIACgKAAQgLAAgJgDg");
	this.shape_2.setTransform(-14.45,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAwQgKgKAAgPQAAgMAGgIQAEgHAKgFQALgEAOgCIAdgCIAAgDQAAgGgCgEQgCgFgEgCQgEgCgGgBIgLgBQgHAAgJACIgTAGIgBAAIAAgTIARgDQAKgCAJAAQALAAAJACQAJACAGAEQAHAFACAHQAEAHAAALIAABKIgTAAIAAgMIgGAFIgIAFIgLAEQgFABgIAAQgQAAgKgKgAAIAAIgRABQgIADgFAFQgFAEAAAJQAAAJAGAFQAGAFAMAAQAIAAAJgEQAHgEAHgFIAAgeIgUACg");
	this.shape_3.setTransform(-26.4,1.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguBKIAAiTIBdAAIAAASIhJAAIAAApIA+AAIAAARIg+AAIAABHg");
	this.shape_4.setTransform(-36.05,-0.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("AsDDfIAAgUIAAmVIAAgUIYHAAIAAG9gArvDLIXeAAIAAmVI3eAAgAraC3IAAltIW1AAIAAFtg");
	this.shape_5.setTransform(-9.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.7,-22.3,154.4,44.7);


(lib.eyethinR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkeBOQBmhFCHgBQBEgBA8ARQABAAABAAQAdAJAbALQAVAKAVAMQAAAAABABQAEADAFADAC0BDQBPgNAcgsACJAsQBYgjAAg2ABRAYQBGglgFhA");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyethinR, new cjs.Rectangle(-29.7,-8.7,59.5,17.5), null);


(lib.eyethinL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhRAZQgzgZgNgoQgFgQABgTAiIAuQhXghgEg0QAAgCAAgBAizBGQgEADgEADAiIAuQgVAKgUANQgBAAgBABQhPgMgdgrAhRAZQgdAJgaAMAEgBHQhphDiHACQhDAAg8ATQgBAAgBAA");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyethinL, new cjs.Rectangle(-29.8,-8.5,59.7,17.1), null);


(lib.eyeblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00CCFF").ss(1,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(0.975,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABICOQgLgCgIgLQgKgNAAgTQAAgTAKgNQALgOAOAAQAOAAAKAOQALANAAATQAAATgLANQgIAMgMABQgCABgCAAQgBAAAAAAQgCgBgCAAAAXhbIgDgFQgxgDAPgrAgNhCQgvAAgChBAgkghQhBgIgLg3");
	this.shape_1.setTransform(-6.275,-2.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCFF").s().p("AAAAuIgEgBIgBAAQgLgCgIgLQgKgNAAgTQAAgSAKgNQALgOANAAQAOAAAKAOQALANAAASQAAATgLANQgIAMgMABIgEABIAAAAg");
	this.shape_2.setTransform(1.525,7.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB4CWQgcgQgggJQgggJghgBQgigBggAIQgiAJgaAQQgEACgCAAQgEAAgBgGQgKgnAAgaQgBgOAEgiIADgeQADgQAEgOQAGgTAMgVIAQgYIAHgJQAEgGAEgEQALgLAPgJQALgGAOgFQAfgKAeAEQASACARAHQARAHAMAKQAOALAMASQAZAmAKAtQADAMABAOQAGAtgKAzIgEARQgDANgEAHQgCAEgEABIgCAAQgDAAgFgCgAgBBpQAhACAhAJQAhAJAdAQQARg9gEg2QgEg9gggyQgSgdgVgMQgUgMgbgDQgZgCgYAHQgNADgLAGQgJAFgLALQgiAhgPApQgGASgEAVIgDAgIAAABIgBgBIgBAKQgDAiACAQIAEATIAFAWQAbgQAigHQAcgHAdAAIAKABIgEAAIABAAIAEgBgAg9iAIgDgFg");
	this.shape_3.setTransform(2.2195,1.3809);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeblue, new cjs.Rectangle(-18.5,-17.6,36.1,34.2), null);


(lib.eyeblackR = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgxBkQgfgGgVgSQgHgHgFgHIAAgBQgEgHgDgJQgEgOAAgOIgCAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgDQgDgSADgQQACgMAFgLIAIgOQAEgHAGgFQAMgMAPgHIANgEQAKgDANgBQAUgCANACQAIABAJADQAOAEAMAJQASANANAUIAHAKIAHAKQAFAHAFAAQADAAAGgDIAZgNQABAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgEAVgTAPQgTAQgVAAIgEgBIgDAaIgEAPQgGATgRALQgKAGgPAEQgSAEgSAAQgLAAgKgBgAgghSQgaADgYARIgMALIgJAMQgGAJgEALQgDALgBALQgBAIgCAEIABATQACALAEAHIAAACQAKAVAYAMQAWAKAcABQAYAAAVgIQAMgDAGgFQAPgKAFgWIADgSIACgSIABgCIgBgBQgBgTgFgPQgEgMgGgKQgKgRgOgJQgKgHgOgDQgIgCgIAAIgLABgAgpBXQgTgCgOgNIgIgJIgHgMQgOgdABgZQABgPAFgNQAGgOALgKQALgLAPgFQAPgFAQACQAIACAEACQABABABAAQAAAAABABQAAAAAAABQABAAAAABIgCADIgHAHQgLAKgBALQgBAIAFAJQAHANALAEQAGABAKgCQAPgDAJgJIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIgCACQgBACABAFQABAFAAAKQgCAhgOARQgNAPgVAIQgNAEgLAAIgGAAgAhRAWQgCAEACAFQABAEAEADQAEADAEABQAEABAEgCQAFgCADgEQADgEAAgEIgBgDQgBgEgCgDQgDgDgFgBIgFAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgJAEgCAFg");
	this.shape.setTransform(0.0333,0.0344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeblackR, new cjs.Rectangle(-13,-10.1,26.1,20.299999999999997), null);


(lib.eyeblackL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgHBhQgPgEgKgGQgRgLgGgTIgDgPIgDgaIgFABQgUAAgUgQQgTgPgEgVIABgDQAAgBAAAAQABAAAAAAQABAAAAABQABAAABAAIAZANQAGADADAAQAFAAAFgHIAHgKIAHgKQANgUATgNQAUgOAWgDQANgCAUACQAVACAQAGQAOAHAMAMQAMALAGAPQAMAcgFAgIgCADIgCAAQAAAOgEAOQgDAJgEAHQgEAIgIAHQgUASgfAGQgLABgLAAQgSAAgSgEgAAGhRQgNADgLAHQgOAJgJARQgGAKgEAMQgGAPgBATIAAABIAAACIACASIADASQAGAWAOAKQAGAFAMADQAVAIAYAAQAdgBAVgKQAZgNAKgWQADgHACgLQACgKAAgJQgDgEAAgIQgCgWgNgUIgJgMQgEgFgIgGQgYgRgagDIgLgBQgIAAgIACgAAMBSQgVgHgMgPQgPgRgCghQAAgKABgFQABgFgBgCIgBgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIACABQAJAJAPADQAKACAGgBQAMgEAGgNQAFgJgBgIQgBgLgLgKIgHgHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAFgCAIgCQAPgCAPAFQAPAFAMALQAKAKAGAOQAGANAAAPQABAZgOAdIgHAMIgIAJQgOANgTACIgFAAQgMAAgNgFgAA+ANQgEABgDADQgDADgBAEIgBADQAAAEAEAEQACAEAFACQAFACAEgBQADgBAEgDQAEgDACgEQACgFgCgEQgDgFgIgEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIgCAAg");
	this.shape.setTransform(0.0364,0.0344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeblackL, new cjs.Rectangle(-13,-10.1,26.1,20.299999999999997), null);


(lib.cherry2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9D2222").s().p("Ag4DdIgJgDQglgLghgVQghgWgXgfQgog0gRhRQgEgWAAgOQgBgWAJghQANgtATgcQAZglAjgPIAKgDIAdgFIABAAIAZAEIANAFIAWAOQANAIAKACIABAAQAJAaAJANIADAEIgxgJIgNgGIgHgDIgDAAQgEgBgCADQgDADACADQABADAEADQARALAXAFIAKABIAgAEIAtgCIAHgCQAKgDAUgJQATgJAKgEQALgDAAgFQAAgFgGgCIgEAAIgFAAQgKACgRAJIgaALIgMAEIgBAAIgCgHIgOgjIABAAIAegCIAJgDQAKgCANgIIAXgLQAMgGAKgCIASgCIAFAAIAEAAQATADAQAQQAOANAJAVQALAVAHAcQAFAUAFAfIAFAoQAFBEgdA8QgdA+g4AnQgSANgTAHIgNAFIg0AIIAAAAIgaABg");
	this.shape.setTransform(0.0039,39.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("Ag9G2IAAAAQACgEgEgIQgJgSgHgVIAAgBIgBgBQgVg9gLhSQgKhNgBhMQAAgWABgTIAFgpQAFguAFgaQAGgoAJgfQAQg6AbgpIABAAQACADADAAIACAAQADgBACgFIABgIQABgGAFgJIADgEIAAAAIgBAAQAcgzArgpQAOgNAFgGQAJgMACgMIAAgLQAAgHACgEQADgFAIgFQAHgFAFAAIACAAIAAAAIgDAEQgLAOACALQABAHAHAIQAFAGAFAAIABAAIAEgDQACgCAAgDQgBgDgEgFQgEgEgBgDQAAgEAEgHIAEgHIAAAAIAEAIQADAKAEAWQADARgFAHQgFAKgQACIgMACIAAAAQgIABgEACQgJADgMALQgjAfgZAsQgQASgNAZQgJASgNAfQgVA1gIAgQgGAagEAnQgKBeAEBfIACAfQAHBSAhBeQgDADACAEQABACADABQAIAYAKAYIgLAAIgMAAg");
	this.shape_1.setTransform(6.5884,-18.7648);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA3KBIh8gKIgNgEQhGgYgtg1Qgtg3gVhdQgFgXAAgPQAAgSAGgbQALg0AWgjQAagsApgTIAMgFIAigGIAAAAIAjAEIALAEIAXAOIANAHQgUg/gJhKQgJhDgBhVQAAgZABgQIAEgiIAGgsIAHgxQAThuAvhAQAFgGADgCIABAAIAEgJQAgg4AyguIAJgJQAFgGACgFQABgEAAgGIABgKQABgMAJgKQAJgLAMgDIAIgBIAGAAQAFAAAFADQAIAFAGALQAFALADAPIAEAbQABAMgCAGQgCAIgLAIQgMAIgOADIgBAAIgKABIgHACQgIADgNAMQglAlgQAfIgFAJIgEACQgJALgHAOQgHAMgKAXQgOAhgIAVQgKAegFAZQgDARgDAYQgLBiAEBiQABAjAEAeQAIBAAbBQIAEABIAGABIAFAAIAKgBIALgCQANgEARgJQAWgLAIgDQAJgEAIgBIAPgDIAAAAIAUADQAJACAKAFQARAKANARQAUAZAMAwQAKAkAEAhQAGAlgBAaQgCA3gbA1QgaAzgrAmQgVATgSAJIgRAHIg8AOgAiOCyIgKADQgjAPgZAlQgTAdgNAsQgJAiABAVQAAAPAEAWQARBRAoA1QAXAeAhAWQAhAWAlAKIAJADIBHAIIAagBIAAAAIA0gIIANgEQATgIASgNQA4gnAdg+QAdg8gFhFIgFgnQgFgfgFgVQgHgbgLgWQgJgVgOgNQgQgQgTgDIgEAAIgFAAIgSACQgKADgMAFIgXAMQgNAHgKADIgJACIgeACIgBAAIAOAjIACAHIABAAIAMgDIAagMQARgJAKgCIAFAAIAEAAQAGACAAAFQAAAFgLAEQgKADgTAJQgUAJgKADIgHACIgtACIgggDIgKgCQgXgFgRgLQgEgDgBgDQgCgDADgDQACgDAEABIADAAIAHADIANAGIAxAJIgDgEQgJgNgJgZIgBAAQgKgDgNgIIgWgOIgNgFIgZgEIgBAAgAgblEQgJAfgGAoQgEAagGAvIgEApQgCATABAWQAABMAKBMQALBSAWA9IAAABIABABQAHAVAIASQADAIgCAEIABAAIAXAAQgKgYgIgYQgEgBgBgCQgBgEACgDQgghegGhSIgCgeQgEhfAKhfQAEgnAGgaQAHggAVg1QAMgfAJgSQAOgZAPgSQAbgsAigfQAMgLAJgDQAFgCAHgBIABAAIAMgCQAPgCAGgKQAEgHgCgRQgEgWgEgKIgDgIIgBAAIgDAHQgFAHABAEQAAADAFAEQAEAFAAADQABADgDACIgEADIAAAAQgFAAgGgGQgHgIgBgHQgCgLALgOIAEgEIgBAAIgBAAQgGAAgHAFQgIAFgCAFQgCAEgBAHIAAALQgBAMgJAMQgFAGgOANQgsApgcAzIABAAIAAAAIgEAEQgEAJgBAGIgCAIQgBAFgDABIgCAAQgDAAgDgDIAAAAQgbApgQA6g");
	this.shape_2.setTransform(0.0308,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cherry2, new cjs.Rectangle(-26.8,-64.1,53.7,128.3), null);


(lib.cherry = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9D2222").s().p("AhBDaQglgKghgWQghgWgXgeQgog1gRhRQgEgVAAgPQgBgVAJgiQANgsATgdQAZglAjgPQATgIAUAAQAVABASAIIAWAOQANAIAKADIABAAQAJAZAJANIADAEQgogDgWgMIgHgDQgGgBgDADQgDADACADQABADAEADQARALAXAFQARADAZACQAiABASgFQAKgDAUgJQATgJAKgDQALgEAAgFQAAgFgGgCQgEgBgFABQgKACgRAJIgaAMIgNADIgCgHIgOgjQAVACATgGQAKgDANgHIAXgMQAcgNAVADQATADAQAQQAOANAJAVQALAWAHAbQAFAVAFAfIAFAnQAFBEgdA8QgdA+g4AnQgSANgTAIQgaAKgnACIgaAAQgtAAgjgKg");
	this.shape.setTransform(0.0039,39.7261);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSJyQhGgYgtg1Qgtg3gVhdQgFgXAAgPQAAgSAGgbQALg0AWgjQAagsApgTQAWgKAYgBQAYgBAVAJIAYAOIANAHQgUg/gJhKQgJhDgBhVQAAgZABgQIAEgiIAGgsIAHgxQAThuAvhAQAFgGADgCIABAAIAEgJQAgg4AyguIAJgJQAFgGACgFQABgEAAgGIABgKQABgMAJgKQAJgLAMgDQAOgEAKAGQAIAFAFALQAGALADAPIAEAbQABAMgCAGQgDAIgKAIQgMAIgPADQgMABgFACQgJADgMAMQgmAlgPAfIgGAJIgEACQgIALgIAOQgGAMgLAXQgOAhgHAVQgKAegFAZQgEARgCAYQgMBiAEBiQACAjADAeQAJBAAaBQIAFABQAOADASgFQANgEARgJQAWgLAIgDQARgHAPgBQATAAATAKQASAKANARQATAZANAwQAJAkAFAhQAFAlgBAaQgCA3gbA1QgZAzgrAmQgWATgSAJQgeAQguAFQgUACgSAAQgzAAgwgQgAiYC0QgjAPgZAlQgTAdgNAsQgJAiABAVQAAAPAEAWQARBRAoA1QAXAeAhAWQAhAWAlAKQAtANA9gDQAngCAagKQATgIASgNQA4gnAdg+QAdg8gFhFIgFgnQgFgfgFgVQgHgbgLgWQgJgVgOgNQgQgQgTgDQgVgDgcANIgXAMQgNAHgKADQgTAGgVgCIAOAjIACAHIANgDIAagMQARgJAKgCQAFgBAEABQAGACAAAFQAAAFgLAEQgKADgTAJQgUAJgKADQgSAFgigBQgZgCgRgDQgXgFgRgLQgEgDgBgDQgCgDADgDQADgDAGABIAHADQAWAMAoADIgDgEQgJgNgJgZIgBAAQgKgDgNgIIgWgOQgSgIgVgBQgUAAgTAIgAgblFQgJAfgGAoQgEAagGAvIgEApQgCATABAWQAABMAKBMQALBSAWA9IAAABIABABQAHAVAIASQADAIgCAEIAYAAQgKgYgIgYQgEgBgBgCQgBgEACgDQgghegGhSIgCgeQgEhfAKhfQAEgnAGgaQAHggAVg1QAMgfAJgSQAOgZAPgSQAbgsAigfQAMgLAJgDQAFgCAHgBIANgCQAPgCAGgKQAEgHgCgRQgEgWgEgKIgEgIIgDAHQgFAHABAEQAAADAFAEQAEAFAAADQABADgDACQgCADgCAAQgFAAgGgGQgHgIgBgHQgCgLALgOIAEgEIgBAAQgGgBgIAGQgIAFgCAFQgCAEgBAHIAAALQgBAMgJAMQgFAGgOANQgsApgcAzIABAAIAAAAIgEAEQgEAJgBAGIgCAIQgBAFgDABQgFABgDgEQgbApgQA6g");
	this.shape_1.setTransform(0.0058,0.0172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("Ag9G2QACgEgEgIQgJgSgHgVIAAgBIgBgBQgVg9gLhSQgKhNgBhMQAAgWABgTIAFgpQAFguAFgaQAGgoAJgfQAQg6AbgpQAEAEAEgBQADgBACgFIABgIQABgGAFgJIADgEIAAAAIgBAAQAcgzArgpQAOgNAFgGQAJgMACgMIAAgLQAAgHACgEQADgFAIgFQAIgGAGABIAAAAIgDAEQgLAOACALQABAHAHAIQAFAGAFAAQADAAACgDQACgCAAgDQgBgDgEgFQgEgEgBgDQAAgEAEgHIAEgHIAEAIQADAKAEAWQADARgFAHQgFAKgQACIgMACQgIABgEACQgJADgMALQgjAfgZAsQgQASgNAZQgJASgNAfQgVA1gIAgQgGAagEAnQgKBeAEBfIACAfQAHBSAhBeQgDADACAEQABACADABQAIAYAKAYIgLAAIgMAAg");
	this.shape_2.setTransform(6.5884,-18.8702);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cherry, new cjs.Rectangle(-26.8,-64.2,53.7,128.5), null);


(lib.barcappedblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape.setTransform(11.675,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_1.setTransform(6.675,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgMAbIgIgDIAAgKIAAAAQAEADAGACQAFACAFAAQAFAAADgCQAEgCAAgEQAAgEgCgBIgHgDIgEgBIgGgBQgHgCgDgDQgDgEAAgFQAAgDABgDIAEgGIAHgDQAFgCAEAAIAKACIAIACIAAAKIAAAAIgJgEIgKgCQgEAAgDACQgEACAAAEQAAADACACQACACAFABIAFABIAFABQAGABAEADQADAEAAAGQAAAHgGAFQgGAFgKAAQgGAAgFgCg");
	this.shape_2.setTransform(1.175,0.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_3.setTransform(-4.475,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AASAkIgYgdIgOAAIAAAdIgJAAIAAhHIAUAAIAKAAIAIADQAEADACAEQADAEAAAFQAAAIgFAGQgDAEgIACIAcAggAgUAAIAKAAIAIAAQACgBADgDIADgEIACgHQAAgDgCgDIgEgEIgEgCIgGAAIgMAAg");
	this.shape_4.setTransform(-10.15,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// border
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_5.setTransform(-0.0125,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_6.setTransform(-0.0125,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D8BB2").s().p("Al7BuIAAgKIAAAAIAAjHIAAAAIAAgKIL3AAIAADbIAAAAIAAAAgAlxBkILjAAIAAjHIrjAAg");
	this.shape_7.setTransform(-0.0125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// box
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9966").s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_8.setTransform(-0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#47A4CB","#FFFFFF"],[0,0.655,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_9.setTransform(-0.025,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#47A4CB","#C9E0E8","#47A4CB"],[0,0.353,1],0,10,0,-10).s().p("AlnBaIAAizILPAAIAACzg");
	this.shape_10.setTransform(-0.025,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Al7BuIAAjbIL3AAIAADbg");
	this.shape_11.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-11,76,22);


(lib.bowpink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF29FF").s().p("AECDaIgLgQQB7hgCPghQBUgUBVADQBXAEBOAdQA1AUAdAZQAPAMADANQACAMgIAMQgHALgNAHQgQAJgYAEQgPACgcAAIjDAGQiGADg6AAQhsAAhVgHgAneAgQg5gfhngpQhygugvgXQhYgsg7gyQAagSA3gCQCtgHB/AzQBKAdA6AxQA9AzAhBCQAGAMAGAGQgIAmgEAmIgBATQg3g1hTgsg");
	this.shape.setTransform(-4.5202,-16.6231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ALwSMQhMgDg9gUQhKgZhdhCQiQhnhKhyQgxhMgtiDQhGjGgHgRIgCgGQgPAUgTAMQgZASgiACQghACgdgOQgbgPgOgGQgNgFgdgGQgxgMgfgVQglgagdg4IgIACQhIAThMAtQg7AihKA8Ih+BmQhKA6g8AhQhNArhLAQQhWARhKgSQg/gPhAgrQhDgtgxg9Qgzg/gYhJQgZhMAGhPQAHhSAnhDQAfg0AygrIAPgNQAHgJACgJQADgMgHgRQgKgTgEgKQgIgUAEgWQAFgXAPgPIAQgQQAJgKAAgJQAAgIgGgJIgMgOQgSgUgKgfIgBgFIgBgBQgHgMgCgUIgCgjQgCgSgJgWIgQgoQg7iXAxjGQAOg3AUgvQAhhMA6g9QA7g+BKglQBLglBTgJQBVgIBQAWQBHAUBRAyQCKBUCRCaQBYBdAzBPQBABkAUBiIAEgEQAtglAsABQAZABAcAPQAPAHAhAXQAOAKAIgBQAIAAANgIQAjgVAngFQAqgGAkAMQAnANAaAfQAYAdAFAiQALgKAOgJQAXgPAngUQEWiNE/gwQA0gIAngDQAxgDAqAFQAyAGA/AVQBgAfA0AtQAyAtAkBPQAjBLAEBHQACAngGAvQgFAigLAyQgWBhgZA6QgjBTg2AyIgpAiQgZAVgOAQQgTAWgHAZQgIAcALAYQAFANARATQATAVAFAJQAQAagGAgQgFAhgYATQgGAFgYAPQgSAMgJALQgLAOgDAXQgCAMAAAeQABBAgKBFQgCAOgHADIgCABQgdBagmA/Qg6BghTAwQhYAyh7AAIgfgBgACJCNIgHAsQgRBpgbA+QgHASgJAPQAEAAADADQAGAFAFALQAOAiA9CxQAtCCAvBJQBEBoCJBlQBXA/BDAXQA5AVBOAEQBRAEBFgSQBPgUA2gvQAjgfAhgzQA4hXAYhlQADgNAFgHQAEgeABghIgBglQAAgWACgPQAEgqAYgYQAIgIAOgJIAYgQQAdgVABgYQAAgOgKgRQgFgHgRgUQghgngBgoQgCg1AzgyQANgOAfgaQAegYAOgPQAcgfAWgtQASgjAQgyQAtiFgChoQgCg/gSg4QgTg9gkguQgfglglgZQgxghhSgYQg3gQgpgEQgqgDhDAHQlBAkkxCVQgoATgZAQQgfAUgVAWQgCAOgEAQQgNAygkBfIgFAOQgoBpgOA2IgEAVIAEgEIAJgHQCHhsCdgmQBUgUBVADQBXACBQAbQA6ATAoAeQAcAUAHAXQAHAWgOAYQgNAWgXAMQgTALgcAEQgSACggABIkBAHQhyACgzAAQhcgBhJgIQgHgBgFgCQgGgCgBgFQgCgFADgEQgLgDgFAEQgHAHgFAAQgEAAgDgDIgNBLgA04jqQAUAbgEAVQgDAPgUAVQgVAVgDAOQgDAQANAaQAPAeAAAMQABAWgSAVQgGAIgeAbQgoAkgaAyQgZAxgIA2QgIA1AKA3QAJA3AYAxQAVArAfAlQAXAbAlAhQA/A3A0AVQBCAdBQgGQBKgGBJggQA+gbBEgwQAsggBLg+QBOhBAogdQBEgxA9gcQAigQBAgWIAFgCIgBgCQgohfgGhpQgDglACglIgDgBQgHgBgNgLQhWhOjPhVQjWhYhUhFQgWgRABgQQACgPAUgLQAhgTBEgCQCUgDBwAjQCKArBTBeQAdAfAcAvQAHgaAJgaQgFgBgEgEQgEgFgDgOQgQhGgmg9QgPgXgSgXQhJhghRhCQgIgHgDgFQgFgIAEgHQAFgIAMACQAIADAJAIQA8A0A3BAQBtB9AXBvQAVg3Adg2QAagvAbggQgDgFgCgJQgYhyhRhzQg5hPhwhtQg6g3gpgjQg3gvgzggQh+hQh8gHQhBgEhBARQhBARg4AkQg3AjgsAzQgrAzgbA8QgUAugOA3QguC9A5CPIAQAnQAIAXACASQACANABAbQAFAaAHAMQAGANAHgCQAHgBgGAIIAKAaIAAgHIAHAIgAhLhDQAFAAADAGQACAFgBAGQgBAGgKANQgbAfgTAvQgNAjgNA2QgYBoAIBBQAFAnAQAaQAMAUATAPQAUAOAWAFQAXAGAXgFQAYgFARgPQAYgUASgqQAag+AShpQAXiQAHgbQAOg3AihaQAphsALglQAHgVAEgRQgCgEABgFQAAgGADgFQACgagHgUQgJgbgYgUQgYgSgdgFQg3gKg6AhQgXAPgMAAQgIAAgKgGQgGgCgMgJQgZgUgRgIQgZgNgXAAQgpABgoAqQgfAhgfA8Qh2DmAZDMQAFAtAQA6QAVBOAfArQAVAcAbARQAeATAfADQgag/AFhRQADhAAYhTQAOgxAPghQAVgpAcgcQAIgHAGAAIABAAgADVA0QBVAGBrAAQA7AACFgDIDEgFQAcgBAPgCQAXgDARgKQAMgHAIgKQAIgMgDgMQgCgNgPgMQgdgZg1gUQhPgchXgEQhVgEhTAUQiPAih8BfIgNALIAGAGQAEgCAIAAIAHABgAuPmFQg2ACgbARQA7AzBYArQAwAXBxAvQBoAqA5AeQBSAtA3A0IACgSQAEgmAIgmQgGgHgGgMQgihCg9g0Qg5gxhKgdQhvgsiSAAIgsABgAMZHrQhkgFhfgUQhLgQgxgYQgggQgjgbQgXgSgnghQhfhUhThPQgQgOAGgLQAFgIAMADQAHADAJAIQB0BtAwAqQAqAlAcAVQAnAdAlARQA2AZBfAPQBJALBLAFQAXABABANQABAKgLAEQgFACgIAAIgFAAgAvFDsQgWAAgBgNQgBgKALgEQAGgDAMABQBAABBPgUQAvgMBcggID/hZQAXgIAFAMQACAFgBAEQgBADgEAEQgEAEgLAEQh6AsieA2QhVAdgxAMQhAAPg3AAIgSgBgAD1iKQgDgFACgGQADgHAJgHQBMg+CNgpQBUgZA1AAQAfgBA9AIQAPACAGAEQAMAJgFAKQgEAJgKAAQgGAAgMgDQg2gNhDAIQg0AGhEAWQh0AkhAAzQgKAIgFACIgHABQgGAAgEgGg");
	this.shape_1.setTransform(0.0427,0.0221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9CFF").s().p("ALuRuQhNgEg6gVQhCgXhXg/QiJhlhEhoQgwhJgsiCQg9ixgPgiQgEgLgGgFQgEgDgDAAQAIgPAIgSQAag+ARhpIAIgsIAMhLQADADAEAAQAGAAAHgHQAEgEAMADQgDAEABAFQACAFAFACQAFACAIABQBIAIBcABQAzAABygCIECgHQAggBASgCQAbgEAUgLQAXgMANgWQANgYgHgWQgHgXgcgUQgngeg7gTQhQgbhXgCQhUgDhVAUQidAmiHBsIgIgKQANg2AohpIAGgOQAkhfAMgyQAFgQACgOQAVgWAegUQAZgQApgTQExiVFAgkQBEgHApADQApAEA3AQQBSAYAxAhQAmAZAeAlQAkAuAUA9QASA4ABA/QACBogsCFQgRAygRAjQgWAtgdAfQgOAPgdAYQgfAagNAOQg0AyACA1QACAoAgAnQASAUAEAHQALARgBAOQAAAYgeAVIgXAQQgPAJgIAIQgXAYgFAqQgCAPABAWIAAAlQgBAhgEAeQgFAHgDANQgXBlg4BXQgiAzgjAfQg2AvhOAUQg5APhBAAIgdgBgACfCQQgGALAPAOQBUBPBfBUQAmAhAXASQAjAbAgAQQAxAYBMAQQBeAUBlAFQALABAHgDQAKgEgBgKQgBgNgXgBQhKgFhKgLQhegPg2gZQglgRgogdQgcgVgpglQgxgqh0htQgIgIgHgDIgHAAQgHAAgDAFgAJkkjQg1AAhVAZQiNAphMA+QgJAHgCAHQgDAGAEAFQAFAIALgDQAGgCAKgIQA/gzB0gkQBEgWA0gGQBDgIA3ANQAMADAFAAQALAAAEgJQAEgKgMgJQgFgEgQgCQg2gHgeAAIgHAAgAzPKYQgzgVhAg3QglghgXgbQgeglgWgrQgYgxgJg3QgJg3AIg1QAIg2AZgxQAagyAogkQAdgbAHgIQASgVgBgWQgBgMgPgeQgNgaAEgQQADgOAUgVQAVgVACgPQAFgVgUgbIgHgIIgBAHIgJgaQAGgIgHABQgHACgHgNQgHgMgEgaQgBgbgCgNQgCgSgJgXIgQgnQg4iPAti9QAOg3AUguQAbg8ArgzQAsgzA4gjQA4gkBAgRQBBgRBCAEQB7AHB+BQQAzAgA4AvQApAjA5A3QBwBtA5BPQBSBzAXByQACAJADAFQgbAggaAvQgdA2gVA3QgWhvhth9Qg3hAg9g0QgJgIgHgDQgMgCgGAIQgEAHAGAIQACAFAJAHQBQBCBKBgQASAXAOAXQAnA9AQBGQADAOAEAFQADAEAFABQgJAagHAaQgcgvgcgfQhUheiJgrQhwgjiVADQhEACggATQgVALgBAPQgBAQAVARQBUBFDWBYQDPBVBXBOQANALAGABIAEABQgCAlACAlQAHBpAnBfIABACIgFACQhAAWghAQQg9AchEAxQgpAdhOBBQhLA+gsAgQhEAwg+AbQhJAghJAGIgcABQhAAAg3gYgAvRDRQgLAEABAKQACANAVAAQA/ADBLgRQAwgMBWgdQCeg2B5gsQALgEAEgEQAEgEABgDQACgEgCgFQgGgMgWAIIkABZQhbAggwAMQhOAUhBgBIgFAAQgIAAgFACgAhGGoQgWgFgTgOQgTgPgMgUQgQgagFgnQgJhBAYhoQANg2AOgjQASgvAbgfQAKgNACgGQABgGgDgFQgCgGgGAAQgGgBgJAIQgcAcgUApQgPAhgPAxQgXBTgEBAQgEBRAaA/QgggDgdgTQgcgRgUgcQgggrgVhOQgPg6gFgtQgajMB3jmQAfg8AfghQAogqApgBQAWAAAZANQARAIAZAUQANAJAFACQAKAGAIAAQANAAAXgPQA6ghA2AKQAeAFAXASQAZAUAJAbQAHAUgCAaQgDAFgBAGQAAAFABAEQgDARgHAVQgMAlgpBsQgiBagOA3QgGAbgYCQQgRBpgbA+QgSAqgXAUQgSAPgXAFQgMACgLAAQgMAAgMgDgAC9AvIAOgLIALAQQgMgBgGACg");
	this.shape_2.setTransform(-0.1036,0.0065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-116.5,305.5,233.1);


(lib.bowgreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CC66").s().p("AkUDOQgIgCgGgEIAEgGIAaAOQgKAAgGgCgAEci9IgDAAIgCgBQAFgIAEgJIADAUQgDgCgEAAg");
	this.shape.setTransform(-20.6,12.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5ECC95").s().p("ACZG6QAAgagDgZQgHhJgeg+QgKgWgUghIghg2QgqhNgShVQAAgDgCgDQAfgBAUgKQAOgHALgNIAIgJIACABIgBACQAAADAEADQAaAUAiAUQAaANAmASQA8AcAtAOIAfAIIAGALQABAEAEADQASARBIAyQA5AoAbAhQAVAagFATIgWAbQhdBMhkBDIgkAYQgpAagbANQgnAUgjAHQAIguAAgsgAAbHbQgigHgtgZIgCgBIhJgsQhcgzhqgIQgagCgtAAQgzABgUgBIgZgOQBAh2BchjQAtgxAxgrQAQgKAOgKQAFgEAAgEQAmgeApgbQADgCABgEIABgCIABADQAPAeAZANQAQAJAaADIgCACQgCACgBAFQgGAwgCAgQgCAsAEAlQAGA+AhBhIAbBNQAKAfAHAaIAGAWQABAGgBACQgCADgFAAIgEAAgAFGA3IgBgBQgEgEAEAEIgmgMQhsgmhfg+IgCgUQAMgcgDgiQgBgRgFgQQgHgUgMgQQgNgSgQgLIgKgGQAcgTBNg6QBEgzAtgaQBAglA+gPQBHgRA+APQAqAKAWAXQAUAUAGAjQAFAagDAmQgICJgrCDQgJAfgLARQgOAagUAMQgZAPgqABQgrAAg3gPgAmVAqQgkAAgWgFQgggHgVgQQgWgQgPgeQgLgXgIgkQghiFAMiKQAFg0AMgkQAQguAfgaQALgJAIABQAHAAAJAJIAWAYIAWAYQAkAkA6AbQAeAOBOAcQBDAYAnAVQAzAdAeAlIgLAAIACADQgPAHgNALQgXASgJAXQgKAZADAkQADAeAKAWIgBAAQgCgBgDACQg9Alg6AxIgOAIQgYAOgWAHQgVAGgbACIgbAAIgVAAgAgygiQgSgDgNgIQgWgNgMgdQgJgWgCgfQgCgYAEgOQAFgZAVgTQALgLAcgHQAEAFADAAQADgBABgEIAAgBQADABAFgBQATgFATADQASAEAQAKQATANAMAVQALATAFAYQAGAigKAcQgFAPgKANQgLAMgOAIQgLAFgOADQgKACgQAAIgIAAQgPAAgLgCg");
	this.shape_1.setTransform(0.0299,-0.0048);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACIIdQgFgDADgMQAJgqAAgqQAAgcgDgcQgKhHgfg/QgKgVgUggIgfg0QgphNgRhVIgBgGIgPAAQADACgBAHQgGAmgCAmQgCAmABAcQAFBDAiBkIAbBRQAMAjAIAdIAFATQADAMgDAGQgGAKgTgEQgngIg0gfIgHgEIgkgWQgagQgSgJQg/gghVgKQhBgHhcADIgNAAQgHAAgGgCQgGgCgFgEQgFgFgBgGQgBgIAGgMQAHgPAQgZQBLhxBOhTIApgpQgWAJgYAGQhAAPg/gNQg0gLgcgcQgSgQgNgcQgJgVgIggQgjiNAPiRQAFg2ANgjQATgvAigZQAMgJAJAAQAIAAAHAGQAGAEAHAIIAaAdQAPARAOALQAkAfA6AZQARAHBWAgQA/AXAnAWQAzAfAdAnIAEAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIgBABIABACIAEgBQATgGAWAEQAJACAJAEIABgBIBthSQAyglAfgUQAugeAogSQAvgVAvgIQAzgKAuAIQAkAGAcAPQAfATAOAcQAJASACAaQACASgBAcQgJCfguCEQgKAagJAQQgNAXgRAMQgfAXg5gCQgggBgkgHIAbAVQApAgAhAXQA8AqAaAkQAVAegGAVQgDAJgIAIIgQAOQhZBGg3AnIgjAZQg+Apg4AeQgWANgQAGQgWAJgTACIgDAAQgFAAgCgCgAFznCQg+APhAAlQgtAahEAzQhNA6gcATIAKAGQAQALANASQAMAQAHAUQAFAQABARQADAigMAcQgEAJgGAIIgIAJQgLANgOAHQgUAKgfABQACADAAADQASBVAqBNIAhA2QAUAhAKAWQAeA+AHBJQADAZAAAaQAAAsgIAuQAjgHAngUQAbgNApgaIAkgYQBkhDBdhMQAJgHAEgFQAHgHACgIQAFgTgVgaQgbghg5goQhIgygSgRQgEgDgBgEIgGgLIgfgIQgtgOg8gcQgmgSgagNQgigUgagUQgEgDAAgDIABgCIAEAAQADAAADACQBfA+BsAmIAmAMQgEgEAEAEIABABQA3APArAAQAqgBAZgPQAUgMAOgaQALgRAJgfQAriDAIiJQADgmgFgaQgGgjgUgUQgWgXgqgKQgcgHgfAAQgkAAgmAJgAlFFTQBqAIBcAzIBJAsIACABQAtAZAiAHQAIABADgEQABgCgBgGIgGgWQgHgagKgfIgbhNQghhhgGg+QgEglACgsQACggAGgwQABgFACgCIACgCQgagDgQgJQgZgNgPgeIgBgDIgBACQgBAEgDACQgpAbgmAeQAAAEgFAEQgOAKgQAKQgxArgtAxQhcBjhAB2IgEAGQAFAEAJACQAGACAJAAQAUABAzgBIARAAQAhAAAVACgAoRoKQgfAagQAuQgMAkgFA0QgMCKAhCFQAIAkALAXQAPAeAWAQQAVAQAgAHQAWAFAkAAQAcABAUgBQAbgCAVgGQAWgHAYgOIAOgIQA6gxA9glQADgCACABIABAAQgKgWgDgeQgDgkAKgZQAJgXAXgSQANgLAPgHIgCgDIALAAQgeglgzgdQgngVhDgYQhOgcgegOQg6gbgkgkIgWgYIgWgYQgJgJgHAAIgBAAQgIAAgKAIgAhijeQgVATgFAZQgEAOACAYQACAfAJAWQAMAdAWANQANAIASADQAOACAUAAQAQAAAKgCQAOgDALgFQAOgIALgMQAKgNAFgPQAKgcgGgiQgFgYgLgTQgMgVgTgNQgQgKgSgEQgTgDgTAFQgFABgDgBIAAABQgBAEgDABQgDAAgEgFQgcAHgLALg");
	this.shape_2.setTransform(0.0198,-0.012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bowgreen, new cjs.Rectangle(-60.7,-54.3,121.5,108.6), null);


(lib.blueye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAygeQAsgLAcgwAAlg2QA7gIAMg5AA5iLQgRA9gWgCAhmCMQgFgDgEgGQgKgNAAgTQAAgTAKgNQAKgOAPAAQAOAAAKAOQAKANAAATQAAATgKANQgEAGgFAD");
	this.shape.setTransform(5.525,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("AgPApQgFgDgEgGQgKgNAAgTQAAgSAKgNQALgOANAAQAOAAAKAOQALANAAASQAAATgLANQgEAGgFADQgHAFgIAAQgIAAgHgFg");
	this.shape_1.setTransform(-3.225,7.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB4CWQgcgQgggJQghgJgggBQgigBghAIQghAJgaAQQgEACgCAAQgEgBgBgFQgKgnAAgaQgBgOADgiIAEgeQADgRAEgNQAKgeAYgiQAIgLAHgIQAUgUAfgLQAfgKAeAEQASACARAHQARAHAMAKQAGAEAEAGIABAAQAHAIAIALIAEAHQAHALAGANQASAkAEAqQAGA1gOA8QgDANgEAHQgDAEgDABIgCAAQgDAAgFgCgABBB0QAhAJAcAQQASg9gEg2QgDgsgRgnQgHgPgJgNQgSgdgVgMQgUgMgbgDQgZgCgYAHQgNADgLAGQgJAFgLALQgiAhgPApQgGASgEAVIgDAgIAAAAIgBAAIgBAKQgDAhACARIAEATIAFAWQAbgQAigHQAXgGAYgBQAHAFAJAAQAHAAAHgEQAdACAdAIg");
	this.shape_2.setTransform(-2.3983,1.1309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueye, new cjs.Rectangle(-17.7,-17.3,36.5,33.7), null);


(lib.almond4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ABRCcQCbgwCCiqQnAkKkOFvQgFAIgGAIQgIATAWANQB4A9BlATQBuAUBjgfg");
	this.shape.setTransform(4.7779,3.5974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AiACpQhlgSh4g+QgWgNAIgTIALgQQEOlvHAEKQiCCqibAwIglAHQg2AIgzAAQgiAAghgEg");
	this.shape_1.setTransform(4.7779,3.3712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.almond4, new cjs.Rectangle(-32.8,-14.9,75.19999999999999,37), null);


(lib.almond3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ag4imQAngHAngCQCbABC6B2QlCGMmTkZIAGADQgGgJADgDQBViHB8g3QAsgUAygGg");
	this.shape.setTransform(0.2375,-0.0719);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AlqA7IAGADQgGgJADgDQBViHB8g3QAggMAjgJIAbgFQAngHAngCQCbABC6B2Qi9DojXAAQiZAAioh1g");
	this.shape_1.setTransform(0.2375,-0.0719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.almond3, new cjs.Rectangle(-37,-18.6,74.5,37.1), null);


(lib.almond2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AFtg3QlFF9mUj6QBIiIBog9QBKgsBagFQAcgEAeAAQCZACCyB0");
	this.shape.setTransform(0.0125,-0.1426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996633").s().p("AlsBMQBIiIBog9QAxgZA6gOQAcgHAdgDQAcgEAeAAQCZACCyB0IAAABQjFDmjgAAQiUAAighjg");
	this.shape_1.setTransform(0.0125,-0.1426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.almond2, new cjs.Rectangle(-37.4,-18.6,74.9,37), null);


(lib.whitewhip3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.whipcream2();
	this.instance.setTransform(0.25,0.15,0.4421,0.3493,0,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitewhip3, new cjs.Rectangle(-21.7,-18.7,43.4,37.4), null);


(lib.whitewhip2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.whipcrem();
	this.instance.setTransform(0.15,3.55,0.4746,0.375,0,0,0,0.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitewhip2, new cjs.Rectangle(-23.3,-20,46.6,40.1), null);


(lib.whitewhip1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.whipcream3();
	this.instance.setTransform(0,0,0.4076,0.3221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitewhip1, new cjs.Rectangle(-20,-17.2,40,34.5), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nose();
	this.instance.setTransform(14.05,-7.35,0.3928,0.3103,0,0,178.7823,-35.6,-22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-3.8,-8.3,7.699999999999999,16.700000000000003), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.nose_2();
	this.instance.setTransform(0.25,-7.4,0.6804,0.5377,0,0,0,0.4,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5.7,-9.8,11.4,19.700000000000003), null);


(lib.reset2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.barcappedblue();
	this.instance.setTransform(0,0.2,1.9227,1.9227,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.barcappedblue(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-21.1,146.1,42.3);


(lib.nose2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose2, new cjs.Rectangle(-5.7,-9.8,11.4,19.700000000000003), null);


(lib.mouth5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mouth_3();
	this.instance.setTransform(0.05,0.05,0.3223,0.3322,0,-13.9979,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth5, new cjs.Rectangle(-26,-5.6,52.1,11.3), null);


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
	this.instance = new lib.mouth_2();
	this.instance.setTransform(-11.5,-4.8,0.6253,0.4941,0,0,0,-18.4,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth3, new cjs.Rectangle(-40.1,-13.2,80.30000000000001,26.5), null);


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
	this.instance = new lib.mouth5();
	this.instance.setTransform(-0.05,0,1.5894,1.2559);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth2, new cjs.Rectangle(-41.4,-7.1,82.8,14.3), null);


(lib.greenbow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bowgreen();
	this.instance.setTransform(0,0,0.5107,0.4036);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenbow, new cjs.Rectangle(-31,-21.9,62.1,43.8), null);


(lib.face2 = function(mode,startPosition,loop,reversed) {
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
	this.reset_btn = new lib.reset();
	this.reset_btn.name = "reset_btn";
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.reset_btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-22.1,152.6,44.2);


// stage content:
(lib.MPHFinalMArevalo = function(mode,startPosition,loop,reversed) {
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
			this.eyeblackL.x = 215 ;
			this.eyeblackL.y = 351;
			this.eyeblackR.x = 271;
			this.eyeblackR.y = 348;
			this.mouth1.x = 252;
			this.mouth1.y = 398;
			this.nose1.x = 245;
			this.mouth1.y = 371;
			this.bow1.x = 270;
			this.bow1.y = 309;
		}
		this.Reset_btn.addEventListener("click", ClickReset_btn.bind(this));
		
		function ClickReset_btn() {
			this.eyeblackL.x = 712;
			this.eyeblackL.y = 71;
			this.eyeblackR.x = 763;
			this.eyeblackR.y = 71;
			this.nose1.x = 730;
			this.nose1.y = 211;
			this.mouth1 .x = 882;
			this.mouth1. y = 102;
			this.bow1.x = 883;
			this.bow1.y = 198;
		}
		this.Face2_btn.addEventListener("click", ClickFace2.bind(this));
		
		function ClickFace2() {
			this.eyethinR.x = 378;
			this.eyethinR.y = 315;
			this.eyethinL.x = 303;
			this.eyethinL.y = 315;
			this.nose2.x = 344;
			this.nose2.y = 340;
			this.mouth2.x = 341;
			this.mouth2.y = 373;
			this.pinkglasses.x = 340;
			this.pinkglasses.y = 320;
			this.whitewhip.x = 322;
			this.whitewhip.y = 178;
			this.whitewhip2.x = 468;
			this.whitewhip2.y = 233;
			this.brownwhip1.x = 311;
			this.brownwhip1.y = 242;
			this.brownwhip2.x = 176;
			this.brownwhip2.y = 292;
			this.cherry1.x = 413;
			this.cherry1.y = 193;
			this.cherry2.x = 247;
			this.cherry2.y = 225;
		}
		
		this.Reset_btn.addEventListener("click", ClickReset_btn.bind(this));
		
		function ClickReset_btn() {
			this.eyethinR.x = 776;
			this.eyethinR.y = 125;
			this.eyethinL.x = 712;
			this.eyethinL.y = 125;
			this.nose2.x = 763;
			this.nose2.y = 212;
			this.mouth2.x = 887 ;
			this.mouth2.y = 132;
			this.pinkglasses.x = 806;
			this.pinkglasses.y = 299;
			this.whitewhip.x = 765;
			this.whitewhip.y = 490;
			this.whitewhip2.x = 764 ;
			this.whitewhip2.y = 471;
			this.brownwhip1.x = 826;
			this.brownwhip1.y = 267;
			this.brownwhip2.x = 827;
			this.brownwhip2.y = 481;
			this.cherry1.x = 899 ;
			this.cherry1.y = 425;
			this.cherry2.x = 899;
			this.cherry2.y = 486;
		}
		
		this.eyeblackR.on("pressmove", dragMe);
		this.eyeblackL.on("pressmove", dragMe);
		this.blueeye2R.on("pressmove", dragMe);
		this.blueeye2L.on("pressmove", dragMe);
		this.eyethinR.on("pressmove", dragMe);
		this.eyethinL.on("pressmove", dragMe);
		this.mouth1.on("pressmove", dragMe);
		this.mouth2.on("pressmove", dragMe);
		this.mouth3.on("pressmove", dragMe);
		this.nose1.on("pressmove", dragMe);
		this.nose2.on("pressmove", dragMe);
		this.bow1.on("pressmove", dragMe);
		this.bowgreen2.on("pressmove", dragMe);
		this.pinkglasses.on("pressmove", dragMe);
		this.purpleglasses.on("pressmove", dragMe);
		this.greenglasses.on("pressmove", dragMe);
		this.whitewhip1.on("pressmove", dragMe);
		this.whitewhip2.on("pressmove", dragMe);
		this.whitewhip3.on("pressmove", dragMe);
		this.brownwhip1.on("pressmove", dragMe);
		this.brownwhip2.on("pressmove", dragMe);
		this.brownwhip3.on("pressmove", dragMe);
		this.cherry1.on("pressmove", dragMe);
		this.cherry2.on("pressmove", dragMe);
		this.cherry3.on("pressmove", dragMe);
		this.almond1.on("pressmove", dragMe);
		this.almond2.on("pressmove", dragMe);
		this.almond3.on("pressmove", dragMe);
		this.almond4.on("pressmove", dragMe);
		this.almond5.on("pressmove", dragMe);
		this.almond6.on("pressmove", dragMe);
		this.pecan1.on("pressmove", dragMe);
		this.pecan2.on("pressmove", dragMe);
		this.pecan3.on("pressmove", dragMe);
		this.pecan4.on("pressmove", dragMe);
		this.pecan5.on("pressmove", dragMe);
		this.pecan6.on("pressmove", dragMe);
		
		function dragMe(evt) {
			evt.currentTarget.x = evt.stageX/stage.scaleX;
			evt.currentTarget.y = evt.stageY/stage.scaleY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.Reset_btn = new lib.reset2();
	this.Reset_btn.name = "Reset_btn";
	this.Reset_btn.setTransform(443.75,553.75);
	new cjs.ButtonHelper(this.Reset_btn, 0, 1, 1);

	this.Face2_btn = new lib.face2();
	this.Face2_btn.name = "Face2_btn";
	this.Face2_btn.setTransform(272.9,552.3);
	new cjs.ButtonHelper(this.Face2_btn, 0, 1, 1);

	this.Face1_btn = new lib.face1();
	this.Face1_btn.name = "Face1_btn";
	this.Face1_btn.setTransform(113.25,552.55);
	new cjs.ButtonHelper(this.Face1_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Face1_btn},{t:this.Face2_btn},{t:this.Reset_btn}]}).wait(1));

	// Body Parts
	this.blueeye2R = new lib.blueye();
	this.blueeye2R.name = "blueeye2R";
	this.blueeye2R.setTransform(764.3,98.75,1,1,0,0,0,0.2,-0.2);

	this.blueeye2L = new lib.eyeblue();
	this.blueeye2L.name = "blueeye2L";
	this.blueeye2L.setTransform(715.8,97.95,1,1,0,0,0,-0.2,-0.2);

	this.eyethinL = new lib.eyethinL();
	this.eyethinL.name = "eyethinL";
	this.eyethinL.setTransform(723.95,124.7,1,1,0,0,0,12,0);

	this.eyethinR = new lib.eyethinR();
	this.eyethinR.name = "eyethinR";
	this.eyethinR.setTransform(776.05,124.5);

	this.mouth3 = new lib.mouth3();
	this.mouth3.name = "mouth3";
	this.mouth3.setTransform(881.9,80);

	this.mouth2 = new lib.mouth2();
	this.mouth2.name = "mouth2";
	this.mouth2.setTransform(887.4,131.6);

	this.nose2 = new lib.nose2();
	this.nose2.name = "nose2";
	this.nose2.setTransform(768.95,210.1,1.1726,1,0,0,0,5,0);

	this.bowgreen2 = new lib.greenbow();
	this.bowgreen2.name = "bowgreen2";
	this.bowgreen2.setTransform(883,222.7,1,1.1417);

	this.whitewhip3 = new lib.whitewhip3();
	this.whitewhip3.name = "whitewhip3";
	this.whitewhip3.setTransform(765.1,490.15);

	this.whitewhip2 = new lib.whitewhip2();
	this.whitewhip2.name = "whitewhip2";
	this.whitewhip2.setTransform(764.1,471.6);

	this.whitewhip1 = new lib.whitewhip1();
	this.whitewhip1.name = "whitewhip1";
	this.whitewhip1.setTransform(767.35,454.2);

	this.eyeblackR = new lib.eyeblackR();
	this.eyeblackR.name = "eyeblackR";
	this.eyeblackR.setTransform(763.95,71.1,1.767,1.767,0,0,0,0.1,0.1);

	this.eyeblackL = new lib.eyeblackL();
	this.eyeblackL.name = "eyeblackL";
	this.eyeblackL.setTransform(711.5,70.9,1.767,1.767);

	this.nose1 = new lib.Symbol2();
	this.nose1.name = "nose1";
	this.nose1.setTransform(736.15,210.8,1.1726,1,0,0,0,5.2,0);

	this.purpleglasses = new lib.glasses3();
	this.purpleglasses.name = "purpleglasses";
	this.purpleglasses.setTransform(806.1,319.2,0.5124,0.4335);

	this.greenglasses = new lib.glasses2();
	this.greenglasses.name = "greenglasses";
	this.greenglasses.setTransform(805.5,338.4,1.2605,0.758);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBFIgFAAIgFgBQgGAAgBAFIgFAAIABgoIAFAAQACALAIAHQAGAIAKAEQAIADAKAAQALAAAJgGQAIgGAAgJQAAgGgEgEQgDgEgHgFIgagOIgRgLQgIgFgEgEQgDgFgCgFQgCgFAAgFQAAgKAGgLQAHgKAMgGQALgHAPAAIANABIAFABIAFABIAHABIAGgCIACgDIAFAAIAAAmIgFAAQgFgOgKgHQgKgIgNAAQgHAAgGACQgGACgEAFQgDAEAAAGIABAHQACADAFAFQAFAEALAGIAMAIQAPAHAKAGQAJAHAEAHQAGAJAAAJQgBAJgDAIQgFAHgIAFQgHAFgLADQgKADgLAAQgNAAgQgEg");
	this.shape.setTransform(845.6,267.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBIIAAgDQAOAAAEgFQAEgFAAgIIAAhkQAAgIgEgGQgDgFgNAAIgCAAIAAgDIB6AAIABAhIgCAAIgGgOQgDgGgFgCQgFgDgJAAIghAAIAAA9IAaAAQAMgBAGgEQAGgEABgJIADAAIAAApIgDAAQgDgKgGgDQgGgEgKABIgaAAIAAApQAAASAUAAIALAAQAKAAAHgDQAHgBAEgHQAEgFAEgLIAEAAIgDAjg");
	this.shape_1.setTransform(832.6,267.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBFIgFAAIgFgBQgFAAgCAFIgFAAIACgoIAEAAQACALAHAHQAIAIAJAEQAJADAJAAQAMAAAHgGQAJgGAAgJQAAgGgDgEQgEgEgHgFIgZgOIgSgLQgHgFgFgEQgEgFgBgFQgCgFAAgFQAAgKAGgLQAHgKAMgGQAMgHAOAAIANABIAFABIAFABIAIABIAFgCIADgDIADAAIAAAmIgEAAQgFgOgKgHQgKgIgNAAQgHAAgGACQgGACgDAFQgDAEgBAGIACAHQABADAFAFQAFAEALAGIANAIQAOAHAJAGQAJAHAGAHQAEAJAAAJQAAAJgDAIQgFAHgHAFQgIAFgKADQgLADgLAAQgMAAgRgEg");
	this.shape_2.setTransform(819.8,267.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBFIgFAAIgFgBQgFAAgDAFIgDAAIABgoIAEAAQACALAHAHQAIAIAIAEQAJADAJAAQANAAAHgGQAJgGAAgJQAAgGgDgEQgEgEgHgFIgZgOIgSgLQgHgFgEgEQgEgFgCgFQgCgFAAgFQAAgKAGgLQAHgKAMgGQALgHAPAAIANABIAFABIAFABIAIABIAFgCIADgDIADAAIAAAmIgEAAQgFgOgKgHQgKgIgNAAQgHAAgGACQgGACgDAFQgDAEAAAGIABAHQABADAFAFQAFAEAKAGIAOAIQAOAHAJAGQAJAHAGAHQAEAJAAAJQAAAJgDAIQgFAHgHAFQgIAFgKADQgLADgLAAQgMAAgRgEg");
	this.shape_3.setTransform(807.75,267.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKBJIAAgEQARAAAAgIIgBgEIgBgEIgBgEIgOgeIgyAAIgMAdQgCAGgBADQABAIAEABQAFADAGAAIAAAEIgzAAIAAgEQAIAAAHgFQAHgGAGgQIAxhxIAUAAIA6B6QAEAKAHAEQAGAEAJAAIAAAEgAgkAJIAqAAIgWgwg");
	this.shape_4.setTransform(792.25,267.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhDBIIAAgDQAOAAAEgFQADgFAAgIIAAhkQAAgKgEgFQgFgEgMAAIAAgDIBQAAIAAADQgNAAgEAFQgEAFAAAJIAABfQAAAJAEAFQAEAEALAAIAMAAQAMAAAKgFQALgFAIgTIAEAAIgGAlg");
	this.shape_5.setTransform(775.675,267.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBIQgLgCgJgDIgPgGIgLgIQgIgFgFgIQgGgIgEgKQgDgKAAgMQAAgPAHgOQAGgNANgKQANgKAQgFQAQgFARAAIASABIAYAFIAMABQAHAAACgHIAEAAIAAApIgEAAQgGgPgQgJQgPgKgVAAQgQAAgKAGQgLAGgGAKQgGAJgCAMQgDALAAAMQAAAfAPARQAPAQAYAAQASAAAEgEQAFgFAAgIIAAgRIgBgJQgBgEgEgDQgEgDgIAAIAAgDIBHAAIAAADQgPABAAAPIAAAjQgcAKgiAAQgNAAgLgBg");
	this.shape_6.setTransform(759.475,267.125);

	this.pinkglasses = new lib.glasses();
	this.pinkglasses.name = "pinkglasses";
	this.pinkglasses.setTransform(805.8,298.95,0.4015,0.2879);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghBFIgFgBIgFgBQgGAAgDAFIgEAAIACgoIAEAAQADALAHAIQAIAIAKADQAJAEAKAAQAMAAAJgGQAIgGAAgJQAAgGgDgEIgLgJIgcgOQgLgGgHgFQgHgEgFgFQgEgFgCgFIgCgKQABgKAGgLQAHgKAMgGQANgHAPAAQAIAAAGACIAFAAIAFABIAJABIAFgBIAEgDIADAAIAAAlIgEAAQgGgNgKgIQgLgIgOAAQgIAAgFADQgHACgEAFQgDAEAAAGIABAGQABADAGAFQAGAFALAFIANAIQAQAIAJAFQAKAHAGAHQAFAIAAAKQAAAJgEAHQgFAHgIAGQgIAFgLADQgLADgMAAQgOAAgRgEg");
	this.shape_7.setTransform(867.75,393.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPBHQgMgBgJgDIgQgGIgMgIQgIgGgFgHQgGgIgFgKQgEgKAAgMQABgPAHgNQAHgOANgJQAOgKARgFQARgGATAAQAKAAAIACIAaAFQAGABAHAAQAHAAACgHIAEAAIAAAoIgEAAQgHgPgQgJQgRgJgWAAQgQAAgLAGQgMAGgGAJQgGAKgDALQgCALAAAMQAAAfAPAQQAQARAZAAQAUAAAEgFQAFgEAAgJIAAgQIgBgJQgBgEgEgDQgEgDgJAAIAAgDIBMAAIAAADQgRABAAAPIAAAiQgdALglAAQgNAAgMgCg");
	this.shape_8.setTransform(851.65,393.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABOBIIiDhtIAABQQAAAKAFAHQAFAHAPABIAAACIhAAAIAAgCQAbgCAAgUIAAhdIgCgBIgEgDIgFgDQgQgNgMgBIAAgDIBBAAIBtBbIAAhBQAAgMgHgFQgGgFgOgBIAAgDIA+AAIAAADQgKABgFADQgFAEgBAFQgCAEAAAGIAAB1g");
	this.shape_9.setTransform(830.625,394);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgpBHIAAgDQAOAAAEgFQAEgFAAgIIAAhjQAAgKgGgEQgFgFgLAAIAAgCIBTAAIAAADQgOAAgEAFQgEAFAAAIIAABjQAAAFABAEQABADAFADQAFADAJAAIABAAIAAADg");
	this.shape_10.setTransform(815.175,393.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhLBHIAAgDQAJAAAHgCQAHgDAAgLIAAhlQAAgKgGgEQgFgEgMAAIAAgDIBfAAQAUAAAMAGQANAGAFAIQAGAJgBAKQAAALgFAHQgGAIgHAEQgKAEgKACQgLADgSAAIgUgBIAAArQAAAIADAEQAEAEAFABIALABIAAADgAgMg9IAAA9IAMAAQAMAAAJgEQAIgFADgIQADgIABgHQAAgIgEgHQgEgHgIgEQgIgEgNAAIgLABg");
	this.shape_11.setTransform(802.45,393.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhKBHIAAgDQAIAAAHgCQAHgDAAgLIAAhlQAAgKgGgEQgFgEgLAAIAAgDIBeAAQAUAAANAGQAMAGAGAIQAEAJAAAKQABALgGAHQgGAIgIAEQgIAEgLACQgLADgSAAIgUgBIAAArQAAAIADAEQAEAEAFABIALABIAAADgAgMg9IAAA9IAMAAQAMAAAIgEQAJgFAEgIQADgIAAgHQgBgIgDgHQgEgHgIgEQgJgEgMAAIgLABg");
	this.shape_12.setTransform(786.55,393.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBCQgSgGgLgLQgMgLgGgNQgFgNAAgMQAAgOAGgNQAHgNAMgKQAMgKARgGQASgGAVAAQAWAAASAGQARAGANAKQALAKAHANQAGANAAAOQAAAPgGANQgGANgMAKQgLAKgTAGQgRAGgWAAQgYAAgSgHgAghg0QgLAMgEANQgCAOAAAMQAAANACAOQAEAOALANQALAMAXAAQAgAAAJgVQAJgUAAgWQAAgQgEgOQgDgPgMgKQgLgLgUAAQgXAAgLAMg");
	this.shape_13.setTransform(768.45,393.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpBIIAAgDQAOAAAEgFQAEgFAAgIIAAhvIgiAAQgIgBgGAFQgFAEgFAOIgEAAIABghIAEAAQAFABAJABIB9AAQAJgBAFgBIAEAAIABAhIgDAAQgDgOgHgFQgGgDgJAAIgiAAIAABvQAAAFACAEQABAEAFADQAFACAJAAIAAADg");
	this.shape_14.setTransform(750.025,393.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaA+IgDgBIgFgBQgEABgCAEIgEAAIABgkIAEAAQACAKAGAHQAGAHAHADQAIADAHAAQAKAAAHgGQAHgFAAgIQAAgFgDgEQgDgEgGgEIgVgMIgOgKQgGgEgEgEQgDgFgCgEIgBgJQAAgKAFgIQAGgKAKgFQAJgHAMAAIALABIAEABIAEACIAHAAIAEgBIADgDIADAAIAAAiIgEAAQgEgNgIgGQgJgHgLAAQgGAAgEACQgFACgDAEQgDAEAAAFIABAGQABADAEAEIANAJIALAHIAUAMQAIAGAEAGQAEAIAAAJQAAAHgEAHQgDAGgGAGQgHAEgIADQgJACgJABQgLgBgOgDg");
	this.shape_15.setTransform(911.225,163.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAoBAIgohoIAAAAIgoBoIgDAAIgqhuQgCgGgDgDQgEgEgEgBIgHgBIAAgCIBBAAIAAACQgFAAgEACQgDADgBAEIACAIIAVA4IABAAIAZhBIgEgEQgCgDgEAAIgIgBIAAgCIBAAAIAAACIgJABQgEACAAAEIABAEIABAEIABADIAVA3IAAAAIAUgzIACgLQAAgHgEgCQgEgCgHAAIAAgCIAuAAIAAACQgIABgGAFQgGAGgEALIgnBmg");
	this.shape_16.setTransform(895.45,163.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggA7QgOgFgJgKQgJgKgFgLQgEgMAAgLQAAgNAFgLQAFgMAJgKQAKgIAOgFQAOgGAQAAQASABANAFQAOAFAKAJQAJAJAFAMQAFALAAANQAAANgFAMQgFAMgJAJQgJAJgOAFQgOAFgSABQgSAAgOgHgAgagvQgJALgCAMQgCAMAAALQAAAMACAMQACANAJAMQAJALARgBQAaAAAHgSQAHgTAAgTQAAgOgDgNQgDgOgIgJQgJgJgRAAQgRAAgJAKg");
	this.shape_17.setTransform(877.225,163.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhBBAIAAgDQALABADgFQADgEAAgIIAAhZQAAgHgDgFQgCgFgLABIgBAAIAAgDIBJAAQAPAAAJADQAFACAGADQAFADAFAGQAEAFAAAJQAAAKgGAGQgHAHgIACIgPAEIAAAAIANACQAIABAHAEQAHADAFAGQAFAHAAALQAAAKgGAIQgGAHgKAEQgGADgFABIgOAAgAgQAqQAAAKAFADQAFACAHAAIAKAAQAFgBAEgDQAFgCAEgGQADgFAAgKQAAgKgFgHQgFgGgJgDQgIgCgKAAIgLAAgAgQgEIAKAAQAKgBAKgEQAKgFAAgRQAAgMgIgHQgDgDgFgCQgFgBgJAAIgKAAg");
	this.shape_18.setTransform(861.825,163.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcA7IgEgBIgFAAQgFAAgCAEIgEAAIABgiIAEAAQACAJAHAHQAHAGAIADQAIADAIAAQALAAAIgFQAHgFAAgHQAAgFgDgEQgDgEgHgDIgXgNIgQgJIgKgIQgEgEgBgEQgCgEAAgFQAAgJAGgJQAGgIALgGQAKgFANAAIAMABIAFAAIAEABIAHABIAFgBIADgDIADAAIAAAgIgEAAQgEgLgKgHQgJgHgMAAQgGAAgFADQgGACgDADQgDAEAAAFIABAGQABACAFAEQAFAEAJAFIAMAHQANAGAJAFQAIAGAFAGQAEAHAAAIQAAAIgEAGQgDAGgHAFQgHAFgKACQgJADgKAAQgMAAgPgEg");
	this.shape_19.setTransform(760.925,41.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag6A9IAAgCQAMAAADgEQADgFABgHIAAhVQAAgGgDgFQgEgFgLAAIgBAAIAAgCIBuAAIABAbIgCAAIgGgLQgCgFgEgCQgGgCgIAAIgeAAIAAAzIAYAAQAMAAAEgEQAGgEAAgHIADAAIAAAjIgDAAQgBgJgHgCQgFgDgJAAIgYAAIAAAjQAAAPATAAIAJAAQAKAAAHgCQAGgCAEgEQADgFAEgJIACAAIgCAdg");
	this.shape_20.setTransform(749.15,41.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiA9IAAgCQAMAAAEgEQADgFAAgHIAAgpIgugvQgIgIgEgCQgFgDgHAAIAAgCIBMAAIAAACIgJABQgEABAAAEQAAADAGAHIAcAgIAXgbQAGgHAAgGQAAgDgDgCQgDgDgHAAIAAgCIA6AAIAAACQgMABgJAEQgJAFgJALIgdAiIAAAuQABAIAEAEQAEAEAKAAIAAACg");
	this.shape_21.setTransform(734,41.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag7A9IAAgCQANAAADgEQAEgFgBgHIAAhVQAAgGgCgFQgEgFgMAAIgBAAIAAgCIBvAAIACAbIgEAAIgEgLQgDgFgEgCQgFgCgIAAIgfAAIAAAzIAYAAQALAAAGgEQAEgEABgHIAEAAIAAAjIgEAAQgBgJgHgCQgFgDgJAAIgYAAIAAAjQAAAPATAAIAJAAQAKAAAGgCQAHgCADgEQAEgFAEgJIACAAIgCAdg");
	this.shape_22.setTransform(718.85,41.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcA3IgEgBIgEAAQgFAAgDAEIgEAAIACghIADAAQADAKAGAGQAGAGAJADQAIACAIAAQALAAAIgEQAHgFAAgHQAAgEgDgEQgDgEgHgDIgXgMIgPgIIgLgHQgEgEgBgEQgBgDAAgFQgBgIAGgIQAGgJAKgEQALgGANAAIAMABIAFABIADAAIAIABIAEgBIAEgCIACAAIAAAdIgDAAQgFgLgJgGQgJgFgMAAQgGAAgGACQgFACgDADQgDAEAAAEIABAFQABADAFAEQAFADAJAFIAMAFQANAHAIAEQAJAFAEAHQAFAFgBAIQABAHgEAGQgEAGgGAFQgIADgJADQgKACgJAAQgMAAgPgDg");
	this.shape_23.setTransform(918.75,49.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASA5IAAgCQAMAAADgEQADgEAAgHIAAgmIhHAAIAAAmIABAHQAAADAFACQADADAJAAIAAAAIAAACIhIAAIAAgCQANAAADgEQADgEAAgHIAAhOQAAgHgDgEQgDgFgMAAIgBAAIAAgCIBIAAIAAACQgMAAgDAFQgDADAAAIIAAAhIBHAAIAAghQAAgHgDgEQgDgFgMAAIAAAAIAAgCIBIAAIAAACQgNAAgDAFQgEADABAIIAABOIABAHQAAADAEACQAFADAIAAIABAAIAAACg");
	this.shape_24.setTransform(904,49.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjA5IAAgCQAMAAAEgEQADgEAAgHIAAhYIgcAAQgIAAgEAEQgFADgEALIgEAAIABgbIADAAIAMACIBrAAIAMgCIADAAIABAbIgDAAQgCgMgFgDQgGgDgIAAIgdAAIAABYQAAAFACADQABAEAEACQAEABAIAAIAAACg");
	this.shape_25.setTransform(887.35,49.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgrA0QgOgGgGgJQgHgJAAgUIAAgwQAAgGgDgFQgEgDgMAAIAAgCIBJAAIAAACQgMAAgEAEQgDAEAAAGIAAAyQAAALADAHQADAFAFADQAEADAHADIANABQAGAAAHgBQAGgDAGgDQAFgEADgEQADgHAAgOIAAgvQAAgHgEgEQgEgDgLAAIAAgCIBJAAIAAACQgMAAgEAEQgDAEAAAGIAABPQAAAIAEAEQAEADALAAIAAACIg2AAIAAgVIAAAAQgRAWggAAQgRABgNgGg");
	this.shape_26.setTransform(870.775,49.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjA1QgPgFgKgJQgKgJgEgJQgFgLAAgKQAAgLAFgKQAGgLAKgIQALgIAPgFQAOgEASAAQATAAAPAEQAPAFAKAIQALAIAFALQAFAKAAALQAAAMgFALQgFAKgKAIQgKAIgPAEQgPAFgUAAQgTAAgQgFgAgcgpQgKAKgCAKQgCAKAAAKQAAALACALQACALAKAKQAKAKATAAQAbAAAIgRQAIgQAAgRQAAgMgDgMQgDgMgKgIQgKgJgRABQgTAAgKAJg");
	this.shape_27.setTransform(852.925,49.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAgA5IAAgCQAJgBAFgDQAFgDgBgKIgHhHIgBAAIgxBaIgEAAIgzhXIgBAAIgHA+QgBAJADAGQADAFAFABIAKACIAAACIg0AAIAAgCQAKAAAFgGQAFgFACgNIAKhHQgJgMgRgCIAAgCIA3AAIAsBKIAphKIAyAAIAAACIgKABQgEACgCADQgDACABAGIAIBLQABAJACADQADAEADABIAKADIAAACg");
	this.shape_28.setTransform(833.625,49.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkBAIgFgBIgGgBQgGAAgDAFIgFAAIABglIAGAAQACAKAIAIQAJAGAKAEQALACAKAAQANABAKgGQAKgFAAgJQAAgFgEgEQgEgDgJgFIgdgNIgUgKQgIgEgFgEQgFgFgBgEQgDgEAAgFQAAgKAIgKQAHgJAOgGQANgGARAAIAQABIAEABIAGABIAJAAIAHgBIADgDIADAAIAAAjIgEAAQgGgNgLgGQgMgIgPABQgJAAgGABQgHADgDAEQgEAEAAAFIABAGQABADAHAEQAFAEAMAGIAPAHQARAHAKAFQALAHAGAGQAFAIABAJQgBAHgEAIQgFAGgIAFQgKAFgMADQgLACgNAAQgPAAgTgDg");
	this.shape_29.setTransform(781.6,172.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhKBCIAAgDQAQAAAEgEQAFgFgBgIIAAhbQAAgHgDgFQgFgFgOAAIgCAAIAAgDICMAAIABAeIgDAAIgGgNQgDgEgHgDQgFgDgLAAIgmAAIAAA4IAfAAQAOAAAGgEQAHgFABgIIADAAIAAAmIgDAAQgDgJgHgDQgIgDgKAAIgfAAIAAAmQAAAQAYAAIAMAAQAMAAAIgCQAHgCAGgFQAEgFAFgKIADAAIgCAgg");
	this.shape_30.setTransform(766.65,172.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkBAIgFgBIgGgBQgGAAgDAFIgFAAIABglIAGAAQACAKAJAIQAIAGAKAEQALACAKAAQANABAKgGQAKgFAAgJQAAgFgEgEQgEgDgJgFIgdgNIgUgKQgIgEgFgEQgFgFgBgEQgDgEAAgFQAAgKAIgKQAHgJAOgGQAOgGAQAAIAQABIAEABIAGABIAJAAIAHgBIADgDIADAAIAAAjIgEAAQgGgNgLgGQgMgIgPABQgJAAgGABQgHADgDAEQgEAEAAAFIABAGQABADAHAEQAFAEAMAGIAPAHQARAHAKAFQALAHAGAGQAFAIABAJQgBAHgEAIQgFAGgIAFQgKAFgMADQgLACgNAAQgPAAgTgDg");
	this.shape_31.setTransform(751.9,172.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgtA9QgTgGgNgKQgMgKgGgMQgGgMAAgLQAAgNAHgMQAHgMANgKQANgJATgFQATgFAXAAQAYAAATAFQATAFANAKQANAJAHAMQAHAMAAANQAAAOgHAMQgGAMgNAJQgNAJgTAGQgTAFgZAAQgZAAgUgGgAgkgwQgNALgCAMQgEANAAALQAAAMAEANQACANANAMQAMALAYAAQAkAAAKgTQAJgTAAgUQAAgPgEgNQgEgOgMgJQgMgKgXAAQgYAAgMALg");
	this.shape_32.setTransform(733.775,172.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABUBCIiOhkIAABJQAAAKAGAGQAGAGAQACIAAACIhGAAIAAgCQAdgCAAgSIAAhWIgCgBIgEgDIgFgDQgSgLgNgCIAAgDIBHAAIB2BUIAAg7QAAgMgHgFQgHgDgPgCIAAgDIBDAAIAAADQgLAAgFAEQgGADgBAFQgCAEAAAGIAABrg");
	this.shape_33.setTransform(710.875,172.45);

	this.almond1 = new lib.almond4();
	this.almond1.name = "almond1";
	this.almond1.setTransform(697.55,542.45,0.7521,0.5943,0,0,0,0.2,0.1);

	this.almond4 = new lib.almond4();
	this.almond4.name = "almond4";
	this.almond4.setTransform(756.75,542.15,0.7521,0.5943,0,0,0,4.7,3.6);

	this.almond5 = new lib.almond4();
	this.almond5.name = "almond5";
	this.almond5.setTransform(753.45,558.85,0.7521,0.5943,0,0,0,0.2,0.1);

	this.pecan6 = new lib.pecan6();
	this.pecan6.name = "pecan6";
	this.pecan6.setTransform(913,583.7,0.2086,0.1649);

	this.pecan5 = new lib.pecan5();
	this.pecan5.name = "pecan5";
	this.pecan5.setTransform(910.05,562.15,0.1938,0.1531,0,0,0,1.1,0.4);

	this.pecan4 = new lib.pecan4();
	this.pecan4.name = "pecan4";
	this.pecan4.setTransform(908.7,540.7,0.1832,0.1448);

	this.pecan3 = new lib.pecan3();
	this.pecan3.name = "pecan3";
	this.pecan3.setTransform(865,587.5,0.1946,0.1538);

	this.pecan2 = new lib.pecan2();
	this.pecan2.name = "pecan2";
	this.pecan2.setTransform(865.35,561.8,0.2232,0.1764,0,0,0,0.7,0.3);

	this.pecan1 = new lib.pecan1();
	this.pecan1.name = "pecan1";
	this.pecan1.setTransform(862.4,542.4,0.1935,0.1529);

	this.almond6 = new lib.almond4();
	this.almond6.name = "almond6";
	this.almond6.setTransform(756.35,579.65,0.7521,0.5943,0,0,0,0.2,0.1);

	this.almond3 = new lib.almond3();
	this.almond3.name = "almond3";
	this.almond3.setTransform(702.6,581.7,0.7521,0.5943,0,0,0,0.4,0.2);

	this.almond2 = new lib.almond2();
	this.almond2.name = "almond2";
	this.almond2.setTransform(701,561.5,0.7521,0.5943,0,0,0,0.2,0.1);

	this.cherry1 = new lib.cherry();
	this.cherry1.name = "cherry1";
	this.cherry1.setTransform(899.25,424.65,0.66,0.5215,0,0,0,0.4,0.2);

	this.cherry3 = new lib.cherry2();
	this.cherry3.name = "cherry3";
	this.cherry3.setTransform(899,486.4,0.6849,0.5412,0,0,0,0.5,0.3);

	this.cherry2 = new lib.cherry();
	this.cherry2.name = "cherry2";
	this.cherry2.setTransform(899.35,457.1,0.6996,0.5004,0,0,0,0.4,0.6);

	this.brownwhip3 = new lib.whip3();
	this.brownwhip3.name = "brownwhip3";
	this.brownwhip3.setTransform(826.9,480.6,0.4806,0.3798);

	this.brownwhip2 = new lib.whip2();
	this.brownwhip2.name = "brownwhip2";
	this.brownwhip2.setTransform(826.2,467.05,0.4995,0.3947);

	this.brownwhip1 = new lib.whip1();
	this.brownwhip1.name = "brownwhip1";
	this.brownwhip1.setTransform(826.15,451.3,0.4629,0.3657);

	this.mouth1 = new lib.mouth_1();
	this.mouth1.name = "mouth1";
	this.mouth1.setTransform(882.2,102.3,0.8132,0.6426,0,0,0,0.4,0.1);

	this.bow1 = new lib.bowpink();
	this.bow1.name = "bow1";
	this.bow1.setTransform(882.65,198,0.256,0.231,0,0,0,0,0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AA7hfIAEgEABDhDIAKgIAgtBfQgHAFgIAAQgJAAgHgF");
	this.shape_34.setTransform(766.975,101.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.bow1},{t:this.mouth1},{t:this.brownwhip1},{t:this.brownwhip2},{t:this.brownwhip3},{t:this.cherry2},{t:this.cherry3},{t:this.cherry1},{t:this.almond2},{t:this.almond3},{t:this.almond6},{t:this.pecan1},{t:this.pecan2},{t:this.pecan3},{t:this.pecan4},{t:this.pecan5},{t:this.pecan6},{t:this.almond5},{t:this.almond4},{t:this.almond1},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.pinkglasses},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.greenglasses},{t:this.purpleglasses},{t:this.nose1},{t:this.eyeblackL},{t:this.eyeblackR},{t:this.whitewhip1},{t:this.whitewhip2},{t:this.whitewhip3},{t:this.bowgreen2},{t:this.nose2},{t:this.mouth2},{t:this.mouth3},{t:this.eyethinR},{t:this.eyethinL},{t:this.blueeye2L},{t:this.blueeye2R}]}).wait(1));

	// Character body
	this.instance = new lib.pie("synched",0);
	this.instance.setTransform(324.75,292.7,0.9586,0.9478,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// name 
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AkAFOIAAgNQA2AAAPgYQAPgYAAgmIAAnTQAAglgOgZQgOgZgyAAIgGAAIAAgOIHiAAIAFCWIgNAAQgKgmgKgYQgMgZgUgMQgVgNgiAAIiGAAIAAEYIBqAAQAwAAAXgVQAVgWADgpIAOAAIAADCIgOAAQgGgsgagPQgagPglAAIhqAAIAADAQAABUBVAAIApAAQApAAAagLQAagLARgaQARgbAOgxIAMAAIgKChg");
	this.shape_35.setTransform(452.35,65.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AicFOIAAgNQA0AAAQgYQAPgYAAgmIAAnUQgBgugTgVQgVgUgqAAIAAgNIE5AAIAAAOQg1AAgOAYQgPAXgBAnIAAHUQAAAWAFARQADASASAPQASAOAjAAIAEAAIAAANg");
	this.shape_36.setTransform(408.55,65.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AkXFOIAAgNQAhAAAZgOQAZgNAAgxIAAndQAAgwgUgUQgUgTgrAAIAAgOIFhAAQBJAAAvAcQAvAcAUApQATAqAAAsQAAAzgWAkQgVAigcAUQghAXgoAMQgoALhDAAQgdAAgwgGIAADMQABAkAMATQAMATATAGQATAGAYAAIAAANgAgwkjIAAEfQAXAEAVAAQAxAAAfgXQAfgZANgjQAMgkgBgkQAAgmgNgfQgOgggegUQgggTgwAAQgSAAgYAEg");
	this.shape_37.setTransform(361.45,65.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgzA0QgVgWAAgeQAAgdAVgWQAUgVAfAAQAfAAAVAVQAWAXgBAcQABAegWAWQgVAVgfAAQgeAAgVgVg");
	this.shape_38.setTransform(321.6,91.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ah8FDIgTgEQgLgCgJAAQgVAAgJAWIgQAAIAEi9IASAAQAIA2AdAkQAcAjAkARQAjAQAjAAQAxAAAhgdQAhgcAAgoQAAgbgOgUQgOgUgbgUQgcgUhMgxQgogagcgZQgdgXgQgWQgPgXgHgWQgHgXAAgZQAAgxAagwQAZgvAugeQAugeA7AAQAbAAAaAFIASAEIATAFQAUADAKAAQAPAAAGgFQAGgFAGgJIAOAAIAACtIgSAAQgSg+gngkQgogkg3AAQgcAAgWALQgXALgOAVQgNAUAAAbQAAAPAFAPQAFAPAUAWQAUAWApAaQAtAcAKAIQA5AkAkAeQAkAfATAjQATAkAAAtQAAAqgQAjQgQAigdAZQgeAZgpAOQgpANgvAAQgyAAhAgSg");
	this.shape_39.setTransform(287.025,65.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ah8FDIgTgEQgLgCgJAAQgVAAgJAWIgQAAIAEi9IASAAQAIA2AdAkQAcAjAkARQAjAQAjAAQAxAAAhgdQAhgcAAgoQAAgbgOgUQgOgUgbgUQgcgUhMgxQgogagcgZQgdgXgQgWQgPgXgHgWQgHgXAAgZQAAgxAagwQAZgvAugeQAugeA7AAQAbAAAaAFIASAEIATAFQAUADAKAAQAPAAAGgFQAGgFAGgJIAOAAIAACtIgSAAQgSg+gngkQgogkg3AAQgcAAgWALQgXALgOAVQgNAUAAAbQAAAPAFAPQAFAPAUAWQAUAWApAaQAtAcAKAIQA5AkAkAeQAkAfATAjQATAkAAAtQAAAqgQAjQgQAigdAZQgeAZgpAOQgpANgvAAQgyAAhAgSg");
	this.shape_40.setTransform(239.675,65.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AicFOIAAgNQA0AAAPgYQAQgYAAgmIAAnUQgBgugTgVQgVgUgqAAIAAgNIE5AAIAAAOQg1AAgOAYQgPAXgBAnIAAHUQAAAWAFARQADASASAPQASAOAjAAIAEAAIAAANg");
	this.shape_41.setTransform(198.85,65.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ACMFOIAAgNQAmgBAWgUQAWgTgEg6IghmoIgCAAIjZIXIgQAAIjgoFIgCAAIgeFzQgEA3AMAdQAMAdAVAJQAUAJAaACIAAANIjiAAIAAgNQArgDAWggQAWggAIhJIAsmmQgqhDhJgLIAAgOIDxAAIDAG2ICzm2IDaAAIAAAOQgaABgRAFQgRAFgMARQgLARADAhIAlG/QAEAwAJAWQAJAWAPAIQANAIAeAHIAAANg");
	this.shape_42.setTransform(136.525,65.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAABUIgfAAIgOAAIgLAAIgFAAQADgGAEgEQAMgNAXgVQAfgeAKgPQAKgRAAgPQAAgOgKgJQgKgKgOAAQgKAAgIAEQgIAEgGAGQgDAEgFALIgEAHIgCABIgCgBIgBgDQAAgGAGgNQAHgNANgHQAMgHAQAAQAWAAAPANQAOANAAASQAAAOgKAOQgKAOgjAeIgRAPIgUAUIAnABIAIAAIAKgBIAUABQADAAAEgDQADgDAGgNIAEAAIACAAIABACIgBABIgCAOIgCARIg5AAg");
	this.shape_43.setTransform(418.075,613.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAABUIgfAAIgOAAIgLAAIgFAAQADgGAEgEQAMgNAXgVQAfgeAKgPQAKgRAAgPQAAgOgKgJQgKgKgOAAQgKAAgIAEQgIAEgGAGQgDAEgFALIgEAHIgCABIgCgBIgBgDQAAgGAGgNQAHgNANgHQAMgHAQAAQAWAAAPANQAOANAAASQAAAOgKAOQgKAOgjAeIgRAPIgUAUIAnABIAIAAIAKgBIAUABQADAAAEgDQADgDAGgNIAEAAIACAAIABACIgBABIgCAOIgCARIg5AAg");
	this.shape_44.setTransform(404.275,613.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaBPQgNgJgKgUQgJgUAAgaQAAgVAFgTQAHgTAJgLQAJgLAKgEQAIgFALAAQAPAAAOALQAPALAJAXQAFAQAAAaQAAANgCALQgEARgHAMQgHANgJAIQgHAGgIADQgIADgHAAQgOAAgMgIgAgRhKQgKAGgDANQgGAVAAApQAAApAJARQAJAQASAAQAMABAJgIQAJgGAEgTQAEgUAAgXIgBgIQABghgDgLQgEgTgJgIQgJgHgMAAQgJAAgJAGg");
	this.shape_45.setTransform(390.55,613.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAABUIgfAAIgOAAIgLAAIgFAAQADgGAEgEQAMgNAXgVQAfgeAKgPQAKgRAAgPQAAgOgKgJQgKgKgOAAQgKAAgIAEQgIAEgGAGQgDAEgFALIgEAHIgCABIgCgBIgBgDQAAgGAGgNQAHgNANgHQAMgHAQAAQAWAAAPANQAOANAAASQAAAOgKAOQgKAOgjAeIgRAPIgUAUIAnABIAIAAIAKgBIAUABQADAAAEgDQADgDAGgNIAEAAIACAAIABACIgBABIgCAOIgCARIg5AAg");
	this.shape_46.setTransform(376.625,613.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgwBSQgDgDAAgFQAAgDAEgEIADgBIACgBIAQACQADgBABgCQAHgJAGgMQAFgMAAgDQAAgFgEgJIgQglIgUgwQgBgDgCgBIgJgDIgDgBQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIABgCIAFgBIAHAAIAKAAIAMAAIAKAAIAOACIAAACIAAABQgDABgGAAQgJABgEACIAAACIABADIACAFIAOAmIANAhIAJgTIAMgfQAEgKACgKIABgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQgCgBgFgBIgLgDQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCIAJAAIAJAAIAPAAIAJAAIACAAIADAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgCABQgJAAgEADQgDACgBAFIgCAFIgCAEIgEAJIgCAEIAAABIgYA5IgRAsIgEAIIgGAKIgIAHIgHADIgFAAQgGAAgDgCg");
	this.shape_47.setTransform(356.525,620.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAQAxQgDgDgCgJIgPAKQgIAFgFABQgHABgKAAQgHAAgFgDQgDgEAAgHQAAgJAMgMQAMgNAVgHIARgHIAAgJQAAgRgFgGQgFgFgJAAQgKAAgJAHQgFAEgDAMIgDAIQgGADgEAAQgDAAgDgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAgDAIgMQAIgMAMgGQAMgGAJAAQALAAAHACQAGACAFAFQAEAGABAGIABAUIgBAUIAAAPIAAAFIAAAFQAAAFADACQADADADAAQAFAAAFgFIABgCIADgBIABADIgDAGQgFAHgFADQgEACgFAAQgLAAgFgGgAgIAHQgLAGgGAJQgFAGABAFQAAAFADADQAEAEAGAAQAFAAAGgDQAHgEAJgIIABgXIAAgJQgKADgKAGg");
	this.shape_48.setTransform(344.85,617.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAkBUIAAgCIAAgCIAOgDQAIgCAEgCQACgFAAgPIgBgbIABgQIAAglQABgVgCgLIgKAUIgBAFIgBABIgVAsIgHASIgLAVIgLAaIgBAIIgEAAQgRgrgWgsQgXgtgIgPIgDAhQgCAgAAAnQAAANACAPQABAEADADQAEACAPAAIAKABIABADIAAACIgtgBIgPAAIgQABIAAgEQAEgDALgBIAMgBIABgCQACgFABgVIAFhJIACgsIAAgDIghgFIgCgDIABgCIAFgBIAEABIATABIAPgBIAHAAIAFABIADACIAFAMIAqBRIAQAiQATgkALgbIACgDIADgFIAJgVIAFgNIAJgYIAFgBIAGABIAaAAIATAAIAAACIgBACQgEADgHAAIgQACQgDABgBACIgBAMIAAAGIAAAGIABBBIAAAZIAAARQAAAJABACQABACAEABQAIADARACIABACIAAACIgGAAIgSAAIgLAAIgoAAIgHABIgCgBg");
	this.shape_49.setTransform(326.3,613.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLA+QgFgEgDgGQgBgFAAgRIAAgeIAAgNIAAgGIAAgHIgCAAIgMAAIgCABIgCgBIgBgCIABgCIAHgDQAEgCAFgEQAFgDADgFIAFgKIAEgIIAEAAIAAANIAAAQIADAAIAOgBIANAAIAJAAIAAAFIgBAEIgDAAIgVABIgMAAIgCABIgBAHIABATIgBAiQAAAOAEAEQADAFAIAAIAOgCIAIgFIABAAIADABIABACIAAABQgHAGgIADQgIADgNAAQgIAAgHgEg");
	this.shape_50.setTransform(273.5,615.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgtA2IABgCIAIgBIANgCIACgDQABgBAAgJIgBgxQgBgHgCgCQgCgCgIgBIgIgCIABgDQAPgHAFgDQAHgGAFgJIAFAAQABAGAAAWIAAACIAAADQAFgJAHgHIAEgEIAEgDQAKgFAFAAQAGAAAEAEQAEADAAAGQAAAFgDACQgEADgFAAIgJgCIgJgCIgFABQgEADgGAJQgDAGAAAGIAAAVIAAAaIACAFIABADIATABIADABQAGgBADACQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgQgBIgGAAIgJAAIgNAAIgIABIgZAAg");
	this.shape_51.setTransform(263.5,616.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ABdBYIgagBIgPAAIgRAAIgDAAIgEAAIgDAAIgCgBIAAgEIADgBIAPgBQAGABADgCIABgDIgDgNIgFgMIgQgmIgKgCIgdABIgJgBIgLACIgDAFIgMAkQgJAUABADIAAADIAJABIATACIACADIgBABIgKABIgagBIgKAAIgLAAIgHAAIgJAAIAAgBIABgDIAEgBIADAAIADAAIAOgCQAEgCAEgHQAIgNAJgYIAFgOIAHgQIAOghIAPglIAHgUIAEgBIAEAAIALAYIAJAUIAWA1IAMAeIALAeQAEAGACABIAFACIAGABIAKADIAAADIAAACIgGAAgAgKgvIgMAfIgFAKIgCAGIgBAFIABAAIAiABIATAAIgDgJIgLgZIgMgeIgBgDIgHAOg");
	this.shape_52.setTransform(248.2,613.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgFAFgEQAEgEAGgBQAGAAAEAFQAEAEAAAFQAAAGgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_53.setTransform(227.825,621.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOBcIgMAAIgXAAIgSAAIAAgDIAAgCIAPgDIAFgDIABgFIgBhMIgBgvIgBgOIgCgDQgEgCgLgCIABgEIAVgJQAFgEAFgGIABAAIADABIAAAKIAAAPQALgIAMgDQAKgEAMAAQAWAAAQAOQAPAPAAAWQAAAQgJANQgIANgPAGQgPAHgQAAQgMAAgQgHIgFgCIgBATQAAAoADAFQACADAGAAQAMABADACQACABABAEgAgPhAQgIACgHAGIAAADQAAAvABAFQADAKAFAEQAJAGARAAQASAAANgLQAMgKAAgSQAAgWgNgMQgNgNgWAAQgIAAgHADg");
	this.shape_54.setTransform(218,619.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ABrA4IgPgBIgJAAIgSABIgIAAIgGAAIAAgCIABgDIALgDQAGgBACgCQABgCABgTQAAglgBgGQgCgKgHgFQgIgGgLAAQgJAAgIAFQgIADgIAIIAAADIAAAVIgBAOIABAbQAAADACACQACABAJABIAHABQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIgBACIgCAAIgIAAIgoAAIgMAAIAAgCIAAgCQADgCAJgBIAJgCIACgCIABgLIAAgOIAAgRIAAgJQAAgQgHgIQgIgHgKAAQgKAAgKAFQgLAEgGAIIAAAGIAAAsQAAANABADQACACAGABQAKAAACACQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAACIgWgBIgKAAIgHABIgFAAIgQAAIAAgBIAAgDIAGgCQAHAAACgCQADgCABgEQABgEAAgcQAAgcgCgHIgIgDIgHgCIAAgEQAJgCAFgEQAGgEAIgKIABAAIAEAAIABABIAAAOIABAKQAPgMAMgGQAIgDAKAAQANAAAHAEQAGAFAIALQAMgMAKgEQALgEALAAQAPAAALAJQAKAJABATIAAALIAAALIAAAeQgBAGADADIAJACIAGABIABADIgBADg");
	this.shape_55.setTransform(199.55,616.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgjAvQgMgHgIgMQgJgNAAgPQAAgIAFgLQAEgKAIgIQAIgIAKgEQANgFARAAQAbAAASARQATAQgBAXQABAVgUAQQgSAQgcAAQgSAAgQgIgAgSgtQgKAEgHAMQgGALAAAUQAAAYAMAMQALAMASAAQAKAAAKgFQALgFAFgMQAHgMgBgQQABgJgGgNQgEgOgKgGQgJgHgOAAQgIAAgKAEg");
	this.shape_56.setTransform(180.7,617.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLBVQgLgDgNgGQgOgGgKgKQgKgKgGgPQgGgPAAgRQAAgQAEgMQAFgNALgMQAKgNAOgJQAOgIARgEQALgCAWAAQAQAAANAEQAOAEAFADQACAKAAALIAAAFIgDABIgCAAQgHgQgOgIQgNgIgUAAQgLAAgHACQgMAEgKAHQgJAHgIAKQgGAKgEAOQgEAOAAAOQAAAcAKASQAJASAQAIQAQAHAPAAIAIAAIAPgCQAKgDAIgEQAGgDAHgHQAHgHAEgJIACAAIACAAIAAAEIgJAeIgGACQgRAFgcAAQgWAAgLgCg");
	this.shape_57.setTransform(164,613.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgjAvQgLgHgJgMQgIgNAAgPQgBgIAEgLQAFgKAIgIQAIgIAKgEQANgFARAAQAbAAASARQATAQgBAXQABAVgUAQQgSAQgcAAQgSAAgQgIgAgSgtQgKAEgHAMQgGALgBAUQAAAYANAMQALAMASAAQAKAAAKgFQALgFAFgMQAHgMAAgQQAAgJgGgNQgEgOgKgGQgJgHgOAAQgIAAgKAEg");
	this.shape_58.setTransform(117.6,617.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAOBWIgRAAIgZABIgDgBIgBgCIABgCIALgCIAKgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAgBIABgaIgBgeIABgeIAAgfIAAgPQAAgFgBgCQgCgCgFgCIgLgEIAAgDIAJgCIAVgHIAGAAIAAAHIAAB/IgBANQAAAOABACQACACAJABIAKACQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIgBACIgCABIgQgBg");
	this.shape_59.setTransform(106.775,613.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAQAxQgEgDgBgJIgPAKQgIAFgFABQgHABgKAAQgHAAgEgDQgEgEgBgHQAAgJANgMQAMgNAUgHIARgHIABgJQAAgRgFgGQgGgFgIAAQgKAAgJAHQgFAEgDAMIgDAIQgGADgEAAQgDAAgDgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAgDAIgMQAIgMAMgGQAMgGAJAAQALAAAHACQAFACAGAFQAEAGABAGIAAAUIAAAUIAAAPIAAAFIAAAFQAAAFADACQADADADAAQAFAAAEgFIACgCIADgBIABADIgDAGQgFAHgFADQgDACgGAAQgLAAgFgGgAgIAHQgLAGgGAJQgFAGABAFQAAAFADADQAEAEAGAAQAEAAAHgDQAHgEAJgIIABgXIAAgJQgKADgKAGg");
	this.shape_60.setTransform(97.7,617.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgCA2IgDgGIgLgVIgZg1IgKgSIgSgGIgBgCIAAgBIAcABIAMgBIADAAIAQAAIAGABIABABIAAADIgGABIgSADIgBABIACAEIACADIANAfIARAkIALgUIAOgfQACgHACgJIABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgFgBIgMgCIgCgCIAAgBIAAgCIAFAAIARAAIAIAAIAbAAIACABIgBADIgEABIgDABQgNABgCABQgCACgFAMIgHAOIgHAQIgEAIIgVAug");
	this.shape_61.setTransform(85.05,617.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAzQgOgFgJgNQgIgNAAgSQAAgFACgJQADgJAGgKQAEgHAGgEQAJgGAGgDQAJgDAMAAQANAAAJAEQALAGAGAJQAGAJAAAIIAAACIg5AAIgLAAIgOABIgBAFIAAACIAAABIAAAGQAAAHAGAMQAFALALAGQAKAGAOABIANgCIAOgHIAKgHIABAFIAAACQgGAHgKAGQgKAFgKADQgFABgLAAQgKAAgKgEgAgVglQgIAJAAAHIAHAAIArgCIAHgBQACgCAAgCQAAgEgCgFQgDgGgGgCQgGgDgIAAQgQAAgKALg");
	this.shape_62.setTransform(72.175,617.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgtA2IABgCIAIgBIANgCIACgDQAAgBAAgJIAAgxQgBgHgCgCQgCgCgIgBIgIgCIABgDQAPgHAFgDQAHgGAFgJIAFAAQABAGAAAWIAAACIAAADQAEgJAJgHIADgEIAEgDQAKgFAFAAQAGAAAEAEQAEADAAAGQAAAFgDACQgDADgGAAIgJgCIgJgCIgFABQgEADgGAJQgDAGgBAGIABAVIAAAaIACAFIACADIASABIADABQAGgBACACQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgQgBIgGAAIgJAAIgOAAIgIABIgYAAg");
	this.shape_63.setTransform(61.2,616.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ABcBYIgagBIgNAAIgSAAIgEAAIgDAAIgDAAIgDgBIABgEIADgBIAPgBQAGABADgCIABgDIgEgNIgEgMIgQgmIgKgCIgeABIgJgBIgLACIgCAFIgMAkQgIAUAAADIABADIAIABIAUACIABADIAAABIgKABIgbgBIgKAAIgKAAIgHAAIgJAAIAAgBIAAgDIADgBIAEAAIADAAIAOgCQAFgCADgHQAIgNAJgYIAFgOIAIgQIANghIAPglIAIgUIACgBIAGAAIALAYIAIAUIAVA1IANAeIALAeQADAGADABIAFACIAHABIAJADIAAADIAAACIgHAAgAgJgvIgOAfIgDAKIgDAGIgCAFIACAAIAhABIAUAAIgDgJIgLgZIgLgeIgCgDIgGAOg");
	this.shape_64.setTransform(45.85,613.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAkBUIAAgCIAAgCIAOgDQAIgCAEgCQACgFAAgPIgBgbIABgQIAAglQABgVgCgLIgKAUIgBAFIgBABIgVAsIgHASIgLAVIgLAaIgBAIIgEAAQgRgrgWgsQgXgtgIgPIgDAhQgCAgAAAnQAAANACAPQABAEADADQAEACAPAAIAKABIABADIAAACIgtgBIgPAAIgQABIAAgEQAEgDALgBIAMgBIABgCQACgFABgVIAFhJIACgsIAAgDIghgFIgCgDIABgCIAFgBIAEABIATABIAPgBIAHAAIAFABIADACIAFAMIAqBRIAQAiQATgkALgbIACgDIADgFIAJgVIAFgNIAJgYIAFgBIAGABIAaAAIATAAIAAACIgBACQgEADgHAAIgQACQgDABgBACIgBAMIAAAGIAAAGIABBBIAAAZIAAARQAAAJABACQABACAEABQAIADARACIABACIAAACIgGAAIgSAAIgLAAIgoAAIgHABIgCgBg");
	this.shape_65.setTransform(23.9,613.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Frame
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("EhJbgwbMCS3AAAMAAABg3MiS3AAAg");
	this.shape_66.setTransform(480,320);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F0FFFF").s().p("EhJbAwcMAAAhg3MCS3AAAMAAABg3g");
	this.shape_67.setTransform(480,320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(405.7,325,545.3,339.6);
// library properties:
lib.properties = {
	id: 'EA2F94B9C7C4D14D9FC9A7C1DE351D47',
	width: 962,
	height: 640,
	fps: 24,
	color: "#000099",
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