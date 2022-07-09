class Node {
  key: string;
  value: any;
  next: Node | null;
  prev: Node | null;
  constructor(
    key: string,
    value: any,
    next: Node | null = null,
    prev: Node | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
};

// in-memory example
export default class LRU {
  private map: Map<string, any>;
  private maxItems: number = 5;
  private currentSize: number = 0;
  private head: Node | null;
  private tail: Node | null;
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
      this.set(key, requiredNode!.value);
    }
    return requiredNode!.value;
  }
  public set(key: string, value: any) {
    if (this.map.has(key)) {
      this.removeNode(this.map.get(key));
      this.currentSize--;
    } else if (this.currentSize === this.maxItems) {
      this.map.delete(this.tail!.key); // remove LRU as it is at tail
      this.removeNode(this.tail!); // remove tail
      this.currentSize--;
    }
    if (!this.head) {
      // inserting first node
      const newNode = new Node(key, value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(key, value, this.head);
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.map.set(key, this.head);
    this.currentSize++;
  }

  private removeNode(node: Node) {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }
};
