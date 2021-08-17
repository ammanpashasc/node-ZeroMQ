const zmq = require('zeromq');
const subscriber = new zmq.socket('pull');

const main = async () => {
  // Better to add .on listener before connecting to client
  subscriber.on('message', function (reply) {
    console.log(JSON.parse(reply));
  });

  await subscriber.connect('tcp://127.0.0.1:1337');
  console.log('Client is now connected to server.');
};

main()
  .then(() => console.log('Finished'))
  .catch(console.warn);

export {};
