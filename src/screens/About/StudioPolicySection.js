import React from "react";

import { Container, Content, Header, Title, Subtitle, Groups, ItemTitle, Image, Checklist, ChecklistItem } from "./StudioPolicySection.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Emoji from "../../components/text/Emoji";

import Student from '../../assets/img/student.png';

const StudioPolicySection = () => {

  const groups = [
    {
      title: 'Private individual piano instruction',
      symbol: '🎹',
      checklist: [
        'Weekly 60, 75, or 90 min lessons',
        'Comprehensive music theory',
        'Computer-based ear training',
        'Free 45 min evaluation lesson'
      ]
    },
    {
      title: 'Accepting students from all backgrounds',
      symbol: '👪',
      checklist: ['From age 5 through Adult', 'Beginner to Advanced skillsets', 'Bilingual in English & Korean']
    },
    {
      title: 'Competition, performance, and award opportunities',
      symbol: '🏆',
      checklist: [
        'Recital, festival, and competition performances',
        'Certificate of Merit (CM) and Royal Conservatory (RCM)',
        'Annual awards banquet for all students'
      ]
    },
    {
      title: 'Tuition and late fee policy',
      symbol: '🗳',
      checklist: [
        'Due at the 1st lesson of each month',
        'No later than the 10th of the month',
        'After the 10th, $25.00 late fee',
        'Annual registration fee: $100.00',
        'Goes towards awards, facilities, practice test, etc.',
      ]
    },
    {
      title: 'Vacation policy',
      symbol: '🏝',
      checklist: [
        'Summer months (June - Aug): Two consecutive weeks may be taken without tuition charged',
        'Regular months (Sep - June): Replace up to 1 lesson/quarter',
        '** CM/RCM exam participants reuqired to take 8 out of 12 lessons over summer'
      ]
    },
    {
      title: 'Sick and conflict of schedule policy',
      symbol: '📅',
      checklist: [
        'One make-up lessons available each quarter',
        'Notify by 11:00am on day of lesson',
        'No tuition refund or reduction for missed lessons unless I cancel',
      ]
    },
  ];

  const GroupItem = ({ item }) => {
    return (
      <div style={{position: 'relative'}}>
        <Emoji symbol={item.symbol} size={'40'} />
        <ItemTitle>{item.title}</ItemTitle>
        <Checklist>
          {item.checklist?.map((text, index) => (
            <ChecklistItem key={index}><FontAwesomeIcon icon={faCheck} style={{fontSize: '12px', marginRight: '12px'}} />{text}</ChecklistItem>
          ))}
        </Checklist>
      </div>
    );
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>Studio Policies</Title>
          <Subtitle>Learn more about our studio and expectations for prospective students</Subtitle>
        </Header>
        <Groups>
          {groups.map((item, index) => (
            <GroupItem item={item} key={index} />  
          ))}
        </Groups>
      </Content>
    </Container>
  );
};

export default StudioPolicySection;