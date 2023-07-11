function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the terms of the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact ${data.name} via:
- Email: ${data.email}
- GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;