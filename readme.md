# lqModel

## 介绍
这是一个可以快速使用boostrap模态框的工具，目前包含了三个模态框：信息框、操作确认框、信息输入框。


## 使用要求
1. `boostrap v4`
2. `jquery`
3. `boostrap`的`modal.js`插件，或者使用 `boostrap.min.js`


## 使用方法

### 消息框
只需要显示一些消息：
```javascript
lqModal.message('Hello!');
```

显示一些消息，并在用户点击确认按钮后做一些处理：
```javascript
lqModal.message({
	text: 'Hello!',
	ok: function()(event) {  //点击确定按钮
		//do something
	},
});
```


### 操作确认框
显示一个操作询问，并在用户点击确认或取消按钮后做一些处理：
```javascript
lqModal.message({
	text: 'dialog',
	ok: function()(event) {  //点击确定按钮
		//do something
		console.log('我吃了');
	},
	cancel: function()(event) {  //点击取消按钮
		//do something
		console.log('还没吃');
	},
});
```
如果你只需要在点击确认或取消中的一个做一些处理，另外一个可以函数可以省略（当然如果不需要任何处理，可以个函数都不写）。


### 信息输入框
显示一个输入框，可以输入一些信息：
```javascript
lqModal.input({
	text: '输入你的邮箱？',
	input: {   //输入框属性
		type: 'email',  //输入框类型
		placeholder: '请输入你的邮箱',
	},
	ok: function()(event) {  //点击确定按钮
		var email = lqModal.getInput();  //获取输入的内容
		//do something
	},
	cancel: function()(event) {  //点击取消按钮
		//do something
	},
});
```
如果你只需要在点击确认或取消中的一个做一些处理，另外一个可以函数可以省略（当然如果不需要任何处理，可以个函数都不写）。

