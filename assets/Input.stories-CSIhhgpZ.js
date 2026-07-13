import{j as r}from"./jsx-runtime-DU-5m7M4.js";import{r as s}from"./iframe-DcyHMP67.js";import{I as l}from"./Input-J7y1og-R.js";import{P as f}from"./Popover-B8_2nuJG.js";import{I as o}from"./IconInfo-qRIkGL5b.js";import{I as h}from"./IconCalendarRight-CdEae7JV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D514jjvC.js";import"./index-CZ0OzgI-.js";import"./ErrorMessage-BTIir6Rg.js";import"./Text-B4Sig7fT.js";import"./helpers-COUuCC3n.js";import"./IconDynamicComponent-D4bJvOF9.js";import"./Label-ofGXODwp.js";import"./IconCheckmarkCircleFilled-CipuMoSp.js";import"./index-AboGxAif.js";import"./types-COg7qn9V.js";import"./IconDismiss-BilNhMTz.js";import"./Tooltip-B2KAd-sg.js";import"./Button-B8G1N1IN.js";import"./Link-DI8K6FhR.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
