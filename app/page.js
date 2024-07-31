"use client";
import { useState } from "react";

// const [name, setName] = useState("");

export default function Home() {
  function handleclick(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    const formData = {
      name: e.target[0].value,
      age: e.target[1].value,
      bmi: e.target[2].value,
      gender: e.target[3].value,
      hypertensive: e.target[4].value,
      heart: e.target[5].value,
      marriage: e.target[6].value,
      work: e.target[7].value,
      smoking: e.target[8].value,
      residence: e.target[9].value,
    };
    console.log(formData);
  }

  return (
    <div class="p-56 gap-10 flex flex-col items-center pt-4 ">
      <h1 class="text-4xl font-extrabold"> Stroke Prediction Model (v0.0)</h1>
      <div class="flex flex-col gap-1 items-center">
        <p>By Ikechukwu Ugbo and Komolafe Olatomiwa</p>
        <p>Group D 2k21</p>
      </div>
      <form onSubmit={handleclick} class=" flex flex-col">
        <div class="flex flex-col ">
          {" "}
          <label class="mb-1 text-sm font-normal" htmlFor="name">
            Name
          </label>
          <input
            class={`mb-6 w-full rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            type="text"
            id="name"
            // onChange={onChange}
          />
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="age">
              Age
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="number"
              id="age"
              // onChange={onChange}
            />
          </div>{" "}
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="bmi">
              BMI
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="bmi"
              // onChange={onChange}
            />
          </div>
        </div>
        <div class="flex gap-6">
          {" "}
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="gender">
              Gender
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="gender"
              // onChange={onChange}
            />
          </div>
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="bmi">
              Hypertensive?
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="hypertensive"
              // onChange={onChange}
            />
          </div>
        </div>
        <div class="flex gap-6">
          {" "}
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="bmi">
              Heart Disease?
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="heart"
              // onChange={onChange}
            />
          </div>
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="bmi">
              Ever Married?
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="marriage"
              // onChange={onChange}
            />
          </div>
        </div>
        <div class="flex gap-6">
          {" "}
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="work">
              Work Type
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="work"
              // onChange={onChange}
            />
          </div>
          <div class="flex flex-col ">
            <label class="mb-1 text-sm font-normal" htmlFor="smoking">
              Smoking Status
            </label>
            <input
              class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              type="text"
              id="smoking"
              // onChange={onChange}
            />
          </div>
        </div>
        <div class="flex flex-col ">
          <label class="mb-1 text-sm font-normal" htmlFor="residence">
            Residence Type
          </label>
          <input
            class={`mb-6 w-[250px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            type="text"
            id="residence"
            // onChange={onChange}
          />
        </div>
        <button
          // onClick={handleclick}
          class="block  w-[550px] rounded bg-[#184CA0]	py-3 text-center	font-medium text-white"
        >
          Get Prediction
        </button>
      </form>
    </div>
  );
}
