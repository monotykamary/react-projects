import React , { useEffect, useState }from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Comment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { listCmts, DetailsCmts } from '../../actions/messActions';



const Comments = (props) =>{
    ///const cmtList =  useSelector(state => state.cmtList);
    const [cmtList, setCmtList] = useState([])
    //const cmts = cmtList
    const dispatch = useDispatch();

    const fetchData=async ()=>{
        const ret= await dispatch(listCmts(props.phdId));
        if(ret){
            setCmtList(ret.data)
            console.log(ret)
        }
    }

    useEffect(()=>{
        //dispatch(listCmts(props.phdId));
        fetchData()
        return()=>{
        }
    },[])

    const addCommentHandler=()=>{
    
    }
    return(
        <div className="comment-form">
            <Comment.Group>
                <Header as='h3' dividing>
                Comments
                </Header>
            {cmtList.map(cmt=> cmt._id === props.phdId ?(
                <Comment key={props.phdId}>
                <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>{cmt.userId}</Comment.Author>
                    <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{cmt.messages}</Comment.Text>
                    <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                </Comment>  
            ):(console.log("Lam gi do"))
            )}  
                <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={addCommentHandler}/>
                </Form>
            </Comment.Group>
            </div>
    )
}

export {Comments}