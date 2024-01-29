// Import the 'createServer function from the 'http' module
import { createServer } from 'http';
// create an object of fortunes
const fortunes = [
  'Your socks will forever conspire against you, disappearing in the laundry never to be seen again.',
  'A journey awaits you, both in the physical and spiritual realms. Pack light and be open to the unknown.',
  'A mystic doorway is opening before you. Step through, and discover the realms beyond.',
  'Beware of a rogue rubber duck. Its quirkiness may lead you to unexpected joy.',
  'Your spirit animal is a dragon with a penchant for disco. Prepare for a fiery dance party.',
];
// function to get random fortune

function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

// create a server using the 'create server' function
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Greetings: ${getRandomFortune()}`);
});

// Specify port number
const PORT = 3000;

// start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
