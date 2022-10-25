function getuserphoto(){
    let dis="";
    var useid = localStorage.getItem("userid");
    console.log(useid)
    dis+=`<h4>welcome user ${useid}</h4>`
    document.getElementById("dis").innerHTML=dis


    fetch(`https://jsonplaceholder.typicode.com/albums/${useid}/photos`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        let photoss="";
        
        objectdata1.map((values1)=>{
        photoss+=`
        <div class="grid text-center">
                <div class="g-col-4" id="grid">
                    <div class="card" style="width: 18rem;">
                        <img src="${values1.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${values1.id}</h5>
                         
                        </div>
                      </div>
                </div>
        
        `
        })
        document.getElementById("gallerydis").innerHTML=photoss
    })


}
