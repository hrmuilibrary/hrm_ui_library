import{j as r}from"./jsx-runtime-BcRMXQyU.js";import{r as s}from"./iframe-BmPqtltp.js";import{I as l}from"./Input-UptuIXAn.js";import{P as f}from"./Popover-BZqhUUzn.js";import{I as o}from"./IconInfo-xonxLAw7.js";import{I as h}from"./IconCalendarRight-CF1ZN2SE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B02YPdu9.js";import"./index-B4zDiMuM.js";import"./ErrorMessage-CVfeRgq-.js";import"./Text-CEYn29Gb.js";import"./helpers-BSfmB4bo.js";import"./IconDynamicComponent-CRdYp_EF.js";import"./Label-Dz0ZVh8p.js";import"./IconCheckmarkCircleFilled-u6draltm.js";import"./index-AboGxAif.js";import"./types-DKrvdElD.js";import"./IconDismiss-BHf4nfNZ.js";import"./Tooltip-DCyFeIsx.js";import"./Button-DZDCfiqQ.js";import"./Link-CGW62roK.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
