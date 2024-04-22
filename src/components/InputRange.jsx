import { useEffect, useState } from 'react';
import InputRangeCss from '@styles/components/input-range.module.scss';

export const InputRange = ({ minValue, maxValue, onValueChange }) => {
  const [quota, setQuota] = useState(0)

  const handleChange = (value) => {
    setQuota(value);
    onValueChange(Number(value)); 
  }

  useEffect(() => {
    setQuota(0);
  }, [ maxValue ])
  

  return (
    <>
      <input 
        type="range" 
        min={ minValue } 
        max={ maxValue } 
        className={ InputRangeCss['range'] } 
        step="1"
        value={ quota }
        onChange={ (event) => handleChange(event.target.value) }/>

      <div className={ InputRangeCss['range__labels'] }>
        <p className={ InputRangeCss['range__fee'] }>
          { quota } cuotas
        </p>
        <p className={ InputRangeCss['range__maximum'] }>
          Máximo: {maxValue}
        </p>
      </div>
    </>
  )}
