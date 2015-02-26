
//text styles below

//page 1
var title = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratRegular',
  fontStyle: 'normal',
  fontSize: '34',
};

var subSchool = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '12',
};

//page 2
var imgquote = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '14',
};

var credit = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '6',
};

var block = {
  textColor: {r: 9, g: 100, b: 152},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '20',
};

var heading = {
  textColor: {r: 9, g: 100, b: 152},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '10',
};

var paragraph = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'times',
  fontStyle: 'normal',
  fontSize: '9',
};

var paragraphblue = {
  textColor: {r: 9, g: 100, b: 152},
  font: 'times',
  fontStyle: 'normal',
  fontSize: '9',
};

var learnmore = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '14',
};

var link = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '10',
};

var yearly = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '7',
};

var job = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '8',
};

var amount = {
  textColor: {r: 9, g: 100, b: 152},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '26',
};

var statsource = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '6',
};

var contactplace = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratBold',
  fontStyle: 'normal',
  fontSize: '10',
};

var contactvalue = {
  textColor: {r: 0, g: 0, b: 0},
  font: 'AkkuratLight',
  fontStyle: 'normal',
  fontSize: '10',
};


var degreestitle= {
  textColor: {r: 9, g: 100, b: 152},
  font: 'AkkuratRegular',
  fontStyle: 'normal',
  fontSize: '12',
};

var degrees = {
  textColor: {r: 255, g: 255, b: 255},
  font: 'AkkuratRegular',
  fontStyle: 'normal',
  fontSize: '10',
};

var initializePdf = function() {
  var doc = new jsPDF('landscape', 'in', 'letter');
  doc.addFont('AkkuratRegular', 'AkkuratRegular', 'normal');
  doc.addFont('AkkuratBold', 'AkkuratBold', 'normal');
  doc.addFont('AkkuratLight', 'AkkuratLight', 'normal');
  return doc;
};


var outputPdf = function(doc, selector) {
  var string = doc.output('datauristring');
  $(selector).attr('src', string);
};



var drawText = function(doc, text, coordinates, styles, splitlength) {
  doc.setTextColor(styles.textColor.r, styles.textColor.g, styles.textColor.b)
  doc.setFont(styles.font);
  doc.setFontStyle(styles.fontStyle);
  doc.setFontSize(styles.fontSize);

  if(splitlength > 0) {
    text.Split
  }
  // setDrawColor(0, 0, 0, 0),
  // setFillColor(0, 0, 0, 0),
  // setTextColor(0, 0, 0),
  // setFont: 'AkkuratRegular',
  // setFontStyle: 'normal',
  // setFontSize: '12',
  //  2. reset/override according to all original documentation based on my new styles


  doc.text(coordinates.x, coordinates.y, text);
};



var drawStaticObjects1 = function(doc) {
  //.RECT(left, down, width, height)
  //page 1
  doc.setDrawColor(0);
  doc.setFillColor(9,100,152);
  doc.rect(8.5, 5.7, 2.5, 2.5, 'F');

  doc.setDrawColor(0);
  doc.setFillColor(0,29,78);
  doc.rect(8.5, 7, 2.5, .3, 'F');

  //divider bar(REMOVE LATER)
  doc.setDrawColor(0);
  doc.setFillColor(0,0,0);
  doc.rect(5.5, 0, .001, 8.5, 'F');

  //page 4
  doc.setDrawColor(0);
  doc.setFillColor(9,100,152);
  doc.rect(0, 2.75, 2.3, 2.6, 'F');

  doc.setDrawColor(0);
  doc.setFillColor(255,255,255);
  doc.rect(.45, 3, 1, .25, 'F');

};


var drawStaticObjects2 = function(doc) {
  doc.addPage();
  //.RECT(left, down, width, height)
  // page 2
  doc.setDrawColor(0);
  doc.setFillColor(9,100,152);
  doc.rect(0, 5.7, 3.1, 2.5, 'F');

  //divider bar(REMOVE LATER)
  doc.setDrawColor(0);
  doc.setFillColor(0,0,0);
  doc.rect(5.5, 0, .001, 8.5, 'F');

  //page 3
  doc.setDrawColor(0);
  doc.setFillColor(9,100,152);
  doc.rect(6, 7.5, 2, .6, 'F');

  doc.setDrawColor(0);
  doc.setFillColor(0,29,78);
  doc.rect(6, 7.5, .12, .6, 'F');

  doc.setDrawColor(0);
  doc.setFillColor(242,236,208);
  doc.rect(8.5, 5.6, 3, 3, 'F');
};

