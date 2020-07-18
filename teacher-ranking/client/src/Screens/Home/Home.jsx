import React, {useState, useEffect} from 'react';
import { listPhd } from '../../actions/phdActions';
import { useSelector, useDispatch } from 'react-redux';
import "./style.css";
import Person from '../Person/Person';
import Ranking from '../Ranking/Ranking';


function Home() {
    const phdList = useSelector(state => state.phd);
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
        return ()=>{
             
        }
    },[]); //componentDidmount

  return (
    <div className="Home">   
        <div className ="box">
            <ul>
                <li>
                    <Person/>
                </li>
                <li>
                    <Ranking/>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Home;
