//  fetching the data
const container = document.querySelector(".container");
async function getdata(){
    let data = await fetch('https://fakestoreapi.com/products/');
    let newdata = await data.json();
    console.log(newdata[0].title);
    
    
    newdata.map((info, ind) => {
    const card = document.createElement("div");
    card.className = 'card';

    const title = document.createElement("h3");
        title.innerText = newdata[ind].title;
        title.className = 'title';

        const img = document.createElement("img");
        img.src = newdata[ind].image;
        img.className = 'img';

        const description = document.createElement("p");
        description.innerHTML = `<b>Description: </b>${newdata[ind].description}`;
        description.className = 'description';

        const price = document.createElement("p");
        price.innerHTML = `<b>Price: </b>${newdata[ind].price}$`;
        price.className = 'price';

        const rating = document.createElement("p");
        rating.innerHTML = `<b>Rating: </b>${newdata[ind].rating.rate}`;
        rating.className = 'rating';

        container.append(card);
        card.append(title,img,description,price,rating);


    })
}
getdata();
