import { items } from '../assets/mockdata/mockdata.json';
import filterByYear from './filter';

// test if the app renders correctly (shallow?)
describe('Must allow filtering of videos', () => {
  it('returns all videos if no filter', async () => {
    const allvideos = filterByYear(items, '');
    expect(allvideos.length).toBe(25);
  });
  it('returns a limited set of videos ', () => {
    const allvideos = filterByYear(items, '2014');
    expect(allvideos.length).toBe(1);
  });
});
