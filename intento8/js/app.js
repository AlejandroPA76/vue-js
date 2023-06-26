 new Vue({
      el: '#app',
      data() {
        return {
          items: [] // Aquí almacenaremos los datos de la API
        };
      },
      mounted() {
        this.fetchData();
      },
      methods: {
        fetchData() {
          fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(data => {
              this.items = data; // Asignamos los datos a la variable 'items'
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    });