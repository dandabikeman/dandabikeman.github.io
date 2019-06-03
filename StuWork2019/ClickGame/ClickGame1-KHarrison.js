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


(lib.Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.countdown_txt = new cjs.Text("Timer", "bold 60px 'Rockwell Extra Bold'");
	this.countdown_txt.name = "countdown_txt";
	this.countdown_txt.textAlign = "center";
	this.countdown_txt.lineHeight = 72;
	this.countdown_txt.lineWidth = 220;
	this.countdown_txt.parent = this;
	this.countdown_txt.setTransform(0,-71.4);

	this.timeline.addTween(cjs.Tween.get(this.countdown_txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Timer, new cjs.Rectangle(-111.8,-73.4,223.7,146.9), null);


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ANZpgIAACQQgCAYgqAWQgiARgtALQgGACgGABIizAiQgLACgMABQglAFgmAEQirASjLACIhIABIgmAAQjEgCifgOIg9gGIgBAAIi/gcIg1gLQgxgLgngQQhCgagBgeIAAiQIAAgCQABg7D6grQDOgjETgHID3AAQEUAHDNAjQD6ArACA7IAAACQgDA7j5AqQgwAJg2AGQgnAFgpAEQi9ATjqAAQjpAAi8gTQgqgEgngFQg1gGgxgJQj5gqgCg7ANZHFQAAAFgCAZAMuG5IAjAKANZHSIAACRQgCAYgqAWQg9AeiTAZQj6ArljAAQlhAAj7grQh6gVg+gYQhCgagBgeIAAiRAMuG5IAAA5QgZANgqANQgXAGgbAGQgCAAgBABQgoAJgxAIQgfAGggAEQgNACgOABQgfAEgfAEQiWAQizAFIgSAAQgJAAgJAAQgDAAgDAAQgpAAgpAAIgBAAIhVAAQgSAAgTAAQiSgEh/gLQghgEgfgDQhMgIhEgMQgUgDgSgEIAAAAQgdgFgZgGQg3gMgkgOAMumdIAANWALemGIAAAUIANN+AD2pVQAAANg/AJQhAAJhZAAQhZAAg/gJQhAgJAAgNQAAgNBAgKQA/gJBZAAQBZAABAAJQA/AKAAANgAtYHUIABgPAtUG9IA6gCAqHlyIAFOHIAAAOAsUmYIAANTIgBA/AIIleIgFOVAKtlyIAMOKABHlBIALOVAG9lNIAIOMAmKlQIAAOGAnHlWIgDOKAgBlAIAAOUAq8l9IAFOS");
	this.shape.setTransform(85.7,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABGH7IgLuVQDLgCCrgRIAAAIIAHOLQiVAQizAFIgSAAIgTAAIgFAAgAhiH7IglAAQiSgEh/gMIACgNIAAuHQCfAODEACIAmAAIAAOUgApoHRIgmgGIAAAAIAAgPIgFuHIC/AcIABAAIgDOKIgCAKQhMgJhEgLgAH8m2IAWgDICzgiIAMgEIABAUIgBgUQAugLAigRIABAGIAANWIAAA4QgaANgqANIgMt+IgxAAIAMOKIgDABQgoAJgxAIIhAAKIgaAEgAqOHLIg2gMQg3gNgkgOIgCgDIABhAIAAtSQAnAQAxALIAFOSIA1AAIAAAPg");
	this.shape_1.setTransform(86.9,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmlB+IhRgJQg2gGgxgJQj4gqgCg7IAAgBQABg7D5grQDPgjETgHID3AAQETAHDOAjQD6ArABA7IAAABQgCA7j5AqQgxAJg1AGIhQAJQi9ATjqAAQjpAAi8gTgAh7gKQg/AKAAAMQAAANA/AJQBAAJBZAAQBZAAA/gJQBAgJAAgNQAAgMhAgKQg/gJhZAAQhZAAhAAJg");
	this.shape_2.setTransform(85.7,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("ApcKJQh5gUg/gZQhCgZgBgfIAAiQIgBABIABgPIADgIIA7gCIAFAAIgBBAIADADQAjAOA4ANIA1ALIABAAIAlAHQBEALBMAIIBAAHQB/ALCSAFIAmAAIBUAAIABAAIBSAAIAGAAIASAAIASAAQCzgFCVgRIA/gHIg/AHIgHuLIAAgIIBLgJIgFOVIAagEIBAgJQAygJAngJIADAAQAbgHAWgGQAqgMAbgNIAAg5IAiAJIAHACIgBAeIABgQIAACQQgBAYgqAWQg+AfiSAYQj6ArljAAQlhAAj7grgABSIWIAAAAgAAAIWIgBAAIAAuUIBIgBIhIABIgmAAQjEgCifgOIg9gHIgBAAIi/gcIAFOIIg0AAIgGuSIA1AKIg1gKQgwgLgogQQhCgagBgeIAAiQQACA7D5AqQAxAJA1AGIBRAJQC9ASDoABQDrgBC8gSIBQgJQA2gGAwgJQD6gqABg7IAACQQgBAYgqAWQghARguALIgNADIizAiIgWADIhLAJQirARjLADIALOVIhSAAgAmMIGIhAgHIACgKIADuKIA9AHIAAOGIgCAOIAAAAgAKtmxIAxAAIAMN+QgWAGgbAHgAIImcgAq8m7gAh6p+QhAgIAAgNQAAgNBAgKQA/gJBZAAQBaAAA/AJQBAAKAAANQAAANhAAIQg/AKhaAAQhZAAg/gKg");
	this.shape_3.setTransform(85.7,81.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AtXpgIAAgCQABg7D6grQDOgjETgHID3AAQEUAHDNAjQD6ArACA7IAAACIAACQQgCAYgqAWQgiARgtALQgGACgGABIizAiQgLACgMABQglAFgmAEQirASjLACIhIABIgmAAQjEgCifgOIg9gGIgBAAIi/gcIg1gLQgxgLgngQQhCgagBgegAMuG5IAAA5QgZANgqANQgXAGgbAGQgCAAgBABQgoAJgxAIQgfAGggAEQgNACgOABQgfAEgfAEQiWAQizAFIgSAAQgJAAgJAAQgDAAgDAAQgpAAgpAAIgBAAIhVAAQgSAAgTAAQiSgEh/gLQghgEgfgDQhMgIhEgMQgUgDgSgEIAAAAQgdgFgZgGQg3gMgkgOANZHSIAACRQgCAYgqAWQg9AeiTAZQj6ArljAAQlhAAj7grQh6gVg+gYQhCgagBgeIAAiRAMuG5IAjAKANZHFQAAAFgCAZAMumdIAANWANZpgQgDA7j5AqQgwAJg2AGQgnAFgpAEQi9ATjqAAQjpAAi8gTQgqgEgngFQg1gGgxgJQj5gqgCg7ALemGIAAAUIANN+AD2pVQAAANg/AJQhAAJhZAAQhZAAg/gJQhAgJAAgNQAAgNBAgKQA/gJBZAAQBZAABAAJQA/AKAAANgAtUG9IA6gCAtYHUIABgPAqHlyIAFOHIAAAOAsUmYIAANTIgBA/Aq8l9IAFOSAgBlAIAAOUAnHlWIgDOKAmKlQIAAOGAG9lNIAIOMABHlBIALOVAKtlyIAMOKAIIleIgFOV");
	this.shape_4.setTransform(85.7,75.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ABGH7IgLuVQDLgCCrgRIAAAIIAHOLQiVAQizAFIgSAAIgTAAIgFAAgAhiH7IglAAQiSgEh/gMIACgNIAAuHQCfAODEACIAmAAIAAOUgApoHRIgmgGIAAAAIAAgPIAAAPIg2gMQg3gNgkgOIgCgDIABhAIAAtSQAnAQAxALIAFOSIA1AAIgFuHIC/AcIABAAIgDOKIgCAKQhMgJhEgLgAH8m2IAWgDICzgiIAMgEIABAUIgBgUQAugLAigRIABAGIAANWIAAA4QgaANgqANIgMt+IgxAAIAMOKIgDABQgoAJgxAIIhAAKIgaAEg");
	this.shape_5.setTransform(86.9,84.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ApcKJQh5gUg/gZQhCgZgBgfIAAiQIgBABIABgPIADgIIA7gCIAFAAIgBBAIADADQAjAOA4ANIA1ALIABAAIAlAHQBEALBMAIIBAAHQB/ALCSAFIAmAAIBUAAIABAAIBSAAIAGAAIASAAIASAAQCzgFCVgRIgHuLIAAgIQirARjLADIALOVIhSAAIgBAAIAAuUIBIgBIhIABIgmAAQjEgCifgOIg9gHIgBAAIi/gcIAFOIIg0AAIgGuSIA1AKIg1gKQgwgLgogQQhCgagBgeIAAiQQACA7D5AqQAxAJA1AGIBRAJQC9ASDoABQDrgBC8gSIBQgJQA2gGAwgJQD6gqABg7IAACQQgBAYgqAWQghARguALIgNADIizAiIgWADIhLAJIBLgJIgFOVIg/AHIA/gHIAagEIBAgJQAygJAngJIADAAQAbgHAWgGQAqgMAbgNIAAg5IAiAJIAHACIgBAeIABgQIAACQQgBAYgqAWQg+AfiSAYQj6ArljAAQlhAAj7grgAmMIGIhAgHIACgKIADuKIA9AHIAAOGIgCAOIAAAAgAKtmxIAxAAIAMN+QgWAGgbAHgALqHNgAh6p+QhAgIAAgNQAAgNBAgKQA/gJBZAAQBaAAA/AJQBAAKAAANQAAANhAAIQg/AKhaAAQhZAAg/gKg");
	this.shape_6.setTransform(85.7,81.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AtXp+IAAgBQABg8B7gRQB7gRCwAWQCxAWDCACQDCACGEgcQCcgPBfAOQBgANgMA+IAAABIAACQQgBAZgrAWQghAQguAMQgGABgGACIizAiQgLABgLACQglAFgnAEQiqARjLADIhIAAIgnAAQjEgBifgOIg9gHIAAAAIjAgcIg0gLQgxgLgogPQhBgagBgfgANYGnQAAAGgBAYAMuGcIAiAJAMuGcIAAA4QgaANgqANQgXAGgbAGQgBABgCAAQgnAJgxAIQgfAGghAEQgNACgOACQgeAEggADQiWARiyAEIgTAAQgJAAgJABQgDAAgDAAQgoAAgpAAIgCAAIhUAAQgTgBgSAAQiTgEh/gLQgggDgggEQhMgIhEgMQgTgDgSgDIgBAAQgdgGgYgGQg4gMgjgOANYG1IAACQQgBAYgrAWQg9AfiSAYQj7ArliAAQliAAj7grQh5gUg/gZQhBgagBgeIAAiQAMum6QBpHEhpGSANYp+QgCA8j5AqQgxAIg1AHQgnAFgqAEQi8ASjqAAQjpAAi9gSQgpgEgngFQg2gHgxgIQj4gqgCg8ALdmjIAAATIANN+AEFpkQgBANhGATQhHAThaAAQhYAAhCgKQhBgKgpgUQgogUB3ALQA3gBBuABQBvACAQABQARACAVgEQAWgEARgCQAFADAHgDQAhgHgBAKgAtUGfIA6gCAtYG2IABgPAqImQIAFOHIAAAPAsVm1QiaG6CaGYIgBBAAq8mbIAFOSAgBleIgBOVAnIl0IgDOKAmLltIAAOGAG8lqIAIOLABHleIAKOVAKsmQIAMOKAIIl7IgGOV");
	this.shape_7.setTransform(85.7,78.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmmBgIhRgJQg1gGgxgJQj5gqgCg6IAAgCQABg7B8gRQB7gSCwAXQCwAWDDACQDBACGEgdQCcgOBgANQBfAOgMA9IAAACQgCA6j5AqQgxAJg1AGIhQAJQi9ATjpAAQjqAAi8gTgAjnAIQAoAUBCAJQBBAKBZAAQBZAABHgTQBHgTABgLQABgKghAHQgHACgGgCIgmAFQgVAEgRgCQgRgChvAAQhtgBg4ABQgqgEgWAAQgoAAAaAMg");
	this.shape_8.setTransform(85.8,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABRH7IgKuVQDLgCCqgRIAAAIIAIOLQiWAQiyAFIgTAAIgSAAIgGAAgAhWH7IglAAQiTgEh/gMIACgNIAAuHQCfAODEACIAnAAIgBOUgApdHRIglgGIgBAAIAAgPIgFuHIDAAcIAAAAIgDOKIgCAKQhMgJhEgLgAIIm2IAWgDICzgiIAMgEQAugLAhgRIACAGQBpHFhpGRIAAA4QgaANgqANIgNt+IAAgUIAAAUIgxAAIAMOKIgDABQgnAJgxAIIhAAKIgbAEgAq4G/Qg4gNgjgOIgDgDIABhAQiamWCam8QAoAQAxALIAFOSIA0AAIAAAPIg1gMg");
	this.shape_9.setTransform(85.7,84.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("ApcJ/Qh5gUg/gZQhCgagBgeIAAiQIgBABIABgPIADgIIA7gCIAFAAIgBBAIADADQAjAOA4AMIA1AMIABAAIAlAGQBEAMBMAIIBAAHQB/ALCSAEIAmABIBUAAIABAAIBSAAIAGAAIASgBIASAAQCzgECVgRIgHuLIAAgIQirARjLADIhIAAIgmAAQjEgBifgOIg9gHIA9AHIAAOGIgCAOIhAgHIACgKIADuKIgBAAIi/gcIg1gLQgwgLgogPQhCgagBgfIAAiQQACA8D5AqQAxAIA1AHIBRAJQC9ASDoAAQDrAAC8gSIBQgJQA2gHAwgIQD6gqABg8IAACQQgBAZgqAWQghAQguAMIgNADIizAiIgWADIhLAJIBLgJIgFOVIg/AHIA/gHIAagEIBAgKQAygIAngJIADgBIgMuKIAxAAIAMN+QAqgNAbgNIAAg4IAiAJIAHACIgBAeIABgQIAACQQgBAYgqAWQg+AfiSAYQj6ArljAAQlhAAj7grgAK5HPQAbgGAWgGQgWAGgbAGgABSIMIAAAAgAAAIMIgBAAIAAuVIBIAAIALOVIhSAAgAq2HMIgGuSIA1ALIAFOHgAmKmYgAAepcQhZAAhBgKQhBgKgpgUQgpgUB3ALQA4gBBuACQBuABARABQARACAVgEIAmgGQAGADAHgDQAhgHgBAKQgBANhHATQhGAThaAAIAAAAg");
	this.shape_10.setTransform(85.7,82.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("ANZpgIAACQQgCAYgqAWQgiARgtALQgGACgGABIizAiQgLACgMABQglAFgmAEQirASjLACIhIABIgmAAQjEgCifgOIg9gGIgBAAIi/gcIg1gLQgxgLgngQQhCgagBgeIAAiQIAAgCQABg7D6grQDOgjETgHID3AAQEUAHDNAjQD6ArACA7IAAACQgDA7j5AqQgwAJg2AGQgnAFgpAEQi9ATjqAAQjpAAi8gTQgqgEgngFQg1gGgxgJQj5gqgCg7ANZHFQAAAFgCAZAMuG5IAjAKANZHSIAACRQgCAYgqAWQg9AeiTAZQj6ArljAAQlhAAj7grQh6gVg+gYQhCgagBgeIAAiRAMuG5IAAA5QgZANgqANQgXAGgbAGQgCAAgBABQgoAJgxAIQgfAGggAEQgNACgOABQgfAEgfAEQiWAQizAFIgSAAQgJAAgJAAQgDAAgDAAQgpAAgpAAIgBAAIhVAAQgSAAgTAAQiSgEh/gLQghgEgfgDQhMgIhEgMQgUgDgSgEIAAAAQgdgFgZgGQg3gMgkgOAMumdIAANWALemGIAAAUIANN+AD2pVQAAANg/AJQhAAJhZAAQhZAAg/gJQhAgJAAgNQAAgNBAgKQA/gJBZAAQBZAABAAJQA/AKAAANgAtUG9IA6gCAtYHUIABgPAqHlyIAFOHIAAAOAsUmYIAANTIgBA/AIIleIgFOVAKtlyIAMOKABHlBIALOVAG9lNIAIOMAmKlQIAAOGAnHlWIgDOKAgBlAIAAOUAq8l9IAFOS");
	this.shape_11.setTransform(85.7,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,173.3,152.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#894407").ss(1.5,1,1).p("APwD5QgQgLiagwQjGg9muh7QhEgThMgWQlKhelIhbQg8gRg8gRQg5gQg5gPQgMgFgRgNQgigagagrQglg8g3gBQg3gBgZAvQgYAwBEA2QAZATAcAMQAvAUA2gBIdaKdQAugCAZgRQAdgUABgoQABhKhXggg");
	this.shape.setTransform(109.4,43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C672").s().p("At5jrQg2ABgvgUQgcgMgZgTQhEg2AYgwQAZgvA3ABQA3ABAlA8QAaArAiAaQARANAMAFIByAfIB4AiIKSC5ICQApQGuB7DGA9QCaAwAQALQBXAggBBKQgBAogdAUQgZARguACg");
	this.shape_1.setTransform(109.4,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,220.9,88.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#894407").ss(1.5,1,1).p("AtNJWQAKgQB+hkQAcgWAhgZQBYhGCBhiQBvhVCNhrQAfgYAhgZQAWgQAWgQQCqiBCph/QAsgiAsggQA8gtA8gtQApgeAogfQA5gqA5grQAJgIALgSQAWglAJgxQANhFAzgVQAygWApAkQAoAjgsBKQgtBLhQAcI3oUZQhgAggbhFQgchEBGg+g");
	this.shape.setTransform(89.6,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C672").s().p("At3LYQgchEBGg+QAKgQB+hkIA9gvQBYhGCBhiID8jAIBAgxIAsggIFTkAIBYhCIB4haIBRg9IByhVQAJgIALgSQAWglAJgxQANhFAzgVQAygWApAkQAoAjgsBKQgtBLhQAcI3oUZQgeAKgYAAQgyAAgTgvg");
	this.shape_1.setTransform(89.6,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,181.3,157.1), null);


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.scoreDisplay = new cjs.Text("0", "bold 60px 'Rockwell Extra Bold'", "#FFFFFF");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.textAlign = "center";
	this.scoreDisplay.lineHeight = 72;
	this.scoreDisplay.lineWidth = 100;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(0,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.scoreDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.score, new cjs.Rectangle(-52,-37.2,104,74.5), null);


(lib.roundedredcenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ak8BfQgQAAgLgLQgLgMAAgPIAAhxQAAgQALgLQALgLAQAAIJ5AAQAPAAAMALQAKALABAQIAABxQAAAPgLAMQgMALgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-9.5,71,19);


(lib.rectbevelgold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape.setTransform(22.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgaIAAgJIAJAAIAAAJg");
	this.shape_1.setTransform(18.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_2.setTransform(13.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgJAmIgJgCIAAgJIABAAIAHACIAKABIAHgBIAEgDIADgFIABgGIAAgFQgFAEgDABQgEACgFAAQgKAAgGgHQgFgHAAgMQAAgHACgFQABgFAEgEQADgDAFgCQAEgCAEAAIAIABIAHADIAAgDIAJAAIAAAwQAAANgHAHQgGAGgMAAIgIAAgAgJgYQgFAFAAAKQAAAJAEAEQADAEAHAAIAHgBIAIgEIAAgdIgHgCIgHgBQgGAAgEAFg");
	this.shape_3.setTransform(7.7,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAXAkIgIgUIgeAAIgHAUIgKAAIAahHIAMAAIAbBHgAgMAIIAYAAIgMgjg");
	this.shape_4.setTransform(1.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgOAlIAKgWIgWgzIAKAAIAQAnIARgnIAJAAIgeBJg");
	this.shape_5.setTransform(-8.5,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgRAYQgFgFAAgIQAAgGADgEQACgCAFgDIAMgDIAOgBIAAgBQAAgDgBgCIgDgEIgFgBIgFgBIgIABIgJADIAAAAIAAgJIAHgCIAKgBIAJABQAFABADADQADACACADQABAEAAAFIAAAkIgJAAIAAgGIgDADIgEACIgGACIgGABQgHAAgFgFgAAEAAIgIABQgEABgCACQgDADAAAEQAAAEADADQADACAGAAQAEAAAEgCIAHgEIAAgOIgKAAg");
	this.shape_6.setTransform(-14.5,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_7.setTransform(-18.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgXAkIAAhHIAUAAIAKABQAEABAEACQAEADACAEQADAEAAAHQAAAEgCAFQgCAEgDACQgEADgFACQgFACgHAAIgJAAIAAAbgAgNABIAIAAIAIgBQAEAAACgCIAEgFIABgGQAAgEgCgDQgBgDgDgBIgFgCIgHgBIgJAAg");
	this.shape_8.setTransform(-22.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7F2F6").s().p("AgQAbIAAg1IAJAAIAAAIQAFgFAEgBQAEgCAEAAIAEAAIADAAIAAAKIAAAAIgFgBIgEAAQgEAAgEACIgHAFIAAAlg");
	this.shape_9.setTransform(11.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7F2F6").s().p("AgQAVQgIgHAAgOQAAgMAIgIQAHgIALAAQALAAAGAHQAGAGAAAMIAAAEIgnAAQAAAFABAEIAEAGQADACADABQADACAEAAQAGAAAFgDQAGgCACgCIABAAIAAAKIgKADQgEACgGAAQgMAAgIgIgAgJgQQgFAEAAAHIAeAAQAAgHgEgEQgDgEgIAAQgGAAgEAEg");
	this.shape_10.setTransform(6.2,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7F2F6").s().p("AgGAfQgEgEAAgKIAAgcIgGAAIAAgIIAGAAIAAgQIAJAAIAAAQIASAAIAAAIIgSAAIAAAXIAAAHIABAFIADADIAFAAIAFAAIAEgBIAAAAIAAAIIgGABIgFAAQgHAAgFgEg");
	this.shape_11.setTransform(1.3,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7F2F6").s().p("AAOAcIAAgeIgBgHIgBgFIgEgEIgGgBQgDAAgEACIgIAGIAAAnIgJAAIAAg2IAJAAIAAAGIAJgFQAEgCAFAAQAJAAAEAGQAFAFAAAJIAAAjg");
	this.shape_12.setTransform(-3.9,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7F2F6").s().p("AgXAkIAAhHIAvAAIAAAIIglAAIAAAUIAlAAIAAAIIglAAIAAAbIAlAAIAAAIg");
	this.shape_13.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outline inner
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFEFCC").ss(1,1,1).p("AFtheIAAC9IrZAAIAAi9g");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},3).wait(1));

	// bevel inner
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FDBE2D","#FDDA8A"],[0,1],8.3,6.8,-7.3,-6.7).s().p("AlnBaIAAizILPAAIAACzg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FDD579","#FFEFCC"],[0,1],8.3,6.8,-7.3,-6.7).s().p("AlnBaIAAizILPAAIAACzg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DB9902","#FDCF68"],[0,1],8.3,6.8,-7.3,-6.7).s().p("AlnBaIAAizILPAAIAACzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// outline outer
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E39F02").ss(1,1,1).p("AGLB9IsVAAIAAj5IMVAAg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#33775B").ss(1,1,1).p("AGLh8IAAD5IsVAAIAAj5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[]},2).wait(1));

	// bevel outer
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FDBE2D","#FDDA8A"],[0,1],-9,-8.9,8,9).s().p("AmFB4IAAjvIMLAAIAADvg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FDD579","#FFEFCC"],[0,1],-9,-8.9,8,9).s().p("AmFB4IAAjvIMLAAIAADvg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DB9902","#FDCF68"],[0,1],-9,-8.9,8,9).s().p("AmFB4IAAjvIMLAAIAADvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-13.5,81,27);


(lib.roundedred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA1QgHgIAAgQIAAgxIgKAAIAAgNIAKAAIAAgbIAPAAIAAAbIAeAAIAAANIgeAAIAAAqIAAALQABAEABADQABAEADACQADABAHAAIAHgBIAGgCIABAAIAAAOIgJACIgJABQgNAAgHgIg");
	this.shape.setTransform(19.5,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIAPAAIAAAOQAIgHAGgDQAHgEAHAAIAGAAIAEABIAAAQIAAAAIgHgBIgHAAQgHAAgGADQgFADgGAFIAABCg");
	this.shape_1.setTransform(13.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAoQgIgIgBgMQABgLAEgGQAEgGAJgEQAHgEALgBIAYgCIAAgCQAAgGgCgDQgBgEgEgCQgDgCgFAAIgIgBIgNACIgOAEIgBAAIAAgPIAMgEIAQgBQAIAAAIABQAGACAFAEQAFAEADAGQACAGAAAJIAAA/IgOAAIAAgKIgGADIgGAEIgJAEIgKABQgLAAgJgJgAAHAAQgIAAgGACQgGABgEAEQgEAFAAAHQAAAIAEAEQAFADAKAAQAGAAAHgDIAMgIIAAgZIgQACg");
	this.shape_2.setTransform(4.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA1QgHgIAAgQIAAgxIgKAAIAAgNIAKAAIAAgbIAPAAIAAAbIAeAAIAAANIgeAAIAAAqIAAALQABAEABADQABAEADACQADABAHAAIAHgBIAGgCIABAAIAAAOIgJACIgJABQgNAAgHgIg");
	this.shape_3.setTransform(-3.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA9QgKgCgKgFIAAgVIABAAQAJAJAMADQALAFAKAAQAOAAAIgGQAIgGAAgJQAAgJgEgEQgEgDgHgDIgNgCIgOgDQgPgDgIgIQgHgJAAgNQAAgQAMgKQAMgKATAAQAMABAKACQALACAIAEIAAATIgBAAQgHgFgLgEQgLgFgLABQgMAAgIAFQgHAGAAAJQAAAHAEAEQADAFAKACIANADIAQAEQANADAHAHQAGAHAAANQAAAIgDAHQgDAHgGAFQgGAFgIADQgJADgLAAQgMAAgLgDg");
	this.shape_4.setTransform(-12.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E4180F","#FFFFFF"],[0,1],0,10.1,0,-9.9).s().p("AlCBiQgqgDAAgFIAAizQAAgEAqgEQAqgCA+AAIG2AAQA7gBAqADQAqAEADAEIAACzQAAAEgtADQgqADg7AAIm2AAQg+AAgqgCg");
	this.shape_5.setTransform(0.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6666").s().p("Ak3BaQgQAAgLgLQgLgLAAgOIAAhrQAAgPALgKQALgLAQAAIJvAAQAQAAAKALQAMAKAAAPIAABrQAAAOgMALQgKALgQAAg");

	this.instance = new lib.roundedredcenter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.986,0.947,180);
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);
	this.instance.filters = [new cjs.ColorFilter(0.9, 0.9, 0.9, 1, 22.8, 2.4, 1.5, 0)];
	this.instance.cache(-37,-11,75,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// middle layer
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlABkQgRAAgLgMQgLgMAAgQIAAh3QAAgRALgLQALgMARAAIKBAAQAQAAALAMQAMALAAARIAAB3QAAAQgMAMQgLALgQABg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("Ak7BkQgTAAgMgMQgNgMAAgQIAAh3QAAgRANgLQAMgMATAAIJ3AAQASAAANAMQAMALABARIAAB3QAAAQgNAMQgNALgSABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},2).to({state:[]},1).wait(1));

	// outer layer
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E4180F","#F36161"],[0,1],-0.4,11,0.1,-13.3).s().p("AlEBuQgTAAgNgNQgNgNAAgSIAAiDQAAgTANgMQANgNATAAIKJAAQASAAAOANQANAMAAATIAACDQAAASgNANQgOAMgSABg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F03131","#F79999"],[0,1],-0.4,11.1,0,-13.3).s().p("AlEBuQgTAAgNgNQgNgNAAgSIAAiDQAAgTANgMQANgNATAAIKJAAQASAAANANQANAMABATIAACDQAAASgOANQgNANgSAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).wait(3));

	// shadow
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83343D").s().p("Ak9BoQgQAAgKgMQgMgMAAgRIAAh8QAAgRAMgNQAKgMAQAAIJ6AAQAQAAAMAMQAKANABARIAAB8QAAARgLAMQgMAMgQAAg");
	this.shape_11.setTransform(3,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("Ak9BoQgQAAgKgMQgMgMAAgRIAAh8QAAgRAMgNQAKgMAQAAIJ6AAQARAAALAMQALANAAARIAAB8QAAARgLAMQgLAMgRAAg");
	this.shape_12.setTransform(0.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-14,104.6,27.4);


// stage content:
(lib.ClickGame1KHarrison = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,Game:10,GameOver:20,"Game":10});

	// timeline functions:
	this.frame_0 = function() {
		this.Start.addEventListener("click", fl_Start.bind(this));
		
		function fl_Start()
		{
			// Actions you want the button to do go here
			this.gotoAndStop("Game"); // jump to the frame with the label "Game"
		}
	}
	this.frame_9 = function() {
		this.stop();
		
		this.Start.addEventListener("click", fl_Start.bind(this));
		
		function fl_Start()
		{
			// Actions you want the button to do go here
			this.gotoAndStop("Game"); // jump to the frame with the label "Game"
		}
	}
	this.frame_10 = function() {
		// Countdown Timer
		var secondsLeft = 15; // Creates a variable to store the seconds 
		// Text field with Instance name countdown_txt will display the seconds 
		this.time_mc.countdown_txt.text = secondsLeft; 
		// Use the setInterval to call the countdown function every 1000 ms 
		var timerId = setInterval(countdown.bind(this), 1000); 
		function countdown() {
			if (secondsLeft == 0) {
				// doStuff such as end game
				clearInterval(timerId); // Should stop the timer 
				this.gotoAndStop("GameOver");
			} else {
				secondsLeft--; // reduce seconds by 1. Same as secondsLeft -= 1;
				this.time_mc.countdown_txt.text = secondsLeft; // update the text field 
			}
		}
		
		this.target.addEventListener("click", hitTarget.bind(this));
		
		function hitTarget()
		{
			// Score increases and updates scoreDisplay text on screen
			this.increaseScore(); 
			// Target disappears / moves to new location
			moveInterval = 0;
		}
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		};
		
		
		var moveInterval = 7; // Tenths of a second until target moves (12= 1.4 sec)
		var moveTimer = setInterval(moveTarget.bind(this), 100);
		
		function moveTarget() {
			if (moveInterval <= 0) {
				// Randomly move target to a new location
				this.target.x = random(2, stage.canvas.width * 0.7);
				this.target.y = random(2, stage.canvas.height * 0.7);
				moveInterval = 7; // This could gradually be lowered
			} else {
				moveInterval--;
			}
		
		}		
		
		
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function() {
			score += 1;
			this.score_mc.scoreDisplay.text = score;
		}
	}
	this.frame_20 = function() {
		var _this = this;
		var score = 0; // Create a variable to hold a number, set it to 0
		
		this.increaseScore = function() {
			score += 1;
			this.scoreDisplay.text = score;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(10).call(this.frame_20).wait(20));

	// Buttons
	this.Start = new lib.roundedred();
	this.Start.name = "Start";
	this.Start.parent = this;
	this.Start.setTransform(498.7,488.2,1.852,1.852,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.Start, 0, 1, 2, false, new lib.roundedred(), 3);

	this.target = new lib.target();
	this.target.name = "target";
	this.target.parent = this;
	this.target.setTransform(475.1,347.3,1,1,0,0,0,85.7,75.5);
	new cjs.ButtonHelper(this.target, 0, 1, 2, false, new lib.target(), 3);

	this.instance = new lib.rectbevelgold();
	this.instance.parent = this;
	this.instance.setTransform(496.2,436.2,2.244,2.244,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.rectbevelgold(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Start}]}).to({state:[{t:this.target}]},10).to({state:[{t:this.instance}]},10).to({state:[]},10).wait(10));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape.setTransform(-133.8,427.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgCIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAVIACAAQAFgKAKgIQAKgHAKgBQAHABAEAEQAEADAAAGQgBAHgDADQgEAEgFABIgEgCIgEgBIgFgCIgFgBQgEAAgFADQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEABIAOAAIACABIABABIAAAGIgBACIgBAAIgKAAg");
	this.shape_1.setTransform(-145.1,427.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_2.setTransform(-158.1,427.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_3.setTransform(-171.3,427.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBqQgLgEgKgHIgEgDIgDgBIgCACIgCAEIgDADIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgEIABgKIABgQIACgRIAAgLIABgBIACgBIAEABIACAAIAAACQAAAHACAIQABAJAIALQAHAKALAGQAMAGALAAQAJAAAJgEQAKgEAGgIQAHgJAAgNQAAgPgHgKQgGgKgLgGQgKgGgLgEIgNgFIgQgGQgJgFgGgHQgHgHgFgLQgDgLAAgPQAAgLAGgKQAFgKAHgHQAIgIALgDQALgEANAAQAMABAIACIAOAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIACgBIAFgEIABgBIACgBIACACIAAADIACALIABAPIABANIABAJIAAACIgBAAIgEABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBgGgEgJQgFgIgJgKQgFgGgJgDQgIgEgKAAQgNAAgIAGQgHAFgEAIQgEAIAAAIQAAAHACAHQACAGAFAGQAFAFAHADIAMAGIAKAEIAcAKQAMAGAIAIQAGAHAEAKQADAJAAAPQABASgIAPQgGAOgPAJQgNAJgUABQgOgBgMgEg");
	this.shape_4.setTransform(-185.9,423.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAJQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEIAAADIgCABIgJgBg");
	this.shape_5.setTransform(-209.9,422.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBoQgMgDgLgFQgIgFgDgGQgEgHAAgHQAAgIAFgIQAFgHAHgFIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgCIAAgBQgGgCgGgGQgGgGgFgJQgEgJAAgOQAAgKAFgKQAGgKALgGQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHAAIgHADIgGAGQgDACAAAEQAAAHAFACQAEACAIAAIASAAQASgCAMADQAMADAJAGQAJAIADAIQADAHAAAGQAAALgFAIQgEAJgMAJQgGAFgNAEQgNAEgSABIgXgBgAAAAjIgcACQgFABgFAFQgGADgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgGQAHgDAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGAAgAgRheQgFACgFAEQgHAIgCAKQgDAJABAJQAAAHACAHQADAHAEAFQAEAEAFACQAEACAFgBQAKABAFgIQAGgGADgLQACgKAAgJQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_6.setTransform(-225.1,431.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAOAAIAEgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgCgBIgBgBIAAgCIABgBIABgCIAQgGIAQgIIACgBIADgBIABABIAAACIAAASIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAABIAAAGIAAACIgCAAIgGAAgAgOhCQgEgDgCgDQgDgEgBgFQAAgGAFgFQAFgFAKgBQAHABAEAFQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_7.setTransform(-236.5,424);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABmBrIgZgBIgVABIgOAAIgKAAIgBAAIgBgCIAAgIIABgBIACgBIATAAQAFAAABgDQACgEAAgGIAAgQIAAgWIAAgWIABgOIAAgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQgBgBgEABIhtAAIgDAAIgBADIAAAGIAAAMIAAAVIABAXIAAATQAAAGACACQACACAFAAIAPAAIACABIAAABIAAAIIAAACIgCAAIgNAAIgZgBIgUABIgNAAIgIAAIgCAAIgBgCIAAgIIABgBIACgBIARAAQAGAAABgEQACgEAAgGIAAgNIAAgTIAAgVIABgRIAAgKIAAgMIgBgRIAAgUIAAgRIAAgKQAAgLgDgEQgCgFgIABIgOAAIgCgBIAAgCIAAgHIABgCIABAAIAIAAIANABIAVAAIAbgBIANAAIACAAIABABIAAAIIAAACIgCABIgQAAQgHAAgCAEQgDAEABAJIAAAJIgBAQIAAATIAAAQIAAAFIABACIADABIBuAAIAEgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgDIgBgQIAAgUIAAgRIAAgJQAAgHgCgEQgCgEgGAAIgQAAIgBgBIgBgBIAAgIIABgCIABAAIAOAAIAaABIAYgBIAOAAIACABIAAABIAAAIIAAABIgCABIgOAAQgGAAgCAEQgBADAAAJIAAAKIgBAUIAAAVIAAAPIAAAKIAAANIAAAZIABAZIAAATQAAAIADAEQACAEAHgBIANAAIACABIABABIAAAIIgBACIgBAAIgNAAg");
	this.shape_8.setTransform(-253.5,423.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAzBnQgKgFgIgHQgIgIgGgIIgLgOIgLAOQgHAJgJAHQgJAHgMAFQgLAFgOABQgLgBgLgDQgLgEgKgGQgJgHgGgJQgFgKAAgNQAAgLADgJQAEgKAFgHQAGgJAGgFIAQgMIATgLQgQgKgIgJQgIgLAAgIQABgJAFgJQAFgJAHgHQAIgIAIgFQAIgEAHAAQALAAAKAGQAKAGAGAJQAFAKAAAKQAAAJgGAHQgFAJgIAHQgHAGgHAEQALAFALAKQAMAJAKALQALALAHALIAMgQIAMgSQAFgJABgFQAAgDgCgDQgCgDgFAAIgFAAIgCAAIAAgCIAAgHIAAAAIACgBIAGAAIALABIAMAAIAMAAIAMgBIAHAAIABABIABABIAAAHIgBABIgBAAIgFAAIgMABQgEABgCABIgFAGIgGAJIgNARIgNASIgKAMIAHAIIAJAKIAHAHIAKAJQAGAGAHAEQAIAEAKAAQAJgBAHgFQAHgFAFgFIAFgIIABAAIABAAIAFADIAAADIgGAKQgEAGgHAGQgHAHgJAEQgKAEgNABQgMgBgKgFgAhUACQgJAJgFALQgGALAAANQABAMAHAKQAIAKALAGQALAGAMABQALgBAJgEQAJgEAHgHQAIgGAFgFIAHgKIgQgXQgKgNgNgLQgMgLgOgIQgLAGgKAIgAhChbQgGAEgEAJQgEAIAAAJQAAAFAFAGIALALIAPALIAJgIQAFgFADgHQAEgHAAgMQAAgFgDgHQgCgHgGgFQgFgFgIgBQgHAAgHAGg");
	this.shape_9.setTransform(-284.6,423.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_10.setTransform(-312.4,427.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgCIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAVIACAAQAFgKAKgIQAKgHAKgBQAHABAEAEQAEADAAAGQgBAHgDADQgEAEgFABIgEgCIgEgBIgFgCIgFgBQgEAAgFADQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEABIAOAAIACABIABABIAAAGIgBACIgBAAIgKAAg");
	this.shape_11.setTransform(-323.8,427.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_12.setTransform(-336.7,427.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_13.setTransform(-350,427.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXBqQgLgEgKgHIgEgDIgDgBIgCACIgCAEIgDADIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgEIABgKIABgQIACgRIAAgLIABgBIACgBIAEABIACAAIAAACQAAAHACAIQABAJAIALQAHAKALAGQAMAGALAAQAJAAAJgEQAKgEAGgIQAHgJAAgNQAAgPgHgKQgGgKgLgGQgKgGgLgEIgNgFIgQgGQgJgFgGgHQgHgHgFgLQgDgLAAgPQAAgLAGgKQAFgKAHgHQAIgIALgDQALgEANAAQAMABAIACIAOAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIACgBIAFgEIABgBIACgBIACACIAAADIACALIABAPIABANIABAJIAAACIgBAAIgEABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBgGgEgJQgFgIgJgKQgFgGgJgDQgIgEgKAAQgNAAgIAGQgHAFgEAIQgEAIAAAIQAAAHACAHQACAGAFAGQAFAFAHADIAMAGIAKAEIAcAKQAMAGAIAIQAGAHAEAKQADAJAAAPQABASgIAPQgGAOgPAJQgNAJgUABQgOgBgMgEg");
	this.shape_14.setTransform(-364.5,423.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBSAAIADAAIABADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_15.setTransform(-386.6,425.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_16.setTransform(-152,374.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_17.setTransform(-167.7,374.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_18.setTransform(-179.6,372.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_19.setTransform(-189.1,372.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_20.setTransform(-201.9,374.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUBrIgUgBIgPABIgOAAIgJAAIgEAAIAAgCIAAgIIAAgBIACgBIAPAAQAGABADgEQACgDABgHIAAgKIABgTIAAgVIAAgVIAAgiIAAgMIAAgRIAAgPIgBgJQAAgJgCgEQgCgEgEgBIgLAAIgKAAIgBgBIgBgBIAAgIIABgCIABAAIAOAAIAaABIAMAAIAOgBIAMAAQARAAAOACQAOACAIAEQAMAHAFAKQAGALAAANQAAAPgFAIQgEAJgIAGIgUALIABABQAWAHANANQANAPABAXQAAAIgDAJQgDAJgFAHQgGAIgHAEQgJAGgOADQgNACgVAAIgYAAgAAdBdQALgEAHgLQAGgKAAgSQAAgSgIgMQgIgMgOgFQgJgDgKgBIgUAAIgJAAIAAARIAAAqQgBAUAHAKQAHAKARgBQANABALgFgAgVhgIgDACIgBADIAAAMIAAAVIAAAYIAAAWIAIABIAHAAQAMAAAKgCQAKgCAFgEQAJgHAEgJQAEgKAAgKQAAgIgDgJQgDgIgJgGQgIgGgLgCQgKgDgLABIgFgBIgFABg");
	this.shape_21.setTransform(-219.9,370);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag/BkQgEgFAAgGQAAgFAEgDQAEgDAGgBIAIACIAFACIAEgBIADgBIAFgJIAHgPIAHgQIAFgMIgEgNIgJgZIgKgeIgIgaIgFgMIgFgKQgDgDgGAAIgIAAIgCAAIAAgDIAAgFIAAgCIACgBIAIAAIAUABIASgBIAKAAIACABIAAACIAAAFIAAADIgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAEIADALIAFATIAHAVIAFATIAEAKIABAAIAEgJIAHgRIAJgVIAHgRIAEgKQABgGgBgDQgCgDgDAAIgFAAIgCAAIAAgDIAAgFIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAIAQABIALgBIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIAAAFIAAADIgBAAIgFAAIgFABIgGAEIgKAUIgRAkIgUAsIgMAgIgLAYIgIAPIgEAJQgDAEgFADQgFAEgIAAQgJAAgEgEg");
	this.shape_22.setTransform(-243.2,378.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgGIAAgSIgBgJQgBgFgCgEQgDgDgDgBQgFgCgGAAIgLACQgFACgEACQgDADABAEIABAHQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgGQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAFAEAAQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_23.setTransform(-255.8,374.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAAAQACgCAAgFIAAgNIABgXIAAgYIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgEQgEgFgGgCIgHgCIgBAAIgBgBIAAgDIABgBIACgBIARgIQAKgEAHgGIAEgBIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_24.setTransform(-266.5,369.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBBrIgOAAIgWgBIgdABIgMAAIgCAAIgBgCIAAgIIABgBIABgBIANAAQAIABADgCQACgCAAgGIAAgKIABgVIAAgaIAAgcIAAghIAAgRIAAgRIAAgPIAAgHQAAgEgDgBIgIgBIgSAAIgBgBIAAgCIAAgHIAAgCIABAAIAMAAIAfABIAJAAIAMgBIALAAQARAAAMABQALACAJADQAJADAJAGQAKAHAGAMQAGALAAANQAAAdgUAQQgUAPgkABIgQgBIgQgBIAAAQIAAAOIAAATIABARIAAAJQABAFACACQADACAEAAIATAAIABABIABABIAAAIIgBACIgCAAIgFAAgAgRhgIgIACIAABeIAMACIAPABQAOAAALgFQALgGAGgIQAFgHACgIQABgIAAgIQAAgOgGgKQgGgKgIgFQgJgGgJgCQgKgDgFABIgHAAIgJAAg");
	this.shape_25.setTransform(-279.4,370);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoBvIgKgFIgBgCIAAgCIBZjSIABgCIADAAIAJAEQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIgBACIhYDSIgCADIgBAAIgBAAg");
	this.shape_26.setTransform(-301.6,370);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_27.setTransform(-318.8,372.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAVIACAAQAFgLAKgHQAKgIAKgBQAHABAEADQAEAFAAAFQgBAGgDAFQgEADgFAAIgEAAIgEgCIgFgBIgFgBQgEAAgFADQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACABIABADIAAAEIgBACIgBACIgKgBg");
	this.shape_28.setTransform(-328.7,374.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgGIAAgSIgBgJQgBgFgCgEQgDgDgDgBQgFgCgGAAIgLACQgFACgEACQgDADABAEIABAHQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgCAAgGQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAFAEAAQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgFIAAgkIgKAGg");
	this.shape_29.setTransform(-340,374.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_30.setTransform(-351.4,372.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXBqQgLgEgKgHIgEgDIgDgBIgCACIgCAEIgDADIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgEIABgKIABgQIACgRIAAgLIABgBIACgBIAEABIACAAIAAACQAAAHACAIQABAJAIALQAHAKALAGQAMAGALAAQAJAAAJgEQAKgEAGgIQAHgJAAgNQAAgPgHgKQgGgKgLgGQgKgGgLgEIgNgFIgQgGQgJgFgGgHQgHgHgFgLQgDgLAAgPQAAgLAGgKQAFgKAHgHQAIgIALgDQALgEANAAQAMABAIACIAOAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIACgBIAFgEIABgBIACgBIACACIAAADIACALIABAPIABANIABAJIAAACIgBAAIgEABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBgGgEgJQgFgIgJgKQgFgGgJgDQgIgEgKAAQgNAAgIAGQgHAFgEAIQgEAIAAAIQAAAHACAHQACAGAFAGQAFAFAHADIAMAGIAKAEIAcAKQAMAGAIAIQAGAHAEAKQADAJAAAPQABASgIAPQgGAOgPAJQgNAJgUABQgOgBgMgEg");
	this.shape_31.setTransform(-364.5,370);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIADAAIABADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_32.setTransform(-386.6,372.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXA/QgHgDgEgDIgBgCIAAgCIgGgcIABgCIACgBIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHAKQADAEAEADQAEACAHAAQAGAAAFgCQAGgCADgFQAEgEAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgHQgFgIAAgLQAAgLAFgIQAHgIAJgFQAKgFAKAAQAKAAAHACIAKAEIAFADIABACIAEAVIgBACIgBACIgDABIgCAAIgBgCIgLgOQgCgEgFgEQgEgEgJABQgFgBgFADQgGACgDAFQgDAEgBAGQABAJAEAEQAEAFAGACIAOAFQAQAFAJAHQAKAIABARQgBANgGAIQgGAKgKAEQgKAFgMAAQgLgBgJgCg");
	this.shape_33.setTransform(-288.9,321.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_34.setTransform(-298.7,319.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYBiIgKAAIgMAAIgVAAIgLAAIgBAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgIIADgBIAEgBIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIACAAIABACIAAAGIgBACIgBAAIgHAAgAgOhCQgEgCgDgEQgCgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAFAFAAAFQAAAGgFAGQgEAFgIABQgEAAgEgCg");
	this.shape_35.setTransform(-307.8,317.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_36.setTransform(-319.3,316.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_37.setTransform(-333.8,321.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAVIACAAQAFgKAKgIQAKgHAKAAQAHAAAEAEQAEADAAAGQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFADQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEABIAOAAIACAAIABACIAAAGIgBACIgBAAIgKAAg");
	this.shape_38.setTransform(-345.1,321.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiBnQgSgHgOgNQgLgKgHgOQgHgOgDgQQgEgPAAgOQAAgVAHgUQAIgVAQgRQAHgIAMgHQALgHAOgEQAOgEAQgBQANABAMACIAVAHIAOAHIAFACIABgCIADgJIABgBIADgBIACABIABAEIABALIACARIADATIABALIAAACIgBABIgEACIgCgBIgBgCIgJgRQgFgKgKgKQgJgKgNgGQgMgHgSAAQgTAAgOAIQgPAIgJANQgJANgEARQgEAQAAAQQAAAIACANQADANAGAPQAGAOAMANQAKAMAJAFQAKAFAJACQAJACAKAAQARgBAOgFQAOgFALgJQALgJAHgKIABgBIABABIAEADIABABIgBABQgJANgMAMQgNALgRAHQgRAHgVABQgZgBgSgHg");
	this.shape_39.setTransform(-361.7,317);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIADAAIABADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_40.setTransform(-386.6,319.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXA/QgHgDgDgDIgCgBIAAgDIgGgdIABgBIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAGAKQADADAEADQAEACAIABQAFgBAFgCQAGgCADgEQAEgFAAgHQABgKgHgGQgGgHgQgEQgJgDgIgEQgIgEgFgIQgFgHAAgMQAAgKAGgIQAFgIAKgFQAKgFAKAAQALAAAGACIAKAEIAEADIACADIAEAVIgBABIgBABIgEABIgBAAIgBgBIgLgNQgCgGgFgDQgFgEgIAAQgFAAgGADQgFACgDAEQgDAFgBAHQABAIAEAEQAEAFAHADIAMAEQARAFAJAHQAKAIAAASQAAALgGAKQgGAJgKAEQgKAFgMAAQgLgBgJgCg");
	this.shape_41.setTransform(-251.3,268.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_42.setTransform(-264.4,268.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_43.setTransform(-280.2,268.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgKABIgDgBIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgDQgDgFgLgBIgCgBIgBgCIAAgDIABgBIABgBIAQgGIAQgJIADgBIACAAIABABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAABABIAAACIAAAEIAAADIgDABIgFgBgAgOhDQgEgCgCgDQgEgEAAgFQAAgGAFgFQAFgGAJABQAIgBAEAGQADAFAAAFQAAAGgDAGQgFAGgJAAQgDAAgEgDg");
	this.shape_44.setTransform(-291.5,264.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_45.setTransform(-300,266.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_46.setTransform(-311,268.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_47.setTransform(-323.8,268.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgHQAKgIAKgBQAHAAAEAFQAEAEAAAFQgBAGgDAFQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACACIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_48.setTransform(-335.1,268.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAYBiIgKAAIgMAAIgVAAIgLABIgCgBIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgEIAAgOIAAgNIAAgtQAAgHgDgDQgDgFgLgBIgDgBIAAgCIAAgDIAAgBIACgBIAPgGIAQgJIAEgBIADAAIAAABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABIABACIAAAEIgBADIgCABIgGgBgAgOhDQgEgCgDgDQgDgEAAgFQABgGAEgFQAFgGAJABQAIgBADAGQAFAFAAAFQAAAGgFAGQgEAGgIAAQgEAAgEgDg");
	this.shape_49.setTransform(-344.5,264.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfBrIgTAAIgQgBIgeABIgMAAIgCAAIAAgCIAAgIIAAgBIACgBIAUAAQAEAAADgBQACgCABgEIAAgKIABgUIAAgYIABgYIAAgSIAAgWIAAgMIgBgRIAAgRIgBgKQgBgFgDgCQgDgBgGAAIgQAAIgCgBIgBgBIAAgJIABgBIABAAIAOAAIAfABIAJAAIANgBIANAAIAJAAQATAAARACQARACAPAGQAQAGANALQAPANAJASQAJATAAAaQAAAZgHATQgIASgPAQQgOAQgRAHQgSAGgQACIgbABIgUAAgAgkhfQgEAAgDACQgDACgBADIgBAJIgBANIAAASIAAAQIAAAJIAAAWIAAAJIAAAVIABAXIAAATIABAIQABAEADAFQAEAFAIACQAIACAMAAQAWAAASgIQASgJALgPQAKgMAGgRQAGgSAAgTQAAgMgDgMQgDgNgGgLQgFgLgHgIQgMgNgUgHQgTgIgYAAIgIAAIgJABg");
	this.shape_50.setTransform(-361,263.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIADAAIABADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_51.setTransform(-386.6,266.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGBAQgEgBgEgEQgDgEAAgGIACgHQABgFAEgDQAEgCAHAAQAGAAAFAEQAFAFABAJQgBAHgEAEQgFAFgHAAIgHgCgAgGggQgEgCgEgDQgDgEAAgHIACgHQABgEAEgDQAEgDAHAAQAGAAAFAEQAFAGABAIQgBAHgEAFQgFAFgHAAIgHgCg");
	this.shape_52.setTransform(-26.3,215.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgFgDgFQgEgHAAgHQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgEAGgFQAGgEAFgBIAAgBQgGgDgGgFQgGgGgFgJQgEgKAAgNQAAgKAFgKQAGgJALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIAAQAHABAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgCgBIgEgDIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAIQAAAJgCAIQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAHAFACQAEACAIAAIASgBQASAAAMACQAMADAJAGQAJAHADAIQADAJAAAFQAAALgFAJQgEAIgMAJQgGAEgNAFQgNAEgSABIgXgCgAAAAjIgcADQgFABgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAFAFAEQAHAFAJACQAKACAPgBIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGAAgAgRheQgFABgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEABAFAAQAKAAAFgGQAGgIADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_53.setTransform(-37.2,219.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_54.setTransform(-52.4,215.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAYBiIgKAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAQgHIAQgIIACgBIADgBIACABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAOAAIADAAIAAACIAAAGIAAABIgCABIgHAAgAgOhCQgEgCgCgEQgDgEAAgFQgBgGAFgFQAFgGAKAAQAGAAAEAGQAEAFAAAFQAAAGgEAGQgEAGgJAAQgDAAgEgCg");
	this.shape_55.setTransform(-64.5,211.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohoQgBgFgDgCQgDgBgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgBIAJAAIASABIAQgBIAJAAIACABIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgEIgDgCIgFgBIgFAAIgBAAIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCAAIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACAAIAHAAIAQABIAOgBIAIAAIABABIABABIAAAGIgBACIgBABIgIAAQgDgBgCACIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_56.setTransform(-78.9,215.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_57.setTransform(-96.7,215.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIABgWIAAgYIAAgTIAAgRIgBgXIAAgVIAAgNQgBgHgEgFQgDgEgIgCIgGgCIgBgBIgBgBIAAgCIABgBIADgBIAQgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIAOAAIACABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_58.setTransform(-107.9,210.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIAAgWIAAgYIAAgTIAAgRIAAgXIAAgVIgBgNQAAgHgDgFQgFgEgGgCIgGgCIgCgBIAAgBIAAgCIABgBIABgBIASgIQAJgEAIgFIADgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIAAAcIgBAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_59.setTransform(-115.6,210.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_60.setTransform(-127.1,215.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AACBtIgZgBIgQABIgMAAIgGAAIgCAAIgBgCIAAgHIABgBIACgBIAPAAQAEAAACgDQABgCAAgGIAAg4IAAghIgVAAIgBgBIAAgCIABgJIABgCIADAAIARAAIAAgGQAAgWAGgPQAFgQAJgJQAMgNAMgGQALgFANAAQAHAAAHACQAGACADADQAEAEAAAGQABAFgFAEQgEADgEABIgEAAIgFgCIgDgEIgEgDQgDgDgDgCQgDgBgEgBQgHAAgFACQgGACgEAHQgFAHgDAKQgCAKAAAMIgBAWIAAAGIAkAAIACABIAAACIgCAJIgBABIgCABIghAAIAAAaIAAAgIABAXIAAAMQAAADABACQACACAEAAIARAAIACABIABACIAAAEIgBADIgBABIgKAAg");
	this.shape_61.setTransform(-137,210.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_62.setTransform(-157.7,215.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgLIAAgYQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAAEIAABAIABAKQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKAAAHAEQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAAQIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_63.setTransform(-172.2,210.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_64.setTransform(-184.8,213.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_65.setTransform(-203.8,215.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_66.setTransform(-217.8,210.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_67.setTransform(-233.6,215.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgYIAAgTIAAgRIgBgXIAAgVIAAgNQgBgHgEgFQgEgEgGgCIgHgCIgBgBIgBgBIAAgCIABgBIACgBIARgIQAKgEAHgFIAEgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_68.setTransform(-244.9,210.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_69.setTransform(-254.7,215.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_70.setTransform(-268.9,215.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAOAAIAEgBIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAQgIIACgBIADgBIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAOAAIADAAIAAACIAAAGIAAABIgCABIgGAAgAgOhCQgEgCgCgEQgDgEgBgFQAAgGAFgFQAFgGAKAAQAHAAAEAGQADAFAAAFQAAAGgDAGQgFAGgJAAQgDAAgEgCg");
	this.shape_71.setTransform(-281.1,211.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIAAgWIAAgYIAAgTIAAgRIAAgXIAAgVIgBgNQAAgHgDgFQgFgEgGgCIgGgCIgCgBIAAgBIAAgCIABgBIABgBIASgIQAJgEAIgFIADgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIAAAcIgBAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_72.setTransform(-296.5,210.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgYIAAgTIAAgRIgBgXIAAgVIAAgNQgBgHgEgFQgDgEgIgCIgGgCIgBgBIgBgBIAAgCIABgBIACgBIARgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIAOAAIACABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_73.setTransform(-304.2,210.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADAAIAOAAIAEgBIACgGIAAgNIAAgOIAAgsQAAgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgIIAEgBIADgBIAAABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABABIANAAIACAAIABACIAAAGIgBABIgCABIgGAAgAgOhCQgEgCgDgEQgDgEAAgFQABgGAEgFQAFgGAJAAQAIAAADAGQAFAFAAAFQAAAGgFAGQgEAGgIAAQgEAAgEgCg");
	this.shape_74.setTransform(-312.1,211.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohoQgBgFgDgCQgDgBgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgBIAJAAIASABIAQgBIAJAAIACABIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgEIgDgCIgFgBIgFAAIgBAAIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCAAIgGAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACAAIAHAAIAQABIAOgBIAIAAIABABIABABIAAAGIgBACIgBABIgIAAQgDgBgCACIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_75.setTransform(-326.4,215.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgXA+QgHgDgEgCIgBgCIAAgCIgGgcIABgCIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHAKQADAEAEADQAEACAHAAQAGAAAFgCQAGgCADgFQAEgEAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgLQAAgLAFgIQAHgIAJgFQAKgFAKAAQAKAAAHACIAKAEIAFADIABACIAEAVIgBACIgBACIgDABIgCAAIgBgCIgLgOQgCgEgFgEQgEgDgJAAQgFgBgFADQgGACgDAFQgDAEgBAGQABAJAEAFQAEAEAGACIAOAFQAQAFAJAHQAKAIABARQgBANgGAIQgGAKgKAEQgKAFgMAAQgLgBgJgDg");
	this.shape_76.setTransform(-349.7,215.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgIIADgBIAEgBIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAOAAIACAAIABACIAAAGIgBABIgCABIgGAAgAgOhCQgEgCgDgEQgCgEAAgFQAAgGAEgFQAFgGAJAAQAIAAADAGQAFAFAAAFQAAAGgFAGQgEAGgIAAQgEAAgEgCg");
	this.shape_77.setTransform(-359,211.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgLIAAgYQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAAEIAABAIABAKQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKAAAHAEQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAAQIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_78.setTransform(-371,210.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAmBwIgNAAIgXgBIggABIgNAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAAgCIADgBIAUAAQAEAAADgCQACgCAAgDIABgOIAAgaIAAgdIAAgYIAAgMIAAhOIgHAAIgOAAIgSABQgJABgHACQgGACgFAHQgGAGgDAHIgGANIgBACIgCAAIgGgCIgBgBIAAgCIAEgMIAFgRIADgPIADgJIABgDIACgBIABAAIACABIAEACQADADAEACIAKABIAPABIASABIAYAAIANAAIAbAAIATgBIAOgBIAJgBIAHgEIAGgDIACgBIABAAIACABIABADIABAJIADAPIACARIACANIAAADIgBAAIgFABIgCAAIgBgCIgDgKIgIgOQgFgHgEgCQgFgCgKgCIgUgCIgSAAIgIAAIAABWIAAAKIAAAWIAAAaIAAAXIAAALQABAGACADQACADAFAAIATAAIADABIABACIAAAGIgBADIgDAAIgFAAg");
	this.shape_79.setTransform(-390,210.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AB4CAIgogBIglABIgRACQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgCAAgDIAAgKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAFgBIARAAQAFABADgDQADgDABgIIABgZIAAgZIAAhPQAAgRgCgOQgDgNgMgKQgLgHgLgCIgVgBQgIAAgNAEQgOAFgOAOQgIAKgDALQgDALAAAIIAAB8QAAAMADAEQADAEAJgBIAPAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAKIgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgCIgkgBIglABIgRACQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgEIAAgLIABgEQABgBAEgBIARAAQAGABADgCQADgDAAgHIAAiMQAAgNgGgIQgHgJgLgFIgFgDIgEgCIgBgDIAAgDIACgDIADgDIA0gdIAHgCIAEgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIABAGIAEAkIABAAQAOgRAWgNQAXgNAWAAQAOgBANADQANAEALAGQAJAHAIAKQAHALAEAKQAFALAAAJIAACZQAAAHADADQAEADAGgBIATAAQAFABABABIABAEIAAAKIgBAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgSgCg");
	this.shape_80.setTransform(-122.1,134.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_81.setTransform(-151.1,134.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_82.setTransform(-176.7,134.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg4QAAgOgCgJQgCgJgFgEQgFgFgIgEIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPAAAIAIQAHAIAAALQAAANgIAHQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAGQgKAFgIAPIgEALIgBAHIAAB9QgBANAEAGQAEAFAIAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_83.setTransform(-199.3,134.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgkB8QgYgJgWgZQgQgWgFgUQgGgUABgUQAAgiAPggQAQggAdgUQAcgVAnAAQAfAAASAJQASAKAHALQAIALAAAHQgBAKgGAGQgGAFgKAAQgKAAgIgGQgIgGgHgMQgJgSgKgEQgKgFgLABQgQAAgQAKQgQALgLAUQgKAVgBAfQABAYAJAYQAIAZANARQAPATARAGQARAGAQgBQAVABAPgGQAPgGAOgOIADgCIACACIAGAGQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgJALgOAJQgPAKgTAGQgTAGgUABIgDAAQgWAAgWgIg");
	this.shape_84.setTransform(-221.7,135);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgvDUQgXgIgSgOIgIgGIgGgBQgCAAgDADIgEAHQgDAFgCABQgDABgDAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgCgDABgEIACgWIADggIADghIACgWIABgDIADgBIAJABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIABAEQgBAOAEAQQAEARAOAWQAOAVAWAMQAXAMAYAAQATAAASgIQATgIANgRQAMgRABgbQAAgegNgTQgNgUgVgMQgVgMgYgIIgZgJQgPgGgRgJQgRgKgNgNQgPgPgIgWQgHgVAAgeQAAgXAMgUQAKgUAPgOQAQgPAWgHQAVgGAZAAQAZAAASAGQATAEAIAFIAGACQADgBACgCIAIgHIAEgDIAEgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQACADAAAEIABAWIACAdIADAbIACASIAAADIgDACIgHABQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgOgIgRQgIgRgSgTQgMgNgQgGQgQgHgUAAQgbABgQALQgQALgHAQQgHAQAAAPQAAANADAOQAEANAMANQAIAIANAHQANAIAMAFIAVAIQAfAJAZAKQAYALARASQAMAOAHATQAHATAAAeQAAAkgOAdQgOAegbASQgcARgoABQgeAAgXgJg");
	this.shape_85.setTransform(-250.9,126.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgQCbQgNgIgIgMQgIgLgBgMIABggIAAgiIABgUIAAgNIAAgSIABgdIAAgdIgkAAQgEAAgDgCQgCgBAAgEQAAgEACgCIAIgFQAIgFAPgOQAOgNAOgQQANgQAFgLQABgDACgCIAFgBQADAAABADQABADAAADIgDA7IBUAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgGAVIgCAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIhNAAIgBAqIAAAqIAAA8QAAAWAFALQAFAMAHAEQAIAEAFgBIAWgBQALgCAHgEQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAIADAFQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCADQgDADgJAGQgJAFgOAFQgOAEgSABQgOgBgNgHg");
	this.shape_86.setTransform(-291.9,131.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg4QAAgOgCgJQgCgJgFgEQgFgFgIgEIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPAAAIAIQAHAIAAALQAAANgIAHQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAGQgKAFgIAPIgEALIgBAHIAAB9QgBANAEAGQAEAFAIAAIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_87.setTransform(-311.7,134.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAmB5QgMgLgEgSIgBAAQgJAMgOAIQgPAKgUAGQgJADgIABIgTAAQgHAAgJgFQgIgEgGgLQgFgLgBgTQAAgVANgRQAMgTAjgPIAcgLIAXgNQALgFAFgFIAAgmIgCgSQgCgJgEgHQgFgGgIgEQgJgDgNAAQgKAAgLADQgMAEgGAFQgGAHABAGIACAPQAAAQgHAJQgHAJgSAAQgHAAgEgEQgDgEAAgLQAAgPALgPQALgPATgLQATgLARgFQARgFATAAQAVAAAKAFQALAFAGAGQAJAJACALQADALgBAMIAABbIAAAjQAAAZAFAKQAFAKAIAAQAIAAAFgDQAGgDACgDIADgDQABgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAGAFQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABQAAACgCAEIgIAMQgFAHgKAFQgJAFgPABQgRAAgKgLgAgDAFQgNAGgOAIQgNAJgKAMQgJANAAASQAAARAJAIQAIAIAOAAQAJAAAMgGQAKgGAJgJQAIgIAAgJIAAhIQgIAGgMAFg");
	this.shape_88.setTransform(-334.2,135);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgQCbQgNgIgIgMQgIgLgBgMIABggIAAgiIABgUIAAgNIAAgSIABgdIAAgdIgkAAQgEAAgDgCQgCgBAAgEQAAgEACgCIAIgFQAIgFAPgOQAOgNAOgQQANgQAFgLQABgDACgCIAFgBQADAAABADQABADAAADIgDA7IBUAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgGAVIgCAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIhNAAIgBAqIAAAqIAAA8QAAAWAFALQAFAMAHAEQAIAEAFgBQALAAALgBQALgCAHgEQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAIADAFQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCADQgDADgJAGQgJAFgOAFQgOAEgSABQgOgBgNgHg");
	this.shape_89.setTransform(-357.1,131.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgvDUQgXgIgSgOIgIgGIgGgBQgCAAgDADIgEAHQgDAFgCABQgDABgDAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgCgDABgEIACgWIADggIADghIACgWIABgDIADgBIAJABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIABAEQgBAOAEAQQAEARAOAWQAOAVAWAMQAXAMAYAAQATAAASgIQATgIANgRQAMgRABgbQAAgegNgTQgNgUgVgMQgVgMgYgIIgZgJQgPgGgRgJQgRgKgNgNQgPgPgIgWQgHgVAAgeQAAgXAMgUQAKgUAPgOQAQgPAWgHQAVgGAZAAQAZAAASAGQATAEAIAFIAGACQADgBACgCIAIgHIAEgDIAEgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQACADAAAEIABAWIACAdIADAbIACASIAAADIgDACIgHABQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgOgIgRQgIgRgSgTQgMgNgQgGQgQgHgUAAQgbABgQALQgQALgHAQQgHAQAAAPQAAANADAOQAEANAMANQAIAIANAHQANAIAMAFIAVAIQAfAJAZAKQAYALARASQAMAOAHATQAHATAAAeQAAAkgOAdQgOAegbASQgcARgoABQgeAAgXgJg");
	this.shape_90.setTransform(-383.4,126.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgFgDgFQgEgHAAgHQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgFQAGgEAFgBIAAgBQgGgDgGgFQgGgGgFgJQgEgKAAgNQAAgKAFgKQAGgJALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIAAQAHABAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgCgBIgEgDIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAHAFACQAEACAIAAIASgBQASAAAMACQAMADAJAGQAJAHADAIQADAJAAAFQAAALgFAJQgEAIgMAJQgGAEgNAFQgNAEgSABIgXgCgAAAAjIgcADQgFABgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAFAFAEQAHAFAJACQAKACAPgBIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGAAgAgRheQgFABgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEABAFAAQAKAAAFgGQAGgIADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_91.setTransform(-179,397.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACgBIAOAAIAEAAIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAQgJIACAAIADgBIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIADABIAAACIAAAGIAAABIgCABIgGAAgAgOhCQgEgCgCgEQgDgEgBgFQAAgGAFgFQAFgGAKAAQAHAAAEAGQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_92.setTransform(-206.4,390);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEAAIACgGIAAgNIAAgOIAAgsQAAgIgDgDQgDgEgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAQgJIADAAIACgBIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAACIAAAGIAAABIgDABIgFAAgAgOhCQgEgCgCgEQgEgEAAgFQAAgGAFgFQAFgGAJAAQAHAAAFAGQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_93.setTransform(-230.3,390);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAGgHAEQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFADgEADQgDACABADIABAIQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgIQAGgHAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAFAEAAQAEAAADgCIAEgDIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgDIAAgkIgKAEg");
	this.shape_94.setTransform(-240.2,393.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgCgBIgBgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgCgGgEgFQgFgDgGgBQgFgCgHAAQgHAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgBABIgIgBIgTAAIgTAAIgIABIgCgBIgBgCIAAgFIABgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgGAAgHAEQgIAEgIAKIgDAJIAAALIAAA6QAAAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIALAAIADAAIABADIAAAEIgBADIgCABIgIgBIgUAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgGgDIgFgDIgDgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKAMgGQAMgHANAAQALAAAKAGQAHAGAEALIACAAQAHgJAMgHQALgHAOAAQAJAAAGACQAHACAFAFIAHAIQAEAEACAHQACAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIABADIAAAFIgBACIgCABIgHgBg");
	this.shape_95.setTransform(-259.2,393.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAEAAAGQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_96.setTransform(-289,393.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgXA+QgHgDgEgCIgBgCIAAgCIgGgcIABgCIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHAKQADAEAEADQAEACAHAAQAGAAAFgCQAGgCADgFQAEgEAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgLQAAgLAFgIQAHgIAJgFQAKgFAKAAQAKAAAHACIAKAEIAFADIABACIAEAVIgBACIgBACIgDABIgCAAIgBgCIgLgOQgCgEgFgEQgEgEgJABQgFgBgFADQgFACgEAFQgDAEgBAGQABAJAEAFQAEAEAGACIAOAFQAQAFAJAHQAKAIABARQgBANgGAIQgGAKgKAEQgKAFgMAAQgLgBgJgDg");
	this.shape_97.setTransform(-307.4,393.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgIBAIgCgFIgDgGIgFgPIgHgSIgGgPIgDgFIgCgHIgFgOIgFgNIgDgJIgFgIQgDgDgEABIgGAAIgCgBIAAgDIAAgFIABgCIACAAIAIAAIARABIATgBIAIAAIADABIAAABIAAAFIAAADIgCABIgGAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIABAHIADALIADALIADAHIADAIIAFAOIAGAOIADAKIAAAAIAHgPIAJgWIAIgWIAFgQQACgFgCgEQgBgEgEABIgGAAIgBgBIAAgDIAAgFIAAgBIABgBIAJAAIAPABIAPgBIAHAAIACAAIABADIAAAEIAAADIgCABIgFAAIgFAAIgFADQgCACgDAFIgHAPIgHAOIgFAMIgFAMIgJAUIgJATIgEAJIgCAGQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_98.setTransform(-331.9,393.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEAAIACgGIAAgNIAAgOIAAgsQAAgIgDgDQgDgEgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAPgJIAEAAIACgBIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAACIAAAGIAAABIgDABIgFAAgAgOhCQgEgCgCgEQgEgEAAgFQAAgGAFgFQAFgGAJAAQAHAAAFAGQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_99.setTransform(-342.5,390);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgZIAAgSIAAgRIgBgXIAAgVIgBgNQAAgHgEgFQgEgEgGgCIgHgCIgBgBIAAgBIAAgCIAAgBIACgBIARgIQAKgEAHgFIAEgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_100.setTransform(-350.3,388.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAEAAAGQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_101.setTransform(-366.7,393.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgFgDgFQgEgHAAgHQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgFQAGgEAFgBIAAgBQgGgDgGgFQgGgGgFgJQgEgKAAgNQAAgKAFgKQAGgJALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIAAQAHABAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgCgBIgEgDIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAHAFACQAEACAIAAIASgBQASAAAMACQAMADAJAGQAJAHADAIQADAJAAAFQAAALgFAJQgEAIgMAJQgGAEgNAFQgNAEgSABIgXgCgAAAAjIgcADQgFABgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAFAFAEQAHAFAJACQAKACAPgBIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGAAgAgRheQgFABgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEABAFAAQAKAAAFgGQAGgIADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_102.setTransform(-401.7,397.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_103.setTransform(-416.9,393.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADgBIAOAAIAEAAIACgGIAAgNIAAgOIAAgsQAAgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgJIAEAAIADgBIAAABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIACABIABACIAAAGIgBABIgCABIgGAAgAgOhCQgEgCgDgEQgDgEAAgFQABgGAEgFQAFgGAJAAQAIAAADAGQAFAFAAAFQAAAGgFAGQgEAFgIABQgEAAgEgCg");
	this.shape_104.setTransform(-429.1,390);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_105.setTransform(-440.9,393.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADgBIAPAAIADAAIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgJIADAAIAEgBIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIACABIABACIAAAGIgBABIgCABIgGAAgAgOhCQgEgCgDgEQgCgEAAgFQAAgGAEgFQAFgGAJAAQAIAAADAGQAFAFAAAFQAAAGgFAGQgEAFgIABQgEAAgEgCg");
	this.shape_106.setTransform(-453,390);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAGgHAEQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFADgEADQgDACABADIABAIQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgIQAGgHAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAFAEAAQAEAAADgCIAEgDIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgDIAAgkIgKAEg");
	this.shape_107.setTransform(-462.9,393.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("ABlBAIgRAAIgTAAIgJABIgCgBIAAgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQABgIgCgGQgDgGgFgFQgEgDgGgBQgFgCgGAAQgIAAgIAFQgHAEgEAHQgDAGgBAHIAAARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgSAAIgJABIgBgBIAAgCIAAgFIAAgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAg9IgBgRQgCgHgCgDIgEgFQgDgDgGgBIgKgCQgHAAgIAEQgHAEgHAKIgEAJIgBALIAAA6QABAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgJgBIgTAAIgSAAIgJABIgCgBIAAgCIAAgFIAAgDIADAAIAKAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgGIAAgHIAAgIIAAg1QAAgEgBgEQgCgEgFgDIgHgDIgBgBIgBgCIAAgCIABgBIABgBIAagOIADgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABADIABARIABAAQAHgKALgGQANgHANAAQALAAAJAGQAIAGAFALIABAAQAHgJAMgHQALgHAPAAQAHAAAHACQAHACAGAFIAGAIQADAEACAHQACAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgIgBg");
	this.shape_108.setTransform(-481.9,393.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAEAAAGQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEAAIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_109.setTransform(-511.7,393.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgDgBIAAgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgBgGgGgFQgDgDgHgBQgFgCgHAAQgHAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgBABIgIgBIgTAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgDgDgGgBIgLgCQgGAAgHAEQgJAEgGAKIgEAJIgBALIAAA6QAAAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIALAAIADAAIABADIAAAEIgBADIgCABIgJgBIgTAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgGIABgHIAAgIIAAg1QAAgEgBgEQgCgEgGgDIgGgDIgCgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKAMgGQALgHAOAAQAMAAAJAGQAHAGAEALIACAAQAHgJAMgHQAMgHANAAQAJAAAGACQAHACAFAFIAHAIQADAEADAHQACAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIABADIAAAFIgBACIgCABIgHgBg");
	this.shape_110.setTransform(-549.5,393.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEAAIACgGIAAgNIAAgOIAAgsQAAgIgDgDQgDgEgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAPgJIAEAAIACgBIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAACIAAAGIAAABIgDABIgFAAgAgOhCQgEgCgCgEQgEgEAAgFQAAgGAFgFQAFgGAJAAQAHAAAFAGQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_111.setTransform(-565.7,390);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAmBwIgNAAIgXgBIggABIgNAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAAgCIACgBIAVAAQAEAAADgCQACgCABgDIAAgOIABgaIAAgdIAAgYIAAgMIAAhOIgIAAIgOAAIgSABQgJABgGACQgHACgGAHQgFAGgDAHIgGANIgBACIgCAAIgFgCIgBgBIAAgCIADgMIAFgRIADgPIACgJIABgDIADgBIACAAIABABIAEACQAEADADACIAKABIAPABIASAAIAYAAIANAAIAbAAIASAAIAPgBIAJgBIAHgEIAFgDIADgBIACAAIABABIABADIABAJIACAPIAEARIABANIAAADIgBAAIgFABIgCAAIgBgCIgDgKIgIgOQgFgHgEgCQgGgCgJgCIgTgCIgSAAIgJAAIAABWIAAAKIAAAWIAAAaIAAAXIAAALQABAGACADQACADAFAAIATAAIADABIABACIAAAGIgBADIgDAAIgFAAg");
	this.shape_112.setTransform(-580.6,388.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_113.setTransform(-604.5,391.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDAEQgEADgFAAIgEgBIgEgBIgFgBIgFgBQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABACIAAAEIgBADIgBABIgKgBg");
	this.shape_114.setTransform(-541.6,340.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgXBqQgMgEgJgHIgEgDIgCgBIgDACIgCAEIgDADIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgEIACgKIACgQIABgRIABgLIABgBIABgBIAFABIABAAIAAACQAAAHACAIQACAJAHALQAHAKALAGQALAGAMAAQAJAAAKgEQAJgEAGgIQAGgJABgNQgBgPgGgKQgGgKgLgGQgKgGgMgEIgMgFIgQgGQgIgFgIgHQgGgHgEgLQgEgLAAgPQAAgLAFgKQAGgKAIgHQAHgIAMgDQAKgEAMAAQAMABAKACIANAFQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADgBIADgEIACgBIADgBIABACIABADIAAALIABAPIACANIABAJIgBACIgBAAIgDABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgCgGgEgJQgEgIgIgKQgHgGgIgDQgIgEgJAAQgOAAgHAGQgJAFgDAIQgEAIABAIQgBAHACAHQACAGAGAGQAEAFAGADIANAGIAKAEIAcAKQAMAGAIAIQAGAHADAKQAEAJABAPQgBASgGAPQgHAOgPAJQgNAJgUABQgPgBgLgEg");
	this.shape_115.setTransform(-582.4,336);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIBSAAIAEAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgDAAIhSAAIgBAAIgBAAg");
	this.shape_116.setTransform(-604.5,338.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGBAQgEgBgEgEQgDgEAAgGIACgHQABgEAEgEQAEgCAHAAQAGAAAFAEQAFAFABAJQgBAHgEAEQgFAFgHAAIgHgCgAgGggQgEgCgEgEQgDgDAAgHIACgHQABgEAEgDQAEgDAHAAQAGAAAFAEQAFAGABAIQgBAHgEAFQgFAEgHABIgHgCg");
	this.shape_117.setTransform(-29.2,287.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgWA+QgJgDgCgCIgCgCIgBgCIgEgdIAAgBIABgBIAEAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAOIAFALQADAEAFACQAFADAGAAQAGAAAGgDQAFgCAEgEQADgFAAgHQAAgKgGgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAGgIQAFgJAKgEQAJgFALAAQALAAAGACIALAEIADADIACACIAFAWIgBABIgCACIgEAAIgBAAIgBgBIgKgOQgDgFgFgDQgEgDgJgBQgFABgGACQgEACgEAFQgDAEAAAGQAAAJADAFQAFAEAGACIANAFQARAFAKAHQAJAJAAAQQAAAMgGAKQgGAIgKAFQgLAFgLAAQgLgBgIgDg");
	this.shape_118.setTransform(-38.3,287.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_119.setTransform(-49.5,287.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgZQABgMgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAFIAABAQAAAIABACQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_120.setTransform(-72.1,282.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWA+QgIgDgEgCIgBgCIgBgCIgEgdIAAgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAGALQADAEAFACQAFADAGAAQAGAAAGgDQAFgCAEgEQADgFAAgHQAAgKgGgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAJgFALAAQAKAAAHACIALAEIADADIACACIAFAWIgBABIgCACIgEAAIgBAAIgBgBIgKgOQgDgFgFgDQgEgDgJgBQgFABgGACQgEACgEAFQgDAEAAAGQAAAJADAFQAFAEAGACIAOAFQAQAFAKAHQAJAJABAQQgBAMgGAKQgGAIgKAFQgLAFgLAAQgMgBgHgDg");
	this.shape_121.setTransform(-113.1,287.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_122.setTransform(-154.3,287.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgWA+QgIgDgEgCIgBgCIgBgCIgEgdIAAgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAGALQADAEAFACQAFADAGAAQAGAAAGgDQAFgCAEgEQADgFAAgHQAAgKgGgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAJgFALAAQAKAAAHACIALAEIADADIACACIAFAWIgBABIgCACIgEAAIgBAAIgBgBIgKgOQgDgFgFgDQgEgDgJgBQgFABgGACQgEACgEAFQgDAEAAAGQAAAJADAFQAFAEAGACIAOAFQAQAFAKAHQAJAJABAQQgBAMgGAKQgGAIgKAFQgLAFgLAAQgMgBgHgDg");
	this.shape_123.setTransform(-176.1,287.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_124.setTransform(-195.4,287.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ABlBAIgRAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMIAAgMIAAgrQAAgIgBgGQgCgGgFgFQgEgDgGgBQgGgCgHAAQgHAAgHAFQgIAEgEAHQgDAGgBAHIAAARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgSAAIgIABIgCgBIAAgCIAAgFIAAgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAg9IgBgRQgCgHgCgDIgEgFQgDgDgGgBIgKgCQgGAAgJAEQgIAEgHAKIgDAJIAAALIAAA6QgBAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIALAAIACAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgTAAIgJABIgCgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgFgDIgGgDIgCgBIgBgCIAAgCIABgBIABgBIAbgOIACgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABADIABARIABAAQAHgKALgGQAMgHAOAAQALAAAJAGQAIAGAFALIACAAQAGgJAMgHQAMgHAOAAQAHAAAHACQAHACAGAFIAGAIQADAEACAHQACAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgIgBg");
	this.shape_125.setTransform(-213.9,287.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_126.setTransform(-231.9,287.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgFgDgGQgEgFAAgIQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgBIAAgBQgGgDgGgFQgGgGgFgJQgEgKAAgNQAAgKAFgJQAGgKALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgDAIAAQAHAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAGAFADQAEACAIAAIASgBQASAAAMACQAMADAJAGQAJAIADAHQADAJAAAFQAAAKgFAKQgEAIgMAJQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcACQgFABgFADQgGAEgEAGQgEAGAAAIQAAAGAEAGQADAGAFADQAHAFAJACQAKACAPgBIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGABgAgRhfQgFACgFAGQgHAIgCAJQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEABAFAAQAKAAAFgGQAGgIADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_127.setTransform(-246,291.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_128.setTransform(-278.3,287.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_129.setTransform(-292.8,287.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgDIAAgFQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAFIgBACIgBABIgKAAg");
	this.shape_130.setTransform(-304.2,287.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgDIAAgFQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAFIgBACIgBABIgKAAg");
	this.shape_131.setTransform(-314.4,287.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_132.setTransform(-361.3,287.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgZQABgMgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAFIAABAIABAKQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_133.setTransform(-375.8,282.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ag/BkQgEgEAAgHQAAgFAEgDQAEgEAGAAIAIABIAFADIAEgBIADgCIAFgIIAHgOIAHgRIAFgLIgEgOIgJgZIgKgeIgIgaIgFgMIgFgJQgDgEgGAAIgIAAIgCgBIAAgCIAAgGIAAgBIACgBIAIAAIAUABIASgBIAKAAIACABIAAABIAAAGIAAACIgBABIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAEIADALIAFASIAHAWIAFATIAEAKIABAAIAEgJIAHgRIAJgUIAHgSIAEgKQABgGgBgDQgCgDgDAAIgFAAIgCgBIAAgCIAAgGIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAIAQABIALgBIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAAGIAAACIgBABIgFAAIgFABIgGAFIgKATIgRAkIgUAsIgMAgIgLAYIgIAPIgEAJQgDAFgFADQgFADgIAAQgJAAgEgEg");
	this.shape_134.setTransform(-407.5,291.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_135.setTransform(-420,287.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgZIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgFQgEgEgGgCIgHgCIgBgBIgBgBIAAgCIABgBIACgBIARgIQAKgEAHgFIAEgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_136.setTransform(-430.8,282.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgNBpIgXAAIgUAAIgKABIgBgBIgBgCIAAgFIABgCQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIAMAAQAEAAABgCIABgGIABgRIAAgjIAAhgQAAgFgCgEQgCgDgHgEIgHgEIgBgBIgBgBIAAgDIABgBIABgBIAegOIADgCIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABAEIABAPIABAAQAFgIAMgGQAKgGAPAAQALAAAJAEQAIAEAGAGQAJAIAEALQAEALgBARQAAAUgIAQQgIAPgOAJQgPAJgTABIgOgBQgIgBgHgDIAAA/QAAAGACACQABACADAAIAOAAIACABIAAACIAAAFIAAACIgCABIgJgBgAgKhVQgIAFgGAJIAABBQgBAFACADQABAEAEADQAGAEAIACQAGACAJAAQAJAAAIgFQAIgEAEgKQAFgLABgTQgBgVgFgNQgFgNgJgGQgJgGgKAAQgJAAgIAGg");
	this.shape_137.setTransform(-442.8,291.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgXA+QgHgDgEgCIgBgCIAAgCIgGgdIABgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHALQADAEAEACQAEADAHAAQAGAAAFgDQAGgCADgEQAEgFAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAKgFAKAAQAKAAAHACIAKAEIAFADIABACIAEAWIgBABIgBACIgDAAIgCAAIgBgBIgLgOQgCgFgFgDQgEgDgJgBQgFABgFACQgGACgDAFQgDAEgBAGQABAJAEAFQAEAEAGACIAOAFQAQAFAJAHQAKAJABAQQgBAMgGAKQgGAIgKAFQgKAFgMAAQgLgBgJgDg");
	this.shape_138.setTransform(-455.4,287.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADgBIAPAAIADgBIABgFIAAgNIAAgOIAAgsQABgHgDgEQgDgEgLgBIgDgCIAAgBIAAgCIAAgBIACgBIAPgHIAQgJIADgBIAEAAIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIACABIABACIAAAFIgBACIgCABIgGAAgAgOhCQgEgCgDgEQgCgEAAgFQAAgGAEgFQAFgGAJAAQAIAAADAGQAFAFAAAFQAAAHgFAFQgEAFgIABQgEAAgEgCg");
	this.shape_139.setTransform(-464.7,283.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgXA+QgHgDgDgCIgCgCIAAgCIgGgdIABgBIABgBIAFAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAOIAGALQADAEAEACQAEADAIAAQAFAAAFgDQAGgCADgEQAEgFAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIAKAEIAEADIACACIAEAWIgBABIgBACIgEAAIgBAAIgBgBIgLgOQgCgFgFgDQgFgDgIgBQgFABgGACQgFACgDAFQgDAEgBAGQABAJAEAFQAEAEAHACIAMAFQARAFAJAHQAKAJAAAQQAAAMgGAKQgGAIgKAFQgKAFgMAAQgLgBgJgDg");
	this.shape_140.setTransform(-512.3,287.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIABgWIAAgZIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgFQgDgEgIgCIgGgCIgBgBIgBgBIAAgCIABgBIADgBIAQgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIAOAAIACABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_141.setTransform(-521.5,282.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAGgHAEQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_142.setTransform(-531.2,287.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgZIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgFQgEgEgGgCIgHgCIgBgBIgBgBIAAgCIABgBIACgBIARgIQAKgEAHgFIAEgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_143.setTransform(-549.6,282.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIAAgWIAAgZIAAgSIAAgSIAAgWIAAgVIgBgNQAAgHgDgFQgFgEgHgCIgFgCIgCgBIgBgBIAAgCIACgBIACgBIARgIQAJgEAIgFIADgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIAAAcIgBAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIAOAAIACABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_144.setTransform(-557.3,282.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKAAIgDAAIAAgCIAAgGIAAgCIADgBIAOAAIAEgBIACgFIAAgNIAAgOIAAgsQAAgHgDgEQgDgEgLgBIgCgCIgBgBIAAgCIABgBIABgBIAQgHIAQgJIADgBIACAAIABABIAAACIAAARIAAAgIAAAgIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAIANAAIADABIAAACIAAAFIAAACIgDABIgFAAgAgOhCQgEgCgCgEQgEgEAAgFQAAgGAFgFQAFgGAJAAQAIAAAEAGQADAFAAAFQAAAHgDAFQgFAFgJABQgDAAgEgCg");
	this.shape_145.setTransform(-565.1,283.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgBgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgBIAJAAIASABIAQgBIAJAAIACABIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgEIgDgCIgFgBIgFAAIgBAAIgBgBIAAgHIABgCIACAAIAJAAIARAAIAQAAIAHAAIACAAIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEAAIgFAAIgBgBIAAgCIAAgGIAAgCIACAAIAHAAIAQABIAOgBIAIAAIABABIABABIAAAGIgBACIgBABIgIAAQgDgBgCACIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_146.setTransform(-579.5,287.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAfBrIgdgBIgfABIgMAAIgCAAIgBgCIAAgIIABgBIACgBIAQAAQAFABAEgCQAEgCABgFIAAgJIABgTIAAgWIAAgVIAAgOIAAgUIAAgKIAAgPIAAgSIgBgPIAAgIQAAgFgDgDQgDgCgJAAIgRAAIgCgBIgBgBIAAgIIABgCIABAAIAPAAIAfABIAdgBIAMAAIABABIABABIAAAIIgBABIgCABIgOAAQgEAAgDACQgDACAAAEIAAAJIgBARIAAAVIAAARIAAAJIAAAWIAAAJIAAASIAAAVIABATIAAAJQAAAGADADQAEACAHgBIAMAAIACABIABABIAAAIQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgNAAg");
	this.shape_147.setTransform(-612.9,283);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_148.setTransform(-184.9,234.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgCgBIgBgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgCgGgEgFQgFgDgGgBQgFgCgHAAQgHAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgBABIgIgBIgTAAIgTAAIgIABIgCgBIgBgCIAAgFIABgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgGAAgHAEQgIAEgIAKIgDAJIAAALIAAA6QAAAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIALAAIADAAIABADIAAAEIgBADIgCABIgIgBIgUAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgGgDIgFgDIgDgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKAMgGQAMgHANAAQALAAAKAGQAHAGAEALIACAAQAHgJAMgHQALgHAOAAQAJAAAGACQAHACAFAFIAHAIQAEAEACAHQACAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIABADIAAAFIgBACIgCABIgHgBg");
	this.shape_149.setTransform(-203.4,234.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgFIALgGIAIgGIAAgTIgBgJQgBgEgCgEQgDgCgDgCQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAglIgKAFg");
	this.shape_150.setTransform(-221.4,234.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AggBoQgMgCgLgGQgIgGgDgFQgEgHAAgHQAAgIAFgIQAFgHAHgEIAOgJIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgDIAAAAQgGgCgGgHQgGgFgFgJQgEgJAAgOQAAgJAFgLQAGgKALgGQAMgHARAAQAKAAAIAEQAIADAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIAAIgHgBIgHADIgGAGQgDACAAAEQAAAGAFADQAEACAIAAIASAAQASgBAMACQAMADAJAHQAJAHADAIQADAHAAAGQAAAKgFAJQgEAJgMAJQgGAEgNAFQgNAEgSABIgXgBgAAAAjIgcACQgFACgFAEQgGADgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgFQAHgEAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGAAgAgRheQgFACgFAEQgHAJgCAJQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEABAFABQAKAAAFgIQAGgGADgLQACgJAAgKQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_151.setTransform(-235.5,238.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_152.setTransform(-256.8,234.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgCIAAgGIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAGIgBACIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_153.setTransform(-271.3,229.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ag/BkQgEgEAAgHQAAgFAEgEQAEgDAGAAIAIABIAFACIAEAAIADgCIAFgIIAHgPIAHgPIAFgNIgEgNIgJgZIgKgeIgIgZIgFgOIgFgJQgDgDgGAAIgIAAIgCAAIAAgCIAAgHIAAgBIACgBIAIABIAUAAIASAAIAKgBIACABIAAABIAAAHIAAACIgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAGIADAKIAFATIAHAVIAFATIAEAKIABAAIAEgIIAHgSIAJgVIAHgSIAEgKQABgFgBgDQgCgDgDAAIgFAAIgCAAIAAgCIAAgHIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIABIAQAAIALAAIAHgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAAHIAAACIgBAAIgFAAIgFABIgGAFIgKATIgRAkIgUAtIgMAeIgLAZIgIAQIgEAIQgDAEgFADQgFAEgIAAQgJAAgEgEg");
	this.shape_154.setTransform(-303,238.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgFIALgGIAIgGIAAgTIgBgJQgBgEgCgEQgDgCgDgCQgFgCgGAAIgLACQgFABgEADQgDADABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAglIgKAFg");
	this.shape_155.setTransform(-315.6,234.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgDIADAAIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgBAAgFIAAgNIAAgXIAAgXIAAgSIAAgSIAAgXIAAgUIgBgOQAAgIgDgDQgFgFgHgCIgFgCIgCgBIAAAAIAAgDIABgBIACgBIARgIQAJgEAIgGIADgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIAAAcIgBAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQABACAFAAIANAAIADABIABACIAAAFIgBACIgBABIgLgBg");
	this.shape_156.setTransform(-326.3,229.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgNBpIgXAAIgUAAIgJABIgDgBIgBgCIAAgFIABgCQABgBAAAAQAAAAABAAQAAAAAAAAQABAAABAAIALAAQAEAAABgCIACgGIAAgRIABgjIAAhgQgBgFgCgEQgCgDgGgEIgHgEIgCgBIAAgBIAAgDIAAgBIACgBIAcgOIAEgCIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAEIABAPIABAAQAHgIALgGQAKgGAPAAQAMAAAHAEQAJAEAGAGQAJAIAEALQADALABARQAAAUgJAQQgIAPgPAJQgOAJgTABIgOgBQgIgBgHgDIAAA/QAAAGABACQACACADAAIANAAIADABIABACIAAAFIgBACIgDABIgIgBgAgKhVQgIAFgGAJIAABBQAAAFABADQABAEAEADQAHAEAGACQAHACAJAAQAJAAAHgFQAIgEAGgKQAFgLAAgTQAAgVgFgNQgGgNgJgGQgJgGgKAAQgIAAgJAGg");
	this.shape_157.setTransform(-338.3,238.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgDIADAAIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgBAAgFIAAgNIAAgXIAAgXIAAgSIAAgSIAAgXIAAgUIgBgOQAAgIgDgDQgFgFgHgCIgFgCIgCgBIgBAAIAAgDIACgBIACgBIARgIQAJgEAIgGIADgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIAAAcIgBAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIAOAAIACABIABACIAAAFIgBACIgBABIgLgBg");
	this.shape_158.setTransform(-357,229.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgBgBIgBgCIAAgFIABgDIADAAIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgBAAgFIAAgNIABgXIAAgXIAAgSIAAgSIgBgXIAAgUIgBgOQAAgIgEgDQgEgFgGgCIgHgCIgBgBIAAAAIAAgDIAAgBIACgBIARgIQAKgEAHgGIAEgBIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAFIAAATIgBAcIAAAcIAAAUIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_159.setTransform(-364.7,229.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAYBiIgKAAIgMAAIgVAAIgLABIgBgBIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgCIACgBIAPgGIAQgIIADgBIAEgBIABABIAAADIgBARIAAAeIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIACABIABABIAAAGIgBACIgBABIgHgBgAgOhDQgEgBgDgEQgCgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAFAFAAAFQAAAHgFAFQgEAFgIABQgEAAgEgDg");
	this.shape_160.setTransform(-372.6,230.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohpQgBgDgDgCQgDgCgFgBIgHAAIgCAAIAAgCIAAgGIAAgCIACgBIAJABIASAAIAQAAIAJgBIACABIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAgBAAQAAAAAAABQgBAAAAABQgBACABADIAYBPIABAAIAfhIIgBgGIgCgDIgDgDIgFAAIgFAAIgBgBIgBgCIAAgGIABgCIACgBIAJABIARABIAQgBIAHgBIACABIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgBACABADIAXBIIABAAIAYhBQADgIgBgEQgCgFgEAAIgFAAIgBAAIAAgCIAAgGIAAgCIACgBIAHABIAQAAIAOAAIAIgBIABABIABACIAAAGIgBACIgBAAIgIAAQgDAAgCACIgEAEIgGAMIgLAaIgMAeIgLAbIgGAOQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIgDgCg");
	this.shape_161.setTransform(-386.9,234.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgaA/QgIgDgHgJQgGgIgCgHQgDgHAAgKIgBgaIAAgjQAAgGgDgCQgDgDgFAAIgFgBIgCgBIAAgGIABgCIADAAIAaAAIADAAIABgBIACAAIACAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBALIAAAXIAAAWIgBANIABAPQACAJAEAHQAGAHAGACQAGACAGAAQAGAAAHgFQAIgEAEgGIACgEIABgEIAAhHQAAgGgDgCQgEgCgGAAIgFgBIgBgBIAAgFIAAgDIADAAIAcAAIADAAIACgBIACAAIACAAIACABIABACIgBAFIgBAMIAAAXIAAAVIAAAVIAAAPQABAHACABQACACADAAIAEAAIAGgBIADAAIABABIABAEIgBACIgBABIgfALIgDAAIgDABIgCgBIgBgDIgCgRIgBAAQgHAJgLAGQgKAFgMABIgCAAQgFAAgGgCg");
	this.shape_162.setTransform(-412.5,234.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("Ag/BkQgEgEAAgHQAAgFAEgEQAEgDAGAAIAIABIAFACIAEAAIADgCIAFgIIAHgPIAHgPIAFgNIgEgNIgJgZIgKgeIgIgZIgFgOIgFgJQgDgDgGAAIgIAAIgCAAIAAgCIAAgHIAAgBIACgBIAIABIAUAAIASAAIAKgBIACABIAAABIAAAHIAAACIgBAAIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAGIADAKIAFATIAHAVIAFATIAEAKIABAAIAEgIIAHgSIAJgVIAHgSIAEgKQABgFgBgDQgCgDgDAAIgFAAIgCAAIAAgCIAAgHIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIABIAQAAIALAAIAHgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAAHIAAACIgBAAIgFAAIgFABIgGAFIgKATIgRAkIgUAtIgMAeIgLAZIgIAQIgEAIQgDAEgFADQgFAEgIAAQgJAAgEgEg");
	this.shape_163.setTransform(-441.4,238.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_164.setTransform(-462,234.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAJBBIgVAAIgXAAIgKABIgBgBIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgGIgGgFIgGgDIgCgBIAAgBIAAgCIAAgCIACgBIAegPIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABADIABAUIACAAQAFgKAKgIQAKgHAKgBQAHAAAEAFQAEAEAAAFQgBAHgDADQgEAEgFAAIgEgBIgEgBIgFgCIgFAAQgEAAgFACQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEAAIAOAAIACABIABABIAAAGIgBACIgBABIgKgBg");
	this.shape_165.setTransform(-473.3,234.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_166.setTransform(-485,234.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgCIAAgGIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAGIgBACIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_167.setTransform(-499.5,229.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohpQgBgDgDgCQgDgCgFgBIgHAAIgCAAIAAgCIAAgGIAAgCIACgBIAJABIASAAIAQAAIAJgBIACABIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAgBAAQAAAAAAABQgBAAAAABQgBACABADIAYBPIABAAIAfhIIgBgGIgCgDIgDgDIgFAAIgFAAIgBgBIgBgCIAAgGIABgCIACgBIAJABIARABIAQgBIAHgBIACABIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBABQgBACABADIAXBIIABAAIAYhBQADgIgBgEQgCgFgEAAIgFAAIgBAAIAAgCIAAgGIAAgCIACgBIAHABIAQAAIAOAAIAIgBIABABIABACIAAAGIgBACIgBAAIgIAAQgDAAgCACIgEAEIgGAMIgLAaIgMAeIgLAbIgGAOQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIgDgCg");
	this.shape_168.setTransform(-518,234.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgXA/QgIgDgCgDIgCgCIAAgCIgGgcIABgCIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAFAJQADAEAFADQAEADAIgBQAFABAGgDQAFgCAEgFQADgEAAgHQABgKgHgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIALAEIADADIACADIAEAUIAAACIgCABIgEACIgBAAIgBgCIgKgNQgDgFgFgEQgFgDgIAAQgFAAgGACQgFACgDAFQgDAEgBAHQABAIADAEQAFAFAHACIAMAFQARAFAJAHQAKAJAAARQAAALgGAJQgGAKgKAEQgLAFgLAAQgLAAgJgDg");
	this.shape_169.setTransform(-541.2,234.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAYBiIgKAAIgNAAIgUAAIgKABIgCgBIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgCIACgBIAQgGIAQgIIACgBIADgBIACABIAAADIgBARIAAAeIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAABIAAAGIAAACIgCABIgHgBgAgOhDQgEgBgCgEQgDgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAEAFAAAFQAAAHgEAFQgEAFgJABQgDAAgEgDg");
	this.shape_170.setTransform(-550.5,230.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgWA/QgJgDgCgDIgCgCIgBgCIgEgcIAAgCIABgBIAEgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAPIAFAJQADAEAFADQAFADAGgBQAGABAGgDQAFgCAEgFQADgEAAgHQAAgKgGgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIALAEIADADIACADIAFAUIgBACIgCABIgEACIgBAAIgBgCIgKgNQgDgFgFgEQgEgDgJAAQgFAAgGACQgEACgEAFQgDAEAAAHQAAAIADAEQAFAFAGACIANAFQARAFAKAHQAJAJAAARQAAALgGAJQgGAKgKAEQgLAFgLAAQgMAAgHgDg");
	this.shape_171.setTransform(-567.5,234.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgKABIgDgBIAAgCIAAgGIAAgCIADAAIAOAAIAEgBIACgGIAAgNIAAgOIAAgsQAAgIgDgCQgDgFgLgCIgCgBIgBgBIAAgCIABgCIABgBIAQgGIAQgIIADgBIACgBIABABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIANAAIADABIAAABIAAAGIAAACIgDABIgFgBgAgOhDQgEgBgCgEQgEgEAAgFQAAgGAFgFQAFgFAJgBQAHABAFAFQADAFAAAFQAAAHgDAFQgFAFgJABQgDAAgEgDg");
	this.shape_172.setTransform(-576.8,230.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgCIAAgGIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAGIgBACIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_173.setTransform(-588.9,229.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAmBvIgNAAIgYAAIgeAAIgOABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAIAAgGIAAgCIABgBIAUAAQAGAAACgCQACgCAAgDIABgOIABgZIAAgeIAAgYIAAgNIAAhMIgIAAIgOAAIgSABQgJAAgHACQgGADgGAFQgEAHgEAIIgGAMIgBABIgCAAIgFgBIgCgBIAAgBIAEgNIAEgRIAFgPIABgJIABgDIACgBIADAAIABABIAEADQADACAEABIAKACIAQABIARABIAXAAIAOAAIAbAAIASgBIAQgBIAIgBIAHgEIAFgDIACgBIACAAIACABIABADIACAJIABAPIADARIADANIAAACIgCABIgFABIgBAAIgBgCIgFgKIgHgOQgEgHgGgDQgEgBgKgCIgTgBIgSAAIgJAAIAABVIAAAKIAAAWIAAAaIAAAXIABALQAAAGACADQACADAGAAIATAAIACABIAAACIAAAGIAAACIgCABIgGgBg");
	this.shape_174.setTransform(-607.9,229.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AB4CAIgoAAIgkAAIgSABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgCgCAAgEIAAgJQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgCAEABIASAAQAFAAADgEQADgDABgHIABgaIAAgYIAAhOQAAgSgCgOQgDgNgMgJQgLgJgLgBIgVgBQgIgBgNAFQgOAFgOAOQgJAKgCALQgDALAAAJIAAB7QAAAMADAEQACAEAKAAIAPAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAALIgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgPgBIgkAAIglAAIgQABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgEIAAgLIABgEQABgCAEABIASAAQAFAAAEgCQACgDAAgIIAAiLQAAgNgHgJQgGgIgLgFIgFgCIgEgDIgBgDIAAgDIACgEIADgCIA0gcIAGgDIAFgCQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIACAFIAEAlIABAAQAOgRAWgNQAXgNAWgBQAOAAANADQANADAMAIQAJAFAHALQAHAKAEALQAFAMAAAHIAACaQAAAHAEADQAEADAFAAIATAAQAEgBACACIABAEIAAAJIgBAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgRgBg");
	this.shape_175.setTransform(-308.6,153.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgFIAAgKQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgBADAAIAYAAQAHAAADgCQADgEAAgGIABgfIAAgoIAAg3QAAgQgCgIQgCgIgFgFQgFgEgIgFIgMgGIgDgBIgBgDIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIABAFIACAqIADAAQANgVATgPQATgPAUgBQAPAAAIAIQAHAIAAALQAAAMgIAJQgIAHgJABQgFAAgEgBIgIgEIgJgDQgFgCgGAAQgIAAgJAFQgKAHgIAOIgEALIgBAIIAAB8QgBANAEAGQAEAGAIgBIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFIAAAKIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_176.setTransform(-385.8,153.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgvDUQgXgIgSgOIgIgGIgGgBQgCAAgDADIgEAHQgDAFgCABQgDABgDAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgCgDABgEIACgWIADggIADghIACgWIABgDIADgBIAJABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIABAEQgBAOAEAQQAEARAOAWQAOAVAWAMQAXAMAYAAQATAAASgIQATgIANgRQAMgRABgbQAAgegNgTQgNgUgVgMQgVgMgYgIIgZgJQgPgGgRgJQgRgKgNgNQgPgPgIgWQgHgVAAgeQAAgXAMgUQAKgUAPgOQAQgPAWgHQAVgGAZAAQAZAAASAGQATAEAIAFIAGACQADgBACgCIAIgHIAEgDIAEgBQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQACADAAAEIABAWIACAdIADAbIACASIAAADIgDACIgHABQgBABAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgOgIgRQgIgRgSgTQgMgNgQgGQgQgHgUAAQgbABgQALQgQALgHAQQgHAQAAAPQAAANADAOQAEANAMANQAIAIANAHQANAIAMAFIAVAIQAfAJAZAKQAYALARASQAMAOAHATQAHATAAAeQAAAkgOAdQgOAegbASQgcARgoABQgeAAgXgJg");
	this.shape_177.setTransform(-437.4,145.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_178.setTransform(-482,154);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("ADLCBIgigBIglABIgTABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgFIAAgKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgBAEAAIAPAAQAFAAAEgDQADgCAAgHIACgYIAAgYIAAhYQAAgPgEgMQgEgNgKgIQgIgGgLgDQgMgDgNAAQgOAAgQAJQgOAJgIANQgHANgBANQgBAOAAAUIAABnQAAAGADAEQACAEAHAAIAVAAQADAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgQgBIglgBIgmABIgSABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgFIAAgJIABgFQABgBAEAAIARAAQAIAAADgCQADgDAAgFIAAh7QAAgWgDgMQgCgNgEgHIgJgLQgHgFgKgDQgLgCgLAAQgMgBgQAIQgQAIgNAUQgGAIgBAKQgCAJAAANIAAB1QAAAIADAEQADAEAGAAIAWAAQAEAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAADgBACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgRgBIglgBIgnABIgRABQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgLQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBIAUAAQAFAAACgDQACgEABgIIAAgQIAAgPIAAhqQAAgJgDgIQgDgIgLgGIgMgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgCgCIAAgFIACgDIACgCIA1gbIAGgCIAFgBQABAAABAAQAAAAABABQAAAAABAAQAAABAAABQACACAAADIACAjIACAAQAOgTAYgNQAXgNAbAAQAYAAARAMQAQAMAKAWIADAAQAOgTAXgNQAYgOAbAAQAQgBANAEQAOAEALAKIANAQQAHAIAEAOQAEANABAXIAACFQAAAHADACQAEADAFAAIAQAAQAEAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAAEgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgBg");
	this.shape_179.setTransform(-519,153.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAmB5QgMgKgEgTIgBAAQgJALgOAJQgPAKgUAHQgJACgIAAIgTABQgHAAgJgEQgIgFgGgLQgFgLgBgTQAAgUANgTQAMgSAjgPIAcgMIAXgLQALgGAFgFIAAgmIgCgSQgCgKgEgGQgFgFgIgEQgJgEgNAAQgKAAgLAEQgMADgGAGQgGAFABAHIACAPQAAAQgHAJQgHAJgSABQgHAAgEgFQgDgFAAgKQAAgOALgQQALgPATgLQATgMARgEQARgFATAAQAVAAAKAFQALAEAGAHQAJAKACAKQADALgBALIAABcIAAAjQAAAYAFAKQAFALAIAAQAIgBAFgDQAGgCACgDIADgEQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAGAFQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgCAFIgIALQgFAHgKAGQgJAFgPAAQgRgBgKgKgAgDAFQgNAGgOAJQgNAHgKANQgJAMAAATQAAARAJAHQAIAJAOAAQAJgBAMgFQAKgGAJgIQAIgJAAgJIAAhIQgIAGgMAFg");
	this.shape_180.setTransform(-555,154);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag2DWQgfgHgdgPQgdgPgVgYQgcgfgNgoQgPgoAAg1QAAgqASgoQARgoAigeQAfgcAqgOQAqgPA1AAQAnABAfAKQAfALARANQAEADAEAAQACgBADgDIAJgLIAEgDQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIABAFIACByIgBAEQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgLABIgDgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgDgNgIgTQgJgTgQgTQgJgMgPgLQgPgLgWgIQgVgHgbgBQgeAAgdAKQgcALgbAcQgZAagNAjQgOAkgBApQAAA0APAsQAPArAcAcQAWAVAbAKQAbALAcAAQAkAAAYgGQAYgFAPgJQAKgGADgMQADgMAAgXIAAgsQABgQgHgGQgFgGgOAAIgZAAIgDgBIgBgDIAAgPIAAgDQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAaAAIAzABIAwgBIAXAAIADABIABADIAAAOIgBAEIgDABIgYAAQgHAAgFAEQgGAFAAAOIAABPIABALIABAIQAAAEgCACIgIAEQgjASgnAKQgnAKgyAAQgaAAgfgHg");
	this.shape_181.setTransform(-593.2,145.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AghCIIgCgDIABgCIACgDQAWgWAMgfQANgfAAgsQAAgrgNgfQgMgfgWgWIgCgDIgBgDIACgDIAEgBIADABIADABQAKAIALAOQALANAJATQAJARAEAUQAFAVAAAXQAAAXgGAUQgFAUgJATQgJARgKAOQgKAOgKAIIgDACIgDABIgEgCg");
	this.shape_182.setTransform(1675.1,482.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_183.setTransform(1624.3,484.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgXA+QgIgDgDgCIgBgCIgBgCIgFgdIABgBIACgBIADAAQABgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHALQACAEAFACQAEADAHAAQAGAAAFgDQAGgCADgEQAEgFAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAFgIQAHgJAJgEQAJgFALAAQALAAAGACIAKAEIAFADIABACIAEAWIgBABIgBACIgDAAIgCAAIgBgBIgLgOQgCgFgFgDQgEgDgJgBQgFABgFACQgGACgDAEQgDAFgBAGQABAJAEAFQAEAEAGACIAOAFQAQAFAKAHQAJAJABAQQgBAMgGAKQgGAIgKAFQgLAFgLAAQgMgBgIgDg");
	this.shape_184.setTransform(1601.2,484.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgLIgBgLIAAgYQABgNgCgJQgCgKgHgFQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAEAAAEIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgPIAAgSIAAgQIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgFAKgBQAKABAHADQAHACAGAHQAHAGACAFQADAIABAIIAAAQIAAARIAAAQIAAAPIABAJQAAABAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_185.setTransform(1567.4,479.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AA/BtIgQgBIgXABIgKAAIgCgBIAAgCIAAgFIAAgBIADgBIACAAIADgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgGgHIgMgOIgNgOIgIgJQgCgBgEgBIgHgBIAAANIAAAQIABAQQAAADABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAIAAIACABIABACIAAAEIgBADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgJAAIgSgBIgUABIgJAAIgBgBIAAgCIAAgFIAAgCIADgBIALAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIABgFIABgXIAAghIAAhiIgBgKQgBgFgDgCQgEgDgHgCIgDgBIgBgBIAAgCIABgBIADgDIAegMIAEgCIADgBIACACIAAADIgBAXIgBAjIAAAlIAAAuIAIAAIAHgDIAHgGIAKgLIAIgKIAGgHIABgDIgBgDIgEgBIgEAAIgCgBIgBgCIAAgGIABgBIABgBIAJAAIATABIARgBIAIAAIABABIAAACIAAAFIAAACIgCABIgCAAQgFAAgFABQgGACgFADIgKAIIgPAOIgNANIAKAMIAUATIATASIALAKIAJADIAHABIACABIAAACIAAAFIAAACIgDABIgIAAg");
	this.shape_186.setTransform(1535.4,479.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAYBiIgKAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACgBIAOAAIAEAAIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgBIgDgCIAAgBIAAgDIAAAAIACgBIAQgHIAQgJIACgBIADAAIACABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIADABIAAACIAAAFIAAACIgCABIgHAAgAgOhCQgEgCgCgEQgEgEAAgFQAAgGAFgFQAFgGAKAAQAGAAAEAGQAEAFAAAFQAAAHgEAFQgEAFgJABQgDAAgEgCg");
	this.shape_187.setTransform(1510.9,481);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIABgWIAAgZIAAgSIAAgRIgBgXIAAgVIAAgNQgBgHgEgFQgDgEgIgCIgGgCIgBgBIgBgBIAAgCIABgBIADgBIAQgIQAKgEAHgFIAEgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIgBAcIAAAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIAOAAIACABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_188.setTransform(1503.1,479.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_189.setTransform(1474.4,484.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgOBsQgIgCgGgEIgMAHIgBABIgCAAIgEgBIgBgBIAAgBIAAgLIAAgSIAAgWIAAhuIgBgPQgBgGgDgCQgDgDgFgCIgEgBIgDgBIAAgBIAAgDIAAgBIACgBIAKgFIAMgGIAKgFIADgCIADgBQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAMIgBAYIAAAbIAAAjQAIgHALgEQAKgEALAAQAOAAAMAHQANAHAIAOQAIAOAAAVQAAASgIAPQgJAQgNAJQgPAKgRAAQgLAAgKgCgAgNgEQgIADgFAEIAAAnIABAUIABAOIADAKQACAFAIAFQAIAEAJABQAJAAAJgFQAJgFAHgLQAGgLABgUQAAgPgGgNQgFgMgKgIQgKgHgOgBQgIAAgHADg");
	this.shape_190.setTransform(1373.1,480);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_191.setTransform(1352.7,484.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AA/BtIgQgBIgXABIgKAAIgCgBIAAgCIAAgFIAAgBIADgBIACAAIADgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgGgHIgMgOIgNgOIgIgJQgCgBgEgBIgHgBIAAANIAAAQIABAQQAAADABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAIAAIACABIABACIAAAEIgBADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgJAAIgSgBIgUABIgJAAIgBgBIAAgCIAAgFIAAgCIADgBIALAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIABgFIABgXIAAghIAAhiIgBgKQgBgFgDgCQgEgDgHgCIgDgBIgBgBIAAgCIABgBIADgDIAegMIAEgCIADgBIACACIAAADIgBAXIgBAjIAAAlIAAAuIAIAAIAHgDIAHgGIAKgLIAIgKIAGgHIABgDIgBgDIgEgBIgEAAIgCgBIgBgCIAAgGIABgBIABgBIAJAAIATABIARgBIAIAAIABABIAAACIAAAFIAAACIgCABIgCAAQgFAAgFABQgGACgFADIgKAIIgPAOIgNANIAKAMIAUATIATASIALAKIAJADIAHABIACABIAAACIAAAFIAAACIgDABIgIAAg");
	this.shape_192.setTransform(1318.6,479.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADgBIAPAAIADAAIABgGIAAgNIAAgOIAAgsQABgIgDgDQgDgEgLgBIgDgCIAAgBIAAgDIAAAAIACgBIAPgHIAQgJIADgBIAEAAIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIACABIABACIAAAFIgBACIgCABIgGAAgAgOhCQgEgCgDgEQgCgEAAgFQAAgGAEgFQAFgGAKAAQAHAAADAGQAFAFAAAFQAAAHgFAFQgEAFgIABQgEAAgEgCg");
	this.shape_193.setTransform(1306.5,481);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIAAgWIAAgZIAAgSIAAgRIAAgXIAAgVIgBgNQAAgHgDgFQgFgEgHgCIgFgCIgCgBIAAgBIAAgCIABgBIACgBIARgIQAJgEAIgFIADgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAUIAAAcIgBAdIAAATIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIANAAIADABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_194.setTransform(1298.6,479.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAbCJIgDgCQgKgIgLgNQgLgNgJgUQgJgRgEgUQgFgVAAgXQAAgXAGgUQAFgTAJgTQAJgSAKgNQAKgOAKgJIADgBIADgBIAEABIACADIgBADIgCADQgWAVgMAgQgNAfAAArQAAAsANAfQAMAfAWAWIACADIABACIgCADIgEACIgDgBg");
	this.shape_195.setTransform(1290.1,482.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_196.setTransform(1272.4,484.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgIA/IgCgEIgDgGIgFgQIgHgRIgGgOIgDgGIgCgIIgFgMIgFgOIgDgJIgFgIQgDgDgEABIgGAAIgCgBIAAgCIAAgGIABgCIACAAIAIAAIARABIATgBIAIAAIADABIAAABIAAAGIAAACIgCABIgGAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIABAGIADALIADALIADAHIADAIIAFAOIAGAOIADAKIAAAAIAHgQIAJgVIAIgXIAFgPQACgFgCgEQgBgDgEAAIgGAAIgBgBIAAgCIAAgGIAAgBIABgBIAJAAIAPABIAPgBIAHAAIACAAIABADIAAAFIAAACIgCABIgFAAIgFAAIgFADQgCACgDAFIgHAPIgHAOIgFAMIgFAMIgJAUIgJATIgEAJIgCAFQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_197.setTransform(1247.8,484.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAFAAAFQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFAEQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABACIAAAGIgBABIgBABIgKAAg");
	this.shape_198.setTransform(1204.2,484.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_199.setTransform(1193,484.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgXA+QgIgDgCgCIgCgCIAAgCIgGgdIABgBIABgBIAFAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAOIAGALQACAEAFACQAEADAIAAQAFAAAGgDQAFgCAEgEQADgFAAgHQABgKgHgHQgGgGgQgFQgJgCgIgFQgIgDgFgIQgFgHAAgMQAAgKAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIAKAEIAEADIACACIAEAWIgBABIgBACIgEAAIgBAAIgBgBIgKgOQgDgFgFgDQgFgDgIgBQgFABgGACQgFACgDAEQgDAFgBAGQABAJAEAFQAEAEAHACIAMAFQARAFAJAHQAKAJAAAQQAAAMgGAKQgGAIgKAFQgKAFgMAAQgLgBgJgDg");
	this.shape_200.setTransform(1171.1,484.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_201.setTransform(1138.8,482.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("Ag/BkQgEgEAAgHQAAgFAEgDQAEgEAGAAIAIABIAFADIAEgBIADgCIAFgIIAHgOIAHgRIAFgLIgEgOIgJgZIgKgeIgIgaIgFgMIgFgJQgDgEgGAAIgIAAIgCgBIAAgCIAAgGIAAgBIACgBIAIAAIAUABIASgBIAKAAIACABIAAABIAAAGIAAACIgBABIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIAAAEIADALIAFASIAHAWIAFATIAEAKIABAAIAEgJIAHgRIAJgUIAHgSIAEgKQABgGgBgDQgCgDgDAAIgFAAIgCgBIAAgCIAAgGIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAIAQABIALgBIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAAGIAAACIgBABIgFAAIgFABIgGAEIgKAUIgRAkIgUAsIgMAgIgLAYIgIAPIgEAJQgDAFgFADQgFADgIAAQgJAAgEgEg");
	this.shape_202.setTransform(1119.7,488.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKADIgJACIgJAAQgEAAgEgCQgEgDgDgFQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgGIAIgEIAAgTIgBgJQgBgGgCgCQgDgDgDgCQgFgCgGAAIgLABQgFACgEAEQgDACABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDAEgEACQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgjIgKAFg");
	this.shape_203.setTransform(1107.1,484.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgBgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgBIAJAAIASABIAQgBIAJAAIACABIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgEIgDgCIgFgBIgFAAIgBAAIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEAAIgFAAIgBgBIAAgCIAAgGIAAgCIACAAIAHAAIAQABIAOgBIAIAAIABABIABABIAAAGIgBACIgBABIgIAAQgDgBgCACIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_204.setTransform(1089.9,484.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("ABmBvIgKAAIgTAAIgcAAIgPABIgBgBIgBgCIAAgHIABgCIACAAIAHAAQAGAAADgDQACgCgCgHIgDgMIgGgSIgFgSIgFgNIhIAAIgFAMIgHATIgGASIgEALIAAADIAAADQAAAEACABQADACAFAAIAOAAIACAAIABACIAAAHIgBACIgCABIgMgBIgWAAIgRAAIgKAAIgFABIgCgBIgBgCIAAgHIABgCIACAAIAKAAQAHAAAEgDQAEgEADgHIAFgMIAJgXIAKgbIAIgXIAEgIIAHgTIAIgVIAHgTIAEgKIABgFQAAgDgBgDIgCgBIAAgCIAAgCIACgBIAKgEIAIgGQAFgDABgCIACgCIACgBQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIACADIAFARIAIAXIAIAaIAIAXIAFARIAHAVIAKAbIAIAYIAGAOQAEAIAFADQAGADAFAAIAKAAIACAAIABACIAAAIIgBABIgCABIgHgBgAAZARIgEgNIgHgUIgIgYIgGgVIgDgKIgBgDIgBgBIgCABIgCADIgDAKIgIAVIgJAYIgIAVIgEAMIBCAAIAAAAg");
	this.shape_205.setTransform(1060.7,479.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBTAAIADAAIAAADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgCAAIhTAAIgBAAIgBAAg");
	this.shape_206.setTransform(1036,482.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgXA/QgIgDgCgDIgCgCIAAgCIgFgcIAAgCIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAOIAFAKQADAEAFADQAEADAIgBQAFABAGgDQAFgCAEgFQADgEAAgHQABgKgHgGQgGgHgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgJAKgEQAJgFALAAQALAAAGACIALAEIADADIACADIAEAUIAAACIgCABIgEACIgBAAIgBgCIgKgNQgDgFgFgEQgFgDgIAAQgFAAgGACQgFACgDAFQgDAEgBAHQABAIADAEQAFAFAHADIAMAEQARAFAJAHQAKAIAAASQAAALgGAJQgGAKgKAEQgLAFgLAAQgMAAgIgDg");
	this.shape_207.setTransform(1175.1,431.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_208.setTransform(1154.1,426.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AggBoQgMgCgLgGQgIgGgDgFQgEgHAAgHQAAgIAFgIQAFgHAHgFIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgDIAAAAQgGgCgGgHQgGgFgFgJQgEgJAAgOQAAgJAFgLQAGgKALgGQAMgHARAAQAKAAAIAEQAIADAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIAAIgHgBIgHADIgGAGQgDACAAAEQAAAGAFADQAEACAIAAIASAAQASgBAMACQAMADAJAHQAJAHADAIQADAHAAAGQAAAKgFAJQgEAJgMAJQgGAEgNAFQgNAEgSABIgXgBgAAAAjIgcACQgFACgFAEQgGADgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgGQAHgDAFgGQAFgGgBgJQAAgNgKgIQgJgIgSAAIgGAAgAgRheQgFACgFAEQgHAJgCAJQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEABAFABQAKAAAFgIQAGgGADgLQACgJAAgKQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_209.setTransform(1138.9,435.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAYBiIgKAAIgMAAIgVAAIgLABIgCgBIAAgCIAAgGIAAgCIADAAIAPAAIADgBIACgGIAAgNIAAgNIAAgtQAAgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgCIACgBIAPgGIAQgIIADgBIAEgBIAAABIAAADIAAARIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIACABIABABIAAAGIgBACIgCABIgGgBgAgOhDQgEgBgDgEQgDgEAAgFQABgGAEgFQAFgFAJgBQAIABADAFQAFAFAAAFQAAAHgFAFQgEAFgIABQgEAAgEgDg");
	this.shape_210.setTransform(1127.5,427.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_211.setTransform(1115.4,426.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgFIAAgCIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgMIgBgLIAAgXQABgNgCgKQgCgJgHgGQgEgDgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAKQABACAEAAIAJAAIADAAIABACIAAAFIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgGIABgCIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgJgBgEQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAKIAAARIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAHACAGQADAHABAHIAAAQIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_212.setTransform(1078.9,426.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAmBvIgNAAIgXAAIggAAIgNABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgGIAAgCIADgBIAUAAQAEAAADgCQACgCABgDIAAgOIAAgZIAAgeIAAgYIAAgNIAAhMIgHAAIgOAAIgSABQgJAAgGACQgHADgFAFQgGAHgDAIIgGAMIgBABIgCAAIgGgBIAAgBIAAgBIADgNIAFgRIADgPIADgJIABgDIACgBIABAAIACABIAEADQADACAEABIAKACIAPABIASABIAYAAIANAAIAbAAIASgBIAPgBIAJgBIAHgEIAGgDIACgBIABAAIACABIABADIABAJIADAPIACARIACANIAAACIgBABIgFABIgCAAIgBgCIgDgKIgIgOQgFgHgEgDQgGgBgJgCIgUgBIgSAAIgIAAIAABVIAAAKIAAAWIAAAaIAAAXIAAALQAAAGADADQACADAFAAIATAAIADABIABACIAAAGIgBACIgDABIgFgBg");
	this.shape_213.setTransform(1059.9,426.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBTAAIADAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgCAAIhTAAIgBAAIgBAAg");
	this.shape_214.setTransform(1036,429.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("ABmBAIgRAAIgTAAIgJABIgDgBIAAgCIAAgFIABgDIADAAIAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgBgGgGgFQgDgDgHgBQgFgCgHAAQgHAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgBABIgIgBIgUAAIgSAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgFAAgJAEQgIAEgGAKIgEAJIgBALIAAA6QAAAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIALAAIADAAIABADIAAAEIgBADIgCABIgJgBIgTAAIgTAAIgJABIgBgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgGIABgHIAAgIIAAg1QAAgEgBgEQgCgEgGgDIgGgDIgCgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADIACARIABAAQAHgKALgGQAMgHAOAAQALAAAKAGQAHAGAEALIACAAQAHgJAMgHQAMgHANAAQAJAAAGACQAHACAFAFIAHAIQAEAEABAHQADAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIADAAIABADIAAAFIgBACIgCABIgHgBg");
	this.shape_215.setTransform(1421.5,378.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_216.setTransform(1403.4,378.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AggBnQgMgBgLgHQgIgEgDgHQgEgFAAgIQAAgIAFgHQAFgIAHgEIAOgJIAAgBQgJgCgFgGQgFgGgBgHQABgHAEgGQAFgEAGgEQAGgFAFgCIAAAAQgGgDgGgGQgGgFgFgJQgEgKAAgNQAAgKAFgJQAGgKALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIABQAHAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgCgCIgEgCIgDgCIgEgBIgEAAIgFACIADAKQABAFAAAHQAAAKgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAFQgDADAAAEQAAAGAFACQAEADAIAAIASgBQASAAAMACQAMACAJAIQAJAHADAHQADAJAAAFQAAAKgFAKQgEAJgMAIQgGAFgNAEQgNAFgSAAIgXgCgAAAAkIgcACQgFAAgFAEQgGAEgEAGQgEAGAAAIQAAAGAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgFQAHgEAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGABgAgRhfQgFACgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEACAFAAQAKgBAFgGQAGgIADgJQACgLAAgJQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLABg");
	this.shape_217.setTransform(1389.4,382.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBQAAAIABACQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAAADIgCABIgJAAg");
	this.shape_218.setTransform(1353.5,373.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_219.setTransform(1340.9,376.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AACBtIgZgBIgQABIgMAAIgGAAIgCAAIgBgCIAAgHIABgBIADgBIAOAAQAEAAACgDQABgCAAgFIAAg5IAAghIgUAAIgCgBIAAgDIABgJIABgBIACAAIASAAIAAgGQAAgWAGgPQAFgPAJgKQAMgNAMgGQAMgFANAAQAGAAAGACQAHACADAEQAEAEABAFQAAAGgFADQgEADgEABIgEAAIgFgCIgDgEIgDgDQgEgEgDgBQgDgCgFAAQgGAAgFADQgGACgEAGQgFAHgCAKQgDAKAAAMIgBAWIAAAGIAkAAIACAAIAAACIgCAKIgBABIgDABIggAAIAAAaIAAAgIABAYIAAALQAAADACACQABACAEAAIARAAIACABIABACIAAAEIgBADIgBABIgKAAg");
	this.shape_220.setTransform(1325.7,373.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBQAAAIABACQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_221.setTransform(1223.6,373.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_222.setTransform(1211,376.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_223.setTransform(1193.8,376.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AATA8QgGgEgCgKIgBAAQgEAFgHAFQgHAFgKAEIgJABIgJAAQgEAAgEgCQgEgCgDgGQgDgFAAgKQAAgKAGgJQAHgJARgIIAOgGIALgFIAIgFIAAgTIgBgJQgBgFgCgEQgDgCgDgCQgFgCgGAAIgLABQgFADgEACQgDADABAEIABAHQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgHQAGgIAJgGQAKgFAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABALIAAAtIAAASQAAANACAEQACAGAEgBQAEAAADgBIAEgEIABgBIACAAIADADIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgEAGQgDADgEADQgFADgIAAQgIAAgFgGgAgBADIgOAHQgGAEgFAGQgEAGgBAJQABAJAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgFABgEIAAgkIgKAGg");
	this.shape_224.setTransform(1182.9,378.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgDIAAgEQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAMAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAWIACAAQAFgLAKgHQAKgIAKAAQAHAAAEADQAEAEAAAGQgBAGgDAFQgEADgFAAIgEAAIgEgCIgFgBIgFgCQgEABgFADQgFACgDAHIgCAGIgBAEIAAA9QAAAHACADQABADAEgBIAOAAIACABIABADIAAAEIgBACIgBABIgKAAg");
	this.shape_225.setTransform(1150.7,378.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_226.setTransform(1137.7,378.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_227.setTransform(1124.5,378.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgXA+QgIgDgCgCIgCgBIAAgDIgGgdIABgBIABgBIAFAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAPIAGAKQACAEAFACQAEADAIAAQAFAAAGgDQAFgCAEgEQADgFAAgHQABgKgHgGQgGgHgQgFQgJgCgIgEQgIgEgFgIQgFgHAAgMQAAgKAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIAKAEIAEADIACACIAEAWIgBABIgBABIgEABIgBAAIgBgBIgKgOQgDgFgFgDQgFgDgIgBQgFABgGACQgFACgDAEQgDAFgBAGQABAJAEAFQAEAEAHADIAMAEQARAEAJAIQAKAJAAAQQAAAMgGAKQgGAIgKAFQgKAFgMAAQgLAAgJgEg");
	this.shape_228.setTransform(1112.6,378.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgCIAAgFIAAgCIACgBIAHAAIAHgBQAEgBAAgEIABgHIAAgMIgBgKIAAgZQABgMgCgJQgCgKgHgGQgEgCgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAGQgCAFAAADIAABBIABAKQABADAEAAIAJAAIADABIABACIAAAFIgBACIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgCIADgBIAGAAIAHgBQADgBAAgDIABgJIAAgOIAAgSIAAgRIAAhZQAAgKgBgEQgBgFgEgDQgDgCgFgBIgFgCIgCgBIAAgBIAAgDIAAgCIADgBIAfgRIAEgBIADgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABACAAAEIgBAJIAAARIAAAVIAAAUIAAAOIAAATIABAAQAIgJAMgGQAKgEAKAAQAKAAAHADQAHACAGAHQAHAFACAGQADAIABAIIAAAQIAAARIAAARIAAAOIABAJQAAABAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACABIABACIAAAEIAAADIgCABIgJAAg");
	this.shape_229.setTransform(1078.9,373.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAmBwIgNAAIgXgBIggABIgNAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAAgCIADgBIAUAAQAEAAADgCQACgCABgDIAAgOIAAgaIAAgdIAAgYIAAgNIAAhNIgHAAIgOAAIgSACQgJAAgGACQgHADgFAGQgGAGgDAHIgGANIgBACIgCAAIgGgCIAAgBIAAgCIADgMIAFgRIADgPIADgIIABgEIACgBIABAAIACABIAEACQADAEAEABIAKABIAPAAIASABIAYAAIANAAIAbAAIASgBIAPAAIAJgBIAHgDIAGgEIACgBIABAAIACABIABAEIABAIIADAPIACARIACAOIAAACIgBAAIgFABIgCAAIgBgCIgDgKIgIgOQgFgHgEgDQgGgCgJgBIgUgCIgSAAIgIAAIAABWIAAAJIAAAXIAAAbIAAAWIAAALQAAAGADADQACADAFAAIATAAIADABIABACIAAAHIgBACIgDAAIgFAAg");
	this.shape_230.setTransform(1059.9,373.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBTAAIADAAIAAADIAAAKQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgCAAIhTAAIgBAAIgBAAg");
	this.shape_231.setTransform(1036,376.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_232.setTransform(1575.1,325.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_233.setTransform(1561.1,320.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_234.setTransform(1530.7,325.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgWA/QgIgDgEgDIgBgCIgBgCIgFgcIABgCIACgBIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAHAOIAGAKQADAFAFACQAFADAGgBQAGABAFgDQAGgCADgFQAEgEAAgHQAAgKgGgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAFgIQAHgJAJgEQAJgFALAAQAKAAAHACIAKAEIAFADIABADIAEAUIgBACIgBACIgDABIgCAAIgBgCIgLgNQgCgFgFgEQgEgEgJABQgFAAgFACQgFACgEAFQgDAEAAAHQAAAIADAEQAFAFAGACIAOAFQAQAEAKAIQAJAIABASQgBAMgGAIQgGAKgKAEQgLAFgLAAQgMgBgHgCg");
	this.shape_235.setTransform(1511.3,325.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgEIAAgUIgBgJQgBgEgCgDQgDgEgDgBQgFgCgGAAIgLABQgFACgEAEQgDACABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAgkIgKAEg");
	this.shape_236.setTransform(1500.1,325.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAJQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_237.setTransform(1485.1,320.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_238.setTransform(1463.1,325.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("ABlBAIgRAAIgTAAIgJABIgCgBIAAgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQABgIgCgGQgCgGgGgFQgEgDgFgBQgGgCgGAAQgIAAgIAFQgHAEgEAHQgDAGgBAHIAAARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgSAAIgJABIgBgBIAAgCIAAgFIAAgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAg9IgBgRQgCgHgCgDIgEgFQgDgDgGgBIgKgCQgHAAgIAEQgHAEgHAKIgEAJIgBALIAAA6QABAEABACQAAAAABABQAAAAABAAQAAABABAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgCABIgJgBIgSAAIgTAAIgJABIgCgBIAAgCIAAgFIAAgDIADAAIAKAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAgBQACgBAAgFIAAgHIAAgIIAAg1QAAgEgCgEQgBgEgFgDIgHgDIgBgBIgBgCIAAgCIABgBIABgBIAbgOIACgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABADIABARIABAAQAHgKALgGQAMgHAOAAQAMAAAIAGQAIAGAFALIACAAQAGgJAMgHQALgHAPAAQAHAAAHACQAHACAGAFIAGAIQADAEACAHQACAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgIgBg");
	this.shape_239.setTransform(1444.6,325.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgEIAAgUIgBgJQgBgEgCgDQgDgEgDgBQgFgCgGAAIgLABQgFACgEAEQgDACABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAgkIgKAEg");
	this.shape_240.setTransform(1426.5,325.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AggBoQgMgDgLgFQgIgGgDgFQgEgHAAgHQAAgIAFgIQAFgHAHgFIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgEAGgFQAGgDAFgCIAAgBQgGgCgGgGQgGgGgFgJQgEgJAAgOQAAgKAFgKQAGgKALgGQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHAAIgHADIgGAGQgDACAAAEQAAAHAFACQAEACAIAAIASAAQASgCAMADQAMADAJAGQAJAIADAIQADAHAAAGQAAALgFAIQgEAJgMAJQgGAFgNAEQgNAEgSABIgXgBgAAAAjIgcACQgFACgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgGQAHgDAFgGQAFgGgBgJQAAgNgKgJQgJgHgSAAIgGAAgAgRheQgFACgFAEQgHAIgCAKQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEACAFgBQAKABAFgIQAGgGADgLQACgKAAgJQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_241.setTransform(1412.5,329.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_242.setTransform(1391.1,325.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAJQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_243.setTransform(1376.6,320.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_244.setTransform(1364,323.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgWA/QgJgDgCgDIgCgCIgBgCIgEgcIAAgCIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAIAOIAFAKQADAFAFACQAEADAIgBQAFABAGgDQAFgCAEgFQADgEAAgHQAAgKgGgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgJAKgEQAKgFAKAAQALAAAGACIALAEIADADIACADIAFAUIgBACIgCACIgEABIgBAAIgBgCIgKgNQgDgFgFgEQgEgEgJABQgFAAgGACQgEACgEAFQgDAEAAAHQAAAIADAEQAFAFAGACIANAFQARAEAJAIQAKAIAAASQAAAMgGAIQgGAKgKAEQgLAFgLAAQgMgBgHgCg");
	this.shape_245.setTransform(1346,325.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_246.setTransform(1334.3,325.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_247.setTransform(1323.4,323.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgEIAAgUIgBgJQgBgEgCgDQgDgEgDgBQgFgCgGAAIgLABQgFACgEAEQgDACABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAgkIgKAEg");
	this.shape_248.setTransform(1312.4,325.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_249.setTransform(1299.6,325.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAYBiIgKAAIgMAAIgVAAIgLAAIgBAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgCIAQgGIAQgIIACgBIADgBIACABIAAACIgBASIAAAeIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAABIAAAGIAAACIgCAAIgHAAgAgOhCQgEgDgDgDQgCgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAEAFAAAFQAAAGgEAGQgEAFgIABQgEAAgEgCg");
	this.shape_250.setTransform(1289.2,321.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_251.setTransform(1277.6,320.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_252.setTransform(1261.7,325.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAYBiIgKAAIgNAAIgUAAIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgCIAPgGIARgIIACgBIADgBIACABIAAACIgBASIAAAeIAAAhIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIACABIABABIAAAGIgBACIgBAAIgHAAgAgOhCQgEgDgCgDQgDgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAEAFAAAFQAAAGgEAGQgEAFgIABQgEAAgEgCg");
	this.shape_253.setTransform(1249.6,321.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_254.setTransform(1233.5,323.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgEIAAgUIgBgJQgBgEgCgDQgDgEgDgBQgFgCgGAAIgLABQgFACgEAEQgDACABADIABAIQAAAIgEAEQgDAFgJAAQgEAAgCgCQgBgDAAgEQAAgIAFgIQAGgHAJgFQAKgGAIgCQAJgDAJAAQAKAAAGADQAFACADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAGQACAEAEAAQAEAAADgCIAEgCIABgCIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAgkIgKAEg");
	this.shape_255.setTransform(1222.5,325.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAJQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_256.setTransform(1207.6,320.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_257.setTransform(1195,323.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AggBoQgMgDgLgFQgIgGgDgFQgEgHAAgHQAAgIAFgIQAFgHAHgFIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgEAGgFQAGgDAFgCIAAgBQgGgCgGgGQgGgGgFgJQgEgJAAgOQAAgKAFgKQAGgKALgGQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgDAIgBQAHAAAEAFQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAIgCAJQgDAIgGAHQgEAEgGAEIgNAFQgGACgFAAIgIgBIgHAAIgHADIgGAGQgDACAAAEQAAAHAFACQAEACAIAAIASAAQASgCAMADQAMADAJAGQAJAIADAIQADAHAAAGQAAALgFAIQgEAJgMAJQgGAFgNAEQgNAEgSABIgXgBgAAAAjIgcACQgFACgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAGAFADQAHAFAJACQAKABAPABIALgCIAPgGQAHgDAFgGQAFgGgBgJQAAgNgKgJQgJgHgSAAIgGAAgAgRheQgFACgFAEQgHAIgCAKQgDAJABAJQAAAHACAIQADAGAEAFQAEAEAFACQAEACAFgBQAKABAFgIQAGgGADgLQACgKAAgJQAAgKgCgHQgCgGgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_258.setTransform(1175.2,329.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_259.setTransform(1160,325.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAZBiIgLAAIgNAAIgUAAIgLAAIgCAAIAAgCIAAgGIAAgCIADAAIAOAAIAEgBIACgGIAAgNIAAgOIAAgsQAAgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgCIAPgGIAQgIIAEgBIACgBIABABIAAACIAAASIAAAeIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIANAAIACABIABABIAAAGIgBACIgCAAIgFAAgAgOhCQgEgDgDgDQgDgEAAgFQABgGAEgFQAFgFAJgBQAIABADAFQAFAFgBAFQABAGgFAGQgEAFgJABQgDAAgEgCg");
	this.shape_260.setTransform(1147.8,321.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AA/BsIgUAAIgTAAIgJABIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgEgFgCQgFgCgFAAQgGAAgHADQgIADgGAGIgEAHQgCADAAAFIAABBIABAJQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKgBIgSAAIgTAAIgKABIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgCQgDgDgFgCIgFgCIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHADQAHADAGAGQAHAGACAHQADAHABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJgBg");
	this.shape_261.setTransform(1135.8,320.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_262.setTransform(1123.2,323.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_263.setTransform(1111.8,325.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("ABmBAIgSAAIgTAAIgIABIgCgBIgBgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgMIAAgMIAAgrQAAgIgBgGQgDgGgEgFQgFgDgFgBQgGgCgHAAQgHAAgHAFQgIAEgEAHQgDAGAAAHIgBARIAAAzQAAADABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIAAADIAAAEIAAADIgBABIgJgBIgSAAIgTAAIgIABIgCgBIAAgCIAAgFIAAgDIADAAIAIAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgGAAgHAEQgJAEgHAKIgDAJIAAALIAAA6QgBAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIAMAAIACAAIAAADIAAAEIAAADIgCABIgIgBIgTAAIgUAAIgIABIgCgBIgBgCIAAgFIABgDIADAAIAKAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgGIABgHIAAgIIAAg1QAAgEgCgEQgBgEgGgDIgFgDIgCgBIgBgCIAAgCIABgBIABgBIAbgOIADgBIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIABARIABAAQAHgKAMgGQALgHAOAAQALAAAJAGQAIAGAEALIADAAQAGgJAMgHQALgHAPAAQAHAAAHACQAHACAFAFIAHAIQAEAEACAHQABAHAAALIAABCQAAABABAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAIABADIAAAFIAAACIgCABIgHgBg");
	this.shape_264.setTransform(1093.3,325.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_265.setTransform(1073.5,325.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgXBqQgLgEgJgHIgFgDIgCgBIgDACIgCAEIgDADIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgEIACgKIACgQIABgRIAAgLIABgBIACgBIAFABIABAAIAAACQAAAHACAIQABAJAIALQAHAKALAGQAMAGALAAQAJAAAKgEQAJgEAGgIQAHgJAAgNQAAgPgHgKQgGgKgLgGQgKgGgMgEIgMgFIgQgGQgIgFgIgHQgHgHgEgLQgDgLAAgPQAAgLAFgKQAGgKAIgHQAHgIAMgDQAKgEAMAAQAMABAKACIANAFQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADgBIADgEIADgBIACgBIABACIAAADIABALIABAPIACANIABAJIAAACIgCAAIgDABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgCgGgEgJQgEgIgIgKQgHgGgIgDQgIgEgKAAQgNAAgHAGQgJAFgDAIQgEAIAAAIQAAAHACAHQACAGAFAGQAFAFAGADIANAGIAKAEIAcAKQAMAGAIAIQAGAHADAKQAEAJABAPQAAASgIAPQgHAOgNAJQgOAJgUABQgPgBgLgEg");
	this.shape_266.setTransform(1058.1,320.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgrAIIgBgBIAAgMQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIBTAAIADAAIAAADIAAAKQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgCAAIhTAAIgBAAIgBAAg");
	this.shape_267.setTransform(1036,323.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgGBBQgEgCgEgEQgDgEAAgGIACgIQABgDAEgEQAEgDAHAAQAGAAAFAGQAFAEABAIQgBAIgEAEQgFAFgHAAIgHgBgAgGggQgEgCgEgEQgDgDAAgIIACgGQABgEAEgDQAEgDAHAAQAGAAAFAFQAFAEABAJQgBAHgEAFQgFAEgHABIgHgCg");
	this.shape_268.setTransform(1193.7,272.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_269.setTransform(1183.6,272.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_270.setTransform(1169.6,267.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQACgCAAgFIAAgNIAAgXIAAgYIAAgSIAAgSIAAgWIAAgVIgBgNQAAgHgDgEQgFgFgHgCIgFgCIgCAAIAAgBIAAgDIABgBIACgBIARgIQAJgEAIgGIADgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAEIAAAUIAAAcIgBAdIAAATIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLgBg");
	this.shape_271.setTransform(1142.5,267.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgSA+QgMgEgKgNQgIgLgDgKQgDgKAAgKQABgRAHgQQAIgQAOgKQAPgKATAAQAPAAAJAFQAJAEAEAGQAEAGgBADQAAAFgDADQgDADgFAAQgFAAgEgEQgEgDgDgGQgFgIgFgDQgFgCgFAAQgIAAgIAFQgIAGgFAKQgFAKgBAQQABALAEAMQAEANAHAIQAHAKAJADQAHADAIAAQALAAAIgDQAHgDAHgHIABgBIACABIADADIABABIgBADQgFAFgHAEQgIAFgJADQgJAEgLAAIgCAAQgKAAgLgEg");
	this.shape_272.setTransform(1132.7,272.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgJgBg");
	this.shape_273.setTransform(1118.5,272.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLABIgCgBIAAgCIAAgGIAAgCIADgBIAPAAIADgBIACgEIAAgOIAAgNIAAgtQAAgHgDgEQgDgEgLgBIgDgBIAAgCIAAgDIAAgBIACgBIAPgGIAQgJIAEgBIADAAIAAABIAAADIAAAQIAAAfIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIACABIABADIAAAEIgBACIgCACIgGgBgAgOhDQgEgCgDgDQgDgEAAgFQABgGAEgFQAFgGAJABQAIgBADAGQAFAFAAAFQAAAGgFAGQgEAGgIAAQgEAAgEgDg");
	this.shape_274.setTransform(1106.3,268.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgCIADgBIAOAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQACgCAAgFIAAgNIABgXIAAgYIAAgSIAAgSIgBgWIAAgVIAAgNQgBgHgEgEQgDgFgIgCIgGgCIgBAAIgBgBIAAgDIABgBIACgBIARgIQAKgEAHgGIAEgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAEIAAAUIgBAcIAAAdIAAATIAAAZIAAARIAAAVIAAAUIAAANIACAHQABACAFAAIAOAAIACABIABACIAAAFIAAACIgCABIgLgBg");
	this.shape_275.setTransform(1090.9,267.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAXBsIgXAAIgWAAIgLABIgCgBIAAgCIAAgFIABgCIADgBIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQACgCAAgFIAAgNIAAgXIAAgYIAAgSIAAgSIAAgWIAAgVIgBgNQAAgHgDgEQgFgFgGgCIgGgCIgCAAIAAgBIAAgDIABgBIABgBIASgIQAJgEAIgGIADgBIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAAAEIAAAUIAAAcIgBAdIAAATIAAAZIAAARIAAAVIAAAUIAAANIACAHQACACAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLgBg");
	this.shape_276.setTransform(1083.2,267.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAZBiIgLAAIgNgBIgUABIgKABIgCgBIgBgCIAAgGIABgCIACgBIAPAAIADgBIABgEIAAgOIAAgNIAAgtQABgHgDgEQgDgEgLgBIgDgBIAAgCIAAgDIAAgBIACgBIAQgGIAQgJIACgBIADAAIABABIAAADIAAAQIAAAfIAAAhIAAAQIAAAKIACAGQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAOAAIADABIAAADIAAAEIAAACIgCACIgGgBgAgOhDQgEgCgCgDQgEgEAAgFQAAgGAFgFQAFgGAKABQAGgBAEAGQAEAFAAAFQAAAGgEAGQgEAGgJAAQgDAAgEgDg");
	this.shape_277.setTransform(1075.3,268.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAiBAIgCgEIgehVIgBAAIgkBWIgDADIgDABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgEIgohpQgBgFgDgCQgDgCgFAAIgHAAIgCAAIAAgCIAAgGIAAgCIACAAIAJAAIASAAIAQAAIAJAAIACAAIABACIAAAGIgBACIgCAAIgCAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACABAFIAYBPIABAAIAfhJIgBgGIgCgDIgDgDIgFgBIgFAAIgBAAIgBgCIAAgGIABgCIACgBIAJABIARAAIAQAAIAHgBIACABIAAABIAAAHIAAABIgCABIgGAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABQgBABABAEIAXBIIABAAIAYhBQADgIgBgEQgCgEgEgBIgFAAIgBAAIAAgCIAAgGIAAgCIACAAIAHAAIAQAAIAOAAIAIAAIABAAIABACIAAAGIgBACIgBAAIgIAAQgDABgCABIgEAEIgGAMIgLAbIgMAdIgLAbIgGAOQAAABgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBg");
	this.shape_278.setTransform(1061,272.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_279.setTransform(1038.6,270.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgXA+QgIgCgDgDIgBgCIAAgCIgGgcIABgCIACgBIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAHAOIAHAKQADAEAEADQAFACAGAAQAGAAAFgCQAGgCADgFQAEgEAAgHQAAgKgGgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAFgIQAHgIAJgFQAKgFAKAAQAKAAAHACIAKAEIAFADIABADIAEAUIgBACIgBACIgDABIgCAAIgBgCIgLgOQgCgEgFgEQgEgEgJABQgFgBgFADQgFACgEAFQgDAEgBAHQABAIAEAEQAEAFAGACIAOAFQAQAFAJAHQAKAIABARQgBANgGAIQgGAKgKAEQgLAFgLAAQgMgBgIgDg");
	this.shape_280.setTransform(1572.8,219.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgaBuQgGgBgGgDQgGgCgHgIQgLgKgEgMQgEgLAAgPQAAgOAFgNQAFgNALgKQAJgJALgFQAMgFANAAIAQABIAPAEIAAg7IgBgJQgCgDgEgCQgEgCgIgBIgCgBIAAgCIAAgFIAAgBIACgBIANgCIAMgDIAIgBIAEgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAYIgBAiIAAAnIAABBIABAMIAAAKIACAFQACADAEABIAIABIAEABIABACIABACIAAACIgCABIgiAMIgCAAIgCgDIgEgNQgFAFgHAEQgHADgIACQgIACgIAAIgKAAgAgVgIQgHACgGAGQgIAJgDAKQgDALAAAJQABARAGANQAHANAJAIQAJAHAJAAQAMAAAJgFQAIgFADgGIABgGIABgEIAAg0IgBgHQAAgEgCgDQgDgGgIgFQgHgEgMgBQgIAAgHADg");
	this.shape_281.setTransform(1560,214.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_282.setTransform(1544.1,219.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_283.setTransform(1529.6,219.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_284.setTransform(1509.2,219.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("ABmBAIgRAAIgUAAIgIABIgDgBIAAgCIAAgFIABgDIADAAIAHAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgMIAAgMIAAgrQAAgIgCgGQgBgGgGgFQgDgDgHgBQgFgCgGAAQgIAAgIAFQgHAEgEAHQgDAGAAAHIgBARIAAAzQAAADACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAKAAIADAAIABADIAAAEIgBADIgCABIgIgBIgTAAIgSAAIgJABIgBgBIgBgCIAAgFIABgDIACAAIAJAAIAFgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IgBgRQgBgHgCgDIgEgFQgEgDgFgBIgLgCQgFAAgJAEQgIAEgGAKIgEAJIgBALIAAA6QAAAEACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIALAAIADAAIABADIAAAEIgBADIgCABIgJgBIgTAAIgTAAIgJABIgBgBIAAgCIAAgFIAAgDIADAAIAKAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBIABgGIAAgHIAAgIIAAg1QAAgEgBgEQgCgEgGgDIgGgDIgCgBIAAgCIAAgCIABgBIABgBIAagOIAEgBIACgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAADIACARIABAAQAHgKALgGQAMgHAOAAQAMAAAJAGQAHAGAEALIACAAQAHgJAMgHQAMgHANAAQAJAAAGACQAHACAFAFIAHAIQADAEACAHQADAHAAALIAABCQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAIACAAQABAAAAABQAAAAAAAAQAAAAAAABQABAAAAABIAAAFIgBACIgCABIgHgBg");
	this.shape_285.setTransform(1490.7,219.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AATA9QgGgGgCgJIgBAAQgEAFgHAFQgHAFgKADIgJABIgJABQgEAAgEgCQgEgDgDgFQgDgGAAgJQAAgKAGgJQAHgJARgIIAOgFIALgHIAIgEIAAgTIgBgJQgBgGgCgCQgDgEgDgBQgFgCgGAAIgLABQgFACgEAEQgDACABADIABAIQAAAIgEAFQgDAEgJAAQgEAAgCgCQgBgDAAgFQAAgHAFgIQAGgHAJgFQAKgGAIgDQAJgCAJAAQAKAAAGACQAFADADADQAEAFACAFIABAMIAAAsIAAASQAAAMACAFQACAFAEAAQAEAAADgCIAEgDIABgBIACABIADACIABACQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAABIgEAFQgDADgEADQgFADgIAAQgIAAgFgFgAgBACIgOAIQgGAEgFAGQgEAGgBAKQABAIAEAEQAEAEAHAAQAEAAAGgDIAJgHQAEgEABgEIAAgkIgKAEg");
	this.shape_286.setTransform(1472.6,219.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AggBoQgMgDgLgGQgIgEgDgGQgEgHAAgHQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgCIAAgBQgGgDgGgFQgGgGgFgJQgEgJAAgOQAAgKAFgKQAGgJALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIAAQAHAAAEAFQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAJgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAGQgDACAAAEQAAAHAFACQAEACAIAAIASAAQASgCAMADQAMADAJAGQAJAHADAJQADAHAAAGQAAALgFAJQgEAIgMAJQgGAEgNAFQgNAEgSABIgXgBgAAAAjIgcADQgFABgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGAAgAgRheQgFABgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEACAFgBQAKABAFgIQAGgHADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_287.setTransform(1458.6,223.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_288.setTransform(1437.2,219.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAHQgCADAAAFIAABAIABAKQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHAEQAHACAGAHQAHAFACAGQADAIABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEIAAADIgCABIgJAAg");
	this.shape_289.setTransform(1422.7,214.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgIBNQgGgEgEgGQgEgFAAgGIAAgQIAAgRIAAgKIAAgHIABgIIAAgPIAAgOIgSAAIgEgBIgBgDIACgDIAEgCQAEgCAHgHIAOgPQAGgIADgGIABgCIADAAIABABIABADIgCAdIAqAAIACABIAAACIgDALIgBABIgCABIgmAAIAAAVIAAAUIAAAeQAAALACAGQADAGADACQAEACACAAIALgBQAGgBADgCIACgBIACABIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABIgGAFQgFADgHACQgGACgJAAQgHAAgHgEg");
	this.shape_290.setTransform(1410.1,217.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AA8BAIgUAAIgSAAIgJABIgCgBIAAgDIAAgEIABgDIADAAIAIAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQABgBAAgEIABgNIAAgMIAAgnIgBgQQgBgGgHgFQgFgEgFAAIgLgBIgKACQgHACgHAIQgEAEgCAGIgBAKIAAA9IABAIQACACAEAAIAIAAIACABIABACIAAAFIAAACIgCABIgIgBIgSAAIgTAAIgIABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgBgCIAAgFIABgCIACgBIAJAAIAEgBQACgBAAgEIAAhFQAAgHgEgEQgDgEgGgDIgCgBIgCgCIAAgBIAAgBIAAgCIACgBIAagPIADgBIACgBIACABIABADIACASIABAAQAGgJAMgGQALgHALAAIANACQAHABAFAEQAFADADAFQAEAFACAGQADAFAAAEIAABMQAAAEABABQACACADAAIAKAAIACABIABACIAAAEIgBADQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgJgBg");
	this.shape_291.setTransform(1389.7,219.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_292.setTransform(1375.2,219.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAHQgCADAAAFIAABAIABAKQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHAEQAHACAGAHQAHAFACAGQADAIABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJAAg");
	this.shape_293.setTransform(1360.7,214.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohoQgBgFgDgBQgDgCgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgCIAJABIASABIAQgBIAJgBIACACIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBABABAFIAYBOIABAAIAfhIIgBgGIgCgEIgDgCIgFAAIgFAAIgBgBIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACgBIAHABIAQABIAOgBIAIgBIABACIABABIAAAGIgBACIgBABIgIAAQgDAAgCABIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAIgDgBg");
	this.shape_294.setTransform(1342.2,219.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_295.setTransform(1316.8,219.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AggBoQgMgDgLgGQgIgEgDgGQgEgHAAgHQAAgIAFgHQAFgHAHgGIAOgIIAAgBQgJgDgFgFQgFgGgBgHQABgHAEgGQAFgFAGgEQAGgDAFgCIAAgBQgGgDgGgFQgGgGgFgJQgEgJAAgOQAAgKAFgKQAGgJALgHQAMgHARAAQAKAAAIADQAIAEAEAEIAGAGIAOgIQAHgEAIAAQAHAAAEAFQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgCgBIgEgEIgDgBIgEgBIgEAAIgFACIADAJQABAGAAAIQAAAJgCAIQgDAIgGAHQgEAFgGADIgNAFQgGACgFAAIgIgBIgHgBIgHAEIgGAGQgDACAAAEQAAAHAFACQAEACAIAAIASAAQASgCAMADQAMADAJAGQAJAHADAJQADAHAAAGQAAALgFAJQgEAIgMAJQgGAEgNAFQgNAEgSABIgXgBgAAAAjIgcADQgFABgFADQgGAEgEAGQgEAGAAAJQAAAFAEAGQADAFAFAEQAHAFAJACQAKABAPAAIALgBIAPgGQAHgDAFgGQAFgGgBgIQAAgOgKgJQgJgHgSAAIgGAAgAgRheQgFABgFAGQgHAHgCAKQgDAJABAJQAAAIACAGQADAHAEAFQAEAEAFACQAEACAFgBQAKABAFgIQAGgHADgJQACgKAAgKQAAgKgCgGQgCgHgEgEIgHgFQgDgCgDAAIgLACg");
	this.shape_296.setTransform(1302.3,223.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgCgBIAAgCIAAgFIABgDIADAAIAPAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgDIAAgOIAAgWIAAgYIAAgSIAAgSIAAgXIAAgVIgBgNQAAgHgDgFQgFgEgGgCIgGgCIgCgBIAAgBIAAgCIABgBIABgBIASgIQAJgEAIgFIADgCIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAEIAAATIAAAcIgBAcIAAAUIAAAaIAAAQIAAAVIAAAUIAAANIACAGQACADAEAAIANAAIADABIABACIAAAFIgBACIgBABIgLAAg");
	this.shape_297.setTransform(1283.4,214.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAXBtIgXgBIgWABIgLAAIgBgBIgBgCIAAgFIABgDIADAAIAOAAQABAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDIAAgOIABgWIAAgYIAAgSIAAgSIgBgXIAAgVIAAgNQgBgHgEgFQgDgEgIgCIgGgCIgBgBIgBgBIAAgCIABgBIACgBIARgIQAKgEAHgFIAEgCIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAEIAAATIgBAcIAAAcIAAAUIAAAaIAAAQIAAAVIAAAUIAAANIACAGQABADAFAAIANAAIADABIABACIAAAFIAAACIgCABIgLAAg");
	this.shape_298.setTransform(1275.7,214.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgCAAIAAgCIAAgGIAAgCIADAAIAOAAIAEgBIACgGIAAgNIAAgOIAAgsQAAgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgIIADgBIAEgBIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABABAAIANAAIACABIABABIAAAGIgBABIgCABIgGAAgAgOhCQgEgCgDgEQgDgEABgFQAAgGAEgFQAFgFAJgBQAIABADAFQAFAFAAAFQAAAGgFAGQgEAFgIABQgEAAgEgCg");
	this.shape_299.setTransform(1267.9,215.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohoQgBgFgDgBQgDgCgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgCIAJABIASABIAQgBIAJgBIACACIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABQgBABABAFIAYBOIABAAIAfhIIgBgGIgCgEIgDgCIgFAAIgFAAIgBgBIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACgBIAHABIAQABIAOgBIAIgBIABACIABABIAAAGIgBACIgBABIgIAAQgDAAgCABIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAIgDgBg");
	this.shape_300.setTransform(1253.5,219.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgZA+QgMgFgKgLQgHgIgDgIQgEgHgBgIIgBgRQAAgMAGgNQAGgNAOgLQALgIALgDQAKgDAHAAQAMAAAMAFQALAGAHAGQAKALAFAMQAFAMAAANQAAARgJAPQgJAPgPAJQgOAKgSAAQgLAAgNgEgAgLg2QgGACgGAGQgIAIgEALQgEALAAAQQAAAMACAKQADAKAHAKQAFAHAHAEQAHAEAJAAQAMAAAIgIQAJgIAEgOQAFgNAAgQQAAgQgHgNQgHgMgJgGQgJgHgHAAIgCAAQgFAAgEACg");
	this.shape_301.setTransform(1212.9,219.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("Ag/BkQgEgFAAgGQAAgFAEgEQAEgCAGgBIAIABIAFACIAEAAIADgCIAFgIIAHgOIAHgQIAFgMIgEgOIgJgZIgKgeIgIgaIgFgMIgFgJQgDgEgGAAIgIAAIgCgBIAAgBIAAgHIAAgBIACgBIAIAAIAUABIASgBIAKAAIACABIAAABIAAAHIAAABIgBABIgGAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAGIADAKIAFASIAHAWIAFATIAEAKIABAAIAEgIIAHgSIAJgUIAHgSIAEgLQABgFgBgDQgCgDgDAAIgFAAIgCgBIAAgBIAAgHIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAIAQABIALgBIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAABIAAAHIAAABIgBABIgFAAIgFABIgGAFIgKATIgRAkIgUAtIgMAeIgLAZIgIAQIgEAIQgDAEgFAEQgFADgIAAQgJAAgEgEg");
	this.shape_302.setTransform(1199.1,223.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_303.setTransform(1178.5,219.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAJBBIgVgBIgXABIgKAAIgBAAIAAgCIAAgGQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADAAIAMAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgQIAAgUIAAgbIAAgMIgEgHIgGgEIgGgDIgCgBIAAgBIAAgCIAAgBIACgBIAegQIACgBIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIABAVIACAAQAFgKAKgIQAKgHAKAAQAHAAAEADQAEAEAAAGQgBAGgDAEQgEAFgFAAIgEgBIgEgCIgFgCIgFgBQgEAAgFADQgFADgDAHIgCAGIgBAEIAAA9QAAAHACADQABACAEABIAOAAIACABIABABIAAAGIgBABIgBABIgKAAg");
	this.shape_304.setTransform(1167.1,219);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgTA+QgNgFgIgMQgGgIgCgGQgDgHgBgIQgCgIAAgJIACgOQABgIAEgJQAFgJAHgIQAKgKALgDQALgDAKAAQANAAAJAFQAIAFAFAIQAFAHACAHIACAMQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCABgEAAIhJAAIgBAOQAAAOAGAMQAFALAKAHQAJAHAMAAQANAAAKgHQAJgGAEgIIABgBIACAAIADACIABABQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBABQgCAGgGAHQgHAIgJAFQgKAGgNAAQgMAAgNgEgAgQgxQgIAHgFARIAuAAIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgKQgCgGgFgGQgFgFgKAAIgBAAQgIAAgIAHg");
	this.shape_305.setTransform(1155.4,219.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAHQgCADAAAFIAABAIABAKQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHAEQAHACAGAHQAHAFACAGQADAIABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJAAg");
	this.shape_306.setTransform(1140.9,214.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAiBAIgCgFIgehUIgBAAIgkBVIgDAFIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgFIgohoQgBgFgDgBQgDgCgFAAIgHAAIgCgBIAAgCIAAgGIAAgBIACgCIAJABIASABIAQgBIAJgBIACACIABABIAAAGIgBACIgCABIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABQgBABABAFIAYBOIABAAIAfhIIgBgGIgCgEIgDgCIgFAAIgFAAIgBgBIgBgBIAAgHIABgCIACAAIAJAAIARABIAQgBIAHAAIACAAIAAACIAAAGIAAACIgCABIgGAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACABAEIAXBIIABAAIAYhBQADgIgBgEQgCgFgEABIgFAAIgBgBIAAgCIAAgGIAAgCIACgBIAHABIAQABIAOgBIAIgBIABACIABABIAAAGIgBACIgBABIgIAAQgDAAgCABIgEADIgGAOIgLAaIgMAdIgLAbIgGAPQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAIgDgBg");
	this.shape_307.setTransform(1122.5,219.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgXA+QgHgCgDgDIgCgCIAAgCIgGgcIABgCIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAOIAGAKQADAEAEADQAEACAIAAQAFAAAFgCQAGgCADgFQAEgEAAgHQABgKgHgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgIAKgFQAKgFAKAAQAKAAAHACIAKAEIAFADIABADIAEAUIgBACIgBACIgDABIgCAAIgBgCIgLgOQgCgEgFgEQgFgEgIABQgFgBgFADQgGACgDAFQgDAEgBAHQABAIAEAEQAEAFAHACIAMAFQARAFAJAHQAKAIAAARQAAANgGAIQgGAKgKAEQgKAFgMAAQgLgBgJgDg");
	this.shape_308.setTransform(1099.2,219.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAYBiIgKAAIgMgBIgVABIgLAAIgBAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgDgBIAAgBIAAgCIAAgBIACgBIAPgHIAQgIIADgBIAEgBIABABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIACABIABABIAAAGIgBABIgBABIgHAAgAgOhCQgEgCgDgEQgCgEAAgFQgBgGAFgFQAFgFAKgBQAGABAEAFQAEAFABAFQgBAGgEAGQgEAFgIABQgEAAgEgCg");
	this.shape_309.setTransform(1089.9,215.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgXA+QgIgCgCgDIgCgCIAAgCIgGgcIABgCIABgBIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAIAOIAFAKQADAEAFADQAEACAIAAQAFAAAGgCQAFgCAEgFQADgEAAgHQABgKgHgHQgGgGgQgEQgJgDgIgFQgIgDgFgHQgFgIAAgLQAAgLAGgIQAFgIAKgFQAJgFALAAQALAAAGACIALAEIADADIACADIAEAUIAAACIgCACIgEABIgBAAIgBgCIgKgOQgDgEgFgEQgFgEgIABQgFgBgGADQgFACgDAFQgDAEgBAHQABAIADAEQAFAFAHACIAMAFQARAFAJAHQAKAIAAARQAAANgGAIQgGAKgKAEQgLAFgLAAQgLgBgJgDg");
	this.shape_310.setTransform(1072.9,219.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAYBiIgKAAIgNgBIgUABIgKAAIgCAAIgBgCIAAgGIABgCIACAAIAPAAIADgBIABgGIAAgNIAAgOIAAgsQABgIgDgCQgDgFgLgCIgCgBIgBgBIAAgCIABgBIABgBIAQgHIAQgIIACgBIADgBIACABIAAACIgBARIAAAgIAAAgIAAAQIABAKIABAGQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAOAAIADABIAAABIAAAGIAAABIgCABIgHAAgAgOhCQgEgCgCgEQgDgEAAgFQAAgGAEgFQAFgFAKgBQAGABAFAFQADAFAAAFQAAAGgDAGQgFAFgJABQgDAAgEgCg");
	this.shape_311.setTransform(1063.6,215.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AA/BtIgUgBIgTABIgJAAIgCgBIgBgDIAAgEIAAgDIACAAIAHAAIAHgBQAEgBAAgDIABgIIAAgLIgBgMIAAgXQABgNgCgKQgCgIgHgGQgEgDgFgDQgFgCgFAAQgGAAgHADQgIACgGAHIgEAHQgCADAAAFIAABAQAAAIABACQABADAEAAIAJAAIADAAIABADIAAAEIgBADIgCABIgKAAIgSgBIgTABIgKAAIgCgBIAAgCIAAgFIABgDIADAAIAGAAIAHgBQADgBAAgDIABgIIAAgQIAAgSIAAgQIAAhaQAAgIgBgFQgBgFgEgDQgDgCgFgBIgFgDIgCAAIAAgBIAAgDIAAgBIADgCIAfgQIAEgCIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABACAAADIgBAJIAAASIAAAVIAAAUIAAANIAAAUIABAAQAIgKAMgEQAKgGAKAAQAKAAAHAEQAHACAGAHQAHAFACAGQADAIABAIIAAAPIAAARIAAARIAAAPIABAKQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAIABIAFAAIACAAIABADIAAAEIAAADIgCABIgJAAg");
	this.shape_312.setTransform(1051.6,214.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAmBwIgNAAIgYgBIgeABIgOAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgGIAAgCIACgBIAVAAQAFAAACgCQADgCAAgDIAAgOIABgaIAAgdIAAgYIAAgMIAAhOIgIAAIgOAAIgSABQgJABgGACQgHACgGAGQgFAHgDAHIgGANIgBACIgCAAIgFgCIgBgBIAAgCIADgMIAFgRIADgPIACgJIABgDIADgBIACAAIABABIAEACQADADAEACIAKABIAPABIASABIAYAAIANAAIAbAAIASgBIAQgBIAIgBIAHgEIAFgDIACgBIADAAIABABIABADIABAJIACAPIAEARIACANIAAACIgCABIgFABIgCAAIAAgCIgFgKIgHgOQgEgHgFgCQgGgCgJgCIgTgCIgSAAIgJAAIAABWIAAAKIAAAWIAAAaIAAAXIABALQgBAGADADQACADAFAAIATAAIADABIAAACIAAAGIAAADIgDAAIgFAAg");
	this.shape_313.setTransform(1032.6,214.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AB4CAIgngBIglABIgRABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgCgCAAgDIAAgKQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAEgBIASAAQAFABADgDQADgEABgHIABgZIAAgZIAAhPQAAgRgCgOQgDgNgMgKQgLgHgLgCQgLgCgKABQgIAAgNAEQgNAFgPAOQgJAKgCALQgDALABAIIAAB8QgBAMADAEQACAEAKgBIAPAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAKIgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgPgBIglgBIglABIgPABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgEIAAgLIABgEQABgBAEgBIASAAQAFABAEgCQACgDAAgHIAAiMQABgNgIgIQgGgJgLgFIgFgCIgEgDIgBgDIAAgDIACgDIAEgDIAzgdIAGgCIAFgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIACAFIAEAlIABAAQAOgRAXgNQAWgNAWAAQAOAAANACQANAEAMAGQAIAHAHAKQAIALAFAKQAEAMAAAHIAACaQAAAHAEADQADADAHgBIASAAQAEABACABIABAEIAAAKIgBAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgRgBg");
	this.shape_314.setTransform(1468.3,138.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg4QAAgOgCgJQgCgIgFgFQgFgEgIgFIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPABAIAHQAHAIAAALQAAANgIAHQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAGQgKAGgIAOIgEALIgBAIIAAB8QgBANAEAGQAEAGAIgBIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_315.setTransform(1391.2,138.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AARCCIgqgBIgtABIgVABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQACgCADAAIAYAAQAHAAADgDQADgCAAgHIABgfIAAgoIAAg4QAAgOgCgJQgCgIgFgFQgFgEgIgFIgMgGIgDgCIgBgCIAAgEIABgDIADgCIA8gfIAFgCIADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAFIACArIADAAQANgWATgPQATgQAUAAQAPABAIAHQAHAIAAALQAAANgIAHQgIAJgJAAQgFAAgEgBIgIgEIgJgEQgFgBgGAAQgIAAgJAGQgKAGgIAOIgEALIgBAIIAAB8QgBANAEAGQAEAGAIgBIAdAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAALIgBAFQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVgBg");
	this.shape_316.setTransform(1297.9,138.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgQB/QgDgDgCgGIgFgOIgMgdIgNgjIgMgeIgFgNIgFgNIgJgaIgKgcIgHgQQgFgNgGgFQgFgEgIAAIgMAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBgEIAAgLQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAGgBIAPABIAjABIAlgBIARgBIAFABIABAEIAAALIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAAQgFAAgDADQgDACAAAGQAAAFADAJIAFAWIAHAWIAEAOIAHARIAKAcIALAcIAHASIACAAIAMgeIASgsIASgsIAKgeQADgNgDgGQgDgHgIAAIgMAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgEIAAgLIAAgEIADgBIARABIAfABIAdgBIAOgBQABAAABAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAABAAABIAAAKIAAAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgMAAQgFAAgFABQgEACgEADQgEAEgGAMIgOAbIgOAfIgKAXIgLAZIgSApIgRAlIgIATIgGAKQgDAEgFAAQgEAAgDgEg");
	this.shape_317.setTransform(1248.7,139.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgjDaQgVgEgYgJQgYgIgYgPQgWgNgUgZQgUgZgNgkQgNgjgBgsQAAgSAFgYQAEgYAMgbQANgbAWgcQAbggAcgRQAbgQAcgGQAcgGAYABQATgBAWAEQAWAEAYAKQAXAKAYAUQAWATATAaQATAaALAhQALAiABAoQAAAhgLAiQgLAhgYAfQgbAmgqAXQgqAXg9ABQgOAAgVgDgAgTjGQgOABgUAHQgUAHgWAVQgUATgOAZQgNAZgHAbQgGAbAAAZQAAA6ASApQARApAaAZQAaAZAbALQAbALATAAQAnAAAbgOQAcgOARgXQARgWAKgaQAJgZADgYQAEgXAAgRQgBgwgPgnQgPgmgYgbQgZgbgbgOQgcgOgZAAIgKgBIgIAAg");
	this.shape_318.setTransform(1210.8,130.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgnB7QgZgJgSgYQgKgPgGgOQgGgOgCgQQgCgPAAgUQAAgMADgQQADgQAIgSQAIgRAQgQQATgUAWgGQAWgHAWABQAZAAARALQASAKAKAOQAKAPAEAOQAEAPAAAJQAAAGgFACQgFACgHAAIiTAAQgCAIAAAUQAAAdAMAXQALAXATAOQATANAXAAQAcAAASgMQATgNAIgPIACgDIADAAIAIAEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAACgCAFQgFANgNAOQgMAPgTAMQgUALgaAAIgDAAQgYAAgYgJgAghhjQgRAPgJAhIBcAAQAJAAAEgCQAEgDAAgEQAAgHgEgNQgDgMgKgKQgKgLgUAAQgTAAgRAOg");
	this.shape_319.setTransform(1158.5,138.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("ADLCBIgigBIglABIgTABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgFIAAgKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgBAEAAIAPAAQAFAAAEgDQADgCAAgHIACgYIAAgYIAAhYQAAgPgEgMQgEgNgKgIQgIgGgLgDQgMgDgNAAQgOAAgQAJQgOAJgIANQgHANgBANQgBAOAAAUIAABnQAAAGADAEQACAEAHAAIAVAAQADAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKIgBAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgQgBIglgBIgmABIgSABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgFIAAgJIABgFQABgBAEAAIARAAQAIAAADgCQADgDAAgFIAAh7QAAgWgDgMQgCgNgEgHIgJgLQgHgFgKgDQgLgCgLAAQgMgBgQAIQgQAIgNAUQgGAIgBAKQgCAJAAANIAAB1QAAAIADAEQADAEAGAAIAWAAQAEAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAADgBACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgRgBIglgBIgnABIgRABQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgLQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBIAUAAQAFAAACgDQACgEABgIIAAgQIAAgPIAAhqQAAgJgDgIQgDgIgLgGIgMgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgCgCIAAgFIACgDIACgCIA1gbIAGgCIAFgBQADAAABADQACACAAADIACAjIACAAQAOgTAYgNQAXgNAbAAQAYAAARAMQAQAMAKAWIADAAQAOgTAXgNQAYgOAbAAQAQgBANAEQAOAEALAKIANAQQAHAIAEAOQAEANABAXIAACFQAAAHADACQAEADAFAAIAQAAQAEAAACABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAKQAAAEgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgQgBg");
	this.shape_320.setTransform(1121.5,138.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAmB5QgMgLgEgSIgBAAQgJALgOAJQgPAKgUAGQgJADgIAAIgTABQgHAAgJgFQgIgEgGgLQgFgLgBgTQAAgUANgSQAMgSAjgQIAcgLIAXgNQALgFAFgFIAAgmIgCgSQgCgJgEgHQgFgGgIgEQgJgDgNAAQgKAAgLADQgMAEgGAFQgGAGABAHIACAPQAAAQgHAJQgHAJgSABQgHgBgEgEQgDgEAAgLQAAgPALgPQALgPATgLQATgLARgFQARgFATAAQAVAAAKAFQALAFAGAGQAJAJACALQADAKgBANIAABbIAAAjQAAAZAFAKQAFAJAIABQAIAAAFgEQAGgCACgDIADgEQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIAGAFQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAADgCAEIgIAMQgFAHgKAGQgJAEgPABQgRAAgKgLgAgDAFQgNAGgOAIQgNAJgKAMQgJANAAASQAAAQAJAIQAIAJAOAAQAJAAAMgGQAKgGAJgJQAIgIAAgJIAAhIQgIAGgMAFg");
	this.shape_321.setTransform(1085.4,138.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("Ag2DWQgfgHgdgPQgdgPgVgYQgcgfgOgoQgNgoAAg1QAAgqARgoQASgoAggeQAggcAqgOQAqgPA1AAQAnABAfAKQAgALAQANQAEADAEAAQACgBAEgDIAIgLIAEgDQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIABAFIACByIgBAEQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgLABIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgDgNgIgTQgJgTgQgTQgJgMgPgLQgPgLgWgIQgVgHgbgBQgeAAgdAKQgcALgbAcQgZAagNAjQgOAkgBApQAAA0APAsQAPArAcAcQAWAVAbAKQAbALAdAAQAjAAAXgGQAZgFAPgJQAKgGADgMQAEgMgBgXIAAgsQAAgQgFgGQgGgGgNAAIgaAAIgDgBIgBgDIAAgPIAAgDQABgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAIAaAAIAyABIAwgBIAWAAIAEABIACADIAAAOIgCAEIgDABIgYAAQgIAAgEAEQgGAFAAAOIAABPIABALIACAIQAAAEgDACIgIAEQgjASgnAKQgnAKgyAAQgaAAgfgHg");
	this.shape_322.setTransform(1047.2,130.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:-221.7,y:135}},{t:this.shape_83},{t:this.shape_82,p:{x:-176.7,y:134.9}},{t:this.shape_81,p:{x:-151.1,y:134.9}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:-268.9,y:215.1}},{t:this.shape_69,p:{x:-254.7,y:215.3}},{t:this.shape_68},{t:this.shape_67,p:{x:-233.6,y:215.4}},{t:this.shape_66,p:{x:-217.8,y:210.8}},{t:this.shape_65,p:{x:-203.8,y:215.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:-157.7,y:215.2}},{t:this.shape_61},{t:this.shape_60,p:{x:-127.1,y:215.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-96.7,y:215.2}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-52.4,y:215.1}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-323.8,y:268.3}},{t:this.shape_46,p:{x:-311,y:268.3}},{t:this.shape_45,p:{x:-300,y:266.8}},{t:this.shape_44},{t:this.shape_43,p:{x:-280.2,y:268.3}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-333.8,y:321.3}},{t:this.shape_36,p:{x:-319.3,y:316.9}},{t:this.shape_35},{t:this.shape_34,p:{x:-298.7,y:319.8}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-351.4,y:372.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-318.8,y:372.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-201.9,y:374.5}},{t:this.shape_19,p:{x:-189.1,y:372.9}},{t:this.shape_18,p:{x:-179.6,y:372.9}},{t:this.shape_17,p:{x:-167.7,y:374.4}},{t:this.shape_16,p:{x:-152,y:374.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-350,y:427.5}},{t:this.shape_12,p:{x:-336.7,y:427.4}},{t:this.shape_11},{t:this.shape_10,p:{x:-312.4,y:427.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:-171.3,y:427.5}},{t:this.shape_2,p:{x:-158.1,y:427.4}},{t:this.shape_1},{t:this.shape,p:{x:-133.8,y:427.4}}]}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178,p:{x:-482,y:154}},{t:this.shape_177,p:{x:-437.4,y:145.3}},{t:this.shape_84,p:{x:-408.2,y:154}},{t:this.shape_176},{t:this.shape_82,p:{x:-363.2,y:154}},{t:this.shape_81,p:{x:-337.6,y:154}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166,p:{x:-485,y:234.3}},{t:this.shape_165,p:{x:-473.3,y:234.1}},{t:this.shape_164,p:{x:-462,y:234.3}},{t:this.shape_163},{t:this.shape_43,p:{x:-427.6,y:234.3}},{t:this.shape_162,p:{x:-412.5,y:234.4}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_45,p:{x:-283.9,y:232.8}},{t:this.shape_153},{t:this.shape_152,p:{x:-256.8,y:234.3}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{x:-184.9,y:234.3}},{t:this.shape_147,p:{x:-612.9,y:283}},{t:this.shape_27,p:{x:-601.8,y:285.8}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_17,p:{x:-499.6,y:287.3}},{t:this.shape_36,p:{x:-476.3,y:282.9}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_34,p:{x:-388.4,y:285.8}},{t:this.shape_133},{t:this.shape_132,p:{x:-361.3,y:287.3}},{t:this.shape_46,p:{x:-340.9,y:287.4}},{t:this.shape_67,p:{x:-327.5,y:287.5}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:-292.8,y:287.3}},{t:this.shape_128},{t:this.shape_30,p:{x:-265.5,y:285.8}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-195.4,y:287.3}},{t:this.shape_123},{t:this.shape_19,p:{x:-165.7,y:285.8}},{t:this.shape_122},{t:this.shape_18,p:{x:-143.3,y:285.8}},{t:this.shape_37,p:{x:-132.4,y:287.3}},{t:this.shape_121},{t:this.shape_20,p:{x:-100.2,y:287.5}},{t:this.shape_13,p:{x:-86.1,y:287.4}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_3,p:{x:-567.8,y:340.4}},{t:this.shape_12,p:{x:-554.6,y:340.4}},{t:this.shape_114},{t:this.shape_65,p:{x:-530.3,y:340.4}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_10,p:{x:-531,y:393.4}},{t:this.shape_109},{t:this.shape_62,p:{x:-500.4,y:393.4}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:-440.9,y:393.3}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_2,p:{x:-379.6,y:393.4}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_47,p:{x:-319,y:393.4}},{t:this.shape_97},{t:this.shape_96},{t:this.shape,p:{x:-277.7,y:393.4}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_70,p:{x:-218.2,y:393.3}},{t:this.shape_92},{t:this.shape_54,p:{x:-194.2,y:393.3}},{t:this.shape_91}]},10).to({state:[{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_178,p:{x:1274.5,y:138.9}},{t:this.shape_316},{t:this.shape_177,p:{x:1339.5,y:130.2}},{t:this.shape_84,p:{x:1368.7,y:138.9}},{t:this.shape_315},{t:this.shape_82,p:{x:1413.8,y:138.9}},{t:this.shape_81,p:{x:1439.3,y:138.9}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_162,p:{x:1228,y:219.3}},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_147,p:{x:1027.6,y:267.9}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_67,p:{x:1153.8,y:272.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_16,p:{x:1545.2,y:325.2}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_66,p:{x:1589.6,y:320.9}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_152,p:{x:1093.4,y:378.3}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_129,p:{x:1162,y:378.3}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_166,p:{x:1238.1,y:378.3}},{t:this.shape_164,p:{x:1258.5,y:378.3}},{t:this.shape_105,p:{x:1273,y:378.2}},{t:this.shape_36,p:{x:1288.9,y:373.9}},{t:this.shape_60,p:{x:1311.4,y:378.3}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_124,p:{x:1368,y:378.3}},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_37,p:{x:1440,y:378.3}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_10,p:{x:1093.4,y:431.4}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_69,p:{x:1186.9,y:431.4}},{t:this.shape_57,p:{x:1200.2,y:431.4}},{t:this.shape_165,p:{x:1213.1,y:431.2}},{t:this.shape_148,p:{x:1224.5,y:431.4}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_43,p:{x:1150.6,y:484.4}},{t:this.shape_200},{t:this.shape_45,p:{x:1181.6,y:482.9}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_34,p:{x:1214.2,y:482.9}},{t:this.shape_17,p:{x:1233.6,y:484.4}},{t:this.shape_197},{t:this.shape_132,p:{x:1260.7,y:484.4}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_65,p:{x:1331.8,y:484.4}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_20,p:{x:1388.8,y:484.6}},{t:this.shape_30,p:{x:1401.5,y:482.9}},{t:this.shape_19,p:{x:1411.1,y:482.9}},{t:this.shape_12,p:{x:1422.9,y:484.4}},{t:this.shape_70,p:{x:1438.7,y:484.3}},{t:this.shape_2,p:{x:1461.4,y:484.4}},{t:this.shape_189},{t:this.shape_46,p:{x:1493.3,y:484.5}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_13,p:{x:1521.4,y:484.5}},{t:this.shape_186},{t:this.shape_18,p:{x:1554.8,y:482.9}},{t:this.shape_185},{t:this.shape_62,p:{x:1581.9,y:484.4}},{t:this.shape_184},{t:this.shape_3,p:{x:1613,y:484.5}},{t:this.shape_183},{t:this.shape,p:{x:1635.6,y:484.4}},{t:this.shape_47,p:{x:1648.4,y:484.4}},{t:this.shape_54,p:{x:1662.9,y:484.3}},{t:this.shape_182}]},10).to({state:[]},10).wait(10));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644.1,419.6,0.999,0.999,-26.3,0,0,109.3,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:109.4,regY:43.4,scaleX:1,scaleY:1,rotation:-10.3,x:647,y:413.7},0).wait(1).to({rotation:5.9,x:649.9,y:407.9},0).wait(1).to({rotation:22,x:652.8,y:402.2},0).wait(1).to({rotation:-7.3,x:651.1,y:411},0).wait(1).to({rotation:-36.7,x:649.3,y:419.8},0).wait(1).to({rotation:-13.3,x:648.1,y:410.5},0).wait(1).to({rotation:10.1,x:646.8,y:401.2},0).wait(1).to({rotation:-12.3,x:645.9,y:399.8},0).wait(1).to({rotation:-34.7,x:645.1,y:398.5},0).to({_off:true},1).wait(30));

	// Layer_1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(346,390.1,1,1,0,0,0,89.6,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:21.1,x:343.6,y:390.2},0).wait(1).to({rotation:42.2,x:341.4},0).wait(1).to({rotation:63.3,x:339.1,y:390.3},0).wait(1).to({rotation:30.8,x:336.8},0).wait(1).to({rotation:-1.7,x:334.6},0).wait(1).to({rotation:28.3,x:332.4,y:390.4},0).wait(1).to({rotation:58.4,x:330,y:390.5},0).wait(1).to({rotation:56.5,x:335.7,y:393.8},0).wait(1).to({rotation:54.7,x:341.3,y:397.2},0).to({_off:true},1).wait(30));

	// Game Content
	this.text = new cjs.Text("K Harrison\nComp Art\nMay 2019", "30px 'Tw Cen MT Condensed Extra Bold'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 35;
	this.text.lineWidth = 318;
	this.text.parent = this;
	this.text.setTransform(925.6,511.8);

	this.text_1 = new cjs.Text("Directions: Hit the drum as much as you can!", "30px 'Tw Cen MT Condensed Extra Bold'", "#FFFFFF");
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 219;
	this.text_1.parent = this;
	this.text_1.setTransform(32,260.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFF66").s().p("AAgDyQgagCgigFQg7gJgcgKIANhUQAvARBCAAQAsAAAUgNQAUgMABgRQAAgQgMggQgpAag/AAQhKABhEgrQhFgqgehKQgghOAjguQAjguBMAAQA+AAA6AbIgIgVIDTAAIAqBoIgpAAIBJC1QAYA9ADAgQACAigUAXQgTAYgoAKQgnAMhHAAQggAAgagCgAhch7QgHAWANAgQANAeAXAUQAYAUAbAAQAeAAAHgUQAGgUgMgfQgOghgXgVQgYgVgbgBQgdABgHAWg");
	this.shape_323.setTransform(875.1,193.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFF66").s().p("AByCpIg7iUQgTgvgPgPQgPgPgYAAQgXAAgTARIAqBoIAvAAIAqBoIkGAAIgqhoIArAAIgyh7IgqAAIgqhoIDWAAIARAqQAsgwBIAAQA/AAAuAjQAvAjAfBOIAiBVIAnAAIAqBog");
	this.shape_324.setTransform(817.4,186.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFF66").s().p("AgnDyIgqhoIAiAAIgxh7IgjAAIgqhnIDNAAIBcDiIAdAAIAqBogAiSiKQghgPgLgcQgLgbAVgRQAVgRAoAAQApABAgAQQAgASAKAZQAKAbgSAPQgUARgoAAQgpAAghgPg");
	this.shape_325.setTransform(773.3,178.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFF66").s().p("AD3CpIg6iPQgXg2gOgOQgOgOgWAAQgcAAgTAVIAoBkIAvAAIApBoIjZAAIg5iOQgWg2gNgOQgOgPgXAAQgbAAgUAVIApBkIAuAAIAqBoIkEAAIgqhoIAqAAIgyh7IgqAAIgqhoIDWAAIATAuQAPgVAigQQAigPAkAAQBUAAA2BBQAyhBBQAAQArAAAkATQAkASAYAfQAZAhAYA6IAdBKIAsAAIAqBog");
	this.shape_326.setTransform(718.1,186.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFF66").s().p("AD2CpIg5iPQgWg2gOgOQgOgOgXAAQgcAAgTAVIAoBkIAuAAIArBoIjaAAIg5iOQgWg2gOgOQgNgPgXAAQgbAAgUAVIApBkIAuAAIAqBoIkDAAIgqhoIAoAAIgxh7IgqAAIgqhoIDWAAIASAuQARgVAhgQQAigPAkAAQBUAAA2BBQAyhBBQAAQArAAAjATQAlASAYAfQAZAhAXA6IAfBKIArAAIAqBog");
	this.shape_327.setTransform(633.6,186.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFF66").s().p("Ah8CIQgxggglhaIgghOIgnAAIgrhoIDVAAIA/CeQAQAnANAOQANAOAXAAQAdAAARgQIgqhpIgsAAIgqhoIDYAAIBbDjIApAAIApBoIjTAAIgRgqQgxAwhGAAQgzAAgyghg");
	this.shape_328.setTransform(562.3,186.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFF66").s().p("AhICpIgqhoIAtAAIgxh7IgtAAIgqhoIDNAAIAhBTQgBgfAPgWQAPgXAVgGQAUgHAsAAIA7CSIgOAAQg1AAgVAKQgWALgDARQgCASALAfIAzAAIAqBog");
	this.shape_329.setTransform(512.5,186.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFF66").s().p("AiJDuIguhyIAlAAIhkj3IglAAIguhyIDkAAQBOAAA0AKQA1AJA4AeQA4AeAtA0QAWAYASAcQASAcAMAeQAZA+gFAzQgGAygdAbQgcAbgsAJQgqAIhhAAgAAlB8IARAAQBBAAAGgjQAFgigVg0QgNgfgUgfQgVgegdgRQgagRg3AAIgHAAg");
	this.shape_330.setTransform(458.5,179.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFF66").s().p("AgWDuIgqhoIAjAAIhrkKIgkAAIgqhpIDQAAICUFzIAfAAIAqBog");
	this.shape_331.setTransform(398.5,179.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFF66").s().p("AieCPQgwgfgRgqQgTgvAggcQAggeBGAAQBBAAArARIgDgKQgMgfgJgMQgKgNgVgJQgUgJgXAAQgpAAgJAfIiNgNQADgxApgUQApgUBfAAQAkABAdACQAcACAXAEQAxAJAdARQAdASARAVQARAWATAuIAmBeIArAAIAqBoIjXAAIgJgWQggAdhKAAQhGAAgwgfgAhCAWQgJANAIATQAIAVATAMQATANATAAQAfAAAMgRIgYg9QgbgMgaAAQgWAAgIAMg");
	this.shape_332.setTransform(362.3,186.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFF66").s().p("Ah8CIQgxggglhaIgghOIgnAAIgrhoIDVAAIA/CeQAQAnANAOQANAOAXAAQAdAAARgQIgqhpIgsAAIgqhoIDYAAIBbDjIApAAIApBoIjTAAIgRgqQgxAwhGAAQgzAAgyghg");
	this.shape_333.setTransform(305.4,186.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFF66").s().p("AAgDgQghgNgXgWQgNgMgIgLQgIgKgHgNQgLgXgahAIgWg4IgrAAIgqhnIArAAIgVgzICLhSIA0CFIBGAAIAqBnIhGAAIAaBAQANAgAKAKQAKALASAAQAQAAAUgLIApBmQgMALgdAJQgeAJgeAAQgnAAghgNg");
	this.shape_334.setTransform(260.2,180.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFF66").s().p("AhICpIgqhoIAtAAIgxh7IgtAAIgqhoIDNAAIAhBTQgBgfAPgWQAPgXAVgGQAUgHAsAAIA7CSIgOAAQg1AAgVAKQgWALgDARQgCASALAfIAzAAIAqBog");
	this.shape_335.setTransform(222.9,186.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFF66").s().p("AgnDyIgqhoIAiAAIgxh7IgjAAIgqhnIDNAAIBcDiIAdAAIAqBogAiSiKQghgPgLgcQgLgbAVgRQAVgRAoAAQApABAgAQQAgASAKAZQAKAbgSAPQgUARgoAAQgpAAghgPg");
	this.shape_336.setTransform(190.8,178.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFF66").s().p("ABkDwIkpltIgkAAIguhyIEBAAIAtByIgoAAICXDKIgHjKIgnAAIguhyIC/AAIAuByIgjAAIAFFtg");
	this.shape_337.setTransform(140.6,179.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#0066CC").s().p("AAgDyQgagCgigFQg7gJgcgKIANhUQAvARBCAAQAsAAAUgNQAUgMABgRQAAgQgMggQgpAag/AAQhKABhEgrQhFgqgehKQgghOAjguQAjguBMAAQA+AAA6AbIgIgVIDTAAIAqBoIgpAAIBJC1QAYA9ADAgQACAigUAXQgTAYgoAKQgnAMhHAAQggAAgagCgAhch7QgHAWANAgQANAeAXAUQAYAUAbAAQAeAAAHgUQAGgUgMgfQgOghgXgVQgYgVgbgBQgdABgHAWg");
	this.shape_338.setTransform(869.1,202.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#0066CC").s().p("AByCpIg7iUQgTgvgPgPQgPgPgYAAQgXAAgTARIAqBoIAvAAIAqBoIkGAAIgqhoIArAAIgyh7IgqAAIgqhoIDWAAIARAqQAsgwBIAAQA/AAAuAjQAvAjAfBOIAiBVIAnAAIAqBog");
	this.shape_339.setTransform(811.5,195.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#0066CC").s().p("AgnDyIgqhoIAiAAIgxh7IgjAAIgqhnIDNAAIBcDiIAdAAIAqBogAiSiKQghgPgLgcQgLgbAVgRQAVgRAoAAQApABAgAQQAgASAKAZQAKAbgSAPQgUARgoAAQgpAAghgPg");
	this.shape_340.setTransform(767.3,187.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#0066CC").s().p("AD3CpIg6iPQgXg2gOgOQgOgOgWAAQgcAAgTAVIAoBkIAvAAIApBoIjZAAIg5iOQgWg2gNgOQgOgPgXAAQgbAAgUAVIApBkIAuAAIAqBoIkDAAIgrhoIAqAAIgyh7IgqAAIgqhoIDWAAIATAuQAPgVAigQQAigPAkAAQBVAAA1BBQAzhBBPAAQArAAAkATQAkASAYAfQAZAhAYA6IAdBKIAsAAIAqBog");
	this.shape_341.setTransform(712.2,195.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#0066CC").s().p("AD2CpIg5iPQgWg2gOgOQgOgOgXAAQgcAAgUAVIApBkIAuAAIArBoIjaAAIg5iOQgWg2gOgOQgNgPgXAAQgaAAgVAVIAoBkIAvAAIAqBoIkEAAIgphoIAoAAIgxh7IgqAAIgqhoIDWAAIASAuQARgVAhgQQAigPAkAAQBUAAA2BBQAzhBBOAAQAsAAAjATQAlASAYAfQAZAhAXA6IAfBKIArAAIAqBog");
	this.shape_342.setTransform(627.6,195.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#0066CC").s().p("Ah8CIQgxggglhaIgghOIgnAAIgrhoIDVAAIA/CeQAQAnANAOQANAOAXAAQAdAAARgQIgqhpIgtAAIgphoIDYAAIBbDjIApAAIApBoIjTAAIgRgqQgxAwhGAAQgzAAgyghg");
	this.shape_343.setTransform(556.4,195.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#0066CC").s().p("AhICpIgqhoIAtAAIgxh7IgtAAIgqhoIDNAAIAhBTQgBgfAPgWQAPgXAVgGQAUgHAsAAIA7CSIgOAAQg1AAgVAKQgWALgDARQgCASALAfIAzAAIAqBog");
	this.shape_344.setTransform(506.6,195.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0066CC").s().p("AiJDuIguhyIAlAAIhkj3IglAAIguhyIDkAAQBOAAA0AKQA1AJA4AeQA4AeAtA0QAWAYASAcQASAcAMAeQAZA+gFAzQgGAygdAbQgcAbgsAJQgqAIhhAAgAAlB8IARAAQBBAAAGgjQAFgigVg0QgNgfgUgfQgVgegdgRQgagRg3AAIgHAAg");
	this.shape_345.setTransform(452.6,188.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#0066CC").s().p("AgWDuIgqhoIAjAAIhrkKIgkAAIgqhpIDQAAICUFzIAfAAIAqBog");
	this.shape_346.setTransform(392.6,188.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#0066CC").s().p("AieCPQgwgfgRgqQgTgvAggcQAggeBGAAQBBAAArARIgDgKQgMgfgJgMQgKgNgVgJQgUgJgXAAQgpAAgJAfIiNgNQADgxApgUQApgUBfAAQAkABAdACQAcACAXAEQAxAJAdARQAdATARAUQARAWATAuIAmBeIArAAIAqBoIjXAAIgJgWQggAdhKAAQhGAAgwgfgAhCAWQgJANAIATQAIAVATAMQATANATAAQAfAAAMgRIgYg9QgbgMgaAAQgWAAgIAMg");
	this.shape_347.setTransform(356.4,195.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#0066CC").s().p("Ah8CIQgxggglhaIgghOIgnAAIgrhoIDVAAIA/CeQAQAnANAOQANAOAXAAQAdAAARgQIgqhpIgtAAIgphoIDYAAIBbDjIApAAIApBoIjTAAIgRgqQgxAwhGAAQgzAAgyghg");
	this.shape_348.setTransform(299.4,195.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#0066CC").s().p("AAgDgQghgNgXgWQgNgMgIgLQgIgKgHgNQgLgXgahAIgWg4IgrAAIgqhnIArAAIgVgzICLhSIA0CFIBGAAIAqBnIhGAAIAaBAQANAgAKAKQAKALASAAQAQAAAUgLIApBmQgMALgdAJQgeAJgeAAQgnAAghgNg");
	this.shape_349.setTransform(254.2,189.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0066CC").s().p("AhICpIgqhoIAtAAIgxh7IgtAAIgqhoIDNAAIAhBTQgBgfAPgWQAPgXAVgGQAUgHAsAAIA7CSIgOAAQg1AAgVAKQgWALgDARQgCASALAfIAzAAIAqBog");
	this.shape_350.setTransform(216.9,195.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0066CC").s().p("AgnDyIgqhoIAiAAIgxh7IgjAAIgqhnIDNAAIBcDiIAdAAIAqBogAiSiKQghgPgLgcQgLgbAVgRQAVgRAoAAQApABAgAQQAgASAKAZQAKAbgSAPQgUARgoAAQgpAAghgPg");
	this.shape_351.setTransform(184.8,187.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0066CC").s().p("ABkDwIkpltIgkAAIgthyID/AAIAuByIgoAAICXDKIgHjKIgnAAIguhyIC/AAIAuByIgjAAIAFFtg");
	this.shape_352.setTransform(134.6,188.4);

	this.score_mc = new lib.score();
	this.score_mc.name = "score_mc";
	this.score_mc.parent = this;
	this.score_mc.setTransform(66.9,582.5);

	this.time_mc = new lib.Timer();
	this.time_mc.name = "time_mc";
	this.time_mc.parent = this;
	this.time_mc.setTransform(490.2,134.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.text_1,p:{x:32,y:260.7,text:"Directions: Hit the drum as much as you can!",font:"30px 'Tw Cen MT Condensed Extra Bold'",textAlign:"",lineHeight:34.5,lineWidth:219}},{t:this.text,p:{scaleX:1,scaleY:1,x:925.6,y:511.8,text:"K Harrison\nComp Art\nMay 2019",font:"30px 'Tw Cen MT Condensed Extra Bold'",color:"#FFFFFF",textAlign:"right",lineHeight:34.5,lineWidth:318}}]}).to({state:[{t:this.time_mc},{t:this.score_mc}]},10).to({state:[{t:this.text_1,p:{x:504.9,y:172.4,text:"0",font:"bold 60px 'Rockwell Extra Bold'",textAlign:"center",lineHeight:72.45,lineWidth:100}},{t:this.text,p:{scaleX:1.096,scaleY:1.096,x:492.5,y:278.8,text:"Game Over",font:"bold 60px 'Rockwell Extra Bold'",color:"#000000",textAlign:"center",lineHeight:72.45,lineWidth:455}}]},10).to({state:[]},10).wait(10));

	// Background
	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#894407").ss(1.5,1,1).p("EhLbgxpIAAhfMCW3AAAIAABfEhIsgr8MCRzAAAMAAABfFMiRzAAAg");
	this.shape_353.setTransform(480.2,301.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFF99").s().p("EhLbA0NMAAAhoZMCW3AAAMAAABoZgEhIrAwmMCRyAAAMAAAhfEMiRyAAAg");
	this.shape_354.setTransform(480.2,317.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,557.1).s().p("EhI5AvjMAAAhfFMCRzAAAMAAABfFg");
	this.shape_355.setTransform(481.5,324.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353}]}).to({state:[]},30).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.7,293.3,1366.3,745.5);
// library properties:
lib.properties = {
	id: 'F4E4B4EE79E64232B3FD75D33E0487F3',
	width: 960,
	height: 640,
	fps: 10,
	color: "#BBFFFF",
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
an.compositions['F4E4B4EE79E64232B3FD75D33E0487F3'] = {
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