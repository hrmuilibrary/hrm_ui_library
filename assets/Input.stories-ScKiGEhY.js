import{j as r}from"./jsx-runtime-m3b_6OT1.js";import{r as s}from"./iframe-oM5UKC75.js";import{I as l}from"./Input-DmpM9a71.js";import{P as f}from"./Popover-D4hZr9nz.js";import{I as o}from"./IconInfo-Dj6n6JmB.js";import{I as h}from"./IconCalendarRight-DTJ8hGCV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFLm7QBz.js";import"./index-vglmsqVc.js";import"./ErrorMessage-DAY-EUCN.js";import"./Text-1CEUeWW4.js";import"./helpers-BKxxssDc.js";import"./IconDynamicComponent-BHdqEJBx.js";import"./Label-62bGwlHv.js";import"./IconCheckmarkCircleFilled-U1ZPM-LT.js";import"./index-DYDl_GcV.js";import"./types-BjN0AaN3.js";import"./IconDismiss-WzKnNALp.js";import"./Tooltip-CYG0JmLY.js";import"./Button-DRl_tK4r.js";import"./Link-Aa0-TXF1.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
