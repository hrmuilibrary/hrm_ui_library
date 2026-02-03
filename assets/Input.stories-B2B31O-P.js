import{j as r}from"./jsx-runtime-CO_4fShW.js";import{r as o}from"./iframe-DQqQBVxO.js";import{I as l}from"./Input-CrJdjlWu.js";import{P as f}from"./Popover-4LHSdqRd.js";import{I as s}from"./IconInfo-t4HqX6jR.js";import{I as h}from"./IconCalendarRight-D-Mid0J4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PL4QBPBs.js";import"./index-BjDT6sgC.js";import"./ErrorMessage-DTromK9_.js";import"./Text-CkXkE3Bq.js";import"./helpers-uRsMBXJT.js";import"./IconDynamicComponent-B891EqQ-.js";import"./Label-B-YUXvnx.js";import"./IconCheckmarkCircleFilled-BqhIIHve.js";import"./ModalConfirmation-BYxEjt5v.js";import"./AnimatePresenceWrapper-D5w8xp_Y.js";import"./types-DyQXMykX.js";import"./IconDismiss-BU3cpEAw.js";import"./Tooltip-Cp0tUxh0.js";import"./index-DYDl_GcV.js";import"./Button-CBwOmmgy.js";import"./Link-bEJsmf9L.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value);
    setIsErrorVisible(true);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Input {...args} error={!value && isErrorVisible ? 'requeired field' : ''} currentValue={value} handleChange={changeHandler} />
    </div>;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["Input"];export{e as Input,$ as __namedExportsOrder,U as default};
