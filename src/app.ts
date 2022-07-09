export class Node {
  key: string;
  value: any;
  next: Node | null;
  prev: Node | null;
  constructor(key: string, value: any, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LRU {
  private map: Map<string, any>;
  private maxItems: number = 5;
  private currentSize: number = 0;
  head: Node | null;
  tail: Node | null;
  constructor(maxItems: number = 10) {
    this.currentSize = 0;
    this.maxItems = maxItems;
    this.head = null;
    this.tail = null;
    this.map = new Map<string, Node>();
  }

  public get(key: string): boolean | any {
    if (!this.map.has(key)) {
      console.log(`Key ${key} not present in Cache`);
      return false;
    }
    const requiredNode = this.map.get(key);
    if (this.head !== requiredNode) {
      this.set(key, requiredNode.value);
    }
    return requiredNode.value;
  }
  public set(key: string, value: any) {
    // remove the node if running out of capacity
    // remove if node exists (duplicate value) and write at the head
    // add Node to cache
  }
  public remove(node: Node) {

  }
}
