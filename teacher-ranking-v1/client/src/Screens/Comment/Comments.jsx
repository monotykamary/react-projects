import React , { useEffect, useState }from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Comment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { listCmts } from '../../actions/messActions';



const Comments = (props) =>{
    const cmtList =  useSelector(state => state.cmtList);
    const cmt = cmtList;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listCmts(props.phdId));
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
                
                <Comment>
                <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{cmtList.messages}</Comment.Text>
                    <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                </Comment>

                <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={addCommentHandler}/>
                </Form>
            </Comment.Group>
            </div>
    )
}

export {Comments}