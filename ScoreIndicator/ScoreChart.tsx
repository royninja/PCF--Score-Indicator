import * as React from 'react';
import {
  DataVizPalette,
  GaugeChart,
  GaugeChartVariant,
  getGradientFromToken,
  DataVizGradientPalette,
  ResponsiveContainer,
} from '@fluentui/react-charting';

export interface IScoreChartProps{
  scoreValue: number;
}

export class ScoreChart extends React.Component<IScoreChartProps> {
  public render(): React.ReactNode {
    return (
      <ResponsiveContainer height={128}>
        <GaugeChart
          segments={[
            {
              size: 33,
              color: DataVizPalette.success,
              gradient: getGradientFromToken(DataVizGradientPalette.success),
              legend: 'Low Risk',
            },
            {
              size: 34,
              color: DataVizPalette.warning,
              gradient: getGradientFromToken(DataVizGradientPalette.warning),
              legend: 'Medium Risk',
            },
            {
              size: 33,
              color: DataVizPalette.error,
              gradient: getGradientFromToken(DataVizGradientPalette.error),
              legend: 'High Risk',
            },
          ]}
          chartValue={this.props.scoreValue}
          variant={GaugeChartVariant.MultipleSegments}
        />
      </ResponsiveContainer>
    );
  }
}