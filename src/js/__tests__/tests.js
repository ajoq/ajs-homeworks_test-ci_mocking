import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

test.each([
  [{ status: 'ok', level: 10 }, 'Ваш текущий уровень: 10'],
  [{ status: 'Bad Request', level: 10 }, 'Информация об уровне временно недоступна'],
])('response', (response, expected) => {
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toEqual(expected);
});
