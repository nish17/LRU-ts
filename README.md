# LRU cache in Typescript

## 📝What is LRU?
Least Recently Used (LRU) is a cache replacement algorithm that replaces cache when the space is full. It allows us to access the values faster by removing the least recently used values. (Credits: [TopCoder](https://www.topcoder.com/thrive/articles/lru-cache))

## 📚Approach
- Using Doubly Linked List and HashMap
- Script is wrote in a way that the least recently used linked list node is at the tail, while the most recently used node is at the head.

## ✅PROs
- Configurable max capacity of cache
- Handles duplicate keys efficiently 

## ❗CONs
- Supports only in-memory data storage
- Because of shortage in time, couldn't explore much in presisting the data in json file.


## 🎓 License

MIT