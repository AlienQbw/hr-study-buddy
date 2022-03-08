import axios from 'axios';
import { Button } from 'components/atoms/Button/Button';
import React, { useState, useEffect } from 'react';
import { TitleWrapper, ArticleWrapper, NewsSectionHeader, Wrapper, ContentWrapper } from './NewsSection.styles';

//mock data
const data = [
  {
    title: 'New computers at school1',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repudiandae, ratione ipsa tempora fugit laudantium praesentium odit recusandae voluptates omnis molestiae nesciunt, sint magnam vitae aliquam, fuga saepe. Qui eos mollitia cumque sequi sed consequatur accusamus esse, numquam velit id eum omnis asperiores, labore animi, expedita quidem obcaecati nostrum debitis!',
    image: null,
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repudiandae, ratione ipsa tempora fugit laudantium praesentium odit recusandae voluptates omnis molestiae nesciunt, sint magnam vitae aliquam, fuga saepe. Qui eos mollitia cumque sequi sed consequatur accusamus esse, numquam velit id eum omnis asperiores, labore animi, expedita quidem obcaecati nostrum debitis!',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repudiandae, ratione ipsa tempora fugit laudantium praesentium odit recusandae voluptates omnis molestiae nesciunt, sint magnam vitae aliquam, fuga saepe. Qui eos mollitia cumque sequi sed consequatur accusamus esse, numquam velit id eum omnis asperiores, labore animi, expedita quidem obcaecati nostrum debitis!',
    image: null,
  },
];

const URL = 'https://graphql.datocms.com/';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        URL,
        {
          query: `
                {
                allArticles {
                    id
                    title
                    category
                    content
                    image{
                    url
                    }
                }
                }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => {
          return (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
              </ContentWrapper>
              {image ? <img src={image.url} alt="article" /> : null}
              <Button isBig>click me</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <NewsSectionHeader>Loading...</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
