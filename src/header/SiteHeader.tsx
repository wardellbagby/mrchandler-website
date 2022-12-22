import { Header, Box, Heading, Nav, Button, Layer, Text } from "grommet";
import { SiTwitter as Twitter } from "react-icons/si";
import { MdInfo as AboutIcon } from "react-icons/md";
import React from "react";
import { About } from "./About";
import { getRandomSubtitle } from "./Subtitles";
import { Route, Routes, useNavigate } from "react-router-dom";

export const SiteHeader = () => {
  const subtitle = getRandomSubtitle();
  const goTo = useNavigate();
  return (
    <>
      <Header background={"brand"} pad={"small"}>
        <Box
          direction="row"
          alignSelf="center"
          align="center"
          fill
          pad={{ horizontal: "xlarge", vertical: "medium" }}
        >
          <Box direction={"column"}>
            <Heading level={3} margin={"none"}>
              Mr. Chandler
            </Heading>
            <Box pad={{ vertical: "xsmall" }}>
              <Text style={{ fontStyle: "italic" }}>{subtitle}</Text>
            </Box>
          </Box>
          <Box flex="grow" />
          <Nav direction="row-responsive">
            <Button
              hoverIndicator
              icon={<AboutIcon size={24} />}
              onClick={() => goTo("about")}
              label={"About"}
            />
            <Button
              hoverIndicator
              icon={<Twitter size={24} />}
              label={"Twitter"}
              onClick={() => window.open("https://twitter.com/mrchandlerraps")}
            />
          </Nav>
        </Box>
      </Header>
      <Routes>
        <Route
          path={"about"}
          element={
            <Layer
              onEsc={() => goTo(-1)}
              onClickOutside={() => goTo(-1)}
              background={"#00000000"}
              responsive={false}
            >
              <Box fill alignContent="center">
                <About onClose={() => goTo(-1)} />
              </Box>
            </Layer>
          }
        />
      </Routes>
    </>
  );
};