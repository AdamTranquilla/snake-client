let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === ' ') {
    connection.write('Say: sorry!')
  }
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
};

module.exports = { setupInput };