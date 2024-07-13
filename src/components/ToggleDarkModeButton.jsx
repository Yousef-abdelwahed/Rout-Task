import { IconButton, useColorMode } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
  <div className="fixed">  <IconButton
  icon={<FontAwesomeIcon icon={isDark ? faSun : faMoon} />}
  onClick={toggleColorMode}
/></div>
  );
};

export default ToggleDarkModeButton;
