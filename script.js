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
              name: 'GNU',
            },
            {
               name: 'Apache',
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

        var liscenceDetails = '';
          if(response.liscence == 'MIT'){
            liscenceDetails = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \r \r The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \r \r \t THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
           } 
            else if (response.liscene == 'GNU'){
            liscenceDetails = "This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA"
          }
          else if (response.liscence == 'Apache'){ 
            liscenceDetails = " Copyright [yyyy] [name of copyright owner]\r \t \t Licensed under the Apache License, Version 2.0 (the \"License\"); \r   you may not use this file except in compliance with the License. \r You may obtain a copy of the License at \r \t  http://www.apache.org/licenses/LICENSE-2.0  \r \t Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and  limitations under the License."

          }
    
         
          // Write code between the <div> tags to output the data from the music object above.
          // Use an h2 element for the title and a p element for artist and title
          const userInput = `
## Project Title ${response.title}
## Description 
${response.description}
## Table of Contents:
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [Tests](#Tests)
  5. [Licence](#Licence)
  6. [Questions](#Questions) 

## Installation
${response.installation}  

## Usage 
${response.usage}

## Contributing 
${response.contribution}

## Tests
${response.testinstructions} 

## License
${response.liscence}
${liscenceDetails}

## Questions 
For Questions about this project or other projects please contact me:
${response.github}
${response.emailaddress}
`;
             
        fs.writeFile('readme.md', userInput, (err) => {
            if (err) throw err;
            console.log('Thank you! Your ReadMe has been Created');
          }); 
    }) 