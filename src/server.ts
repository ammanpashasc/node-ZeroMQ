const zmq = require('zeromq');

const socket = new zmq.socket('push');
const sleep = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  await socket.bind('tcp://127.0.0.1:1337');
  console.log('Server is ready listening on port 1337');

  // TODO: Make sure atleast one client is ready to listen before sending message!
  for (let i = 0; i < 100; i++) {
    await sleep(500);
    console.log('Sending message');
    await socket.send(JSON.stringify({ i }));
    console.log('Message sent');
  }
};

main()
  .then(() => console.log('Finished'))
  .catch(console.warn);

export {};
