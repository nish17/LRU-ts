import LRU from "./LRU";

const cache = new LRU(3);
// Test Case 1:
cache.set("a", {});
cache.set("b", {});
cache.set("c", {});
cache.set("d", {});
// Result: 
//  b   | c |  d
// LRU  |   | MRU
// tail |   | head

// Test Case 2:
cache.get("a");
// Result: Not Present

cache.get("b");
cache.set("d", {});
cache.set("c", {});
// Result: 
//  b   | d |  c
// LRU  |   | MRU
// tail |   | head
console.log(cache);
