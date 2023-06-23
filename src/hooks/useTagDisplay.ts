import React, { useCallback, useState } from 'react';

export interface UseTagDisplayProps {
  tags: string[];
  containerWidth?: number;
}

const useTagDisplay = ({ tags, containerWidth = 377 }: UseTagDisplayProps) => {
  const counterTagWidth = 88;
  const gaps = 12;

  const [tagsToShow, setTagsToShow] = useState<string[]>(tags);
  const [notVisibleTags, setNotVisibileTags] = useState(0);
  const [visibleTagWidths, setVisibleTagWidths] = useState<number[]>();
  const [buttonsWidth, setButtonsWidth] = useState<{ [index: string]: number }>({});

  const widthGettter = useCallback((index: string, width: number) => {
    setButtonsWidth((prev) => {
      prev[index] = width;
      return prev;
    });
  }, []);

  React.useEffect(() => {
    let notVisibleTagsCounter = 0;
    if (Object.keys(buttonsWidth).length) {
      let buttonsWidths = 0;
      const filteredTags = Object.keys(buttonsWidth)
        .map((tag) => buttonsWidth[tag])
        .filter((tagWidth, index, arr) => {
          let nextTagWidth = 0;
          if (!isNaN(arr[index + 1])) nextTagWidth = arr[index + 1];
          if (buttonsWidths + tagWidth + nextTagWidth + counterTagWidth + gaps < containerWidth) {
            buttonsWidths += tagWidth;
            return true;
          } else {
            notVisibleTagsCounter = notVisibleTagsCounter + 1;
            return false;
          }
        });
      setVisibleTagWidths(filteredTags);
      const filteredTagsToShow = notVisibleTagsCounter > 0 ? tags.slice(0, filteredTags.length) : tags;

      setTagsToShow(filteredTagsToShow);
      setNotVisibileTags(notVisibleTagsCounter);
    }
  }, [buttonsWidth, containerWidth, tags]);

  return {
    widthGettter,
    tagsToShow,
    hiddenTags: notVisibleTags,
    buttonsWidth,
    visibleTagWidths,
  };
};

export default useTagDisplay;
