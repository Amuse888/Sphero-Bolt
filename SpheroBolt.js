//Programmer: Gabe Westra
//Date: 2.6.2023
//


/**
 * Hello World Practice Program
 * LED turn to blue
 * Forward for 2 seconds at a speed of 60
 */
async function helloWorld() {

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

/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
    await roll((getHeading() + 0), 60, 4); // Heading 0 degrees at 60 speed for 4 seconds
    await delay(1);
    await roll((getHeading() + 90), 60, 4); // heading 90 degrees at 60 speed for 4 seconds
}

/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
    await helloWorld() //<-- Calling the helloWorld function to run it
    await ninetyDegree() //<-- Calling the ninetyDegree function to run it
}

