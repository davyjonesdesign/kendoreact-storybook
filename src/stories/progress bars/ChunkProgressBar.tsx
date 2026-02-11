import React from 'react';
import { ChunkProgressBar as KendoChunkProgressBar } from "@progress/kendo-react-progressbars";
import type { ChunkProgressBarProps } from '@progress/kendo-react-progressbars';
import '../assets/index.scss';

export const ChunkProgressBar = (props: ChunkProgressBarProps) => {
  return (
    <>
      <KendoChunkProgressBar 
        min={0} 
        max={100} 
        value={55} 
        {...props} 
      />
    </>
  );
};
