import React, { useEffect, useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Comment } from 'semantic-ui-react'
import './style.css'
import {useParams, withRouter} from "react-router"
import { Comments } from '../Comment/Comments'
import {useSelector, useDispatch} from 'react-redux'
import { detailsPhd } from '../../actions/phdActions'

const  Info=(props)=>{
    //useEffect => lay data cua teacher( name palce workd degree , COMMENTLIST)
    //const [Name, setName] = useState(initialState)
    //const {userId}=useParams()
    //console.log("userId: ",userId);
    //console.log(props.location.userId);
    //console.log(`api/teacher/${props.location.userId}`);
    

    const [phd, setPhd] = useState([])
    const phdDetails =  useSelector(state => state.phdDetails);
    const dispatch = useDispatch();

    const fetchData= async()=> {
        const ret=await dispatch(detailsPhd(props.match.params.id));
        if(ret.status){
            setPhd(ret.data)

        }
    }
    
    useEffect(()=>{
        fetchData()
        return()=>{
            
        }
    },[])

    console.log(phd);
    
    return(
            <div className="info">
                <div className ="info-form">
                    <ul className ="info-list">
                        <li>
                            <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXx8PCqqqmnp6bPz8708/Otrazu7e3b2trr6uqkpKPV1NTi4eG1tLSxsLDl5OS9vLzCwsHIx8e+vr3MzMvZ19gaUtbVAAAFMElEQVR4nO2d27qbIBBGRUfxfEjy/s9aiLutuzZR4TcM7lmXucr6gBkYEJJEEARBEARBEARBEARBEARBEARBEOKD/hL6r+AxUmWj6zqz1LVuyktpGhl9H9ouVyq1KJV37XDXF5GkpKyH2esb9qehLpPYJSnRU/ev3MKym3TUjqZ3DvlLv1kyH3S8nbVo2uq939Oxapsi9F91gvpp0+43Ux9hM5J+Pf7W7djp2BSpHPf7PR3HMipH6ttjgkaxjamnUnNY0Co20ShSrY4LGkVVR6JI2kFvJo54Y4Kos2EUIZWa3FnQTMkjGIvlgTS4Ju3K0AKbHMyDK8UxtMAWdz9Bo3gPrfAWv0E4w3sokkOmXzViy9iQMn9Bo5jxVezdM+GSrg8t8hJIE9pGDC3yit4/zMzkTBuRvDPFb9I7z5FIqCY0jcjSkB6oJjSN+OCoSDeg4Y2jIShVzHBMGGZhj4Tjcn/CdVLTTafQOmvKASio1MBvndhDBZViNxBJIzup6absKjaYZcXCkN0CA5kNn4bsMiK1UEGl2K2DCZnvLR07Q7CgUuwMscPQDER2hhXYsBLDT/MDDK8/Dq9vCBZkmC1wZagZdsWoHzBrwy6AzRKYneH11xbQMo0t1LAzvP4K+PJVjKQHG7KrROG21mYYbrCV2ITY8quXFtB0kd4YHoy+fFUfmy74JQubLpChJueXLH7A/mFSIINpyzDQJOR5KnFJOjLspAnVQEOOW8Am5+PKbRW/fG+5/Hka4EDkOQyRCyiGS6eZEpUR2R5nL0DdNB05ZkML7NAQz1xhuf4Z4WSAnPMeQmu8BjOtYTqhmcHszzAWhCR9run+iwbQhE1oibf4p0S+yXAGkBI5xxmLd9mUYaH0O74Jg3Wq+MJvlZiH/vvb+NVNOdZJV3iNRPaj8IlPOK1D//ldeBROWZZJ11DjOhJT1p8ALyDHRVTK7oTJSxy/6M55z0i/kTkZsv049j+UDv00Zfgh0GuoOV7hr2IJMzPHZzZRzGaWHD24wPJownsOVhY5VxBfQMcKGnENwhk6kjJiG4Rf7D5hw/H0zD72nhtmXOTe4PKGu9fCcax7/0OzN2F0EU25l9Bjp6BSLK/B2MHlY+mBWU2EM5rk2OQ7umn3k2K3nyW6ebcRPLQITof4FO+HmlAp3pcJrnHYZYtgS2ZJ5lDFiKkQVey/q3zJFMtYJOe9mTaKO72pzJxugrakKovAUXudi0oHHVrgPdSPG689bCrmI9+72aloxh2vPWw6VmNTcJSkQo/OA/AfRzVqdo5E2dZrJIcc8yHj9HKJ7Z6g5ltIKjadlfr6tnoJCOKY3urwUYeonzp4+/1xVN3Uh+ytVPR1B4iebyWrru4D9VYbPIHB5Y1kHiS0UnJvP+I3O7b3zz58ZYPnKcHljWT6wdBKxePTfl+Oj484Eun2tOC54aja818wM+3n9UKHt2R3djtq8DU0Do63E9dXlHwmPWwo5uNZcbWoGfhZ0rw+o6JD5RjabMEJr7RRD/lqC0U6oOfkjg+NnQf8CbP9m52f4wH0w97qgQJ4O4jHU3HnAlMsObagJUed4QBe6YEF9YQZ9lkHLJDvM8CXeGFBnDVCXsqCB/GpG/zqVSyAW1AczqR/ksr7wBj61k40/reAQu+3OgPvj8Ggd5Sdge+BMZ4z0iW+s1PwK05n4Jkv0Jfn4vE99CeG4RFDMRTD8IihGP4AQ66FxL/4lhQpUylnAN9mks44gygKE2/8BQVBEARBEARBEARBEARBEARBEARhJ78AIwhTb1cHN38AAAAASUVORK5CYII=' />
                        </li>
                        <li>
                            Name:{phd.name}
                        </li>
                        <li>
                            Age:{phd.age}
                        </li>
                        <li>
                            Gender:{phd.gender}
                        </li>
                        <li>
                            School:{phd.school}
                        </li>
                        <li>
                            Department:{phd.falcuty}
                        </li>
                        <li>
                            Rating:{phd.rank}
                        </li>
                    </ul>
                </div>
                <Comments className="comment-box" phdId={props.match.params.id}/>
            </div>
    )
}

export default Info