Vue.component('tasks', {
	template: `<section class="todoapp">
<header class="header">
	<h1>Tareas</h1>
	<input v-on:keyup.enter="add"  v-model="newTask" type="text" class="new-todo">
		   <button v-on:click="add" class="btn btn-primary">+</button> 
	
</header>

<section>

	<ul class="todo-list">
		<li class="todo" is="task" v-for="task in tasks" v-bind:task="task"></li>
		
	</ul>
</section>
<footer class="footer">
	<span class="todo-count">completas: {{ completed}} | incompletas: {{ incompleted}}</span>
	
</footer>
	
	</section>`,
	data: function(){ ///data es un objeto
			//se agrega una variable vacia porque da error si no se inicializa
			//luego de eso se guarda el nuevo elemento a newtask para introducirlo en tasks			newTask: "",
			return{
			newTask: "",
			tasks:[
				{title: "Aprender Laravel",completed:true},
				{title: "Aprender VueJS", completed:true},
				{title: "Aprender mysql",completed:false}
				]

			}
		},

	methods: {
			add: function(){
				if (this.newTask.length <=1) return alert("la tareas esta vacia");
				this.tasks.push({
					title:this.newTask,
					completed:false
				});
				this.newTask = "";
			}
			

		

	},

	computed:{
		completed: function(){
				
			return this.tasks.filter(function(task){
				return task.completed;

			}).length;
		},

		incompleted: function(){
			return this.tasks.filter(function(task){
				return ! task.completed;

			}).length;
			
		}
	},

});

Vue.component('task',{
	props:['task'],
	template: `<li :class="Classes ">
		<div class="view"> 
			<input class="toggle" type="checkbox" v-model="task.completed" />
			<label v-text="task.title"></label>
		</div>
			
		</li>`,
		
		computed:{
			Classes: function(){
			return {completed: this.task.completed};
			},
		}
});

/* guardamos la instancia en una variable */
	var app = new Vue({
		el: '#app', //el de elemento y debemos instanciar este elemento con un div
		
	
		
	});
	