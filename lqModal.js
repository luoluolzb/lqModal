/**
 * 简单模态框：信息框、操作确认框、信息输入框
 * 此功能建立在jquery和bootstrap的模态框插件基础上
 * @author  luoluolzb
 * @version 2.0
 * @time    2019/5/5
 */
var lqModal = {};

$(function(){
	$(document.body).append($(`
<div id="lqModal-container">
	<!-- message Modal -->
	<div class="modal fade" id="lqModal-message-modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">提示消息</h5>
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button type="button" class="okBtn btn btn-primary" data-dismiss="modal">确定</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- dialog Modal -->
	<div class="modal fade" id="lqModal-dialog-modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">操作提示</h5>
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button type="button" class="okBtn btn btn-primary" data-dismiss="modal">确定</button>
					<button type="button" class="cancelBtn btn btn-secondary" data-dismiss="modal">取消</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- input Modal -->
	<div class="modal fade" id="lqModal-input-modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">输入信息</h5>
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body">
					<label></label>
					<input type="text" class="form-control" value="" />
				</div>
				<div class="modal-footer">
					<button type="button" class="okBtn btn btn-primary" data-dismiss="modal">确定</button>
					<button type="button" class="cancelBtn btn btn-secondary" data-dismiss="modal">取消</button>
				</div>
			</div>
		</div>
	</div>
</div>
	`));
	
	/**
	 * 模态框的jQuery对象表
	 * @type {Object}
	 */
	lqModal.modals = {
		$message: $('#lqModal-message-modal'),
		$dialog:  $('#lqModal-dialog-modal'),
		$input:   $('#lqModal-input-modal'),
	};
	
	// 快速访问
	var $message = lqModal.modals.$message;
	var $dialog  = lqModal.modals.$dialog;
	var $input   = lqModal.modals.$input;

	/**
	 * 显示消息模态框
	 * @param  {Object} options 参数
	 */
	lqModal.message = function(options) {
		// 如果只传入一个字符串则作为说明文本
		if (typeof options === 'string') {
			options = {
				text: options,
			};
		}
		options = $.extend({
			text: '',            // 说明文本
			ok: undefined,       // 点击'确定'按钮的回调函数
		}, options || {});

		$message.find('.modal-body').html(options.text);
		$message.find('.okBtn').off('click').on('click', options.ok);
		$message.modal('show');
	};

	/**
	 * 显示对话模态框
	 * @param  {Object} options 参数
	 */
	lqModal.dialog = function(options) {
		options = $.extend({
			text: '',            // 说明文本
			ok: undefined,       // 点击'确定'按钮的回调函数
			cancel: undefined,   // 点击'取消'按钮的回调函数
		}, options || {});

		$dialog.find('.modal-body').html(options.text);
		$dialog.find('.okBtn').off('click').on('click', options.ok);
		$dialog.find('.cancelBtn').off('click').on('click', options.cancel);
		$dialog.modal('show');
	};

	/**
	 * 显示输入模态框
	 * @param  {Object} options 参数
	 */
	lqModal.input = function(options) {
		options = $.extend({
			text: '',            // 说明文本
			ok: undefined,       // 点击'确定'按钮的回调函数
			cancel: undefined,   // 点击'取消'按钮的回调函数
			input: {             // 输入模态框中input元素属性
				type: 'text',
				value: '',
				placeholder: '',
			},
		}, options || {});

		$input.find('label').html(options.text);
		$input.find('input').attr(options.input).val(options.input.value);
		$input.find('.okBtn').off('click').on('click', options.ok);
		$input.find('.cancelBtn').off('click').on('click', options.cancel);
		$input.modal('show');
	};

	/**
	 * 显示模态框
	 * @param  {string} type    模态框类型
	 * @param  {Object} options 参数
	 */
	lqModal.modal = function(type, options) {
		var func = lqModal[type];
		if (func && typeof func === 'function') {
			return func(options);
		}
	};

	/**
	 * 获取输入模态框输入的内容
	 * @return {string} 输入框内容
	 */
	lqModal.getInput = function() {
		return $input.find('input').val();
	};
});
