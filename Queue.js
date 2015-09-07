var Queue = (function() {

	var _ = function() {
		this.first = null,
		this.last = null,
		this.count = 0;
	}

	_.prototype = {
		get totalCount() {
			return this.count;
		},

		enqueue : function(data) {
			var node = new Node(data);
			
			if(this.first==null) {
				this.last = node;
				this.first = this.last;
			}
			else {
				this.last.next = node;
				this.last = this.last.next;
			}
			this.count++;
		},

		dequeue : function() {
			if(this.first !== null) {
				var current = this.first;
				this.first = this.first.next;
				this.count++;
				return current;
			}
			else {
				this.count = 0;
				return null;
			}
		},

		printQueue : function() {
			var result = [];
			var current = this.first;
			for(var i = 0; i < this.count; i++) {
				result.push(current.data);
				current = current.next;
			}
			return result;
		}
	}

	var Node = function(data) {
		this.data = data;
		this.next = null;
	}

	return _;
})();

module.exports = Queue;