var drawPage1 = function(doc) {
  drawStaticObjects1(doc);

  //page 1
  drawText(doc, $('#programname').val(), {x: 8.5, y: 6.5}, title);
  drawText(doc, $('#school').val(), {x: 8.56, y: 7.23}, subSchool);
  drawText(doc, $('#credit1').val(), {x: 5.85, y: 8.2}, credit);

  //page 4
  drawText(doc, 'Additional Info', {x: 2.8, y: 1}, heading);
  drawText(doc, $('#adinfo').val(), {x: 2.8, y: 1.16}, paragraph);

  drawText(doc, 'Alumni Highlight', {x: 2.8, y: 3.3}, heading);
  drawText(doc, $('#alumni').val(), {x: 2.8, y: 3.46}, paragraphblue);

  drawText(doc, $('#extrathing').val(), {x: 2.8, y: 5.8}, paragraph);

  drawText(doc, 'Contact Us', {x: 2.8, y: 6.8}, heading);
  drawText(doc, 'Phone:', {x: 2.8, y: 6.95}, contactplace);
  drawText(doc, $('#phone').val(), {x: 3.25, y: 6.95}, contactvalue);

  drawText(doc, 'Fax:', {x: 2.8, y: 7.1}, contactplace);
  drawText(doc, $('#fax').val(), {x: 3.08, y: 7.1}, contactvalue);

  drawText(doc, 'Email:', {x: 2.8, y: 7.25}, contactplace);
  drawText(doc, $('#email').val(), {x: 3.18, y: 7.25}, contactvalue);

  drawText(doc, 'Web:', {x: 2.8, y: 7.4}, contactplace);
  drawText(doc, $('#web').val(), {x: 3.15, y: 7.4}, contactvalue);

  drawText(doc, 'DEGREES', {x: .55, y: 3.19}, degreestitle);
  drawText(doc, $('#degrees1').val(), {x: .55, y: 3.5}, degrees);
  drawText(doc, $('#degrees2').val(), {x: .55, y: 3.75}, degrees);
  drawText(doc, $('#degrees3').val(), {x: .55, y: 4}, degrees);
  drawText(doc, $('#degrees4').val(), {x: .55, y: 4.25}, degrees);
  drawText(doc, $('#degrees5').val(), {x: .55, y: 4.5}, degrees);
  drawText(doc, $('#degrees6').val(), {x: .55, y: 4.75}, degrees);
  drawText(doc, $('#degrees7').val(), {x: .55, y: 5}, degrees);
  // base64whatever($('someurl').val(), function (base64string) {
  //   fdsfdsfsd
  // };

};

var drawPage2 = function(doc) {
  drawStaticObjects2(doc);

  //page 2
  drawText(doc, $('#imagequote').val(), {x: .15, y: 6.2}, imgquote);
  drawText(doc, $('#credit2').val(), {x: 4, y: .5}, credit);

  //page 3
  drawText(doc, $('#blockquote').val(), {x: 6, y: 1}, block);
  drawText(doc, 'Careers', {x: 6, y: 5.1}, heading);
  drawText(doc, $('#careers').val(), {x: 6, y: 5.27}, paragraph);

  drawText(doc, 'Curriculum', {x: 6, y: 6.6}, heading);
  drawText(doc, $('#curriculum').val(), {x: 6, y: 6.73}, paragraph);

  drawText(doc, 'LEARN MORE:', {x: 6.2, y: 7.77}, learnmore);
  drawText(doc, $('#link').val(), {x: 6.2, y: 7.97}, link);

  drawText(doc, 'Average yearly pay for', {x: 8.7, y: 6.1}, yearly);
  drawText(doc, $('#1paying').val(), {x: 9.77, y: 6.1}, job);
  drawText(doc, $('#1amount').val(), {x: 9.1, y: 6.45}, amount);

  drawText(doc, $('#2paying').val(), {x: 9.77, y: 6.85}, job);
  drawText(doc, $('#2amount').val(), {x: 9.1, y: 7.2}, amount);

  drawText(doc, $('#3paying').val(), {x: 9.77, y: 7.6}, job);
  drawText(doc, $('#3amount').val(), {x: 9.1, y: 7.95}, amount);

  drawText(doc, $('#statsource').val(), {x: 9.1, y: 8.2}, statsource);

  doc.
};

// (doc, text, coordinates, styles)

// todo run this on focusout events
var redraw = function() {
  var doc = initializePdf();
  drawPage1(doc);
  drawPage2(doc);
  outputPdf(doc, 'iframe');
};

var savePdf = function() {
  var doc = initializePdf();
  drawPage1(doc);
  drawPage2(doc);
  doc.save('brochure.pdf');
};

// Bind with jquery
// all elements   .focusout(redraw);
$('input, textarea').focusout(redraw);
// $('some-butoon').click(savePdf);




var doc = initializePdf(2);
outputPdf(doc, 'iframe');


// outputPdf(doc, 'iframe');
