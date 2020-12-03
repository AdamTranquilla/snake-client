const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: AKT');
    console.log('Successfully connected to game server');
  });

  conn.on('data', data => {
    console.log('Removed from game for: ', data);
  });

  return conn;
};

module.exports = { connect };