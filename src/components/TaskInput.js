import React, { useState } from 'react';

export default function TaskInput({tasks, onSubmit}) {

  // State Management.
  const [title, setTitle] = useState(""); // Use Hooks.
  const [task, setTask] = useState("");
  const [isAdding, setIsAdding] = useState(false); // Validation
  const [successForm, setSuccessForm] = useState(false); // Validation.

  // Functions.
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({id: Date.now(), title, task});
    setTitle("");
    setTask("");
    setIsAdding(false);
    setSuccessForm(true);

      setTimeout(() => {
        setSuccessForm(false);
      }, 3000);
  };

  return (
                                        // JSX & Inline-CSS.
    <>

        {isAdding && <div className="modal fade"  data-bs-backdrop="static" id='staticBackdrop' data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Add Task</h1>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="recipient-firstname" className="col-form-label">Title:</label>
                  <input type="text" className="form-control"  value={title} onChange={(e)=>setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label for="recipient-lastname" className="col-form-label">Task:</label>
                  <input type="text" className="form-control"  value={task} onChange={(e)=>setTask(e.target.value)} required/>
                </div>
               
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setIsAdding(false)}>Cancel</button>
                </div>
              </form>
                </div>
              </div>
            </div>
            </div>}


            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
              <symbol id="check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </symbol>
            </svg>
            
            <div className="container alert-successs">
            <div className={`alert alert-success d-flex align-items-center ${successForm?'alert-shown':'alert-hidden'}`} role="alert" style={{height: "56px", width: "237%"}}>
              <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:" style={{width: "6%"}}><use href="#check-circle-fill"/></svg>
              <div>
                Task Created.
              </div>
            </div>
            </div>



            <h2 className='dash-heading text-center'>Tasks</h2>
            <hr style={{position: "relative", top: "21px", margin: "0px 555px", left: "1px"}} />

            <button type="button" className="btn btn-dark" data-bs-toggle={`${isAdding && "modal"}`} onClick={()=>setIsAdding(true)} data-bs-target={`${isAdding && "#staticBackdrop"}`} style={{cursor: "pointer", borderRadius: "25px", position: "absolute", right: "50px", top: "20px"}}>Add Task <strong>+</strong></button>

            {tasks.length===0 && <div className="container">
            <i className="fa-regular fa-face-frown" style={{color: "#878787", position: "absolute", left: "620px", top: "206px", fontSize: "59px"}}></i>
            <p className="text-center" style={{position: "relative",top: "234px",fontSize: "24px",color: "grey",marginLeft: "28px"}}>No Task Yet!</p>
            <p className="text-center" style={{position: "relative",top: "229px",fontSize: "15px",color: "grey",marginLeft: "28px"}}>Create a task, click on "Add Task +" button</p>
            </div>}
       
    </>
  )
}