var Stack = (function() {
	
	var _ = function() {
		this.top = null;
		this.count = 0;
	}

	_.prototype = {
		get totalCount() {
			return this.count;
		},

		get topOfStack() {
			return this.top;
		},

		push : function(data) {
			var node = new Node(data);
			node.next = this.top;
			this.top = node;
			this.count++;
		},

		pop : function() {
			if (this.top !== null) {
				var out = this.top;
				this.top = this.top.next;
				count--;
				return out.data;
			}
			else {
				count = 0;
				return null;
			}
		},

		displayAll : function() {
			if(this.top !== null) {
				var result = [];
				var temp = this.top;
				console.log(temp.data);
				for(var x = 0; x<this.count; x++) {
					result.push(temp.data);
					temp = temp.next;
				}	
				return result;
			}
			else {
				return null;
			}
		}
	}

	var Node = function(data) {
		this.data = data;
		this.next = null;
	}

	return _;
})();

module.exports = Stack;