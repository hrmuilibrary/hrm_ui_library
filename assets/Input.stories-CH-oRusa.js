import{j as r}from"./jsx-runtime-DQlmkMdY.js";import{r as s}from"./iframe-CmDa5GZP.js";import{I as l}from"./Input-3Um20dmt.js";import{P as f}from"./Popover-CuckBw2H.js";import{I as o}from"./IconInfo-2jJEvtoo.js";import{I as h}from"./IconCalendarRight-CNUN_oqK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bt98_JU4.js";import"./index-D0HdYkOZ.js";import"./ErrorMessage-BbD_a1-B.js";import"./Text-zjhjLRes.js";import"./helpers-DSCHDZV3.js";import"./IconDynamicComponent-BjJ3mRJP.js";import"./Label-2DKiy3Dq.js";import"./IconCheckmarkCircleFilled-CyHyJAyE.js";import"./index-AboGxAif.js";import"./types-BP9r0hDn.js";import"./IconDismiss-DMw4S2bm.js";import"./Tooltip-BtYOQ9vv.js";import"./Button-CK3wGp9n.js";import"./Link-CS0TNdkZ.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
