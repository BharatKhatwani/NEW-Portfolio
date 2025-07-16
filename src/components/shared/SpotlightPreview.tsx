
import { Spotlight } from "../ui/spotlight";


export default function SpotlightBackground() {
  return (
    <div className="dark:block hidden absolute inset-0 z-0 pointer-events-none">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
    </div>
  );
}
