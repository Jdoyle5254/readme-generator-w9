/*PseudoCode  
User is presented with a series of questions in the terminal 
these are created by utilizing "npm inquire" each input is a separate question.
When the user runs the program
User then responds to each question after deploying node script.js 
After User does the inputs for each read me section, a read me document is created using the fs write file function:
fs.writeFile('Readme.md', JSON.stringify(response), (err) => {
        if (err) throw err;
        console.log('Your answers are saved');
      });
The information for each section is saved and an object is created for the readme information and pulled into the file once the information has been added by the user.*/

const inquirer = require('inquirer');
const fs = require('fs'); 


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a detailed description of this project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please add the program usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please add the Installation instructions for this project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please add contribution guidelines:',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Please add the test instructions:',
        name: 'testinstructions',
      },
      {
        type: 'checkbox',
        message: 'Which Liscence would you like to use (select only one)?',
        name: 'liscence',
        choices: [
            {
              name: 'MIT',
            },
            {
              name: '',
            },
            {
               name: '',
            },
            {
              name: '',
            },
        ],

        

      },
      {
        type: 'input',
        message: 'Please add your GitHub Profile:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please add your email address:',
        name: 'emailaddress',
      },
     
    ])      
      
    .then((response) => {
        console.log('response', response) 
         
          // Write code between the <div> tags to output the data from the music object above.
          // Use an h2 element for the title and a p element for artist and title
          const userInput = `
          ##Project Title
          ${response.title}
          ##Description 
          ${response.description}
          ##Table of Contents:
               1. Installation
               2. Usage
               3. Licence
               4. Contributing
               5. Testing
               6. Questions  

          ##Usage 
          ${response.usage}

          ##Installation
          ${response.installation}
          
          ##License
          ${response.liscence}
} 
          ##Contributing 
          ${response.contribution}

          ##Tests
          ${response.testinstructions} 

          ##Questions 
          For Questions about this project or other projects please contact me:
          ${response.github}
          ${response.emailaddress}
          `;
             
        fs.writeFile('readmetest.txt', userInput, (err) => {
            if (err) throw err;
            console.log('Thank you! Your ReadMe has been Created');
          }); 
    }) 