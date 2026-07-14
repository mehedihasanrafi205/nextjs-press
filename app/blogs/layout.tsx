import React from "react";

const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Blogs Layout is Special only for Blogs Route or nested route inside the
      blogs directory
      {children}
    </div>
  );
};

export default BlogsLayout;
