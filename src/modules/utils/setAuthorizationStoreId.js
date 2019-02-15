import axios from 'axios';

export default function setAuthorizationStoreId(uuid) {
  if (uuid) {
       axios.defaults.headers.common['x-store-id'] = uuid;
  } else {
    delete axios.defaults.headers.common['x-store-id'];
  }
}