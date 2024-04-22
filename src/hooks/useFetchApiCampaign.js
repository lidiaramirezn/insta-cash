import { useEffect, useState } from 'react';
import { loadCampaign } from '../helpers';

export const useFetchApiCampaign = () => {

  const [campaign, setCampaign] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const getCampaign = async() => {
    const items = await loadCampaign();
    setCampaign(items);
    // setIsLoading(false);
  }

  useEffect(() => {
    getCampaign();
  }, [])

  return {
    campaign
  }
}