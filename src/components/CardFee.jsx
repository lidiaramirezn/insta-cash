import { useEffect, useState } from 'react';
import CardFeedCss from '@styles/components/card-fee.module.scss';
import { dateFormatter, formatterTwoDecimals } from '../helpers';

export const CardFee = ({ title, initialTEA, fee, initialDate, simulatedFee }) => {
  const [ tea, setTEA ] = useState(0);
  const [ date, setDate ] = useState(0);

  useEffect(() => {
    setTEA(formatterTwoDecimals( initialTEA ));
    setDate(dateFormatter( initialDate ))
  }, [initialTEA])

  return (
    <div className={CardFeedCss['card-fee']}>
      <h2 className={CardFeedCss['card-fee__title']}>
        {title}
      </h2>
      <p className={CardFeedCss['card-fee__amount']}>
        S/ { simulatedFee ? simulatedFee : 0}
      </p>      
      <div className={CardFeedCss['card-fee__divider']}>
        <aside className={CardFeedCss['card-fee__aside']}>
          <h3 className={CardFeedCss['card-fee__subtitle']}>Cuotas</h3>
            <p className={CardFeedCss['card-fee__value']}>{fee ? fee : '-'}</p>
        </aside>
        <aside className={`${CardFeedCss['card-fee__aside']} 
          ${CardFeedCss['card-fee__aside--secondary']}`}>
          <h3 className={CardFeedCss['card-fee__subtitle']}>TEA</h3>
          <p className={CardFeedCss['card-fee__value']}>{ tea ? tea : '-' } %</p>
        </aside>
        <aside className={CardFeedCss['card-fee__aside']}>
          <h3 className={CardFeedCss['card-fee__subtitle']}>Pago 1° cuota</h3>
          <p className={CardFeedCss['card-fee__value']}>{ date ? date : '-'}</p>
        </aside>
      </div>
      
      <div>
        
      </div>
    </div>
  )
}
