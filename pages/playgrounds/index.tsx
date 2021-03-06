import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import Playgrounds from '../../sreens/Playgrounds/Playgrounds';
import PageLayout from '../../components/Layout/PageLayout/PageLayout';
import { NextThunkDispatch, wrapper } from '../../store';
import { ArticleActionCreators } from '../../store/reducers/articles/article-action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(ArticleActionCreators.getAllDevToArticles());

    return {
      props: {
        title: 'vovacodes | playgrounds',
      },
      revalidate: 3600,
    };
  }
);

const PlaygroundsScreen: NextPage = () => {
  return (
    <PageLayout>
      <Playgrounds />
    </PageLayout>
  );
};

const mapDispatchToProps = (dispatch: NextThunkDispatch) => {
  return {
    news: bindActionCreators(
      ArticleActionCreators.getAllDevToArticles,
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(PlaygroundsScreen);
