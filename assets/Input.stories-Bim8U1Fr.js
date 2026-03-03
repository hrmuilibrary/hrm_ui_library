import{j as r}from"./jsx-runtime-Bnc0UR-1.js";import{r as s}from"./iframe-BZIurmLL.js";import{I as l}from"./Input-bp707dTV.js";import{P as f}from"./Popover-9xp8DBb4.js";import{I as o}from"./IconInfo-dD1cPBZG.js";import{I as h}from"./IconCalendarRight-CWcZNDia.js";import"./preload-helper-Dp1pzeXC.js";import"./index-UW4fake6.js";import"./index-BjEPROo0.js";import"./ErrorMessage-Dlhdv7jc.js";import"./Text-6FThkw6b.js";import"./helpers-OJly0rMZ.js";import"./IconDynamicComponent-BcyvGVX9.js";import"./Label-CWoh20B6.js";import"./IconCheckmarkCircleFilled-cNUvREwy.js";import"./index-DYDl_GcV.js";import"./types-CcV29qzA.js";import"./IconDismiss-C5rK1avL.js";import"./Tooltip-B2eS1kYw.js";import"./Button-BxhcRfmC.js";import"./Link-CKUqEncv.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
