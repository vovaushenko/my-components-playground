import React from 'react';
import * as Styled from './Playgrounds.styles';
import styled from 'styled-components';
import BottomNavigation from '../../components/Navigation/BottomNavigation/BottomNavigation';
import Button from '../../components/Buttons/GenericButton/GenericButton';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */

const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <Hero bgWallpaper={'/bg.jpg'}>
        <Button>TEST</Button>
        <Button isLoading>TEST</Button>
        <Button disabled>TEST</Button>
        <Button isCompleted>TEST</Button>
      </Hero>
      <Screen>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et
          expedita in iure, laborum natus quaerat repellendus voluptatem.
          Eligendi excepturi quas ratione vero voluptatibus. Accusantium magni
          numquam velit. Dolore facere fugiat modi molestias nesciunt pariatur
          quod reiciendis reprehenderit vero, voluptates. Ab animi asperiores
          deserunt ea, excepturi expedita, placeat porro possimus quasi quisquam
          saepe tenetur vitae.
        </p>
      </Screen>
      <Screen>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et
          expedita in iure, laborum natus quaerat repellendus voluptatem.
          Eligendi excepturi quas ratione vero voluptatibus. Accusantium magni
          numquam velit. Dolore facere fugiat modi molestias nesciunt pariatur
          quod reiciendis reprehenderit vero, voluptates. Ab animi asperiores
          deserunt ea, excepturi expedita, placeat porro possimus quasi quisquam
          saepe tenetur vitae.
        </p>
      </Screen>
      <Screen>
        <h1>hello</h1>
        <BottomNavigation buttonActiveColor={'red'} buttonTextColor={'white'} />
      </Screen>
    </Styled.Container>
  );
};

interface Props {
  bgWallpaper: string;
}

const Hero = styled.div<Props>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.background};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Screen = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export default Playgrounds;
