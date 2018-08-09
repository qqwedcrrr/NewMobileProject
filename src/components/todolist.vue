<template>
	<div>
		<div>
		 <ul>
		 	<li v-for="item in count" @click="itemclick(item.middleline)" :style="{textDecoration:item.middleline}" >{{item.value}}</li>
		 </ul>
		</div>
		<input type="text" v-model="additem" />
	<div>
		<button @click="onclick">123</button>
	</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'todolist',
		data(){
			return{
				count: [
					{
						value:'一块钱',
						middleline:'none'
					},
					{
						value:'2块钱',
						middleline:'none'
					},
					{
						value:'3块钱',
						middleline:'none'
					},
					{
						value:'4块钱',
						middleline:'none'
					},
				],
				additem:null,
			}
		},
		methods:{
			onclick:function(){
				this.count.push(this.additem)
			},
			itemclick: function(item){
				console.log(item)
				item = item === 'none' ? 'line-through' : 'none'
				console.log(this.count)
			}
		}
	}
</script>