
import { useInput } from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
export default function Login() {

  const { value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError
  } = useInput('',(value) => isEmail(value) && isNotEmpty(value));
 
  const { value: passValue,
    handleInputBlur: handlePassBlur,
    handleInputChange: handlePassChange,
    hasError: passwordHasError
  } = useInput('',(value) => hasMinLength(value,6));
 
 
  // const [enteredValues,setEnteredValues] = useState({
  //   email:'',
  //   password:''
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email : false,
  //   password : false
  // })

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  // const [enteredEmail,setEnteredEmail] = useState('');
  // const [enteredPassword,setEnteredPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailValue,passValue);

    if(emailHasError || passwordHasError){
      return;
    }



    // console.log("submitted");
    // console.log('User email:' + enteredEmail);
    // console.log('Entered Password :' + enteredPassword);


  }

  // function handleInputChange(identifier,value){
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier] : value
  //   }));
  //   setDidEdit(prevEdit =>({
  //     ...prevEdit,
  //     [identifier] : false
  //   }))
  // }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier] : true
  //   })) ;
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur} //built in default browser event that will be fired if this input losts focus
            onChange={handleEmailChange}
            value={emailValue} 
            />
            <div className="control-error"> {emailHasError && <p>'Please enter valid email'</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handlePassBlur}
            onChange={handlePassChange}
            value={passValue} 
            />
            <div className="control-error"> {passwordHasError && <p>'Please enter valid password'</p>}</div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
