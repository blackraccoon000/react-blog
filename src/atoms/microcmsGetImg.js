import axios from 'axios';

export default {
  async asyncData() {
    const res = await axios.get(
      'https://playwell.microcms.io/api/v1/images/img/neko_l-size.jpg',
      {
        headers: {
          'X-API-KEY': '99985c22-9a66-4c68-93fd-c09e96dc0355',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      }
    );
    return res;
  },
};
