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


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape.setTransform(-297.4538,-24.3031,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1.setTransform(-297.7638,-24.3536,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_2.setTransform(-305.7811,-24.2929,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_3.setTransform(-305.7811,-24.2929,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_4.setTransform(-313.0243,-25.0409,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_5.setTransform(-313.0243,-25.0409,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_6.setTransform(-314.3701,-104.4755,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_7.setTransform(-314.6325,-104.3029,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_8.setTransform(-321.9767,-101.0868,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_9.setTransform(-321.9767,-101.0868,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_10.setTransform(-328.2842,-97.4483,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_11.setTransform(-328.2842,-97.4483,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_12.setTransform(-313.0934,-62.7441,0.2732,0.2732,-102.0404);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_13.setTransform(-313.0934,-62.7441,0.2732,0.2732,-102.0404);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_14.setTransform(-227.1268,85.5682,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_15.setTransform(-227.4389,85.814,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_16.setTransform(-234.2355,93.3406,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_17.setTransform(-234.2355,93.3406,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_18.setTransform(-241.1244,99.454,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_19.setTransform(-241.1244,99.454,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_20.setTransform(-316.3467,32.8076,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_21.setTransform(-316.41,33.1997,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_22.setTransform(-319.6893,42.7961,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_23.setTransform(-319.6893,42.7961,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_24.setTransform(-321.6885,51.7869,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_25.setTransform(-321.6885,51.7869,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_26.setTransform(-276.4613,67.2226,0.3456,0.3456,-149.5296);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_27.setTransform(-276.4613,67.2226,0.3456,0.3456,-149.5296);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_28.setTransform(-244.8938,-23.8366,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_29.setTransform(-245.236,-24.083,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_30.setTransform(-254.9059,-28.8143,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_31.setTransform(-254.9059,-28.8143,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_32.setTransform(-263.1609,-34.0533,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_33.setTransform(-263.1609,-34.0533,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_34.setTransform(-217.2538,-130.3322,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_35.setTransform(-217.6725,-130.282,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_36.setTransform(-228.4248,-130.8185,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_37.setTransform(-228.4248,-130.8185,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_38.setTransform(-238.1843,-130.2262,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_39.setTransform(-238.1843,-130.2262,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_40.setTransform(-240.546,-79.5351,0.3669,0.3669,-75.536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_41.setTransform(-240.546,-79.5351,0.3669,0.3669,-75.536);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_42.setTransform(-314.9349,167.3433,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_43.setTransform(-315.3241,167.4239,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_44.setTransform(-324.7733,171.1246,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_45.setTransform(-324.7733,171.1246,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_46.setTransform(-333.6735,173.519,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_47.setTransform(-333.6735,173.519,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_48.setTransform(-371.294,80.1701,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_49.setTransform(-371.526,80.4929,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_50.setTransform(-378.7509,87.6188,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_51.setTransform(-378.7509,87.6188,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_52.setTransform(-384.5593,94.7747,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_53.setTransform(-384.5593,94.7747,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_54.setTransform(-350.8864,128.7779,0.3458,0.3458,-122.9959);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_55.setTransform(-350.8864,128.7779,0.3458,0.3458,-122.9959);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_56.setTransform(-105.9724,156.7524,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_57.setTransform(-106.4749,156.8939,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_58.setTransform(-118.5131,162.614,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_59.setTransform(-118.5131,162.614,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_60.setTransform(-129.9524,166.5721,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_61.setTransform(-129.9524,166.5721,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_62.setTransform(-187.8276,47.8399,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_63.setTransform(-188.1017,48.2842,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_64.setTransform(-196.91,58.2867,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_65.setTransform(-196.91,58.2867,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_66.setTransform(-203.8595,68.1976,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_67.setTransform(-203.8595,68.1976,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_68.setTransform(-156.6525,109.6641,0.4542,0.4542,-127.0224);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_69.setTransform(-156.6525,109.6641,0.4542,0.4542,-127.0224);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_70.setTransform(-395.9814,128.8138,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_71.setTransform(-396.3312,128.5782,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_72.setTransform(-406.1449,124.1529,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_73.setTransform(-406.1449,124.1529,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_74.setTransform(-414.5605,119.1755,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_75.setTransform(-414.5605,119.1755,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_76.setTransform(-371.6587,21.4787,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_77.setTransform(-372.0756,21.5421,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_78.setTransform(-382.8391,21.3435,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_79.setTransform(-382.8391,21.3435,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_80.setTransform(-392.5749,22.2421,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_81.setTransform(-392.5749,22.2421,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_82.setTransform(-393.4194,72.9442,0.3668,0.3668,-77.3396);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_83.setTransform(-393.4194,72.9442,0.3668,0.3668,-77.3396);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_84.setTransform(-8.1447,-238.8803,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_85.setTransform(-8.0705,-238.5751,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_86.setTransform(-4.8905,-231.2153,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_87.setTransform(-4.8905,-231.2153,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_88.setTransform(-2.7569,-224.2534,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_89.setTransform(-2.7569,-224.2534,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_90.setTransform(-75.3745,-191.9686,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_91.setTransform(-75.1133,-191.7943,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_92.setTransform(-69.2893,-186.284,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_93.setTransform(-69.2893,-186.284,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_94.setTransform(-63.4803,-181.893,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_95.setTransform(-63.4803,-181.893,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_96.setTransform(-37.5097,-209.4364,0.2732,0.2732,145.0229);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_97.setTransform(-37.5097,-209.4364,0.2732,0.2732,145.0229);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_98.setTransform(51.8016,-243.6454,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_99.setTransform(52.1874,-243.7399,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_100.setTransform(62.3031,-244.4594,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_101.setTransform(62.3031,-244.4594,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_102.setTransform(71.3623,-246.1218,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_103.setTransform(71.3623,-246.1218,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_104.setTransform(67.9001,-293.856,0.3456,0.3456,97.538);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_105.setTransform(67.9001,-293.856,0.3456,0.3456,97.538);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_106.setTransform(-28.1852,-287.3982,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_107.setTransform(-28.2789,-286.9871,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_108.setTransform(-28.8679,-276.238,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_109.setTransform(-28.8679,-276.238,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_110.setTransform(-30.4759,-266.5939,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_111.setTransform(-30.4759,-266.5939,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_112.setTransform(-137.0958,-271.3725,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_113.setTransform(-136.8863,-271.0065,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_114.setTransform(-133.1903,-260.8952,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_115.setTransform(-133.1903,-260.8952,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_116.setTransform(-128.8416,-252.1381,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_117.setTransform(-128.8416,-252.1381,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_118.setTransform(-81.2082,-269.7047,0.3669,0.3669,171.5282);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_119.setTransform(-81.2082,-269.7047,0.3669,0.3669,171.5282);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_120.setTransform(175.0969,-297.4281,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_121.setTransform(175.3228,-297.101,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_122.setTransform(182.4136,-289.8409,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_123.setTransform(182.4136,-289.8409,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_124.setTransform(188.0873,-282.5773,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_125.setTransform(188.0873,-282.5773,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_126.setTransform(116.8276,-211.5144,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_127.setTransform(117.2153,-211.4266,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_128.setTransform(126.5936,-207.5499,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_129.setTransform(126.5936,-207.5499,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_130.setTransform(135.4475,-204.9896,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_131.setTransform(135.4475,-204.9896,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_132.setTransform(153.6425,-249.312,0.3458,0.3458,124.0687);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_133.setTransform(153.6425,-249.312,0.3458,0.3458,124.0687);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_134.setTransform(171.2337,-207.7325,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_135.setTransform(171.1531,-207.3186,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_136.setTransform(170.9021,-196.5562,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_137.setTransform(170.9021,-196.5562,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_138.setTransform(169.5979,-186.8663,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_139.setTransform(169.5979,-186.8663,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_140.setTransform(62.8469,-188.2902,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_141.setTransform(63.0677,-187.9309,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_142.setTransform(67.0796,-177.9411,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_143.setTransform(67.0796,-177.9411,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_144.setTransform(71.7015,-169.3252,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_145.setTransform(71.7015,-169.3252,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_146.setTransform(118.8136,-188.3852,0.3668,0.3668,169.7258);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_147.setTransform(118.8136,-188.3852,0.3668,0.3668,169.7258);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_148.setTransform(140.7172,-219.2107,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_149.setTransform(140.5867,-219.5859,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_150.setTransform(135.6882,-228.4658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_151.setTransform(135.6882,-228.4658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_152.setTransform(132.1557,-236.9721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_153.setTransform(132.1557,-236.9721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_154.setTransform(219.7399,-286.3971,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_155.setTransform(219.3898,-286.5848,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_156.setTransform(211.3876,-292.8148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_157.setTransform(211.3876,-292.8148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_158.setTransform(203.5403,-297.6373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_159.setTransform(203.5403,-297.6373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_160.setTransform(174.1907,-259.8602,0.3456,0.3456,-40.491);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_161.setTransform(174.1907,-259.8602,0.3456,0.3456,-40.491);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_162.setTransform(249.9266,-200.3813,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_163.setTransform(250.2712,-200.6243,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_164.setTransform(33.9478,-127.9383,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_165.setTransform(33.9779,-128.4595,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_166.setTransform(32.4966,-141.7052,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_167.setTransform(32.4966,-141.7052,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_168.setTransform(32.4857,-153.81,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_169.setTransform(32.4857,-153.81,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_170.setTransform(163.6014,-169.8277,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_171.setTransform(163.2707,-170.2317,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_172.setTransform(156.6879,-181.8208,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_173.setTransform(156.6879,-181.8208,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_174.setTransform(149.5853,-191.6229,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_175.setTransform(149.5853,-191.6229,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_176.setTransform(94.973,-160.4726,0.4542,0.4542,-17.9875);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_177.setTransform(94.973,-160.4726,0.4542,0.4542,-17.9875);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_178.setTransform(-66.4668,109.11,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_179.setTransform(-66.5472,109.4136,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_180.setTransform(-67.2653,117.3988,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_181.setTransform(-67.2653,117.3988,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_182.setTransform(-68.7131,124.5351,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_183.setTransform(-68.7131,124.5351,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_184.setTransform(-147.9656,118.1961,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_185.setTransform(-147.8192,118.474,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_186.setTransform(-145.3315,126.0958,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_187.setTransform(-145.3315,126.0958,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_188.setTransform(-142.3228,132.7267,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_189.setTransform(-142.3228,132.7267,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_190.setTransform(-106.3212,120.9328,0.2732,0.2732,173.5319);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_191.setTransform(-106.3212,120.9328,0.2732,0.2732,173.5319);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_192.setTransform(49.6593,49.725,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_193.setTransform(49.8736,50.0595,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_194.setTransform(56.7048,57.5549,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_195.setTransform(56.7048,57.5549,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_196.setTransform(62.1207,65.0048,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_197.setTransform(62.1207,65.0048,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_198.setTransform(-11.5462,133.4807,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_199.setTransform(-11.162,133.5818,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_200.setTransform(-1.9292,137.7775,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_201.setTransform(-1.9292,137.7775,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_202.setTransform(6.8251,140.6404,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_203.setTransform(6.8251,140.6404,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_204.setTransform(26.5908,97.0699,0.3456,0.3456,126.0456);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_205.setTransform(26.5908,97.0699,0.3456,0.3456,126.0456);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_206.setTransform(-60.912,56.8794,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_207.setTransform(-61.1905,57.196,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_208.setTransform(-66.8385,66.3608,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_209.setTransform(-66.8385,66.3608,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_210.setTransform(-72.8546,74.0681,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_211.setTransform(-72.8546,74.0681,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_212.setTransform(-164.2891,18.9485,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_213.setTransform(-164.2798,19.3701,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_214.setTransform(-165.8577,30.0196,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_215.setTransform(-165.8577,30.0196,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_216.setTransform(-166.2157,39.7908,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_217.setTransform(-166.2157,39.7908,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_218.setTransform(-115.9481,47.1293,0.3669,0.3669,-159.9672);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_219.setTransform(-115.9481,47.1293,0.3669,0.3669,-159.9672);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_220.setTransform(122.5164,145.069,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_221.setTransform(122.5587,145.4642,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_222.setTransform(125.3246,155.2283,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_223.setTransform(125.3246,155.2283,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_224.setTransform(126.8436,164.319,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_225.setTransform(126.8436,164.319,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_226.setTransform(30.27,192.7776,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_227.setTransform(30.5687,193.0398,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_228.setTransform(36.9596,200.9227,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_229.setTransform(36.9596,200.9227,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_230.setTransform(43.5179,207.3985,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_231.setTransform(43.5179,207.3985,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_232.setTransform(80.6708,177.1084,0.3458,0.3458,152.5756);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_233.setTransform(80.6708,177.1084,0.3458,0.3458,152.5756);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_234.setTransform(132.2319,-63.8533,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_235.setTransform(132.3239,-63.3395,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_236.setTransform(136.8483,-50.8029,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_237.setTransform(136.8483,-50.8029,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_238.setTransform(139.6771,-39.0335,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_239.setTransform(139.6771,-39.0335,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_240.setTransform(15.9188,7.0755,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_241.setTransform(16.3343,7.3914,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_242.setTransform(25.4344,17.1292,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_243.setTransform(25.4344,17.1292,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_244.setTransform(34.6238,25.008,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_245.setTransform(34.6238,25.008,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_246.setTransform(80.4643,-18.0563,0.4542,0.4542,148.5496);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_247.setTransform(80.4643,-18.0563,0.4542,0.4542,148.5496);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_248.setTransform(-28.178,187.4283,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_249.setTransform(-28.1554,187.8494,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_250.setTransform(-29.3979,198.543,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_251.setTransform(-29.3979,198.543,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_252.setTransform(-29.4487,208.3202,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_253.setTransform(-29.4487,208.3202,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_254.setTransform(20.9848,214.0716,0.3668,0.3668,-161.767);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_255.setTransform(20.9848,214.0716,0.3668,0.3668,-161.767);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_256.setTransform(-251.9371,-164.2623,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_257.setTransform(-252.148,-164.495,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_258.setTransform(-258.4556,-169.4442,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_259.setTransform(-258.4556,-169.4442,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_260.setTransform(-263.6538,-174.5434,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_261.setTransform(-263.6538,-174.5434,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_262.setTransform(-215.2085,-237.4991,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_263.setTransform(-215.5212,-237.5276,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_264.setTransform(-223.2693,-239.5894,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_265.setTransform(-223.2693,-239.5894,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_266.setTransform(-230.4698,-240.6748,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_267.setTransform(-230.4698,-240.6748,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_268.setTransform(-240.2277,-204.1501,0.2732,0.2732,-63.4922);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_269.setTransform(-240.2277,-204.1501,0.2732,0.2732,-63.4922);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_270.setTransform(-265.3889,-34.5485,1.0251,0.8104,0,171.616,0.3292);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_271.setTransform(-265.7861,-34.5508,1.0251,0.8104,0,171.616,0.3292);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_272.setTransform(-275.7923,-32.9003,1.0251,0.8104,0,171.616,0.3292);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_273.setTransform(-275.7923,-32.9003,1.0251,0.8104,0,171.616,0.3292);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_274.setTransform(-284.9898,-32.4125,1.0251,0.8104,0,171.616,0.3292);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_275.setTransform(-284.9898,-32.4125,1.0251,0.8104,0,171.616,0.3292);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_276.setTransform(-302.2525,-131.4599,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_277.setTransform(-302.5464,-131.1927,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_278.setTransform(-311.0915,-125.7316,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_279.setTransform(-311.0915,-125.7316,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_280.setTransform(-318.2582,-119.9464,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_281.setTransform(-318.2582,-119.9464,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_282.setTransform(-292.4783,-79.6414,0.3456,0.3456,-110.9727);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_283.setTransform(-292.4783,-79.6414,0.3456,0.3456,-110.9727);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_284.setTransform(-211.1314,-131.1094,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_285.setTransform(-211.2454,-131.5154,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_286.setTransform(-215.8588,-141.2421,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_287.setTransform(-215.8588,-141.2421,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_288.setTransform(-219.0494,-150.4842,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_289.setTransform(-219.0494,-150.4842,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_290.setTransform(-123.0444,-197.2431,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_291.setTransform(-123.4032,-197.4648,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_292.setTransform(-131.4777,-204.5851,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_293.setTransform(-131.4777,-204.5851,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_294.setTransform(-139.4793,-210.2039,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_295.setTransform(-139.4793,-210.2039,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_296.setTransform(-173.0211,-172.0321,0.3668,0.3668,-36.9862);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_297.setTransform(-173.0211,-172.0321,0.3668,0.3668,-36.9862);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_298.setTransform(-384.9733,-25.3328,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_299.setTransform(-385.3279,-25.5124,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_300.setTransform(-395.0241,-28.5069,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_301.setTransform(-395.0241,-28.5069,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_302.setTransform(-403.4768,-32.1809,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_303.setTransform(-403.4768,-32.1809,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_304.setTransform(-374.7731,-128.6449,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_305.setTransform(-375.1556,-128.537,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_306.setTransform(-385.247,-127.467,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_307.setTransform(-385.247,-127.467,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_308.setTransform(-394.2491,-125.4906,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_309.setTransform(-394.2491,-125.4906,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_310.setTransform(-389.1332,-77.8559,0.3458,0.3458,-84.4444);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_311.setTransform(-389.1332,-77.8559,0.3458,0.3458,-84.4444);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_312.setTransform(-214.9725,96.6097,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_313.setTransform(-215.4537,96.4072,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_314.setTransform(-228.4329,93.3784,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_315.setTransform(-228.4329,93.3784,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_316.setTransform(-239.8456,89.3449,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_317.setTransform(-239.8456,89.3449,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_318.setTransform(-211.1667,-39.5952,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_319.setTransform(-211.658,-39.4185,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_320.setTransform(-224.7803,-37.0856,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_321.setTransform(-224.7803,-37.0856,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_322.setTransform(-236.3918,-33.6658,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_323.setTransform(-236.3918,-33.6658,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_324.setTransform(-225.311,28.2272,0.4542,0.4542,-88.4714);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_325.setTransform(-225.311,28.2272,0.4542,0.4542,-88.4714);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_326.setTransform(-424.3861,-105.9811,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_327.setTransform(-424.5128,-106.3834,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_328.setTransform(-429.4296,-115.9603,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_329.setTransform(-429.4296,-115.9603,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_330.setTransform(-432.909,-125.0976,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_331.setTransform(-432.909,-125.0976,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_332.setTransform(-338.4697,-174.7977,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_333.setTransform(-338.8352,-175.008,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_334.setTransform(-347.1292,-181.871,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_335.setTransform(-347.1292,-181.871,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_336.setTransform(-355.3033,-187.2356,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_337.setTransform(-355.3033,-187.2356,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_338.setTransform(-387.5815,-148.0622,0.3668,0.3668,-38.7878);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_339.setTransform(-387.5815,-148.0622,0.3668,0.3668,-38.7878);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_340.setTransform(-73.2538,-211.3616,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_341.setTransform(-73.5649,-211.404,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_342.setTransform(-81.578,-211.1339,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_343.setTransform(-81.578,-211.1339,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_344.setTransform(-88.8382,-211.6925,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_345.setTransform(-88.8382,-211.6925,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_346.setTransform(-92.2384,-291.0899,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_347.setTransform(-92.4962,-290.9105,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_348.setTransform(-99.7541,-287.5036,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_349.setTransform(-99.7541,-287.5036,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_350.setTransform(-105.9645,-283.7016,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_351.setTransform(-105.9645,-283.7016,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_352.setTransform(-89.9428,-249.4463,0.2732,0.2732,-103.5372);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_353.setTransform(-89.9428,-249.4463,0.2732,0.2732,-103.5372);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_354.setTransform(-0.0696,-103.4024,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_355.setTransform(-0.3752,-103.1485,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_356.setTransform(-6.9729,-95.4471,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_357.setTransform(-6.9729,-95.4471,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_358.setTransform(-13.6997,-89.1558,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_359.setTransform(-13.6997,-89.1558,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_360.setTransform(-90.6577,-153.8155,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_361.setTransform(-90.7107,-153.4218,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_362.setTransform(-93.7382,-143.7433,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_363.setTransform(-93.7382,-143.7433,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_364.setTransform(-95.502,-134.7035,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_365.setTransform(-95.502,-134.7035,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_366.setTransform(-49.8769,-120.4777,0.3456,0.3456,-151.0221);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_367.setTransform(-49.8769,-120.4777,0.3456,0.3456,-151.0221);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_368.setTransform(-20.6915,-212.28,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_369.setTransform(-21.0399,-212.5174,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_370.setTransform(-30.83,-216.9947,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_371.setTransform(-30.83,-216.9947,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_372.setTransform(-39.2189,-222.0166,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_373.setTransform(-39.2189,-222.0166,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_374.setTransform(4.2194,-319.4697,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_375.setTransform(3.8021,-319.4085,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_376.setTransform(-6.9605,-319.6642,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_377.setTransform(-6.9605,-319.6642,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_378.setTransform(-16.7013,-318.8173,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_379.setTransform(-16.7013,-318.8173,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_380.setTransform(-17.801,-268.08,0.3669,0.3669,-77.0331);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_381.setTransform(-17.801,-268.08,0.3669,0.3669,-77.0331);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_382.setTransform(-85.6993,-19.4057,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_383.setTransform(-86.0863,-19.315,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_384.setTransform(-95.4359,-15.3687,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_385.setTransform(-95.4359,-15.3687,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_386.setTransform(-104.2707,-12.7427,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_387.setTransform(-104.2707,-12.7427,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_388.setTransform(-144.3387,-105.0386,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_389.setTransform(-144.5621,-104.7098,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_390.setTransform(-151.5988,-97.3977,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_391.setTransform(-151.5988,-97.3977,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_392.setTransform(-157.2184,-90.0925,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_393.setTransform(-157.2184,-90.0925,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_394.setTransform(-122.6415,-56.9961,0.3458,0.3458,-124.4908);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_395.setTransform(-122.6415,-56.9961,0.3458,0.3458,-124.4908);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_396.setTransform(122.8437,-35.3939,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_397.setTransform(122.3451,-35.2393,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_398.setTransform(110.4605,-29.2068,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_399.setTransform(110.4605,-29.2068,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_400.setTransform(99.1286,-24.9514,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_401.setTransform(99.1286,-24.9514,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_402.setTransform(38.214,-142.1423,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_403.setTransform(37.9516,-141.691,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_404.setTransform(29.4073,-131.4621,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_405.setTransform(29.4073,-131.4621,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_406.setTransform(22.7188,-121.3732,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_407.setTransform(22.7188,-121.3732,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_408.setTransform(70.9977,-81.1279,0.4542,0.4542,-128.5179);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_409.setTransform(70.9977,-81.1279,0.4542,0.4542,-128.5179);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_410.setTransform(-167.7571,-55.7444,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_411.setTransform(-168.1128,-55.9708,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_412.setTransform(-178.0388,-60.1383,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_413.setTransform(-178.0388,-60.1383,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_414.setTransform(-186.5815,-64.894,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_415.setTransform(-186.5815,-64.894,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_416.setTransform(-146.2348,-163.7084,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_417.setTransform(-146.6499,-163.6342,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_418.setTransform(-157.4148,-163.5515,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_419.setTransform(-157.4148,-163.5515,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_420.setTransform(-167.1238,-162.399,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_421.setTransform(-167.1238,-162.399,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_422.setTransform(-166.6701,-111.6464,0.3668,0.3668,-78.8354);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_423.setTransform(-166.6701,-111.6464,0.3668,0.3668,-78.8354);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_424.setTransform(150.4991,25.4788,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_425.setTransform(150.648,25.2023,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_426.setTransform(153.2056,17.6035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_427.setTransform(153.2056,17.6035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_428.setTransform(156.2752,11.0002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_429.setTransform(156.2752,11.0002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_430.setTransform(231.8484,35.582,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_431.setTransform(231.7708,35.2777,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_432.setTransform(231.1258,27.2859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_433.setTransform(231.1258,27.2859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_434.setTransform(229.7433,20.1364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_435.setTransform(229.7433,20.1364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_436.setTransform(192.0094,23.2051,0.2732,0.2732,6.9932);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_437.setTransform(192.0094,23.2051,0.2732,0.2732,6.9932);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_438.setTransform(23.7172,56.1393,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_439.setTransform(23.5867,55.7641,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_440.setTransform(18.6882,46.8842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_441.setTransform(18.6882,46.8842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_442.setTransform(15.1557,38.3779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_443.setTransform(15.1557,38.3779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_444.setTransform(102.7399,-11.0471,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_445.setTransform(102.3898,-11.2348,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_446.setTransform(94.3876,-17.4648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_447.setTransform(94.3876,-17.4648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_448.setTransform(86.5403,-22.2873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_449.setTransform(86.5403,-22.2873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_450.setTransform(57.1907,15.4898,0.3456,0.3456,-40.491);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_451.setTransform(57.1907,15.4898,0.3456,0.3456,-40.491);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_452.setTransform(132.9266,74.9687,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_453.setTransform(133.2712,74.7257,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_454.setTransform(140.8979,67.1275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_455.setTransform(140.8979,67.1275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_456.setTransform(148.5431,61.0325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_457.setTransform(148.5431,61.0325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_458.setTransform(224.6336,135.8975,1.0883,0.8603,0,110.9105,102.196);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_459.setTransform(224.7226,135.4854,1.0883,0.8603,0,110.9105,102.196);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_460.setTransform(228.7366,125.4958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_461.setTransform(228.7366,125.4958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_462.setTransform(231.3597,116.0765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_463.setTransform(231.3597,116.0765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_464.setTransform(184.1779,97.2752,0.3669,0.3669,33.4984);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_465.setTransform(184.1779,97.2752,0.3669,0.3669,33.4984);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_466.setTransform(-24.9083,-53.5433,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_467.setTransform(-24.8575,-53.9375,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_468.setTransform(-25.2743,-64.0774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_469.setTransform(-25.2743,-64.0774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_470.setTransform(-24.6352,-73.2721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_471.setTransform(-24.6352,-73.2721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_472.setTransform(75.8682,-78.4338,1.0258,0.811,0,63.4513,54.7353);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_473.setTransform(75.6387,-78.7583,1.0258,0.811,0,63.4513,54.7353);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_474.setTransform(71.2587,-87.9126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_475.setTransform(71.2587,-87.9126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_476.setTransform(66.3883,-95.7375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_477.setTransform(66.3883,-95.7375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_478.setTransform(23.2474,-74.9588,0.3458,0.3458,-13.9608);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_479.setTransform(23.2474,-74.9588,0.3458,0.3458,-13.9608);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_480.setTransform(-83.0522,147.4117,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_481.setTransform(-83.0221,146.8905,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_482.setTransform(-84.5034,133.6448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_483.setTransform(-84.5034,133.6448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_484.setTransform(-84.5143,121.54,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_485.setTransform(-84.5143,121.54,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_486.setTransform(46.6014,105.5223,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_487.setTransform(46.2707,105.1183,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_488.setTransform(39.6879,93.5292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_489.setTransform(39.6879,93.5292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_490.setTransform(32.5853,83.7271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_491.setTransform(32.5853,83.7271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_492.setTransform(-22.027,114.8774,0.4542,0.4542,-17.9875);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_493.setTransform(-22.027,114.8774,0.4542,0.4542,-17.9875);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_494.setTransform(37.9247,-117.6468,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_495.setTransform(38.2615,-117.9005,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_496.setTransform(45.6458,-125.7346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_497.setTransform(45.6458,-125.7346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_498.setTransform(53.0958,-132.0668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_499.setTransform(53.0958,-132.0668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_500.setTransform(131.5205,-59.6157,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_501.setTransform(131.5965,-60.0305,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_502.setTransform(135.2945,-70.1409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_503.setTransform(135.2945,-70.1409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_504.setTransform(137.6202,-79.6377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_505.setTransform(137.6202,-79.6377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_506.setTransform(89.8871,-96.9621,0.3669,0.3669,31.6962);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_507.setTransform(89.8871,-96.9621,0.3669,0.3669,31.6962);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_508.setTransform(18.4991,-111.5712,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_509.setTransform(18.648,-111.8477,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_510.setTransform(21.2056,-119.4465,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_511.setTransform(21.2056,-119.4465,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_512.setTransform(24.2752,-126.0498,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_513.setTransform(24.2752,-126.0498,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_514.setTransform(99.8484,-101.468,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_515.setTransform(99.7708,-101.7723,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_516.setTransform(99.1258,-109.7641,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_517.setTransform(99.1258,-109.7641,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_518.setTransform(97.7433,-116.9136,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_519.setTransform(97.7433,-116.9136,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_520.setTransform(60.0094,-113.8449,0.2732,0.2732,6.9932);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_521.setTransform(60.0094,-113.8449,0.2732,0.2732,6.9932);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_522.setTransform(-108.2828,-80.9107,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_523.setTransform(-108.4133,-81.2859,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_524.setTransform(-113.3118,-90.1658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_525.setTransform(-113.3118,-90.1658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_526.setTransform(-116.8443,-98.6721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_527.setTransform(-116.8443,-98.6721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_528.setTransform(-29.2601,-148.0971,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_529.setTransform(-29.6102,-148.2848,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_530.setTransform(-37.6124,-154.5148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_531.setTransform(-37.6124,-154.5148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_532.setTransform(-45.4597,-159.3373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_533.setTransform(-45.4597,-159.3373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_534.setTransform(-74.8093,-121.5602,0.3456,0.3456,-40.491);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_535.setTransform(-74.8093,-121.5602,0.3456,0.3456,-40.491);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_536.setTransform(0.9266,-62.0813,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_537.setTransform(1.2712,-62.3243,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_538.setTransform(8.8979,-69.9225,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_539.setTransform(8.8979,-69.9225,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_540.setTransform(16.5431,-76.0175,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_541.setTransform(16.5431,-76.0175,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_542.setTransform(92.6336,-1.1525,1.0883,0.8603,0,110.9105,102.196);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_543.setTransform(92.7226,-1.5646,1.0883,0.8603,0,110.9105,102.196);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_544.setTransform(96.7366,-11.5542,1.0883,0.8603,0,110.9105,102.196);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_545.setTransform(96.7366,-11.5542,1.0883,0.8603,0,110.9105,102.196);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_546.setTransform(99.3597,-20.9735,1.0883,0.8603,0,110.9105,102.196);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_547.setTransform(99.3597,-20.9735,1.0883,0.8603,0,110.9105,102.196);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_548.setTransform(52.1779,-39.7748,0.3669,0.3669,33.4984);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_549.setTransform(52.1779,-39.7748,0.3669,0.3669,33.4984);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_550.setTransform(-156.9083,-190.5933,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_551.setTransform(-156.8575,-190.9875,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_552.setTransform(-157.2743,-201.1274,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_553.setTransform(-157.2743,-201.1274,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_554.setTransform(-156.6352,-210.3221,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_555.setTransform(-156.6352,-210.3221,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_556.setTransform(-56.1318,-215.4838,1.0258,0.811,0,63.4513,54.7353);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_557.setTransform(-56.3613,-215.8083,1.0258,0.811,0,63.4513,54.7353);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_558.setTransform(-60.7413,-224.9626,1.0258,0.811,0,63.4513,54.7353);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_559.setTransform(-60.7413,-224.9626,1.0258,0.811,0,63.4513,54.7353);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_560.setTransform(-65.6117,-232.7875,1.0258,0.811,0,63.4513,54.7353);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_561.setTransform(-65.6117,-232.7875,1.0258,0.811,0,63.4513,54.7353);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_562.setTransform(-108.7526,-212.0088,0.3458,0.3458,-13.9608);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_563.setTransform(-108.7526,-212.0088,0.3458,0.3458,-13.9608);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_564.setTransform(-215.0522,10.3617,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_565.setTransform(-215.0221,9.8405,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_566.setTransform(-216.5034,-3.4052,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_567.setTransform(-216.5034,-3.4052,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_568.setTransform(-216.5143,-15.51,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_569.setTransform(-216.5143,-15.51,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_570.setTransform(-85.3986,-31.5277,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_571.setTransform(-85.7293,-31.9317,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_572.setTransform(-92.3121,-43.5208,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_573.setTransform(-92.3121,-43.5208,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_574.setTransform(-99.4147,-53.3229,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_575.setTransform(-99.4147,-53.3229,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_576.setTransform(-154.027,-22.1726,0.4542,0.4542,-17.9875);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_577.setTransform(-154.027,-22.1726,0.4542,0.4542,-17.9875);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_578.setTransform(-94.0753,-254.6968,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_579.setTransform(-93.7385,-254.9505,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_580.setTransform(-86.3542,-262.7846,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_581.setTransform(-86.3542,-262.7846,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_582.setTransform(-78.9042,-269.1168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_583.setTransform(-78.9042,-269.1168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_584.setTransform(-0.4795,-196.6657,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_585.setTransform(-0.4035,-197.0805,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_586.setTransform(3.2945,-207.1909,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_587.setTransform(3.2945,-207.1909,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_588.setTransform(5.6202,-216.6877,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_589.setTransform(5.6202,-216.6877,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_590.setTransform(-42.1129,-234.0121,0.3669,0.3669,31.6962);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_591.setTransform(-42.1129,-234.0121,0.3669,0.3669,31.6962);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_592.setTransform(65.2991,-29.1712,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_593.setTransform(65.448,-29.4477,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_594.setTransform(68.0056,-37.0465,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_595.setTransform(68.0056,-37.0465,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_596.setTransform(71.0752,-43.6498,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_597.setTransform(71.0752,-43.6498,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_598.setTransform(146.6484,-19.068,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_599.setTransform(146.5708,-19.3723,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_600.setTransform(145.9258,-27.3641,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_601.setTransform(145.9258,-27.3641,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_602.setTransform(144.5433,-34.5136,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_603.setTransform(144.5433,-34.5136,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_604.setTransform(106.8094,-31.4449,0.2732,0.2732,6.9932);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_605.setTransform(106.8094,-31.4449,0.2732,0.2732,6.9932);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_606.setTransform(-61.4828,1.4893,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_607.setTransform(-61.6133,1.1141,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_608.setTransform(-66.5118,-7.7658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_609.setTransform(-66.5118,-7.7658,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_610.setTransform(-70.0443,-16.2721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_611.setTransform(-70.0443,-16.2721,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_612.setTransform(17.5399,-65.6971,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_613.setTransform(17.1898,-65.8848,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_614.setTransform(9.1876,-72.1148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_615.setTransform(9.1876,-72.1148,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_616.setTransform(1.3403,-76.9373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_617.setTransform(1.3403,-76.9373,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_618.setTransform(-28.0093,-39.1602,0.3456,0.3456,-40.491);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_619.setTransform(-28.0093,-39.1602,0.3456,0.3456,-40.491);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_620.setTransform(47.7266,20.3187,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_621.setTransform(48.0712,20.0757,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_622.setTransform(55.6979,12.4775,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_623.setTransform(55.6979,12.4775,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_624.setTransform(63.3431,6.3825,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_625.setTransform(63.3431,6.3825,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_626.setTransform(139.4336,81.2475,1.0883,0.8603,0,110.9105,102.196);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_627.setTransform(139.5226,80.8354,1.0883,0.8603,0,110.9105,102.196);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_628.setTransform(143.5366,70.8458,1.0883,0.8603,0,110.9105,102.196);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_629.setTransform(143.5366,70.8458,1.0883,0.8603,0,110.9105,102.196);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_630.setTransform(146.1597,61.4265,1.0883,0.8603,0,110.9105,102.196);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_631.setTransform(146.1597,61.4265,1.0883,0.8603,0,110.9105,102.196);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_632.setTransform(98.9779,42.6252,0.3669,0.3669,33.4984);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_633.setTransform(98.9779,42.6252,0.3669,0.3669,33.4984);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_634.setTransform(-110.1083,-108.1933,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_635.setTransform(-110.0575,-108.5875,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_636.setTransform(-110.4743,-118.7274,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_637.setTransform(-110.4743,-118.7274,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_638.setTransform(-109.8352,-127.9221,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_639.setTransform(-109.8352,-127.9221,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_640.setTransform(-9.3318,-133.0838,1.0258,0.811,0,63.4513,54.7353);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_641.setTransform(-9.5613,-133.4083,1.0258,0.811,0,63.4513,54.7353);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_642.setTransform(-13.9413,-142.5626,1.0258,0.811,0,63.4513,54.7353);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_643.setTransform(-13.9413,-142.5626,1.0258,0.811,0,63.4513,54.7353);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_644.setTransform(-18.8117,-150.3875,1.0258,0.811,0,63.4513,54.7353);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_645.setTransform(-18.8117,-150.3875,1.0258,0.811,0,63.4513,54.7353);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_646.setTransform(-61.9526,-129.6088,0.3458,0.3458,-13.9608);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_647.setTransform(-61.9526,-129.6088,0.3458,0.3458,-13.9608);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_648.setTransform(-168.2522,92.7617,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_649.setTransform(-168.2221,92.2405,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_650.setTransform(-169.7034,78.9948,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_651.setTransform(-169.7034,78.9948,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_652.setTransform(-169.7143,66.89,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_653.setTransform(-169.7143,66.89,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_654.setTransform(-38.5986,50.8723,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_655.setTransform(-38.9293,50.4683,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_656.setTransform(-45.5121,38.8792,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_657.setTransform(-45.5121,38.8792,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_658.setTransform(-52.6147,29.0771,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_659.setTransform(-52.6147,29.0771,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_660.setTransform(-107.227,60.2274,0.4542,0.4542,-17.9875);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_661.setTransform(-107.227,60.2274,0.4542,0.4542,-17.9875);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_662.setTransform(-47.2753,-172.2968,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_663.setTransform(-46.9385,-172.5505,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_664.setTransform(-39.5542,-180.3846,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_665.setTransform(-39.5542,-180.3846,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_666.setTransform(-32.1042,-186.7168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_667.setTransform(-32.1042,-186.7168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_668.setTransform(46.3205,-114.2657,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_669.setTransform(46.3965,-114.6805,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_670.setTransform(50.0945,-124.7909,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_671.setTransform(50.0945,-124.7909,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_672.setTransform(52.4202,-134.2877,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_673.setTransform(52.4202,-134.2877,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_674.setTransform(4.6871,-151.6121,0.3669,0.3669,31.6962);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_675.setTransform(4.6871,-151.6121,0.3669,0.3669,31.6962);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_676.setTransform(-213.5038,105.8469,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_677.setTransform(-213.8138,105.7964,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_678.setTransform(-221.8311,105.8571,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_679.setTransform(-221.8311,105.8571,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_680.setTransform(-229.0743,105.1091,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_681.setTransform(-229.0743,105.1091,0.8105,0.6407,0,-179.4542,9.2612);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_682.setTransform(-230.4201,25.6745,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_683.setTransform(-230.6825,25.8471,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_684.setTransform(-238.0267,29.0632,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_685.setTransform(-238.0267,29.0632,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_686.setTransform(-244.3342,32.7017,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_687.setTransform(-244.3342,32.7017,0.8105,0.6407,0,-24.627,-33.3439);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_688.setTransform(-229.1434,67.4059,0.2732,0.2732,-102.0404);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_689.setTransform(-229.1434,67.4059,0.2732,0.2732,-102.0404);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_690.setTransform(-143.1768,215.7182,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_691.setTransform(-143.4889,215.964,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_692.setTransform(-150.2855,223.4906,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_693.setTransform(-150.2855,223.4906,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_694.setTransform(-157.1744,229.604,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_695.setTransform(-157.1744,229.604,1.0251,0.8104,0,133.0644,-38.2216);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_696.setTransform(-232.3967,162.9576,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_697.setTransform(-232.46,163.3497,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_698.setTransform(-235.7393,172.9461,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_699.setTransform(-235.7393,172.9461,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_700.setTransform(-237.7385,181.9369,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_701.setTransform(-237.7385,181.9369,1.0251,0.8104,0,-72.1133,-80.8287);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_702.setTransform(-192.5113,197.3726,0.3456,0.3456,-149.5296);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_703.setTransform(-192.5113,197.3726,0.3456,0.3456,-149.5296);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_704.setTransform(-160.9438,106.3134,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_705.setTransform(-161.286,106.067,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_706.setTransform(-170.9559,101.3357,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_707.setTransform(-170.9559,101.3357,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_708.setTransform(-179.2109,96.0967,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_709.setTransform(-179.2109,96.0967,1.0882,0.8603,0,-152.9496,35.7668);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_710.setTransform(-133.3038,-0.1822,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_711.setTransform(-133.7225,-0.132,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_712.setTransform(-144.4748,-0.6685,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_713.setTransform(-144.4748,-0.6685,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_714.setTransform(-154.2343,-0.0762,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_715.setTransform(-154.2343,-0.0762,1.0883,0.8603,0,1.8753,-6.8384);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_716.setTransform(-156.596,50.6149,0.3669,0.3669,-75.536);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_717.setTransform(-156.596,50.6149,0.3669,0.3669,-75.536);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_718.setTransform(-230.9849,297.4933,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_719.setTransform(-231.3741,297.5739,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_720.setTransform(-240.8233,301.2746,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_721.setTransform(-240.8233,301.2746,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_722.setTransform(-249.7235,303.669,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_723.setTransform(-249.7235,303.669,1.0258,0.811,0,159.5935,-11.6922);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_724.setTransform(-287.344,210.3201,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_725.setTransform(-287.576,210.6429,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_726.setTransform(-294.8009,217.7688,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_727.setTransform(-294.8009,217.7688,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_728.setTransform(-300.6093,224.9247,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_729.setTransform(-300.6093,224.9247,1.0258,0.8109,0,-45.5824,-54.2998);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_730.setTransform(-266.9364,258.9279,0.3458,0.3458,-122.9959);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_731.setTransform(-266.9364,258.9279,0.3458,0.3458,-122.9959);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_732.setTransform(-22.0224,286.9024,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_733.setTransform(-22.5249,287.0439,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_734.setTransform(-34.5631,292.764,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_735.setTransform(-34.5631,292.764,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_736.setTransform(-46.0024,296.7221,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_737.setTransform(-46.0024,296.7221,1.3473,1.0651,0,155.5661,-15.7205);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_738.setTransform(-103.8776,177.9899,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_739.setTransform(-104.1517,178.4342,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_740.setTransform(-112.96,188.4367,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_741.setTransform(-112.96,188.4367,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_742.setTransform(-119.9095,198.3476,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_743.setTransform(-119.9095,198.3476,1.3473,1.065,0,-49.6126,-58.3275);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_744.setTransform(-72.7025,239.8141,0.4542,0.4542,-127.0224);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_745.setTransform(-72.7025,239.8141,0.4542,0.4542,-127.0224);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_746.setTransform(-312.0314,258.9638,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_747.setTransform(-312.3812,258.7282,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_748.setTransform(-322.1949,254.3029,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_749.setTransform(-322.1949,254.3029,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_750.setTransform(-330.6105,249.3255,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_751.setTransform(-330.6105,249.3255,1.0882,0.8603,0,-154.7485,33.9675);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_752.setTransform(-287.7087,151.6287,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_753.setTransform(-288.1256,151.6921,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_754.setTransform(-298.8891,151.4935,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_755.setTransform(-298.8891,151.4935,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_756.setTransform(-308.6249,152.3921,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_757.setTransform(-308.6249,152.3921,1.0882,0.8603,0,0.0752,-8.6387);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_758.setTransform(-309.4694,203.0942,0.3668,0.3668,-77.3396);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_759.setTransform(-309.4694,203.0942,0.3668,0.3668,-77.3396);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_760.setTransform(75.8053,-108.7303,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_761.setTransform(75.8795,-108.4251,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_762.setTransform(79.0595,-101.0653,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_763.setTransform(79.0595,-101.0653,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_764.setTransform(81.1931,-94.1034,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_765.setTransform(81.1931,-94.1034,0.8105,0.6407,0,67.6117,-103.6731);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_766.setTransform(8.5755,-61.8186,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_767.setTransform(8.8367,-61.6443,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_768.setTransform(14.6607,-56.134,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_769.setTransform(14.6607,-56.134,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_770.setTransform(20.4697,-51.743,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_771.setTransform(20.4697,-51.743,0.8105,0.6407,0,-137.5647,-146.28);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_772.setTransform(46.4403,-79.2864,0.2732,0.2732,145.0229);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_773.setTransform(46.4403,-79.2864,0.2732,0.2732,145.0229);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_774.setTransform(149.6,-216.2424,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_775.setTransform(149.9479,-216.0507,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_776.setTransform(159.528,-212.7247,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_777.setTransform(159.528,-212.7247,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_778.setTransform(167.8427,-208.763,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_779.setTransform(167.8427,-208.763,1.0251,0.8104,0,20.1273,-151.1581);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_780.setTransform(135.7516,-113.4954,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_781.setTransform(136.1374,-113.5899,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_782.setTransform(146.2531,-114.3094,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_783.setTransform(146.2531,-114.3094,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_784.setTransform(155.3123,-115.9718,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_785.setTransform(155.3123,-115.9718,1.0252,0.8104,0,174.9522,166.2364);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_786.setTransform(151.8501,-163.706,0.3456,0.3456,97.538);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_787.setTransform(151.8501,-163.706,0.3456,0.3456,97.538);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_788.setTransform(55.7648,-157.2482,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_789.setTransform(55.6711,-156.8371,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_790.setTransform(55.0821,-146.088,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_791.setTransform(55.0821,-146.088,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_792.setTransform(53.4741,-136.4439,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_793.setTransform(53.4741,-136.4439,1.0882,0.8603,0,94.1152,-77.168);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_794.setTransform(-53.1458,-141.2225,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_795.setTransform(-52.9363,-140.8565,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_796.setTransform(-49.2403,-130.7452,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_797.setTransform(-49.2403,-130.7452,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_798.setTransform(-44.8916,-121.9881,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_799.setTransform(-44.8916,-121.9881,1.0883,0.8603,0,-111.0598,-119.7744);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_800.setTransform(2.7418,-139.5547,0.3669,0.3669,171.5282);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_801.setTransform(2.7418,-139.5547,0.3669,0.3669,171.5282);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_802.setTransform(259.0469,-167.2781,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_803.setTransform(259.2728,-166.951,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_804.setTransform(266.3636,-159.6909,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_805.setTransform(266.3636,-159.6909,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_806.setTransform(272.0373,-152.4273,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_807.setTransform(272.0373,-152.4273,1.0258,0.8109,0,46.6567,-124.629);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_808.setTransform(200.7776,-81.3644,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_809.setTransform(201.1653,-81.2766,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_810.setTransform(210.5436,-77.3999,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_811.setTransform(210.5436,-77.3999,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_812.setTransform(219.3975,-74.8396,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_813.setTransform(219.3975,-74.8396,1.0258,0.811,0,-158.5193,-167.2369);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_814.setTransform(237.5925,-119.162,0.3458,0.3458,124.0687);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_815.setTransform(237.5925,-119.162,0.3458,0.3458,124.0687);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_816.setTransform(167.921,-355.5535,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_817.setTransform(168.2471,-355.1458,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_818.setTransform(178.2062,-346.2888,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_819.setTransform(178.2062,-346.2888,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_820.setTransform(186.3091,-337.2966,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_821.setTransform(186.3091,-337.2966,1.3472,1.065,0,42.6294,-128.6566);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_822.setTransform(99.4997,-237.7266,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_823.setTransform(100.0157,-237.6473,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_824.setTransform(112.66,-233.4333,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_825.setTransform(112.66,-233.4333,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_826.setTransform(124.4957,-230.8956,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_827.setTransform(124.4957,-230.8956,1.3473,1.0651,0,-162.5492,-171.2636);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_828.setTransform(144.2941,-290.5214,0.4542,0.4542,120.039);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_829.setTransform(144.2941,-290.5214,0.4542,0.4542,120.039);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_830.setTransform(255.1837,-77.5825,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_831.setTransform(255.1031,-77.1686,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_832.setTransform(254.8521,-66.4062,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_833.setTransform(254.8521,-66.4062,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_834.setTransform(253.5479,-56.7163,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_835.setTransform(253.5479,-56.7163,1.0882,0.8603,0,92.3156,-78.9689);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_836.setTransform(146.7969,-58.1402,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_837.setTransform(147.0177,-57.7809,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_838.setTransform(151.0296,-47.7911,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_839.setTransform(151.0296,-47.7911,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_840.setTransform(155.6515,-39.1752,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_841.setTransform(155.6515,-39.1752,1.0882,0.8603,0,-112.8594,-121.5759);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_842.setTransform(202.7636,-58.2352,0.3668,0.3668,169.7258);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_843.setTransform(202.7636,-58.2352,0.3668,0.3668,169.7258);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_844.setTransform(351.4491,-119.7212,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_845.setTransform(351.598,-119.9977,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_846.setTransform(354.1556,-127.5965,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_847.setTransform(354.1556,-127.5965,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_848.setTransform(357.2252,-134.1998,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_849.setTransform(357.2252,-134.1998,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_850.setTransform(432.7984,-109.618,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_851.setTransform(432.7208,-109.9223,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_852.setTransform(432.0758,-117.9141,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_853.setTransform(432.0758,-117.9141,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_854.setTransform(430.6933,-125.0636,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_855.setTransform(430.6933,-125.0636,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_856.setTransform(392.9594,-121.9949,0.2732,0.2732,6.9932);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_857.setTransform(392.9594,-121.9949,0.2732,0.2732,6.9932);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_858.setTransform(224.6672,-89.0607,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_859.setTransform(224.5367,-89.4359,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_860.setTransform(219.6382,-98.3158,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_861.setTransform(219.6382,-98.3158,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_862.setTransform(216.1057,-106.8221,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_863.setTransform(216.1057,-106.8221,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_864.setTransform(303.6899,-156.2471,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_865.setTransform(303.3398,-156.4348,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_866.setTransform(295.3376,-162.6648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_867.setTransform(295.3376,-162.6648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_868.setTransform(287.4903,-167.4873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_869.setTransform(287.4903,-167.4873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_870.setTransform(258.1407,-129.7102,0.3456,0.3456,-40.491);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_871.setTransform(258.1407,-129.7102,0.3456,0.3456,-40.491);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_872.setTransform(333.8766,-70.2313,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_873.setTransform(334.2212,-70.4743,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_874.setTransform(341.8479,-78.0725,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_875.setTransform(341.8479,-78.0725,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_876.setTransform(349.4931,-84.1675,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_877.setTransform(349.4931,-84.1675,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_878.setTransform(425.5836,-9.3025,1.0883,0.8603,0,110.9105,102.196);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_879.setTransform(425.6726,-9.7146,1.0883,0.8603,0,110.9105,102.196);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_880.setTransform(429.6866,-19.7042,1.0883,0.8603,0,110.9105,102.196);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_881.setTransform(429.6866,-19.7042,1.0883,0.8603,0,110.9105,102.196);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_882.setTransform(432.3097,-29.1235,1.0883,0.8603,0,110.9105,102.196);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_883.setTransform(432.3097,-29.1235,1.0883,0.8603,0,110.9105,102.196);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_884.setTransform(385.1279,-47.9248,0.3669,0.3669,33.4984);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_885.setTransform(385.1279,-47.9248,0.3669,0.3669,33.4984);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_886.setTransform(176.0417,-198.7433,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_887.setTransform(176.0925,-199.1375,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_888.setTransform(175.6757,-209.2774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_889.setTransform(175.6757,-209.2774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_890.setTransform(176.3148,-218.4721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_891.setTransform(176.3148,-218.4721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_892.setTransform(276.8182,-223.6338,1.0258,0.811,0,63.4513,54.7353);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_893.setTransform(276.5887,-223.9583,1.0258,0.811,0,63.4513,54.7353);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_894.setTransform(272.2087,-233.1126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_895.setTransform(272.2087,-233.1126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_896.setTransform(267.3383,-240.9375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_897.setTransform(267.3383,-240.9375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_898.setTransform(224.1974,-220.1588,0.3458,0.3458,-13.9608);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_899.setTransform(224.1974,-220.1588,0.3458,0.3458,-13.9608);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_900.setTransform(117.8978,2.2117,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_901.setTransform(117.9279,1.6905,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_902.setTransform(116.4466,-11.5552,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_903.setTransform(116.4466,-11.5552,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_904.setTransform(116.4357,-23.66,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_905.setTransform(116.4357,-23.66,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_906.setTransform(247.5514,-39.6777,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_907.setTransform(247.2207,-40.0817,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_908.setTransform(240.6379,-51.6708,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_909.setTransform(240.6379,-51.6708,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_910.setTransform(233.5353,-61.4729,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_911.setTransform(233.5353,-61.4729,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_912.setTransform(178.923,-30.3226,0.4542,0.4542,-17.9875);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_913.setTransform(178.923,-30.3226,0.4542,0.4542,-17.9875);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_914.setTransform(238.8747,-262.8468,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_915.setTransform(239.2115,-263.1005,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_916.setTransform(246.5958,-270.9346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_917.setTransform(246.5958,-270.9346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_918.setTransform(254.0458,-277.2668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_919.setTransform(254.0458,-277.2668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_920.setTransform(332.4705,-204.8157,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_921.setTransform(332.5465,-205.2305,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_922.setTransform(336.2445,-215.3409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_923.setTransform(336.2445,-215.3409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_924.setTransform(338.5702,-224.8377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_925.setTransform(338.5702,-224.8377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_926.setTransform(290.8371,-242.1621,0.3669,0.3669,31.6962);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_927.setTransform(290.8371,-242.1621,0.3669,0.3669,31.6962);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_928.setTransform(17.4832,239.26,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_929.setTransform(17.4028,239.5636,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_930.setTransform(16.6847,247.5488,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_931.setTransform(16.6847,247.5488,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_932.setTransform(15.2369,254.6851,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_933.setTransform(15.2369,254.6851,0.8105,0.6407,0,96.1169,-75.1663);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_934.setTransform(-64.0156,248.3461,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_935.setTransform(-63.8692,248.624,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_936.setTransform(-61.3815,256.2458,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_937.setTransform(-61.3815,256.2458,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_938.setTransform(-58.3728,262.8767,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_939.setTransform(-58.3728,262.8767,0.8105,0.6407,0,-109.0555,-117.7712);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_940.setTransform(-22.3712,251.0828,0.2732,0.2732,173.5319);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_941.setTransform(-22.3712,251.0828,0.2732,0.2732,173.5319);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_942.setTransform(133.6093,179.875,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_943.setTransform(133.8236,180.2095,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_944.setTransform(140.6548,187.7049,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_945.setTransform(140.6548,187.7049,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_946.setTransform(146.0707,195.1548,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_947.setTransform(146.0707,195.1548,1.0251,0.8104,0,48.6357,-122.6502);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_948.setTransform(72.4038,263.6307,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_949.setTransform(72.788,263.7318,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_950.setTransform(82.0208,267.9275,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_951.setTransform(82.0208,267.9275,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_952.setTransform(90.7751,270.7904,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_953.setTransform(90.7751,270.7904,1.0252,0.8104,0,-156.5406,-165.2564);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_954.setTransform(110.5408,227.2199,0.3456,0.3456,126.0456);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_955.setTransform(110.5408,227.2199,0.3456,0.3456,126.0456);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_956.setTransform(23.038,187.0294,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_957.setTransform(22.7595,187.346,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_958.setTransform(17.1115,196.5108,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_959.setTransform(17.1115,196.5108,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_960.setTransform(11.0954,204.2181,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_961.setTransform(11.0954,204.2181,1.0882,0.8603,0,122.6237,-48.6604);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_962.setTransform(-80.3391,149.0985,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_963.setTransform(-80.3298,149.5201,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_964.setTransform(-81.9077,160.1696,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_965.setTransform(-81.9077,160.1696,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_966.setTransform(-82.2657,169.9408,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_967.setTransform(-82.2657,169.9408,1.0883,0.8603,0,-82.5533,-91.267);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_968.setTransform(-31.9981,177.2793,0.3669,0.3669,-159.9672);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_969.setTransform(-31.9981,177.2793,0.3669,0.3669,-159.9672);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_970.setTransform(206.4664,275.219,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_971.setTransform(206.5087,275.6142,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_972.setTransform(209.2746,285.3783,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_973.setTransform(209.2746,285.3783,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_974.setTransform(210.7936,294.469,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_975.setTransform(210.7936,294.469,1.0258,0.811,0,75.1644,-96.1205);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_976.setTransform(114.22,322.9276,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_977.setTransform(114.5187,323.1898,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_978.setTransform(120.9096,331.0727,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_979.setTransform(120.9096,331.0727,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_980.setTransform(127.4679,337.5485,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_981.setTransform(127.4679,337.5485,1.0258,0.811,0,-130.0121,-138.7281);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_982.setTransform(164.6208,307.2584,0.3458,0.3458,152.5756);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_983.setTransform(164.6208,307.2584,0.3458,0.3458,152.5756);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_984.setTransform(216.1819,66.2967,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_985.setTransform(216.2739,66.8105,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_986.setTransform(220.7983,79.3471,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_987.setTransform(220.7983,79.3471,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_988.setTransform(223.6271,91.1165,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_989.setTransform(223.6271,91.1165,1.3473,1.0651,0,71.1378,-100.1489);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_990.setTransform(99.8688,137.2255,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_991.setTransform(100.2843,137.5414,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_992.setTransform(109.3844,147.2792,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_993.setTransform(109.3844,147.2792,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_994.setTransform(118.5738,155.158,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_995.setTransform(118.5738,155.158,1.3473,1.0651,0,-134.0411,-142.7563);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_996.setTransform(164.4143,112.0937,0.4542,0.4542,148.5496);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_997.setTransform(164.4143,112.0937,0.4542,0.4542,148.5496);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_998.setTransform(160.2752,352.2112,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_999.setTransform(160.0068,352.5364,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1000.setTransform(154.6494,361.8742,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1001.setTransform(154.6494,361.8742,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1002.setTransform(148.8784,369.7668,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1003.setTransform(148.8784,369.7668,1.0882,0.8603,0,120.8229,-50.4606);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1004.setTransform(55.772,317.5783,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1005.setTransform(55.7946,317.9994,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1006.setTransform(54.5521,328.693,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1007.setTransform(54.5521,328.693,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1008.setTransform(54.5013,338.4702,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1009.setTransform(54.5013,338.4702,1.0882,0.8603,0,-84.3528,-93.068);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1010.setTransform(104.9348,344.2216,0.3668,0.3668,-161.767);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1011.setTransform(104.9348,344.2216,0.3668,0.3668,-161.767);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1012.setTransform(-167.9871,-34.1123,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1013.setTransform(-168.198,-34.345,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1014.setTransform(-174.5056,-39.2942,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1015.setTransform(-174.5056,-39.2942,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1016.setTransform(-179.7038,-44.3934,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1017.setTransform(-179.7038,-44.3934,0.8104,0.6407,0,-140.9014,47.8143);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1018.setTransform(-131.2585,-107.3491,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1019.setTransform(-131.5712,-107.3776,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1020.setTransform(-139.3193,-109.4394,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1021.setTransform(-139.3193,-109.4394,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1022.setTransform(-146.5198,-110.5248,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1023.setTransform(-146.5198,-110.5248,0.8105,0.6407,0,13.9217,5.2065);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1024.setTransform(-156.2777,-74.0001,0.2732,0.2732,-63.4922);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1025.setTransform(-156.2777,-74.0001,0.2732,0.2732,-63.4922);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1026.setTransform(-181.4389,95.6015,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1027.setTransform(-181.8361,95.5992,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1028.setTransform(-191.8423,97.2497,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1029.setTransform(-191.8423,97.2497,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1030.setTransform(-201.0398,97.7375,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1031.setTransform(-201.0398,97.7375,1.0251,0.8104,0,171.616,0.3292);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1032.setTransform(-218.3025,-1.3099,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1033.setTransform(-218.5964,-1.0427,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1034.setTransform(-227.1415,4.4184,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1035.setTransform(-227.1415,4.4184,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1036.setTransform(-234.3082,10.2036,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1037.setTransform(-234.3082,10.2036,1.0251,0.8104,0,-33.5608,-42.2774);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1038.setTransform(-208.5283,50.5086,0.3456,0.3456,-110.9727);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1039.setTransform(-208.5283,50.5086,0.3456,0.3456,-110.9727);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1040.setTransform(-127.1814,-0.9594,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1041.setTransform(-127.2954,-1.3654,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1042.setTransform(-131.9088,-11.0921,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1043.setTransform(-131.9088,-11.0921,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1044.setTransform(-135.0994,-20.3342,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1045.setTransform(-135.0994,-20.3342,1.0882,0.8603,0,-114.3975,74.3198);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1046.setTransform(-39.0944,-67.0931,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1047.setTransform(-39.4532,-67.3148,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1048.setTransform(-47.5277,-74.4351,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1049.setTransform(-47.5277,-74.4351,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1050.setTransform(-55.5293,-80.0539,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1051.setTransform(-55.5293,-80.0539,1.0882,0.8603,0,40.4263,31.7115);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1052.setTransform(-89.0711,-41.8821,0.3668,0.3668,-36.9862);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1053.setTransform(-89.0711,-41.8821,0.3668,0.3668,-36.9862);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1054.setTransform(-301.0233,104.8172,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1055.setTransform(-301.3779,104.6376,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1056.setTransform(-311.0741,101.6431,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1057.setTransform(-311.0741,101.6431,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1058.setTransform(-319.5268,97.9691,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1059.setTransform(-319.5268,97.9691,1.0258,0.8109,0,-161.8562,26.8578);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1060.setTransform(-290.8231,1.5051,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1061.setTransform(-291.2056,1.613,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1062.setTransform(-301.297,2.683,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1063.setTransform(-301.297,2.683,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1064.setTransform(-310.2991,4.6594,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1065.setTransform(-310.2991,4.6594,1.0258,0.811,0,-7.0315,-15.748);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1066.setTransform(-305.1832,52.2941,0.3458,0.3458,-84.4444);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1067.setTransform(-305.1832,52.2941,0.3458,0.3458,-84.4444);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1068.setTransform(-131.0225,226.7597,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1069.setTransform(-131.5037,226.5572,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1070.setTransform(-144.4829,223.5284,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1071.setTransform(-144.4829,223.5284,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1072.setTransform(-155.8956,219.4949,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1073.setTransform(-155.8956,219.4949,1.3472,1.065,0,-165.8831,22.8303);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1074.setTransform(-127.2167,90.5548,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1075.setTransform(-127.708,90.7315,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1076.setTransform(-140.8303,93.0644,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1077.setTransform(-140.8303,93.0644,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1078.setTransform(-152.4418,96.4842,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1079.setTransform(-152.4418,96.4842,1.3473,1.0651,0,-11.0607,-19.7761);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1080.setTransform(-141.361,158.3772,0.4542,0.4542,-88.4714);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1081.setTransform(-141.361,158.3772,0.4542,0.4542,-88.4714);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1082.setTransform(-340.4361,24.1689,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1083.setTransform(-340.5628,23.7666,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1084.setTransform(-345.4796,14.1897,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1085.setTransform(-345.4796,14.1897,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1086.setTransform(-348.959,5.0524,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1087.setTransform(-348.959,5.0524,1.0882,0.8603,0,-116.196,72.5191);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1088.setTransform(-254.5197,-44.6477,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1089.setTransform(-254.8852,-44.858,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1090.setTransform(-263.1792,-51.721,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1091.setTransform(-263.1792,-51.721,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1092.setTransform(-271.3533,-57.0856,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1093.setTransform(-271.3533,-57.0856,1.0882,0.8603,0,38.6279,29.9112);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1094.setTransform(-303.6315,-17.9122,0.3668,0.3668,-38.7878);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1095.setTransform(-303.6315,-17.9122,0.3668,0.3668,-38.7878);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1096.setTransform(10.6962,-81.2116,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1097.setTransform(10.3851,-81.254,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1098.setTransform(2.372,-80.9839,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1099.setTransform(2.372,-80.9839,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1100.setTransform(-4.8882,-81.5425,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1101.setTransform(-4.8882,-81.5425,0.8105,0.6407,0,179.0516,7.7647);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1102.setTransform(-8.2884,-160.9399,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1103.setTransform(-8.5462,-160.7605,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1104.setTransform(-15.8041,-157.3536,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1105.setTransform(-15.8041,-157.3536,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1106.setTransform(-22.0145,-153.5516,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1107.setTransform(-22.0145,-153.5516,0.8105,0.6407,0,-26.1244,-34.8402);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1108.setTransform(-5.9928,-119.2963,0.2732,0.2732,-103.5372);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1109.setTransform(-5.9928,-119.2963,0.2732,0.2732,-103.5372);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1110.setTransform(83.8804,26.7476,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1111.setTransform(83.5748,27.0015,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1112.setTransform(76.9771,34.7029,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1113.setTransform(76.9771,34.7029,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1114.setTransform(70.2503,40.9942,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1115.setTransform(70.2503,40.9942,1.0251,0.8104,0,131.5683,-39.7182);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1116.setTransform(-6.7077,-23.6655,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1117.setTransform(-6.7607,-23.2718,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1118.setTransform(-9.7882,-13.5933,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1119.setTransform(-9.7882,-13.5933,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1120.setTransform(-11.552,-4.5535,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1121.setTransform(-11.552,-4.5535,1.0251,0.8104,0,-73.6083,-82.3253);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1122.setTransform(34.0731,9.6723,0.3456,0.3456,-151.0221);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1123.setTransform(34.0731,9.6723,0.3456,0.3456,-151.0221);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1124.setTransform(63.2585,-82.13,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1125.setTransform(62.9101,-82.3674,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1126.setTransform(53.12,-86.8447,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1127.setTransform(53.12,-86.8447,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1128.setTransform(44.7311,-91.8666,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1129.setTransform(44.7311,-91.8666,1.0882,0.8603,0,-154.4458,34.2716);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1130.setTransform(88.1694,-189.3197,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1131.setTransform(87.7521,-189.2585,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1132.setTransform(76.9895,-189.5142,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1133.setTransform(76.9895,-189.5142,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1134.setTransform(67.2487,-188.6673,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1135.setTransform(67.2487,-188.6673,1.0883,0.8603,0,0.3791,-8.3346);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1136.setTransform(66.149,-137.93,0.3669,0.3669,-77.0331);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1137.setTransform(66.149,-137.93,0.3669,0.3669,-77.0331);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1138.setTransform(-1.7493,110.7443,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1139.setTransform(-2.1363,110.835,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1140.setTransform(-11.4859,114.7813,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1141.setTransform(-11.4859,114.7813,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1142.setTransform(-20.3207,117.4073,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1143.setTransform(-20.3207,117.4073,1.0258,0.811,0,158.0985,-13.1887);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1144.setTransform(-60.3887,25.1114,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1145.setTransform(-60.6121,25.4402,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1146.setTransform(-67.6488,32.7523,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1147.setTransform(-67.6488,32.7523,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1148.setTransform(-73.2684,40.0575,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1149.setTransform(-73.2684,40.0575,1.0258,0.811,0,-47.08,-55.7956);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1150.setTransform(-38.6915,73.1539,0.3458,0.3458,-124.4908);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1151.setTransform(-38.6915,73.1539,0.3458,0.3458,-124.4908);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1152.setTransform(206.7937,94.7561,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1153.setTransform(206.2951,94.9107,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1154.setTransform(194.4105,100.9432,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1155.setTransform(194.4105,100.9432,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1156.setTransform(183.0786,105.1986,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1157.setTransform(183.0786,105.1986,1.3473,1.065,0,154.0708,-17.2169);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1158.setTransform(122.164,-11.9923,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1159.setTransform(121.9016,-11.541,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1160.setTransform(113.3573,-1.3121,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1161.setTransform(113.3573,-1.3121,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1162.setTransform(106.6688,8.7768,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1163.setTransform(106.6688,8.7768,1.3473,1.065,0,-51.1085,-59.823);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1164.setTransform(154.9477,49.0221,0.4542,0.4542,-128.5179);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1165.setTransform(154.9477,49.0221,0.4542,0.4542,-128.5179);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1166.setTransform(-83.8071,74.4056,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1167.setTransform(-84.1628,74.1792,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1168.setTransform(-94.0888,70.0117,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1169.setTransform(-94.0888,70.0117,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1170.setTransform(-102.6315,65.256,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1171.setTransform(-102.6315,65.256,1.0882,0.8603,0,-156.2439,32.4707);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1172.setTransform(-62.2848,-33.5584,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1173.setTransform(-62.6999,-33.4842,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1174.setTransform(-73.4648,-33.4015,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1175.setTransform(-73.4648,-33.4015,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1176.setTransform(-83.1738,-32.249,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1177.setTransform(-83.1738,-32.249,1.0882,0.8603,0,-1.4198,-10.1354);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1178.setTransform(-82.7201,18.5036,0.3668,0.3668,-78.8354);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1179.setTransform(-82.7201,18.5036,0.3668,0.3668,-78.8354);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1180.setTransform(234.4491,155.6288,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1181.setTransform(234.598,155.3523,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1182.setTransform(237.1556,147.7535,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1183.setTransform(237.1556,147.7535,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1184.setTransform(240.2252,141.1502,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1185.setTransform(240.2252,141.1502,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1186.setTransform(315.7984,165.732,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1187.setTransform(315.7208,165.4277,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1188.setTransform(315.0758,157.4359,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1189.setTransform(315.0758,157.4359,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1190.setTransform(313.6933,150.2864,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1191.setTransform(313.6933,150.2864,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1192.setTransform(275.9594,153.3551,0.2732,0.2732,6.9932);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1193.setTransform(275.9594,153.3551,0.2732,0.2732,6.9932);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1194.setTransform(107.6672,186.2893,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1195.setTransform(107.5367,185.9141,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1196.setTransform(102.6382,177.0342,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1197.setTransform(102.6382,177.0342,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1198.setTransform(99.1057,168.5279,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1199.setTransform(99.1057,168.5279,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1200.setTransform(186.6899,119.1029,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1201.setTransform(186.3398,118.9152,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1202.setTransform(178.3376,112.6852,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1203.setTransform(178.3376,112.6852,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1204.setTransform(170.4903,107.8627,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1205.setTransform(170.4903,107.8627,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1206.setTransform(141.1407,145.6398,0.3456,0.3456,-40.491);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1207.setTransform(141.1407,145.6398,0.3456,0.3456,-40.491);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1208.setTransform(216.8766,205.1187,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1209.setTransform(217.2212,204.8757,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1210.setTransform(224.8479,197.2775,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1211.setTransform(224.8479,197.2775,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1212.setTransform(232.4931,191.1825,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1213.setTransform(232.4931,191.1825,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1214.setTransform(308.5836,266.0475,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1215.setTransform(308.6726,265.6354,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1216.setTransform(312.6866,255.6458,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1217.setTransform(312.6866,255.6458,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1218.setTransform(315.3097,246.2265,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1219.setTransform(315.3097,246.2265,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1220.setTransform(268.1279,227.4252,0.3669,0.3669,33.4984);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1221.setTransform(268.1279,227.4252,0.3669,0.3669,33.4984);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1222.setTransform(59.0417,76.6067,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1223.setTransform(59.0925,76.2125,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1224.setTransform(58.6757,66.0726,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1225.setTransform(58.6757,66.0726,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1226.setTransform(59.3148,56.8779,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1227.setTransform(59.3148,56.8779,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1228.setTransform(159.8182,51.7162,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1229.setTransform(159.5887,51.3917,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1230.setTransform(155.2087,42.2374,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1231.setTransform(155.2087,42.2374,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1232.setTransform(150.3383,34.4125,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1233.setTransform(150.3383,34.4125,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1234.setTransform(107.1974,55.1912,0.3458,0.3458,-13.9608);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1235.setTransform(107.1974,55.1912,0.3458,0.3458,-13.9608);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1236.setTransform(0.8978,277.5617,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1237.setTransform(0.9279,277.0405,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1238.setTransform(-0.5534,263.7948,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1239.setTransform(-0.5534,263.7948,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1240.setTransform(-0.5643,251.69,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1241.setTransform(-0.5643,251.69,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1242.setTransform(130.5514,235.6723,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1243.setTransform(130.2207,235.2683,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1244.setTransform(123.6379,223.6792,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1245.setTransform(123.6379,223.6792,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1246.setTransform(116.5353,213.8771,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1247.setTransform(116.5353,213.8771,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1248.setTransform(61.923,245.0274,0.4542,0.4542,-17.9875);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1249.setTransform(61.923,245.0274,0.4542,0.4542,-17.9875);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1250.setTransform(121.8747,12.5032,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1251.setTransform(122.2115,12.2495,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1252.setTransform(129.5958,4.4154,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1253.setTransform(129.5958,4.4154,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1254.setTransform(137.0458,-1.9168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1255.setTransform(137.0458,-1.9168,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1256.setTransform(215.4705,70.5343,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1257.setTransform(215.5465,70.1195,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1258.setTransform(219.2445,60.0091,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1259.setTransform(219.2445,60.0091,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1260.setTransform(221.5702,50.5123,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1261.setTransform(221.5702,50.5123,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1262.setTransform(173.8371,33.1879,0.3669,0.3669,31.6962);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1263.setTransform(173.8371,33.1879,0.3669,0.3669,31.6962);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1264.setTransform(102.4491,18.5788,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1265.setTransform(102.598,18.3023,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1266.setTransform(105.1556,10.7035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1267.setTransform(105.1556,10.7035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1268.setTransform(108.2252,4.1002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1269.setTransform(108.2252,4.1002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1270.setTransform(183.7984,28.682,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1271.setTransform(183.7208,28.3777,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1272.setTransform(183.0758,20.3859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1273.setTransform(183.0758,20.3859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1274.setTransform(181.6933,13.2364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1275.setTransform(181.6933,13.2364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1276.setTransform(143.9594,16.3051,0.2732,0.2732,6.9932);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1277.setTransform(143.9594,16.3051,0.2732,0.2732,6.9932);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1278.setTransform(-24.3328,49.2393,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1279.setTransform(-24.4633,48.8641,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1280.setTransform(-29.3618,39.9842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1281.setTransform(-29.3618,39.9842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1282.setTransform(-32.8943,31.4779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1283.setTransform(-32.8943,31.4779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1284.setTransform(54.6899,-17.9471,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1285.setTransform(54.3398,-18.1348,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1286.setTransform(46.3376,-24.3648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1287.setTransform(46.3376,-24.3648,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1288.setTransform(38.4903,-29.1873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1289.setTransform(38.4903,-29.1873,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1290.setTransform(9.1407,8.5898,0.3456,0.3456,-40.491);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1291.setTransform(9.1407,8.5898,0.3456,0.3456,-40.491);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1292.setTransform(84.8766,68.0687,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1293.setTransform(85.2212,67.8257,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1294.setTransform(92.8479,60.2275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1295.setTransform(92.8479,60.2275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1296.setTransform(100.4931,54.1325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1297.setTransform(100.4931,54.1325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1298.setTransform(176.5836,128.9975,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1299.setTransform(176.6726,128.5854,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1300.setTransform(180.6866,118.5958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1301.setTransform(180.6866,118.5958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1302.setTransform(183.3097,109.1765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1303.setTransform(183.3097,109.1765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1304.setTransform(136.1279,90.3752,0.3669,0.3669,33.4984);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1305.setTransform(136.1279,90.3752,0.3669,0.3669,33.4984);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1306.setTransform(-72.9583,-60.4433,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1307.setTransform(-72.9075,-60.8375,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1308.setTransform(-73.3243,-70.9774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1309.setTransform(-73.3243,-70.9774,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1310.setTransform(-72.6852,-80.1721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1311.setTransform(-72.6852,-80.1721,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1312.setTransform(27.8182,-85.3338,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1313.setTransform(27.5887,-85.6583,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1314.setTransform(23.2087,-94.8126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1315.setTransform(23.2087,-94.8126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1316.setTransform(18.3383,-102.6375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1317.setTransform(18.3383,-102.6375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1318.setTransform(-24.8026,-81.8588,0.3458,0.3458,-13.9608);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1319.setTransform(-24.8026,-81.8588,0.3458,0.3458,-13.9608);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1320.setTransform(-131.1022,140.5117,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1321.setTransform(-131.0721,139.9905,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1322.setTransform(-132.5534,126.7448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1323.setTransform(-132.5534,126.7448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1324.setTransform(-132.5643,114.64,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1325.setTransform(-132.5643,114.64,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1326.setTransform(-1.4486,98.6223,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1327.setTransform(-1.7793,98.2183,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1328.setTransform(-8.3621,86.6292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1329.setTransform(-8.3621,86.6292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1330.setTransform(-15.4647,76.8271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1331.setTransform(-15.4647,76.8271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1332.setTransform(-70.077,107.9774,0.4542,0.4542,-17.9875);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1333.setTransform(-70.077,107.9774,0.4542,0.4542,-17.9875);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1334.setTransform(-10.1253,-124.5468,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1335.setTransform(-9.7885,-124.8005,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1336.setTransform(-2.4042,-132.6346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1337.setTransform(-2.4042,-132.6346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1338.setTransform(5.0458,-138.9668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1339.setTransform(5.0458,-138.9668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1340.setTransform(83.4705,-66.5157,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1341.setTransform(83.5465,-66.9305,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1342.setTransform(87.2445,-77.0409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1343.setTransform(87.2445,-77.0409,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1344.setTransform(89.5702,-86.5377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1345.setTransform(89.5702,-86.5377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1346.setTransform(41.8371,-103.8621,0.3669,0.3669,31.6962);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1347.setTransform(41.8371,-103.8621,0.3669,0.3669,31.6962);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1348.setTransform(149.2491,100.9788,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1349.setTransform(149.398,100.7023,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1350.setTransform(151.9556,93.1035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1351.setTransform(151.9556,93.1035,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1352.setTransform(155.0252,86.5002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1353.setTransform(155.0252,86.5002,0.8105,0.6407,0,-70.4189,118.2972);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1354.setTransform(230.5984,111.082,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1355.setTransform(230.5208,110.7777,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1356.setTransform(229.8758,102.7859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1357.setTransform(229.8758,102.7859,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1358.setTransform(228.4933,95.6364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1359.setTransform(228.4933,95.6364,0.8105,0.6407,0,84.4059,75.6906);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1360.setTransform(190.7594,98.7051,0.2732,0.2732,6.9932);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1361.setTransform(190.7594,98.7051,0.2732,0.2732,6.9932);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1362.setTransform(22.4672,131.6393,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1363.setTransform(22.3367,131.2641,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1364.setTransform(17.4382,122.3842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1365.setTransform(17.4382,122.3842,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1366.setTransform(13.9057,113.8779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1367.setTransform(13.9057,113.8779,1.0252,0.8104,0,-117.901,70.8131);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1368.setTransform(101.4899,64.4529,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1369.setTransform(101.1398,64.2652,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1370.setTransform(93.1376,58.0352,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1371.setTransform(93.1376,58.0352,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1372.setTransform(85.2903,53.2127,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1373.setTransform(85.2903,53.2127,1.0252,0.8104,0,36.9225,28.2068);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1374.setTransform(55.9407,90.9898,0.3456,0.3456,-40.491);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1375.setTransform(55.9407,90.9898,0.3456,0.3456,-40.491);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1376.setTransform(131.6766,150.4687,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1377.setTransform(132.0212,150.2257,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1378.setTransform(139.6479,142.6275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1379.setTransform(139.6479,142.6275,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1380.setTransform(147.2931,136.5325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1381.setTransform(147.2931,136.5325,1.0882,0.8603,0,-43.9134,144.8026);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1382.setTransform(223.3836,211.3975,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1383.setTransform(223.4726,210.9854,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1384.setTransform(227.4866,200.9958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1385.setTransform(227.4866,200.9958,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1386.setTransform(230.1097,191.5765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1387.setTransform(230.1097,191.5765,1.0883,0.8603,0,110.9105,102.196);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1388.setTransform(182.9279,172.7752,0.3669,0.3669,33.4984);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1389.setTransform(182.9279,172.7752,0.3669,0.3669,33.4984);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1390.setTransform(-26.1583,21.9567,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1391.setTransform(-26.1075,21.5625,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1392.setTransform(-26.5243,11.4226,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1393.setTransform(-26.5243,11.4226,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1394.setTransform(-25.8852,2.2279,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1395.setTransform(-25.8852,2.2279,1.0259,0.811,0,-91.3725,97.3416);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1396.setTransform(74.6182,-2.9338,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1397.setTransform(74.3887,-3.2583,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1398.setTransform(70.0087,-12.4126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1399.setTransform(70.0087,-12.4126,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1400.setTransform(65.1383,-20.2375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1401.setTransform(65.1383,-20.2375,1.0258,0.811,0,63.4513,54.7353);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1402.setTransform(21.9974,0.5412,0.3458,0.3458,-13.9608);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1403.setTransform(21.9974,0.5412,0.3458,0.3458,-13.9608);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1404.setTransform(-84.3022,222.9117,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1405.setTransform(-84.2721,222.3905,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1406.setTransform(-85.7534,209.1448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1407.setTransform(-85.7534,209.1448,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1408.setTransform(-85.7643,197.04,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1409.setTransform(-85.7643,197.04,1.3473,1.0651,0,-95.3993,93.3139);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1410.setTransform(45.3514,181.0223,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1411.setTransform(45.0207,180.6183,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1412.setTransform(38.4379,169.0292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1413.setTransform(38.4379,169.0292,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1414.setTransform(31.3353,159.2271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1415.setTransform(31.3353,159.2271,1.3473,1.0651,0,59.4223,50.7074);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1416.setTransform(-23.277,190.3774,0.4542,0.4542,-17.9875);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1417.setTransform(-23.277,190.3774,0.4542,0.4542,-17.9875);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1418.setTransform(36.6747,-42.1468,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1419.setTransform(37.0115,-42.4005,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1420.setTransform(44.3958,-50.2346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1421.setTransform(44.3958,-50.2346,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1422.setTransform(51.8458,-56.5668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1423.setTransform(51.8458,-56.5668,1.0882,0.8603,0,-45.7129,143.0022);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1424.setTransform(130.2705,15.8843,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1425.setTransform(130.3465,15.4695,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1426.setTransform(134.0445,5.3591,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1427.setTransform(134.0445,5.3591,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1428.setTransform(136.3702,-4.1377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1429.setTransform(136.3702,-4.1377,1.0882,0.8603,0,109.1108,100.3948);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1430.setTransform(88.6371,-21.4621,0.3669,0.3669,31.6962);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1431.setTransform(88.6371,-21.4621,0.3669,0.3669,31.6962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.7,-386.4,911.5,772.8);


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
	this.shape.graphics.f().s("#8D3030").ss(1,1,1).p("AehlNQAABlhIBHQhIBHhlAAQhmAAhIhHQgngngRgvQgQgoAAguQAAguAQgoQARgwAngmQBIhIBmAAQBlAABIBIQBIBHAABlgAcOlIQAAAlgaAaQgaAagkAAQgUAAgRgIQgOgGgMgMQgagaAAglQAAglAagaQAagaAlAAQAMAAALADQAWAGARARQAaAaAAAlgATvnkQCqAQiOBKQi1AGhnBiQiZCBBhAzQBMApBug5ICDhLQB4gSgZBDQg4A5htA0Qi9BRihhcQhhhLArhpQA0hiCAhJQBRguBogVgADslHQAagvAeAFQAGABAGADQAMAGAMAPIAIA0QAdhnB/gcQCygqAVCGQAbDGgaCeQgsBshAhFIgjjtQhOhphLCAQgpCbgCB6QhEAkgpg0QgIgdgHgoQgDgUgCgYQgGg3gDhKQgEijAZghgAnZeCQBJBaBugqIDrsZID8EuQBlA2A3g9IDQlCICKLzQCHBIBFh+IjWuDQhyhah2BXIjMEfIkDkwQhDg9hgBcQkwO7AAAEgAVeXWQAWAJADAiQAEAigQAmQgRAmgcAUQgBABAAAAQgaATgWgJQgVgJgFghQAAgBAAgBQgDgaAJgdQACgGADgGQAXguAXgRQAcgUAWAKgAWiTyQhgAKhbA3Qi0BtAdDfIAbBBQAjBJAsAlQCLB4ClkWICzDGQCwAzgWjRIkDk3QAOg5gMgvQgXhdh9A2gEAgFAWBQhQhIg1BgIANAxQARA8AYA1QBNCpB2AcIAZAFQAeAEAggGQBmgSBNhsIAAAqQgCA0gHAyQgTCNgzBMQgHAKgHAIIgRAbQgVAhgXAZQhKBQg7gWIh1gQQhqAMA5BkIAaAUQAhAVAmALQB7AiB+hYQAtgjAyg/QAqg0Adg2QAqhLAQhOQARg8AKhRQATihgmhkQgDgbgGgTQgbhPhbAkQgJADgJAFIgYATQgRAggSAcQg8BZg1AVQgSATghgTQhCglhJi8gEAxjAY9QAABlhIBHQhIBHhlAAQhlAAhIhHQgngngSgvQgPgoAAguQAAguAPgoQASgwAngmQBIhIBlAAQBlAABIBIQBIBHAABlgEAvRAZCQAAAlgaAaQgaAaglAAQgUAAgRgIQgOgGgMgMQgagaAAglQAAglAagaQAagaAlAAQAMAAAMADQAVAGASARQAaAaAAAlgAwL56IHxigQCAAbgaByIihEwIFEgkQBpBmhPBbQkWBqlHAWQing/BpiTICTjyIjOBCQijg0BliEgAzV8SQAAAwgiAiQgiAigxAAQgwAAgigiQgNgMgIgPQgNgZAAgeQAAgfANgYQAIgPANgNQAigiAwAAQAxAAAiAiQAiAiAAAxgA2O5DIBEIhQBsBfBfhfIhBohQgSgphOAAQhPgBgfAqgAnerZQEOApjhCvQkfAPikDqQjyE1CZB6QB6BhCtiJIDRiyQC9gqgnCeQhZCJisB9QktDEj/jeQiai1BFj6QBSjrDKiuQCChvClgxgAAtotQAAAwgiAiQghAigxAAQgwAAgigiQgNgMgIgPQgNgZAAgeQAAgfANgYQAIgPANgNQAigiAwAAQAxAAAhAiQAiAiAAAxgEgdggjUIBESNQBsDMBfjMIhByNQgShWhOgBQhPgCgfBZgEgm2gURQAPgtASgoQArhjA8hDQAFgGAGgGQALgMAMgLQBrhjCdBdQBMByhGA1QgGAFgHAEIgBAAQhZA0hkAbQhHByFNiTQArACAQAPQAVATgVAnQgKATgTAYQhrBhjJAeQiDAFg5gmQhCgrAhhjgEgjsgWlQADgLADgKQABgBAAgBQASgtAlgHQAtgLAyAkQgPAEgxAXQgDABgDACQgSAIgPAFQggAKgWgDgEgn8gkCIAgADQAkAGAYAOQBMAthJBwInoDyIAkEGIC0iTIAlgNQArgMAhABQBpAGgpCRIlBEAIgnG8IgPAeQgVAggXAQQhLA0hOiFIAdmcIgumpIgTiKQgMgbALgkQAXhIBzgpQBvgoDBhbQBfgsBIgjgEgsbALNQBTgsBhArQA9F8AXFKQgRBrhUALIlBAxQiSAXgRidQgJhdCFhKIDigQQgWiPgRjRQgRjSAbADgEgsfAVXIAHBZQhFAfhFgfQgugVArggQBOguA4AKgEgmeAUvQAPgtASgoQArhjA8hDQAFgGAGgGQALgMAMgLQBrhjCdBdQBMByhGA1QgGAFgHAEIgBAAQhZA0hkAbQhHByFNiTQArACAQAPQAVATgVAnQgKATgTAYQhrBhjJAeQiDAFg5gmQhCgrAhhjgEgjUASbQADgLADgKQABgBAAgBQASgtAlgHQAtgLAyAkQgPAEgxAXQgDABgDACQgSAIgPAFQggAKgWgDgAiLleIBEIgQBrBfBfhfIhBogQgSgphNAAQhPgBgfAqg");
	this.shape.setTransform(317.1311,234.8356);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D34A4A").s().p("EAgfAkjQgmgLghgVIgagUQg5hkBqgMIB1AQQA7AWBKhQQAXgZAVghIARgbIAOgSQAzhMATiNQAHgyACg0IAAgqQhNBshmASQggAGgegEIgZgFQh2gchNipQgYg1gRg8IgNgxQA1hgBQBIQBJC8BCAlQAhATASgTQA1gVA8hZQASgcARggIAYgTIASgIQBbgkAbBPQAGATADAbQAmBkgTChQgKBRgRA8QgQBOgqBLQgdA2gqA0QgyA/gtAjQhcA/hZAAQgiAAgigJgAnZeCQAAgEEwu7QBghcBDA9IEDEwIDMkfQB2hXByBaIDWODQhFB+iHhIIiKrzIjQFCQg3A9hlg2Ij8kuIjrMZQgjANgfAAQhDAAgyg9gAaddWIizjGQilEWiLh4QgsglgjhJIgbhBQgdjfC0htQBbg3BggKQB9g2AXBdQAMAvgOA5IEDE3QARCohtAAQgcAAgigKgAUsXgQgXARgXAuIgFAMQgJAdADAaIAAACQAFAhAVAJQAWAJAagTIABgBQAcgUARgmQAQgmgEgiQgDgigWgJQgHgDgIAAQgQAAgTANgEArBAbpQgngngSgvQgPgoAAguQAAguAPgoQASgwAngmQBIhIBlAAQBlAABIBIQBIBHAABlQAABlhIBHQhIBHhlAAQhlAAhIhHgEAt4AabQAlAAAagaQAagaAAglQAAglgagaQgSgRgVgGQAVAGASARQAaAaAAAlQAAAlgaAaQgaAaglAAQgUAAgRgIQAKAEAKABQAZAEAWgLQAWgKAOgWQANgXAAgZQABgZgNgXQgOgWgVgLIgIgEQgRgGgSACQgXABgSAMQgSANgLAVQgKAWABAXQAAASAIARQAIASAOALQAKAKANAFQARAIAUAAgEAtTAaTIAAAAgEgxcAWzQgJhdCFhKIDigQQgWiPgRjRQgRjSAbADQBTgsBhArQA9F8AXFKQgRBrhUALIlBAxQgSADgRAAQhxAAgPiJgEgulAV7QgrAgAuAVQBFAfBFgfIgHhZQgKgCgLAAQgxAAhAAmgEgl9AW9QhCgrAhhjQAPgtASgoQArhjA8hDIALgMIAXgXQBrhjCdBdQBMByhGA1QgGAFgHAEIgBAAQhZA0hkAbQhHByFNiTQArACAQAPQAVATgVAnQgKATgTAYQhrBhjJAeIgbABQhuAAgzgigEgiWARQQglAHgSAtIgBACIgGAVQAWADAggKQAPgFASgIIAGgDQAxgXAPgEQgmgcgkAAQgLAAgKADgAxwEtQiai1BFj6QBSjrDKiuQCChvClgxICkgeQEOApjhCvQkfAPikDqQjyE1CZB6QB6BhCtiJIDRiyQC9gqgnCeQhZCJisB9QiNBciDAAQiVAAiHh2gAhHDCIhEogQAfgqBPABQBNAAASApIBBIgQgvAvgzAAQgyAAg2gvgAD0BvQgIgdgHgoQgDgUgCgYQgGg3gDhKQgEijAZghQAagvAeAFQAGABAGADQAMAGAMAPIAIA0QAdhnB/gcQCygqAVCGQAbDGgaCeQgsBshAhFIgjjtQhOhphLCAQgpCbgCB6QgcAPgXAAQgiAAgYgfgANQg2QhhhLArhpQA0hiCAhJQBRguBogVIBogMQCqAQiOBKQi1AGhnBiQiZCBBhAzQBMApBug5ICDhLQB4gSgZBDQg4A5htA0QhZAnhSAAQheAAhVgygAX+ihQgngngRgvQgQgoAAguQAAguAQgoQARgwAngmQBIhIBmAAQBlAABIBIQBIBHAABlQAABlhIBHQhIBHhlAAQhmAAhIhHgAa2jvQAkAAAagaQAagaAAglQAAglgagaQgRgRgWgGQAWAGARARQAaAaAAAlQAAAlgaAaQgaAagkAAQgUAAgRgIQAJAEALABQAZAEAWgLQAVgKAOgWQAOgXAAgZQAAgZgNgXQgNgWgWgLIgIgEQgQgGgSACQgXABgSAMQgTANgKAVQgKAWAAAXQABASAIARQAIASANALQALAKANAFQARAIAUAAgAaRj3IAAAAgAiZnbQgNgMgIgPQgNgZAAgeQAAgfANgYQAIgPANgNQAigiAwAAQAxAAAhAiQAiAiAAAxQAAAwgiAiQghAigxAAQgwAAgigigEgw4gOxIAdmcIgumpIgTiKQgMgbALgkQAXhIBzgpQBvgoDBhbICnhPIAgADQAkAGAYAOQBMAthJBwInoDyIAkEGIC0iTIAlgNQArgMAhABQBpAGgpCRIlBEAIgnG8IgPAeQgVAggXAQQgVAPgWAAQg2AAg4hggA8cxHIhEyNQAfhZBPACQBOABASBWIBBSNQgvBmgzAAQgzAAg2hmgA1KwiIhEohQAfgqBPABQBOAAASApIBBIhQgvAvgzAAQgzAAg2gvgAuS0SICTjyIjOBCQijg0BliEIHxigQCAAbgaByIihEwIFEgkQBpBmhPBbQkWBqlHAWQing/BpiTgEgmVgSDQhCgrAhhjQAPgtASgoQArhjA8hDIALgMIAXgXQBrhjCdBdQBMByhGA1QgGAFgHAEIgBAAQhZA0hkAbQhHByFNiTQArACAQAPQAVATgVAnQgKATgTAYQhrBhjJAeIgbABQhuAAgzgigEgiugXwQglAHgSAtIgBACIgGAVQAWADAggKQAPgFASgIIAGgDQAxgXAPgEQgmgcgkAAQgLAAgKADgA2c7AQgNgMgIgPQgNgZAAgeQAAgfANgYQAIgPANgNQAigiAwAAQAxAAAiAiQAiAiAAAxQAAAwgiAiQgiAigxAAQgwAAgigig");
	this.shape_1.setTransform(317.1311,234.8356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,636.3,471.7), null);


(lib.Sombrero = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#E9A247").ss(3,1,1).p("AvZEpQPJmoPqip");
	this.shape.setTransform(261.35,120.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9A247").ss(1,1,1).p("AAGAFIgLgJ");
	this.shape_1.setTransform(163.375,151.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9A247").s().p("Egi1AKaIgGgMILDmEIgBAFIOAmuIAhgLIAAABIO3kOIgBAEIO1jSIAAABIOphPQADA8hkBtQiaB+jMCHQrpHts6CVQq5B+sCB1QnxBNmZA3QgsgTgWgngA46CsIBSggIgOBtg");
	this.shape_2.setTransform(303.9559,274.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A843B").s().p("EgjOATtQgagsgggqQgNgUgOgFIgDgBICgyIIKcLsIBEBNIAOhuICiz5ILyOwIDDzXILyPNIC80SILwQoIAAgCIDGx2IMDRFIABANIgEACIgXACIupBQIAAgCIu1DSIABgEIu3EOIAAgBIACgHIgjARIuAGwIABgFIrDGEIhVAuIgJAFIgFgJg");
	this.shape_3.setTransform(295.975,218.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9B169").s().p("A/vaoIBUguIAGAMQAWAnAsATIh0AQgEghkAYzIpbpaQCIioEPjsQIenYKnlSIAAgHIAMAJIgMgJQPJmpPqipQvqCpvJGpQgBjdAdkcQA5pADMilQDMikFuhZQFthaLxPLIABAOQOTiCPVByIhnRPQheBih/BoQBlhtgEg8IAYgCIADgDIgBgNIsDxEIjGR1IAAADIrwwoIi8USIryvNIjDTXIrxuwIijT6IhSAgIqcrtIigSJQgHgCgHABgAk2M6IgCAHIghALgAxjjsg");
	this.shape_4.setTransform(275.15,174.3933);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E99222").ss(3,1,1).p("AvZEpQPJmoPqip");
	this.shape_5.setTransform(261.35,120.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#438414").s().p("EgjOATtQgagsgggqQgNgUgOgFIgDgBICgyIIKcLsIBEBNIAOhuICiz5ILyOwIDDzXILyPNIC80SILwQoIAAgCIDGx2IMDRFIABANIgEACIgXACIupBQIAAgCIu1DSIABgEIu3EOIAAgBIACgHIgjARIuAGwIABgFIrDGEIhVAuIgJAFIgFgJg");
	this.shape_6.setTransform(295.975,218.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E99D3B").s().p("EghkAaBIpbpaQCIioEPjsQIenYKnlSIAAgHIAMAJIgMgJQPJmpPqipQvqCpvJGpQgBjdAdkcQA5pADMilQDMikFuhZQFthaLxPLIABAOQOTiCPVByIhnRPQheBih/BoQBlhtgEg8IAYgCIADgDIgBgNIsDxEIjGR1IAAADIrwwoIi8USIryvNIjDTXIrxuwIijT6IhSAgIqcrtIigSJQgHgCgHABgAxjieg");
	this.shape_7.setTransform(275.15,166.5683);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9901D").s().p("Egi1AKaIgGgMILDmEIgBAFIOAmuIAhgLIAAABIO3kOIgBAEIO1jSIAAABIOphPQADA8hkBtQiaB+jMCHQrpHts6CVQq5B+sCB1QnxBNmZA3QgsgTgWgng");
	this.shape_8.setTransform(303.9559,274.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9A247").s().p("AgogVIBRghIgOBtg");
	this.shape_9.setTransform(148.55,294.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9B169").s().p("AtcGjIBVguIAFAMQAXAnAsATIh0AQgANdnKIgCAHIghALg");
	this.shape_10.setTransform(158,302.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550.3,348.8);


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
	this.shape.graphics.f("#E07EC3").s().p("AhIAZQg6goAvgdQATgNAtgDQA4gDAsAWIAKAFQAKAGADAIQALAYg/AiIgVAMQgXAMgNABg");
	this.shape.setTransform(10.5481,6.1264);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,12.3);


(lib.candy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape.setTransform(155.8387,358.3392,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1.setTransform(155.5306,358.289,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_2.setTransform(147.5626,358.3494,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_3.setTransform(147.5626,358.3494,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_4.setTransform(140.3639,357.6061,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_5.setTransform(140.3639,357.6061,0.8055,0.6368,0,-179.4563,9.2607);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_6.setTransform(139.0425,278.664,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_7.setTransform(138.7817,278.8356,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_8.setTransform(131.4826,282.0319,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_9.setTransform(131.4826,282.0319,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_10.setTransform(125.2138,285.648,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_11.setTransform(125.2138,285.648,0.8055,0.6367,0,-24.6254,-33.343);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_12.setTransform(140.216,320.1505,0.2715,0.2715,-102.0381);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_13.setTransform(140.216,320.1505,0.2715,0.2715,-102.0381);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_14.setTransform(225.653,467.5545,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_15.setTransform(225.3428,467.7987,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_16.setTransform(218.5879,475.2789,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_17.setTransform(218.5879,475.2789,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_18.setTransform(211.7413,481.3547,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_19.setTransform(211.7413,481.3547,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_20.setTransform(137.0577,415.0894,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_21.setTransform(136.9948,415.4792,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_22.setTransform(133.736,425.0165,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_23.setTransform(133.736,425.0165,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_24.setTransform(131.7493,433.952,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_25.setTransform(131.7493,433.952,1.0188,0.8054,0,-72.1139,-80.8305);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_26.setTransform(176.6499,449.3212,0.3434,0.3434,-149.5326);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_27.setTransform(176.6499,449.3212,0.3434,0.3434,-149.5326);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_28.setTransform(208.1229,358.7938,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_29.setTransform(207.7829,358.5488,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_30.setTransform(198.1723,353.8466,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_31.setTransform(198.1723,353.8466,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_32.setTransform(189.9679,348.6398,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_33.setTransform(189.9679,348.6398,1.0815,0.855,0,-152.9502,35.7666);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_34.setTransform(235.5295,253.0773,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_35.setTransform(235.1134,253.1271,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_36.setTransform(224.4272,252.5938,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_37.setTransform(224.4272,252.5938,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_38.setTransform(214.7278,253.1823,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_39.setTransform(214.7278,253.1823,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_40.setTransform(212.3228,303.4259,0.3646,0.3646,-75.538);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_41.setTransform(212.3228,303.4259,0.3646,0.3646,-75.538);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_42.setTransform(138.4856,548.8464,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_43.setTransform(138.0988,548.9264,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_44.setTransform(128.7076,552.6042,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_45.setTransform(128.7076,552.6042,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_46.setTransform(119.8622,554.9837,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_47.setTransform(119.8622,554.9837,1.0195,0.8059,0,159.5943,-11.6912);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_48.setTransform(82.4383,462.174,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_49.setTransform(82.2078,462.4948,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_50.setTransform(75.0274,469.577,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_51.setTransform(75.0274,469.577,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_52.setTransform(69.2549,476.689,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_53.setTransform(69.2549,476.689,1.0195,0.8059,0,-45.5822,-54.3007);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_54.setTransform(102.6823,510.4894,0.3437,0.3437,-122.9972);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_55.setTransform(102.6823,510.4894,0.3437,0.3437,-122.9972);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_56.setTransform(346.1308,538.2823,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_57.setTransform(345.6314,538.4229,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_58.setTransform(333.6671,544.1079,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_59.setTransform(333.6671,544.1079,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_60.setTransform(322.298,548.0417,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_61.setTransform(322.298,548.0417,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_62.setTransform(264.7887,430.0141,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_63.setTransform(264.5163,430.4557,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_64.setTransform(255.7622,440.3968,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_65.setTransform(255.7622,440.3968,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_66.setTransform(248.8554,450.247,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_67.setTransform(248.8554,450.247,1.339,1.0585,0,-49.6119,-58.3279);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_68.setTransform(295.7093,491.4838,0.4513,0.4513,-127.0233);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_69.setTransform(295.7093,491.4838,0.4513,0.4513,-127.0233);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_70.setTransform(57.9409,510.4915,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_71.setTransform(57.5933,510.2574,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_72.setTransform(47.8399,505.8592,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_73.setTransform(47.8399,505.8592,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_74.setTransform(39.4762,500.9124,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_75.setTransform(39.4762,500.9124,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_76.setTransform(82.1502,403.9149,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_77.setTransform(81.7359,403.9779,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_78.setTransform(71.0384,403.7802,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_79.setTransform(71.0384,403.7802,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_80.setTransform(61.3623,404.6729,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_81.setTransform(61.3623,404.6729,1.0815,0.855,0,0.0736,-8.6369);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_82.setTransform(60.4881,455.0416,0.3646,0.3646,-77.3406);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_83.setTransform(60.4881,455.0416,0.3646,0.3646,-77.3406);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_84.setTransform(443.3408,145.0916,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_85.setTransform(443.4146,145.3949,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_86.setTransform(446.5747,152.7096,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_87.setTransform(446.5747,152.7096,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_88.setTransform(448.695,159.6288,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_89.setTransform(448.695,159.6288,0.8055,0.6367,0,67.6137,-103.6711);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_90.setTransform(376.4868,191.761,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_91.setTransform(376.7464,191.9343,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_92.setTransform(382.5346,197.4106,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_93.setTransform(382.5346,197.4106,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_94.setTransform(388.3078,201.7744,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_95.setTransform(388.3078,201.7744,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_96.setTransform(414.0972,174.3017,0.2715,0.2715,145.0238);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_97.setTransform(414.0972,174.3017,0.2715,0.2715,145.0238);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_98.setTransform(502.9119,140.3744,1.0188,0.8054,0,174.9525,166.236);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_99.setTransform(503.2954,140.2805,1.0188,0.8054,0,174.9525,166.236);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_100.setTransform(513.3488,139.5654,1.0188,0.8054,0,174.9525,166.236);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_101.setTransform(513.3488,139.5654,1.0188,0.8054,0,174.9525,166.236);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_102.setTransform(522.3521,137.9132,1.0188,0.8054,0,174.9525,166.236);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_103.setTransform(522.3521,137.9132,1.0188,0.8054,0,174.9525,166.236);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_104.setTransform(518.9393,90.5866,0.3435,0.3435,97.5336);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_105.setTransform(518.9393,90.5866,0.3435,0.3435,97.5336);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_106.setTransform(423.3575,96.8877,1.0816,0.855,0,94.114,-77.1696);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_107.setTransform(423.2644,97.2964,1.0816,0.855,0,94.114,-77.1696);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_108.setTransform(422.6793,107.9796,1.0816,0.855,0,94.114,-77.1696);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_109.setTransform(422.6793,107.9796,1.0816,0.855,0,94.114,-77.1696);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_110.setTransform(421.0814,117.5645,1.0816,0.855,0,94.114,-77.1696);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_111.setTransform(421.0814,117.5645,1.0816,0.855,0,94.114,-77.1696);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_112.setTransform(315.1667,112.8312,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_113.setTransform(315.3748,113.1949,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_114.setTransform(319.0481,123.244,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_115.setTransform(319.0481,123.244,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_116.setTransform(323.37,131.9472,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_117.setTransform(323.37,131.9472,1.0816,0.855,0,-111.0592,-119.7744);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_118.setTransform(370.6697,114.469,0.3646,0.3646,171.528);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_119.setTransform(370.6697,114.469,0.3646,0.3646,171.528);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_120.setTransform(625.4592,86.8453,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_121.setTransform(625.6837,87.1703,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_122.setTransform(632.7307,94.3859,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_123.setTransform(632.7307,94.3859,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_124.setTransform(638.3694,101.6048,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_125.setTransform(638.3694,101.6048,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_126.setTransform(567.4949,172.3206,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_127.setTransform(567.8802,172.4078,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_128.setTransform(577.2009,176.2606,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_129.setTransform(577.2009,176.2606,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_130.setTransform(586.0003,178.8051,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_131.setTransform(586.0003,178.8051,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_132.setTransform(604.072,134.6952,0.3437,0.3437,124.0696);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_133.setTransform(604.072,134.6952,0.3437,0.3437,124.0696);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_134.setTransform(621.5454,176.0459,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_135.setTransform(621.4652,176.4573,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_136.setTransform(621.2162,187.1534,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_137.setTransform(621.2162,187.1534,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_138.setTransform(619.9203,196.7837,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_139.setTransform(619.9203,196.7837,1.0815,0.855,0,92.3146,-78.9705);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_140.setTransform(513.888,195.3866,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_141.setTransform(514.1074,195.7436,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_142.setTransform(518.0947,205.6721,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_143.setTransform(518.0947,205.6721,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_144.setTransform(522.688,214.2351,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_145.setTransform(522.688,214.2351,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_146.setTransform(569.4926,195.2778,0.3646,0.3646,169.7275);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_147.setTransform(569.4926,195.2778,0.3646,0.3646,169.7275);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_148.setTransform(591.2555,164.7403,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_149.setTransform(591.1258,164.3674,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_150.setTransform(586.2575,155.542,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_151.setTransform(586.2575,155.542,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_152.setTransform(582.7467,147.0881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_153.setTransform(582.7467,147.0881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_154.setTransform(669.7916,97.9291,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_155.setTransform(669.4436,97.7425,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_156.setTransform(661.4906,91.5509,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_157.setTransform(661.4906,91.5509,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_158.setTransform(653.6916,86.7582,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_159.setTransform(653.6916,86.7582,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_160.setTransform(624.4846,124.2461,0.3434,0.3434,-40.4933);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_161.setTransform(624.4846,124.2461,0.3434,0.3434,-40.4933);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_162.setTransform(699.766,183.4214,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_163.setTransform(700.1085,183.1798,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_164.setTransform(485.2535,255.4207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_165.setTransform(485.2834,254.9027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_166.setTransform(483.8109,241.7383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_167.setTransform(483.8109,241.7383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_168.setTransform(483.7999,229.7077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_169.setTransform(483.7999,229.7077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_170.setTransform(614.0004,213.804,1.339,1.0585,0,59.4218,50.708);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_171.setTransform(613.6718,213.4024,1.339,1.0585,0,59.4218,50.708);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_172.setTransform(607.1294,201.8843,1.339,1.0585,0,59.4218,50.708);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_173.setTransform(607.1294,201.8843,1.339,1.0585,0,59.4218,50.708);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_174.setTransform(600.0705,192.1423,1.339,1.0585,0,59.4218,50.708);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_175.setTransform(600.0705,192.1423,1.339,1.0585,0,59.4218,50.708);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_176.setTransform(545.7579,222.9722,0.4514,0.4514,-17.9854);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_177.setTransform(545.7579,222.9722,0.4514,0.4514,-17.9854);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_178.setTransform(385.3545,490.9435,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_179.setTransform(385.2746,491.2452,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_180.setTransform(384.561,499.1813,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_181.setTransform(384.561,499.1813,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_182.setTransform(383.1221,506.2737,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_183.setTransform(383.1221,506.2737,0.8055,0.6367,0,96.1149,-75.1666);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_184.setTransform(304.3557,499.9594,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_185.setTransform(304.5012,500.2356,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_186.setTransform(306.9736,507.8105,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_187.setTransform(306.9736,507.8105,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_188.setTransform(309.9639,514.4007,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_189.setTransform(309.9639,514.4007,0.8055,0.6367,0,-109.0546,-117.7714);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_190.setTransform(345.7304,502.6815,0.2715,0.2715,173.5332);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_191.setTransform(345.7304,502.6815,0.2715,0.2715,173.5332);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_192.setTransform(500.7753,431.9067,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_193.setTransform(500.9883,432.2391,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_194.setTransform(507.7774,439.6884,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_195.setTransform(507.7774,439.6884,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_196.setTransform(513.16,447.0925,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_197.setTransform(513.16,447.0925,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_198.setTransform(439.946,515.1977,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_199.setTransform(440.3278,515.2982,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_200.setTransform(449.5037,519.4679,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_201.setTransform(449.5037,519.4679,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_202.setTransform(458.2042,522.3131,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_203.setTransform(458.2042,522.3131,1.0188,0.8054,0,-156.5414,-165.257);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_204.setTransform(477.8479,478.9813,0.3434,0.3434,126.044);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_205.setTransform(477.8479,478.9813,0.3434,0.3434,126.044);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_206.setTransform(390.8274,439.0145,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_207.setTransform(390.5506,439.3291,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_208.setTransform(384.9375,448.4374,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_209.setTransform(384.9375,448.4374,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_210.setTransform(378.9587,456.0973,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_211.setTransform(378.9587,456.0973,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_212.setTransform(288.2335,401.3237,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_213.setTransform(288.2428,401.7427,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_214.setTransform(286.6744,412.3269,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_215.setTransform(286.6744,412.3269,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_216.setTransform(286.3184,422.038,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_217.setTransform(286.3184,422.038,1.0816,0.855,0,-82.5554,-91.2659);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_218.setTransform(336.2002,429.3619,0.3646,0.3646,-159.9694);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_219.setTransform(336.2002,429.3619,0.3646,0.3646,-159.9694);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_220.setTransform(573.163,526.6719,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_221.setTransform(573.2051,527.0648,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_222.setTransform(575.9538,536.769,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_223.setTransform(575.9538,536.769,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_224.setTransform(577.4633,545.8039,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_225.setTransform(577.4633,545.8039,1.0195,0.806,0,75.1647,-96.1196);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_226.setTransform(481.4721,574.0902,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_227.setTransform(481.769,574.3508,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_228.setTransform(488.1207,582.1853,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_229.setTransform(488.1207,582.1853,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_230.setTransform(494.6387,588.6213,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_231.setTransform(494.6387,588.6213,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_232.setTransform(531.58,558.5111,0.3437,0.3437,152.5794);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_233.setTransform(531.58,558.5111,0.3437,0.3437,152.5794);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_234.setTransform(582.8259,319.0402,1.339,1.0585,0,71.138,-100.1486);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_235.setTransform(582.9174,319.5509,1.339,1.0585,0,71.138,-100.1486);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_236.setTransform(587.4139,332.0106,1.339,1.0585,0,71.138,-100.1486);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_237.setTransform(587.4139,332.0106,1.339,1.0585,0,71.138,-100.1486);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_238.setTransform(590.2252,343.7079,1.339,1.0585,0,71.138,-100.1486);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_239.setTransform(590.2252,343.7079,1.339,1.0585,0,71.138,-100.1486);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_240.setTransform(467.2258,389.5595,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_241.setTransform(467.6388,389.8735,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_242.setTransform(476.6829,399.5515,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_243.setTransform(476.6829,399.5515,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_244.setTransform(485.8159,407.382,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_245.setTransform(485.8159,407.382,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_246.setTransform(531.3717,364.5585,0.4514,0.4514,148.5506);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_247.setTransform(531.3717,364.5585,0.4514,0.4514,148.5506);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_248.setTransform(423.4455,568.804,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_249.setTransform(423.4679,569.2225,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_250.setTransform(422.233,579.8504,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_251.setTransform(422.233,579.8504,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_252.setTransform(422.1824,589.5676,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_253.setTransform(422.1824,589.5676,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_254.setTransform(472.2784,595.2712,0.3646,0.3646,-161.7675);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_255.setTransform(472.2784,595.2712,0.3646,0.3646,-161.7675);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_256.setTransform(201.0752,219.2158,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_257.setTransform(200.8656,218.9845,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_258.setTransform(194.5969,214.0657,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_259.setTransform(194.5969,214.0657,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_260.setTransform(189.4307,208.9979,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_261.setTransform(189.4307,208.9979,0.8055,0.6367,0,-140.901,47.8148);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_262.setTransform(237.6164,146.5212,0.8055,0.6367,0,13.9204,5.205);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_263.setTransform(237.3056,146.4929,0.8055,0.6367,0,13.9204,5.205);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_264.setTransform(229.6051,144.444,0.8055,0.6367,0,13.9204,5.205);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_265.setTransform(229.6051,144.444,0.8055,0.6367,0,13.9204,5.205);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_266.setTransform(222.4488,143.3655,0.8055,0.6367,0,13.9204,5.205);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_267.setTransform(222.4488,143.3655,0.8055,0.6367,0,13.9204,5.205);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_268.setTransform(212.6372,179.6117,0.2715,0.2715,-63.4897);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_269.setTransform(212.6372,179.6117,0.2715,0.2715,-63.4897);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_270.setTransform(187.7653,348.1566,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_271.setTransform(187.3705,348.1544,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_272.setTransform(177.4259,349.7949,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_273.setTransform(177.4259,349.7949,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_274.setTransform(168.2848,350.28,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_275.setTransform(168.2848,350.28,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_276.setTransform(151.0782,251.8807,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_277.setTransform(150.7861,252.1462,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_278.setTransform(142.2934,257.5736,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_279.setTransform(142.2934,257.5736,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_280.setTransform(135.1707,263.3231,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_281.setTransform(135.1707,263.3231,1.0188,0.8054,0,-33.5603,-42.2763);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_282.setTransform(160.6979,303.3467,0.3434,0.3434,-110.9708);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_283.setTransform(160.6979,303.3467,0.3434,0.3434,-110.9708);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_284.setTransform(241.6466,252.2889,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_285.setTransform(241.5333,251.8854,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_286.setTransform(236.9483,242.2183,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_287.setTransform(236.9483,242.2183,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_288.setTransform(233.7775,233.0328,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_289.setTransform(233.7775,233.0328,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_290.setTransform(329.1027,186.5775,1.0816,0.855,0,40.4255,31.7114);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_291.setTransform(328.7462,186.3572,1.0816,0.855,0,40.4255,31.7114);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_292.setTransform(320.7211,179.2806,1.0816,0.855,0,40.4255,31.7114);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_293.setTransform(320.7211,179.2806,1.0816,0.855,0,40.4255,31.7114);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_294.setTransform(312.7686,173.6963,1.0816,0.855,0,40.4255,31.7114);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_295.setTransform(312.7686,173.6963,1.0816,0.855,0,40.4255,31.7114);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_296.setTransform(279.4456,211.5513,0.3646,0.3646,-36.986);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_297.setTransform(279.4456,211.5513,0.3646,0.3646,-36.986);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_298.setTransform(68.8915,357.3403,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_299.setTransform(68.5391,357.1618,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_300.setTransform(58.9024,354.186,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_301.setTransform(58.9024,354.186,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_302.setTransform(50.5016,350.5348,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_303.setTransform(50.5016,350.5348,1.0195,0.806,0,-161.8566,26.8565);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_304.setTransform(79.0091,254.7296,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_305.setTransform(78.6288,254.8368,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_306.setTransform(68.5994,255.9,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_307.setTransform(68.5994,255.9,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_308.setTransform(59.6525,257.8639,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_309.setTransform(59.6525,257.8639,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_310.setTransform(64.7107,305.0968,0.3437,0.3437,-84.4479);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_311.setTransform(64.7107,305.0968,0.3437,0.3437,-84.4479);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_312.setTransform(237.8495,478.4909,1.339,1.0585,0,-165.8836,22.83);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_313.setTransform(237.3713,478.2896,1.339,1.0585,0,-165.8836,22.83);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_314.setTransform(224.4719,475.2796,1.339,1.0585,0,-165.8836,22.83);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_315.setTransform(224.4719,475.2796,1.339,1.0585,0,-165.8836,22.83);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_316.setTransform(213.1293,471.2709,1.339,1.0585,0,-165.8836,22.83);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_317.setTransform(213.1293,471.2709,1.339,1.0585,0,-165.8836,22.83);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_318.setTransform(241.5619,343.232,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_319.setTransform(241.0737,343.4075,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_320.setTransform(228.0322,345.7261,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_321.setTransform(228.0322,345.7261,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_322.setTransform(216.492,349.1248,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_323.setTransform(216.492,349.1248,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_324.setTransform(227.4247,410.5592,0.4514,0.4514,-88.4736);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_325.setTransform(227.4247,410.5592,0.4514,0.4514,-88.4736);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_326.setTransform(29.6865,277.2417,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_327.setTransform(29.5606,276.8419,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_328.setTransform(24.674,267.3236,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_329.setTransform(24.674,267.3236,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_330.setTransform(21.216,258.2424,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_331.setTransform(21.216,258.2424,1.0815,0.855,0,-116.1946,72.5196);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_332.setTransform(115.0867,208.8525,1.0815,0.855,0,38.6277,29.9105);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_333.setTransform(114.7234,208.6435,1.0815,0.855,0,38.6277,29.9105);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_334.setTransform(106.4802,201.8227,1.0815,0.855,0,38.6277,29.9105);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_335.setTransform(106.4802,201.8227,1.0815,0.855,0,38.6277,29.9105);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_336.setTransform(98.3562,196.4911,1.0815,0.855,0,38.6277,29.9105);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_337.setTransform(98.3562,196.4911,1.0815,0.855,0,38.6277,29.9105);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_338.setTransform(66.2807,235.3675,0.3646,0.3646,-38.7883);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_339.setTransform(66.2807,235.3675,0.3646,0.3646,-38.7883);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_340.setTransform(378.7119,172.3984,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_341.setTransform(378.4027,172.3562,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_342.setTransform(370.4388,172.6247,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_343.setTransform(370.4388,172.6247,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_344.setTransform(363.2231,172.0698,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_345.setTransform(363.2231,172.0698,0.8055,0.6367,0,179.0526,7.7637);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_346.setTransform(359.8126,93.1945,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_347.setTransform(359.5565,93.3728,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_348.setTransform(352.3432,96.7585,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_349.setTransform(352.3432,96.7585,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_350.setTransform(346.171,100.5369,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_351.setTransform(346.171,100.5369,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_352.setTransform(362.0042,134.5473,0.2715,0.2715,-103.5333);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_353.setTransform(362.0042,134.5473,0.2715,0.2715,-103.5333);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_354.setTransform(451.3237,279.747,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_355.setTransform(451.02,279.9993,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_356.setTransform(444.4627,287.6534,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_357.setTransform(444.4627,287.6534,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_358.setTransform(437.7772,293.9059,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_359.setTransform(437.7772,293.9059,1.0188,0.8054,0,131.5685,-39.7178);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_360.setTransform(361.3799,229.5889,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_361.setTransform(361.3272,229.9802,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_362.setTransform(358.3184,239.5995,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_363.setTransform(358.3184,239.5995,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_364.setTransform(356.5656,248.5839,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_365.setTransform(356.5656,248.5839,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_366.setTransform(401.8186,262.8055,0.3434,0.3434,-151.0253);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_367.setTransform(401.8186,262.8055,0.3434,0.3434,-151.0253);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_368.setTransform(430.8802,171.5043,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_369.setTransform(430.5339,171.2683,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_370.setTransform(420.8042,166.8186,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_371.setTransform(420.8042,166.8186,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_372.setTransform(412.4669,161.8278,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_373.setTransform(412.4669,161.8278,1.0815,0.855,0,-154.4465,34.2712);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_374.setTransform(455.6879,65.0737,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_375.setTransform(455.2732,65.1344,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_376.setTransform(444.5767,64.8803,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_377.setTransform(444.5767,64.8803,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_378.setTransform(434.8959,65.7219,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_379.setTransform(434.8959,65.7219,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_380.setTransform(433.6421,116.0707,0.3646,0.3646,-77.034);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_381.setTransform(433.6421,116.0707,0.3646,0.3646,-77.034);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_382.setTransform(366.21,363.2455,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_383.setTransform(365.8254,363.3357,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_384.setTransform(356.5332,367.2576,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_385.setTransform(356.5332,367.2576,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_386.setTransform(347.7527,369.8674,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_387.setTransform(347.7527,369.8674,1.0195,0.806,0,158.0987,-13.1881);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_388.setTransform(308.0237,278.0614,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_389.setTransform(307.8017,278.3881,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_390.setTransform(300.8082,285.6555,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_391.setTransform(300.8082,285.6555,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_392.setTransform(295.2231,292.9159,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_393.setTransform(295.2231,292.9159,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_394.setTransform(329.5236,325.8698,0.3437,0.3437,-124.4902);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_395.setTransform(329.5236,325.8698,0.3437,0.3437,-124.4902);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_396.setTransform(573.4799,347.3765,1.339,1.0585,0,154.071,-17.2158);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_397.setTransform(572.9843,347.53,1.339,1.0585,0,154.071,-17.2158);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_398.setTransform(561.1725,353.5253,1.339,1.0585,0,154.071,-17.2158);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_399.setTransform(561.1725,353.5253,1.339,1.0585,0,154.071,-17.2158);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_400.setTransform(549.91,357.7544,1.339,1.0585,0,154.071,-17.2158);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_401.setTransform(549.91,357.7544,1.339,1.0585,0,154.071,-17.2158);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_402.setTransform(489.4267,241.2046,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_403.setTransform(489.1658,241.6532,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_404.setTransform(480.674,251.8194,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_405.setTransform(480.674,251.8194,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_406.setTransform(474.0265,261.8465,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_407.setTransform(474.0265,261.8465,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_408.setTransform(521.9581,301.8731,0.4514,0.4514,-128.5188);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_409.setTransform(521.9581,301.8731,0.4514,0.4514,-128.5188);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_410.setTransform(284.7462,327.1457,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_411.setTransform(284.3926,326.9207,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_412.setTransform(274.5277,322.7789,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_413.setTransform(274.5277,322.7789,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_414.setTransform(266.0376,318.0524,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_415.setTransform(266.0376,318.0524,1.0815,0.855,0,-156.2439,32.4703);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_416.setTransform(306.1328,219.9032,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_417.setTransform(305.7202,219.977,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_418.setTransform(295.0215,220.059,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_419.setTransform(295.0215,220.059,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_420.setTransform(285.3723,221.2044,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_421.setTransform(285.3723,221.2044,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_422.setTransform(285.7171,271.5819,0.3646,0.3646,-78.8359);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_423.setTransform(285.7171,271.5819,0.3646,0.3646,-78.8359);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_424.setTransform(600.9542,407.8967,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_425.setTransform(601.1022,407.6219,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_426.setTransform(603.6439,400.0699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_427.setTransform(603.6439,400.0699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_428.setTransform(606.6945,393.5073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_429.setTransform(606.6945,393.5073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_430.setTransform(681.8366,417.9257,0.8055,0.6367,0,84.407,75.6921);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_431.setTransform(681.7595,417.6232,0.8055,0.6367,0,84.407,75.6921);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_432.setTransform(681.1186,409.6805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_433.setTransform(681.1186,409.6805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_434.setTransform(679.7448,402.5749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_435.setTransform(679.7448,402.5749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_436.setTransform(642.2159,405.5737,0.2715,0.2715,6.9916);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_437.setTransform(642.2159,405.5737,0.2715,0.2715,6.9916);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_438.setTransform(475.0555,438.2903,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_439.setTransform(474.9258,437.9174,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_440.setTransform(470.0575,429.092,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_441.setTransform(470.0575,429.092,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_442.setTransform(466.5467,420.6381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_443.setTransform(466.5467,420.6381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_444.setTransform(553.5416,371.5791,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_445.setTransform(553.1936,371.3925,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_446.setTransform(545.2406,365.2009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_447.setTransform(545.2406,365.2009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_448.setTransform(537.4416,360.4082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_449.setTransform(537.4416,360.4082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_450.setTransform(508.1846,397.8961,0.3434,0.3434,-40.4933);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_451.setTransform(508.1846,397.8961,0.3434,0.3434,-40.4933);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_452.setTransform(583.516,457.1214,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_453.setTransform(583.8585,456.8798,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_454.setTransform(591.4383,449.3283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_455.setTransform(591.4383,449.3283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_456.setTransform(599.0366,443.2707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_457.setTransform(599.0366,443.2707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_458.setTransform(674.6584,517.5553,1.0816,0.855,0,110.9103,102.1956);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_459.setTransform(674.7469,517.1456,1.0816,0.855,0,110.9103,102.1956);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_460.setTransform(678.7362,507.2174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_461.setTransform(678.7362,507.2174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_462.setTransform(681.3431,497.8559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_463.setTransform(681.3431,497.8559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_464.setTransform(634.4366,479.1662,0.3646,0.3646,33.4985);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_465.setTransform(634.4366,479.1662,0.3646,0.3646,33.4985);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_466.setTransform(426.6494,329.365,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_467.setTransform(426.6999,328.9732,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_468.setTransform(426.2854,318.8958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_469.setTransform(426.2854,318.8958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_470.setTransform(426.9202,309.7577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_471.setTransform(426.9202,309.7577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_472.setTransform(526.797,304.6348,1.0195,0.806,0,63.4524,54.7358);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_473.setTransform(526.5689,304.3123,1.0195,0.806,0,63.4524,54.7358);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_474.setTransform(522.216,295.2142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_475.setTransform(522.216,295.2142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_476.setTransform(517.3756,287.4374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_477.setTransform(517.3756,287.4374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_478.setTransform(474.5036,308.0485,0.3437,0.3437,-13.9579);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_479.setTransform(474.5036,308.0485,0.3437,0.3437,-13.9579);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_480.setTransform(368.9535,529.1207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_481.setTransform(368.9834,528.6027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_482.setTransform(367.5109,515.4383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_483.setTransform(367.5109,515.4383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_484.setTransform(367.4999,503.4077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_485.setTransform(367.4999,503.4077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_486.setTransform(497.7004,487.454,1.339,1.0585,0,59.4218,50.708);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_487.setTransform(497.3718,487.0524,1.339,1.0585,0,59.4218,50.708);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_488.setTransform(490.8294,475.5343,1.339,1.0585,0,59.4218,50.708);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_489.setTransform(490.8294,475.5343,1.339,1.0585,0,59.4218,50.708);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_490.setTransform(483.7705,465.7923,1.339,1.0585,0,59.4218,50.708);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_491.setTransform(483.7705,465.7923,1.339,1.0585,0,59.4218,50.708);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_492.setTransform(429.4579,496.6722,0.4514,0.4514,-17.9854);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_493.setTransform(429.4579,496.6722,0.4514,0.4514,-17.9854);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_494.setTransform(489.083,265.6355,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_495.setTransform(489.4177,265.3833,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_496.setTransform(496.7566,257.5973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_497.setTransform(496.7566,257.5973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_498.setTransform(504.1609,251.3038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_499.setTransform(504.1609,251.3038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_500.setTransform(582.1126,323.3435,1.0816,0.855,0,109.1091,100.3939);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_501.setTransform(582.1883,322.9312,1.0816,0.855,0,109.1091,100.3939);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_502.setTransform(585.8634,312.8827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_503.setTransform(585.8634,312.8827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_504.setTransform(588.1746,303.4442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_505.setTransform(588.1746,303.4442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_506.setTransform(540.7384,286.0921,0.3646,0.3646,31.6983);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_507.setTransform(540.7384,286.0921,0.3646,0.3646,31.6983);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_508.setTransform(469.8042,271.6467,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_509.setTransform(469.9522,271.3719,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_510.setTransform(472.4939,263.8199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_511.setTransform(472.4939,263.8199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_512.setTransform(475.5445,257.2573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_513.setTransform(475.5445,257.2573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_514.setTransform(550.5866,281.7257,0.8055,0.6367,0,84.407,75.6921);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_515.setTransform(550.5095,281.4232,0.8055,0.6367,0,84.407,75.6921);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_516.setTransform(549.8686,273.4805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_517.setTransform(549.8686,273.4805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_518.setTransform(548.4948,266.3749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_519.setTransform(548.4948,266.3749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_520.setTransform(511.0159,269.3237,0.2715,0.2715,6.9916);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_521.setTransform(511.0159,269.3237,0.2715,0.2715,6.9916);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_522.setTransform(343.8555,302.1903,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_523.setTransform(343.7258,301.8174,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_524.setTransform(338.8575,292.992,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_525.setTransform(338.8575,292.992,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_526.setTransform(335.3467,284.5381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_527.setTransform(335.3467,284.5381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_528.setTransform(422.3416,235.3791,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_529.setTransform(421.9936,235.1925,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_530.setTransform(414.0406,229.0009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_531.setTransform(414.0406,229.0009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_532.setTransform(406.2416,224.2082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_533.setTransform(406.2416,224.2082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_534.setTransform(377.0346,261.6461,0.3434,0.3434,-40.4933);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_535.setTransform(377.0346,261.6461,0.3434,0.3434,-40.4933);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_536.setTransform(452.316,320.8714,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_537.setTransform(452.6585,320.6298,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_538.setTransform(460.2383,313.0783,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_539.setTransform(460.2383,313.0783,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_540.setTransform(467.8366,307.0207,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_541.setTransform(467.8366,307.0207,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_542.setTransform(543.4584,381.4553,1.0816,0.855,0,110.9103,102.1956);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_543.setTransform(543.5469,381.0456,1.0816,0.855,0,110.9103,102.1956);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_544.setTransform(547.5362,371.1174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_545.setTransform(547.5362,371.1174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_546.setTransform(550.1431,361.7559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_547.setTransform(550.1431,361.7559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_548.setTransform(503.2366,342.9662,0.3646,0.3646,33.4985);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_549.setTransform(503.2366,342.9662,0.3646,0.3646,33.4985);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_550.setTransform(295.5994,193.165,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_551.setTransform(295.6499,192.7732,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_552.setTransform(295.2354,182.6958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_553.setTransform(295.2354,182.6958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_554.setTransform(295.8702,173.5577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_555.setTransform(295.8702,173.5577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_556.setTransform(395.597,168.4348,1.0195,0.806,0,63.4524,54.7358);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_557.setTransform(395.3689,168.1123,1.0195,0.806,0,63.4524,54.7358);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_558.setTransform(391.016,159.0142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_559.setTransform(391.016,159.0142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_560.setTransform(386.1756,151.2374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_561.setTransform(386.1756,151.2374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_562.setTransform(343.3036,171.7985,0.3437,0.3437,-13.9579);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_563.setTransform(343.3036,171.7985,0.3437,0.3437,-13.9579);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_564.setTransform(237.8035,392.9207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_565.setTransform(237.8334,392.4027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_566.setTransform(236.3609,379.2383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_567.setTransform(236.3609,379.2383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_568.setTransform(236.3499,367.2077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_569.setTransform(236.3499,367.2077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_570.setTransform(366.5004,351.254,1.339,1.0585,0,59.4218,50.708);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_571.setTransform(366.1718,350.8524,1.339,1.0585,0,59.4218,50.708);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_572.setTransform(359.6294,339.3343,1.339,1.0585,0,59.4218,50.708);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_573.setTransform(359.6294,339.3343,1.339,1.0585,0,59.4218,50.708);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_574.setTransform(352.5705,329.5923,1.339,1.0585,0,59.4218,50.708);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_575.setTransform(352.5705,329.5923,1.339,1.0585,0,59.4218,50.708);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_576.setTransform(298.3079,360.4722,0.4514,0.4514,-17.9854);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_577.setTransform(298.3079,360.4722,0.4514,0.4514,-17.9854);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_578.setTransform(357.883,129.4355,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_579.setTransform(358.2177,129.1833,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_580.setTransform(365.5566,121.3973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_581.setTransform(365.5566,121.3973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_582.setTransform(372.9609,115.1038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_583.setTransform(372.9609,115.1038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_584.setTransform(450.9126,187.1935,1.0816,0.855,0,109.1091,100.3939);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_585.setTransform(450.9883,186.7812,1.0816,0.855,0,109.1091,100.3939);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_586.setTransform(454.6634,176.7327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_587.setTransform(454.6634,176.7327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_588.setTransform(456.9746,167.2942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_589.setTransform(456.9746,167.2942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_590.setTransform(409.5384,149.9921,0.3646,0.3646,31.6983);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_591.setTransform(409.5384,149.9921,0.3646,0.3646,31.6983);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_592.setTransform(516.3042,353.5967,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_593.setTransform(516.4522,353.3219,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_594.setTransform(518.9939,345.7699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_595.setTransform(518.9939,345.7699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_596.setTransform(522.0445,339.2073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_597.setTransform(522.0445,339.2073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_598.setTransform(597.1366,363.6257,0.8055,0.6367,0,84.407,75.6921);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_599.setTransform(597.0595,363.3232,0.8055,0.6367,0,84.407,75.6921);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_600.setTransform(596.4186,355.3805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_601.setTransform(596.4186,355.3805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_602.setTransform(595.0448,348.2749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_603.setTransform(595.0448,348.2749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_604.setTransform(557.5659,351.2737,0.2715,0.2715,6.9916);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_605.setTransform(557.5659,351.2737,0.2715,0.2715,6.9916);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_606.setTransform(390.4055,383.9403,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_607.setTransform(390.2758,383.5674,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_608.setTransform(385.4075,374.742,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_609.setTransform(385.4075,374.742,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_610.setTransform(381.8967,366.2881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_611.setTransform(381.8967,366.2881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_612.setTransform(468.7916,317.2791,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_613.setTransform(468.4436,317.0925,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_614.setTransform(460.4906,310.9009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_615.setTransform(460.4906,310.9009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_616.setTransform(452.6916,306.1082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_617.setTransform(452.6916,306.1082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_618.setTransform(423.5346,343.5961,0.3434,0.3434,-40.4933);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_619.setTransform(423.5346,343.5961,0.3434,0.3434,-40.4933);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_620.setTransform(498.816,402.7714,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_621.setTransform(499.1585,402.5298,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_622.setTransform(506.7383,394.9783,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_623.setTransform(506.7383,394.9783,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_624.setTransform(514.3366,388.9207,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_625.setTransform(514.3366,388.9207,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_626.setTransform(590.0084,463.2053,1.0816,0.855,0,110.9103,102.1956);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_627.setTransform(590.0969,462.7956,1.0816,0.855,0,110.9103,102.1956);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_628.setTransform(594.0862,452.8674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_629.setTransform(594.0862,452.8674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_630.setTransform(596.6931,443.5059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_631.setTransform(596.6931,443.5059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_632.setTransform(549.7866,424.8662,0.3646,0.3646,33.4985);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_633.setTransform(549.7866,424.8662,0.3646,0.3646,33.4985);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_634.setTransform(342.0494,275.065,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_635.setTransform(342.0999,274.6732,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_636.setTransform(341.6854,264.5958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_637.setTransform(341.6854,264.5958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_638.setTransform(342.3202,255.4577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_639.setTransform(342.3202,255.4577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_640.setTransform(442.097,250.2848,1.0195,0.806,0,63.4524,54.7358);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_641.setTransform(441.8689,249.9623,1.0195,0.806,0,63.4524,54.7358);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_642.setTransform(437.516,240.8642,1.0195,0.806,0,63.4524,54.7358);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_643.setTransform(437.516,240.8642,1.0195,0.806,0,63.4524,54.7358);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_644.setTransform(432.6756,233.0874,1.0195,0.806,0,63.4524,54.7358);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_645.setTransform(432.6756,233.0874,1.0195,0.806,0,63.4524,54.7358);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_646.setTransform(389.8036,253.6985,0.3437,0.3437,-13.9579);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_647.setTransform(389.8036,253.6985,0.3437,0.3437,-13.9579);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_648.setTransform(284.2535,474.8207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_649.setTransform(284.2834,474.3027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_650.setTransform(282.8109,461.1383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_651.setTransform(282.8109,461.1383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_652.setTransform(282.7999,449.1077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_653.setTransform(282.7999,449.1077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_654.setTransform(413.0504,433.154,1.339,1.0585,0,59.4218,50.708);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_655.setTransform(412.7218,432.7524,1.339,1.0585,0,59.4218,50.708);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_656.setTransform(406.1794,421.2343,1.339,1.0585,0,59.4218,50.708);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_657.setTransform(406.1794,421.2343,1.339,1.0585,0,59.4218,50.708);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_658.setTransform(399.1205,411.4923,1.339,1.0585,0,59.4218,50.708);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_659.setTransform(399.1205,411.4923,1.339,1.0585,0,59.4218,50.708);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_660.setTransform(344.8079,442.3722,0.4514,0.4514,-17.9854);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_661.setTransform(344.8079,442.3722,0.4514,0.4514,-17.9854);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_662.setTransform(404.433,211.3355,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_663.setTransform(404.7677,211.0833,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_664.setTransform(412.1066,203.2973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_665.setTransform(412.1066,203.2973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_666.setTransform(419.5109,197.0038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_667.setTransform(419.5109,197.0038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_668.setTransform(497.4626,269.0435,1.0816,0.855,0,109.1091,100.3939);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_669.setTransform(497.5383,268.6312,1.0816,0.855,0,109.1091,100.3939);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_670.setTransform(501.2134,258.5827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_671.setTransform(501.2134,258.5827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_672.setTransform(503.5246,249.1442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_673.setTransform(503.5246,249.1442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_674.setTransform(455.9884,231.7921,0.3646,0.3646,31.6983);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_675.setTransform(455.9884,231.7921,0.3646,0.3646,31.6983);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_676.setTransform(239.2887,487.7477,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_677.setTransform(238.9806,487.6975,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_678.setTransform(231.0126,487.7577,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_679.setTransform(231.0126,487.7577,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_680.setTransform(223.8139,487.0143,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_681.setTransform(223.8139,487.0143,0.8055,0.6368,0,-179.4563,9.2618);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_682.setTransform(222.5015,407.964,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_683.setTransform(222.2408,408.1356,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_684.setTransform(214.9416,411.3319,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_685.setTransform(214.9416,411.3319,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_686.setTransform(208.6728,414.948,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_687.setTransform(208.6728,414.948,0.8055,0.6367,0,-24.6267,-33.343);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_688.setTransform(223.666,449.5005,0.2715,0.2715,-102.0381);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_689.setTransform(223.666,449.5005,0.2715,0.2715,-102.0381);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_690.setTransform(309.103,596.9045,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_691.setTransform(308.7928,597.1487,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_692.setTransform(302.0379,604.6289,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_693.setTransform(302.0379,604.6289,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_694.setTransform(295.1913,610.7047,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_695.setTransform(295.1913,610.7047,1.0188,0.8054,0,133.0647,-38.221);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_696.setTransform(220.5077,544.4985,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_697.setTransform(220.4448,544.8882,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_698.setTransform(217.186,554.4256,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_699.setTransform(217.186,554.4256,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_700.setTransform(215.1993,563.3611,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_701.setTransform(215.1993,563.3611,1.0188,0.8054,0,-72.1129,-80.8305);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_702.setTransform(260.0609,578.6536,0.3434,0.3434,-149.5283);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_703.setTransform(260.0609,578.6536,0.3434,0.3434,-149.5283);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_704.setTransform(291.532,488.1438,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_705.setTransform(291.1919,487.8988,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_706.setTransform(281.5814,483.1966,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_707.setTransform(281.5814,483.1966,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_708.setTransform(273.3769,477.9898,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_709.setTransform(273.3769,477.9898,1.0815,0.855,0,-152.9493,35.7666);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_710.setTransform(319.0295,382.4273,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_711.setTransform(318.6134,382.4771,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_712.setTransform(307.9272,381.9438,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_713.setTransform(307.9272,381.9438,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_714.setTransform(298.2278,382.5323,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_715.setTransform(298.2278,382.5323,1.0816,0.855,0,1.8736,-6.8379);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_716.setTransform(295.7339,432.7582,0.3646,0.3646,-75.5392);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_717.setTransform(295.7339,432.7582,0.3646,0.3646,-75.5392);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_718.setTransform(221.9525,678.1879,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_719.setTransform(221.5656,678.268,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_720.setTransform(212.1742,681.9459,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_721.setTransform(212.1742,681.9459,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_722.setTransform(203.3285,684.3255,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_723.setTransform(203.3285,684.3255,1.0195,0.8059,0,159.5943,-11.6917);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_724.setTransform(165.8974,591.524,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_725.setTransform(165.6669,591.8448,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_726.setTransform(158.4864,598.927,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_727.setTransform(158.4864,598.927,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_728.setTransform(152.7139,606.039,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_729.setTransform(152.7139,606.039,1.0195,0.806,0,-45.583,-54.3007);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_730.setTransform(186.0823,639.8394,0.3437,0.3437,-122.9972);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_731.setTransform(186.0823,639.8394,0.3437,0.3437,-122.9972);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_732.setTransform(429.5308,667.6823,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_733.setTransform(429.0314,667.8229,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_734.setTransform(417.0671,673.5079,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_735.setTransform(417.0671,673.5079,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_736.setTransform(405.698,677.4417,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_737.setTransform(405.698,677.4417,1.339,1.0585,0,155.5667,-15.7205);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_738.setTransform(348.2068,559.3641,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_739.setTransform(347.9344,559.8057,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_740.setTransform(339.1802,569.7468,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_741.setTransform(339.1802,569.7468,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_742.setTransform(332.2734,579.597,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_743.setTransform(332.2734,579.597,1.339,1.0585,0,-49.613,-58.3279);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_744.setTransform(379.1093,620.8338,0.4513,0.4513,-127.0233);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_745.setTransform(379.1093,620.8338,0.4513,0.4513,-127.0233);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_746.setTransform(141.3409,639.8915,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_747.setTransform(140.9933,639.6574,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_748.setTransform(131.2399,635.2592,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_749.setTransform(131.2399,635.2592,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_750.setTransform(122.8762,630.3124,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_751.setTransform(122.8762,630.3124,1.0815,0.855,0,-154.7493,33.9676);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_752.setTransform(165.5502,533.198,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_753.setTransform(165.1359,533.261,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_754.setTransform(154.4384,533.0636,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_755.setTransform(154.4384,533.0636,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_756.setTransform(144.7623,533.9566,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_757.setTransform(144.7623,533.9566,1.0815,0.855,0,0.0736,-8.6385);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_758.setTransform(143.7936,584.3327,0.3646,0.3646,-77.3411);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_759.setTransform(143.7936,584.3327,0.3646,0.3646,-77.3411);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_760.setTransform(526.7408,274.4013,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_761.setTransform(526.8146,274.7046,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_762.setTransform(529.9747,282.0193,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_763.setTransform(529.9747,282.0193,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_764.setTransform(532.095,288.9387,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_765.setTransform(532.095,288.9387,0.8055,0.6367,0,67.6111,-103.6709);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_766.setTransform(459.9368,321.111,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_767.setTransform(460.1964,321.2843,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_768.setTransform(465.9846,326.7606,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_769.setTransform(465.9846,326.7606,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_770.setTransform(471.7578,331.1244,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_771.setTransform(471.7578,331.1244,0.8055,0.6367,0,-137.5641,-146.2804);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_772.setTransform(497.5972,303.7017,0.2715,0.2715,145.0238);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_773.setTransform(497.5972,303.7017,0.2715,0.2715,145.0238);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_774.setTransform(600.0583,167.6722,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_775.setTransform(600.4041,167.8626,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_776.setTransform(609.9256,171.1681,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_777.setTransform(609.9256,171.1681,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_778.setTransform(618.1894,175.1053,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_779.setTransform(618.1894,175.1053,1.0188,0.8055,0,20.1274,-151.1594);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_780.setTransform(586.3619,269.7153,1.0188,0.8054,0,174.9526,166.236);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_781.setTransform(586.7454,269.6214,1.0188,0.8054,0,174.9526,166.236);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_782.setTransform(596.7988,268.9063,1.0188,0.8054,0,174.9526,166.236);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_783.setTransform(596.7988,268.9063,1.0188,0.8054,0,174.9526,166.236);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_784.setTransform(605.8021,267.2541,1.0188,0.8054,0,174.9526,166.236);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_785.setTransform(605.8021,267.2541,1.0188,0.8054,0,174.9526,166.236);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_786.setTransform(602.3393,219.7866,0.3435,0.3435,97.5336);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_787.setTransform(602.3393,219.7866,0.3435,0.3435,97.5336);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_788.setTransform(506.8075,226.2293,1.0816,0.855,0,94.114,-77.1698);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_789.setTransform(506.7144,226.6379,1.0816,0.855,0,94.114,-77.1698);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_790.setTransform(506.1293,237.3213,1.0816,0.855,0,94.114,-77.1698);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_791.setTransform(506.1293,237.3213,1.0816,0.855,0,94.114,-77.1698);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_792.setTransform(504.5314,246.9064,1.0816,0.855,0,94.114,-77.1698);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_793.setTransform(504.5314,246.9064,1.0816,0.855,0,94.114,-77.1698);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_794.setTransform(398.5667,242.1227,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_795.setTransform(398.7748,242.4865,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_796.setTransform(402.4481,252.5357,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_797.setTransform(402.4481,252.5357,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_798.setTransform(406.77,261.239,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_799.setTransform(406.77,261.239,1.0816,0.855,0,-111.0592,-119.774);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_800.setTransform(454.152,243.8079,0.3646,0.3646,171.5288);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_801.setTransform(454.152,243.8079,0.3646,0.3646,171.5288);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_802.setTransform(708.8592,216.2453,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_803.setTransform(709.0837,216.5703,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_804.setTransform(716.1307,223.7859,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_805.setTransform(716.1307,223.7859,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_806.setTransform(721.7694,231.0048,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_807.setTransform(721.7694,231.0048,1.0195,0.8059,0,46.6571,-124.6281);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_808.setTransform(650.9449,301.6206,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_809.setTransform(651.3302,301.7078,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_810.setTransform(660.6509,305.5606,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_811.setTransform(660.6509,305.5606,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_812.setTransform(669.4503,308.1051,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_813.setTransform(669.4503,308.1051,1.0195,0.806,0,-158.5197,-167.2375);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_814.setTransform(687.572,264.0452,0.3437,0.3437,124.0696);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_815.setTransform(687.572,264.0452,0.3437,0.3437,124.0696);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_816.setTransform(618.2989,29.1465,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_817.setTransform(618.623,29.5517,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_818.setTransform(628.521,38.3545,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_819.setTransform(628.521,38.3545,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_820.setTransform(636.5743,47.2917,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_821.setTransform(636.5743,47.2917,1.339,1.0585,0,42.6305,-128.6563);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_822.setTransform(550.3099,146.2257,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_823.setTransform(550.8228,146.3045,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_824.setTransform(563.3896,150.4925,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_825.setTransform(563.3896,150.4925,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_826.setTransform(575.1527,153.0146,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_827.setTransform(575.1527,153.0146,1.339,1.0585,0,-162.549,-171.2641);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_828.setTransform(594.8348,93.8337,0.4514,0.4514,120.0389);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_829.setTransform(594.8348,93.8337,0.4514,0.4514,120.0389);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_830.setTransform(704.9954,305.379,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_831.setTransform(704.9152,305.7904,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_832.setTransform(704.6662,316.4868,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_833.setTransform(704.6662,316.4868,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_834.setTransform(703.3703,326.1174,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_835.setTransform(703.3703,326.1174,1.0816,0.855,0,92.3146,-78.9708);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_836.setTransform(597.288,324.7366,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_837.setTransform(597.5074,325.0936,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_838.setTransform(601.4947,335.0221,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_839.setTransform(601.4947,335.0221,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_840.setTransform(606.088,343.5851,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_841.setTransform(606.088,343.5851,1.0815,0.855,0,-112.8593,-121.5754);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_842.setTransform(652.9426,324.6278,0.3646,0.3646,169.7275);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_843.setTransform(652.9426,324.6278,0.3646,0.3646,169.7275);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_844.setTransform(800.6542,263.5967,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_845.setTransform(800.8022,263.3219,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_846.setTransform(803.3439,255.7699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_847.setTransform(803.3439,255.7699,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_848.setTransform(806.3945,249.2073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_849.setTransform(806.3945,249.2073,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_850.setTransform(881.5366,273.6257,0.8055,0.6367,0,84.407,75.6921);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_851.setTransform(881.4595,273.3232,0.8055,0.6367,0,84.407,75.6921);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_852.setTransform(880.8186,265.3805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_853.setTransform(880.8186,265.3805,0.8055,0.6367,0,84.407,75.6921);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_854.setTransform(879.4448,258.2749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_855.setTransform(879.4448,258.2749,0.8055,0.6367,0,84.407,75.6921);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_856.setTransform(841.9659,261.2737,0.2715,0.2715,6.9916);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_857.setTransform(841.9659,261.2737,0.2715,0.2715,6.9916);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_858.setTransform(674.7055,294.0903,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_859.setTransform(674.5758,293.7174,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_860.setTransform(669.7075,284.892,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_861.setTransform(669.7075,284.892,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_862.setTransform(666.1967,276.4381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_863.setTransform(666.1967,276.4381,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_864.setTransform(753.2416,227.2791,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_865.setTransform(752.8936,227.0925,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_866.setTransform(744.9406,220.9009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_867.setTransform(744.9406,220.9009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_868.setTransform(737.1416,216.1082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_869.setTransform(737.1416,216.1082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_870.setTransform(707.9346,253.5961,0.3434,0.3434,-40.4933);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_871.setTransform(707.9346,253.5961,0.3434,0.3434,-40.4933);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_872.setTransform(783.216,312.8214,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_873.setTransform(783.5585,312.5798,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_874.setTransform(791.1383,305.0283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_875.setTransform(791.1383,305.0283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_876.setTransform(798.7366,298.9707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_877.setTransform(798.7366,298.9707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_878.setTransform(874.4084,373.3553,1.0816,0.855,0,110.9103,102.1956);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_879.setTransform(874.4969,372.9456,1.0816,0.855,0,110.9103,102.1956);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_880.setTransform(878.4862,363.0174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_881.setTransform(878.4862,363.0174,1.0816,0.855,0,110.9103,102.1956);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_882.setTransform(881.0931,353.6559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_883.setTransform(881.0931,353.6559,1.0816,0.855,0,110.9103,102.1956);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_884.setTransform(834.1366,334.8662,0.3646,0.3646,33.4985);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_885.setTransform(834.1366,334.8662,0.3646,0.3646,33.4985);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_886.setTransform(626.3494,185.065,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_887.setTransform(626.3999,184.6732,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_888.setTransform(625.9854,174.5958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_889.setTransform(625.9854,174.5958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_890.setTransform(626.6202,165.4577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_891.setTransform(626.6202,165.4577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_892.setTransform(726.547,160.3348,1.0195,0.806,0,63.4524,54.7358);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_893.setTransform(726.3189,160.0123,1.0195,0.806,0,63.4524,54.7358);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_894.setTransform(721.966,150.9142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_895.setTransform(721.966,150.9142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_896.setTransform(717.1256,143.1374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_897.setTransform(717.1256,143.1374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_898.setTransform(674.2036,163.6985,0.3437,0.3437,-13.9579);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_899.setTransform(674.2036,163.6985,0.3437,0.3437,-13.9579);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_900.setTransform(568.5535,384.8207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_901.setTransform(568.5834,384.3027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_902.setTransform(567.1109,371.1383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_903.setTransform(567.1109,371.1383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_904.setTransform(567.0999,359.1077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_905.setTransform(567.0999,359.1077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_906.setTransform(697.4504,343.154,1.339,1.0585,0,59.4218,50.708);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_907.setTransform(697.1218,342.7524,1.339,1.0585,0,59.4218,50.708);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_908.setTransform(690.5794,331.2343,1.339,1.0585,0,59.4218,50.708);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_909.setTransform(690.5794,331.2343,1.339,1.0585,0,59.4218,50.708);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_910.setTransform(683.5205,321.4923,1.339,1.0585,0,59.4218,50.708);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_911.setTransform(683.5205,321.4923,1.339,1.0585,0,59.4218,50.708);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_912.setTransform(629.2079,352.3722,0.4514,0.4514,-17.9854);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_913.setTransform(629.2079,352.3722,0.4514,0.4514,-17.9854);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_914.setTransform(688.783,121.3355,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_915.setTransform(689.1177,121.0833,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_916.setTransform(696.4566,113.2973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_917.setTransform(696.4566,113.2973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_918.setTransform(703.8609,107.0038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_919.setTransform(703.8609,107.0038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_920.setTransform(781.8626,179.0435,1.0816,0.855,0,109.1091,100.3939);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_921.setTransform(781.9383,178.6312,1.0816,0.855,0,109.1091,100.3939);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_922.setTransform(785.6134,168.5827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_923.setTransform(785.6134,168.5827,1.0816,0.855,0,109.1091,100.3939);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_924.setTransform(787.9246,159.1442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_925.setTransform(787.9246,159.1442,1.0816,0.855,0,109.1091,100.3939);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_926.setTransform(740.4384,141.8921,0.3646,0.3646,31.6983);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_927.setTransform(740.4384,141.8921,0.3646,0.3646,31.6983);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_928.setTransform(468.7455,620.2935,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_929.setTransform(468.6655,620.5952,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_930.setTransform(467.9519,628.5313,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_931.setTransform(467.9519,628.5313,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_932.setTransform(466.5131,635.6237,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_933.setTransform(466.5131,635.6237,0.8055,0.6367,0,96.1147,-75.1666);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_934.setTransform(387.7557,629.2919,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_935.setTransform(387.9012,629.5681,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_936.setTransform(390.3736,637.1432,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_937.setTransform(390.3736,637.1432,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_938.setTransform(393.3639,643.7335,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_939.setTransform(393.3639,643.7335,0.8055,0.6367,0,-109.0559,-117.7709);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_940.setTransform(429.1804,632.0315,0.2715,0.2715,173.5332);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_941.setTransform(429.1804,632.0315,0.2715,0.2715,173.5332);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_942.setTransform(584.2253,561.3067,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_943.setTransform(584.4383,561.6391,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_944.setTransform(591.2274,569.0884,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_945.setTransform(591.2274,569.0884,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_946.setTransform(596.61,576.4925,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_947.setTransform(596.61,576.4925,1.0188,0.8054,0,48.6352,-122.6502);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_948.setTransform(523.346,644.5296,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_949.setTransform(523.7278,644.63,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_950.setTransform(532.9037,648.7998,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_951.setTransform(532.9037,648.7998,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_952.setTransform(541.6042,651.645,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_953.setTransform(541.6042,651.645,1.0188,0.8054,0,-156.5423,-165.257);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_954.setTransform(561.2979,608.3313,0.3434,0.3434,126.044);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_955.setTransform(561.2979,608.3313,0.3434,0.3434,126.044);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_956.setTransform(474.3274,568.4145,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_957.setTransform(474.0506,568.7291,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_958.setTransform(468.4375,577.8374,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_959.setTransform(468.4375,577.8374,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_960.setTransform(462.4587,585.4973,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_961.setTransform(462.4587,585.4973,1.0815,0.855,0,122.6237,-48.6608);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_962.setTransform(371.6517,530.6737,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_963.setTransform(371.6609,531.0927,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_964.setTransform(370.0925,541.6769,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_965.setTransform(370.0925,541.6769,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_966.setTransform(369.7365,551.388,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_967.setTransform(369.7365,551.388,1.0816,0.855,0,-82.5556,-91.2659);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_968.setTransform(419.6112,558.6943,0.3646,0.3646,-159.9649);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_969.setTransform(419.6112,558.6943,0.3646,0.3646,-159.9649);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_970.setTransform(656.6045,656.0219,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_971.setTransform(656.6467,656.4148,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_972.setTransform(659.3955,666.119,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_973.setTransform(659.3955,666.119,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_974.setTransform(660.9052,675.1539,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_975.setTransform(660.9052,675.1539,1.0195,0.806,0,75.1647,-96.1205);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_976.setTransform(564.9221,703.4402,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_977.setTransform(565.219,703.7008,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_978.setTransform(571.5707,711.5353,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_979.setTransform(571.5707,711.5353,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_980.setTransform(578.0887,717.9713,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_981.setTransform(578.0887,717.9713,1.0195,0.806,0,-130.0111,-138.7281);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_982.setTransform(615.03,687.8611,0.3437,0.3437,152.5794);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_983.setTransform(615.03,687.8611,0.3437,0.3437,152.5794);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_984.setTransform(666.2759,448.3818,1.339,1.0585,0,71.138,-100.1485);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_985.setTransform(666.3674,448.8925,1.339,1.0585,0,71.138,-100.1485);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_986.setTransform(670.8639,461.3523,1.339,1.0585,0,71.138,-100.1485);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_987.setTransform(670.8639,461.3523,1.339,1.0585,0,71.138,-100.1485);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_988.setTransform(673.6752,473.0497,1.339,1.0585,0,71.138,-100.1485);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_989.setTransform(673.6752,473.0497,1.339,1.0585,0,71.138,-100.1485);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_990.setTransform(550.6258,518.9095,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_991.setTransform(551.0388,519.2235,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_992.setTransform(560.0829,528.9015,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_993.setTransform(560.0829,528.9015,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_994.setTransform(569.2159,536.732,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_995.setTransform(569.2159,536.732,1.339,1.0585,0,-134.0404,-142.7561);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_996.setTransform(614.8217,493.9085,0.4514,0.4514,148.5506);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_997.setTransform(614.8217,493.9085,0.4514,0.4514,148.5506);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_998.setTransform(610.7114,732.5731,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_999.setTransform(610.4446,732.8964,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1000.setTransform(605.1201,742.1768,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1001.setTransform(605.1201,742.1768,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1002.setTransform(599.3846,750.0209,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1003.setTransform(599.3846,750.0209,1.0815,0.855,0,120.8231,-50.4606);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1004.setTransform(506.8455,698.154,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1005.setTransform(506.8679,698.5725,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1006.setTransform(505.633,709.2004,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1007.setTransform(505.633,709.2004,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1008.setTransform(505.5824,718.9176,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1009.setTransform(505.5824,718.9176,1.0816,0.855,0,-84.3537,-93.0675);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1010.setTransform(555.6784,724.6212,0.3646,0.3646,-161.7675);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1011.setTransform(555.6784,724.6212,0.3646,0.3646,-161.7675);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1012.setTransform(284.5252,348.5567,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1013.setTransform(284.3156,348.3255,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1014.setTransform(278.0469,343.4067,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1015.setTransform(278.0469,343.4067,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1016.setTransform(272.8807,338.3389,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1017.setTransform(272.8807,338.3389,0.8055,0.6367,0,-140.9019,47.8148);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1018.setTransform(320.9164,275.8712,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1019.setTransform(320.6056,275.8429,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1020.setTransform(312.9051,273.794,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1021.setTransform(312.9051,273.794,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1022.setTransform(305.7488,272.7155,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1023.setTransform(305.7488,272.7155,0.8055,0.6367,0,13.9204,5.205);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1024.setTransform(296.0872,308.9617,0.2715,0.2715,-63.4897);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1025.setTransform(296.0872,308.9617,0.2715,0.2715,-63.4897);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1026.setTransform(271.1653,477.5066,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1027.setTransform(270.7705,477.5044,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1028.setTransform(260.8259,479.1449,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1029.setTransform(260.8259,479.1449,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1030.setTransform(251.6848,479.63,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1031.setTransform(251.6848,479.63,1.0188,0.8054,0,171.6174,0.3278);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1032.setTransform(234.4957,381.2307,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1033.setTransform(234.2036,381.4962,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1034.setTransform(225.7108,386.9236,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1035.setTransform(225.7108,386.9236,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1036.setTransform(218.5879,392.6731,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1037.setTransform(218.5879,392.6731,1.0188,0.8054,0,-33.5612,-42.2758);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1038.setTransform(244.1479,432.6967,0.3434,0.3434,-110.9708);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1039.setTransform(244.1479,432.6967,0.3434,0.3434,-110.9708);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1040.setTransform(325.0466,381.5889,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1041.setTransform(324.9333,381.1854,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1042.setTransform(320.3483,371.5183,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1043.setTransform(320.3483,371.5183,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1044.setTransform(317.1775,362.3328,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1045.setTransform(317.1775,362.3328,1.0816,0.855,0,-114.3969,74.3204);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1046.setTransform(412.5436,315.936,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1047.setTransform(412.1871,315.7157,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1048.setTransform(404.1621,308.6389,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1049.setTransform(404.1621,308.6389,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1050.setTransform(396.2095,303.0544,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1051.setTransform(396.2095,303.0544,1.0816,0.855,0,40.4263,31.7121);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1052.setTransform(362.8544,340.9068,0.3646,0.3646,-36.9845);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1053.setTransform(362.8544,340.9068,0.3646,0.3646,-36.9845);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1054.setTransform(152.2915,486.7072,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1055.setTransform(151.9391,486.5287,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1056.setTransform(142.3024,483.5525,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1057.setTransform(142.3024,483.5525,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1058.setTransform(133.9016,479.9011,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1059.setTransform(133.9016,479.9011,1.0195,0.806,0,-161.8566,26.858);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1060.setTransform(162.4591,383.9796,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1061.setTransform(162.0788,384.0868,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1062.setTransform(152.0494,385.15,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1063.setTransform(152.0494,385.15,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1064.setTransform(143.1025,387.1139,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1065.setTransform(143.1025,387.1139,1.0195,0.806,0,-7.0315,-15.7463);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1066.setTransform(148.0718,434.4292,0.3437,0.3437,-84.4484);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1067.setTransform(148.0718,434.4292,0.3437,0.3437,-84.4484);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1068.setTransform(321.2664,607.8409,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1069.setTransform(320.7882,607.6396,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1070.setTransform(307.8885,604.6296,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1071.setTransform(307.8885,604.6296,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1072.setTransform(296.5456,600.6209,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1073.setTransform(296.5456,600.6209,1.339,1.0585,0,-165.8836,22.8295);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1074.setTransform(325.0619,472.482,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1075.setTransform(324.5737,472.6575,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1076.setTransform(311.5322,474.9761,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1077.setTransform(311.5322,474.9761,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1078.setTransform(299.992,478.3748,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1079.setTransform(299.992,478.3748,1.339,1.0585,0,-11.0603,-19.7759);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1080.setTransform(310.8747,539.9092,0.4514,0.4514,-88.4736);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1081.setTransform(310.8747,539.9092,0.4514,0.4514,-88.4736);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1082.setTransform(113.1455,406.5001,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1083.setTransform(113.0196,406.1004,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1084.setTransform(108.133,396.5819,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1085.setTransform(108.133,396.5819,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1086.setTransform(104.675,387.5006,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1087.setTransform(104.675,387.5006,1.0816,0.855,0,-116.1942,72.5198);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1088.setTransform(198.4367,338.2115,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1089.setTransform(198.0734,338.0025,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1090.setTransform(189.8302,331.1817,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1091.setTransform(189.8302,331.1817,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1092.setTransform(181.7062,325.8502,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1093.setTransform(181.7062,325.8502,1.0815,0.855,0,38.6271,29.9105);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1094.setTransform(149.7307,364.7175,0.3646,0.3646,-38.7883);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1095.setTransform(149.7307,364.7175,0.3646,0.3646,-38.7883);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1096.setTransform(462.0119,301.7568,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1097.setTransform(461.7027,301.7146,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1098.setTransform(453.7388,301.983,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1099.setTransform(453.7388,301.983,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1100.setTransform(446.5231,301.4279,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1101.setTransform(446.5231,301.4279,0.8055,0.6367,0,179.0526,7.7648);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1102.setTransform(443.2626,222.5445,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1103.setTransform(443.0065,222.7228,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1104.setTransform(435.7932,226.1085,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1105.setTransform(435.7932,226.1085,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1106.setTransform(429.621,229.8869,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1107.setTransform(429.621,229.8869,0.8055,0.6367,0,-26.1242,-34.8389);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1108.setTransform(445.4542,263.9473,0.2715,0.2715,-103.5333);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1109.setTransform(445.4542,263.9473,0.2715,0.2715,-103.5333);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1110.setTransform(534.7731,409.097,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1111.setTransform(534.4694,409.3493,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1112.setTransform(527.912,417.0034,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1113.setTransform(527.912,417.0034,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1114.setTransform(521.2263,423.2559,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1115.setTransform(521.2263,423.2559,1.0188,0.8054,0,131.5678,-39.7172);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1116.setTransform(444.8299,358.9389,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1117.setTransform(444.7772,359.3302,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1118.setTransform(441.7684,368.9495,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1119.setTransform(441.7684,368.9495,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1120.setTransform(440.0156,377.9339,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1121.setTransform(440.0156,377.9339,1.0188,0.8054,0,-73.6092,-82.3262);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1122.setTransform(485.2186,392.1555,0.3434,0.3434,-151.0253);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1123.setTransform(485.2186,392.1555,0.3434,0.3434,-151.0253);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1124.setTransform(514.3893,300.8712,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1125.setTransform(514.043,300.6352,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1126.setTransform(504.3132,296.1852,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1127.setTransform(504.3132,296.1852,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1128.setTransform(495.9759,291.1941,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1129.setTransform(495.9759,291.1941,1.0815,0.855,0,-154.4456,34.2725);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1130.setTransform(539.0879,194.4237,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1131.setTransform(538.6732,194.4844,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1132.setTransform(527.9767,194.2303,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1133.setTransform(527.9767,194.2303,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1134.setTransform(518.2959,195.0719,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1135.setTransform(518.2959,195.0719,1.0816,0.855,0,0.3773,-8.3343);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1136.setTransform(517.1421,245.4207,0.3646,0.3646,-77.034);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1137.setTransform(517.1421,245.4207,0.3646,0.3646,-77.034);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1138.setTransform(449.651,492.5955,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1139.setTransform(449.2663,492.6857,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1140.setTransform(439.9742,496.6076,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1141.setTransform(439.9742,496.6076,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1142.setTransform(431.1937,499.2174,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1143.setTransform(431.1937,499.2174,1.0195,0.806,0,158.0977,-13.1881);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1144.setTransform(391.4737,407.4114,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1145.setTransform(391.2517,407.7381,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1146.setTransform(384.2582,415.0055,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1147.setTransform(384.2582,415.0055,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1148.setTransform(378.6731,422.2659,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1149.setTransform(378.6731,422.2659,1.0195,0.806,0,-47.0807,-55.7957);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1150.setTransform(412.9236,455.2198,0.3437,0.3437,-124.4902);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1151.setTransform(412.9236,455.2198,0.3437,0.3437,-124.4902);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1152.setTransform(656.9299,476.7174,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1153.setTransform(656.4343,476.871,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1154.setTransform(644.6225,482.8662,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1155.setTransform(644.6225,482.8662,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1156.setTransform(633.36,487.0953,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1157.setTransform(633.36,487.0953,1.339,1.0585,0,154.0714,-17.2158);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1158.setTransform(572.9267,370.5546,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1159.setTransform(572.6658,371.0032,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1160.setTransform(564.174,381.1694,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1161.setTransform(564.174,381.1694,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1162.setTransform(557.5265,391.1965,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1163.setTransform(557.5265,391.1965,1.339,1.0585,0,-51.109,-59.8229);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1164.setTransform(605.3581,431.2231,0.4514,0.4514,-128.5188);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1165.setTransform(605.3581,431.2231,0.4514,0.4514,-128.5188);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1166.setTransform(368.1546,456.4457,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1167.setTransform(367.801,456.2207,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1168.setTransform(357.936,452.0789,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1169.setTransform(357.936,452.0789,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1170.setTransform(349.4457,447.3524,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1171.setTransform(349.4457,447.3524,1.0815,0.855,0,-156.2439,32.4699);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1172.setTransform(389.5328,349.2532,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1173.setTransform(389.1202,349.327,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1174.setTransform(378.4215,349.409,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1175.setTransform(378.4215,349.409,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1176.setTransform(368.7723,350.5544,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1177.setTransform(368.7723,350.5544,1.0815,0.855,0,-1.4194,-10.1348);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1178.setTransform(369.1671,400.8819,0.3646,0.3646,-78.8359);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1179.setTransform(369.1671,400.8819,0.3646,0.3646,-78.8359);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1180.setTransform(684.4042,537.1467,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1181.setTransform(684.5522,536.8719,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1182.setTransform(687.0939,529.3199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1183.setTransform(687.0939,529.3199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1184.setTransform(690.1445,522.7573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1185.setTransform(690.1445,522.7573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1186.setTransform(765.2866,547.1757,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1187.setTransform(765.2095,546.8732,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1188.setTransform(764.5686,538.9305,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1189.setTransform(764.5686,538.9305,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1190.setTransform(763.1948,531.8249,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1191.setTransform(763.1948,531.8249,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1192.setTransform(725.6159,534.8737,0.2715,0.2715,6.9916);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1193.setTransform(725.6159,534.8737,0.2715,0.2715,6.9916);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1194.setTransform(558.4555,567.6403,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1195.setTransform(558.3258,567.2674,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1196.setTransform(553.4575,558.442,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1197.setTransform(553.4575,558.442,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1198.setTransform(549.9467,549.9881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1199.setTransform(549.9467,549.9881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1200.setTransform(636.9416,500.9791,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1201.setTransform(636.5936,500.7925,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1202.setTransform(628.6406,494.6009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1203.setTransform(628.6406,494.6009,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1204.setTransform(620.8416,489.8082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1205.setTransform(620.8416,489.8082,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1206.setTransform(591.6846,527.2461,0.3434,0.3434,-40.4933);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1207.setTransform(591.6846,527.2461,0.3434,0.3434,-40.4933);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1208.setTransform(666.916,586.4214,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1209.setTransform(667.2585,586.1798,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1210.setTransform(674.8383,578.6283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1211.setTransform(674.8383,578.6283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1212.setTransform(682.4366,572.5707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1213.setTransform(682.4366,572.5707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1214.setTransform(758.1084,646.9053,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1215.setTransform(758.1969,646.4956,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1216.setTransform(762.1862,636.5674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1217.setTransform(762.1862,636.5674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1218.setTransform(764.7931,627.2059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1219.setTransform(764.7931,627.2059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1220.setTransform(717.8866,608.5162,0.3646,0.3646,33.4985);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1221.setTransform(717.8866,608.5162,0.3646,0.3646,33.4985);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1222.setTransform(510.0994,458.765,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1223.setTransform(510.1499,458.3732,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1224.setTransform(509.7354,448.2958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1225.setTransform(509.7354,448.2958,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1226.setTransform(510.3702,439.1577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1227.setTransform(510.3702,439.1577,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1228.setTransform(610.247,433.9848,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1229.setTransform(610.0189,433.6623,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1230.setTransform(605.666,424.5642,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1231.setTransform(605.666,424.5642,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1232.setTransform(600.8256,416.7874,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1233.setTransform(600.8256,416.7874,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1234.setTransform(557.9036,437.3485,0.3437,0.3437,-13.9579);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1235.setTransform(557.9036,437.3485,0.3437,0.3437,-13.9579);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1236.setTransform(452.4035,658.4707,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1237.setTransform(452.4334,657.9527,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1238.setTransform(450.9609,644.7883,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1239.setTransform(450.9609,644.7883,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1240.setTransform(450.9499,632.7577,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1241.setTransform(450.9499,632.7577,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1242.setTransform(581.1504,616.804,1.339,1.0585,0,59.4218,50.708);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1243.setTransform(580.8218,616.4024,1.339,1.0585,0,59.4218,50.708);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1244.setTransform(574.2794,604.8843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1245.setTransform(574.2794,604.8843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1246.setTransform(567.2205,595.1423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1247.setTransform(567.2205,595.1423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1248.setTransform(512.9079,626.0222,0.4514,0.4514,-17.9854);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1249.setTransform(512.9079,626.0222,0.4514,0.4514,-17.9854);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1250.setTransform(572.533,394.9855,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1251.setTransform(572.8677,394.7333,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1252.setTransform(580.2066,386.9473,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1253.setTransform(580.2066,386.9473,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1254.setTransform(587.6109,380.6538,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1255.setTransform(587.6109,380.6538,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1256.setTransform(665.5626,452.5935,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1257.setTransform(665.6383,452.1812,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1258.setTransform(669.3134,442.1327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1259.setTransform(669.3134,442.1327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1260.setTransform(671.6246,432.6942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1261.setTransform(671.6246,432.6942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1262.setTransform(624.1384,415.4421,0.3646,0.3646,31.6983);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1263.setTransform(624.1384,415.4421,0.3646,0.3646,31.6983);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1264.setTransform(553.2042,401.0467,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1265.setTransform(553.3522,400.7719,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1266.setTransform(555.8939,393.2199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1267.setTransform(555.8939,393.2199,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1268.setTransform(558.9445,386.6573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1269.setTransform(558.9445,386.6573,0.8055,0.6367,0,-70.4204,118.2963);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1270.setTransform(634.0866,411.0757,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1271.setTransform(634.0095,410.7732,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1272.setTransform(633.3686,402.8305,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1273.setTransform(633.3686,402.8305,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1274.setTransform(631.9948,395.7249,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1275.setTransform(631.9948,395.7249,0.8055,0.6367,0,84.407,75.6921);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1276.setTransform(594.4659,398.6737,0.2715,0.2715,6.9916);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1277.setTransform(594.4659,398.6737,0.2715,0.2715,6.9916);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1278.setTransform(427.3055,431.4403,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1279.setTransform(427.1758,431.0674,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1280.setTransform(422.3075,422.242,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1281.setTransform(422.3075,422.242,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1282.setTransform(418.7967,413.7881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1283.setTransform(418.7967,413.7881,1.0189,0.8055,0,-117.8996,70.8134);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1284.setTransform(505.7416,364.7291,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1285.setTransform(505.3936,364.5425,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1286.setTransform(497.4406,358.3509,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1287.setTransform(497.4406,358.3509,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1288.setTransform(489.6416,353.5582,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1289.setTransform(489.6416,353.5582,1.0189,0.8054,0,36.9227,28.2062);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1290.setTransform(460.4346,391.0461,0.3434,0.3434,-40.4933);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1291.setTransform(460.4346,391.0461,0.3434,0.3434,-40.4933);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1292.setTransform(535.716,450.2214,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1293.setTransform(536.0585,449.9798,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1294.setTransform(543.6383,442.4283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1295.setTransform(543.6383,442.4283,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1296.setTransform(551.2366,436.3707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1297.setTransform(551.2366,436.3707,1.0816,0.855,0,-43.9132,144.8023);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1298.setTransform(626.9584,510.7053,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1299.setTransform(627.0469,510.2956,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1300.setTransform(631.0362,500.3674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1301.setTransform(631.0362,500.3674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1302.setTransform(633.6431,491.0059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1303.setTransform(633.6431,491.0059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1304.setTransform(586.6866,472.3162,0.3646,0.3646,33.4985);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1305.setTransform(586.6866,472.3162,0.3646,0.3646,33.4985);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1306.setTransform(378.8994,322.515,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1307.setTransform(378.9499,322.1232,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1308.setTransform(378.5354,312.0458,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1309.setTransform(378.5354,312.0458,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1310.setTransform(379.1702,302.9077,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1311.setTransform(379.1702,302.9077,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1312.setTransform(478.997,297.7348,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1313.setTransform(478.7689,297.4123,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1314.setTransform(474.416,288.3142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1315.setTransform(474.416,288.3142,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1316.setTransform(469.5756,280.5374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1317.setTransform(469.5756,280.5374,1.0195,0.806,0,63.4524,54.7358);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1318.setTransform(426.7036,301.1485,0.3437,0.3437,-13.9579);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1319.setTransform(426.7036,301.1485,0.3437,0.3437,-13.9579);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1320.setTransform(321.2035,522.2207,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1321.setTransform(321.2334,521.7027,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1322.setTransform(319.7609,508.5383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1323.setTransform(319.7609,508.5383,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1324.setTransform(319.7499,496.5077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1325.setTransform(319.7499,496.5077,1.339,1.0585,0,-95.398,93.3128);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1326.setTransform(450.0004,480.604,1.339,1.0585,0,59.4218,50.708);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1327.setTransform(449.6718,480.2024,1.339,1.0585,0,59.4218,50.708);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1328.setTransform(443.1294,468.6843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1329.setTransform(443.1294,468.6843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1330.setTransform(436.0705,458.9423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1331.setTransform(436.0705,458.9423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1332.setTransform(381.7079,489.8222,0.4514,0.4514,-17.9854);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1333.setTransform(381.7079,489.8222,0.4514,0.4514,-17.9854);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1334.setTransform(441.333,258.8355,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1335.setTransform(441.6677,258.5833,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1336.setTransform(449.0066,250.7973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1337.setTransform(449.0066,250.7973,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1338.setTransform(456.4109,244.5038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1339.setTransform(456.4109,244.5038,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1340.setTransform(534.3626,316.4935,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1341.setTransform(534.4383,316.0812,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1342.setTransform(538.1134,306.0327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1343.setTransform(538.1134,306.0327,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1344.setTransform(540.4246,296.5942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1345.setTransform(540.4246,296.5942,1.0816,0.855,0,109.1091,100.3939);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1346.setTransform(492.9384,279.2421,0.3646,0.3646,31.6983);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1347.setTransform(492.9384,279.2421,0.3646,0.3646,31.6983);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1348.setTransform(599.7042,482.9818,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1349.setTransform(599.8522,482.7069,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1350.setTransform(602.3939,475.1546,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1351.setTransform(602.3939,475.1546,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1352.setTransform(605.4445,468.5917,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1353.setTransform(605.4445,468.5917,0.8055,0.6368,0,-70.4178,118.2952);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1354.setTransform(680.5776,492.8757,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1355.setTransform(680.5004,492.5732,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1356.setTransform(679.8596,484.6305,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1357.setTransform(679.8596,484.6305,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1358.setTransform(678.4858,477.5249,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1359.setTransform(678.4858,477.5249,0.8055,0.6368,0,84.4072,75.6921);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1360.setTransform(640.9747,480.5792,0.2715,0.2715,6.9912);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1361.setTransform(640.9747,480.5792,0.2715,0.2715,6.9912);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1362.setTransform(473.8055,513.3488,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1363.setTransform(473.6758,512.9759,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1364.setTransform(468.8075,504.1503,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1365.setTransform(468.8075,504.1503,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1366.setTransform(465.2967,495.6962,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1367.setTransform(465.2967,495.6962,1.0189,0.8055,0,-117.8996,70.8137);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1368.setTransform(552.2916,446.6382,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1369.setTransform(551.9436,446.4516,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1370.setTransform(543.9906,440.2599,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1371.setTransform(543.9906,440.2599,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1372.setTransform(536.1916,435.4673,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1373.setTransform(536.1916,435.4673,1.0189,0.8055,0,36.922,28.2062);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1374.setTransform(506.9522,472.9572,0.3435,0.3435,-40.49);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1375.setTransform(506.9522,472.9572,0.3435,0.3435,-40.49);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1376.setTransform(582.2576,532.1305,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1377.setTransform(582.6001,531.8889,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1378.setTransform(590.1801,524.3373,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1379.setTransform(590.1801,524.3373,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1380.setTransform(597.7785,518.2797,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1381.setTransform(597.7785,518.2797,1.0816,0.855,0,-43.9125,144.8028);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#5E00B6").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1382.setTransform(673.4084,592.6053,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#875BB5").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1383.setTransform(673.4969,592.1956,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#5E00B6").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1384.setTransform(677.4862,582.2674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#875BB5").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1385.setTransform(677.4862,582.2674,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#5E00B6").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1386.setTransform(680.0931,572.9059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#875BB5").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1387.setTransform(680.0931,572.9059,1.0816,0.855,0,110.9103,102.1956);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#5E00B6").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1388.setTransform(633.1866,554.1662,0.3646,0.3646,33.4985);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#875BB5").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1389.setTransform(633.1866,554.1662,0.3646,0.3646,33.4985);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1390.setTransform(425.4585,404.415,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1391.setTransform(425.509,404.0232,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1392.setTransform(425.0944,393.9458,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1393.setTransform(425.0944,393.9458,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1394.setTransform(425.7293,384.8077,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1395.setTransform(425.7293,384.8077,1.0195,0.806,0,-91.3712,97.3399);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#129800").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1396.setTransform(525.547,379.6933,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#76CF68").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1397.setTransform(525.3189,379.3707,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#129800").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1398.setTransform(520.966,370.2725,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#76CF68").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1399.setTransform(520.966,370.2725,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#129800").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1400.setTransform(516.1256,362.4956,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#76CF68").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1401.setTransform(516.1256,362.4956,1.0195,0.806,0,63.4524,54.7363);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#129800").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1402.setTransform(473.2536,382.9985,0.3437,0.3437,-13.9579);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#76CF68").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1403.setTransform(473.2536,382.9985,0.3437,0.3437,-13.9579);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1404.setTransform(367.7035,604.1617,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1405.setTransform(367.7334,603.6437,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1406.setTransform(366.2609,590.4792,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1407.setTransform(366.2609,590.4792,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1408.setTransform(366.2499,578.4486,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1409.setTransform(366.2499,578.4486,1.339,1.0585,0,-95.3988,93.3128);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#EE008C").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1410.setTransform(496.4504,562.504,1.339,1.0585,0,59.4218,50.708);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#E975C4").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1411.setTransform(496.1218,562.1024,1.339,1.0585,0,59.4218,50.708);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#EE008C").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1412.setTransform(489.5794,550.5843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#E975C4").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1413.setTransform(489.5794,550.5843,1.339,1.0585,0,59.4218,50.708);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#EE008C").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1414.setTransform(482.5205,540.8423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#E975C4").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1415.setTransform(482.5205,540.8423,1.339,1.0585,0,59.4218,50.708);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#EE008C").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1416.setTransform(428.2079,571.7222,0.4514,0.4514,-17.9854);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#E975C4").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1417.setTransform(428.2079,571.7222,0.4514,0.4514,-17.9854);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1418.setTransform(487.833,340.6855,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1419.setTransform(488.1677,340.4333,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1420.setTransform(495.5066,332.6473,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1421.setTransform(495.5066,332.6473,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1422.setTransform(502.9109,326.3538,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1423.setTransform(502.9109,326.3538,1.0816,0.855,0,-45.7129,143.0017);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#3300CC").ss(3,1,1).p("AgHjYQAHgZAXgMQAXgNAZAIQAYAHANAYQAMAWgHAZIh3GNQgHAYgXANQgXAMgZgHQgTgGgLgO");
	this.shape_1424.setTransform(580.9126,398.4019,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#66CCCC").s().p("AhQEDQgTgGgMgOIAAhIIgHAAIBzl/QAGgZAXgMQAXgNAZAIQAZAHANAYQAMAWgIAZIh2GNQgIAYgWANQgPAIgOAAQgKAAgJgDg");
	this.shape_1425.setTransform(580.9883,397.9897,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#3300CC").ss(3,1,1).p("AgijVQAEgaAVgQQATgQAaAEQAaADAQAVQAQAVgEAaAAiDWQgDAagVAQQgUAQgagEQgagDgPgVQgQgVADga");
	this.shape_1426.setTransform(584.6634,387.941,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#66CCCC").s().p("AgjEMQgagDgQgVQgQgVAEgaIA3maQAEgaAVgQQAUgQAaAEQAZADAQAVQAQAVgDAaIg4GaQgEAagVAQQgQANgUAAIgJgBg");
	this.shape_1427.setTransform(584.6634,387.941,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#3300CC").ss(3,1,1).p("AA/DPQAAAagTATQgSASgaAAQgZAAgTgSQgSgTAAgaIAAmeQAAgaASgSQATgTAZAAQAaAAASATQATASAAAa");
	this.shape_1428.setTransform(586.9746,378.5023,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#66CCCC").s().p("AgsD8QgSgTAAgaIAAmeQAAgaASgSQATgSAZgBQAaABASASQATASAAAaIAAGeQAAAagTATQgSASgaAAQgZAAgTgSg");
	this.shape_1429.setTransform(586.9746,378.5023,1.0816,0.855,0,109.1091,100.3938);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#3300CC").ss(3,1,1).p("AmFpnIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAIsLAAQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAg");
	this.shape_1430.setTransform(539.4829,361.1509,0.3646,0.3646,31.7004);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#66CCCC").s().p("AmFJoQj/AAi1i0Qi0i0AAkAIAAAAQAAj/C0i0QC1i0D/AAIMLAAQD/AAC0C0QC1C0AAD/IAAAAQAAEAi1C0Qi0C0j/AAg");
	this.shape_1431.setTransform(539.4829,361.1509,0.3646,0.3646,31.7004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,905.9,768.1);


(lib.bat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A97B4E").s().p("AhFQXIAPhRQAQhRACADIj17tQDUlQFfESIisb7IBWCSQghBVhnAAQg3AAhKgYg");
	this.shape.setTransform(28.15,107.0654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,214.2);


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
	this.shape.setTransform(81.475,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmA6QgPgHgJgPQgJgPAAgVQAAgcASgSQAUgSAgAAQAaAAAQAIQAPAIAIAQQAIAPAAAXIAAAGIheAAQABALAEAGQAIAIAJAAQAIAAAGgDQAEgDAFgFIAvAEQgMATgPAIQgPAIgcAAQgYAAgOgHgAgRgbQgFAGAAALIAuAAQgCgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_1.setTransform(68.2,27.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvA3QgOgJgEgSIAvgFQADAJAFADQAGAEAHAAQAKAAAFgEQAEgDAAgFQAAgFgFgDQgEgCgQgDQgYgEgKgEQgKgDgGgIQgHgJAAgLQAAgMAHgJQAHgJANgFQAMgEAVAAQAWAAAKADQALAEAHAHQAHAHAFAMIgtAFQgCgGgEgDQgGgEgHAAQgIAAgEADQgDADAAAEQAAAFAEACQAFACAPACQAYADALAFQAMAEAGAIQAGAJAAALQAAALgGAKQgHAKgOAGQgOAGgYAAQghAAgPgKg");
	this.shape_2.setTransform(52.725,27.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmA6QgPgHgIgPQgKgPAAgVQAAgcATgSQASgSAiAAQAZAAAPAIQAQAIAIAQQAIAPAAAXIAAAGIhfAAQABALAGAGQAGAIALAAQAGAAAHgDQAEgDAEgFIAvAEQgKATgPAIQgQAIgcAAQgYAAgOgHgAgRgbQgEAGgCALIAuAAQgBgOgGgGQgGgGgKAAQgKAAgHAJg");
	this.shape_3.setTransform(37.55,27.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZBWIgcg0QgFgLgEgDQgGgDgIAAIgEAAIAABFIg1AAIAAirIBXAAQAZAAANAFQANADAHAMQAJAMgBAQQAAAOgGAKQgGALgLAFQgGAFgMACQAKADAEAEQADABAFAIIAIAKIAaAygAgegPIAWAAIANgCQAFgBAEgFQADgFAAgFQAAgIgGgEQgEgFgOAAIgXAAg");
	this.shape_4.setTransform(21.75,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Rounded
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AnBj5IODAAQAyAAAAAyIAAGPQAAAygyAAIuDAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape_5.setTransform(50,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_6.setTransform(50,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_7.setTransform(50,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AnBD6QgyAAAAgyIAAmPQAAgyAyAAIODAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_8.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Squared
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Anzj5IPnAAIAAHzIvnAAg");
	this.shape_9.setTransform(50,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_10.setTransform(50,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_11.setTransform(50,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AnzD6IAAnzIPnAAIAAHzg");
	this.shape_12.setTransform(50,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_9}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,52);


(lib.Pinata = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFDED").s().p("Ai+AsQhPgTAAgZQAAgZBPgRQBQgSBuAAQBvAABQASQBOARAAAZQAAAZhOATQhQAShvAAQhuAAhQgSg");
	this.shape.setTransform(97.7798,58.501,0.4112,0.5983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342923").s().p("AidB1QhBgxAAhEQAAhDBBgxQBCgwBbAAQBcAABCAwQBCAxAABDQAABEhCAxQhCAwhcAAQhbAAhCgwg");
	this.shape_1.setTransform(86.168,62.8961,0.5486,0.5983);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFD5").s().p("AkFCcQhshAAAhcQAAhbBshAQBthBCYAAQCZAABsBBQBtBAAABbQAABchtBAQhsBBiZAAQiYAAhthBg");
	this.shape_2.setTransform(93.8945,60.6778,0.5507,0.5963,0,-10.7607,-12.737);

	this.instance = new lib.nose();
	this.instance.setTransform(16.9,78.55,1,1,0,0,0,10.6,6.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#725394").s().p("AFcK6Igv0eQAAhcA6hBQA7hBBTAAQBSAAA7BBQA7BBAABcIg3UqQgLBBgkApQgkApgRAEQgQADhGAAQhFAAgrimgAyLKxIgv0eQAAhcA6hBQA7hBBTAAQBSAAA7BBQA7BBAABcIg3UqQgLBBgkApQgkApgRAEQgQADhGAAQhFAAgrimgANbKnIgw0fQAAhcA7hAQA6hCBTAAQBTAAA6BCQA7BAAABcIg2UrQgMBAgkApQgkAqgQAEQgRADhFAAQhGAAgqimgAqMKeIgw0fQAAhcA7hAQA6hCBTAAQBTAAA6BCQA7BAAABcIg2UrQgMBAgkApQgkAqgQAEQgRADhFAAQhGAAgqimg");
	this.shape_3.setTransform(164.675,291.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#725394").s().p("Agdi7IDtFVImfAjg");
	this.shape_4.setTransform(71.075,18.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#725394").s().p("AkDB5IF7l8ICMIGg");
	this.shape_5.setTransform(107.0985,32.9513,1,1,-10.2201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#725394").s().p("AlnD/QhqAAhKhLQhLhLAAhpQAAhpBLhLQBKhKBqAAILPAAQBqAABKBKQBLBLAABpQAABphLBLQhKBLhqAAg");
	this.shape_6.setTransform(67.6717,75.4917,1,1.1805,0,-50.8179,-18.7114);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#725394").s().p("AqxH+QjUAAiViWQiViVAAjTIAAAAQAAjSCViWQCViVDUAAIVjAAQDUAACUCVQCWCWAADSIAAAAQAADTiWCVQiUCWjUAAg");
	this.shape_7.setTransform(168.1247,218.925,1,1.0542,0,-18.452,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#725394").s().p("AlLRxQiKiKAAjCIAA5JQAAjCCKiKQCKiKDBAAQDDAACJCKQCKCKAADCIAAZJQAADCiKCKQiJCKjDAAQjBAAiKiKg");
	this.shape_8.setTransform(90.1,142.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291.1,378.3);


// stage content:
(lib.PracticeCardLOrdunoPerez = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,14,39];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.hat.addEventListener("click", fl_ClickSombrero_0.bind(this));
		
		function fl_ClickSombrero_0()
		{
			this.gotoAndPlay(0);
		}	
		
		this.bat.addEventListener("click", fl_ClickPinata_14.bind(this));
		
		function fl_ClickPinata_14()
		{
			this.gotoAndPlay(14);
		}
		
		this.next_btn.addEventListener("click", restart.bind(this));
		
		function restart()
		{
			this.gotoAndPlay(0);
		}
	}
	this.frame_14 = function() {
		this.stop()
	}
	this.frame_39 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(25).call(this.frame_39).wait(1));

	// credits
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#725394").s().p("Ag1BUIAAgEQArgnAQgZQARgYAAgVQABgPgKgLQgKgKgMAAQgMAAgKAHQgKAIgEANIgFAAQADgXANgLQAMgMAUgBQASABAOANQAOAMAAASQAAAMgHANQgJATgTAWIglAoIApAAIATgBQAFgBAFgDQAEgDADgGIAFAAIgMAgg");
	this.shape.setTransform(995.25,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#725394").s().p("Ag1BUIAAgEQArgnAQgZQARgYABgVQAAgPgKgLQgKgKgMAAQgNAAgJAHQgKAIgEANIgFAAQADgXANgLQAMgMAUgBQASABAOANQAOAMAAASQAAAMgHANQgJATgTAWIglAoIAqAAIASgBQAGgBAEgDQAEgDADgGIAFAAIgMAgg");
	this.shape_1.setTransform(982.75,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#725394").s().p("AgnA6QgNgYAAghQAAgbAIgUQAJgVAOgKQALgIALAAQASAAAQAUQASAYABAoQgBAcgHAVQgJAUgNAJQgNAJgLAAQgYAAgPgcgAgOhGQgIAKgDAWQgDAWAAAVQgBAhAJAWQAHASANAAQAGAAAHgGQAIgFADgPQAFgVAAgkQAAgdgFgTQgEgOgIgGQgFgEgGAAQgIAAgHAHg");
	this.shape_2.setTransform(970.5,100.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#725394").s().p("Ag2BUIAAgEQArgnARgZQASgYAAgVQAAgPgKgLQgKgKgMAAQgMAAgKAHQgKAIgFANIgEAAQADgXANgLQAMgMAUgBQASABAOANQANAMAAASQABAMgHANQgIATgVAWIglAoIArAAIASgBQAGgBAEgDQAEgDADgGIAEAAIgLAgg");
	this.shape_3.setTransform(957.75,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#725394").s().p("AgxBPQgFgFgBgEQAAgGAEgDQAEgDAGAAQAEAAAGACIAHACQADAAAFgDQAEgEAEgLIAIgTIgohTIgGgKIgFgGQgDgCgGgBIAAgFIA0AAIAAAFIgDAAQgFAAgDACQgDADAAADQAAAFAFAIIAaA4IAZg9QACgFAAgFIgBgDIgDgCIgIgBIAAgFIAlAAIAAAFQgEAAgDACIgGAFIgDAJIgtBvQgGARgLAIQgLAIgKAAQgHAAgEgEg");
	this.shape_4.setTransform(939.25,105.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#725394").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_5.setTransform(927.875,102.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#725394").s().p("AAkBTIAAgFIAGAAQAKAAAFgGQACgEAAgOIAAhuIg+CLIgEAAIhAiLIAABuQAAAPADAEQAFAFAJAAIAGAAIAAAFIg5AAIAAgFIAFAAQALAAAFgGQACgEAAgOIAAhrQAAgLgCgFQgCgDgFgDQgEgCgKAAIAAgFIAvAAIA6CBIA7iBIAvAAIAAAFIgFAAQgLAAgEAGQgDAEAAAOIAABrQAAAPADAEQAFAFAKAAIAFAAIAAAFg");
	this.shape_6.setTransform(910.7,100.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#725394").s().p("AgFBIQgFgDgDgGQgCgGAAgMIAAhKIgSAAIAAgEQAHgDAHgGQAHgHAFgIQADgFAEgMIAEAAIAAAkIAaAAIAAAJIgaAAIAABHQAAALADAEQADAEAFAAQAEAAAEgDQAEgCACgFIAFAAQgFAMgIAGQgHAGgJAAQgFAAgFgDg");
	this.shape_7.setTransform(852.575,101.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#725394").s().p("AgnA5IAAgEQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAEg");
	this.shape_8.setTransform(844.925,102.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#725394").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_9.setTransform(831.525,99.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#725394").s().p("Ag6BUIAAgEIADAAQAHAAAFgDQACgBACgDQABgDAAgMIAAhpQAAgLgBgDQgBgDgCgBQgCgCgEAAIgIACIgBgEIAigOIAFAAIAAAaQAJgPAJgFQAHgGAKAAQARAAALANQAOAQAAAaQAAAcgRATQgOAPgUAAQgIAAgHgCQgFgCgGgGIAAAiQAAAMACADQABADADACQAEACAIAAIAAAEgAgDg/QgFACgKALIAAAqQAAANABAEQACAHAHAFQAGAGAJAAQANAAAHgKQAKgMAAgWQAAgZgLgOQgIgKgLAAQgGAAgEADg");
	this.shape_10.setTransform(809.575,105.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#725394").s().p("AAoA5IAAgEIADAAQAHAAAEgDQADgCABgEIABgMIAAgvQAAgNgEgGQgFgIgKAAQgHAAgGADQgHADgJAKIAAABIAAAFIAAA0QAAAMABADQACACADACQAEACAIAAIAAAEIg3AAIAAgEQAJAAAEgCQADgCABgEIABgNIAAgvQAAgOgEgFQgFgJgKABQgHgBgGAEQgKAFgGAIIAAA6QAAALACAEQABADADABQADACAJAAIAAAEIg3AAIAAgEQAIAAADgCQADgBACgDQABgFAAgKIAAgqQAAgSgBgFQgBgFgCgBQgBgBgEgBQgDAAgFACIgCgEIAigOIAFAAIAAAYIAPgOQAFgFAHgCQAGgCAGgBQALAAAGAHQAIAFACAMQANgOAJgFQAIgEAJgBQAJABAHAEQAHAFAEAKQADAHAAAPIAAAvQAAAKABAFQACACADACQADACAIAAIAAAEg");
	this.shape_11.setTransform(794.125,102.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#725394").s().p("AgpAnQgMgRAAgVQAAgOAIgQQAHgPAMgHQANgHANAAQAZAAAQATQANAQAAAWQAAAOgIAPQgHAQgMAHQgNAIgOAAQgZAAgQgUgAgQgvQgGAEgFAKQgDAKAAAPQAAAXAKASQAJASAPAAQALAAAJgKQAHgKAAgYQAAgdgNgRQgJgLgMAAQgGAAgHADg");
	this.shape_12.setTransform(778.1,102.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#725394").s().p("Ag5A4QgQgXgBgeQABgYAKgVQAMgVAUgLQASgMAXAAQASAAARAJIAHADQAEAAACgCQAEgEAAgGIAFAAIAEA5IgEAAQgIgagOgLQgOgLgTAAQgQAAgNAJQgOAIgHASQgIATAAAaQAAAWAHARQAIAQAOAJQAPAJARAAQAQAAAMgHQANgHAPgVIAEADQgNAWgRAKQgQALgXAAQgoAAgXgfg");
	this.shape_13.setTransform(763.55,100.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#725394").s().p("AgyA4IAAgFIBJhhIgkAAQgLgBgEACQgDACgDAEQgDAGAAAJIgGAAIABgfIBdAAIAAAFIhKBiIAoAAQANAAAEgDQAEgCADgFQADgDABgNIAEAAIgCAig");
	this.shape_14.setTransform(900.75,73.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#725394").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_15.setTransform(889.725,73.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#725394").s().p("AgnA6IAAgFQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAFg");
	this.shape_16.setTransform(880.025,73);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#725394").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_17.setTransform(870.275,73.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#725394").s().p("Ag+BTIAAgFIAHAAQAKAAAFgHQACgDAAgPIAAhpQAAgQgEgEQgEgFgJAAIgHAAIAAgFIA9AAQAVAAANAFQANAEAIALQAJALAAAPQAAAUgNANQgNAMgZAAIgMgBIgPgDIAAAwQABAQADAEQAFAFAHAAIAHAAIAAAFgAgPhGIAABFIAMABIAIABQAMAAAJgJQAKgKgBgQQAAgKgEgJQgEgKgJgEQgHgFgLAAQgFAAgKACg");
	this.shape_18.setTransform(857.4,70.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#725394").s().p("AgpAnQgMgRAAgVQAAgOAIgQQAHgPAMgHQANgHANAAQAZAAAQATQANAQAAAWQAAAOgIAPQgHAQgMAHQgNAIgOAAQgZAAgQgUgAgQgvQgGAEgEAKQgEAKAAAPQAAAXAKASQAJASAPAAQALAAAJgKQAHgKAAgYQAAgdgNgRQgJgLgMAAQgGAAgHADg");
	this.shape_19.setTransform(981.95,43.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#725394").s().p("AAGA5IAAgEIACAAQAIAAADgCQADgCABgGIABgLIAAgtQAAgPgEgGQgEgIgJABQgOgBgOARIAAA5QAAAMABADQACADADABQADACAJAAIAAAEIg3AAIAAgEIACAAQAJAAADgEQADgFAAgMIAAgoQAAgUgBgFQgBgEgCgCQgCgBgDgBQgEAAgEACIgCgEIAhgOIAGAAIAAAYQATgXARgBQAJABAHAEQAGAFAEAKQADAHAAAQIAAAuQAAALACAEQABACADACQADACAIAAIAAAEg");
	this.shape_20.setTransform(969.475,43.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#725394").s().p("AAXA6IAAgYQgOAQgIAEQgGAEgJAAQgJAAgHgGQgHgFgCgJQgDgIAAgQIAAgxQAAgIgCgDQgCgDgDgBQgDgCgJAAIAAgFIAnAAIAABKQAAAQAGAFQAFAFAIAAQAEAAAHgEQAGgDAJgJIAAg/QAAgJgDgDQgEgEgLAAIAAgFIAnAAIAABDQAAAUABAEQAAAEACACQACACADAAQAEAAAFgCIABAEIghAOg");
	this.shape_21.setTransform(956.925,43.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#725394").s().p("AAUBZIAAgRQgJAJgHAEQgHADgJABQgSAAgOgQQgNgPAAgYQgBgYAQgTQAPgUAYAAQANAAAKAJIAAgVQAAgSgBgFQgBgEgCgCQgCgBgDgBIgIACIgCgEIAhgOIAGAAIAACBQAAATABAEQABAFACACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQADAAAGgBIABADIgiAPgAgYgMQgMAMAAAYQAAAYAMAOQAKANANAAQAKAAALgLIAAg5QgBgIgEgHQgDgGgGgEQgGgDgFAAQgLgBgIAKg");
	this.shape_22.setTransform(944.9,40.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#725394").s().p("AgnA5IAAgEQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAEg");
	this.shape_23.setTransform(934.175,43.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#725394").s().p("Ag5A+QgXgYAAgmQAAgnAbgZQAXgWAgAAQAfAAAYAZQAYAYAAAlQAAAlgYAZQgXAZgiAAQgiAAgXgZgAgjg8QgSAUABAoQAAAnARAWQANARAWAAQAXAAAPgSQAPgTAAgnQAAgpgRgVQgNgRgXAAQgWAAgNARg");
	this.shape_24.setTransform(920.8,40.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#725394").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_25.setTransform(902.425,48.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#725394").s().p("AhGBTIAAgFIAGAAQAKAAAFgHQADgEAAgOIAAhpQAAgQgEgEQgFgFgJAAIgGAAIAAgFIBKAAIAAAFQgMAAgGACQgFADgCAEQgCAEAAAOIAABnQAAAKACAEQABADADABQAEABAPAAIAMAAQATAAAHgDQAIgCAGgHQAHgIAGgPIAEABIgOAtg");
	this.shape_26.setTransform(891.675,40.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#725394").s().p("AgxBPQgGgFAAgFQABgFADgDQADgDAHAAQADAAAIADIAGABQADAAAEgDQAFgEAEgLIAIgUIgohSIgGgKIgFgGQgDgCgGgBIAAgFIA0AAIAAAFIgDAAQgFAAgDACQgCADAAADQAAAFADAIIAbA4IAZg9QACgFAAgFIgBgDIgDgCIgIgBIAAgFIAlAAIAAAFQgFAAgCACIgFAFIgFAJIgsBvQgHARgKAIQgLAIgKAAQgHAAgEgEg");
	this.shape_27.setTransform(871.55,46.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#725394").s().p("AgSBVQgKgDgLgIIAAhzQAAgSgBgFQAAgEgCgCQgDgBgDgBQgDABgFABIgCgEIAigOIAFAAIAABRQARgWARAAQARAAAOAOQAMAPABAZQgBAegTASQgSAQgUAAQgJgBgKgDgAgGgJQgFADgIAGIAABDQAGAGAIAEQAFADAHAAQALgBAKgLQAJgNAAgXQAAgVgJgLQgKgMgMAAQgGAAgGADg");
	this.shape_28.setTransform(858.6,40.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#725394").s().p("AAUBZIAAgRQgIAJgIAEQgHADgJABQgSAAgOgQQgNgPAAgYQAAgYAOgTQAPgUAZAAQANAAAKAJIAAgVQAAgSgBgFQgBgEgCgCQgCgBgDgBIgJACIgBgEIAigOIAFAAIAACBQAAATABAEQABAFACACQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQADAAAGgBIABADIgiAPgAgZgMQgKAMgBAYQABAYAKAOQALANANAAQALAAAKgLIAAg5QgBgIgDgHQgEgGgGgEQgGgDgFAAQgLgBgJAKg");
	this.shape_29.setTransform(840.75,40.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#725394").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_30.setTransform(828.625,43.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#725394").s().p("AgFBIQgFgDgDgGQgCgGAAgMIAAhKIgSAAIAAgEQAHgDAHgGQAHgHAFgIQADgFAEgMIAEAAIAAAkIAaAAIAAAJIgaAAIAABHQAAALADAEQADAEAFAAQAEAAAEgDQAEgCACgFIAFAAQgFAMgIAGQgHAGgJAAQgFAAgFgDg");
	this.shape_31.setTransform(819.625,41.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#725394").s().p("AgqAzQgIgIAAgNQAAgIAEgGQAFgJAMgHQANgGAbgLIAAgEQAAgRgFgGQgFgGgJAAQgIAAgFAEQgEAEAAAFIAAAHQAAAGgDADQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgKALgJQALgJATAAQAOAAAKAFQAHAEADAIQADAFAAAQIAAAlIAAAUQAAABABABQAAABAAAAQAAABABAAQAAABAAAAIADABIAEgBIAKgJIAAAHQgOASgMAAQgGAAgEgEQgDgEgBgKIgUAQQgHADgHAAQgMAAgHgIgAgLAAQgKAFgEAGQgEAGAAAHQAAAJAFAGQAFAFAHAAQAJAAAOgMIAAgpQgRAHgFACg");
	this.shape_32.setTransform(810.875,43.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#725394").s().p("AggAsQgOgQAAgbQAAgbAOgQQAPgQAVAAQATAAAMAMQAMAMAAAVIhMAAQAAAYAMAOQAMAOAQAAQALAAAIgGQAIgGAFgOIAEACQgCARgNANQgMAOgTAAQgTAAgOgPgAgUgqQgIAIgBAOIAzAAQgBgLgCgEQgDgHgGgEQgGgEgGAAQgKAAgIAIg");
	this.shape_33.setTransform(799.475,43.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#725394").s().p("AgnA5IAAgEQAIAAAEgDQADgCACgEIAAgMIAAgqQAAgTgBgEQAAgEgDgCQgCgCgDAAQgEAAgEACIgCgEIAigOIAFAAIAAAZQANgZAPAAQAHAAAEAFQAFAEAAAFQAAAFgEADQgDADgEAAQgEAAgGgEQgFgEgDAAQgCAAgCACQgGAGgFALIAAA0QAAAJACAGQABADAEACQAEACAIAAIAAAEg");
	this.shape_34.setTransform(789.775,43.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#725394").s().p("Ag5A4QgRgXAAgeQABgYAKgVQAMgVAUgLQASgMAXAAQARAAASAJIAHADQAEAAACgCQAEgEAAgGIAFAAIAEA5IgEAAQgHgagOgLQgPgLgTAAQgQAAgNAJQgOAIgHASQgIATAAAaQABAWAGARQAIAQAPAJQAOAJARAAQAQAAAMgHQANgHAPgVIAEADQgNAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_35.setTransform(777.15,40.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(11));

	// message
	this.instance = new lib.Symbol1();
	this.instance.setTransform(530.75,434.3,1,1,0,0,0,317.1,234.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({rotation:-3.6423,x:530.8,y:434.15},0).wait(1).to({rotation:-7.2847,x:530.9,y:434.1},0).wait(1).to({rotation:-10.927,x:531,y:434},0).wait(1).to({rotation:-14.5694,x:531.1,y:433.9},0).wait(1).to({rotation:-18.2117,x:531.25,y:433.8},0).wait(1).to({rotation:-11.3174,x:531.35,y:433.65},0).wait(1).to({rotation:-4.4231,x:531.4,y:433.6},0).wait(1).to({rotation:2.4711,x:531.55,y:433.45},0).wait(1).to({rotation:9.3654,x:531.6,y:433.35},0).wait(1).to({rotation:16.2597,x:531.7,y:433.3},0).wait(1));

	// Sombero
	this.hat = new lib.Sombrero();
	this.hat.name = "hat";
	this.hat.setTransform(510.65,474.95,1.4241,1.4241,0,0,0,275.2,174.4);
	new cjs.ButtonHelper(this.hat, 0, 1, 2, false, new lib.Sombrero(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hat).to({scaleX:0.8362,scaleY:0.8362,rotation:-70.9491,x:-274.45,y:144.2},14).to({_off:true},1).wait(25));

	// bat
	this.bat = new lib.bat();
	this.bat.name = "bat";
	this.bat.setTransform(921.3,227.3,1,1,0.5491,0,0,28.3,107.2);
	this.bat._off = true;
	new cjs.ButtonHelper(this.bat, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bat).wait(14).to({_off:false},0).to({regX:28.2,scaleX:0.9999,scaleY:0.9999,rotation:-74.9437,x:732.1,y:467.8},5).to({_off:true},1).wait(20));

	// Pinata
	this.instance_1 = new lib.Pinata();
	this.instance_1.setTransform(562.4,450.05,1,1,0,0,0,145.5,189.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(489.75,383.65);
	this.instance_2._off = true;

	this.instance_3 = new lib.candy();
	this.instance_3.setTransform(518.7,689.2,0.8192,0.1486,0,0,0,451.4,382.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({regX:145.6,scaleX:0.4775,scaleY:0.5607,x:562.45},0).to({regX:145.7,regY:189.2,scaleX:1.3043,scaleY:0.7195,x:562.65,y:450.15},3).wait(2).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:489.75,y:383.65,mode:"synched",startPosition:0},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},1).to({_off:true,regX:451.4,regY:382.5,scaleX:0.8192,scaleY:0.1486,x:518.7,y:689.2,mode:"independent"},2).wait(12));

	// Button
	this.next_btn = new lib.BasicButton();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(890.15,684.65);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(40));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(24.6,263.2,984.4,506.90000000000003);
// library properties:
lib.properties = {
	id: '58ADB1B88EC5D04585A72E31C9AE23C0',
	width: 1024,
	height: 768,
	fps: 10,
	color: "#F4CFCF",
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
an.compositions['58ADB1B88EC5D04585A72E31C9AE23C0'] = {
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