# lqModal

## 介绍
这是一个可以快速使用boostrap模态框的js库，有了这个库在只需要一些简单的模态框时就比较方便了。
目前包含了三个模态框：信息框、操作确认框、信息输入框。


## 使用要求
导入`lqModal.js`之前需要以下环境
1. `boostrap v4` UI框架
2. `jquery`库
3. `boostrap`的`modal.js`插件，或者使用 `boostrap.min.js`


## 使用例子
你可以查看[使用例子](https://github.com/luoluolzb/lqModal/blob/master/example/demo.html)


## 参考文档

### 消息框
只需要显示一些消息：
```javascript
lqModal.message('Hello!');
```

显示一些消息，并在用户点击确认按钮后做一些处理：
```javascript
lqModal.message({
	text: 'Hello!',
	ok: function(event) {  //点击确定按钮
		console.log('you clicked ok button.');
	},
});
```


### 操作确认框
显示一个操作询问，并在用户点击确认或取消按钮后做一些处理：
```javascript
lqModal.dialog({
	text: '你吃饭了没？',
	ok: function(event) {  //点击确定按钮
		console.log('我吃了');
	},
	cancel: function(event) {  //点击取消按钮
		console.log('还没吃');
	},
});
```
如果你只需要在处理确认或取消中的一个事件，另外一个可以函数可以省略（当然如果不需要任何处理，可以个函数都不写）。这规则在其他的模态框也适用。


### 信息输入框
显示一个输入框，可以输入一些信息：
```javascript
lqModal.input({
	text: '输入你的邮箱：',
	input: {   //输入框属性
		type: 'email',  //输入框类型
		placeholder: '请输入你的邮箱',
	},
	ok: function(event) {  //点击确定按钮
		var email = lqModal.getInput();  //获取输入的内容
		console.log('Your email is ' + email);
	},
	cancel: function(event) {  //点击取消按钮
		console.log('you clicked cancel button.');
	},
});
```

