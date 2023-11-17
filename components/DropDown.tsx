"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from "./DropDown.module.css"
import { useLang } from './LangProvider';

 interface IOptions {
  label: string;
  image: string;
  value: string;
}

const CustomDropdown = () => {
  const { curLang } = useLang();

  const options = [
    { label: 'EN', image: '/assets/en.png', value:'en'},
    { label: 'KA', image: '/assets/ka.png', value:'ka'},
    { label: 'RU', image: '/assets/ru.png', value:'ru'},
    { label: 'DE', image: '/assets/de.png', value:'de'}
  ];
  
  const defaultOp: IOptions | undefined = options.find((item: any) => item.value === curLang);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: defaultOp?.label || '', 
    image: defaultOp?.image || '',
    value: defaultOp?.value || ''
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);

    window.location.href = window.location.href.replace(curLang,option.value)
  };

  const handleOutsideClick = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  let filteredOptions = options.filter(option => option.label !== selectedOption.label && option.value != curLang);


  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    let option:any = options.filter((item:any) => item.value == curLang)[0];
    setSelectedOption(option);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <div className={styles.custom_dropdown} ref={dropdownRef} id='langsSelect'>
      <div className={styles.dropdown_header} onClick={toggleDropdown}>
        <img src={selectedOption.image} alt={selectedOption.label} className={styles.icon}/> {selectedOption.label}
      </div>
      {isOpen && (
        <ul className={styles.dropdown_list}>
          {filteredOptions.map(option => (
            <li key={option.label} onClick={() => handleOptionClick(option)}>
              <img src={option.image} alt={option.label} /> {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
