import api from '../src/services/api';
import MockAdapter from 'axios-mock-adapter';
import { makeCharacter } from '../src/test/factory/makeCharacters';

const mock = new MockAdapter(api);

const count = 40
const pageSize = 20
const characters = Array.from({ length: count }, (_, i) =>
  makeCharacter({ id: i + 1 }),
);

mock.onGet('/character').reply(200, {
  info: {
    count,
    pages: Math.ceil(count / pageSize),
  },
  results: [
    ...characters.slice(0, pageSize),
  ]
});
mock.onGet('/character?page=2').reply(200, {
  info: {
    count,
    pages: Math.ceil(count / pageSize),
  },
  results: [
    ...characters.slice(pageSize, pageSize * 2),
  ]
});
mock.onGet('/character/1').reply(200, characters[0]);
mock.onGet('/character/2').reply(200, characters[1]);
mock.onGet('/character/3').reply(200, characters[2]);
mock.onGet('/character/4').reply(200, characters[3]);
mock.onGet('/character/5').reply(200, characters[4]);
mock.onGet('/character/6').reply(200, characters[5]);
mock.onGet('/character/7').reply(200, characters[6]);
mock.onGet('/character/8').reply(200, characters[7]);
mock.onGet('/character/9').reply(200, characters[8]);
mock.onGet('/character/10').reply(200, characters[9]);

export default api;
