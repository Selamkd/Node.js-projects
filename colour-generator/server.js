// Import the 'createServer' function from the 'http' module
import { createServer } from 'http';

// Function to generate random color
function getRandomColor() {
  // Create a hex code for our random colors
  let char = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += char[Math.floor(Math.random() * 16)];
  }
  return color.toLowerCase();
}

// Create a server using the 'createServer' function
const server = createServer((req, res) => {
  const randomColor = getRandomColor();
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <html>
    <body style="background-color: ${randomColor}; text-align: center; padding: 50px;">
      <h1 style="color: white;">Random Color</h1>
      <p style="color: white;">Hex Code: ${randomColor}</p>
    </body>
  </html>
`);
});
// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
