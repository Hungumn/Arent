import uuid from "react-uuid";

const now = new Date();

class MovieApi {
  getMovies() {
    const movies = [
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        course_id: uuid(),
        thumbnail: "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        movie: null,
        playback_time: 300,
        index: 1,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        course_id: uuid(),
        thumbnail: "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        movie: null,
        playback_time: 300,
        index: 2,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        course_id: uuid(),
        thumbnail: "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        movie: null,
        playback_time: 300,
        index: 3,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        course_id: uuid(),
        thumbnail: "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        movie: null,
        playback_time: 300,
        index: 4,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        course_id: uuid(),
        thumbnail: "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        movie: null,
        playback_time: 300,
        index: 5,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
    ];
    return Promise.resolve(movies);
  }
}

export const movieApi = new MovieApi();
