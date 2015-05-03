setTimeout(function(){
	(function(p) {

	p.paper.setup();

	var font = new p.Font({
	        familyName: 'Demo',
	        ascender: 800,
	        descender: -100
	    }),
	    a = new p.Glyph({
	        name: 'a',
	        unicode: 'a',
	        advanceWidth: 520
	    }),
	    i = new p.Glyph({
	        name: 'i',
	        unicode: 'i',
	        advanceWidth: 268
	    }),
	    o = new p.Glyph({
	        name: 'o',
	        unicode: 'o',
	        advanceWidth: 460
	    }),
		c = new p.Glyph({
			name: 'c',
			unicode: 'c',
			advanceWidth: 512
		}),
		r = new p.Glyph({
	        name: 'r',
	        unicode: 'r',
	        advanceWidth: 330
	    }),
		u = new p.Glyph({
			name: 'u',
			unicode: 'u',
			advanceWidth: 560
		}),
		shape,
		counter;

		// predefined random values
	 	random		= Math.floor((Math.random() * 100) + 1),
		random10	= Math.floor((Math.random() * 100) + 10),
		random5_40	= Math.floor((Math.random() * 40) + 5),
		random20	= Math.floor((Math.random() * 100) + 20),
		random50	= Math.floor((Math.random() * 100) + 50),
		random100	= Math.floor((Math.random() * 100) + 100);

		// a contour
		shape = new p.Path.RegularPolygon({
		    center: [268, 124],
		    sides: 3,
		    radius: 248
		});
		shape.rotate(180, [268, 124]);
		shape.scale(1, 1.4, [268, 0]);
		counter = new p.Path.RegularPolygon({
		    center: [268, 110],
		    sides: 3,
		    radius: 248
		});
		counter.scale(1, 1.4, [268, 0]);
		a.addContour(shape.subtract(counter));

		// i contour
		shape = new p.Path.Rectangle({
		    point: [60, 0],
		    size: [100, 500]
		});
		i.addContour(shape);

		// o contour
		shape = new p.Path.Ellipse({
		    point: [20, 0],
		    size: [400, 400]
		});
		counter = new p.Path.Ellipse({
			point: [180, 160],
			size: [80, 80]
		});
		shape = shape.subtract(counter);
		o.addContour(shape);

		// c contours
		shape = new p.Path.Ellipse({
			point: [0, 0],
			size: [520, 500]
		});
		counter = new p.Path.Ellipse({
			point: [40, 40],
			size: [440, 420]
		});
		shape = shape.subtract(counter);
		counter = new p.Path.Rectangle({
			point: [400, 100],
			size: [200, 300]
		});
		c.addContour(shape.subtract(counter));

		// r contour
		shape = new p.Path.Rectangle({
		    point: [20, 0],
		    size: [120, 500]
		});
		r.addContour(shape);
		shape = new p.Path.Circle({
			center: [270, 450],
			radius: [ window.lat, window.lat ]
		});
		r.addContour(shape);

		// u contours
		shape = new p.Path.Circle({
			center: [120, 120],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [120, 220],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [120, 320],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [120, 420],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [220, 20],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [220, 120],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [220, 220],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [220, 320],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [220, 420],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [320, 20],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [420, 120],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [420, 220],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [420, 320],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [420, 420],
			radius: [random5_40, random5_40]
		});
		u.addContour(shape);


		font.addGlyphs([ a, c, i, o, r, u ]);
		font.updateOTCommands()
		    .addToFonts();

		window.font = font;

})(plumin.paper);
}, 500);
