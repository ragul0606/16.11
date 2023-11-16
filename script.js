// 1.	Create a program that uses a switch statement to check the day of the week entered by the user using prompt. If it's a weekday, display an alert saying "It's a workday." If it's a weekend, display "It's the weekend!"

// let day = prompt('Enter a day');

// day = day.toLowerCase();

// switch (day) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         alert("It's a workday.");
//         break;
//     case "saturday":
//     case "sunday":
//         alert("It's the weekend.");
//         break;
// }

// 2.	Write a program that prompts the user to enter their age using prompt. Use an if-else statement to check if the age is between 18 and 65 (inclusive). Display an alert with the message "You are eligible to work" if true; otherwise, display "You are not eligible to work."

// let userAge = prompt('Enter your age');

// if (userAge >= 18 && userAge <= 65) {
//     alert("Your are eligible to work");
// } else {
//     alert("Your are not eligible to work");
// }

// 3.	Write a program that asks the user for their age using prompt. Use confirm to ask if the entered age is correct. If confirmed, display an alert saying "Age confirmed," otherwise, ask for the age again.

// let age;

// let confirmed;

// do {
//     age = (+prompt('Enter your age:'));
//     confirmed = confirm("You entered " + age + ". Is this correct?");
//     if (confirmed){
//         alert("Age confirmed");
//     } else {
//         alert("Please try again");
//     }
// } while (!confirmed);

// 4.	Implement a program that asks the user to enter a password using prompt. Use an if-else statement to check if the password is correct. If correct, display an alert saying "Access granted"; otherwise, display "Access denied."

// let password = "secret";

// let userPassword = prompt("Enter password");

// if (password === userPassword) {
//     alert("Access Granted");
// } else {
//     alert("Access denied");
// }

// 5.	Write a program that prompts the user to enter their favorite season using prompt. Use a switch statement to display a message based on the season entered.

// let userSeason = prompt("Enter your favorite season");

// userSeason = userSeason.toLowerCase();

// switch (userSeason) {
//     case "summer":
//         alert("Summer season in India is between April to June");
//         break;
//     case "winter":
//         alert("Winter season in India is between December to early April");
//         break;
//     case "rainy":
//         alert("Rainy season in India is between June to September");
//         break;
//     case "monsoon":
//         alert("Monsoon season in india is between October to december");
//         break;
//     default:
//         alert("Enter season between 'Summer', 'Winter', 'Rainy' or 'Monsoon'");
// }

// // 6.	Create a program that asks the user to enter a number using prompt. Use an if-else statement to check if the number is divisible by 3 and 5. Display an alert with the appropriate message.

// let number = +(prompt("Enter a number to find is the number divisible by 3 & 5"));

// if (number % 3 === 0 && number % 5 === 0) {
//     alert("Yes it is divisible by 3 & 5");
// } else {
//     alert("No! this number is not divisible by 3 & 5");
// }

// 7.	Implement a program that prompts the user to enter a temperature using prompt. Use a switch statement to determine whether it's hot, cold, or moderate and display an appropriate alert.

// let temp = prompt("Enter temperature in degrees Celsius");

// temp = Number(temp);

// switch (true) {
//     case temp > 30:
//         alert("It's Hot");
//         break;
//     case temp < 10:
//         alert("It's cold");
//         break;
//     default:
//         alert("It's moderate");
// }

// // 8.	Write a program that asks the user to enter their country using prompt. Use a switch statement to display a message based on the continent the country belongs to.

// let country = prompt("Enter your country:");

// country = country.toLowerCase();

