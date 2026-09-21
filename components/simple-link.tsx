import React from "react";

type SimpleLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function SimpleLink({
  href,
  children,
  ...props
}: SimpleLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}