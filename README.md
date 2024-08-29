## About NextQuiz
This Next.js application allows users to play quizzes using the OpenTDB API, which provides a variety of trivia questions. Users can log in securely using NextAuth, which handles authentication and session management. The app records and displays user's scores, offering a fun and engaging quiz experience with robust security features.

## How to run on local machine

Clone the project

```bash
  git clone https://github.com/ujjwal509kumar/NextOpenTquiz.git
```

Go to the project directory

```bash
  cd NextOpenTquiz
```

Install dependencies

```bash
  npm install
```
To execute the project, create a file named as `.env.local` and add the following configurations

`GOOGLE_ID=YOUR_GOOGLE_CLIENT_ID`

`GOOGLE_SECRET=YOUR_GOOGLE_CLIENT_SECREAT`

`NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECREAT`

Refer [this](https://www.youtube.com/watch?v=-vq32dsK_TI) video to see how to create a Google client id and client secret.

Click [here](https://generate-secret.vercel.app/32) to generate a random next auth secreat


Start the server

```bash
  npm run start
```

## How to run with Docker

Clone the image

```bash
  docker pull alien404/nextquiz
```
Start the container
```bash
  docker run -it -p 3000:3000 -e GOOGLE_ID=YOUR_GOOGLE_CLIENT_ID -e GOOGLE_SECRET=YOUR_GOOGLE_CLIENT_SECREAT alien404/nextquiz
```

