import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import {searchUsers} from '../../context/github/GithubActions'


function UserSearch() {

  const [text, setText] = useState('')
  const {users, dispatch} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(text === ''){

      setAlert('Please enter something..','error')
    }else{

      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type:'GET_USERS', payload: users})
      
      setText('')
    }
  }

  
  return (
    <div 
      className="grid grid-cols-1xl:grid-cols-2lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      
      <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input 
                  type="text"
                  className='w-full bg-gray-200 pr-40 input input-lg text-black'
                  placeholder='Search'
                  value={text}
                  onChange={handleChange}
                />
                <button 
                  type='submit'
                  className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36">
                  GO
                </button>
              </div>
            </div>
          </form>
      </div>
      
      {users.length > 0 && (
        <div>
          <button 
            onClick={() => {dispatch({type:'CLEAR_USERS'})}}
            className="btn btn-ghost btn-lg">
            CLEAR
          </button>
        </div>
      )}
      
    </div>
  )
}

export default UserSearch
