// components/magicui/IconCloudDemo.tsx

'use client';

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "html5", "css3", "javascript", "typescript", "react", "java",
  "nodedotjs", "express", "nextdotjs", "postgresql", "mongodb",
  "linux", "redux", "postman", "visualstudiocode", "prisma",
  "git", "github", "mysql", "docker",

  // Duplicates to add more density
   "html5", "css3", "javascript", "typescript", "react", "java",
  "nodedotjs", "express", "nextdotjs", "postgresql", "mongodb",
  "linux", "redux", "postman", "visualstudiocode", "prisma",
  "git", "github", "mysql", "docker",

];


export default function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden py-10">
      <IconCloud images={images} />
    </div>
  );
}
