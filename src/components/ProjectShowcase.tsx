import React from "react";
import { GridBackgroundDemo } from "./ui/BackgroundGrid";

const ProjectShowcase = () => {
  return (
    <GridBackgroundDemo>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        <div className="flex flex-col w-full border border-secondary p-4">
          <h1>First project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit
            adipisci nobis quos corrupti veritatis eum impedit sed! Mollitia
            aperiam voluptates nihil ab magni nostrum rem necessitatibus aut
            dignissimos minima.
          </p>
          <button>Github repo</button>
        </div>
      </div>
    </GridBackgroundDemo>
  );
};

export default ProjectShowcase;
