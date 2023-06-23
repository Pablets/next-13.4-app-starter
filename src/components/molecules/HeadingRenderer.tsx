import React, { FC, ReactNode, createElement } from 'react';

export interface HeadingRendererProps {
  children: ReactNode;
}

const HeadingRenderer = (props: any) => {
  const regex = /\{#(.+?)\}/g;
  let str = JSON.stringify(props.children[0]);
  let slug = JSON.stringify(str.match(regex));
  if (slug) {
    slug = slug.substring(4, slug.length - 3);
    str = str.replace(regex, '');
    str = str.substring(1, str.length - 1);
  }
  return <div className="my-5">{createElement(`h${props.level}`, { id: slug }, str)}</div>;
};

export default HeadingRenderer;
