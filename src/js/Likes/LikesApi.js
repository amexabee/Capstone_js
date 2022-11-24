class LikesApi {
  constructor() {
    this.array = [];
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cNZqM0oVNMyctsSAIcbv/likes';
  }

      getmethod = async () => {
        const result = await fetch(
          `${this.baseURL}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
          .then((res) => res.json())
          .catch((err) => err);
        this.array = [...result];
        return this.array;
      };

      postmethod = async (Id) => {
        const result = await fetch(
          `${this.baseURL}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item_id: Id }),
          },
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error('Something went wrong on api server!');
            }
            return res.json();
          })
          .catch((err) => err);

        return result;
      };
}

export default LikesApi;
