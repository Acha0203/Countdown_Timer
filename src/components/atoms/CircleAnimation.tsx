import React, { FC, memo, SVGAttributes, useEffect, useMemo } from 'react';
import { useAppContext } from '../../context/AppContext';

interface CircleProps {
  color: SVGAttributes<SVGCircleElement>['stroke'];
  r: number;
  strokeWidth: number;
}

const CircleAnimation: FC<CircleProps> = memo((props) => {
  const { color, r: outerR, strokeWidth } = props;
  const { isRunning, timeSetting, setTimeSetting, hoursSetting, minutesSetting, secondsSetting } = useAppContext();

  const size = useMemo(() => outerR * 2, [outerR]);

  const r = useMemo(() => outerR - strokeWidth / 2, [outerR, strokeWidth]);

  const circumference = useMemo(() => 2 * Math.PI * r, [r]);

  const getTimeSetting = (hours: number, minutes: number, seconds: number): number =>
    hours * 3600 + minutes * 60 + seconds;

  useEffect(() => {
    setTimeSetting(getTimeSetting(hoursSetting, minutesSetting, secondsSetting));
  }, []);

  return (
    <>
      <style>
        {`@keyframes pie {
          50%,
          100% {
            stroke-dasharray: 0, ${circumference};
          }
        }`}
      </style>
      <div className="progress-circle" style={{ width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={outerR} cy={outerR} r={outerR} className="base" />
          <circle
            cx={outerR}
            cy={outerR}
            r={r}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} 0`}
            className="circle"
            style={{
              animation: `pie ${timeSetting * 2}s linear ${isRunning ? 'running' : 'paused'}`,
              WebkitAnimationName: 'pie',
            }}
          />
          <circle cx={outerR} cy={outerR} r={outerR - 12} className="front" />
        </svg>
        <div className="seconds">
          <span className="second">
            {hoursSetting.toString().padStart(2, '0')}:{minutesSetting.toString().padStart(2, '0')}:
            {secondsSetting.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </>
  );
});

export default CircleAnimation;
