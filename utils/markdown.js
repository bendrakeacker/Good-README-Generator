function generateMarkdown(data) {
    return `
  ${data.license}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.table}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  
    ${data.name}
    ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;