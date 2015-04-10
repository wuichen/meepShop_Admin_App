import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';


let LoginAction = {
  start(credentials) {
    if(credentials.username === 'aaa' && credentials.password === 'aaa'){
      console.log("success1");
      AppDispatcher.dispatch({
        actionType: LoginConstants.LOGINSUCCESS,
        success: true
      });
    }else{
      console.log("failed1");
      AppDispatcher.dispatch({
        actionType: LoginConstants.LOGINUNSUCCESS,
        success: false
      });
    }
  }
}  


export default LoginAction;
