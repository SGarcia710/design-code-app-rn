import React from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { MenuItem } from './MenuItem';

const screenHeight = Dimensions.get('window').height;

export class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  // Now when the component mounts it will start the spring animation moving it to the top position 0.
  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require('../assets/background2.jpg')} />
          <Title>Sebastián</Title>
          <Subtitle>Fullstack Developer</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: 'absolute',
            top: 120,
            left: '50%',
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>

        <Content>
          {items.map((item) => (
            <MenuItem
              icon={item.icon}
              title={item.title}
              text={item.text}
              key={item.title.toString()}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
// We need to wrapp the component we want to animate with a Animated component wrapper.
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
  font-size: 13px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  { title: 'Account', icon: 'ios-settings', text: 'settings' },
  { title: 'Billing', icon: 'ios-card', text: 'payments' },
  { title: 'Learn React', icon: 'ios-compass', text: 'start course' },
  { title: 'Log out', icon: 'ios-exit', text: 'see you soon!' },
];
