async function display_photos(){
    let response= await fetch("https://jsonplaceholder.typicode.com/photos");
    response= await response.json();

    let data=response.slice(0,50);
    console.log(response);

     let tableData="";
     data.forEach(stats);
    function stats(values){
        tableData+= `<div>
        <span class=" my-4 mx-4">
        <img src=" ${values.thumbnailUrl}">
        </span>
        <br>
        <span>${values.id}</span>
        </div>`;
       
    }
    document.getElementById("table_body").innerHTML=tableData;
    return data;
}
display_photos();