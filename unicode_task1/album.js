function getuser() {
    var useid = localStorage.getItem("userid");
    console.log(useid);
    let dis="";
    dis=`<h4> Welcome User ${useid}</h4>`;
    document.getElementById("welcome").innerHTML=dis;
    fetch(`https://jsonplaceholder.typicode.com/users/${useid}/albums`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        console.log(objectdata1[0].title);
        let todo="";
        objectdata1.map((values1)=>{
             var Userid=values1.albumId;
             todo +=`<tr id="todoitem">           
                <td>${values1.id}</td>
                <td>${values1.title}</td>
                <td ><button type="button" class="btn btn-warning"><a href="photos.html" style="text-decoration:none; color:white;" onClick="getUserId(${Userid})">View Photos</a></button></td>
                
                
                    
          </tr>`
        })
        document.getElementById("tododata").innerHTML=todo;
    })
}

function getUserPhotoId(id)
{
  console.log(id);
  localStorage.setItem("useridphoto", id);
}
