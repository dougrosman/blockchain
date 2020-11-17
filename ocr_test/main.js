
Tesseract.recognize(
  'hundred.jpg',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);


  console.log(text.length);
})




// let myStr = `4:.' 7 Iy T 5
// S FB22509428 A / & SN\ TEIE UNITED STATES =
// e /‘. 1 ..\\ OFAMBRICA. =
// = G [ Sk y ¥ 5
// e iy 44 -
// SR .\/ FB 22509428 A =
// - e NG i e`

// console.log(myStr[12]);


