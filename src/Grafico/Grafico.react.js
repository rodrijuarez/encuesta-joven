import { Arc } from '@vx/shape';
import { GradientTealBlue } from '@vx/gradient';
import { Group } from '@vx/group';
import React from 'react';
// import PropTypes from 'prop-types';

export class Grafico extends React.Component {
  render() {
    const { width, height, events, margin, grafico } = this.props;

    if (width < 10) return null;
    const radius = Math.min(width, height) / 2;
    return (
      <svg width={width} height={height}>
        <GradientTealBlue id="gradients" />
        <rect x={0} y={0} rx={14} width={width} height={height} fill="url('#gradients')" />
        <Group top={height / 2 - margin.top} left={width / 2}>
          <Arc
            data={grafico.results}
            pieValue={d => d.value}
            outerRadius={radius - 80}
            innerRadius={radius - 120}
            fill="white"
            fillOpacity={d => 1 / (d.index + 2)}
            cornerRadius={3}
            padAngle={0}
            centroid={(centroid, arc) => {
              const [x, y] = centroid;
              const { startAngle, endAngle } = arc;
              if (endAngle - startAngle < 0.1) return null;
              return (
                <Label x={x} y={y}>
                  {arc.data.label}
                </Label>
              );
            }}
          />
          <Arc
            data={grafico.results}
            pieValue={d => d.value}
            outerRadius={radius - 135}
            fill="black"
            fillOpacity={d => 1 / (d.index + 2)}
            centroid={(centroid, arc) => {
              const [x, y] = centroid;
              return (
                <Label x={x} y={y}>
                  {`${arc.data.value.toFixed(2)}%`}
                </Label>
              );
            }}
          />
        </Group>
      </svg>
    );
  }
}

function Label({ x, y, children }) {
  return (
    <text fill="white" textAnchor="middle" x={x} y={y} dy=".33em" fontSize={9}>
      {children}
    </text>
  );
}

Grafico.defaultProps = {
  events: false,
  margin: {
    top: 30,
    left: 20,
    right: 20,
    bottom: 110
  }
};
