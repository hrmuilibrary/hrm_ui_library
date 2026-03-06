import{j as r}from"./jsx-runtime-jw5g45zA.js";import{r as s}from"./iframe-UoLQ1U6T.js";import{I as l}from"./Input-BUfUBQ-v.js";import{P as f}from"./Popover-Bh2uwmHW.js";import{I as o}from"./IconInfo-CuytgPQY.js";import{I as h}from"./IconCalendarRight-OXKohflf.js";import"./preload-helper-Dp1pzeXC.js";import"./index--cQE6fIL.js";import"./index-Bz6UqtXA.js";import"./ErrorMessage-BQAVRK0H.js";import"./Text-DTV5SZt-.js";import"./helpers-DE0tJbma.js";import"./IconDynamicComponent-BJHzMVTt.js";import"./Label-Cpb9f27w.js";import"./IconCheckmarkCircleFilled-DH4m_2gO.js";import"./index-DYDl_GcV.js";import"./types-Rtio56Mf.js";import"./IconDismiss-C21Ux5Ke.js";import"./Tooltip-CGWifcg5.js";import"./Button-BGsQyanI.js";import"./Link-Ce1-gkYz.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
