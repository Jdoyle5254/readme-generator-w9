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
        message: 'Please add the Installation instructions for this project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please add the program usage information:',
        name: 'usage',
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
        message: 'Which License would you like to use (select only one)?',
        name: 'license',
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
              name: 'Unilicense',
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

        var licenseDetails = '';
        var licenseBadge = '';
          if(response.license == 'MIT'){
            licenseDetails = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \r \r The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \r \r \t THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
             licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
           } 
            else if (response.license == 'GNU'){
            licenseDetails = "This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA";
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          }
          else if (response.license == 'Apache'){ 
            licenseDetails = " Copyright [yyyy] [name of copyright owner]\r \t \t Licensed under the Apache License, Version 2.0 (the \"License\"); \r   you may not use this file except in compliance with the License. \r You may obtain a copy of the License at \r \t  http://www.apache.org/licenses/LICENSE-2.0  \r \t Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and  limitations under the License.";
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

          }
          else if (response.license == 'Unilicense'){ 
            licenseDetails = "This is free and unencumbered software released into the public domain.\r Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\r In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this   software under copyright law. \r THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. For more information, please refer to <https://unlicense.org>";
            licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) ";

          }
    
         
          // Write code between the <div> tags to output the data from the music object above.
          // Use an h2 element for the title and a p element for artist and title
          const userInput = `
## Project Title ${response.title}      ${licenseBadge}

## Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Licence](#Licence)
  7. [Questions](#Questions) 

## Description 
${response.description}

## Installation
${response.installation}  

## Usage 
${response.usage}

## Contributing 
${response.contribution}

## Tests
${response.testinstructions} 

## License
${response.license}
${licenseDetails}

## Questions 
For more information on this project, here is a link to GitHub:
[GitHub Link](https://github.com/${response.github})

Please reach out via email for any further questions:
${response.emailaddress}
`;
             
        fs.writeFile('readme.md', userInput, (err) => {
            if (err) throw err;
            console.log('Thank you! Your ReadMe has been Created');
          }); 
    }) 