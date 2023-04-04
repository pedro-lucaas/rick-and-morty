import pageToPageMapper from "./pageToPageMapper";

describe('pageToPageMapper', () => {
  it('should return an array of page numbers to be displayed in the pagination component', () => {
    expect(pageToPageMapper(5, 10)).toEqual([3, 4, 5, 6, 7]);
    expect(pageToPageMapper(1, 10)).toEqual([1, 2, 3, 4, 5]);
    expect(pageToPageMapper(10, 10)).toEqual([6, 7, 8, 9, 10]);
    expect(pageToPageMapper(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pageToPageMapper(5, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pageToPageMapper(10, 5)).toEqual([]);
    expect(pageToPageMapper(-1, 5)).toEqual([]);
    expect(pageToPageMapper(1, 3)).toEqual([1, 2, 3]);
    expect(pageToPageMapper(2, 3)).toEqual([1, 2, 3]);
  });
});