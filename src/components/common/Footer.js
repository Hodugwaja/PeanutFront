import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const footPeanut = styled.footer`
    background-color : ${palette.gray[8]};
    color : white;
`;
const Footer = () => {
    return(
        <footPeanut className = "wrapper style1 align-center">
            <div className = "inner">
                <p>TEAM 땅콩</p>
                <p>(디코 프사 넣고 공식 커뮤 링크 하이퍼링크 다셈)</p>
                <p>(이용약관) (개인정보취급방침)</p>
                <p>Copyright 2020 TEAM 땅콩, All rights reserved.</p>
            </div>
        </footPeanut>
    )
}
export default Footer;