async function display_users(){
    let response= await fetch("https://jsonplaceholder.typicode.com/users");
    response= await response.json();
    console.log(response);

    let tableData="";
    response.forEach(stats);
    function stats(values){
        tableData+= `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td><button type="button" class="btn btn-info"><a style="text-decoration:none; color:white;" href="todofinal.html" target="_blank" >Todo</a></button></td>
        <td><button type="button" class="btn btn-success"><a style="text-decoration:none; color:white;" href="album.html"  target="_blank"  onclick="display_album_list()">Album</a></button></td>
     </tr>`;

    }
    document.getElementById("table_body").innerHTML=tableData;
    return response;
}
display_users();

