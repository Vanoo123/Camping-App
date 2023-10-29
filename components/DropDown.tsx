"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from "./DropDown.module.css"
import { useLang, langs } from "./LangProvider";

const CustomDropdown = () => {
  const { changeLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: 'EN', image: 'en.png' });
  const options = [
    { label: 'EN', image: 'en.png', value:'en'},
    { label: 'KA', image: 'ka.png', value:'ka'},
    // { label: 'Option 3', image: '/path/to/image3.png' }
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
    localStorage.setItem("lang", option.value);
    changeLang(langs(option.value))
  };

  const handleOutsideClick = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const filteredOptions = options.filter(option => option.label !== selectedOption.label);

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

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import styles from "./DropDown.module.css"
// import { useLang, langs } from "./LangProvider";

// const CustomDropdown = () => {
//   const { changeLang } = useLang();
//   const [isOpen, setIsOpen] = useState(false);

//   // Retrieve the selected option from localStorage or use the default
//   const storedOption = JSON.parse(localStorage.getItem("selectedOption") || "null");
//   const [selectedOption, setSelectedOption] = useState(storedOption || { label: 'EN', image: 'en.png' });

//   const options = [
//     { label: 'EN', image: 'en.png', value: 'en' },
//     { label: 'KA', image: 'ka.png', value: 'ka' },
//     // { label: 'Option 3', image: '/path/to/image3.png' }
//   ];

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option:any) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     localStorage.setItem("selectedOption", JSON.stringify(option));
//     localStorage.setItem("lang", option.value);
//     changeLang(langs(option.value))
//   };

//   const handleOutsideClick = (event:any) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   const filteredOptions = options.filter(option => option.label !== selectedOption.label);

//   return (
//     <div className={styles.custom_dropdown} ref={dropdownRef} id='langsSelect'>
//       <div className={styles.dropdown_header} onClick={toggleDropdown}>
//         <img src={selectedOption.image} alt={selectedOption.label} className={styles.icon}/> {selectedOption.label}
//       </div>
//       {isOpen && (
//         <ul className={styles.dropdown_list}>
//           {filteredOptions.map(option => (
//             <li key={option.label} onClick={() => handleOptionClick(option)}>
//               <img src={option.image} alt={option.label} /> {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;