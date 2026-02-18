import{j as r}from"./jsx-runtime-BoRs7bpF.js";import{r as s}from"./iframe-DcP3ocjm.js";import{I as l}from"./Input-DU-AVVC4.js";import{P as f}from"./Popover-lnDtQEyk.js";import{I as o}from"./IconInfo-BoE_bFRy.js";import{I as h}from"./IconCalendarRight-BoYJ7nKZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DVc7uGLu.js";import"./index-IaqrroEN.js";import"./ErrorMessage-WbykENU7.js";import"./Text-BTL3aUEW.js";import"./helpers-r_FRjBGO.js";import"./IconDynamicComponent-5hqTCx2R.js";import"./Label-BCMiKTVx.js";import"./IconCheckmarkCircleFilled-BTC06t0o.js";import"./ModalConfirmation-z0MUcuKe.js";import"./types-DeDHadih.js";import"./IconDismiss-BXVZllgV.js";import"./Tooltip-DXQclReM.js";import"./index-DYDl_GcV.js";import"./Button-MCqteBOR.js";import"./Link-zfTArDCr.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
