"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useLang } from "./LangProvider";
import { QUESTIONS } from "@/constants";

const Accordion = () => {
  const { lang } = useLang();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(
    QUESTIONS[0].id // Set the initial state to the ID of the first question
  );

  return (
    <div className="flex justify-center items-center">
      <div className="m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md xl:p-28 xl:w-[89%] ">
        <h1 className="text-2xl mb-6 font-semibold">
          {lang["accordionTitle"]}
        </h1>
        {QUESTIONS.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion((prev) => (prev === q.id ? null : q.id))
              }
            >
              {lang[q.key].question}
              {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4 text-lg flex flex-col gap-5"
                >
                  <p>{lang[q.key].answer}</p>
                  <ul className="text-black text-base flex flex-col gap-2">
                    <li key={`${q.key}-first`} className="rounded-lg bg-green-200">{lang[q.key].first}</li>
                    <li key={`${q.key}-second`} className="rounded-lg bg-green-200">{lang[q.key].second}</li>
                    <li key={`${q.key}-third`} className="rounded-lg bg-green-200">{lang[q.key].third}</li>
                    <li key={`${q.key}-fourth`} className="rounded-lg bg-green-200">{lang[q.key].fourth}</li>
                    <li key={`${q.key}-fifth`} className="rounded-lg bg-green-200">{lang[q.key].fifth}</li>
                    <li key={`${q.key}-sixth`} className="rounded-lg bg-green-200">{lang[q.key].sixth}</li>
                    <li key={`${q.key}-seventh`} className="rounded-lg bg-green-200">{lang[q.key].seventh}</li>
                    <li key={`${q.key}-eighth`} className="rounded-lg bg-green-200">{lang[q.key].eighth}</li>
                    <li key={`${q.key}-ninth`} className="rounded-lg bg-green-200">{lang[q.key].ninth}</li>
                    <li key={`${q.key}-tenth`} className="rounded-lg bg-green-200">{lang[q.key].tenth}</li>
                  </ul>
                  <p className="text-lg text-black">{lang[q.key].answer2}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;