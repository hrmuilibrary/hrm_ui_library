import{j as d}from"./jsx-runtime-0kNS9Jws.js";import{r as c}from"./iframe-s9_6tLSy.js";import{C as s}from"./Checkbox-DLQmrabL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQ0oY7V7.js";import"./Popover-Dwxz_IfO.js";import"./index-AboGxAif.js";import"./types-C8uUUCvy.js";import"./helpers-DtgE-dps.js";import"./IconDismiss-BzUYgj_f.js";import"./Tooltip-ChZDZUfQ.js";import"./Text-BEWV9w1W.js";import"./index-DjjxkGhf.js";import"./Button-CaK8eNhk.js";import"./Link-MaCy-3O0.js";import"./IconInfo-DbvCGNEQ.js";import"./IconDynamicComponent-DCWISmBl.js";const T={title:"Checkbox",component:s,argTypes:{}},m=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=m.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const A=["Checkbox"];export{e as Checkbox,A as __namedExportsOrder,T as default};
