import{j as r}from"./jsx-runtime-DL0a8zbO.js";import{r as s}from"./iframe-BVj2ick4.js";import{I as l}from"./Input-WA5Bu-7Y.js";import{P as f}from"./Popover-Dkg9qnLC.js";import{I as o}from"./IconInfo-FRTELuNe.js";import{I as h}from"./IconCalendarRight-C1USI5k3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8IOBBxJR.js";import"./index-k9maOmz4.js";import"./ErrorMessage-bkzzL1F8.js";import"./Text-CxAVKHxY.js";import"./helpers-DYfCdv0W.js";import"./IconDynamicComponent-gkrEy0R9.js";import"./Label-CpUk_1OC.js";import"./IconCheckmarkCircleFilled-Dxm7-3Mz.js";import"./index-AboGxAif.js";import"./types-CnM4o-t9.js";import"./IconDismiss-CQacfO5o.js";import"./Tooltip-rFaVHm7H.js";import"./Button-CXI3QB7B.js";import"./Link--Pj_5I4n.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
