/* eslint-disable no-useless-escape */
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import React, { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();

  // get input fields
  const [fullname, updatefullname] = React.useState("");

  const [email, updateEmail] = React.useState("");
  const [password, updatePassword] = React.useState("");

  // show error message
  const [FullnameError, isfullnameError] = React.useState(false);
  const [fullNameErrorMsg, setFullNameErrorMsg] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showErrorEmail, setShowErrorEmail] = React.useState(false);
  const [passswordError, setPassswordError] = React.useState("");
  const [showErrorPassword, setShowErrorPassword] = React.useState(false);

  // button handler
  const [btnDisabled, btnEnabled] = React.useState(true);

  // Form validation
  const validate = () => {
    const userInfo = {
      userFullName: "",
      userEmail: "",
      userPasEsword: "",
    };

    // fullname  Validation
    if (fullname.length < 4) {
      isfullnameError(true);
      setFullNameErrorMsg("Full name is required");
      userInfo.userFullName = "";
    } else {
      isfullnameError(false);
      userInfo.userFullName = fullname;
    }

    // Email regex
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regEmail.test(email)) {
      setEmailError("Email must be valid");
      setShowErrorEmail(true);
    } else {
      setEmailError("");
      userInfo.userEmail = email;
      setShowErrorEmail(false);
    }

    // Password validation
    let regPassword = /^(?=.*\d).{6,}$/;
    if (!regPassword.test(password)) {
      setPassswordError("Password must a number and atleast 6 characters");
      setShowErrorPassword(true);
    } else {
      setPassswordError("");
      userInfo.userPasEsword = password;
      setShowErrorPassword(false);
    }

    // Save to localstorage
    let formDetails;
    if (localStorage.getItem("formDetails") === null) {
      formDetails = [];
    } else {
      formDetails = JSON.parse(localStorage.getItem("formDetails"));
    }

    if (
      userInfo.userEmail !== "" &&
      userInfo.userPasEsword !== "" &&
      userInfo.userFullName !== ""
    ) {
      // formDetails.push(userInfo);
      // localStorage.setItem("formDetails", JSON.stringify(formDetails));
      // navigate("/auth");
      console.log(userInfo);
    }
  };

  // monitor input
  useEffect(() => {
    if (fullname !== "" && email !== "" && password !== "") {
      btnEnabled(false);
    } else {
      btnEnabled(true);
    }
  }, [fullname, email, password]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1, opacity: 0, x: -100, y: 0 }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
          x: 100,
          y: -20,
        }}
        className="h-screen w-full flex relative px-10 items-center md:px-20 lg:px-20 2xl:px-40  "
      >
        <div className=" flex flex-col gap-3 justify-center h-full w-full">
          {/* tittle */}
          <h1 className="text-gray-500 text-5xl md:text-left font-bold ">
            Register
          </h1>
          <div className="flex justify-end items-end">
            <p className="pb-5 font-semibold text-gray-500">
              Provide your details
            </p>
          </div>

          {/* form */}
          <form className="w-full relative ">
            <div className="flex flex-col items-center gap-5 w-full ">
              {/* first name */}
              <Textfield
                type={"text"}
                labal={"Full name"}
                placeholder={"John Doe"}
                value={fullname}
                onChange={(e) => {
                  updatefullname(e.target.value);
                }}
                msg={fullNameErrorMsg}
                error={FullnameError}
                labelStyle={"text-[14px] text-[#5C5959] font-[400] w-full"}
              />

              {/* email */}
              <Textfield
                type={"email"}
                labal={"Email"}
                placeholder={"user@domain.com"}
                value={email}
                onChange={(e) => {
                  updateEmail(e.target.value);
                }}
                msg={emailError}
                error={showErrorEmail}
                labelStyle={"text-[14px] text-[#5C5959] font-[400] w-full"}
              />

              {/* password */}
              <Textfield
                type={"password"}
                labal={"Password"}
                placeholder={"*****"}
                value={password}
                msg={passswordError}
                error={showErrorPassword}
                onChange={(e) => {
                  updatePassword(e.target.value);
                }}
                labelStyle={"text-[14px] text-[#5C5959] font-[400] w-full"}
              />

              {/* Already have an account? */}
              <div className="flex justify-start items-start  w-full">
                <p className="pb-5">
                  Already have an account?{" "}
                  <span>
                    <Link to={"/auth"} className="text-purple-500">
                      Login
                    </Link>
                  </span>
                </p>
              </div>

              {/* submit */}
              <div className="flex justify-center w-full">
                <Button
                  onClick={(e) => {
                    validate();
                    e.preventDefault();
                  }}
                  isBtnDisabled={btnDisabled}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
