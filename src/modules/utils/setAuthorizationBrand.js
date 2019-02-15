import axios from 'axios';

export default function setAuthorizationBrand(brand_uuid) {
  if (brand_uuid) {
    axios.defaults.headers.common['x-brand-id'] = brand_uuid;
   
  }
   else {
    delete axios.defaults.headers.common['x-brand-id'];
   
  }
}
