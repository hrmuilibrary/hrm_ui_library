import{j as r}from"./jsx-runtime-DyIpy8Yc.js";import{r as s}from"./iframe-DZvB0qs9.js";import{I as l}from"./Input-DixQOrQ7.js";import{P as f}from"./Popover-B19GG2ff.js";import{I as o}from"./IconInfo-CZOArMLj.js";import{I as h}from"./IconCalendarRight-BYmRB2C2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPjGBHMf.js";import"./index-Cu6n4AVG.js";import"./ErrorMessage-D3x06M_y.js";import"./Text-CDQhGwat.js";import"./helpers-Dw1_b3or.js";import"./IconDynamicComponent-DLfUOzMP.js";import"./Label-F-T65YLK.js";import"./IconCheckmarkCircleFilled-Dgri_02z.js";import"./index-AboGxAif.js";import"./types-Be42hUOW.js";import"./IconDismiss-DZBXDVfp.js";import"./Tooltip-8P995OuL.js";import"./Button-CrlcZ-C4.js";import"./Link-B5MKs1lY.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
