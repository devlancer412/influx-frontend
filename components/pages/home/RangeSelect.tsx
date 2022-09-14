import React, { useMemo } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 8px;
  margin-top: 14px;
  margin-bottom: 31px;
`;

const StyledThumb = styled.div`
  height: 18px;
  width: 18px;
  text-align: center;
  background-color: #10e98c;
  border-radius: 50%;
  cursor: grab;
  transform: translate(0, -4px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 8px 1px rgba(0, 0, 0, 0.07);

  &:focus-visible {
    outline: none;
  }
`;

const PriceShow = styled.div`
  font-weight: 400;
  font-size: 4px;
  line-height: 10px;
  border: 1px solid #cccccc;
  border-radius: 999px;
  width: auto;
  color: white;
  transform: translate(0, 30px) scale(2);
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2
      ? '#134A50'
      : props.index === 1
      ? '#FFFFFFEC'
      : '#134A50'};
  border-radius: 999px;
`;

type Props = {
  value0: number;
  value1: number;
  top: number;
  bottom?: number;
  onChange: (value0: number, bottom: number) => void;
  unit?: SVGStringList;
};

const RangeSelect: React.FC<Props> = ({
  value0,
  value1,
  top,
  bottom = 0,
  onChange,
  unit = '$',
}) => {
  const Thumb = (props, state) => (
    <StyledThumb {...props}>
      <PriceShow>${state.valueNow}</PriceShow>
    </StyledThumb>
  );
  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  return (
    <StyledSlider
      min={bottom}
      max={top}
      value={[value0 ? value0 : bottom, value1 ? value1 : top]}
      onChange={(value: number[], index: number) =>
        index === 0 ? onChange(value1, value[0]) : onChange(value[1], value0)
      }
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};

export default RangeSelect;
