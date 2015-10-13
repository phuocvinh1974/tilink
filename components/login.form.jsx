var LoginForm = React.createClass({

	doLogin: function () {

		if (!this.state.username) {
			this.setState ({msg:'nhap ho ten'})
			return;
		}

		if (!this.state.password) {
			this.setState ({msg:'nhap mat khau'})
			return;
		}

		$.ajax({
			type:'post',url:'modules/dologin.php',
			data: {
				username:this.state.username,
				password:this.state.password
			},
			dataType:'json',
			success: function (res) {
				if (res.granted) alert('dang nhap thanh cong')
				else alert('that bai')
			}
		})
	},

	usernameChange: function (e) {
		this.setState ({ username: e.target.value }) 
	},

	passwordChange: function (e) {
		this.setState ({ password: e.target.value }) 
	},

	getInitialState: function () {
		return {
			username: null, password: null, msg: 'vui long dang nhap'
		}
	},

	render: function () {
		return (
			<div>
				<div>Login</div>
				<div><input type="text" value={this.state.username} onChange={this.usernameChange} placeholder="username"/></div>
				<div><input type="password" value={this.state.password} onChange={this.passwordChange} placeholder="password"/></div>
				<div><button onClick={this.doLogin}>Login</button></div>
				<div>{this.state.msg}</div>
			</div>
		);
	}

});