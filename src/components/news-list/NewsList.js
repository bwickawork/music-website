import React from "react";
import { Container, List, ListText, ListDate, Divider, MoreNews } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { SectionTitle } from "../section/Section";
import { useHistory, useParams } from 'react-router-dom';
import { NewsLink } from "../text/Text";
import { MdOutlineChevronRight } from 'react-icons/md';

const NewsList = ({ children, hideTitle, hideMore, itemLimit }) => {

  const history = useHistory();

  const navigateToMoreNews = () => history.push('/news');
  //const navigateToArticle = (index) => history.push('/news/' + index);

  const newsItems = [
    { date: 'Summer 2022', text: 'Congratulations to our 2 graduating Seniors, Emanuel Diaz and Karina Duvvuri!', page: 'news/seniors', linkText: 'Learn more 🎓 ' },
    { date: 'May 15, 2022', text: 'Studio recital on May 15, 2022 @ Mueseum of Making Music.', page: 'videos/recital22', linkText: 'Watch now 🎥' },
    { date: 'Winter 2021', text: 'Annual end of year Concert & Awards.', page: 'news/awards', linkText: 'View awards 🏆' },
    { date: 'May 2021', text: 'Studio recital, May 2021.', page: 'videos/recital21', linkText: 'Watch now 🎥' },
    { date: 'Spring 2021', text: 'Spring Festival - 18 students participated in the online pre-recorded Spring Festival event. We had 2 students chosen as the evaluators\' favorites!' },
    { date: '2020-2021', text: 'Studio student of the year - Tan Vu. Congratulations!' },
    { date: '', text: 'Scholarship winners - Emmanuel Diaz, Christopher Hong, Tan Vu' },
    { date: '', text: 'District 1 State honors competition winners (2021) - Christopher Hong, Emmanuel Diaz.', articleIndex: '' },
    { date: '', text: 'CM: State Honors - We had 13 stuents receive State Honors! 14 students participated in this Exam and with all great results! Congratulations Luke Billing - 100% theory exam!' },
    { date: '', text: 'RCM Honors & Honors with Distincionts: 14 students participated in the Fall, Winter, and Spring sessions. Honors with Distinction: Rebecca Chen, Caleb So, Chris Chen.' },
    { date: 'nov 3, 2020', text: 'Piano auditions winners: Christian Guimet, Mia Yi, Garland Tague, Gavin Li, Nicoli Nugyen, Tan Vu. Congratulations!' },
  ];

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }

  const ListItem = ({ item, index }) => {
    return (
      <>
        {itemLimit && index > itemLimit - 1 ? null
          :
          <>
            <ListText to={`/${item.page ? item.page : 'news'}`} isLink={item.linkText}>
              <>
                {item.text} {item.linkText && <NewsLink>{item.linkText}<MdOutlineChevronRight size={22} style={{ marginLeft: 'auto' }} /></NewsLink>}
              </>
            </ListText>
            <ListDate>{item.date}</ListDate>
            <Divider />
          </>
        }
      </>
    );
  };

  return (
    <Container>
      {!hideTitle && <SectionTitle>News</SectionTitle>}
      <List>
        {newsItems.map((item, index) => (
          <ListItem key={index} index={index} item={item} />
        ))}
      </List>
      {!hideMore && <MoreNews onClick={navigateToMoreNews} >More news<FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '12px', marginLeft: '8px' }} /></MoreNews>}
      {/* <Switch>
        <Route path={`${match.path}/:0`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}
    </Container>
  );
};

export default NewsList;