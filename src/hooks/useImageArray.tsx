import { useMemo } from 'react';

const useImageArray = (fileList: FileList) => {
  const imageArray = useMemo(() => {
    const newImageArray = [];
    if (fileList?.length) {
      for (let i = 0; i < fileList.length; i++) {
        newImageArray.push(
          URL.createObjectURL(new Blob([fileList.item(i) ?? ''])),
        );
      }
    }
    return newImageArray;
  }, [fileList]);

  return imageArray;
};

export default useImageArray;
