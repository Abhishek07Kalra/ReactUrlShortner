import "./inputBar.css";
import { useRef } from "react";
import axios from "./axios";
import firebase from "firebase";
import logo from "./LogoMakr-2gRYkr.png";
import Switch from "react-switch";
import { useState } from "react";
import { auth } from "./firebase.js";
import domtoimage from "dom-to-image";
import publicIp from "public-ip";
import QRCode from "react-qr-code";

function InputBar() {
  const container = useRef(null);
  const [data, setdata] = useState("");
  const [showqr, setqr] = useState(false);
  const [copy, setcopy] = useState("Copy");
  const [inputValue, setinput] = useState("");
  const [shortValue, setShortValue] = useState("");
  const [SwitchInput, setSwitch] = useState(0);
  const [checkbox, setCheckBox] = useState(1);

  async function click() {
    const protocol = await publicIp.v4();
    if (
      inputValue === "" ||
      (!inputValue.includes(".") && !inputValue.includes("url"))
    ) {
      alert("Invalid Input");
      return;
    }
    setdata("Please Wait...");
    axios
      .post("/addurl", {
        originalUrl: inputValue,
        custom: SwitchInput,
        short: SwitchInput ? shortValue : null,
        one: checkbox,
        userip: protocol,
        user: auth.currentUser.email ? auth.currentUser.email : "anonymous",
        date: firebase.firestore.Timestamp.now().toDate().toString(),
      })
      .then((response) => {
        setdata(response.data);
        setShortValue("");
        if (
          response.data === "Some Error Occurs" ||
          response.data === "short id already in use"
        ) {
          setTimeout(() => {
            setdata("");
          } , 5000)
          return;
        }
        setinput("");
        setSwitch(0);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const copylink = () => {
    var textField = document.createElement("textarea");
    textField.innerText = data;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setcopy("Copied");
    setTimeout(() => {
      setcopy("Copy");
      setinput("");
      setShortValue("");
    }, 3000);
  };

  const screen = () => {
    if (container.current == null) {
      console.log("null");
      return;
    }
    domtoimage
      .toPng(container.current)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "download.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        //console.error("oops, something went wrong!", error);
      });
  };

  function logout() {
    auth.signOut();
  }

  const toggleqr = () => {
    setqr(!showqr);
    setdata("");
  };
  return (
    <div className="app">
      <div className="navbar">
        <div>
          <img src={logo} alt="img here"></img>
        </div>

        <button className="logout" onClick={logout}>
          {auth.currentUser
            ? auth.currentUser.email
              ? "Logout"
              : "Sign In"
            : "Sign In"}
        </button>
      </div>

      {showqr ? (
        <div>
          <center>
            <div className="qrcode">
              <h4 id="closeButton" value="X" onClick={toggleqr}>
                X
              </h4>
              <div className={"qrdata"} ref={container}>
                <center>
                  <QRCode
                    value={data}
                    size="200"
                    fgColor="#adff2f"
                    bgColor="black"
                  />
                </center>
              </div>
            </div>
          </center>
          <br />
          <div>
            <center>
              <button onClick={screen}>Download</button>
            </center>
          </div>
        </div>
      ) : (
        <div className="hello">
          <center>
            <input
              type="text"
              className="inputbar"
              alt="can't display"
              placeholder="Enter Your Link Here"
              value={inputValue}
              onKeyDown={(e) => (e.key === "Enter" ? click() : 1)}
              onChange={(e) => setinput(e.target.value)}
            />
            <br />
            <br />
            <Switch
              className={"switch"}
              onChange={() => setSwitch(1 - SwitchInput)}
              checked={SwitchInput}
              onColor={"#adff2f"}
              checkedIcon={false}
              uncheckedIcon={false}
              activeBoxShadow={"0 0 2px 3px white"}
            />
            <span className="Switchtext">Enable it for custom short id</span>
            <br />
            {SwitchInput ? (
              <input
                type="text"
                className="inputbarid"
                alt="can't display"
                placeholder="Enter Your short id"
                value={shortValue}
                onKeyDown={(e) => (e.key === "Enter" ? click() : 1)}
                onChange={(e) => setShortValue(e.target.value)}
              />
            ) : (
              <div></div>
            )}
            <br />
            {!SwitchInput ? <div></div> : <br />}
            <button onClick={click}>Create</button>
            <br />
            <br />
            <h6 className="autodelete">
              <span style={{ color: "white" }}>Delete After 24 Hours</span>
              &nbsp;&nbsp;&nbsp;
              <input
                className="checkbox"
                type="checkbox"
                checked={checkbox}
                onChange={() => setCheckBox(1 - checkbox)}
              />
            </h6>
            <br />
            <br />
            <p className="url" id="link">
              {data}
            </p>
            <br />
            {data &&
            data !== "Please Wait..." &&
            data !== "Some Error Occurs" &&
            data !== "short id already in use" ? (
              <div>
                <button
                  className="copybut text-center"
                  onClick={copylink}
                  style={{ width: "80px", marginTop: "-10px" }}
                >
                  {copy}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="copybut text-center"
                  onClick={toggleqr}
                  style={{ width: "80px", marginTop: "-10px" }}
                >
                  Qrcode
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </center>
        </div>
      )}
    </div>
  );
}
export default InputBar;
