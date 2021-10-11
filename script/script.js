let dog = [
    {
        dog_name: "Davie"  ,
        dog_image: "davie.jpg",
        dog_price: "Price: $300"
    },
    {
        dog_name: "Julio"  ,
        dog_image: "julio.jpg",
        dog_price: "Price: $350"
    },
    {
        dog_name: "Tay"  ,
        dog_image: "tay.jpg",
        dog_price: "Price: $320"
    },
    {
        dog_name: "Angelo"  ,
        dog_image: "angelo.jpg",
        dog_price: "Price: $420"
    },
    {
        dog_name: "Flouffy"  ,
        dog_image: "flouffy.jpg",
        dog_price: "Price: $380"
    },
    {
        dog_name: "Roger"  ,
        dog_image: "child.jpg",
        dog_price: "Price: $520"
    },
    {
        dog_name: "Jackie"  ,
        dog_image: "jackie.jpg",
        dog_price: "Price: $300"
    },
    {
        dog_name: "Kabo"  ,
        dog_image: "kabo.jpg",
        dog_price: "Price: $320"
    },
    {
        dog_name: "Oscar"  ,
        dog_image: "oscar.jpg",
        dog_price: "Price: $400"
    },
    {
        dog_name: "Victor"  ,
        dog_image: "victor.jpg",
        dog_price: "Price: $500"
    },
    {
        dog_name: "Lucie"  ,
        dog_image: "lucie.jpg",
        dog_price: "Price: $450"
    },
    {
        dog_name: "Karsten"  ,
        dog_image: "karsten.jpg",
        dog_price: "Price: $550"
    }
]
console.log ('Our Collections', dog.length)


// dog.forEach(element=> {
//     console.log(element)
// });

let divGallery = document.getElementById ('dog-zone');
let html= "";
 dog.forEach(e=> {
    html += `
    <div class="p-4 div-img border m-4 col-3">
        <img src="images/${e.dog_image}" alt="caleb" class="img-fluid">
        <h3>${e.dog_name}</h3>
        <button class="p-2 bg-danger border-danger rounded"><a href="#" class="text-decoration-none text-white">${e.dog_price}</a></button>
    </div>
    `
    console.log (e)
    divGallery.innerHTML = html
 })

 