const btnget=document.getElementById('btn-get');
const cardBox=document.getElementById('data');

btnget.addEventListener('click',()=>{
    cardBox.classList.add("active");
    fetchData();
});

async function fetchData() {
    const name=document.getElementById('name');
    const typePikachu=document.getElementById("type");
    const imgPikachu=document.getElementById("imgnya");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
        method: "GET"
    });

    const json = await response.json();
    let sprite=json.sprites;
    let gambar=sprite["front_default"];
    let typePikachunya=json.types;
    let data = '';
    for ( i = 0; i < typePikachunya.length; i++) {
      data = typePikachunya[i].type.name;
    }
    
    name.innerHTML=json.id+" "+json.name;
    typePikachu.innerHTML="Type : "+ " " + data;
    imgPikachu.setAttribute("src",gambar);
}
