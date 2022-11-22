class MakeApicall {
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com/comments';
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
      return result;
    };
}

module.exports = MakeApicall;
