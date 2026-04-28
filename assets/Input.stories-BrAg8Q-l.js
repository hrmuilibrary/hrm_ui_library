import{j as r}from"./jsx-runtime-DECM8Th-.js";import{r as s}from"./iframe-D4q3VZ8i.js";import{I as l}from"./Input-DWQRA5cw.js";import{P as f}from"./Popover-CStAtv2L.js";import{I as o}from"./IconInfo-CxgBwp9W.js";import{I as h}from"./IconCalendarRight-BqDVMh64.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFxO2z6Z.js";import"./index-S5f01eIC.js";import"./ErrorMessage-D6PlMWdk.js";import"./Text-D54bL8z_.js";import"./helpers-B5A_5U5O.js";import"./IconDynamicComponent-DUDId7z0.js";import"./Label-BKSYI_4d.js";import"./IconCheckmarkCircleFilled-CZAmdhhp.js";import"./index-AboGxAif.js";import"./types-B3Pu1DcF.js";import"./IconDismiss-yzywtoDq.js";import"./Tooltip-CVnEYvk9.js";import"./Button-V3TRdi2d.js";import"./Link-Cs3rGHS3.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
