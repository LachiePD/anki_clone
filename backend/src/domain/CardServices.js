class CardServices {
  constructor({ cardRepository }) {
    this.cardRepository = cardRepository;
  }
  async fetchCardsForDeck(deckId) {
    const cards = await this.cardRepository.fetchCardsForDeck(deckId);

    return cards;
  }

  async createNewCard({ deckId, userId, card }) {
    const response = await this.cardRepository.createNewCard({
      deckId,
      userId,
      card,
    });
    if (!response) {
      throw new Error("Error in creating new card");
    }
    return response;
  }
}

export default CardServices;
