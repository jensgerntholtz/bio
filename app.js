// The amount of circles we want to make:
var count = 150;

// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}
var path = new Path.Rectangle({
	point: [75, 75],
	size: [5, 30],
	fillColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

var player = new Path.Rectangle({
	point: [75, 75],
	size: [100, 100],
	fillColor: 'black'
});

function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		item.position.y += item.bounds.height / 10;

		if (item.bounds.top > view.size.width) {
			item.position.y = -item.bounds.height;
		}
		
		if(player.intersects(item)) {
		    var center
		    console.log(view.center.x - player.position.x)
		    if(view.center.x - player.position.x > 0) {
		        player.position.x +=  10;
		    } else {
		        player.position.x -=  10;
		    }
		}
		
	}
}