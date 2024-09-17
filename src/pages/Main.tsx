import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Button, Image } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  const routeChange = () => {
    const path = `/page1`;
    navigate(path);
  };
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <div
          style={{
            display: "flex",
            gap: 8,
            top: "150px",
            position: "absolute"
          }}
        >
          <Image alt="ATT" src="../src/assets/att.svg" className="logo" />
          <Image alt="Apple" src="../src/assets/apple.svg" className="logo" />
          <Image alt="BAC" src="../src/assets/bac.png" className="logo" />
          <Image
            alt="Lululemon"
            src="../src/assets/lululemon.png"
            className="logo"
          />
          <Image
            alt="Microsoft"
            src="../src/assets/microsoft.png"
            className="logo"
          />
          <Image alt="Nike" src="../src/assets/nike.svg" className="logo" />
        </div>
        <p className="getStarted">Get Started</p>
        <p className="welcome">
          Welcome to the Unified Support App. Simply click "New Issue" to get
          started
        </p>
        <Button
          shape="circular"
          size="large"
          icon={<AddRegular />}
          className="btnNewIssue"
          onClick={routeChange}
        >
          New Issue
        </Button>
      </div>
    </FluentProvider>
  );
}

export default Main;
