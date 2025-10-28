class BooksFavoriteManager extends FavoriteManager {
  private favorites: string[] = [];

  addFavorite(item: string): void {
    this.favorites.unshift(item);
    console.log(`Livro "${item}" adicionado aos favoritos.`);
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}
