import React from 'react';
import styled from 'styled-components';
import { ScrollView, SafeAreaView } from 'react-native';
import { Card, NotificationIcon, Logo, Course, Menu } from './components';

export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Sebasitán</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
          >
            {logos.map((item) => (
              <Logo
                image={item.image}
                text={item.text}
                key={item.image.toString()}
              />
            ))}
          </ScrollView>

          <Subtitle>Continue learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingBottom: 30,
              paddingLeft: 20,
            }}
          >
            {cards.map((card) => (
              <Card
                title={card.title}
                subtitle={card.subtitle}
                caption={card.caption}
                image={card.image}
                logo={card.logo}
                key={card.title.toString()}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular courses</Subtitle>
          {courses.map((course) => (
            <Course
              avatar={course.avatar}
              caption={course.caption}
              image={course.image}
              logo={course.logo}
              author={course.author}
              subtitle={course.subtitle}
              title={course.title}
              key={course.title.toString()}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 2px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f4f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    subtitle: '1 of 15 sections',
    caption: 'React Native',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Styled Componets',
    subtitle: '2 of 20 sections',
    caption: 'React Native',
    image: require('./assets/background12.jpg'),
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    subtitle: '3 of 12 sections',
    caption: 'React Native',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    subtitle: '4 of 12 sections',
    caption: 'React Native',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-react.png'),
  },
];

const courses = [
  {
    avatar: require('./assets/avatar.jpg'),
    caption: 'Design and interactive prototype',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: 'Meng To',
    subtitle: '10 sections',
    title: 'Prototype in Invision Studio',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('./assets/background6.jpg'),
    logo: require('./assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool',
  },
];
