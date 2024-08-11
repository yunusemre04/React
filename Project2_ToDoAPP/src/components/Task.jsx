import React from 'react'
import { SiTicktick } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

function Task({ tasks = [], deleteTask, updateTask, value, finishedTask, unFinishedTask }) {


    return (
        <div className='' >
            {
                tasks.map((task) => (
                    <div className="text-light d-flex my-1 bg-dark text-light" key={task.id}  >
                        <div className="col-1 status">
                            {task.status === "finished" ? <SiTicktick style={{ fontSize: '20px' }} /> : <RiErrorWarningFill style={{ fontSize: '20px' }} />}
                        </div>
                        <div className="col tasks ms-1">
                            {task.task}
                        </div>
                        <div className='d-flex tasks col-md-2 ms-1 text-center justify-content-center'>
                            <i className="" onClick={() => deleteTask(task.id)}>
                                <MdDelete className='deleteBtn icons' />
                            </i>
                            <i className="">
                                <MdOutlineUpdate className='updateBtn icons' onClick={() => updateTask(task.id, value)} />
                            </i>
                            <i className="">
                                <TiTick className='icons compeletedBtn ' onClick={() => { finishedTask(task.id) }} />
                            </i>
                            <i className="">
                                <MdCancel className='icons cancelBtn' onClick={() => { unFinishedTask(task.id) }} />
                            </i>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Task;
