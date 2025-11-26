import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import './index.css';
import GreetingElement from './myGreetingApp';
import GreetingElementwithProp from './myGreetingProp';
import AppColor from './AppbackgroundColor';
import AddNumbers from './AddNumbers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <GreetingElement />
      
      {/* Task 5: Greetings for 7 days */}
      <GreetingElementwithProp msg="Hi, it’s Monday!" />
      <GreetingElementwithProp msg="Hi, it’s Tuesday!" />
      <GreetingElementwithProp msg="Hi, it’s Wednesday!" />
      <GreetingElementwithProp msg="Hi, it’s Thursday!" />
      <GreetingElementwithProp msg="Hi, it’s Friday!" />
      <GreetingElementwithProp msg="Hi, it’s Saturday!" />
      <GreetingElementwithProp msg="Hi, it’s Sunday!" />

      {/* Task 6: Background color buttons */}
      <AppColor heading="First element" lbl="Name:" color="green" />
      <AppColor heading="Second element" lbl="Name:" color="blue" />
      <AppColor heading="Third element" lbl="Name:" color="yellow" />

      {/* Task 8: Add numbers */}
      <AddNumbers num1={5} num2={10} />
    </>
  </React.StrictMode>
);

reportWebVitals();
