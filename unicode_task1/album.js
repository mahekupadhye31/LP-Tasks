 for(let i=0;i<50;i++){

    async function display_album_list(){
    let response= await fetch("https://jsonplaceholder.typicode.com/photos");
    response= await response.json();

    let data=response.slice(0,i);
    console.log(response);

    let tableData="";
    data.forEach(stats);
    function stats(values){
        tableData+= `<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><button type="button" class="btn btn-warning"><a style="text-decoration:none;" href="photos.html" target="_blank"> View Photos</a></button></td>
        </tr>`;

    }
    document.getElementById("table_body").innerHTML=tableData;
    return data;
}
display_album_list();
}
