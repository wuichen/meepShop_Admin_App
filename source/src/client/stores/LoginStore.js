import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher'
import LoginConstants from '../constants/LoginConstants';
const CHANGE_EVENT = "change";

let loggedIn = false;
let loginFailed = false;

function login(success) {
  if(success){
    console.log("success3");
    loggedIn = true;
    loginFailed = false;
  }else{
    console.log("failed3");
    loggedIn = false;
    loginFailed = true;
  }
}

class LoginStore extends EventEmitter {
  getloggedIn() {
    return loggedIn;
  }

  getloginFailed() {
    return loginFailed;
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
};

var loginStore = new LoginStore();
    
AppDispatcher.register(action => {
  switch(action.actionType){
    case LoginConstants.LOGINSUCCESS:
      console.log("success2");
      login(action.success);
      loginStore.emitChange();
      break;
    case LoginConstants.LOGINUNSUCCESS:
      console.log("failed2");
      login(action.success);
      loginStore.emitChange();
      break;

  }
});

export default loginStore;
