import React,{useContext,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import UserContext from '../Usercontext';


function Editform() {
  let params = useParams()
  const navigate = useNavigate()
  const data = useContext(UserContext)
  const formik = useFormik({
      initialValues: {
          topic: '',
          qustion: '',
          answer: '',
      },
     
      onSubmit:async (values) => {
        data.setUser((state)=>state?.map((item,idx)=>{
          if(parseInt(params.id)===idx){
            return values
            
          }
          return item
        }))
        
        navigate('/')
      
      },
  })
  
  useEffect(() => {

    formik.setValues(data.user[params.id])
  }, [])
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

export default Editform