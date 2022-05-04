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


(lib.sombrero = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AqGpWQLbs3K9oZQD7jAD3ibQAwgeAugcQA1gfAygXQEbiGCRCGQAtArAgBFQA7CAAKDbQACAlAAAnQAMNnhuKdQgnDegxD1QgDAOgDAPQAAABAAABQg5EchIE9QgCAGgCAGAdPB9QADABADADQCSBYCDBlQIjGhgNF4QgBA9gTA9QgPA0gXAvQgDASADAPIAAABQAAABgBAAQgDAFgEAFQhdCBqdB+Qq6CExZj+QxYj9qRpdQpeotAxhqQAFgIAHgHIAAAAIAAgBQAIgfAFgQQiKCdhfCvQhMCKgxCWQg5CvgVC+QACACABACQAlAoAmAmQA+A/A/A8UAdzAcjAq8gJlQFumeBboWQABgIACgHQAAAAAAgBAbIL1QBxACDMg7AqGpWQALAMALALQOwPEYJjrAwFiRQC2jdCtjHQANgRAPgQEgjIgBPQgCACgCADQAFgTABgBQABgCgDARQgDAPgGAcQALggAPgeQgIAJgJAKgAzKlQQBcBoBiBfQRiRIZyjKEgi3gBiQCvljLRhtQFHgwFqAM");
	this.shape.setTransform(268.864,248.4502);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC00").s().p("A2qjnIAHgIQC2jdCtjIQANAAAPggIAWAXQOxPEYIjrIAAACQg5EchIE8QkAAfj0AAQ0sABu0udg");
	this.shape_1.setTransform(310.275,257.9462);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("Egm1ABDQg/g8g+g+IhOhRIADgeQAlAoAmAmQA+A/A/A7UAdzAcjAq8gJlQFumeBboWQhQIpl5GsQqpCQpzAAQ+JAA2K1OgEApGAD6QAXgvAPg0QATg9ABg9QACBOgWBOQgOAzgYAvQgDgPADgSgAdJufIAGgdQAxj2AnjeQghDfgxD5IgGgEIAGAEIgGAdIgGgEgAdVu4IAAAAgEgjZgRUIAAgBIAAABgEgjGgSYQABgCgDARIgEAFQAFgTABgBg");
	this.shape_2.setTransform(268.8583,356.659);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBA33").s().p("Egm2ARcQg/g7g+hAQgmgmglgoIABgHQAWiqA0ieQAxiWBMiLQBWieB5iQIAMgPIABAAIAAgBIAHgJIAagcQCwlkLRhtQE6guFaAKQisDHi2DdIgIAJQhhhghchnQBcBnBhBgQRjRHZyjKIgEAMIAEgMQBIk9A5kcIAAgCQ4JDsuwvFIgXgWQLcs4K9oZQD6jAD4ibIBeg6QA1geAygYQEbiFCQCFQAuArAgBFQA7CAAKDbIACBMQAMNnhuKdQgoDegwD1IgGAdIAGAEQCWBbCFBmQIKGPAMFpQgBA+gTA8QgPA0gXAvQgDASADAPIAAABIgCABIgGAKQhdCCqdB9IgNADQjpAqkXAAIAAAAIgBAAQofAArNihIgHgBIgSgFQxYj9qSpdQowoEAAiCQAAgJADgIQgDAIAAAJQAACCIwIEQKSJdRYD9IASAFIAHABQLNChIfAAIABAAIAAAAQEXAADpgqIANgDQKdh9BdiCIAGgKIACgBIAAABQgCAHgBAJQhbIVlvGeQqyCap+AAQ9qAB2U1ZgAbVL1QBqgBC1gzIABAAIAJgDIAEgBIABgBIgBABIgEABIgJADIgBAAQi1AzhqABIgFAAIAAAAIgHAAIgCAAIACAAIAHAAIAAAAIAFAAgEApFAVWIAAAAg");
	this.shape_3.setTransform(269,248.4502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sombrero, new cjs.Rectangle(-1.5,-1.5,540.8,500.6), null);


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
	this.shape.graphics.f().s("#9900FF").ss(14,1,1).p("AQ+AAQAAEtiPDyQgLATgNATQg/BihYBZQiBCBiXBMQjdBxkLAAQkfAAjriEQiDhIhyhyQiKiLhOilQhljTAAj9QAAjkBSjDQBPi7CcidQB8h7CRhMQDhh2ERAAQD9AADTBlQClBOCLCKQBYBZA/BiQA2BSAkBaQBNC8AADcg");
	this.shape.setTransform(287.2,356.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#997C55").ss(8,1,1).p("AAApvIAATf");
	this.shape_1.setTransform(293.15,62.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(9,1,1).p("EgKYghrIM5ppIg7BAIqQLJEgk5AM1IhWyIIhKENIjvNeEABmgqUIoPNoABybfIAAPuABybfIEWP2ABybfIlLPaEgnZgBGIAANvEAoFgHQIDEP5EAoFgHQIAAQqEAoFgHQIj6Q9");
	this.shape_2.setTransform(276.125,399.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF3399").ss(8,1,1).p("AQSlCIWmFsI3oJLAnRtwIIl1pIAJAeIGVU6AvIlRI3uH+IYAF6AnpQRIINTJIHly3");
	this.shape_3.setTransform(283.9,348.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3399").s().p("AnpQRQDqCDEgAAQELAADdhxInlS3gAReBWQABjbhNi9IWlFsI3nJLQCOjyAAktgEgm2ACtIXtn+QhTDDAADkQABD9BkDUgEABTgjZIAJAeIGVU6QjThlj9AAQkRAAjhB2g");
	this.shape_4.setTransform(283.9,348.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AoKO7QiDhKhyhxQiKiLhPilQhkjTgBj9QAAjkBTjEQBQi6CbidQB9h8CQhLQDhh3ERAAQD9ABDTBkQClBPCLCKQBYBZBABiQA1BSAkBZQBNC+gBDbQAAEtiODyIgXAmQhABihYBZQiCCBiWBMQjdBxkLgBQkgAAjqiCg");
	this.shape_5.setTransform(287.2,356.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinata, new cjs.Rectangle(-4.5,-4,561.3,684.9), null);


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


(lib._5demayo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AiHDRQg7hOAAiNQAAhFAZhAQAZhAAsgoQAtgoA9AAQBMgBA4BVQA5BTAAB1QAACCg4BRQg3BRhXAAQhKAAg6hQgAgag3QgMAQAAAZQAAAZALARQALAQAQAAQARAAALgQQALgRAAgZQAAgZgLgQQgLgSgRABQgPgBgLASg");
	this.shape.setTransform(524.925,383.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhTEXIAAj0IiRk6ICrAAIA5B/IA7h/ICqAAIiRE6IAAD0g");
	this.shape_1.setTransform(485.975,383.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABUEXIgWheIh5AAIgWBeIiqAAICIouIDuAAICBIugAgdA1IA9AAIgfiIg");
	this.shape_2.setTransform(445.675,383.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABAEXIAAkXIhABrIg/hrIAAEXIioAAIAAouICjAAIBEB1IBEh1ICkAAIAAIug");
	this.shape_3.setTransform(393.075,383.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AidEYIAAouIE6AAIAACMIiSAAIAABFIBmAAIAACMIhmAAIAABEICSAAIAACNg");
	this.shape_4.setTransform(717.4,288.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AjGEYIAAouICgAAQBCAAAkAOQAkAOAgAnQAhAnARA3QARA2AABDQAAA5gPAyQgPAzgbAmQgaAmgfARQggAQgbAFQgaAEhAAAgAgeA/IAFAAQAdgBAOgPQAOgQAAggQAAgigOgPQgOgPgeAAIgEAAg");
	this.shape_5.setTransform(676.375,288.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiHDSQg7hPAAiNQAAhFAZhAQAZhAAsgoQAtgpA9AAQBMAAA4BVQA5BUAAB0QAACBg4BRQg3BRhXAAQhKABg6hPgAgag4QgMARAAAZQAAAZALAQQALARAQAAQARAAALgRQALgQAAgZQAAgZgLgRQgLgQgRgBQgPABgLAQg");
	this.shape_6.setTransform(605.925,288.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ah7DQQg6hRAAh8QAAh9A7hSQA8hUBaAAQApAAAqARQAqAQAdAbIhGDGQgdgQgnAAQg1AAAAAqQAAATAOAMQAOAMAaABQAngBAcgTIBGDTQgVAVgrASQgqATgzgBQhYAAg8hQg");
	this.shape_7.setTransform(565.25,288.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AA9EZIhRitIAACqIioAAIAAouIB4AAIBZC7IAAi7ICoAAIAAIxg");
	this.shape_8.setTransform(521.725,288.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhTEYIAAouICnAAIAAIug");
	this.shape_9.setTransform(486.85,288.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ah6DQQg8hRAAh8QAAh9A9hSQA7hUBbAAQAoAAAqARQArAQAdAbIhHDGQgdgQgoAAQg0AAAAAqQAAATAOAMQAOAMAZABQAngBAdgTIBHDTQgWAVgqASQgrATgzgBQhZAAg6hQg");
	this.shape_10.setTransform(455.75,288.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhTEYIAAj0IiRk6ICrAAIA5B+IA7h+ICqAAIiRE6IAAD0g");
	this.shape_11.setTransform(386.625,288.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ai9EYIAAouICiAAQBagBAlANQAmANAaAvQAaAvAABDQAABTglA1QglA2g3AAQgnAAgrgxIAADngAgVgkIACAAIAJABQAUAAAMgRQAMgQAAgfQAAghgLgMQgMgOgdAAIgDAAg");
	this.shape_12.setTransform(343.825,288.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ai9EYIAAouICiAAQBagBAlANQAmANAaAvQAaAvAABDQAABTglA1QglA2g3AAQgnAAgrgxIAADngAgVgkIACAAIAJABQAUAAAMgRQAMgQAAgfQAAghgLgMQgMgOgdAAIgDAAg");
	this.shape_13.setTransform(301.325,288.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("ABUEYIgWhgIh5AAIgWBgIiqAAICIouIDuAAICBIugAgdA1IA9AAIgfiHg");
	this.shape_14.setTransform(253.475,288.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AArEYIAAjQIhVAAIAADQIioAAIAAouICoAAIAADNIBVAAIAAjNICoAAIAAIug");
	this.shape_15.setTransform(203.2,288.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9900FF").ss(1,1,1).p("EA3iAXMQgGgLgNgFQgmgghThFQgNgKgGACQgIACgHAPQghBKgdAiQgdAhgnAWQgnAVgsAGQA1A6BBA2QAPANAKgBQAOgDAKgXQARgwAPgXQAbgoA5gaQAngSBEgPQgBgGgCgEgEA3vAXXQgCgCgLgJEAY0gssQgDABgPABQgJABgOABQgyAEhsAKQgQADgEAFQgEAHAGAPQAdBNAEAsQADAsgMAqQgNAsgbAjQBOADBVgIIAAAAQAUgBAGgIQAIgLgJgWQAAgBAAgBQgWgugGgbQgJgwAWg6QAPgoAlg7QgFgDgFgCEgpsgsMQgMACgHAMQgcATgxAjQgYAQgdAVQgNAKAAAGQAAAIANALQAfAZAWAWQAXAWANASQAYAlALArQAKAsgFAsQAngVAogZQAegSAdgVQARgLABgKQACgPgVgPQgngcgTgTQgBgBgBgBQgggmgKg9QgHgqADhFQgGgBgFABgEgpdgsWQgDABgMAJEgzJAEkQgKgHgOADQghgGg7gKQgdgGgjgGQgQgCgFAFQgFAGABAQQAFAoAAAfQABAggEAWQgJAsgYAlQgXAngiAaQAqAOAuALQAiAIAjAFQAUAFAIgHQALgJgDgZQgJgwABgaQAAgCAAgBQAEgxAkgzQAZgiAygwQgDgEgEgDgEgy4AEnQgDgBgOgCEADaAmiQgMACgHAMQgpAchZA/QgNAKAAAGQAAAIANALQAYATATASQAeAcAQAWQAYAlALArQAKAsgFAsQBFgkBFgxQARgLABgKQACgPgVgPQgpgdgTgUQgMgPgJgSQgPgdgGglQgHgqADhFQgGgBgFABgEADpAmYQgDABgMAJ");
	this.shape_16.setTransform(425.325,344.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00FF00").ss(1,1,1).p("EAiaAFiQgIgJgOgBQgtgVhjguQgPgFgFADQgHAEgDAQQgNBQgSAoQgUAogfAfQgiAfgoARQBBApBOAkQARAJAKgEQANgGADgZQAFgyAIgaQAQgvAwgnQAhgbA9ghQgCgFgDgEgEAiqAFpQgDgBgNgGEBAtgUUQAAAtggAfQggAggtAAQgtAAggggQgfgfAAgtQAAgtAfggQAgggAtAAQAtAAAgAgQAgAgAAAtgEBBwANFQgLgFgNAGQgxAEhtAKQgPADgDAFQgEAIAFAPQAdBMAEArQADAtgMArQgNArgbAjQBNADBVgIQAUgBAGgIQAJgMgKgXQgVgugGgaQgJgxAWg6QAPgnAkg8QgEgDgFgBgEBCCANCQgDABgPACEA35AW6QAAASgNAMQgMAMgRAAQgSAAgMgMQgMgMAAgSQAAgRAMgNQAMgMASAAQARAAAMAMQANANAAARgAbOU1QAAAWgQAPQgPAQgWAAQgVAAgQgQQgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVgEAplArFQAAARgMAMQgMANgRAAQgRAAgNgNQgMgMAAgRQAAgRAMgMQANgMARAAQARAAAMAMQAMAMAAARgATL3YQAAAxgiAiQgiAigxAAQgwAAgigiQgigiAAgxQAAgwAigiQAigiAwAAQAxAAAiAiQAiAiAAAwgEgPBgvhQgLACgJAMQgoAchaA/QgMALABAGQAAAIAMAKQA/AzAZAkQAZAlALArQAKAtgFArQBEgkBGgxQAQgLACgKQACgPgVgPQgpgdgSgUQghglgKg9QgGgrABhFQgFgBgFABgEgOzgvrQgCACgMAIEgmLghdQAAAZgRARQgSASgZAAQgZAAgRgSQgSgRAAgZQAAgZASgSQARgRAZAAQAZAAASARQARASAAAZgEhAsgj+QAAAOgKAKQgKAKgOAAQgOAAgKgKQgJgKAAgOQAAgOAJgKQAKgJAOAAQAOAAAKAJQAKAKAAAOgEg/fgOpQgMACgIALQgpAdhZA/QgMAKAAAGQAAAIAMALQBAAzAZAkQAZAlALArQAKAsgGAsQBFglBGgxQAQgKABgLQACgOgUgPQgpgdgTgUQgggmgKg9QgHgqAChFQgFgBgFABgEg/RgO0QgCACgMAJA7qFbQAAAPgLALQgLALgQAAQgPAAgLgLQgLgLAAgPQAAgQALgLQALgLAPAAQAQAAALALQALALAAAQgEgcWApXQgCACgLAHQgBABAAAAQgMACgIAMQgpAchZA/QgMALAAAGQAAAIAMAKQBAAzAZAkQAZAlALArQAKAtgGArQBFgkBGgxQAQgLABgKQACgPgUgPQgpgdgTgUQggglgKg9QgHgrAChFQgFgBgFABAycXHQAAAOgKAKQgKAKgOAAQgOAAgKgKQgJgKAAgOQAAgOAJgKQAKgJAOAAQAOAAAKAJQAKAKAAAOgEAWjAtmQAAAVgQAQQgPAPgWAAQgVAAgQgPQgPgQAAgVQAAgWAPgPQAQgQAVAAQAWAAAPAQQAQAPAAAWg");
	this.shape_17.setTransform(478.474,343.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFF00").ss(1,1,1).p("EA4HgXVQAAAPgLALQgLALgPAAQgQAAgLgLQgLgLAAgPQAAgQALgLQALgLAQAAQAPAAALALQALALAAAQgEBC9gK7QgHgJgOgBQgtgVhjguQgPgFgFADQgHAEgDAQQgNBQgSAoQgUAoggAfQghAfgpARQBCApBNAkQASAJAJgEQAOgGADgZQAEgyAIgaQARgvAwgnQAhgbA9ghQgCgFgEgEgEBDOgK0QgDgBgOgGEA6kAjAQAAAOgKAJQgKAKgOAAQgOAAgKgKQgJgJAAgOQAAgOAJgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgEAo6Aw6QgDgMgLgIQgcgpg/hZQgKgMgHAAQgIAAgKAMQgzBAgkAZQgmAZgqALQgtAKgrgGQAkBFAxBGQALAQAKABQAPACAPgUQAdgqAUgSQAlggA+gKQApgHBGACQAAgFAAgFgEApEAxIQgBgCgJgMANB7EQgCABgMAJQgMACgIAMQgpAchZA/QgMAKAAAGQAAAIAMALQBAAzAZAkQAZAlAKArQALAsgGAsQBFglBFgwQARgLABgKQACgPgUgPQgqgdgSgUQghgmgKg9QgGgqAChFQgFgBgFABAcNB1QAAAmgcAcQgbAbgnAAQgmAAgcgbQgbgcAAgmQAAgnAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAngEgd1gyUQAAATgNANQgNANgTAAQgSAAgOgNQgNgNAAgTQAAgSANgOQAOgNASAAQATAAANANQANAOAAASgEgs6gYUQAAAUgOAOQgOAOgUAAQgUAAgPgOQgOgOAAgUQAAgUAOgPQAPgOAUAAQAUAAAOAOQAOAPAAAUgEhCRgB9QAAAMgJAJQgIAJgNAAQgMAAgJgJQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANgEgoAAVkQAAAXgQARQgRAQgXAAQgXAAgQgQQgRgRAAgXQAAgXARgQQAQgRAXAAQAXAAARARQAQAQAAAXgADtVzQgLgEgNAGQgxAEhtAKQgPADgDAFQgEAHAFAPQAdBNAEArQADAtgMAqQgNAsgbAjQBOADBUgIQAUgBAGgIQAJgMgKgXQgVgugGgbQgJgwAWg6QAPgoAkg7QgEgDgFgCgAD/VxQgDABgPAB");
	this.shape_18.setTransform(432.525,358.2089);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF00CC").ss(1,1,1).p("EAs/gWHQgLAFgEANQghAmhFBTQgKANACAHQABAHAQAHQBKAhAiAdQAhAdAWAmQAVApAGArQA6g0A2hCQANgPgBgKQgCgOgYgKQgvgRgXgPQgqgbgZg5QgSgngPhDQgFAAgFADgEAtLgWWQgCACgEAFQgCADgEAFEA+JAOIQAAATgOANQgNANgSAAQgTAAgNgNQgNgNAAgTQAAgSANgNQANgOATAAQASAAANAOQAOANAAASgEALOgm4QAAAZgSARQgRASgZAAQgZAAgSgSQgRgRAAgZQAAgZARgSQASgRAZAAQAZAAARARQASASAAAZgAmwu0QAAASgOANQgNAOgSAAQgTAAgNgOQgNgNAAgSQAAgTANgNQANgNATAAQASAAANANQAOANAAATgAuh1+QgHgKgOAAQgtgWhjgtQgPgGgFADQgHAEgDAQQgNBRgSAoQgUAoggAeQghAfgoARQBBAqBNAkQASAJAKgEQANgGADgZQAFgzAIgaQAQgvAwgnQAhgbA9ggQgCgFgEgEgAuQ13QgCgBgGgCQgDgCgGgCEg76gUXQAAAagSATQgTASgaAAQgbAAgSgSQgTgTAAgaQAAgbATgSQASgTAbAAQAaAAATATQASASAAAbgA3KTYQgMABgIAMQgpAchZA/QgMAKAAAHQAAAIAMAKQBAA0AZAjQAZAmAKAqQALAtgGArQBFgkBGgxQAQgLABgKQACgOgUgQQgqgdgSgUQgggmgKg9QgHgpAChGQgFAAgFABgA28TNQgBABgGAEQgDACgEAEEgMnAmUQAAAogcAcQgdAdgoAAQgoAAgcgdQgdgcAAgoQAAgoAdgcQAcgdAoAAQAoAAAdAdQAcAcAAAogEg76AdRQAAAdgVAVQgUAVgeAAQgdAAgVgVQgVgVAAgdQAAgeAVgVQAVgVAdAAQAeAAAUAVQAVAVAAAegEAicAiEQgMgEgMAGQgyAEhsAJQgQAEgDAFQgEAHAFAPQAeBNAEArQADAtgNAqQgNAsgaAjQBNADBVgIQAUgCAGgHQAJgMgKgXQgWgugGgbQgJgwAWg6QAPgoAlg7QgEgDgFgCgEAitAiCQgCABgPAB");
	this.shape_19.setTransform(401.475,303);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A114FF").ss(1,1,1).p("EAk6gtfQAAAQgLALQgLALgPAAQgQAAgLgLQgLgLAAgQQAAgPALgLQALgLAQAAQAPAAALALQALALAAAPgEAoLAhlQAAANgJAIQgIAJgNAAQgMAAgJgJQgJgIAAgNQAAgMAJgKQAJgIAMAAQANAAAIAIQAJAKAAAMgAAt9QQAAAZgRASQgSARgYAAQgZAAgRgRQgSgSAAgZQAAgZASgRQARgSAZAAQAYAAASASQARARAAAZgEgnOAIWQAAANgJAJQgJAIgMAAQgNAAgJgIQgIgJAAgNQAAgMAIgJQAJgJANAAQAMAAAJAJQAJAJAAAMgARiXLQAAAjgZAXQgYAZgiAAQgiAAgYgZQgYgXAAgjQAAghAYgZQAYgYAiAAQAiAAAYAYQAZAZAAAhgEAOIAtVQAAAUgOAOQgOAOgUAAQgUAAgPgOQgOgOAAgUQAAgUAOgPQAPgOAUAAQAUAAAOAOQAOAPAAAUg");
	this.shape_20.setTransform(444.825,328.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00CC00").ss(1,1,1).p("EA8vgzGIANRwEg87AiHIAMRA");
	this.shape_21.setTransform(438.175,327.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1,1,1).p("EA9FgzGIAARwEg9EAiHIAARA");
	this.shape_22.setTransform(511.125,327.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#996633").ss(1,1,1).p("EA/bgqWQAABFgvAyQgvAxhDAAQhCAAgvgxQgwgyAAhFQAAhGAwgxQAvgyBCAAQBDAAAvAyQAvAxAABGgEg6lAqfQAABDgtAvQguAvhAAAQhAAAgtgvQgtgvAAhDQAAhDAtgvQAtgvBAAAQBAAAAuAvQAtAvAABDg");
	this.shape_23.setTransform(474.75,325.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FF00").s().p("Egc5AuPQgLgrgZglQgZgkg/gzQgMgKAAgIQgBgGAMgLICChbQAJgMALgCQAFgBAFABQgBBFAGArQAKA9AhAlQASAUApAdQAVAPgCAPQgCAKgQALQhGAxhEAkQAFgrgKgtgEAVOAuGQgQgQAAgVQAAgWAQgPQAPgQAWAAQAVAAAQAQQAPAPAAAWQAAAVgPAQQgQAPgVAAQgWAAgPgPgEAojArdQgMgMAAgRQAAgRAMgMQAMgMARAAQARAAAMAMQANAMAAARQAAARgNAMQgMANgRAAQgRAAgMgNgAzRXaQgKgKAAgOQAAgOAKgKQAKgJAOAAQAOAAAJAJQAKAKAAAOQAAAOgKAKQgJAKgOAAQgOAAgKgKgEA21AXTQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQAMANAAARQAAASgMAMQgMAMgSAAQgRAAgNgMgAZ5VVQgQgPAAgWQAAgVAQgQQAPgPAWAAQAVAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgVAAQgWAAgPgQgEA+eASLQAagjAOgrQALgrgCgtQgFgrgchMQgGgPAEgIQADgFAQgDICegOQAMgGALAFQAFABAFADQglA8gPAnQgWA6AJAxQAGAaAWAuQAJAXgIAMQgGAIgUABQg+AGg6AAIgqgBgAfNJeQhNgkhCgpQApgRAhgfQAggfAUgoQASgoANhQQADgQAHgEQAFgDAPAFICQBDQAOABAHAJQAEAEACAFQg9AhghAbQgwAngRAvQgIAagEAyQgDAZgOAGIgHABQgIAAgMgGgA8mFwQgLgLAAgPQAAgQALgLQALgLAQAAQAPAAALALQALALAAAQQAAAPgLALQgLALgPAAQgQAAgLgLgEg/0gJ7QgLgrgZglQgZgkg/gzQgMgLAAgIQgBgGAMgKICChcQAJgLALgCQAFgBAFABQgBBFAGAqQAKA9AhAmQASAUApAdQAVAPgCAOQgCALgQAKQhGAxhEAlQAFgsgKgsgEA94gTNQgggfAAgtQAAgtAgggQAgggAtAAQAtAAAfAgQAgAgAAAtQAAAtggAfQgfAggtAAQgtAAgggggAQI2KQgigiAAgxQAAgwAigiQAigiAxAAQAwAAAiAiQAiAiAAAwQAAAxgiAiQgiAigwAAQgxAAgigigEgntgg4QgRgRAAgZQAAgZARgSQASgRAZAAQAZAAARARQASASAAAZQAAAZgSARQgRASgZAAQgZAAgSgSgEhBhgjrQgKgKAAgOQAAgOAKgKQAKgJAOAAQAOAAAJAJQAKAKAAAOQAAAOgKAKQgJAKgOAAQgOAAgKgKgEgPVgqzQgLgrgZglQgZgkhAgzQgMgKAAgIQAAgGAMgLICChbQAIgMAMgCQAFgBAFABQgCBFAHArQAKA9AgAlQATAUApAdQAUAPgCAPQgBAKgQALQhGAxhFAkQAGgrgKgtg");
	this.shape_24.setTransform(478.049,343.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("EAkfAzBQgKgBgLgQQgxhGgkhFQArAGAsgKQArgLAlgZQAkgZAzhAQALgMAIAAQAGAAALAMIBaCCQAMAIACAMIABAKQhGgCgqAHQg9AKgmAgQgUASgcAqQgOATgOAAIgCgBgEA5wAjXQgKgJAAgOQAAgOAKgKQAKgKAOAAQAOAAAJAKQAKAKAAAOQAAAOgKAJQgJAKgOAAQgOAAgKgKgAAca/QAagjANgsQANgqgDgtQgEgrgehNQgFgPAEgHQADgFAQgDICegOQAMgGAMAEIAJAFQglA7gPAoQgWA6AJAwQAGAbAWAuQAKAXgJAMQgGAIgUABQg9AGg4AAIgtgBgEgpaAWMQgQgRAAgXQAAgXAQgQQARgRAXAAQAXAAAQARQARAQAAAXQAAAXgRARQgQAQgXAAQgXAAgRgQgAZzC3QgcgcAAgmQAAgnAcgbQAbgcAnAAQAmAAAcAcQAbAbAAAnQAAAmgbAcQgcAbgmAAQgnAAgbgbgEhC/gBoQgIgJAAgMQAAgNAIgJQAJgIANAAQAMAAAJAIQAJAJAAANQAAAMgJAJQgJAJgMAAQgNAAgJgJgEA/ygG6QhOgkhBgpQAogRAigfQAfgfAUgoQASgoANhQQADgQAHgEQAFgDAPAFICQBDQAOABAIAJQADAEACAFQg9AhghAbQgwAngQAvQgIAagFAyQgDAZgNAGIgHABQgIAAgMgGgAMf2HQgKgrgZglQgagkg/gzQgMgLAAgIQgBgGAMgKICDhbQAHgMAMgCIAKAAQgCBFAHAqQAKA9AgAmQASAUAqAdQAVAPgDAPQgBAKgQALQhGAwhEAlQAFgsgKgsgEA3NgW7QgLgLAAgPQAAgQALgLQALgLAPAAQAQAAALALQALALAAAQQAAAPgLALQgLALgQAAQgPAAgLgLgEguHgXyQgOgOAAgUQAAgUAOgPQAOgOAUAAQAUAAAOAOQAPAPAAAUQAAAUgPAOQgOAOgUAAQgUAAgOgOgEge8gx0QgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASQAAATgOANQgNANgSAAQgTAAgNgNg");
	this.shape_25.setTransform(431.975,358.2089);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00CC").s().p("EgPMAnYQgdgcAAgoQAAgoAdgdQAcgcAoAAQAoAAAdAcQAcAdAAAoQAAAogcAcQgdAdgoAAQgoAAgcgdgEAfFAnPQAagiANgsQANgqgDgtQgEgrgehNQgFgPAEgHQADgGAQgDICegNQAMgGAMAEIAJAFQglA7gPAoQgWA6AJAwQAGAaAWAvQAKAXgJAMQgGAHgUACQg9AFg4AAIgtgBgEg9zAeDQgVgVAAgeQAAgdAVgVQAVgUAdgBQAeABAUAUQAVAVAAAdQAAAegVAVQgUAUgeAAQgdAAgVgUgA3kYKQgKgqgZgmQgZgkhAgzQgMgKAAgJQAAgGAMgKICChbQAIgMAMgBQAFgCAFABQgCBFAHAqQAKA9AgAmQASAUAqAdQAUAPgCAPQgBAKgQALQhGAxhFAkQAGgsgLgsgEA88AOoQgNgNAAgSQAAgTANgOQANgMATAAQASAAANAMQAOAOAAATQAAASgOANQgNAOgSAAQgTAAgNgOgAn9uVQgNgMAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASQAAATgOAMQgNAOgSAAQgTAAgNgOgEAt2gRZQgWgmghgdQgigdhKghQgQgGgBgIQgCgGAKgOIBmh5QAEgNALgFQAFgDAFAAQAPBDASAnQAZA5AqAcQAXAOAvARQAYAKACAPQABAKgNAPQg2BBg6A0QgGgrgVgpgAxyx9QhNgkhBgpQAogRAhggQAggeAUgoQASgoANhRQADgQAHgEQAFgDAPAGICQBDQAOABAHAJIAGAJQg9AhghAaQgwAogQAuQgIAagFAzQgDAZgNAGIgHABQgIAAgNgGgEg9mgTqQgTgTAAgaQAAgbATgSQASgTAbAAQAaAAATATQASASAAAbQAAAagSATQgTASgaAAQgbAAgSgSgEAJngmOQgRgRAAgZQAAgZARgRQASgSAZAAQAZAAARASQASARAAAZQAAAZgSARQgRASgZAAQgZAAgSgSg");
	this.shape_26.setTransform(401.475,303);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("EADGAtTQgLgrgYglQgQgWgegcQgTgSgYgTQgNgLAAgIQAAgGANgKICChbQAHgMAMgCQAGgBAFABQgDBFAHAqQAGAlAPAdQAJASANAPQASAUApAdQAVAPgCAPQgBAKgRALQhFAxhFAkQAGgsgLgsgEAP+AtRQgPgOAAgUQAAgUAPgPQAOgOAUAAQAUAAAOAOQAOAPAAAUQAAAUgOAOQgOAOgUAAQgUAAgOgOgEAqgAhUQgIgIAAgNQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgEAzaAcMQhBg2g1g6QAsgGAngVQAogWAdghQAcgiAhhKQAHgPAIgCQAGgCANAKIB6BlQANAFAFALIADAKQhEAPgnASQg4AagcAoQgPAXgRAwQgKAXgOADIgCAAQgKAAgNgMgASdXgQgYgYAAgiQAAgiAYgZQAZgYAhAAQAjAAAYAYQAYAZAAAiQAAAigYAYQgYAYgjAAQghAAgZgYgEg1MALQQgjgFgigIQgugLgqgOQAigaAXgnQAYglAJgsQAEgWgBggQAAgfgEgoQgCgQAFgGQAFgFAQACIBAAMIBdAQQAOgDAJAHIAHAHQgyAwgYAiQglAzgEAxIAAADQAAAaAIAwQAEAZgMAJQgFAEgIAAQgHAAgIgCgEgk5AIGQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJgACP9LQgRgRgBgZQABgZARgSQARgRAZAAQAaAAARARQASASAAAZQAAAZgSARQgRASgaAAQgZAAgRgSgEgqAglbQgLgrgYglQgNgSgXgWQgWgWgfgZQgMgLAAgIQAAgGAMgKIA1glIBNg2QAHgMANgCQAFgBAFABQgCBFAGAqQALA9AgAmIABACQATATAoAcQAUAPgCAPQgBAKgQALQgeAVgeASQgnAZgoAVQAFgsgKgsgEAVRglgQAagjANgsQAMgqgDgsQgDgsgehNQgFgPADgHQAEgFAQgDICegOIAYgCIAJAFQglA7gOAoQgXA6AJAwQAGAbAWAuIAAACQAKAWgJALQgGAIgTABIgBAAQg8AGg5AAIgtgBgEAnCgtqQgLgLABgPQgBgQALgLQALgLAQAAQAPAAAMALQALALgBAQQABAPgLALQgMALgPAAQgQAAgLgLg");
	this.shape_27.setTransform(424.8,331.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC00").s().p("EhAsAzHIAAxAIHhAAIANRAgEA4qghWIAAxwIH2AAIANRwg");
	this.shape_28.setTransform(414.1,327.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#996633").s().p("Eg+sAsRQgugvAAhDQAAhDAugvQAsgvBBAAQA/AAAuAvQAtAvAABDQAABDgtAvQguAvg/AAQhBAAgsgvgEA7JgofQgwgyAAhFQAAhGAwgxQAugyBDAAQBCAAAwAyQAvAxAABGQAABFgvAyQgwAxhCAAQhDAAgugxg");
	this.shape_29.setTransform(474.75,325.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EhCgAzHIgMxAILRAAIAARAgEg+wAogQgtAwAABCQAABDAtAvQAtAvBAAAQBAAAAugvQAtgvAAhDQAAhCgtgwQgugvhAAAQhAAAgtAvgEA3LghWIgNxwILvAAIAARwgEA7FgsaQgvAyAABFQAABGAvAxQAvAxBDAAQBCAAAwgxQAvgxAAhGQAAhFgvgyQgwgxhCAAQhDAAgvAxg");
	this.shape_30.setTransform(475.075,327.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("EhBRAzHIAAxAIIFAAIAARAgEA43ghWIAAxwIIbAAIAARwg");
	this.shape_31.setTransform(538.075,327.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5demayo, new cjs.Rectangle(0,-1,955.9,686.8), null);


// stage content:
(lib.PracticeCardDCarlisle = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		this.next_btn.addEventListener("click", fl_ClickNextScene.bind(this));
		
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

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgpEIQgRgaAAgkQAAg8AogWQgGgHgdhXQgdhVAAhPQAAhBAYgqQAYgrAkAAQAjABAXAqQAYAqgBBAQAABJgaBQQgZBRgNAZQATAKAKAWQALAWAAAcQAAAkgRAaQgRAZgZAAQgXAAgSgZg");
	this.shape.setTransform(764.85,348.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah2CjQgthBAAhoQAAhhAvg+QAvg+BJAAQBFAAAuBBQAtBAAABlQAABngtA9QguA9hMAAQhHAAgshBgAgXgnQgJANAAAYQAAATAJAPQAKAOANAAQAOAAAKgNQAKgOAAgUQAAgYgJgOQgJgOgPAAQgOAAgKAOg");
	this.shape_1.setTransform(736.175,354.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiOEaIA+jXIhqlcICaAAIAiB1IAjh1ICWAAIiiIzg");
	this.shape_2.setTransform(702.025,360.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiDDAQgXggAAg0QAAg7AdgiQAdgiAxAAQAVAAAaALQgBhAg4AAQguAAgrAiIAAiEQA8g1BYABQAuAAAfAQQAfAQARAgQARAfAGAhQAFAgAABCIAADYIibAAIAAghQgNARgUAKQgVAKgSgBQgkAAgXgfgAguBBQgJALAAAQQAAASAJANQAJAMAOAAQAQAAAHgMIAAg+QgMgGgLAAQgOAAgJAKg");
	this.shape_3.setTransform(667.975,354.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ACFDeIAAjMQAAhHgEgSQgFgSgUAAQgOAAgNAPIAAEoIiQAAIAAjMQAAhHgFgSQgFgSgUAAQgLAAgPAPIAAEoIibAAIAAm3ICbAAIAAA3QAmg7A2AAQBAAAAgBNQAxhNA3AAQAfAAAYAPQAXAQAMAdQAMAdAEAeQAEAeAABLIAADbg");
	this.shape_4.setTransform(619.675,354.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhwClQgvhBAAhvQAAg9AYg2QAWg2AjgXQAkgZAsAAQAcABAaAOQAbAOAYAcQAWAdANAqQANAqACAbQACAaABAkIieAAQAIAhAUAUQAUASAZABQA0AAAhgxIAABNQg1BhheABQhPgBgug/gAADhiQgJATAAAdIAAAEIBHAAQgBgggKgSQgLgUgPAAQgOAAgLASg");
	this.shape_5.setTransform(546.25,354.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AA9EXQhHAAgYgDQgZgDgYgNQgYgMgYgfQgXgegNgpQgMgqAAgxQAAhgAsg9QArg9BDAAQAbgBAYARIAAiDICaAAIAAItgAgWAYQgJAPAAAWQAAAhAMANQAKAMAeAAIAFAAIAAhjQgKgLgPAAQgNAAgKAPg");
	this.shape_6.setTransform(507.55,348.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ah2CjQgthBAAhoQAAhhAvg+QAvg+BJAAQBFAAAuBBQAtBAAABlQAABngtA9QguA9hMAAQhHAAgshBgAgXgnQgJANAAAYQAAATAJAPQAKAOANAAQAOAAAKgNQAKgOAAgUQAAgYgJgOQgJgOgPAAQgOAAgKAOg");
	this.shape_7.setTransform(444.225,354.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhcCmQgxg9AAhuQAAhSAshGQArhGBeAAQAuAAA5AbIAADAQgvgggmgBQgUAAgOAMQgNAKAAARQAAApA1AAQAwAAAfgVIAAC/QgsATg1AAQhYAAgyg+g");
	this.shape_8.setTransform(408.8,354.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAgDeIAAjMQAAhHgEgSQgFgSgUAAQgLAAgPAPIAAEoIiaAAIAAm3ICaAAIAAA3QAlg7A2AAQAfAAAYAPQAYAQALAcQANAbADAfQAEAgAABLIAADbg");
	this.shape_9.setTransform(372.25,354.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhMEbIAAm3QAfAYAtAAQAvAAAegYIAAG3gAACitQgMgTAAgbQAAgaAMgSQANgTARAAQASAAAOASQAMATAAAaQAAAbgMAUQgNASgTAAQgRAAgNgTg");
	this.shape_10.setTransform(341.075,348.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhcCmQgxg9AAhuQgBhSAthGQArhGBeAAQAuAAA4AbIAADAQgugggmgBQgUAAgOAMQgNAKAAARQAAApA1AAQAwAAAegVIAAC/QgqATg2AAQhYAAgyg+g");
	this.shape_11.setTransform(313.3,354.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhGBXQACgVAMgTQANgSAigaQAUgOAGgIQAGgJAAgHQAAgIgGgFQgGgGgIAAQgIAAgHAGQgGAGgCAOIgvgEQACgUAIgLQAHgLAPgGQANgGAXAAQAZAAAOAFQAOAGAJAMQAHAMAAAPQABAPgKAPQgJANgYARIgTAOIgLAKIBKAAIAAAng");
	this.shape_12.setTransform(125.2,92.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhGBXQACgVANgTQAMgSAigaQAUgOAGgIQAGgJAAgHQAAgIgGgFQgGgGgJAAQgIAAgGAGQgFAGgCAOIgwgEQACgUAIgLQAHgLAPgGQANgGAXAAQAZAAAOAFQAOAGAJAMQAHAMABAPQAAAPgKAPQgJANgYARIgTAOIgLAKIBKAAIAAAng");
	this.shape_13.setTransform(109.2,92.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiBSQgNgHgJgOQgGgJgDgQQgEgRAAgTQAAgxARgTQASgUAjAAQARAAAMAEQALAFAHAGQAHAHAEAIQAEAHADAKQAEAUAAAVQAAAtgQAWQgPAWgnAAQgVAAgNgHgAgRgsQgFAMAAAgQAAAgAGAMQAGAMAKAAQAHAAAGgFQAEgFAEgLQACgLAAgXQAAgigGgLQgGgMgLAAQgLAAgGAMg");
	this.shape_14.setTransform(93.4,92.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhHBXQADgVAMgTQANgSAigaQAUgOAGgIQAGgJAAgHQAAgIgGgFQgGgGgIAAQgJAAgFAGQgHAGgBAOIgwgEQADgUAHgLQAIgLANgGQAOgGAXAAQAaAAAOAFQAOAGAHAMQAJAMgBAPQAAAPgJAPQgJANgZARIgTAOIgKAKIBJAAIAAAng");
	this.shape_15.setTransform(77.2,92.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag+BUIgDggQAKADAMAAQAJgBAFgDQAGgEADgKIg1h8IAzAAIAZBTIAXhTIAvAAIgxCFQgIAXgJAHQgLAMgaAAQgKgBgWgDg");
	this.shape_16.setTransform(54.15,97.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_17.setTransform(38.775,94.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA2BWIAAiCIgiCCIgnAAIghiCIAACCIgrAAIAAirIBGAAIAaBnIAahnIBFAAIAACrg");
	this.shape_18.setTransform(19.45,92.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgKAAgUIAAgrIgSAAIAAgjIASAAIAAgXIAvgZIAAAwIAaAAIAAAjIgaAAIAAArQAAAIABACQADAFAFAAQAGAAAJgEIAEAhQgSAEgPAAQgRAAgJgEg");
	this.shape_19.setTransform(126.575,56.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgwBAIAAh8IAtAAIAAAVQAFgOAHgEQAGgGALAAQAKAAANAHIgPAiQgIgDgGAAQgIAAgGAHQgGALAAAdIAAAqg");
	this.shape_20.setTransform(115.8,58.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAmBWIgJgdIg7AAIgIAdIg2AAIBAirIA5AAIBBCrgAgTAUIAlAAIgSg9g");
	this.shape_21.setTransform(100.15,56.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhDBYIAAirIAtAAIAAASQAIgMAJgEQAIgGANAAQAaABANATQANATABAcQgBAegOAQQgPARgXAAQgLAAgIgEQgJgEgHgHIAAA8gAgNgsQgHAHAAAQQAAAPAHAGQAGAHAJAAQAIAAAFgHQAGgFAAgRQAAgPgGgHQgGgHgIAAQgJAAgFAHg");
	this.shape_22.setTransform(75.05,61.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA6BAIAAhGQAAgJgEgEQgEgGgIAAQgIAAgFAGQgFAGAAANIAABAIgvAAIAAhEQAAgIgBgDQgCgFgDgCQgEgDgFAAQgJAAgEAGQgGAGAAANIAABAIgvAAIAAh8IAsAAIAAASQAKgLAKgFQAJgFAOAAQAPAAAHAGQAJAFAGAKQALgMAJgEQAKgFANAAQAUAAALAMQALAMAAAaIAABNg");
	this.shape_23.setTransform(54.8,58.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgwAyQgWgTAAgfQAAgbATgSQATgTAgAAQAlAAATAWQAPARABAZQAAAcgUATQgSASgiAAQgdAAgTgPgAgQgXQgGAIgBAPQABARAGAIQAHAIAJAAQALAAAGgIQAGgIAAgRQAAgPgGgIQgHgIgJAAQgKAAgHAIg");
	this.shape_24.setTransform(34.75,59.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnBRQgSgJgNgUQgNgVABgfQgBgqAXgXQAWgXApAAQAgAAATANQATANAJAbIgvALIgFgMQgEgGgHgDQgHgDgHAAQgSAAgJAOQgIALABAXQgBAcAJAKQAJALAOAAQAQAAAIgJQAHgIAEgRIAuAPQgEATgKANQgKANgPAHQgPAHgXAAQgcAAgRgIg");
	this.shape_25.setTransform(17.6,56.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmA6QgPgHgIgPQgKgPAAgVQAAgcATgSQASgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQABALAGAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAvAEQgKATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgEAGgCALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_26.setTransform(127.55,23.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_27.setTransform(115.5,20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgvA3QgOgJgEgSIAvgFQADAJAFADQAGAEAHAAQAKAAAFgEQAEgDAAgFQAAgFgFgDQgEgCgQgDQgYgEgKgEQgKgDgGgIQgHgJAAgLQAAgMAHgJQAHgJANgFQAMgEAVAAQAWAAAKADQALAEAHAHQAHAHAFAMIgtAFQgCgGgEgDQgGgEgHAAQgIAAgEADQgDADAAAEQAAAFAEACQAFACAPACQAYADALAFQAMAEAGAIQAGAJAAALQAAALgGAKQgHAKgOAGQgOAGgYAAQghAAgPgKg");
	this.shape_28.setTransform(104.075,23.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXBWIAAh8IAvAAIAAB8gAgXg0IAAghIAvAAIAAAhg");
	this.shape_29.setTransform(92.85,20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_30.setTransform(84.85,20.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwBAIAAh8IAsAAIAAAVQAGgOAHgEQAHgGAKAAQALAAAMAHIgPAiQgJgDgFAAQgJAAgFAHQgGALAAAdIAAAqg");
	this.shape_31.setTransform(75.8,23.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_32.setTransform(61.425,23.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgnBRQgSgJgNgUQgNgVABgfQgBgqAXgXQAXgXAoAAQAgAAATANQATANAJAbIgvALIgFgMQgFgGgGgDQgHgDgHAAQgSAAgJAOQgHALAAAXQAAAcAIAKQAJALAOAAQAQAAAHgJQAJgIADgRIAuAPQgEATgKANQgKANgPAHQgPAHgXAAQgbAAgSgIg");
	this.shape_33.setTransform(44.25,20.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhOBWIAAirIBOAAQAXAAAPAHQANAGAKAMQAKAMADAPQAFAQAAARQAAAbgGAPQgHAQgLAJQgLALgNAEQgRAEgOAAgAgZAvIANAAQAPAAAHgDQAIgFADgJQAFgJAAgUQgBgagIgLQgKgKgTAAIgNAAg");
	this.shape_34.setTransform(17.85,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},19).wait(10));

	// sombrero
	this.instance = new lib.sombrero();
	this.instance.setTransform(490.05,-255.2,1,1,0,0,0,268.9,248.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.7497,x:490,y:-55.15},0).wait(1).to({rotation:-7.4994,y:144.9},0).wait(1).to({rotation:-11.2492,x:490.05,y:344.9},0).wait(1).to({rotation:-14.9989},0).wait(1).to({rotation:-4.1459},0).wait(1).to({rotation:6.7072,x:490,y:344.95},0).wait(1).to({rotation:4.3945,x:490.05,y:344.9},0).wait(1).to({rotation:2.0818,x:490},0).wait(1).to({rotation:-0.2308},0).to({_off:true},1).wait(20));

	// pinata
	this.instance_1 = new lib.pinata();
	this.instance_1.setTransform(487.65,-311.35,1,1,0,0,0,276.1,338.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({rotation:-1.7398,x:487.6,y:-148.9},0).wait(1).to({rotation:-3.4795,x:487.65,y:13.6},0).wait(1).to({rotation:-5.2193,y:176},0).wait(1).to({rotation:-6.959,x:487.6,y:338.35},0).wait(1).to({rotation:-8.6988},0).wait(1).to({rotation:-1.1991,x:487.65},0).wait(1).to({rotation:6.3007,y:338.4},0).wait(1).to({rotation:3.3217,y:338.45},0).wait(1).to({rotation:0.3427},0).to({_off:true},1).wait(10));

	// s3
	this.instance_2 = new lib._5demayo();
	this.instance_2.setTransform(510,379.5,1,1,0,0,0,477.9,342.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({scaleX:1.016,scaleY:1.0157,rotation:0.792,x:509.95,y:379.45},0).wait(1).to({scaleX:1.0319,scaleY:1.0314,rotation:-1.4012,x:510,y:379.5},0).wait(1).to({scaleX:1.0479,scaleY:1.0471,rotation:-0.1756,x:509.95,y:379.45},0).wait(1).to({scaleX:1.0638,scaleY:1.0628,rotation:1.0499,x:510,y:379.5},0).wait(1).to({scaleX:1.0797,scaleY:1.0785,rotation:-0.069},0).wait(1).to({scaleX:1.0957,scaleY:1.0942,rotation:-1.188,y:379.45},0).wait(1).to({scaleX:1.1117,scaleY:1.1099,rotation:-0.3212,x:510.05},0).wait(1).to({scaleX:1.1276,scaleY:1.1256,rotation:0.5455,y:379.55},0).wait(1).to({scaleX:1.1436,scaleY:1.1413},0).wait(1));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(888,685.4);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(472.2,-269.7,588.2,1043);
// library properties:
lib.properties = {
	id: '4F8047EC28EE594281EC2AAAB448ED05',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#99CC99",
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
an.compositions['4F8047EC28EE594281EC2AAAB448ED05'] = {
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