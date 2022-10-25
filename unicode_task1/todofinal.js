function getuser(){
    var useid = localStorage.getItem("userid");
    console.log(useid);
    let dis="";
    dis=`<h4> Welcome User ${useid}</h4>`;
    document.getElementById("welcom").innerHTML=dis;
    fetch(`https://jsonplaceholder.typicode.com/users/${useid}/todos`)
    .then((data1)=>{
        console.log(data1)
        return data1.json();
      })
    .then((objectdata1)=>{
        let todo="";
        objectdata1.map((values1)=>{
            todo+=`<tr id="todoitem">
            <th scope="row">${values1.id}</th>
            <td id="tabletitle">${values1.title}</td>
            <td>${values1.completed}</td>           
            <td>
              <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#example1Modal">
              Edit
              </button>
              <!-- Modal -->
              <div class="modal fade" id="example1Modal" tabindex="-1" aria-labelledby="example1ModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="example1ModalLabel">Edit your title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <input id="edittaskinput" class="form-control" type="text" placeholder="Enter title here.." aria-label="default input example">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="editbtn" onclick="edit()">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <button id="todo" type="button"  class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#example2Modal">
                Delete
              </button>
              <!-- Modal -->
                <div class="modal fade" id="example2Modal" tabindex="-1" aria-labelledby="example2ModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="example2ModalLabel">Delete:</h1>
                        <button  type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        Are you sure you want to delete your Title?
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" method="DELETE" class="btn btn-primary" onClick="remove()" data-bs-dismiss="modal">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
             </td>
            
          </tr>`
        })
        document.getElementById("tododata").innerHTML=todo;
    })
}
function remove(){
  var elem= document.getElementById('todoitem');
  elem.parentNode.removeChild(elem);
  return false;
}

function edit(){
  var tit =document.getElementById("edittaskinput").value;
  console.log(tit);
  var showtitle=document.getElementById("tabletitle");
  showtitle.innerHTML=tit;
}
