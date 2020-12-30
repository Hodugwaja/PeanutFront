import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette'
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
    margin-top : 4rem;
`;

const PostHead = styled.div`
    boder-bottom : 1px solid ${palette.gray[2]};
    padding-bottom : 3rem;
    margin-bottom : 3rem;
    h1{
        font-size : 3rem;
        line-height : 1.5;
        margin : 0;
    }
`;


const subInfo = styled.div`
    margin-top : 1rem;
    color : ${palette.gray[6]};

    span + span:before{
        color : ${palette.gray[5]};
        padding-left : 0.25rem;
        padding-right : 0.25rem;
        content : '\\B7';
    }
`;

const Tags = styled.div`
    margin-top : 0.5rem;
    .tag{
        display : inline-block;
        color : ${palette.cyan[7]};
        text-decoration : none;
        margin-right : 0.5rem;

        &:hover{
            color : ${palette.cyan[6]};
        }
    }
`;

const PostContent = styled.div`
    font-size : 1.3125rem;
    color : ${palette.gray[8]};
`;

const PostViewer = ({post, error, loading}) => {
    if(error){
        if(error.response && error.response.state === 404){
            return <PostViewerBlock>존재하지 않은 포스트 입니다</PostViewerBlock>
        }
        return <PostViewerBlock>ㅅㅂ 일단은 오류발생함</PostViewerBlock>
    }
    if(loading || !post){
        return null;
    }
    const {title, body, user, publishedDate, tags} = post;
    return(
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <subInfo>
                    <span><b>HoduGwaja</b></span>
                    <span>{new Date().toLocaleDateString()}</span>
                </subInfo>
                <Tags>
                    {tags.map(tag => (
                        <div className = "tag">#    {tag}</div>
                    ))}
                </Tags>
            </PostHead>
            <PostContent
                dangerouslySetInnerHTML = {{__html : body}}
            ></PostContent>
        </PostViewerBlock>
    )
    

}

export default PostViewer;