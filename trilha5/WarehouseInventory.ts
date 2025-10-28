class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    const currentQuantity = this.inventory[item] || 0;
    this.inventory[item] = currentQuantity + quantity;
    console.log(
      `[Armazém] Adicionado ${quantity} de ${item}. Total: ${this.inventory[item]}`
    );
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
      console.log(`[Armazém] Item ${item} removido do inventário.`);
    } else {
      console.log(`[Armazém] Item ${item} não encontrado.`);
    }
  }

  getInventory(): InventoryType {
    return this.inventory;
  }
}
