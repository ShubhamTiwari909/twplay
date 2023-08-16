import { useStore } from "../methods/methods";
import Colors from "./Categories/1-Colors";
import Transforms from "./Categories/10-Transforms";
import Interactivity from "./Categories/11-Interactivity";
import Pseudo from "./Categories/12-Pseudo";
import DaisyUI from "./Categories/13-DaisyUI";
import TypoGraphy from "./Categories/2-TypoGraphy";
import Borders from "./Categories/3-Borders";
import Spacing from "./Categories/4-Spacing";
import Sizing from "./Categories/5-Sizing";
import Layout from "./Categories/6-Layout";
import FlexAndGrid from "./Categories/7-FlexAndGrid";
import Effects from "./Categories/8-Effects";
import Transition from "./Categories/9-Transition";

const ElementView = () => {
  const { tabType } = useStore();

  const components = [
    {
      name:"Colors",
      element:<Colors />
    },
    {
      name:"TypoGraphy",
      element:<TypoGraphy />
    },
    {
      name:"Borders",
      element:<Borders />
    },
    {
      name:"Spacing",
      element:<Spacing />
    },
    {
      name:"Sizing",
      element:<Sizing />
    },
    {
      name:"Layout",
      element:<Layout />
    },
    {
      name:"Flex and Grid",
      element:<FlexAndGrid />
    },
    {
      name:"Effects",
      element:<Effects />
    },
    {
      name:"Transition",
      element:<Transition />
    },
    {
      name:"Transforms",
      element:<Transforms />
    },
    {
      name:"Interactivity",
      element:<Interactivity />
    },
    {
      name:"Pseudo",
      element:<Pseudo />
    },
    {
      name:"DaisyUI",
      element:<DaisyUI />
    },
]

  return (
    <div className="relative w-screen">
      {
        components.filter(item => item.name === tabType).map(item => {
          return (
            <div key={item.name}>{item.element}</div>
          )
        })
      }
    </div>
  );
};

export default ElementView;
