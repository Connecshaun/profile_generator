
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});



// rl.question('What do you think of Node.js?', (answer) => {

//   console.log(`Thank you for you valuable feedback: ${answer}`);

rl.question('What\'s your name? ', (name) => {

  // console.log(`${name}`); Here data would be pushed to a database vs console.log

  rl.question('What\'s an activity you like doing? ', (activity) => {

    // console.log(`${activity}`); Here data would be pushed to a database vs console.log

    rl.question('What do you listen to while doing it? ', (music) => {

      // console.log(`${music}`); Here data would be pushed to a database vs console.log

      rl.question('Which meal is your favourite? ', (favoriteMeal) => {

        // console.log(`${favoriteMeal}`); Here data would be pushed to a database vs console.log

        rl.question('What is you favorite thing to eat for that meal? ', (favoriteMealFood) => {

          // console.log(`${favoriteMealFood}`); Here data would be pushed to a database vs console.log

          rl.question('What is your superpower? ', (superPower) => {

            //console.log(`${superPower}`); Here data would be pushed to a database vs console.log

            console.log(`Hi, my name is ${name}. In my sparetime, I like to ${activity} while listening to ${music}. I also love to cook. My favorite meal of the day is ${favoriteMeal} and during these cooler months, I often like to make a killer ${favoriteMealFood}. Aside from being pretty solid in the kitchen, I've got a pretty good green thumb and I also refer to myself as a ${superPower}.`)

            rl.close();

          })
        })
      })
    })
  })
})