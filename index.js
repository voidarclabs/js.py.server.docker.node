const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file when the user navigates to the root URL
app.get('/', (req, res) => {
  const html = `
    <form method="post">
      <label>
        Enter a value:
        <input type="text" name="textboxValue" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  `;
  res.send(html);
});

// Handle form submission
app.post('/', async (req, res) => {
  const textboxValue = req.body.textboxValue;
  console.log(textboxValue);

  // Start the Docker Compose service and pass the textboxValue as an environment variable
  try {
    const command = `NUM=${textboxValue} docker-compose up --abort-on-container-exit --remove-orphans --rm`;
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.error(stderr);
  } catch (err) {
    console.error(err);
  }

  res.send('Form submitted successfully!');
});

app.listen(120, () => {
  console.log('Server running on port 120');
});