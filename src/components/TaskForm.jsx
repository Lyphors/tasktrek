import { useState } from "react";
import Tag from "./Tag.jsx";

import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
    tags: []
  })
  const handleChange = e =>{
    const {name, value} = e.target;
    setTaskData ((prev) =>{
      return {...prev, [name]: value}
    })
    //console.log("status", e.target.status);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(taskData);
  }

  const checkTag = (tag) =>{
    return taskData.tags.some((item) => item === tag);
  }
  const selectTag = (tag) =>{
    //console.log(tag);
    if (taskData.tags.some((item) =>item === tag)){
      const filterTags = taskData.tags.filter((item) => item!==tag);
      setTaskData((prev) =>{
        return {...prev, tags: filterTags}
      });
    }else{
      setTaskData((prev) => {
        return {...prev, tags: [...prev.tags, tag]}
      });
    }
  }
  return (
    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" className="task_input"
            placeholder="Enter your task"
            name="task"
            onChange={handleChange}
            
            />

            <div className="task_form_button_line">
              <div>
                <Tag selectTag = {selectTag} tagName = "HTML" selectd= {checkTag("HTML")}/>
                <Tag selectTag = {selectTag} tagName = "CSS" selectd= {checkTag("CSS")}/>
                <Tag selectTag = {selectTag} tagName = "JavaScript" selectd= {checkTag("JavaScript")}/>
                <Tag selectTag = {selectTag} tagName = "React" selectd= {checkTag("React")}/>
                
              </div>
              <div>
                <select className="task_status" name="status" onChange={handleChange} >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
                </select>
                <button type="submit" className="task_submit">+ Add Task</button>

              </div>
              

            </div>

        </form>
      </header>
  )
}

export default TaskForm;
