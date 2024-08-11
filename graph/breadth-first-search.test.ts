import { expect, describe, test } from 'bun:test';
import { searchFriendsByProfession, type Person } from './breadth-first-search';

describe('graph', () => {
  const me = 'leo';

  const people: Record<string, Person> = {};
  people[me] = { name: 'leo', profession: 'dev' };
  people['alice'] = { name: 'alice', profession: 'medic' };
  people['bob'] = { name: 'bob', profession: 'student' };
  people['claire'] = { name: 'claire', profession: 'firefighter' };
  people['anuj'] = { name: 'anuj', profession: 'medic' };
  people['thom'] = { name: 'thom', profession: 'seller' };
  people['jonny'] = { name: 'jonny', profession: 'video editor' };
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

  test('should look for a medic and find Alice', () => {
    const result = searchFriendsByProfession(people[me], 'medic', friends);

    expect(result).toStrictEqual(people['alice']);
  });

  test('should look for a student and find Bob', () => {
    const result = searchFriendsByProfession(people[me], 'student', friends);

    expect(result).toStrictEqual(people['bob']);
  });

  test('should look for a firefighter and find Claire', () => {
    const result = searchFriendsByProfession(
      people[me],
      'firefighter',
      friends,
    );

    expect(result).toStrictEqual(people['claire']);
  });

  test('should look for a seller and find Thom', () => {
    const result = searchFriendsByProfession(people[me], 'seller', friends);

    expect(result).toStrictEqual(people['thom']);
  });

  test('should look for a video editor and find Jonny', () => {
    const result = searchFriendsByProfession(
      people[me],
      'video editor',
      friends,
    );

    expect(result).toStrictEqual(people['jonny']);
  });

  test('should look for a manager and find nothing', () => {
    const result = searchFriendsByProfession(people[me], 'manager', friends);

    expect(result).toBeNull();
  });
});
