// 3:37:08
import React from 'react';
import styled from "styled-components";
import Title from '../../Components/Title';
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';
import blogs from '../../data/blogs';
import BlogItem from '../../Components/BlogItem';

const BlogsStyled = styled(PagesLayout)`
    background-color: ${(props) => props.theme.colorBg5};
    padding-bottom: 360px;
     .blogs-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3.5rem;
     }
`;

function Blogs() {
  const theme = useTheme()

  return (
    <BlogsStyled theme={theme}>
       <div className="center-title">
            <Title 
                name={'Latest News'}
                desc={`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos`}
            />
       </div>
       <div className="blogs-con">
        {
            blogs.map((blog) => {
                return <BlogItem {...blog} />
            })
        }
       </div>
    </BlogsStyled>
  )
}

export default Blogs;
