(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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
	this.shape.graphics.f("#FFF6D3").s().p("AyaAAISayaISbSaIybSbg");
	this.shape.setTransform(0.0104,-0.0047,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(-41.6,-41.6,83.3,83.2), [rect]);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E0E147").s().p("Ai6QNMADWggZMACfAgZg");
	this.shape.setTransform(18.675,103.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, rect = new cjs.Rectangle(0,0,37.4,207.5), [rect]);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E5368B").s().p("AgzD1QgMgGgKgNQgdggAPgSIAKgKQhtkOgTgYQAUgSAXgHQAzgdCohBIAGAPQgJAIgEALIgJAPIALgEIgOARIACAGIgWAVIhkA9IAFANIANArQBNgrA7gWQABAEgBAKIADAOIgOARIAIgDIgOATIADAFIgSAOIgBAHIgXAXIg2ApIASBFQCGhyBcgSQABAFgGANIAAAIIgSASIARgEQgNAMgHALQgGAUgFAGQhyBMhZBiQgCADgEAAQgFAAgGgDg");
	this.shape.setTransform(383.0391,23.2315);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5368B").s().p("AilBMQgwiLgbg3IgBgBIABgBIgJgQQAUgRAZgDQAXgOAVgCQAYgCAMAQIB/CtQgBhtAMh4IgFgMQAPgTAegMQAggOAQAPQAIAHAJAUIAVA4QAyB7A5BnIADAWIgFAEIACAOIACATIgGAEIADANQgGACgDACQACAGgCABQhDg5hXieQAFBgACB1QgBAFgGAIQgJAIgKAEQgcALgQggIhwh4QAXBXAOBEIgIACIgGAuIgOAKIgBALQgMgEgEADQgBADgCAIQgBAIgBABQgThEgph5g");
	this.shape_1.setTransform(349.85,36.1746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5368B").s().p("AhIDZQgVgWAAgjQAegrBignQBhgmAYAQQABAAAAAAQAAAAgBABQAAAAgBAAQAAAAgCAAIAMAGIgEADQAOAIABAFIAFAZIgHgBQgsAOhBAmQg9AkgdAdQgLAJgLAAQgMAAgNgMgAhkBxQgOgHgIgTQgHgGgDACQgIiTgoh6QA7gnAZAFQAogUAUAeQBJByBpBmIgNgFIgBAIIgHgBIgGAAIgEAHIgKgHIABAZIgGAAQhLALhaBCQgJAGgJAAQgHAAgGgDgAg6gCQAggNAlgGIhFhDQACApgCAtg");
	this.shape_2.setTransform(321.075,52.29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5368B").s().p("AgeDGQhHgWgphSQgkhIAJhEQAJg6AlgtQAhgoAmgMQAmgMANAaQAJATADAZQACAbgIALQhKACgdBDQgMAbABAfQABAgAMAZQAOAcApAKQArAMApgWQAegRAUghQAQgdAFggIhwAwQgbAGgxgWQgFgBBDgxQgfAPgrAfQgGACgDgCIBQg6QA9grAfgLQAQgGAWAVQAUAUAHAUQAoA6gPA/QgPA/g+AiQglAUgmAAQgWAAgXgHg");
	this.shape_3.setTransform(291.2635,62.2022);

	this.text = new cjs.Text(" ", "60px 'BlowBrush'", "#E5368B");
	this.text.lineHeight = 72;
	this.text.parent = this;
	this.text.setTransform(249.2,58.6,1,1,-31.2339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5368B").s().p("AglBmQglACgfgaQgNgMgDgHQAXAYAQACQgigTgIgWQAMAJAjgIIhDhXIgaAaQgQAEgXgTQgXgUAFgUQACgNAngnQAvgtAygcQCThTBSB6QArBBguBKQBGAjAWA4QgcgvgqgTQA+AzAHAZIgEgBQABAOgDACIgLAMIgIgCQgsgnhPgaQgTASgXAQIgDACIAfA1IABAUQAAAGAEAUQgFAGgBAHIADANIgEACIAAAOQgFgBgBACQABAJgCABQgGgGhYh7gAAiidQgwALg+AuIAMAQIA9BiQAtgfAggyQAgg0gOgZQgKgQgXAAQgLAAgOADg");
	this.shape_4.setTransform(242.9811,92.3488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5368B").s().p("AAbDNQgagRgHggQASgwBDgsQBAgsAaALIgCABIAMADIgEAEQAQAEABAEIAKAXIgGABQg/Akg/BbQgKAOgNAAQgJAAgLgHgAgvBFQg2gSgigqQgjgqgSgpQgPghADgHQAJgRAegFQAdgGAFAJQAsBjAuAfQAdARANgIQAMgHABgcQABglgagkQgzhCgdgHIgCABQADgFgCgBIgFgBQgEgFAEgGQAPgaAnAJQAtALArA5QApA3AEA3QADA5goAfQgbAUghAAQgVAAgXgIg");
	this.shape_5.setTransform(223.0919,108.322);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5368B").s().p("AAaDDQgagQgKghQARgyBCgyQBAgvAbAJQABAAAAAAQAAAAAAAAQgBABAAAAQgBAAgBABIAMACIgDAEQAQAEACAEIALAXIgGABQhAApg7BgQgKAQgPAAQgJAAgLgGgAg5A+Qg5gRgegkQgjgogNgzQgKgmAFgLQAIgRAZgEQAWgDAKAHIAAAAIgBACIACgBIgBgBQABgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgFAAgBgBQgDgGADgFQAGgMARgKQASgLAXgDQA8gFAuA3QAtA0AGA4QAHA5goAhQgaAVgkAAQgUAAgZgHgAiAiFQAKAxAYAdQAcAhAgAIQALADAIAAQAIAAAEgDQAFgFAAgOIgBgPQgGgjgdgjIgBgBIgBAAIAAgBQgkgpgcAAIAAAAIAAAAQgQAAgNAMIgBABIAAAAIgBABIABgBIAAAAIABgBQANgMAQAAIAAAAIAAAAQAcAAAkApIAAABIABAAIABABQAdAjAGAjIABAPQAAAOgFAFQgEADgIAAQgIAAgLgDQgggIgcghQgYgdgKgxQADgDAAgDQAAgEgGgEQAGAEAAAEQAAADgDADIAAAAgAiEiUIABABIgCABIABgCgAiEiUg");
	this.shape_6.setTransform(204.7167,125.2786);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5368B").s().p("AEPDeQiBgsh6iUIApBdQARApgCAKQgCANgWARQgiAYgsgWQgjgQgzgxIhShTQgtgrgXgJQgIgCgHABQgXgXAngcQAWgQAVADQASACAYAUQAQANAmAmQAuAwAdAbQAEgDgahcQgghtgGggIgGgIQgSgZApgeQAYgSAYAJQAQAFAHAKQAbA2ArBBQBUCABXBJIAOAUIgzgnQA6AwAAACIAOARIgHgFIANALQAPASAIAFIgEABIAEALQgEASgIAAIgDgBg");
	this.shape_7.setTransform(185.41,139.7681);

	this.text_1 = new cjs.Text(" ", "60px 'BlowBrush'", "#E5368B");
	this.text_1.lineHeight = 72;
	this.text_1.parent = this;
	this.text_1.setTransform(140.9,148.7,1,1,-46.6051);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5368B").s().p("AgKB5QgjALglgQQgQgIgFgHQAeARAPgCQgmgJgOgUQAPAGAfgQIhYhEIgSAhQgOAIgcgNQgbgNgBgUQgBgNAcgwQAgg3ApgpQB5h4BuBhQA7AzgZBUQBNAQAlAvQgogmgugGQBKAfAOAXIgFgBQAEAOgCADIgHAOIgIABQg1gbhTgDQgOAWgSAVIgCADIAsArIAGATIAKAZQgCAHABAGIAGALIgEAEIAFANQgGABAAABQADAJgCACQgHgEh1hfgAgKiUQgsAYgwA8IAQANIBVBOQAjgrARg4QASg7gVgUQgJgJgNAAQgPAAgVAMg");
	this.shape_8.setTransform(144.0232,181.6694);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5368B").s().p("ABVDqQgqgNAEgXIADgNIiThvQhbhDgXgIQAGgYAQgSQAdgzBviQQACADAKAGQgCAMABALIAAARIAIgJIgDAWIAFAFIgIAdIg3BpIALAJIAjAcQArhLAmgyQADACAEAJIAKAKIgDAVIAFgFIgBAXIAFADIgJAUIADAIIgHAgIgaA/IA0AxQA4inBFg+QADACACAQIAEAGIgFAZIALgNQgEASAAANQAFAUgCAIQg5B6gZCEQgBAHgOACIgCAAQgMAAgPgFg");
	this.shape_9.setTransform(122.425,205.8023);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5368B").s().p("AhGApIgwBSQgSAegtgXQgRgJgKgOQgKgNAFgLQAQgjAmg5IAAgJQALgmAdgLQAjgwBOhmQAPANAJAYQALAggKAkIgqBIQBjBEBqBaIARAbIgDAEIANAUQgGAAACAGQABACAHAKIgDADIAGAOIgPgEQAOAPgBAEQixhyhrhAg");
	this.shape_10.setTransform(103.4917,224.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5368B").s().p("AAACsQgogZgVgXQAUANAeARQgZgPgcgXIgFgPIAIACQA2AjArgNQAjgLAagoQAVghAGgoQAGgkgJgHQgOgJgkAaIhHA8QgwAoggAPQgsATgdgTQgsgdAGgEQg4gkBhjFQAzgfAhA4QgXApgSA9QgQA4AEACQACABAbgXQAkggAbgSQBlhFBGAuQBBAqADA5QAEAvgkA+QgcAyg/AMQgTAEgQAAQghAAgVgQg");
	this.shape_11.setTransform(94.3773,254.2001);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5368B").s().p("ABqCzQgegEgXgbQgDg1A0hcQA0haAdgCQABgBAAAAQAAABAAAAQAAAAgBABQAAAAgBABIAMgDIgBAGQAQgDAEADIATAQIgGAEQgZAmgbBGQgYBCgGAqQgEAbgbAAIgHAAgAgOBtQgJAAgCADQhihuhshFQAWhEAWgLQATgpAiALQCBAqCSAPIgNAEIAEAHIgGAEIgGADIACAJIgMAAIARATIgGADQgyA4gfBsQgFATgRADIgIABQgKAAgOgIgAgUAAQAQgfAZgcIhfgIQAbAeAbAlg");
	this.shape_12.setTransform(81.275,285.4304);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5368B").s().p("Ag1CqQiIg9g5gRIgDAAIAAgBIgSgFQACgZAOgUQAFgcANgPQAQgTATACIDWAXQhPhJhRhaIgMgFQgEgYALgeQAMghAVgCQAMAAAVAHIA3AWQB7AwBzAcIASANIgCAGIAOAIIAPALIgCAIIANAGQgFAGABAEQAGADAAACQhZALivgtQBLA+BVBNQAFAEABALQAAALgDAKQgMAcgigKIikABQBPArA7AkIgEAHIAcAkIgBAQIAHAIQgLAGABAGQAAADAGAHQAFAGgBABQg/ghhzgzg");
	this.shape_13.setTransform(64.95,316.1483);

	this.text_2 = new cjs.Text(" ", "60px 'BlowBrush'", "#E5368B");
	this.text_2.lineHeight = 72;
	this.text_2.parent = this;
	this.text_2.setTransform(28.85,341.85,1,1,-71.5523);

	this.text_3 = new cjs.Text(" ", "60px 'BlowBrush'", "#E5368B");
	this.text_3.lineHeight = 72;
	this.text_3.parent = this;
	this.text_3.setTransform(23.9,358.4,1,1,-73.5046);

	this.text_4 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_4.lineHeight = 72;
	this.text_4.parent = this;
	this.text_4.setTransform(19.55,375.1,1,1,-75.4608);

	this.text_5 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_5.lineHeight = 72;
	this.text_5.parent = this;
	this.text_5.setTransform(15.75,391.9,1,1,-77.4225);

	this.text_6 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_6.lineHeight = 72;
	this.text_6.parent = this;
	this.text_6.setTransform(12.55,408.9,1,1,-79.3888);

	this.text_7 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_7.lineHeight = 72;
	this.text_7.parent = this;
	this.text_7.setTransform(9.95,425.95,1,1,-81.3574);

	this.text_8 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_8.lineHeight = 72;
	this.text_8.parent = this;
	this.text_8.setTransform(7.9,443.1,1,1,-83.3283);

	this.text_9 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_9.lineHeight = 72;
	this.text_9.parent = this;
	this.text_9.setTransform(6.45,460.3,1,1,-85.299);

	this.text_10 = new cjs.Text(" ", "60px 'BlowBrush'", "#FF96C7");
	this.text_10.lineHeight = 72;
	this.text_10.parent = this;
	this.text_10.setTransform(5.6,477.55,1,1,-87.2686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, rect = new cjs.Rectangle(3.5,-7.7,408.8,490.3), [rect]);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E83A4F").s().p("AgLCNIAAkZIAXAAIAAEZg");
	this.shape.setTransform(90.9,20.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E83A4F").s().p("Ag2BgQgbgOgOgbQgOgaAAgdQAAgbAOgbQAPgbAbgOQAagOAbAAQAcAAAbAOQAaAOAPAbQAPAbgBAbQAAAdgOAaQgOAbgbAOQgaAOgdAAQgcAAgagOgAgshPQgXAMgMAWQgMAWAAAXQAAAYAMAWQAMAWAWAMQAWAMAXAAQAYAAAWgMQAWgMAMgWQAMgWAAgYQAAgXgMgWQgMgWgWgMQgXgMgXAAQgWAAgWAMgAAcA+IgKgTQgNgWgGgGQgGgFgKAAIgLAAIAAA0IgTAAIAAh2IAoAAQAVAAAIACQAKAEAFAIQAGAJAAAIQAAANgJALQgJAIgPABQAFACAEAFQAIAGAKARIAPAYgAgcgEIAXAAQAQgBAGgFQAGgEAAgJQAAgFgDgEQgDgEgFgCQgGgCgNAAIgVAAg");
	this.shape_1.setTransform(76,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E83A4F").s().p("Ag0A8QgUgVAAgnQAAgqAYgVQAUgRAcAAQAgAAAVAVQAUAVAAAlQAAAdgJARQgJARgRAKQgRAJgVAAQggAAgUgVgAgggsQgNAPAAAdQAAAeANAPQANAPATAAQAUAAANgPQANgPAAgeQAAgdgNgPQgNgPgUAAQgTAAgNAPg");
	this.shape_2.setTransform(56.525,20.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E83A4F").s().p("AgDBmQgIgFgDgHQgEgIAAgYIAAhYIgTAAIAAgUIATAAIAAgnIAagQIAAA3IAaAAIAAAUIgaAAIAABaQAAALABAEQABACAEACQADADAGAAIALgBIAEAWQgLADgJAAQgOAAgHgEg");
	this.shape_3.setTransform(44.275,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E83A4F").s().p("AhDBtIAAjWIAZAAIAAAUQAIgLALgGQAKgGAPAAQAUAAAPAKQAPAKAHATQAJATgBAWQAAAYgIASQgJATgQAKQgQAKgSAAQgMAAgLgFQgKgGgHgIIAABLgAgehIQgNAQAAAeQAAAdAMAOQANAPARAAQAQAAANgPQAMgPAAgeQAAgegMgPQgMgPgQAAQgRAAgNAQg");
	this.shape_4.setTransform(32.05,23.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E83A4F").s().p("Ag1BgQgYgOgMgaQgNgZAAgcQAAg0AdgeQAdgfAsAAQAeAAAYAOQAYAPAMAZQANAZAAAgQAAAggOAaQgNAagYANQgYANgcAAQgdAAgYgPgAgzhBQgVAVAAAvQAAAnAUAXQAVAWAfAAQAgAAAVgWQAUgYAAgoQAAgagIgTQgJgUgRgLQgSgLgVAAQgdAAgWAVg");
	this.shape_5.setTransform(11.725,17.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, rect = new cjs.Rectangle(-2,-0.6,99,37.5), [rect]);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E83A4F").s().p("AgTAwQgKgEgFgIQgFgIAAgKIAMgBQABAIADAFQAEAEAHADQAHADAHAAQAIAAAGgCQAGgCACgEQADgEAAgFQAAgFgCgDQgDgEgHgCIgRgFQgOgDgFgCQgHgEgEgGQgEgFAAgHQAAgIAFgHQAEgGAJgEQAIgDAKAAQAKAAAJADQAJAEAEAHQAFAHAAAJIgNABQgBgKgGgFQgGgEgLAAQgLAAgGAEQgGAEAAAHQAAAFAEAEQAEADAQAEIAWAGQAJADAEAHQAEAGAAAIQAAAIgEAHQgFAIgJAEQgIADgLAAQgNAAgJgEg");
	this.shape.setTransform(61.075,24.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E83A4F").s().p("AglAzIAAhlIBIAAIAAAMIg7AAIAAAfIA4AAIAAALIg4AAIAAAjIA+AAIAAAMg");
	this.shape_1.setTransform(51.9,24.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E83A4F").s().p("AgTAwQgKgEgFgIQgFgIAAgKIAMgBQABAIADAFQAEAEAHADQAHADAHAAQAIAAAGgCQAGgCACgEQADgEAAgFQAAgFgCgDQgDgEgHgCIgRgFQgOgDgFgCQgHgEgEgGQgEgFAAgHQAAgIAFgHQAEgGAJgEQAIgDAKAAQAKAAAJADQAJAEAEAHQAFAHAAAJIgNABQgBgKgGgFQgGgEgLAAQgLAAgGAEQgGAEAAAHQAAAFAEAEQAEADAQAEIAWAGQAJADAEAHQAEAGAAAIQAAAIgEAHQgFAIgJAEQgIADgLAAQgNAAgJgEg");
	this.shape_2.setTransform(42.275,24.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E83A4F").s().p("AgTAwQgKgEgFgIQgFgIAAgKIAMgBQABAIADAFQAEAEAHADQAHADAHAAQAIAAAGgCQAGgCACgEQADgEAAgFQAAgFgCgDQgDgEgHgCIgRgFQgOgDgFgCQgHgEgEgGQgEgFAAgHQAAgIAFgHQAEgGAJgEQAIgDAKAAQAKAAAJADQAJAEAEAHQAFAHAAAJIgNABQgBgKgGgFQgGgEgLAAQgLAAgGAEQgGAEAAAHQAAAFAEAEQAEADAQAEIAWAGQAJADAEAHQAEAGAAAIQAAAIgEAHQgFAIgJAEQgIADgLAAQgNAAgJgEg");
	this.shape_3.setTransform(32.875,24.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E83A4F").s().p("AAgAzIgMgfIgpAAIgLAfIgOAAIAmhlIAOAAIApBlgAAQAJIgKgbIgHgVIgFATIgLAdIAhAAg");
	this.shape_4.setTransform(23.525,24.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E83A4F").s().p("AgfAzIAAhlIAOAAIAABZIAwAAIAAAMg");
	this.shape_5.setTransform(15.15,24.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E83A4F").s().p("AgVAuQgMgGgHgMQgGgMAAgPQAAgOAGgNQAHgNALgGQAMgGAOAAQALAAAJADQAJAEAFAGQAFAHACAKIgMADQgCgIgDgEQgEgEgGgDQgGgDgIAAQgIAAgHADQgHADgEAEQgEAFgCAFQgEAKAAAKQAAANAFAJQAEAKAJAEQAJAEAJAAQAJAAAIgDQAJgDAEgEIAAgTIgeAAIAAgLIArAAIAAAlQgKAIgKAEQgLADgLAAQgOAAgMgGg");
	this.shape_6.setTransform(5.375,24.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E83A4F").s().p("AgVAuQgMgGgHgMQgGgMAAgPQAAgOAGgNQAHgNALgGQAMgGAOAAQALAAAJADQAJAEAFAGQAFAHACAKIgMADQgCgIgDgEQgEgEgGgDQgGgDgIAAQgIAAgHADQgHADgEAEQgEAFgCAFQgEAKAAAKQAAANAFAJQAEAKAJAEQAJAEAJAAQAJAAAIgDQAJgDAEgEIAAgTIgeAAIAAgLIArAAIAAAlQgKAIgKAEQgLADgLAAQgOAAgMgGg");
	this.shape_7.setTransform(58.675,7.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E83A4F").s().p("AAaAzIg0hPIAABPIgNAAIAAhlIAOAAIA0BPIAAhPIANAAIAABlg");
	this.shape_8.setTransform(48.125,7.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E83A4F").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_9.setTransform(41.125,7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E83A4F").s().p("AgpAzIAAhlIAjAAQALAAAGACQAJACAGAFQAIAHAEALQAEAKAAANQAAALgDAJQgCAJgFAGQgEAGgFADQgFADgHACQgHACgIAAgAgbAnIAVAAQAJAAAGgCQAGgCADgDQAFgFACgIQADgIAAgLQAAgQgFgIQgFgJgIgDQgFgCgLAAIgVAAg");
	this.shape_10.setTransform(34.225,7.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E83A4F").s().p("AAgAzIgMgfIgpAAIgLAfIgOAAIAmhlIAOAAIApBlgAAQAJIgKgbIgHgVIgFATIgLAdIAhAAg");
	this.shape_11.setTransform(24.275,7.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E83A4F").s().p("AglAzIAAhlIBJAAIAAAMIg7AAIAAAfIA2AAIAAALIg2AAIAAAjIA9AAIAAAMg");
	this.shape_12.setTransform(15.05,7.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E83A4F").s().p("AAcAzIgOgVIgJgOIgGgHIgGgDIgIAAIgPAAIAAAtIgOAAIAAhlIAsAAQAOAAAHADQAHADAEAHQAEAHAAAIQAAALgHAHQgHAHgOACQAFACADADQAGAFAFAIIASAcgAgegFIAdAAQAIAAAFgCQAFgCADgEQADgEAAgFQAAgHgGgFQgFgEgLAAIgfAAg");
	this.shape_13.setTransform(5.525,7.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, rect = new cjs.Rectangle(-2,-2.6,70.1,36.8), [rect]);


// stage content:
(lib.Untitled6 = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.red-dot.org/project/optor-31643", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(192));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D54C56").s().p("AizgDQgPgbgHgeIgDgZQArgIC6ADQBeACBVADQAHBnhsAvQgiAPgpAIIghAEQh8gMgyhTg");
	this.shape.setTransform(149.3184,183.249);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7474E").s().p("AisEBQAegPAfgaQA8g0AAg4IADlsIBeAAIAAFoIAGAYQAJAdANAXQAoBMA7ABg");
	this.shape_1.setTransform(150.225,149.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D7474E").p("Ag2ivIBtAAIAJAFQAJAGACAMIAAEyIgDALQgGALgMAAIhwAAQgEgBgEgEQgIgHAAgPIAAkrQAAgHACgFQAEgNAOAAg");
	this.shape_2.setTransform(150.32,106.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7474E").s().p("AgmBQIAAifIBNAAIAACfg");
	this.shape_3.setTransform(150.325,80.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D7474E").p("Ag2iuIBtAAIAJAEQAJAGACAMIAAEyIgDALQgGAKgNAAIhwAAQgDAAgEgEQgIgHAAgPIAAkrQAAgGACgGQAEgMAOAAg");
	this.shape_4.setTransform(149.87,55.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77C0DC").s().p("AiCAMIAggTIBlBfQAKgGAEgOQACgNgHgLIgvhJQgFgFgNgCIApgbIBlBfIAEgCIgrh5QgHgDgGAAIApgcIA1CWIg1AhIglgjQAHAVgIAUQgGAWgSANIABAAIgfAUg");
	this.shape_5.setTransform(282.8898,209.9367,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77C0DC").s().p("AgzBHIAVgJQgdgLgMgbIgGgNQgMgaALgbQALgbAagMIAAAAQAbgLAaAKQAbALAMAaIAFANQANAdgMAaIAUgJIAIASIiAA4g");
	this.shape_6.setTransform(277.2059,214.2611,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#77C0DC").s().p("AhZg9IAkgLIADAIQALgMARgGIABAAQAagIAaANQAaAOAIAcIAZBQIgkALIgfhjQgDgMgMgHQgLgGgNAEQgNAEgGALQgGALACAMIAbBWQACAFANAHIgvAOg");
	this.shape_7.setTransform(271.6018,216.1097,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#77C0DC").s().p("Ag5BkIgYjCIAmgFIAHA/IBegLIACATIhdAMIALBdIBlgNIACATIiKARg");
	this.shape_8.setTransform(263.2085,217.0502,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#77C0DC").s().p("AgXAVIAIAAQgJgIAAgKIAAgdIANAAIAAAkQABADACADQADAEAEABIAEAAQAEgBACgEQADgDAAgDIAAgkIANAAIAAAdQAAAKgIAIIAIAAIAAAGIgwABg");
	this.shape_9.setTransform(257.75,217.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#77C0DC").s().p("AhKBBIACgTIAXADQgUgZADgcIACgOQADgdAXgSQAXgSAcADQAdAEASAXQASAWgDAdIgCANQgEAegYATIAWACIgCATg");
	this.shape_10.setTransform(252.0693,217.7288,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#77C0DC").s().p("AhaBEIAThSQAHgcAZgPQAZgQAbAHQAQADAOAMIALgwIAlAJIgtC+g");
	this.shape_11.setTransform(246.8899,216.3618,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#77C0DC").s().p("AAOBUIAkhhQAEgNgGgMQgGgMgMgEQgMgFgMAFQgLAFgFAMIgfBUQgBAHAHAMIgvgRIA1iRIAiANIgCAIQARgDAQAGQAcAKAMAaQAMAbgKAaIgcBQg");
	this.shape_12.setTransform(241.0657,215.0821,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#77C0DC").s().p("Ag2BLIA/iMIAjAQIg/CMgAAMhJIAIgRIAjAPIgIASg");
	this.shape_13.setTransform(238.1966,213.2464,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#77C0DC").s().p("AhqBNIBeirIByA/QAEACABAEQABADgCAEIgEAIIgWAMIgigRIAWgNIg5ggIggA9IA2AeIgTALIgsgZIgrBOg");
	this.shape_14.setTransform(234.9899,210.5457,0.353,0.353);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(258.35,208.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3E352").s().p("AgWAiQgLgLABgUQABgQAIgMQAIgKALgEQAJgFAJACQAIACAAAGQAAAEgCAFQgCAGgDABQgOgHgLAJQgFAEgEAGQgDAGAAAFQAAAHAGAGQAIAHAIAAQAIAAAHgFQAGgDAEgGIgZgCQgGgCgHgIIAQgDQgGgBgMACIgBgBIAUgDQAQgCAHABQADABACAGQACAFgBAEQACAPgJAKQgKALgPAAQgNAAgKgKg");
	this.shape_15.setTransform(283.5846,154.4442);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3E352").s().p("AgeAFQgBgmgCgHIAGgBQAGgCAFABQAGABADAFQAHATANAeIADgiIADgaIABAEIABgCIACAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAFALIABABQgBAkACATIABAKIABADQgBACgFABQgFACgEAAQgEgBgCgHQgIgMgQghIgEAnIgBgBIgDAHIgBABIgCADIgCgBIgBAFIgDAAIgBACIgBgrg");
	this.shape_16.setTransform(277.15,154.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3E352").s().p("AgGAEQgCglgBgIQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAHgCAEACQAIAEgBAPQAAAYgDAdIgCADIgCAFIgDACIAAACIgBAAIgBACIgBAAIgCACIgBgpg");
	this.shape_17.setTransform(272.4266,154.3556);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3E352").s().p("AgNAlQgSgGAAgWQADgEAAAEQAAADAEADQAEADAHABQgBgfgCgOQgLAAgMADQgDgCgCgGQgCgIAEgDQBYgKgBA4QAAATgUAKQgNAGgOAAIgEAAIAAACIgDAAIgBACIgBAAIgCABgAAAAVQALgBAMgHQALgHABgGQAAgFgJgHQgKgHgPgEIgBAsgAgDAVIABAAIAAAAIAAgPg");
	this.shape_18.setTransform(266.9138,154.6998);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3E352").s().p("AgZAtIgBgCIgCAAIgBgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgFIgCABIAAgFIAKgaQAIgZABgUQAOgCAFADQAJAAABAHIAEAYQAEATAKAWQAAABAAgBIgBAAIACAHIgBAEIgCABIAAABIgBABIgCAAQgFAAgIgTIgDABQgGAAgVADIgKAQIAAAAgAAJAMQgFgLgEgLIgHAVIAQABIAAAAg");
	this.shape_19.setTransform(261.175,154.585);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3E352").s().p("AghAsIgDgGQgDgIAEgDIADgBQgBg9gCgGQAFgCAFAAQANgCAlAAIAAAEIgEACIgDADIADAAIgEACIAAACIgGACIgYAEIAAAEIAAAJQARgDAOAAIgBADIgBADIgEACIACAAIgEADIAAABIgFACIAAABIgGACIgOAEIgCAPQAjgMAUADIgDADIgBACIgEACIADABIgFADIgFAEQgbAGgZANIgBABIgDgCg");
	this.shape_20.setTransform(255.5107,154.605);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E352").s().p("AgXANQgHgFgCgIIgBgEQACAGADACQgEgGABgFQABADAHADIgBgYIgIACQgDgBgCgGQgCgHADgDQADgCALgCQANgCAMABQAkADgBAfQAAAQgRAHQAJAPgDAMQAAgLgFgJQAFARgCAFIAAgBIgDADIgDABIgBgCQgDgMgLgOIgLABIAAAAIgBANIgCAEIgDAFIgCACIgBACIgBAAIgCACIgBAAIgCACIgBgigAgGgbIABAFIgBAXQALAAALgEQAMgFAAgGQABgGgJgEQgJgDgMAAIgFAAg");
	this.shape_21.setTransform(248.2503,154.6357);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3E352").s().p("AgXANQgHgFgCgIIgBgEQACAGACACQgDgGABgFQABADAHADIgBgYIgIACQgDgBgCgGQgCgHADgDQADgCALgCQANgCAMABQAkADgBAfQAAAQgRAHQAIAPgCAMQAAgLgFgJQAFARgCAFIAAgBIgDADIgDABIgBgCQgDgMgLgOIgKABIgBAAIgBANIgCAEIgDAFIgCACIgBACIgBAAIgCACIgBAAIgCACIgBgigAgGgbIABAFIgBAXQALAAALgEQAMgFABgGQAAgGgJgEQgJgDgMAAIgFAAg");
	this.shape_22.setTransform(237.9503,154.6357);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E352").s().p("AgZAtIgBgCIgCAAIgBgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgFIgCABIAAgFIAKgaQAIgZABgUQAOgCAFADQAJAAABAHIAEAYQAEATAKAWQAAABAAgBIgBAAIACAHIgBAEIgCABIAAABIgBABIgCAAQgFAAgIgTIgDABQgGAAgVADIgKAQIAAAAgAAJAMQgFgLgEgLIgHAVIAQABIAAAAg");
	this.shape_23.setTransform(232.075,154.585);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3E352").s().p("AghAsIgDgGQgDgIAEgDIADgBQgBg9gCgGQAFgCAFAAQANgCAlAAIAAAEIgEACIgDADIADAAIgEACIAAACIgGACIgYAEIAAAEIAAAJQARgDAOAAIgBADIgBADIgEACIACAAIgEADIAAABIgFACIAAABIgGACIgOAEIgCAPQAjgMAUADIgDADIgBACIgEACIADABIgFADIgFAEQgbAGgZANIgBABIgDgCg");
	this.shape_24.setTransform(226.4107,154.605);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3E352").s().p("AgUAvIgFgGQgGgLAGgDIACgBQAFg/gFgIQAXgLgBAaQABATgGAdQAVgLANABIgDACQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABIgBACIAAAFIgCAEIABAAIgDACIgNAGQgNAJgNAJIgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_25.setTransform(220.1497,154.5262);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3E352").s().p("AgWAiQgLgLABgUQAAgQAJgMQAHgKAMgFQAJgEAIACQAJACAAAGQAAAEgCAFQgDAGgCABQgPgIgLAKQgFAEgDAGQgDAGAAAFQAAAGAGAHQAHAGAJAAQALAAAKgJQAIgHAAgGQAAgEADAEQAEARgJAMQgJANgRAAQgNAAgKgKg");
	this.shape_26.setTransform(214.1739,154.4795);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3E352").s().p("AgcAFQgBgngCgJQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAIgCAFACQAIAEgBAPIgBAdQALgBAKABQgBgdACgSQAFgCAHABQAHABACAEQABADgCARQgEAaAAAYIAAABIgBAAIgBAEIgBAAIAAAAIgCAIIgCgBIAAABIgCAAIgBACIgBAAQgEgKgBgSIgCABIgVADIgBAJIgBgBIAAADIgCABIgCAFIgDACIgCADIgCgBIgBAEIgBABIgBgqg");
	this.shape_27.setTransform(204.4617,154.5875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3E352").s().p("AgLgXIgUABQgIAAgBgKQAAgEABgEQABgDADgBIAWgBIACgBQAIgCAFAEIAnACQAAAFgDAEQgFAGgHACIgSABQgBAZgDAdIgDAGIgBAAIgBAFQgBAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAIgBACIgBAAIgCADIgBgDIgBAEIgChGg");
	this.shape_28.setTransform(198.8917,154.5519);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3E352").s().p("AgGAEQgCglgBgIQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAHgCAEACQAIAEgBAPQAAAYgDAdIgCADIgCAFIgDACIAAACIgBAAIgBACIgBAAIgCACIgBgpg");
	this.shape_29.setTransform(194.1766,154.3556);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3E352").s().p("AANApQgHgRgGghQgLAjgBASQgHACgEgDIgBAAIgCgDIAAAFIgBgCIgHgjQgGgfgGgKIgDgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAZgPAFAgIADAYQAHgUAHgLIgBgBIgBgBIABgCQALgEACAHIADAPIAFAUQAJgcANgYIABABIABgBIACACIAEADQAFAFgIARQgNAaAAAkQgFACgFAAIgCAAQgEAAgDgFg");
	this.shape_30.setTransform(188.506,154.2077);

	this.instance = new lib.Group();
	this.instance.setTransform(46.85,225.35,0.3009,0.3009,0,0,0,33.8,16.4);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(20.7,224.15,0.353,0.353,0,0,0,54.2,18.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5368B").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape_31.setTransform(42.2213,239.3372,0.3529,0.3529);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F0E13").s().p("Ag7A8QgYgZAAgjQAAgiAYgYQAZgZAiAAQAjAAAZAZQAYAYAAAiQAAAjgYAZQgZAYgjAAQgiAAgZgYg");
	this.shape_32.setTransform(35.1285,239.3901,0.3529,0.3529);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E53746").s().p("Ag7A8QgYgZAAgjQAAgiAYgYQAZgZAiAAQAjAAAZAZQAYAYAAAiQAAAjgYAZQgZAYgjAAQgiAAgZgYg");
	this.shape_33.setTransform(27.8593,239.3901,0.3529,0.3529);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#107CB1").s().p("Ag7A8QgYgZAAgjQAAgiAYgYQAZgZAiAAQAjAAAZAZQAYAYAAAiQAAAjgYAZQgZAYgjAAQgiAAgZgYg");
	this.shape_34.setTransform(20.3607,239.3901,0.3529,0.3529);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E3E352").s().p("Ag7A8QgYgZAAgjQAAgiAYgYQAZgZAiAAQAjAAAZAZQAYAYAAAiQAAAjgYAZQgZAYgjAAQgiAAgZgYg");
	this.shape_35.setTransform(13.0915,239.3901,0.3529,0.3529);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFF6D3").s().p("AktEqIAApTIJcAAIAAJTg");
	this.shape_36.setTransform(147.434,220.4488,1,1,89.9991);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF6D3").s().p("As8M9IAA55IZ5AAIAAZ5g");
	this.shape_37.setTransform(88.3276,160.9277,0.353,0.353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFF6D3").s().p("AtBNBIAA6BIaDAAIAAaBg");
	this.shape_38.setTransform(29.2838,220.907,0.353,0.353);

	this.instance_2 = new lib.Group_4();
	this.instance_2.setTransform(57.05,96.9,0.353,0.353,0,0,0,193.5,242.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF6D3").s().p("AhDFdIAAq7QAagIAnATQAlATgGACQAIAGgQAAIAAATQAFAIgCAFQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQADAlgOATIgOAMQAKAGAAALQAAAFgDAEQgIANAHALQAFAFAFADQASATgJANIgOALQghAtASBYQAJArAPAgQAMAAgBAPQACAiAQAPQAIAHAHAAQAMAIgEAOQgDAGgEAGQgFAMABAEQAAAEAEAAQAGAAACAKQgDBBhBAkQgXANgWAEIgMABQgJAAgBgFg");
	this.shape_39.setTransform(151.7889,59.9938,0.3529,0.3529);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFF6D3").s().p("AAuFhQgVgEgYgNQhAgkgEhBIACgFQACgFAEAAQAFAAAAgEQAAgEgFgMQgEgGgDgGQgEgOAMgIIAQgHQAQgPABgiIABgHQACgIAIAAQAOggAKgrQAShYgigtQgIgEgEgHQgLgOATgSIAKgIQAIgLgJgNQgDgEAAgFQAAgLALgGQgIgCgGgKQgPgTADglQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQgCgFAFgIIAAgTIgHgBQgGgBAFgEQgGgCAlgTQAngTAaAIIAAK7QgBAFgJAAIgMgBg");
	this.shape_40.setTransform(147.3515,59.9938,0.3529,0.3529);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF6D3").s().p("AgHAEIACgYIAJAQIAEAZg");
	this.shape_41.setTransform(146.1606,47.3557,0.3529,0.3529);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFF6D3").s().p("AgFgIIAJgLIACAWIgKARg");
	this.shape_42.setTransform(153.3151,47.6821,0.3529,0.3529);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF6D3").s().p("AAAAkIgWgfIgDgDQgDgDAEgFIAWgfQAEgEAEAKIAUAfQADACgEAFIgUAeQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_43.setTransform(149.7423,45.7975,0.3529,0.3529);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFF6D3").s().p("AA5AmQgQgKgsABQgsACABAEQgHACgJAAQgSgCgGgQIgIgMQgHgMABgOIgGgRIAGgEQAGgDABAJQAAAJgCAEIAGAEQAIAFAEgBIAEAEQAFAFgBAMIAIAKQAJALAFABQAygJAwALIAWgQQAAgHACgHQAEgMAKAEQAIgGAAgGIgCgLQAAgGAHACQALAFgKAQQABAXgNAFIgDADQgCAFABAGQgBAFgFADQgEAEgHAAQgGAAgHgEg");
	this.shape_44.setTransform(149.767,46.4551,0.3529,0.3529);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF6D3").s().p("ABPBWQgWgLgZgFQhLgSgwAsIgDguIgMgQIAAgQQgEgCgBgDQgEgHAJgKIAFABQAFABACgBIgBAJQAAAKAEgBIADAgIATAUQAWAJAQg3QgCgCAAgFQAAgKAOgNIANgfIAAgNIgUABIAAgYIAHABQAIgBAAgNIADgEQAFgEAFADQAJAFAAAGIABAFQACAFAHABIAIABIAAAWIgOgCIAAAYQADAPALAMQALAOgLAHIAVAmQAXAdANgmIAKgBQAJgGAAgbIgGgKQgFgJAHABIAFACQAFADACALQADAJgIABIAAAUQABAUACAGIgQAbQAAgDgQgIg");
	this.shape_45.setTransform(149.7122,45.3172,0.3529,0.3529);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFF6D3").s().p("AgHADIADgdIAMAQIAAAlg");
	this.shape_46.setTransform(146.1253,47.435,0.3529,0.3529);

	this.instance_3 = new lib.Path();
	this.instance_3.setTransform(149.7,35.9,0.353,0.353,0,0,0,19.1,103.8);
	this.instance_3.alpha = 0.6602;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231B42").s().p("A4AUBMAAAgoBMAwBAAAMAAAAoBg");
	this.shape_47.setTransform(149.625,124.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DD93BC").s().p("AiCAMIAggTIBlBfQAKgGAEgOQACgNgHgLIgvhJQgFgFgNgCIApgbIBlBfIAEgCIgrh5QgHgDgGAAIApgcIA1CWIg1AhIglgjQAHAVgIAUQgGAWgSANIABAAIgfAUg");
	this.shape_48.setTransform(282.8898,209.9367,0.353,0.353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DD93BC").s().p("AgSAZIAIgDQgLgEgEgJIgCgFQgEgIAEgKQAEgKAJgEQAJgEAJAEQAKAEAEAJIACAFQAEAKgEAIIAHgDIADAGIgtAUg");
	this.shape_49.setTransform(277.2183,214.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DD93BC").s().p("AhZg9IAkgLIADAIQALgMARgGIABAAQAagIAaANQAaAOAIAcIAZBQIgkALIgfhjQgDgMgMgHQgLgGgNAEQgNAEgGALQgGALACAMIAbBWQACAFANAHIgvAOg");
	this.shape_50.setTransform(271.6018,216.1097,0.353,0.353);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DD93BC").s().p("Ag5BkIgYjCIAmgFIAHA/IBegLIACATIhdAMIALBdIBlgNIACATIiKARg");
	this.shape_51.setTransform(263.2085,217.0502,0.353,0.353);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DD93BC").s().p("AgXAVIAIAAQgJgIAAgKIAAgdIANAAIAAAkQABADACADQADAEAEABIAEAAQAEgBACgEQADgDAAgDIAAgkIANAAIAAAdQAAAKgIAIIAIAAIAAAGIgwABg");
	this.shape_52.setTransform(257.75,217.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DD93BC").s().p("AhKBBIACgTIAXADQgUgZADgcIACgOQADgdAXgSQAXgSAcADQAdAEASAXQASAWgDAdIgCANQgEAegYATIAWACIgCATg");
	this.shape_53.setTransform(252.0693,217.7288,0.353,0.353);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DD93BC").s().p("AhaBEIAThSQAHgcAZgPQAZgQAbAHQAQADAOAMIALgwIAlAJIgtC+g");
	this.shape_54.setTransform(246.8899,216.3618,0.353,0.353);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DD93BC").s().p("AAOBUIAkhhQAEgNgGgMQgGgMgMgEQgMgFgMAFQgLAFgFAMIgfBUQgBAHAHAMIgvgRIA1iRIAiANIgCAIQARgDAQAGQAcAKAMAaQAMAbgKAaIgcBQg");
	this.shape_55.setTransform(241.0657,215.0821,0.353,0.353);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DD93BC").s().p("Ag2BLIA/iMIAjAQIg/CMgAAMhJIAIgRIAjAPIgIASg");
	this.shape_56.setTransform(238.1966,213.2464,0.353,0.353);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DD93BC").s().p("AhqBNIBeirIByA/QAEACABAEQABADgCAEIgEAIIgWAMIgigRIAWgNIg5ggIggA9IA2AeIgTALIgsgZIgrBOg");
	this.shape_57.setTransform(234.9899,210.5457,0.353,0.353);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DD93BC").s().p("AgzBHIAVgJQgdgLgMgbIgGgNQgMgaALgbQALgbAagMIAAAAQAbgLAaAKQAbALAMAaIAFANQANAdgMAaIAUgJIAIASIiAA4g");
	this.shape_58.setTransform(277.2059,214.2611,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1253,y:47.435,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7122,y:45.3172,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.767,y:46.4551,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7423,y:45.7975,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3151,y:47.6821,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1606,y:47.3557,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3515,y:59.9938,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7889,y:59.9938,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0915,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3607,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8593,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.1285,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2213,y:239.3372,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1253,y:47.435,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7122,y:45.3172,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.767,y:46.4551,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7423,y:45.7975,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3151,y:47.6821,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1606,y:47.3557,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3515,y:59.9938,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7889,y:59.9938,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0915,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3607,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8593,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.1285,y:239.3901,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2213,y:239.3372,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1189,y:47.433,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_45,p:{x:149.7057,y:45.3152,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_44,p:{x:149.7605,y:46.453,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_43,p:{x:149.7358,y:45.7955,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_42,p:{x:153.3085,y:47.68,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_41,p:{x:146.1542,y:47.3536,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_40,p:{x:147.3451,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_39,p:{x:151.7823,y:59.9912,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0909,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_34,p:{x:20.3598,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_33,p:{x:27.8581,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_32,p:{x:35.127,y:239.3797,scaleX:0.3529,scaleY:0.3529}},{t:this.shape_31,p:{x:42.2195,y:239.3268,scaleX:0.3529,scaleY:0.3529}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_58},{t:this.shape_48},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_47},{t:this.instance_3},{t:this.shape_46,p:{x:146.1062,y:47.4288,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_45,p:{x:149.6927,y:45.3112,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_44,p:{x:149.7475,y:46.4489,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_43,p:{x:149.7227,y:45.7915,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_42,p:{x:153.2951,y:47.6758,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_41,p:{x:146.1415,y:47.3494,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_40,p:{x:147.3323,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_39,p:{x:151.7691,y:59.9859,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:13.0897,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_34,p:{x:20.358,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_33,p:{x:27.8556,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_32,p:{x:35.1239,y:239.3589,scaleX:0.3528,scaleY:0.3528}},{t:this.shape_31,p:{x:42.2157,y:239.306,scaleX:0.3528,scaleY:0.3528}},{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.movieClip_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140,121.3,313.3,256.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '3C8FDF0EB6CC49A79CAC2B9B0EACE495',
	width: 300,
	height: 250,
	fps: 30,
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
an.compositions['3C8FDF0EB6CC49A79CAC2B9B0EACE495'] = {
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