"use client"
import {useContext} from 'react'

const Header = (props) => {
    return (
        <div className="flex py-2 px-2 navbar-div">
            <div className="col-2 columns-sm-12">
                MyTourDiary 
            </div>
            <div className="col-10 columns-sm-12 text-right">
                {/* {props.value.token.username} */}
            </div>
        </div>
    )
} 

export default Header