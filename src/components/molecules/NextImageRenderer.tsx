import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

export interface NextImageRendererProps {
  children: ReactNode;
}

const NextImageRenderer = (paragraph: { children?: boolean; node?: any }) => {
  const { node } = paragraph;

  if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const metastring = image.properties.alt;
    const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
    const metaWidth = metastring.match(/{([^}]+)x/);
    const metaHeight = metastring.match(/x([^}]+)}/);
    const width = metaWidth ? metaWidth[1] : 467;
    const height = metaHeight ? metaHeight[1] : 350.25;
    const isPriority = metastring?.toLowerCase().match('{priority}');
    const hasCaption = metastring?.toLowerCase().includes('{caption:');
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

    return (
      <div className="my-5">
        <Image src={'https:' + image.properties.src} width={width} height={height} alt={alt} priority={isPriority} />
        {hasCaption ? <div aria-label={caption}>{caption}</div> : null}
      </div>
    );
  }
  if (node?.children[0]?.children?.[0]?.children?.[0] === 'a') {
    return <div className="decoration-blue-600">{paragraph.children}</div>;
  }
  return (
    <div className="my-5">
      <p>{paragraph.children}</p>
    </div>
  );
};

export default NextImageRenderer;
