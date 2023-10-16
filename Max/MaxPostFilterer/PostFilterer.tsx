import { useTheme } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import FlareIcon from "@mui/icons-material/Flare";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LangCode } from "../../src/types";
import { containerCSS } from "./styles";

// type Tags = 'mapping' | 'software' | 'xr' | 'other';

const strings: Record<string, Record<LangCode, string>> = {
  all: {
    en: "All",
    fr: "Tout",
  },
  software: {
    en: "Software",
    fr: "Logiciel",
  },
  other: {
    en: "Others",
    fr: "Divers",
  },
};

interface OwnProps {
  posts: any;
  langCode: LangCode;
  onFilteredPosts: (filteredPosts: any) => void;
}

export default function PostFilterer({
  posts,
  langCode,
  onFilteredPosts,
}: OwnProps) {
  const theme = useTheme();

  const [showMappings, setShowMappings] = useState(false);
  const [showXr, setShowXr] = useState(false);
  const [showSoftware, setShowSoftware] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const handleClickMapping = () => {
    setShowMappings(true);
    setShowXr(false);
    setShowSoftware(false);
    setShowOthers(false);
    setShowAll(false);
  };
  const handleClickXr = () => {
    setShowMappings(false);
    setShowXr(true);
    setShowSoftware(false);
    setShowOthers(false);
    setShowAll(false);
  };
  const handleClickSoftware = () => {
    setShowMappings(false);
    setShowXr(false);
    setShowSoftware(true);
    setShowOthers(false);
    setShowAll(false);
  };
  const handleClickOthers = () => {
    setShowMappings(false);
    setShowXr(false);
    setShowSoftware(false);
    setShowOthers(true);
    setShowAll(false);
  };

  const handleClickAll = () => {
    setShowOthers(false);
    setShowSoftware(false);
    setShowXr(false);
    setShowMappings(false);
    setShowAll(true);
  };

  useEffect(() => {
    let visibleTags: Array<string> = [];
    if (showMappings) visibleTags.push("mapping");
    if (showXr) visibleTags.push("xr");
    if (showSoftware) visibleTags.push("software");
    if (showOthers) visibleTags.push("other");
    if (showAll) visibleTags = ["mapping", "xr", "software", "other"];

    const filtered = posts.filter(
      (post) =>
        visibleTags.filter((visibleTag) =>
          post.node.frontmatter.tags.includes(visibleTag)
        ).length !== 0
    );
    onFilteredPosts(filtered);
  }, [showMappings, showXr, showSoftware, showOthers]);

  return (
    <div css={containerCSS}>
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Chip
          style={{ margin: "1em" }}
          label="Mappings"
          icon={<FlareIcon />}
          onClick={handleClickMapping}
          color={"info"}
          variant={showMappings ? "" : "outlined"}
        ></Chip>
        <Chip
          style={{ margin: "1em" }}
          label="XR"
          icon={<ViewInArIcon />}
          onClick={handleClickXr}
          color={"info"}
          variant={showXr ? "" : "outlined"}
        ></Chip>
        <Chip
          style={{ margin: "1em" }}
          label={strings.software[langCode]}
          icon={<CodeIcon />}
          onClick={handleClickSoftware}
          color={"info"}
          variant={showSoftware ? "" : "outlined"}
        ></Chip>
        <Chip
          style={{ margin: "1em" }}
          label={strings.other[langCode]}
          icon={<MoreHorizIcon />}
          onClick={handleClickOthers}
          color={"info"}
          variant={showOthers ? "" : "outlined"}
        ></Chip>
        <Chip
          style={{ margin: "1em" }}
          label={strings.all[langCode]}
          icon={<FullscreenIcon />}
          onClick={handleClickAll}
          color={"info"}
          variant={showAll ? "" : "outlined"}
        ></Chip>
      </Stack>
    </div>
  );
}
