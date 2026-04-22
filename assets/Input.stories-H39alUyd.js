import{j as r}from"./jsx-runtime-C69_ep2g.js";import{r as s}from"./iframe-B4kJE5yM.js";import{I as l}from"./Input-D1LwsmCd.js";import{P as f}from"./Popover-C4oIR-SC.js";import{I as o}from"./IconInfo-B2Xuahtu.js";import{I as h}from"./IconCalendarRight-CkHdLEep.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAsH4rhJ.js";import"./index-BULsaNJl.js";import"./ErrorMessage-BX1FFgws.js";import"./Text-CmvpJS3M.js";import"./helpers-Dko3gFqJ.js";import"./IconDynamicComponent-DS9xoDNJ.js";import"./Label-BWRMk2tf.js";import"./IconCheckmarkCircleFilled-DcDzymkg.js";import"./index-AboGxAif.js";import"./types-tju7SxMQ.js";import"./IconDismiss--09MBT45.js";import"./Tooltip-BALBxxc_.js";import"./Button-3eBlV2bd.js";import"./Link-gK0Os5SC.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
