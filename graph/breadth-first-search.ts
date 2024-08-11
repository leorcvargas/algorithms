export type Person = {
  name: string;
  profession:
    | 'dev'
    | 'medic'
    | 'firefighter'
    | 'student'
    | 'seller'
    | 'manager'
    | 'video editor';
};

const worksWith = (person: Person, profession: Person['profession']) =>
  person.profession === profession;

const searchFriendsByProfession = (
  startingPerson: Person,
  profession: Person['profession'],
  friends: Record<string, Person[]>,
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

export { searchFriendsByProfession };
