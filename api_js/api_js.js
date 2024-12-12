fetch('https://dummyjson.com/products').then(response => response.json()).then(data => {
    data.products.forEach(element => {
        const row = document.querySelector(".row")
        const col = document.createElement("div")
        col.classList.add('col-lg-3')
        col.innerHTML =
            `
        <div class="card" style="width:100%">
        <img class="card-img-top" src="${element.thumbnail}" alt="Card image" style="width:100%">
        <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        <p class="card-text">${element.description}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-id="${element.id}">
        View Product
        </button>
        </div>
        </div>
        <br>
        `
        row.appendChild(col)
    });

    document.querySelectorAll(".btn").forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const pro_id=e.target.getAttribute('data-id')
            const product=data.products.find((pro)=>pro.id==pro_id)
            console.log(product);
            document.getElementById("model_img").src=product.thumbnail
            document.getElementById("title").innerHTML=product.title
            document.getElementById("dis").innerHTML=`
            ${product.description}<br>${product.price}$<br>${product.discountPercentage}%<br>
            stock:${product.stock}
            `
        })
    })

})