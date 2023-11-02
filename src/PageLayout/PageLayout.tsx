import type { PropsWithChildren } from "react";
import { Navbar, type NavbarProps } from "../Navbar";
import { Footer, type FooterProps } from "../Footer";

interface PageLayoutProps<LangCode extends string> extends PropsWithChildren {
  navbar: NavbarProps<LangCode>;
  footer: FooterProps;
}
export default function PageLayout<LangCode extends string>({
  children,
  footer,
  navbar,
}: PageLayoutProps<LangCode>) {
  return (
    <>
      <Navbar {...navbar} />
      <div>{children}</div>
      <Footer
        css={{
          paddingTop: "3em",
        }}
        {...footer}
      />
    </>
  );
}
