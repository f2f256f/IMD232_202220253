function setup() {
  setCanvasContainer('canvas-goes-here', 800, 500, true);
  background(192, 192, 192);
}

function draw() {
  background(192, 192, 192);
  colorMode(RGB);
  noStroke();
  rectMode(CORNER);

  let windowResized = min(width / 960, height / 630);

  fill(27, 35, 53); //floor

  rect(0, 490 * windowResized, 1100 * windowResized, 140 * windowResized);
  fill(128, 128, 128, 180);

  rect(0, 475 * windowResized, 1100 * windowResized, 15 * windowResized);

  fill(191, 210, 211); //창문
  rect(0, 0, 400 * windowResized, 200 * windowResized);

  fill(128, 128, 128);
  rect(400 * windowResized, 0, 10 * windowResized, 200 * windowResized); //창문 세로선
  rect(0, 200 * windowResized, 420 * windowResized, 10 * windowResized); //창문 가로선
  fill(105 * windowResized, 105 * windowResized, 105 * windowResized);
  rect(0, 210 * windowResized, 410 * windowResized, 10 * windowResized);
  fill(128, 128, 128);
  rect(0, 220 * windowResized, 410 * windowResized, 20 * windowResized);

  fill(240, 248, 255, 180);
  rect(300 * windowResized, 0, 150 * windowResized, 280 * windowResized); //커튼
  rect(0, 0, 70 * windowResized, 280 * windowResized); //커튼

  fill(128, 128, 128, 100);
  rect(
    40 * windowResized,
    50 * windowResized,
    100 * windowResized,
    150 * windowResized
  ); //아파트R

  fill(27, 38, 49, 50);
  rect(
    50 * windowResized,
    60 * windowResized,
    30 * windowResized,
    20 * windowResized
  );

  fill(254, 249, 231, 50);
  rect(
    50 * windowResized,
    100 * windowResized,
    30 * windowResized,
    20 * windowResized
  );
  rect(
    50 * windowResized,
    140 * windowResized,
    30 * windowResized,
    20 * windowResized
  );
  rect(
    100 * windowResized,
    60 * windowResized,
    30 * windowResized,
    20 * windowResized
  );

  fill(27, 38, 49, 50);
  rect(
    100 * windowResized,
    100 * windowResized,
    30 * windowResized,
    20 * windowResized
  );

  fill(254, 249, 231, 50);
  rect(
    100 * windowResized,
    140 * windowResized,
    30 * windowResized,
    20 * windowResized
  );

  fill(128, 128, 128, 100);
  rect(
    170 * windowResized,
    110 * windowResized,
    90 * windowResized,
    100 * windowResized
  ); //아파트L
  rect(
    170 * windowResized,
    90 * windowResized,
    50 * windowResized,
    20 * windowResized
  );

  fill(27, 38, 49, 50);
  rect(
    180 * windowResized,
    125 * windowResized,
    30 * windowResized,
    30 * windowResized
  );
  rect(
    220 * windowResized,
    125 * windowResized,
    30 * windowResized,
    30 * windowResized
  );

  fill(230, 230, 250);
  rect(
    260 * windowResized,
    380 * windowResized,
    440 * windowResized,
    20 * windowResized
  ); //table

  fill(215, 210, 240);
  rect(
    305 * windowResized,
    400 * windowResized,
    350 * windowResized,
    15 * windowResized
  );

  fill(230, 230, 250);
  rect(
    305 * windowResized,
    410 * windowResized,
    350 * windowResized,
    15 * windowResized
  );
  rect(
    305 * windowResized,
    410 * windowResized,
    15 * windowResized,
    150 * windowResized
  );

  fill(230, 230, 250);
  rect(
    640 * windowResized,
    410 * windowResized,
    15 * windowResized,
    150 * windowResized
  );

  fill(100, 104, 180);
  rect(
    710 * windowResized,
    430 * windowResized,
    120 * windowResized,
    15 * windowResized
  ); //chair
  rect(
    710 * windowResized,
    445 * windowResized,
    120 * windowResized,
    15 * windowResized
  );

  fill(215, 210, 240);
  rect(
    710 * windowResized,
    445 * windowResized,
    120 * windowResized,
    15 * windowResized
  );

  fill(230, 230, 250);
  rect(
    710 * windowResized,
    445 * windowResized,
    15 * windowResized,
    120 * windowResized
  );
  rect(
    815 * windowResized,
    445 * windowResized,
    15 * windowResized,
    120 * windowResized
  );

  fill(46, 139, 87); //flower
  rect(
    60 * windowResized,
    360 * windowResized,
    40 * windowResized,
    95 * windowResized,
    55 * windowResized,
    30 * windowResized,
    0,
    0
  );
  fill(60, 179, 113);
  rect(
    90 * windowResized,
    380 * windowResized,
    40 * windowResized,
    70 * windowResized,
    55 * windowResized,
    30 * windowResized,
    0,
    0
  );

  fill(159, 89, 89); //flower
  rect(
    50 * windowResized,
    450 * windowResized,
    100 * windowResized,
    110 * windowResized
  );

  fill(128, 128, 128);
  rect(565 * windowResized, 0, 5 * windowResized, 45 * windowResized); //액자 선
  rect(720 * windowResized, 0, 5 * windowResized, 45 * windowResized);
  rect(870 * windowResized, 0, 5 * windowResized, 45 * windowResized);

  rectMode(RADIUS);
  fill(169, 169, 169);
  rect(
    570 * windowResized,
    120 * windowResized,
    75 * windowResized,
    75 * windowResized
  ); //액자L

  rectMode(RADIUS);
  fill(255);
  rect(
    570 * windowResized,
    120 * windowResized,
    70 * windowResized,
    70 * windowResized
  );

  rectMode(CENTER);
  fill(168, 200, 191);
  rect(
    570 * windowResized,
    120 * windowResized,
    120 * windowResized,
    120 * windowResized
  );

  rectMode(RADIUS);
  fill(169, 169, 169);
  rect(
    800 * windowResized,
    135 * windowResized,
    120 * windowResized,
    90 * windowResized
  ); //액자R

  rectMode(RADIUS);
  fill(255);
  rect(
    800 * windowResized,
    135 * windowResized,
    115 * windowResized,
    85 * windowResized
  );

  rectMode(CENTER);
  fill(245, 238, 192);
  rect(
    800 * windowResized,
    135 * windowResized,
    210 * windowResized,
    150 * windowResized
  );

  fill(169, 169, 169);
  rect(
    610 * windowResized,
    345 * windowResized,
    40 * windowResized,
    70 * windowResized
  ); //cup

  fill(207, 104, 104, 150);
  rect(
    610 * windowResized,
    355 * windowResized,
    30 * windowResized,
    40 * windowResized
  );
}
