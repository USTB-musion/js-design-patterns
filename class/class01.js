(function(){
		//在javascript中我们利用function来定义类
		function Shape() {
			var x = 1;
			var y = 2
		}
		//然后我们如何实例化一个对象呢？通过new关键字
		var aShape = new Shape();
		alert(aShape.x) 	//undefined

		//在类的内部我们用var定义的是私有变量，如何才能定义公有变量呢？
		function Shape2() {
			this.x = 1;
			this.y = 2;
		}
		var bShape = new Shape2();
		alert(bShape.x);		//1

		//除了定义私有变量外还可以用var定义私有函数
		//private函数
		function Shape3() {
			var draw = function() {
				//私有函数
			}
			this.draw2 = function() {
				//外界可以看到的公有函数
			}
		}
		var c = new Shape3();
		c.draw2();

		//用javascript模仿OOP编程
		function Shape4(ax,ay) {
			var x = 0;
			var y = 0;
			var init = function() {
				x = ax;
				y = ay;
			}
			init();
			this.getX = function() {
				return x;
			}
		}
		var d = new Shape4(2,4);
		alert(d.getX());

		//模仿OOP编程的构造函数,现在我们来写静态属性和静态方法
		//JS中静态方法是作用到类身上的而非是对象
		function Person() {
			this.name = "JeeLee"
		}
		//静态变量
		Person.age = 0;
		Person.showName = function(obj) {
			alert(obj.name)
		}
		Person.showName(new Person())

		//Array.each = function() {}

		//简单类建议方法
		var a = {};
		var array = [];
		a["name"] = "lijin";
		alert(a.name)
})()