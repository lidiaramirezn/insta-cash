export const loadCampaign = async() => {  
  const urlAPICampaign = '/api/campaign';

  const response = await fetch(urlAPICampaign);
  const data = await response.json();

  return data;
}