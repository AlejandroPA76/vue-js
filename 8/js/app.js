Vue.component('tasks', {
	template: `
	<div>
	<h2>Lista de Tareas</h2>
	<h4 v-if="completed">Tareas completas: {{ completed}}</h4>
	<h4 v-if="incompleted">Tareas incompletas: {{ incompleted}}</h4>

	<ul>
		<li is="task" v-for="task in tasks" :task="task"></li>
		
		<li class="form-inline">	
			<input v-on:keyup.enter="add"  v-model="newTask" type="text" class="form-control">
			<button v-on:click="add" class="btn btn-primary">+</button>
		</li>

	</ul>
	</div>`,
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
	template: `
	<li >
			<span v-text="task.title"></span>
			<span @click="complete()" :class="Classes"></span>
			 
			
		</li>`,
		methods:{
				
			complete: function(){
				this.task.completed = ! this.task.completed;
			}
		},
		computed:{
			Classes: function(){
				console.log('css changed');
				return ['glyphicon', this.task.completed ? 'glyphicon-check' : 'glyphicon-unchecked'];
			},
		}
});

/* guardamos la instancia en una variable */
	var app = new Vue({
		el: '#app', //el de elemento y debemos instanciar este elemento con un div
		
	
		
	});
	