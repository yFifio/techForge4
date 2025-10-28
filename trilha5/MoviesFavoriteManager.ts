class MoviesFavoriteManager extends FavoriteManager {
  private favorites: Set<string> = new Set();

  addFavorite(item: string): void {
    this.favorites.add(item);
    console.log(`Filme "${item}" adicionado aos favoritos.`);
  }

  getFavorites(): string[] {
    return Array.from(this.favorites).sort();
  }
}
