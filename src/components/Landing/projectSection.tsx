import Card from "../Landing/ProjectCard";
import { Card as CardInterface } from "../../interface/CardData";

export default function projectIntro() {
  return (
    <div className="flex flex-col md:ml-auto">
      <div className="flex flex-col ml-auto max-w-md">
        <h1 className="text-3xl font-semibold mt-44 mb-3 dark:text-gray-200 flex gap-2">
          My
          <span className="text-violet-400 transform transition-all cursor-cell flex hover:text-violet-600">
            Projects
          </span>
        </h1>

        <div className="text-lg mt-2 dark:text-gray-300">
          Over the past few month's I've taken on mutliple Frontend projects
          most of which related to file hosting, some of them are listed below.
        </div>
      </div>
      <div className="max-w-4xl mt-4">
        {(process.env.cards as unknown as CardInterface[])!.map((c, i, arr) => {
          if (i % 2) return;

          if (i + 1 < arr.length) {
            return (
              <div key={i} className="grid md:grid-cols-2 gap-2 mt-4">
                <Card {...c} />
                <Card {...arr[i + 1]} />
              </div>
            );
          }

          return (
            <div key={i} className="mt-2">
              <Card {...c} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
