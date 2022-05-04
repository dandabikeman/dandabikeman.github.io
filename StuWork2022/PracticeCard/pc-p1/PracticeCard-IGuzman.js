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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AMypzQhPhChghCQi9iChRABQgkAMgjAPQhYB3AgBHQhrgnhIgCQgSAQgSARQhLBKhABeQiFgmh+gPQg7DBCTBcIABAAAMQpQQgTgQgpggIglgcQg5gpgfgUQg2glgvgaIAAAAQh/hIhFADQiAA4hrBdAMQpQQANgPAVgUQBIhEBtg9QgEhghLguQheg6jLASQhyAJhnAfQgRAFgQAFAK3m5IAcg6QAig/AbgeAD3qfIgBAAAHwotQgQgJgRgIQh6g/hegiQBwhkCLgVAHysYQh5BpB3CCQBMhrBzgEAFjlgQiqCWCJBmIABAAQCFi5CqA0QilCxBVBGQApAiBGAiQBOAzBKA5QAfAYAfAaIAAAAQAXgcAYgWQCCh7CCA/QghAfgZAdQh5CQBbBrQBghNBgAcQAuANAuAmQgehhg+hbQgWghgbggQgZgegegeQhWhYh3hQIAAgBQhzhOiRhJQgthtAQhjIALgrIgngYQg8hABbiLAFDhkQByAzBtA/QA4AgA3AkQB+i8C+BDAJyjpQiFhAiKg3QjHgph9C5QCWAtCNA/ALJi+QgrgWgsgVAKQnRQhjg8g9ggAKsmOQhvhGiKhGQkTiNiBAAAPNgmQiVB5AZBrQAGAZAQAZA1qjTQgCAMAAALQgBAKAAAKQgBBhA0BcQAMAUANAVQArA+BEA9IAyArIDiCTIBVA4IAShDIAHgaIADgKIAbhiQBigPBdgDIAfgBQCVgECIAcQDIApCrBqQBfA7BWBQQBXBPBOBiIh9CCIgCACQgfAlgcAnAVhMRQjUBjjqAlQkBApkcghQglgEgkgFIhDgLAVeG7Qg7AcghAdQhGBBA3BLQAGAIAHAIQABABABACQAhAoA+BUAVeG7IAAAAAVgMQIABgBQAIg6ADhHQAGiPgUhEARCG5QBbBeBWBpANnDwQBxBdBqBsAAbnWQhDgWhEgTAovk1QCNAHCLAXAAfjQQiWiDCSiDQj+gSgzDRQCcAZCZAugAovk1QALi8C1hDQi4gXinAZQgIClCnBYgA1qjTIBRgXQBpgcB3gSQgRiRBhg3QA3ClB4AIQCGgICFAGAvpngQilBIiTCAQglAhgkAkAw5kYQCAgUB/gHQgFjTBxgsQiUAWiHA8AFjlgQilhCijg0");
	this.shape.setTransform(138.9523,94.3498);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B45E19").s().p("AHeE9IB9iCIh9CCIgCgBQA5hEBGg9QhOhihYhPQhVhPhfg7QBfA7BVBPQhwhih9hEIA5AcQE9CmEYEqIksAGgAtVlIQETgfD/AnQBqARBnAcQh4gYiBAAIgBAAIAAAAIgdAAIgHAAIgeABQhdADhjAPIgbBjIgCAHgAhHkGIgbgHQiDgdiMgBIgfAAIAHAAIAdAAIAAAAIABAAQCBAAB4AYIAtANIgCAAgAhykTIAAAAg");
	this.shape_1.setTransform(122.5,145.4136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B48003").s().p("AGMJkIhJgJIBJAJIgggDIgpgGIhCgLIACgDQAbgnAgglIBOAaIEugHIgCgCQkYkqk9inQirhpjIgpQhngchrgRQj/gnkSAfIgDAAIDNCbIAAAAIAAAAIgHAaIAHgaIgHAaIgTBDIgZgYIg8ggIjiiSIgygrQhDg9grg+IgZgpQg0hdABhhIAAgUIACgUIBSgYQBpgbB2gSQCBgUB+gHQCHgICEAGQCOAGCLAXIAAAAQCdAaCZAuQCWAtCNA/IAAAAQBzAzBtA/QAoAiBHAjQBLAxBJA4IBCA0IAAABQBxBbBqBtQBbBdBWBqIAMAPIADADQAvA8AvA/IABABQjUBjjqAlQiPAXiXAAQh6AAh+gPgAVoHUQg/AfggAOQidBAjCAbQDqglDUhjgAVoHUIAAAAgAAqAlIgxgYIgigOQgtgTgugRIgYgIQgggLgggKIgFgBIgBAAIgCgBIgsgNQDIApCrBpIg5gcgAxBguQgegVgbgVIDiCSQhfg0hKg0gAkQhRIAAAAg");
	this.shape_2.setTransform(138.3491,126.0199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("AOyGUQBghOBgAdQAtANAuAlIAAABQg7AbggAeQhGBAA3BMQhWhqhbhdgALXDLQAXgcAXgWQCCh7CDA+QgiAfgZAeQh4CPBbBsQhqhthxhcgAKYCZQhKg5hNgzQB+i8C9BDIAAAAQiVB6AaBrQAGAZAQAYIg/gxgACyiJQCGi5CpA0QikCwBVBHQhtg/hzgzgAhwj1QB7i6DHApQipCWCJBnQiNg/iVgtgAmnk9QA0jRD/ASQiUCECYCDQiaguidgagArAlaQAMi8C1hEQg7DCCTBbQiLgXiOgGgAx5oGQA2ClB4AJQh+AHiBAUQgQiSBhg3gAvLlYQgFjTBxgsQgICkCnBZQiEgGiHAIIAAAAg");
	this.shape_3.setTransform(153.4301,98.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AUBIrIgCgDIgNgPQg3hMBGhAQAhgeA7gbQAUBDgGCPQgDBHgIA6Qg+hUghgogAUBEhQhggdhgBOQhbhsB5iPQAZgeAhgfQAeAeAZAfQAbAgAWAhQA+BbAeBgQguglgugNgANmCIQgQgYgGgZQgZhqCVh7QB3BSBWBWQiCg9iCB6QgYAWgXAcgAIhhZQhVhHCliwQAsAUArAWQCRBJBzBPQi+hDh+C9Qg3gkg4ghgAFBjLQiJhnCqiWQCKA4CFBAQiqg0iFC5gAAao+Qj+gSgzDRIgBAAQiThbA7jCQB+AQCFAlQBEAUBDAVQCjA0ClBCQjHgph9C6QiWiDCSiEgA0il/QCTiAClhJQCHg7CUgWQCngaC4AXQi1BEgLC8QinhZAIikQhxAsAFDTQh4gJg3ilQhhA3ARCSQh3AShpAbIhRAYQAkglAlggg");
	this.shape_4.setTransform(139.0782,104.6546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AB3BqQBMhrBzgDQhbCKA8BAQhjg8g9gggABWBZQh5g/hegiQBwhjCKgVIAAAAQh5BpB3CBIghgRgAk1gwQBrhdCAg4QhYB3AgBGQhrgnhIgBg");
	this.shape_5.setTransform(176.675,27.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CC00").s().p("ACSC6Qg9hABbiKQhzAEhKBqQh3iBB5hpQAtAaA3AlQAeAUA5ApIAlAbQApAgATAQQgbAegiA/IgcA6gAkHgTQghhHBZh3QBFgDB/BIQiLAVhxBkg");
	this.shape_6.setTransform(190.0385,29.119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,279.9,190.7);


(lib.sign = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.parent = this;
	this.text.setTransform(434.6283,717,1.3408,1.465,0,180,0);

	this.text_1 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 67;
	this.text_1.parent = this;
	this.text_1.setTransform(241.5283,717,1.3408,1.465,0,180,0);

	this.text_2 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 67;
	this.text_2.parent = this;
	this.text_2.setTransform(139.8853,720.322,1.3431,1.4628,0,172.9347,-8.4182);

	this.text_3 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 67;
	this.text_3.parent = this;
	this.text_3.setTransform(433.7853,46.8376,1.1316,1.5092,0,-3.914,-7.0078);

	this.text_4 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 67;
	this.text_4.parent = this;
	this.text_4.setTransform(352.2102,58.3,1.1279,1.512);

	this.text_5 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 67;
	this.text_5.parent = this;
	this.text_5.setTransform(266.7102,58.3,1.1279,1.512);

	this.text_6 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 67;
	this.text_6.parent = this;
	this.text_6.setTransform(189.8102,58.3,1.1279,1.512);

	this.text_7 = new cjs.Text("", "56px 'BodoniMTBlack'", "#333333");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 67;
	this.text_7.parent = this;
	this.text_7.setTransform(104.3095,54.8807,1.136,1.5059,0,5.7689,10.2898);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EAcwg3lQACgEhfAHQhsAJhvAQQlHAug6BDIAjJXQAnITAnBRQAGAMAFACQAVALApgZQAkgVA0gxQCFh/AugSICYBLQCcBGAVgVQAKj1gGkYQgLowhOiwIKRkaEAQ1g1pIBCAREAFAg0rIALKbQAMFXAUCcQAHA4AIAgQAMAzAQgKIBohOQAmgcAhgXQBCgvAqgaICOA8QAPAHAOAGQB6A2BAAiQAFADAGADQAAgDAAgDQAEgrAEgtQAQi7AKjeQAbosgpkHEgH7g0jIgCJPQABGUAKCjQADA8AFAcQABAJACAGIBngQQBdgaBSg9QAdgWAcgaICCAuQAEABADABQCJAyA8AaQADglADgnQANitALjOQAan7gPkYIBhAAIL1g+I4wBGIg5AAQgBgJgBgJgEgUJg0jIgZIbQgOHKAQChQAEAlAFAVIAdADQAlACAmgHQBKgNA/grQAogbAjgmICOAcQA2AQAsAVQBIAkAsA0QAHAHAFAIQABgIABgHQAEgrAFgtQASjAAPjaQAkoVgZjXIrVAAIs9hyQgkElgbErQg4JXAoAhQAqAiB9g1QBDgbBfgyQATgJAgAYQAGAFA+A5QAqAoAqAbQBGAuBFAMQAABJAThyQACgIABgJQAmj0BbuJgEgrhg74IKbFjEgcgA3ZQgrkdghkiQhCpEAwggQAxggCWAzQBPAaBxAxQAXAIAlgXQAIgFBJg3QCGhmCDgUQAAhGAXBvQAtDeBwOLIBmAJIgdoKQgWogAjhxIAigCQArgCAuAHQCQAVBsBgICpgbQC6gtBThaQAdDkAVENQArIEgdDQQgBAJgCAIIBHgRIhEAAItdAAgEgouA7ZIMOkAEABaA1qIgDo8QACpKAYg/IB7APQCVAiB/BgICbgsQCqgxBJgbQAUDEAPD2QAfHqgSEQIB0AAIANqHQAaqAA/AgIB8BLQCLBTBJAmICpg6QC6hCBTgmQAZDaAQENQAfIKgtEBIgEgCIACgbEAe5A2fQgCAIgCAHI9bhEEAQyA1yIODA8EAriA8AQr8lNgtgU");
	this.shape.setTransform(282.475,384);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFCC").s().p("AmhJjIgdoKQgWogAjhwIAigDQArgBAuAGQCQAWBsBgICogbQC6gtBThbQAdDlAWEMQArIEgdDQg");
	this.shape_1.setTransform(240.2874,666.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("An+BUQhDpDAxggQAxggCVAyQBPAaBxAyQAXAIAmgYQAHgEBJg4QCGhmCDgTQAAhGAWBvQAtDdBwOLIBmAJIvYBuQgqkcghkig");
	this.shape_2.setTransform(143.5023,672.6308);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("ADhKLQhFgMhFguQgqgbgqgoIhEg+QgfgYgTAJQhgAyhCAbQh+A1gpgiQgpghA4pWQAckrAkklIM7ByIhVAJQhcOIglD0IgDARQgMBFgFAAQgDAAAAgcg");
	this.shape_3.setTransform(107.2251,104.1342);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC99FF").s().p("AEzJnQgtgzhIgkQgsgVg1gRIiNgcQgkAngnAbQg/AqhLAOQgmAGglgBIgcgDQgGgVgDglQgRihAPnJIAYobILUAAQAZDXgkIUQgODagTDAIgJBXIgBAPIgMgPg");
	this.shape_4.setTransform(188.6482,110.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AnQJXIANqGQAaqBA/AgIB8BMQCLBTBJAmICog7QC6hCBTglQAZDZAQEOQAfIJgtEBIgEgCIACgcIgCAcIAEACIgEAPg");
	this.shape_5.setTransform(436.3572,668.3489);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AurJBIgDo9QACpIAYhAIB7APQCVAjB/BgICbgsQCqgyBJgaQAUDEAPD1QAfHqgSEQIBzAAIODA8g");
	this.shape_6.setTransform(385.475,669.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AsFKKQgFgbgDg8QgLijAAmTIACpPIYvhHIr0A+IhhAAQAQEZgaH5QgLDPgNCtIgGBMQg8gaiKgyIgHgDIiCgtQgcAageAWQhRA9hdAZIhoAQIgCgPg");
	this.shape_7.setTransform(310.8,107.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF33").s().p("AlMJ8QgIgggHg3QgUicgMlXIgLqbIL0g+QApEIgbIrQgKDdgQC8IgIBXIAAAGIgLgGQhAghh6g2IgdgNIiNg9QgqAahCAwIhHAzIhoBOQgCACgDAAQgNAAgKgsg");
	this.shape_8.setTransform(353.5702,108.5563);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FFFF").s().p("AkNKqQgFgCgGgMQgnhRgnoTIgjpWQA6hDFHguQBugQBsgJQBfgHgCAEQBOCwALIvQAGEYgKD1QgVAVichGIiYhLQguASiEB/Qg0AxgkAVQgcARgTAAQgIAAgHgDg");
	this.shape_9.setTransform(436.1726,96.6231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,-1,559.2,770);


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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ATSkEIgBAAATIj8IgXAPIrUHnIHRMHIuNnvIpnIhIgDACIABgFIDSsQItUknAzWgLINRh7IFKuuIFuOXIOkhq");
	this.shape.setTransform(-270.675,148.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("ATTj9IgFADATXlIIAKAkQAEAlgXAFATNj6IgJAIQABAAADACQACgGAEgEAUdikQgfgPgYgSQgkgbAGgQQAJACAeAEQA6AIgHgWAg1yGQAFAGABAaQACAjgSAZAAkw1QgHAHgbAIQgmAMgbgQQgUgLgfAPQgVAJACgeAENCAQAAB9hQBZQhRBYhxAAQhyAAhRhYQhQhYAAh9QAAh+BRhXQBQhZBxAAQByABBRBYQBQBXAAB9gAOqQKIAWAtQAWAjABgpAOqQKIgLAtQgOAngNgiAOqQKQANgNARgIQAfgQAMAbAzog5IgFAbQgBAbAUACAzdAwQAWASADghQABgXgLgIIgMgDIgdAVQgeAQgMgYApTSHQAcgVgTg1AqER9QALgDAOgLQAagTAHgfQgBgBgBgCIgPAPQgVAHgRgo");
	this.shape_1.setTransform(-270.2574,147.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("ApIQxIDSsQItUknIgMgEINRh7IFKuuIFuOWIOkhpIgFADIgBAAIggAXIrUHnIHRMGIuNnuIpnIhIgCgDgAjEFNQBRBYByAAQBxAABRhYQBQhZAAh9QAAh8hQhYQhRhYhygBQhxAAhQBZQhRBYAAB9IAAACQAAB7BQBYgAjEFNQhQhYAAh7IAAgCQAAh9BRhYQBQhZBxAAQByABBRBYQBQBYAAB8QAAB9hQBZQhRBYhxAAQhyAAhRhYgAERB3IAAAAg");
	this.shape_2.setTransform(-270.675,148.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.7,31.1,264.9,233.70000000000002);


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


(lib.character = function(mode,startPosition,loop,reversed) {
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
	this.btn1 = new lib.sombrero();
	this.btn1.name = "btn1";
	this.btn1.setTransform(179.45,94.4,1,1,0,0,0,139,94.4);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHnReQAAgCgBgBQgBgDAAgDQgbhagciMQgEgWgEgWIgnj3IgXkGQgBgOAAgNQgcqcEam6QBYiKB2h0QALgLAMgLAA6QgIgDgDQgTgZgYgOQgUgNgYgEQgjgGgpAMQgDgDgDgDQiaichajFIh5m0IgOisQAAgeAAgdQgBAAAAAAQjYhaiXhvQiZhxhXiHIhxk0IgFg8QAAgeABggQA5k7EsA4QAgAGAiAKQBEBJAcBhIANBDIADAjQAEA4gHA/QgDApADAqIANBUQAhCTBzCUQB2mYB7mVIBekdQDkgVDFAiQFAA1DuDDQAWASAWAUQACACADACANSp+QgnAMgQAWQgRAWgSAbQgTAagfA4QhnC9gkDlIHbEgQBqCTAXB2QANBGgQA8QgVBKhDA5QgvAYguADQiMAIh+jEQgVheg0h5Qg1h6hQijQiNHOD7GHQgPAIgNAIQgfASgXAUQg6AzgCA7QAAACAAABQgBgBgBAAQgHgEgGgEQgCgBgCAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgVgLgVgHQgjgNgkgFIgRgBQgIgBgIAAQgBAAAAAAQgDAAgCAAIgBAAQAAAAADAAQBZADApAfQASAOATAGQgBARACAKQAAgHACgIQAAgCAAgCQACgHACgHQABgDABgDQALgiAfgvQArhCBcAAQAGAAAGAAQAZABAcAFQCPAcBEAlQBEAlAeA0QAKARgDAQQgHAfg7AZQhYAlh8AJQgLABgKAAIgWABQgJAAgJAAIhLgGQgkgGgdgMQgfgMgUgOQgLgIgHgIQAAgBgBAAQgCgCgBgCQgDgQgEgGQgHgMAAgGAM2rsICgjTIgECqQhCAwgtBKQgJAOgIAPAPWu/IiMiAATEqEIlyAGAgcpIQgQA+gpAjQgpAkgqgLQgqgMgSgzQgSgzAQg+QARg+ApgjQApgkAqALQAqALASA0QASAzgRA+gAhdpSQgJAhgSAUQgRAVgQgFQgQgEgEgaQgFgaAJghQAIghASgUQARgVAQAEQAPAFAFAaQAFAbgIAggAh6pVQgBAFgFACQgEADgFgBQgFgBgDgFQgCgFABgEQABgFAFgDQAFgDAEACQAFABADAEQACAFgBAFgAE8noQAAAigMAYQgMAYgQAAQgQAAgMgYQgLgYAAgiQAAgiALgYQAMgYAQAAQAQAAAMAYQAMAYAAAigAGMnoQAABDgiAuQghAvgvAAQgvAAgigvQghguAAhDQAAhCAhgvQAigvAvAAQAvAAAhAvQAiAvAABCgAGQzqQhBBlhCBzQiDDlAABAAAj0iIhODFQhODaANBjAEknnQAAAFgEAEQgEAEgFAAQAAAAgBAAQgEgBgEgDQgDgEAAgFQAAgFADgEQAEgDAEAAQABAAAAAAQAFAAAEADQAEAEAAAFgACpAbQAYg3AOhYQAOhaABgDQAEgLgkATQg9AegwANQi8AxiaiRQgCgDgDgCAC5kfIAYA0QAhAxAygQAkFj+IAjCNQA3CVBIBDQAEgeAPgaQAegyArASAllkoIAPANQATAPASAGQA7ARAfhTAgHBYQgXgNAXg8AhjBnQA2AyA7gCQBogDAzh5QhYhMhYBAAgKC9IAZAaQAeAdAbAOQBVAtALh4AsvlVIgLAoQgHgCgJgGQgMgKgHgNQgCgFgBgFQgDgLABgBQAAgBAFAEQABAAABABQAUAOAYgFgAgNT1QgKAEgLACQgYAGgbACIgMABQgDAAgCAAQgBAAgBAAIgGAAQgBAAgCAAQhRAAg5gfQg5gfAAgsQAAgPAFgPQALggAigkQAzg2BngYQAXgFAVAAIAJAAQACAAACAAQA+AEAoA4QAoA4AEAmQABgFABgFIAAgBQABgGACgFIAAAAQAGgCAFgDQAUgJATgMQANgIAOgGQgSAGgSAHQgFACgFACQgMAFgLAGQgIADgGAEQgBAAAAABIgBAAQgJgXgLgTAgBTxQAEgCAFgBQANgDAOgBQAHAAAIAAQACAAABAAQAEAAAEAAQAiACAZAMQAeAPAAAVQAAACAAADQgDASgbANQgXAMgfADQgDAAgCAAQgBAAgBAAIgGAAQgBAAgCAAQgqAAgcgPQgdgPAAgVQAAgGADgGQAEgJALgIQAEgDAGgDQAAgBABAAQADgBAEgCAEpQsQACgBACABIABAAQACAAABAAIAHAAAEpQsQgCgEgBgEIgBAAQhCidg3iuQhyllA6hZACHRSQgCgDgCgDQh7jEhpjwQjXnpBUjlABhSYQAAABgBACQgPAqg2AeQgCABgBABQgNAHgMAFQgGACgGACABjR/QABAKgBAKIAAAAQAAABgBABIAAABIAAAAQAAABgBABAHxSlQABAFAAAGQAAAIgCAHQgIAjgwAaQgmAVgxAIIgiADIgCAAQgDAAgDAAQgBAAAAAAIgGAAQgCAAgCAAQhSAAg6ggQgwgagLgpQgCgIgBgIQgBgEAAgEQAAgFAAgEAC1RBQAxgVBDAAQg4ACg8ATgAKwUsQAAAfgjAWQgVANgaAFQgRAEgUAAQgTAAgRgEQgbgFgVgNQgigWAAgfQAAgfAigWQAjgVAxAAQAxAAAjAVQAjAWAAAfg");
	this.shape.setTransform(122.0688,250.0204);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A76C00").s().p("ACgDbQgagGgVgNQgjgVAAgfQAAgfAjgWQAjgWAxAAQAxAAAiAWQAjAWAAAfQAAAfgjAVQgUANgaAGQgSADgTAAQgUAAgRgDgAk4CuIgBAAIgGAAIgEAAIgHAAQgjgCgZgNQgdgOAAgVIAAgFQACgLALgJQAGgGAKgFIAHgDIgLADIgdAHQgRACgSABIgMABIgHAAIgGAAIgEAAIgHAAQhKgCg1gdQgRgJgMgKQgcgZAAgeQAAgLADgLQAGgZAWgbQAIgMALgLQAwgzBegYIAFAFIAFgBIACgBIAAAAQAXgGAWAAIAAAAIAAAAIAVACIABAAIACAAQAZAEAVANQAYAOATAZIACADIgCgDQgTgZgYgOQgVgNgZgEIgCAAIgBAAIgVgCIAAAAIAAAAQgWAAgXAGIAAAAIgCABIgFABIgFgFIAMgDQASgFARgBIAGAAIAJAAQAjABAdAQQAYAOATAZIACADIABABQAKAOAHANQALASAHAPIADAIIAAAAIACAIIADAIIABAIIAAADIADgOIACgIQATgJATgKIAMgHQANgIAOgGQA5gTA1gCIACAAIADgBIABAAIABAAIAEAAIAFAAIACAAIAXABIAQACQAqAEAcANQAPAGALAJQAIAGAJAFQgUgKgWgIQgjgNgjgEIgQgCIgRgBIgBAAIgFAAIgBAAIADABQBZADAoAfQASAOAUAFIgBAMQAAAJACAHQgCgHAAgJIABgMQgUgFgSgOQgogfhZgDIgDgBIABAAIAFAAIABAAIARABIAQACQAjAEAjANQAWAIAUAKIACABIABABIABAAIABABIACABIANAEIAAADIgNgHIANAHIAAAGIAAAMIABAHQAAgOAFgRQALglAig1IAMgQQAWgZAggNQggATgWATQAWgTAggTQAagKAhgCIAGAAQAggBAlAIQCPAbBEAlQBEAlAeA0QAMAWgIATIABgHQAAgNgIgNQgeg0hEglQhEgliPgbQgcgGgZgBIgMAAQhcAAgrBCQgeAvgMAjQAMgjAegvQArhCBcAAIAMAAQAZABAcAGQCPAbBEAlQBEAlAeA0QAIANAAANIgBAHQgLAag0AVQhYAlh8AJIgZACIgVAAIgTAAIhKgGQgigGgcgLQg1gVgUgbIABAFIAAAHIAAAAIgEgEQgDgOgDgGQgHgMAAgGIAAAAIAAAAQAAAGAHAMQADAGADAOIABAMIgBAPQgMAegqAXQgoAVgyAHIgiADIgCAAIgHAAIgGAAIgDAAIgIAAQhLgCg2gdQg5gggFg0QgBgIAAgIIgBADIABgMIAAgHIACgLIAAAAIAAAAIgCALIAAAHIgBAMIAAAAIAAADIAAAAIgBAAIgBADQgGAMgJAMQgUAYgjATIgLAGIgIAEIgGACQALgEAOgBIAPgBIAHgBIAEAAQApAAAdAPQAeAPAAAVQAAAGgDAGIAAgEQAAgVgdgPQgZgNgjgBIgHgBIgEAAIgOABQgPABgMADIgLACQAOgFAMgHIADgBIgDABQgMAHgOAFIgMAFIAMgFIALgCQAMgDAPgBIAOgBIAEAAIAHABQAjABAZANQAdAPAAAVIAAAEQgGANgVAKQgYANghACIgGAAgAmJBgIAAAAQgHADgEAEQgLAHgEAJQAEgJALgHQAEgEAHgDIAAAAIAHgDIgUAGIAUgGIgHADgAmnizIAEAAQA/AFAnA3QApA5AEAmQgEgmgpg5Qgng3g/gFIgEAAIgJAAQgVAAgXAGQhoAYgyA2QgiAkgLAfQALgfAigkQAyg2BogYQAXgGAVAAgABvgaIABgPIgBAPgAjZhIQgUAMgUAJIgKAFIAKgFQAUgJAUgMQAMgIAPgGQA7gUA4gCQhCAAgxAWQgTAFgSAIQASgIATgFQgPAGgMAIgAkTgzIAAAAIABAAIgBAAIAAAAQgKgXgLgSQALASAKAXgAhGhsIAAAAIAEAAIAGAAIgGAAIgEAAIAAAAIgFAAIgDgHIADAHIACAAIADAAgAB9AYIgBgMIAEAEIgBAJQgBAHgCAHIABgPgAB8AMIAAAAgAKkgUIAAAAgAhLhsQg4ACg7AUQAxgWBCAAgAnmiyIAAAAg");
	this.shape_1.setTransform(159.3311,367.6941);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AiGAjQAEgfAQgZQAegzArAUQgMAeAAASQAAARAMAGQgMgGAAgRQAAgSAMgeQBXhBBZBNQgzB4hnADIgFAAQg6AAg0gwgAgpg0IAAAAg");
	this.shape_2.setTransform(125.525,256.8662);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AjPglIgiiNQCaCRC7gxQAxgNA8geQAlgTgEALQgCADgOBaQgNBXgYA4QhZhNhYBBQgqgTgeAzQgQAagEAeQhIhDg3iVg");
	this.shape_3.setTransform(120.1198,242.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADOBFQgEAAgEgEQgDgDAAgFQAAgFADgEQAEgDAEgBIABAAQAFAAAEAEQAEAEAAAFQAAAFgEADQgEAEgFAAIgBAAgAjRgrQgFgCgDgFQgCgEABgFQABgFAFgDQAFgCAEABQAFABADAFQACAFgBAFQgBAEgFADQgDACgEAAIgCAAg");
	this.shape_4.setTransform(129.2857,195.5719);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB7CqQgiguAAhDQAAhBAigvQAhgvAvAAQAvAAAiAvQAhAvAABBQAABDghAuQgiAvgvAAQgvAAghgvgACqAAQgMAXAAAiQAAAiAMAYQALAYARAAQAQAAALgYQAMgYAAgiQAAgigMgXQgLgYgQAAQgRAAgLAYgAj3BTQgqgMgSgzQgSgyARg+QARg+ApgjQApgkAqALQAqALASA0QASAzgRA+QgRA9gpAjQgfAbggAAQgKAAgKgCgAjeh5QgRAUgJAhQgJAhAFAaQAFAZAQAEQAPAFASgVQARgTAJghQAJgggFgbQgFgagQgFIgFAAQgOAAgOARg");
	this.shape_5.setTransform(129.9304,195.4108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("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");
	this.shape_6.setTransform(120.0913,235.5986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,320.29999999999995,391.9);


(lib.btn1 = function(mode,startPosition,loop,reversed) {
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
	this.btn = new lib.character();
	this.btn.name = "btn";
	this.btn.setTransform(159.2,195,1,1,0,0,0,159.2,195);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,320.29999999999995,391.9);


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
	this.next_btn = new lib.pinata();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(1328.25,222.9,1,1,4.7273,0,0,131.5,116);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 1);

	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(159.2,195,1,1,0,0,0,159.2,195);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.next_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.9,-1,1067.8000000000002,391.9), null);


// stage content:
(lib.PracticeCardIGuzman = function(mode,startPosition,loop,reversed) {
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
		
		this.btn.addEventListener("click", fl_ClickNextScene.bind(this));
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

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AguBKIAAgCQAngvAIgQQAIgPAAgQQAAgLgHgIQgGgHgKAAQgQAAgKAQIgDgBQAGgVALgKQAMgJAPAAQALAAAIAFQAKAFAFAJQAFAJAAAIQAAAOgIAPQgLATgkAjIAfAAIAPgBQADgBADgCIAGgKIAEAAIgJAqg");
	this.shape.setTransform(260.95,75.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3399").s().p("AguBKIAAgCQAogvAHgQQAIgPAAgQQAAgLgHgIQgGgHgKAAQgRAAgJAQIgDgBQAFgVAMgKQAMgJAPAAQALAAAJAFQAJAFAFAJQAFAJAAAIQAAAOgIAPQgLATgkAjIAfAAIAPgBQADgBADgCIAGgKIAEAAIgIAqg");
	this.shape_1.setTransform(249.95,75.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3399").s().p("AgSBGQgJgFgGgKQgFgHgDgMQgFgRAAgRQAAgXAHgUQAFgQAMgJQAKgJAMAAQANAAALAJQAKAIAGAPQAHAUAAAXQAAAWgGATQgEALgGAIQgGAHgIAEQgIAFgJAAQgKAAgIgGgAgHhBQgEAEgBAJQgBAKAAA4QAAAfACAKQABAIADACQADADAEAAQAFAAADgEQAFgGABgMIAAguIAAgsQgBgPgFgFQgCgEgGAAQgEAAgDADg");
	this.shape_2.setTransform(239.2,76.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3399").s().p("AguBKIAAgCQAngvAIgQQAIgPAAgQQAAgLgHgIQgGgHgKAAQgRAAgIAQIgFgBQAHgVALgKQAMgJAOAAQALAAAKAFQAIAFAGAJQAFAJAAAIQAAAOgIAPQgLATgjAjIAeAAIAQgBQADgBACgCIAGgKIAEAAIgIAqg");
	this.shape_3.setTransform(227.95,75.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3399").s().p("AgqBFQgGgFAAgIQAAgFAEgFQAEgEAGAAQAEAAAEADQADAEAAAHQAAAFABAAIADABQACAAADgCQAEgFAGgQIAEgIIghhKQgHgQgDgEQgEgEgFgCIAAgEIA0AAIAAAEQgEABgCABQgCACAAACQgBAEAGANIAQAnIAMgeQAGgRAAgGQAAgEgCgCQgDgCgGgBIAAgEIAhAAIAAAEQgFABgDADQgDADgHATIgdBKQgKAbgFAHQgIAJgLAAQgJAAgFgFg");
	this.shape_4.setTransform(211.7,80.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3399").s().p("AALAwQgFgDgBgJQgSARgOAAQgJgBgGgFQgFgGAAgIQAAgMAKgJQAJgJAhgOIAAgLQAAgLgCgDQgBgDgCgCQgEgCgEgBQgHABgFADQgCACAAADQAAACADADQAEAEAAAFQAAAFgEAEQgEADgGABQgHAAgFgFQgEgEAAgFQAAgIAGgHQAGgHALgDQALgFALAAQAOAAAIAHQAJAFACAIQACAEAAARIAAAmIAAAIIACADIACAAQADAAADgDIADACQgFAIgGAEQgGADgHABQgJAAgEgFgAgOALQgEAGAAAFQAAAGAEADQACAEAFAAQAGAAAGgHIAAghQgMAIgHAIg");
	this.shape_5.setTransform(201.025,78.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3399").s().p("AAXBJIAAgEIAGAAQAGAAAEgCQADgCABgEQABgCAAgLIAAhrIg3CEIgCAAIg5iDIAABlIABAOQABAFAEADQAGAEAJAAIAAAEIgyAAIAAgEIACAAIAJgCQAEgBACgDQACgDACgFIAAgLIAAhbQAAgLgCgDQAAgDgEgCQgEgCgGAAIgFAAIAAgEIA8AAIAoBfIAohfIA6AAIAAAEIgEAAQgGAAgEACQgDACgCADQgBADAAALIAABfQAAALABADQABADAEACQAEACAGAAIAEAAIAAAEg");
	this.shape_6.setTransform(184.85,76.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3399").s().p("AgKBAQgGgFgCgHQgCgEAAgQIAAg1IgMAAIAAgEQANgJAKgLQAJgKAGgNIAEAAIAAAkIAXAAIAAALIgXAAIAAA9IABALIACAEIAEACQAHAAAGgLIADADQgIAUgUAAQgIAAgHgFg");
	this.shape_7.setTransform(165.35,76.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3399").s().p("AgqA0IAAgEQAGgBADgDQACgDAAgNIAAg2IgBgLQgBgDgCgCQgCgBgFgBIAAgEIApAAIAAAXQAJgPAHgGQAIgFAHAAQAGAAAEAEQADAEAAAGQAAAIgDAEQgEAEgFAAQgGAAgEgEIgFgEIgCgBQgDAAgDADQgEADgDAHQgCAKAAAMIAAAXIAAAGQAAAGABACQAAADADABQACACAGAAIAAAEg");
	this.shape_8.setTransform(156.975,78.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3399").s().p("AAHBKIAAgEIADAAQAJAAADgCQACgCAAgDIgBgEIgDgIIgIgSIgyAAIgGAOQgDAHAAAFQAAAGAFADQADABALABIAAAEIgxAAIAAgEQAIgBAGgFQAEgGAIgQIAzhzIACAAIA1B2QAHARAFAEQAEAEAGAAIAAAEgAgiAZIArAAIgVgxg");
	this.shape_9.setTransform(143.85,75.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3399").s().p("AgqA0IAAgEQAGgBADgDQACgDAAgNIAAg2IgBgLQgBgDgCgCQgCgBgFgBIAAgEIApAAIAAAXQAJgPAHgGQAIgFAHAAQAGAAAEAEQADAEAAAGQAAAIgDAEQgEAEgFAAQgGAAgEgEIgFgEIgCgBQgDAAgDADQgEADgDAHQgCAKAAAMIAAAXIAAAGQAAAGABACQAAADADABQACACAGAAIAAAEg");
	this.shape_10.setTransform(127.425,78.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3399").s().p("AggAkQgJgOAAgUQAAgYAOgPQANgPASAAQAPAAALAMQALANABAYIg2AAQABATAKAMQAGAJALAAQAGAAAFgEQAFgDAGgKIAEADQgIAQgKAHQgKAHgNAAQgWAAgLgRgAgHgoQgFAKAAAQIAAAEIAcAAQAAgRgCgHQgCgGgEgDQgDgCgDAAQgFAAgEAFg");
	this.shape_11.setTransform(117.6,78.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3399").s().p("AgKBAQgGgFgCgHQgCgEABgQIAAg1IgOAAIAAgEQAOgJAKgLQAJgKAGgNIAEAAIAAAkIAYAAIAAALIgYAAIAAA9IAAALIAEAEIADACQAHAAAGgLIAEADQgJAUgTAAQgJAAgHgFg");
	this.shape_12.setTransform(108.95,76.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF3399").s().p("AgfAvQgHgGgCgHQgDgHAAgRIAAgnQAAgLgCgDQgCgDgGgBIAAgEIAoAAIAABEQAAALACADQAAADADACQACABADAAQADAAADgCQAEgDAGgIIAAg1QAAgLgCgDQgCgDgHgBIAAgEIApAAIAABOQAAALACADQACADAHABIAAAEIgpAAIAAgOQgHAJgGAEQgIAEgIAAQgJAAgGgFg");
	this.shape_13.setTransform(99.075,78.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF3399").s().p("Ag2BLIAAgEQAIAAACgDQACgDAAgKIAAhpQAAgLgCgDQgCgDgIAAIAAgEIArAAIAAANQAFgIAGgDQAHgFAJAAQALAAAJAHQAJAHAFAMQAEAMAAAPQAAAPgEALQgGANgJAHQgJAGgLAAQgJAAgGgDQgFgDgGgHIAAAlQAAAIABADQACADACABIAJABIAAAEgAgLgtIAAA0QAJANAJAAQAGAAAEgGQAGgJAAgYQgBgagGgKQgEgGgGAAQgKAAgHAQg");
	this.shape_14.setTransform(86.55,80.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF3399").s().p("AAhA0IAAgEQAGgBADgEQACgDAAgKIAAgqQAAgOgBgDQgBgEgDgCQgCgCgDAAQgFAAgEAEQgFADgFAHIAAA1QAAALACACQACAEAHABIAAAEIgzAAIAAgEQAFAAACgCIADgFQABgCAAgJIAAgqQAAgOgBgDQgBgEgDgCQgCgCgDAAQgEAAgEADQgFADgGAIIAAA1QAAAKACAEQADADAGABIAAAEIg0AAIAAgEQAHgBACgDQACgDAAgLIAAg4QAAgLgCgDQgCgDgHgBIAAgEIApAAIAAAOQAJgJAHgEQAHgEAIAAQAKAAAFAFQAHAEADAKQAJgKAIgEQAIgFAIAAQALAAAGAFQAGAFADAHQACAIAAAQIAAAoQAAALACADQACADAHABIAAAEg");
	this.shape_15.setTransform(71.625,78.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF3399").s().p("AgiAlQgMgQAAgUQAAgVAMgQQANgQAVAAQANAAALAHQALAGAHANQAFAMAAAOQAAAVgLAPQgNARgXAAQgVAAgNgQgAgIgoQgEAEgBAMIgCAhQAAALACAKQABAIAEAEQAEAEAEAAQAEAAAEgDQAEgDACgHQACgKAAgeQAAgTgCgGQgCgHgFgDQgCgDgFAAQgFAAgDAFg");
	this.shape_16.setTransform(56.85,78.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF3399").s().p("AgeBDQgSgKgKgRQgKgSAAgTQAAgUALgTQALgTASgKQATgKAUAAQAPAAARAGQAKAEADAAQADAAADgCQACgDABgFIAEAAIAAAyIgEAAQgFgUgNgKQgNgLgQAAQgOAAgKAIQgLAIgGANQgGAQAAAUQAAASAFARQAFAQAKAIQAKAIAQAAQAOAAAMgGQALgGANgPIAAANQgNANgNAFQgNAGgSAAQgWAAgSgJg");
	this.shape_17.setTransform(43.225,76.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF3399").s().p("AADA0IAAgEQAGgBADgEQABgDAAgKIAAgsQAAgMgBgDQgBgEgCgBQgCgCgDAAQgIAAgIANIAAA1QAAALACADQACADAGABIAAAEIgzAAIAAgEQAGgBADgDQACgDAAgLIAAg4QAAgLgCgDQgDgDgGgBIAAgEIApAAIAAANQAHgIAHgEQAHgEAIAAQAKAAAGAGQAGAFADAIQABAGAAASIAAAmQAAALACADQACADAHABIAAAEg");
	this.shape_18.setTransform(233.725,51.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF3399").s().p("AALAxQgFgFgBgIQgSAQgOAAQgJAAgGgFQgFgGAAgIQAAgMAKgJQAJgJAhgOIAAgKQAAgMgCgDQgBgDgCgCQgEgCgEgBQgHABgFADQgCACAAACQAAACADAEQAEAFAAAEQAAAFgEAEQgEADgGAAQgHAAgFgDQgEgEAAgGQAAgIAGgHQAGgHALgDQALgFALAAQAOABAIAGQAJAFACAIQACAEAAARIAAAlIAAAJIACADIACAAQADAAADgEIADADQgFAIgGAEQgGADgHAAQgJAAgEgDgAgOALQgEAGAAAGQAAAEAEAFQACACAFAAQAGABAGgHIAAggQgMAGgHAJg");
	this.shape_19.setTransform(222.375,51.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF3399").s().p("AAhA0IAAgEQAGgBADgEQACgDAAgKIAAgqQAAgOgBgDQgBgEgDgCQgCgCgDAAQgFAAgEAEQgFADgFAHIAAA1QAAALACACQACAEAHABIAAAEIgzAAIAAgEQAFAAACgCIADgFQABgCAAgJIAAgqQAAgOgBgDQgBgEgDgCQgCgCgDAAQgEAAgEADQgFADgGAIIAAA1QAAAKACAEQADADAGABIAAAEIg0AAIAAgEQAHgBACgDQACgDAAgLIAAg4QAAgLgCgDQgCgDgHgBIAAgEIApAAIAAAOQAJgJAHgEQAHgEAIAAQAKAAAFAFQAHAEADAKQAJgKAIgEQAIgFAIAAQALAAAGAFQAGAFADAHQACAIAAAQIAAAoQAAALACADQACADAHABIAAAEg");
	this.shape_20.setTransform(207.475,51.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF3399").s().p("AgtAyIAAgCIA2hbIgPAAQgKAAgFACQgEACgDAEQgDAEgDALIgEAAIAAgdIBUAAIAAADIg2BZIAHAAQAUAAAJgGQAJgFAEgQIADAAIgDAig");
	this.shape_21.setTransform(193.275,51.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF3399").s().p("AgfAvQgHgGgCgHQgDgHAAgRIAAgnQAAgLgCgDQgCgDgGgBIAAgEIAoAAIAABEQAAALACADQAAADADACQACABADAAQADAAADgCQAEgDAGgIIAAg1QAAgLgCgDQgCgDgHgBIAAgEIApAAIAABOQAAALACADQACADAHABIAAAEIgpAAIAAgOQgHAJgGAEQgIAEgIAAQgJAAgGgFg");
	this.shape_22.setTransform(182.325,52.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF3399").s().p("AgfBHQgOgGgKgJQgKgJgHgMQgHgPAAgSQAAggAXgXQAXgWAiAAQALAAAIABIAQAFIANAEQACAAADgCQADgCACgGIAEAAIAAAzIgEAAQgHgVgPgLQgOgLgRAAQgPAAgLAJQgMAKgEAQQgFAQABARQAAAVAEAPQAFAQAMAIQALAHAOAAIAKgBIAMgDIAAgfQAAgIgCgDQgBgCgDgCQgEgCgFAAIgEAAIAAgEIBHAAIAAAEQgIAAgDACQgDABgCAEQgBACAAAIIAAAfQgOAGgPADQgPADgRAAQgTAAgOgFg");
	this.shape_23.setTransform(168,49.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF3399").s().p("AglBJIAAgEIAFAAQAGAAAEgCQADgCABgEQABgCAAgLIAAhfQAAgLgBgDQgBgDgDgCQgEgCgGAAIgFAAIAAgEIBLAAIAAAEIgFAAQgGAAgEACQgDACgCADQgBADAAALIAABfQAAALABADQACADADACQAEACAGAAIAFAAIAAAEg");
	this.shape_24.setTransform(149.3,49.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF3399").s().p("AgrBFQgFgFAAgHQAAgHAEgDQAEgFAFAAQAFAAAEADQAEAEgBAIQAAADABABIADABQACAAADgDQAFgEAFgQIAEgIIghhKQgHgQgEgFQgDgEgFgBIAAgEIA0AAIAAAEQgEAAgCACQgDACABACQAAAFAFALIAQAoIAMgfQAHgPgBgHQAAgEgDgCQgCgCgHgBIAAgEIAiAAIAAAEQgFAAgDAEQgDADgHATIgdBKQgKAcgFAGQgIAJgLAAQgJAAgGgFg");
	this.shape_25.setTransform(134.05,54.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF3399").s().p("AgIBIQgHgDgGgGIgRALIgDAAIAAh/IgBgKIgDgFQgDgBgFAAIAAgEIAqAAIAAA3QALgNAPAAQALAAAJAGQAJAGAFALQAFAKAAAPQAAAQgGAOQgHANgLAHQgLAHgOAAQgHAAgGgCgAgLgJIAAAsIAAASQABAGAEAEQAEAEAGAAQAFAAAEgDQAEgDADgKQACgJAAgYQAAgWgFgJQgFgGgHAAQgIAAgIAKg");
	this.shape_26.setTransform(122.175,49.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3399").s().p("AAMA6QgHAKgGADQgFADgIAAQgTAAgMgRQgIgOgBgUQAAgQAGgMQAFgNALgHQAJgGALAAQAIAAAEADQAFACAHAHIAAgeQAAgLgBgDQgCgDgCgBQgCgCgHAAIAAgEIAsAAIAAByIAAAOQABAEADABQACACAHAAIAAAEIgrAIgAgNgSQgEADgDAIQgCAIAAARQAAATADAJQADAJAEAEQADACAEAAQAJAAAIgOIAAg0QgIgQgKAAQgEAAgDADg");
	this.shape_27.setTransform(104.85,49.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3399").s().p("AggAkQgJgOAAgUQAAgYANgPQAOgPASAAQAOAAAMAMQALANABAYIg2AAQABATAJAMQAHAJALAAQAGAAAFgEQAFgDAHgKIADADQgIAQgKAHQgKAHgNAAQgWAAgLgRgAgHgoQgFAKAAAQIAAAEIAcAAQgBgRgBgHQgCgGgEgDQgDgCgDAAQgFAAgEAFg");
	this.shape_28.setTransform(93.85,51.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF3399").s().p("AgKBAQgGgFgCgHQgCgEABgQIAAg1IgOAAIAAgEQAOgJAKgLQAJgKAGgNIAEAAIAAAkIAYAAIAAALIgYAAIAAA9IAAALIAEAEIADACQAHAAAHgLIADADQgJAUgTAAQgJAAgHgFg");
	this.shape_29.setTransform(85.2,50.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3399").s().p("AALAxQgFgFgBgIQgSAQgOAAQgJAAgGgFQgFgGAAgIQAAgMAKgJQAJgJAhgOIAAgKQAAgMgCgDQgBgDgCgCQgEgCgEgBQgHABgFADQgCACAAACQAAACADAEQAEAFAAAEQAAAFgEAEQgEADgGAAQgHAAgFgDQgEgEAAgGQAAgIAGgHQAGgHALgDQALgFALAAQAOABAIAGQAJAFACAIQACAEAAARIAAAlIAAAJIACADIACAAQADAAADgEIADADQgFAIgGAEQgGADgHAAQgJAAgEgDgAgOALQgEAGAAAGQAAAEAEAFQACACAFAAQAGABAGgHIAAggQgMAGgHAJg");
	this.shape_30.setTransform(76.275,51.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3399").s().p("AggAkQgJgOAAgUQAAgYAOgPQANgPARAAQAQAAALAMQALANABAYIg2AAQABATAKAMQAGAJALAAQAGAAAFgEQAGgDAFgKIAEADQgIAQgKAHQgKAHgNAAQgVAAgMgRgAgHgoQgFAKAAAQIAAAEIAcAAQAAgRgCgHQgCgGgEgDQgDgCgDAAQgFAAgEAFg");
	this.shape_31.setTransform(65.75,51.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF3399").s().p("AgqA0IAAgEQAGgBADgDQACgDAAgNIAAg2IgBgLQgBgDgCgCQgCgBgFgBIAAgEIApAAIAAAXQAJgPAHgGQAIgFAHAAQAGAAAEAEQADAEAAAGQAAAIgDAEQgEAEgFAAQgGAAgEgEIgFgEIgCgBQgDAAgDADQgEADgDAHQgCAKAAAMIAAAXIAAAGQAAAGABACQAAADADABQACACAGAAIAAAEg");
	this.shape_32.setTransform(56.475,51.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF3399").s().p("AgeBDQgSgKgKgRQgKgSAAgTQAAgUALgTQALgTASgKQATgKAUAAQAPAAARAGQAKAEADAAQADAAADgCQACgDABgFIAEAAIAAAyIgEAAQgFgUgNgKQgNgLgQAAQgOAAgKAIQgLAIgGANQgGAQAAAUQAAASAFARQAFAQAKAIQAKAIAQAAQAOAAAMgGQALgGANgPIAAANQgNANgNAFQgNAGgSAAQgWAAgSgJg");
	this.shape_33.setTransform(43.225,49.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(10));

	// text
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF3300").s().p("AhzBlQgSgWgJgZQgKgaAAgcQAAg3AngtQAwg2BBAAQBDAAAvA2QAnAtAAA4QAAA4glAsQguA2hGAAQhFAAgug2gAhChpQgbAqAAA9QAAA7AaAqQAdAwAoAAQASAAARgLQAQgKAMgTQANgUAIgdQAIgeAAgbQAAgcgIgdQgJgdgOgWQgbgngmAAQglAAgbApg");
	this.shape_34.setTransform(1008.025,221);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF3300").s().p("AhxDOQgKgHAAgMQAAgJAFgFQAHgGAKAAQAJAAAKAFIAPAGIAHABQAUAAAMghIALgbQAGgRAAgJQAAgNgMggIhEiuIgKgZQgJgWgEgKQgGgJgEgFQgJgGgLgCIAAgHIB/AAIAAAHQgNACgHAEQgMAIAAAQQAAAOAOAkIA1CVIAwh9QASgwAAgTQAAgQgJgJQgIgKgQgCIAAgHIBeAAIAAAHQgOAFgHAEQgGAFgHAJQgJAQgVA2IheD2QgRAsgKANQgSAWgbAAQgSAAgKgHg");
	this.shape_35.setTransform(977.05,227.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF3300").s().p("AAtCPQgKgJgLgTQgWAUgKAHQgWANgcAAQgkAAgVgTQgVgTAAgfQAAgdARgUQAKgLANgGQAMgHAZgGQAcgHAOgFQANgGAIgHQALgIAEgLQAEgKAAgUQAAgpgPgTQgGgIgJgGQgLgFgLAAQgNAAgLAHQgKAIgGANIgIAUQgGARgRAAQgLAAgIgJQgHgIAAgLQAAgTAXgMQANgGATgEQASgEASAAQAVAAAVAFQAWAHAPAIQAVANAFAVQADAKAAAZIAACBQAAAhACAMQAGAZAVAAQAKAAAGgEQAGgEAIgLIAFADQgMAlgqAAQgXAAgPgMgAgPAEQgXANgJAIQgJAGgIALQgPAUAAAbQAAAXALAPQANAPASAAQAQAAAOgKQANgLAHgSQAKgXAAgtIAAg6QgRAQgVALg");
	this.shape_36.setTransform(949.825,221);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3300").s().p("ABJDwIAAgIQAUgBAMgFQALgFAJgKQAKgLAEgSQADgRABgkIAAk4IioGnIgHAAIinmhIAAEyQAAAlADAQQAEASALALQAJAKALAFQALAFAUABIAAAIIiXAAIAAgIQASgBAMgFQALgFAJgKQALgLAEgSQADgRAAgkIAAkBIgBgfQgBgagHgMQgHgQgPgIQgOgIgXgCIAAgIICOAAICMF2ICTl2ICHAAIAAAIQgTACgLAFQgLAEgKAJQgIAIgDAJQgDAJgCAOQgCASAAAZIAAEBQAAAkAEASQAEARAKALQASATAhACIAAAIg");
	this.shape_37.setTransform(904.2,211.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3300").s().p("AgzCNQgdgNgTgdQgcgnAAg7QAAhNA0guQAnggAwAAQAaAAAWAKQAWAKAQATQAYAeAAArIi/AAIgBAZQAAAeAIAdQAIAeAPASQAOAVAWALQAVAKAYABQARAAAQgHQAQgGAKgLQAMgMAIgbIAHACQgIApgcAVQgcAVgvAAQgnAAgdgOgAgqh4QgVAZgEAoICMAAQgDgjgJgTQgJgRgPgKQgOgKgRAAQgbAAgVAag");
	this.shape_38.setTransform(842.225,221);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF3300").s().p("AjqDwIAAgIQATgBALgFQAMgFAJgKQAKgLAEgSQAEgRAAgkIAAkBQAAgngFgSQgEgSgNgLQgQgPgfgCIAAgIIC0AAQA7AAAQACQBFAFAwAlQAuAjAZA4QAaA5AABBQAAAwgOArQgPArgaAcQgkApg3ALQgoAHgqABgAheB4QAAAiAEASQADASAKANQAVAcAvAAQAnAAAdgOQAdgPAWggQAXgfALgoQAMgoAAgsQAAgxgOgtQgOgtgagiQglgugygQQgbgHgqAAIgoAAg");
	this.shape_39.setTransform(800.775,211.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhzBlQgSgWgJgZQgKgaAAgbQAAg5AngsQAwg2BBAAQBDAAAvA2QAnAtAAA4QAAA4glAsQguA2hGAAQhFAAgug2gAhChpQgbAqAAA8QAAA9AaAqQAdAvAoAAQASAAARgLQAQgKAMgTQANgTAIgeQAIgeAAgbQAAgcgIgeQgJgdgOgUQgbgogmAAQglAAgbApg");
	this.shape_40.setTransform(962.475,137.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhTBwQgkgpAAg/QgBgdALgfQAKgeARgWQAUgYAegNQAcgNAiAAQAvAAAbAXQARAOAAARQgBALgGAIQgIAHgJAAQgWAAgJghIgIgWQgDgFgFgEQgKgIgPAAQgTAAgQAMQgNAKgLAPQgJAPgIAXQgMAjAAAjQAAAeALAdQAKAfATAUQAbAfAlAAQAgAAAUgWQALgLAJgZIAHACQgMAmgXAQQgYARgpAAQhCAAglgrg");
	this.shape_41.setTransform(931.3,137.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWCYIAAgIQAUgCAIgFQAJgGAFgMQADgIACgQIABgvIAAhJQAAgmgCgSQgDgSgGgLQgIgMgOgHQgOgHgRAAQgRAAgQAIQgQAHgJAOQgKAOgDARQgDASAAApIAABEIAAAaQAAAYADALQACALAIAHQAJAJAZAFIAAAIIiRAAIAAgIQAUgCAIgFQAJgGAFgMQAEgIABgQQACgQAAgfIAAhVQAAgkgCgPQgCgOgFgJQgGgKgIgEQgIgFgOgBIAAgHIBZgNQAFAVAAASIAAAFQApgsA2AAQAqAAAaAVQAZAVAAAmIAACUQAAAYADALQACALAIAHQAJAJAZAFIAAAIg");
	this.shape_42.setTransform(899.925,137.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhHD1IAAgHQATgCAJgFQAIgGAFgMQAEgIACgRQABgPAAgfIAAhXQAAgjgCgPQgBgNgGgJQgFgKgIgFQgIgEgPgBIAAgIIBdgMIAADJIABAbQAAAXACAMQADALAIAHQAJAJAYAFIAAAHgAgVi/QgIgKAAgNQAAgNAIgIQAJgKAMABQAMgBAJAKQAIAIAAANQAAANgIAKQgJAIgMAAQgNAAgIgIg");
	this.shape_43.setTransform(874.275,127.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag6DtQhBgXgmg8Qglg9AAhUQAAg/AWg2QAVg3AnggQAegaAqgPQApgPAoABQAogBAsARIAbAJQAIADAFAAQAJAAAFgHQACgEADgIIAIAAIAECdIgHAAIgFgPQgMgigHgQQgNgegYgYQgTgTgTgJQgUgIgYAAQglAAgaARQgYAQgVAcQgUAcgNAkQgUAyABBBQgBA3ANAsQANAsAYAeQAuA4BKgBQAkABAegOQAegOAQgaQAUgdAIgxIAHABQgFA4gXAgQgVAfgkARQglARgxAAQgrAAgqgPg");
	this.shape_44.setTransform(844.25,128.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("Ah8CVIAAgHIC1kZIhHAAQgaAAgOAGQgPAFgKANQgLANgKAcIgFgBIAGhJIDaAAIAAAHIi2EYIAsAAQAlAAAYgDQAZgEANgJQAagPANgoIAHAAIgHBRg");
	this.shape_45.setTransform(950.05,54);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AhHD2IAAgIQATgDAJgEQAIgGAFgMQAEgIACgRQABgQAAgeIAAhXQAAgjgCgPQgBgNgGgKQgFgJgIgEQgIgFgPgBIAAgIIBdgMIAADJIABAbQAAAYACAKQADALAIAIQAJAJAYAFIAAAIgAgVi/QgIgKAAgNQAAgNAIgJQAJgJAMAAQAMAAAJAJQAIAJAAANQAAANgIAKQgJAIgMAAQgNAAgIgIg");
	this.shape_46.setTransform(928.525,44.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AhHD3IAAgIQATgDAJgEQAIgGAFgMQAEgIACgRQABgQAAgeIAAkTQAAgjgCgPQgBgOgGgKQgFgKgIgDQgIgFgPgBIAAgIIBdgMIAAGGIABAaQAAAYACALQADALAIAIQAJAJAYAFIAAAIg");
	this.shape_47.setTransform(912.325,44.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AgzCNQgdgNgTgdQgcgnAAg7QAAhNA0guQAnggAwAAQAaAAAWAKQAWAKAQATQAYAeAAArIi/AAIgBAZQAAAeAIAdQAIAeAPASQAOAVAWALQAVAKAYABQARAAAQgHQAQgGAKgLQAMgMAIgbIAHACQgIApgcAVQgcAVgvAAQgnAAgdgOgAgqh4QgVAZgEAoICMAAQgDgjgJgTQgJgRgPgKQgOgKgRAAQgbAAgVAag");
	this.shape_48.setTransform(888.825,54.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AivDwIAAgIQAQAAAOgGQAOgGAIgJQAJgKAEgUQAEgSAAgiIAAkBQAAgXgCgYQgEgegYgQQgOgIgZgCIAAgIIFVAAIAKByIgIACQgIgagHgNQgPgfgcgRQgQgKgVgEQgVgDglAAIgxAAIAADPIANAAQA5AAAagcQALgMAGgRQAGgQACgaIAIABIgCDTIgIAAQgEgkgIgTQgJgUgSgMQgNgHgTgFQgSgDgeAAIAACKQAAAkADARQAEARAKALQAJALALAFQAMAFASABIAAAIg");
	this.shape_49.setTransform(856.675,44.95);

	this.text = new cjs.Text("Feliz \nCinco \nDe Mayo", "94px 'Baskerville Old Face'", "#009900");
	this.text.textAlign = "center";
	this.text.lineHeight = 109;
	this.text.lineWidth = 364;
	this.text.parent = this;
	this.text.setTransform(900.5188,5.6,0.713,0.7643);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.text}]},20).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(20).to({_off:false},0).wait(1).to({x:856.9077,y:33.8222},0).wait(1).to({x:813.2966,y:62.0444},0).wait(1).to({x:769.6855,y:90.2667},0).wait(1).to({x:726.0743,y:118.4889},0).wait(1).to({x:682.4632,y:146.7111},0).wait(1).to({x:638.8521,y:174.9333},0).wait(1).to({x:595.241,y:203.1556},0).wait(1).to({x:551.6299,y:231.3778},0).wait(1).to({x:508.0188,y:259.6},0).wait(1));

	// Layer_2
	this.sign = new lib.sign("synched",0);
	this.sign.name = "sign";
	this.sign.setTransform(500.25,219.6,1,1,0,0,0,274.6,219.6);

	this.timeline.addTween(cjs.Tween.get(this.sign).wait(30));

	// pinata
	this.pinata = new lib.pinata();
	this.pinata.name = "pinata";
	this.pinata.setTransform(493.8,387.25,1,1,0,0,0,-270.2,147.9);
	this.pinata._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pinata).wait(10).to({_off:false},0).wait(1).to({regX:-270.3,x:493.7,y:330},0).wait(1).to({y:272.8},0).wait(1).to({y:215.55},0).wait(1).to({y:158.35},0).wait(1).to({y:101.15},0).wait(1).to({y:43.95},0).wait(1).to({y:-13.3},0).wait(1).to({y:-70.5},0).wait(1).to({y:-127.75},0).to({_off:true},1).wait(10));

	// Button
	this.btn = new lib.Symbol2();
	this.btn.name = "btn";
	this.btn.setTransform(1016.5,404.4,1,1,0,0,0,663.9,195);

	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(-189.8,404.4,1,1,0,0,0,159.2,195);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn}]}).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn}]},1).to({state:[{t:this.btn1}]},1).to({state:[{t:this.next_btn}]},11).to({state:[{t:this.next_btn}]},1).to({state:[{t:this.next_btn}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1).to({regX:533.2,x:788.1,y:399.15},0).wait(1).to({x:690.45,y:393.9},0).wait(1).to({x:592.8,y:388.7},0).wait(1).to({x:495.15,y:383.45},0).wait(1).to({x:397.5,y:378.2},0).wait(1).to({x:299.85,y:373},0).wait(1).to({x:202.2,y:367.75},0).wait(1).to({x:104.5,y:362.55},0).to({_off:true},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(82.4,139.4,1337.1,629.6);
// library properties:
lib.properties = {
	id: '07A6C150D8B3499EAD30A43E4070AC68',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#666666",
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
an.compositions['07A6C150D8B3499EAD30A43E4070AC68'] = {
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