// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// function fetchPosts () {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => console.log(posts))
//     .catch((error) => console.error(error));
// };

async function fetchPosts() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		return posts;
	} catch (error) {
		console.error(error);
	}
}

fetchPosts();

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched successfully!');
		}, 2000);
	});
};

async function getData() {
	try {
		const result = await fetchData();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

getData();

// Alternative:
// try {
//   const result = async () =>  await fetchData();
//   console.log(result);
// } catch (e) {
//   console.log(e);
// }

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const fetchUsers = () => {
// 	return fetch('https://jsonplaceholder.typicode.com/users')
// 		.then((response) => response.json())
// 		.then((users) => {
// 			console.log(users);
// 			return users;
// 		});
// };

const fetchUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		if (response.status !== '200') {
			// Handle error
		}
		const users = await response.json();
		return users;
	} catch (error) {
		console.log(error);
	}
};

async function getUsers() {
	try {
		const users = await fetchUsers();
		addUserList(users);
		console.log('Total users:', users.length);
	} catch (error) {
		console.log(error);
	}
}

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		const user = await response.json();
		return user;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

async function getUserData() {
	try {
		const user = await fetchUserData();
		console.log('Ex. 4');
		console.log('User:', user);
	} catch (error) {
		console.log(error);
	}
}

getUserData();

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const getPostAndComments = async () => {
	try {
		const postResponse = await fetch(
			'https://jsonplaceholder.typicode.com/posts/1'
		);
		const post = await postResponse.json();
		const commentsResponse = await fetch(
			`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
		);
		const comments = await commentsResponse.json();
		// return {post: post, comments: comments};
    return {post, comments};

	} catch (err) {
		console.log(err);
	}
};

const postAndComments = async () => {
  const result = await getPostAndComments();
  console.log('Ex. 5', result);
  return result;
}

postAndComments();

// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

// const fetchWithTimeout = (url, timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url)
//         .then(response => resolve(response.json()))
//         .catch(error => reject(error));
//     }, timeout);
//   });
// };

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000)
//   .then(posts => console.log(posts))
//   .catch(error => console.error(error));
