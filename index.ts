type FriendGraph = {
  [name: string]: string[];
};

// silly, but only for the sake of this example
const isSeller = (person: string) => person[person.length - 1] === 'm';

const findMangoSeller = (name: string, graph: FriendGraph) => {
  const queue: string[] = [];
  queue.push(...graph[name]);
  const searched: string[] = [name];

  while (queue.length) {
    const person = queue.shift()!;

    if (!searched.includes(person))
      if (isSeller(person)) {
        return person;
      } else {
        queue.push(...graph[person]);
        searched.push(person);
      }
  }

  return null;
};

const main = () => {
  const me = 'leo';

  const graph: FriendGraph = {};
  graph[me] = ['alice', 'bob', 'claire'];
  graph['bob'] = ['anuj', 'peggy'];
  graph['alice'] = ['peggy'];
  graph['claire'] = ['thom', 'jonny'];
  graph['anuj'] = [];
  graph['peggy'] = [me];
  graph['thom'] = [];
  graph['jonny'] = [];

  const result = findMangoSeller(me, graph);

  if (result) {
    console.log(`${result} is a mango seller!`);
  } else {
    console.log('No mango seller found.');
  }
};

main();
