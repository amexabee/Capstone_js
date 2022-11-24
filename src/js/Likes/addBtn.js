import LikesApi from './LikesApi.js';

export default async function addBtn(Id) {
  const apilike = new LikesApi();
  await apilike.postmethod(Id + 1);
}
