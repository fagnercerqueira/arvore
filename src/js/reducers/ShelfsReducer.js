const INITIAL_STATE = [
  {
    id: 0,
    slug: 'aventura',
    title: 'Aventura',
    bgColor: null,
    textColor: '#2D2D2E',
    qty: 6,
    data: undefined,
  },
  {
    id: 1,
    slug: 'infantil',
    title: 'Infantil',
    bgColor: null,
    textColor: '#2D2D2E',
    qty: 8,
    data: undefined,
  },
  {
    id: 2,
    slug: 'destaques',
    title: 'Destaques',
    bgColor: '#47B7ED',
    textColor: null,
    qty: 9,
    data: undefined,
  },
  {
    id: 3,
    slug: 'acao',
    title: 'Ação',
    bgColor: null,
    textColor: '#2D2D2E',
    qty: 12,
    data: undefined,
  },
];
const shelfs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_SHELF_DATA':
      return state.map(shelf =>
        shelf.id === action.payload.id
          ? {...shelf, data: action.payload.data}
          : shelf,
      );
    default:
      return state;
  }
};

export default shelfs;
