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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("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");
	this.shape.setTransform(-3.3,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgnFAnOQnXgPnWgSQg/gCAGg9IAAgBQgfghABg4QACnigcnkQgGhoAUhgQiiieBNjcQBQjoDWiNQDFiBClBbQATjZAPjYIAJiYQAgohAFokQABiOAMiLIACgOQANiVAaiQQi6hlCQi6QAwg9BLgTQHEh0HVgVQUfg9UbgzQNqAANpAQQFBAHE0BYQCgAugUCoQgRCOhmAkQAUBLgKBgQgMB1gGB2QgFBmAABnQABKcAJKbIAGF4QGRAOA7GYQAmEEiMC1QgbAigmAbIgQALQAZBIgaBkQgTBKgEBOQgUF9gjF4QATAPgCAhQgCBChEABQozADoyAPIgVAAQ6bAD6ZAKQhqABhqAIQmLAfmKAAQiXAAiYgEgEgm7Ak3QIyAQIyguQBUgHBUgBQaUgJaVgDQCoAACYgJQF4AAF3ANQgEgcADghQAWkZALkaQAHi6AkixQknCBlOh2QmKE+oShUQjUgii5hoQl5Bwl9BrQhqAdhugEQlggQlIhzQhdghhNhAQgfgbgnASQoVD0o0iSQh6gghfhNQmpEZm6kOQhkg8g4hjQkWBtjkhvIAAAWIgKQZIDRgBQFVAAFUAKgAkbVMQBWBcCBAYQJ+BzJcj4QDphfDqB2QBMAmBYANQF3A6EujBQBXg3BigTQBkgUBlAVQFQBHESjaQAKh9gCh/QgDjqjGhXQg0gXg2gPQgSBfhGA8QgfAagOgVIgSAGQriEDsQBJQr+BHsFgNQtxgPtwg7QpEgnnwjsQgIASgYgUQhFg8gGhiQheAqh3gEQgQAAgWAKQk4CVBAE2QAIAlAgAZQEJDOFFiVQAdgNAVAeQEKFyHMiNQA0gQArgjQCniHB1CWQAPAVAhAKQIsCvIkjmQA2gWAvAAQBWAABFBIgEgpiAJIQEuB2FFAiQLTBNLYAgQEKALEKAGIAZAAQMGACMGgcQB3gEB3gYQJEh1Iui+QA+gVA7gPQgSifADikIADjOQAKsBgVsDIAAgWQgEiYAWiMIgPAEQiKAjiDgxQiJDJkCgyQikgfiBhuQlOEAmWizQg8gbgwgtQjqDUkYh3QhYgmhRguQjZEClAiBQhkgphVhBQjHEVlNiOQhqgthRhVQkSD2lLjHQgogYgngZQj3DzlDi8IgigVQj3DajtiZQALA/gGBNIgCAjIgCAOQghGhgBGgQgBERgUEMIgNCYQgeFEg7E8QAogPArAAQA2AAA8AXgAt9/pQCKBrCrApQDJAwBhi9QAcg1A5AbQBlAwBkA6QDVB+Cci3QAqgxA7gPQBlgZBUBDQDUCoDNiiQCZh5CmCLQApAiA2ARQAJANARgGQD8A/DEigQB0hgB7BzQBIBEBhARQBnATBJg4QBBgzA3g6QAggiAuAVQC8BVCGh6IAHgWQAFgOARgBIAEADQAMgOALgQQAGgHAHgDIACgDQAOgWgFgcIgEgDQjGg7jNgVIgEgCIgEABQhlgKhngBUgjUgAXgjFAB5QmoAXmFCTIgBAFIAAAEIAAAKIAAAFIAAAFIACACQBWAcAMAwQCtDQDajpQAogqA2AJQBLALAzBCQAQAVAeAJQDuBMCQi/QAOgTAaAMIDrBrQDrBrCmi9QAUgXAYAAQAUAAAWARg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(5.3,-44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEdlQiAgYhXhcQhqhwiVA+QokDmosivQghgKgQgVQh1iWimCHQgsAjgzAQQnMCNkLlyQgVgegcANQlGCVkJjOQgfgZgIglQhAk2E4iVQAVgKAQAAQB3AEBegqQAGBiBGA8QAYAUAHgSQHwDsJFAnQNwA7NwAPQMFANL/hHQMPhJLjkDIASgGQAOAVAegaQBHg8AShfQA2APA0AXQDFBXAEDqQACB/gLB9QkSDalQhHQhkgVhlAUQhhAThXA3QkuDBl3g6QhZgNhMgmQjqh2jpBfQmcCqmsAAQjIAAjKglgAIec6QADAoAlgTQBCghhGgfQgnAEADAngEglWAbZQADApAmgTQBBgihGgfQgnAFADAmgA3ga5QADApAlgTQBCgihGgfQgnAFADAmgAf8azQADApAlgTQBCgihGgfQgnAEADAngAPZamQADApAlgTQBCgihGgfQgnAFADAmgAgjZ5QADApAlgTQBCgihGgfQgmAFACAmgEAgPAY5QADApAlgTQBCgihGgfQgnAFADAmgAv/Y5QADApAmgTQBBgihGgfQgnAEADAngAUnYzQACAoAmgTQBCgihGgfQgnAFADAngEAmjAYsQADApAmgTQBCgihGgfQgnAFACAmgADDYfQADApAmgTQBCgihGgfQgnAFACAmgAKlYSQADApAlgTQBCgihGgfQgnAFADAmgAaBX5QADApAlgUQBCghhGgfQgnAEADAngEAx1AXmQADApAlgUQBCghhGgfQgnAEADAngEgy/AXZQADApAmgUQBCghhGgfQgnAEACAngEgjPAXZQADAoAlgTQBCghhGgfQgnAEADAngA36WfQADApAmgTQBBgihGgfQgnAEADAngEgs3AV4QADApAlgTQBCgihGgfQgnAFADAmgAfVVsQADAoAmgTQBBgihGgfQgnAFADAngEAz7AVfQADApAmgTQBCgihGgfQgnAFACAmgEApkAVfQADApAlgUQBCghhGgfQgnAEADAngEAuLAVYQADApAlgTQBCgihGgfQgnAFADAmgEAtRAS+QADApAmgTQBCgihGgfQgnAFACAmgEA0cAS4QADApAlgTQBCgihGgfQgnAFADAmgEgz4ASLQADApAlgTQBCgihGgfQgnAFADAmgEgveARlQADAoAlgTQBCgihGgfQgnAFADAngEAxIAPYQADAoAlgTQBCgihGgfQgnAFADAngApI2wQirgpiKhrQgwglgmArQimC9jqhrIjshrQgZgMgPATQiQC/jthMQgegJgQgVQgzhChMgLQg2gJgnAqQjbDpitjQQgLgwhWgcIgDgCIAAgFIAAgFIAAgKIABgEIABgFQGEiTGpgXUAjFgB5AjTAAXQBnABBmAKQgrAKAOAsQAJAdAbgOQBDgjhDghQDNAVDHA7IAEADQAFAcgOAWIgCADQgIADgFAHQgMAQgMAOIgDgDQgSABgEAOIgHAWQiHB6i7hVQgugVggAiQg4A6hAAzQhKA4hngTQhhgRhIhEQh6hzh1BgQjECgj7g/IAFgDQBFgkhJghQgvAIAPAuQACAGADAFQg3gRgogiQiniLiZB5QjMCijUioQhVhDhkAZQg8APgpAxQicC3jWh+Qhjg6hmgwQg5gbgbA1QhOCXiPAAQglAAgpgKgADR3wQAKAdAagOQBFgkhIghQgwAJAPAtgAmb4RQAJAdAbgOQBFgkhJghQgvAJAPAtgAz14hQAJAdAbgOQBFgkhIghQgwAIAPAugEAlRgYxQAJAdAbgOQBFgkhJgiQgvAJAPAugEgg7gY2QAKAdAagOQBGgkhJghQgvAJAOAtgA8o47QAKAdAagOQBGgkhJghQgvAIAOAugAO85CQAKAdAagOQBFgkhIghQgwAJAPAtgEgpEgZvQAKAdAagOQBFgkhIghQgwAIAPAugEAjmgZ/QAJAdAbgOQBFgkhIgiQgwAJAPAugAAx5/QAKAdAagOQBFgkhIgiQgwAJAPAugA2i69QAKAdAagOQBGgkhJghQgvAIAOAugA/Q7rQAKAdAagOQBFgkhIgiQgwAJAPAugAqa7wQAKAeAagOQBFglhIghQgwAJAPAtgEAvmgbyQAJAdAagOQBGgkhJghQgvAIAPAugAUd7yQAKAdAagOQBFgkhIghQgvAIAOAugAab7/QAJAdAbgNQBFglhIghQgwAJAPAtgAfT8DQAJAdAbgOQBFgkhIghQgwAJAPAtgADi8DQAJAdAbgOQBFgkhJghQgvAJAPAtgAIu8gQAKAeAagOQBFgkhIgiQgwAJAPAtg");
	this.shape_3.setTransform(0,-42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-365.2,-251.4,730.4,502.9), null);


(lib.Present = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF0000").s().p("EAgMAkyQgNgMgOgQQgQgUgBgeQgcqRgtqPQguqLAPqVQALoJhRn2QgHgugYgpIgJgPQg8hbBNgqIASgIIANgEQBWBPA1BhQAYAqARAvQA5CggXDIQgTCkgBCjIAAArQgBFwAPFrQALERAVEPQAyKLAVKVQAECagGCdQgFBtgpAAQgWAAgfgegATmxNQnajsmUlNQgrgjgrgiIhMg4IgDgDQgWgTAKgeQAIgYAPgNQASgQAcgBQDyBaDBC5QBiBfB2BDQCuBjCzBaQAZAMAVAPQAvgaA3gNQAsgKAYgoQB8jKg9j2QgmiWgjiXQgdh9AZh8QAJguAvgCQAbAPAUAVQA1A2AKBeQAdD8ArD6QA4FDjiC6QgsAlg4AgIgaANQgoASgjAAQgMADgNAAQgfAAgfgQgA+CzPQhsgfhJhNIgDgDIgCgCIgMgNQg7hFAYggQATgaBFgDQAYgBAXAPQDFB+D7ABQFsACERj4QCgiRC6hdQAnAGAXALQBRAjheBTQgOANgTANQiuB+itCFQktDmliAAQioAAizgzg");
	this.shape.setTransform(335.3,297.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(318.1,280.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("EAZSAq3QgRoQAAoQQAAoRALoRQALoWg8oHQgPiBARiBQAHgxgFgpQDNAGB5izQBoibAXi6QAYApAHAuQBRH2gLIJQgPKVAuKLQAtKPAcKRQABAeAQAUQAOAQANAMQgrAfgqAcQhzBMh9A7QgsAUgpAYQh8BGh/A9QAMhKgChOgEgeZAnVQgZgRgVgVQh8h5iZhDQBCiFAWigQBbqDA3qMQA4qMA7qIQALh6Abh0QAUhWgVg+QBNAkBfATQGLBQFShmIjmBtQgSAFgTAEIAAAKQgpAbAWAxIAJAQQhEESAoEoQANBggVBeQhdGdg4GtIhAHbQhWKChuJ+IgDAVQiBg1hyhOgEAjNgHDIADApQAIB+gFB/QgBAhALAZQgDC9ABC+QgPlrABlwgAZzuzQA4ggAsglIgGAHQg3A6hBARIAagNgAXJxPQizhaiuhjQh2hDhihfQjBi5jyhaQgcABgSAQQAOgmAHgqQAUh3gKh4QgEgtgQgiIAtguQBwh3BdiRQAcgtAbgvQAcgxAggrQDhk1GLAUQCIBvBDCZQAvBqAlBrQApB3AfB6QgVgVgagPQgvACgJAuQgZB8AdB9QAjCXAmCWQA9D2h8DKQgZAogrAKQg3ANgvAaQgWgPgYgMgALDyNQk1h5kxiIIgKACIgHgCQiBAlh/A5QjVBfjSBmQCChZB4h7QAxgzAwgsQA3g0AWg1QDPBzEEhoIAZgLQAeBJBVAvQDpCEDICyIAGAFQhRgahPgfgA1TyWQj8gBjEh+QgXgPgYABQhGADgSAaIgOgtQhGjzgBjyQgBh8ASh8QAkkFB2kEQAkhRBMgkQCfhKC3AlQAhAHAUAZQBiB9BwBqQEeEPF4CTQA/AYAyABIgGAPQhZDgCRCZQgYgKgmgHQi6BdigCRQkPD2loAAIgGAAgEAiWgT2IASAQQAOALAPAGIgHA4QgRgugXgrgAfs28IASAaIgSAIIAAgigAGf5QIAFgKIADADIBMA4QgqgZgqgYgAhU6MQghgPgegEQD6heB3jrQAMgYAFgVQADgQgCgOQAPAMARAIQALAGAMAEQA1CthRCvIgJAXQgiAQgkAOQg/AZg/AAQhIAAhKghgAjd+9QASghAdgWQAWgQANgYIAIgRIBdgCQBEgCBHgFQgOAagRAZQhgCPiuBDQghAMgQAWQgahNA2hhgEgKWgkHQiIhChhhsQEPCGEEChQiVgwiVhJgEAdsgk0IAUAGIAOAFQASAIATAGQA4AUAlAwIgGAIIgnARQgvAUgaAaQgUhTgahRg");
	this.shape_2.setTransform(314.4,280.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgE0AupQiPhhishAQqKj2ozmHIBElIQCEp7ApqNQAPj4BHjpQBNj4AQkEQFmCRFoCNQC6BICpBmQBYA1BJgQQhFJ+AHKUQAJMvADMsIAAAKQgjgSgpgLgEgAbAjzQgCstAAsuQAAjOAXjMQAQiNg+hVQELgvEJhzQFQiSFPiWQAKENgCEPQgCIRAAIQIgBQiQAAB3gHB2QnWD+ntDRQhkAqhjAiIgYAJQAKlgAAlvgEAhqAPGQgWoNgKoPQgDiGANiEQAKhlgjhFQgIipgEirQH+jtH+jzQgLHXAGHkQAKMsgTMuQgBA+ARAvQg4ATg2AeQmeDhmXDsQgNm/gTm9gEgxMAVLQAqiJgDicQgVswgPsrQgEjOAYjMQAGg5gGgwQCYBYCyAvQDOA3DKBKQgfHbgjHZQgyKPhnKDQgTB5gkBzQkEiIjjivgAhlkBQgVikAMiiQAIhngahPQDbgnDMhbQCwhPC2hIIFziVIAcAIQAdAIAXAAQAHB4AKB5QALCRAJCSQl5Cnl7CfQjTBYjcAwQgdAGgZAJQAEgqgFgtgAqWlmQl5iEl2iMQgEh7gRh9QgIg8ASg2QAZhJgMg3IAXgLQIZC6IXC0QgmEPAbEiIABAEQidhfizg/gAjuvEQnGiDm9icQCThGCVhEQEwiLE2h8IANgHIAQAJQEuCKE4B2QCaA6CcAzQlKB9lECCQhlAphrATQghAGgZAPQgUgIgYgHgEgyogVcQAXjIATjJIABgSQB0AzB6AtQFKB6FKB4IALAIIAAABQg6DXgZDiQm8i0mpi9gEAgwgXVQAAghADgcQAFgsgHglIAygUQIfjkISj9IAVgLQghDsAAD5QAAAnAJAfQozD7oyEEQgBjNAFjPgEgw7getQFAhTE7hpQgCCnATCqQAEAjAHAhQlJhzlOhmgAbI/1IgGAAQgKjKgkjCQAygPAwgYQJLBvJRBaQiXBEiUBKQlPColVCcQh4iAiDhogEgAugpRQi5gWi6AAQgiAHgdANQglgogwgeQhSg1hUgwQDmhNDohGQBPgYAqgcQC5BKC/BDQg2BghEBTQgmAugPAtQgsghg3gGg");
	this.shape_3.setTransform(344,320.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("EgDGAylIgHAAQhTgHhPhAIgXgTQg+gIhGgqQhCgnhEgkQh0g9h5gxQoajdndlCIACgJIArjSQI0GHKJD2QCsBACPBhQApALAkASIgBgKQgDssgJsvQgHqUBFp+QhJAQhYg1Qiphmi6hIQloiNlliRQAGhpgDhrQF2CMF4CEQCzA/CdBfIgBgEQgbkiAnkPQoXizoai7ID7h4QG9CcHGCDQAYAHAUAIQAZgPAhgGQBrgTBmgpQFDiCFLh9QCUAxCWApIl0CVQi2BIiwBPQjMBbjbAnQAaBPgIBnQgMCiAVCkQAFAtgEAqQAZgJAdgGQDdgwDShYQF7ifF5imQAGBsAEBsQlPCWlQCSQkIBzkLAwQA+BUgQCNQgYDMAADOQAAMuACMtQAAFvgKFgIAYgJQBjgiBkgqQHtjRHWj+IgCAcQgGBnBOAvIAFADQmRDbmeDBIgJAEQjdBmjgBLQgHARgZAIQgpAOgoAAIgNgBgEAhzAe/IgEiiQGYjsGdjhQA2geA4gTQgRgvABg+QATsugKssQgFnkALnXQn+Dzn/DtQgChtgBhuQIykEIzj7QgJgfAAgnQABj5AgjsIgVALQoSD9ofDkIgxAUQgIgmgTgeQgIgSgUgWIg4g+QFVicFQioQCThKCXhEQpQhapLhvQAggPAfgTQBlg+gVg3IAAgBQACgQAAgPQJvBsJ3BVQCDARAsBkQB7BfggDOQgeDEgGDCQCqBZi4BYIhnAyQAZBEgFBdQgLDJADDLQANMtAEMtQACE1gaElQBGBCiSBLQoSEToFEvQAOgbgBgmgEgy+AWgIgHgDQh8hFAKilQAbmXgJmZQgRsrAlsuIACgQIgZgWQgogkAKgnQhAgvgDhZQgHkwBKkMQALgmApAAQAlAXAaAeQAHiGCugxQEuhXElhxQgOB2gBB3Qk8BplABTQFOBmFJBzQAnC6CDBtQlLh4lJh6Qh6gth1gzIgBASQgTDJgXDIQGpC+G8CzQgJBPgFBRIgCAbQjJhKjPg3QiygviYhYQAHAwgHA5QgYDMAEDOQAPMrAVMwQAECcgqCJQDiCwEFCHQgNAogOAnQgiBfAdBKQk/iojgkNgA4ezwQATgDASgFIgYALIgNAIIAAgLgEgP7guoICmg3QFAhoE9heIAFAEQAMgEANAAQD8BHD8BOQg9BOgzBdIgFAIQi+hDi6hKQgqAchOAYQjpBGjmBNQiAhIiFg9g");
	this.shape_4.setTransform(346.6,323.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Present, new cjs.Rectangle(0,-25,693.3,672.6), null);


(lib.CandleUnlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AARDZQgfgKgfgNQgJgEgEgGQgGgJAFgNIABgDQAGgNAPAAQAwAOArAYQAEACABAFQABAegYAAQgIAAgLgEgAAIBdQgNgHgQgBQgqgEANgkQAEgJAJgCIAHgCQAygBAhAhIADAEIABAIIgBABQgIAWgSAAQgJAAgNgGgAAIggIgzgeIgGgFQgEgFAAgHQABgKAFgHQAGgIANgBQAtAMAiAgQAEADAAAEIAAAFIgBADQgIAUgRAAQgJAAgMgGgAAVicQgPgFgPgDQgqgGAOgkQAFgNAOgBQAoAGAjAVQAFADAAAHQgBAegXAAQgIAAgJgDg");
	this.shape.setTransform(6.1,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjG4QgIgUAAgWIgEi0QgQguABg1IACg1QAEAGAJAEQAfANAfALQArANgBgnQgBgFgEgCQgrgZgwgOQgPABgGAMQAEhwAFhxIAGAEIAzAeQAhASANggIABgCQgCA6ADA7IgDgEQghgggyABIgHABQgJADgEAJQgNAkAqADQAQACANAGQAkASAMgiIABgBIADAqQAGBDgLA6QABCigGCfQAAAMgKAGQgTALgPAAQgZAAgOgkgAAxiyQgigggtgNQgNACgGAHQAGh0AJhzQACgbAagDQAAAWABAXQABALAJACQAXAHAKgKQAgA9gKBaQgFAxgCAwQAAgDgEgDgAgnlEQgOAkAqAHQAPACAPAFQAoANABgoQAAgGgFgEQgjgUgogGQgOAAgFANg");
	this.shape_1.setTransform(6.3,57.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPBLQgJgCgBgLQgCgXABgWQAAgqAJgqQABgHAIgCIAHgBQAiAPgHAtQgEAaADAcQACAZgJAKQgGAGgLAAQgGAAgKgDg");
	this.shape_2.setTransform(8.3,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,12.7,104.7);


(lib.Candle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fire
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgKBjIgCAAQgMgBgJgJQgQgPAAgXQgBgQAEgPQAGgXAJgXQAIgTAFgTQABgGAAgHQgCgMAIgJQACgCADAAQAKAFADANQADAKABAKQAGAoAVAiQAFAJADAKQAIAbgIAaQgCAGgGADQgQAIgRAAQgHAAgIgCg");
	this.shape.setTransform(6.5,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgUCzQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgvgKgTguQgdhEA1g0QAdgcANgoQAOgrgNgtQgDgLADgLQABgGAGAAQAyAUALA3QAKAxgHAxQgFAiAWAcQArA3gOBBQgBAFgGACQgcAHgdAAQgaAAgagGgAAAgxQgHAIABAMQABAHgCAHQgFASgHASQgKAXgGAYQgDAQAAAQQABAWAPAQQAJAJAMABIACAAQAZAFAXgMQAGgDACgGQAJgagIgbQgDgJgGgJQgVgjgFgoQgBgKgDgKQgEgNgLgEQgDAAgBACg");
	this.shape_1.setTransform(5.3,-13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAEBoQgtgHgGgrQgFgnAagfQALgOAFgRIANg6QABgCADgBIACAAQAOAHgCATQgEAvATAoQAQAigFAlQgCATgPAKQgGAEgHAAQgGAAgHgFg");
	this.shape_2.setTransform(5.5,-8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AABC+IgHgDQgugQgbgoIgFgJQgQgcAIgfQAKgoAcgdQAagdAPgkQAJgUgFgWQgIgjAIghQADgMAKAAQAfgGAJAbQAKAeACAeQACAygFAwQgEAbARAXIAIANQAfAzgOA4QgEAOgNAEQgTAFgRAHQgIAJgLAAQgIAAgKgFgAALgyIgNA5QgFARgLAOQgaAgAFAnQAGArAtAHQANAJANgIQAPgKACgTQAFglgQgiQgTgpAEguQACgTgOgHIgCAAQgDABgBACg");
	this.shape_3.setTransform(4.7,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ag7BBQgCgDAAgEQgEgmAhgUQAKgHAFgLQAMgdAAggQAAgGADgFQAEgHAIgBQAZABgKAYQgDAKABAKQACAfAUAYQAfApgYAsQgIAOgQgDIgEAAQgKABgJAAQgoAAgYgig");
	this.shape_4.setTransform(4.5,-8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhOCQQgRgZgBgfQgChEAtgwQAYgagEglQgHgzAiglQAFgFAGgDQAMgDANgBQAPgEANAHQAHAEgBAIQgCAQgQAFIgDACQgSAcAQAdQAeA2gIA+QgBAJAGAIQArAygUA+QgDAGgEAGQgPAWgbABQgCAHgHABQgMABgLAAQg4AAgggxgAgLgqQgDAFAAAGQAAAfgNAdQgFALgKAHQggAVADAmQABAEACADQAdAqA2gJIAEAAQAQADAHgOQAYgsgfgpQgTgZgDgeQgBgKAEgKQAKgYgZgBQgIABgEAHg");
	this.shape_5.setTransform(5.5,-13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgaBdQgSgLgJgSQgBgCAAgEQADgUAOgPQAggjgEgxQgBgRAFgRQABgFAEgCIAEAAQAPgEAMAHQAHAFACAIQAHAfgNAbQgOAcARAZIANAWQANAagYASQgRANgRAAQgPAAgQgLg");
	this.shape_6.setTransform(5.1,-8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAEDIIgjgCQgngCgbgYQgGgGgBgIQgJg8AEg9QACgmAWggQASgZgCggQgBgQAFgQQAGgVAMgTQARgbAhgHIAWgDQAtgEAkAXQACACACADQAGAOgPACIgfAEIgJACQglAMADAnQADAfARAbQAGAIADAKQALAkABAnQAAAMAFALQAXAygdAwQgSAfgjAAIgKgBgAgUg3IgEABQgFACgBAFQgFAQABASQAEAvggAkQgOAQgDATQAAAEABADQAJARASAMQAiAWAfgYQAYgSgNgaIgNgWQgQgZANgdQANgbgHgeQgCgJgHgEQgHgFgKAAIgJABg");
	this.shape_7.setTransform(7.6,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AghBjIgFgFQgXgYAHgfQAFgTALgRQAOgVgGgaQgEgVAAgVQAAgSASgFQAegDAHAeIAJAeQASA4AIA8QABAJgEAIQgKATgVAHQgKADgLAAQgRAAgRgLg");
	this.shape_8.setTransform(7.9,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgaDKQgbgPgdgMQgfgNgFgiQgHgoALglQAMgnANglQAFgNAAgOQABgdAEgcQAHgxAjgiQAHgHALgDQANgDAMAAQAqgHAkAVQAbAPAHAeQAIAdgKAbQgBADgDABQgWAHgIgWQgLgegfABQgRASAEAbQAFAgARAeQAKASAJASQATAuAGAxQADAagPAUQgaAhgpAJQgJALgMAAQgJAAgKgFgAgRg6QgSAFAAASQAAAVAEAUQAGAagPAWQgLARgEATQgHAfAWAYIAGAFQAZARAegJQAVgHAJgTQAEgIgBgJQgHg8gTg4IgIgeQgHgbgaAAIgEAAg");
	this.shape_9.setTransform(8.1,-13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgxBJQgMgsAigdQAHgFABgKQABggAGgeIADgPQAGgUATgBQAXAAgIATIgCAHQgMA6AgAyQACAEABAFQAJA2gvAcQgFACgGAAQgpgCgLgng");
	this.shape_10.setTransform(6.7,-8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AghDeQgMgFgMgGQg1gfAAg+QABg6AVg1QAGgQARgJQABgSgCgSQgGgkAHgjQAIgxAogdQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQAfgBAYgSIAAgBIABAAIA3AAIABAAQAZAggfAaQgbAWgPAeQgHANABAPQADA1AbAtQAVAlAFAqQAEAugHAtQgBAHgGAFQgMAMgSAEQgUADgTAHQgHADgHgCQgJAEgLAAQgKAAgLgDgAgJgcIgEAPQgFAegCAfQAAAKgHAGQgjAeAMArQALAnApADQAHAAAFgDQAvgcgJg2QgBgFgDgDQgggzANg6IACgGQAIgUgXAAQgUABgFAUg");
	this.shape_11.setTransform(6.8,-15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("Ag4BuQgLgaAXgSQAcgWgHglIgHgkQgFgcgBgcQgBgZANgVQAHgMAMgDQAYACgKAZIgCAKQgKBAAoAwQAqA1ggA7QgHAOgLALQgJAJgLgDIgNABQgmAAgOglg");
	this.shape_12.setTransform(6.4,-11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgJEHIgPgEQglgHgigQIgFgDQgegdAIgoQANg+Abg6QADgHABgIQABgvAEgvQAGg6AmgtQAGgHADgKQAKgcADgeQACgQAOgDQAlgHARAdQAgA4gSA9IgGAPQgRAkADAqIADAfQAGAtAeAjQAJALAGAOQAUA1gKA3QgDAOgJAMQgOARgWABQgWACgWgBIgDAAQgJAGgMAAQgGAAgIgCgAgVg6QgNAVABAZQABAcAFAbIAHAmQAHAkgcAXQgXARALAaQARAsAwgIQALAEAJgKQALgLAHgNQAgg8gqg0QgogxAKg/IACgLQAKgZgYgBQgMADgHALg");
	this.shape_13.setTransform(6.1,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AARDZQgfgKgfgNQgJgEgEgGQgGgJAFgNIABgDQAGgNAPAAQAwAOArAYQAEACABAFQABAegYAAQgIAAgLgEgAAIBdQgNgHgQgBQgqgEANgkQAEgJAJgCIAHgCQAygBAhAhIADAEIABAIIgBABQgIAWgSAAQgJAAgNgGgAAIggIgzgeIgGgFQgEgFAAgHQABgKAFgHQAGgIANgBQAtAMAiAgQAEADAAAEIAAAFIgBADQgIAUgRAAQgJAAgMgGgAAVicQgPgFgPgDQgqgGAOgkQAFgNAOgBQAoAGAjAVQAFADAAAHQgBAegXAAQgIAAgJgDg");
	this.shape_14.setTransform(6.1,45.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjG4QgIgUAAgWIgEi0QgQguABg1IACg1QAEAGAJAEQAfANAfALQArANgBgnQgBgFgEgCQgrgZgwgOQgPABgGAMQAEhwAFhxIAGAEIAzAeQAhASANggIABgCQgCA6ADA7IgDgEQghgggyABIgHABQgJADgEAJQgNAkAqADQAQACANAGQAkASAMgiIABgBIADAqQAGBDgLA6QABCigGCfQAAAMgKAGQgTALgPAAQgZAAgOgkgAAxiyQgigggtgNQgNACgGAHQAGh0AJhzQACgbAagDQAAAWABAXQABALAJACQAXAHAKgKQAgA9gKBaQgFAxgCAwQAAgDgEgDgAgnlEQgOAkAqAHQAPACAPAFQAoANABgoQAAgGgFgEQgjgUgogGQgOAAgFANg");
	this.shape_15.setTransform(6.3,57.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPBLQgJgCgBgLQgCgXABgWQAAgqAJgqQABgHAIgCIAHgBQAiAPgHAtQgEAaADAcQACAZgJAKQgGAGgLAAQgGAAgKgDg");
	this.shape_16.setTransform(8.3,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-32,19.9,136.7);


(lib.btn_cake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5lAmHMAAAhMNMBzLAAAMAAABMNg");
	this.shape.setTransform(368.6,243.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+BVIgDgiQAKADAMAAQAJABAFgEQAGgEADgKIg1h7IAzAAIAZBTIAXhTIAvAAIgxCDQgIAXgJAJQgLALgagBQgKAAgWgCg");
	this.shape.setTransform(69.9,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_1.setTransform(54.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_2.setTransform(42.5,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBWIAAirIBXAAQAdAAAPAOQAOANAAAaQAAAagQAOQgPAOghAAIgcAAIAABAgAgTgMIANAAQAPABAGgGQAGgFAAgJQAAgHgFgGQgGgGgNAAIgQAAg");
	this.shape_3.setTransform(30.2,25.5);

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_cake();
	this.instance.parent = this;
	this.instance.setTransform(-82.4,0,1,1,0,0,0,368.6,243.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_cake(), 3);

	this.btn_play = new lib.BasicButton();
	this.btn_play.name = "btn_play";
	this.btn_play.parent = this;
	this.btn_play.setTransform(351.1,160.6);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_play},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-451,-243.8,903.2,487.8), null);


// stage content:
(lib.PracticeCardNAlbanez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.btn_play.addEventListener("click", fl_ClickToPlay.bind(this));
		//this.btn_cake.addEventListener("click", fl_ClickToPlay.bind(this));
		
		function fl_ClickToPlay()
		{
			this.play();
		}
	}
	this.frame_9 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(11);
		}
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(21));

	// Present
	this.instance = new lib.Present();
	this.instance.parent = this;
	this.instance.setTransform(458.5,401.5,1,1,0,0,0,346.6,323.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(21));

	// Candles
	this.instance_1 = new lib.CandleUnlit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(721.9,244.7,1,1,0,0,0,6.2,52.4);

	this.instance_2 = new lib.CandleUnlit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(644.8,247.7,1,1,0,0,0,6.2,52.4);

	this.instance_3 = new lib.CandleUnlit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(551.4,251.6,1,1,0,0,0,6.2,52.4);

	this.instance_4 = new lib.CandleUnlit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(460.2,249.9,1,1,0,0,0,6.2,52.4);

	this.instance_5 = new lib.CandleUnlit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(382.2,254.5,1,1,0,0,0,6.2,52.4);

	this.instance_6 = new lib.CandleUnlit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(302.1,255,1,1,0,0,0,6.2,52.4);

	this.instance_7 = new lib.CandleUnlit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(228.7,256.1,1,1,0,0,0,6.2,52.4);

	this.instance_8 = new lib.Candle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(721.2,228.7,1,1,0,0,0,5.3,36.4);

	this.instance_9 = new lib.Candle();
	this.instance_9.parent = this;
	this.instance_9.setTransform(228.3,240.8,1,1,0,0,0,5.3,36.4);

	this.instance_10 = new lib.Candle();
	this.instance_10.parent = this;
	this.instance_10.setTransform(644.1,231.6,1,1,0,0,0,5.3,36.4);

	this.instance_11 = new lib.Candle();
	this.instance_11.parent = this;
	this.instance_11.setTransform(551,235.6,1,1,0,0,0,5.3,36.4);

	this.instance_12 = new lib.Candle();
	this.instance_12.parent = this;
	this.instance_12.setTransform(459.2,233.9,1,1,0,0,0,5.3,36.4);

	this.instance_13 = new lib.Candle();
	this.instance_13.parent = this;
	this.instance_13.setTransform(380.8,238.5,1,1,0,0,0,5.3,36.4);

	this.instance_14 = new lib.Candle();
	this.instance_14.parent = this;
	this.instance_14.setTransform(301,238.5,1,1,0,0,0,5.3,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},1).wait(30));

	// Cake
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEdlQiAgYhXhcQhqhwiVA+QokDmosivQghgKgQgVQh1iWimCHQgsAjgzAQQnMCNkLlyQgVgegcANQlGCVkJjOQgfgZgIglQhAk2E4iVQAVgKAQAAQB3AEBegqQAGBjBGA7QAYAUAHgSQHwDtJFAmQNwA7NwAPQMFANL/hHQMPhJLjkDIASgGQAOAVAegaQBHg7AShgQA2APA0AXQDFBXAEDqQACB/gLB9QkSDalQhHQhkgVhlAUQhhAThXA3QkuDBl3g6QhZgNhMgmQjqh2jpBfQmcCqmsAAQjIAAjKglgAIec6QADAoAlgTQBCghhGgfQgnAEADAngEglWAbZQADApAmgTQBBgihGgfQgnAFADAmgA3ga5QADApAlgTQBCgihGgfQgnAFADAmgAf8azQADApAlgTQBCgihGgfQgnAEADAngAPZamQADApAlgTQBCgihGgfQgnAFADAmgAgjZ5QADApAlgTQBCgihGgfQgmAFACAmgEAgPAY5QADApAlgTQBCgihGgfQgnAFADAmgAv/Y5QADApAmgTQBBgihGgfQgnAEADAngAUnYzQACAoAmgTQBCgihGgfQgnAFADAngEAmjAYsQADApAmgTQBCgihGgfQgnAFACAmgADDYfQADApAmgTQBCgihGgfQgnAFACAmgAKlYSQADApAlgTQBCgihGgfQgnAFADAmgAaBX5QADApAlgUQBCghhGgfQgnAEADAngEAx1AXmQADApAlgUQBCghhGgfQgnAEADAngEgy/AXZQADApAmgUQBCghhGgfQgnAEACAngEgjPAXZQADAoAlgTQBCghhGgfQgnAEADAngA36WfQADApAmgTQBBgihGgfQgnAEADAngEgs3AV4QADApAlgTQBCgihGgfQgnAFADAmgAfVVsQADAoAmgTQBBgihGgfQgnAFADAngEAz7AVfQADApAmgTQBCgihGgfQgnAFACAmgEApkAVfQADApAlgUQBCghhGgfQgnAEADAngEAuLAVYQADApAlgTQBCgihGgfQgnAFADAmgEAtRAS+QADApAmgTQBCgihGgfQgnAFACAmgEA0cAS4QADApAlgTQBCgihGgfQgnAFADAmgEgz4ASLQADApAlgTQBCgihGgfQgnAFADAmgEgveARlQADAoAlgTQBCgihGgfQgnAFADAngEAxIAPYQADAoAlgTQBCgihGgfQgnAFADAngApI2wQirgpiKhrQgwglgmArQimC9jqhrIjshrQgZgMgPATQiQC/jthMQgegJgQgVQgzhChMgLQg2gJgnAqQjbDpitjQQgLgwhWgcIgDgCIAAgFIAAgFIAAgKIABgEIABgFQGEiTGpgXUAjFgB5AjTAAXQBnABBmAKQgrAKAOAsQAJAdAbgOQBDgjhDghQDNAVDHA7IAEADQAFAcgOAWIgCADQgIADgFAHIgYAeIgDgDQgSABgEAOIgHAWQiHB6i7hVQgugVggAiQg4A6hAAzQhKA4hngTQhhgRhIhEQh6hzh1BgQjEChj7hAIAFgDQBFgkhJghQgvAIAPAuQACAGADAFQg3gQgogjQiniLiZB5QjMCijUioQhVhDhkAZQg8APgpAxQicC3jWh+Qhjg6hmgwQg5gbgbA1QhOCXiPAAQglAAgpgKgADR3wQAKAdAagOQBFgkhIghQgwAJAPAtgAmb4RQAJAdAbgOQBFgkhJghQgvAJAPAtgAz14hQAJAdAbgOQBFgkhIghQgwAIAPAugEAlRgYxQAJAdAbgOQBFgkhJgiQgvAJAPAugEgg7gY2QAKAdAagOQBGgkhJghQgvAJAOAtgA8o47QAKAdAagOQBGgkhJghQgvAIAOAugAO85CQAKAdAagOQBFgkhIghQgwAJAPAtgEgpEgZvQAKAdAagOQBFgkhIghQgwAIAPAugEAjmgZ/QAJAdAbgOQBFgkhIgiQgwAJAPAugAAx5/QAKAdAagOQBFgkhIgiQgwAJAPAugA2i69QAKAdAagOQBGgkhJghQgvAIAOAugA/Q7rQAKAdAagOQBFgkhIgiQgwAJAPAugAqa7wQAKAeAagOQBFglhIghQgwAJAPAtgEAvmgbyQAJAdAagOQBGgkhJghQgvAIAPAugAUd7yQAKAdAagOQBFgkhIghQgvAIAOAugAab7/QAJAdAbgNQBFglhIghQgwAJAPAtgAfT8DQAJAdAbgOQBFgkhIghQgwAJAPAtgADi8DQAJAdAbgOQBFgkhJghQgvAJAPAtgAIu8gQAKAeAagOQBFgkhIgiQgwAJAPAtg");
	this.shape.setTransform(457.4,484.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(462.7,482.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgnFAnOQnXgPnWgSQg/gCAGg9IAAgBQgfghABg4QACnigcnkQgGhoAUhgQiiieBNjcQBQjoDWiNQDFiBClBbQATjZAPjYIAJiYQAgohAFokQABiOAMiLIACgOQANiVAaiQQi6hlCQi6QAwg9BLgTQHEh0HVgVQUfg9UbgzQNqAANpAQQFBAHE0BYQCgAugUCoQgRCOhmAjQAUBMgKBgQgMB1gGB2QgFBmAABnQABKcAJKbIAGF4QGRAOA7GYQAmEEiMC1QgbAigmAbIgQALQAZBIgaBkQgTBKgEBOQgUF9gjF4QATAPgCAhQgCBChEABQozADoyAPIgVAAQ6bAD6ZAKQhqABhqAIQmLAfmKAAQiXAAiYgEgEgm7Ak3QIyAQIyguQBUgHBUgBQaUgJaVgDQCoAACYgJQF4AAF3ANQgEgcADghQAWkZALkaQAHi6AkixQknCBlOh2QmKE+oShUQjUgii5hoQl5Bwl9BrQhqAdhugEQlggQlIhzQhdghhNhAQgfgbgnASQoVD0o0iSQh6gghfhNQmpEZm6kOQhkg8g4hjQkWBtjkhwIAAAXIgKQZIDMgBQFXAAFXAKgAkbVMQBWBcCBAYQJ+BzJcj4QDphfDqB2QBMAmBYANQF3A6EujBQBXg3BigTQBkgUBlAVQFQBHESjaQAKh9gCh/QgDjqjGhXQg0gXg2gPQgSBfhGA8QgfAagOgVIgSAGQriEDsQBJQr+BHsFgNQtxgPtwg7QpEgnnwjsQgIASgYgUQhFg8gGhiQheAqh3gEQgQAAgWAKQk4CVBAE2QAIAlAgAZQEJDOFFiVQAdgNAVAeQEKFyHMiNQA0gQArgjQCniHB1CWQAPAVAhAKQIsCvIkjmQA1gWAwAAQBWAABFBIgEgpiAJIQEuB2FFAiQLTBNLYAgQEKALEKAGIAZAAQMGACMGgcQB3gEB3gYQJEh1Iui+QA+gVA7gPQgSigADijIADjOQAKsBgVsDIAAgWQgEiYAWiMIgPAEQiKAjiDgxQiJDJkCgyQikgfiBhuQlOEAmWizQg8gbgwgtQjqDUkYh3QhYgmhRguQjZEClAiBQhkgphVhBQjHEVlNiOQhqgthRhVQkSD2lLjHQgogYgngZQj3DzlDi8IgigVQj3DajtiZQALA/gGBNIgCAjIgCAOQghGggBGhQgBERgUEMIgNCYQgeFEg7E8QAogPArAAQA2AAA8AXgAt9/pQCKBrCrApQDJAwBhi9QAcg1A5AbQBlAwBkA6QDVB+Cci3QAqgxA7gPQBlgZBUBDQDUCoDNiiQCZh5CmCLQApAiA2AQQAJAOARgHQD8BADEigQB0hgB7BzQBIBEBhARQBnATBJg4QBBgzA3g6QAggiAuAVQC8BVCGh6IAHgWQAFgOARgBIAEADIAXgeQAGgHAHgDIACgDQAOgWgFgcIgEgDQjGg7jNgVIgEgCIgEABQhlgKhngBUgjUgAXgjFAB5QmoAXmFCTIgBAFIAAAEIAAAKIAAAFIAAAFIACACQBWAcAMAwQCtDQDajpQAogqA2AJQBLALAzBCQAQAVAeAJQDuBMCQi/QAOgTAaAMIDrBrQDrBrCmi9QAUgXAYAAQAUAAAWARg");
	this.shape_2.setTransform(457.4,526.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("EgmaAheQm9gNm9AEIAKwZIAAgXQDkBwEWhtQA4BjBkA8QG6EOGpkZQBfBNB6AgQI0CSIVj0QAngSAfAbQBNBABdAhQFIBzFgAQQBuAEBqgdQF9hrF5hwQC5BoDUAiQISBUGKk+QFOB2EniBQgkCxgHC6QgLEagWEZQgDAhAEAcQl3gNl4AAQiYAJioAAQ6VAD6UAJQhUABhUAHQmhAimhAAQiRAAiRgEgAAJKFIgYAAQkKgGkKgLQrYggrThNQlFgikuh2QhsgphZAhQA7k8AelEIANiYQAUkMABkRQABmhAhmgIACgOIACgjQAHhNgMg/QDtCZD3jaIAiAVQFDC8D3jzQAnAZAoAYQFLDHESj2QBRBVBqAtQFNCODHkVQBVBBBjApQFBCBDZkCQBRAuBYAmQEYB3DqjUQAwAtA8AbQGWCzFOkAQCBBuCkAfQECAyCJjJQCDAxCKgjIAPgEQgWCMAECYIAAAWQAVMDgKMBIgDDPQgDCiASCgQg7APg+AVQouC+pEB1Qh3AYh3AEQreAarfAAIhQAAgAu1mVQgcEMgmEIQgMBVAiBDQAJAQAQgJQBKguAChvQADh8AIh6QAIh4AKh3QBigDBcAVQA1ALAhAuQAfAsAFA0IAAAEQh4BNiagRQglgFgJAkQgGAUAPAHQBOAiBPAAQAPBOA0BMQAZAlATAoQAcA7A6AQQAzAOgIgyQgNhPgmhIQgohKgzg7QAsgLAsgWQAlgTAJgnQAoisiWh7QgYgTgcgDQh4gLh5gBIgCAAQhBAAgGA6gAMem/QgaABgPAZQgXAoAYAQQgoDEALDRQAEBHgLBGQgOBWBIATQAWAGAEgUIADgWQDGAiCDilQChjHh/jyQgSghgggRQiNhLioAAIgPAAgAmxnGQglACgCAkQgDAoAqACQBmAFBnACQgiC8gFDDQgCBGgSBBQgYBaBCAoQATALAGgSQBDjXABjrQAAg0ALgxQANgzgKgmICDgBQBAgBA9gPQAugMgagoQgrhBhdAgIgOABIgcAAQi/AAjKANgADVnMQg8DcAGDsQACBIgTBDQgbBhBPAgQAMAEAEgKQA2iIAEiYQBXAYBjgRQADA/gPA9QgUBQA2AvQARAPAIgRQBQingTjJQgGhBAMg/QAYh9hRg+QgQgBgDAOQgoCagBCpQhWgehkAMQAAhZAVhVQAdhxhNg0QgUAAgFASgAWJlyQgjAQAFAlIADAKQhKDQhDDTQgdBeBGAtQAQAKAGgPQAihRAchWQBzAJB0gBQAIAAAHgCIAoBgQAjBVBMgZQARgFgGgPQhRjLhNjOQg3iSiFgpQgJABgKAEgA37CVQgxBHBfAKQC/AUDAgEQAmgBAHgkQAKgtgugFQhPgJhRgBQAziQgOimQgFg9AKg8QAOhNgcgzICOgDQArAAAEgqQADgogogDQi4gLi5gGQgmgBgmgDQgzAHANAwQASBCBSgDICcgGQgkBrAJB8QAJB+gTB6QgIAuAQAgQhYgChWgQQgRABgLAQgAbDksQAKAOALAJQBbBOBLBoQANASASAIQgKCGAACIQAAAYATAHQBpAjgOiEQgIhMAKhKQAHg1gNgnQAygqArg4QA+hSBNhBQBXhKhlgqQgzARgkAvQhYBvhqBgIgDADIAAAAQhRiMiLg0QhMAXAwA/gA/RorQgOAAgQAEQgaAHgIAYQg3CdgCCvQgBCUgiCOQgRBKBAAXQCIAwCQgvQBigfAxhYQBLiFhoh9QAEgEAEgBQASgGAOgJQB4hSg/iSQglhWhYgdQhLgZhRAAQg0AAg1AKgAQg6kQgVAFABARQABBiAiBqQAQAxAmAhIAIAGQAFAQALAQQgwCfgPCuQgHBSA+AjQASAKAGgQQAuh5AFiNQACgwAQgtQAchOgfgyQAqg0Ang8QAWggAbgbQBbhZhdg3QhDAhgoBJQgbAygmArIgDgRQgXh6hfg1IgKABgAA86NQgSAagEAlIgaFNQgIBqgKBpQgJBXBHAVQAaAHAFgaQAXiJAEiOQAFiQAkiLQAJgkgCgfQA/ALBFgJIABACIAEAHQADAGABAGIACAIQACAFAAAGIABAIIABAIIAAAEQgbANgpAGQhOALgSBAQgHAZAZAFQBNAPBRgcQCPgzhEieQgVgxg4gHQhngOhqgBQglAEgNAkgAmR6lIgHABQgVAFgBATIAAASQhTC1g0DLQgVBUgcBSQggBaBEApQATALAJgTQAthfAehnQBPAZBWgOIALgEIAXBCQAbBTBOgMQAWgEgFgTQg1i2hGi1QgYg+gMhCQgOhSgvgvQgKgKgNgJIgEAAgAwi6kQgUEqgZEqQgIBcBKAZQASAGACgQQATiJAPiKQBEANBMgTIAKgEIgHCXQgCBCAkAwQAUAaAUgZQAxg7gFhXQgMjUAkjOQAUhwhOg0QgwAGgEAwQgNCkgIClIgKgDQhCgXhHACIAMihQADgmAKgkQAehwhSgpQg3AMgEA9gAJ16lQgfACgSAcQgQAYAOAQQg7CTgKCmQgHBkgZBhQgYBdBMAZQAVAHAGgUQA0i/AXjHIABgIQBCASBMgRQAhgIATgcQAfguADg3QAFhZhJgrQgugcg2AAQgeAAghAJgEgh/gR7IAGAAIgBgNIgFANgANCjTQgBgiAJggQAMgpgDghQA2AHA1AMQAzALAzAKQCMDTicCzQg4BBhWgDQgwgCggAPQAUizgIi6gEggBAB1QALhXAOhWQAPhjgBhlQgBhnAUhdQBxgBBwACQAFABAEADQASAUANAZQAPAbAHAfQAGAagEAdQh5AdhqA7QgYAOAOAXQAwBMBwgKQATAeAJAhQAFAUgIANQhRB8iYAAQgdAAghgFgAV7gKIAVhJQAQg7AYg1QAIgRAEgQQA4BxAzBzQhagHhagDgAnCz/QAVhVAdhRQAMAmAPAnIAnBgQg4gOg8AHgAKU4CQAKgeACgZQAkAEApgIIAAABIAAAQIAAATIAAAPIAAAMIAAAHIAAAEIhfAEIAGgTg");
	this.shape_3.setTransform(454.1,548.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvA3QgOgJgEgSIAvgFQADAJAFADQAGAEAHAAQAKAAAFgEQAEgDAAgFQAAgFgFgDQgEgCgQgDQgYgEgKgEQgKgDgGgIQgHgJAAgLQAAgMAHgJQAHgJANgFQAMgEAVAAQAWAAAKADQALAEAHAHQAHAHAFAMIgtAFQgCgGgEgDQgGgEgHAAQgIAAgEADQgDADAAAEQAAAFAEACQAFACAPACQAYADALAFQAMAEAGAIQAGAJAAALQAAALgGAKQgHAKgOAGQgOAGgYAAQghAAgPgKg");
	this.shape_4.setTransform(699.1,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA6QgOgHgJgPQgKgPAAgVQAAgcASgSQATgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQACALAFAGQAHAIAJAAQAIAAAGgDQAEgDAEgFIAwAEQgLATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGgBALIAvAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_5.setTransform(684,39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_6.setTransform(671.9,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag2BEQgNgUAAgbQgBgeAPgQQAPgRAXAAQALAAAIAEQAJADAIAIIAAg7IAwAAIAACrIgtAAIAAgTQgJAMgJAEQgJAGgMgBQgZAAgOgTgAgOAAQgGAGAAARQAAAPAGAIQAGAGAIAAQAJABAFgIQAGgHABgQQgBgOgGgIQgGgGgJAAQgHAAgGAGg");
	this.shape_7.setTransform(659.6,37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASBAIAAhEQAAgLgEgFQgFgFgIAAQgHAAgGAGQgFAHAAAQIAAA8IgwAAIAAh8IAtAAIAAAVQAKgNAKgFQAJgGAPAAQATAAAMAMQALAMAAAZIAABOg");
	this.shape_8.setTransform(643.9,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_9.setTransform(627.9,39.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnBRQgSgJgMgUQgOgVAAgfQABgqAWgXQAWgXApAAQAgAAAUANQASANAJAbIgvALIgFgMQgEgGgHgDQgGgDgJAAQgRAAgJAOQgIALAAAXQAAAcAJAKQAJALAPAAQAPAAAHgJQAJgIADgRIAvAPQgFATgLANQgKANgOAHQgPAHgYAAQgbAAgRgIg");
	this.shape_10.setTransform(610.8,37.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmA6QgOgHgJgPQgKgPAAgVQAAgcATgSQASgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQACALAFAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAwAEQgLATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgFAGgBALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_11.setTransform(585.3,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASBWIAAhEQAAgMgEgFQgFgEgIAAQgHAAgGAFQgFAHAAARIAAA8IgwAAIAAirIAwAAIAAA/QAKgJAIgFQAKgEANgBQATABAMAMQALALAAAYIAABPg");
	this.shape_12.setTransform(569.3,37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaBWIAAiBIg2AAIAAgqIChAAIAAAqIg3AAIAACBg");
	this.shape_13.setTransform(551.9,37.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMBTQgIgFgEgJQgEgJAAgVIAAgrIgSAAIAAgjIASAAIAAgXIAvgYIAAAvIAaAAIAAAjIgaAAIAAArQAAAIABACQADAEAFAAQAGAAAJgDIAEAiQgSADgPAAQgRAAgJgEg");
	this.shape_14.setTransform(529.9,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag2A0QgLgMAAgYIAAhPIAwAAIAABEQAAALAEAFQAFAFAIAAQAHAAAGgGQAFgHAAgQIAAg8IAwAAIAAB8IgtAAIAAgUQgKAMgKAFQgJAGgPAAQgTAAgMgMg");
	this.shape_15.setTransform(516.6,39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AguBPQgSgJgMgUQgMgUAAgeQAAgpAXgYQAYgXApAAQArAAAXAXQAXAXAAAqQAAAdgKATQgLATgTALQgSALgdAAQgcAAgUgKgAgZgkQgKALAAAZQAAAaAKAMQAJALAQAAQARAAAJgLQAKgLAAgcQAAgYgKgMQgJgLgRAAQgQAAgJAMg");
	this.shape_16.setTransform(498.6,37.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZA+IgZhKIgXBKIgrAAIguh7IAuAAIAUBNIAZhNIAqAAIAbBNIAUhNIAtAAIgtB7g");
	this.shape_17.setTransform(469.3,39.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvAyQgYgTABgfQgBgbAUgSQATgTAgAAQAlAAATAWQAQARAAAZQgBAcgSATQgUASghAAQgdAAgSgPgAgQgXQgHAIAAAPQAAARAHAIQAHAIAJAAQALAAAGgIQAHgIAAgRQAAgPgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_18.setTransform(450.4,39.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_19.setTransform(438.4,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhOBWIAAirIBiAAQAZAAANANQAOAMAAASQAAAPgKALQgHAIgLADQASAFAJAKQAJAKAAARQgBANgFALQgHALgKAGQgIAEgNABIgYADgAgYAxIAaAAQANAAAGgEQAFgGABgIQAAgHgGgFQgGgFgOAAIgZAAgAgYgRIAWAAQAMAAAEgFQAGgEAAgIQAAgIgGgEQgEgEgMAAIgWAAg");
	this.shape_20.setTransform(425.5,37.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvAyQgYgTAAgfQAAgbAUgSQATgTAgAAQAlAAATAWQAPARAAAZQAAAcgSATQgTASgiAAQgdAAgSgPgAgQgXQgHAIABAPQgBARAHAIQAHAIAJAAQAKAAAHgIQAGgIABgRQgBgPgGgIQgHgIgKAAQgJAAgHAIg");
	this.shape_21.setTransform(399.8,39.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaBWIAAiBIg2AAIAAgqIChAAIAAAqIg3AAIAACBg");
	this.shape_22.setTransform(384.7,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmA6QgPgHgIgPQgKgPAAgVQAAgcATgSQASgSAhAAQAaAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQABALAGAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAvAEQgKATgQAIQgPAIgcAAQgYAAgOgHgAgRgbQgEAGgCALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_23.setTransform(360.1,39.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATBWIgYgyIgSASIAAAgIgxAAIAAirIAxAAIAABYIAjgoIA6AAIgsAqIAvBRg");
	this.shape_24.setTransform(345.6,37.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag7A3QgMgLAAgPQAAgOAJgJQAIgIAWgFQAbgFAHgCIARgGQAAgJgEgDQgDgEgJAAQgLAAgGAEQgFADgCAIIgugFQADgMAFgGQAEgHAKgFQAGgEAMgCQALgCANAAQAVAAANACQANADAJAHQAGAGADAJQAEAKAAAJIAAA2IABAOQABAFAEAHIgtAAIgEgHIgBgIQgKAJgJAEQgMAFgQAAQgXAAgLgKgAAAAJQgPAEgEAEQgEAEAAAFQAAAFAEAEQAEAEAIAAQAHAAAGgEQAHgEADgGQADgFAAgJIAAgIIgTAGg");
	this.shape_25.setTransform(328.9,39.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnBRQgSgJgNgUQgMgVAAgfQAAgqAWgXQAWgXApAAQAgAAAUANQASANAJAbIgvALIgFgMQgFgGgGgDQgGgDgJAAQgRAAgJAOQgIALAAAXQAAAcAJAKQAJALAOAAQAQAAAIgJQAHgIAEgRIAuAPQgEATgLANQgJANgPAHQgPAHgYAAQgbAAgRgIg");
	this.shape_26.setTransform(311.7,37.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATBWIgYgyIgSASIAAAgIgxAAIAAirIAxAAIAABYIAjgoIA6AAIgsAqIAvBRg");
	this.shape_27.setTransform(286.9,37.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcA9QgNgDgJgJQgKgIgGgLQgFgLAAgSQAAgTAGgMQAGgKAIgHQAIgIAJgDQAOgGAVAAQAeAAAQALQAQALAGAVIgtAGQgBgIgGgEQgFgEgKAAQgKAAgIAIQgHAJgBAQQABAPAHAIQAHAIALAAQAJAAAGgFQAGgFAEgJIAtAFQgDAOgJAKQgJALgNAFQgOAGgUAAQgTAAgNgEg");
	this.shape_28.setTransform(270.7,39.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXBWIAAh7IAvAAIAAB7gAgXg0IAAghIAvAAIAAAhg");
	this.shape_29.setTransform(258.6,37.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXBWIAAirIAvAAIAACrg");
	this.shape_30.setTransform(250.6,37.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgnBRQgSgJgNgUQgMgVAAgfQAAgqAWgXQAWgXApAAQAgAAAUANQASANAJAbIgvALIgFgMQgFgGgGgDQgGgDgJAAQgRAAgJAOQgIALAAAXQAAAcAJAKQAJALAOAAQAQAAAIgJQAHgIAEgRIAuAPQgEATgLANQgJANgPAHQgPAHgYAAQgbAAgRgIg");
	this.shape_31.setTransform(237.5,37.2);

	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(457.4,526.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.movieClip_2},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[]},1).to({state:[]},20).wait(1));

	// Label
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiOCvQAFgrAZglQAZglBEgzQApgeAMgRQAMgQAAgOQAAgQgMgLQgLgLgSAAQgRAAgMALQgLAMgEAdIhggIQAGgoAPgXQAPgXAbgMQAbgMAvAAQAzAAAcAMQAcALAQAYQAQAYAAAdQAAAggSAcQgTAcgwAiQgdAUgKAIIgWAVICUAAIAABOg");
	this.shape_32.setTransform(609.1,316.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhNB0QgdgOgSgeQgTgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQACAXALALQANAQAWAAQANAAANgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgNgMQgMgLgTgBQgWABgOARg");
	this.shape_33.setTransform(561.6,321.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjB/IAAiIQAAgXgIgKQgJgKgPAAQgRAAgKAOQgMANAAAhIAAB3IheAAIAAj4IBYAAIAAApQAUgZAUgKQAUgLAdAAQAoAAAXAXQAVAYABAxIAACdg");
	this.shape_34.setTransform(529.6,320.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhNB0QgdgOgTgeQgSgeAAgqQAAg5AmgkQAkgkBCAAQA1AAAfAQQAfAQAQAfQAQAfAAAwIAAALIi+AAQADAXAKALQANAQAWAAQAOAAAMgHQAIgEAJgMIBeAJQgWAlgfARQgdAQg5AAQgxAAgcgOgAgjg3QgJAMgCAWIBdAAQgCgcgMgMQgNgLgUgBQgVABgOARg");
	this.shape_35.setTransform(497.6,321.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag5B7QgagHgTgRQgTgQgLgXQgLgWAAglQAAglANgaQAKgTAQgOQARgQASgHQAcgLAqAAQA9AAAgAWQAgAVANAqIhaANQgEgRgLgIQgLgIgTAAQgXAAgOARQgPASAAAhQAAAeAPAQQAOAQAWAAQASAAANgJQANgKAGgUIBbAKQgIAdgRAVQgRAUgaALQgbAMgpAAQgnAAgagHg");
	this.shape_36.setTransform(465.6,321.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ah0CQQgjgigEg0IBlgGQADAYAKANQARAVAdAAQAXAAAMgKQAMgLAAgOQABgOgMgKQgMgLgqgJQhFgQgegZQgegaAAgoQAAgbAPgXQAQgYAfgNQAegOA1AAQBCAAAiAZQAjAYAHA2IhkAGQgFgYgMgKQgNgLgVAAQgTAAgJAIQgKAIAAALQAAAIAIAHQAIAHAbAGQBFAPAfAPQAdAPAOAWQAOAXAAAcQAAAhgSAcQgSAcgiAOQghAPgxAAQhXAAghgig");
	this.shape_37.setTransform(432.1,316.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhFCnQgcgLgRgWQgRgVgKggIBggNQAFAdAMALQAMALARAAQATAAANgOQANgOAAgXQAAgYgMgNQgNgNgVAAQgKAAgUAFIAFhDIANABQARAAANgMQAMgMAAgQQAAgQgJgJQgJgJgQAAQgRAAgKAKQgLAKgDAaIhbgRQAMgrAggXQAggXA6AAQBCAAAeAZQAeAZAAAmQAAAXgMASQgMASgZANQAUAFALAHQARAJAKASQAJARAAAYQAAAegQAbQgPAcgeAPQgeAPgwAAQgtAAgbgLg");
	this.shape_38.setTransform(609.4,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},11).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38}]},10).wait(10));

	// Button
	this.btn_play = new lib.BasicButton();
	this.btn_play.name = "btn_play";
	this.btn_play.parent = this;
	this.btn_play.setTransform(890.2,684.7);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(539.4,524.1,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_play}]}).to({state:[{t:this.movieClip_1}]},9).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(604.2,576.3,899,586.1);
// library properties:
lib.properties = {
	id: 'C0A1CD384F32064584D6A81952245BEA',
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
an.compositions['C0A1CD384F32064584D6A81952245BEA'] = {
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