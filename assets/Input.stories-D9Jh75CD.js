import{j as r}from"./jsx-runtime-C8sgSdL0.js";import{r as o}from"./iframe-DsH-SPzn.js";import{I as l}from"./Input-CbRebLcO.js";import{P as f}from"./Popover-BNm6DqpC.js";import{I as s}from"./IconInfo-CfskD1sJ.js";import{I as h}from"./IconCalendarRight-hfG207HL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-e6VgsW-l.js";import"./index-BC3c56jS.js";import"./ErrorMessage-D5gQiOf-.js";import"./Text-D_7Coc_Y.js";import"./helpers-Dv8ujeJH.js";import"./IconDynamicComponent-C42rKCUY.js";import"./Label-Dudw98xF.js";import"./IconCheckmarkCircleFilled-BekwnfMB.js";import"./ModalConfirmation-CoMDJR1i.js";import"./AnimatePresenceWrapper-CnmRckcy.js";import"./types-CQEiptzx.js";import"./IconDismiss-I4TQh8L-.js";import"./Tooltip-DN9r8x2b.js";import"./index-DYDl_GcV.js";import"./Button-BCSyN4Bt.js";import"./Link-D8jSWKLa.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
