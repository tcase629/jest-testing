import reducer from '../../reducers/items';

describe('items reducers', () => {
  it('it should return inital state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_ITEM', () => {
    expect(
      reducer(
        [],
        { type: 'ADD_ITEM', name: 'Buy Milk' }
      )
    ).toEqual(['Buy Milk'])
  });
 
  it('should handle REMOVE_ITEM', () => {
    const items = reducer(['Buy Milk', 'Learn React', 'Learn Redux'], {
      type: 'REMOVE_ITEM',
      index: 1
    })
    expect(items).toEqual(['Buy Milk', 'Learn Redux']);
    expect(items.length).toEqual(2);
  });
});