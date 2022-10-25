function getuser() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((data)=>{
    console.log(data)
    return data.json();
  })
  .then((objectData)=>{
    console.log(objectData[0].name);
    
    let tabledata="";
    objectData.map((values)=>{ 

     var Userid=values.id
      tabledata+=` <tr>
      <td id="ids">${values.id}</td>
      <td >${values.name}</td>
      <td ><button type="button" class="btn btn-info"><a href="usertodo.html" style="text-decoration:none;  color:white;" onClick="getUserId(${Userid})">todo</a></button></td>
      <td><button type="button" class="btn btn-success"><a style="text-decoration:none; color:white;" href="album.html"  onClick="getUserId(${Userid})">Album</a></button></td>
      
    </tr>`
 
    
    })
    document.getElementById("tablebody").innerHTML=tabledata;
  })
}
 

  function test() {
    console.log("clicked")
    
  }
  function getUserId(id)
    {
      console.log("hey")
      console.log(id);
      localStorage.setItem("userid", id);
      
    }

console.log(localStorage)

