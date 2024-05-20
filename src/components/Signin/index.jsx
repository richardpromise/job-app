import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";

export default function Signin() {
  // page navigator
  const navigate = useNavigate();

  const [persuade, isPersuade] = React.useState("text-purple-500 md:pl-4");

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = React.useState("");
  const [passswordErrorMsg, setPasswordErrorMsg] = React.useState("");
  const [passwordError, setPaswordError] = React.useState(false);

  // get form values
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    setBtnDisabled(!(email !== "" && passsword !== ""));
  }, [email, passsword]);

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
        className="h-screen w-full flex px-10  items-center lg:px-20 2xl:px-40 "
      >
        <div className=" flex flex-col gap-3  justify-center  h-full w-full">
          {/* tittle */}
          <h1 className="text-gray-500 text-5xl font-bold">Log in</h1>

          <p className="pb-10">
            Dont have an account?
            <span>
              <Link to={"/auth/register"} className={` pl-2  ${persuade}`}>
                Create your account
              </Link>
            </span>
          </p>

          {/* form */}
          <form className="w-full  relative">
            <div className="flex flex-col items-center gap-10 w-full ">
              {/* email */}
              <Textfield
                labal={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type={"email"}
                value={email}
                placeholder={"email@domain.com"}
                msg={emailErrorMsg}
                labelStyle={"text-[14px] text-[#5C5959] font-[400] w-full"}
                error={emailError}
              />

              {/* password */}
              <Textfield
                labal={"Password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={"password"}
                value={passsword}
                placeholder={"Password"}
                msg={passswordErrorMsg}
                labelStyle={"text-[14px] text-[#5C5959] font-[400] w-full"}
                error={passwordError}
              />

              {/* extra */}
              <div className="flex justify-between items-center w-full">
                <div>
                  <input type="checkbox" className="text-purple-900 mr-2" />{" "}
                  <span className="text-grey-500">Remember me</span>
                </div>
                <Link
                  to={"/auth/forgotten-password"}
                  className="text-purple-500"
                >
                  Forgot password?
                </Link>
              </div>

              {/* submit */}
              <div className="w-full">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    // validate();
                    navigate("/");
                  }}
                  isBtnDisabled={btnDisabled}
                  type="submit"
                  variant="contained"
                  size="fullwidth"
                >
                  Log in
                </Button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
