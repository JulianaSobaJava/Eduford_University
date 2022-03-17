import React from "react";
import Banner from "../../views/banner";
import Courses from "../../views/courses/index";
import Facilities from "../../views/facilities";

export default function CoursesPage() {
  return (
    <>
      <Banner title="Our Courses" />
      <main>
        <Courses />
        <Facilities />
      </main>
    </>
  );
}
