# Social Network API

![License Badge](https://img.shields.io/badge/License-MIT-green)

## Description

A backend API for a social network built with Mongoose & Express.

A walkthrough demo can be found [here](https://drive.google.com/file/d/1w6J5kmzYBd4OxOKVq9VOAD8oD49YdhFk/view)

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [API Routes](#API-Routes)
* [Contribution](#Contribution)
* [License](#License)
* [Questions](#Questions)

## Installation

```terminal
# install all dependencies
npm i
```

## Usage

```terminal
npm seed #optional to seed db with some data
npm start
```

## API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Contribution

Fork repo and create a pull request

## License

This project is covered under the MIT License

## Questions

* Email: [contact@furhan.dev](contact@furhan.dev)
* GitHub: [furhan-dev](https://github.com/furhan-dev)
