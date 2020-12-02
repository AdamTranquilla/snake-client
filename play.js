const { connect } = require('./client');
console.log('Connecting ...');
connect();


const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {
    stdin.on('data', key => {
      if (key === 'w') {
        conn.write('Move: up');
      }
      if (key === 'a') {
        conn.write('Move: left');
      }
      if (key === 's') {
        conn.write('Move: down');
      }
      if (key === 'd') {
        conn.write('Move: right');
      }
      if (key === '\u0003') {
        process.stdout.write(`Thanks for using me, ciao!\n`);
        process.exit();
      }
    });
  };

  handleUserInput();

  return stdin;
};

setupInput();

