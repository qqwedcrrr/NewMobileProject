import { ADD_TODO } from './mutation-type'

export default{
	[ADD_TODO](state,item){
		state.add_item.push(item);
	}
}