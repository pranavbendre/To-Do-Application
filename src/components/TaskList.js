import React, { useState } from 'react';
                                            // Props.
export default function TaskList({tasks, btnEdit, onUpdate, onDelete}) {

  // State Management.
    const [updatedTask, setUpdatedTask] = useState(tasks); // Use Hooks.
    const [isEditing, setIsEditing] = useState(false); // Validation.


    // Functions.
    const handleUpdate = (e) => {
      e.preventDefault();
      onUpdate(updatedTask);
      setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(tasks.id);
    };



  return (
                                    //JSX & Inline-CSS.
    <>

       {isEditing && <div className="modal fade"  data-bs-backdrop="static" id='staticBackdrop' data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Edit Task</h1>
                </div>
                <div className="modal-body">
                <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label for="recipient-title" className="col-form-label">Title:</label>
                  <input type="text" className="form-control"  value={updatedTask.title} onChange={(e)=>setUpdatedTask({...updatedTask, title:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label for="recipient-task" className="col-form-label">Task:</label>
                  <input type="text" className="form-control"  value={updatedTask.task} onChange={(e)=>setUpdatedTask({...updatedTask, task:e.target.value})}/>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setIsEditing(false)}>Cancel</button>
                </div>
              </form>
                </div>
              </div>
            </div>
            </div>} 
            
            <div className="card border-dark">
              <div className="card-header" style={{background: "#284762", color: "white"}}><b>{tasks.title}</b></div>
              <div className="card-body" style={{background: "#f0f8ffb3"}}>
                <blockquote className="blockquote mb-0">
                  <p>{tasks.task}</p>
                </blockquote>

                <div className="card-footer text-body-secondary" style={{position: "relative", top: "15px"}}>
                <div className="container" style={{position: "relative", left: "99px", top: "2px"}}>
                {btnEdit &&<><i className="fa-solid fa-pen-to-square" data-bs-toggle={`${isEditing && "modal"}`} onClick={()=>setIsEditing(true)} data-bs-target={`${isEditing && "#staticBackdrop"}`} style={{cursor: "pointer", marginRight: "23px"}} ></i>
                <i className="fa-regular fa-trash-can" style={{cursor: "pointer"}} onClick={handleDelete}></i></>}
                </div>

                </div>


              </div>
            </div>
        
    </>

  )
}



