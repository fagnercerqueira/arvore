const INITIAL_STATE = {
  shelfs: [
    {
      slug: 'aventura',
      title: 'Aventura',
      bgColor: null,
      textColor: '#2D2D2E',
      data: [],
    },
    {
      slug: 'infantil',
      title: 'Infantil',
      bgColor: null,
      textColor: '#2D2D2E',
      data: [],
    },
    {
      slug: 'destaques',
      title: 'Destaques',
      bgColor: '#47B7ED',
      textColor: null,
      data: [],
    },
    {
      slug: 'acao',
      title: 'Ação',
      bgColor: null,
      textColor: '#2D2D2E',
      data: [],
    },
  ],
};
const shelfs = (state = INITIAL_STATE, action) => {
  return state;
};

export default shelfs;
