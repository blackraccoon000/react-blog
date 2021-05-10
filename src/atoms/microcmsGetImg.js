import axios from 'axios';

export default {
  async asyncData() {
    const res = await axios.get(
      'https://playwell.microcms.io/api/v1/contents',
      {
        headers: {
          'X-API-KEY': process.env.X_API_KEY,
        },
      }
    );
    return res;
  },
};
