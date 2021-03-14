// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () =>
  inquirer.prompt([
  {    
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Describe your project.',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Enter instructions for installation',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Enter usage information',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Enter instructions for contributing',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter test instructions',
},
{
    type: 'input',
    name: 'License',
    message: 'Please select license option',
    choices: ['MIT, APACHE 2.0, GPL 3.0, BSD 3, NONE']
},
{
  type: 'input',
  name: 'Questions',
  message: 'Enter a link to your Github profile',  
},
{
    type: 'input',
    name: 'Questions',
    message: 'Enter your email address',
},]);


const generateREADME = (answers) =>
`
# Title
\
${answers.Title}

## Description
\
${answers.Description}

## Installation 
\
${answers.Installation}

## Usage   
\
${answers.Usage}
  
## Contributing
\
${answers.Contributing}
  
##Tests
\
${answers.Tests}

## License
\
${answers.License}

## Questions
\
${answers.Questions}`;


const init = () => {
    promptUser().then((answers) => {
      try {
        const markdown = generateREADME(answers);
        fs.writeFileSync('README.md', markdown);
        console.log('Successfully wrote to README.md');
      } catch (error) {
        console.log(error);
}
});
};
init();

function table_contents() {
  const text = `
  ## Table of Contents\n
  [Title](#Title)\n
  [Description](#Description)\n
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [Contributing](#Contributing)\n
  [Tests](#Tests)\n
  [Questions](#Questions)\n`
  prepend('README.md', text, () => {})
}