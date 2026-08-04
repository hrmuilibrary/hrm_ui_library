import{j as r}from"./jsx-runtime-jQRlJpq_.js";import{r as s}from"./iframe-IekmBLgU.js";import{I as l}from"./Input-BumMH9FS.js";import{P as f}from"./Popover-Dd2cB0Xp.js";import{I as o}from"./IconInfo-BT9_gA0R.js";import{I as h}from"./IconCalendarRight-D--zyp0G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-z1LVnpwX.js";import"./index-BOjMRMBe.js";import"./ErrorMessage-B-5yUWUJ.js";import"./Text-DDH3SuXY.js";import"./helpers-CyjX8nkc.js";import"./IconDynamicComponent-CGHa6Li-.js";import"./Label-B2H_cz-p.js";import"./IconCheckmarkCircleFilled-mtkGZX8B.js";import"./index-AboGxAif.js";import"./types-Bkil3lR1.js";import"./useOnOutsideClick-DMAjmAhg.js";import"./IconDismiss-DR6bLB6k.js";import"./Tooltip-D1GLgbID.js";import"./Button-M3xTZvml.js";import"./Link-DDgCPqn6.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const U=["Input"];export{e as Input,U as __namedExportsOrder,O as default};
