import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const ManageHeader = ({children}) => {
    const [showHeader,setShowHeader] = useState(true)
    const location = useLocation();
    console.log(location);
    useEffect(()=>{
        if(location.pathname === '/auth/login' || location.pathname === '/auth/sign-in-admin'){
            setShowHeader(false)
        }else{
            setShowHeader(true);
        }
    },[location])
  return (
    <div>{showHeader && children}</div>
  )
}

export default ManageHeader