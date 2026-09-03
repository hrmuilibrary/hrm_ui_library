import{j as r}from"./jsx-runtime-CixmCXYB.js";import{r as s}from"./iframe-CdU7qALN.js";import{I as l}from"./Input-hMI3BL-k.js";import{P as f}from"./Popover-By9dlQl6.js";import{I as o}from"./IconInfo-Cq7cvRQG.js";import{I as h}from"./IconCalendarRight-CyiZiNcj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DhXq4NVr.js";import"./index-DE9b-KKH.js";import"./ErrorMessage-DGKMssSp.js";import"./Text-My9GXrOB.js";import"./helpers-Bn2gO0KC.js";import"./IconDynamicComponent-DBtKiA4p.js";import"./Label-CUSgKQks.js";import"./IconCheckmarkCircleFilled-DM7PpGXW.js";import"./index-AboGxAif.js";import"./types-BbW1ZtY6.js";import"./useOnOutsideClick-Ih5BL_8Y.js";import"./IconDismiss-BnCR8okq.js";import"./Tooltip-DTziODZP.js";import"./Button-DfJvPqhN.js";import"./Link-B6-6snZI.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
