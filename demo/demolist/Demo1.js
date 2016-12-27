/**
 * @title Icon
 * @description 在iuap字符库，`type`参数值均以-分隔。
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="tinper-icon-demo">
				<ul className="icon_lists">
					<li>
						<Icon type="uf-arrow-down-2"/> 
						<div className="fontclass">uf-arrow-down-2</div>
					</li>
					<li>
						<Icon type="uf-download"/> 
						<div className="fontclass">uf-download</div>
					</li>
				</ul>
			</div>
		)
	}
}