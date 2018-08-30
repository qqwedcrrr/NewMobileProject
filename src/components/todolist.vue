<template>
	<div>
		<div>
		 <ul>
		 	<li v-for="item in count" key="item.id" :style="{textDecoration:item.middleline}" >
		 		<div v-on:click.stop="itemclick(item.id)">
		 		{{item.value}}
		 		</div>
		 		<button @click.stop="deletevalue(item.id)" style="{display: inline-block;}">X</button>
		 	</li>
		 </ul>
		</div>
		<input type="text" v-model="additem" />
	<div>
		<button @click="onclick">{{newitem}}</button>
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
						id:1,
						middleline:'none'
					},
					{
						value:'2块钱',
						id:2,
						middleline:'none'
					},
					{
						value:'3块钱',
						id:3,
						middleline:'none'
					},
					{
						value:'4块钱',
						id:4,
						middleline:'none'
					},
				],
				additem:null,
				newitem:null
			}
		},
		
		methods:{
			onclick:function(){
				let item = {
					value:this.additem,
					id:this.count[this.count.length-1].id+1,
					middleline:'none'
				}
				this.count.push(item)
				this.additem = null
			},
			itemclick: function(id){
				let pickitem = this.count.filter((item) => item.id === id)
				pickitem[0].middleline = pickitem[0].middleline === "none" ? 'line-through' : 'none';
			},
			deletevalue: function(id){
				console.log(id)
				this.count.splice(id-1,1)
			}
		},
		watch: {
			additem: function(){
				this.newitem = this.additem
			}
		},
		beforeDestroyed: function(){
				document.body.removeEventListener('click', ()=>{})
		}
	}
</script>