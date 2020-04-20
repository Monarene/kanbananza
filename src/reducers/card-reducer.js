import { cards as defaultCards } from "../normalize-state";

const cardsReducer = (cards = defaultCards, action) => {
  console.log(cards, action);
  return cards;
};

export default cardsReducer;
