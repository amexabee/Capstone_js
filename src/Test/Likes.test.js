import 'isomorphic-fetch';
import addBtn from '../js/Likes/addBtn.js';
import LikesApi from '../js/Likes/LikesApi.js';

describe('add like', () => {
  test('add like id 1', async () => {
    const apilike = new LikesApi();
    const mainlike = await apilike.getmethod();

    const HowManyLikes = mainlike[1].likes;
    await addBtn(1);

    const Newmainlike = await apilike.getmethod();
    const HowManyLikesnow = Newmainlike[1].likes;

    expect(HowManyLikesnow).toBe(HowManyLikes + 1);
  });
  test('add like id 2', async () => {
    const apilike = new LikesApi();
    const mainlike = await apilike.getmethod();

    const HowManyLikes = mainlike[2].likes;
    await addBtn(2);

    const Newmainlike = await apilike.getmethod();
    const HowManyLikesnow = Newmainlike[2].likes;

    expect(HowManyLikesnow).toBe(HowManyLikes + 1);
  });
});
