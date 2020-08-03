import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { listPhd } from '../../actions/phdActions';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import Chart from '../Chart/Chart'
import Axios from 'axios';


export default function Ranking (){

    const [PhdList, setPhdList] = useState([])
    const dispatch = useDispatch();

    const fetchData=async ()=>{
        const ret= await dispatch(listPhd());
        if(ret){
            setPhdList(ret.data)
        }
    }

    useEffect(()=> {
        fetchData()
        console.log(PhdList)
    },[]);

    return(
        <div className = "background">
            <table id='phds'>
               <tbody id="body">
                    <tr id ="titles"> 
                        <th className="rank">Rank</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>School</th>
                        <th className="country">Falcuty</th></tr>
                   {PhdList.map(phd=>(
                       <tr className ="content" key={phd._id}>
                           <td>{phd.rank}</td>
                           <Link to={{pathname: `/professors/${phd._id}`,userId: '123456'}} style={{ textDecoration: 'none' }}><td>{phd.name} <Chart data={phd.rating}/></td></Link>
                           <td>{phd.age}</td>
                           <td>{phd.gender}</td>
                           <td>{phd.school}</td>
                           <td>{phd.falcuty}</td>
                        </tr>
                   ))}
               </tbody>
            </table>
         </div>
    )
}