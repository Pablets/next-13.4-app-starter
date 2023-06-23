interface Project {
  id?: string;
  //name: ProjectLogosKeys; // Completed at src/components/images/ProjectsLogos.ts
  testimonial: {
    imageURL: string;
    name: string;
    position: string;
    text: string;
  };
}
