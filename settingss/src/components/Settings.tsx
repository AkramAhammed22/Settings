"use client";
import CustomSelect from "./Dropdown";
import React, { useState } from "react";
import {Allowedit,Confirmbefore,Display,Questionnavigation,Saveandcontinuelater,handleSelect,options,} from "./Settingsdata/Functions";
import MyDatePicker from "./Calenderbutton";
const Settings: React.FC = () => {
  return (
    <>
      {/* Quiz name */}
      <section className="font-[comfortaa] p-8">
        <div>
          <p className="font-semibold text-[18px]">Quiz name</p>
          <input
            className="border-2 mt-1 h-12 xl:w-[76rem] lg:w-[60rem] md:w-[40rem] sm:w-[25rem] rounded-lg outline-none ps-5 text-[18px]" type="text"placeholder="General Knowledge Test"/>
        {/*Display  */}
          <p className="pt-2 font-semibold text-[18px]">Display</p>
          <div className="pt-1 grid lg:grid-cols-6 md:grid-cols-3">
            {Display.map(({ id, name }) => (
              <div className="flex">
                <input className="w-[18px] h-[18px]" type="checkbox" key={id} />
                <p className="ps-2 text-[#333333]  text-[18px]">{name}</p>
              </div>
            ))}
          </div>
{/*Save and continue later  */}
        <p className="pt-2 font-semibold text-[18px]">Save and continue later</p>
          <div className="sm:flex pt-1 gap-16">
            {Saveandcontinuelater.map(({ id, name }) => (
              <div className="flex">
                <input className="w-[18px] h-[18px]" type="checkbox" key={id} />
                <p className="ps-2 text-[#555555]">{name}</p>
              </div>
            ))}
          </div>
          <p className="pt-3 text-[#555555] text-[14px]">Respondents will have the option to return and complete the quiz at a later time.</p>
          <p className="text-[#555555] text-[14px]">After clicking save and continue the quiz taker will be allowed to request an email containing the quiz link</p>
        {/* Time limit */}
        <p className="pt-2 font-semibold text-[18px]">Time limit</p>
          <div className="flex mt-1">
            <div><input className="w-[18px] h-[18px]" type="checkbox" /></div>
            <div><input className="w-20 rounded-lg border-2 outline-none ps-3 pe-2 ms-5 p-5" type="text" placeholder="hh:mm"/></div>
          </div>
          <p className="pt-2 text-[#555555] text-[14px]">Respondents will only have the set time to complete the whole quiz.The time limit is entered in the format hours:minutes (hh:mm)</p>
        {/*Page time limits*/}
        <p className="pt-2 font-semibold text-[18px]">Page time limits</p>
          <div className="flex mt-1"><div><input className="w-[18px] h-[18px]" type="checkbox" /></div>
            <div><a href="#"><button className="w-40 rounded-lg border-2 outline-none ps-4 pe-3 ms-5 p-3 bg-[#0364FF] text-white"type="button">Set time limits</button></a></div>
          </div>
          <p className="pt-2 text-[#555555] text-[14px]">Set individual time limits for each page within your quiz</p>
         {/* Randomize question */}

          <p className="pt-2 font-semibold text-[18px]">Randomize questions</p>
          <div className="sm:flex">
            <div className="flex">
              <div>
                <input className="w-[18px] h-[18px]" type="checkbox" />
              </div>
              <div className="ms-5">
                <CustomSelect options={options} onSelect={handleSelect} />
              </div>
            </div>
            <div>
              <div className="sm:flex">
                <p className="ms-6 pt-2 text-[#B26767]">Include</p>
                <input
                  className="w-20 ms-3 ps-7 pe-5 border-2 rounded-lg outline-none"
                  type="text"
                  placeholder="all"
                />
                <p className="pt-2 ms-3 text-[#B26767]">questions</p>
              </div>
            </div>
          </div>
          <p className="pt-2 text-[#555555] text-[14px]">
            Questions will be displayed in a random order to each respondent.
            You can also set the total number of questions to be asked or leave
            blank to show all questions
          </p>

          {/* Auto number questions */}

          <p className="pt-2 font-semibold text-[18px]">
            Auto number questions
          </p>
          <input className="mt-1 w-[18px] h-[18px]" type="checkbox" />
          <p className=" text-[#555555] text-[14px]">
            A sequential number will be automatically added to the start of each
            question
          </p>

          {/* Question bookmarks */}

          <p className="pt-1 font-semibold text-[18px]">Question bookmarks</p>
          <input className="pt-1 w-[18px] h-[18px]" type="checkbox" />
          <p className="text-[#555555] text-[14px]">
            Respondents can bookmark questions during the test
          </p>

          {/* Questions per page */}

          <p className="pt-2 font-semibold text-[18px]">Questions per page</p>
          <div className="flex pt-1">
            <div>
              <input className="w-[18px] h-[18px]" type="checkbox" />
            </div>
            <div className="flex">
              <input
                className="w-20 ms-4 ps-7 pe-5 p-3 border-2 rounded-lg outline-none"
                type="text"
                placeholder="all"
              />
              <p className="pt-3 ps-4 text-[#B26767]">questions</p>
            </div>
          </div>
          <p className="pt-1 text-[#555555] text-[14px]">
            If selected this will override the page setup on the Create screen
            so that when the quiz is taken each page will contain the set number
            of questions.
          </p>

          {/* Maximum quiz attempts */}

          <p className="pt-2 font-semibold text-[18px]">
            Maximum quiz attempts
          </p>
          <div className="sm:flex">
            <input
              className="w-20 ms-3 mt-2 ps-9 pe-8 p-3 border-2 rounded-lg outline-none"
              type="text"
              placeholder="all"
            />
            <input className="ms-3 mt-3 w-[18px] h-[18px]" type="checkbox" />
            <p className="text-[#B26767] pt-6 ps-4">
              can only retake if fail quiz
            </p>
          </div>
          <p className="pt-1 text-[#555555] text-[14px]">
            If set to greater than 1 then respondents will be able take the quiz
            up to the value set. Leave blank to allow respondents to take the
            quiz unlimited times.
          </p>

          {/* Use browser attempts tracker */}

          <p className="pt-2 font-semibold text-[18px]">
            Use browser attempts tracker
          </p>
          <input
            className="mt-1 w-[18px] h-[18px]"
            type="checkbox"
            name=""
            id=""
          />
          <p className="pt-1 text-[#555555] text-[14px]">
            A respondent will only be able to complete your quiz the specified
            number of times from the same devices browser (such as PC, laptop,
            tablet, phone).
          </p>
          <p className="text-[#555555] text-[14px]">
            This option only applies to quizzes published using the Quiz Link
            type.
          </p>

          {/* Redirect on quiz completion */}

          <p className="pt-2 font-semibold text-[18px]">
            Redirect on quiz completion
          </p>
          <div className="sm:flex ">
            <div className="flex">
              <div>
                <input className="w-[18px] h-[18px]" type="checkbox" />
              </div>
              <div className="ms-5">
                <CustomSelect options={options} onSelect={handleSelect} />
              </div>
            </div>
            <div>
              <input
                className="border-2 h-12 xl:w-[63rem] lg:w-[48rem] md:w-[30rem] sm:w-[25rem]  w-48 rounded-lg outline-none ps-5 ms-4 inputed"
                type="text"
                placeholder="URL"
              />
            </div>
          </div>
          <p className="pt-1 text-[#555555] text-[14px]">
            After completing the quiz respondents can be redirected to a
            specific URL or another quiz, any registration details will be
            automatically passed to the new quiz.
          </p>
          <p className="text-[#555555] text-[14px]">
            You can also configure redirection based on the grade achieved
            within the{" "}
            <a className="text-[#0364FF] text-[14px]" href="#">
              Grading
            </a>{" "}
            tab.
          </p>

          {/* Schedule */}

          <p className="pt-2 font-semibold text-[18px]">Schedule</p>

          <div className="flex">
            <div>
              <input
                className="mt-1 w-[18px] h-[18px]"
                type="checkbox"
                name=""
                id=""
              />
            </div>
            <div className="sm:flex">
              <div className="lg:flex">
                <p className="pt-4 ms-4 text-[#333333]">From</p>
                <MyDatePicker />
                
              </div>
            </div>
          </div>
          <p className="pt-2 text-[#555555] text-[14px]">
            Set a schedule for when your quiz will automatically open and then
            close based on the timezone for your account.
          </p>
          <p className="text-[#555555] text-[14px]">
            {" "}
            Your current time zone is (GMT-07:00) Mountain Time (US & Canada) -
            you can change this on the{" "}
            <a className="text-[#0364FF] text-[14px]" href="">
              Settings Page
            </a>
          </p>

          {/* Users schedule */}

          <p className="pt-2 font-semibold text-[18px]">Users schedule</p>
          <div className="flex pt-1">
            <input className="w-[18px] h-[18px]" type="checkbox" />
            <input
              className="w-36 rounded-lg border-2 outline-none ps-4 pe-3 ms-5 p-3"
              type="text"
              placeholder="Unlimited"
            ></input>
            <p className="pt-4 ps-4 text-[#B26767]">days</p>
          </div>
          <p className="pt-1 text-[#555555] text-[14px]">
            Set the number of days that each user can access the quiz. The users
            schedule starts from the time a quiz is assigned to the user.
          </p>

          {/* Question layout and Navigation bar position */}

          {Questionnavigation.map(({ id, title, paragraph }) => (
            <div key={id}>
              <p className="pt-2 font-semibold text-[18px]">{title}</p>
              <div className="flex mt-1">
                <div className="ms-5">
                  <CustomSelect options={options} onSelect={handleSelect} />
                </div>
              </div>
              <p className="pt-1 text-[#555555] text-[14px]">{paragraph}</p>
            </div>
          ))}

          {/* Allow edit commands */}

          <p className="pt-2 font-semibold text-[18px]">Allow edit commands</p>
          <div className="md:flex pt-1 gap-14">
            {Allowedit.map(({ id, name }) => (
              <div className="flex">
                <input className="w-[18px] h-[18px]" key={id} type="checkbox" />
                <p className="ms-2 text-[#555555]">{name}</p>
              </div>
            ))}
          </div>

          {/* Allow previous page navigation */}

          <p className="pt-2 font-semibold text-[18px]">
            Allow previous page navigation
          </p>
          <input className="mt-1 w-[18px] h-[18px]" type="checkbox" />
          <p className="pt-1 text-[#555555] text-[14px]">
            If selected respondents can navigate backwards and forwards between
            the pages in your quiz.
          </p>

          {/* Confirm before */}

          <p className="pt-2 font-semibold text-[18px]">Confirm before</p>
          <div className="sm:flex gap-9">
            {Confirmbefore.map(({ name }) => (
              <div className="flex pt-3 pb-4">
                <input className="w-[18px] h-[18px]" type="checkbox" />
                <p className="ps-2 text-[#555555]">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
