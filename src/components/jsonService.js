export default class jsonService{

    firstUrl = `https://jsonplaceholder.typicode.com/users`;
    secondUrl = `https://jsonplaceholder.typicode.com/posts`;
    thirdUrl = `https://jsonplaceholder.typicode.com/posts`

    async getAllUsers() {
        let users = await fetch(this.firstUrl);
        let result = users.json();
        return result
    }

    async getAllPosts() {
        return (await fetch(this.secondUrl)).json()
    }

    async getAllComments() {
        return (await fetch(this.thirdUrl)).json()
    }
}
