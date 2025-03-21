class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
  Insert(data) {
    const newnode = new node(data);
    if (this.root === null) {
      this.root = newnode;
    } else {
      this.Insertnode(this.root, newnode);
    }
  }
  Insertnode(node, newnode) {
    if (newnode.data < node.data) {
      if (node.left === null) {
        node.left = newnode;
      } else {
        this.Insertnode(node.left, newnode);
      }
    } else {
      if (node.right === null) {
        node.right = newnode;
      } else {
        this.Insertnode(node.right, newnode);
      }
    }
  }

  Inorder(node) {
    if (node) {
      this.Inorder(node.left);
      console.log(node.data);
      this.Inorder(node.right);
    }
  }

  binaryarray(arr) {
    const unique = [...new Set(arr)].sort((a, b) => a - b);

    const tree = (sortedarray) => {
      if (sortedarray.length === 0) {
        return null;
      } else {
        let mid = Math.floor(sortedarray.lenght / 2);
        this.root = new node(sortedarray[mid]);

        this.root.left = tree(sortedarray.slice(0, mid));
        this.root.right = tree(sortedarray.slice(mid + 1));

        return this.root;
      }
    };

    this.root = tree(unique);
  }
}

/* let binarytree = new bst();
 binarytree.Insert(5);
 binarytree.Insert(8);
 binarytree.Insert(6);
 binarytree.Insert(3);
 binarytree.Inorder(binarytree.root);*/

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let binary = new bst();
binary.binaryarray(data);

