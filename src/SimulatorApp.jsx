import SimulatorCss from '@styles/simulator.module.scss';
import ButtonCss from '@styles/components/button.module.scss';
import { useState } from 'react';
import { CardFee, InputAmount, InputRange} from './components';
import { useFetchApiCampaign } from './hooks';
import { worker } from './mocks/browser';
import { simulateFee } from './helpers';

worker.start();

export const SimulatorApp = () => {
  
  const handleAmount = (value) => {
    if(value < campaign.min_amount) return true;
    setAmount(value);
  }

  const getFee = async() => {
    const items = await simulateFee({amount, fee});
    setTimeout(() => {      
      setSimulateFee(items.monthly_amount);
    }, 300);
  }

  const calculate = (event) => {
    setSimulateFee(0);
    event.preventDefault(); 
    getFee(); 
  }

  const { campaign } = useFetchApiCampaign();
  const [ simulatedFee, setSimulateFee ] = useState();
  const [ amount, setAmount ] = useState();
  const [ fee, setFee ] = useState();

  return (
    <section className={ SimulatorCss['simulator__container'] }>
      <div className={ SimulatorCss['simulator__content'] }>
        <h1 className={ SimulatorCss['simulator__title'] }>Simula tu cuota</h1>
        
        <CardFee 
          title="Tu cuota mensual será:" 
          initialTEA={ campaign.tea } 
          initialDate={ campaign.payment_date } 
          fee={fee}
          simulatedFee={ simulatedFee }
          />
        <form onSubmit={calculate}>
          <h2 className={ SimulatorCss['simulator__subtitle'] }>Ingresa un monto</h2>
          <InputAmount
            currency={ campaign.currency }
            minValue={ campaign.min_amount } 
            maxValue={ campaign.max_amount } 
            onValueChange={(event) => handleAmount(event)}/>

          <h2 className={SimulatorCss['simulator__subtitle']}>Elige el número de cuotas</h2>
          <InputRange 
            minValue={ campaign.min_quota } 
            maxValue={ campaign.max_quota} 
            onValueChange={(event) => { setFee(event); }}/>
            
          <div className={ SimulatorCss['simulator__wrapper-button'] }>
            <button 
              type="submit"
              className={ ButtonCss['button'] }
              disabled={ !amount || !fee }>
              Calcular
            </button>
          </div>
        </form>
        
      </div>
    </section>
  )
}
