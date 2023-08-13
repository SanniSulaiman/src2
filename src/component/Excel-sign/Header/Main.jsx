import React from "react";

export const Main = () => {
  return (
    <div
        action="get"
        className="bg-slate-200" 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <form
        action="get"
        // className="bg-gradient-to-r from-gray-500 to-cyan-500 w-[40rem] h-[30rem] text-[black] grid text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <label htmlFor="firstname" className="text-dark font-semibold text-center">
          FIRST NAME
        </label>
        <input type="text" className="rounded-[0.5rem] w-[20rem] h-[3rem] pr-[1rem]" />

        <label htmlFor="lastname" className="text-dark font-semibold">
          LAST NAME
        </label>
        <input type="text" className="rounded-[0.5rem] w-[20rem] h-[3rem] pr-[1rem]" />

        <label htmlFor="Course" className="text-dark font-semibold">
        COURSES
        </label>
        <input type="text" className="rounded-[0.5rem] w-[20rem] h-[3rem] pr-[1rem]" />

        <label htmlFor="Password" className="text-dark font-semibold">
          PASSWORD
        </label>
        <input type="text" className="rounded-[0.5rem] w-[20rem] h-[3rem] pr-[1rem]" />

        <label htmlFor="confirm password" className="text-dark font-semibold">
          CONFIRM PASSWORD
        </label>
        <input type="text" className="rounded-[0.5rem] w-[20rem] h-[3rem] pr-[1rem]" />

        <button className="w-[20rem] bg-[green] rounded-[0.5rem] pr-[2rem]">Create Account</button>

        <i>By continuing you indicate that you read and agreed to the Terms of use</i>
      </form>
    </div>
  );
};
