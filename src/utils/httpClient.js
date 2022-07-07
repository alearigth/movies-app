const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2RmZDBlZTNmMmY2ODM0M2FlMmRjZGJmNDU2MDRlMiIsInN1YiI6IjYxNWRmNTJiMWQzNTYzMDA4N2U5NTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6eQiv8DoQ3I6Q2AfuWRE7xilUOyMvHVO45ZBgnJSbM",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
