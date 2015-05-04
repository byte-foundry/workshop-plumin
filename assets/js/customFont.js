setTimeout(function(){
	(function(p) {

	///////////////////////////////////////////////////////////////////
	// predefined random values
 	random		= Math.floor((Math.random() * 100) + 1),
	random10	= Math.floor((Math.random() * 10) + 1),
	random100	= Math.floor((Math.random() * 100) + 1),
	random5_40	= Math.floor((Math.random() * 40) + 5),
	random20	= Math.floor((Math.random() * 20) + 1),
	random50	= Math.floor((Math.random() * 50) + 1),
	random10_180	= Math.floor((Math.random() * 180) + 10);
	random10_100	= Math.floor((Math.random() * 100) + 10);
	random20_200	= Math.floor((Math.random() * 200) + 20);
	random50_800	= Math.floor((Math.random() * 800) + 50);
	random120_400	= Math.floor((Math.random() * 400) + 120);
	random100_4000	= Math.floor((Math.random() * 4000) + 100);
	random08_3	= Math.floor((Math.random() * 3) + 0.8);

	///////////////////////////////////////////////////////////////////
	// On initialise plumin.js
	p.paper.setup();

	///////////////////////////////////////////////////////////////////
	// On déclare les glyphes et leur encombrement (largeur de cadratin)
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
	        advanceWidth: 580
	    }),
		c = new p.Glyph({
			name: 'c',
			unicode: 'c',
			advanceWidth: 512
		}),
		r = new p.Glyph({
	        name: 'r',
	        unicode: 'r',
	        advanceWidth: 460
	    }),
		u = new p.Glyph({
			name: 'u',
			unicode: 'u',
			advanceWidth: 590
		}),
		B = new p.Glyph({
	        name: 'B',
	        unicode: 'B',
	        advanceWidth: 700 * random08_3
	    }),
		H = new p.Glyph({
	        name: 'H',
	        unicode: 'H',
	        advanceWidth: 700 + random100_4000
	    }),
		I = new p.Glyph({
	        name: 'I',
	        unicode: 'I',
	        advanceWidth: 120 + random120_400
	    }),
		L = new p.Glyph({
			name: 'L',
			unicode: 'L',
			advanceWidth: 700
		}),
		O = new p.Glyph({
			name: 'O',
			unicode: 'O',
			advanceWidth: 750
		}),
		T = new p.Glyph({
	        name: 'T',
	        unicode: 'T',
	        advanceWidth: 700
	    }),
		Z = new p.Glyph({
	        name: 'Z',
	        unicode: 'Z',
	        advanceWidth: 1100
	    }),
		zero = new p.Glyph({
	        name: 'zero',
	        unicode: '0',
	        advanceWidth: 580
	    }),
		shape,
		counter;

		///////////////////////////////////////////////////////////////////
		// On dessine les glyphes
		// Références de paper.js pour dessiner des formes:
		// http://paperjs.org/reference/shape/

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
		shape = new p.Path.Rectangle({
		    point: [60, 550 + window.tempDeg * 10 ],
		    size: [100, 100]
		});
		i.addContour(shape);

		// o contour
		shape = new p.Path.Ellipse({
		    point: [20, 0],
		    size: [500, 500]
		});
		counter = new p.Path.Ellipse({
			point: [225, 250 - random50_800 / 2],
			size: [100, random50_800 ]
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
		    point: [80, 0],
		    size: [120, 500]
		});
		r.addContour(shape);
		shape = new p.Path.Circle({
			center: [330, 450],
			radius: window.lat
		});
		r.addContour(shape);

		// u contours
		shape = new p.Path.Circle({
			center: [50, 520],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [150, 120],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [150, 220],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [150, 320],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [150, 420],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [150, 520],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 20],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 120],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 220],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 320],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 420],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [250, 520],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [350, 20],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [450, 120],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [450, 220],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [450, 320],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [450, 420],
			radius: random5_40
		});
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [450, 520],
			radius: random5_40
		});
		u.addContour(shape);
		u.addContour(shape);
		shape = new p.Path.Circle({
			center: [550, 20],
			radius: random5_40
		});
		u.addContour(shape);

		// B contour
		shape = new p.Path.RegularPolygon({
		    center: [268, 124],
		    sides: 3,
		    radius: 300
		});
		shape.rotate(90, [268, 124]);
		shape.scale( random08_3, 1, [0, 0]);
		B.addContour(shape);
		shape = new p.Path.RegularPolygon({
		    center: [768, 124],
		    sides: 3,
		    radius: 300
		});
		shape.rotate(90, [268, 124]);
		shape.scale( random08_3, 1, [0, 0]);
		B.addContour(shape);

		// H contour
		shape = new p.Path.Rectangle({
		    point: [100, 0],
		    size: [120, 770]
		});
		H.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [500 + random100_4000, 0],
		    size: [120, 770]
		});
		H.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [110, 320],
		    size: [500 + random100_4000, 120]
		});
		H.addContour(shape);

		// I contour
		shape = new p.Path.Rectangle({
		    point: [ random120_400 / 2 + 50 - 60 , 0],
		    size: [120, 770]
		});
		I.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [ 50, 750 ],
		    size: [ random120_400, 20 ]
		});
		I.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [ 50, 0 ],
		    size: [ random120_400, 20 ]
		});
		I.addContour(shape);

		// L contour
		shape = new p.Path.Rectangle({
		    point: [80, 0],
		    size: [random100, 770]
		});
		L.addContour(shape);
		shape = new p.Path.Rectangle({
			point: [190, 0],
			size: [random100, 770]
		});
		L.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [80, 0 ],
		    size: [550, random100 ]
		});
		L.addContour(shape);
		L.addContour(shape);
		shape = new p.Path.Rectangle({
			point: [80, 110 ],
			size: [550, random100 ]
		});
		L.addContour(shape);

		// T contour
		shape = new p.Path.Rectangle({
		    point: [290, 0],
		    size: [120, 770]
		});
		T.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [30, 770 - random10_180 ],
		    size: [640, random10_180 ]
		});
		T.addContour(shape);

		// O contour
		shape = new p.Path.Star({
			center: [ 350, 350 ],
		    points: windSpeed,
		    radius1: window.pressure,
			radius2: 400
		});
		counter = new p.Path.Circle({
			center: [ 350, 350 ],
			radius: window.windDirection
		})
		shape = shape.subtract(counter);
		O.addContour(shape);

		// Z contour
		shape = new p.Path.Rectangle({
		    point: [290, -20],
		    size: [120, 700]
		});
		shape.rotate(- window.tempFar );
		shape.translate(150, 50);
		Z.addContour(shape);
		shape = new p.Path.Rectangle({
		    point: [ 50, 650 ],
		    size: [ 900, 120 ]
		});
		Z.addContour(shape);
		shape = new p.Path.Rectangle({
			point: [ 50, 0 ],
			size: [ 900, 120 ]
		});
		Z.addContour(shape);

		// 0 contour
		shape = new p.Path.Star({
			center: [ 250, 250 ],
		    points: 12,
		    radius1: 100,
			radius2: 200
		});
		counter = new p.Path.Circle({
			center: 250,
			radius: 100
		})
		shape = shape.subtract(counter);
		shape.translate(0, tempFar * 8 );
		zero.addContour(shape);

		window.font = font;

		///////////////////////////////////////////////////////////////////
		// On insère les glyphes dans la fonte
		// Puis on la met à jour
		font.addGlyphs([ a, c, i, o, r, u, B, H, I, L, O, T, Z, zero ]);
		font.updateOTCommands()
		    .addToFonts();

})(plumin.paper);
}, 700);
