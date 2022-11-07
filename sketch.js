//Variables declared
let countries = ['Australia', 'Luxembourg', 'Monaco', 'Ireland', 'France', 'United Kingdom', 'Netherlands', 'Belgium', 
'Germany', 'San Marino', 'Canada', 'South Korea', 'Israel', 'Japan', 'Spain', 'United States',
 'Andorra', 'Slovenia', 'Taiwan', 'New Zealand'];
let count = 1; 
let Australia = 14.54;
let Luxembourg = 13.67;
let New_Zealand = 13.18;
let Monaco = 11.88;
let Ireland = 11.54;
let France = 11.46;
let United_Kingdom = 11.37;
let Netherlands = 11.21;
let Belgium = 11.06;
let Germany = 10.68;
let San_Marino = 10.55;
let Canada = 10.33;
let South_Korea = 8.99;
let Israel = 8.17;
let Japan = 7.52;
let Spain = 7.30;
let United_States = 7.25;
let Andorra = 6.72;
let Slovenia = 5.84;
let Taiwan = 5.26;

function format(){ //Function used as the first format which uses rectangles to allow the setup to change based on which section is clicked 
  background(50,80,150); // Background is blue
  textSize(20); // TextSize is 22
  fill(255); // White fill for text
  text('Top 20 Countries with the highest minimum wage in 2020 (US$):', 5, 60); // Text informing user
  noFill(); // No fill to not fill in rectangles white
  textSize(12); // Changing size to 12
  strokeWeight(2); // strokeWeight for rectangles
  rect(180,600,200,80); // Click to change wages per click representing hours
   rect(10,100,120,60); // 1st colum and 1st row
   rect(10,200,120,60); // 2st colum and 2nd row
   rect(10,300,120,60); // 3st colum and 3rd row
   rect(300,100,120,60); // 3rd colum and 1st row 
   rect(450,100,120,60); // 4th colum and 1st row 
   rect(151,200,120,60); // 2nd colum and 2nd row 
   rect(151,100,120,60); // 2nd colum and 1st row
   rect(151,300,120,60); // 2nd colum and 3rd row
   rect(300,200,120,60); // 3rd colum and 2nd row 
   rect(300,300,120,60); // 3rd colum and 3rd row
   rect(450,200,120,60); // 4th colum and 2nd row
   rect(450,300,120,60); // 4th colum and 3rd row
   rect(10,400,120,60); // 1st colum and 4th row
   rect(151,400,120,60); // 2nd colum and 4th row
   rect(300,400,120,60); // 3rd colum and 3rd row
   rect(450,400,120,60); // 4th colum and 4th row
   rect(10,500,120,60); // 1st colum and 5th row
   rect(151,500,120,60); // 2nd colum and 5th row
   rect(300,500,120,60); // 3rd colum and 5th row
   rect(450,500,120,60); // 4th colum and 5th row
  
  
  fill(255); // White fill for Text
  text(countries[0], 30, 130); // 1st colum and 1st row
  text(countries[1],30, 230); // 1st colum and 2nd row
  text(countries[2],30, 330); // 1st colum and 3rd row
  text(countries[3],170, 130); // 2nd colum and 1st row
  text(countries[4],170, 230); // 2nd colum and 2nd row
  text(countries[5],160, 330); // 2nd colum and 3rd row
  text(countries[6], 30, 430); // 1st colum and 4th row
  text(countries[7],30, 530); // 1st colum and 5th row
  text(countries[8],160, 430); // 2nd colum and 4th row
  text(countries[9],170, 530); // 2nd colum and 5th row
  text(countries[10],320, 130); // 3rd colum and 1st row
  text(countries[11],320, 230); // 3rd colum and 2nd row
  text(countries[12], 320, 330); // 3rd colum and 3rd row
  text(countries[13],320, 430); // 3rd colum and 4th row
  text(countries[14],320, 530); // 3rd colum and 5th row
  text(countries[15],460, 130); // 4th colum and 1st row
  text(countries[16],460, 230); // 4th colum and 2nd row
  text(countries[17],460, 330); // 4th colum and 3rd row
  text(countries[18],460, 430); // 4th colum and 4th row
  text(countries[19],460, 530); // 4th colum and 5th row
  text('Click here to compare the wages',190, 640);
  } // End of function

//Function used to increase counter which updated the wages per click
function mousePressed() {
  if(mouseIsPressed && mouseX < 390 && mouseX > 180 && mouseY < 720 && mouseY > 590){
    count++;
    //190,640 location
    //200,80 sizing
 }

}


function setup() {
  createCanvas(windowHeight, windowWidth);

}

function draw() {
  format(); //Calling function format
  //Multiplying the wages of each country which the number of time the button has been clicked
  text(int(Australia * count), 30, 145);
  text(int(Luxembourg * count), 30, 245);
  text(int(Monaco * count), 30, 345);
  text(int(Ireland * count), 170, 145);
  text(int(France * count), 170, 245);
  text(int(United_Kingdom * count), 160, 345);
  text(int(Netherlands * count), 30, 445);
  text(int(Belgium * count), 30, 545);
  text(int(Germany * count), 160, 445);
  text(int(San_Marino * count), 170, 545);
  text(int(Canada * count), 320, 145);
  text(int(South_Korea * count), 320, 245);
  text(int(Israel * count), 320, 345);
  text(int(Japan * count), 320, 445);
  text(int(Spain * count), 320, 545);
  text(int(United_States * count), 460, 145);
  text(int(Andorra * count), 460, 245);
  text(int(Slovenia * count), 460, 345);
  text(int(Taiwan * count), 460, 445);
  text(int(New_Zealand * count), 460, 545);
  //For loop used to keep track of clicks visually
  for(var i = 0; i < count; i++){
    text("Times Clicked: " + count,70, 640);
  }

}

//Resources for Data 
//https://worldpopulationreview.com/country-rankings/minimum-wage-by-country
//https://www.commonwealthfund.org/publications/fund-reports/2021/aug/mirror-mirror-2021-reflecting-poorly
//https://datalab.usaspending.gov/americas-finance-guide/debt/country-comparison/
//https://www.cfr.org/backgrounder/national-debt-dilemma

