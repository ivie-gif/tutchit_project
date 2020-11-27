import React from 'react';

import {Button} from 'react-materialize'

const Index = ({title, className, handleClick}) => {
    return (
        <div>
            <Button
    node="button"
    style={{
      marginRight: '5px'
    }}
    waves="light"
    onClick={handleClick}
    className={className}
  >
    {title}
  </Button>
        </div>

    )
}

export default Index;