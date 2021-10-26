import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

test('request', () => {
  fetchData.mockReturnValueOnce({ status: 'ok', level: 10 });

  getLevel(1);

  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('response status ok', () => {
  fetchData.mockReturnValueOnce({ status: 'ok', level: 10 });

  expect(getLevel(1)).toEqual('Ваш текущий уровень: 10');
});

test('response status bad', () => {
  fetchData.mockReturnValueOnce({ status: 'Bad Request', level: 10 });

  expect(getLevel(1)).toEqual('Информация об уровне временно недоступна');
});
