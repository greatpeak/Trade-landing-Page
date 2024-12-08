import AnchorLink from "react-anchor-link-smooth-scroll";

interface PropsLink {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

export default function Links({
  page,
  selectedPage,
  setSelectedPage,
}: PropsLink) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-[#34EBE1] border-[#34EBE1]" 
          : "text-white"
      } transition duration-500 hover:text-[#34EBE1] text-xl font-medium`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}
