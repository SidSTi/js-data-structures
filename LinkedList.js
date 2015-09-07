var LinkedList = (function() {
	
	var _ = function() {
		this.head = null,
		this.count = 0;
	}

	_.prototype = {
		get totalCount() {
			return this.count;
		},

		addFirst : function(data) {
			var node = new Node(data);

			if(this.head == null) {
				this.head = node;
			}
			else {
				node.next = this.head;
				this.head = node;
			}
			this.count++;
		},

		addAfter : function(data, index) {
			var node = new Node(data);

			if(this.head == null) {
				this.addFirst(data);
			}
			else {
				var current = this.head;

				for(var i = 0; i < index; i++) {
					current = current.next;
				}

				node.next = current.next;
				current.next = node;

				this.count++;
			}
		},

		append : function(data) {
			var node = new Node(data);

			if(this.head==null) {
				this.addFirst(data);
			}
			else {
				var current = this.head;
				while(current.next) {
					current = current.next;
				}
				current.next = node;
				this.count++;
			}
		},

		delete : function(index) {
			var current = this.head;
			var previous;

			for(var i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next = null;
		},

		displayAll : function() {
			var arr = [];
			if(this.head !== null) {
				var current = this.head;

				while(current) {
					arr.push(current.data);
					current = current.next;
				}
				return arr;
			}
			return null;
		},

		indexOf : function(data) {
			var searchElem = data;
			var current = this.head;
			var index=0;

			while(current) {
				if(current.data == searchElem) {
					return index;
				}
				current = current.next;
				index++;
			}
			return null;
		},

		nthLastElem : function(n) {
			var offset = n;
			var current = this.head;
			var runner = this.head;

			while(current) {
				if(offset > 0) {
					current = current.next;
					offset--;
				}
				else {
					runner = runner.next;
					current = current.next;
				}
			}
			return runner.data;
		}
	}

	var Node = function(data) {
		this.next = null;
		this.data = data;
	}

	return _;
})();

module.exports = LinkedList;