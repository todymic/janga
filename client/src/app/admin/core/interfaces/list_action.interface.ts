export interface ListActionInterface {
  onEdit(id: number): void;
  onRemove(id: number): void;
  onCreate(): void;
  applyFilter($event: Event): void;
}
