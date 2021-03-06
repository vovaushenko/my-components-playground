import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import PageLayout from '../components/Layout/PageLayout/PageLayout';
import { NextThunkDispatch, wrapper } from '../store';
import { ArticleActionCreators } from '../store/reducers/articles/article-action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Landing from '../sreens/Landing/Landing';

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(ArticleActionCreators.getAllDevToArticles());

    return {
      props: {
        title: 'Vova Ushenko | Articles',
      },
      revalidate: 3600,
    };
  }
);

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Landing />
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

export default connect(null, mapDispatchToProps)(Home);
