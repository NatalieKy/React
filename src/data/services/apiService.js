export class ApiService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async loadUsers() {
        let users = await fetch(this.url);
        let result = users.json();
        return result
    }

    async loadSingleUser(id) {
        let singleUser = await fetch(`${this.url}${id}`)
    }
}