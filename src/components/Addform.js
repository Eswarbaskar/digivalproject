import React,{useContext} from 'react'
import { useFormik } from 'formik';

import { useNavigate } from 'react-router-dom';
import UserContext from '../Usercontext';




function Addform(props) {
    const navigate = useNavigate()
    const data = useContext(UserContext)
    const formik = useFormik({
        initialValues: {
            topic: '',
            qustion: '',
            answer: '',
        },
       
        onSubmit:async (values) => {
          data.setUser([...data.user,values])
          navigate('/')
        
        },
    })
    return (
        <div className='mt-5'>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label for="topic" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="topic"
                    name='topic'
                    onChange={formik.handleChange}
                    value={formik.values.topic}
                    />
                </div>
                <div className="mb-3">
                    <label for="Qustion" className="form-label">Qustion</label>
                    <input type="text" className="form-control" id="qustion"
                    name='qustion'
                    onChange={formik.handleChange}
                    value={formik.values.qustion}
                    />
                </div>
                <div className="mb-3">
                    <label for="Answer" className="form-label">Answer</label>
                    <input type="text" className="form-control" id="answer"
                    name='answer'
                    onChange={formik.handleChange}
                    value={formik.values.answer}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Addform