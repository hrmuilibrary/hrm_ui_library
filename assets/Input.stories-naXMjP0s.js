import{j as r}from"./jsx-runtime-Bx6nDAHA.js";import{r as o}from"./iframe-Djkj-SoK.js";import{I as l}from"./Input-B33H86vm.js";import{P as f}from"./Popover-C-aHFeXA.js";import{I as s}from"./IconInfo-Ba1SWCob.js";import{I as h}from"./IconCalendarRight-HOUFQzKc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wtwexwNo.js";import"./index-Do9ZPFz0.js";import"./ErrorMessage-DCj2_rv7.js";import"./Text-BA3vWX_v.js";import"./helpers-CYPKY3Aw.js";import"./IconDynamicComponent-Dr8dKZi3.js";import"./Label-BZ0ei0LK.js";import"./IconCheckmarkCircleFilled-DRxlUNW6.js";import"./ModalConfirmation-C0Wha-Vs.js";import"./AnimatePresenceWrapper-D2MPT7fJ.js";import"./types-DheOOxYx.js";import"./IconDismiss-D3OjUA0Z.js";import"./Tooltip-CD5NA4wG.js";import"./index-DYDl_GcV.js";import"./Button-DGtMkrFa.js";import"./Link-4gXTn82H.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["Input"];export{e as Input,$ as __namedExportsOrder,U as default};
