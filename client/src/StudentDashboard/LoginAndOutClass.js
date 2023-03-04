import {useState} from "react";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import "./LoginAndOutClass.css";
const LoginAndOutClass = () => {
	const navigate = useNavigate();
	function handleClick() {
		setLogintime(moment(currentdateandtime).format("h:mm a on MMMM Do YY"));
	}

  function handleLogout() {
		setLogouttime(moment(currentdateandtime).format("h:mm a on MMMM Do YY"));
	}
  // value={`${moment(date).format("DD/MM/YY")}
  const currentdateandtime = Date.now()
  const [logintime, setLogintime] = useState('--:-- on --/--/-----')
  const [logouttime, setLogouttime] = useState('--:-- on --/--/-----')
	return (
		<div>
			{/* <div>
				<label> Login time / date</label>
				<input value={logintime}/>
			</div>
			<div>
				<label> Log out time / date</label>
				<input value={logouttime} />
			</div>
			<div className='buttons'>
				<button className='login__class' onClick={handleClick}>
					Log in class
				</button>
				<button className='logout__class' onClick={handleLogout}>
					Log out class
				</button>
			</div> */}
		</div>
	);
};
export default LoginAndOutClass;
