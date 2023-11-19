"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useLang } from "./LangProvider";
import { QUESTIONS } from "@/constants";

const Accordion = () => {
  let activeQuestion = 1;
  let tmpSet:any = [];

  const setActiveQuestion = (id:any) => {
    
    let allClosed:any = document.querySelectorAll(".allClosed");
    let closed:any = document.querySelector("#closed" + id);

    let allOpend:any = document.querySelectorAll(".allOpend");
    let opend:any = document.querySelector("#opend" + id);

    let allaccor:any = document.querySelectorAll(".acorAll");
    let opeaccor:any = document.querySelector("#acor" + id);

    tmpSet[id + 'cl'] = closed.style.display;
    tmpSet[id + 'op'] = opend.style.display;

    allaccor.forEach((o:any) => {o.style.display = 'none' });
    allClosed.forEach((o:any) => {o.style.display = 'none' });
    allOpend.forEach((o:any) => {o.style.display = 'block' });

    if(tmpSet[id + 'cl'] == "none"){
      opend.style.display = 'none';
      closed.style.display = 'block';
      opeaccor.style.display = 'block';
    }

    activeQuestion = id;
  }


  const { getLang } = useLang();
  return getLang.then((lang:any) => {

  return (
    <div className="flex justify-center items-center">
      <div className="m-auto max-w-[1400px] bg-gray-300 p-5 rounded-lg shadow-md xl:p-28 xl:w-[89%] xl:mt-20" style={{width: '100%'}}>
        <h1 className="text-2xl mb-6 font-semibold">
          {lang("accordionTitle")}
        </h1> 
        {QUESTIONS.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
              onClick={() =>
                setActiveQuestion(q.id)
              }
            >
              {lang(q.key + ".question")}
              
              <span id={'closed' + q.id} style={{display:  activeQuestion === q.id ? 'block' :'none'}} className="allClosed">
                <FaMinusCircle />
              </span> 
                
              <span  id={'opend' + q.id} style={{display:  activeQuestion !== q.id ? 'block' :'none'}} className="allOpend">
                 <FaPlusCircle />
              </span>
              
            </button>
            <div id={'acor' + q.id} className="acorAll" style={{display:  activeQuestion === q.id ? 'block' :'none'}}>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600 ml-4 text-lg flex flex-col gap-5">
                  <p>{lang(q.key + '.answer')}</p>
                  <ul className="text-black text-base flex flex-col gap-2">
                    {q.child.map((ch) => (<li key={`${q.key}-${ch}`} className="rounded-lg font-bold">{lang(q.key + '.' + ch)}</li>))}
                  </ul>
                  <p className="text-lg text-black">{lang(q.key + '.answer2')}</p>
                </motion.div>
            </AnimatePresence>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
})
};

export default Accordion;