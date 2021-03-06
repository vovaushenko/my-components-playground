import React, { useEffect } from 'react';
import * as Styled from './Landing.styles';
import WaveDivider from '../../components/Image/WaveDivider/WaveDivider';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ScrollHint from '../../components/UI/ScrollHint/ScrollHint';
import SectionHeader from '../../components/Typography/SectionHeader/SectionHeader';
import { useComponentsListConfig } from '../../components/Sections/ReleasedComponents/ComponentsList/ComponentsList.config';
import ComponentsList from '../../components/Sections/ReleasedComponents/ComponentsList/ComponentsList';
import RecentDevToArticles from '../../components/Sections/MyArticles/RecentDevToArticles/RecentDevToArticles';
import { useActions } from '../../hooks/useActions';
import { getInitialThemeMode } from '../../utils';

/**
 *Renders Landing Screen
 *@function Landing
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Landing: React.FunctionComponent = (): JSX.Element => {
  const { setTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const { devToArticles } = useTypedSelector((state) => state.articles);
  const { releasedComponents } = useComponentsListConfig();
  const DIVIDER_HEIGHT = '350px';
  const TOP_WAVE_DIVIDER =
    theme === 'dark'
      ? '/divider/dark-divider-top.svg'
      : '/divider/light-divider-top.svg';
  const BOTTOM_WAVE_DIVIDER =
    theme === 'dark'
      ? '/divider/dark-divider-bottom.svg'
      : '/divider/light-divider-bottom.svg';

  useEffect(() => {
    const persistedTheme = getInitialThemeMode();
    setTheme(persistedTheme);
  }, []);

  return (
    <>
      <WaveDivider waveImg={TOP_WAVE_DIVIDER} dividerHeight={DIVIDER_HEIGHT} />
      {/* LANDING SECTION */}
      <Styled.LandingSection dividerHeight={DIVIDER_HEIGHT}>
        <SectionHeader variant={'xxl'}>
          Welcome to the Component Playground
        </SectionHeader>
        <ScrollHint hintText={'Scroll to articles'} />
      </Styled.LandingSection>
      {/* === END OF LANDING SECTION === */}
      <WaveDivider
        waveImg={BOTTOM_WAVE_DIVIDER}
        dividerHeight={DIVIDER_HEIGHT}
      />
      {/* RELEASED COMPONENTS SECTION */}
      <Styled.ComponentsSection>
        <ComponentsList
          releasedComponents={releasedComponents}
          withFullArticleDescription
        />
      </Styled.ComponentsSection>
      {/* === END OF RELEASED COMPONENTS SECTION === */}

      {/* RELEASED ARTICLES SECTION */}
      <Styled.ArticlesSection>
        <RecentDevToArticles devToArticles={devToArticles} />
      </Styled.ArticlesSection>
      {/* === END OF RELEASED ARTICLES SECTION === */}
    </>
  );
};

export default Landing;
