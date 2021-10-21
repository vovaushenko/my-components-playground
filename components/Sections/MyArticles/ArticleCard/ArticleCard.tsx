import React, { useRef } from 'react';
import * as Styled from './ArticleCard.styles';
import { IDevToArticle } from '../../../../models/IDevToArticle';
import useHover from '../../../../hooks/useHover';
import { FiChevronsRight } from 'react-icons/fi';
import Boop from '../../../Animations/Boop/Boop';

export interface ArticleProps {
  article: IDevToArticle;
}

/**
 *Renders card with dev.to article details
 *@function ArticleCard
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered ArticleCard component
 */
const ArticleCard = ({ article }: ArticleProps): JSX.Element => {
  const { title, body_markdown, tag_list, url } = article;
  const articleRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(articleRef);
  return (
    <Boop boopConfig={{ scale: 1.001, x: 2 }}>
      <Styled.Container ref={articleRef} isHovered={isHovered}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.TagList>
          {tag_list.map((tag, id) => (
            <Styled.Tag key={id}>{tag}</Styled.Tag>
          ))}
        </Styled.TagList>
        <Styled.Text>{body_markdown.slice(0, 350) + ' ... '}</Styled.Text>
        <Styled.ReadMore href={url} target="_blank" rel="noopener">
          Read More
          {isHovered && (
            <Styled.ArrowIcon>
              <FiChevronsRight className={'icon'} />
            </Styled.ArrowIcon>
          )}
        </Styled.ReadMore>
      </Styled.Container>
    </Boop>
  );
};

export default ArticleCard;
