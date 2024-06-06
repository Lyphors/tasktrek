import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete.png";
import "./TaskCard.css"

const TaskCard = () => {
  return (
    <article className="task_card">
        <p className="task_text">Change Delete Icon</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
                <Tag tagName = "HTML"/>
                <Tag tagName = "CSS"/>

            </div>
            <div className="task_delete">
                <img className="delete_icon" src={deleteIcon} alt=""/>

            </div>
        </div>
    </article>
  );
}

export default TaskCard
