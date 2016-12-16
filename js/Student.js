var StuObj = {
	getStu: function(name) {
		return new Student(name);
	}
}

/*构造函数*/
function Student(name) {
	this.name = name;
	this.show = function() {
		console.log("Hello," + this.name);
	}
}

