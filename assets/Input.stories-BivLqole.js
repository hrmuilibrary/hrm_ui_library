import{j as r}from"./jsx-runtime-D8Aae-ON.js";import{r as o}from"./iframe-B81V5N6F.js";import{I as l}from"./Input-DLkMR4XC.js";import{P as f}from"./Popover-DiC5FQ_W.js";import{I as s}from"./IconInfo-7omR3vNU.js";import{I as h}from"./IconCalendarRight-CqtA8i8d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkXCiaA0.js";import"./index-CVLUGf02.js";import"./ErrorMessage-DGYZ5GRk.js";import"./Text-CFXTsjcN.js";import"./helpers-B_1klYl0.js";import"./IconDynamicComponent-B8iT7Oal.js";import"./Label-4tt216Fv.js";import"./IconCheckmarkCircleFilled-ee5SrYue.js";import"./ModalConfirmation-DFbHssQv.js";import"./AnimatePresenceWrapper-Cu27zq0p.js";import"./types-BSP-PZIs.js";import"./IconDismiss-C_Gh5jDC.js";import"./Tooltip-C6M5Mvwj.js";import"./index-DYDl_GcV.js";import"./Button-BGtuaa-S.js";import"./Link-DH9fwRXX.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
