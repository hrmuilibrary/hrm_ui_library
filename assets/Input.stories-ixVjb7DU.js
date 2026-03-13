import{j as r}from"./jsx-runtime-Deq49PtD.js";import{r as s}from"./iframe-VY33bBZC.js";import{I as l}from"./Input-uLT8_lPj.js";import{P as f}from"./Popover-DOZOXEcl.js";import{I as o}from"./IconInfo-CneAHasc.js";import{I as h}from"./IconCalendarRight-YmD23hgp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yOqzteEH.js";import"./index-C0x--rAf.js";import"./ErrorMessage-ON8HmtLS.js";import"./Text-CEs2hxxX.js";import"./helpers-CBoNSfUf.js";import"./IconDynamicComponent-Dylt8NvR.js";import"./Label-Cd3q7H6-.js";import"./IconCheckmarkCircleFilled-DKewkGKu.js";import"./index-DYDl_GcV.js";import"./types-CxPK9San.js";import"./IconDismiss-CJgyTioh.js";import"./Tooltip-H4K3uVVd.js";import"./Button-Ce8-J-1s.js";import"./Link-Bvase3iq.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
