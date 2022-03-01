import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
	const [signin, setSignin] = useState({
		username: "",
		password: "",
	});
	const naviget = useNavigate();
	const signinFN = () => {
		if (signin.username != "outibois") {
			setSignin({ ...signin, status: "enter your username" });
		} else if (signin.password.length === 0)
			setSignin({ ...signin, status: "enter a password" });
		else if (signin.password != "outibois@2022")
			setSignin({ ...signin, status: "password too short and wrong" });
		else {
			// console.log("done");
			naviget("/Admindash");
		}
	};

	return (
		<div className='login'>
			<div className='left-div-admin'></div>
			<div className='contact'>
				<h3 className='titlee'>Sign In</h3>
				<input
					value={signin.username}
					onChange={(e) =>
						setSignin({ ...signin, username: e.target.value })
					}
					name='username'
					placeholder='username'
					type='text'
				/>
				<input
					value={signin.password}
					onChange={(e) =>
						setSignin({ ...signin, password: e.target.value })
					}
					name='password'
					placeholder='password'
					type='password'
				/>
				<div>
					<button onClick={signinFN}>Sign In</button>
					<span style={{ fontSize: "20px", color: "red" }}>
						{" "}
						{signin.status}{" "}
					</span>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
