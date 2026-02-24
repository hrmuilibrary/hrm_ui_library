import{j as r}from"./jsx-runtime-Dad0Pt4t.js";import{r as s}from"./iframe-CmGV6xoK.js";import{I as l}from"./Input-tWpmSUV7.js";import{P as f}from"./Popover-BGNtKZ-u.js";import{I as o}from"./IconInfo-CK6vxSv8.js";import{I as h}from"./IconCalendarRight-Dsr131A_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4bjqLnt.js";import"./index-CmL5Y0ic.js";import"./ErrorMessage-BRMog3E2.js";import"./Text-DP1ffZD3.js";import"./helpers-BuzDaASc.js";import"./IconDynamicComponent-w65LUGiU.js";import"./Label-D6_6GgrR.js";import"./IconCheckmarkCircleFilled-_9kol15F.js";import"./index-DYDl_GcV.js";import"./types-CFsqkMqD.js";import"./IconDismiss-CAV4zZ-5.js";import"./Tooltip-B8X2zOYN.js";import"./Button-DbBZD8p2.js";import"./Link-BEDsvzFi.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
