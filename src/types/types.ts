export interface Element {
  title?: string;
  name: string;
  type: string;
  alert1: string;
  alert2: string;
  alert3: string;
  alert4: string;
  alert5: string;
}
export interface SetElement {
  (element: Element): void;
}
export interface SetElements {
  (elements: Element[]): void;
}
