export const simulateFee = async({amount, fee}) => {  
  const urlAPISimulator = '/api/simulator';

  const response = await fetch(urlAPISimulator);
  const data = await response.json();

  return data;
}