// @flow
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";

export const ResetPassword = () => {
  const [disabled, isdisabled] = React.useState(true);
  const [passwordInput, isPasswordInput] = React.useState("");
  const [c_password, isC_password] = React.useState("");

  React.useEffect(() => {
    if (c_password !== "" && passwordInput !== "") {
      isdisabled(false);
    } else {
      isdisabled(true);
    }
  }, [c_password, passwordInput]);

  const navigate = useNavigate();

  const Submit = () => {
    navigate("/auth");
  };

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
        className="h-full w-full flex px-10  items-center lg:px-20 2xl:px-40 "
      >
        <div className="flex flex-col gap-6 justify-center  h-full  w-full">
          <h1 className="text-gray-500 md:text-5xl text-3xl font-bold">
            Set new password
          </h1>
          <div className=" w-full">
            <Textfield
              placeholder={"********"}
              type={"password"}
              labal={"New password"}
              onChange={(e) => isPasswordInput(e.target.value)}
              value={passwordInput}
            />
          </div>
          <div className=" w-full">
            <Textfield
              placeholder={"********"}
              type={"password"}
              labal={"Confirm password"}
              onChange={(e) => isC_password(e.target.value)}
              value={c_password}
            />
          </div>

          <div className="flex justify-center w-full">
            <Button
              onClick={Submit}
              variant="contained"
              isBtnDisabled={disabled}
            >
              Submit
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
