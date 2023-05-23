//guardamos la instancia en una variable
	var app = new Vue({
		el: '#app', //el de elemento y debemos instanciar este elemento con un div
		data: { ///data es un objeto
			//se agrega una variable vacia porque da error si no se inicializa
			//luego de eso se guarda el nuevo elemento a newtask para introducirlo en tasks			newTask: "",
			newTask: "",
			tasks:[
				{title: "Aprender Laravel",completed:true},
				{title: "Aprender VueJS", completed:true},
				{title: "Aprender mysql",completed:false}
				]
		},
		methods: {
			addTask: function(){
				if (this.newTask.length <=1) return alert("la tareas esta vacia");
				this.tasks.push({
					title:this.newTask,
					completed:false
				});
				this.newTask = "";
			},
			completeTask: function(task){
				task.completed = ! task.completed;
			},

			taskClasses: function(task){
				return ['glyphicon', task.completed ? 'glyphicon-check' : 'glyphicon-unchecked'];
			}

	},

	computed: {
		completedTasks: function(){
				
			return this.tasks.filter(function(task){
				return task.completed;

			}).length;
		},
		incompletedTasks: function(){
			return this.tasks.filter(function(task){
				return ! task.completed;

			}).length;
			
		}
	}
		
	});
	