var App = React.createClass({
	render: function () {
		return (
			<div>

				<div className="flex" style={{fontSize:'18pt !important',color:'#FFF',backgroundColor:'#3F51B5;'}}>
				<div><i className="fa fa-windows "></i></div>
				<div className="header" style={{fontSize:'18pt !important',color:'#FFF',backgroundColor:'#3F51B5', }}>KẾ HOẠCH XUẤT HÀNG PKH</div>
				</div>

				<div className="flex">
					<Sidebar />
					<Container />
				</div>

			</div>
		);
	}
});