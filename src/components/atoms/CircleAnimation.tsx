import React, { FC, SVGAttributes, useMemo } from 'react';

interface CircleProps {
  timeSetting: number;
  count: number;
  isRunning: boolean;
  color: SVGAttributes<SVGCircleElement>['stroke'];
  r: number;
  strokeWidth: number;
}

const CircleAnimation: FC<CircleProps> = (props) => {
  const { timeSetting, count, isRunning, color, r: outerR, strokeWidth } = props;

  const size = useMemo(() => {
    return outerR * 2;
  }, [outerR]);

  const r = useMemo(() => {
    return outerR - strokeWidth / 2;
  }, [outerR, strokeWidth]);

  const circumference = useMemo(() => {
    return 2 * Math.PI * r;
  }, [r]);

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
          <span className="second">{count}</span>
        </div>
      </div>
    </>
  );
};

export default CircleAnimation;
