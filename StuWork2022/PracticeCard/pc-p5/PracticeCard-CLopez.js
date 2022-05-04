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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AmFi9IB9AFIBkgFIBpAeIBygKIDIAKIAohBIAjhaQACgDgIgFQgPgHgsAAQgmAAhRgWQhLgUgLACQgMACgcAIQgaAHgNADQgPADheAJIhbAIIiCgUIgyAAIhBgFIgDgdIgMh5IgyilIAFhVIgliLASLCWIg1AjIhVgUIg3AZIh9gUIgjAKIhugKIiWAPIjSgFImtAAIlKgPIhGBkIAACjIAUAbIAeAPAEOHMIAPAZIAegZIAegFIAjAZIA3gKIAyAAIAeAFIA3gUIARgCICZgNIA3AeIBzAKIBugKICqBaIgehLIAFgjIBfCMIBGBLIA3gZIAjhBIA3gPIAegPIg8gyIgtAKIgPgoIg8huIgehGIgjgjIhThuIgHgKIgHAUIgcBLIAoBfIAKBBIgUBBACvHUIAFADIgEgDIgBAAIhLAOACbLuIAZgZIgPgyIAegjIgUgjIAAgtIAPgjIAKgjIgHgMIgNgHADNG9IAjgFIhAAcABGK3IAtAKIAZAPIAPAeIAUkaAMCJTIAPhBIgZgeIgUg8AJOHqIgoAZIAKBVIAAAoIAoAFIAAA8IAKA8IAZgFIB4AAIAtAKIgUh9IgKgyIiqAyIBpgFIAogKIAZgjASSJxIgtAjIg8APIg8AAIh4gPIg8AAIgtgPASZCMIgOAKAVpKAIhVhkIgUhBIAAhGIgUibAR5MMIAQAJQAPADgGggQgGgfAHgRIAJgMIgKhLASmIwIgUBBIgZCbIAtBQIgZAoASXH5IAPA3AWMJYIgjAoAtRtgIBkA3IBkgyIBYgiIgShCQgMgPgPgVQgcgrgKgfQgJgfhFgyIhDgsIhpBaIAFBVIAeBpQAKAiAAAQgA0Oj5IAZhGIBugZIDXAKIBkgtIEsAAIBNgEAu/sLIhahGIAPiCIgKhVIgog8IgoAFIg3AUIAKBuIAZBpIAKA8IgPAoIAUAZIAFABIAyAJIA8gUgAsks9IgtgjIhuBVAx9sQIgoAPIivAPIhQAeIg3AtIgFBfIAyAoIgPAZIAAAIQgCALgDAQQgFAZAAAPIB4BQIBLh9IAjgKIA8AKIBzgUIAUgeIAKhaIhfgyIgyAAIhGAPIgeBVIgFAoIAKAyIgKCqIAABGIAFAtIAPAoIAyBaIAyBGIBBCpIAFAZIEJCqIBQAtICRAtIBGAAIA3gWA0TmAIAPhpAmjClIg8h4IAygeIAKhjIAeg8IAAgtABQHlIhBgUIhPAZIivAFIhQgKIhBAAIgoAFIAABVIAUAtIAtAKIAABQIgKBpIAADmIAUAeIA8AFIAoAZIgZAPIBpBLIAogeIAjAPIBLgUIA7AFIBLAAIA8gZIgUgoIAPhVIgUigIhBAUIhBAAIhKgPIgeAAIgZAUIg8AAIgygUAkpJ3IADgfIg3geIAaAdIAaAgIAmAsIgogegAj+NNIAFgZIgKgjIgUgeIAUhQIAeAUIAegKIBBAAIAtAeIBjgKIAogeAmPldIAKCgAj+NNIAZAjIgFAeIgKAZAjqQ9IgZgZIAegjIAAgjIAFgZIgUgeAjWQQIAeAAIAyAPIAygFAhAQfIA3AAIA7AKIAygKIAZgUIAtgUIgogUIAUiMIAZg8IgUgtAj+NNIgygUIgegUIgjAKgAlxQVIAPhpIAZgFIAZAFIA8gFAMvPPIAeAjIAKAeIBkAPIAKAFQARAFAcAAQAtAABGgZIAogPIAjgUIgjhpIgjAZIhBAFIg8AKIhGAAIhageIgZAAIgZhaIAFgyIAeAUIAtAAIAjgKIBBAKIAjgFQAtgFBaAAAMvPPIiqAFIAoAKIBBAFIBBgUIjNgKIAehGIgKhQIgUgyAM0OOIi0gPAMgMCIAUCM");
	this.shape.setTransform(150.475,119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("Am9FPQAAgPAEgZIAFgbIABgIIAPgZIgzgoIAGhfIA3gtIBQgeICugPIAogOIAVAYIAEABIgOBPIgzAAIhGAPIgdBVIgGAoIAKAyIhLB9gAhbAVIgEgBIgVgYIAPgoIgJg8IgahpIgKhuIA3gUIApgFIAnA8IAKBVIgOCCIBZBFIg4AKIg6AUgAhbAVgAC4hUQgBgPgJgiIgfhqIgEhVIBohaIBEAsQBEAyAKAfQAJAfAdArQAOAVANAPIASBCIhYAiIhkAyg");
	this.shape_1.setTransform(47.15,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0033").s().p("AGOGTIgLgFIhkgQIgKgdIgegkIjNgJIAehHIgKhQIgUgxIAZgGIB4AAIAtAKIgUh8IAtAOIA8AAIB4AQIA8AAIA8gQIAtgiIgZCaQhaABgtAFIgjAFIhBgLIgjALIgtAAIgegVIAeAVIAtAAIAjgLIBBALIAjgFQAtgFBagBIAtBQIgZApIgjAZIhBAEIg8AKIhGAAIhagdIgZAAIAZAAIBaAdIBGAAIA8gKIBBgEIAjgZIAjBoIgjAVIgoAOQhGAZgtAAQgcAAgQgEgAD8D9IgUiNIgFAzIAZBaIi0gQgAuoCdIBzAfIgygVIgegUIgjAKIAKhoIAAhPIAjgfIAbAfIgCAOIAoAeIgUBQIAUAeIAKAjIgFAZIAZAjIgFAeIgKAZIg8AEIgZgEIgZAEIgPBqgAC7BmIh4AAIgZAGIgKg9IAAg7IgngEIAAgpIgKhVIAngZIgDgkICZgNIA3AdIBzAKIBugKICqBaIgUBBIgtAiIg8AQIg8AAIh4gQIg8AAIgtgOIgKgxIAPhBIgZgfIgUg7IAUA7IAZAfIgPBBIiqAxIBpgEIAogKIAZgjIAKAxIAUB8gADUgMgALch0IgUhBIAAhGIgUibIAjAiIAeBGIA8BuIAPApIAtgKIA8AxIgeAPIg3AQIgjBBgAJagggADKg9g");
	this.shape_2.setTransform(207.225,185.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("Ak/LKIAZgOIgogZIg8gGIgUgdIAPhqIAZgEIAZAEIA8gEIAKgZIAFgeIgZgjIAFgZIgKgkIgUgdIAUhQIAeATIAegJIBBAAIAtAdIBkgKIAngdIgnAdIhkAKIgtgdIhBAAIgeAJIgegTIgmgtIADgfIg3geIAaAeIgkAfIgtgKIgUgtIAAhWIgPgUIgegPIgUgbIAAiiIBGhkIFKAQIGtAAIDSAEICWgOIBuAKIAjgKIB9AUIA3gaIBVAUIA1gjIAOgKIBTBvIAUCaIAABGIAUBBIBVBkIg3AZIhGhMIhfiLIAUhAIgKhCIgoheIAchMIgcBMIAoBeIAKBCIgUBAIgFAjIAeBKIiqhaIhuAKIhzgKIg3gdIiZANIgRABIg3AVIgegGIgyAAIg3AKIgjgZIgeAGIgeAZIgPgZIgegUIgjAEIAjgEIhAAcIgBAAIhLANIBLgNIgUEZIgPgdIgZgQIgtgKIAtAKIAZAQIAPAdIAUAtIgZA9IhBATIhAAAIhLgPIgeAAIgZAVIg8AAIgygVIAyAVIA8AAIAZgVIAeAAIBLAPIBAAAIBBgTIgUCLIAoAVIgtAUIgZATIgyAKIg7gKIg3AAIA3AAIA7AKIAygKIAZgTIAtgUIgPBUIAUAoIg8AZIhKAAIg8gEIhLAUIgjgQIgoAfgAkwKPIAZAYIgZgYIAegjIAAgjIAFgaIgUgdIAUAdIgFAaIAAAjIgeAjgAizKJIAygFIgyAFIgygPIgeAAIAeAAIAyAPgAlsBQIBQAKICvgGIBQgZIBAAVIhAgVIhQAZIivAGIhQgKIhBAAIgoAEIAogEgAB9JigACCA/gAqTAtIiRgtIhQgsIkJiqIgFgaIhBiqIgyhGIgyhaIgPgoIgFgtIAZhGIBugZIDXALIBkgtIEsAAIBNgFIADAdIBBAGIAKCgIAAAtIgeA7IgKBkIgyAfIA8B3IhGBkIAACiIg3AXgADDAjgAAKo+IhyAJIhpgdIhkAEIh9gEIgKigIAyAAICCATIBbgIQBegIAPgDIAogKIAngKQALgCBLAUQBRAVAmAAQAsABAPAHQAIAEgCAEIgjBaIgoBAgAmypSg");
	this.shape_3.setTransform(154.975,160.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,303,241), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AcLV3IBfh9IBKiGIBVh5IBEjGIBJibIAThrIgZhVIg9g/IiBhHIlWhOIjcgHIjjhAIklg4Ig9loIgNlqIgXizIhRp0Ig9iAIgSh4IhoiiIgxgPIhPgqIg+AAIgkAHIg3AAIi4AcIgxAkIhCBHIgrA/IgrBrIg3BbIgeBdIh7DbIjiFiIBDAOIhJBHIg9BqIglB5IiHEMIgkB5IgMBHIiNgHInphVIkBAVIhugVIgxAxIiTAAIh0BbIglBrIgOAPQgPAVgIAbIEyCxICrBcICsBHIG+CVIBzASICaAYIReBrIJ/AWIC7AGIHFhOIDuhAIA+gxIAShVIhWgrAc6KhIFKhVAcLV3IiuinIhuhHIhJhAIgMg/IhiCNIilBHIiNBjIg9BjIhQBOIg3AdInEnbIo+HMImIovIqOG3ImapMIlUDtIBBCZIENF3ICrCBIKtCFIDvgHIFvAOIFDgOIS7AHICGhVICNh/gAnasKQLCHrJPnfAvpLBIBRmmIHXENIITBVIHLgqIDWi/ICMAcIAZkpEgijADGQgMArASC/IAZC4IDAHBA7qDjIiHCUAOONaIg5mVAuYEbIBckv");
	this.shape.setTransform(221.673,186.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AiwDNQhKhVAAh4QAAh3BKhVQBJhVBnAAQBoAABJBVQBKBVAAB3QAAB4hKBVQhJBVhoAAQhnAAhJhVg");
	this.shape_1.setTransform(209.675,186.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnAJvInYkNIBdkwIALhGIAlh4ICHkNIAkh5IA+hqIBJhHQLCHsJPnhIAXC0IAMFpIA9FoIgYEpIiMgcIjWC/InLArgAkniFQhKBVAAB3QAAB4BKBVQBJBVBoAAQBoAABIhVQBJhVAAh4QAAh3hJhVQhIhWhoAAQhoAAhJBWg");
	this.shape_2.setTransform(221.6,179.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669900").s().p("AnSc4IjvAHIqtiFIiriBIkNl3IhBiZIFUjtIGaJMIKOm3IGIIvII+nMIHEHbIA3gdIBQhOIA9hjICNhjIClhHIBiiOIAMBAIBJBAIBuBGICuCoIi6D0IiNB/IiGBVIy7gHIlDAOgAl9sKIhDgOIDiliIB7jbIAehdIA3hcIAqhqIArhAIBDhHIAxgjIC4gcIA3AAIAkgHIA+AAIBPAqIAxAPIBoCjIASB3IA9CAIBRJzQkkDulAAAQlHAAlmj5g");
	this.shape_3.setTransform(212.375,186.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AF+FlIo+HNImIowIqOG3ImapLIlUDsIjAnAIgZi4QgSi/AMgqQAIgcAPgUIAOgQIAlhrIB0hbICTAAIAxgyIBuAWIEBgWIHpBVICNAHIhcEwIHXENIITBWIHLgrIDWi/ICMAcIAZkpIElA4IDjBAIDcAHIFWBOICBBHIA9BAIAZBUIgTBrIhJCaIhEDHIhVB4IhKCGIhfB9IiuinIhuhGIhJhAIgMhAIhiCNIilBHIiNBjIg9BjIhQBOIg3AdgAOOCLIC7AGIHFhOIDuhAIA+gwIg+AwIjuBAInFBOIi7gGIg5mUIA5GUIp/gWIxehqIiagYIBRmmIhRGmIhzgSIm+iUIishHIirhcICHiVIiHCVICrBcICsBHIG+CUIBzASICaAYIReBqIJ/AWgAc6gtIFKhVIlKBVIAShVIhWgrIBWArgA9xlWIkyixgAOOCLgAvpgNgA9xlWg");
	this.shape_4.setTransform(221.673,258.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-3,-3,449.4,378.4), null);


(lib.rewind = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#663333").s().p("AAJAqIAAgHIgHAGIgHABQgJAAgHgGQgGgIAAgMQAAgLAHgJQAHgKAMAAQAGABAEAEIAAgKIAAgLIgBgDIgDAAIgEABIgBgDIAQgGIADAAIAAA9IABALIABADIACABIAEgBIABACIgQAGgAgLgFQgGAFAAAMQAAAMAGAGQAFAGAGAAQAEAAAFgFIAAgcQAAgDgCgDQgBgEgDgBIgFgCQgFAAgEAFg");
	this.shape.setTransform(32.575,8.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AADAcIAAgCIABAAIAFgBIADgEIAAgFIAAgVQgBgIgCgDQgBgDgEAAQgGAAgIAHIAAAcIABAGIACADQACABAEAAIAAACIgbAAIAAgCIACAAQAEAAACgCIAAgIIAAgTIAAgMIgBgDIgCgBIgFABIgBgCIARgHIACAAIAAAMQAKgMAHAAQAFAAADADQADACACAFQACADAAAIIAAAWIAAAHIACACIAGABIAAACg");
	this.shape_1.setTransform(26.35,9.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AgMAqIAAgCQAFAAABgBIACgDIAAgGIAAgVIAAgKIgBgDIgCgBIgFABIgBgCIAQgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAFABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQABAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_2.setTransform(21.7,8.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("AAOAbIgNggIgPAgIgCAAIgRgsIgDgFIgFgDIAAgCIAWAAIAAACQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAABIgBACIABAEIALAfIAMgZIgDgIQgBgDgDgBIgFgCIAAgCIAZAAIAAACQgEAAgCACQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIAAACIANAeIALgdIABgEIgBgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBgBgBAAIAAgCIARAAIAAACQgFACgCAFIgSAtg");
	this.shape_3.setTransform(15.675,10.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663333").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgDgDgCIgFgCQgFAAgEAEg");
	this.shape_4.setTransform(8.725,10.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663333").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_5.setTransform(4.075,9.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC66").s().p("AAJAqIAAgHIgHAGIgHABQgJAAgHgGQgGgIAAgMQAAgLAHgJQAHgKAMAAQAGABAEAEIAAgKIAAgLIgBgDIgDAAIgEABIgBgDIAQgGIADAAIAAA9IABALIABADIACABIAEgBIABACIgQAGgAgLgFQgGAFAAAMQAAAMAGAGQAFAGAGAAQAEAAAFgFIAAgcQAAgDgCgDQgBgEgDgBIgFgCQgFAAgEAFg");
	this.shape_6.setTransform(32.575,8.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC66").s().p("AADAcIAAgCIABAAIAFgBIADgEIAAgFIAAgVQgBgIgCgDQgBgDgEAAQgGAAgIAHIAAAcIABAGIACADQACABAEAAIAAACIgbAAIAAgCIACAAQAEAAACgCIAAgIIAAgTIAAgMIgBgDIgCgBIgFABIgBgCIARgHIACAAIAAAMQAKgMAHAAQAFAAADADQADACACAFQACADAAAIIAAAWIAAAHIACACIAGABIAAACg");
	this.shape_7.setTransform(26.35,9.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC66").s().p("AgMAqIAAgCQAFAAABgBIACgDIAAgGIAAgVIAAgKIgBgDIgCgBIgFABIgBgCIAQgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAFABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQABAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(21.7,8.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC66").s().p("AAOAbIgNggIgPAgIgCAAIgRgsIgDgFIgFgDIAAgCIAWAAIAAACQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAABIgBACIABAEIALAfIAMgZIgDgIQgBgDgDgBIgFgCIAAgCIAZAAIAAACQgEAAgCACQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIAAACIANAeIALgdIABgEIgBgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBgBgBAAIAAgCIARAAIAAACQgFACgCAFIgSAtg");
	this.shape_9.setTransform(15.675,10.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC66").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgDgDgCIgFgCQgFAAgEAEg");
	this.shape_10.setTransform(8.725,10.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC66").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_11.setTransform(4.075,9.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FFFF").s().p("AAJAqIAAgHIgHAGIgHABQgJAAgHgGQgGgIAAgMQAAgLAHgJQAHgKAMAAQAGABAEAEIAAgKIAAgLIgBgDIgDAAIgEABIgBgDIAQgGIADAAIAAA9IABALIABADIACABIAEgBIABACIgQAGgAgLgFQgGAFAAAMQAAAMAGAGQAFAGAGAAQAEAAAFgFIAAgcQAAgDgCgDQgBgEgDgBIgFgCQgFAAgEAFg");
	this.shape_12.setTransform(32.575,8.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FFFF").s().p("AADAcIAAgCIABAAIAFgBIADgEIAAgFIAAgVQgBgIgCgDQgBgDgEAAQgGAAgIAHIAAAcIABAGIACADQACABAEAAIAAACIgbAAIAAgCIACAAQAEAAACgCIAAgIIAAgTIAAgMIgBgDIgCgBIgFABIgBgCIARgHIACAAIAAAMQAKgMAHAAQAFAAADADQADACACAFQACADAAAIIAAAWIAAAHIACACIAGABIAAACg");
	this.shape_13.setTransform(26.35,9.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FFFF").s().p("AgMAqIAAgCQAFAAABgBIACgDIAAgGIAAgVIAAgKIgBgDIgCgBIgFABIgBgCIAQgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAFABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQABAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_14.setTransform(21.7,8.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FFFF").s().p("AAOAbIgNggIgPAgIgCAAIgRgsIgDgFIgFgDIAAgCIAWAAIAAACQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAABIgBACIABAEIALAfIAMgZIgDgIQgBgDgDgBIgFgCIAAgCIAZAAIAAACQgEAAgCACQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIAAACIANAeIALgdIABgEIgBgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBgBgBAAIAAgCIARAAIAAACQgFACgCAFIgSAtg");
	this.shape_15.setTransform(15.675,10.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66FFFF").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgDgDgCIgFgCQgFAAgEAEg");
	this.shape_16.setTransform(8.725,10.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FFFF").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_17.setTransform(4.075,9.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0099").s().p("AAJAqIAAgHIgHAGIgHABQgJAAgHgGQgGgIAAgMQAAgLAHgJQAHgKAMAAQAGABAEAEIAAgKIAAgLIgBgDIgDAAIgEABIgBgDIAQgGIADAAIAAA9IABALIABADIACABIAEgBIABACIgQAGgAgLgFQgGAFAAAMQAAAMAGAGQAFAGAGAAQAEAAAFgFIAAgcQAAgDgCgDQgBgEgDgBIgFgCQgFAAgEAFg");
	this.shape_18.setTransform(32.575,8.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0099").s().p("AADAcIAAgCIABAAIAFgBIADgEIAAgFIAAgVQgBgIgCgDQgBgDgEAAQgGAAgIAHIAAAcIABAGIACADQACABAEAAIAAACIgbAAIAAgCIACAAQAEAAACgCIAAgIIAAgTIAAgMIgBgDIgCgBIgFABIgBgCIARgHIACAAIAAAMQAKgMAHAAQAFAAADADQADACACAFQACADAAAIIAAAWIAAAHIACACIAGABIAAACg");
	this.shape_19.setTransform(26.35,9.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0099").s().p("AgMAqIAAgCQAFAAABgBIACgDIAAgGIAAgVIAAgKIgBgDIgCgBIgFABIgBgCIAQgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAFABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQABAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_20.setTransform(21.7,8.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0099").s().p("AAOAbIgNggIgPAgIgCAAIgRgsIgDgFIgFgDIAAgCIAWAAIAAACQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAABIgBACIABAEIALAfIAMgZIgDgIQgBgDgDgBIgFgCIAAgCIAZAAIAAACQgEAAgCACQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIAAACIANAeIALgdIABgEIgBgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBgBgBAAIAAgCIARAAIAAACQgFACgCAFIgSAtg");
	this.shape_21.setTransform(15.675,10.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0099").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgDgDgCIgFgCQgFAAgEAEg");
	this.shape_22.setTransform(8.725,10.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0099").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_23.setTransform(4.075,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,17.5);


(lib.BasicButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABADQADADAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape.setTransform(74.825,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA+IgXgoIgaAoIg0AAIAthAIgqg7IA4AAIATAiIAXgiIA0AAIgqA7IAuBAg");
	this.shape_1.setTransform(61.525,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAuAEQgLATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_2.setTransform(46.15,27.875);

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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


// stage content:
(lib.PracticeCardCLopez = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,28,54];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.b1.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
		this.rewind.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(26).call(this.frame_54).wait(1));

	// Label
	this.instance = new lib.Symbol1();
	this.instance.setTransform(512.2,498.45,1,1,0,0,0,221.7,186.2);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(526.65,34.5,1,1,0,0,0,150.5,119.5);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663333").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAdgOAeQgPAfgZAQQgZAPgeAAQgzAAgegogAggheQgNAIgIATQgIATAAAeQAAAwATAjQATAkAfAAQAYAAAPgUQAQgTAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape.setTransform(658.925,134.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AhlCdQgJgIAAgLQABgKAGgGQAHgGAMAAQAHAAAOAFIANAEQAHAAAJgIQAJgHAIgWIAQgnIhRioQgDgHgIgMQgGgIgEgDQgFgEgNgDIAAgJIBoAAIAAAJIgFAAQgLAAgGAFQgFAFAAAHQAAAJAIARIA1BxIAzh8QAEgKAAgJQAAgFgCgCQgCgDgEgBQgEgCgKAAIAAgJIBIAAIAAAJQgJABgFADQgEADgHAIQgCADgGAQIhaDeQgNAggWARQgVARgTAAQgPAAgKgJg");
	this.shape_1.setTransform(633.95,140.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663333").s().p("AAeBtQgHgIAAgUQgiAagJAEQgNAGgPAAQgXAAgPgPQgPgQAAgaQABgRAGgMQALgQAYgPQAZgNA5gVIAAgJQAAgigKgMQgMgNgSAAQgQAAgJAJQgJAIAAALIAAAOQAAALgGAGQgGAGgIAAQgKAAgFgGQgGgGAAgLQAAgVAWgSQAVgRAmAAQAeAAATAKQAOAHAGAQQAFALAAAgIAABLQAAAgACAHQABAIACACQADACAEAAQADAAAEgBQAFgDAPgPIAAAOQgcAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALABAOQAAASAKAMQAKALAOAAQASAAAegYIAAhVQgkAPgLAFg");
	this.shape_2.setTransform(611.2,134.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("ABICmIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjcIh/EWIgIAAIiAkWIAADcQAAAeAHAIQAJALAUAAIALAAIAAAJIhzAAIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjXQAAgWgFgKQgDgHgJgFQgKgEgUAAIAAgJIBeAAIB3ECIB2kCIBeAAIAAAJIgMAAQgVAAgJAMQgFAIAAAcIAADXQAAAeAHAIQAJALATAAIAMAAIAAAJg");
	this.shape_3.setTransform(576.925,129.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663333").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_4.setTransform(531.425,134.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663333").s().p("AimCmIAAgJIANAAQAVAAAJgOQAFgIAAgcIAAjVQAAgfgHgIQgJgKgTAAIgNAAIAAgJICHAAQBJgBAnASQAnAQAXAoQAYAnAAAzQAABEgqAvQgvA0hgAAgAhHiLIAAEZQAfAGAVABQA3AAAmgpQAlgnAAhFQAAhDglgoQgmgng5AAQgWAAgcAHg");
	this.shape_5.setTransform(501.525,129.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663333").s().p("AhSCeQgNgKAAgMQgBgHAGgFQAGgGAIABQAHAAAEACIARAJQASANASAAQAcAAAWgVQAWgWgBgfQABgegUgaQgTgZghgOQgbgLgtgCIA/iAIB1AAIgTApIhiAAIgWAsQBAAKAlAnQAhAgAAAsQAAAbgLAWQgKAWgQAQQgRAQgTAJQgbANgeAAQgdABgOgLg");
	this.shape_6.setTransform(458.55,129.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663333").s().p("AhlBwIAAgJICUjFIhJAAQgYAAgHADQgHADgFAJQgGAMgBASIgKAAIABg+IC7AAIAAAJIiVDFIBQAAQAaAAAJgEQAKgEAFgLQAEgIACgZIAJAAIgDBFg");
	this.shape_7.setTransform(423,134.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663333").s().p("Ag0CuIAAgJQARgBAGgDQAFgDAEgHQADgHAAgVIAAhWQAAglgCgKQgCgHgEgDQgEgDgGAAQgGAAgLADIgDgIIBCgcIALAAIAACzQABAVADAHQACAHAHADQAGADAPABIAAAJgAgPiCQgHgIAAgKQAAgLAHgGQAIgIAJABQAKgBAHAIQAIAGAAALQAAAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_8.setTransform(404.95,128.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663333").s().p("Ag0CuIAAgJQAQgBAFgDQAGgDADgHQADgHAAgVIAAjKQAAgmgBgJQgCgIgEgDQgEgDgGAAQgGAAgKADIgEgJIBCgaIALAAIAAEnQAAAVADAHQADAGAGAEQAHADARABIAAAJg");
	this.shape_9.setTransform(391.175,128.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663333").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_10.setTransform(373.125,134.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663333").s().p("Ah8CmIAAgJIAMAAQAVAAAJgNQAGgHAAgeIAAjVQAAgZgEgIQgCgGgIgFQgKgFgMAAIgMAAIAAgJID2AAIADBIIgJAAQgGgXgIgLQgJgKgMgGQgNgEgZAAIhIAAIAACBIA7AAQAVABAJgKQAKgIADgcIAJAAIAABwIgJAAQAAgUgFgJQgFgJgIgEQgJgFgQAAIg7AAIAABoQAAAZADAIQACAGAIAFQALAFAKABIAMAAIAAAJg");
	this.shape_11.setTransform(347.275,129.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663333").s().p("AgZAoIAAgBQAVgUAHgMQAIgKAAgLQAAgHgEgFQgFgEgFgBQgGABgFADQgEADgDAHIgCAAQACgLAGgGQAGgFAJgBQAIAAAHAHQAGAGAAAIQAAAGgCAHQgFAIgJALIgSASIAUAAIAJAAIAFgBIADgFIACAAIgFAPg");
	this.shape_12.setTransform(182.475,682.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663333").s().p("AgZAoIAAgBQAVgUAHgMQAIgKAAgLQAAgHgEgFQgFgEgFgBQgGABgFADQgEADgDAHIgCAAQACgLAGgGQAGgFAJgBQAIAAAHAHQAGAGAAAIQAAAGgCAHQgFAIgJALIgSASIAUAAIAJAAIAFgBIADgFIACAAIgFAPg");
	this.shape_13.setTransform(176.475,682.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663333").s().p("AgSAcQgHgMAAgQQAAgMAFgKQADgKAIgFQAEgDAFAAQAJAAAIAJQAJAMAAATQAAANgFAKQgDAJgHAFQgGAEgFAAQgLAAgHgNgAgGghQgEAFgBAKIgCAUQAAAQAEALQADAIAGAAQADAAAEgCQADgDABgHQADgKAAgRQAAgOgDgJQgCgHgDgDQgCgBgEAAQgDAAgDADg");
	this.shape_14.setTransform(170.6,682.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663333").s().p("AgZAoIAAgBQAVgUAHgMQAIgKAAgLQAAgHgEgFQgFgEgFgBQgGABgFADQgEADgDAHIgCAAQACgLAGgGQAGgFAJgBQAIAAAHAHQAGAGAAAIQAAAGgCAHQgFAIgJALIgSASIAUAAIAJAAIAFgBIADgFIACAAIgFAPg");
	this.shape_15.setTransform(164.475,682.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663333").s().p("AgXAmQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAGABIACABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQADgCACgFIADgJIgTgoIgCgEIgDgDIgFgCIAAgCIAaAAIAAACIgBAAIgFABIgBADIACAHIAMAaIAMgdIABgFIAAgBIgCgBIgDgBIAAgCIASAAIAAACIgEABIgDADIgBAEIgWA1QgCAIgGAEQgFAEgFAAQgDAAgCgCg");
	this.shape_16.setTransform(155.6,685.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663333").s().p("AAHAaQgCgCAAgEIgJAHIgHABQgFAAgEgDQgDgEAAgGQAAgEABgDQADgEAGgEQAGgCAMgFIAAgCQAAgIgCgDQgDgDgEAAQgDAAgCACQgDACAAACIAAAEIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgFQAAgFAFgEQAFgEAJAAQAGAAAFACQADACACAEIABAKIAAASIAAAJIABACIACABIACAAIAEgFIAAAEQgGAIgGAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgFAAQgFADgCADQgCACAAAEQAAAEADADQACADAEAAQAEAAAGgGIAAgUIgKAEg");
	this.shape_17.setTransform(150.125,684.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663333").s().p("AAUAcIAAgCIABAAQADAAACgCIACgDIAAgFIAAgWQAAgHgBgDQgDgDgFAAIgGABQgDACgFAEIAAAAIAAADIAAAZIABAGIACADIAGABIAAACIgaAAIAAgCIAGgBIACgEIAAgFIAAgWQAAgHgBgDQgDgEgFAAQgDAAgDACIgHAGIAAAcQAAAFABABQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIAGABIAAACIgbAAIAAgCIAFgBIACgDIABgGIAAgUIgBgLIgBgDIgCgBIgEABIgBgCIAQgHIADAAIAAAMIAGgHQADgCAEgBIAGgCQAFAAACADQADADACAGQAGgHAEgCQAEgDAEAAQAFAAADADQAEACACAFIABALIAAAWIABAHIABACIAGABIAAACg");
	this.shape_18.setTransform(142.75,684.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663333").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_19.setTransform(196.675,667.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663333").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_20.setTransform(193.025,668.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663333").s().p("AALApIAAgCIAGgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgDgIIgEgMIgeAAIgFANIgCAHIABADQACABAGABIAAACIgZAAIAAgCQAFgBABgCQADgDAEgIIAchBIABAAIAbBCQAEAIADACQACACAFABIAAACgAgQAKIAaAAIgMgfg");
	this.shape_21.setTransform(186.625,667.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663333").s().p("AgSAcIAAgCQAEAAACgCIACgDIAAgFIAAgUIAAgLIgCgDIgCgBIgEABIgBgCIAQgHIADAAIAAANQAFgNAIAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgEgCIgCACQgCACgCAFIAAAZIAAAHIADADIAFABIAAACg");
	this.shape_22.setTransform(178.025,668.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663333").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKABQAJAAAGAFQAGAGAAAKIgkAAQgBAMAGAGQAGAHAHAAQAFAAAEgDQAEgDADgGIACABQgCAHgGAHQgFAGgJAAQgJAAgHgHgAgJgTQgEAEAAAGIAXAAIgBgHQgBgDgDgDIgFgBQgFAAgEAEg");
	this.shape_23.setTransform(173.325,668.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663333").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_24.setTransform(168.975,667.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663333").s().p("AgbApIAAgCIABAAIAGgCIACgCIAAgHIAAgyIAAgHIgCgBIgDgBIgDABIgBgCIARgHIACAAIAAAMQAEgGAEgEQADgCAFAAQAIgBAGAHQAGAIAAAMQAAANgIAJQgGAHgKAAIgHgBIgFgDIAAAQQAAAGABABIACACIAFACIAAACgAgBgdIgHAGIAAAUIAAAIQABADADACQAEADADAAQAGAAAEgFQAFgFAAgLQAAgMgGgGQgDgFgGAAIgEACg");
	this.shape_25.setTransform(164.025,669.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663333").s().p("AATAcIAAgCIABAAQAEAAACgCIACgDIAAgFIAAgWQAAgHgCgDQgCgDgFAAIgGABQgDACgEAEIgBAAIABADIAAAZIAAAGIACADIAGABIAAACIgaAAIAAgCIAGgBIADgEIAAgFIAAgWQAAgHgDgDQgCgEgEAAQgEAAgDACIgIAGIAAAcQAAAFABABQABABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAGABIAAACIgaAAIAAgCIAFgBIACgDIABgGIAAgUIgBgLIgBgDIgCgBIgEABIgBgCIAQgHIACAAIAAAMIAIgHQACgCAEgBIAFgCQAFAAADADQADADACAGQAGgHAEgCQAEgDAFAAQAEAAADADQADACACAFIABALIAAAWIABAHIADACIAFABIAAACg");
	this.shape_26.setTransform(156.75,668.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663333").s().p("AgTATQgGgIAAgKQAAgHADgHQAEgIAGgDQAHgDAFAAQAMAAAIAJQAGAIAAAKQAAAGgEAIQgDAHgGAEQgGADgHAAQgMAAgHgJgAgHgWQgDACgCAFQgCAEAAAIQAAALAEAIQAGAJAGAAQAGAAAEgFQADgFAAgMQAAgNgGgIQgFgGgFAAQgDAAgDACg");
	this.shape_27.setTransform(149.05,668.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663333").s().p("AgbAbQgIgLAAgPQAAgLAFgKQAGgKAJgFQAJgGALAAQAIAAAJAFIADABIADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIACAAIACAbIgCAAQgEgMgGgFQgHgFgKAAQgGAAgHAEQgGAEgEAJQgEAIAAAMQAAALAEAIQADAIAHAEQAHAEAIAAQAIAAAGgDQAGgDAHgKIACABQgGALgIAFQgIAFgLAAQgTAAgLgPg");
	this.shape_28.setTransform(142.075,667.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663333").s().p("AgYAbIAAgCIAjgvIgRAAIgHABIgDADQgBADgBAEIgCAAIABgPIAsAAIAAACIgjAvIASAAIAJgBIADgEIABgIIADAAIgBARg");
	this.shape_29.setTransform(176.45,653.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663333").s().p("AgPAVQgHgHAAgNQAAgNAHgIQAHgIAKAAQAJAAAGAHQAGAFAAALIgkAAQgBAKAGAIQAGAGAHAAQAFAAAEgDQAEgDADgHIACABQgCAJgGAGQgFAHgJgBQgJABgHgIgAgJgUQgEAEAAAHIAXAAIgBgHQgBgDgDgCIgFgCQgFAAgEADg");
	this.shape_30.setTransform(171.125,653.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663333").s().p("AgbAoIAAgBIABAAIAGgBIACgDIAAgHIAAgyIAAgHIgCgCIgDgBIgDABIgBgBIARgHIACAAIAAANQAEgHAEgEQADgDAFAAQAIABAGAGQAGAIAAAMQAAANgIAJQgGAIgKgBIgHgBIgFgDIAAAQQAAAGABACIACACIAFABIAAABgAgBgeIgHAHIAAAUIAAAHQABAEADADQAEACADAAQAGAAAEgEQAFgHAAgJQAAgMgGgHQgDgFgGAAIgEABg");
	this.shape_31.setTransform(165.175,654.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663333").s().p("AgTATQgGgIAAgLQAAgFADgIQAEgHAGgDQAHgFAFAAQAMAAAIAKQAGAIAAAKQAAAGgEAIQgDAHgGAEQgGADgHAAQgMABgHgKgAgHgVQgDABgCAFQgCAEAAAIQAAAKAEAJQAGAIAGAAQAGAAAEgEQADgFAAgLQAAgOgGgIQgFgGgFABQgDAAgDACg");
	this.shape_32.setTransform(159.4,653.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663333").s().p("AghAoIAAgCIADAAQAFAAACgEQACgCAAgGIAAgzQAAgHgDgCQgBgDgFAAIgDAAIAAgCIAjAAIAAACQgGAAgCACQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAACAAAHIAAAxIAAAGIACACIAJABIAGAAQAJAAADgCQAEgBADgDQADgEAEgHIABAAIgHAWg");
	this.shape_33.setTransform(152.7,651.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663333").s().p("AgEAFQgCgCAAgDQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAADgDACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAg");
	this.shape_34.setTransform(147.55,655.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663333").s().p("AgbAbQgIgLAAgPQAAgLAFgKQAGgKAJgFQAJgGALAAQAIAAAJAFIADABIADgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIACAAIACAbIgCAAQgEgMgGgFQgHgFgKAAQgGAAgHAEQgGAEgEAJQgEAIAAAMQAAALAEAIQADAIAHAEQAHAEAIAAQAIAAAGgDQAGgDAHgKIACABQgGALgIAFQgIAFgLAAQgTAAgLgPg");
	this.shape_35.setTransform(142.075,651.925);

	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.next_btn},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:514.55,y:434.55},0).wait(1).to({x:516.9,y:370.7},0).wait(1).to({x:519.25,y:306.85},0).wait(1).to({x:521.65,y:242.95},0).wait(1).to({x:524,y:179.15},0).wait(1).to({x:526.35,y:115.25},0).wait(1).to({x:528.7,y:51.4},0).wait(1).to({x:531.1,y:-12.45},0).wait(1).to({x:533.45,y:-76.35},0).wait(1).to({x:535.8,y:-140.2},0).wait(1).to({x:538.15,y:-204.05},0).wait(1).to({x:540.55,y:-267.95},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({y:59.05},0).wait(1).to({y:83.55},0).wait(1).to({y:108.1},0).wait(1).to({y:132.55},0).wait(1).to({y:157.1},0).wait(1).to({y:181.6},0).wait(1).to({y:206.1},0).wait(1).to({y:230.65},0).wait(1).to({y:255.15},0).wait(1).to({y:279.7},0).wait(1).to({y:304.2},0).wait(1).to({y:328.7},0).wait(1).to({y:353.25},0).wait(1).to({y:377.75},0).wait(1).to({y:402.3},0).wait(1).to({y:351.6},0).wait(1).to({y:300.9},0).wait(1).to({y:250.25},0).wait(1).to({y:199.55},0).wait(1).to({y:148.85},0).wait(1).to({y:98.2},0).wait(1).to({x:524.65,y:65.2},0).wait(1).to({x:522.65,y:32.2},0).wait(1).to({x:520.65,y:-0.8},0).wait(1).to({x:518.65,y:-33.8},0).wait(1).to({x:516.65,y:-66.8},0).wait(1).to({x:514.65,y:-99.8},0).wait(1).to({x:512.65,y:-132.8},0).wait(1).to({x:510.65,y:-165.8},0).wait(1).to({x:508.65,y:-198.8},0).wait(1).to({_off:true},1).wait(10));

	// Button
	this.b1 = new lib.BasicButton();
	this.b1.name = "b1";
	this.b1.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.rewind = new lib.rewind();
	this.rewind.name = "rewind";
	this.rewind.setTransform(914.15,634.4,1,1,0,0,0,24,8.7);
	new cjs.ButtonHelper(this.rewind, 0, 1, 2, false, new lib.rewind(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1}]}).to({state:[{t:this.b1},{t:this.rewind}]},54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(648.1,-73.1,343.1,808.8000000000001);
// library properties:
lib.properties = {
	id: '0A5EF03F49536343A8610E41B4E04409',
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
an.compositions['0A5EF03F49536343A8610E41B4E04409'] = {
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