import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { formatterAmount } from '../helpers';
import AmountCss from '@styles/components/input-amount.module.scss';

export const InputAmount = ({ minValue, maxValue, currency, onValueChange }) => {
  const [ minimum, setMinimum ] = useState();
  const [ maximum, setMaximum ] = useState();
  const prefix = currency ==='PEN' ? 'S/ ' : ' ';

  useEffect(() => {
    setMinimum(formatterAmount( minValue, currency ));
    setMaximum(formatterAmount( maxValue, currency ))
  }, [minValue])

  const withValueCap = ( inputObj ) => {
    const { value } = inputObj;
    if ( value >= 0 && value <= maxValue ) return true;
    return false;
  };

  return (
    <div>
      <NumberFormat 
        className={ AmountCss['amount__input'] } 
        thousandSeparator={true} 
        prefix={prefix}
        decimalScale={2} 
        isAllowed={ withValueCap }
        onValueChange={ (event) => onValueChange(event.floatValue) }/>

      <p className={ AmountCss['amount__input-message'] }>
        { minValue && <span>Mínimo { minimum }</span> }
        { minValue && maxValue && <span> - </span> }
        { maxValue && <span>Máximo { maximum }</span> }
      </p>
    </div>
  )
}
