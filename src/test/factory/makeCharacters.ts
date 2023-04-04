import { faker } from "@faker-js/faker";
import { CharacterType } from "../../store/character/types";

export const makeCharacter = (overrides?: Partial<CharacterType>): CharacterType => ({
  id: Number(faker.random.numeric()),
  name: faker.name.firstName(),
  status: faker.random.word(),
  species: faker.random.word(),
  type: faker.random.word(),
  gender: faker.random.word(),
  origin: {
    name: faker.address.city(),
    url: faker.internet.url(),
  },
  location: {
    name: faker.address.city(),
    url: faker.internet.url(),
  },
  image: faker.image.imageUrl(),
  episode: [faker.internet.url()],
  url: faker.internet.url(),
  created: faker.date.past().toISOString(),

  ...overrides,
});
