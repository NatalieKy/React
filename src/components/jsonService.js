export  class jsonService{

    firstUrl = `https://jsonplaceholder.typicode.com/users`;
    secondUrl = `https://jsonplaceholder.typicode.com/posts`;
    thirdUrl = `https://jsonplaceholder.typicode.com/posts`

    async getAllUsers() {
        let users = await fetch(this.firstUrl);
        let result = users.json();
        return result
    }

    async getUserById(id) {
        let user = await fetch(`${this.firstUrl}/${id}`)
        return user.json();
    }

    async getAllPosts() {
        return (await fetch(this.secondUrl)).json()
    }

    async getAllComments() {
        return (await fetch(this.thirdUrl)).json()
    }
}

export default jsonService;