// switch (country) {
//     case "algeria":
//     case "angola":
//     case "benin":
//     case "botswana":
//     case "burkina faso":
//     case "burundi":
//     case "cameroon":
//     case "cape verde":
//     case "central african republic":
//     case "chad":
//     case "comoros":
//     case "republic of the congo":
//     case "democratic republic of the congo":
//     case "djibouti":
//     case "egypt":
//     case "equatorial guinea":
//     case "eritrea":
//     case "eswatini":
//     case "ethiopia":
//     case "gabon":
//     case "gambia":
//     case "ghana":
//     case "guinea":
//     case "guinea-bissau":
//     case "ivory coast":
//     case "kenya":
//     case "lesotho":
//     case "liberia":
//     case "libya":
//     case "madagascar":
//     case "malawi":
//     case "mali":
//     case "mauritania":
//     case "mauritius":
//     case "morocco":
//     case "mozambique":
//     case "namibia":
//     case "niger":
//     case "nigeria":
//     case "rwanda":
//     case "sao tome and principe":
//     case "senegal":
//     case "seychelles":
//     case "sierra leone":
//     case "somalia":
//     case "south africa":
//     case "south sudan":
//     case "sudan":
//     case "tanzania":
//     case "togo":
//     case "tunisia":
//     case "uganda":
//     case "zambia":
//     case "zimbabwe":
//         alert("Your country is in Africa.");
//         break;
//     case "afghanistan":
//     case "armenia":
//     case "azerbaijan":
//     case "bahrain":
//     case "bangladesh":
//     case "bhutan":
//     case "brunei":
//     case "cambodia":
//     case "china":
//     case "cyprus":
//     case "georgia":
//     case "india":
//     case "indonesia":
//     case "iran":
//     case "iraq":
//     case "israel":
//     case "japan":
//     case "jordan":
//     case "kazakhstan":
//     case "kuwait":
//     case "kyrgyzstan":
//     case "laos":
//     case "lebanon":
//     case "malaysia":
//     case "maldives":
//     case "mongolia":
//     case "myanmar":
//     case "nepal":
//     case "north korea":
//     case "oman":
//     case "pakistan":
//     case "palestine":
//     case "philippines":
//     case "qatar":
//     case "russia":
//     case "saudi arabia":
//     case "singapore":
//     case "south korea":
//     case "sri lanka":
//     case "syria":
//     case "tajikistan":
//     case "thailand":
//     case "timor-leste":
//     case "turkey":
//     case "turkmenistan":
//     case "united arab emirates":
//     case "uzbekistan":
//     case "vietnam":
//     case "yemen":
//         alert("Your country is in Asia.");
//         break;
//     case "albania":
//     case "andorra":
//     case "austria":
//     case "belarus":
//     case "belgium":
//     case "bosnia and herzegovina":
//     case "bulgaria":
//     case "croatia":
//     case "czechia":
//     case "denmark":
//     case "estonia":
//     case "finland":
//     case "france":
//     case "germany":
//     case "greece":
//     case "hungary":
//     case "iceland":
//     case "ireland":
//     case "italy":
//     case "kosovo":
//     case "latvia":
//     case "liechtenstein":
//     case "lithuania":
//     case "luxembourg":
//     case "malta":
//     case "moldova":
//     case "monaco":
//     case "montenegro":
//     case "netherlands":
//     case "north macedonia":
//     case "norway":
//     case "poland":
//     case "portugal":
//     case "romania":
//     case "san marino":
//     case "serbia":
//     case "slovakia":
//     case "slovenia":
//     case "spain":
//     case "sweden":
//     case "switzerland":
//     case "ukraine":
//     case "united kingdom":
//     case "vatican city":
//         alert("Your country is in Europe.");
//         break;
//     case "antigua and barbuda":
//     case "bahamas":
//     case "barbados":
//     case "belize":
//     case "canada":
//     case "costa rica":
//     case "cuba":
//     case "dominica":
//     case "dominican republic":
//     case "el salvador":
//     case "grenada":
//     case "guatemala":
//     case "haiti":
//     case "honduras":
//     case "jamaica":
//     case "mexico":
//     case "nicaragua":
//     case "panama":
//     case "saint kitts and nevis":
//     case "saint lucia":
//     case "saint vincent and the grenadines":
//     case "trinidad and tobago":
//     case "united states of america":
//         alert("Your country is in North America.");
//         break;
//     // If the country is in Oceania, display a message saying "Your country is in Oceania."
//     case "australia":
//     case "fiji":
//     case "kiribati":
//     case "marshall islands":
//     case "micronesia":
//     case "nauru":
//     case "new zealand":
//     case "palau":
//     case "papua new guinea":
//     case "samoa":
//     case "solomon islands":
//     case "tonga":
//     case "tuvalu":
//     case "vanuatu":
//         alert("Your country is in Oceania.");
//         break;
//     // If the country is in South America, display a message saying "Your country is in South America."
//     case "argentina":
//     case "bolivia":
//     case "brazil":
//     case "chile":
//     case "colombia":
//     case "ecuador":
//     case "guyana":
//     case "paraguay":
//     case "peru":
//     case "suriname":
//     case "uruguay":
//     case "venezuela":
//         alert("Your country is in South America.");
//         break;
//   // If the country is in Antarctica, display a message saying "Your country is in Antarctica."
//     case "antarctica":
//         alert("Your country is in Antarctica.");
//         break;
//   // If the country is not valid, display a message saying "Invalid input. Please enter a valid country."
//     default:
//         alert("Invalid input. Please enter a valid country.");
// }

// 9.	Write a program that prompts the user to enter their name and age using prompt. Use string interpolation to display a message welcoming the user and stating their age.

// let userName = prompt("Enter your Name");

// let userAge = prompt("Enter your age");

// alert(`Hello ${userName}, Welcome! to my webpage, You are ${userAge} years old`);

// 10.	Implement a program that uses confirm to ask the user if they want to proceed. If confirmed, ask for their name using prompt and display a personalized greeting using string interpolation.

// let proceed = confirm("Please confirm to proceed");

// if (proceed) {
//     let userName = prompt("ENter your name");
//     alert(`Welcome ${userName}, have a nice day!`);
// } else {
//     alert('Not this time!');
// }