var BinaryTree = (function(){
	var _ = function() {
		this.root = null;
	}

	_.prototype = {
		addNode : function(data) {
			if(typeof data !== 'number') {
				throw new Error("Wrong data type");
			}

			var node = new Node(data);

			if(this.root == null) {
				this.root = node;
			}
			else {
				var current = this.root;
				var parent;

				while(current !== null) {
					parent = current;
			
					if(node.data > parent.data) {
						current = parent.rightChild;
						if(current == null) {
							parent.rightChild = node;
						}
					}
					else if (node.data < parent.data) {
						current = parent.leftChild;
						if(current == null) {
							parent.leftChild = node;
						}
					}	
				}
				
				console.log("added node " + node.data);
			}
		},

		displayInOrder : function(root) {
			if(root == null) {
				return;
			}

			this.displayInOrder(root.leftChild);
			console.log(root.data);
			this.displayInOrder(root.rightChild);
		}
	}

	var Node = function(data) {
		this.data = data;
		this.leftChild = null;
		this.rightChild = null;
	}

	return _;
})();

module.exports = BinaryTree;