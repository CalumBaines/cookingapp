import Api from '@/services/Api';

export default {
  index(userId) {
    return Api().get('recipes', userId);
  },
  create(data) {
    return Api().post('recipes', data);
  },
};
