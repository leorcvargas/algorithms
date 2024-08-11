type Person = {
  name: string;
  profession: 'dev' | 'medic' | 'firefighter' | 'student' | 'seller';
};

const me = 'leo';

const people: Record<string, Person> = {};
people[me] = { name: 'leo', profession: 'dev' };
people['alice'] = { name: 'alice', profession: 'medic' };
people['bob'] = { name: 'bob', profession: 'student' };
people['claire'] = { name: 'claire', profession: 'firefighter' };
people['anuj'] = { name: 'anuj', profession: 'medic' };
people['bob'] = { name: 'bob', profession: 'dev' };
people['thom'] = { name: 'thom', profession: 'seller' };
people['jonny'] = { name: 'jonny', profession: 'firefighter' };
people['peggy'] = { name: 'peggy', profession: 'medic' };

const friends: Record<string, Person[]> = {};
friends[me] = [people['alice'], people['bob'], people['claire']];
friends['bob'] = [people['anuj'], people['peggy']];
friends['alice'] = [people['peggy']];
friends['claire'] = [people['thom'], people['jonny']];
friends['anuj'] = [];
friends['peggy'] = [people[me]];
friends['thom'] = [];
friends['jonny'] = [];

const worksWith = (person: Person, profession: Person['profession']) =>
  person.profession === profession;

const searchFriendsByProfession = (
  startingPerson: Person,
  profession: Person['profession'],
) => {
  const queue: Person[] = [];
  queue.push(startingPerson);

  const searched: string[] = [];

  while (queue.length) {
    const person = queue.shift()!;

    if (!searched.includes(person?.name)) {
      if (worksWith(person, profession)) {
        return person;
      } else {
        queue.push(...friends[person.name]);
        searched.push(person.name);
      }
    }
  }

  return null;
};

console.log(searchFriendsByProfession(people[me], 'seller'));

export { searchFriendsByProfession };
