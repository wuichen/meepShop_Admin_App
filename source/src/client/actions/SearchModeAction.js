import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchModeConstants from '../constants/SearchModeConstants';


let SearchModeAction = {
  change(type) {
    
      AppDispatcher.dispatch({
        actionType: SearchModeConstants.SEARCHMODEON,
        type: type.action
      });
    
  }
}  


export default SearchModeAction;
