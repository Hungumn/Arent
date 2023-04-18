import uuid from 'react-uuid';

const now = new Date();

class CourseApi {
  getCourses() {
    const courses = [
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        thumbnail:
          "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        price: 3000,
        public_status: 2,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        thumbnail:
          "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        price: 3000,
        public_status: 1,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        thumbnail:
          "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        price: 3000,
        public_status: 2,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        thumbnail:
          "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        price: 3000,
        public_status: 2,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
      {
        id: uuid(),
        lesson_instructor_id: "e563673d-93fa-323d-aacd-501f756be11e",
        thumbnail:
          "https://i.ytimg.com/vi/uYB0Z0RjV8g/maxresdefault.jpg",
        title: "Title",
        description: "Description",
        price: 3000,
        public_status: 2,
        createdAt: "20220914T130421Z",
        updatedAt: "20220914T130421Z",
      },
    ];
    return Promise.resolve(courses);
  }
}

export const courseApi = new CourseApi();
