import{j as r}from"./jsx-runtime-f4W9F4p-.js";import{r as s}from"./iframe-BKYlKyI2.js";import{I as l}from"./Input-ybJ6p6WF.js";import{P as f}from"./Popover-DgTz9DGJ.js";import{I as o}from"./IconInfo-DYN2DwjR.js";import{I as h}from"./IconCalendarRight-HS1e3bhX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYoGDo1s.js";import"./index-DrPTCK4H.js";import"./ErrorMessage-SoAMfuiJ.js";import"./Text-BaBfS14w.js";import"./helpers-BrDgkfbG.js";import"./IconDynamicComponent-7RVpD5Sh.js";import"./Label-DudouxP4.js";import"./IconCheckmarkCircleFilled-DAl-XcUG.js";import"./index-AboGxAif.js";import"./types-By8Py-lx.js";import"./IconDismiss-C8N8hd4z.js";import"./Tooltip-DCgOp9oq.js";import"./Button-DC7__7_H.js";import"./Link-DIcCdqcp.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Input"];export{e as Input,O as __namedExportsOrder,N as default};
