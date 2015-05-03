// a contour
shape = new p.Path.RegularPolygon({
    center: [268, 124],
    sides: 3,
    radius: 248
});
shape.rotate(180, [268, 124]);
shape.scale(1, 1.4, [268, 0]);
a.addContour(shape);
