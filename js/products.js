fetch('products.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }

// fetch("products.json")
// .then(function(response){

//     return response.json();
// }
// )

// .then(function(products){
//     let placeholder = document.querySelector("#data-output")

//     let out ="";

//     for (let product of products){
    
//       out +=  "

//       <tr>
//         <td><img src='${product.image}'> </td>
//         <td>${product.name}</td>
//         <td>${product.name}</td>
//         <td>${product.name}</td>
//       </tr>
//       " ;

    
        
//     }
    
// })