import{j as r}from"./jsx-runtime-Kan_8xrb.js";import{r as s}from"./iframe-CoSMEsie.js";import{I as l}from"./Input-Cpd36inf.js";import{P as f}from"./Popover-CyxbECce.js";import{I as o}from"./IconInfo-BESVYdCT.js";import{I as h}from"./IconCalendarRight-D51xOcbb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNYT35Kh.js";import"./index-DV_X6Qry.js";import"./ErrorMessage-BUB1h4Qz.js";import"./Text-ojGX6TEE.js";import"./helpers-DP7MF_vJ.js";import"./IconDynamicComponent-CvKtQlK5.js";import"./Label-CB4NFAxp.js";import"./IconCheckmarkCircleFilled-Bec2ktyq.js";import"./index-AboGxAif.js";import"./types-DTFyRcpY.js";import"./useOnOutsideClick-Cc5bWvJv.js";import"./IconDismiss-Ca1esRKs.js";import"./Tooltip-BuAw_YGY.js";import"./Button-vf1Fpt4m.js";import"./Link-B1YppBy_.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
