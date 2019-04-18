/*
** Console API
*/

// Basic
console.log('Testing console API...');


// String substitution
console.log('\nString substitution\n================================');

// String substitution | Integers
console.log('May %i, %i', 27, 2010);

// String substitution | Floating-point numbers
console.log('%f cup grated parmesan cheese', 0.5);

// String substitution | Strings
console.log('0.5 cup grated %s cheese', 'parmesan');

// String substitution | Strings
console.log('Ingredient: %o', {qty: '10 g', cheese: 'Cheddar cheese'});


// Warning
console.log('\nWarning\n============================================');
console.warn('Bake them in a preheated oven at 220ºC');


// Error
console.log('\nError\n==============================================');
console.error('Bake them in a preheated oven at 220ºC');


// Timing
console.log('\nTiming\n=============================================');
console.time('Fibonacci'); // Starts timer (optional label argument)
// (...) code
console.timeLog('Fibonacci'); // Code execution time (in milliseconds)
// (...) code
console.timeEnd('Fibonacci'); // Log time and end timer


// Assert
console.log('\nAssert\n=============================================');
console.assert(true, "Hide the log");
console.assert(false, "Show the log");


// Grouping
console.log('\nGrouping\n===========================================');
console.group();
console.log("Ingredients:");
console.group();
console.log("2 sticks of celery");
console.log("1 onion ");
console.log("350 g butternut squash ");
console.groupEnd();
console.groupEnd();
console.log("Chicken & herb biscuits - incomplete :)");


// CSS
console.log('\nCSS\n================================================');
console.log("%cIngredient: %c1 %conion", "color: gray", "font-weight: bold;", "color: green;");


