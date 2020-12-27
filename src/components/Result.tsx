import React from 'react';


const  Result = ({value = "", hidden = true}: { value: string; hidden?: boolean }) => (
  <div className='result'>
    <span>{hidden && value}</span>
  </div>
);

export default Result;
