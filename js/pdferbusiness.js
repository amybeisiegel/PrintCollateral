
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



var initializePdf = function() {
  var doc = new jsPDF('landscape', 'in', [2, 3.5]);
  doc.addFont('AkkuratRegular', 'AkkuratRegular', 'normal');
  doc.addFont('AkkuratBold', 'AkkuratBold', 'normal');
  doc.addFont('AkkuratLight', 'AkkuratLight', 'normal');
  return doc;
};


var outputPdf = function(doc, selector) {
  var string = doc.output('datauristring');
  $(selector).attr('src', string);
};



var drawText = function(doc, text, coordinates, styles) {
  doc.setTextColor(styles.textColor.r, styles.textColor.g, styles.textColor.b)
  doc.setFont(styles.font);
  doc.setFontStyle(styles.fontStyle);
  doc.setFontSize(styles.fontSize);
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
};

var drawPage1 = function(doc) {
  drawStaticObjects1(doc);

  //page 1
  //drawText(doc, $('#programname').val(), {x: 8.5, y: 6.5}, title);
  //drawText(doc, 'Alumni Highlight', {x: 2.8, y: 3.3}, heading);

  // base64whatever($('someurl').val(), function (base64string) {
  //   fdsfdsfsd
  // };

};

var drawPage2 = function(doc) {
  drawStaticObjects2(doc);

  //page 2
  // drawText(doc, $('#imagequote').val(), {x: .15, y: 6.2}, imgquote);
  // drawText(doc, $('#credit2').val(), {x: 4, y: .5}, credit);
  //
  // //page 3
  // drawText(doc, $('#blockquote').val(), {x: 6, y: 1}, block);
  // drawText(doc, 'Careers', {x: 6, y: 5.1}, heading);
  // drawText(doc, $('#careers').val(), {x: 6, y: 5.27}, paragraph);

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
  doc.save('businesscard.pdf');
};

// Bind with jquery
// all elements   .focusout(redraw);
$('input, textarea').focusout(redraw);
// $('some-butoon').click(savePdf);




var doc = initializePdf(2);
outputPdf(doc, 'iframe');



// outputPdf(doc, 'iframe');
