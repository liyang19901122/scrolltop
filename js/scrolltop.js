var scrolltop = function() {
	var _this = this;
	return {
		init: function(container, btn, offset) {
			_this = this;
		},

		scrolltopFunc: function(container, btn, offset) {
			
			$("#" + btn).click(function() {
				$("#" + container).scrollTop(offset);
			});
		}
	}
}