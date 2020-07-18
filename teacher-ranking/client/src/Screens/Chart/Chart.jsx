import React from 'react';

import {HorizontalBar} from 'react-chartjs-2';

export default function Chart (props) {
    const state = {
        datasets: [
          {
            label:"Rating",
            backgroundColor: 'rgba(75,192,192,1)',
            data: [props.data]
          }
        ]
    }
    return (
      <div className="bar">
        <HorizontalBar
          height={70}
          data={state}
          options={{
            legend:{
              display:true,
              position:'top'
            },
          }}
        />
      </div>
    );
}