// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let node1 = list.head;
  let node2 = list.head;
  for (let i = 0; i < n; i++) {
    node2 = node2.next;
  }
  while (node2.next) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1;
}

module.exports = fromLast;
