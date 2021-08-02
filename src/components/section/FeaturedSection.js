import React from "react";
import { Container, List, Article, ItemContainer, Image, ArticleText, Date, Title, Description } from "./FeaturedSection.styles";
import { SectionTitle } from "./Section";
import { MoreNews } from "../news-list/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FeaturedSection = () => {

  const featuredList = [
    { 
      date: 'jul 1, 2020',
      title: 'Online studio recital, Summer 2020',
      text: 'Our first ever online music recital! Congratulations to everyone who participated.'
    },
    { 
      date: 'sep 29, 2019',
      title: 'Master Class with Maestro Lanzo Luconi'
    },
    { 
      date: 'sep 29, 2019',
      title: 'Studio Recital, Fall 2019',
    },
  ]

  const ListItem = ({ item }) => {
    return (
      <Article>
        <ItemContainer>
          <Image src="" alt="foo" />
          <ArticleText>
            <Date>{item.date}</Date>
            <Title>{item.title}</Title>
            {item.text && <Description>{item.text}</Description>}
          </ArticleText>
        </ItemContainer>
      </Article>
    );
  };

  return (
    <Container>
      <SectionTitle>Featured performances</SectionTitle>
      <List>
        {featuredList.map((item, index) => (
            <ListItem key={index} item={item} />
        ))}
      </List>
      <MoreNews>More videos<FontAwesomeIcon icon={faArrowRight} style={{fontSize: '12px', marginLeft: '8px'}} /></MoreNews>
    </Container>
  );
};

export default FeaturedSection;