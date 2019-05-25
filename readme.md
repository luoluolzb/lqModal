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
	title: '提示消息',      //消息框标题(可选参数)
	text: 'Hello!',        //消息文本(html格式文本)
	ok: function(event) {  //点击确定按钮(可选参数)
		console.log('you clicked ok button.');
	},
});
```


### 操作确认框
显示一个操作询问，并在用户点击确认或取消按钮后做一些处理：
```javascript
lqModal.dialog({
	title: '操作提示',          //对话框标题(可选参数)
	text: '你吃饭了没？',       //对话框消息内容(html格式文本)
	ok: function(event) {      //点击确定按钮(可选参数)
		console.log('我吃了');
	},
	cancel: function(event) {  //点击取消按钮(可选参数)
		console.log('还没吃');
	},
});
```


### 信息输入框
显示一个输入框，可以输入一些信息：
```javascript
lqModal.input({
	title: '输入信息',                    //输入框标题(可选参数)
	text: '输入你的邮箱：',               //输入框消息内容(html格式文本)
	input: {                             //input标签属性
		type: 'email',                   //类型
		placeholder: '请输入你的邮箱',    //提示文本(可选参数)
		value: '',                       //内容(可选参数)
	},
	ok: function(event) {                //点击确定按钮(可选参数)
		var email = lqModal.getInput();  //获取输入的内容
		console.log('Your email is ' + email);
	},
	cancel: function(event) {            //点击取消按钮(可选参数)
		console.log('you clicked cancel button.');
	},
});
```