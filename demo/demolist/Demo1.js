/**
 * @title Icon
 * @description 在iuap字符库，`type`参数值均以-分隔。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="tinper-icon-demo">
				<Icon type="add-square-button"/> 
				<Icon type="adjust-contrast" />
				<Icon type="align-justify" />
				<Icon type="align-to-left" />
				<Icon type="align-to-right" />
			</div>
		)
	}
}