(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BasicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBTQgIgEgFgJQgEgJgBgVIgBgrIgRABIgBgjIARgBIgBgWIAvgaIABAvIAagBIABAjIgaABIABArQABAIABACQACAEAGAAQAGAAAJgEIAEAhQgRAFgPAAIgEAAQgOAAgIgEg");
	this.shape.setTransform(74.3,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgigBIgsg6IA5gCIAUAjIAVgkIA1gBIgpA8IAvA/Ig3ACIgYgoIgZApIg0ACg");
	this.shape_1.setTransform(61.1,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglA7QgOgHgKgOQgJgQgBgUQgBgcASgTQASgSAhgBQAagBAQAIQAPAHAJAPQAIAPABAYIAAAFIheADQABAMAFAFQAIAIAKAAQAHAAAGgEQAEgDAEgFIAvADQgKATgPAIQgPAJgdABIgFAAQgUAAgNgGgAgSgbQgEAGgBAMIAugCQgCgOgGgGQgGgFgJAAQgLAAgHAJg");
	this.shape_2.setTransform(45.6,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUhSIAygCIBCBcIgCheIAxgBIAGCqIgzACIhChcIADBeIgxABg");
	this.shape_3.setTransform(27.6,21.3);

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


// stage content:
(lib.AnimatedCardKLopez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // This will make the main timeline stop on current frame
		
		this.birthdaybutton.addEventListener("click", fl_ClickNextScene.bind(this));
		
		function fl_ClickNextScene()
		{
			// Actions you want the button to do go here
			this.play();
		}
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(30));

	// Drawings
	this.birthdaybutton = new lib.BasicButton();
	this.birthdaybutton.name = "birthdaybutton";
	this.birthdaybutton.parent = this;
	this.birthdaybutton.setTransform(880.3,661.3);
	new cjs.ButtonHelper(this.birthdaybutton, 0, 1, 2, false, new lib.BasicButton(), 3);

	this.text = new cjs.Text("", "48px 'Ravie'", "#FFCCFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(1237.3,108.7);

	this.text_1 = new cjs.Text("Happy\nbirthday", "48px 'Ravie'", "#CC00FF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 66;
	this.text_1.lineWidth = 489;
	this.text_1.parent = this;
	this.text_1.setTransform(266.4,97.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AQ5phQgWgYgIgcQANAaARAaQChD6GGBoQB2AfCKATQB3APCGAGQAVABAVABAdgjNQAFAEAEAFAd+gZQgQAagdAYQg/AyhbAAQhaAAg/gyQg/gyAAhHQAAgVAFgSEAk+AE+IAFAAIAAAAQgOkMhIjdEAlDAFOIgEgFEAknAFDIAAAAAZUj6QAGgDAGgCATYgOQgRAcgoAWQg0AdhEAIQgXACgYAAQhiAAhGgnQhFgmAAg4QAAgLADgJEAZNAl1IMeifEAZNAl1MgAzggJEAlpAjOIg0+EAi5/lQgFgLgFgKQgGgOgEgOQgGgQgEgPQgyizBtibQAEgEADgFIDBifADx/aQAUgeANgeQAHgQAFgPQA4ipiPiqQgFgGgGgGIiDiXAx0nyQgPAagfAVQg7ArhVAAQhUAAg7grQg8gqAAg8QAAgPADgNA9uqgIA9g7QBhhaB0hJQBqhCB6g0QC4hQDegwQAGgBAGgBQEjhCEhgdQA+gHA9gEQA7gFA8gDQErgQEsAVIAAAIADx/aIClAAADx/aImqgDIhxgBIASL2IABAIIAAAHAh7onQgNATgSASQg4A0hQAAQg/AAgxghQgMgIgLgLQg4g0AAhKQAAgZAGgVANXyzQimgaimgPQgqgEgqgDAJ6nsQgMATgUAQQgwAmhFAAQhEAAgwgmQgwgmAAg1QAAgOADgMAGd/VIAaLyEglMAFSIABAAQAegZAegVIhHBKIgMemIAAASEglOAFUIACgCEglOAFUIADgCEglPAFWIABgCEglqAF5IAHgJIAAgCIAUgYEgljAFuIAAgIQALgKAMgKEgljAFwIAUgaAHCiIQgRAcglAXQhDArhfAAQhgAAhEgrQhDgrAAg8QAAgMADgMApahzQgQAYggAUQg9AohXAAQhYAAg9goQg9gnAAg4QAAgMADgLA3ZhbQgQAbghAWQgkAZguAKQghAHgmAAQhaAAhAgqQg/gqAAg9QAAgNADgNEgD3AonIO/gNIAFAAIOAilEgD3AonIAAAFIgFAAgAKGGHMABCAiKA2IGCMgANAhZISZBRAj3GHMAAAAigEglQAkUIOzDHAPNyFQgdEjBrDN");
	this.shape.setTransform(548.9,429.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6633").s().p("AjcElIAAgIIgKgUIgKgcIgKgfQgyi0BtiZIAHgKIDBifIANAAICDCYIALAMQCPCpg4CpIgMAfQgNAdgUAeg");
	this.shape_1.setTransform(552.4,198.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjmF4Ih3AAIgTr1IBxABIGrADICkABIAHAEIAaLxQksgVkrAQg");
	this.shape_2.setTransform(555.9,265.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AJnM3Qi9jdjBgcQgwASg6AAQghAAgegGQilAvipC7IgEADIAAAAQhNhGhOgyQnlk6oNGpIgEADQhphlhrg6QlSi4ldD+IgBABIABgDIAAgGIABgCQALhoAWhgIAvi4IDonGQAlguAogrIAbgdIA9g7QBghVBxhHQBqhCB6g0QC4hQDegwIAMgCQEjhCEhgdQA+gHA9gEIAEAAIBzgIQErgQEsAVIAEABIBQAGQCmAPCmAaIBvArIAHADQgdEjBrDNQAIAcAWAYQCeDzF5BqIAIACIAIACIgIAEQgfALgbAVQgnAggPAoQgJAYAAAbQAABHA/AzQA/AyBaAAQBbAAA/gyQAhgbAQgfQAHgNADgNQAEgRABgSIAAgCIAAgBQAAg7gqgsIgHgGIANACIAFAAQBvAOB8AFIAqACIADAAIAIACIAqACQAbABAQAEIAGACQBGDZAPEEIAAACIAAAEIABAGIAAAAIgEABIgGAAIgFgLIABAJIAAABIgBAAIgIgHIgBAAIgUgQIgsggQhHgwhHgbQkthzkSEXIgFAEIgOAAQjzjVjmAMQjaALjODVIgEAEgAM1EeQgwAbgOAkQgHAQAAARQAAA4BFAnQBGAnBiAAQAYAAAXgCQBEgIA0gdQAtgZAQghQAEgIACgJIACgRIAAgDQAAg5hFgnQhFgnhiAAQhiAAhGAngA9YDAQgqAcgOAlQgHASAAAUQAAA9A/AqQBAArBaAAQAmAAAhgIQAugKAkgZQAmgZAPgfQAFgKADgLQACgLABgMIAAgDQAAg8hAgrQgkgYgugLQghgHgmAAQhaAAhAAqgAvOCyQgpAbgNAiQgHAQAAATQAAA4A9AnQA9AoBYAAQBXAAA9goQAkgXAQgcQAFgLADgLQACgJAAgKIAAgDQAAg4g+goQg9gnhXAAQhYAAg9AngAArCVQgsAdgPAlQgHASAAATQAAA8BCArQBEArBgAAQBfAABDgrQApgaARggQAFgKACgLQACgKABgLIAAgDQAAg8hEgrQhDgrhfAAQhgAAhEArgA3cjXQgnAbgOAkQgHATAAAVQAAA8A8AqQA7AqBUAAQBVAAA7gqQAjgYAPgeIAHgVQADgMAAgMIAAgDQAAg9g8gqQg7grhVAAQhUAAg7ArgAFWjHQgeAYgLAdQgHASAAAVQAAA1AwAmQAwAlBEAAQBFAAAwglQAYgTAMgXQAFgLADgLQADgMAAgMIAAgDQAAg1gvgnQgwgmhFAAQhEAAgwAmgAmtlYQgMAIgLAKQghAegNAmQgKAbAAAgQAABKA4A0QALALAMAIQAxAhA/AAQBQAAA4g0QAVgVAOgXQAJgRAFgTQAGgTAAgWIAAgCIAAgDQAAhKg3g1QgcgagigMQgigOgoAAQg/AAgxAigEAhwADoIAJABIAGABIAAABgAQEjjQANAaARAaQgWgYgIgcgAXSjLIADAAIAAABIgDgBgAXSj/IABABIABAEIgCgFgAWKnAIgBgBIADAAIgBACgATIosIABAAIABAFIAAABIgCgGgAPVrVIAOACIgCACIgMgEg");
	this.shape_3.setTransform(551.2,385.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF99CC").s().p("AYWGHQg/gzAAhHQAAgVAFgSQAPgoAngfQAegYAlgMIgJgCIAJgEIgJgCIAMgFQB2AfCLATIAIAJIgNgCIAHAGIgHgBQAvAsACA8IAAABIAAACQgBASgEARQgDANgGANQgQAbgeAYQg/AyhaAAQhbAAg/gygANIGSQhFgnAAg4QAAgLADgJQAOgkAxgcQBGgnBhAAQBjAABFAnQBDAnACA3IgDARQgCAJgEAIQgRAdgoAWQg0AdhDAIQgXACgYAAQhiAAhHgngA9FFDQg/gqAAg9QAAgNADgNQAOgkAqgcQBAgrBbAAQAlAAAhAIQAuAKAlAZQA9ApACA7QgBAMgCALQgCALgGAKQgQAbghAWQgkAZgtAKQgiAIgmAAQhaAAhAgrgAu7EmQg9gnAAg4QAAgMADgLQANgiApgaQA+gnBXAAQBYAAA8AnQA9AmACA3QgBAKgCAJQgDALgFALQgQAYgfAUQg+AohXAAQhXAAg+gogAA/EYQhCgrgBg8QAAgMAEgMQANglAtgdQBEgrBgAAQBfAABDArQBCApACA7QgBALgBAKQgDALgFAKQgRAcglAXQhDArhfAAQhgAAhDgrgA3JhVQg8gqAAg8QAAgPAEgNQANgjAngcQA8grBUAAQBUAAA8ArQA6AqABA7QAAAMgCAMIgIAVQgPAagfAVQg7ArhVAAQhTAAg8grgAFphbQgwgmAAg1QAAgOAEgMQALgeAdgXQAwgmBEAAQBFAAAwAmQAuAlACA0QgBAMgDAMQgDALgFALQgLATgVAQQgwAmhEAAQhFAAgwgmgAmaiBQgMgIgLgLQg4g0AAhKQAAgZAGgVQANgmAhgeQALgLANgIQAwghA/AAQAoAAAiANQAiANAcAaQA2AyABBHIAAADIAAACQAAAWgFATQgGATgJARQgNATgSASQg4A0hPAAQg/AAgyghg");
	this.shape_4.setTransform(549.7,392.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("A2ZR+MAANghYQINmpHlE6QBOAyBNBGIAAAAIAEgDQCpi7ClgvQAeAGAhAAQA6AAAwgSQDBAcC9DdIAEAAIAEgEQDOjVDagLQDmgMDzDVIAOAAIAFgEQESkXEtBzQBHAbBHAwIAsAgIAUAQIAAAAIABAAIAIAHIABAAIAAgFIAAgCIABAAIADAIIAAAAIA0eCIACAIIseCfMgAzggIMAAzAgIIuAClIgFgJMgBCgiJMABCAiJIAAAJIu/AOMAAAgifMAAAAifIgFAEgALES0gEglUAO3IgSAAIAM+kIBHhLIgBADIABAAIgBAGQFej/FSC4QBrA6BpBlIAEgDMgANAhYIgIAAgAZJQYgA2Mvag");
	this.shape_5.setTransform(549.3,566.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("EA+kgRIQAAHYioFOQiWEnjMAiQgaAEgbAAQjuAAiolNQiplOAAnYQAAnYCplOQColODuAAQDuAACpFOQCoFOAAHYgEAnwgKfQAAG+jWE5QjPEykiAJQgKAAgJAAQkuAAjWk7QjWk5AAm+QAAm9DWk7QDWk7EuAAQEvAADVE7QDWE7AAG9gEA2cAA/UAUCAjRgRsAEvAo/BVQi9gqiNj1QiqknAAmjQAAmiCqkoQCqkoDwAAQDxAACpEoQCpEoAAGiQAAGjipEnQipEnjxAAQgcAAgbgEQgNgCgMgCQAKATAJATUAU8ArVgUnAAREhA6gqMQgKhRAAhVQAAhVAKhREg/qgXUQAolBDHjxQD5kuFgAAQFgAAD5EuQD5EuAAGqQAAGrj5EtQjrEdlHAQQgTABgUAAQlgAAj5kuQjHjxgolBEgx6gEUUASfAtbgSCAGSAcqGxUANeAhBgNKABr");
	this.shape_6.setTransform(461.6,466.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AowQqQjHjxgolBIAAlMQAolADHjxQD5kuFfAAQFgAAD5EuQD5EuAAGpQAAGrj5EtQjrEdlGAQIgoABQlfAAj5kugAt5yxQAAhWAKhQIAAFMQgKhRAAhVg");
	this.shape_7.setTransform(134.1,300.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33CC99").s().p("AhPPpQi+gqiMj1QiqknAAmjQAAmhCqkoQCpkoDwAAQDxAACpEoQCqEoAAGhQAAGjiqEnQipEojxAAg");
	this.shape_8.setTransform(412,375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CCFF").s().p("AAAQzQkuAAjVk7QjWk6AAm+QAAm9DWk6QDVk7EuAAQEvAADVE7QDWE6AAG9QAAG+jWE6QjPEykjAJIgSAAg");
	this.shape_9.setTransform(643,399.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF66CC").s().p("AmWMmQiolOAAnYQAAnXColOQCplODtAAQDuAACpFOQCoFOAAHXQAAHYioFOQiWEojMAiQgaAEgbAAQjtAAiplOg");
	this.shape_10.setTransform(804.5,357);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AgPAAIgYgDIBPAHQgcAAgbgEg");
	this.shape_11.setTransform(408,475.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("EAprgX9QhVhLiDg5QiFg6iPAeQAJlLFjBVQBSAUBTASQDZAwBXiuQAphQgEhgIsqn0IAAi0IIcloIAAhQIA8haAHm39IgLgUIHMAAQBVhBBNg4QECi5hjlnQhCjtjxheQkHhlkPg/IAAhaQCPj7DcisQDpi3EIB+QCLBCCXAEIAAmGIq8AAAaj39IB0jSIiWwaIG4muAQBqrIAAA8QGwB8F5jVQBVgwBWg1QBPk0jZjAEAojAWbIAAgUEgvGAWbIAA7VMBXzAAAIAAbVIgKAAEAGLAixMAiiAAAIAAVjMhXzAAAIAA1jIgeAAIAAsWIAeAAMAooAAAIAA63IMpAAIAAa3MAiYAAAEAo3AjPIgUs0AEE39QAihdgRhqQghjZhdjOQgag6AOhDQAah7BuhGQBBiEhJiCQh8jeixi6IAAgoIhujSIAAiMApw39IlykOIg8kEIAAg8ILkjIIAAngIlUiWQgogogMgFIAAiRA6a39QgWgkgZgkQjXk1i+lCQhMiBAKieQAQkLEQhkQA3gVApg0IAAowIBkAAA+2tzIAAAyIFeBQIDIowAy0r7QF/iADolJQAggtASgwABLpHImEraAJTr7IEwomEgjigK/QgqlKiukYAmeWbIAMAAAFzWbIAYAAEAFpAixIgOAAEAGLAixIAAADEAGLAixIgFAAEAGLAjdIAAUjIspAAIAA1IEgGjAixMgojAAA");
	this.shape_12.setTransform(541.5,387.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF66CC").s().p("Egr5AeoIAA1kMAojAAAIAFAIIAAVIIMpAAIAA0jIADgEQAMgQgIgOQgDgEgEgEIAAgDMAiiAAAIAAVkgEArxgDRIgBgUIABAUMgiZAAAIAA64IspAAIAAa4MgooAAAIAA7WMBXzAAAIAAbWg");
	this.shape_13.setTransform(521,551.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text,p:{x:1237.3,y:108.7,font:"48px 'Ravie'",color:"#FFCCFF",lineHeight:65.9}},{t:this.birthdaybutton,p:{x:880.3,y:661.3}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text,p:{x:1243.3,y:106.7,font:"12px 'Arial-Black'",color:"#000000",lineHeight:18.9}},{t:this.birthdaybutton,p:{x:906.3,y:679}}]},10).to({state:[{t:this.shape_13},{t:this.shape_12}]},21).to({state:[]},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(532.1,479.6,1269.2,616.7);
// library properties:
lib.properties = {
	id: '6A960F3D7C67A04BA75CA2359EC64C97',
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
an.compositions['6A960F3D7C67A04BA75CA2359EC64C97'] = {
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