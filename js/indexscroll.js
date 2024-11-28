$(document).ready(function () {
  var controller = $.superscrollorama();

  //zone 1
  controller.addTween(
    "#zone1 h1",
    TweenMax.to("#zone1 h1", 0.5, { opacity: 0 }),
    0.5,
    50
  );
  controller.addTween(
    "#zone1 img",
    TweenMax.to("#zone1 img", 0.5, { opacity: 0 }),
    0.5,
    80
  );

  //zone 2
  controller.addTween(
    "#zone2",
    TweenMax.from("#zone2 h1", 0.5, { opacity: 0 }),
    0.5,
    80
  );

  controller.addTween(
    "#zone2 p img.1",
    TweenMax.to("#zone2 p img.1", 0.5, { opacity: 1 }),
    0.5,
    0
  );
  controller.addTween(
    "#zone2 p img.2",
    TweenMax.to("#zone2 p img.2", 0.5, { opacity: 1 }),
    0.5,
    30
  );
  controller.addTween(
    "#zone2 p img.3",
    TweenMax.to("#zone2 p img.3", 0.5, { opacity: 1 }),
    0.5,
    50
  );
  //zone 3
  controller.addTween(
    "#zone3",
    TweenMax.fromTo(
      $("#zone3 h1 .special"),
      2,
      {
        css: { opacity: 0, fontSize: "0pt" },
        immediateRender: true,
        ease: Quad.easeInOut,
      },
      { css: { opacity: 1, fontSize: "150pt" }, ease: Quad.easeInOut }
    ),
    25,
    120
  );
  controller.addTween(
    "#zone3",
    TweenMax.fromTo(
      $("#zone3 #container h1.vieren"),
      1.25,
      {
        css: { opacity: 0, fontSize: "20px" },
        immediateRender: true,
        ease: Quad.easeInOut,
      },
      {
        css: { opacity: 1, fontSize: "70px", rotation: 720 },
        ease: Quad.easeInOut,
      }
    ),
    70,
    200
  );

  //zone 4
  controller.addTween(
    "#zone4 .container2",
    TweenMax.from("#zone4 .container2", 1, { opacity: 0 }),
    1,
    180
  );

  //zone 7
  controller.addTween(
    "#zone7",
    TweenMax.from($("#zone7 h1"), 0.5, {
      css: { left: "-500px" },
      ease: Quad.easeInOut,
    })
  );
  controller.addTween(
    "#zone7",
    TweenMax.from($("#zone7 h2"), 0.5, {
      css: { right: "-500px" },
      ease: Quad.easeInOut,
    })
  );

  //zone 8
  controller.addTween(
    "#zone8",
    TweenMax.from($("#zone8 h1"), 0.5, {
      css: { left: "-500px" },
      ease: Quad.easeInOut,
    })
  );
  controller.addTween(
    "#zone8",
    TweenMax.from($("#zone8 h2"), 0.5, {
      css: { left: "-500px" },
      ease: Quad.easeInOut,
    })
  );
  controller.addTween(
    "#zone8",
    TweenMax.from("#zone8 #maps", 1, { opacity: 0 }),
    1,
    150
  );

  //zone 10
  controller.addTween(
    "#zone10 h1",
    TweenMax.fromTo(
      $("#zone10 h1"),
      2,
      {
        css: { opacity: 0, fontSize: "0pt" },
        immediateRender: true,
        ease: Quad.easeInOut,
      },
      {
        css: { opacity: 1, fontSize: "40pt", rotation: 720 },
        ease: Quad.easeInOut,
      }
    ),
    2,
    120
  );
});
