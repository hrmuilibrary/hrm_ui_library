import{j as r}from"./jsx-runtime-DjhKDfcS.js";import{r as o}from"./iframe-Ca8NBL8t.js";import{I as l}from"./Input-4qbE1_BO.js";import{P as f}from"./Popover-PsXMKWg2.js";import{I as s}from"./IconInfo-CfoGH7T0.js";import{I as h}from"./IconCalendarRight-DCln2XmG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B6e9iK9r.js";import"./index--uBjFNQu.js";import"./ErrorMessage-DrXwMpL9.js";import"./Text-BeiTwP0a.js";import"./helpers-BUdyV6kI.js";import"./IconDynamicComponent-D6D1t_ok.js";import"./Label-BqeyflH7.js";import"./IconCheckmarkCircleFilled-BiUqqnsF.js";import"./ModalConfirmation-3Hk9BaoB.js";import"./AnimatePresenceWrapper-V-N3iH_O.js";import"./types-B7eFcLlx.js";import"./IconDismiss-BwscnX4t.js";import"./Tooltip-DUIrJK35.js";import"./index-DYDl_GcV.js";import"./Button-C0O73vV5.js";import"./Link-PogqEF71.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
