class StoreInventory extends Inventory {
  private readonly ITEM_LIMIT = 10;

  addItem(item: string, quantity: number): void {
    const currentQuantity = this.inventory[item] || 0;
    const newQuantity = currentQuantity + quantity;

    if (newQuantity > this.ITEM_LIMIT) {
      this.inventory[item] = this.ITEM_LIMIT;
      console.log(`[Loja] Limite de ${this.ITEM_LIMIT} atingido para ${item}.`);
    } else {
      this.inventory[item] = newQuantity;
      console.log(
        `[Loja] Adicionado ${quantity} de ${item}. Total: ${this.inventory[item]}`
      );
    }
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
      console.log(`[Loja] Item ${item} removido da prateleira.`);
    } else {
      console.log(`[Loja] Item ${item} não encontrado.`);
    }
  }

  getInventory(): InventoryType {
    return this.inventory;
  }
}
