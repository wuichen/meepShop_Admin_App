import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher'
import SearchModeConstants from '../constants/SearchModeConstants';
const CHANGE_EVENT = "change";

let searchMode = false;
function changeSearchMode (type) {
  if(type=='close'){
    searchMode = false;
  }else{
    searchMode = true;
  }
  console.log(searchMode);
}
class SearchModeStore extends EventEmitter {
  getsearchMode () {
    return searchMode;
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

var searchModeStore = new SearchModeStore();
    
AppDispatcher.register(action => {
  switch(action.actionType){
    case SearchModeConstants.SEARCHMODEON:
      console.log("success2");
      changeSearchMode(action.type);
      searchModeStore.emitChange();
      break;

  }
});

export default searchModeStore;