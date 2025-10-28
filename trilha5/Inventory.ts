type InventoryType = Record<string, number>;

abstract class Inventory {
  protected inventory: InventoryType = {};

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): InventoryType;
}
