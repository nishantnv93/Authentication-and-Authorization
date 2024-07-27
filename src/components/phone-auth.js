import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase-config";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const sendOTP = () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("Recaptcha solved:", response);
        },
      });
      console.log(phone)
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="phone-signin">
        <div className="phone-content">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone("+" + phone)}
          />
          <Button sx={{ marginTop: "10px" }} variant="contained" onClick={sendOTP}>
            Send OTP
          </Button>
          <div id="recaptcha-container"></div>
        </div>
        <TextField
          sx={{ marginTop: "10px", width: "300px" }}
          variant="outlined"
          size="small"
          label="Enter OTP"
        />
        <br />
        <Button
          sx={{ marginTop: "10px", marginLeft: "90px" }}
          variant="contained"
          color="success"
        >
          Verify OTP
        </Button>
      </div>
    </>
  );
};

export default PhoneAuth;
