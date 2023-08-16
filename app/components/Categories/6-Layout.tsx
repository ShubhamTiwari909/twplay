{
  /*

1. Aspect Ratio
2. Container
3. Columns
4. Display - block, inline, inline-block and flex
5. Object fit
6. overflow
7. Position

*/
}

import DemoImage from "@/public/example-image.jpg";
import Image from "next/image";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <>
      <h1 className="text-center mb-10">LAYOUT</h1>
      {/* <div className="mx-auto w-96 mb-4">
        <h2 className="text-center mb-2">ASPECT RATIO</h2>
        <Image src={DemoImage} alt="demo image" />
      </div> */}

      {/* <div className="mb-4">
        <h2 className="text-center mb-2">CONTAINER</h2>
        <Image src={DemoImage} alt="demo image" />
      </div> */}

      {/* <div className="mb-4 w-96 mx-auto">
        <h2 className="text-center mb-2">COLUMNS</h2>
        <ul>
          {Array(12).fill("Item").map((value,index) => {
            return (
              <li><p>{value}-{index+1}</p></li>
            )
          })}
        </ul>
      </div> */}

      {/* <div className="mb-4">
        <h2 className="text-center mb-2">DISPLAY</h2>
        <div className=" bg-slate-200 ">
          <p className="bg-blue-400 text-black w-32">Item 1</p>
          <p className="bg-green-400 text-black w-32">Item 2</p>
          <p className="bg-red-400 text-black w-32">Item 3</p>
          <p className="bg-blue-400 text-black w-32">Item 4</p>
          <p className="bg-green-400 text-black w-32">Item 5</p>
          <p className="bg-red-400 text-black w-32">Item 6</p>
        </div>
      </div> */}

      {/* <div className="mb-4 w-60 mx-auto">
        <h2 className="text-center mb-2">OBJECT FIT</h2>
        <Image className="h-80"src={DemoImage} alt="demo image" />
      </div> */}

      {/* <div className="mb-4 w-60 mx-auto">
        <h2 className="text-center mb-2">OVERFLOW</h2>
        <p className="bg-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fugit, maxime quaerat sint, inventore quisquam nisi voluptatum unde temporibus, atque modi incidunt. Praesentium consequatur quasi molestias sapiente dignissimos repudiandae veritatis!</p>
      </div> */}

      {/* <div className="mb-4 w-60 mx-auto">
        <h2 className="text-center mb-2">POSITION</h2>
        <div className="w-10 h-10 bg-red-300"></div>
        <div className="w-10 h-10 bg-blue-300"></div>
      </div> */}
    </>
  );
};

export default Layout;
