 
 new Vue({
      el: "#app",
      data:{
        newTareas: '',
        //tuve que modificar el arreglo a un arreglo de objeto para senalar que seccion voy a modificar
        tareas:[{act:'correr'},{act:'dormir'},{act:'trabajar'}],
        //true desabilita el elemento input y con false lo habilita
        selecionado: ''
      },
      methods:{
        //agregar
        addTarea: function(){
          //console.log(this.newTareas);

        if (this.newTareas.trim() !=='') {
          //console.log(this.newTareas);
          //Si prefieres que las tareas nuevas se muestren al principio de la lista, puedes utilizar unshift() en lugar de push() en el método addTarea.

            //modifique igual el agregar tareas junto con el tipo de arreglo a arregloe de objeto
          this.tareas.push({act: this.newTareas});
          this.newTareas='';
          console.log(this.newTareas); }
        
        },

        //editar
        editTarea: function(item,tarea){
          //var listTareas= this.tareas;
          //var editTarea = item;
          //listTareas[editTarea]='hola';
          act1=this.tareas[item].act= tarea;
          console.clear();
           console.log(JSON.stringify(this.tareas, null, 2));


        },

        //eliminar
        //al meotodo se le hace llegar el valor de la iteracion y lo agregamos como parametro a la funcion
        delTarea: function(item){
          this.tareas.splice(item,1);
          
        },
        onInput: function(item){
        this.selecionado= item;
        },
      }
    })