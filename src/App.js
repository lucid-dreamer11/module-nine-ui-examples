//example 1 - Accordion
// import { Accordion } from './Accordion/Accordion';
// import './App.css';
// function App (){

//     return (
//         <div>
//             <Accordion/>
//         </div>
//     );
// }
// export default App;



//example 2 - Tabs
// import './App.css';
// import Tabs from './Tabs/Tabs';
// import TabInfoOne from './Tabs/TabInfoOne';
// import TabInfoTwo from './Tabs/TabInfoTwo';
// import TabInfoThree from './Tabs/TabInfoThree';
// import { useState } from 'react';

// function App (){

// const [activeTab, setActiveTab] = useState(0);
//     return (
//         <div>
//           <Tabs setActiveTab={setActiveTab}/>
//           {activeTab === 0 && <TabInfoOne/>}
//           {activeTab === 1 && <TabInfoTwo/>}
//           {activeTab === 2 && <TabInfoThree/>}
//         </div>
//     );
// }
// export default App;



//example 3 - Модальное окно
// import { useState } from 'react';
// import './App.css';
// import Modal from './Modal/Modal';
// import Content from './Modal/Content';

// function App (){
//  const [isOpen, setIsOpen] = useState (false)
//     return (
//         <div>
//             <button onClick={() => setIsOpen(true)}>Open modal</button>
//             {isOpen && 
//             <Modal setIsOpen={setIsOpen}>
//                 <Content setIsOpen={setIsOpen}/>
//             </Modal>
//             }
//         </div>
//     );
// }
// export default App;

//example 4 - LOADER

// import { useEffect, useState } from 'react';
// import './App.css';
// import LoaderPage from './Loader/LoaderPage';

// function App (){
// const [stateLoader, setStateLoader] = useState(true);
// useEffect (() => {
//     const timer = setTimeout(() => setStateLoader(false), 3000);
//     return () => clearTimeout(timer)
// }, [])
//     return (
//         <div>
//             { stateLoader && <LoaderPage/> }
//         </div>
//     );
// }
// export default App;



//example 5 - ALERT (https://sweetalert2.github.io/#download)
// import Swal from 'sweetalert2';
// import './App.css';

// function App (){
// const handleAlert = () => {
//     Swal.fire(
//         "The Internet?",
//         "That thing is still around?",
//         "question"
//       )
// }
//     return (
//       <button onClick={handleAlert}>Alert</button>
//     );
// }
// export default App;



//example 6 - динамический перевод текста (https://react.i18next.com/getting-started)

import { useTranslation } from 'react-i18next';
import './App.css';

function App (){
const { i18n, t } = useTranslation();
const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
}
    return (
        <div>
            <h1>{t('Welcome to React')}</h1>
            <button onClick={toggleLang}>
                {i18n.language === 'en' ? 'RU' : 'EN'}
            </button>
        </div>
    );
}
export default App;