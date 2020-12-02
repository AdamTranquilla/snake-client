const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: AKT');

    setInterval(() => {conn.write('Move: up');}, 1)


    console.log('Successfully connected to game server');
  });

  conn.on('data', data => {
    console.log('Removed from game for: ', data);
  });

  return conn;
};

module.exports = { connect };