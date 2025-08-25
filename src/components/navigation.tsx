import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex p-5 items-center flex-1 justify-between w-full">
      <div className=" font-bold">LOGO</div>
      <div className=" flex">
        <div className="space-x-8 mx-20">
          <a href="#">
            <Button
              className="start relative overflow-hidden hover:text-lime-500 hover:shadow-2xs hover:cursor-pointer m-"
              size="sm"
            >
              <span className="absolute w-3 h-1 bg-lime-400 rounded-full shadow-[0_0_15px_#7aff73,0_0_30px_#7aff73] animate-light1"></span>
              HOME
              <span className="absolute w-3 h-1 bg-lime-400 rounded-full shadow-[0_0_15px_#7aff73,0_0_30px_#7aff73] animate-light2"></span>
            </Button>
          </a>
          <a href="\">
            <Button
              className="border-transparent border-b-2  hover:border-b-lime-600 hover:text-lime-500"
              size="sm"
            >
              ABOUT
            </Button>
          </a>
          <a href="\">
            <Button
              className="border-transparent border-b-2 hover:border-b-lime-600 hover:text-lime-500"
              size="sm"
            >
              PROJECT
            </Button>
          </a>
          <a href="\">
            <Button
              className="border-transparent border-b-2 hover:border-b-lime-600 hover:text-lime-500"
              size="sm"
            >
              CONTACT
            </Button>
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div>
      </div>
    </nav>
  );
}

export { Navigation };
