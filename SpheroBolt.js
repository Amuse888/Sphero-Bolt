//Programmer: Gabe Westra
//Date: 2.6.2023
//


//Hello World Practice Program
async function startProgram() {

 setMainLed({ r: 0, g: 0, b: 255 });

 await speak("Hello Square", true);

 await delay(1);

 for (var _i1 = 0; _i1 < 4; _i1++) {

 	setMainLed(getRandomColor());

 	await Sound.Game.Coin.play(true);

 	await roll((getHeading() + 90), 60, 1);

 	await delay(1);

 }

}