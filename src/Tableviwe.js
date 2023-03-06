import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from './Usercontext'

function Tableviwe(props) {
    const data = useContext(UserContext)
    return (
        <div>
            <div className='text-end m-3'>
                <Link to={'/add'} className="btn btn-success" type="submit">ADDQUSI</Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">QuizList</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>react.js</td>
                        <td>
                            <button className='btn btn-success m-1'>EDIT</button>
                            <button className='btn btn-danger'>DELETE</button>
                        </td>

                    </tr>
                    {
                        data.user.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <th>{1 + i}</th>
                                    <td>{item.topic}</td>
                                    <td>
                                        <button className='btn btn-success m-1'>EDIT</button>
                                        <button className='btn btn-danger'>DELETE</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tableviwe