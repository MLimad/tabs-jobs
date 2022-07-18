import { getByTitle } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import './App.css';
import jobs from "./jobs"

function App() {

  const [data,setData] = useState(jobs)
  const [value,setValue] = useState(0)

  const {title,company,date,tasks} = data[value]


  return (

    <div className="container">

    
       <div className="title">
          <h1>My Experience</h1>
       </div>

       <main className='row mt-5 mx-auto'>
          <div className="col-md-3">
            <div className="companies-name">
                <div className="list-group">
                  {
                    data.map((item,index) =>(
                      <button 
                      key={item.id}
                      onClick={()=>setValue(index)} 
                      type="button" 
                      className={`list-group-item list-group-item-action ${index === value && "active"} ` }>
                        {item.company}
                      </button>
                    ))
                  }
                </div>
            </div>
          </div>
          <div className="col-md-8">
              <section className='info-job'>
                    <h2 className='title-job fs-3'>{title}</h2>
                    <span className="badge badge-pill bg-primary">{company}</span>
                    <p className='date-job'>{date}</p>
                    <ul className='tasks-job' >
                       {
                        tasks.map((task,index)=>(
                          <li key={index}>{task}</li>
                        ))
                       }
                    </ul>
              </section>
          </div>
       </main>

      
    </div>
  )

  
}

export default App;
