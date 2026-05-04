import { Bone, Activity, TrendingUp, Droplets, Syringe, HeartPlus, CigaretteIcon } from "lucide-react";

const IconMap = {
  Bone: (props) => <Bone {...props} />,
  Activity: (props) => <Activity {...props} />,
  TrendingUp: (props) => <TrendingUp {...props} />,
  Droplets: (props) => <Droplets {...props} />,
  Syringe: (props) => <Syringe {...props} />,
  HeartPlus: (props) => <HeartPlus {...props} />,
  Cigarette: (props) => <CigaretteIcon {...props} />,
  Sport: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="5" r="2" />
      <path d="M8 14h8M10 22v-4l2-2 2 4" />
      <path d="M10 8l-2 6h8l-2-6" />
    </svg>
  ),
};

export const renderIcon = (name, className = "text-[#0B5D3B] w-6 h-6") => {
  const Comp = IconMap[name];
  return Comp ? <Comp className={className} /> : null;
};
